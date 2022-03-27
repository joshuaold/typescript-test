import React, { useState } from "react";
import styled from "styled-components";
import Header from "./components/header";
import RegisterCardForm from "./components/register-card-form";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <Header
        icon="icon"
        title="title"
        onClick={() => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)}
      />
      {isMenuOpen ? <p>menu</p> : <p>form</p>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  border: 2px solid black;
`;

export default App;
