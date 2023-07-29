import express from 'express'
import { getAllSize, getSizeId, deleteSize, updateSize, createSize } from '../controllers/size.js'
import protect, { admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/size', protect, admin, getAllSize)
router.get('/size/:id', protect, admin, getSizeId)

router.delete('/size/:id', protect, admin, deleteSize)
router.put('/size/:id', protect, admin, updateSize)
router.post('/size', protect, admin, createSize)

export default router
