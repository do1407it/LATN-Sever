import asyncHandler from 'express-async-handler'
import Category from '../models/Category.js'
import Product from '../models/Product.js'

export const getCategories = asyncHandler(async (req, res) => {
   const categories = await Category.find().sort({ createdAt: -1 })
   res.json(categories)
})

export const getCategoryById = asyncHandler(async (req, res) => {
   try {
      const category = await Category.findById(req.params.id)
      res.json(category)
   } catch (error) {
      res.status(404).json({ message: 'Category not found' })
   }
})

export const createCategory = asyncHandler(async (req, res) => {
   try {
      const { title, description } = req.body
      const category = await Category.create({ title, description })
      res.status(201).json(category)
   } catch (err) {
      res.status(400).json(err)
   }
})

export const deleteCategory = asyncHandler(async (req, res) => {
   try {
      const category = await Category.findById(req.params.id)
      if (category) {
         await Product.deleteMany({ category: category._id })
         await category.remove()
         res.json({ message: 'Category removed' })
      } else {
         res.status(404)
         throw new Error('Category not found')
      }
   } catch (err) {
      res.status(400).json(err)
   }
})

export const updateCategory = asyncHandler(async (req, res) => {
   // delete category relationship with products

   const { title, published, description } = req.body
   const category = await Category.findById(req.params.id)

   if (category) {
      category.title = title || category.title
      category.published = published || category.published
      category.description = description || category.description

      const updatedCategory = await category.save()
      res.json(updatedCategory)
   } else {
      res.status(404)
      throw new Error('Category not found')
   }
})
