module.exports = {
  development: {
    port: process.env.PORT || 5000,
    dbPath:
      'mongodb+srv://admin:admin@electronic-store-3pxth.mongodb.net/test?retryWrites=true'
  },
  production: {
    port: process.env.PORT || 5000,
    dbPath:
      'mongodb+srv://admin:admin@electronic-store-3pxth.mongodb.net/test?retryWrites=true'
  }
};
