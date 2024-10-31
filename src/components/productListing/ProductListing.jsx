import { ProductCard } from '../ProductCard/ProductCard';
import { cardsInfo } from '../../utils/cardsMock';
import { Subtitles } from '../Subtitles/Subtitles';

export const ProductListing = () => {
    return ( 
        <main className="p-7 bg-[#F9F8FE] sm:p-20">
      <div className="flex items-center justify-between">
        <Subtitles type="secondary">Produtos em alta</Subtitles>
        <a href="/produtos" className="text-[#C92071]">
          Ver todos ➝
        </a>
      </div>
      <div className="w-full grid gap-1 grid-cols-1 sm:grid-cols-1 lg:grid-cols-4">
        {cardsInfo.map((card, index) => {
          return (
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
          );
        })}
      </div>
    </main>
     );
};