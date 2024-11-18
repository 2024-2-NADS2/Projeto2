import Header from "../components/Header/Header"
import React from "react";
import Footer from "../components/Footer"
import Login from "../components/LoginUsuario"
import Recomendacoes from "../components/BarraDeRecomendacao";

const LoginPage = () =>{
    return(
        <div>
            <Header/>
            <Recomendacoes/>
            <Login/>
            <Footer/>
        </div>
    )
}

export default LoginPage