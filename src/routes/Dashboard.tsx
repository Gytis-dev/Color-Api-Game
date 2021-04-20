import React, { useEffect } from "react";
import styled from "styled-components";
import { Element } from "../components/Element";
import { ItemData, Data, UserState } from "../types/globalTypes";
import { MenuBar } from "../components/MenuBar";
import { handlePostApi, boardStatus, handleGetApi } from "../apis/config";
import { Loader } from "../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSuccess,
  handleDataFetchThunk,
  setUser,
} from "../state/actions/actions";
import { Stage, Layer } from "react-konva";
import { params } from "../consts/params";
import { auth } from "../config/firebase";

export const Dashboard = (): JSX.Element => {
  const { data, loading } = useSelector((state: Data) => state.dataReducer);
  const { color, user } = useSelector((state: UserState) => state.userReducer);
  let counter = 0;

  const dispatch = useDispatch();

  const handlePost = async (event: React.MouseEvent<HTMLElement>) => {
    const coordinateX = event.clientX;
    const coordinateY = event.clientY;

    await handlePostApi({
      x: coordinateX,
      y: coordinateY,
      name: user,
      color: color,
    });
  };

  useEffect(() => {
    dispatch(handleDataFetchThunk());

    auth.onAuthStateChanged((user) => {
      console.log(auth.currentUser);
      dispatch(setUser(user?.email));
    });

    setTimeout(function updateBoard() {
      boardStatus().then((res) => {
        const boardStatus = res.update;

        if (boardStatus > counter) {
          counter = boardStatus;
          handleGetApi("/board", params).then((res) => {
            dispatch(fetchSuccess(res));
          });
        }
      });
      setTimeout(updateBoard, 1000);
    }, 1000);
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
                  return <Element key={item._id} details={scaledItem} />;
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
