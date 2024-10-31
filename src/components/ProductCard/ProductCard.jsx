import tenisImg from "../../assets/slide-image/product.png";

export const ProductCard = (props) => {
  return (
    <div className={`flex flex-col items-center mb-5 cursor-pointer`}
    >
      <div
        className={`
            w-[350px]
            h-[439px]
            bg-white 
            rounded 
            shadow-md   
            flex
            justify-center 
            items-center
            relative
        `}
      >
        {props.discountPercentual && (
          <span
            className="
                absolute 
                top-2
                left-2
                px-3 
                py-2 
                max-w-44
                rounded-full 
                bg-[#E7FF86]
                text-xs
                font-bold
                text-[#474747]
            "
          >
            {props.discountPercentual}% OFF
          </span>
        )}
        <div className="flex items-center justify-center relative -top-3 -left-3">
        <img className="" src={tenisImg} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-1 pt-3">
        <span className="text-[#8F8F8F] font-bold text-[12px] w-9 h-6">
          {props.category}
        </span>
        <p className="text-[#474747] text-2xl">{props.productName}</p>
        <div className="flex gap-2 items-center">
          <span
            className={`
            text-2xl font-bold
            ${props.isDiscount && "text-[#8F8F8F] line-through"}
        `}
          >
            {props.price}
          </span>
          {props.isDiscount ? (
            <span className="text-[#1F1F1F] text-2xl font-bold">
              {props.discountPrice}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
