import Header from "./Header";
import Catalogo from "./Catalogo";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){
    return(
        <BrowserRouter>

            <Header/>
            <Catalogo/>
            <Routes>

            </Routes>

        </BrowserRouter>
    )
}