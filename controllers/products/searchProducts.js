// const {Product } = require('../../models')
import {search} from '../../services/products';

const searchProduct = async (req, res) => {
    const { page = 1, limit = 10, query } = req.query
    const skip = (Number(page) - 1) * Number(limit)
    const name = query
    const products = await search(query, skip, Number(limit), name)
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: products.length, products 
      },
    })
  }
//   const { page = 1, limit = 20, query } = req.query
// //   const skip = (Number(page) - 1) * Number(limit)
//   const products = await Product.find().
//   limit(limit * 1).
//   skip((page-1) * limit);
//   res.json({
//     status: 'success',
//     code: 200,
//     data: {
//       result: products.length, products,
//     },
//   })
// }

module.exports = searchProduct;
