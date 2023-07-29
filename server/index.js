import 'express-async-errors'
import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
dotenv.config()
//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import { checkRights } from './middleware/checkRights.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(path.resolve(__dirname, './../client/build')))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

//routers
import authRouter from './router/authRouter.js'
import rolesRouter from './router/rolesRouter.js'
import userRouter from './router/userRouter.js'
import companyRouter from './router/companyRouter.js'
import productRouter from './router/productRouter.js'
import employeeRouter from './router/employeeRouter.js'
import inventoryRouter from './router/inventoryRouter.js'
import ordersRouter from './router/ordersRouter.js'

export const db = mysql.createPool({
  host: 'localhost',
  user: process.env.DATABASE_USERNAME,
  socketPath: '/var/run/mysqld/mysqld.sock',
  password: process.env.DATABASE_PASSWORD,
  database: 'FakeERP',
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/roles', checkRights('manageRights'), rolesRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/company', checkRights('manageClients'), companyRouter)
app.use('/api/v1/product', checkRights('manageProducts'), productRouter)
app.use('/api/v1/employee', checkRights('employees'), employeeRouter)
app.use('/api/v1/inventory', checkRights('inventory'), inventoryRouter)
app.use('/api/v1/orders', checkRights('orders'), ordersRouter)

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './../client/build', 'index.html'))
})
//routers

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware)

const PORT = 5003

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})
