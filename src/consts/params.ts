export const params = {
  x: 0,
  y: 0,
  w: 1200,
  h: 1200,
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
