import express from 'express'
import {
  deleteRole,
  getRoles,
  newRole,
  updateRole,
} from '../controllers/rolesController.js'
const router = express.Router()

router.route('/').get(getRoles)
router.route('/new').post(newRole)
router.route('/update').patch(updateRole)
router.route('/delete/:role').delete(deleteRole)

export default router
