import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectMongo from './config/MongoDB.js'
import ImportData from './DataImport.js'
import ProductRouter from './routes/products.js'
import UserRouter from './routes/user.js'
import OrderRouter from './routes/order.js'
import CategoryRouter from './routes/category.js'
import CouponRouter from './routes/coupon.js'
import ColorRouter from './routes/color.js'
import { errorHandler, notFound } from './middleware/Error.js'

dotenv.config()
connectMongo()
const app = express()

app.use(express.json())
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(
   cors({
      origin: 'http://localhost:3000',
      credentials: true,
   })
)

/* ROUTES */
app.use('/api/import', ImportData)
app.use('/api', ProductRouter)
app.use('/api/users', UserRouter)
app.use('/api', CategoryRouter)
app.use('/api', CouponRouter)
app.use('/api', ColorRouter)
app.use('/api/orders', OrderRouter)
app.get('/api/config/paypal', (req, res) => {
   res.send(process.env.PAYPAL_CLIENT_ID)
})
app.get('/test', (req, res) => {
   res.send('Hello World!')
})

// Error Handling
app.use(notFound)
app.use(errorHandler)

// PORT
const PORT = 9005
app.listen(PORT, () => {
   console.log(`App listening at http://localhost:${PORT}`)
})
