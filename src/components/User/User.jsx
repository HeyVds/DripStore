import { Link, Outlet } from "react-router-dom";
import "./user.css";

export const User = () => {
  return (
    <>
      <div className="user-page">
        <section className="container-nav-user">
          <nav className="nav-user">
            <h3>Meu perfil</h3>
            <hr className="line-nav-user" />
            <ul>
              <li>
                <Link to="/user/infos">Minhas Informações</Link>
              </li>
              <hr className="line-nav-user" />
              <li>
                <Link to="/user/meuspedidos">Meus Pedidos</Link>
              </li>
              <hr className="line-nav-user" />
              <li>
                <Link to="/user">Métodos de pagamentos</Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="outlet-users">
          <Outlet />
        </section>
      </div>
    </>
  );
};
