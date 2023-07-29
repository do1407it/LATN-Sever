import mongoose from 'mongoose'

const SizeSchema = mongoose.Schema(
   {
      size: { type: String, required: true, unique: true },
   },
   {
      timestamps: true,
   }
)

const Size = mongoose.model('Size', SizeSchema)

export default Size
