import "./criarConta.css";
import { FormInput } from "../inputs/FormInput";
import { Button } from "../Button/Button";
import React from "react";
import { api } from "../../../service/instance";



export const CriarConta = () => {
    

    const [data, setData] = React.useState({
      name: "",
      email: "",
      password: "",
      fone:"",
      cpf: "",
      rua: "",
      bairro: "",
      cidade: "",
      cep:"",
      complemento: ""
    })
    
    const [error, setError] = React.useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    api.post("/userwithaddress", data);
  }

  function handleChange({target}){
    const { id, value} = target;

    setData({
      ...data,
      [id]:value,
    });
  }
  console.log(data)


  return (
    <section className="section-content-form">
      <div className="title-form-criar">
        <h1>Criar conta</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="contentainer-form-pessoal">
          <div className="content-form-pessoal">
            <div className="title-line">
              <h3>Informações Pessoais</h3>

              <hr className="line" />
            </div>

            <FormInput 
            id="name"
            title="Nome completo *" 
            placeholder="Insira seu nome" 
            onChange={handleChange}/>


            <FormInput 
            id="cpf"
            title="CPF *" 
            placeholder="Insira seu CPF" 
            onChange={handleChange}
            />

            <FormInput
              id="email"
              title="E-mail *"
              placeholder="Insira seu email"
              type="email"
              onChange={handleChange}
            />

             <FormInput
              id="password"
              title="Senha *"
              placeholder="Insira sua senha"
              type="password"
              onChange={handleChange}
            />

            <FormInput 
            id="fone"
            title="Celular *" 
            placeholder="Insira seu celular" 
            onChange={handleChange}
            />



          </div>
        </div>
        <div className="contentainer-form-entrega">
          <div className="content-form-entrega">
            <div className="title-line">
              <h3>Informações de Entrega</h3>

              <hr className="line" />
            </div>

            <FormInput 
            id="rua"
            title="Endereço *"  
            placeholder="Insira seu endereço" 
            onChange={handleChange}
            />

            <FormInput 
            id="bairro"
            title="Bairro *"    
            placeholder="Insira seu bairro"
            onChange={handleChange} 
            />


            <FormInput 
            id="cidade"
            title="Cidade *"    
            placeholder="Insira sua cidade"
            onChange={handleChange} 
            />


            <FormInput 
            id="cep"
            title="CEP *"       
            placeholder="Insira seu CEP" 
            onChange={handleChange}
            />

            <FormInput 
            id="complemento"
            title="Complemento *" 
            placeholder="Insira complemento" 
            onChange={handleChange}
            />

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
