import Header from "../components/Header/Header";
import React from "react";
import Footer from "../components/Footer";
import HomeSlider from "../components/SliderHome";
import CardSlider from "../components/Cards";
import Recomendacoes from "../components/BarraDeRecomendacao";

const HomePage = () =>{
    return(
        <div>
            <Header/>
            <Recomendacoes/>
            <HomeSlider/>
            <CardSlider/>
            <Footer/>
        </div>
    )
}

export default HomePage