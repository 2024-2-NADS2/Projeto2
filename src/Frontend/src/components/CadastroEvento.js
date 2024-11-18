import styled from 'styled-components'
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import React, { useState } from 'react';
import CalendarIcon from './assets/calendar.png'
import ClockIcon from './assets/clock.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AuthContext} from '../context/auth'
import Popup from './PopUp';


const MainContent = styled.div`
  text-align: center;
`

const Heading1 = styled.h1`
  font-size: 40px;
  font-weight: 200;
  margin: 113px 0;
`

const FormSectionBackGround = styled.div`
    background-color: rgba(214, 214, 214, 0.4);
    padding: 50px;
    margin: 110px auto;
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: center;
`

const FormSectionLocalContent = styled.div`
  padding: 20px;
`

const TitleSection = styled.h2`
  font-size: 30px;
  margin-bottom: 50px;
  font-weight: 200;
`

const TextReference = styled.p`
  font-size: 16px;
  font-weight: 300;
  display: block;
  margin-top: 25px;
`

const Input = styled.input`
  width: 740px;
  height: 40px;
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  &:focus {
        outline: none;
    }
`

const FormSectionDetalhesContent = styled.div`
  padding: 20px;
 
`

const BtnGroupPreco = styled.div`
  margin: 3rem auto;
  gap: 2.18em;
`


const InputDateTimeContainer = styled.div`

`

const IconInputContainer = styled.div`
    display: flex;

    align-items: center;
`

const InputsDateTime = styled(Input)`
    text-align: center;
    width: 180px;
    height: 42px;
    background-color: #d9d9d9;
    border-radius: 0px;
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
`

const LabelsDateTime = styled.label`
    width: 60px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: solid 1px #E40031;
    background-color: #d9d9d9;
    border-radius: 5px 0 0 5px;
`
const ImgDate = styled.img`
    width: 1.4em;
    height: 1.4em;
`

const ImgClock = styled.img`
    width: 1.5em;
    height: 1.5em;
`
const TextAreaDescription = styled.textarea`
  width: 790px;
  height: 310px;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  resize: vertical; 
  max-height: 600px;
  min-height: 310px;
  
  &:focus{
    outline: none;
  }
`

const BtnGroupInfo = styled.div`
  display: flex;
  gap: 6.4em;
  margin-top: 56px;
  
`

const TemaSelectionContainer = styled.div`
    display: flex;
    flex-direction: column ;
`

const SelectorsBox = styled.select`
    width: 195px;
    height: 43px;
    margin-top: 10px;
    border: none;
    text-align: center;
    background-color: #c1c1c1;
    appearance: none;
    -webkit-appearance: none; 
    -moz-appearance: none; 
    outline: none;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`

const EventRatingContainer = styled.div`
    display: flex;
    flex-direction: column ;
`

const ImgEventContainer = styled.div`
    display: flex;
    flex-direction: column ;
`

const TitleBtnInfos = styled.p`
    font-size: 20px;
    font-weight: 200;
`

const InputImgEvent = styled.input`
    display: none;
`

const LabelInputImg = styled.label`
    margin-top: 10px;
    width: 195px;
    height: 43px;
    background-color: #c1c1c1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
`

const PreviewImage = styled.img`
  margin-top: 10px;
  max-width: 100%;
  max-height: 200px;
`

const FormSpanError = styled.div`
  color: red;
  font-size: 13px;
`

const PublishBtn = styled.button`
  background-color: #E40031;
  text-align: center;
  width: 378px;
  height: 55px;
  color: white;
  font-size: 30px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  margin-bottom: 110px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

const FormSecTionCreatorContent = styled.div`
  
`
const CharacterCount = styled.div`
  margin-top: 5px;
  font-size: 14px;
`


const EventCreationForm = () => {
  const [popupMessage, setPopupMessage] = useState(null)
  const [isPopupVisible, setIsPopupVisible] = useState(false)
  const today = new Date().toISOString().split('T')[0]
  const {userDetails} = useContext(AuthContext)
  const [link, setLink] = useState('');
  const [isFormValid, setIsFormValid] = useState(false)
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm()
  const [imagem, setImagem] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const idUsuario = userDetails.id_usuario
  const userRole = userDetails.role

  
  //Funçao para inserir link de pagamento do ingresso
  const [isPago, setIsPago] = useState(false)
  const handleSelectChange = (event) =>{
    setIsPago(event.target.value ==='pago')
  }
  const navigate = useNavigate()
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file && !file.type.startsWith('image/')) {
        alert("Selecione um arquivo de imagem válido")
        setImagem(null)
    } else {
        setImagem(file)
        const reader = new FileReader()
        reader.onloadend = () => {
          setImagePreview(reader.result) // Definir a URL da imagem para a pré-visualização
        }
        reader.readAsDataURL(file)
    }
  }

  const checkCEP = async (e) => {
      const cep = e.target.value.replace(/\D/g, '')
      if (cep.length === 8) {
          try {
              const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
              const data = await response.json()
              if (!data.erro) {
                  // Preenche automaticamente os campos de endereço
                  setValue('rua', data.logradouro)
                  setValue('bairro', data.bairro)
                  setValue('cidade', data.localidade)
                  setValue('estado', data.uf)
              } else {
                  alert('CEP não encontrado')
              }
          } catch (error) {
              console.error('Erro ao buscar o CEP:', error)
          }
      }
  }

  const onSubmit = async (formData) => {
    const data = new FormData()


    // Campos do formulário
    data.append('nomeLocal', formData.nomeLocal)
    data.append('cep', formData.cep)
    data.append('rua', formData.rua)
    data.append('numero', formData.numero)
    data.append('complemento', formData.complemento)
    data.append('bairro', formData.bairro)
    data.append('cidade', formData.cidade)
    data.append('estado', formData.estado)
    data.append('titulo', formData.titulo)
    data.append('preco', formData.preco)
    data.append('linkPagamento', formData.linkPagamento)
    data.append('data', formData.data)
    data.append('hora', formData.hora)
    data.append('descricao', formData.descricao)
    data.append('tema', formData.tema)
    data.append('classificacao', formData.classificacao)
    data.append('organizador', formData.organizador)
    data.append('organizadorDetalhes', formData.organizadorDetalhes)
    data.append('idUsuario', idUsuario)
    data.append('userRole', userRole)

    data.append('imagem', imagem)

    try {
        const response = await axios.post('http://localhost:3001/api/criar-evento', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        setPopupMessage(response.data.message)
        setIsPopupVisible(true)
        setTimeout(() => navigate('/'), 2000)
    } catch (error) {
      setPopupMessage('Erro ao criar o evento. Tente novamente.')
      setIsPopupVisible(true)
    }
  }
  //veriicação de preenchimento dos campos
  useEffect(() => {
    const subscription = watch((value) => {
      const requiredFieldsFilled = 
        value.nomeLocal &&
        value.cep &&
        value.rua &&
        value.numero &&
        value.bairro &&
        value.cidade &&
        value.estado &&
        value.titulo &&
        value.data &&
        value.hora &&
        value.descricao&&
        value.organizador

      setIsFormValid(requiredFieldsFilled)
    })
    return () => subscription.unsubscribe()
  }, [watch])

  return (
    <MainContent>
      <Heading1>CRIAR EVENTO</Heading1>
      
      {isPopupVisible && <Popup message={popupMessage} type={popupMessage.includes('Erro') ? 'error' : 'success'} onClose={() => setIsPopupVisible(false)} />}
      <form method='post' onSubmit={handleSubmit(onSubmit)}>
        <FormSectionBackGround>
          <FormSectionLocalContent>
            <TitleSection>LOCAL DO EVENTO:</TitleSection>
            <TextReference>Nome do local</TextReference>
            <Input type="text" {...register('nomeLocal', { required: 'Nome do local obrigatório' })} />
            {errors.nomeLocal && <FormSpanError>{errors.nomeLocal.message}</FormSpanError>}

            <TextReference>CEP</TextReference>
            <Input type="text" {...register('cep', { required: 'CEP obrigatório', pattern: { value: /^[0-9]{5}-?[0-9]{3}$/, message: 'CEP inválido' } })} onBlur={checkCEP} />

            {errors.cep && <FormSpanError>{errors.cep.message}</FormSpanError>}

            <TextReference>Rua</TextReference>
            <Input type="text" {...register('rua', { required: 'Rua obrigatória' })} />
            {errors.rua && <FormSpanError>{errors.rua.message}</FormSpanError>}

            <TextReference>Número</TextReference>
            <Input type="text" {...register('numero', { required: 'Número obrigatório' })} />
            {errors.numero && <FormSpanError>{errors.numero.message}</FormSpanError>}

            <TextReference>Complemento</TextReference>
            <Input type="text" {...register('complemento')} />

            <TextReference>Bairro</TextReference>
            <Input type="text" {...register('bairro', { required: 'Bairro obrigatório' })} />
            {errors.bairro && <FormSpanError>{errors.bairro.message}</FormSpanError>}

            <TextReference>Cidade</TextReference>
            <Input type="text" {...register('cidade', { required: 'Cidade obrigatória' })} />
            {errors.cidade && <FormSpanError>{errors.cidade.message}</FormSpanError>}

            <TextReference>Estado</TextReference>
            <Input type="text" {...register('estado', { required: 'Estado obrigatório' })} />
            {errors.estado && <FormSpanError>{errors.estado.message}</FormSpanError>}
          </FormSectionLocalContent>
        </FormSectionBackGround>

        <FormSectionBackGround>
          <FormSectionDetalhesContent>
            <TitleSection>DETALHES DO EVENTO</TitleSection>
            <TextReference>Título do evento</TextReference>
            <Input type="text" {...register('titulo', { required: 'Título do evento é obrigatório' })} />
            {errors.titulo && <FormSpanError>{errors.titulo.message}</FormSpanError>}

            <BtnGroupPreco>
              <TitleBtnInfos>Preço do evento</TitleBtnInfos>
                  <SelectorsBox {...register('preco', { required: 'Obrigatório' })} onChange={handleSelectChange}>
                    <option value="">Selecionar</option>
                    <option value="pago">Pago</option>
                    <option value="gratuito">Gratuito</option>
                  </SelectorsBox>
                  {isPago && (
                    <>
                      <TextReference>Link para comprar o ingresso</TextReference>
                      <Input 
                        type="text" 
                        {...register('linkPagamento', { 
                          required: isPago ? 'Link obrigatório' : false, 
                        })} 
                        onChange={(e) => setLink(e.target.value)}/>
                      <CharacterCount 
                        style={{
                          color: link.length > 255 ? 'red' : 'black', 
                        }}>
                        {link.length} / 255
                      </CharacterCount>
                      {errors.linkPagamento && <FormSpanError>{errors.linkPagamento.message}</FormSpanError>}
                    </>
                    )}
            </BtnGroupPreco>
            <InputDateTimeContainer>
              <IconInputContainer>
                <LabelsDateTime htmlFor="InputDate">
                  <ImgDate src={CalendarIcon} alt="Ícone de calendário" />
                </LabelsDateTime>
                <InputsDateTime
                  min={today}
                  type="date"
                  id="InputDate"
                  {...register('data', { required: 'Data é obrigatória' })}
                />
              </IconInputContainer>

              <IconInputContainer>
                <LabelsDateTime htmlFor="InputTime">
                  <ImgClock src={ClockIcon} alt="Ícone de relógio" />
                </LabelsDateTime>
                <InputsDateTime
                  type="time"
                  id="InputTime"
                  {...register('hora', { required: 'Hora é obrigatória' })}
                />
              </IconInputContainer>
            </InputDateTimeContainer>

            {errors.data && <FormSpanError>{errors.data.message}</FormSpanError>}
            {errors.hora && <FormSpanError>{errors.hora.message}</FormSpanError>}

            <TextReference>Descrição do evento</TextReference>
            <TextAreaDescription {...register('descricao', { required: 'Descrição é obrigatória' })} />
            {errors.descricao && <FormSpanError>{errors.descricao.message}</FormSpanError>}

            <BtnGroupInfo>
              <TemaSelectionContainer>
                <TitleBtnInfos>Tema do evento</TitleBtnInfos>
                <SelectorsBox {...register('tema', { required: 'Tema é obrigatório' })}>
                  <option value="">Selecionar</option>
                  <option value="show">Show</option>
                  <option value="festival">Festival</option>
                  <option value="gastronomia">Gastronomia</option>
                  <option value="palestra">Palestra</option>
                  <option value="teatro">Teatro</option>
                  <option value="cultura popular">Cultura Popular</option>
                  <option value="cinema">Cinema</option>
                  <option value="dança">Dança</option>
                  <option value="esportes">Esportes</option>
                  <option value="stand-up">Stand-Up</option>
                </SelectorsBox>
                {errors.tema && <FormSpanError>{errors.tema.message}</FormSpanError>}
              </TemaSelectionContainer>

              <EventRatingContainer>
                <TitleBtnInfos>Classificação indicativa</TitleBtnInfos>
                <SelectorsBox {...register('classificacao', { required: 'Classificação é obrigatória' })}>
                  <option value="">Selecionar</option>
                  <option value="Livre">Livre</option>
                  <option value="Infantil">Infantil</option>
                  <option value="Para jovens">Para jovens</option>
                  <option value="Para adultos">Para adultos</option>
                </SelectorsBox>
                {errors.classificacao && <FormSpanError>{errors.classificacao.message}</FormSpanError>}
              </EventRatingContainer>

              <ImgEventContainer>
                <TitleBtnInfos>Imagem do evento</TitleBtnInfos>

                <LabelInputImg htmlFor="InputFile">Selecionar arquivo</LabelInputImg>
                <InputImgEvent
                  type="file"
                  id="InputFile"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagem && !imagePreview && (<FormSpanError>Carregando imagem...</FormSpanError>)}
                {errors?.imagem && <FormSpanError>{errors.imagem.message}</FormSpanError>}
                {imagePreview && (<PreviewImage src={imagePreview} alt="Pré-visualização da imagem" />)}
              </ImgEventContainer>
            </BtnGroupInfo>
          </FormSectionDetalhesContent>
        </FormSectionBackGround>

        <FormSectionBackGround>
          <FormSecTionCreatorContent>
            <TitleSection>Organizador do evento</TitleSection>
            <TextReference>Nome do criador</TextReference>
              <Input {...register('organizador', { required: 'Obrigatório' })} />
              {errors.organizador && <FormSpanError>{errors.organizador.message}</FormSpanError>}
            <TextReference>Informações adicionais</TextReference>
              <TextAreaDescription {...register('organizadorDetalhes')}/>
          </FormSecTionCreatorContent>
        </FormSectionBackGround>

        <PublishBtn type="submit" disabled={!isFormValid}>PUBLICAR EVENTO</PublishBtn>
      </form>
    </MainContent>
  )
}

export default EventCreationForm
