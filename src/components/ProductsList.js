import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import Product from './Product';
import { Box } from '@chakra-ui/react';

const ProductsList = () => {
  const { products } = useProductsContext();

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
