import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Sidebar from './components/Sidebar';
import {
  Booking,
  Contact,
  Error,
  Landing,
  Shop,
  About,
  SingleProduct,
  CartPage,
} from './pages';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:handle" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
