import styled from 'styled-components'
import { useNavigate, useLocation } from "react-router-dom"
import React, { useState, useEffect, useContext } from 'react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { SearchContext } from '../context/SearchContext'


const SelectionSection = styled.section`
    display: flex;
    justify-content: space-between;
`
const SelectionGroup = styled.div`
    display: flex;
    gap: 1em;
    margin: 1em;

`
const SelectionBox = styled.select`
    background-color: ${props => props.selected ? '#E40031' : 'transparent'}; 
    color: ${props => props.selected ? '#fff' : '#E40031'};
    width: 11em;
    height: 38px;
    margin-top: 10px;
    border: 2px solid #E40031;
    border-radius: 5px;
    text-align: center;
    appearance: none;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    outline: none;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;
    
`

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

const SectionGroup2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 1em;
`

const DateSelection = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;

`

const CleanBtn = styled.button`
    width: 10em;
    height: 2em;
    border: none;
    text-align: center;
    background-color: transparent;
    color: #E40031;
    outline: none;
    font-size: 12px;
    font-weight: 400;
    cursor: pointer;
    &:hover { 
        background-color: #E40031; color: #fff; 
    }
`

const LabelsDate = styled.label`
    color: #E40031;
`

const DateGroup = styled.div`
    display: flex;
    gap: 2em;
    align-content: center;
`

const DateInput = styled.input.attrs({ type: 'date' })`
    background-color: ${props => props.selected ? '#E40031' : 'transparent'};
    color: ${props => props.selected ? '#fff' : '#E40031'};
    width: 12em;
    height: 38px;
    margin-top: 5px;
    border: 2px solid #E40031;
    border-radius: 5px;
    text-align: center;
    padding: 0 1em;
    appearance: none; 
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    font-size: 14px;
    font-weight: 300;
    cursor: pointer;

    &:focus {
        border-color: #960019;
    }

    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        
    }
`



const AllEvents = () => {
    const { searchQuery } = useContext(SearchContext)
    
    const today = new Date().toISOString().split('T')[0]

    const formatData = (dateString) => {
        const date = new Date(dateString)
        let formattedDate = format(date, "EEEE, dd 'de' MMM", { locale: ptBR })
        return formattedDate.toUpperCase()
    }
    const formatHorario = (horarioString) => {
        return horarioString.slice(0, 5)
    }

    const clearFilters = () => {
        setSelectedLocation('')
        setSelectedOrder('')
        setSelectedCategory('')
        setSelectedPrice('')
        setSelectedRating('')
        setStartDate('')
        setEndDate('')
        fetchEvents() 
    }

  
    const location = useLocation();
    const [selectedLocation, setSelectedLocation] = useState('')
    const [selectedOrder, setSelectedOrder] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [selectedPrice, setSelectedPrice] = useState('')
    const [selectedRating, setSelectedRating] = useState('')
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [title, setTitle] = useState('Todos os Eventos')
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const eventsPerPage = 16
    
    const navigate = useNavigate()

    const handleCardClick = (id) => {
        navigate(`/eventos/${id}`)
    }

    //Método para obter e filtrar todos os eventos
    const fetchEvents = async (filters = {}) => {
        setLoading(true);
    
        const validFilters = Object.fromEntries(
            Object.entries(filters).filter(([_, v]) => v !== undefined && v !== '')
        )
    
        const query = new URLSearchParams(validFilters).toString()
        
        try {
            const response = await fetch(`http://localhost:3001/api/eventos?${query}`)
            if (!response.ok) {
                const errorText = await response.text()
                console.error("Erro no response:", errorText)
                throw new Error(`Erro ao buscar eventos: ${errorText}`)
            }
            const data = await response.json()
            setEvents(data)
        } catch (error) {
            console.error("Erro ao buscar eventos:", error.message)
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }



    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        const temaFromUrl = searchParams.get('tema');
        const queryFromUrl = searchParams.get('query')
        const cidadeFromUrl = searchParams.get('cidade')
    
        // Atualizar o título dinamicamente
        if (queryFromUrl) {
            setTitle(`Resultados para "${queryFromUrl}"`)
        } else if (cidadeFromUrl) {
            setTitle(`Eventos em ${cidadeFromUrl}`)
        }else {
            setTitle('Todos os Eventos')
        }
    
        // Recarregar eventos com os filtros
        fetchEvents({
            tema: temaFromUrl || '',
            query: queryFromUrl || '', 
            cidade: cidadeFromUrl || '' 
        })
    }, [location])

    useEffect(() => {
        const filters = {
            cidade: selectedLocation || '',
            order: selectedOrder || '',
            tema: selectedCategory || '',
            preco: selectedPrice || '',
            classificacao: selectedRating || '',
            startDate: startDate || '',
            endDate: endDate || ''
        }
    
        // Fetch para eventos com ou sem filtro
        if (!Object.values(filters).some(value => value)) {
            fetchEvents()
        } else {
            fetchEvents(filters)
        }
    }, [selectedLocation, selectedOrder, selectedCategory, selectedPrice, selectedRating, startDate, endDate])
    

    const handleDateChange = (type, value) => {
        if(type === 'startDate'){
            setStartDate(value)
            setEndDate('')
            fetchEvents({startDate: value, endDate: value})
        }else if (type === 'endDate'){
            setEndDate(value)
            if(startDate){
                fetchEvents({startDate, endDate:value})
            }
        }
    }

    // Paginação
    const startIndex = currentPage * eventsPerPage
    const selectedEvents = events.slice(startIndex, startIndex + eventsPerPage)
    const totalPages = Math.ceil(events.length / eventsPerPage)

    return (

        <CardContentContainer>
            <MainTitle>{title}</MainTitle>

            <SelectionSection>
                <SelectionGroup>
                    <SelectionBox
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        selected={selectedLocation !== ''}
                    >
                        <option value="">LOCALIZAÇÃO</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Campinas">Campinas</option>
                        <option value="Santos">Santos</option>
                    </SelectionBox>
                    <SelectionBox
                        value={selectedOrder}
                        onChange={(e) => setSelectedOrder(e.target.value)}
                        selected={selectedOrder !== ''}
                    >
                        <option value="">ORDERNAR POR</option>
                        <option value="Relevância">Relevância</option>
                        <option value="Data">Data</option>
                    </SelectionBox>
                </SelectionGroup>

                <SelectionGroup>
                    <SelectionBox
                        value={selectedRating}
                        onChange={(e) => setSelectedRating(e.target.value)}
                        selected={selectedRating !== ''}
                    >
                        <option value="">CLASSIFICAÇÃO</option>
                        <option value="Livre">Livre</option>
                        <option value="Para adultos">Para adultos</option>
                        <option value="Para jovens">Jovens</option>
                        <option value="Infantil">Infantil</option>
                    </SelectionBox>
                    <SelectionBox
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        selected={selectedCategory !== ''}
                    >
                        <option value="">TEMA</option>
                        <option value="show">Show</option>
                        <option value="festival">Festival</option>
                        <option value="gastronomia">Gastronomia</option>
                        <option value="palestra">Palestra</option>
                        <option value="teatro">Teatro</option>
                        <option value="cultura popular">Cultura Popular</option>
                        <option value="cinema">Cinema</option>
                        <option value="dança">Dança</option>
                        <option value="esportes">Esportes</option>
                        <option value="stand-up">Stand-up</option>
                    </SelectionBox>
                    <SelectionBox
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        selected={selectedPrice !== ''}
                    >
                        <option value="">PREÇO</option>
                        <option value="Pago">Pago</option>
                        <option value="gratuito">Gratuito</option>
                    </SelectionBox>
                </SelectionGroup>
            </SelectionSection>

            <SectionGroup2>
                <DateGroup>
                    <DateSelection>
                        <LabelsDate>Data início</LabelsDate>
                        <DateInput
                            min={today}
                            type="date"
                            value={startDate}
                            onChange={(e) => handleDateChange('startDate',e.target.value)}
                        />
                    </DateSelection>
                    <DateSelection>
                        <LabelsDate>Data fim</LabelsDate>
                        <DateInput
                            type="date"
                            value={endDate}
                            onChange={(e) => handleDateChange('endDate',e.target.value)}
                        />
                    </DateSelection>
                </DateGroup>

                <CleanBtn onClick={clearFilters}>LIMPAR FILTROS</CleanBtn>
            </SectionGroup2>

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
export default AllEvents
