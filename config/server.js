// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   url: env('BACKEND_URL_LOCAL'),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port:  7225,
  url: 'https://app.datcards.ir',
  app: {
    keys: ['cURpc6rxVehm8fOKccX2nA==','XP2wz3YeOiLuZ0VYImFKeA==','uy9WbZrWPSqWMmetXPnS0Q==','nLMU5mojuWW6Cyz8AA0/kA==']
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false)
  }
});
