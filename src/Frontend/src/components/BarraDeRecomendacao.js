import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const LinkEventos = styled(Link)`
  text-decoration: none;
  color: #e40031;
`

const Recomendacoes = () => {
  return (
    <EventosContainer>
      <nav>
        <Eventos>
          <li><LinkEventos to="/eventos">Todos os Eventos</LinkEventos></li>
          <li><LinkEventos to="/eventos?tema=show">Shows e festas</LinkEventos></li>
          <li><LinkEventos to="/eventos?tema=cinema">Cinema, Teatro e Espetáculos</LinkEventos></li>
          <li><LinkEventos to="/eventos?tema=palestra">Congressos e Palestras</LinkEventos></li>
          <li><LinkEventos to="/eventos?tema=festival">Festivais</LinkEventos></li>
        </Eventos>
      </nav>
    </EventosContainer>
  )
}

export default Recomendacoes
