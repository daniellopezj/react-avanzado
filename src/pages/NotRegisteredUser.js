import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activeAuth }) => {
        return <UserForm onSubmit={activeAuth} />
      }
    }
  </Context.Consumer>
)
