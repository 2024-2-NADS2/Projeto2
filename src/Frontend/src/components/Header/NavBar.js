import React, { useState } from 'react';
import logo from '../assets/CHUB7.png';
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import profileIcon from '../assets/icon-user-perfil.png';

const NavBar = () => {
    //  input de pesquisa e de localização
    const [inputValue, setInputValue] = useState('')
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [location, setLocation] = useState('') // Estado para a localização
    const [suggestions, setSuggestions] = useState(['Shows', 'Festas', 'Palestras']) // Sugestões de eventos

    const handleInputChange = (e) => {
        const query = e.target.value;
        setInputValue(query)
        if (query.length > 0) {
            setSuggestions(['Shows', 'Festas', 'Palestras'])
        } else {
            setSuggestions([])
        }
    }

    const handleLocationClick = () => {
        setDropdownVisible(!dropdownVisible)
    }

    const handleLocationSelect = (loc) => {
        setLocation(loc);
        setDropdownVisible(false)
    }

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

    const SearchIcon = styled(FaSearch)`
        color: #8a8a8a;
        font-size: 18px;
        margin-right: 15px;
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


    return (
        <Nav>
            <Link to="/">
                <Image src={logo} alt="Logo" />
            </Link>
            <InputLoc>
                <InputContainer>
                    <InputBox
                        placeholder="Buscar eventos, shows, festivais..."
                    />
                    <SearchIcon />
                </InputContainer>
                <LocationContainer onClick={handleLocationClick}>
                    <LocationText>Localização</LocationText>
                    <LocationIcon />
                    {dropdownVisible && (
                        <DropdownLocation>
                            <DropdownOption onClick={() => handleLocationSelect('Sua Localização')}>Sua Localização</DropdownOption>
                            <DropdownOption onClick={() => handleLocationSelect('São Paulo')}>São Paulo</DropdownOption>
                            <DropdownOption onClick={() => handleLocationSelect('Campinas')}>Campinas</DropdownOption>
                            <DropdownOption onClick={() => handleLocationSelect('Santos')}>Santos</DropdownOption>
                        </DropdownLocation>
                    )}
                </LocationContainer>
            </InputLoc>
            <ButtonContainer className="btn-container">
                        <ButtonLogin to="/entrar" id="btn-login">ENTRAR</ButtonLogin>
                        <ButtonCadastro to="/cadastro" id="btn-cadastro">CADASTRE-SE</ButtonCadastro>
            </ButtonContainer>
        </Nav>
    )
}

export default NavBar
