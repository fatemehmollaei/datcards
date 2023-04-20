
module.exports = ({ env })=>({
  upload: {
    config: {
      sizeLimit: 250 * 1024 * 1024, // 256mb in bytes,
      providerOptions: {
        localServer: {
          maxage: 300000
        },
      },
    },
  },
  // email: {
  //   config: {
  //     provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
  //     providerOptions: {
  //       apiKey:'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',
  //     },
  //     settings: {
  //       defaultFrom: 'no-reply@datcrds.ir',
  //       defaultReplyTo: 'no-reply@datcrds.ir',
  //       testAddress: 'fatemeh.mollaei.m@gmail.com',
  //     },
  //   },
  // },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host:'mail.datcards.ir',
        port: '465',
        auth: {
                user: 'no-reply@datcards.ir',
                pass: 'G;3;b2k8a2YWsM',
              },
        // ... any custom nodemailer options
      },
      settings: {
        defaultFrom: 'no-reply@datcards.ir',
        defaultReplyTo: 'no-reply@datcards.ir',
      },
    },
  },
  // email: {
  //   config: {
  //   enabled: true,
  //   provider: 'nodemailer',
  //   providerOptions: {
  //     host:'smtp.datcards.ir',
  //     port: '587',
  //     auth: {
  //       user: 'no-reply@datcards.ir',
  //       pass: 'G;3;b2k8a2YWsM',
  //     },
  //   },
  //   settings: {
  //     defaultFrom:'no-reply@datcards.ir',
  //     defaultReplyTo: 'no-reply@datcards.ir',
  //   },},
  // },
});
