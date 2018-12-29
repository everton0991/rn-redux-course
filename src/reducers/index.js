import { combineReducers } from 'redux'
import Libraries from './Library/List'
import Selected from './Library/Selected'
import Auth from './Auth'
import Employee from './Employee'
import EmployeesList from './Employee/List'

export default combineReducers({
  libraries: Libraries,
  selectedLibraryId: Selected,
  auth: Auth,
  employee: Employee,
  employeesList: EmployeesList
})
