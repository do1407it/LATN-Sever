import asyncHandler from 'express-async-handler'
import Order from '../models/Order.js'
import Product from '../models/Product.js'
import Coupon from '../models/Coupon.js'

import nodeMailer from 'nodemailer'

export const postOrderItems = asyncHandler(async (req, res) => {
   try {
      // count in Stock discount
      const {
         orderItems,
         coupon,
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
         coupon,
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

      if (coupon) {
         const couponUsed = await Coupon.findById(coupon)
         couponUsed.countInStock -= 1
         couponUsed.save()
      }

      const createdOrder = await order.save()

      res.status(201).json(createdOrder)
   } catch (error) {
      res.status(500).json({ message: error.message })
   }
})

export const getOrderById = asyncHandler(async (req, res) => {
   const order = await Order.findById(req.params.id).populate('user', 'name email phone')

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

export const getAllOrderByUser = asyncHandler(async (req, res) => {
   const orders = await Order.find({ user: req.user._id }).populate('user', 'name email')
   res.json(orders)
})

export const chartOrder = asyncHandler(async (req, res) => {
   const fromDate = new Date(req.query.fromDate)
   const toDate = new Date(req.query.toDate)
   const orders = await Order.find({}).populate('user', 'name email')

   const filteredOrders = orders.filter((order) => {
      const orderDate = new Date(order.createdAt)
      return orderDate >= fromDate && orderDate <= toDate
   })

   res.status(200).json(filteredOrders.length)
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

export const sendMail = asyncHandler(async (req, res) => {
   const transporter = nodeMailer.createTransport({
      service: 'Gmail',
      auth: {
         user: process.env.EMAIL,
         pass: process.env.PASSWORD,
      },
   })

   const orderItemsHTML = req.body.order.orderItems
      .map(
         (orderItem) => `
      <tr>
         <td>Name: ${orderItem.name}</td>
         <td>Quantity: ${orderItem.qty}</td>
         <td>Price:$${orderItem.price}</td>
      </tr>
   `
      )
      .join('')

   const mainOptions = {
      from: 'dotran',
      to: req.body.email,
      subject: 'Xác nhận đơn hàng',
      text: `You received a message from ${req.body.name}`,
      html: `
         <h2>Thank you for your order</h2>
         <h3>Order Details:</h3>
         <table style="border-collapse: collapse;">
            <thead>
               <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
               </tr>
            </thead>
            <tbody>
               ${orderItemsHTML}
               <tr>
                  <td>Tax: $${req.body.order?.taxPrice}</td>
                  <td>Total: $${req.body.order?.totalPrice}</td>
               </tr>
            </tbody>
         </table>
      `,
   }

   try {
      const info = await transporter.sendMail(mainOptions)
      res.status(200).json({ message: 'Email sent: ' + info.response })
   } catch (err) {
      res.status(400).json({ message: 'Email not sent: ' + err })
   }
})
