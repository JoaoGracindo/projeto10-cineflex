import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";

function Filme({imagem, id}){
    return(
        <Poster>
            <div>
                <img src={imagem}/>
            </div>
        </Poster>
    )
}

export default function Catalogo(){

    const [lista, setLista] = useState([])

    useEffect( () => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
            setLista(response.data)
        })
    },[])

    if(lista){
        return(
            <>
                {lista.map((filme) => <Filme 
                    imagem={filme.posterURL} 
                    key={filme.id} 
                    id={filme.id}
                    />)}
            </>
    
        )
    }else{
        return(
            <>
                Nada
            </>
        )
    }

}


const Poster = styled.div`
    width: 145px;
    height: 209px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    & div{
        width: 129px;
        height: 193px;

        img{
            width:100%;
            height:100%;
        }
    }
`