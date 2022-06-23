import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cart, Footer } from './components';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {
  Booking,
  Contact,
  Error,
  Landing,
  Products,
  About,
  SingleProduct,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Cart />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:handle" element={<SingleProduct />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
