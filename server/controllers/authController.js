import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
  UnauthenticatedError,
} from '../errors/index.js'
import { db } from '../index.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
dotenv.config()

import { QueryResult } from '../utils/DbQuery.js'
import jwt from 'jsonwebtoken'

const login = async (req, res) => {
  const { email, password } = req.body
  const sqlQuery = `SELECT email,password,role,uid FROM Users WHERE email='${email}';`

  let data = await QueryResult(sqlQuery)

  if (data.length === 0) {
    throw new BadRequestError('No account found')
  }
  let user = data[0]
  const { uid, role } = user
  user.token = jwt.sign({ uid }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })
  user.role = jwt.sign({ role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  })

  const checkPassword = await bcrypt.compare(password, user.password)

  if (!checkPassword) {
    throw new BadRequestError('Bad credentials')
  } else {
    user.password = undefined
    res.status(StatusCodes.OK).json(user)
  }
}

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
