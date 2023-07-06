import asyncHandler from 'express-async-handler'
import Coupon from '../models/Coupon.js'

export const getCoupon = asyncHandler(async (req, res) => {
   try {
      const coupon = await Coupon.find({})
      res.json(coupon)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

export const getCouponById = asyncHandler(async (req, res) => {
   try {
      const coupon = await Coupon.findById(req.params.id)
      if (coupon) {
         res.json(coupon)
      } else {
         res.status(404).json({ message: 'Coupon not found' })
      }
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})
export const deleteCoupon = asyncHandler(async (req, res) => {
   try {
      const coupon = await Coupon.findById(req.params.id)
      if (coupon) {
         await coupon.remove()
         res.json({ message: 'Coupon removed' })
      } else {
         res.status(404).json({ message: 'Coupon not found' })
      }
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

export const updateCoupon = asyncHandler(async (req, res) => {
   try {
      const { code, discount, expirationDate, countInStock, description } = req.body
      const coupon = await Coupon.findById(req.params.id)
      if (coupon) {
         coupon.code = code || coupon.code
         coupon.discount = discount || coupon.discount
         coupon.expirationDate = expirationDate || coupon.expirationDate
         coupon.countInStock = countInStock || coupon.countInStock
         coupon.description = description || coupon.description
         const updatedCoupon = await coupon.save()
         res.json(updatedCoupon)
      } else {
         res.status(404).json({ message: 'Coupon not found' })
      }
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

export const createCoupon = asyncHandler(async (req, res) => {
   try {
      const { code, discount, expirationDate, countInStock, description } = req.body
      const coupon = new Coupon({
         code,
         discount,
         expirationDate,
         countInStock,
         description,
      })
      const createdCoupon = await coupon.save()
      res.status(201).json(createdCoupon)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})
