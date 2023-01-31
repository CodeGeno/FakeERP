import {
  HANDLE_CHANGE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  CLEAR_ALERT,
  SET_LAST_URL,
  UPDATE_USER_BEGIN,
  LOGOUT_USER,
  CREATE_ROLE_SUCCESS,
  CREATE_ROLE_ERROR,
  UPDATE_USER_ERROR,
} from './actions'

import { defaultContextState, initialState } from './appContext'
export interface actionType {
  type: string
  payload?: {
    error?: any
    action?: any
    msg?: string
    userDetail?: []
    token?: string
    role?: string
  }
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
      alertMessage: 'Login Successful!',
      alertShow: true,
      alertType: 'success',
      userDetail: action.payload.userDetail,
      token: action.payload.token,
      role: action.payload.role,
    }
  }
  if (action.type === CREATE_ROLE_SUCCESS) {
    return {
      ...state,
      alertMessage: 'Role creation successful!',
      alertShow: true,
      alertType: 'success',
    }
  }
  if (action.type === CREATE_ROLE_ERROR) {
    return {
      ...state,
      alertMessage: action.payload.msg,
      alertShow: true,
      alertType: 'danger',
    }
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      alertMessage: 'Role Update Successful!',
      alertShow: true,
      alertType: 'success',
    }
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      alertMessage: action.payload.msg,
      alertShow: true,
      alertType: 'danger',
    }
  }
  throw new Error(`No such action :${action.type}`)
}

export default reducer
