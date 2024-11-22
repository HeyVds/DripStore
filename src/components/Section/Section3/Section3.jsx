import './Section3.css';
import Camiseta from '../../../assets/Section3/Camisetas.jsx';
// import Bones from '../../../assets/Section3/Calcas.jsx';
import Headphone from '../../../assets/Section3/HeadPhones.jsx';
import Tenis from '../../../assets/Section3/Tenis.jsx';
import Calcas from '../../../assets/Section3/Calcas.jsx';

export const Section3 = () => {
  return (
    <div className="section3">
      <h2>Coleções em destaque</h2>
      <div className="collections-list">
        <div className="collection-item">
          <div className="collection-icon">
            <Camiseta/>
          </div>
          <p>Camisetas</p>
        </div>
        <div className="collection-item">
          <div className="collection-icon">
          <Calcas/>
          </div>
          <p>Calças</p>
        </div>
        <div className="collection-item">
          <div className="collection-icon">
          <Calcas/>
          </div>
          <p>Bermudas</p>
        </div>
        <div className="collection-item">
          <div className="collection-icon">
            <Headphone />
          </div>
          <p>Headphones</p>
        </div>
        <div className="collection-item">
          <div className="collection-icon">
            <Tenis/>
          </div>
          <p>Tênis</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
