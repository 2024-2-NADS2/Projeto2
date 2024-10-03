import React, { useState } from 'react';
import logo from '../assets/CHUB7.png';
import { FaSearch } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = () => {
    // Temas no input box a terminar
    const temas = ['Música', 'Teatro', 'Cinema', 'Festas', 'Esportes', 'Gastronomia'];

    // Estado para controlar o input e as sugestões
    const [inputValue, setInputValue] = useState('');
    const [sugestoes, setSugestoes] = useState([]);

    // Função para lidar com mudanças no input
    const handleInputChange = (e) => {
        const query = e.target.value;
        setInputValue(query);

        // Filtra os temas com base na entrada do usuário
        if (query.length > 0) {
            const filteredTemas = temas.filter((tema) =>
                tema.toLowerCase().includes(query.toLowerCase())
            );
            setSugestoes(filteredTemas);
        } else {
            setSugestoes([]);
        }
    };

    const Nav = styled.nav`
        padding: 1.2em 0em;
        display: flex;
        margin: 0 auto;
        align-items: center;
        justify-content: space-around;
    `;

    const Image = styled.img`
        max-width: 12.5rem;
        max-height: 6.25rem;
        width: auto;
        height: auto;
        object-fit: cover; /* Mantém a proporção enquanto cobre o container */
    `;

    const InputLoc = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 800px;
    `;

    const InputContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: white;
        max-width: 500px;
        max-height: 40px;
        width: 100%;
        border: none;
        border-radius: 5px;
    `;

    const InputBox = styled.input`
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
    `;

    const BtnContainerNav = styled.div`
        display: flex;
        align-items: center;
        margin-left: 30px;
    `;

    const BtnLocNav = styled.button`
        background-color: transparent;
        font-size: 18px;
        color: white;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: 300;
    `;

    const LocationIcon = styled(IoLocationSharp)`
        color: #530a0a;
        margin-left: 5px;
        font-size: 28px;
    `;

    const SearchIcon = styled(FaSearch)`
        color: #8a8a8a;
        font-size: 18px;
        margin-right: 15px;
    `;

    const ButtonContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
        padding: 5px;
        gap: 10px;
    `;

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
        text-decoration: none; /* Remover sublinhado */
    `;

    const ButtonCadastro = styled(Link)`
        font-size: 14px;
        background-color: transparent;
        padding: 15px;
        height: 40px;
        display: flex;
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
        text-decoration: none; /* Remover sublinhado */
    `;

    return (
        <Nav>
            <Link to="/"> {/* Link para a página inicial */}
                <Image src={logo} alt="Logo" />
            </Link>
            <InputLoc>
                <InputContainer>
                    <InputBox 
                        placeholder="Buscar eventos, shows, festivais..." 
                        value={inputValue} 
                        onChange={handleInputChange} // Adicionando a função de mudança
                    />
                    <SearchIcon />
                </InputContainer>
                <BtnContainerNav>
                    <BtnLocNav className="loc-btn">
                        Localização
                        <LocationIcon />
                    </BtnLocNav>
                </BtnContainerNav>
            </InputLoc>
            <ButtonContainer className="btn-container">
                <ButtonLogin to="/entrar" id="btn-login">ENTRAR</ButtonLogin>
                <ButtonCadastro to="/cadastro" id="btn-cadastro">CADASTRE-SE</ButtonCadastro>
            </ButtonContainer>
        </Nav>
    );
};

export default NavBar;
