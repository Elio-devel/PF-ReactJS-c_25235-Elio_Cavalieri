import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { AuthProvider } from './AuthContext';
//import PrivateRoute from './PrivateRoute';
//import Dashboard from './Dashboard';
//mport Navbar from './NavBar';
import Header from './components/Header';
import Home from './components/Home';
import Ofertas from './components/Ofertas';
import Infaltables from './components/Infaltables';
//import Login from './components/Login';
//import Login from './Login';
import Login from './components/Login';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito';
import CrudProductos from './components/CrudProductos';


function App() {

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/infaltables" element={<Infaltables />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/crud" element={<CrudProductos />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  )
}

/*
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};
*/

export default App;
