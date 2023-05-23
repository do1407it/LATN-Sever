import express from 'express'
import { login, profile, register } from '../controllers/user.js'
import protect from '../middleware/AuthMiddleware.js'
const router = express.Router()

router.post('/', register)
router.post('/login', login)
router.get('/profile', protect, profile)

export default router
