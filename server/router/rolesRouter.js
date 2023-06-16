import express from 'express'
import {
  deleteRole,
  getRole,
  getRoles,
  newRole,
  updateRole,
} from '../controllers/rolesController.js'
const router = express.Router()

router.route('/').get(getRoles)
router.route('/new').post(newRole)
router.route('/update').patch(updateRole)
router.route('/delete/:role').delete(deleteRole)
router.route('/singleRole/:email').get(getRole)

export default router
