import * as types from '../../actions/Auth/types'

const initialState = {
  email: '',
  password: '',
  user: '',
  error: '',
  loading: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.EMAIL_CHANGE:
      return { ...state, email: action.payload }
    case types.PASSWORD_CHANGE:
      return { ...state, password: action.payload }
    case types.REQUEST_USER_LOGIN:
      return { ...state, loading: true }
    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...initialState, user: action.payload }
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        password: '',
        loading: false
      }
    default:
      return state
  }
}
