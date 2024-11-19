import { SlideTenis } from "../components/SlideTenis/SlideTenis";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { cardsInfo } from "../utils/cardsMock";

export const ProductViewPage = () => {
  return (
    <>
      <section className="viwePage">
        <div className="mini-nav">
          <p className="home-mini">Home</p>
          <p>
            / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature
            Masculino
          </p>
        </div>
        <SlideTenis />

        <div className="product-listing">
          <div className="header">
            <div className="text-prod">Produtos Relacionados</div>
            <a href="/produtos" className="view-all-link">
              Ver todos ➝
            </a>
          </div>
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
        </div>
      </section>
    </>
  );
};
