import React from "react";
import Header from '../components/Header/Header'
import UserContent from "../components/UserContent";
import Footer from "../components/Footer";
import Recomendacoes from "../components/BarraDeRecomendacao";

const UserPage = () =>{
    return(
        <>
            <Header/>
            <Recomendacoes/>
            <UserContent/>
            <Footer/>
        </>

    )
}

export default UserPage