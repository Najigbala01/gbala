const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/gbala_investments', { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);

app.use(express.static('public'));
app.use(express.json());

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post('/checkout', (req, res) => {
    const cartItems = req.body.cart;
    // Here, process the checkout logic
    res.json({ message: 'Order placed successfully' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
