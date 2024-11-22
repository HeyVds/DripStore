import { ProductCard } from "../ProductCard/ProductCard";
import { cardsInfo } from "../../utils/cardsMock";
import "./Cart.css";
import Imagem from "../../assets/slide-image/White-Sneakers-PNG-Clipart 1.png";

export const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>MEU CARRINHO</h2>
      </div>
      <div className="cart-content">
        <div className="cart-items">
          <div className="cart-item">
            <img
              src={Imagem}
              alt="Tênis Nike Revolution 6 Next Nature Masculino"
              className="item-image"
            />
            <div className="item-details">
              <p className="item-title">
                Tênis Nike Revolution 6 Next Nature Masculino
              </p>
              <p className="item-color">Cor: Vermelho / Branco</p>
              <p className="item-size">Tamanho: 42</p>
            </div>
            <div className="item-quantity">
              <button className="quantity-btn">-</button>
              <span>1</span>
              <button className="quantity-btn">+</button>
            </div>
            <div className="item-price">
              <p className="price-unitario">R$ 300,00</p>
              <p className="price-total">R$ 219,00</p>
            </div>
          </div>
          <div className="discount-shipping">
            <div className="discount">
              <input
                type="text"
                placeholder="Insira seu código"
                className="discount-input"
              />
              <button className="discount-btn">OK</button>
            </div>
            <div className="shipping">
              <input
                type="text"
                placeholder="Insira seu CEP"
                className="shipping-input"
              />
              <button className="shipping-btn">OK</button>
            </div>
          </div>
        </div>
        <div className="cart-summary">
          <h2>RESUMO</h2>
          <div className="summary-details">
            <p>
              Subtotal: <span>R$ 219,00</span>
            </p>
            <p>
              Frete: <span>R$ 0,00</span>
            </p>
            <p>
              Desconto: <span>R$ 30,00</span>
            </p>
          </div>
          <div className="total">
            <p>Total:</p>
            <p className="total-price">R$ 219,00</p>
          </div>
          <button className="checkout-btn">Continuar</button>
        </div>
      </div>
      <section className="product-listing">
        <h2>Produtos relacionados</h2>
        <div className="product-grid">
          {cardsInfo.slice(0, 4).map((card, index) => (
            <ProductCard
              key={card.id}
              discountPercentual={index < 2 ? card.discountPercentual : null}
              category={card.category}
              productName={card.productName}
              discountPrice={card.discountPrice}
              price={card.price}
              isDiscount={card.isDiscount}
              url={card.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
