import {
  HiOutlineX,
  HiHome,
  HiShoppingBag,
  HiChatAlt2,
  HiInformationCircle,
  HiCalendar,
} from 'react-icons/hi';
import useSidebarContext from '../context/sidebar-context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();

  return (
    <Wrapper>
      <div className={`${isSidebarOpen ? 'sidebar show' : 'sidebar'}`}>
        <div className="overlay" onClick={closeSidebar}></div>
        <div className="sidebar-content">
          <button type="button" className="close-btn" onClick={closeSidebar}>
            <HiOutlineX />
          </button>
          <ul className="sidebar-links">
            <li>
              <Link to="/" onClick={closeSidebar} className="sidebar-link">
                <HiHome /> <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeSidebar} className="sidebar-link">
                <HiInformationCircle /> <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeSidebar}
                className="sidebar-link"
              >
                <HiChatAlt2 /> <span>Contact</span>
              </Link>
            </li>
            <li>
              <Link
                to="/booking"
                onClick={closeSidebar}
                className="sidebar-link"
              >
                <HiCalendar /> <span>Book Now</span>
              </Link>
            </li>
            <li>
              <Link to="/shop" onClick={closeSidebar} className="sidebar-link">
                <HiShoppingBag /> <span>Shop</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .sidebar {
    width: 100%;
    top: 0;
    right: 0;
    height: 100%;
    position: fixed;
    transform: translateX(200%);
    transition: var(--transition);
  }

  .show {
    transform: translateX(0);
  }

  .sidebar-content {
    position: absolute;
    top: 0;
    right: 0;
    width: 350px;
    height: 100%;
    background: var(--clr-white);
    padding: 4em 1em;
  }

  .overlay {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7));
    width: 100%;
    height: 100%;
  }

  .close-btn {
    font-size: 2.3rem;
    border: transparent;
    color: var(--clr-tertiary);
    background: transparent;
    transition: var(--transition);
    cursor: pointer;
    position: absolute;
    right: 0.47em;
    top: 0.67em;
  }

  .nav-toggle:hover,
  .close-btn:hover {
    transform: scale(1.2);
  }

  .sidebar-links {
    display: grid;
    row-gap: 1rem;
    align-content: center;
    margin-top: 2.5em;

    li a {
      font-size: 1.3rem;
      color: var(--clr-primary);
    }
  }

  .sidebar-link {
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5em;
    }
  }
`;

export default Sidebar;
