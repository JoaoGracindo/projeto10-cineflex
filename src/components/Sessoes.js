import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';



export default function Sessoes(){

    const {idFilme} = useParams();

    useEffect(() =>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(() => {

        })
    })

    console.log(idFilme)
    return(
        <> 
        
        </>
    )
}