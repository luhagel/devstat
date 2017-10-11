Package.describe({
  name: 'devstat:core',
  version: '0.1.0',
})

Package.onUse(api => {
  api.use(['vulcan:core', 'vulcan:forms@1.8.0', 'vulcan:accounts@1.8.0', 'browser-policy'])

  api.mainModule('lib/server/main.js', 'server')
  api.mainModule('lib/client/main.js', 'client')
})
