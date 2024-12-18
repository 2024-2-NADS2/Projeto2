import React from "react";
import Header from "../components/Header/Header";
import Recomendacoes from "../components/BarraDeRecomendacao";
import AllEvents from "../components/AllEvents";
import Footer from "../components/Footer";

const AllEventsPage = () =>{
    return(
        <>
            <Header/>
            <Recomendacoes/>
            <AllEvents/>
            <Footer/>
        </>
    )
}

export default AllEventsPage