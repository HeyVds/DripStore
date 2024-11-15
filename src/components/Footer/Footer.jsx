import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <section className="sections-footer">
            <Link to="/">
              <img src="src/assets/logo-footer.svg" alt="logo" />
            </Link>
            <p className="text-footer">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus incidunt iste natus consectetur sequi assumenda eius,
              commodi tenetur unde dignissimos illum? Cupiditate rerum modi
              molestias. Molestiae, delectus iure. Distinctio, doloribus.
            </p>
            <div className="logos-footer">
              <a href="#">
                <img src="src/assets/facebook.svg" alt="icone-facebook" />
              </a>
              <a href="#">
                <img src="src/assets/instagram.svg" alt="icone-instagram" />
              </a>
              <a href="#">
                <img src="src/assets/twitter.svg" alt="icone-twitter" />
              </a>
            </div>
          </section>

          <section className="sections-footer">
            <h4 className="titles-footer">Informações</h4>
            <Link className="text-footer" to="/">
              Sobre a Drip Store
            </Link>
            <Link className="text-footer" to="/">
              Segurança
            </Link>
            <Link className="text-footer" to="/">
              Wishlist
            </Link>
            <Link className="text-footer" to="/">
              Blog
            </Link>
            <Link className="text-footer" to="/">
              Trabalhe Conosco
            </Link>
            <Link className="text-footer" to="/">
              Meus Pedidos
            </Link>
          </section>

          <section className="sections-footer">
            <h4 className="titles-footer">Categorias</h4>
            <Link className="text-footer" to="/">
              Camisetas
            </Link>
            <Link className="text-footer" to="/">
              Calças
            </Link>
            <Link className="text-footer" to="/">
              Bonés
            </Link>
            <Link className="text-footer" to="/">
              Headphones
            </Link>
            <Link className="text-footer" to="/">
              Tênis
            </Link>
          </section>

          <section className="sections-footer">
            <h4 className="titles-footer">Contato</h4>
            <p className="text-footer">
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p className="text-footer">(85) 3051-3411</p>
          </section>
        </div>

        <div className="linha-footer">
          <hr className="linha-footer-style" />
        </div>

        <div className="copy">
          <p className="text-footer">@ 2024 Digital College</p>
        </div>
      </footer>
    </>
  );
};
