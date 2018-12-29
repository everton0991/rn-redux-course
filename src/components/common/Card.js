/**
 * Import libs
 *
 * @flow
 */
import * as React from 'react'
import { View } from 'react-native'

/**
 * Componenet prop types
 */
type Props = {
  children: React.Node
}

/**
 * Create component
 */
const Card = (props: Props) => {
  const { children } = props
  const { containerStyle } = styles

  return (
    <View style={containerStyle}>{children}</View>
  )
}

/**
 * Componenet Styles
 */
const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15
  }
}

/**
 * Export component
 */
export default Card
