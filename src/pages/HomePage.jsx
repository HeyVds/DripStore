import { SectionOfertas } from "../components/Section/Section_ofertas/SectionOfertas"
import { Slide } from "../components/Slide/Slide"
import {SectionCards} from "../components/Section/SectionCards/SectionCards";
import {Section3} from "../components/Section/Section3/Section3"


export const HomePage = () => {
    return (
        <>
        <Slide></Slide>
         <SectionCards></SectionCards>
         <Section3></Section3>
        <SectionOfertas></SectionOfertas>
       
        
        </>
    )
}