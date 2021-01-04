import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home'
import { User } from './pages/User'
import { Favs } from './pages/Favs'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Detail } from './pages/Detail'
import { Router } from '@reach/router'

const UserLogged = ({ children }) => {
  return children({ isAuth: true })
}
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />

      </Router>
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <User path='/user' />
                <Favs path='/favs' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/user' />
                <NotRegisteredUser path='/favs' />
              </Router>
        }
      </UserLogged>
      <NavBar />
    </>
  )
}
