import { StatusCodes } from 'http-status-codes'
import { QueryResult } from '../utils/DbQuery.js'

const createCompany = async (req, res) => {
  const { companyDetails, companyName } = req.body
  companyDetails.map(async (singleOffice, index) => {
    const { streetName, houseNr, zipCode, country, officeName, city } =
      singleOffice
    const query = `INSERT INTO Company(id,company,street,houseNr,zipCode,country,officeName,city) Values(${
      index + 1
    },'${companyName}','${streetName}',${houseNr},${zipCode},'Belgium','${officeName}','${city}')`
    await QueryResult(query)
  })
}
const getAllCompaniesNames = async (req, res) => {
  const query = `SELECT DISTINCT(company) FROM Company`
  const result = await QueryResult(query)
  res.status(StatusCodes.OK).json(result)
}
const getOffices = async (req, res) => {
  console.log(req.params)
  const { companyName } = req.params
  const query = `SELECT * FROM Company WHERE company='${companyName}'`
  const result = await QueryResult(query)
  console.log(result)
  res.status(StatusCodes.OK).json(result)
}
const updateOffices = async (req, res) => {
  const companies = req.body
  const deleteQuery = `DELETE FROM Company WHERE company='${req.body[0].company}';`
  await QueryResult(deleteQuery)

  companies.map(async (singleCompany, index) => {
    const { street, houseNr, zipCode, country, officeName, city, company } =
      singleCompany
    let query = `INSERT INTO Company(id,company,street,houseNr,zipCode,country,officeName,city) Values(${
      index + 1
    },'${company}','${street}',${houseNr},${zipCode},'Belgium','${officeName}','${city}');`
    await QueryResult(query)
  })

  // const result = await QueryResult(query)
  // console.log(result)
  res.send('hi')
}
export { createCompany, getAllCompaniesNames, getOffices, updateOffices }
