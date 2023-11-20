import { api } from "src/boot/axios";

export const getMenuInCartById = async (id) => {
  const respose = await api.get(`/carts/${id}/menus`);
  return respose.data;
};

export const updateMenuInCart = async (cart_id, menu_id, quantity) => {
  const respose = await api.put(`/carts/menus`, {
    cart_id: cart_id,
    menu_id: menu_id,
    quantity: quantity,
  });
  return respose.data;
};
