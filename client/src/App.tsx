import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import RegisterCardForm from "./components/register-card-form";
import Menu from "./components/menu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Header
        icon={isMenuOpen ? "arrow" : "burger"}
        title={isMenuOpen ? "Menu" : "Register card form"}
        onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
      />
      {isMenuOpen ? <Menu /> : <RegisterCardForm firstName="Test" />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 2px solid black;
`;

export default App;
