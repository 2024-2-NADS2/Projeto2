import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import CardUsers from "../components/CardUsers";

//Página para receber todos os usuários cadastrados no site
const UsuariosADMPage = () =>{
    return(
        <>
            <Header/>
            <CardUsers/>
            <Footer/>
        </>

    )
}

export default UsuariosADMPage