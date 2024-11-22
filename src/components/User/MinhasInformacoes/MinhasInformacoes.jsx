import { useState, useEffect } from "react";
import "./minhasInformacoes.css";
import { api } from "../../../../service/instance";
import { jwtDecode } from "jwt-decode";

export const MinhasInformacoes = () => {
  const [latestUser, setLatestUser] = useState(null);

  useEffect(() => {
    const fetchLatestUser = async () => {
      try {
        // Obtém o token do localStorage
        const token = localStorage.getItem("authToken");

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        // Faz a requisição à API com o token no cabeçalho
        const { data } = await api.get(
          `https://ds-api-5owi.onrender.com/userwithaddress/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setLatestUser(data);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar as informações do usuário:", error);
      }
    };

    fetchLatestUser();
  }, []);

  if (!latestUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="container-my-infos">
      <section className="title-my-infos">
        <h3>Minhas Informações</h3>
        <a href="#">Editar</a>
      </section>

      <hr className="line-my-infos" />

      <section className="infos-pessoais">
        <h4 className="subtitles-my-infos">Informações pessoais</h4>
        <p className="text-my-infos">
          <span className="label-my-infos">
            Nome: {latestUser.name || "Não informado"}
          </span>
        </p>
        <p className="text-my-infos">
          <span className="label-my-infos">
            CPF: {latestUser.cpf || "Não informado"}
          </span>
        </p>
        <p className="text-my-infos">
          <span className="label-my-infos">
            E-mail: {latestUser.email || "Não informado"}
          </span>
        </p>
        <p className="text-my-infos">
          <span className="label-my-infos">
            Telefone: {latestUser.fone || "Não informado"}
          </span>
        </p>
      </section>

      <hr className="line-my-infos" />

      <section>
        <h4 className="subtitles-my-infos">Informações de entrega</h4>
        <p className="text-my-infos">
          <span className="label-my-infos">
            Logradouro: {latestUser.Addresses[0].rua || "Não informado"}
          </span>
        </p>
        <p className="text-my-infos">
          <span className="label-my-infos">
            Bairro: {latestUser.Addresses[0].bairro || "Não informado"}
          </span>
        </p>
        <p className="text-my-infos">
          <span className="label-my-infos">
            Cidade: {latestUser.Addresses[0].cidade || "Não informado"}
          </span>
        </p>
        <p className="text-my-infos">
          <span className="label-my-infos">Estado: </span>Ceará
        </p>
      </section>
    </div>
  );
};
