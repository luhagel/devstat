const schema = {
  _id: {
    type: String,
    optional: true,
    viewableBy: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onInsert: (document, currentUser) => {
      return new Date()
    },
  },
  updatedAt: {
    type: Date,
    optional: true,
    viewableBy: ['guests'],
    onEdit: (document, currentUser) => {
      return new Date()
    },
  },
  userId: {
    label: 'Owner ID',
    type: String,
    optional: true,
    viewableBy: ['guests'],
    resolveAs: {
      fieldName: 'user',
      type: 'User',
      resolver: (team, args, context) => {
        return context.Users.findOne({ _id: team.userId }, { fields: context.Users.getViewableFields(context.currentUser, context.Users) })
      },
      addOriginalField: true,
    }, // resolve this field as "user" on the client
  },
  name: {
    type: 'string',
    viewableBy: ['guests'],
    insertableBy: ['members'],
    editableBy: ['members'],
  },
}

export default schema
