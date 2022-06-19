import styled from 'styled-components';

const Review = ({ id, image, name, text }) => {
  const img = image && image.src;

  return (
    <Wrapper>
      <header>
        <p>{text}</p>
      </header>
      <div className="container">
        {img ? (
          <img src={img} alt={name} />
        ) : (
          <span>{name.charAt(0).toUpperCase()}</span>
        )}
        <p>{name}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border-radius: 13px;
  background: #ffffff;
  box-shadow: 26px 26px 34px #d9d9d9, -26px -15px 34px #ffffff;
  padding: 2em 1.5em;

  display: grid;
  grid-template-rows: 1fr auto;

  .container {
    background: var(--clr-secondary);
    display: flex;
    place-items: center;
    column-gap: 1em;

    p {
      margin: 0;
      text-transform: capitalize;
      text-align: justify;
    }

    span {
      background: var(--clr-tertiary);
      border-radius: 50%;
      display: grid;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 60px;
      height: 60px;
      font-size: 2rem;
    }

    img {
      width: 100%;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      border: 2px solid var(--clr-tertiary);
    }
  }
`;

export default Review;
