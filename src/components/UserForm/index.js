/* eslint-disable react/jsx-handler-names */
import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Button, Input } from './styles'
export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder='Email' {...email} />
      <Input placeholder='passworf' type='password' {...password} />
      <Button> Iniciar Sesion</Button>
    </Form>
  )
}
