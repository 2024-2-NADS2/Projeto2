import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaTrash } from "react-icons/fa"
import { GrUserAdmin } from "react-icons/gr";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiAdminLine } from "react-icons/ri";

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
    background-color: white;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    transition: 0.7s;
    &:hover{
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
`

const OptionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 1em;
    margin-top: 1em;
`

const FaTrashIcon = styled(FaTrash)`
    font-size: 20px;
    cursor: pointer; 
    &:hover {
        color: red; 
    }
`
const GrUserAdminIcon = styled(GrUserAdmin)`
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer; 
    &:hover {
        color: green; 
    }
`

const IoIosCheckmarkCircleIcon = styled(IoIosCheckmarkCircle)`
    font-size: 25px;
    margin-left: 10px;
    cursor: pointer; 
    &:hover {
        color: blue;
    }
`
const RiAdminLineIcon = styled(RiAdminLine)`
    font-size: 23px;
    margin-left: 10px;
    cursor: pointer; 
    &:hover {
        color: red;
    }
`

const CardUserDecoration = styled.p`
    display: flex;
    margin-bottom: 5px;
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

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: ${({ show }) => (show ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`

const ModalContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 5px;
    max-width: 400px;
    width: 100%;
    text-align: center;
`
const ModalFont = styled.h1`
    font-size: 20px;
    font-weight: 300;
`

const ModalButton = styled.button`
    padding: 10px 20px;
    margin: 25px 15px 0px 15px;
    background-color: ${({ confirm }) => (confirm ? 'green' : 'red')};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({ confirm }) => (confirm ? 'darkgreen' : 'darkred')};
    }
`

const CardUsers = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showAdminModal, setShowAdminModal] = useState(false)
    const [showVerifiedModal, setShowVerifiedModal] = useState(false)
    const [showCommonModal, setShowCommonModal] = useState(false)
    const [userIdToDelete, setUserIdToDelete] = useState(null)
    const [userIdToPromoteAdmin, setUserIdToPromoteAdmin] = useState(null)
    const [userIdToPromoteVerified, setUserIdToPromoteVerified] = useState(null)
    const [userIdToPromoteCommon, setUserIdToPromoteCommon] = useState(null)
    const usersPerPage = 50

    //Requisição para pegar todos os usuários
    const fetchUsers = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('http://localhost:3001/api/adm-usuarios')
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            console.error('Erro ao buscar usuários:', error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    //Método para deletar o usuário
    const handleDeleteUser = async () => {
        try {
            await fetch(`http://localhost:3001/api/adm-usuarios/${userIdToDelete}`, {
                method: 'DELETE',
            })
            setUsers(users.filter(user => user.id_usuario !== userIdToDelete))
            setShowDeleteModal(false)
        } catch (error) {
            console.error('Erro ao deletar usuário:', error)
        }
    }

    //Método para cargo de Admin
    const handleSetAdmin = async () => {
        try {
            await fetch(`http://localhost:3001/api/adm-usuarios/admin/${userIdToPromoteAdmin}`, {
                method: 'PUT',
            })
            setUsers(users.map(user =>
                user.id_usuario === userIdToPromoteAdmin ? { ...user, role: 'admin' } : user
            ))
            setShowAdminModal(false)
        } catch (error) {
            console.error('Erro ao promover usuário:', error)
        }
    }

    //Método para cargo de Verificado
    const handleSetVerified = async () => {
        try {
            await fetch(`http://localhost:3001/api/adm-usuarios/verificado/${userIdToPromoteVerified}`, {
                method: 'PUT',
            })
            setUsers(users.map(user =>
                user.id_usuario === userIdToPromoteVerified ? { ...user, role: 'verificado' } : user
            ))
            setShowVerifiedModal(false)
        } catch (error) {
            console.error('Erro ao promover usuário:', error)
        }
    }
    
    //Método para cargo de usuário comum
    const handleSetCommon = async () => {
        try {
            await fetch(`http://localhost:3001/api/adm-usuarios/comum/${userIdToPromoteCommon}`, {
                method: 'PUT',
            })
            setUsers(users.map(user =>
                user.id_usuario === userIdToPromoteCommon ? { ...user, role: 'comum' } : user
            ))
            setShowCommonModal(false)
        } catch (error) {
            console.error('Erro ao promover usuário:', error)
        }
    }

    //paginação
    const startIndex = currentPage * usersPerPage
    const selectedUsers = users.slice(startIndex, startIndex + usersPerPage)
    const totalPages = Math.ceil(users.length / usersPerPage)

    return (
        <>
            <TitleSection>USUÁRIOS</TitleSection>
            <CardUserContainer>
                {selectedUsers.map(user => (
                    <CardUser key={user.id_usuario}>
                        <CardUserDecoration>Id: {user.id_usuario}</CardUserDecoration>
                        <CardUserDecoration>{user.nome} {user.sobrenome}</CardUserDecoration>
                        <CardUserDecoration>{user.email}</CardUserDecoration>
                        <CardUserDecoration>{user.role}</CardUserDecoration>
                        <OptionsContainer>
                            <FaTrashIcon onClick={() => {
                                setUserIdToDelete(user.id_usuario)
                                setShowDeleteModal(true)
                            }} />
                            <GrUserAdminIcon onClick={() => {
                                setUserIdToPromoteAdmin(user.id_usuario)
                                setShowAdminModal(true)
                            }} />
                            <IoIosCheckmarkCircleIcon onClick={() => {
                                setUserIdToPromoteVerified(user.id_usuario)
                                setShowVerifiedModal(true)
                            }} />
                            <RiAdminLineIcon onClick={()=> {
                                setUserIdToPromoteCommon(user.id_usuario)
                                setShowCommonModal(true)
                            }} />
                        </OptionsContainer>
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
                    Próximo
                </PaginationButton>
            </PaginationContainer>

            <Modal show={showDeleteModal}>
                <ModalContent>
                    <ModalFont>Tem certeza de que deseja excluir este usuário?</ModalFont>
                    <ModalButton onClick={handleDeleteUser} confirm>Confirmar</ModalButton>
                    <ModalButton onClick={() => setShowDeleteModal(false)}>Cancelar</ModalButton>
                </ModalContent>
            </Modal>

            <Modal show={showAdminModal}>
                <ModalContent>
                    <ModalFont>Promover usuário a administrador?</ModalFont>
                    <ModalButton onClick={handleSetAdmin} confirm>Confirmar</ModalButton>
                    <ModalButton onClick={() => setShowAdminModal(false)}>Cancelar</ModalButton>
                </ModalContent>
            </Modal>

            <Modal show={showVerifiedModal}>
                <ModalContent>
                    <ModalFont>Promover usuário a verificado?</ModalFont>
                    <ModalButton onClick={handleSetVerified} confirm>Confirmar</ModalButton>
                    <ModalButton onClick={() => setShowVerifiedModal(false)}>Cancelar</ModalButton>
                </ModalContent>
            </Modal>

            <Modal show={showCommonModal}>
                <ModalContent>
                    <ModalFont>Promover usuário a comum?</ModalFont>
                    <ModalButton onClick={handleSetCommon} confirm>Confirmar</ModalButton>
                    <ModalButton onClick={() => setShowCommonModal(false)}>Cancelar</ModalButton>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CardUsers
