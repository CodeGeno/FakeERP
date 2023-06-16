import express from 'express'
import {
  createEmployee,
  deleteEmployee,
  getAllEmployees,
  updateEmployee,
} from '../controllers/employeeController.js'

const router = express.Router()

router.route('/createEmployee').post(createEmployee)
router.route('/getEmployees').get(getAllEmployees)
router.route('/updateEmployee').patch(updateEmployee)
router.route('/deleteEmployee/:id').delete(deleteEmployee)
export default router
