import './productcard.css';
import tenisImg from "../../assets/slide-image/product.png";

export const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div lassName="product-card-image">
      {props.discountPercentual && (
      <span className="discount-badge">
      {props.discountPercentual}% OFF
      </span>
        )}
        <div className="product-card-img-wrapper">
        <img className="" src={tenisImg} alt="Produto" />
        </div>
      </div>
      <div className="product-card-info">
        <span className="category">
          {props.category}
        </span>
        <p className="product-name">{props.productName}</p>
        <div className="price-info">
        <span className={`price ${props.isDiscount ? "discount" : ""}`}>
            {props.price}
          </span>
          {props.isDiscount && (
            <span className="discount-price">{props.discountPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};
