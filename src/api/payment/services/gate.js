const ZarinpalCheckout = require('zarinpal-checkout');

module.exports = {
  async createPayment(amount) {
    const amountInTomans = parseInt(amount, 10) ; // converting amount to integer and multiplying by 10 since Zarinpal API expects amount in rials
    const zarinpal = ZarinpalCheckout.create('78cc6609-80cc-40ce-a346-bdf51e6fbb26', false); // Replace with your own merchant ID
    try {
      const response = await zarinpal.PaymentRequest({
        Method: 'GET',
        CallbackURL: 'http://localhost:1337/api/payment/verify?amount='+amountInTomans,
        Amount:amountInTomans.toString(), // converting back to string after converting to rials
        Description: 'A Payment',
      });

      if (response.status === 100) {
        return response;
      }
    } catch (err) {
      console.error(err);
      return err;
    }
  },


  async verifyPayment(amount, authority) {
    const zarinpal = ZarinpalCheckout.create('78cc6609-80cc-40ce-a346-bdf51e6fbb26', false); // Replace with your own merchant ID
    const amountInTomans = parseInt(amount, 10);

    zarinpal.PaymentVerification({
      Amount: amountInTomans.toString(), // In Tomans
      Authority: authority,
    }).then(response => {
      if (response.status !== 100) {
        return null
      } else {
        return verification.RefID;
      }
    }).catch(err => {
      console.error(err);
      throw new Error('Payment verification failed');
    });
  },
};