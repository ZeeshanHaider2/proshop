import express from 'express';
import products from './data/products.js';

const port = 5000;

const app = express();

app.get('/', (req, res) => {
 res.send('testing API...');
});

app.get('/api/products', (req, res) => { //route for all products
    res.json(products);
   });

app.get('/api/products/:id', (req, res) => { //route for single product
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
   });


app.listen(port, () => console.log(`server is running on port ${port}`));

