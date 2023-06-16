import multer from 'multer'
import fs from 'fs'
import { BadRequestError } from '../errors/index.js'
import { StatusCodes } from 'http-status-codes'
import { QueryResult } from '../utils/DbQuery.js'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const directory = `public/uploads/images/${req.body.directory}/`
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true })
    }
    cb(null, directory)
  },
  filename: function (req, file, cb) {
    const type = file.mimetype.split('image/')[1]
    cb(
      null,
      `${file.fieldname}${Math.floor(Math.random() * 999999999999) + 1}.${type}`
    )
  },
})
const upload = multer({ storage: storage })

const productImages = async (req, res) => {
  upload.any()(req, res, (err) => {
    if (err) {
      throw new BadRequestError('Error uploading the images')
    } else {
      // req.files contains an array of uploaded files
      // do something with the files here, such as saving to a database
      res.status(StatusCodes.OK).json({ success: true })
    }
  })
}

const addProduct = async (req, res) => {
  const { productName, productDescription, productPrice } = req.body
  console.log(productName, productDescription, productPrice)
  const query = `INSERT INTO PRODUCT(name,description,price,path) VALUES('${productName}','${productDescription}',${Number(
    productPrice
  )},'/images/${productName}/')`
  const result = await QueryResult(query)
  console.log(result)
  res.status(200).json({ result })
}

const allProducts = async (req, res) => {
  const query = `SELECT * FROM PRODUCT`
  let products = await QueryResult(query)

  let promises = products.map((product) => {
    var temp = product
    const { path } = product
    const imagePath = 'public/uploads' + path
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif']

    return new Promise((resolve, reject) => {
      fs.access(imagePath, (err) => {
        if (err) {
          // Handle the error if the directory doesn't exist
          temp.images = []
          resolve(temp)
        } else {
          fs.readdir(imagePath, (err, files) => {
            if (err) reject(err)

            if (files) {
              const imageFiles = files.filter((file) => {
                const extension = file
                  .substr(file.lastIndexOf('.'))
                  .toLowerCase()
                return validExtensions.includes(extension)
              })
              temp.images = imageFiles
            }

            resolve(temp)
          })
        }
      })
    })
  })

  let result = await Promise.all(promises)

  res.status(200).json(result)
}
const getSingleProduct = async (req, res) => {
  const productId = req.params.id // Assuming the product ID is obtained from the request params

  const query = `SELECT * FROM PRODUCT WHERE id =${productId}`
  let product = await QueryResult(query)

  const { path } = product[0]
  const imagePath = 'public/uploads' + path
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif']
  console.log(imagePath)
  return new Promise((resolve, reject) => {
    fs.access(imagePath, (err) => {
      if (err) {
        // Handle the error if the directory doesn't exist
        product.images = []
        resolve(product)
      } else {
        fs.readdir(imagePath, (err, files) => {
          if (err) reject(err)

          if (files) {
            const imageFiles = files.filter((file) => {
              const extension = file.substr(file.lastIndexOf('.')).toLowerCase()
              return validExtensions.includes(extension)
            })
            product[0].images = imageFiles
          }

          resolve(product)
        })
      }
    })
  })
    .then((result) => {
      let timmeh = result
      console.log(timmeh)
      res.status(200).json(timmeh)
    })
    .catch((error) => {
      res.status(500).json({ error: 'An error occurred' })
    })
}

export { productImages, addProduct, allProducts, getSingleProduct }
