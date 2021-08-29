import styled from "@emotion/styled";

export const Container = styled.section`
  padding: 0;
  margin: 50px auto;
  border: 1px solid #717279;
  width: 300px;
  border-radius: 3px;
  box-shadow: -1em 0 0.4em;
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  margin: 0;
  padding: 20px;
  background-color: #e2eef0;
`;

export const List = styled.ul`
  list-style: none;
  align-items: center;
  justify-content: space-around;
  display: flex;
  padding: 20px;
  margin: 0;
  background-color: #70adb4;
`;

export const ListItem = styled.li`
  background-color: #e2eef0;

  padding: 5px;
  margin-top: 10px;
  border-radius: 2px;
`;
export const Span = styled.span`
  display: block;
  text-align: center;
`;
// justify-content: space-between;
