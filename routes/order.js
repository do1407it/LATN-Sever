import express from 'express'
import { orderItems } from '../controllers/order.js'
import protect from '../middleware/AuthMiddleware.js'

const router = express.Router()

router.post('/', protect, orderItems)

export default router
