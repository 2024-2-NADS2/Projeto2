import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

const MainSlider = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 70vh;
  width: 100%;
`

const SliderContainer = styled.div`
  margin: 0 auto;
  width: 1000px;
  height: 600px;
  overflow: hidden;
  position: relative;
`

const Slides = styled.div`
  display: flex;
  width: ${({ totalSlides }) => totalSlides * 100}% ;
  height: 600px;
  transition: margin-left 1s ease-in-out;
  margin-left: ${({ slideIndex }) => slideIndex * -100}%;
`

const Slide = styled.div`
  width: 1000px;
  position: relative;
`

const SlideImage = styled.img`
  width: 100%;
`

const ManualNavigation = styled.div`
  position: absolute;
  width: 1000px;
  margin-top: -40px;
  display: flex;
  justify-content: center;
`

const ManualButton = styled.button`
  border: 1px solid #e40031;
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.6s;
  margin-right: 30px;
  background-color: ${({ active }) => (active ? "#e40031" : "transparent")};
  &:hover {
    background-color: #e40031;
  }

  &:last-child {
    margin-right: 0;
  }
`

const AutoNavigation = styled.div`
  position: absolute;
  width: 1000px;
  margin-top: 560px;
  display: flex;
  justify-content: center;
`

const AutoButton = styled.div`
  border: 1px solid #e40031;
  padding: 5px;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.6s;
  margin-right: 30px;
  background-color: ${({ active }) => (active ? "#e40031" : "transparent")};

  &:last-child {
    margin-right: 0;
  }
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const totalSlides = 5; // Número total de slides
  const [isManual, setIsManual] = useState(false); // Estado para verificar se o slide está sendo controlado manualmente
  const timeoutRef = useRef(null); // Referência para o intervalo

  // Função que avança para o próximo slide
  const nextImage = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  // Reinicia o intervalo automático após ação manual
  const resetAutoSlide = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current)
    }
    timeoutRef.current = setInterval(() => {
      nextImage();
    }, 4000);
  }

  // Configura o intervalo de troca automática de slides
  useEffect(() => {
    if (!isManual) {
      timeoutRef.current = setInterval(() => {
        nextImage();
      }, 4000);
    }

    return () => clearInterval(timeoutRef.current);
  }, [isManual]);

  // Função para alterar o slide manualmente e parar a troca automática temporariamente
  const handleManualClick = (index) => {
    setSlideIndex(index);
    setIsManual(true);
    resetAutoSlide();
  }

  // Retorna ao controle automático após um tempo de ação manual
  useEffect(() => {
    if (isManual) {
      const manualTimeout = setTimeout(() => {
        setIsManual(false); // Retorna ao controle automático após 8 segundos
      }, 8000);

      return () => clearTimeout(manualTimeout);
    }
  }, [isManual]);

  return (
    <MainSlider>
      <SliderContainer>
        <Slides slideIndex={slideIndex} totalSlides={totalSlides}>
          <Slide>
            <a href="#">
              <SlideImage
                src="https://placehold.co/600x400/orange/white"
                alt="Imagem 1"
              />
            </a>
          </Slide>
          <Slide>
            <a href="#">
              <SlideImage
                src="https://placehold.co/600x400/000000/FFFFFF/png"
                alt="Imagem 2"
              />
            </a>
          </Slide>
          <Slide>
            <a href="#">
              <SlideImage
                src="https://placehold.co/600x400/430000/FFFFFF/png"
                alt="Imagem 3"
              />
            </a>
          </Slide>
          <Slide>
            <a href="#">
              <SlideImage
                src="https://placehold.co/600x400/000076/FFFFFF/png"
                alt="Imagem 4"
              />
            </a>
          </Slide>
          <Slide>
            <a href="#">
              <SlideImage
                src="https://placehold.co/600x400/004500/FFFFFF/png"
                alt="Imagem 5"
              />
            </a>
          </Slide>
        </Slides>

        {/* Navegação manual */}
        <ManualNavigation>
          {[...Array(totalSlides)].map((_, i) => (
            <ManualButton
              key={i}
              active={slideIndex === i}
              onClick={() => handleManualClick(i)}
            />
          ))}
        </ManualNavigation>

        {/* Navegação automática */}
        <AutoNavigation>
          {[...Array(totalSlides)].map((_, i) => (
            <AutoButton
              key={i}
              active={slideIndex === i}
            />
          ))}
        </AutoNavigation>
      </SliderContainer>
    </MainSlider>
  )
}

export default Slider
