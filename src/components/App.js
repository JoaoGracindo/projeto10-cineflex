import Header from "./Header";
import Catalogo from "./Catalogo";
import Sessoes from "./Sessoes";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <BrowserRouter>

            <Header/>
            <Routes>
                <Route path="/" element={<Catalogo/>}/>
                <Route path="/sessoes/:idFilme" element={<Sessoes/>}/>
            </Routes>

        </BrowserRouter>
    )
}