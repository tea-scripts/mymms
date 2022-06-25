import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AmountButtons from './AmountButtons';
import { FaCheck } from 'react-icons/fa';
import useProductsContext from '../context/products-context';
import { useState } from 'react';
import { Select } from '@chakra-ui/react';

const AddItemToCart = ({ product }) => {
  const { availableForSale, options } = product;
  let { name: colorName, values: colorValues } = options[0];
  let { name: sizeName, values: sizeValues } = options[1];

  const colorOptions = colorValues.map((item) => {
    return item.value;
  });

  const sizeOptions = sizeValues.map((item) => {
    return item.value;
  });

  const [mainColor, setMainColor] = useState(colorOptions[0]);
  const { addItemToCheckout } = useProductsContext();
  const [itemQty, setItemQty] = useState(1);

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
      <div className="colors">
        <span>colors : </span>
        <div>
          {colorOptions.map((color, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: color }}
                onClick={() => setMainColor(color)}
                className={`color-btn && ${mainColor === color && 'active'}`}
              >
                {mainColor === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="sizes">
        <span>sizes : </span>
        <Select variant="filled" w={'40%'}>
          {sizeOptions.map((size, index) => {
            return (
              <option key={index} value={`${size}`}>
                {size}
              </option>
            );
          })}
        </Select>
      </div>
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

  .colors {
    display: flex;
    column-gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    /* opacity: 0.5; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 2px solid var(--clr-tertiary); */
    svg {
      font-size: 0.75rem;
      color: var(--clr-tertiary);
    }
  }
  .active {
    opacity: 1;
  }

  .sizes {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    text-transform: capitalize;

    option {
      padding: 5em 0.8em;
    }
  }

  .btn-container {
    margin: 1em 0;
    h2 {
      margin: 0;
    }
  }
`;

export default AddItemToCart;
