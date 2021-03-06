const mongose = require('mongoose');
const validator = require('validator');

const productSchema = mongose.Schema({
    productName: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    productNo: {
        type: String,
        unique: true,
        required: true,
        maxlength: 10,
        trim: true
    },
    productCategory: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    brandName: {
        type: String,
        required: true,
        trim: true
    },
    sellerName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain password')
            }
        }
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minlenght: 7,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    productImage: {
        type: String,
        required: false,
        trim: true
    },
    price: {
        type: Number,
        required: false,
        trim: true
    }
});

const Product = mongose.model('Product', productSchema);
module.exports = Product;