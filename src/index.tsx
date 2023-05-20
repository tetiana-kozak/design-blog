import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './container/App/App'
import './reset.css'
import './style.scss'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
