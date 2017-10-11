import { Components, addRoute, getDynamicComponent } from 'meteor/vulcan:core'

addRoute({
  name: 'index',
  path: '/',
  componentName: 'Landing',
  layoutName: 'MainLayout',
})
