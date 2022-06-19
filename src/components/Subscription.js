import styled from 'styled-components';
import subscribeImage from '../assets/images/subscribe.svg';

const Subscription = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="img-container">
        <img src={subscribeImage} alt="subscribe" />
      </div>
      <div>
        <h2>Never miss an update!</h2>
        <FormControl>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button type="submit">submit</button>
        </FormControl>
        <p>
          *Your email address is safe with us. We never share your email
          address.
        </p>
      </div>
    </Form>
  );
};

const Form = styled.form`
  margin: 3em auto;
  text-align: center;
  display: grid;
  padding: 1em;
  width: 400px;
  max-width: var(--max-width);

  p {
    margin-top: 2em;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 100%;

    .img-container {
      justify-self: center;

      img {
        width: 400px;
      }
    }
  }
`;

const FormControl = styled.div`
  display: flex;
  justify-content: center;

  input {
    padding: 0.5em 0.7em;
    width: 100%;
    border: 2px solid var(--clr-primary);
    border-right: transparent;
  }

  input:focus {
    border-right: transparent;
    border-color: var(--clr-primary);
    outline: none;
  }

  @media (min-width: 768px) {
    input {
      width: 65%;
    }
  }

  button {
    border: transparent;
    text-transform: capitalize;
    background: var(--clr-tertiary);
    color: var(--clr-white);
    padding: 0.5em 1em;
    cursor: pointer;
    transition: var(--transition);
  }

  button:hover {
    opacity: 0.7;
  }
`;

export default Subscription;
