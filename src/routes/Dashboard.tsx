import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import styled from "styled-components";
import { Element } from "../components/Element";
import { ItemData } from "../types/globalTypes";
import { MenuBar } from "../components/MenuBar";
import { handleGetApi, handlePostApi } from "../apis/config";
import { params } from "../consts/params";

export const Dashboard = (): JSX.Element => {
  const context = useContext(AppContext);
  const [data, setData] = useState<any>([]);
  const scale = context?.scale ?? 3;

  useEffect(() => {
    setData(context?.data);
  }, [context]);

  const handlePost = async (event: React.MouseEvent<HTMLElement>) => {
    const coordinateX = (event.clientX - 215) / scale;
    const coordinateY = event.clientY / scale;
    setData([
      ...data,
      {
        x: coordinateX,
        y: coordinateY,
        data: {
          name: context?.currentUser,
          color: context?.color,
        },
      },
    ]);

    await handlePostApi({
      x: coordinateX,
      y: coordinateY,
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
      <GridWrapper>
        <Grid onClick={(e) => handlePost(e)}>
          {data.map((item: ItemData) => {
            const scaledItem = {
              ...item,
              x: item.x * scale,
              y: item.y * scale,
            };
            return (
              <Element
                key={`${item.x}+${item.y}+${item.data.createdAt}`}
                details={scaledItem}
              />
            );
          })}
        </Grid>
      </GridWrapper>
    </>
  );
};

const Grid = styled.div`
  background: ${(props) => props.theme.color.secondary};
  width: 100%;
  height: 100vh;
  position: relative;
`;

const GridWrapper = styled.div`
  padding-left: 215px;
`;
