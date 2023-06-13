import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User.js'

const protect = asyncHandler(async (req, res, next) => {
   let token
   const autherization = req.headers.authorization

   if (autherization && autherization.startsWith('Bearer')) {
      try {
         token = autherization.split(' ')[1]
         const decoded = jwt.verify(token, process.env.JWT_SECRET)
         req.user = await User.findById(decoded.id).select('-password')
         next()
      } catch (error) {
         console.error(error)
         res.status(401)
         throw new Error('Not authorized, token failed')
      }
   }

   if (!token) {
      res.status(401)
      throw new Error('Not authorized, no token')
   }
})
export const admin = (req, res, next) => {
   if (req.user && req.user.isAdmin) {
      next()
   } else {
      res.status(401)
      throw new Error('Not authorized as an ADMIN')
   }
}

export default protect
