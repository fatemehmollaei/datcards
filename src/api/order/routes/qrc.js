module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/orders/:id/qrcode',
      handler: 'qrc.generateQRCode',
    },
    {
      method: 'POST',
      path: '/orders/qrcode',
      handler: 'qrc.retrieveOrderFromQRCode',
    },
  ],
};
