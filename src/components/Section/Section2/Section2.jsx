import './Section2.css';
 import collection1 from '../../../assets/Section2/collection-1.png';
 import collection2 from '../../../assets/Section2/collection-2.png';
 import collection3 from '../../../assets/Section2/collection-3.png';

export const Section2 = () => {
        
     
    // 'Coleção Adidas' 'Novo Beats Bass
    return (
        <section className="collection-section">
            <h2>Coleções em destaque</h2>
        
            <div className="collection1">
                <div className="collection-card">
                    <img src={collection1} alt="collection1" />
                    <h3>Novo drop Supreme</h3>
                    <p>30% OFF</p>
                    <button>Comprar</button>
                </div>
            </div>

            <div className="collection2">
                <div className="collection-card">
                    <img src={collection2} alt="collection1" />
                    <h3>Novo drop Supreme</h3>
                    <p>30% OFF</p>
                    <button>Comprar</button>
                </div>
            </div>

            <div className="collection3">
                <div className="collection-card">
                    <img src={collection3} alt="collection1" />
                    <h3>Novo drop Supreme</h3>
                    <p>30% OFF</p>
                    <button>Comprar</button>
                </div>
            </div>
        </section>
    );
};

export default Section2;
