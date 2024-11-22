import { FilterAside } from "../components/aside/FilterAside";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { cardsInfo } from "../utils/cardsMock";

export const ProductListingPage = () => {
  return (
    <section className="Section-ListingPage">
      <div className="Select">
        <div className="Resultado">
          <p className="p-resultado">Produtos para &quot;Tênis&quot;</p>
          <p className="p2-resultado"> - 389 produtos</p>
        </div>

        <div className="Ordenar">
          <select>
            <option>
              <p className="p-resultado">Ordernar por</p>: mais relevantes
            </option>
          </select>
        </div>
      </div>

      <div className="aside-product">
        <FilterAside />

        <div className="product-grid-Listing">
          {cardsInfo.slice(0, 15).map((card, index) => (
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
  );
};
