const {Product } = require('../../models')

const addProduct = async (req, res) => {
  const { code, name, category, season, view, description, price, sizes } = req.body
 
  const product = new Product({code, name, category, season, view, description, price, sizes})
  await product.save()
  
  res.status(201).json({
    status: 'success',
    data: {
      product,
    },
  })
  }

module.exports = addProduct;
