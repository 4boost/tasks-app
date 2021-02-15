import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './styles/global'
import theme from './styles/styles'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div className="App"></div>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
