import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Sucesso({ info }) {
  console.log(info);
  const navigate = useNavigate();
  return (
    <ContainerSucesso>
      <div className="mensagem">Pedido feito com sucesso!</div>
      <div>
        <h1>Filme e sessão</h1>
        <p>{info.nomeFilme}</p>
        <p>
          {info.date} {info.horario}
        </p>
      </div>
      <div>
        <h1>Ingressos</h1>
        {info.seats.map((a) => (
          <p>Assento {a}</p>
        ))}
      </div>
      <div>
        <h1>Comprador</h1>
        <p>Nome: {info.user.nome}</p>
        <p>CPF: {info.user.cpf}</p>
      </div>
      <button onClick={() => navigate("/")}>Voltar pra Home</button>
    </ContainerSucesso>
  );
}

const ContainerSucesso = styled.div`
  position: fixed;
  top: 67px;
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 100%;

  .mensagem{
    width:200px;
    align-self:center;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin-bottom: 60px;

    color: #247A6B;
  }

  div {
    margin-top: 20px;
    margin-left: 8vw;
  }

  button {
    width: 225px;
    height: 42px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #ffffff;
    background-color: #e8833a;
    border-radius: 3px;

    border: none;
    margin: auto;
    margin-top: 60px;
  }

  h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    color: #293845;
  }

  p {
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;

    color: #293845;
  }
`;
