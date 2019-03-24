import React from 'react'
import ReactDom from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import './index.css'
import App from './components/App'
import Signin from './components/Auth/Signin'
import Signup from './components/Auth/Signup'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
    uri: 'http://localhost:8001/graphql',
})

const Root = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <Redirect to="/" />
        </Switch>
    </Router>
)

ReactDom.render(
    <ApolloProvider client={client}>
        <Root />
    </ApolloProvider>,
    document.getElementById('root')
)
