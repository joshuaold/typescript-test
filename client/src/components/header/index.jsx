import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header(props) {
  return (
    <Container onClick={props.onClick}>
      <Icon>
        <FontAwesomeIcon icon={props.icon} />
      </Icon>
      <Title>{props.title}</Title>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
  font-size: 24px;
  padding: 10px;
  cursor: pointer;
`;

const Icon = styled.div`
  flex-grow: 1;
`;

const Title = styled.div`
  display: flex;
  flex-grow: 6;
  justify-content: left;
  padding-left: 20px;
`;
