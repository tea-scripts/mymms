import styled from 'styled-components';
import { ProductsList, Sort, Filters } from '../components';

const Shop = () => {
  return (
    <main>
      <Wrapper className="page">
        <div className="products">
          <Filters />
          <div>
            <Sort />
            <ProductsList />
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  .products {
    display: grid;
  }

  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
      column-gap: 2rem;
    }
  }
`;
export default Shop;
