import express from 'express'
import {
  createOrder,
  getOrderData,
  getOrdersData,
  updateOrder,
} from '../controllers/ordersController.js'

const router = express.Router()

router.route('/create').post(createOrder)
router.route('/getOrders').get(getOrdersData)
router.route('/update').patch(updateOrder)
router.route('/getOrder/:id').get(getOrderData)
export default router
