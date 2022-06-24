import useProductsContext from '../context/products-context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContent } from '../components';

const CartPage = () => {
  const { checkout } = useProductsContext();

  return (
    <Wrapper className="page">
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default CartPage;
