import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero-img.svg';
import styled from 'styled-components';

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

        <Link className="hero-btn btn fancy" to="/booking">
          <span class="top-key"></span>
          <span class="text">Book Now</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </Link>
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
  place-items: center;

  .hero-text h1 {
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;

    span {
      display: block;
    }

    p {
      font-family: var(--ff-headingFont);
      letter-spacing: 1px;
      line-height: 2;
      font-size: 1rem;
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

  /* From uiverse.io */
  /* .fancy {
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    float: right;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 1.25em 2em;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    user-select: none;
    font-size: 13px;
  }

  .fancy::before {
    content: ' ';
    width: 1.5625rem;
    height: 2px;
    background: black;
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
    transition: all 0.3s ease-in-out;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }

  .fancy .top-key {
    height: 2px;
    width: 1.5625rem;
    top: -2px;
    left: 0.625rem;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, left 0.3s ease-out;
  }

  .fancy .bottom-key-1 {
    height: 2px;
    width: 1.5625rem;
    right: 1.875rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy .bottom-key-2 {
    height: 2px;
    width: 0.625rem;
    right: 0.625rem;
    bottom: -2px;
    position: absolute;
    background: #e8e8e8;
    transition: width 0.5s ease-out, right 0.3s ease-out;
  }

  .fancy:hover {
    color: white;
    background: black;
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
  } */

  .hero-btn {
    font-size: 1.2rem;
    padding: 0.4em 1.3em;
    border-radius: 0.1rem;
    outline: 3px solid var(--clr-btn);
    outline-offset: 2px;
    border: transparent;
    margin-top: 2em;

    :hover {
      background: var(--clr-white);
      color: var(--clr-primary);
      outline-color: var(--clr-primary);
      border: transparent;
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
