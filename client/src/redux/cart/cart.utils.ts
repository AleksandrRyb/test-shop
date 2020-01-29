import { Product } from "../products/products.types";

export const addItemToCart = (
  cartItems: Product[],
  cartItemToAdd: Product
): Product[] => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (
  cartItems: Product[],
  cartItemToRemove: Product
): Product[] => {
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToRemove.id
  );

  if (existingCartItem && existingCartItem.quantity > 1) {
    return cartItems.map(item =>
      item.id === cartItemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }

  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartItemToRemove.id);
  }

  return [...cartItems, { ...cartItemToRemove, quantity: 1 }];
};
