import React from "react";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header>
        <HeaderIcon>Icon</HeaderIcon>
        <HeaderText>Text</HeaderText>
      </Header>
      <Body>Hello</Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 2px solid black;
`;

const Header = styled.div`
  width: 100%;
  border: 2px solid black;
  display: flex;
`;

const HeaderIcon = styled.div`
  flex-grow: 1;
`;

const HeaderText = styled.div`
  display: flex;
  flex-grow: 6;
  justify-content: center;
`;

const Body = styled.div`
  width: 100%;
  border: 2px solid black;
`;

export default App;
