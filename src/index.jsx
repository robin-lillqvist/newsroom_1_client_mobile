import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './state/store/configureStore'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios'

// axios.defaults.baseURL = "http://localhost:3000/api";
axios.defaults.baseURL = 'https://newsroom-team-1.herokuapp.com/api'

const store = configureStore()
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
