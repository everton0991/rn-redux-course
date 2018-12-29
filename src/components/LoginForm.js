/**
 * Import View and Text from react native.
 *
 * @flow
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { emailChange, passwordChange, loginUser } from '../actions/Auth'

import {
  Button, Card, CardSection, Input, Spinner
} from './common'

/** Props type */
type Props = {
  email: string,
  password: string,
  error: string,
  loading: boolean,
  emailChange: (text: string) => mixed,
  passwordChange: (text: string) => mixed,
  loginUser: ({ email: string, password: string }) => mixed
}

/**
 * Componenet login contains the authenticAtion form.
 */
class LoginForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onEmailChange = (text) => {
    const { emailChange } = this.props
    emailChange(text)
  }

  onPasswordChange = (text) => {
    const { passwordChange } = this.props
    passwordChange(text)
  }

  onButtonPress = () => {
    const { email, password, loginUser } = this.props
    loginUser({ email, password })
  }

  renderButton = () => {
    const { loading } = this.props

    if (loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress}>
        Login
      </Button>
    )
  }

  renderError = () => {
    const { errorStyle } = styles
    const { error } = this.props

    if (error) {
      return (
        <View>
          <Text style={errorStyle}>{error}</Text>
        </View>
      )
    }

    return null
  }

  render() {
    const { email, password } = this.props

    return (
      <Card>
        <CardSection>
          <Input
            label="Username:"
            placeholder="example@domain.com"
            value={email}
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password:"
            placeholder="123456"
            value={password}
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

/**
 * Styles the error message
 */
const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
})

export default connect(mapStateToProps, {
  emailChange,
  passwordChange,
  loginUser
})(LoginForm)
