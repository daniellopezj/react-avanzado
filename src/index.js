// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import Context from './Context'
// Components
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-daniellopez01.vercel.app/graphql'
})

ReactDOM.render(
  <Context.Provider >
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
