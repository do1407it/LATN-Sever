import mongoose from 'mongoose'

const ColorSchema = mongoose.Schema(
   {
      name: { type: String, required: true, unique: true },
      color: { type: String, required: true, unique: true },
   },
   {
      timestamps: true,
   }
)

const Color = mongoose.model('Color', ColorSchema)

export default Color
