import styled from "styled-components";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Assentos({ info, setInfo }) {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);
  const [movie, setMovie] = useState({});
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [ids, setIds] = useState([]);
  const [numeroAssentos, setNumeroAssentos] = useState([]);
  let arrayNum = [];
  let arrayId = [];
  let object = {};

  function Seats({ name, id, selected, isAvailable }) {
    return (
      <Assento
        onClick={() => {
          if (isAvailable) {
            selecionar(id, name);
          }
        }}
        isAvailable={isAvailable}
        selected={selected}
      >
        {name}
      </Assento>
    );
  }

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
      )
      .then((response) => {
        setSeats([...response.data.seats]);
        setMovie(response.data.movie);
        object = response.data;
        console.log(object.day);
        setInfo({ ...object.day,horario:object.name });
      });
  }, []);

  function reservarAssentos(e) {
    e.preventDefault();
    console.log(ids);
    const body = {
      ids: ids,
      nome: nome,
      cpf: cpf,
    };
    if (!(body.ids && body.cpf && body.nome)) {
      return;
    }
    axios
      .post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        body
      )
      .then((e) => {
        setInfo({
          ...info,
          horario: object.name,
          nomeFilme: movie.title,
          seats: numeroAssentos,
          user: body,
        });
        console.log(e);
        console.log(info);
        navigate("/sucesso");
      })
      .catch(() => {
        return;
      });
  }

  function selecionar(id, name) {
    if (ids.includes(id)) {
      setIds(ids.filter((i) => i != id));
      arrayId = ids.filter((i) => i != id);
      setNumeroAssentos(numeroAssentos.filter((i) => i !== name));
      arrayNum = numeroAssentos.filter((i) => i !== name);
    } else {
      setIds([...ids, id]);
      arrayId = [...ids, id];
      setNumeroAssentos([...numeroAssentos, name]);
      arrayNum = [...numeroAssentos, name];
    }
    console.log(arrayId);
    console.log(arrayNum);
  }

  if (!seats) {
    return "";
  }
  return (
    <>
      <Main>
        <SessionTitle>Selecione o(s) assento(s)</SessionTitle>
        <SeatsContainer>
          {seats.map((seat) => (
            <Seats
              name={seat.name}
              selected={!ids.includes(seat.id)}
              key={seat.id}
              id={seat.id}
              isAvailable={seat.isAvailable}
            />
          ))}
        </SeatsContainer>
        <form onSubmit={reservarAssentos}>
          <div className="container">
            <label htmlFor="nome">nome</label>
            <input
              onChange={(e) => setNome(e.target.value)}
              id="nome"
              name="nome"
              type="text"
              required
            />
          </div>
          <div className="container">
            <label htmlFor="cpf">cpf</label>
            <input
              onChange={(e) => setCpf(e.target.value)}
              id="cpf"
              name="cpf"
              type="cpf"
              required
            />
          </div>

          <button type="submit">Reservar Assentos</button>
        </form>
      </Main>
      <Footer>
        <img src={movie.posterURL} />
        <div>
          <div>
            <span>{movie.title}</span>
          </div>
          <div>
            <span>{info.weekday} - {info.horario}</span>
          </div>
        </div>
      </Footer>
    </>
  );
}

const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Assento = styled.div`
  box-sizing: border-box;
  width: 26px;
  height: 26px;
  background-color: ${(props) => {
    if (props.isAvailable) {
      if (props.selected) {
        return "#C3CFD9";
      } else {
        return "#1AAE9E";
      }
    }
    return "#FBE192";
  }};

  border: 1px solid #808f9d;
  border-radius: 12px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.04em;
  margin-right: 6px;
  margin-bottom: 22px;
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

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 10px;
  }
  label {
    font-family: "Roboto";
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: #293845;
  }
  input {
    box-sizing: border-box;
    width: 327px;
    height: 51px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }
  button {
    width: 225px;
    height: 42px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    background-color: #e8833a;
    border-radius: 3px;
    color: #ffffff;
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
`;
