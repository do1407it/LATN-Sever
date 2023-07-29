import express from 'express'
import {
   postOrderItems,
   getOrderById,
   updateOrderToPaid,
   getAllOrders,
   updateDeliverToPaid,
   sendMail,
   chartOrder,
   getAllOrderByUser,
} from '../controllers/order.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', protect, postOrderItems)

router.get('/', protect, getAllOrders)
router.get('/profile', protect, getAllOrderByUser)

router.get('/thongke', chartOrder)

router.get('/:id', protect, getOrderById)
router.put('/:id/pay', protect, updateOrderToPaid)
router.put('/:id/deliver', protect, updateDeliverToPaid)

router.post('/sendmail', sendMail)

export default router
