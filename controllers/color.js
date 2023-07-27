import asyncHandler from 'express-async-handler'
import Color from '../models/Color.js'

export const getAllColor = asyncHandler(async (req, res) => {
   const color = await Color.find({})
   res.json(color)
})

export const getColorId = asyncHandler(async (req, res) => {
   const color = await Color.findById(req.params.id)
   if (color) {
      res.json(color)
   } else {
      res.status(404)
      throw new Error('Color not found')
   }
})

export const deleteColor = asyncHandler(async (req, res) => {
   const color = await Color.findById(req.params.id)
   if (color) {
      await color.remove()
      res.json({ message: 'Color removed' })
   } else {
      res.status(404)
      throw new Error('Color not found')
   }
})

export const updateColor = asyncHandler(async (req, res) => {
   const { name } = req.body
   const apiColor = await Color.findById(req.params.id)
   if (apiColor) {
      apiColor.name = name || apiColor.name
      const updatedColor = await apiColor.save()
      res.json(updatedColor)
   } else {
      res.status(404)
      throw new Error('Color not found')
   }
})

export const createColor = asyncHandler(async (req, res) => {
   const { name, color } = req.body

   const colorExist = await Color.findOne({ color })
   if (colorExist) {
      res.status(400)
      throw new Error('Color name already exists')
   }

   const apiColor = await Color.create({
      name,
      color,
   })

   if (apiColor) {
      res.status(201).json(apiColor)
   } else {
      res.status(400)
      throw new Error('Invalid color data')
   }
})
