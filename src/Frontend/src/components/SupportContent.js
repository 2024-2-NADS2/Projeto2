import React, {useState} from "react";
import styled from "styled-components";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'

const PageTitle = styled.h1`
  text-align: center;
  margin: 2em 0;
  font-size: 50px;
  color: #555;
`

const PageDescription = styled.p`
  white-space: pre-wrap;
  margin: 2em 0;
`

const FormSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
`

const BoxForm = styled.div`
  background-color: #e40031;
  border-radius: 10px;
  padding: 40px;
  max-width: 600px;
  width: 100%;
`

const InfoItens = styled.div`
  max-width: 500px;
  
`

const LinkTo = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #e40031;
  font-weight: 600;
`

const FormUser = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const FormWrapper = styled.div`
  position: relative;
  width: 100%;
`

const Labels = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  color: #ffffff;
  pointer-events: none;
  transition: 0.3s ease-in-out;
  font-weight: 300;
`

const Inputs = styled.input`
  outline: none;
  border: none;
  background: transparent;
  border-bottom: 1px solid #960019;
  padding: 10px;
  height: 40px;
  width: 100%;
  color: white;
  font-size: 16px;

  &:focus,
  &:not(:placeholder-shown) {
    & + ${Labels} {
      top: -10px;
      font-size: 12px;
    }
  }
`

const SelectBox = styled.select`
  outline: none;
  border: none;
  background: #e40031;
  border-bottom: 1px solid #960019;
  padding: 10px;
  height: 40px;
  width: 100%;
  color: white;
  font-size: 16px;
  font-weight: 300;

  &:focus,
  &:not([value=""]) {
    & + ${Labels} {
      top: -10px;
      font-size: 12px;
    }
  }
`

const Description = styled.textarea`
  outline: none;
  border: none;
  background: transparent;
  border-bottom: 1px solid #960019;
  padding: 10px;
  height: 100px;
  width: 100%;
  color: white;
  font-size: 16px;
  resize: none;

  &:focus,
  &:not(:placeholder-shown) {
    & + ${Labels} {
      top: -10px;
      font-size: 12px;
    }
  }
`

const SubmitButton = styled.button`
  background-color: #960019;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #750014;
  }
`

const Titles = styled.h1`
    font-size: 20px;
`

const GroupInfo = styled.div`
    margin-bottom: 3em;

`

const CustomSpan = styled.span`
    font-size: 12px;
    color: white;
    font-weight: 300;
`

const SupportContent = () => {
const navigate = useNavigate()
  const text = {
    item: `Nosso objetivo é garantir que você tenha a melhor experiência possível ao usar nossa plataforma de eventos.\n\nSe você tiver alguma dúvida, problema ou estiver buscando parcerias, estamos aqui para ajudar. Preencha o formulário e mande sua sugestão, dúvida, comentário ou solicitação. Nossa equipe de suporte dedicará toda a atenção para responder e resolver suas questões com a maior brevidade possível!`,
  }


  const [formData, setFormData] = useState({
    email: '',
    assunto: '',
    descricao: '',
})

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
    })
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        const response = await axios.post('http://localhost:3001/api/contato', formData)
        setFormData({ email: '', assunto: '', descricao: '' })
        alert(response.data.message)
    } catch (error) {
        console.error(error)
        alert('Erro ao enviar mensagem. Tente novamente mais tarde.')
    }
}

  return (
    <>
      <PageTitle>Suporte/Contato</PageTitle>
      <FormSection>
        <InfoItens>
            <GroupInfo>
                <Titles>Sua dúvida já pode ter sido respondida</Titles>
                <LinkTo to="/faq">Acesse o nosso FaQ para saber mais!</LinkTo>
            </GroupInfo>
            <GroupInfo>
                <Titles>Saiba Mais sobre o CulturaHub</Titles>
                <LinkTo to="/sobre">Conheça os criadores da plataforma e saiba mais sobre o projeto.</LinkTo>
            </GroupInfo>
          <PageDescription>{text.item}</PageDescription>
        </InfoItens>
        <BoxForm>
          <FormUser onSubmit={handleSubmit}>
            <FormWrapper>
              <Inputs 
                id="email" 
                type="email" 
                placeholder=" " 
                value={formData.email}
                onChange={handleChange}
                required />
              <Labels htmlFor="email">Digite seu email:</Labels>
            </FormWrapper>
            <FormWrapper>
              <SelectBox id="assunto"
                onChange={handleChange}
                required 
                value={formData.assunto}>
                <option value="" disabled hidden>
                  Escolha uma opção
                </option>
                <option>Cadastro e Login</option>
                <option>Dúvidas</option>
                <option>Parcerias</option>
                <option>Eventos</option>
                <option>Denúncia</option>
              </SelectBox>
              <Labels htmlFor="assunto">Assunto</Labels>
            </FormWrapper>
            <FormWrapper>
              <Description id="descricao" 
                placeholder=" " 
                value={formData.descricao}
                onChange={handleChange}
                required />
              <Labels htmlFor="descricao">Descrição</Labels>
              <CustomSpan>Conte com detalhes o motivo do seu contato!</CustomSpan>
            </FormWrapper>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </FormUser>
        </BoxForm>
      </FormSection>
    </>
  )
}

export default SupportContent
