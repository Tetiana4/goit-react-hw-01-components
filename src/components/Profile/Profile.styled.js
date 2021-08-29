import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  padding: 50px;
  width: 250px;

  border-radius: 10%;
  box-shadow: 5px 5px 10px #a39e8c;
  background-color: #eae3c8;
`;

export const Image = styled.img`
  margin: auto;
  width: 70%;
  display: block;

  border-radius: 50%;
  border: 2px solid black;
`;

export const Description = styled.div`
  text-align: center;
  font-size: 15px;
  color: #533d4d;
`;

export const Name = styled.p`
  margin-top: 60px;

  font-weight: 800;
  text-transform: uppercase;
  color: #133337;
`;

export const List = styled.ul`
  padding: 50px 0;

  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const Span = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
`;
