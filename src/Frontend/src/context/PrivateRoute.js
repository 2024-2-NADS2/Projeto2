import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/auth';


//Contexto para rotas privadas
function PrivateRoute({ children }) {
    const { isAuthenticated } = useContext(AuthContext)

    if (isAuthenticated === null) {
        return <p>Carregando...</p>
    }

    return isAuthenticated ? children : <Navigate to="/entrar" replace />
}

export default PrivateRoute
