import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  text-align: center;
  .Logo {
    height: 200px;
  }
`

function App() {
  return (
    <div className="App">
      <StyledHeader className="App-header">
        <img src={require('./img/logo_neko_nect.jpg')} className="Logo" alt="logo" />
      </StyledHeader>
    </div>
  );
}

export default App
