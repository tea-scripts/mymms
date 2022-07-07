import useProductsContext from '../context/products-context';
import styled from 'styled-components';
import { CartContent } from '../components';

const CartPage = () => {
  const { checkout } = useProductsContext();

  return (
    <Wrapper className="page">
      {Object.keys(checkout).length >= 1 && <CartContent />}
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default CartPage;
