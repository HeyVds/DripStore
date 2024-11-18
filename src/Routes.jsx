import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { Error } from "./components/error/Error";
import { LoginPage } from "./pages/LoginPage";
import { ProductViewPage } from "./pages/ProductViewPage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { RegisterPage } from "./pages/RegisterPage";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DetalhesDoProduto" element={<ProductViewPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/produtos" element={<ProductListingPage />}/>
        <Route path="/produtos/tenis" element={<ProductViewPage />}/>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
