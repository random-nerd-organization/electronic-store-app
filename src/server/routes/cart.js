const express = require('express');

const { sendEmailMerchant, sendEmailBuyer } = require('../managers/cart-manager');
const { logOrderInfo } = require('../loggers/cart-logger');
const { logError } = require('../loggers/error-logger');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { orderInfo, userInfo } = req.body;

    const infoMerchant = await sendEmailMerchant(orderInfo, userInfo);
    const infoBuyer = await sendEmailBuyer(userInfo.name, userInfo.email);

    logOrderInfo(infoMerchant, infoBuyer);

    res.status(200).send({
      message: 'You finish the order, we will contact you soon for further actions!',
      data: userInfo
    });
  } catch (err) {
    logError(err);
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;



