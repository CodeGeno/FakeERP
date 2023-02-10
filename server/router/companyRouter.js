import express from 'express'
import {
  createCompany,
  getAllCompaniesNames,
  getOffices,
  updateOffices,
} from '../controllers/companyController.js'

const router = express.Router()

router.route('/create').post(createCompany)
router.route('/getCompanyNames').get(getAllCompaniesNames)
router.route('/getOffices/:companyName').get(getOffices)
router.route('/updateOffices').patch(updateOffices)
export default router
