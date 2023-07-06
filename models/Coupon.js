import mongoose from 'mongoose'

const couponSchema = mongoose.Schema(
   {
      code: { type: String, unique: true, required: true },
      discount: { type: Number, required: true },
      expirationDate: { type: Date, required: true },
      countInStock: { type: Number, required: true },
      description: { type: String, required: true },
   },
   {
      timestamps: true,
   }
)

const Coupon = mongoose.model('Coupon', couponSchema)

export default Coupon
