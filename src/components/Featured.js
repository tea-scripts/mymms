/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import Product from './Product';

const Featured = () => {
  const {
    fetchSingleProduct,
    products,
    fetchAllProducts,
    featured_products: featured,
  } = useProductsContext();

  useEffect(() => {
    fetchAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper className="half-page">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="featured">
        {featured.map((product) => {
          return <Product key={product.title} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 2em 1em;
  background-color: var(--clr--secondary);

  .title {
    margin-bottom: 2em;
    text-align: center;

    h2 {
      margin-top: 0;
    }
  }

  .featured {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2.5rem;
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;

    img {
      height: 250px;
      border-radius: var(--border-radius);
    }
  }
  @media (min-width: 992px) {
    padding: 4em 5.5em;
  }
`;

export default Featured;
