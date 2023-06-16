import express from 'express'
import {
  addProduct,
  allProducts,
  getSingleProduct,
  productImages,
} from '../controllers/productController.js'

import { updateProduct } from '../controllers/productControll.js'
import { undoProductModification } from '../controllers/productControll.js'

const router = express.Router()

router.route('/images').post(productImages)
router.route('/addProduct').post(addProduct)
router.route('/allProducts').get(allProducts)
router.route('/updateProduct/:id').patch(updateProduct)
router.route('/getProduct/:id').get(undoProductModification)
router.route('/Product/:id').get(getSingleProduct)
export default router
