import Header from "../components/Header/Header"
import React from "react";
import Footer from "../components/Footer"
import Main from "../components/BarraDeRecomendacao"
import Login from "../components/LoginUsuario"

const LoginPage = () =>{
    return(
        <div>
            <Header/>
            <Main/>
            <Login/>
            <Footer/>
        </div>
    )
}

export default LoginPage