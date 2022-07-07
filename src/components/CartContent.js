import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import CartHeaders from './CartHeaders';
import CartItem from './CartItem';
import { Divider, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartTotals from './CartTotals';
import Loading from './Loading';

const CartContent = () => {
  const { checkout, loading } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

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
      </Flex>

      <CartTotals />
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
`;

export default CartContent;
