import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import useSidebarContext from '../context/sidebar-context';

const Cart = () => {
  const { isCartOpen, closeCart } = useSidebarContext();

  return (
    <article>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        size="md"
        onClose={closeCart}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Shopping Cart</DrawerHeader>

          <DrawerBody>
            <h3>Your cart is empty :(</h3>
          </DrawerBody>

          <DrawerFooter>
            <Button w="100%" colorScheme="red" bg="brand.500" border="none">
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </article>
  );
};

export default Cart;
