import * as types from '../../actions/Employee/types'

const initialState = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.EMPLOYEE_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      }
    case types.EMPLOYEE_CREATE_SUCCESS:
    case types.EMPLOYEE_SAVE_SUCCESS:
      return initialState
    default:
      return state
  }
}
