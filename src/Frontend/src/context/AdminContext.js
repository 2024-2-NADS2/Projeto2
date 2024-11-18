import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';

function AdminRoute({ children }) {
    const { userDetails, isAuthenticated } = useContext(AuthContext)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (isAuthenticated !== null) {
            setLoading(false) 
        }
    }, [isAuthenticated])

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (isAuthenticated && userDetails.role === 'Admin') {
        console.log(userDetails.role)
        return children // Se for admin, exibe o conteúdo protegido
    }

    if (!isAuthenticated) {
        return <Navigate to="/entrar" replace /> 
    }

    return <Navigate to="/" replace /> 
}

export default AdminRoute

