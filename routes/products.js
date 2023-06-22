import express from 'express'
import {
   getProducts,
   getProductById,
   createProductReview,
   deleteProduct,
   createProduct,
   updateProduct,
   getProductsCategory,
} from '../controllers/product.js'
import protect, { admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/products', getProducts)
router.get('/products/:keyword', getProducts)
router.get('/products/category/:category', getProductsCategory)
router.get('/product/:id', getProductById)

// REVIEWS
router.post('/:id/reviews', protect, createProductReview)

// CRUD
router.post('/products', protect, admin, createProduct)
router.delete('/:id', protect, admin, deleteProduct)
router.put('/:id', protect, admin, updateProduct)

export default router
