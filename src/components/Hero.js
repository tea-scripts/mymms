import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero-img.svg';

const Hero = () => {
  return (
    <article className="hero">
      <div className="hero-text">
        <h1>
          <span>Take Control</span>
          <span> of your</span>
          <span> finances</span>
        </h1>
        <p>
          From making strategic decisions to developing your capabilities, I’m
          here to help. Using my expertise and deep understanding of the
          industry, you’ll receive real solutions and experience true results.{' '}
          <span> - Adetola Akinnubi</span>
        </p>

        <Link className="hero-btn btn" to="/booking">
          Book Now
        </Link>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
    </article>
  );
};

export default Hero;
