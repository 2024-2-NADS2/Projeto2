import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import CadastroPage from './Pages/CadastroPage';
import CriarEventoPage from './Pages/CriarEvento';
import UsuariosADMPage from './Pages/UsuariosADMPage';
import EventoPage from './Pages/EventoPage';
import AllEventsPage from './Pages/AllEventsPage';
import AuthProvider from './context/auth';
import UserPage from './Pages/UserPage';
import PrivateRoute from './context/PrivateRoute'; 
import ProtectedProfileRoute from './context/ProtecteProfile';
import AdminRoute  from './context/AdminContext';
import ReviewAllEventsPage from './Pages/ApproveEventsPage';
import FaqPage from './Pages/FaqPage';
import { SearchProvider } from './context/SearchContext';
import AboutUsPage from './Pages/AboutUsPage';
import ScrollToTop from './context/PageOnTop';
import SupportPage from './Pages/SupportPage';



function App() {
  return (
    <SearchProvider>
      <AuthProvider> 
        <BrowserRouter> 
        <ScrollToTop/>
          <Routes> 
            <Route path="/" element={<HomePage />} /> {/* Página inicial */} 
            <Route path="/entrar" element={<LoginPage />} /> {/* Página de login */} 
            <Route path="/cadastro" element={<CadastroPage />} /> {/* Página de cadastro */} 
            <Route path="/eventos/" element={<AllEventsPage />} />{/* Página de eventos */} 

            {/* Página de criação de evento - protegida */}
            <Route 
              path="/criar-evento"
              element={
                <PrivateRoute> 
                  <CriarEventoPage />
                </PrivateRoute>
              }
            />
      
            <Route path="/eventos/:id" element={<EventoPage />} /> {/* Página do evento */}
    

            {/* Página de perfil do usuário - protegida */}
            <Route 
              path="/perfil/:id"
              element={
                <ProtectedProfileRoute>
                  <UserPage />
                </ProtectedProfileRoute>
              }
            />

              {/* Página de administração de usuários */}
              <Route 
                path="/adm-usuarios"
                element={
                  <AdminRoute>
                    <UsuariosADMPage />
                  </AdminRoute>
                }
              />
              
            {/* Página de aprovação de eventos */}
            <Route 
              path="/aprovacao-de-eventos"
              element={
                <AdminRoute>
                  <ReviewAllEventsPage />
                </AdminRoute>
              }
            />
            <Route path="/faq" element={<FaqPage />} /> {/* Página Faq */}
            <Route path="/sobre" element={<AboutUsPage />} /> {/* Página sobre nós */}
            <Route path="/suporte" element={<SupportPage />} /> {/* Página Suporte/Contato */}

            {/* Rota para o caso de página inexistente */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </SearchProvider>
  )
}

export default App
