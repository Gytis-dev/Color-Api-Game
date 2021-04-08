import React, { useContext, useEffect, useState, useMemo } from "react";
import { AppContext } from "../context/Context";
import styled from "styled-components";
import { Element } from "../components/Element";
import { MenuBar } from "../components/MenuBar";
import { handleGetApi, handlePostApi } from "../apis/config";
import { params } from "../consts/params";

export const Dashboard = (): JSX.Element => {
  const mouseState = useMemo(() => {
    return {
      x: 0,
      y: 0,
    };
  }, []);

  const context = useContext(AppContext);
  const [data, setData] = useState<any>([]);

  const updateElement = useMemo(() => {
    return data.map((item: any) => {
      return (
        <Element
          key={`${item.x}+${item.y}+${item.data.createdAt}`}
          details={item}
        />
      );
    });
  }, [data]);

  useEffect(() => {
    setData(context?.data);
  }, [context]);

  const handlePost = () => {
    setData([
      ...data,
      {
        x: mouseState.x,
        y: mouseState.y,
        data: {
          name: context?.currentUser,
          color: context?.color,
        },
      },
    ]);

    handlePostApi({
      x: mouseState.x,
      y: mouseState.y,
      name: context?.currentUser,
      color: context?.color,
    });
    handleGetApi("/board", params).then((res) => {
      setData(res);
    });
  };

  return (
    <>
      <MenuBar />
      <div
        onMouseMove={(e) => {
          mouseState.x = e.clientX;
          mouseState.y = e.clientY;
        }}
        onClick={handlePost}
      >
        <Grid>{updateElement}</Grid>
      </div>
    </>
  );
};

const Grid = styled.div`
  background: ${(props) => props.theme.color.secondary};
  width: 100%;
  height: 100vh;
`;
