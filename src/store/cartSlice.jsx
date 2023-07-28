import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("itemsList") !== null
    ? JSON.parse(localStorage.getItem("itemsList"))
    : [];

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemFunc = (item, totalQuantity) => {
  localStorage.setItem("itemsList", JSON.stringify(item));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  itemsList: items,
  totalQuantity: totalQuantity,
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // ======= adding to Cart ======
    addToCart(state, action) {
      const newItem = action.payload;
      const exitsItem = state.itemsList.find((item) => item.id === newItem.id);
      if (exitsItem) {
        exitsItem.quantity++;
        exitsItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          cover: newItem.cover,
        });
        state.totalQuantity++;
      }
      setItemFunc(
        state.itemsList.map((item) => item),
        state.totalQuantity
      );
    },

    // ======= Remove item from Cart =======
    removeFromCart(state, action) {
      const id = action.payload;
      const exitstingItem = state.itemsList.find((item) => item.id === id);
      if (exitstingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
        localStorage.setItem("itemsList", JSON.stringify(state.itemsList))
      } else {
        exitstingItem.quantity--;
        exitstingItem.totalPrice -= exitstingItem.price;
      }
    },

    // ====== Delete item ======
    deleteFromCart(state, action) {
      const id = action.payload;
      const exitstingItem = state.itemsList.find((item) => item.id === id);
      if (exitstingItem) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        localStorage.setItem("itemsList", JSON.stringify(state.itemsList))
      }
    },

    // ====== Clear Cart ======
    ClearAllItems(state, action) {
      state.itemsList = []
      localStorage.setItem("itemsList", JSON.stringify(state.itemsList))
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
