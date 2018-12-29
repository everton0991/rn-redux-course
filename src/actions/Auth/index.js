import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import * as types from './types'

export const emailChange = text => ({
  type: types.EMAIL_CHANGE,
  payload: text
})

export const passwordChange = text => ({
  type: types.PASSWORD_CHANGE,
  payload: text
})

export const loginUser = ({ email, password }) => (dispatch) => {
  dispatch({ type: types.REQUEST_USER_LOGIN })

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch))
    })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  })

  /**
   Router Flux redirect
   */
  Actions.main()
}

const loginUserFail = (dispatch) => {
  dispatch({ type: types.LOGIN_USER_FAIL })
}
