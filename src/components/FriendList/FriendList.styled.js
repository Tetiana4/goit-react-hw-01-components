import styled from "@emotion/styled";

export const List = styled.ul`
  margin: 0 auto 30px;
  padding: 10px 10px 20px;
  width: 200px;

  list-style: none;
  background-color: #cec1c5;
  box-shadow: 10px 5px 5px #898183;
`;

export const ListItem = styled.li`
  margin-top: 10px;
  padding: 20px;
  display: flex;

  background-color: #f5f2f3;
  border: 1px solid black;
`;

export const Image = styled.img`
  margin-right: 10px;

  border: 1px solid black;
`;

export const Name = styled.p`
  margin-left: 20px;
`;

export const Status = styled.span`
  margin: 5px;
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? "red" : "green")};
`;
