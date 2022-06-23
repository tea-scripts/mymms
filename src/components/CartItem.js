import styled from 'styled-components';
import { Grid, GridItem, Box, Text } from '@chakra-ui/react';
import AmountButtons from './AmountButtons';
import { FaTrash } from 'react-icons/fa';
import useProductsContext from '../context/products-context';

const CartItem = ({ lineItem }) => {
  const { removeLineItem } = useProductsContext();
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

  const size = selectedOptions
    .map((item) => {
      const { name, value } = item;
      return { name, value };
    })
    .slice(0, 2);

  console.log(lineItem);

  const increase = () => {
    console.log('increase');
  };

  const decrease = () => {
    console.log('decrease');
  };

  return (
    <Wrapper>
      {/* First Col | Title */}
      <Grid
        templateColumns={'75px 125px'}
        gap={'1rem'}
        alignItems="center"
        gridTemplateRows={'75px'}
      >
        <img src={img} alt="" />
        <Box>
          <h5>{title}</h5>
          <Text className="color">
            color: <span style={{ backgroundColor: 'red' }}></span>
          </Text>
          <Text className="size"></Text>
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

      <h5 className="subtotal">${price}</h5>

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
    font-size: 1rem;
  }

  img {
    /* height: 100%;
    width: 100%;
    object-fit: cover; */
    border-radius: var(--border-radius);
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: 50%;
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
  }
`;
export default CartItem;
