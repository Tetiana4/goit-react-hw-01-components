import styled from "@emotion/styled";

export const Container = styled.section`
  margin: 50px auto;
  padding: 0;
  width: 300px;

  border: 1px solid #717279;
  border-radius: 3px;
  box-shadow: -1em 0 0.4em;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px;

  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid black;
  background-color: #e2eef0;
`;

export const List = styled.ul`
  margin: 0;
  padding: 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  list-style: none;
  background-color: #e7e1e8;
`;

export const ListItem = styled.li`
  margin-top: 10px;
  padding: 5px;

  background-color: ${random};
  border-radius: 2px;
`;

export const Span = styled.span`
  display: block;
  text-align: center;
`;

function random() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
