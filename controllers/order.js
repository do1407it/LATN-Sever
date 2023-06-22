import asyncHandler from 'express-async-handler'
import Order from '../models/Order.js'
import Product from '../models/Product.js'

export const postOrderItems = asyncHandler(async (req, res) => {
   try {
      // count in Stock and create order items
      const {
         orderItems,
         shippingAddress,
         paymentMethod,
         itemsPrice,
         taxPrice,
         shippingPrice,
         totalPrice,
      } = req.body

      if (orderItems && orderItems.length === 0) {
         res.status(400)
         throw new Error('No order items')
         return
      }

      const order = new Order({
         orderItems,
         user: req.user._id,
         shippingAddress,
         paymentMethod,
         itemsPrice,
         taxPrice,
         shippingPrice,
         totalPrice,
      })

      orderItems.forEach((element) => {
         Product.findById(element.product, (err, product) => {
            if (err) {
               res.status(400).json({ message: 'Product not found' })
            }
            product.countInStock -= element.qty
            product.save()
         })
      })

      const createdOrder = await order.save()

      res.status(201).json(createdOrder)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

export const getOrderById = asyncHandler(async (req, res) => {
   const order = await Order.findById(req.params.id).populate('user', 'name email')

   if (order) {
      res.json(order)
   } else {
      res.status(404)
      throw new Error('Order not found')
   }
})

export const updateOrderToPaid = asyncHandler(async (req, res) => {
   const order = await Order.findById(req.params.id)

   if (order) {
      order.isPaid = true
      order.paidAt = Date.now()
      order.paymentResult = {
         id: req.body.id,
         status: req.body.status,
         update_time: req.body.update_time,
         email_address: req.body.payer.email_address,
      }

      const updatedOrder = await order.save()

      res.json(updatedOrder)
   } else {
      res.status(404)
      throw new Error('Order not found')
   }
})

export const getAllOrders = asyncHandler(async (req, res) => {
   const orders = await Order.find({}).populate('user', 'name email')
   res.json(orders)
})

export const updateDeliverToPaid = asyncHandler(async (req, res) => {
   const order = await Order.findById(req.params.id)

   if (order) {
      order.isDelivered = true
      order.deliveredAt = Date.now()

      const updatedOrder = await order.save()

      res.json(updatedOrder)
   } else {
      res.status(404)
      throw new Error('Order not found')
   }
})
