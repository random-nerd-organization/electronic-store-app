const express = require('express');

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log({ name, email, phone, message });
  res.send(200, {
    message:
      'You finish the order, we will contact you soon for further actions!',
    data: { name, email, phone, message }
  });
});

module.exports = router;
