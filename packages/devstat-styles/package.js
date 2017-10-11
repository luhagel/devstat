Package.describe({
  name: 'devstat:styles',
  version: '0.1.0',
})

Package.onUse(api => {
  api.use(['fourseven:scss'])

  api.addFiles('lib/stylesheets/main.scss')
})
