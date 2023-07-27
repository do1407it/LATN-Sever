import express from 'express'
import asyncHandler from 'express-async-handler'
import User from './models/User.js'
import users from './data/User.js'
import Product from './models/Product.js'
import products from './data/Products.js'
import Category from './models/Category.js'
import categories from './data/Categories.js'
import Coupon from './models/Coupon.js'
import coupon from './data/Coupon.js'
import Color from './models/Color.js'
import colors from './data/Color.js'

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

ImportData.post(
   '/coupon',
   asyncHandler(async (req, res) => {
      await Coupon.remove({})
      const importCoupon = await Coupon.insertMany(coupon)
      res.send({ importCoupon })
   })
)

ImportData.post(
   '/color',
   asyncHandler(async (req, res) => {
      await Color.remove({})
      const importColor = await Color.insertMany(colors)
      res.send({ importColor })
   })
)

export default ImportData
