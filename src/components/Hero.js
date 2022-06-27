import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero-img.svg';
import styled from 'styled-components';
import { AiFillShop } from 'react-icons/ai';

const Hero = () => {
  return (
    <Wrapper>
      <div>
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
        <div className="btn-container">
          <Link className="fancy" to="/booking">
            <span className="top-key"></span>
            <span className="text">Book Now</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </Link>

          <Link to="/shop" className="primary-button">
            <AiFillShop /> Shop Now
          </Link>
        </div>
      </div>
      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  padding: 2em 1.5em;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));
  align-items: center;
  text-align: center;

  h1 {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;

    span {
      display: block;
    }
  }

  p {
    font-family: var(--ff-headingFont);
    letter-spacing: 1.5px;
    line-height: 2;
    font-size: 1rem;

    span {
      display: inline-block;
    }
  }

  .hero-img {
    display: block;
    width: 100%;
    display: none;
  }

  .hero-img img {
    width: 100%;
    transform: rotateY(180deg);
  }

  .btn-container {
    display: flex;
    align-items: center;
    column-gap: 2em;
    justify-content: center;
    margin-top: 3em;
  }

  /* From uiverse.io */
  .fancy {
    background-color: transparent;
    border: 0.15em solid var(--clr-primary);
    border-radius: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    letter-spacing: 0.12em;
    outline: none;
    overflow: visible;
    padding: 1.2em 2em;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: var(--transition);
    user-select: none;
    font-size: 13px;
    display: block;
    width: 10.6rem !important;
    font-family: var(--ff-headingFont);
  }

  .fancy::before {
    content: ' ';
    width: 1.56rem;
    height: 0.12em;
    background: var(--clr-primary);
    top: 50%;
    left: 1.5em;
    position: absolute;
    transform: translateY(-50%);
    transform-origin: center;
    transition: background 0.3s linear, width 0.3s linear;
  }

  .fancy .text {
    font-size: 1.125em;
    line-height: 1.33333em;
    padding-left: 2em;
    display: block;
    text-align: left;
    transition: var(--transition);
    text-transform: uppercase;
    text-decoration: none;
    color: var(--clr-primary);
  }

  .fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #fffffe;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  .fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #fffffe;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #fffffe;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy:hover {
    color: white;
    background: var(--clr-tertiary);
    border-color: var(--clr-tertiary);
  }

  .fancy:hover::before {
    width: 0.9375rem;
    background: white;
  }

  .fancy:hover .text {
    color: white;
    padding-left: 1.5em;
  }

  .fancy:hover .top-key {
    left: -2px;
    width: 0px;
  }

  .fancy:hover .bottom-key-1,
  .fancy:hover .bottom-key-2 {
    right: 0;
    width: 0;
  }

  .primary-button {
    font-family: var(--ff-headingFont);
    color: var(--clr-primary);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    border: 1px solid transparent;
    padding: 0.8rem 1rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 531.28 200'%3E%3Cdefs%3E%3Cstyle%3E .shape %7B fill: %23EF4565 /* fill: %230E1822; */ %7D %3C/style%3E%3C/defs%3E%3Cg id='Layer_2' data-name='Layer 2'%3E%3Cg id='Layer_1-2' data-name='Layer 1'%3E%3Cpolygon class='shape' points='415.81 200 0 200 115.47 0 531.28 0 415.81 200' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
    background-size: 200%;
    background-position: 200%;
    background-repeat: no-repeat;
    transition: 0.3s ease-in-out;
    transition-property: background-position, border, color;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    column-gap: 0.4em;

    :hover {
      border: 1px solid var(--clr-tertiary);
      color: white;
      background-position: 40%;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    text-align: left;

    .hero-img {
      display: block;
    }

    .fancy {
      margin-left: 0;
      margin-right: 0;
    }

    .btn-container {
      justify-content: left;
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    max-width: var(--max-width);
    padding: 1em 1.5em;
    column-gap: 2em;

    .hero-img {
      display: block;
    }

    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.2rem;
      span {
        font-family: var(--ff-headingFont);
      }
    }
  }
`;

export default Hero;
