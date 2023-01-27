import React, { useReducer, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import reducer, { actionType } from './reducer'
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
} from './actions'
const token = localStorage.getItem('token')
const userDetail = localStorage.getItem('userDetail')
const role = localStorage.getItem('role')

export interface defaultContextState {
  token: string
  name: string
  userDetail: any
  role: string
  alertType: string
  alertShow: boolean
  alertMessage: string
  loading: boolean
  registerUser?: (email: string, password: string) => void | undefined
  loginUser?: (email: string, password: string) => void | undefined
}
interface AppContextProps {
  children: React.ReactNode
}
const initialState: defaultContextState = {
  token: token || '',
  name: '',
  userDetail: userDetail ? JSON.parse(userDetail) : null,
  role: role || '',
  alertType: '',
  alertShow: false,
  alertMessage: '',
  loading: true,
}

const AppContext = createContext(initialState)

interface actions {
  type: string
}
const AppProvider = ({ children }: AppContextProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addUserToLocalStorage = ({ userDetail, token, role }) => {
    localStorage.setItem('userDetail', JSON.stringify(userDetail))
    localStorage.setItem('token', token)
    localStorage.setItem('role', role)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('userDetail')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
  }

  const displayAlert = (msg) => {
    dispatch({ type: DISPLAY_ALERT, payload: { msg } })
  }
  const clearAlert: () => void = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 3000)
  }
  //Axios Setup
  const baseFetch = axios.create({
    baseURL: 'http://localhost:3001/api/v1/',
  })
  const authFetch = axios.create({
    baseURL: 'http://localhost:3001/api/v1/',
  })

  //USER REGISTRATION
  const registerUser: (email: string, password: string) => void = async (
    email,
    password
  ) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      let response = await baseFetch.post('/auth/register', { email, password })
      const { data } = response
      const { msg } = data
      console.log(data)
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { msg } })
    } catch (error) {}
    clearAlert()
  }
  const loginUser: (email: string, password: string) => void = async (
    email,
    password
  ) => {
    dispatch({ type: REGISTER_USER_BEGIN })
    try {
      let response = await baseFetch.post('/auth/login', { email, password })
      const { data } = response
      const { msg } = data
      console.log(data)
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { userDetail: data.email, token: data.token, role: data.role },
      })
      addUserToLocalStorage({
        userDetail: data.email,
        token: data.token,
        role: data.role,
      })
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext }
