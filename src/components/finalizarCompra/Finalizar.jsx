import "./finalizar.css"
import { FormInput } from "../inputs/FormInput"
import { Button } from "../Button/Button"



export const Finalizar = () => {

    return (


    <section className="section-content-finalizar">
    <div className="column-finalizar">
        <div className="title-form-finalizar">
          <h1>Finalizar Compra</h1>
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
          <div className="informe-pagamento">
          <div className="title-line">
                <h3>Informações de Pagamento</h3>
                <hr className="line" />
              </div>
              <div>
                <h5 className="title-pag">forma de pagamento</h5>
                <div className="radio-pagamento">
                    <input type="radio" name="pag"  /> <p>Catão de crédito</p>
                    <input type="radio" name="pag"/> <p>Boleto Bancário</p>
                </div>
              </div>
              <FormInput title="Nome do cartão *" placeholder="Insira o nome do cartão" />
              <div className="cred-cartao">
              <FormInput title="Data o número do cartão *" placeholder="Insira o número do cartão" />
              <FormInput title="Data de validade do cartão *" placeholder="Insira a validade do cartão" />
              </div>
              <FormInput title="CVV *" placeholder="CVV *" />
          <div className="title-line">
                <h3>Finalizar Compra</h3>
                <hr className="line" />
              </div>
            <div className="preço-pag">
                <p>Total</p>
                <span>R$219,00</span>
            </div>
                <div className="pag">
                <span>ou 10x de R$ 21,00 sem juros</span>
                </div>
          <div className="button-finalizar">
            <Button
              label="Realizar Pagamento"
              size="x-large"
              style="warning"
              type="submit"
            />
          </div>
          </div>
        </form>
    </div>
    <div className="resumo">
        <div className="body-resumo">
            <div className="title-line-resumo">
                    <h3>RESUMO</h3>
                    <hr className="line" />
                  </div>
        </div>

        <div className="tenis-nike">
            <div className="mini-tenis">
                <img src="../../../public/SlideTenis-image/slide1.png" alt="" />
            </div>
            <div className="mini-tenis-span">

                <span>Tênis Nike Revolution 6 Next Nature Masculino</span>
                
            </div>
        </div>
        <div className="body-resumo">
            
                <div className="title-line-resumo">
                        <hr className="line" />
                      </div>
            
        </div>

        <div className="totais">
            <div className="totais-space">

                <span className="sub">Subtotal:</span>
                <span className="sub-preco">R$ 219,00</span>

            </div>

            <div className="totais-space">

            <span className="sub">Frete:</span>
            <span className="sub-preco">R$ 0,00</span>

            </div>
            <div className="totais-space">

            <span className="sub">Desconto:</span>
            <span className="sub-preco">R$ 30,00</span>

            </div>

            <div className="pagar">
            <div className="preço-pag">
                <p>Total</p>
                <span>R$219,00</span>
            </div>
                <div className="pag">
                <span>ou 10x de R$ 21,00 sem juros</span>
                </div>
          <div className="button-finalizar">
            <Button
              label="Realizar Pagamento"
              size="x-large"
              style="warning"
              type="submit"
            />
          </div>
            </div>
        </div>
       
    </div>      
  </section>
    )
}