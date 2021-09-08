module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'a0169f89655e5cd2a1d8749d166d6c4c'),
    },
    watchIgnoreFiles: [
      '**/frontend/**',
    ]
  },
});
