import styled from "@emotion/styled";

export const List = styled.ul`
  background-color: #cec1c5;
  width: 200px;

  margin-left: auto;
  margin-right: auto;
  list-style: none;
  padding: 10px 10px 20px;
  box-shadow: 10px 5px 5px #898183;
`;
export const ListItem = styled.li`
  display: flex;
  margin-top: 10px;
  border-bottom: 1px;
  padding: 20px;
  background-color: #f5f2f3;
`;
export const Image = styled.img`
  border: 1px solid black;
  margin-right: 10px;
`;

export const Name = styled.p`
  margin-left: 20px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;

  background-color: ${(props) => (props.isOnline ? "red" : "green")};
`;
