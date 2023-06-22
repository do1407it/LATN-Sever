import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         unique: true,
         trim: true,
         minlength: 5,
         maxlength: 20,
         validate: [
            {
               validator: function (value) {
                  return /^[^\s]+$/.test(value) // Kiểm tra xem giá trị không có khoảng cách giữa các ký tự
               },
               message: 'Name must not contain spaces.',
            },
            {
               validator: function (value) {
                  return /^[\w\s]+$/.test(value) // Kiểm tra xem giá trị chỉ chứa các ký tự chữ cái, số và khoảng trắng
               },
               message: 'Name must not contain special characters or accents.',
            },
            {
               validator: function (value) {
                  const firstChar = value.charAt(0)
                  return /[a-zA-Z]/.test(firstChar) // Kiểm tra xem giá trị đầu tiên là một chữ cái
               },
               message: 'First character of name must be a letter.',
            },
         ],
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

      phone: {
         type: String,
         required: [true, 'Phone is required.'],
         unique: true,
         trim: true,
         minlength: 10,
         maxlength: 11,
         validate: [
            {
               validator: function (value) {
                  return /^[0-9]+$/.test(value) // Kiểm tra xem giá trị chỉ chứa các ký tự số
               },
               message: 'Phone must not contain special characters or accents.',
            },
            {
               validator: function (value) {
                  const firstChar = value.charAt(0)
                  return /[0-9]/.test(firstChar) // Kiểm tra xem giá trị đầu tiên là một số
               },
               message: 'First character of phone must be a number.',
            },
         ],
      },
      image: {
         type: String,
         default: '',
      },
      password: {
         type: String,
         required: true,
         minlength: 6,
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
