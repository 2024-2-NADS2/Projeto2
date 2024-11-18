import styled from 'styled-components'
import { useNavigate } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'


const MainTitle = styled.h1`
    text-align: left;
    margin: 20px 0;
`

const CardContentContainer = styled.div`
    max-width: 1300px;
    margin: 5em auto;
`

const CardContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
`

const CardWrapper = styled.li`
    list-style: none;
    flex: 1 1 270;
    max-width: 270px;
    max-height: 240px;
    margin: 1em; 
`

const CardLink = styled.a`
    display: block;
    background-color: white;
    border-radius: 12px;
    text-decoration: none;
    transition: 0.2s ease;
    cursor: pointer;
    &:hover {
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
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

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 60px 0;
`

const SpanPaginationTxt = styled.span`
    font-size: 20px;
    font-weight: 290;
`

const PaginationButton = styled.button`
    margin: 0 5px;
    padding: 10px 15px;
    border: none;
    background-color: #960019;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    &:disabled {
        background-color: #ccc; 
        cursor: not-allowed;
    }
`

const EventStatus = () =>{
    const formatData = (dateString) => {
        const date = new Date(dateString)
        let formattedDate = format(date, "EEEE, dd 'de' MMM", { locale: ptBR })
        return formattedDate.toUpperCase()
    }
    const formatHorario = (horarioString) => {
        return horarioString.slice(0, 5)
    }

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const eventsPerPage = 16

    const navigate = useNavigate()

    const handleCardClick = (id) => {
        navigate(`/eventos/${id}`)
    }


    const startIndex = currentPage * eventsPerPage
    const selectedEvents = events.slice(startIndex, startIndex + eventsPerPage)
    const totalPages = Math.ceil(events.length / eventsPerPage)

    useEffect(() => {
        const fetchEvents = async () => {
          setLoading(true)
          try {
            const response = await fetch('http://localhost:3001/api/eventos-status')
            if (!response.ok) {
              throw new Error('Erro ao buscar eventos')
            }
            const data = await response.json()
            setEvents(data)
          } catch (error) {
            setError(error.message)
          } finally {
            setLoading(false)
          }
        }
        fetchEvents()
      }, [])
      

return (
    <CardContentContainer>
        <MainTitle>Eventos para aprovação</MainTitle>

        <CardContainer>
            {selectedEvents.map(evento => (
                <CardWrapper key={evento.id_evento}>
                    <CardLink onClick={() => handleCardClick(evento.id_evento)}>
                        <CardImage src={evento.imagemUrl} alt={`Imagem do ${evento.titulo}`} />
                        <DataEvento>{formatData(evento.data_evento)} - {formatHorario(evento.horario)}</DataEvento>
                        <CardTitle>{evento.titulo}</CardTitle>
                        <LocalCard>{evento.rua}, {evento.numero}</LocalCard>
                    </CardLink>
                </CardWrapper>
            ))}
        </CardContainer>

        <PaginationContainer>
            <PaginationButton 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                disabled={currentPage === 0}>Anterior
            </PaginationButton>
            <SpanPaginationTxt>{`Página ${currentPage + 1} de ${totalPages}`}</SpanPaginationTxt>
            <PaginationButton 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))} 
                disabled={currentPage === totalPages - 1}>Próxima
            </PaginationButton>
        </PaginationContainer>
    </CardContentContainer>
)
}

export default EventStatus