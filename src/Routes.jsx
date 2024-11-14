import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { Error } from "./components/error/Error";
import { LoginPage } from "./pages/LoginPage";
import { ProductViewPage } from "./pages/ProductViewPage";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DetalhesDoProduto" element={<ProductViewPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
