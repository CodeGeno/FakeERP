import express from 'express'
import {
  createCompany,
  getAllCompanies,
  getOffices,
  getSingleCompany,
  updateOffices,
} from '../controllers/companyController.js'

const router = express.Router()

router.route('/getSingleCompany/:id').get(getSingleCompany)
router.route('/create').post(createCompany)
router.route('/getCompanies').get(getAllCompanies)
router.route('/getOffices/:companyName').get(getOffices)
router.route('/updateCompany').patch(updateOffices)
export default router
