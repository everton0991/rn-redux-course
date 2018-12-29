/**
 * Import only react native View component.
 *
 * @flow
 */
import * as React from 'react'
import { View } from 'react-native'

/**
 * Receives the children to be wrapped and a style object for
 * custom styles.
 */
type Props = {
  children: React.Node,
  style?: Object
}

/**
 * Card Section component used to separate a Card internal items.
 */
const CardSection = (props: Props) => {
  const { children, style } = props
  const { containerStyle } = styles

  return (
    <View style={[containerStyle, style]}>{children}</View>
  )
}

/**
 * Default values to optionals props
 */
CardSection.defaultProps = {
  style: {}
}

/**
 * Styles the card section container that will be used as
 * a wrapper to other components.
 */
const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd'
  }
}

export default CardSection
