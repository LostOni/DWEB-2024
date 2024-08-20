const path = require('path');

const rootDir = require('../utils/path')

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res) => {
    console.log('En la página de productos');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    // res.send('<form action="/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
})

router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;
