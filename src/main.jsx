import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter,HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Store'
ReactDOM.render(
  <>
    <Provider store={Store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </>,
  document.getElementById('root')
)