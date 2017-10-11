import { createCollection, getDefaultMutations, getDefaultResolvers } from 'meteor/vulcan:core'

import schema from './schema'
import './fragments'

const Teams = createCollection({
  collectionName: 'teams',
  typeName: 'Team',
  schema: schema,
  resolvers: getDefaultResolvers(),
  mutations: getDefaultMutations(),
})

export default Teams
