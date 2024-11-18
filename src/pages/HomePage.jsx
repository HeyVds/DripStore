import { SectionOfertas } from "../components/Section/Section_ofertas/SectionOfertas";
import { Slide } from "../components/Slide/Slide";
import { SectionCards } from "../components/Section/SectionCards/SectionCards";
import { Section3 } from "../components/Section/Section3/Section3";
import { ProductListing } from "../components/productListing/ProductListing";

export const HomePage = () => {
  return (
    <>
      <div className="container-home">
        <Slide />
        <SectionCards />
        <Section3 />
        <ProductListing />
        <SectionOfertas />
      </div>
    </>
  );
};
