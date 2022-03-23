import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components';
import App from './pages';
import {GlobalStyle, theme} from './style/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
