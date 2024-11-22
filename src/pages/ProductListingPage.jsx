import { FilterAside } from "../components/aside/FilterAside";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";

export const ProductListingPage = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products/");
        const data = await response.json();
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

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
          {cardsInfo.slice(0, 15).map((product, index) => (
            <ProductCard
              key={product.id}
              discountPercentual={index < 2 ? product.discountPercentual : null}
              category={product.category}
              productName={product.productName}
              discountPrice={product.discountPrice}
              price={product.price}
              isDiscount={product.isDiscount}
              url={product.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
