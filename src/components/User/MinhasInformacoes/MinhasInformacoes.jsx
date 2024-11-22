import React, { useState,  useEffect } from "react";
import "./minhasInformacoes.css";
import { api } from "../../../../service/instance"





export const MinhasInformacoes = () => {


  const [latestUser, setLatestUser] = useState(null);

  useEffect(() => {
    const fetchLatestUser = async () => {
      try {
        const { data } = await api.get("https://ds-api-5owi.onrender.com/userwithaddress/10");
        setLatestUser(data);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchLatestUser();
  }, []);

  if (!latestUser) {
    return <p>Carregando...</p>;
  }


  return (
    <>
      <div className="container-my-infos">
        <section className="title-my-infos">
          <h3>Minhas Informações</h3>
          <a href="#">Editar</a>
        </section>

        <hr className="line-my-infos" />

        <section className="infos-pessoais">
          <h4 className="subtitles-my-infos">Informações pessoais</h4>
          <p className="text-my-infos">
            <span className="label-my-infos">Nome: {latestUser.name || "Não informado"}</span>
            
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">CPF: {latestUser.cpf || "Não informado"}</span>
            
            
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">E-mail: {latestUser.email || "Não informado"}</span>
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">Telefone: {latestUser.fone || "Não informado"}</span>
          </p>
        </section>

        <hr className="line-my-infos" />

        <section>
          <h4 className="subtitles-my-infos">Informações de entrega</h4>
          <p className="text-my-infos">
            <span className="label-my-infos">Logradouro: {latestUser.rua || "Não informado"}</span>
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">Bairro: {latestUser.bairro || "Não informado"}</span>
            
          </p>
          
          <p className="text-my-infos">
            <span className="label-my-infos">Cidade: {latestUser.cidade || "Não informado"}</span>
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">Estado: </span>Ceará
          </p>
        </section>
        
      </div>
       
    </>
  );
};
