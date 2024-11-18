import React, { useState, useEffect, useContext } from 'react';
import logo from '../assets/CHUB7.png';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import profileIcon from '../assets/icon-user-perfil.png';
import { TbLogout } from "react-icons/tb";
import { AuthContext } from '../../context/auth';
import { SearchContext } from '../../context/SearchContext';
import { IoNotifications } from "react-icons/io5";


const Nav = styled.nav`
    padding: 1.2em 0em;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
`  
const Image = styled.img`
    max-width: 12.5rem;
    max-height: 6.25rem;
    width: auto;
    height: auto;
    
`  
const InputLoc = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
`  
const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    max-width: 600px;
    max-height: 40px;
    width: 100%;
    border: none;
    border-radius: 5px;
`  
const InputBox = styled.input`
    min-width: 200px;
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-weight: 300;
    border-radius: 5px;
    border: none;
    padding: 10px;
    &:focus {
        outline: none;
        color: #8a8a8a;
    }
`
const SuggestionsDropdown = styled.div`
    position: absolute;
    max-width: 30rem;
    top: 95px; 
    left: 100;
    width: 60em;
    background-color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`  
const SuggestionItem = styled.div`
    padding: 10px;
    font-size: 15px;
    color: #333;
    cursor: pointer;
    border-bottom: 1px solid #f0f0f0;  
    &:last-child {
        border-bottom: none;
    }
`  
const SearchIcon = styled(FaSearch)`
    color: #8a8a8a;
    font-size: 18px;
    margin-right: 15px;
    cursor: pointer;
`  
const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    position: relative; 
`  
const LocationText = styled.span`
    margin-right: 5px;
    color: white;
    cursor: pointer;
`  
const LocationIcon = styled(FaMapMarkerAlt)`
    color: #5F000D;
    font-size: 18px;
    cursor: pointer;
`  
const DropdownLocation = styled.div`
    position: absolute;
    top: 2rem;
    background-color: white;
    border: solid 1px #960019;
    border-radius: 10px;
    z-index: 10;
    width: 150px;
    margin-top: 5px;
`  
const DropdownOption = styled.div`
    font-size: 15px;
    font-weight: 300;
    padding: 10px;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
        background-color: #f0f0f0;
    }
    &:hover:not(:last-child) {
        border-bottom: solid 1px #960019;
    }
`  
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
    padding: 5px;
    gap: 10px;
`  
const ButtonLogin = styled(Link)`
    font-size: 14px;
    background-color: transparent;
    padding: 15px;
    height: 40px;
    display: flex;
    align-items: center;
    font-weight: 300;
    border: none;
    color: white;
    cursor: pointer;
    text-decoration: none;
`  
const ButtonCadastro = styled(Link)`
    font-size: 14px;
    background-color: transparent;
    padding: 16px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    border: 2px solid #960019;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #960019;
        transition: 0.4s;
    }
    text-decoration: none;
`  
const ProfileIcon = styled.img`
    width: 30px;
    height: 30px;
    
    cursor: pointer;
`
const CreateEventBtn = styled.button`
    border: none;
    font-size: 14px;
    border-radius: 5px;
    background-color: transparent;
    padding: 15px;
    height: 35px;
    display: flex;
    align-items: center;
    font-weight: 300;
    color: white;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: #960019;
        transition: 0.4s;
    }
    text-decoration: none;
`  
const IconLogout = styled(TbLogout)`
    font-size: 35px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    align-content: center;
    color: white;
`  

const NotifyContainer = styled.div`
    position: relative;
`

const NotificationPopup = styled.div`
    position: absolute;
    top: 40px;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    max-height: 400px;
    overflow-y: auto;
    z-index: 100;
`

const NotificationItem = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    &:hover {
        background-color: #f1f1f1;
    }
`

const NotificationImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 50%;
    margin-right: 10px;
`

const NotificationText = styled.div`
    flex: 1;
    font-size: 14px;
    color: #333;
`

const EmptyNotification = styled.div`
    padding: 20px;
    text-align: center;
    color: #999;
    font-size: 14px;
`

const NotifyIconStyled = styled(IoNotifications)`
    font-size: 33px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    align-content: center;
    color: ${({ hasNotifications }) => (hasNotifications ? 'green' : 'white')};
`

const NotificationTextDefault = styled.h1`
    font-size: 15px;
`

const NavBar = () => {

    const { isAuthenticated, userDetails, logout } = useContext(AuthContext)
    const [popupVisible, setPopupVisible] = useState(false)
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState('')
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [location, setLocation] = useState('')
    const [suggestions, setSuggestions] = useState(['Shows', 'Festas', 'Palestras'])
    const [isInputFocused, setIsInputFocused] = useState(false)
    const [notifications, setNotifications] = useState([])
    const hasNotifications = notifications.length > 0;
    const { searchQuery, setSearchQuery } = useContext(SearchContext)

    // Função para lidar com a mudança de input de busca
    const handleInputChange = (e) => {
        const query = e.target.value
        setInputValue(query)
        setSearchQuery(query)
        if (query.length > 0) {
            setSuggestions(['Show', 'Festa', 'Palestra'])
        } else {
            setSuggestions([])
        }
    }

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch(`http://localhost:3001/api/notifications/${userDetails.id_usuario}`)
                const data = await response.json()
                setNotifications(data)
            } catch (error) {
                console.error('Erro ao buscar notificações:', error)
            }
        }
    
        if (isAuthenticated) fetchNotifications()
    }, [isAuthenticated, userDetails.id_usuario])

    // Função que exibe ou oculta o dropdown de sugestões
    const handleInputFocus = () => {
        setIsInputFocused(true)
    }

    const handleInputBlur = () => {
        setIsInputFocused(false)
    }

    // Função que exibe ou oculta o dropdown de localização
    const handleLocationClick = () => {
        setDropdownVisible(!dropdownVisible)
    }

    const handleLocationSelect = (loc) => {
        setLocation(loc)
        setDropdownVisible(false)
        if (loc) {
            navigate(`/eventos?cidade=${encodeURIComponent(loc)}&query=${encodeURIComponent(searchQuery)}`)
        }
    }

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion)
        setInputValue(suggestion)
        setSuggestions([])
        setDropdownVisible(false)
        navigate(`/eventos?query=${encodeURIComponent(suggestion)}&cidade=${encodeURIComponent(location)}`)
    }

    // Função para redirecionar a busca
    const handleSearchSubmit = () => {
        navigate(`/eventos?query=${encodeURIComponent(searchQuery)}&cidade=${encodeURIComponent(location)}`)
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearchSubmit()
        }
    }

    return (
 
        <Nav>
  
            <Link to="/">
                <Image src={logo} alt="Logo" />
            </Link>
            <InputLoc>
                <InputContainer>
                    <InputBox
                        value={searchQuery}
                        onKeyDown={handleKeyDown}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus} 
                        onBlur={handleInputBlur}   
                        placeholder="Buscar eventos, shows, festivais..."
                    />
                    <SearchIcon onClick={handleSearchSubmit} />
                    {isInputFocused && ( 
                        <SuggestionsDropdown>
                            {suggestions.map((suggestion, index) => (
                                <SuggestionItem
                                    key={index}
                                    onClick={() => {
                                        setInputValue(suggestion)
                                        setSuggestions([]);
                                        handleSuggestionClick(suggestion)
                                    }}
                                >
                                    {suggestion}
                                </SuggestionItem>
                            ))}
                        </SuggestionsDropdown>
                    )}
                </InputContainer>
                <LocationContainer onClick={handleLocationClick}>
                    <LocationText>Localização</LocationText>
                    <LocationIcon />
                    {dropdownVisible && (
                        <DropdownLocation>
                            <DropdownOption onClick={() => handleLocationSelect('São Paulo')}>São Paulo</DropdownOption>
                            <DropdownOption onClick={() => handleLocationSelect('Campinas')}>Campinas</DropdownOption>
                            <DropdownOption onClick={() => handleLocationSelect('Santos')}>Santos</DropdownOption>
                        </DropdownLocation>
                    )}
                </LocationContainer>
            </InputLoc>
            <ButtonContainer className="btn-container">
                {isAuthenticated ? (
                    <>
                        <CreateEventBtn onClick={() => navigate('/criar-evento')}>CRIAR EVENTO</CreateEventBtn>
                        <ProfileIcon src={profileIcon} alt="Perfil" onClick={() => navigate(`/perfil/${userDetails.id_usuario}`)} />
                        <NotifyContainer>
                            <NotifyIconStyled hasNotifications={hasNotifications} onClick={() => setPopupVisible(!popupVisible)} />
                            {popupVisible && (
                                <NotificationPopup>
                                    {notifications.length > 0 ? (
                                        notifications.map((event) => (
                                        <NotificationItem key={event.id_evento}>
                                        <NotificationImage src={event.imagemUrl} alt={event.titulo} />
                                        <NotificationText onClick={() => navigate(`/eventos/${event.id_evento}`)}>
                                        <NotificationTextDefault>Evento chegando!</NotificationTextDefault>
                                            {event.titulo} - {new Date(event.data_evento).toLocaleDateString()}
                                        </NotificationText>
                                        </NotificationItem>
                                        ))
                                    ) : (
                                    <EmptyNotification>Sem notificações no momento.</EmptyNotification>
                                    )}
                                </NotificationPopup>
                            )}
                        </NotifyContainer>
                        <IconLogout onClick={() => { logout(); navigate('/'); }}></IconLogout>
                    </>
                ) : (
                    <>
                        <ButtonLogin to="/entrar">ENTRAR</ButtonLogin>
                        <ButtonCadastro to="/cadastro">CADASTRE-SE</ButtonCadastro>
                    </>
                )}
            </ButtonContainer>

        </Nav>

    )
}

export default NavBar
