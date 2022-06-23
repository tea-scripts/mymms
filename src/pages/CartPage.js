import useProductsContext from '../context/products-context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContent } from '../components';

const CartPage = () => {
  const { removeLineItem, checkout } = useProductsContext();

  if (checkout.lineItems.length === 0) {
    return (
      <div className="page">
        <h4>Your cart is empty</h4>
        <Link to="/shop" className="btn">
          Fill It
        </Link>
      </div>
    );
  }

  return (
    <Wrapper className="page">
      <CartContent />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default CartPage;
