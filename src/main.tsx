import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css'
import { HashRouter } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
// Import all of Bootstrap's JS
import 'bootstrap/dist/css/bootstrap.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      >
        <App />
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>,
)
