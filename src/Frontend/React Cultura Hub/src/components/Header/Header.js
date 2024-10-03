import React from 'react'
import NavBar from './NavBar'
import styled from 'styled-components' 

// Definindo o Header estilizado
const HeaderContainer = styled.header`
  margin: 0 auto;
  max-width: 2000px;
  width: 100%;
  background-color: #e40031;
`



function Header() {
  return (
    <HeaderContainer>
      <NavBar />
    </HeaderContainer>
  );
}

export default Header
