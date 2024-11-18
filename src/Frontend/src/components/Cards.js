import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SectionContainer = styled.section`
  max-width: 1400px;
  margin: 0 auto;
`

const SectionTitulo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 70px 100px 50px;
`

const CardsContainer = styled.div`
  margin: 0 auto;
`

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const CardWrapper = styled.li`
  list-style: none;
  max-width: 270px;
  max-height: 240px;
  margin-bottom: 20px;
`

const CardLink = styled.a`
  display: block;
  background-color: white;
  border-radius: 12px;
  text-decoration: none;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
  }
`

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

const DataEvento = styled.p`
  color: #e40031;
  font-size: 14px;
  font-weight: 300;
  margin: 10px 10px 0 10px;
`

const CardTitle = styled.h2`
  color: #000;
  font-size: 1.19rem;
  font-weight: 500;
  margin: 5px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const LocalCard = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 300;
  padding: 5px 10px 10px;
`
const Loading = styled.p`
    text-align: center;
    margin-top: 4em;
    font-size: 1.2em;
    color: gray;
`


const CardCarrossel = () => {
  const [loading, setLoading] = useState(true)
  const formatData = (dateString) => {
    const date = new Date(dateString)
    let formattedDate = format(date, "EEEE, dd 'de' MMM", { locale: ptBR })
    return formattedDate.toUpperCase()
  }

  const formatHorario = (horarioString) => {
    return horarioString.slice(0, 5)
  }

  const [eventos, setEventos] = useState({})
  const navigate = useNavigate()

  const handleCardClick = (id) => {
    navigate(`/eventos/${id}`)
  }

  useEffect(() => {
    // Temas para carregar
    const temas = ['Show', 'Gastronomia', 'Palestra', 'Esportes']

    // Criando um array para buscar eventos de cada tema
    const fetchEventos = temas.map((tema) =>
      fetch(`http://localhost:3001/api/${tema}`)
        .then((res) => res.json())
        .then((data) => ({
          // Limita os eventos em 4 por tema
          [tema]: Array.isArray(data) ? data.slice(0, 4) : [], 
        }))
    )

    Promise.all(fetchEventos)
      .then((eventosArray) => {
        // Atualiza o estado com os eventos agrupados por tema
        const eventosOrganizados = eventosArray.reduce((acc, evento) => {
          return { ...acc, ...evento } 
        }, {})
        setEventos(eventosOrganizados)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erro ao buscar eventos: ", err)
        setLoading(false)
      })
  }, []) 

  if (loading) {
    return <Loading>Carregando...</Loading>
  }


  return (
    <SectionContainer>
      {Object.keys(eventos).map((tema) => (
        <div key={tema}>
          <SectionTitulo>{tema}</SectionTitulo>
          <CardList>
            {eventos[tema].length > 0 ? (
              eventos[tema].map((evento) => (
                <CardsContainer key={evento.id_evento}>
                <CardWrapper>
                  <CardLink onClick={() => handleCardClick(evento.id_evento)}>
                    <CardImage
                      src={evento.imagemUrl}
                      alt={`Imagem do ${evento.titulo}`}
                    />
                    <DataEvento>
                      {formatData(evento.data_evento)} - {formatHorario(evento.horario)}
                    </DataEvento>
                    <CardTitle>{evento.titulo}</CardTitle>
                    <LocalCard>{evento.rua}, {evento.numero}</LocalCard>
                  </CardLink>
                </CardWrapper>
                </CardsContainer>
              ))
            ) : (
              <p>Não há eventos disponíveis para este tema.</p>
            )}
          </CardList>
        </div>
      ))}
    </SectionContainer>
  )
}

export default CardCarrossel
