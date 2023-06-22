import express from 'express'
import {
   postOrderItems,
   getOrderById,
   updateOrderToPaid,
   getAllOrders,
   updateDeliverToPaid,
} from '../controllers/order.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', protect, postOrderItems) 
router.get('/', protect, getAllOrders)
router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.put('/:id/deliver', protect, updateDeliverToPaid)

export default router
