/**
 * Import libs
 *
 * @flow
 */
import * as React from 'react'
import { Text, TouchableOpacity } from 'react-native'

/**
 * Componenet prop types
 */
type Props = {
  children: React.Node,
  onPress: () => mixed
}

/**
 * Create component
 */
const Button = (props: Props) => {
  const { children, onPress } = props
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

/**
 * Componenet Styles
 */
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#cb7fe0',
    borderRadius: 2
  },
  textStyle: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  }
}

export default Button
