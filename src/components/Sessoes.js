import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SessionTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  color: #293845;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  height: 110px;
`;

const Main = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 70px;
  margin-left: 5vw;
  margin-right: 5vw;
  width: 90vw;
  bottom: 120px;
`;

const Session = styled.div`
  height: 110px;
  width: 100%;
`;

const Showtimes = styled.div`
  display: flex;
  align-items: center;

  & a {
    width: 82px;
    height: 43px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.02em;
    margin-left: 8px;
    text-decoration: none;
    background-color: #e8833a;
    border-radius: 3px;
    color: #ffffff;
  }
`;

const Dia = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  color: #293845;
  margin-top: 27px;
  margin-bottom: 20px;
`;

const Footer = styled.div`
  position: fixed;
  width: 100%;
  height: 110px;
  left: 0px;
  bottom: 0px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  display: flex;
  align-items: center;

  & img {
    box-sizing: border-box;
    height: 70px;
    width: 64px;
    border: 8px solid #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-left: 10px;
    margin-right: 15px;
  }

  & span {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    color: #293845;
  }
`;

export default function Sessoes() {
  const { idFilme } = useParams();

  const [movie, setMovie] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`
      )
      .then((e) => setMovie({ ...e.data }));
  }, []);

  function SessionDays({ id, weekday, date, showtimes }) {
    return (
      <div>
        <Dia>
          {weekday} - {date}
        </Dia>
        <Showtimes>
          {showtimes.map((v) => (
            <Link to={`/assentos/${v.id}`} key={v.id}>
              {v.name}
            </Link>
          ))}
        </Showtimes>
      </div>
    );
  }

  if (!movie) {
    return "";
  }
  return (
    <>
      <Main>
        <SessionTitle>Selecione o horário</SessionTitle>
        <Session>
          {movie.days.map((value) => (
            <SessionDays {...value} />
          ))}
        </Session>
      </Main>
      <Footer>
        <img src={movie.posterURL} />
        <span>{movie.title}</span>
      </Footer>
    </>
  );
}
