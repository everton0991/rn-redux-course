import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'
import AlbumList from './components/AlbumList'

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          initial
        />
      </Scene>
      <Scene key="main">
        <Scene
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          key="employees"
          component={EmployeeList}
          title="Employees"
        />
        <Scene
          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
        <Scene
          key="albums"
          component={AlbumList}
          title="Albums"
        />
      </Scene>
    </Scene>
  </Router>
)

export default RouterComponent
