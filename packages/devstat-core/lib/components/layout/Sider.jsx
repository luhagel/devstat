import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { registerComponent, withCurrentUser } from 'meteor/vulcan:core'

class Sider extends Component {
  render() {
    return (
      <aside>
        <h2>DevSta.io</h2>
        Hey there, {this.props.currentUser.displayName}
      </aside>
    )
  }
}

Sider.propTypes = {}

registerComponent('Sider', Sider, withCurrentUser)

export default Sider
