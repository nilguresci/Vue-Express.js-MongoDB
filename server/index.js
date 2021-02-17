const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db/database');


const app = express();

app.use(bodyParser.json());
app.use(cors());

const products = require('./routes/products');
app.use(express.static("./server/assets"));
app.use('/products', products);
const port = process.env.PORT || 3535;

app.listen(port, () => { console.log(`Server başlatıldı => http://localhost:${port}/`) });