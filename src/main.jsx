import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter, HashRouter, useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from './Store'
import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic"
import { useEffect } from 'react'
const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};
ReactDOM.render(
  <>
    <Provider store={Store}>
      <HashRouter>
        <ScrollToTop>
          <AlertProvider template={AlertTemplate} {...options} >
            <App />
          </AlertProvider>
        </ScrollToTop>
      </HashRouter>
    </Provider>
  </>,
  document.getElementById('root')
)
