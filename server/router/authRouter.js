import express from 'express'

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000,
  message: 'Too many requests from this IP, please try again after 15 minutes',
})

import { login, register, updateUser } from '../controllers/authController.js'
const router = express.Router()

router.route('/login').post(apiLimiter, login)
router.route('/register').post(apiLimiter, register)
router.route('/updateUser').patch(apiLimiter, updateUser)

export default router
