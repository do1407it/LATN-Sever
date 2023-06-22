import Product from '../models/Product.js'
import asyncHandler from 'express-async-handler'
import slugify from 'slugify'
import cloudinary from 'cloudinary'

cloudinary.config({
   cloud_name: 'dnxjbypnj',
   api_key: '988959716681975',
   api_secret: 'mPhT8ZQuna4At9RtRxx8VokXEDU',
})
const opts = {
   overwrite: true,
   invalidate: true,
   resource_type: 'auto',
}

// PRODUCTS
export const getProducts = asyncHandler(async (req, res) => {
   const pageSize = 6
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
      .populate('category', 'title published')

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
   const product = await Product.findById(req.params.id).populate('category', 'title published')
   if (product) res.json(product)
   else res.status(404).json({ message: 'Product not found' })
})

export const getProductsCategory = asyncHandler(async (req, res) => {
   const pageSize = 6
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
      category: req.params.category,
   })
      .skip(pageSize * (page - 1))
      .limit(pageSize)
      .populate('category', 'title published')

   res.json(
      products && {
         products,
         page,
         keyword,
         pages: Math.ceil(count / pageSize),
      }
   )
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

export const createProduct = asyncHandler(async (req, res) => {
   const fileStr = req.body.image
   const uploadResponse = await cloudinary.uploader.upload(fileStr, opts)
   const { name, slug, price, description, image, countInStock, category, color, size } = req.body

   const productExist = await Product.findOne({ name })
   if (productExist) {
      res.status(400)
      throw new Error('Product name already exists')
   } else {
      if (req.body.name) {
         req.body.slug = slugify(req.body.name)
      }
      const product = new Product({
         name,
         slug,
         price,
         description,
         option: {
            color,
            size,
         },
         category,
         image: uploadResponse.secure_url,
         countInStock,
         user: req.user._id,
      })
      if (product) {
         if (req.body.name) {
            req.body.slug = slugify(req.body.name)
         }
         const createdProduct = await product.save()

         res.status(201).json(createdProduct)
      } else {
         res.status(400).json(createdProduct)
         throw new Error('Invalid product data')
      }
   }
})

export const deleteProduct = asyncHandler(async (req, res) => {
   const product = await Product.findById(req.params.id)

   if (product) {
      await product.remove()
      res.json({ message: 'Product removed' })
   } else {
      res.status(404).json({ message: 'Product not found' })
   }
})

export const updateProduct = asyncHandler(async (req, res) => {
   const { name, price, description, image, countInStock, category, color, size } = req.body
   const product = await Product.findById(req.params.id)
   if (product) {
      product.name = name || product.name
      product.price = price || product.price
      product.description = description || product.description
      product.image = image || product.image
      product.countInStock = countInStock || product.countInStock
      product.category = category || product.category
      product.color = color || product.color
      product.size = size || product.size

      const updatedProduct = await product.save()
      res.json(updatedProduct)
   } else {
      res.status(404)
      throw new Error('Product Not Found')
   }
})
