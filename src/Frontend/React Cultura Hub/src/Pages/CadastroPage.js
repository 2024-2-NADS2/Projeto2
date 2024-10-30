import Header from "../components/Header/Header";
import React from "react";
import Footer from "../components/Footer";
import Main from "../components/BarraDeRecomendacao"
import CadastroForm from "../components/CadastroUsuario";

const CadastroPage = () =>{
    return(
        <>
        <Header/>
        <Main/>
        <CadastroForm/>
        <Footer/>
        </>
        
    )
}

export default CadastroPage