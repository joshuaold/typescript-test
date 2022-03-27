import React from "react";
import styled from "styled-components";

export default function Header(props) {
  return (
    <Container onClick={props.onClick}>
      <Icon>{props.icon}</Icon>
      <Title>{props.title}</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
`;

const Icon = styled.div`
  flex-grow: 1;
`;

const Title = styled.div`
  display: flex;
  flex-grow: 6;
  justify-content: center;
`;
