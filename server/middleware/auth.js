import { UnauthenticatedError } from '../errors/index.js'
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  const headers = req.headers
  const authHeaders = req.headers.authorization
  if (!authHeaders || !authHeaders.startsWith('Bearer')) {
    console.log('ici')
    throw new UnauthenticatedError('Authentication invalid')
  }
  const token = authHeaders.split(' ')[1]
  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userId: payload.userId }
    next()
  } catch (error) {
    console.log(error)
    throw new UnauthenticatedError('Authentication invalid 1')
  }
}
export default auth
