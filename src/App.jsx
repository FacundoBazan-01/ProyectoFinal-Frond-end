import Footer from "./components/Footer";
import NavbarC from "./components/NavbarC";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import FavPage from "./pages/FavPage";
import HomePage from "./pages/HomePage";
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
          <Route path="*" element={<ErrorPage/>} />
          <Route path="/fav" element={<FavPage/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
