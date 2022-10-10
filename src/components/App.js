import Header from "./Header";
import Catalogo from "./Catalogo";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <BrowserRouter>

            <Header/>
            <Routes>
                <Route path="/" element={<Catalogo/>}/>
                <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
                <Route path="/assentos/:idSessao" element={<Assentos/>}/>
            </Routes>

        </BrowserRouter>
    )
}