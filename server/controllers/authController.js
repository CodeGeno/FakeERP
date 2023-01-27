import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from '../errors/index.js'
import { db } from '../index.js'
import bcrypt from 'bcrypt'

const login = async (req, res) => {}
const register = async (req, res) => {
  const { email, password } = req.body
  let salt = await bcrypt.genSalt(10)
  let cryptedPwd = await bcrypt.hash(password, salt)
  console.log(cryptedPwd)
  const sqlInsert = 'INSERT INTO Users(email,password) VALUES (?,?)'
  db.query(sqlInsert, [email, cryptedPwd], (err, result) => {
    console.log('result', result)
    console.log(err)
  })
  res.status(StatusCodes.OK).json({ msg: 'Registration Sucesful!' })
}

const updateUser = async (req, res) => {}

export { login, register, updateUser }
