/**
 * Default imports
 *
 * @flow
 */
import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'

type Props = {
  employee: Object
}

class EmployeeListItem extends Component<Props> {
  constructor(props: { employee: Object }) {
    super(props)

    this.onRowPress = this.onRowPress.bind(this)
  }

  onRowPress = () => {
    const { employee } = this.props
    Actions.employeeEdit({ employee })
  }

  render() {
    const { titleStyle } = styles
    const { employee } = this.props

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {employee.name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 20,
    color: '#9e15c4'
  }
}

export default EmployeeListItem
