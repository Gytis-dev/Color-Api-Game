export const params = {
  x: 220,
  y: 10,
  w: 300,
  h: 200,
};

export const username = localStorage.getItem("currentUser");
export const colorName = localStorage.getItem("color");

export const removeItemsFromLocalStorage = (): void => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("color");
};

export const randomColorGenerator = (): string => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
};
