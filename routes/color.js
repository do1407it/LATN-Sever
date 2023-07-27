import express from 'express'
import {
   getAllColor,
   getColorId,
   deleteColor,
   updateColor,
   createColor,
} from '../controllers/color.js'
import protect, { admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.get('/color', protect, admin, getAllColor)
router.get('/color/:id', protect, admin, getColorId)

router.delete('/color/:id', protect, admin, deleteColor)
router.put('/color/:id', protect, admin, updateColor)
router.post('/color', protect, admin, createColor)

export default router
