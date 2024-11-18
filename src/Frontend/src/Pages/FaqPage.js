import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import React from "react";
import Fac from "../components/Faq";
import Recomendacoes from "../components/BarraDeRecomendacao";

const FaqPage = () =>{
    return(
        <>
        <Header/>
        <Recomendacoes/>
        <Fac/>
        <Footer/>
        </>
    )
}

export default FaqPage