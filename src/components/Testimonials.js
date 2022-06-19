import styled from 'styled-components';
import { reviews } from '../data';
import Review from './Review';

const Testimonials = () => {
  return (
    <Wrapper className="half-page">
      <div className="title">
        <h2>
          <span>/</span> our reviews
        </h2>
      </div>
      <div className="reviews">
        {reviews.map((review) => {
          return <Review key={review.id} {...review} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  padding: 2em 1em;
  padding-bottom: 5em;

  h2 {
    text-transform: capitalize;
    text-align: center;
  }
  .reviews {
    display: grid;
    row-gap: 2em;
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: var(--max-width);

    .reviews {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
      justify-content: center;
      gap: 2em 1em;
    }
  }
`;
export default Testimonials;
