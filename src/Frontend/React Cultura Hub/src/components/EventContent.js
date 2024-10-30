import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MainTitle = styled.h1`
    font-size: 2.5rem;
    margin: 2rem 0;
    font-weight: 400;
`
const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3.4rem;
`

const ImageEvent = styled.img`
    max-width: 1200px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;

`
const EventContentContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const LocalEvent = styled.h2`
    font-size: 1.2rem;
    font-weight: 300;
`
const DateEvent = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin:0.7em 0 2em 0;
`
const DescriptionEvent = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2em;
`
const CreatorName = styled.p`
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 1em; 
`
const CreatorInfo = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2em;
`

const EventContent = () =>{

    const event = [
            {id: 30,
            title: "Exposição Leonardo Da Vinci",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut libero sapien, aliquet in malesuada nec, porttitor sit amet odio. Cras sit amet lacinia magna. Maecenas vehicula condimentum varius. Donec consequat feugiat nibh, non condimentum dolor consequat nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse vehicula vulputate elit, vel efficitur nibh varius eu. Vivamus elementum fermentum sem et ultrices. Nulla vestibulum pellentesque massa, quis convallis mauris tristique vitae. Aliquam vulputate facilisis lectus, ut maximus ligula sollicitudin non. Nam ultricies tempor justo, quis efficitur diam semper et. Ut ut congue urna, nec vulputate nisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc luctus blandit ante vel tempor. Integer eu bibendum orci, ut mollis elit. Nullam mauris metus, consectetur id erat sagittis, sagittis malesuada neque. Morbi vehicula auctor dignissim. Aenean vitae dictum diam, eget pellentesque risus. Mauris fermentum lectus nec nibh rutrum, et pellentesque odio cursus. Quisque ultrices, felis non accumsan lacinia, dolor erat venenatis sem, nec mollis urna lorem non orci. Sed mauris sem, suscipit a hendrerit vitae, bibendum sed ligula. Vestibulum porta ligula augue, ac feugiat mi eleifend in. Nam a odio ut mauris gravida consequat ut in ipsum. Nunc viverra augue venenatis, efficitur urna a, volutpat ipsum. Etiam vel porta est. Fusce efficitur velit vel neque porta ultrices. Mauris lobortis ante urna, sed venenatis arcu finibus id. Nunc aliquam libero leo, et venenatis elit dapibus nec. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi in euismod lacus. Curabitur porta sit amet est vel laoreet. Curabitur pellentesque sapien id dapibus dapibus. Nunc interdum lectus non tellus mattis, et ultricies diam pulvinar. Sed vel condimentum mauris. Donec quis elit sed ligula facilisis eleifend ut ac augue. In consectetur magna odio, in euismod odio pellentesque a. Curabitur interdum cursus augue in aliquam. Nulla tincidunt finibus magna, facilisis commodo mauris. Mauris dictum porta urna ac tempus. Proin ornare tincidunt pretium. In ut velit venenatis, aliquet libero sed, cursus magna. Proin diam nisl, tincidunt ut ipsum vel, condimentum molestie est.",
            date: "Ter, 01 Set 11:00",
            local: "Museu Histórico",
            creator: "Yury Albert" ,
            creatorInfo: "Criador dos melhores eventos culturais na cidade do povo paulista! Contato: yuriAlbscp@cor.com",
            image: "https://placehold.co/1200x600/000000/FFFFFF/png?text=Leonardo+Da+Vinci"}
    ]

    const currentEvent = event [0]

    return(
        <>
            
            <ImgContainer>
                <ImageEvent src={currentEvent.image}/>
            </ImgContainer>
            <EventContentContainer>
                <MainTitle>{currentEvent.title}</MainTitle>
                <LocalEvent><b>Endereço:</b> {currentEvent.local}</LocalEvent>
                <DateEvent><b>Data:</b> {currentEvent.date}</DateEvent>
                <DescriptionEvent><b>Descrição:</b> {currentEvent.description}</DescriptionEvent>
                <MainTitle>Criador do evento:</MainTitle>
                <CreatorName>{currentEvent.creator}</CreatorName>
                <CreatorInfo>{currentEvent.creatorInfo}</CreatorInfo>
            </EventContentContainer>
        </>
        
    )
}

export default EventContent