import express from 'express'
import protect, { admin } from '../middleware/AuthMiddleware.js'
import { login, profile, register, updateProfile, getUsers } from '../controllers/user.js'

const router = express.Router()

router.post('/', register)
router.get('/', protect, admin, getUsers)
router.post('/login', login)
router.get('/profile', protect, profile)
router.put('/profile', protect, updateProfile)

export default router
