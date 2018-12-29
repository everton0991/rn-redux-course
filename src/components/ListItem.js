/**
 * Import libs
 *
 * @flow
 */
import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions/Library'

import { CardSection } from './common'

type Props = {
  library: Object,
  expanded: boolean,
  selectLibrary: (id: number) => mixed
}

class ListItem extends Component<Props> {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  renderDescription = () => {
    const { descriptionStyle } = styles
    const { expanded, library } = this.props

    if (expanded) {
      return (
        <CardSection>
          <Text style={descriptionStyle}>
            {library.item.description}
          </Text>
        </CardSection>
      )
    }

    return null
  }

  render() {
    const { titleStyle } = styles
    const { library, selectLibrary } = this.props
    const { id, title } = library.item

    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    padding: 15,
    color: '#9e15c4'
  },
  descriptionStyle: {
    flex: 1,
    padding: 15,
    color: '#9e15c4'
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)
