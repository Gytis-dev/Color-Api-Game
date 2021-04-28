import React, { useEffect } from "react";
import styled from "styled-components";
import { ItemData, Data, UserState } from "../types/globalTypes";
import { MenuBar, Element, Loader } from "../components/index";
import { handlePostApi, boardStatus, handleGetApi } from "../apis/config";
import { useSelector, useDispatch } from "react-redux";
import { Lines } from "../components/Lines";
import {
  fetchSuccess,
  handleDataFetchThunk,
  setUser,
  setLineHistory,
  getLineHistory,
} from "../state/actions/actions";
import { Stage, Layer } from "react-konva";
import { params } from "../consts/index";
import { auth } from "../config/firebase";
import { Database } from "../config/firebase";

export const Dashboard = (): JSX.Element => {
  const { data, loading } = useSelector((state: Data) => state.dataReducer);
  const { color, user, lineHistory, uuid } = useSelector(
    (state: UserState) => state.userReducer
  );

  let counter = 0;

  const dispatch = useDispatch();

  useEffect(() => {
    if (uuid) {
      try {
        Database.getUserDocument(uuid).then((doc) => {
          if (doc.exists) {
            const lineData = doc.data().lines;
            dispatch(getLineHistory(lineData));
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [uuid]);

  const handlePost = async (event: React.MouseEvent<HTMLElement>) => {
    const coordinateX = event.clientX;
    const coordinateY = event.clientY;

    await handlePostApi({
      x: coordinateX,
      y: coordinateY,
      name: user,
      color: color,
    });

    if (uuid) {
      try {
        Database.getUserDocument(uuid).then((doc) => {
          if (doc.exists) {
            Database.database.doc(uuid).update({
              lines: [...doc.data()?.lines, coordinateX, coordinateY],
            });
            dispatch(setLineHistory({ coordinateX, coordinateY }));
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    dispatch(handleDataFetchThunk());

    auth.onAuthStateChanged((user) => {
      if (user != null) {
        const email = user.email;
        const uuid = user.uid;

        const userObject = {
          user: email,
          uuid: uuid,
        };
        dispatch(setUser(userObject));
      }
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
      setTimeout(updateBoard, 700);
    }, 700);
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
                <Lines linePoints={lineHistory} color={color} />
              </Layer>
            </Stage>
          )}
        </Grid>
      </GridWrapper>
    </>
  );
};

const Grid = styled.div`
  // background-image: url("https://images.unsplash.com/photo-1584531979583-18c5c4b25efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80");
  background-position: cover;
  background: ${(props) => props.theme.color.secondary};
  width: 100%;
  height: 100vh;
  position: relative;
`;
const GridWrapper = styled.div`
  padding-left: 0px;
`;
