import { HiMenuAlt2 } from 'react-icons/hi';
import logo from '../assets/images/logo.svg';
import useSidebarContext from '../context/sidebar-context';

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
    </nav>
  );
};
export default Navbar;
