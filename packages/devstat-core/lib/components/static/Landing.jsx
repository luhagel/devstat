import React from 'react'

import { registerComponent, Components, withCurrentUser } from 'meteor/vulcan:core'

const ContentLoggedOut = () => {
  return (
    <div className="logged-out">
      <Components.AccountsLoginForm title="Sign In Now!" />
      <h2>DevStat helps you keep track of your applicants, student, you name it and companies looking to hire them!</h2>
    </div>
  )
}

const ContentLoggedIn = ({ currentUser }) => {
  return (
    <div className="logged-in">
      <h2>Great to have you here!</h2>
      <a href="#" className="btn btn-primary">
        Let's GO!
      </a>
    </div>
  )
}

const Landing = ({ currentUser }) => {
  return (
    <div className="landing-wrapper">
      <h1>Welcome to > DevStat.io_</h1>
      {currentUser ? <ContentLoggedIn currentUser={currentUser} /> : <ContentLoggedOut />}
    </div>
  )
}

registerComponent('Landing', Landing, withCurrentUser)

export default Landing
