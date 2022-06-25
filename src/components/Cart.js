// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   Button,
//   Grid,
//   Text,
//   Flex,
//   Image,
// } from '@chakra-ui/react';
// import React from 'react';
// import useProductsContext from '../context/products-context';
// import useSidebarContext from '../context/sidebar-context';
// import { MinusIcon } from '@chakra-ui/icons';

// const Cart = () => {
//   const { isCartOpen, closeCart } = useSidebarContext();

//   return <div></div>
//   // <article>
//   //   <Drawer
//   //     isOpen={isCartOpen}
//   //     placement="right"
//   //     size="md"
//   //     onClose={closeCart}
//   //   >
//   //     <DrawerOverlay />
//   //     <DrawerContent>
//   //       <DrawerCloseButton />
//   //       <DrawerHeader>Your Shopping Cart</DrawerHeader>

//   //       <DrawerBody>
//   //         {checkout.lineItems &&
//   //           checkout.lineItems.map((item) => (
//   //             <Grid
//   //               templateColumns="repeat(4, 1fr)"
//   //               gap={1}
//   //               rowGap="1rem"
//   //               key={item.id}
//   //             >
//   //               <Flex alignItems="center" justifyContent="center">
//   //                 <MinusIcon
//   //                   cursor="pointer"
//   //                   onClick={() => removeLineItem(item.id)}
//   //                 />
//   //               </Flex>
//   //               <Flex alignItems="center" justifyContent="center">
//   //                 {item.variant && (
//   //                   <Image h={20} w={20} src={item.variant.image.src} />
//   //                 )}
//   //               </Flex>
//   //               <Flex alignItems="center" justifyContent="center">
//   //                 <Text m="0 0 0 1em">{item.title}</Text>
//   //               </Flex>
//   //               <Flex alignItems="center" justifyContent="center">
//   //                 {item.variant && (
//   //                   <Text m="0 0 0 1em">${item.variant.price}</Text>
//   //                 )}
//   //               </Flex>
//   //             </Grid>
//   //           ))}
//   //       </DrawerBody>

//   //       <DrawerFooter>
//   //         <Button w="100%" colorScheme="red" bg="brand.500" border="none">
//   //           <a href={checkout?.webUrl}>Checkout</a>
//   //         </Button>
//   //       </DrawerFooter>
//   //     </DrawerContent>
//   //   </Drawer>
//   // </article>);

// export default Cart;
