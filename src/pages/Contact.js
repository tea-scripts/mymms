import styled from 'styled-components';
import contactImg from '../assets/images/contact.svg';
import { MdLocationCity, MdPhoneInTalk, MdMarkAsUnread } from 'react-icons/md';

const Contact = () => {
  return (
    <Wrapper className="page">
      <form>
        <h2>contact me</h2>
        <p>Reach out to me for any inquiry</p>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter your Full Name"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>

        <button type="submit">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>submit</span>
        </button>
      </form>
      <div className="img-container">
        <img src={contactImg} alt="contact me" />
      </div>
      <footer>
        <div className="info">
          <span>
            <MdLocationCity />
          </span>
          <p>
            Location:{' '}
            <span>
              1700 Northside Drive, Suite A7, Unit #5935 Atlanta, Georgia 30318
            </span>
          </p>
        </div>
        <div className="info">
          <span>
            <MdMarkAsUnread />
          </span>
          <p>
            Email: <span>thefinancegirltola@gmail.com</span>
          </p>
        </div>
        <div className="info">
          <span>
            <MdPhoneInTalk />
          </span>
          <p>
            Phone: <span>(404) 913-4071</span>
          </p>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  max-width: var(--max-width);
  display: grid;

  form {
    display: grid;
    row-gap: 1em;
    margin-bottom: 3em;
    width: 100%;

    h2 {
      text-transform: capitalize;
      margin-bottom: 0;
    }

    input {
      display: block;
      padding: 0.5em 0.7em;
      width: 100%;
      outline: none;
      border: 0.1em solid var(--clr-primary);
      border-radius: var(--border-radius);
    }

    textarea {
      resize: vertical;
      padding: 0.5em 0.7em;
      outline: none;
      border: 0.1em solid var(--clr-primary);
      border-radius: var(--border-radius);
    }

    /* From uiverse.io by @adamgiebl */
    button {
      font-family: inherit;
      font-size: 1.2rem;
      background: var(--clr-tertiary);
      color: white;
      padding: 0.6em 1em;
      padding-left: 0.9em;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: var(--border-radius);
      overflow: hidden;
      transition: all 0.2s;
      text-align: center;
      cursor: pointer;
    }

    button span {
      display: block;
      margin-left: 0.3em;
      transition: all 0.3s ease-in-out;
      text-transform: capitalize;
    }

    button svg {
      display: block;
      transform-origin: center center;
      transition: transform 0.3s ease-in-out;
    }

    button:hover .svg-wrapper {
      animation: fly-1 0.6s ease-in-out infinite alternate;
    }

    button:hover svg {
      transform: translateX(1.2em) rotate(45deg) scale(1.1);
    }

    button:hover span {
      transform: translateX(20em);
    }

    button:active {
      transform: scale(0.95);
    }

    @keyframes fly-1 {
      from {
        transform: translateY(0.1em);
      }

      to {
        transform: translateY(-0.1em);
      }
    }
  }

  footer {
    margin-top: 3em;

    .info {
      display: flex;
      column-gap: 1rem;

      > span {
        font-size: 2.5rem;
        color: var(--clr-tertiary);
        align-self: flex-start;
      }

      p {
        font-size: 0.9rem;
        color: var(--clr-primary);
        font-weight: 600;

        span {
          display: block;
          font-weight: 500;
          color: var(--clr-paragraph);
        }
      }
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'form img'
      'footer footer';
    column-gap: 5em;
    align-items: center;
    justify-content: center;

    form {
      grid-area: form;
    }

    .img-container {
      grid-area: img;
    }

    footer {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      column-gap: 3rem;
      width: 100%;
      grid-area: footer;
      justify-content: space-around;
    }
  }

  @media (min-width: 1044px) {
    footer {
      .info {
        margin: 0 auto;
        align-items: center;

        > span {
          font-size: 3.5rem;
        }
      }
    }
  }
`;

export default Contact;
