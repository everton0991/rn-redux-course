import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import * as types from './types'

export const employeeUpdate = ({ prop, value }) => ({
  type: types.EMPLOYEE_UPDATE,
  payload: { prop, value }
})

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: types.EMPLOYEE_CREATE_SUCCESS })
        Actions.pop()
      })
  }
}

export const employeeSave = ({
  name, phone, shift, uid
}) => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: types.EMPLOYEE_SAVE_SUCCESS })
        Actions.pop()
      })
  }
}

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth()

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        console.log('removed')
        Actions.pop()
      })
  }
}

export const fetchEmployees = () => {
  const { currentUser } = firebase.auth()

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        dispatch({
          type: types.FETCH_EMPLOYEES_SUCCESS,
          payload: snapshot.val()
        })
      })
  }
}
