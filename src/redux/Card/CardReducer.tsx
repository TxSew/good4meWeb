import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface CartItem {
  productID: number;
  cartQuantity: number;
  price: number;
  // Add other properties from your action.payload
}

interface CartState {
  cartItem: CartItem[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const localStorageCartItems  = localStorage.getItem('CartItems')  as string
const initialCartItems: CartItem[] = localStorageCartItems ? JSON.parse(localStorageCartItems) : [];

const initialState: CartState = {
  cartItem: initialCartItems,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItem.findIndex((item) => item.productID === action.payload.productID);
      console.log(itemIndex)
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += 1;
        toast.info("Cập nhật giỏ hàng thành công!", {
          position: "bottom-right",
        });
        console.log('thu', state.cartItem[itemIndex].cartQuantity);
      } else {
        const itemProduct: CartItem = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(itemProduct);
        toast.success(" Thêm thành công sản phẩm vào giỏ hàng!", {
          position: "bottom-right",
        });
      }
      localStorage.setItem('CartItems', JSON.stringify(state.cartItem));
    },
    getTotal(state) {
      const { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    removeItem(state, action: PayloadAction<CartItem>) {
      const remove = state.cartItem.filter((item) => item.productID !== action.payload.productID);
      state.cartItem = remove;
      localStorage.setItem('CartItems', JSON.stringify(state.cartItem));
      toast.error('Đã xóa sản phẩm khỏi giỏ hàng!', {
        position: "bottom-right"
      });
    },
  },
});

export const { addToCart, getTotal, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
