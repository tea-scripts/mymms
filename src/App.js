import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components';
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
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
