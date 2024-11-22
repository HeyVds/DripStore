import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { Error } from "./components/error/Error";
import { LoginPage } from "./pages/LoginPage";
import { ProductViewPage } from "./pages/ProductViewPage";
import { Footer } from "./components/Footer/Footer";
import { ProductListingPage } from "./pages/ProductListingPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CriarConta } from "./components/CriarContaForm/CriarConta";
import { UserPage } from "./pages/UserPage";
import { MinhasInformacoes } from "./components/User/MinhasInformacoes/MinhasInformacoes";
import { MeusPedidos } from "./components/User/MeusPedidos/MeusPedidos";
import { Finalizar } from "./components/finalizarCompra/Finalizar";
import { CartPage} from "./pages/CartPage";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/produtos/tenis" element={<ProductViewPage />} />
        <Route path="/produtos/finalizar" element={<Finalizar />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/criar" element={<CriarConta />} />
        <Route path="/user" element={<UserPage />}>
          <Route path="infos" element={<MinhasInformacoes />} />
          <Route path="meuspedidos" element={<MeusPedidos />} />
          {/* <Route path="metodos-de-pagamentos" element={<MetodosDePagamento />} /> */}
        </Route>
        <Route path="/Cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
