/**
 * Import default libs
 *
 * @flow
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'
import _ from 'lodash'
import { fetchEmployees } from '../actions/Employee'
import EmployeeListItem from './EmployeeListItem'

type Props = {
  employeesList: Array<Object>,
  fetchEmployees: () => void
}

class EmployeeList extends Component<Props> {
  componentDidMount() {
    const { fetchEmployees } = this.props

    fetchEmployees()
  }

  keyExtractor = employee => JSON.stringify(employee.uid)

  renderRow = employee => <EmployeeListItem employee={employee.item} />

  render() {
    const { employeesList } = this.props

    return (
      <FlatList
        data={employeesList}
        renderItem={this.renderRow}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employeesList, (val, uid) => ({
    ...val, uid
  }))

  return { employeesList: employees }
}

export default connect(mapStateToProps, {
  fetchEmployees
})(EmployeeList)
