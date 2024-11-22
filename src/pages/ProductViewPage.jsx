import { SlideTenis } from "../components/SlideTenis/SlideTenis";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { Subtitles } from "../components/Subtitles/Subtitles";

export const ProductViewPage = () => {

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
          <Subtitles type="secondary">Produtos em alta</Subtitles>
            <a href="/produtos" className="view-all-link">
              Ver todos ➝
            </a>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product, index) => (
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
    </>
  );
};
