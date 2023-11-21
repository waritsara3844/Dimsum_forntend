import { api } from "src/boot/axios";

export const createOrder = async (user_id, cart_id) => {
  const response = await api.post(`/orders`, {
    user_id: user_id,
    cart_id: cart_id,
  });
  return response.data;
};

export const getDashboardReport = async (start_date, end_date) => {
  const response = await api.get(`/orders/report/summaries`, {
    params: {
      start: start_date,
      end: end_date,
    },
  });
  return response.data;
};

export const getRanking = async () => {
  const response = await api.get(`/orders/report/ranking`);
  return response.data;
};
