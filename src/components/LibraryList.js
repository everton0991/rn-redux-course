/**
 * Import libs
 *
 * @flow
 */
import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import ListItem from './ListItem'

/** Props type */
type Props = {
  libraries: Array<Object>
}

/** State type */
type State = {}

/**
 * Create Component
 */
class LibraryList extends Component<Props, State> {
  keyExtractor = library => JSON.stringify(library.id)

  renderRow = library => <ListItem library={library} />

  render() {
    const { libraries } = this.props

    return (
      <FlatList
        data={libraries}
        renderItem={this.renderRow}
        keyExtractor={this.keyExtractor}
      />
    )
  }
}

const mapStateToProps = state => ({
  libraries: state.libraries
})

/**
 * Export component
 */
export default connect(mapStateToProps)(LibraryList)
