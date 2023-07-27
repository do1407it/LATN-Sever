import mongoose from 'mongoose'

const ReviewSchema = mongoose.Schema(
   {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      user: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'User',
      },
   },
   {
      timestamps: true,
   }
)

export const ProductSchema = mongoose.Schema(
   {
      name: { type: String, required: true, unique: true },
      image: { type: String, required: true },
      description: { type: String, required: true },
      reviews: [ReviewSchema],
      slug: {
         type: String,
         unique: true,
         lowercase: true,
         // required: true,
      },
      category: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
         ref: 'Category',
      },
      rating: { type: Number, required: true, default: 0 },
      numReviews: { type: Number, required: true, default: 0 },
      price: { type: Number, required: true, default: 0 },
      countInStock: { type: Number, required: true, default: 0 }, //version old

      // countInStock: {
      //    sizes: [Number],
      //    colors: [String],
      //    quantities: {
      //       type: Map,
      //       of: {
      //          type: Map,
      //          of: Number,
      //       },
      //    },
      //    totalCountInStock: { type: Number, required: true, default: 0 },
      // },
   },
   {
      timestamps: true,
   }
)

const Product = mongoose.model('Product', ProductSchema)
export const Review = mongoose.model('Review', ReviewSchema)

export default Product
