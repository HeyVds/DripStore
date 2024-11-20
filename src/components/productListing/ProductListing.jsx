import { ProductCard } from "../ProductCard/ProductCard";
import { cardsInfo } from "../../utils/cardsMock";
import { Subtitles } from "../Subtitles/Subtitles";
import "./productlisting.css";

export const ProductListing = () => {
  return (
    <section className="product-listing">
      <div className="header">
        <Subtitles type="secondary">Produtos em alta</Subtitles>
        <a href="/produtos" className="view-all-link">
          Ver todos ➝
        </a>
      </div>
      <div className="product-grid">
        {cardsInfo.map((card, index) => (
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
