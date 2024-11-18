import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { AuthContext } from "../context/auth";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const MainTitle = styled.h1`
    font-size: 2.5rem;
    margin: 2rem 0 1rem 0;
    font-weight: 400;
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3.4rem;
`

const ImageEvent = styled.img`
    max-width: 1200px;
    max-height: 600px;
    width: 100%;
    height: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
`
const BtnsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
`

const SaveEventBtn = styled.button`
    background-color: #E40031;
    text-align: center;
    width: 160px;
    height: 35px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    margin-bottom: 110px;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`

const EventContentContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

const EventLocation = styled.h2`
    font-size: 2em;
    font-weight: 300;
    margin: 0 0 1em 0;
`

const EventAddress = styled.h3`
    font-size: 1.2rem;
    font-weight: 300;
`

const DateEvent = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin: 0.7em 0 2em 0;
`

const DescriptionEvent = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
    margin-bottom: 2em;
    max-width: 1000px;

`

const CreatorName = styled.p`
    font-size: 1rem;
    font-weight: 400;
    margin: 2em 0; 
`

const CreatorInfo = styled.p`
    font-size: 1rem;
    font-weight: 300;
    margin: 2em 0;
`
const ErrorMessage = styled.p`
    text-align: center;
    margin: 20em;
    color: red;
    font-weight: bold;
`

const Loading = styled.p`
    text-align: center;
    margin: 20em;
    font-size: 1.2em;
    color: gray;
`
const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`

const PopupContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    width: 300px;
`

const TitleTypePopUp = styled.h3`
    font-weight: 700;
    margin-bottom: 10px;

`

const PopupButton = styled.button`
    background-color: #E40031;
    color: white;
    font-size: 14px;
    padding: 10px;
    margin: 15px 5px 0px 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`
const PopupButtonConfirm = styled.button`
    background-color: green;
    color: white;
    font-size: 14px;
    padding: 10px;
    margin: 15px 5px 0px 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`

const DetailsLink = styled(Link)`
    text-decoration: none;
    color: #E40031;
    font-weight: 600;
`

const ApproveButton = styled.button`
    background-color: #4CAF50;
    text-align: center;
    width: 160px;
    height: 35px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    margin-bottom: 110px;
    cursor: pointer;
`

const DeleteButton = styled.button`
    background-color: #960019;
    text-align: center;
    width: 160px;
    height: 35px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    margin-bottom: 110px;
    cursor: pointer;
`

const StyledIconLoc = styled(FaLocationDot)`
    color: #E40031;
    text-align: center;

`

const AudioDescriptionButton = styled.button`
    background-color: #E40031;
    text-align: center;
    width: 180px;
    height: 40px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
`

const EventContent = () => {
  const navigate = useNavigate()
  const { userDetails, isAuthenticated } = useContext(AuthContext)
  const { id: eventId } = useParams()

  const [currentEvent, setEvent] = useState(null)
  const [isFavorited, setIsFavorited] = useState(false)
  const [isApproved, setIsApproved] = useState(false)
  const [error, setError] = useState(null)
  const [showPopup, setShowPopup] = useState({ type: null, visible: false })

  const userId = userDetails?.id_usuario
  const userRole = userDetails?.role

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return format(date, "EEEE, 'dia' dd 'de' MMMM 'de' yyyy", { locale: ptBR })
  }

  const fetchEvent = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/eventos/${eventId}`)
      if (!response.ok) throw new Error("Erro ao buscar o evento")
      const data = await response.json()
      setEvent(data);

      // Incrementa os acessos
      await fetch(`http://localhost:3001/api/eventos/${eventId}`, { method: "POST" })
    } catch (err) {
      console.error("Erro ao buscar o evento:", err)
      setError("Erro ao buscar evento")
    }
  };

  const handleDeleteEvent = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/eventos/${eventId}/deletar`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idUsuario: userId, userRole }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Erro ao deletar o evento")
      }

      alert("Evento deletado com sucesso");
      navigate("/")
    } catch (err) {
      console.error("Erro ao excluir evento:", err.message)
      alert(err.message)
    }
  }

  const handleApproveEvent = async () => {
    try {
      const newStatus = isApproved ? "em análise" : "aprovado"

      const response = await fetch(`http://localhost:3001/api/eventos/${eventId}/aprovar`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }), 
      })

      if (!response.ok) {
        throw new Error("Erro ao alterar status do evento")
      }

      alert(isApproved ? "Status alterado para não aprovado" : "Evento aprovado com sucesso")

      setIsApproved((prev) => !prev)
    } catch (err) {
      console.error("Erro ao alterar status do evento:", err)
      alert(err.message)
    }
  }

  const checkFavorited = async () => {
    if (!isAuthenticated) return

    try {
      const response = await fetch(`http://localhost:3001/api/eventos/${eventId}/favorito/${userId}`)
      if (!response.ok) throw new Error("Erro ao verificar favorito")
      const data = await response.json()
      setIsFavorited(data.isFavorited)
    } catch (err) {
      console.error("Erro ao verificar favorito:", err)
    }
  }

  const checkApproved = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/eventos/${eventId}/aprovados`);
      if (!response.ok) throw new Error("Erro ao verificar evento")
      const data = await response.json();
      setIsApproved(data.status === "aprovado")
    } catch (err) {
      console.error("Erro ao verificar evento:", err)
    }
  }

  const toggleFavorite = async () => {
    try {
      if (isFavorited) {
        const response = await fetch(`http://localhost:3001/api/eventos/${eventId}/desfavoritar`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idUsuario: userId }),
        });
        if (!response.ok) throw new Error("Erro ao desfavoritar o evento")
        setIsFavorited(false)
      } else {
        const response = await fetch(`http://localhost:3001/api/eventos/${eventId}/salvar`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ idUsuario: userId, dataEvento: new Date().toISOString().split("T")[0] }),
        })
        if (!response.ok) throw new Error("Erro ao salvar o evento")
        setIsFavorited(true)
      }
    } catch (err) {
      console.error("Erro ao alternar favorito:", err)
      alert(err.message)
    }
  }

  const handlePopupAction = async () => {
    try {
      if (showPopup.type === "aprovar") await handleApproveEvent()
      else if (showPopup.type === "deletar") await handleDeleteEvent()
    } catch (err) {
      console.error(err.message)
    } finally {
      setShowPopup({ type: null, visible: false })
    }
  }

  const readEventDetails = () => {
    const textToRead = `
      Título do evento: ${currentEvent.titulo}.
      Local: ${currentEvent.nomeLocal}, 
      Endereço: ${currentEvent.rua}, ${currentEvent.numero} - ${currentEvent.bairro}, ${currentEvent.cidade}.
      Descrição: ${currentEvent.descricao}.
      Data do evento: ${formatDate(currentEvent.data_evento)}.
      Organizador: ${currentEvent.organizador}.
    `

    const utterance = new SpeechSynthesisUtterance(textToRead)
    utterance.lang = "pt-BR"

  
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    fetchEvent()
    checkFavorited()
    checkApproved()
    return () => {
      // Parar a leitura ao sair da página
      window.speechSynthesis.cancel()
    }
  }, [eventId])

  if (error) return <ErrorMessage>{error}</ErrorMessage>
  if (!currentEvent) return <Loading>Carregando...</Loading>

  return (
    <>
      <ImgContainer>
        <ImageEvent src={currentEvent.imagemUrl} alt={currentEvent.titulo} />
      </ImgContainer>
      <EventContentContainer>
        <MainTitle>{currentEvent.titulo}</MainTitle>
        <EventLocation>
          {currentEvent.nomeLocal} <StyledIconLoc />
        </EventLocation>
        <EventAddress>
          <b>Endereço:</b> {`${currentEvent.rua}, ${currentEvent.numero} - ${currentEvent.bairro}, ${currentEvent.cidade}`}
        </EventAddress>
        <DateEvent>
          <b>Data:</b> {formatDate(currentEvent.data_evento)}
        </DateEvent>
        <DescriptionEvent>
          <b>Descrição:</b> {currentEvent.descricao}
        </DescriptionEvent>
        <DetailsLink target="_blank" rel="noopener noreferer" to={currentEvent.linkPagamento}>
          Para mais informações e/ou pagamento clique aqui!
        </DetailsLink>
        <CreatorName>{currentEvent.organizador}</CreatorName>
        <CreatorInfo>{currentEvent.organizadorDetalhes}</CreatorInfo>
        <AudioDescriptionButton onClick={readEventDetails}>
          Ouvir Descrição
        </AudioDescriptionButton>
        <BtnsContainer>
          <SaveEventBtn onClick={toggleFavorite} disabled={!isAuthenticated}>
            {isFavorited ? "DESFAVORITAR" : "SALVAR EVENTO"}
          </SaveEventBtn>
          {userRole === "Admin" && (
            <ApproveButton onClick={() => setShowPopup({ type: "aprovar", visible: true })}>
              {isApproved ? "ALTERAR STATUS" : "APROVAR EVENTO"}
            </ApproveButton>
          )}
          {(userRole === "Admin" || userId === currentEvent?.idUsuario) && (
            <DeleteButton onClick={() => setShowPopup({ type: "deletar", visible: true })}>
              Deletar Evento
            </DeleteButton>
          )}
        </BtnsContainer>
        {showPopup.visible && (
          <PopupOverlay>
            <PopupContainer>
              <TitleTypePopUp>
                {showPopup.type === "aprovar"
                  ? isApproved
                    ? "Deseja alterar o status para não aprovado?"
                    : "Deseja aprovar este evento?"
                  : "Deseja deletar este evento?"}
              </TitleTypePopUp>
              <PopupButtonConfirm onClick={handlePopupAction}>Confirmar</PopupButtonConfirm>
              <PopupButton onClick={() => setShowPopup({ type: null, visible: false })}>
                Cancelar
              </PopupButton>
            </PopupContainer>
          </PopupOverlay>
        )}
      </EventContentContainer>
    </>
  )
}

export default EventContent