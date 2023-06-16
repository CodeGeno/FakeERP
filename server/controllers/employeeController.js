import { BadRequestError } from '../errors/index.js'
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

const formatDate = (unformatedDate) => {
  const dateString = unformatedDate
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)
  return `${year}-${month}-${day}`
}

const getAllEmployees = async (req, res) => {
  const query = 'SELECT * FROM EMPLOYEES'
  const result = await QueryResult(query)
  res.status(200).json(result)
}

const createEmployee = async (req, res) => {
  let sanitizedData = sanitizeObject(req.body)

  sanitizedData.birthDate = formatDate(sanitizedData.birthDate)
  const query = `INSERT INTO Employees (lastName, firstName, street, zipCode, country, birthDate, role, salary)
             VALUES ('${sanitizedData.lastName}', '${sanitizedData.firstName}', '${sanitizedData.street}', ${sanitizedData.zipCode},'${sanitizedData.country}', '${sanitizedData.birthDate}', '${sanitizedData.role}', ${sanitizedData.salary})`
  try {
    await QueryResult(query)
  } catch (error) {
    throw new BadRequestError('Error in the query')
  }

  res.status(200).json({ msg: 'Success' })
}
const updateEmployee = async (req, res) => {
  let employee = req.body
  console.log(employee)
  employee = sanitizeObject(employee)
  employee.birthDate = formatDate(employee.birthDate)
  const query = `Update Employees
              SET lastName='${employee.lastName}',firstName='${employee.firstName}'
              ,birthDate='${employee.birthDate}',street='${employee.street}',zipCode=${employee.zipCode}
              ,role='${employee.role}' where id=${employee.id}`
  console.log(query)
  try {
    await QueryResult(query)
  } catch (error) {
    console.log('error')
  }

  res.send('Hihi')
}
const deleteEmployee = async (req, res) => {
  console.log(req.params)
  const sanitizedData = sanitizeObject(req.params)
  const query = `DELETE FROM EMPLOYEES Where id='${sanitizedData.id}'`
  try {
    await QueryResult(query)
  } catch (error) {
    console.log(error)
  }
  res.send('Employee deleted')
}

export { createEmployee, getAllEmployees, updateEmployee, deleteEmployee }
