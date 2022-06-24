import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import CartHeaders from './CartHeaders';
import CartItem from './CartItem';
import { Divider, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CartContent = () => {
  const { checkout } = useProductsContext();

  return (
    <Wrapper className="page">
      <CartHeaders />
      {checkout.lineItems &&
        checkout.lineItems.map((lineItem) => {
          return <CartItem key={lineItem.id} lineItem={lineItem} />;
        })}
      <Divider />
      <Flex
        justifyContent="space-between"
        mt={'2rem'}
        className="link-container"
      >
        <Link to="/shop" className="link-btn">
          continue shopping
        </Link>
        <button
          type="button"
          className="link-btn clear-btn"
          onClick={() => console.log('clear cart')}
        >
          clear shopping cart
        </button>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .link-btn {
    padding: 0.2em 0.5em;
    text-transform: capitalize;
    background: var(--clr-primary);
    color: white;
    font-family: var(--headingFont);
    border: transparent;
    border-radius: 5px;
    cursor: pointer;
  }

  .clear-btn {
    background: var(--clr-tertiary);
  }
`;

export default CartContent;
