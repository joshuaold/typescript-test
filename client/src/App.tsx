import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import RegisterCardForm from "./components/register-card-form";
import Menu from "./components/menu";
import { faBars, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Header
        icon={isMenuOpen ? faArrowLeft : faBars}
        title={isMenuOpen ? "Menu" : "Register card form"}
        onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
      />
      <Content>
        {isMenuOpen ? <Menu /> : <RegisterCardForm firstName="Test" />}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-grow: 2;
`;

export default App;
