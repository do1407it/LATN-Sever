import Product from '../models/Product.js'
import asyncHandler from 'express-async-handler'

// PRODUCTS
export const getProducts = asyncHandler(async (req, res) => {
   const pageSize = 3
   const page = Number(req.query.pageNumber) || 1

   const keyword = req.query.keyword || ''

   // Create a regular expression with case-insensitive flag
   const regex = new RegExp(keyword.trim(), 'i')
   const count = await Product.countDocuments({
      name: {
         $regex: regex,
      },
   })
   const products = await Product.find({
      name: {
         $regex: regex,
      },
   })
      .skip(pageSize * (page - 1))
      .limit(pageSize)

   res.json(
      products && {
         products,
         page,
         keyword,
         pages: Math.ceil(count / pageSize),
      }
   )
})

export const getProductById = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id)
   if (product) res.json(product)
   else res.status(404).json({ message: 'Product not found' })
})

export const createProductReview = asyncHandler(async (req, res) => {
   const { rating, comment } = req.body
   const product = await Product.findById(req.params.id)

   if (product) {
      const alreadyReviewed = product.reviews.find(
         (r) => r.user.toString() === req.user._id.toString()
      )

      if (alreadyReviewed) {
         res.status(400).json({ message: 'Product already reviewed' })
      } else {
         const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
         }
         product.reviews.push(review)
         product.numReviews = product.reviews.length

         product.rating =
            product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

         await product.save()
         res.status(201).json({ message: 'Review added' })
      }
   } else {
      res.status(404).json({ message: 'Product not found' })
   }
})
