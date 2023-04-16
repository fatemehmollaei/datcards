
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
    provider: env('EMAIL_PROVIDER'),
    providerOptions: {
      host: env('EMAIL_SMTP_HOST'),
      port: env('EMAIL_SMTP_PORT'),
      auth: {
        user: env('EMAIL_SMTP_USER'),
        pass: env('EMAIL_SMTP_PASS'),
      },
    },
    settings: {
      defaultFrom: env('EMAIL_ADDRESS_FROM'),
      defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
    },
  },
});
