import React from 'react'

import { registerComponent, Components, withCurrentUser } from 'meteor/vulcan:core'

const MainLayout = ({ children, currentUser }) => {
  return (
    <div className="app-wrapper split">
      {currentUser && (
        <div className="flex-2">
          <Components.Sider />
        </div>
      )}
      <main className="flex-8">{children}</main>
    </div>
  )
}

registerComponent('MainLayout', MainLayout, withCurrentUser)

export default MainLayout
