import React from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react"

// Styled components
const SessaoSwiper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitulo = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 70px 100px 50px;
`

const CardWrapper = styled.div`
  max-width: 1100px;
  margin: 0 60px 35px;
  padding: 20px 10px;
  position: relative; /* Permitir posicionamento relativo para os botões */
`

const CardLink = styled.a`
  display: block;
  background: #fff;
  user-select: none;
  border-radius: 12px;
  text-decoration: none;
  transition: 0.2s ease;
  &:hover {
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.05);
  }
  &:active{
    cursor: grabbing;
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
  padding: 5px;
  font-size: 14px;
  font-weight: 300;
  margin: 10px;
`

const CardTitle = styled.h2`
  color: #000;
  font-size: 1.19rem;
  font-weight: 600;
  margin-left: 10px;
`

const LocalCard = styled.p`
  color: black;
  font-size: 14px;
  font-weight: 300;
  margin-left: 10px;
  padding-bottom: 13px;
`

// Botões de navegação estilizados
const SwiperButton = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10; /* Para que os botões fiquem acima dos cards */
  color: #e40031;
  font-size: 30px; /* Ajuste o tamanho dos botões conforme necessário */

  &.swiper-button-prev {
    left: 10px; 
  }

  &.swiper-button-next {
    right: 10px; 
  }
`

// React component
const CardSlider = () => {
  return (
    <SessaoSwiper>
      <SectionTitulo>Tema 1</SectionTitulo>
      <CardWrapper>
        <Swiper
           // Usando Navigation - a terminar
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev", // Referência para o botão anterior
            nextEl: ".swiper-button-next", // Referência para o botão próximo
          }}
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
          {/* Adicionando 8 slides */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardLink href="#">
                <CardImage
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Slide+${index + 1}`}
                  alt={`Card Image ${index + 1}`}
                />
                <DataEvento>Sáb, 29 Ago 20:00</DataEvento>
                <CardTitle>Show Matuê Ft. Mc Carol {index + 1}</CardTitle>
                <LocalCard>Rua Mariano Procópio</LocalCard>
              </CardLink>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <SwiperButton className="swiper-button-prev"></SwiperButton>
          <SwiperButton className="swiper-button-next"></SwiperButton>
        </Swiper>
      </CardWrapper>
      <SectionTitulo>Tema 2</SectionTitulo>
      <CardWrapper>
        <Swiper
           // Usando Navigation
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev", // Referência para o botão anterior
            nextEl: ".swiper-button-next", // Referência para o botão próximo
          }}
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
          {/* Adicionando 8 slides */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardLink href="#">
                <CardImage
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Slide+${index + 1}`}
                  alt={`Card Image ${index + 1}`}
                />
                <DataEvento>Sáb, 29 Ago 20:00</DataEvento>
                <CardTitle>Show Matuê Ft. Mc Carol {index + 1}</CardTitle>
                <LocalCard>Rua Mariano Procópio</LocalCard>
              </CardLink>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <SwiperButton className="swiper-button-prev"></SwiperButton>
          <SwiperButton className="swiper-button-next"></SwiperButton>
        </Swiper>
      </CardWrapper>
      <SectionTitulo>Tema 3</SectionTitulo>
      <CardWrapper>
        <Swiper
           // Usando Navigation
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev", // Referência para o botão anterior
            nextEl: ".swiper-button-next", // Referência para o botão próximo
          }}
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
          {/* Adicionando 8 slides */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardLink href="#">
                <CardImage
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Slide+${index + 1}`}
                  alt={`Card Image ${index + 1}`}
                />
                <DataEvento>Sáb, 29 Ago 20:00</DataEvento>
                <CardTitle>Show Matuê Ft. Mc Carol {index + 1}</CardTitle>
                <LocalCard>Rua Mariano Procópio</LocalCard>
              </CardLink>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <SwiperButton className="swiper-button-prev"></SwiperButton>
          <SwiperButton className="swiper-button-next"></SwiperButton>
        </Swiper>
      </CardWrapper>
      <SectionTitulo>Tema 4</SectionTitulo>
      <CardWrapper>
        <Swiper
           // Usando Navigation
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev", // Referência para o botão anterior
            nextEl: ".swiper-button-next", // Referência para o botão próximo
          }}
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
          {/* Adicionando 8 slides */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardLink href="#">
                <CardImage
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Slide+${index + 1}`}
                  alt={`Card Image ${index + 1}`}
                />
                <DataEvento>Sáb, 29 Ago 20:00</DataEvento>
                <CardTitle>Show Matuê Ft. Mc Carol {index + 1}</CardTitle>
                <LocalCard>Rua Mariano Procópio</LocalCard>
              </CardLink>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <SwiperButton className="swiper-button-prev"></SwiperButton>
          <SwiperButton className="swiper-button-next"></SwiperButton>
        </Swiper>
      </CardWrapper>
      <SectionTitulo>Tema 5</SectionTitulo>
      <CardWrapper>
        <Swiper
           // Usando Navigation
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev", // Referência para o botão anterior
            nextEl: ".swiper-button-next", // Referência para o botão próximo
          }}
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
          {/* Adicionando 8 slides */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardLink href="#">
                <CardImage
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Slide+${index + 1}`}
                  alt={`Card Image ${index + 1}`}
                />
                <DataEvento>Sáb, 29 Ago 20:00</DataEvento>
                <CardTitle>Show Matuê Ft. Mc Carol {index + 1}</CardTitle>
                <LocalCard>Rua Mariano Procópio</LocalCard>
              </CardLink>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <SwiperButton className="swiper-button-prev"></SwiperButton>
          <SwiperButton className="swiper-button-next"></SwiperButton>
        </Swiper>
      </CardWrapper>
      <SectionTitulo>Tema 6</SectionTitulo>
      <CardWrapper>
        <Swiper
           // Usando Navigation
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev", // Referência para o botão anterior
            nextEl: ".swiper-button-next", // Referência para o botão próximo
          }}
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
          {/* Adicionando 8 slides */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardLink href="#">
                <CardImage
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Slide+${index + 1}`}
                  alt={`Card Image ${index + 1}`}
                />
                <DataEvento>Sáb, 29 Ago 20:00</DataEvento>
                <CardTitle>Show Matuê Ft. Mc Carol {index + 1}</CardTitle>
                <LocalCard>Rua Mariano Procópio</LocalCard>
              </CardLink>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <SwiperButton className="swiper-button-prev"></SwiperButton>
          <SwiperButton className="swiper-button-next"></SwiperButton>
        </Swiper>
      </CardWrapper>
      <SectionTitulo>Tema 7</SectionTitulo>
      <CardWrapper>
        <Swiper
           // Usando Navigation
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev", // Referência para o botão anterior
            nextEl: ".swiper-button-next", // Referência para o botão próximo
          }}
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
          {/* Adicionando 8 slides */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardLink href="#">
                <CardImage
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Slide+${index + 1}`}
                  alt={`Card Image ${index + 1}`}
                />
                <DataEvento>Sáb, 29 Ago 20:00</DataEvento>
                <CardTitle>Show Matuê Ft. Mc Carol {index + 1}</CardTitle>
                <LocalCard>Rua Mariano Procópio</LocalCard>
              </CardLink>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <SwiperButton className="swiper-button-prev"></SwiperButton>
          <SwiperButton className="swiper-button-next"></SwiperButton>
        </Swiper>
      </CardWrapper>
      <SectionTitulo>Tema 8</SectionTitulo>
      <CardWrapper>
        <Swiper
           // Usando Navigation
          spaceBetween={30}
          navigation={{
            prevEl: ".swiper-button-prev", // Referência para o botão anterior
            nextEl: ".swiper-button-next", // Referência para o botão próximo
          }}
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
          {/* Adicionando 8 slides */}
          {Array.from({ length: 8 }).map((_, index) => (
            <SwiperSlide key={index}>
              <CardLink href="#">
                <CardImage
                  src={`https://placehold.co/600x400/000000/FFFFFF/png?text=Slide+${index + 1}`}
                  alt={`Card Image ${index + 1}`}
                />
                <DataEvento>Sáb, 29 Ago 20:00</DataEvento>
                <CardTitle>Show Matuê Ft. Mc Carol {index + 1}</CardTitle>
                <LocalCard>Rua Mariano Procópio</LocalCard>
              </CardLink>
            </SwiperSlide>
          ))}

          {/* Botões de navegação */}
          <SwiperButton className="swiper-button-prev"></SwiperButton>
          <SwiperButton className="swiper-button-next"></SwiperButton>
        </Swiper>
      </CardWrapper>
    </SessaoSwiper>
  )
}

export default CardSlider
