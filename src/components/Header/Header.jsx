import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./header.css"

export const Header = () => {
  return (
    <header className="flex flex-col w-full justify-center items-center py-5">
      <div className="flex flex-row justify-between w-full items-center px-40 py-5">
        <Link to="/">
          <img src="../../../public/header-icons/logoHeader.svg" alt="logo" />
        </Link>
        <div className="relative flex items-center w-full max-w-md">
          <input
            placeholder="Pesquise aqui..."
            type="text"
            className="w-full px-4 py-2 pr-10 text-sm text-gray-800 bg-slate-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button className="absolute right-2">
            <FaSearch className="w-5 h-5 text-gray-500 hover:text-blue-500" />
          </button>
        </div>
        <div
          id="log"
          className="flex flex-row justify-between gap-5 items-center"
        >
          <a href="#" className="underline text-[#474747] ">
            <Link to="/register">Cadastrar</Link>
          </a>

          <Link to="/login">
            <Button label="Entrar" size="small" style="primary" />
          </Link>
          <a href="#" className=""></a>
        </div>
        <div id="cartContainer" className="flex items-center">
          <a href="#">
            <img src="../../../public/header-icons/mini-cart.svg" alt="cart" />
          </a>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full px-40">
        <div className="flex flex-row gap-5">
          <nav className="navegator">
            <Link to="/" className="li">Home</Link>
            <Link to="/produtos" className="li">Produtos</Link>
            <Link to="/"className="li">Categorias</Link>
            <Link to="/" className="li">Meus Pedidos</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
