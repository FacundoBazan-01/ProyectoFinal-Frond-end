import FooterC from "./components/FooterC";
import NavbarC from "./components/NavbarC";
import Error404Page from "./pages/Error404Page";
import FavPage from "./pages/FavPage";
import HomePage from "./pages/HomePage";
import ProductoPage from "./pages/ProductoPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <NavbarC />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Error404Page/>} />
          <Route path="/fav" element={<FavPage/>} />
          <Route path="/producto/:id" element={<ProductoPage />} />
        </Routes>
      </BrowserRouter>
      <FooterC/>
    </>
  );
};
export default App;
