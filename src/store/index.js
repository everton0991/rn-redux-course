import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

/**
 * Create the store from all our rootReducer.
 */
const store = createStore(
  rootReducer,
  {},
  applyMiddleware(ReduxThunk)
)

/**
 * Export the store as default
 */
export default store
