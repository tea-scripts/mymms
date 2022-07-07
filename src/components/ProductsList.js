import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import Product from './Product';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Loading } from '../components';
import { useNavigate } from 'react-router-dom';

const ProductsList = () => {
  const navigate = useNavigate();
  const {
    filtered_products: products,
    fetchAllProducts,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  useEffect(() => {
    fetchAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        {' '}
        Sorry, no products matched your search...
      </h5>
    );
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Box className="products-container">
        {products.map((product) => {
          return <Product key={product.title} {...product} />;
        })}
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  img {
    height: 175px;
    border-radius: 5px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default ProductsList;
