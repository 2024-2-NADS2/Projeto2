import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const MainTitle = styled.h1`
    text-align: left;
    margin: 20px 0;
    
`

const CardContentContainer = styled.div`
    max-width: 1300px;
    margin: 5em auto;
`

const CardContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

`

const CardWrapper = styled.li`
    list-style: none;
    max-width: 260px;
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
`

const LocalCard = styled.p`
    color: black;
    font-size: 14px;
    font-weight: 300;
    padding: 5px 10px 10px;
`

const AllEvents = () => {
    const eventos = [
        {
            id: 1,
            title: "Exposição Leonardo Da Vinci",
            date: "Ter, 01 Set 11:00",
            local: "Museu Histórico",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Leonardo+Da+Vinci"
        },
        {
            id: 2,
            title: "Festa de Primavera",
            date: "Qui, 15 Set 15:00",
            local: "Parque Central",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Festa+de+Primavera"
        },
        {
            id: 3,
            title: "Teatro: A Tempestade",
            date: "Sab, 25 Set 20:00",
            local: "Teatro Municipal",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Teatro:+A+Tempestade"
        },
        {
            id: 4,
            title: "Cinema ao Ar Livre",
            date: "Dom, 05 Out 18:00",
            local: "Praça da Liberdade",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Cinema+ao+Ar+Livre"
        },
        {
            id: 5,
            title: "Feira de Artesanato",
            date: "Sex, 10 Out 09:00",
            local: "Centro Cultural",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Feira+de+Artesanato"
        },
        {
            id: 5,
            title: "Feira de Artesanato",
            date: "Sex, 10 Out 09:00",
            local: "Centro Cultural",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Feira+de+Artesanato"
        },
        {
            id: 5,
            title: "Feira de Artesanato",
            date: "Sex, 10 Out 09:00",
            local: "Centro Cultural",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Feira+de+Artesanato"
        },
        {
            id: 5,
            title: "Feira de Artesanato",
            date: "Sex, 10 Out 09:00",
            local: "Centro Cultural",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Feira+de+Artesanato"
        },
        {
            id: 5,
            title: "Feira de Artesanato",
            date: "Sex, 10 Out 09:00",
            local: "Centro Cultural",
            image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Feira+de+Artesanato"
        },
    ]

    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/evento/${id}`)
    }

    return (
        <CardContentContainer>
            <MainTitle>Todos os Eventos</MainTitle>
            <CardContainer>
                {eventos.map(evento => (
                    <CardWrapper key={evento.id}>
                        <CardLink onClick={() => handleCardClick(evento.id)}>
                            <CardImage src={evento.image} alt={`Imagem do ${evento.title}`} />
                            <DataEvento>{evento.date}</DataEvento>
                            <CardTitle>{evento.title}</CardTitle>
                            <LocalCard>{evento.local}</LocalCard>
                        </CardLink>
                    </CardWrapper>
                ))}
            </CardContainer>
        </CardContentContainer>
    )
}

export default AllEvents
