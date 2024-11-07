// import { Link } from 'react-router-dom';
import "./SectionCards.css";

import collection1 from "../../../assets/Section2/collection-1.png";
import collection2 from "../../../assets/Section2/collection-2.png";
import collection3 from "../../../assets/Section2/collection-3.png";

//  import PaginaProduto from '../../../assets/Section3/collection1.png';

export const SectionCards = () => {
  // 'Coleção Adidas' 'Novo Beats Bass
  return (
    <section className="collection-section">
      <div>
        <h2>Coleções em destaque</h2>
      </div>

      <div className="container-collection">
        <div className="collection1">
          <div className="collection-card">
            <img src={collection1} alt="collection1" />

            <p>30% OFF</p>
            <button>Comprar</button>
          </div>
        </div>

        <div className="collection2">
          <div className="collection-card">
            <img src={collection2} alt="collection1" />

            <p>30% OFF</p>
            <button>Comprar</button>
          </div>
        </div>

        <div className="collection3">
          <div className="collection-card">
            <img src={collection3} alt="collection1" />

            <p>30% OFF</p>
            <button>Comprar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCards;
