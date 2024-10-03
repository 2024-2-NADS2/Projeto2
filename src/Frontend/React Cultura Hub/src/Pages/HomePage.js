import Header from "../components/Header/Header";
import React from "react";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Slider from "../components/Slider/Slider";
import CardSlider from "../components/Card-Section/Card";

const HomePage = () =>{
    return(
        <div>
            <Header/>
            <Main/>
            <Slider/>
            <CardSlider/>
            <Footer/>
        </div>
    )
}

export default HomePage