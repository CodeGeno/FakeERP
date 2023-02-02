import { StatusCodes } from 'http-status-codes'
import { QueryResult } from '../utils/DbQuery.js'

const createCompany = async (req, res) => {
  const { companyDetails, companyName } = req.body
  console.log(companyDetails, companyName)
  companyDetails.map(async (singleOffice, index) => {
    const { streetName, houseNr, zipCode, country, officeName } = singleOffice
    const query = `INSERT INTO Company(id,company,street,houseNr,zipCode,country,officeName) Values(${
      index + 1
    },'${companyName}','${streetName}',${houseNr},${zipCode},'Belgium','${companyName}')`
    await QueryResult(query)
  })
}

export { createCompany }
