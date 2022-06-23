import { Link } from 'react-router-dom';
import { Link as SocLink } from '@chakra-ui/react';
import { socialLinks, navLinks } from '../utils/links';
import styled from 'styled-components';
const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <Wrapper>
      <div className="links-container">
        <ul className="footer-links">
          {navLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.url}>{link.title}</Link>
              </li>
            );
          })}
        </ul>

        {/* social links */}
        <ul className="social-links">
          {socialLinks.map((link, index) => {
            const { icon, url } = link;
            return (
              <li key={index}>
                <SocLink _hover={{ transform: 'scale(1.5)' }} href={url}>
                  {icon}
                </SocLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="attribution">
        <p>
          &copy; {currentDate} make your money make sense LLC. All rights
          reserved.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 11rem;
  background: var(--clr-primary);
  color: var(--clr-white);
  display: grid;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5em 1em;
  text-align: center;
  font-family: var(--ff-headingFont);
  letter-spacing: 0.7px;

  p,
  a {
    color: var(--clr-white);
    font-size: 1rem;
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .footer-links {
    display: flex;
    column-gap: 1rem;
  }

  .links-container {
    display: grid;
    justify-content: center;
    row-gap: 1rem;
    margin-bottom: 1rem;
  }

  .social-links {
    display: flex;
    column-gap: 1rem;
    font-size: 1.7rem;
    justify-self: center;

    a {
      color: var(--clr-white);
      font-size: 1.3rem;
      transition: var(--transition);
    }

    a:hover {
      transform: scale(1.2);
      color: var(--clr-tertiary);
    }
  }

  @media (min-width: 992px) {
    padding: 2em 1em;

    p,
    a {
      font-size: 1.2rem;
    }
  }
`;

export default Footer;
