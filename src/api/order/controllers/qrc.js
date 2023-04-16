const QRCode = require('qrcode');

const QRCodeReadr = require('qrcode-reader');
const Jimp = require('jimp');

async function generateQRCode(ctx) {
  const orderId = ctx.params.id;
  const order = await strapi.query('api::order.order').findOne({ id: orderId });

  if (!order) {
    return ctx.throw(404, 'Order not found');
  }

  const qrcodeData = { id: order.id };
  const qrcodeUrl = await QRCode.toDataURL(JSON.stringify(qrcodeData));

  // Return QR code URL to user
  return { qrcodeUrl };
}

async function retrieveOrderFromQRCode(ctx) {
  const qrcodeData = ctx.request.body.qrcodeData;

  if (!qrcodeData) {
    return ctx.throw(400, 'Invalid qrcodeData');
  }
  const base64Data = qrcodeData.replace(/^data:image\/png;base64,/, '');
  const buffer = await  Buffer.from(base64Data, 'base64');

//   // Load the buffer into a Jimp image
 const image = await Jimp.read(buffer);




//  // Decode the QR code


  // Decode the QR code using qrcode-reader library
  const orderMain=[]
  const qr = new QRCodeReadr();

  const result = await new Promise((resolve, reject) => {
    qr.callback = function (err, value) {
      if (err) {
        reject(err);
        return;
      }

      orderId = JSON.parse(value.result).id;
      resolve();
    };

    qr.decode(image.bitmap);
  });


  if (!orderId) {
    return ctx.throw(404, 'Order not found');
  }

  const order = await strapi.query('api::order.order').findOne({ id: orderId });

  if (!order) {
    return ctx.throw(404, 'Order not found');
  }

  return order;
}


module.exports = {
  generateQRCode,
  retrieveOrderFromQRCode,
};
