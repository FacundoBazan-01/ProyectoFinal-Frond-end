import Footer from "./components/Footer";
import NavbarC from "./components/NavbarC";
import ErrorPage from "./pages/ErrorPage404";
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
					<Route path='/' element={<HomePage />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/producto' element={<ProductoPage />} />
					<Route path='*' element={<ErrorPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);

};
export default App;
