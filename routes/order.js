import express from 'express'
import { orderItems, getOrderById, updateOrderToPaid } from '../controllers/order.js'
import protect from '../middleware/AuthMiddleware.js'

const router = express.Router()

router.post('/', protect, orderItems)
router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)

export default router
