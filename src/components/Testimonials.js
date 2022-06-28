import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { reviews } from '../data';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const Testimonials = () => {
  // eslint-disable-next-line no-unused-vars
  const [people, setPeople] = useState(reviews);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     setIndex(index + 1);
  //   }, 5000);

  //   return () => clearInterval(slider);
  // }, [index]);

  return (
    <Wrapper className="half-page">
      <div className="title">
        <h2>
          <span>/</span> reviews
        </h2>
      </div>
      <div className="reviews-container">
        {people.map((item, personIndex) => {
          const { id, name, text } = item;

          let position = 'nextSlide';

          // active slide
          if (personIndex === index) {
            position = 'activeSlide';
          }

          // last slide
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={position}>
              <p className="text">{text}</p>
              <div>
                <span>{name.charAt(0).toUpperCase()}</span>
                <p>{name}</p>
              </div>
            </article>
          );
        })}

        {/* buttons */}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
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

  .text {
    font-size: 1rem;
  }

  .reviews-container {
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 350px;
    max-width: 800px;
    overflow: hidden;
    display: flex;
    text-align: center;
    justify-items: center;
    margin-top: 2em;

    article {
      display: grid;
      grid-template-rows: auto auto;
      row-gap: -4erm;
      align-items: center;
      justify-items: center;
      position: absolute;
      padding: 0 2.5rem;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: var(--transition);

      div {
        display: flex;
        place-items: center;
        column-gap: 1em;
        align-self: flex-start;

        span {
          background: var(--clr-tertiary);
          color: var(--clr-white);
          border-radius: 50%;
          display: grid;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 60px;
          height: 60px;
          font-size: 2rem;
        }
        p {
          margin-bottom: 0;
          font-weight: 500;
        }
      }

      &.activeSlide {
        opacity: 1;
        transform: translateX(0);
      }
      &.lastSlide {
        transform: translateX(-100%);
      }
      &.nextSlide {
        transform: translateX(100%);
      }
    }

    .prev,
    .next {
      position: absolute;
      top: 150px;
      transform: translateY(-50%);
      background: var(--clr-primary);
      color: var(--clr-white);
      width: 1.25rem;
      height: 1.25rem;
      display: grid;
      place-items: center;
      border-color: transparent;
      font-size: 1rem;
      border-radius: var(--radius);
      cursor: pointer;
      transition: var(--transition);
    }

    .prev {
      left: 0;
    }
    .next {
      right: 0;
    }

    .prev,
    .next {
      height: 2rem;
      width: 2rem;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: var(--max-width);

    .text {
      max-width: 35rem;
    }
  }
`;
export default Testimonials;
