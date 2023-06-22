import User from '../models/User.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import protect from '../middleware/AuthMiddleware.js'
import cloudinary from 'cloudinary'

cloudinary.config({
   cloud_name: 'dnxjbypnj',
   api_key: '988959716681975',
   api_secret: 'mPhT8ZQuna4At9RtRxx8VokXEDU',
})
const opts = {
   overwrite: true,
   invalidate: true,
   resource_type: 'auto',
}
// LOGIN
export const login = asyncHandler(async (req, res) => {
   const { email, password } = req.body
   const user = await User.findOne({ email })

   if (user && (await user.matchPassword(password))) {
      res.json({
         _id: user._id,
         name: user.name,
         email: user.email,
         phone: user.phone,
         image: user.image,
         isAdmin: user.isAdmin,
         token: generateToken(user._id),
         createdAt: user.createdAt,
      })
   } else {
      res.status(401)
      throw new Error('Invalid email or password')
   }
})

// RESGISTER
export const register = asyncHandler(async (req, res) => {
   const { name, email, phone, password } = req.body
   const userExists = await User.findOne({ email })

   if (userExists) {
      res.status(400)
      throw new Error('User already exists')
   }

   const user = await User.create({
      name,
      email,
      phone,
      password,
   })
   if (user) {
      res.status(201).json({
         _id: user._id,
         name: user.name,
         email: user.email,
         phone: user.phone,
         isAdmin: user.isAdmin,
         password: user.password,
         token: generateToken(user._id),
         createdAt: user.createdAt,
      })
   } else {
      res.status(400)
      throw new Error('Invalid user data')
   }
})

// PROFILE
export const profile = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id).select('-password')
   if (user) {
      res.json(user)
   } else {
      res.status(404)
      throw new Error('User not found')
   }
})

// UPDATE PROFILE
export const updateProfile = asyncHandler(async (req, res) => {
   const fileStr = req.body.image
   const uploadResponse = await cloudinary.uploader.upload(fileStr, opts)
   const user = await User.findById(req.user._id)

   if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.phone = req.body.phone || user.phone
      user.image = uploadResponse.secure_url || user.image

      const updatedUser = await user.save()
      

      if (req.body.password) {
         user.password = req.body.password
         // user.password = user.password
      }

      res.json({
         _id: updatedUser._id,
         name: updatedUser.name,
         email: updatedUser.email,
         phone: updatedUser.phone,
         image: updatedUser.image,
         profilePic: updatedUser.profilePic,
         isAdmin: updatedUser.isAdmin,
         token: generateToken(updatedUser._id),
         createdAt: updatedUser.createdAt,
      })
   } else {
      res.status(404)
      throw new Error('User not found')
   }
})

// GET ALL USERS
export const getUsers = asyncHandler(async (req, res) => {
   const users = await User.find({}).select('-password')
   res.json(users)
})
