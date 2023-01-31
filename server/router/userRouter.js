import express from 'express'
import { getUsers, updateUserRole } from '../controllers/userController.js'
const router = express.Router()

router.route('/').get(getUsers)
router.route('/updateUserRole').patch(updateUserRole)
export default router
