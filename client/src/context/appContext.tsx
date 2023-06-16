import { useReducer, useContext, createContext } from 'react'
import axios from 'axios'
import reducer from './reducer'
import {
  CLEAR_ALERT,
  CREATE_ROLE_ERROR,
  CUSTOM_ALERT,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  SET_SLIDER,
  UPDATE_OFFICES_SUCCESS,
  UPDATE_USER_BEGIN,
  UPDATE_USER_ERROR,
} from './actions'

//MODELS
import {
  defaultContextState,
  UserRole,
  Role,
  AppContextProps,
} from '../Models/ContextModel'
import { Employee } from '../Models/EmployeeModel'
import { ProductDB } from '../Models/ProductModel'
import { Company } from '../Models/CompanyModel'

const token = localStorage.getItem('token')
const userDetail = localStorage.getItem('userDetail')
const role = localStorage.getItem('role')

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
    dispatch({ type: LOGOUT_USER })
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
  baseFetch.defaults.headers.common['role'] = localStorage.getItem('role')

  baseFetch.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Handle authentication error
        console.log('Authentication error')
        removeUserFromLocalStorage()
        dispatch({
          type: CUSTOM_ALERT,
          payload: { msg: error.response.data.msg, alertType: 'danger' },
        })

        // You can perform any necessary actions, such as redirecting to a login page or displaying an error message
      }
      return Promise.reject(error)
    }
  )

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
    clearAlert()
  }
  const getRoles = async () => {
    let response = await baseFetch.get('/roles')
    const { data } = response
    return data
  }

  const createRole: (newRole: Role) => void = async (newRole) => {
    try {
      await baseFetch.post('/roles/new', newRole)
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Role Created !', alertType: 'success' },
      })
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
      await baseFetch.patch('/roles/update', updatedRole)
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Role updated !', alertType: 'success' },
      })
    } catch (error) {
      console.log(error)
    }
    clearAlert()
  }
  const getRole = async (email: string) => {
    const result = await baseFetch.get(`/roles/singleRole/${email}`)
    return result.data
  }
  const deleteRole: (roleToDelete: Role) => void = async (roleToDelete) => {
    console.log(roleToDelete.role)
    try {
      await baseFetch.delete(`/roles/delete/${roleToDelete.role}`)
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Role  deleted !', alertType: 'success' },
      })
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
      await baseFetch.patch('/user/updateUserRole', {
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
  const createCompany = async (companyDetails: Company[]) => {
    let response = await baseFetch.post('/company/create', companyDetails)
    dispatch({
      type: CUSTOM_ALERT,
      payload: { msg: response.data.msg, alertType: 'success' },
    })
    clearAlert()
  }
  const getSingleCompany = async (companyId) => {
    try {
      let result = await baseFetch.get(`/company/getSingleCompany/${companyId}`)

      return result.data[0]
    } catch (error) {
      dispatch({
        type: CUSTOM_ALERT,
        payload: {
          msg: 'Error getting company details..',
          alertType: 'danger',
        },
      })
      clearAlert()
    }
  }
  const getCompanies = async () => {
    let response = await baseFetch.get('/company/getCompanies')
    const { data } = response
    return data
  }

  const updateCompany = async (Offices) => {
    try {
      await baseFetch.patch('/company/updateCompany', Offices)
      dispatch({ type: UPDATE_OFFICES_SUCCESS })
    } catch (error) {
      console.log(error)
    }
    clearAlert()
  }
  const createProduct = async (product) => {
    const formData = new FormData()
    const { productName, productImages } = product

    if (productName.length > 0) {
      if (productImages.length > 0) {
        formData.append('directory', productName)
        for (let i = 0; i < productImages.length; i++) {
          formData.append(`image${i}`, productImages[i])
        }

        await baseFetch.post('/product/images', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      }
      let productData = product
      productData.productImages = undefined
      try {
        await baseFetch.post('/product/addProduct', productData)
        dispatch({
          type: CUSTOM_ALERT,
          payload: { msg: 'Success', alertType: 'success' },
        })
      } catch (error) {
        dispatch({
          type: CUSTOM_ALERT,
          payload: { msg: 'Error !', alertType: 'danger' },
        })
      }
    } else {
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Please enter product name !', alertType: 'danger' },
      })
    }
  }
  const getAllProducts = async () => {
    let resultat = await baseFetch.get('/product/allProducts')

    return resultat.data
  }
  const getSingleProduct = async (id) => {
    let result = await baseFetch(`/product/product/${id}`)
    console.log(result.data)
    return result.data[0]
  }
  const updateProduct = async (product: any) => {
    const formData = new FormData()
    formData.append('id', product[0].id)
    formData.append('name', product[0].name)
    formData.append('description', product[0].description)
    formData.append('price', product[0].price)
    formData.append('path', product[0].path)
    product[0].images.forEach((image) => {
      formData.append('images', image)
    })
    product[1].forEach((image) => {
      formData.append('newImages[]', image.file)
    })
    try {
      let result = await baseFetch.patch(
        `/product/updateProduct/${product[0].id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Update Successful !', alertType: 'success' },
      })
      clearAlert()
      return result.data
    } catch (error) {
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'ERROR !', alertType: 'danger' },
      })
      clearAlert()
    }
  }

  const cancelModification = async (id: number) => {
    try {
      let result = await baseFetch.get(`/product/getProduct/${id}`)
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Modifications undone !', alertType: 'success' },
      })
      return result.data
    } catch (error) {
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Error !', alertType: 'danger' },
      })
      clearAlert()
    }

    clearAlert()
  }

  const createEmployee = async (employee: Employee) => {
    let result = await baseFetch.post('/employee/createEmployee', employee)
    const { data } = result
    return data.msg
  }
  const getEmployees = async () => {
    let result = await baseFetch.get('/employee/getEmployees')
    return result.data
  }
  const updateEmployee = async (employee: Employee) => {
    try {
      await baseFetch.patch('/employee/updateEmployee', employee)
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Employee Updated !', alertType: 'success' },
      })
    } catch (error) {
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Error !', alertType: 'danger' },
      })
    }
    clearAlert()
  }
  const deleteEmployee = async (id) => {
    try {
      await baseFetch.delete(`/employee/deleteEmployee/${id}`)
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Employee Removed !', alertType: 'success' },
      })
    } catch (error) {
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'Error !', alertType: 'danger' },
      })
    }
    clearAlert()
  }
  const getProductsInventory = async () => {
    let result = await baseFetch.get('/inventory/getInventory')
    return result.data
  }
  const updateInventory = async (products: ProductDB[]) => {
    let temp = []
    for (const product of products) {
      if (product.quantity > 0) temp.push(product)
    }
    if (temp.length === 0) {
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: 'No item added check quantity !', alertType: 'danger' },
      })
    } else {
      try {
        const response = await baseFetch.patch(
          '/inventory/updateInventory',
          temp
        )
        dispatch({
          type: CUSTOM_ALERT,
          payload: { msg: response.data.msg, alertType: 'success' },
        })
      } catch (error) {
        dispatch({
          type: CUSTOM_ALERT,
          payload: { msg: 'Error during update !', alertType: 'danger' },
        })
      }
    }
    clearAlert()
  }
  const createOrder = async (orderData: any) => {
    await baseFetch.post('/orders/create', {
      orderData,
      userDetail,
    })
  }
  const getAllOrders = async () => {
    let result = await baseFetch.get('/orders/getOrders')
    return result.data
  }
  const updateOrderStatus = async (orderData, newStatus) => {
    let response
    try {
      await baseFetch.patch('/orders/update', {
        orderData,
        newStatus,
      })
      response = await baseFetch.get(`/orders/getOrder/${orderData.orderId}`)
      dispatch({
        type: CUSTOM_ALERT,
        payload: {
          msg: `Status updated to ${newStatus}`,
          alertType: 'success',
        },
      })
    } catch (error) {
      dispatch({
        type: CUSTOM_ALERT,
        payload: { msg: error.response.data.msg, alertType: 'danger' },
      })
      return null
    }

    clearAlert()
    return response.data[0]
  }
  const AlertMessageAndType = (message, alertType) => {
    dispatch({
      type: CUSTOM_ALERT,
      payload: {
        msg: message,
        alertType: alertType,
      },
    })
    setTimeout(() => {
      clearAlert()
    }, 3000)
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
        getSingleCompany,
        getCompanies,
        updateCompany,
        handleSlider,
        createProduct,
        getAllProducts,
        updateProduct,
        cancelModification,
        createEmployee,
        getEmployees,
        updateEmployee,
        deleteEmployee,
        updateInventory,
        getProductsInventory,
        getSingleProduct,
        createOrder,
        getAllOrders,
        updateOrderStatus,
        AlertMessageAndType,
        getRole,
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
