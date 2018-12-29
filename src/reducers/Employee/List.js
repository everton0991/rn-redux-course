import * as types from '../../actions/Employee/types'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_EMPLOYEES_SUCCESS:
      return action.payload
    default:
      return state
  }
}
