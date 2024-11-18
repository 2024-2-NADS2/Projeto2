import Header from "../components/Header/Header";
import React from "react";
import Footer from "../components/Footer";
import Recomendacoes from "../components/BarraDeRecomendacao"
import CadastroForm from "../components/CadastroUsuario";

const CadastroPage = () =>{
    return(
        <>
        <Header/>
        <Recomendacoes/>
        <CadastroForm/>
        <Footer/>
        </>
        
    )
}

export default CadastroPage