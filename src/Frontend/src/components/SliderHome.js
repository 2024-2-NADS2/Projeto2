import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import axios from 'axios';
import 'swiper/css/pagination';
import 'swiper/css';

const SlideContainer = styled.div`
  max-width: 1280px;
  height: 32rem;
  margin: 0 auto;
`

const SlideLink = styled.a`
  width: 100%;
`
const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  cursor: pointer;
`

const StyledSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    background-color: #ff5733;
  }

  .swiper-pagination-bullet-active {
    background-color: #e40031;
  }
`

const Loading = styled.p`
    text-align: center;
    padding: 30px;
    margin-top: 2em;
    font-size: 1.2em;
    color: gray;
`


const HomeSlider = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const [events, setEvents] = useState([]) // Estado para armazenar os eventos


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/banner-eventos')
        const Events = (response.data).slice(0, 7)
        setEvents(Events)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar eventos:', error)
      }
    }

    fetchEvents() // Chamada da função para buscar eventos
  }, [])

  const handleSwiperClick = (id) => {
    navigate(`/eventos/${id}`)
  }

  if (loading) {
    return <Loading></Loading>
}

  return(
    <>
    {/*swiper é o controle de todo o slide*/}
      <StyledSwiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        loop={true}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        effect='fade'
        pagination={{clickable: true}}
  
      >
        {events.map((item) =>(
          <SwiperSlide key={item.id_evento}>
            <SlideContainer>
            <SlideLink onClick={() => handleSwiperClick(item.id_evento)}>
              <SlideImage src={item.imagemUrl}/>
            </SlideLink>
            </SlideContainer>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  )
}

export default HomeSlider