import styled from 'styled-components';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { Input, Checkbox, Stack, Radio, RadioGroup } from '@chakra-ui/react';

import useProductsContext from '../context/products-context';
import { useState } from 'react';

const Filters = () => {
  const [itemSize, setItemSize] = useState([]);
  const [sizeDropdown, setSizeDropdown] = useState(false);
  const [colorDropdown, setColorDropdown] = useState(false);
  const [collectionDropdown, setcollectionDropdown] = useState(false);
  const {
    filters: { text, color, size, collections, price, min_price, max_price },
    updateFilters,
    clearFilters,
    all_products,
  } = useProductsContext();

  const getUniqueValues = (data, type) => {
    if (type === 'sizes') {
      let uniqueValues = data
        .map((item) => {
          return item.options[0].values;
        })
        .flat();
      return [...new Set(uniqueValues.map((item) => item.value))];
    }

    if (type === 'colors') {
      let uniqueValues = data
        .map((item) => {
          return item.options[1].values;
        })
        .flat();
      return [...new Set(uniqueValues.map((item) => item.value))];
    }
  };

  const sizes = getUniqueValues(all_products, 'sizes');
  const colors = getUniqueValues(all_products, 'colors');

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack>
            <Input
              name="text"
              value={text}
              onChange={updateFilters}
              placeholder="Search"
            />
            <button
              type="btn"
              className="toggle-btn"
              onClick={() => setcollectionDropdown(!collectionDropdown)}
            >
              Collections{' '}
              <span>{collectionDropdown ? <HiMinus /> : <HiPlus />} </span>
            </button>
            <Stack className={`dropdown ${collectionDropdown ? 'show' : null}`}>
              {collections.map((item, index) => {
                return (
                  <RadioGroup
                    onChange={updateFilters}
                    name="collections"
                    value={collections}
                    key={index}
                  >
                    <Stack>
                      <Radio>{item}</Radio>
                    </Stack>
                  </RadioGroup>
                );
              })}
            </Stack>
            <button
              type="btn"
              className="toggle-btn"
              onClick={() => setSizeDropdown(!sizeDropdown)}
            >
              Size <span>{sizeDropdown ? <HiMinus /> : <HiPlus />} </span>
            </button>
            <Stack className={`dropdown ${sizeDropdown ? 'show' : null}`}>
              {sizes.map((item, index) => {
                return (
                  <Checkbox
                    name="size"
                    value={itemSize}
                    onChange={updateFilters}
                    key={item}
                    checked={index}
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Stack>

            <button
              type="button"
              className="toggle-btn"
              onClick={() => setColorDropdown(!colorDropdown)}
            >
              Color <span>{colorDropdown ? <HiMinus /> : <HiPlus />} </span>
            </button>
            <Stack className={`dropdown ${colorDropdown ? 'show' : null}`}>
              {colors.map((item, index) => {
                return (
                  <Checkbox
                    key={index}
                    type="checkbox"
                    name="color"
                    value={color}
                    onChange={updateFilters}
                  >
                    {item}
                  </Checkbox>
                );
              })}
            </Stack>
            <p>Price: ${price}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </Stack>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .toggle-btn {
    background: transparent;
    border: transparent;
    display: flex;
    justify-content: space-between;
    padding: 0.6em 0.3em;
    background: rgb(238, 234, 234);
  }

  .dropdown {
    display: none;
    transition: var(--transition);
  }

  .show {
    display: grid;
  }

  @media (min-width: 768px) {
    margin-top: 4.6rem;
  }
`;
export default Filters;
