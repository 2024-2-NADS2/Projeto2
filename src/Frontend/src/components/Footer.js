import React from 'react'
import styled from 'styled-components'
import logo from './assets/CHUB7.png'
import { Link } from 'react-router-dom'

const FooterContainer = styled.div`
  background-color: #e40031;
  padding: 5rem;   
  max-width: 2000px;
  margin:10em auto 0;
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

const FooterLink = styled(Link)`
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
        <FooterListItem><FooterLink to="/sobre">Sobre nós</FooterLink></FooterListItem>
        <FooterListItem><FooterLink to="/faq">FaQ</FooterLink></FooterListItem>
        <FooterListItem><FooterLink to="/criar-evento">Criar evento</FooterLink></FooterListItem>
        <FooterListItem><FooterLink to="/suporte">Suporte/Contato</FooterLink></FooterListItem>
      </FooterList>
      <FooterCopy>
        <FooterText>todos os direitos reservados© 2024</FooterText>
      </FooterCopy>
    </FooterContainer>
  )
}

export default Footer
