const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const app = express();

const PORT = 5000;

const DUMMY_PRODUCTS = [{"id": "1", "title": "banana", "price": 2}]; // not a database, just some in-memory storage for now

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});


//API
app.get('/products', (req, res, next) => {
  res.status(200).json({ products: DUMMY_PRODUCTS });
});

app.post('/product', (req, res, next) => {
  const { title, price } = req.body;
  console.log("title: "+title+", price: "+price);

  if (!title || title.trim().length === 0 || !price || price <= 0) {
    return res.status(422).json({
      message: 'Invalid input, please enter a valid title and price.'
    });
  }

  const createdProduct = {
    id: uuid.v4(),
    title,
    price
  };

  console.log("createdProduct: "+createdProduct)

  DUMMY_PRODUCTS.push(createdProduct);

  res.status(201).json({ message: 'Created new product.', product: createdProduct });
});

app.listen(PORT); // start Node + Express server on port 10080
