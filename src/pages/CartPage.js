import useProductsContext from '../context/products-context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContent } from '../components';

const CartPage = () => {
  const { checkout } = useProductsContext();

  if (Object.keys(checkout).length < 1) {
    return (
      <div className="page">
        <div className="content">
          <h2>Your Cart is empty!</h2>
          <Link to="/shop" className="btn">
            Fill It
          </Link>
        </div>
      </div>
    );
  }

  return (
    <Wrapper className="page">
      {Object.keys(checkout).length >= 1 && <CartContent />}
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default CartPage;
