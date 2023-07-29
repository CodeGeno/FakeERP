import multer from 'multer'
import fs from 'fs'
import { QueryResult } from '../utils/DbQuery.js'

// Define the storage location and file name for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/uploads/${req.body.path}`)
  },
  filename: function (req, file, cb) {
    const type = file.mimetype.split('image/')[1]
    cb(null, `image${Math.floor(Math.random() * 999999999999) + 1}.${type}`)
  },
})

const upload = multer({ storage })

const updateProduct = async (req, res) => {
  // Get the filenames in the oldpath directory
  let result

  // Handle file uploads separately
  upload.array('newImages[]', 5)(req, res, async () => {
    const { id, name, description, price, path, images } = req.body

    let filenames = Array.isArray(images)
      ? images.map((image) => image)
      : [images]

    let oldpath = `public/uploads${path}`

    const uploadedImages = req.files.map((file) => file.filename)
    filenames = [...filenames, ...uploadedImages]

    // Check if each file in the oldpath directory is present in the filenames array
    fs.readdir(oldpath, (err, files) => {
      if (err) throw err
      files.forEach((file) => {
        if (!filenames.some((filename) => filename === file)) {
          // Delete the file if it is not in the filenames array
          fs.unlink(`${oldpath}/${file}`, (err) => {
            if (err) throw err
          })
        }
      })

      // Rename the oldpath directory
      const newpath = `public/uploads/images/${req.body.name}`
      console.log('new', newpath)
      fs.rename(oldpath, newpath, (err) => {
        if (err) throw err
      })

      const query = `UPDATE PRODUCT
          SET name='${name}',
          description='${description}',
          price=${Number(price)},
          path='/images/${name}/'
          WHERE id=${id}`

      // Define an async function to handle the database query
      const handleQuery = async (query) => {
        try {
          const result = await QueryResult(query)
          return result
        } catch (error) {
          console.error(error)
          return null
        }
      }
      // Call the async function and await the result
      const handleUpdate = async () => {
        result = await handleQuery(query)
        let updatedProductQuery = `SELECT * FROM PRODUCT where id=${req.body.id}`
        let updatedProduct = await handleQuery(updatedProductQuery)
        let promises = updatedProduct.map((product) => {
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
        let resultat = await Promise.all(promises)

        res.status(200).json(resultat)
      }

      // Call the async function
      handleUpdate()
    })
  })
}

const undoProductModification = async (req, res) => {
  const query = `SELECT * FROM PRODUCT WHERE id=${req.params.id}`

  const result = await QueryResult(query)
  console.log(result)
  let promises = result.map((product) => {
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
  let resultat = await Promise.all(promises)
  res.status(200).json(resultat)
}

export { updateProduct, undoProductModification }
