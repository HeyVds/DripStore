import { ProductCard } from "../ProductCard/ProductCard";
import { cardsInfo } from "../../utils/cardsMock";
import "./Cart.css";

export const Cart = () => {
  return (
    <section className="product-listing">
    <h3>Produtos relacionados</h3>
      <div className="product-grid">
       
        {cardsInfo.slice(0,4).map((card, index) => (
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
  );
};
