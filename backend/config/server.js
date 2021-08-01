module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8082),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'e3e0c7bf16b0d50e668ae71aa5a71a57'),
    },
  },
});
