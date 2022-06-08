import { HiMenuAlt2, HiUserAdd, HiShoppingCart } from 'react-icons/hi';
import logo from '../assets/images/logo.svg';
import useSidebarContext from '../context/sidebar-context';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <nav className="navbar">
      {/* nav header */}
      <div className="nav-header">
        {/* nav center */}
        <div className="nav-center">
          <img src={logo} alt="logo" className="nav-logo" />
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <HiMenuAlt2 />
          </button>
        </div>
      </div>

      {/* nav links */}
      <ul className="nav-links">
        <li>
          <Link to="/" className="sidebar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="sidebar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="sidebar-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/booking" className="sidebar-link">
            Book Now
          </Link>
        </li>
        <li>
          <Link to="/shop" className="sidebar-link">
            Shop
          </Link>
        </li>
      </ul>

      <div className="user-links">
        <Link to="/login">
          <span>Login</span> <HiUserAdd />
        </Link>

        <Link to="/cart">
          <span>Cart</span> <HiShoppingCart />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
