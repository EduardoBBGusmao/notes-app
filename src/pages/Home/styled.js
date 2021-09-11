import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  max-height: calc(100% - 50px);
  height: 100%;
  background-color: black;
  overflow: auto;
  min-height: 180px;
  justify-content: center;
  display: flex;
`;

export const Container = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: grey;
  cursor: pointer;
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 50px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExpandedNotebook = styled.div`
  height: fit-content;
  width: fit-content;
  margin: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: yellow;
`;

export const ExpandedNote = styled.div`
  width: 150px;
  height: 150px;
  background-color: green;
  margin: 15px;
`;

export const Nav = styled.div`
  width: 100%;
  background-color: lightgrey;
  height: 50px;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  margin-left: 15px;
`;

export const Close = styled.div`
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    background-color: #a5a53230;
  }
`;

export const AddNote = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  margin: 15px;
  cursor: pointer;

  &:hover {
    background-color: #a5a53230;
  }
`;
