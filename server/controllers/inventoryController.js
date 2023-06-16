import { QueryResult } from '../utils/DbQuery.js'

const sanitizeObject = (obj) => {
  const sanitizedObj = {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let value = obj[key]
      if (typeof value === 'string') {
        // Sanitize string fields by trimming whitespace
        value = value.trim()
      } else if (value instanceof Date) {
        // Convert date fields to ISO string format
        value = value.toISOString()
      } else if (typeof value === 'object') {
        // Recursively sanitize nested objects
        value = sanitizeObject(value)
      }
      // Set sanitized value in new object
      sanitizedObj[key] = value
    }
  }
  return sanitizedObj
}

const formatDate = () => {
  const date = new Date()
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  return `${year}-${month}-${day}`
}

const getInventory = async (req, res) => {
  const query = 'SELECT id,name,quantity,lastOrder from PRODUCT'
  let inventory = await QueryResult(query)
  inventory = inventory.map((item) => {
    item.quantity = 0
    return item
  })
  res.status(200).json(inventory)
}

const updateInventory = async (req, res) => {
  const products = req.body
  for (const product of products) {
    let temp = sanitizeObject(product)
    const { quantity, id } = temp
    const query = `Update PRODUCT
    set quantity=quantity+${quantity},lastOrder='${formatDate()}'
    where id=${id}`
    await QueryResult(query)
    res.status(200).json({ msg: 'Selected quantity added to the inventory!' })
  }
}
export { updateInventory, getInventory }
