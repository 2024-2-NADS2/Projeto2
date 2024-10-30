import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Section = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  max-width: 500px;
  background-color: #f2f2f2;
  margin: 20px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 2.2rem;
  font-weight: 200;
  color: #424242;
  text-transform: uppercase;
`

const Form = styled.form`
  width: 100%;
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 50px;
`

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Label = styled.label`
  flex-shrink: 0;
  height: 50px;
  width: 50px;
  background-color: #8a8a8a;
  fill: #8a8a8a;
  color: #f2f2f2;
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`

const Input = styled.input`
  box-sizing: border-box;
  flex-grow: 1;
  min-width: 0;
  height: 50px;
  padding: 1em;
  font: inherit;
  border-radius: 0px 5px 5px 0px;
  border: 1px solid #8a8a8a;
  border-left: none;
  font-weight: 200;
  transition: 0.5s ease;

  &:focus {
    outline: none;
  }
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 0 0 10px;
  text-align: left;
  width: 100%;
`

const Button = styled.button`
  margin-top: 10px;
  padding: 7px 20px;
  border: none;
  border-radius: 5px;
  background-color: #8a8a8a;
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background-color: #e40031;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

const StyledLink = styled(Link)`
  color: #e40031;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`



const CadastroForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  
  } = useForm({ mode: 'onChange' }) // Mudança no modo para validar enquanto o usuário digita

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
        // Envia os dados de registro para o backend
        const response = await axios.post('http://localhost:3001/cadastro', {
            nome: data.nome,
            sobrenome: data.sobrenome,
            email: data.email,
            senha: data.senha
        })
        if (response.status === 201) {
            alert('Cadastro realizado!');
            navigate('/entrar'); // Redireciona para a página de login
        }
    } catch (err) {
        console.error('Erro ao registrar:', err);
        if(err.response && err.response.status === 409){
          alert("Email já cadastrado")
          navigate('/entrar')
        }else{
          alert("Erro ao registrar, tente novamente")
        }
    }
};


  return (
    <Section className="cadastro-container">
      <Wrapper className="wrapper">
        <Title>Criar conta</Title>
        <Form id="form" onSubmit={handleSubmit(onSubmit)} action='/cadastrar' method='post'>
          <InputWrapper>
            <Label htmlFor="input-nome" aria-label="Nome">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
              </svg>
            </Label>
            <Input type="text" id="input-nome" placeholder="Nome"
              {...register('nome', { required: 'Nome obrigatório' })}
            />
          </InputWrapper>
          {errors.nome && <ErrorMessage>{errors.nome.message}</ErrorMessage>}

          <InputWrapper>
            <Label htmlFor="input-sobrenome" aria-label="Sobrenome">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" /></svg>
            </Label>
            <Input type="text" id="input-sobrenome" placeholder="Sobrenome"
              {...register('sobrenome', { required: 'Sobrenome obrigatório' })}
            />
          </InputWrapper>
          {errors.sobrenome && <ErrorMessage>{errors.sobrenome.message}</ErrorMessage>}

          <InputWrapper>
            <Label htmlFor="input-email" aria-label="Email">@</Label>
            <Input type="email" id="input-email" placeholder="Email"
              {...register('email', { required: 'Email obrigatório' })}
            />
          </InputWrapper>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <InputWrapper>
            <Label htmlFor="input-senha" aria-label="Senha">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" /></svg>
            </Label>
            <Input type="password" id="input-senha" placeholder="Senha"
              {...register('senha', {
                required: 'Senha obrigatória',
                minLength: { value: 8, message: 'Mínimo 8 caracteres' },
              })}
            />
          </InputWrapper>
          {errors.senha && <ErrorMessage>{errors.senha.message}</ErrorMessage>}
          <InputWrapper>
            <Label htmlFor="input-senha" aria-label="Senha">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" /></svg>
            </Label>
            <Input type="password" id="input-repetir-senha" placeholder="Repetir Senha"
              {...register('confirmPassword', {
                required: 'Confirmação obrigatória',
                validate:  (value) => value === watch('senha') || 'As senhas não coincidem' },
              )}
            />
          </InputWrapper>
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

          <Button type="submit" disabled={!isValid}>
            Cadastrar
          </Button>
        </Form>

        <p>
          Já tem conta? <StyledLink to="/entrar">Entre!</StyledLink>
        </p>
      </Wrapper>
    </Section>
  )
}

export default CadastroForm
