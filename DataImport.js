import express from 'express'
import asyncHandler from 'express-async-handler'
import User from './models/User.js'
import users from './data/User.js'
import Product from './models/Product.js'
import products from './data/Products.js'
import Category from './models/Category.js'
import categories from './data/Categories.js'

const ImportData = express.Router()

ImportData.post(
   '/user',
   asyncHandler(async (req, res) => {
      await User.remove({})
      const importUser = await User.insertMany(users)
      res.send({ importUser })
   })
)

ImportData.post(
   '/products',
   asyncHandler(async (req, res) => {
      await Product.remove({})
      const importProduct = await Product.insertMany(products)
      res.send({ importProduct })
   })
)

ImportData.post(
   '/category',
   asyncHandler(async (req, res) => {
      await Category.remove({})
      const importCategory = await Category.insertMany(categories)
      res.send({ importCategory })
   })
)

export default ImportData
