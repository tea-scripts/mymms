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

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();

  return (
    <aside className={`${isSidebarOpen ? 'sidebar show' : 'sidebar'}`}>
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
            <Link to="/contact" onClick={closeSidebar} className="sidebar-link">
              <HiChatAlt2 /> <span>Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/booking" onClick={closeSidebar} className="sidebar-link">
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
    </aside>
  );
};
export default Sidebar;
