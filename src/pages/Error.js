import { Link } from 'react-router-dom';
import NotFound from '../assets/images/page-not-found.svg';

const Error = () => {
  return (
    <div className="error page">
      <div className="error-content">
        <img src={NotFound} alt="" />
        <p>oops! the page you requested could not be found</p>
      </div>
      <Link to="/" className="btn home-btn">
        Back Home
      </Link>
    </div>
  );
};
export default Error;
