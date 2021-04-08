import React, { createContext, useState, useEffect } from "react";
import { handleGetApi } from "../apis/config";
import { ContextInterface } from "../types/globalTypes";
import { params } from "../consts/params";
import { username, colorName } from "../consts/params";

export const AppContext = createContext<ContextInterface | null | undefined>(
  null
);
export const Context = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<string | null>("");
  const [data, setData] = useState<Array<unknown>>([]);
  const [error, setError] = useState("");
  const [color, setColor] = useState<string | null>(null);
  const [scale, setScale] = useState(3);

  // Context functions
  const getUserName = (name: string) => {
    setUser(name);
    localStorage.setItem("currentUser", name);
  };
  const changeUserColor = (color: string) => {
    setColor(color);
    localStorage.setItem("color", color);
  };
  const changeScale = (scale: number) => {
    setScale(scale);
  };
  //Initial render
  useEffect(() => {
    if (username || colorName) {
      setUser(username);
      setColor(colorName);
    }

    handleGetApi("/board", params)
      .then((res) => setData(res))
      .catch((e) => setError(e));
  }, []);

  const value = {
    currentUser: user,
    fetchError: error,
    getUserName,
    data: data,
    color: color,
    changeUserColor,
    scale: scale,
    changeScale,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
