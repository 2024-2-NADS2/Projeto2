import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import CadastroPage from './Pages/CadastroPage'
import CriarEventoPage from './Pages/CriarEvento'
import UsuariosADMPage from './Pages/UsuariosADMPage';
import EventoPage from './Pages/EventoPage';
import AllEventsPage from './Pages/AllEventsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage /> // Página inicial
  },
  {
    path: "/entrar",
    element: <LoginPage /> // Página de login
  },
  {
    path: "/cadastro",
    element: <CadastroPage /> // Página de cadastro
  },
  {
    path: "/eventos",
    element: <AllEventsPage/> // Página de eventos
  },
  {
    path: "/criar-evento",
    element: <CriarEventoPage /> // Página de criação de eventos
  },
  {
    path: "/eventos/:id",
    element: <EventoPage /> // Página do evento
  },
  {
    path: "/adm-usuarios",
    element: <UsuariosADMPage /> // Página de adiministração de usuarios
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
