import styled from 'styled-components';

const DataLoader = () => {
  return (
    <Wrapper>
      <div />
    </Wrapper>
  );
};

export default DataLoader;

const Wrapper = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #fff;

  & > div {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #3a4966;
    width: 120px;
    height: 120px;
    -webkit-animation: loader 2s linear infinite; /* Safari */
    animation: loader 2s linear infinite;
  }

  @-webkit-keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
