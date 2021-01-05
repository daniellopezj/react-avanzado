import React, { createContext, useState } from 'react'

const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, SetIsAuth] = useState(false)

  const value = {
    isAuth,
    activeAuth: () => {
      SetIsAuth(true)
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
