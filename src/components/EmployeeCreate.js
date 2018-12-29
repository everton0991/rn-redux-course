/**
 * Default imports
 *
 * @flow
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeCreate } from '../actions/Employee'

import {
  Card, CardSection, Button
} from './common'
import EmployeeForm from './EmployeeForm'

type Props = {
  name: string,
  phone: string,
  shift: string,
  employeeUpdate: ({ prop: string, value: string }) => void,
  employeeCreate: ({
    name: string,
    phone: string,
    shift: string
  }) => void
}

class EmployeeCreate extends Component<Props> {
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress = () => {
    const {
      name, phone, shift, employeeCreate
    } = this.props

    employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee
  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeCreate
})(EmployeeCreate)
