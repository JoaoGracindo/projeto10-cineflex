import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filme({ imagem, id }) {
  return (
    
      <Poster>
        <Link to={`/sessoes/${id}`}>
            <div>
            <img src={imagem} />
            </div>
        </Link>
      </Poster>
  );
}

export default function Catalogo() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );
    promise.then((response) => {
      setLista(response.data);
    });
  }, []);

  if (lista) {
    return (
      <Container>
        <div>
          {lista.map((filme) => (
            <Filme imagem={filme.posterURL} key={filme.id} id={filme.id} />
          ))}
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <div></div>
      </Container>
    );
  }
}

const Poster = styled.div`
  width: 145px;
  height: 209px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  & div {
    width: 129px;
    height: 193px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Container = styled.div`
  position: absolute;
  top: 67px;
  left: 8%;
  right: 8%;

  & div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
`;
