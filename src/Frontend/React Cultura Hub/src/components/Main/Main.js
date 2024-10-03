import React from 'react'
import styled from 'styled-components'
import Slider from '../Slider/Slider'
import CardSlider from '../Card-Section/Card'

const EventosContainer = styled.div`
  background-color: #cacaca;
  padding: 20px;
  margin-bottom: 40px;
  max-width: 2000px;
  margin-left: auto;
  margin-right: auto;
`

const Eventos = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  justify-content: space-around;
  font-weight: 700;
  font-size: 18px;
`

const LinkEventos = styled.a`
  text-decoration: none;
  color: #e40031;
`

const Main = () => {
  return (
    <>
      <EventosContainer>
        <Eventos>
          <li><LinkEventos href="#">Todos os Eventos</LinkEventos></li>
          <li><LinkEventos href="#">Shows e festas</LinkEventos></li>
          <li><LinkEventos href="#">Cinema, Teatro e Espetáculos</LinkEventos></li>
          <li><LinkEventos href="#">Congressos e Palestras</LinkEventos></li>
          <li><LinkEventos href="#">Festivais</LinkEventos></li>
        </Eventos>
      </EventosContainer>
    </>
  )
}

export default Main;
