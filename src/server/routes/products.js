const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await Product.find().exec();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <h1>Hello this is products component!</h1>
            <p>Data Length: ${data.length}</p>
            <p>Data: ${data}</p>
        `);
        res.end();
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});

module.exports = router;
