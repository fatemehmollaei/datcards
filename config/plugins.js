
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
  email: {
    enabled: true,
    provider: 'nodemailer',
    providerOptions: {
      host:'smtp.datcards.ir',
      port: '587',
      auth: {
        user: 'no-reply@datcards.ir',
        pass: 'G;3;b2k8a2YWsM',
      },
    },
    settings: {
      defaultFrom:'no-reply@datcards.ir',
      defaultReplyTo: 'no-reply@datcards.ir',
    },
  },
});
