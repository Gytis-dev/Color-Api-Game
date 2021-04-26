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

export const initialColors = [
  "#aa2ee6",
  "#f21170",
  "#8ab6d6",
  "#51c4d3",
  "#8fd9a8",
  "#ffe268",
  "#fb743e",
  "#e4bad4",
  "#c2b092",
  "#fed049",
];
