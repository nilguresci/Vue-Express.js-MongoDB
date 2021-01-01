const express = require('express');

const Product = require('../models/product');

const router = express.Router();

//Get products
router.get('/', async(req, res) => {
    const products = await Product.find();
    res.send(products) //200-ok
        //res.send('merhaba');
});

//get products with id
router.get('/:id', async(req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id })
        res.send(product) //200-ok
    } catch {
        res.status(404)
        res.send({ error: "Product doesn't exist!" })
    }
})

//add products-post
router.post('/', async(req, res) => {
    const product = new Product(req.body);
    try {
        await product.save()
        res.status(201).send({ product }) //201-created
    } catch (e) {
        res.status(400).send(e)
    }
});

// update products -request
router.patch('/:id', async(req, res) => {
    try {
        const product = await Product.findOne({ _id: req.params.id });

        if (req.body.productName) { product.productName = req.body.productName; }

        if (req.body.productNo) {
            product.productNo = req.body.productNo;
        }

        if (req.body.password) {
            product.password = req.body.password;
        }

        if (req.body.email) {
            product.email = req.body.email;
        }

        await product.save();
        res.send(product); //200-ok
    } catch (error) {
        res.status(404)
        res.send({ error: "Product doesn't exist!" })
    }
});

//delete request
router.delete('/delete/:id', async(req, res) => {
    try {
        await Product.deleteOne({ _id: req.params.id });
        res.status(204).send(); //204-no content
    } catch (error) {
        res.status(404)
        res.send({ error: "Product doesn't exist!" })
    }
})


module.exports = router;