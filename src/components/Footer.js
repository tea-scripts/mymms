import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer>
      <div className="links-container">
        <ul className="footer-links">
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

        {/* social links */}
        <ul className="social-links">
          <a
            href="https://www.instagram.com/itsjusttola/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/thefinancegirltola/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://twitter.com/itsjusttola"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/c/AdetolaAkinnubi"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
        </ul>
      </div>
      <div className="attribution">
        <p>
          &copy; {currentDate} make your money make sense LLC. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
