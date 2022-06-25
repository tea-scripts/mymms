import styled from 'styled-components';
import { Divider } from '@chakra-ui/react';
import useProductsContext from '../context/products-context';
import { Link } from '@chakra-ui/react';

const CartTotals = () => {
  const { checkout } = useProductsContext();
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{checkout && checkout.paymentDue}</span>
          </h5>
          <p>
            shipping : <span>Will be calculated on checkout</span>
          </p>
          <Divider />

          <a href={checkout?.webUrl} className="btn">
            proceed to checkout
          </a>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  text-transform: capitalize;

  article {
    border: 1px solid var(--clr-primary);
    border-radius: var(--border-radius);
    padding: 1rem 1.5rem;
  }

  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 150px 1fr;
  }

  h4 {
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
  }

  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    background: var(--clr-primary);

    :hover {
      box-shadow: var(--shadow-4);
    }
  }
`;
export default CartTotals;
