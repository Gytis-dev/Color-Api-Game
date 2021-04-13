import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import styled from "styled-components";
import { Element } from "../components/Element";
import { ItemData } from "../types/globalTypes";
import { MenuBar } from "../components/MenuBar";
import { handlePostApi } from "../apis/config";
import { Loader } from "../components/Loader";

export const Dashboard = (): JSX.Element => {
  const context = useContext(AppContext);
  const { data, loading } = context?.data;
  const scale = context?.scale ?? 3;

  const handlePost = async (event: React.MouseEvent<HTMLElement>) => {
    const coordinateX = event.clientX / scale;
    const coordinateY = event.clientY / scale;

    await handlePostApi({
      x: coordinateX,
      y: coordinateY,
      name: context?.currentUser,
      color: context?.color,
    });
  };

  return (
    <>
      <MenuBar />
      <GridWrapper>
        <Grid onClick={(e) => handlePost(e)}>
          {loading ? (
            <Loader />
          ) : (
            data.map((item: ItemData) => {
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
            })
          )}
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
  padding-left: 0px;
`;
