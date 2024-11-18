import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

// Styled components
const CadastroContainer = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  max-width: 500px;
  background-color: #f2f2f2; 
  margin: 40px auto;
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

const FormGroup = styled.div`
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
  font-weight: 500;
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
  transition: 0.5s ease;
  font-weight: 200;

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

  &:focus {
    outline: none;
    background-color: #e40031;
  }
`

const ForgotPassword = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
`

const FooterText = styled.p`
  font-weight: 300;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #e40031;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

// Componente Login com React Hook Form
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
  } = useForm({ mode: 'onChange' });

  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')



const onSubmit = async (data) => {
  try {
      const response = await axios.post('http://localhost:3001/entrar',{
        email: data.email,
        password: data.password
      })
      if (response.data.msg === "Usuário logado") {
        alert(response.data.msg)
        navigate('/') 
      }else{
        alert(response.data.msg)
      }
  } catch (error) {
      console.error('Erro ao entrar:', error);
      alert("Erro ao fazer login.")
  }
}

  return (
    <CadastroContainer>
      <Wrapper>
        <Title>Acesse sua conta</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="input-email">@</Label>
            <Input type="email" name="email" id="input-email" placeholder="Email"
              {...register('email', { required: 'Email obrigatório' })}
            />
          </FormGroup>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <FormGroup>
            <Label htmlFor="input-senha">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e8eaed"
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
              </svg>
            </Label>
            <Input type="password" name="password" id="input-senha" placeholder="Senha"
              {...register('password', { required: 'Senha obrigatória' })}
            />
          </FormGroup>
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          <Button type="submit" disabled={!isValid}>
            Entrar
          </Button>
        </Form>
        <ForgotPassword>
          Esqueceu sua senha? <StyledLink to="#">Clique aqui!</StyledLink>
        </ForgotPassword>
        <FooterText>
          Não possui uma conta? <StyledLink to="/cadastro">Cadastre-se!</StyledLink>
        </FooterText>
      </Wrapper>
    </CadastroContainer>
  )
}

export default Login
