import Footer from "./components/Footer";
import NavbarC from "./components/NavbarC";
import Error404Page from "./pages/ErrorPAge";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductoPage from "./pages/ProductoPage";

const App = () => {
<<<<<<< HEAD
  return (
    <>
      <NavbarC />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Error404Page/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
=======
	return (
		<>
			<NavbarC />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/producto' element={<ProductoPage />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);

>>>>>>> bc2804968bf95a122710d058ead5eee85594580f
};
export default App;
