import { ProductListing } from "../components/productListing/ProductListing"
import { SectionOfertas } from "../components/Section/Section_ofertas/SectionOfertas"

export const HomePage = () => {
    return (
        <>
        <Slide></Slide> 
        <ProductListing></ProductListing>
        <Slide></Slide>
        <SectionOfertas></SectionOfertas>

        </>
    )
}