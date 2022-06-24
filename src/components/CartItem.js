import styled from 'styled-components';
import { Grid, GridItem, Box, Text } from '@chakra-ui/react';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import useProductsContext from '../context/products-context';
import { useEffect, useState } from 'react';

const CartItem = ({ lineItem }) => {
  const { removeLineItem, toggleItemQty } = useProductsContext();
  const {
    title,
    id,
    quantity,
    variant: {
      image: { src: img },
    },
    variant: { price },
    variant: { selectedOptions },
  } = lineItem;
  const [itemQty, setItemQty] = useState(quantity);

  // Color and Size Options
  const options = selectedOptions
    .map((item) => {
      const { name, value } = item;
      return { name, value };
    })
    .slice(0, 2);

  const { value: colorValue } = options[0];
  const { value: sizeValue } = options[1];

  const increase = () => {};

  const decrease = () => {};

  return (
    <Wrapper>
      {/* First Col | Title */}
      <Grid
        templateColumns={'75px 125px'}
        gap={'1rem'}
        alignItems="center"
        gridTemplateRows={'75px'}
        textAlign="left"
        className="title"
      >
        <img src={img} alt="" />
        <Box>
          <h5>{title}</h5>
          <Text className="color">
            color: <span>{colorValue}</span>
          </Text>
          <Text className="size">Size: {sizeValue.toLowerCase()}</Text>
          <h5 className="price-small">${price}</h5>
        </Box>
      </Grid>

      {/* Second Col */}
      <h5 className="price">${price}</h5>

      <AmountButtons
        amount={quantity}
        increase={increase}
        decrease={decrease}
      />

      <h5 className="subtotal">${price * quantity}</h5>

      <button
        type="button"
        className="delete-btn"
        onClick={() => removeLineItem(id)}
      >
        <FaTrash />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin: 3rem auto;
  align-items: center;

  .price,
  .subtotal {
    display: none;
  }

  h5 {
    margin: 0;
    font-size: 0.95rem;
  }

  img {
    border-radius: var(--border-radius);
  }

  .color {
    font-size: 0.75rem;
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      display: inline-block;
      margin-left: 0.5rem;
    }
  }

  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }

  .delete-btn {
    color: var(--clr-white);
    background: transparent;
    border: transparent;
    background: var(--clr-tertiary);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 0.75rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr auto;

    .price-small {
      display: none;
    }
    .price,
    .subtotal {
      display: block;
    }
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }

    img {
      height: 100%;
    }

    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }

    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
export default CartItem;
