import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header/Header";
import { Error } from "./components/error/Error";
import { ProductListingPage } from "./pages/ProductListingPage";
import { ProductViewPage } from "./pages/ProductViewPage";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Error />} />
        <Route path="/productlisting" element={<ProductListingPage />} />
        <Route path="/productview" element={<ProductViewPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
