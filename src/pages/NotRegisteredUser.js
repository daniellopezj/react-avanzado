import React from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activeAuth }) => {
        return (
          <>
            <RegisterMutation>
              {
                (register) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    register({ variables }).then(activeAuth)
                  }
                  return (<UserForm onSubmit={onSubmit} title='Registrarse' />)
                }
              }
            </RegisterMutation>
            <UserForm onSubmit={activeAuth} title='Iniciar Sesion' />
          </>
        )
      }
    }
  </Context.Consumer>
)
