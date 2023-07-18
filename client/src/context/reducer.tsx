import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  CLEAR_ALERT,
  UPDATE_USER_BEGIN,
  LOGOUT_USER,
  CREATE_ROLE_SUCCESS,
  CREATE_ROLE_ERROR,
  UPDATE_USER_ERROR,
  SET_SLIDER,
  UPDATE_OFFICES_SUCCESS,
  CUSTOM_ALERT,
  HANDLE_MENU_PRESS,
} from './actions'

import { defaultContextState } from '../Models/ContextModel'
import { reducerActionType } from '../Models/ContextModel'

const reducer = (state: defaultContextState, action: reducerActionType) => {
  if (action.type === SET_SLIDER) {
    return { ...state, showSlider: !state.showSlider }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      alertMessage: '',
      alertShow: false,
      alertType: '',
    }
  }
  if (action.type === HANDLE_MENU_PRESS) {
    return { ...state, showSlider: false }
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
  if (action.type === LOGOUT_USER) {
    return { ...state, userDetail: '', token: '', role: '' }
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
  if (action.type === UPDATE_OFFICES_SUCCESS) {
    return {
      ...state,
      alertMessage: 'Company Updated !',
      alertShow: true,
      alertType: 'success',
    }
  }
  if (action.type === CUSTOM_ALERT) {
    return {
      ...state,
      alertMessage: action.payload.msg,
      alertShow: true,
      alertType: action.payload.alertType,
    }
  }
  throw new Error(`No such action :${action.type}`)
}

export default reducer
