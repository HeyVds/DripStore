import { ProductCard } from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { Subtitles } from "../Subtitles/Subtitles";
import "./productlisting.css";

export const ProductListing = () => {
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
    <section className="product-listing">
      <div className="header">
        <Subtitles type="secondary">Produtos em alta</Subtitles>
        <a href="/produtos" className="view-all-link">
          Ver todos ➝
        </a>
      </div>
      <div className="product-grid">
<<<<<<< HEAD
      {products.map((product, index) => (
=======
        {cardsInfo.slice(0, 8).map((card, index) => (
>>>>>>> 5759cdc6fbacaaacb2826be712692d90fbf25c3c
          <ProductCard
            discountPercentual={index < 2 ? product.discountPercentual : null}
            category={product.category}
            productName={product.productName}
            discountPrice={`$${product.discountPrice}`}
            price={`$${product.price}`}
            isDiscount={product.isDiscount}
          />
        ))}
      </div>
    </section>
  );
};
