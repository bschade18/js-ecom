const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const dotenv = require('dotenv');

const authRouter = require('./routes/admin/auth');
const adminProductsRouter = require('./routes/admin/products');
const productsRouter = require('./routes/products');
const cartsRouter = require('./routes/carts');

dotenv.config({ path: './config/config.env' });

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ['asldkjvhkjfgh'],
  })
);

app.use(authRouter);
app.use(adminProductsRouter);
app.use(productsRouter);
app.use(cartsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log('server is running...'));
