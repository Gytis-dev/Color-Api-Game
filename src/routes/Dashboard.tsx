import React, { useEffect } from "react";
import styled from "styled-components";
import { Element } from "../components/Element";
import { ItemData } from "../types/globalTypes";
import { MenuBar } from "../components/MenuBar";
import { handlePostApi } from "../apis/config";
import { Loader } from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { handleDataFetchThunk } from "../state/actions/actions";
import { Stage, Layer } from "react-konva";
import { username, colorName } from "../consts/params";

export const Dashboard = (): JSX.Element => {
  const { data, loading } = useSelector((state: any) => state.dataReducer);

  const dispatch = useDispatch();

  const handlePost = async (event: React.MouseEvent<HTMLElement>) => {
    const coordinateX = event.clientX;
    const coordinateY = event.clientY;

    await handlePostApi({
      x: coordinateX,
      y: coordinateY,
      name: username,
      color: colorName,
    });
  };

  useEffect(() => {
    dispatch(handleDataFetchThunk());
  }, []);

  return (
    <>
      <MenuBar />
      <GridWrapper>
        <Grid onClick={(e) => handlePost(e)}>
          {loading ? (
            <Loader />
          ) : (
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                {data.map((item: ItemData) => {
                  const scaledItem = {
                    ...item,
                    x: item.x,
                    y: item.y,
                  };
                  return (
                    <Element
                      key={`${item.x}+${item.y}+${item.data.createdAt}`}
                      details={scaledItem}
                    />
                  );
                })}
              </Layer>
            </Stage>
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
