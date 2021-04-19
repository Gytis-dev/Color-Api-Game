export const params = {
  x: 10,
  y: 10,
  w: 2500,
  h: 2500,
};

export const username = sessionStorage.getItem("currentUser");
export const colorName = sessionStorage.getItem("color");

export const removeItemsFromLocalStorage = (): void => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("color");
};

export const randomColorGenerator = (): string => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
};

export const initialColors = [
  "#325288",
  "#96bb7c",
  "#f0e3ca",
  "#51c4d3",
  "#ff8882",
  "#d2e69c",
  "#d44000",
  "#98ddca",
  "#536162",
  "#fed049",
];
