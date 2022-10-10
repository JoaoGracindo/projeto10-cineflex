import { useNavigate } from "react-router-dom";

export default function Sucesso({ info }) {
    console.log(info)
    const navigate = useNavigate()
  return (
    <>
      <div>
        <h1>Filme e sessão</h1>
        <p>{info.nomeFilme}</p>
        <p>{info.data} {info.horario}</p>
      </div>
      <div>
        <h1>Ingressos</h1>
        {info.seats.map((a) => <p>Assento {a}</p>)}
      </div>
      <div>
        <h1>Comprador</h1>
        <p>Nome: {info.user.nome}</p>
        <p>CPF: {info.user.cpf}</p>
      </div>
      <button onClick={() => navigate("/")}>Voltar pra Home</button>
    </>
  );
}
