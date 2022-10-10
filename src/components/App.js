import Header from "./Header";
import Catalogo from "./Catalogo";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sucesso from "./Sucesso";
import { createGlobalStyle } from "styled-components";


export default function App(){
    const [info, setInfo] = useState({})
    return(
        <BrowserRouter>
        <GlobalStyle/>

            <Header/>
            <Routes>
                <Route path="/" element={<Catalogo/>}/>
                <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
                <Route path="/assentos/:idSessao" element={<Assentos info={info} setInfo={setInfo}/>}/>
                <Route path="/sucesso" element={<Sucesso info={info}/>}/>
            </Routes>

        </BrowserRouter>
    )
}

const GlobalStyle = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`