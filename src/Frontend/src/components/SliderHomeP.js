import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Autoplay } from 'swiper/modules'
import 'swiper/css/pagination';
import 'swiper/css';

const SlideLink = styled.a`
  display: flex;
  justify-content: center;
`
const SlideImage = styled.img`
  max-width: 1100px;
  width: 100%;
  height: 25rem;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  cursor: pointer;
`



const HomeSlider = () => {
  
  const navigate = useNavigate();

  const handleSwiperClick = (id) => {
    navigate(`/eventos/${id}`)
  }

  const events = [
     { id: 1, imageUrl: 'https://via.placeholder.com/800x400?text=Event+1'},
     { id: 2, imageUrl: 'https://via.placeholder.com/800x400?text=Event+2'},
     { id: 3, imageUrl: 'https://via.placeholder.com/800x400?text=Event+3'},
     { id: 4, imageUrl: 'https://via.placeholder.com/800x400?text=Event+4'},
     { id: 5, imageUrl: 'https://via.placeholder.com/800x400?text=Event+5'},
     { id: 6, imageUrl: 'https://via.placeholder.com/800x400?text=Event+6'},
    { id: 7, imageUrl: 'https://via.placeholder.com/800x400?text=Event+7'},
  ]

  return(
    <>
    {/*swiper é o controle de todo o slide*/}
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        loop={true}
        autoplay={{delay: 3000, disableOnInteraction: false}}
        effect='fade'
        slidesPerView={1}
        pagination={{clickable: true}}
  
      >
        {events.map((item) =>(
          <SwiperSlide key={item.id}>
            <SlideLink onClick={() => handleSwiperClick(item.id)}>
              <SlideImage src={item.imageUrl}/>
            </SlideLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default HomeSlider