import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
   {
      title: {
         type: String,
         unique: true,
         required: true,
         minLength: 3,
         maxLength: 20,
      },
      published: { type: Boolean, default: true },
      description: { type: String, required: true },
   },
   {
      timestamps: true,
   }
)

const Category = mongoose.model('Category', categorySchema)
export default Category
