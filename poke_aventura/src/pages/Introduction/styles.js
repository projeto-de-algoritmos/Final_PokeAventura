import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const StoryBox = styled.div`
  display: flex;
  margin-top: 5%;
  height: 450px;
  width: 500px;
  border: 5px solid black;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  font-family: "Press Start 2P";
`;
export const Btn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ef5350;
  height: 60px;
  width: 50%;
  margin-top: 90px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
