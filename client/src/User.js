import React, { useContext } from 'react'
import userContext from '../userContext'

export const User = () => {
  const { user } = useContext(userContext)
  const handleChange = (e) => {
    updateTheme(e.target.value)
  }
  return (
    {user}
  )
}