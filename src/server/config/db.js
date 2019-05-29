const mongoose = require('mongoose');

const Product = require('../models/Product');

module.exports = config => {
  try {
    mongoose.connect(`${config.dbPath}`, {
      promiseLibrary: global.Promise,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    const db = mongoose.connection;
    db.once('open', async err => {
      if (err) throw err;
      await Product.seedInitialProducts();
      console.log('Database is on!');
    });
    db.on('error', reason => {
      console.log(reason);
    });
  } catch (error) {
    console.log(`Mongoose can't connect, error message: ${error.message}`);
  }
};
