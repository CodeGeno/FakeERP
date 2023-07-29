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
  const sqlQuery = `SELECT email,password,role,uid FROM USERS WHERE email='${email}';`

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
  const lowerCaseEmail = email.toLowerCase()
  //Checking if user already exists
  const query = `SELECT * FROM USERS WHERE email='${lowerCaseEmail}'`
  let isNewAccount = await QueryResult(query)
  if (isNewAccount.length == 0) {
    let salt = await bcrypt.genSalt(10)
    let cryptedPwd = await bcrypt.hash(password, salt)
    const sqlInsert = 'INSERT INTO USERS(email,password) VALUES (?,?)'
    db.query(sqlInsert, [lowerCaseEmail, cryptedPwd], (err, result) => {
      console.log('result', result)
      console.log(err)
    })
    res.status(StatusCodes.OK).json({ msg: 'Registration Sucesful!' })
  } else {
    throw new BadRequestError('User already exists !')
  }
}

const updateUser = async (req, res) => {}

export { login, register, updateUser }
