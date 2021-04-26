import styled from "styled-components";

export const Loader = (): JSX.Element => {
  return <LoadingBar></LoadingBar>;
};

const LoadingBar = styled.div`
  & {
    border: 7px solid #f3f3f3;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-top: 7px solid ${(props) => props.theme.color.primary};
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
  }

  & {
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;
