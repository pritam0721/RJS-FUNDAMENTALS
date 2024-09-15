export const getTotal = (cart) => {
  let totalItems = 0;
  let totalAmount = 0;
  for (let { amount, price } of cart.values()) {
    totalItems += amount;
    totalAmount += amount * price;
  }
  return { totalAmount, totalItems };
};
