import { Button } from '../../Button/Button';
import './section_ofertas.css'



export const SectionOfertas = () => {
    return ( 
        <>
        <div className='section-ofertas'>
            <div className='img-ofertas'>
                <div className='circle'>
                
                    <img src="src/assets/oferta-image/Laye 1.png" alt="Laye" />
                </div>
            </div>


            <div className='texto-ofertas'>
                <p className='p-ofertas-acima'>Oferta especial</p>

                <h2 className='h2-ofertas'>Air Jordan edição de 
                colecionador</h2>

                <p className='p-ofertas-abaixo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

                <Button label="Ver Ofertas" size="medium" style="primary" />
                 
            </div>

        </div>
        
        
        </>
     );
}