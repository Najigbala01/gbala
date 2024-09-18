const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gbala_investments', { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);

const products = [
    { name: 'Material A', price: 100 },
    { name: 'Material B', price: 150 },
    { name: 'Material C', price: 200 }
];

Product.insertMany(products).then(() => {
    console.log('Products added');
    mongoose.connection.close();
});
