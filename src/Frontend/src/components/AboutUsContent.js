import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Felipeimg from '../components/assets/Felipe.jpeg';
import GustavoImg from '../components/assets/Gustavo.jpeg';
import MarcellaImg from '../components/assets/Marcella.jpg';
import ThaysImg from '../components/assets/Thays.jpg';

const Title = styled.h1`
    text-align: center;
    font-size: 50px;
    margin: 1em 0;
    color: #555;
`

const Title2 = styled.h2`
    max-width: 1100px;
    text-align: left;
    margin: 3em auto 1em auto;
    color: #960019;
`

const Description = styled.p`
    max-width: 1100px;
    margin: 0 auto;
    white-space: pre-wrap;
    font-size: 20px;
    font-weight: 300;
    color: #555;
`

const ListDescription = styled.li`
    max-width: 1100px;
    margin: 20px auto;
    font-size: 20px;
    font-weight: 300;
    list-style: none;
    color: #555;
`

const AboutSection = styled.section`
    max-width: 2000px;
`
const CreatorsSection = styled.section`
    max-width: 2000px;
`

const CreatorContent = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 10px;
`

const CreatorCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: space-between; 
    max-width: 300px;
    height: 420px; 
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    transition: 0.7s ease;
    box-shadow: 0 10px 3px rgba(0.0, 0, 0, 0.05);
    &:hover{
        transform: translateY(-10px)
    }
`

const CreatorName = styled.h1`
    text-align: center;
    color: #555;

`

const CreatorImg = styled.img`
    max-width: 100px;
    max-height: 100px;
    border-radius: 50%; 
    margin-bottom: 10px;
`

const CreatorDesc = styled.p`
    font-size: 13px;
    margin-top: 10px;
    text-align: center; 
    margin-bottom: 10px;
    white-space: pre-wrap;
    color: #555;

`

const CreatorLinkedin = styled(Link)`
    background-color: #0e76a8;
    color: white;
    text-align: center;
    padding: 5px 10px;
    border-radius: 3px;
    text-decoration: none;
    margin-top: auto; 
`

const AboutUsContent = () => {
    const formatText = (text) => {
        const [firstWord, ...rest] = text.split(':')
        return (
            <span>
                <strong>{firstWord}:</strong>
                {rest.join(':')}
            </span>
        )
    }

    const textDescription = {
        text: 'O Cultura Hub é uma plataforma dedicada a conectar pessoas por meio de experiências culturais e eventos únicos. Nosso objetivo é facilitar o acesso e a interação com uma variedade de eventos, promovendo a diversidade de expressões e o encontro de diferentes culturas. \n\nAqui, todos os tipos de eventos encontram seu espaço, aproximando você de novas vivências e enriquecendo suas conexões sociais. Nossa missão é simplificar a organização de eventos e proporcionar uma experiência memorável para todos os envolvidos.',
    }

    const text2 = [
        {
            texts: 'Inovação: Estamos sempre buscando novas maneiras de melhorar a experiência dos nossos usuários e promover eventos de maneira criativa.'
        },
        {
            texts: 'Transparência: Valorizamos a honestidade e a clareza em todas as nossas interações, tanto com organizadores quanto com participantes.'
        },
        {
            texts: 'Empatia: Acreditamos que entender e atender às necessidades dos nossos usuários é a chave para uma experiência enriquecedora.'
        },
        {
            texts: 'Comprometimento: Nos dedicamos a fornecer uma plataforma segura, confiável e acessível para todos.'
        }
    ]

    const creatorsInfo = [
        {
            imgCreator: Felipeimg,
            creator: 'Felipe Oluwaseun Santos Ojo',
            description: 'Estudante de Análise e Desenvolvimento de Sistemas na FECAP. \nAdorei o desafio de ajudar a produzir um site onde pudessemos ampliar o acesso das pessoas aos mais variados eventos pela cidade.',
            linkedin: 'https://www.linkedin.com/in/felipeosantosojo/'
        },
        {
            imgCreator: GustavoImg,
            creator: 'Gustavo De Souza Castro',
            description: 'Gustavo Castro, estudante de Análise e Desenvolvimento de Sistemas na FECAP e estagiário no Itaú. \nApaixonado por tecnologia, futebol, vídeo games e uma boa cerveja, criamos este projeto para facilitar o planejamento e a participação em eventos.',
            linkedin: 'https://www.linkedin.com/in/gustavocastro01/'
        },
        {
            imgCreator: MarcellaImg,
            creator: 'Marcella Santana Goncalves Diniz Rocha',
            description: 'Membro-fundador do CulturaHub que dedicou no projeto sua paixão por eventos culturais de cinema e shows.',
            linkedin: 'https://www.linkedin.com/in/marcella-santana-b76883262/'
        },
        {
            imgCreator: ThaysImg,
            creator: 'Thays Helyda Da Silva Pontes',
            description: 'Iniciei minha carreira em Customer Experience, trabalhando de perto com o time de produto para reportar bugs e sugerir melhorias na experiência do usuário. Hoje, estou muito feliz em aprender como é estar do outro lado, ajudando a construir uma plataforma que valoriza algo que considero fundamental: a conexão com a cultura.',
            linkedin: 'https://www.linkedin.com/in/thays-pontes-14663822b/'
        }
    ]

    return(
        <>
            <AboutSection>
                <Title>Sobre nós</Title>
                <Description>
                    {textDescription.text}
                </Description>
                <Title2>Nossos Valores</Title2>
                {text2.map((item, index) => (
                    <ListDescription key={index}>{formatText(item.texts)}</ListDescription>
                ))}
            </AboutSection>
            <AboutSection>
                <Title2>Nossa História</Title2>
                <Description>Fundada em 2024, como um trabalho de faculdade, nossa plataforma surgiu para atender a demanda de eventos de forma simples e eficiente.</Description>
            </AboutSection>
            <CreatorsSection>
                <Title>Nossos Fundadores</Title>
                <CreatorContent>
                    {creatorsInfo.map((item, index) => (
                        <CreatorCard key={index}>
                            <CreatorImg src={item.imgCreator} alt={item.creator}/>
                            <CreatorName>{item.creator}</CreatorName>
                            <CreatorDesc>{item.description}</CreatorDesc>
                            <CreatorLinkedin target="_blank" rel="noopener noreferer" to={item.linkedin}>LinkedIn</CreatorLinkedin>
                        </CreatorCard>
                    ))}
                </CreatorContent>
            </CreatorsSection>

        </>
    )
}

export default AboutUsContent