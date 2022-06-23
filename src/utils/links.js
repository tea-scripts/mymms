import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const socialLinks = [
  { icon: <FaInstagram />, url: 'https://www.instagram.com/itsjusttola/' },
  {
    icon: <FaFacebookSquare />,
    url: 'https://www.facebook.com/thefinancegirltola/',
  },
  { icon: <FaTwitter />, url: 'https://twitter.com/itsjusttola' },
  { icon: <FaYoutube />, url: 'https://www.youtube.com/c/AdetolaAkinnubi' },
];

const navLinks = [
  {
    url: '/',
    title: 'home',
  },
  {
    url: '/about',
    title: 'about',
  },
  {
    url: '/contact',
    title: 'contact',
  },
  {
    url: '/booking',
    title: 'book now',
  },
  {
    url: '/shop',
    title: 'shop',
  },
];

export { socialLinks, navLinks };
