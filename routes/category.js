import express from 'express'
import {
   getCategories,
   getCategoryById,
   deleteCategory,
   updateCategory,
   createCategory,
} from '../controllers/category.js'
import protect, { admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/category', getCategories)
router.get('/category/:id', protect, admin, getCategoryById)

router.delete('/category/:id', protect, admin, deleteCategory)
router.put('/category/:id', protect, admin, updateCategory)
router.post('/category', protect, admin, createCategory)

export default router
