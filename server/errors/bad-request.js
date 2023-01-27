import { StatusCodes } from 'http-status-codes'
import CustomAPIError from './custom-api.js'
class BadRequestErrror extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

export default BadRequestErrror
