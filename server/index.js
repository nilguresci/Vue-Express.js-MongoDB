const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db/database');

const productRouter = require('./routes/products');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const products = require('./routes/products');

app.use('/products', products);
app.use(productRouter);
const port = process.env.PORT || 3535;

app.listen(port, () => { console.log(`Server ${port} portunda çalışıyor.`) });