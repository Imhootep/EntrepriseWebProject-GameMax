import React from 'react'

export default React.createContext({
  user: {name: '', email: ''},
  updateUser: (name) => {},
})