import { StatusCodes } from 'http-status-codes'
import { QueryResult } from '../utils/DbQuery.js'
const getUsers = async (req, res) => {
  const query = 'SELECT email,role,uid from Users'
  const response = await QueryResult(query)
  res.status(StatusCodes.OK).json(response)
}

const updateUserRole = async (req, res) => {
  const { userToUpdate: user, roleToUpdate: role } = req.body
  const { email, uid } = user
  const query = `
UPDATE Users
SET role='${role}'
WHERE email='${email}' AND uid=${uid}
`
  const response = await QueryResult(query)
  res.status(StatusCodes.OK).json(response)
}

export { getUsers, updateUserRole }
