import React from "react";
import Header from "../components/Header/Header";
import Recomendacoes from "../components/BarraDeRecomendacao";
import Footer from "../components/Footer";
import EventStatus from "../components/EventsToApproval";

const ReviewAllEventsPage = () =>{
    return(
        <>
            <Header/>
            <Recomendacoes/>
            <EventStatus/>
            <Footer/>
        </>
    )
}

export default ReviewAllEventsPage