import express from 'express'
import asyncHandler from 'express-async-handler'
import User from './models/User.js'
import users from './data/User.js'
import Product from './models/Product.js'
import products from './data/Products.js'

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

export default ImportData
