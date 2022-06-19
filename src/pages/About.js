import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper className="page">
      <div className="img-container">
        <img
          src="https://res.cloudinary.com/teascript/image/upload/v1654710875/MYMMS%20Folder/about-image_mdr0jn.webp"
          alt="adetola akinnubi"
          className="img"
        />
      </div>
      <div className="text-container">
        <h2>Welcome to My Creative Marketplace.</h2>
        <p>
          Welcome to My Creative Marketplace. I am Adetola Akinnubi, please call
          me Tola. I'm here to help you level up as an individual, business
          owner, and creative. My mission is to help you become a debt-free,
          anxiety-free, generous steward of God’s wealth. God calls us to
          faithfully pay what we owe (Romans 13:7), have peace about our
          finances (Philippians 4:6-7), and be a cheerful giver (2 Corinthians
          9:6-8).
        </p>
        <p>
          To help you accomplish your goals, I provide financial services to
          individuals and businesses, small and large. These services range from
          financial counseling to budget-making to investment management. For
          do-it-yourselfers, my YouTube channel explains personal finance in
          it's simplest form. I have several step-by-step tutorials and
          explanations. Are you a fashionista or influencer? My t-shirts are a
          physical expression of financial freedom.{' '}
        </p>
        <p>
          I believe financial freedom is essential to living a stress-free
          lifestyle and I am committed to serving you the best way I can.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-content: center;

  .img-container {
    min-height: 500px;
    width: 350px;
    justify-self: center;
  }

  .text-container {
    max-width: 41.3rem;
  }
  .text-container p {
    line-height: 1.7;
    letter-spacing: 0.5px;
    text-align: justify;
    display: block;
  }

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    column-gap: 2rem;

    .img-container {
      width: 300px;
      align-self: flex-start;
    }
    h2 {
      margin-top: -0.5rem;
    }
  }

  @media (min-width: 992px) {
    column-gap: 5rem;
    padding: 5em 1em;
  }
`;

export default About;
