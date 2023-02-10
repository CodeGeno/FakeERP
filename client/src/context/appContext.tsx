import React, { useReducer, useContext, createContext, useEffect } from 'react'
import axios from 'axios'
import reducer, { actionType } from './reducer'
import {
  CLEAR_ALERT,
  CREATE_ROLE_ERROR,
  CREATE_ROLE_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  SET_SLIDER,
  UPDATE_OFFICES_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
} from './actions'
const token = localStorage.getItem('token')
const userDetail = localStorage.getItem('userDetail')
const role = localStorage.getItem('role')

export interface UserRole {
  email: string
  role: string
  uid: number
}
export interface Role {
  role: string
  estimate: boolean
  manageProducts: boolean
  manageRights: boolean
  manageClients: boolean
  orders: boolean
  accounting: boolean
}
export interface defaultContextState {
  showSlider: boolean
  token: string
  name: string
  userDetail: any
  role: string
  alertType: string
  alertShow: boolean
  alertMessage: string
  loading: boolean
  registerUser?: (email: string, password: string) => void
  loginUser?: (email: string, password: string) => void
  getRoles?: () => undefined | void | Promise<Role[]>
  createRole?: (newRole: Role) => void
  updateRole?: (updatedRole: Role) => void
  deleteRole?: (roleToDelete: Role) => void
  getUsers?: () => Promise<UserRole[]>
  updateUser?: (userToUpdate: UserRole, roleToUpdate: string) => void
  createCompany?: (companyDetails: any, companyName: string) => void
  getCompanies?: () => any
  getCompanyOffices?: (companyName: string) => any
  updateOffices?: (Offices: any) => any
  handleSlider?: () => any
}
interface AppContextProps {
  children: React.ReactNode
}
const initialState: defaultContextState = {
  showSlider: true,
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

  const handleSlider = () => {
    dispatch({ type: SET_SLIDER })
  }
  const addUserToLocalStorage = ({
    userDetail,
    token,
    role,
  }: {
    userDetail: any
    token: string
    role: string
  }) => {
    localStorage.setItem('userDetail', JSON.stringify(userDetail))
    localStorage.setItem('token', token)
    localStorage.setItem('role', role)
  }

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('userDetail')
    localStorage.removeItem('token')
    localStorage.removeItem('role')
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
  const getRoles = async () => {
    let response = await baseFetch.get('/roles')
    const { data } = response
    console.log(data)
    return data
  }

  const createRole: (newRole: Role) => void = async (newRole) => {
    try {
      await baseFetch.post('/roles/new', newRole)
      dispatch({ type: CREATE_ROLE_SUCCESS })
    } catch (error) {
      dispatch({
        type: CREATE_ROLE_ERROR,
        payload: { msg: 'Error creating role' },
      })
    }
    clearAlert()
  }
  const updateRole: (updatedRole: Role) => void = async (updatedRole) => {
    try {
      const response = await baseFetch.patch('/roles/update', updatedRole)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteRole: (roleToDelete: Role) => void = async (roleToDelete) => {
    console.log(roleToDelete.role)
    try {
      await baseFetch.delete(`/roles/delete/${roleToDelete.role}`)
    } catch (error) {}
  }
  const getUsers: () => Promise<UserRole[]> = async () => {
    try {
      const response = await baseFetch.get('/user')
      const { data } = response
      return data
    } catch (error) {
      console.log(error)
    }
  }
  const updateUser: (
    userToUpdate: UserRole,
    roleToUpdate: string
  ) => void = async (userToUpdate, roleToUpdate) => {
    try {
      const response = await baseFetch.patch('/user/updateUserRole', {
        userToUpdate,
        roleToUpdate,
      })
      dispatch({ type: UPDATE_USER_BEGIN })
    } catch (error) {
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { msg: 'Error updating role' },
      })
    }
    clearAlert()
  }
  const createCompany = async (companyDetails, companyName) => {
    let response = await baseFetch.post('/company/create', {
      companyDetails,
      companyName,
    })
  }
  const getCompanies = async () => {
    let response = await baseFetch.get('/company/getCompanyNames')
    const { data } = response
    return data
  }
  const getCompanyOffices = async (companyName: any) => {
    console.log(companyName)
    let response = await baseFetch.get(`/company/getOffices/${companyName}`)
    const { data } = response
    return data
  }
  const updateOffices = async (Offices) => {
    try {
      await baseFetch.patch('/company/updateOffices', Offices)
      dispatch({ type: UPDATE_OFFICES_SUCCESS })
    } catch (error) {
      console.log(error)
    }
    clearAlert()
  }
  return (
    <AppContext.Provider
      value={{
        ...state,
        registerUser,
        loginUser,
        getRoles,
        createRole,
        updateRole,
        deleteRole,
        getUsers,
        updateUser,
        createCompany,
        getCompanies,
        getCompanyOffices,
        updateOffices,
        handleSlider,
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
