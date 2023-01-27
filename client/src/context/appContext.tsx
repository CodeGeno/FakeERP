import React, { useReducer, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import reducer, { actionType } from './reducer'
import {
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
} from './actions'
const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const cart = localStorage.getItem('cart')

export interface defaultContextState {
  token: string
  name: string
  alertType: string
  alertShow: boolean
  alertMessage: string
  loading: boolean
  registerUser?: (email: string, password: string) => void | undefined
}
interface AppContextProps {
  children: React.ReactNode
}
const initialState: defaultContextState = {
  token: token || '',
  name: '',
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
  ) => {}
  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
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
