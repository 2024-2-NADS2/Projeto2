import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/auth";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

const UserTitle = styled.h1`
    margin: 3em;
    text-align: center;
    font-weight: 300;
    
`

const TitleSection = styled.h2`
    text-align: left;
    margin-bottom: 1.5em;
    font-weight: 200;
    position: relative;
    left: 200px;
`

const SectionProfile = styled.section`
    max-width: 1600px;
    margin: 2em auto;
    border-radius: 20px;
    padding: 2em;
    background-color: rgba(214, 214, 214, 0.4);
    
`

const SectionContent = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    display: flex;
    justify-content: center;
`

const Loading = styled.p`
    text-align: center;
    margin: 6em;
    font-size: 1.2em;
    color: gray;
`

const ErrorMessage = styled.p`
    text-align: center;
    margin: 20em;
    color: red;
    font-weight: bold;
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

const ButtonsAdminContent = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    display: flex;
    gap: 50px;

`

const ButtonApproveEvents = styled(Link)`
    text-decoration: none;
    margin-top: 10px;
    padding: 7px 20px;
    border: none;
    border-radius: 5px;
    background-color: #8a8a8a;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #e40031;
    }
`
const ButtonAllUsers = styled(Link)`
    text-decoration: none;
    margin-top: 10px;
    padding: 7px 20px;
    border: none;
    border-radius: 5px;
    background-color: #8a8a8a;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #e40031;
    }
`

const UserContent = () => {
    const navigate = useNavigate()
    const formatData = (dateString) => {
        const date = new Date(dateString)
        let formattedDate = format(date, "EEEE, dd 'de' MMM", { locale: ptBR })
        return formattedDate.toUpperCase()
      }
    
      const formatHorario = (horarioString) => {
        return horarioString.slice(0, 5)
      }
    const { id: userId } = useParams()
    const { isAuthenticated, userDetails } = useContext(AuthContext)
    const [currentUser, setCurrentUser] = useState(null)
    const [userEvents, setUserEvents] = useState([])
    const [userEventsSaved, setUserEventsSaved] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const isAdmin = userDetails.role === "Admin"

    const handleCardClick = (id) => {
        navigate(`/eventos/${id}`)
    }

    useEffect(() => {
        if (isAuthenticated === null) return

        const fetchUser = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`http://localhost:3001/api/perfil/${userId}`)
                if (!response.ok) {
                    throw new Error("Usuário não encontrado")
                }
                const data = await response.json()
                setCurrentUser(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUser();
    }, [userId, isAuthenticated])


    useEffect(() => {
        if (!userId) return
    
        const fetchEvents = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`http://localhost:3001/api/perfil/eventos/${userId}`)
                if (!response.ok) {
                    throw new Error(`Erro ao buscar eventos do usuário: ${response.statusText}`)
                }
                const data = await response.json();
                setUserEvents(data)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
    
        fetchEvents()
    }, [userId])

    useEffect(() => {
        if (!userId) return
    
        const fetchEvents = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(`http://localhost:3001/api/perfil/eventos-salvos/${userId}`)
                if (!response.ok) {
                    throw new Error(`Erro ao buscar eventos salvos: ${response.statusText}`)
                }
                const data = await response.json();
                setUserEventsSaved(data)    
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
    
        fetchEvents()
    }, [userId])

    if (loading) {
        return <Loading>Carregando...</Loading>
    }

    if (error) {
        return <ErrorMessage>{error}</ErrorMessage>
    }

    if (!currentUser) {
        return <ErrorMessage>Usuário não encontrado.</ErrorMessage>
    }

    return (
        <>
            <UserTitle>Bem-vindo, {`${currentUser.nome} ${currentUser.sobrenome}`}</UserTitle>

        {isAdmin && (
            <SectionProfile>
                <TitleSection>Administração:</TitleSection>
                <ButtonsAdminContent>
                    <ButtonAllUsers to="/aprovacao-de-eventos">APROVAR EVENTOS</ButtonAllUsers>
                    <ButtonApproveEvents to="/adm-usuarios">USUÁRIOS</ButtonApproveEvents>
                </ButtonsAdminContent>
            </SectionProfile>
        )}
            <SectionProfile>
                <TitleSection>Eventos salvos:</TitleSection>
                <SectionContent>
                    {userEventsSaved.length > 0 ? (
                        <CardContainer>
                            {userEventsSaved.map(evento => (
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
                    ) : (
                        <p>Nenhum evento salvo.</p>
                    )}
                </SectionContent>
            </SectionProfile>

            <SectionProfile>
                <TitleSection>Meus eventos:</TitleSection>
                <SectionContent>
                    {userEvents.length > 0 ? (
                        <CardContainer>
                            {userEvents.map(evento => (
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
                    ) : (
                        <p>Nenhum evento criado.</p>
                    )}
                </SectionContent>
            </SectionProfile>
        </>
    )
}

export default UserContent
