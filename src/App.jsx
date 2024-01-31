import Footer from "./components/Footer";
import NavbarC from "./components/NavbarC";
import Error404Page from "./pages/Error404Page";
import FavPage from "./pages/FavPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductoPage from "./pages/ProductoPage";

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
          <Route path='/producto' element={<ProductoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default App;
