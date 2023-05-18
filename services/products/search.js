const {Product } = require('../../models')

const search = async (name, skip, limit) => {
  const products = await Product.find({ name }, '', {
    skip,
    limit,
  })
  return products
}