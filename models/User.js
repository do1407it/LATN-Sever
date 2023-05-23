import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
         trim: true,
         minlength: 6,
         maxlength: 32,
      },
      email: {
         type: String,
         required: [true, 'Email is required.'],
         unique: true,
         trim: true,
         lowercase: true,
         minlength: 6,
         maxlength: 32,
      },
      password: {
         type: String,
         required: true,
         minlength: 6,
         maxlength: 32,
      },
      isAdmin: {
         type: Boolean,
         required: true,
         default: false,
      },
   },
   { timestamps: true }
)

// login match password
UserSchema.methods.matchPassword = async function (enterPassword) {
   return await bcrypt.compare(enterPassword, this.password)
}

// encrypt password
UserSchema.pre('save', async function (next) {
   if (!this.isModified('password')) {
      next()
   }
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', UserSchema)
export default User
