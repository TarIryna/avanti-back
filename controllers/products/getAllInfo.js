const {Product } = require('../../models')
const {getSortingName } = require('../../helpers/sorting')

const getAllInfo = async (req, res) => {
  const { page = 1, limit = 21, sort="-price" } = req.query
  const parametr = getSortingName(sort)
  console.log(parametr)
  const products = await Product.find().
  sort(parametr).
  limit(limit * 1).
  skip((page-1) * limit)
  
  const qty = await Product.find();
  res.json({
    status: 'success',
    code: 200,
    data: {
      result: qty.length, products,
    },
  })
}

module.exports = getAllInfo;
