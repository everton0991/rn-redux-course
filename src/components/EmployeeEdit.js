/**
 * Default imports
 *
 * @flow
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import Communications from 'react-native-communications'
import {
  employeeUpdate, employeeSave, employeeDelete
} from '../actions/Employee'
import {
  Card, CardSection, Button, Confirm
} from './common'
import EmployeeForm from './EmployeeForm'

type Props = {
  name: string,
  phone: string,
  shift: string,
  employee: Object,
  employeeUpdate: ({
    prop: string,
    value: string
  }) => void,
  employeeSave: ({
    name: string,
    phone: string,
    shift: string,
    uid: string
  }) => void,
  employeeDelete: ({ uid: string }) => void
}

type State = {
  showModal: boolean
}

class EmployeeEdit extends Component<Props, State> {
  state = {
    showModal: false
  }

  constructor(props) {
    super(props)

    this.onSavePress = this.onSavePress.bind(this)
    this.onTextPress = this.onTextPress.bind(this)
    this.onToggleModal = this.onToggleModal.bind(this)
    this.onAccept = this.onAccept.bind(this)
  }

  componentDidMount() {
    const { employeeUpdate, employee } = this.props

    _.each(employee, (value, prop) => {
      employeeUpdate({ prop, value })
    })
  }

  onSavePress = () => {
    const {
      name,
      phone,
      shift,
      employee,
      employeeSave
    } = this.props

    employeeSave({
      name, phone, shift, uid: employee.uid
    })
  }

  onTextPress = () => {
    const { phone, shift } = this.props
    Communications.text(phone, `Your upcoming shift is on ${shift}`)
  }

  onToggleModal = () => {
    const { showModal } = this.state
    this.setState({ showModal: !showModal })
  }

  onAccept = () => {
    const { employee, employeeDelete } = this.props
    this.onToggleModal()
    employeeDelete({ uid: employee.uid })
  }

  render() {
    const { showModal } = this.state

    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onSavePress}>
            Save
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress}>
            Send Text
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onToggleModal}>
            Delete Employee
          </Button>
        </CardSection>
        <Confirm
          visible={showModal}
          onAccept={this.onAccept}
          onDecline={this.onToggleModal}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee
  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit)
