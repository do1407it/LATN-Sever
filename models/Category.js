import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
   {
      title: { type: String, required: [true, 'Please add a type name !'] },
      published: { type: Boolean, default: true },
      description: { type: String, required: [true, 'Please add a description !'] },
   },
   {
      timestamps: true,
   }
)

const Category = mongoose.model('Category', categorySchema)
export default Category
