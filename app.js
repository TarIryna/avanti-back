const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const path = require('path');

const usersRouter = require('./routes/api/users');
const productsRouter = require('./routes/api/products');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/', (req, res) => {
  res.end(`
  <div>Avantishoes</div>
  <form action="/" method="POST" encType="multipart/form-data">
        <input type="file" name="file" accept="*.csv" /><br/><br/>
        <input type="submit" value="Upload" />
  </form>
  `)
});
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
