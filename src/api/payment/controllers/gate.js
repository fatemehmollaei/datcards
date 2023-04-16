const { createCoreController } = require('@strapi/strapi').factories;
const paymentsService = require('../services/gate');

module.exports = createCoreController('api::payment.payment', ({ strapi }) => ({
  async request(ctx) {
    try {
      const amount = ctx.request.body.amount;
      const order_id = ctx.request.body.order_id;
      const res = await paymentsService.createPayment(amount);

      const paymentResult = await strapi.query("api::payment.payment").findOne({
        where: { order_id: order_id},
      });
      if(res){
        if(!paymentResult){
          const data = {
            'amount': amount,
            'order_id':order_id,
            'authority':res.authority,
            'url':res.url
          };

          const result = await strapi.query('api::payment.payment').create({
            data : data
          });

          ctx.send({
            data: result,
            status:200
          });

        }else if(paymentResult.status1!='succcess'){
          const result = await strapi.query("api::payment.payment").update({
            where: { order_id: order_id},
            data: {
              'authority':res.authority,
              'url':res.url
            },
          });
          ctx.send({
            data: result,
            status:200
          });
        }else{
          ctx.send({
            data: paymentResult,
            status:200
          });
        }

      }else{
        ctx.send({
          data: 'درگاه پرداخت در دسترس نیست',
          status:200
        });
      }





    } catch (error) {
      console.error(error);
    }
  },

  async verify(ctx) {
    try {
      const authority  = ctx.request.query.Authority;
      const amount = ctx.request.query.amount;
      console.log(authority,amount)


      const refId = await paymentsService.verifyPayment(amount, authority);


      if(refId && refId !== undefined && refId !== null){
        const result = await strapi.query("api::payment.payment").update({
          where: { authority: authority},
          data: {
            status: 'succcess',
          },
        });

         ctx.send({
          data: result,
          status:200
        });

      }else{
        const result = await strapi.query("api::payment.payment").update({
          where: { authority: authority},
          data: {
            status: 'faild',
          },
        });

         ctx.send({
          data: result,
          status:-51
        });
      }

    } catch (error) {
      console.error(error);
      // Handle the error
    }
  },
}));
