import { Link } from 'react-router-dom';
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import styled from 'styled-components';
const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 11rem;
  background: var(--clr-primary);
  color: var(--clr-white);
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5em 1em;

  p,
  a {
    color: var(--clr-white);
    font-size: 1rem;
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .footer-links {
    display: flex;
    column-gap: 1rem;
  }

  .links-container {
    display: grid;
    justify-content: center;
    row-gap: 1rem;
    margin-bottom: 1rem;
  }

  .social-links {
    display: flex;
    column-gap: 1rem;
    font-size: 1.7rem;
    justify-self: center;

    a {
      color: var(--clr-white);
      font-size: 1.3rem;
      transition: var(--transition);
    }

    a:hover {
      transform: scale(1.2);
      color: var(--clr-tertiary);
    }
  }

  @media (min-width: 992px) {
    padding: 2em 1em;

    p,
    a {
      font-size: 1.2rem;
    }
  }
`;

export default Footer;
