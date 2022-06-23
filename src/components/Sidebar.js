import {
  HiHome,
  HiShoppingBag,
  HiChatAlt2,
  HiInformationCircle,
  HiCalendar,
} from 'react-icons/hi';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Grid,
  Flex,
  Text,
} from '@chakra-ui/react';
import { AiFillShop } from 'react-icons/ai';
import useSidebarContext from '../context/sidebar-context';
import { Link } from 'react-router-dom';
import { socialLinks } from '../utils/links';
import { Link as SocLink } from '@chakra-ui/react';
import styled from 'styled-components';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();

  return (
    <Drawer
      isOpen={isSidebarOpen}
      placement="right"
      size="sm"
      onClose={closeSidebar}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Grid alignItems="center" gridTemplateColumns={'1fr auto'}>
          <DrawerCloseButton />
        </Grid>

        <DrawerBody mt={'4rem'}>
          <div className="sidebar-content">
            <SidebarLinks>
              <Link to="/" onClick={closeSidebar}>
                <HiHome /> <span>Home</span>
              </Link>

              <Link to="/about" onClick={closeSidebar}>
                <HiInformationCircle /> <span>About</span>
              </Link>

              <Link to="/contact" onClick={closeSidebar}>
                <HiChatAlt2 /> <span>Contact</span>
              </Link>

              <Link to="/booking" onClick={closeSidebar}>
                <HiCalendar /> <span>Book Now</span>
              </Link>

              <Link to="/shop" onClick={closeSidebar}>
                <AiFillShop /> <span>Shop</span>
              </Link>

              <Link to="/cart" className="btn" onClick={closeSidebar}>
                <HiShoppingBag />
                <span> Your Cart</span>
              </Link>
            </SidebarLinks>
          </div>
        </DrawerBody>

        <DrawerFooter flexDir={'column'}>
          <Flex columnGap={'1rem'} justifyContent={'center'} width="100%">
            {socialLinks.map((link, index) => {
              return (
                <SocLink
                  href={link.url}
                  color={'brand.700'}
                  fontSize="1.3rem"
                  key={index}
                  _hover={{ color: 'brand.500', transform: 'scale(1.5)' }}
                >
                  {link.icon}
                </SocLink>
              );
            })}
          </Flex>
          <Text>All rights reserved Make Your Money Make Sense.</Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const SidebarLinks = styled.ul`
  display: grid;
  row-gap: 1rem;

  a {
    font-size: 1.3rem;
    color: var(--clr-primary);
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5em;
    }
  }

  .btn {
    justify-self: center;
    color: var(--clr-white);
    background: var(--clr-tertiary);
    margin-top: 2em;
  }
`;

export default Sidebar;
