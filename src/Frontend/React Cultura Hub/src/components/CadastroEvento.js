import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import CalendarIcon from './assets/calendar.png'
import ClockIcon from './assets/clock.png'


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
  display: flex;
  gap: 2.18em;
  margin-top: 56px;
  margin-bottom: 65px;
`

const BtnsPreco = styled.button`
  width: 246px;
  height: 82px;
  padding: 10px;
  border: none;
  background-color: #d9d9d9;
  font-size: 16px;
  font-weight: 300;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #b0b0b0;
  }
`

const InputDateTimeContainer = styled.div`
    display: flex;
    gap: 100px;
`

const IconInputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const InputsDateTime = styled(Input)`
    text-align: center;
    width: 246px;
    height: 82px;
    background-color: #d9d9d9;
    border-radius: 0px;
    font-size: 20px;
    font-weight: 200;
    cursor: pointer;
`

const LabelsDateTime = styled.label`
    width: 100px;
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: solid 1px #E40031;
    background-color: #d9d9d9;
    border-radius: 5px 0 0 5px;
`
const ImgDate = styled.img`
    width: 44px;
    height: 44px;
`

const ImgClock = styled.img`
    width: 44px;
    height: 44px;
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
`


const EventCreationForm = () => {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const checkCEP = (e) => {
    if (!e.target.value) return; 
    const cep = e.target.value.replace(/\D/g, '')
    console.log(cep)
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data =>{
      console.log(data)
      setValue('rua', data.logradouro)
      setValue('bairro', data.bairro)
      setValue('cidade', data.localidade)
      setValue('estado', data.uf)
      
    })
    
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <MainContent>
      <Heading1>CRIAR EVENTO</Heading1>
      
      <form method='post' onSubmit={handleSubmit(onSubmit)}>
        <FormSectionBackGround>
          <FormSectionLocalContent>
            <TitleSection>LOCAL DO EVENTO:</TitleSection>
            <TextReference>Nome do local</TextReference>
            <Input type="text" {...register('nomeLocal', { required: 'Nome do local obrigatório' })} />
            {errors.nomeLocal && <FormSpanError>{errors.nomeLocal.message}</FormSpanError>}

            <TextReference>CEP</TextReference>
            <Input type="text" {...register('cep', { required: 'CEP obrigatório', message: 'CEP inválido' } )} onBlur={checkCEP} />
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
            <TextReference>Nome do evento</TextReference>
            <Input type="text" {...register('nomeEvento', { required: 'Nome do evento é obrigatório' })} />
            {errors.nomeEvento && <FormSpanError>{errors.nomeEvento.message}</FormSpanError>}

            <BtnGroupPreco>
              <BtnsPreco value="gratuito">Evento Gratuito</BtnsPreco>
              <BtnsPreco value="pago">Evento Pago</BtnsPreco>
            </BtnGroupPreco>

            <InputDateTimeContainer>
              <IconInputContainer>
                <LabelsDateTime htmlFor="InputDate">
                  <ImgDate src={CalendarIcon} alt="Ícone de calendário" />
                </LabelsDateTime>
                <InputsDateTime
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
                  <option value="cultura">Cultura Popular</option>
                  <option value="cinema">Cinema</option>
                  <option value="dança">Dança</option>
                  <option value="esporte">Esporte</option>
                  <option value="standup">Stand-Up</option>
                </SelectorsBox>
                {errors.tema && <FormSpanError>{errors.tema.message}</FormSpanError>}
              </TemaSelectionContainer>

              <EventRatingContainer>
                <TitleBtnInfos>Classificação indicativa</TitleBtnInfos>
                <SelectorsBox {...register('classificacao', { required: 'Classificação é obrigatória' })}>
                  <option value="">Selecionar</option>
                  <option value="Livre">Livre</option>
                  <option value="Para crianças">Para crianças</option>
                  <option value="Para adolescentes">Para adolescentes</option>
                  <option value="Para adultos">Para adultos</option>
                </SelectorsBox>
                {errors.classificacao && <FormSpanError>{errors.classificacao.message}</FormSpanError>}
              </EventRatingContainer>

              <ImgEventContainer>
                <TitleBtnInfos>Imagem do evento</TitleBtnInfos>
                <LabelInputImg htmlFor="InputFile">Selecionar arquivo</LabelInputImg>
                <InputImgEvent type="file" id="InputFile" {...register('imagem', { required: 'Imagem é obrigatória' })} />
                {errors.imagem && <FormSpanError>{errors.imagem.message}</FormSpanError>}
              </ImgEventContainer>
            </BtnGroupInfo>
          </FormSectionDetalhesContent>
        </FormSectionBackGround>

        <PublishBtn type="submit">PUBLICAR EVENTO</PublishBtn>
      </form>
    </MainContent>
  )
}

export default EventCreationForm;
