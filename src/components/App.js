import Header from "./Header";
import Catalogo from "./Catalogo";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sucesso from "./Sucesso";


export default function App(){
    const [info, setInfo] = useState({})
    return(
        <BrowserRouter>

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