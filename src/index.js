import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App'


const client = new ApolloClient({
  uri: 'https://afternoon-dusk-79716.herokuapp.com/',
});


const app = <ApolloProvider client ={client}>
    <App />
</ApolloProvider>

ReactDOM.render(app,document.getElementById("root"))