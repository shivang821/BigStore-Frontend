import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic"
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}
ReactDOM.render(
  <>
    <Provider store={Store}>
      <HashRouter>
        <AlertProvider template={AlertTemplate} {...options} >
          <App />
        </AlertProvider>
      </HashRouter>
    </Provider>
  </>,
  document.getElementById('root')
)