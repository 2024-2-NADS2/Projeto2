import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from "react-router-dom"; 


const SectionContainer = styled.section`
  max-width: 1600px;
  margin: 0 auto;
`
const CardContainer = styled.ul`
  
`

const SectionTitulo = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 70px 100px 50px;
`
const CardWrapper = styled.li`
  max-width: 260px;
  max-height: 240px;
  list-style: none;
  margin: 0 auto;
  
`

const CardLink = styled.a`
  display: block;
  background-color: white;
  border-radius: 12px;
  text-decoration: none;
  transition: 0.2s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.45);
  }
`

const CardImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  aspect-ratio: 16 / 9;
  object-fit: cover;
`

const DataEvento = styled.p`
  color: #e40031;
  width: fit-content;
  font-size: 14px;
  font-weight: 300;
  margin: 10px 0 0px 10px;

`

const CardTitle = styled.h2`
  color: #000;
  font-size: 1.19rem;
  font-weight: 500;
  margin: 5px 10px 5px 10px;
`

const LocalCard = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 300;
  padding: 5px 0px 10px 10px;
`

const SwiperButton = styled.div`
  cursor: pointer;
  color: #e40031;

  &.swiper-button-prev {
    left: 10px;
  }

  &.swiper-button-next {
    right: 10px;
  }
`
const CardContentContainer = styled.div`
  width: 250px;
  height: 250px;
`

// múltiplos temas
const temas = [
  {
    tema: "Shows",
    eventos: [
      {
        id: 1,
        title: "Show Matuê Ft. Mc Carol",
        date: "Sáb, 29 Ago 20:00",
        local: "Rua Mariano Procópio",
        image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Show+Matuê",
      },
      {
        id: 2,
        title: "Show Tribalistas",
        date: "Dom, 30 Ago 19:00",
        local: "Parque das Águas",
        image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Show+Tribalistas",
      },
      {
        id: 3,
        title: "Show Matuê Ft. Mc Carol",
        date: "Sáb, 29 Ago 20:00",
        local: "Rua Mariano Procópio",
        image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Show+Matuê",
      },
      {
        id: 4,
        title: "Show Tribalistas",
        date: "Dom, 30 Ago 19:00",
        local: "Parque das Águas",
        image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Show+Tribalistas",
      },
      {
        id: 5,
        title: "Show Matuê Ft. Mc Carol",
        date: "Sáb, 29 Ago 20:00",
        local: "Rua Mariano Procópio",
        image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Show+Matuê",
      },
      {
        id: 6,
        title: "Show Tribalistas",
        date: "Dom, 30 Ago 19:00",
        local: "Parque das Águas",
        image: "https://placehold.co/600x400/000000/FFFFFF/png?text=Show+Tribalistas",
      },
    ],
  },
  
]


const CardCarrossel = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/eventos/${id}`)
  }

  return (
    <>
    {temas.map((temaData, index) => (
      <SectionContainer key={index}>
        <SectionTitulo>{temaData.tema}</SectionTitulo>
        <Swiper 
          modules={[Navigation]}
          spaceBetween={30}
          grabCursor
          navigation
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {temaData.eventos.map((evento) => (
            <SwiperSlide key={evento.id}>
              <CardWrapper>
                <CardLink onClick={() => handleCardClick(evento.id)}>
                  <CardImage src={evento.image} alt={`Imagem do ${evento.title}`} />
                  <DataEvento>{evento.date}</DataEvento>
                  <CardTitle>{evento.title}</CardTitle>
                  <LocalCard>{evento.local}</LocalCard>
                </CardLink>
              </CardWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionContainer>
    ))}
  </>
  
  )
}

export default CardCarrossel
