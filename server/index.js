import 'express-async-errors'
import express from 'express'
import bodyParser from 'body-parser'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
//middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import authenticateUser from './middleware/auth.js'

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

//routers
import authRouter from './router/authRouter.js'
import rolesRouter from './router/rolesRouter.js'
import userRouter from './router/userRouter.js'
import companyRouter from './router/companyRouter.js'

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: process.env.DATABASE_PASSWORD,
  database: 'FAKEDATA',
})

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/roles', rolesRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/company', companyRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.listen(3001, () => {
  console.log('Running on port 3001')
})
