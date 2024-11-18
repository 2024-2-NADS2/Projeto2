import React from 'react';
import styled from 'styled-components';

const FaqContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: inherit;
  color: #333;
  text-align: left;

  @media (max-width: 768px) {
    padding: 15px;
  }
`


const StyledDetails = styled.details`
  background-color: #fff;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 10px 20px;
 
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  & > summary {
    font-size: 18px;
    font-weight: bold;
    color: #555;
    padding: 10px 0;
    border-bottom: 2px solid #f1f1f1;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #000;
    }
  }

  & > p {
    font-size: 16px;
    color: #555;
    line-height: 1.6;
    padding: 10px 0;
  }

  &[open] {
    
  }
`

const Faq = () => {
  const source = [
    {
      summary: "O que é o CulturaHub?",
      detail: "O CulturaHub é uma plataforma digital dedicada a divulgar eventos culturais, artísticos e de entretenimento. Através dela, os usuários podem descobrir, salvar e acompanhar eventos de seu interesse, como shows, exposições, festivais, peças de teatro, e muito mais."
    },
    {
      summary: "Parcerias e colaborações",
      detail: "Se você é uma empresa ou pessoa interessada em parcerias, adoraríamos conversar com você! Nossa missão é promover eventos culturais e acreditamos que colaborações são fundamentais para alcançar esse objetivo. Entre em contato conosco através do formulário na página de suporte/contato."
    },
    {
      summary: "Como posso salvar eventos no CulturaHub?",
      detail: "Para salvar eventos, basta criar uma conta na plataforma e acessar a página do evento de sua escolha. Lá, você verá a opção de ''Salvar''. Todos os eventos salvos ficarão acessíveis em seu perfil, para que você possa consultá-los a qualquer momento."
    },
    {
      summary: "Preciso criar uma conta para usar a plataforma?",
      detail: "Não é necessário possuir uma conta para acessar os eventos e breves informações destes, entretanto é necessário criar uma conta para salvar eventos e acessar os detalhes sobre ele, receber notificações sobre eventos salvos e personalizar sua experiência. O cadastro é rápido e pode ser feito através do site."
    },
    {
      summary: "Como encontro eventos no CulturaHub?",
      detail: "Você pode buscar eventos de várias maneiras. Usando a barra de pesquisa para digitar o nome do evento ou tipo de atividade. Filtrando por categoria (música, teatro, exposições, etc.). Definindo a data e localização para encontrar eventos próximos a você."
    },
    {
      summary: "O CulturaHub é gratuito?",
      detail: "Sim, o CulturaHub é totalmente gratuito para os usuários. Você pode salvar eventos, receber notificações e explorar a plataforma sem custos. Alguns eventos podem oferecer ingressos pagos, mas o uso da plataforma em si não tem cobrança."
    },
    {
      summary: "Como posso adicionar um evento no CulturaHub?",
      detail: "Se você é organizador de eventos, pode adicionar seus eventos diretamente na plataforma criando uma conta de organizador, para isso entre em contato conosco por e-mail indicando interesse em se tornar nosso parceiro. Após o login, basta acessar a área de ''Criar evento'', preencher as informações relevantes (data, local, descrição, etc.) e submeter o evento. Se você é um usuário comum e quer mandar sua sugestão de um evento interessante para nós integrarmos ao site, por favor, submeta os campos necessários na parte de criar evento e então nossos moderadores o avaliarão."
    },
    {
      summary: "Como posso entrar em contato com a equipe do CulturaHub?",
      detail: "Caso tenha alguma dúvida ou precise de assistência, você pode entrar em contato com a nossa equipe por e-mail: culturahub@contato.com. Nossa equipe responderá o mais breve possível."
    },
    {
      summary: "Posso adicionar eventos gratuitos na plataforma?",
      detail: "Sim! O CulturaHub permite que eventos gratuitos sejam adicionados à plataforma, assim como eventos pagos. Qualquer tipo de evento cultural pode ser divulgado, desde que respeite as diretrizes da nossa plataforma."
    }
  ]

  return (
    <FaqContainer>
      {source.map((item, index) => (
        <StyledDetails key={index}>
          <summary>{item.summary}</summary>
          <p>{item.detail}</p>
        </StyledDetails>
      ))}
    </FaqContainer>
  )
}

export default Faq