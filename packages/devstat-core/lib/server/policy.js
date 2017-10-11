import { Meteor } from 'meteor/meteor'

import { BrowserPolicy } from 'meteor/browser-policy'

Meteor.startup(() => {
  BrowserPolicy.framing.disallow()
  BrowserPolicy.content.disallowInlineScripts()
  // BrowserPolicy.content.disallowEval()
  BrowserPolicy.content.allowInlineStyles()
  BrowserPolicy.content.allowFontDataUrl()
  BrowserPolicy.content.allowSameOriginForAll()

  BrowserPolicy.content.allowOriginForAll('fonts.googleapis.com')
  BrowserPolicy.content.allowOriginForAll('fonts.gstatic.com')
  BrowserPolicy.content.allowOriginForAll('*.googleusercontent.com')
  BrowserPolicy.content.allowOriginForAll('*.gravatar.com')
  BrowserPolicy.content.allowOriginForAll('*.github.com')
  BrowserPolicy.content.allowOriginForAll('*.githubusercontent.com')
  BrowserPolicy.content.allowOriginForAll('*.imgur.com')
  BrowserPolicy.content.allowOriginForAll('*.gyfcat.com')

  BrowserPolicy.content.allowOriginForAll('cdnjs.cloudflare.com')
})
