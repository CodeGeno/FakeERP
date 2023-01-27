import {
  HANDLE_CHANGE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  GET_FILTERS,
  CLEAR_ALERT,
  CLEAR_FILTERS,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  ADD_CART_BEGIN,
  ADD_CART_SUCCESS,
  CHANGE_CART_QUANTITY,
  CALC_CART_TOTAL,
  SET_LAST_URL,
  GET_ALL_ADDRESSES_BEGIN,
  GET_ALL_ADDRESSES_SUCCESS,
  GET_ALL_ADDRESSES_ERROR,
  SET_DELIVERY_ADDRESS,
  SET_CLIENT_SECRET,
  GET_PUBLISHABLE_KEY_BEGIN,
  GET_PUBLISHABLE_KEY_SUCCESS,
  GET_ORDERS_SUCCESS,
  CUSTOM_ALERT,
  UPDATE_USER_BEGIN,
  ADD_ADDRESS_SUCCESS,
  ADD_ADDRESS_ERROR,
  LOGOUT_USER,
  DISPLAY_ALERT,
} from './actions'

import { defaultContextState, initialState } from './appContext'
export interface actionType {
  type: string
  payload?: any
}

const reducer = (state: defaultContextState, action: actionType) => {
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      alertMessage: '',
      alertShow: false,
      alertType: '',
    }
  }
  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state }
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      alertMessage: action.payload.msg,
      alertShow: false,
      alertType: 'danger',
    }
  }
  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      alertMessage: action.payload.msg as string,
      alertShow: true as boolean,
      alertType: 'success' as string,
    }
  }
  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      alertMessage: action.payload.msg,
      alertShow: true,
      alertType: 'danger',
    }
  }
  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      alertMessage: 'Login Sucessful!',
      alertShow: true,
      alertType: 'success',
      userDetail: action.payload.userDetail,
      token: action.payload.token,
      role: action.payload.role,
    }
  }
  throw new Error(`No such action :${action.type}`)
}

export default reducer
