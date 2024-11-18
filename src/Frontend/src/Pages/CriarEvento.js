import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import React from "react";
import EventCreationForm from "../components/CadastroEvento";

const CriarEventoPage = () =>{
    return(
        <>
        <Header/>
        <EventCreationForm/>
        <Footer/>
        </>
    )
}

export default CriarEventoPage