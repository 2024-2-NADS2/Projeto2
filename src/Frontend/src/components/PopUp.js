import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  text-align: center;
  color: black;
  font-weight: 300;
  background-color: white;
`

const Button = styled.button`
  background-color: #e40031;
  margin-top: 1em;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`

const Popup = ({ message, type, onClose }) => {
  return (
    <Overlay>
      <Container type={type}>
        <h2>{type === 'error' ? 'Erro' : 'Sucesso'}</h2>
        <p>{message}</p>
        <Button onClick={onClose}>Fechar</Button>
      </Container>
    </Overlay>
  )
}

export default Popup