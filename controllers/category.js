import asyncHandler from 'express-async-handler'
import Category from '../models/Category.js'

export const getCategories = asyncHandler(async (req, res) => {
   const categories = await Category.find()
   res.json(categories)
})

export const getCategoryById = asyncHandler(async (req, res) => {
   const category = await Category.findById(req.params.id)
   if (category) {
      res.json(category)
   } else {
      res.status(404)
      throw new Error('Category not found')
   }
})
