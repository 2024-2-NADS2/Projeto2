import React, { useContext, useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AuthContext } from '../context/auth';


//Contexto para proteger o perfil dos usuários
function ProtectedProfileRoute({ children }) {
    const { userDetails, isAuthenticated } = useContext(AuthContext)
    const { id: userId } = useParams()
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        if (isAuthenticated !== null) {
          setLoading(false)
        }
        }, [isAuthenticated])
    
        
        if (loading) {
            return <p>Carregando...</p>
        }
    
        // Admin ou o próprio usuário podem acessar o perfil
        if (userDetails.id_usuario == userId || userDetails.role == 'Admin') {
            return children
        }
    
        
        if (!isAuthenticated) {
            return <Navigate to="/entrar" replace />
        }
    
        // Redireciona para o próprio perfil se tentar acessar outro
    return <Navigate to={`/perfil/${userDetails.id_usuario}`} replace />
}
    

export default ProtectedProfileRoute
