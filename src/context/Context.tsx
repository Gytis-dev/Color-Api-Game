import React, { createContext, useState, useEffect } from "react";
import { username, colorName } from "../consts/params";
import { handleDataFetchThunk } from "../state/actions/actions";
import { useDispatch, useSelector } from "react-redux";

interface ContextInterface {
  currentUser: string | null;
  getUserName: (name: string) => void;
  data: any;
  color: string | null;
  changeUserColor: (color: string) => void;
  scale: number;
  changeScale: (scale: number) => void;
}

export const AppContext = createContext<ContextInterface | null>(null);
export const Context = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [user, setUser] = useState<string | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [data, setData] = useState({
    data: [],
    loading: false,
    error: "",
  });

  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);

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

  useEffect(() => {
    if (username || colorName) {
      setUser(username);
      setColor(colorName);
    }
    dispatch(handleDataFetchThunk());
  }, []);

  useEffect(() => {
    setData(state);
  }, [state]);

  const value = {
    currentUser: user,
    data: data,
    getUserName,
    color: color,
    changeUserColor,
    scale: scale,
    changeScale,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
