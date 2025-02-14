const express = require('express');
const app = express();
require('dotenv').config();
require('./db');
const PORT = process.env.PORT || 8081;
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
app.use(express.json());

app.get('/', (req, res) => {
    res.send('products api running new deploy');
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});
// /products
app.use('/products', productRoutes);
// /users
app.use('/users', userRoutes);

app.listen(8081, () => {
    console.log('Server is listenin on PORT :' + PORT);
})