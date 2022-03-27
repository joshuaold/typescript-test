import React from "react";
import styled from "styled-components";

export default function RegisterCardForm(props) {
  return (
    <Container>
      <MessageArea>Welcome {props.firstName}</MessageArea>
      <CreditCardDetails>
        <CardNumber placeholder="Credit card number"></CardNumber>
        <CVC placeholder="CVC"></CVC>
        <Expiry placeholder="expiry"></Expiry>
      </CreditCardDetails>
      <SubmitButton>Submit</SubmitButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const MessageArea = styled.div`
  width: 100%;
  justify-content: center;
`;

const CreditCardDetails = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
`;

const CardNumber = styled.input`
  width: 100%;
`;

const CVC = styled.input``;

const Expiry = styled.input``;

const SubmitButton = styled.button`
  width: 100%;
  justify-content: center;
`;
