import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AmountButtons from './AmountButtons';
import useProductsContext from '../context/products-context';
import { useState } from 'react';

const AddItemToCart = ({ product }) => {
  const { addItemToCheckout } = useProductsContext();
  const [itemQty, setItemQty] = useState(1);
  const { availableForSale } = product;

  const increase = () => {
    setItemQty((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (!availableForSale) {
        tempAmount = 0;
      }
      return tempAmount;
    });
  };

  const decrease = () => {
    setItemQty((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <Wrapper>
      <div className="btn-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={itemQty}
        />
        <Link
          to="/cart"
          className="cart-btn"
          onClick={() => {
            addItemToCheckout(product.variants[0].id, itemQty);
          }}
        >
          Add To Cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  margin-top: 2rem;

  .btn-container {
    h2 {
      margin-bottom: 0;
    }
  }
`;

export default AddItemToCart;
