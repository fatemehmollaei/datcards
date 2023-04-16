
module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/payment/request',
      handler: 'gate.request',
    },
    {
      method: 'GET',
      path: '/payment/verify',
      handler: 'gate.verify',
    },
  ],
};
