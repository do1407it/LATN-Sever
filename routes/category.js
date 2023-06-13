import express from 'express'
import { getCategories, getCategoryById } from '../controllers/category.js'
import protect, { admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/category', protect, admin, getCategories)
router.get('/category/:id', protect, admin, getCategoryById)

export default router
