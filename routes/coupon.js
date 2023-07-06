import express from 'express'
import {
   getCoupon,
   getCouponById,
   deleteCoupon,
   updateCoupon,
   createCoupon,
} from '../controllers/coupon.js'
import protect, { admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/coupon', getCoupon)
router.get('/coupon/:id', getCouponById)

router.delete('/coupon/:id', protect, admin, deleteCoupon)
router.put('/coupon/:id', protect, admin, updateCoupon)
router.post('/coupon', protect, admin, createCoupon)

export default router
