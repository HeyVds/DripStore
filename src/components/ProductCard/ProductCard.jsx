import tenisImg from '../../assets/slide-image/product.png';

export const ProductCard = (props) => {
  return (
    <div className={`flex flex-col items-center mb-10 cursor-pointer`}>
      <div
        className={`
            w-72   
            h-80
            bg-white 
            rounded-lg 
            shadow-md   
            flex
            justify-center 
            items-center
            relative
        `}
      >
        <span
          className="
                absolute 
                top-4
                left-4
                px-3 
                py-1 
                rounded-full 
                bg-[#E7FF86]
                text-xs
                font-bold
                text-[#474747]
            "
        >
          {props.discountPercentual}% OFF
        </span>
        <img className="w-60" src={tenisImg} alt="" />
      </div>
      <div className="lex flex-col gap-1 pt-3">
        <span className="text-lightGray font-bold text-[12px] w-9 h-6">
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
