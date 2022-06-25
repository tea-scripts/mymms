import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Product = ({ title, variants, images, handle }) => {
  return (
    <Wrapper>
      <div className="product-container">
        <div className="img-container">
          <img
            src={`${images[0].src} || https://static.wixstatic.com/media/eb650b_07ba4f2ec21a4b389809635ca76b4c68~mv2.jpg/v1/fill/w_550,h_550,al_c,q_85,usm_0.66_1.00_0.01/eb650b_07ba4f2ec21a4b389809635ca76b4c68~mv2.webp`}
            alt={title}
          />
          <Link to={`/shop/${handle}`} className="link">
            <FaSearch />
          </Link>
        </div>
      </div>
      <footer>
        <h4>{title}</h4>
        <p>${variants[0].price}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .product-container {
    position: relative;
    background: var(--clr--secondary);
    border-radius: var(--border-radius);

    img {
      object-fit: cover;
      width: 100%;
      display: block;
      transition: var(--transition);
    }
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    width: 2.5rem;
    height: 2.5rem;
    opacity: 0;
    background: var(--clr-primary);
    border-radius: 50%;
    cursor: pointer;
    svg {
      font-size: 1.2rem;
      color: var(--clr-white);
    }
  }

  .product-container:hover img {
    opacity: 0.5;
  }
  .product-container:hover .link {
    opacity: 1;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 2rem;
    margin-top: 1em;

    h4 {
      text-transform: capitalize;
      font-size: 1rem;
      margin: 0;
    }

    p {
      margin: 0;
    }
  }
`;

export default Product;
