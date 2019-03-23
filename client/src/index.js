import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import App from './components/App'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
    uri: 'http://localhost:8001/graphql',
})

ReactDom.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
)
