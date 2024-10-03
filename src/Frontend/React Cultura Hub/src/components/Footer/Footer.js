import React from 'react'
import styled from 'styled-components'
import logo from '../assets/CHUB7.png'

// Styled components
const FooterContainer = styled.div`
  background-color: #e40031;
  padding: 5rem;   
  max-width: 2000px;
  margin: 0 auto;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`

const FooterImage = styled.img`
  max-width: 12.5rem;
  max-height: 6.25rem;
  width: auto;
  height: auto;
`

const FooterList = styled.ul`
  display: flex;
  gap: 2em;
  margin-top: 1.1em;
  margin-bottom: 6em;
  justify-content: center;
`

const FooterListItem = styled.li`
  list-style: none;
`

const FooterLink = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: white;
`

const FooterCopy = styled.div`
  display: flex;
  justify-content: center;
`

const FooterText = styled.p`
  color: white;
  font-size: 20px;
`

// Componente Footer
const Footer = () => {
  return (
    <FooterContainer>
      <ImgContainer>
        <FooterImage src={logo} alt="Logo" />
      </ImgContainer>
      <FooterList>
        <FooterListItem><FooterLink href="#">Sobre nós</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">FaQ</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">Criar evento</FooterLink></FooterListItem>
        <FooterListItem><FooterLink href="#">Suporte</FooterLink></FooterListItem>
      </FooterList>
      <FooterCopy>
        <FooterText>todos os direitos reservados© 2024</FooterText>
      </FooterCopy>
    </FooterContainer>
  )
}

export default Footer
