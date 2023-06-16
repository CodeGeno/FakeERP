import express from 'express'
import {
  getInventory,
  updateInventory,
} from '../controllers/inventoryController.js'

const router = express.Router()

router.route('/getInventory').get(getInventory)
router.route('/updateInventory').patch(updateInventory)
export default router
