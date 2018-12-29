import * as types from '../../actions/Library/types'

export default (state = null, action) => {
  switch (action.type) {
    case types.SELECT_LIBRARY:
      return action.payload
    default:
      return state
  }
}
