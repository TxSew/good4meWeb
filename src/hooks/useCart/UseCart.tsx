// // useCart.ts
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ItemProductProps from '../../models/Product/ItemProductProps';
import { CartProduct } from '../../models/Product/CartProduct';

export const useCart = () => {

  const initialCartItems = JSON.parse(localStorage.getItem('cart') as string) || [];
     const [cartItems, setCartItems] = useState<CartProduct[]>(initialCartItems);
  const addToCart = (product: ItemProductProps) => {
    const existingCartItemIndex = cartItems.findIndex(item => item.product.productId === product.productId);
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      toast.info("update to cart successfully" , {
           position: "bottom-right"
         })
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { product, quantity: 1 }]);
      toast.success("add to cart successfully" , {
        position: "bottom-right"
      })
    }
  };    
  const increaseQuantity = (productId:number ) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.product.productId === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (productId:number ) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.product.productId === productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }); 
    setCartItems(updatedCartItems);
  };

  const getTotalItems = () => {
     console.log(cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0));
    return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  };


  const getTotalPrice = () => {
    return cartItems.reduce((total, cartItem) => total + cartItem.product.price * cartItem.quantity, 0);
  };

  const removeItem = (productId: number) => {
    const updatedCartItems = cartItems.filter(item => item.product.productId !== productId);
    setCartItems(updatedCartItems);
    toast.error("Item removed from cart", {
      position: "bottom-right"
    });
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  return { cartItems, addToCart , getTotalItems, getTotalPrice, removeItem , increaseQuantity, decreaseQuantity};
};








// // CartContext.tsx
// import React, { createContext, useContext, useState, useEffect  } from 'react';
// import { toast } from 'react-toastify';
// import ItemProductProps from '../../models/Product/ItemProductProps';

// interface CartItem {
//   product: ItemProductProps;
//   quantity: number;
// }

// interface CartContextType {
//   cartItems: CartItem[];
//   addToCart: (product: ItemProductProps) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);
// interface CartProviderProps {
//     children: React.ReactNode;
//   }
// export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);

//   useEffect(() => {
//     const getCart = localStorage.getItem('cart') as string;
//     const cartLocal = JSON.parse(getCart);
//     setCartItems(cartLocal ?? []);
//   }, []);

//   const addToCart = (product: ItemProductProps) => {
//     const existingCartItemIndex = cartItems.findIndex(item => item.product.productId === product.productId);
//     if (existingCartItemIndex !== -1) {
//       const updatedCartItems = [...cartItems];
//       updatedCartItems[existingCartItemIndex].quantity += 1;
//       setCartItems(updatedCartItems);
//       toast.info('Updated cart successfully', {
//         position: 'bottom-right',
//       });
//     } else {
//       setCartItems(prevCartItems => [...prevCartItems, { product, quantity: 1 }]);
//       toast.success('Added to cart successfully', {
//         position: 'bottom-right',
//       });
//     }
//   };


//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// };

