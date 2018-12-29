/**
 * Import default
 *
 * @flow
 */
import React, { Component } from 'react'
import { View, Picker, Text } from 'react-native'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions/Employee'
import { CardSection, Input } from './common'

type Props = {
  name: string,
  phone: string,
  shift: string,
  employeeUpdate: ({ props: string, value: string }) => void
}

class EmployeeForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (props, value) => {
    const { employeeUpdate } = this.props
    employeeUpdate({ props, value })
  }

  render() {
    const { pickerLabelStyle } = styles
    const { name, phone, shift } = this.props

    return (
      <View>
        <CardSection>
          <Input
            label="name"
            placeholder="Taylor"
            value={name}
            onChangeText={value => this.handleChange('name', value)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="phone"
            placeholder="555-555-555"
            value={phone}
            onChangeText={value => this.handleChange('phone', value)}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={value => this.handleChange('shift', value)}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#9e15c4'
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employee

  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)
