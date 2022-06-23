import styled from 'styled-components';
import useProductsContext from '../context/products-context';
import CartHeaders from './CartHeaders';
import CartItem from './CartItem';
import { Divider } from '@chakra-ui/react';

const CartContent = () => {
  const { checkout } = useProductsContext();

  return (
    <Wrapper className="page">
      <CartHeaders />
      {checkout.lineItems.map((lineItem) => {
        return <CartItem key={lineItem.id} lineItem={lineItem} />;
      })}
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* display: grid;
  grid-template-rows: auto auto auto;
  row-gap: 1em; */
`;

export default CartContent;
