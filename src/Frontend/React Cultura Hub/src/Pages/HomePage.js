import Header from "../components/Header/Header";
import React from "react";
import Footer from "../components/Footer";
import Main from "../components/BarraDeRecomendacao";
import HomeSlider from "../components/SliderHomeP";
import CardSlider from "../components/CardCarrossel";

const HomePage = () =>{
    return(
        <div>
            <Header/>
            <Main/>
            <HomeSlider/>
            <CardSlider/>
            <Footer/>
        </div>
    )
}

export default HomePage