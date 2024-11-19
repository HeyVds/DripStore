import "./criarConta.css";
import { FormInput } from "../inputs/FormInput";
import { Button } from "../Button/Button";

export const CriarConta = () => {
  return (
    <section className="section-content-form">
      <div className="title-form-criar">
        <h1>Criar conta</h1>
      </div>
      <form>
        <div className="contentainer-form-pessoal">
          <div className="content-form-pessoal">
            <div className="title-line">
              <h3>Informações Pessoais</h3>

              <hr className="line" />
            </div>

            <FormInput title="Nome completo *" placeholder="Insira seu nome" />
            <FormInput title="CPF *" placeholder="Insira seu CPF" />
            <FormInput
              title="E-mail *"
              placeholder="Insira seu email"
              type="email"
            />
            <FormInput title="Celular *" placeholder="Insira seu celular" />
          </div>
        </div>
        <div className="contentainer-form-entrega">
          <div className="content-form-entrega">
            <div className="title-line">
              <h3>Informações de Entrega</h3>

              <hr className="line" />
            </div>

            <FormInput title="Endereço *" placeholder="Insira seu endereço" />
            <FormInput title="Bairro *" placeholder="Insira seu bairro" />
            <FormInput title="Cidade *" placeholder="Insira sua cidade" />
            <FormInput title="CEP *" placeholder="Insira seu CEP" />
            <FormInput title="Complemento *" placeholder="Insira complemento" />
          </div>
        </div>

        <div className="termos">
          <input type="checkbox" />
          <p>
            Quero receber por email ofertas e novidades das lojas da Digital
            Store. A frequência de envios pode variar de acordo com a interação
            do cliente.
          </p>
        </div>
        <div className="button-criar">
          <Button
            label="Criar conta"
            size="x-large"
            style="primary"
            type="submit"
          />
        </div>
      </form>
    </section>
  );
};
