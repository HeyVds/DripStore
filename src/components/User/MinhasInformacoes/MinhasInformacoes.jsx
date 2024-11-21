import "./minhasInformacoes.css";

export const MinhasInformacoes = () => {
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
            <span className="label-my-infos">Nome: </span>Lorem ipsum dolor sit
            amet
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">CPF: </span>123.456.789-01
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">E-mail: </span>email@email.com
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">Telefone: </span>(85)99999-9999
          </p>
        </section>

        <hr className="line-my-infos" />

        <section>
          <h4 className="subtitles-my-infos">Informações de entrega</h4>
          <p className="text-my-infos">
            <span className="label-my-infos">Logradouro: </span>Rua Washington
            Soares, 123
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">Bairro: </span>Cidade dos
            Funcionários
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">Cidade: </span>Fortaleza
          </p>
          <p className="text-my-infos">
            <span className="label-my-infos">Estado: </span>Ceará
          </p>
        </section>
      </div>
    </>
  );
};
