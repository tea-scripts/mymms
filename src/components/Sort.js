import styled from 'styled-components';
import { Divider, Select } from '@chakra-ui/react';
import useProductsContext from '../context/products-context';

const Sort = () => {
  const { products, updateSort, sort } = useProductsContext();
  return (
    <Wrapper>
      <p>{products.length} products found</p>
      <Divider />
      <Select
        className="sort-input"
        name="sort"
        id="sort"
        value={sort}
        onChange={updateSort}
      >
        <option value="price-lowest">price (lowest)</option>
        <option value="price-highest">price (highest)</option>
        <option value="name-a">name (a - z)</option>
        <option value="name-z">name (z - a)</option>
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;

  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
  }

  @media (min-width: 768px) {
    column-gap: 2rem;
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--clr-paragraph);
  }

  p {
    text-transform: capitalize;
    margin-bottom: 0;
    font-weight: 500;
  }
`;
export default Sort;
