import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activeAuth } = useContext(Context)
  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activeAuth(signup)
              })
            }
            const errorMsg = error && 'El usuario ya existe o hay un problema'
            return (<UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />)
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activeAuth(login)
              })
            }
            const errorMsg = error && 'el usuario no existe o datos incorrectos'
            return (
              <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesion' />
            )
          }
        }
      </LoginMutation>
    </>
  )
}
