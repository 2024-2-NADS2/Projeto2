import React, { createContext, useState, useEffect } from 'react'

export const AuthContext = createContext()

function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null)
    const [userDetails, setUserDetails] = useState({ id_usuario: null, role: '' })

    useEffect(() => {
        // Recupera as informações do localStorage
        const token = localStorage.getItem('authToken')
        const userRole = localStorage.getItem('role')
        const userId = localStorage.getItem('id_usuario')

        if (token && userRole && userId) {
            setIsAuthenticated(true)
            setUserDetails({
                id_usuario: userId,
                role: userRole,
            })
        }else {
            setIsAuthenticated(false)
        }
    }, [])

    const login = (token, id_usuario, role) => {
        // Armazena as informações no localStorage
        localStorage.setItem('authToken', token)
        localStorage.setItem('id_usuario', id_usuario)
        localStorage.setItem('role', role)

        setIsAuthenticated(true)
        setUserDetails({
            id_usuario,
            role,
        })
    }

    const logout = () => {
        // Remove as informações do localStorage
        localStorage.removeItem('authToken')
        localStorage.removeItem('id_usuario')
        localStorage.removeItem('role')

        setIsAuthenticated(false)
        setUserDetails({ id_usuario: null, role: '' })
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userDetails, login, logout }}>
            {isAuthenticated === null ? <p>Carregando...</p> : children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
