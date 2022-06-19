import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const Product = ({ id, img, title, price }) => {
  return (
    <Wrapper>
      <div className="product-container">
        <div className="img-container">
          <img src={img} alt={title} />
          <Link to={`/shop/${id}`} className="link">
            <FaSearch />
          </Link>
        </div>
      </div>
      <footer>
        <h4>{title}</h4>
        <p>${(price / 100).toFixed(2)}</p>
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
      object-position: bottom;
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
