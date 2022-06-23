import styled from 'styled-components';
import { Divider } from '@chakra-ui/react';

const CartHeaders = () => {
  return (
    <Wrapper>
      <div className="content">
        <h5>item</h5>
        <h5>price</h5>
        <h5>quantity</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;

  @media (min-width: 776px) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 400;
        text-transform: capitalize;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export default CartHeaders;
