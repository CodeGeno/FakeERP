import { StatusCodes } from 'http-status-codes'
import { QueryResult } from '../utils/DbQuery.js'

const createCompany = async (req, res) => {
  const companyDetails = req.body
  companyDetails.map(async (singleCompany, index) => {
    const { street, houseNr, zipCode, country, city, company } = singleCompany
    console.log(singleCompany)
    const query = `INSERT INTO COMPANY(company,street,houseNr,zipCode,country,city) Values('${company}','${street}',${houseNr},${zipCode},'${country}','${city}')`
    await QueryResult(query)
  })
}
const getAllCompanies = async (req, res) => {
  const query = `SELECT company,id FROM COMPANY`
  const result = await QueryResult(query)
  res.status(StatusCodes.OK).json(result)
}
const getOffices = async (req, res) => {
  console.log(req.params)
  const { companyName } = req.params
  const query = `SELECT * FROM COMPANY WHERE company='${companyName}'`
  const result = await QueryResult(query)
  console.log(result)
  res.status(StatusCodes.OK).json(result)
}
const updateOffices = async (req, res) => {
  const companyData = req.body
  try {
    const { street, houseNr, zipCode, country, city, company, id } = companyData
    let query = `Update COMPANY SET company='${company}',street='${street}',houseNr=${houseNr},zipCode=${zipCode},country='${country}',city='${city}' where id=${id};`
    await QueryResult(query)

    res.status(200).json({ msg: 'Update successful!' })
  } catch (error) {
    throw new Error('Error')
  }
}
const getSingleCompany = async (req, res) => {
  const query = `SELECT * FROM COMPANY WHERE id=${req.params.id}`
  let data = await QueryResult(query)
  res.status(200).json(data)
}
export {
  createCompany,
  getAllCompanies,
  getOffices,
  updateOffices,
  getSingleCompany,
}
