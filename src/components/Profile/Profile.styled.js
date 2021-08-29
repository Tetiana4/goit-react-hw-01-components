import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 50px;
  margin: auto;
  background-color: #eae3c8;
  border-radius: 10%;
  width: 250px;
  box-shadow: 5px 5px 10px #a39e8c;
`;

export const Image = styled.img`
  width: 70%;
  border-radius: 50%;
  border: 2px solid black;
  margin: auto;
  display: block;
`;

export const Description = styled.div`
  text-align: center;
  color: #533d4d;
  font-size: 15px;
`;

export const Name = styled.p`
  margin-top: 60px;
  font-weight: 800;
  text-transform: uppercase;
  color: #133337;
`;

export const List = styled.ul`
  list-style: none;
  justify-content: space-between;
  display: flex;
  padding: 50px 0px;
`;

export const Span = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
`;
