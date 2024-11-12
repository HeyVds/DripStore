import './Section3.css';
import camisetaImg from '../../../assets/Section3/Camisetas.png';
import calcaImg    from '../../../assets/Section3/Calças.png';
import Bones       from '../../../assets/Section3/Calças.png';
import headphoneImg from '../../../assets/Section3/Headphones.png';
import tenisImg    from '../../../assets/Section3/Tenis.png';

export const Section3 = () => {
  return (
    <div className="section3">
      <h2>Coleções em destaque</h2>
      <div className="collections-list">
        <div className="collection-item">
          <img src={camisetaImg} alt="Camisetas" className="collection-icon" />
          <p>Camisetas</p>
        </div>
        <div className="collection-item">
          <img src={calcaImg} alt="Calças" className="collection-icon" />
          <p>Calças</p>
        </div>
        <div className="collection-item">
          <img src={Bones} alt="Bermudas" className="collection-icon" />
          <p>Bermudas</p>
        </div>
        <div className="collection-item">
          <img src={headphoneImg} alt="Headphones" className="collection-icon" />
          <p>Headphones</p>
        </div>
        <div className="collection-item">
          <img src={tenisImg} alt="Tênis" className="collection-icon" />
          <p>Tênis</p>
        </div>
      </div>
    </div>
  );
};

export default Section3;
