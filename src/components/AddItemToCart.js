import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AmountButtons from './AmountButtons';
import { FaCheck } from 'react-icons/fa';
import useProductsContext from '../context/products-context';
import { useEffect, useState } from 'react';
import { Select } from '@chakra-ui/react';

const AddItemToCart = ({ product }) => {
  const [size, setSize] = useState('');
  const [variant, setVariant] = useState(0);

  const { availableForSale, options } = product;
  let { values: colorValues } = options[0];
  let { values: sizeValues } = options[1];

  const colorOptions = colorValues.map((item) => {
    return item.value;
  });

  const sizeOptions = sizeValues.map((item) => {
    return item.value;
  });

  // Set Color and Qty
  const [mainColor, setMainColor] = useState(colorOptions[0]);
  const [itemQty, setItemQty] = useState(1);

  const { addItemToCheckout } = useProductsContext();

  // Quantity Buttons

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

  // Fetch All Available variant titles

  const productVariants = product.variants.map((item) => {
    return item.title;
  });
  const variantTtiles = [...productVariants];

  // Set Dynamic variant [Combine selected color and size]

  useEffect(() => {
    let match = `${mainColor} / ${size} / True`;
    if (variantTtiles.indexOf(match) !== -1) {
      setVariant(variantTtiles.indexOf(match));
    } else {
      setVariant(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, mainColor]);

  console.log(product.variants[variant].id);

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
        <Select
          variant="filled"
          w={'40%'}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
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
            addItemToCheckout(product.variants[variant].id, itemQty);
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
    display: flex;
    align-items: center;
    justify-content: center;
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
