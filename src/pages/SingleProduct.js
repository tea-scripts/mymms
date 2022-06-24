import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import useSidebarContext from '../context/sidebar-context';
import AddItemToCart from '../components/AddItemToCart';

const SingleProduct = () => {
  const { handle } = useParams();
  const { fetchProductWithHandle, addItemToCheckout, product } =
    useProductsContext();

  useEffect(() => {
    fetchProductWithHandle(handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handle]);

  if (!product.title) {
    return (
      <div className="page">
        <div className="loader" style={{ margin: '0 auto' }}></div>
      </div>
    );
  }

  const { title, description } = product;

  return (
    <Wrapper className="page">
      <div className="section-center">
        <img src={product.images[0].src} alt="" />
        <InfoWrapper>
          <h2>{title}</h2>
          <h5>${product.variants[0].price}</h5>
          <p className="desc">{description}</p>
          <p>
            <span>available:</span>
            {product.availableForSale ? ' in stock' : ' out of stock'}
          </p>
          <p>
            <span>vendor:</span> {product.vendor}
          </p>
          <hr />
          <AddItemToCart product={product} />
        </InfoWrapper>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .section-center {
    display: grid;
  }

  img {
    height: 400px;
    width: 400px;
    /* align-self: center;
    display: block; */
  }

  @media (min-width: 768px) {
    .section-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
`;

const InfoWrapper = styled.article`
  p.desc {
    text-transform: none;
    display: block;
    font-size: 0.95rem;
    word-spacing: 2px;
    letter-spacing: 0.5px;
  }
  h5 {
    margin: 0;
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  h2 {
    margin: 2rem 0 1rem;
  }
  p {
    text-transform: capitalize;
    display: grid;
    grid-template-columns: 120px auto;
    font-size: 0.9rem;

    span {
      font-weight: 600;
    }
  }

  .cart-btn {
    background: var(--clr-tertiary);
    padding: 0.5em 1em;
    display: block;
    width: 10rem;
    color: var(--clr-white);
    text-align: center;
    border-radius: 5px;
    transition: var(--transition);

    :hover {
      box-shadow: -1px 10px 10px -5px rgba(0, 0, 0, 0.62);
      -webkit-box-shadow: -1px 10px 10px -5px rgba(0, 0, 0, 0.62);
      -moz-box-shadow: -1px 10px 10px -5px rgba(0, 0, 0, 0.62);
    }
  }

  @media (min-width: 768px) {
    h2 {
      margin-top: 0;
    }
  }
`;

export default SingleProduct;
