import express from 'express'
import { getProducts, getProductById, createProductReview } from '../controllers/product.js'
import protect from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/products', getProducts)
router.get('/product/:id', getProductById)
router.get('/products/:keyword', getProducts)
router.post('/:id/reviews', protect, createProductReview)

export default router
