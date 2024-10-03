import Header from "../components/Header/Header";
import React from "react";
import Footer from "../components/Footer/Footer";
import Main from "../components/Main/Main";
import Login from "../components/LoginForm/Login"

const LoginPage = () =>{
    return(
        <div>
            <Header/>
            <Main/>
                <Login/>
            <Footer/>
        </div>
    )
}

export default LoginPage