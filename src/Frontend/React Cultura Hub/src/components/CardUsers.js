import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaTrash } from "react-icons/fa"

const TitleSection = styled.h1`
    font-size: 30px;
    font-weight: 300;
    text-align: center;
    margin: 50px 0;
`

const CardUserContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 0 auto;
    gap: 60px;
    margin-bottom: 60px;
    max-width: 1600px;
`

const CardUser = styled.div`
    background-color: #f2f2f2;
    border: solid 1px #960019;
    width: 400px;
    padding: 20px;
    margin: 0 auto;
    position: relative;
`

const FaTrashIcon = styled(FaTrash)`
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 30px;
    cursor: pointer; 
    &:hover {
        color: red; 
    }
`

const CardUserDecoration = styled.p`
    display: flex;
`

const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 60px 0;
`

const SpanPaginationTxt = styled.span`
    font-size: 20px;
    font-weight: 290;
`

const PaginationButton = styled.button`
    margin: 0 5px;
    padding: 10px 15px;
    border: none;
    background-color: #960019;
    color: white;
    cursor: pointer;
    border-radius: 5px;

    &:disabled {
        background-color: #ccc; 
        cursor: not-allowed;
    }
`

const CardUsers = () => {
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const usersPerPage = 50

    // Função para buscar usuários do backend
    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/users');
            const data = await response.json();
            setUsers(data)
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    }

    useEffect(() => {
        fetchUsers(); // Chama a função para buscar usuários ao montar o componente
    }, [])

    // Função para deletar usuário
    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    const startIndex = currentPage * usersPerPage
    const selectedUsers = users.slice(startIndex, startIndex + usersPerPage)
    const totalPages = Math.ceil(users.length / usersPerPage)

    return (
        <>
            <TitleSection>USUÁRIOS</TitleSection>
            <CardUserContainer>
                {selectedUsers.map(user => (
                    <CardUser key={user.id}>
                        <CardUserDecoration>Nome: {user.name}</CardUserDecoration>
                        <CardUserDecoration>Sobrenome: {user.surname}</CardUserDecoration>
                        <CardUserDecoration>Email: {user.email}</CardUserDecoration>
                        <FaTrashIcon onClick={() => handleDeleteUser(user.id)} />
                    </CardUser>
                ))}
            </CardUserContainer>

            <PaginationContainer>
                <PaginationButton 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                >
                    Anterior
                </PaginationButton>
                <SpanPaginationTxt>{`Página ${currentPage + 1} de ${totalPages}`}</SpanPaginationTxt>
                <PaginationButton 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))} 
                    disabled={currentPage === totalPages - 1}
                >
                    Próxima
                </PaginationButton>
            </PaginationContainer>
        </>
    )
}

export default CardUsers
