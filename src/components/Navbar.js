import { HiMenuAlt2, HiUserAdd, HiShoppingCart } from 'react-icons/hi';
import logo from '../assets/images/logo.svg';
import useSidebarContext from '../context/sidebar-context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const { openSidebar } = useSidebarContext();

  return (
    <Navigation>
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
    </Navigation>
  );
};

const Navigation = styled.nav`
  height: var(--nav-height);
  width: 100%;
  padding: 1em 1.5em;
  display: grid;
  align-items: center;
  max-width: var(--max-width);
  margin: 0 auto;

  .nav-header {
    display: grid;
    align-items: center;
  }

  .nav-center {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-between;
  }

  .nav-logo {
    width: 8rem;
    color: var(--main-clr);
  }

  .nav-toggle {
    font-size: 2rem;
    border: transparent;
    background: transparent;
    transition: var(--transition);
    cursor: pointer;
    color: var(--clr-primary);
  }

  .nav-links,
  .user-links {
    display: none;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    justify-content: space-between;

    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
      column-gap: 1rem;
      justify-self: center;
    }

    .nav-links a,
    .user-links a {
      color: var(--clr-primary);
      font-weight: 500;
      font-size: 1.15rem;
      transition: var(--transition);
      font-family: var(--ff-headingFont);

      :hover {
        color: var(--clr-tertiary);
      }
    }

    .user-links {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 1em;

      span {
        display: inline-block;
      }

      a {
        display: flex;
        align-items: center;
        column-gap: 0.3em;
      }
    }
  }
`;
export default Navbar;
