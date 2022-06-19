import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NotFound from '../assets/images/page-not-found.svg';

const Error = () => {
  return (
    <Wrapper className="page">
      <div className="error-content">
        <img src={NotFound} alt="" />
        <p>oops! the page you requested could not be found</p>
      </div>
      <Link to="/" className="btn home-btn">
        Back Home
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-content: center;

  p {
    text-transform: capitalize;
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 0;
  }

  .error-content {
    max-width: 700px;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
  }

  .home-btn {
    place-self: center;
    border-radius: 0.25em;
  }

  img {
    width: 100%;
  }
`;
export default Error;
