import { BadRequestError } from '../errors/index.js'
import { QueryResult } from '../utils/DbQuery.js'
import { currentDate } from '../utils/TodayDate.js'

const createOrder = async (req, res) => {
  let query, result
  const data = req.body
  const userData = data.userDetail
  const orderData = data.orderData
  const { company, products, deliveryDate } = orderData
  query = `INSERT INTO ORDERSINFO(orderDate,deliveryDate,orderStatus,companyId,createdBy)
                 VALUES ('${currentDate()}','${deliveryDate}','pending',${
    company.id
  },'${userData.replace(/^"|"$/g, '')}');`
  result = await QueryResult(query)
  console.log('result1', result)
  query = `Select orderID from ORDERSINFO WHERE companyId=${
    company.id
  } and createdBy='${userData.replace(
    /^"|"$/g,
    ''
  )}' Order By orderId desc LIMIT 1;`

  result = await QueryResult(query)

  const orderID = result[0].orderID

  for (const product of products) {
    const { id, desiredQuantity, price } = product
    if (desiredQuantity > 0) {
      query = `INSERT INTO ORDERSCART(orderId,productId,orderQuantity,price)
            Values(${orderID},${id},${desiredQuantity},${price});`
      await QueryResult(query)
    }
  }

  res.status(200).json({ msg: 'Order Created !' })
}

const getOrdersData = async (req, res) => {
  let finalData = []
  let query = `select * from ORDERSINFO`
  let results = await QueryResult(query)
  for (const i in results) {
    let products = []
    let completeProductData = await getOrderProductsId(results[i])
    for (const j in completeProductData) {
      let product = await getOrderProducts(completeProductData[j])
      products = [...products, product]
    }
    let company = await getCompanyDetail(results[i].companyId)
    const singleOrder = { ...results[i], ...company, products }
    finalData.push(singleOrder)
  }
  res.status(200).json(finalData)
}
const getOrderData = async (req, res) => {
  const { id } = req.params
  console.log('hihi')
  console.log(id)
  let finalData = []
  let query = `select * from ORDERSINFO where orderId=${id}`
  let results = await QueryResult(query)
  for (const i in results) {
    let products = []
    let completeProductData = await getOrderProductsId(results[i])
    for (const j in completeProductData) {
      let product = await getOrderProducts(completeProductData[j])
      products = [...products, product]
    }
    let company = await getCompanyDetail(results[i].companyId)
    const singleOrder = { ...results[i], ...company, products }
    finalData.push(singleOrder)
  }
  res.status(200).json(finalData)
}
const getOrderProductsId = async (result) => {
  let query = `SELECT * FROM ORDERSCART where orderId=${result.orderId}`
  let singleProduct = await QueryResult(query)
  return singleProduct
}
const getOrderProducts = async (productCartInfo) => {
  const query = `SELECT * FROM PRODUCT where id=${productCartInfo.productId}`
  let result = await QueryResult(query)
  let productData = { ...productCartInfo, ...result[0] }
  return productData
}
const getCompanyDetail = async (companyId) => {
  let query = `SELECT * FROM COMPANY where id=${companyId}`
  let companyDetail = await QueryResult(query)
  return companyDetail[0]
}

const updateOrder = async (req, res) => {
  const { orderData, newStatus } = req.body
  const { orderStatus, products, orderId } = orderData
  console.log(orderData)
  let query
  if (
    (orderStatus == 'pending' || orderStatus == 'cancelled') &&
    newStatus == 'done'
  ) {
    if (testQuantity(products)) {
      query = `UPDATE ORDERSINFO
             SET orderStatus='done'
             Where orderId=${orderId};`

      await QueryResult(query)

      for (const product of products) {
        const { orderQuantity, id } = product
        query = `UPDATE PRODUCT
                SET quantity=quantity-${orderQuantity}
                where id=${id};`
        await QueryResult(query)
      }
    } else {
      throw new BadRequestError('Not enough supply !')
    }
  }
  if (
    orderStatus == 'done' &&
    (newStatus == 'pending' || newStatus == 'cancelled')
  ) {
    query = `UPDATE ORDERSINFO
             SET orderStatus='${newStatus}'
             Where orderId=${orderId};`

    await QueryResult(query)

    for (const product of products) {
      const { orderQuantity, id } = product
      query = `UPDATE PRODUCT
                SET quantity=quantity+${orderQuantity}
                where id=${id};`
      await QueryResult(query)
    }
  }
  if (
    (orderStatus == 'pending' && newStatus == 'cancelled') ||
    (orderStatus == 'cancelled' && newStatus == 'pending')
  ) {
    query = `UPDATE ORDERSINFO
             SET orderStatus='${newStatus}'
             Where orderId=${orderId};`
    await QueryResult(query)
  }
  res.status(200).json({ msg: 'hello' })
}

export { getOrdersData, createOrder, updateOrder, getOrderData }

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
const testQuantity = (products) => {
  let amount = 0
  products.map((product) => {
    const { orderQuantity, quantity } = product
    if (quantity - orderQuantity < 0) amount++
  })
  if (amount == 0) return true
  else return false
}
