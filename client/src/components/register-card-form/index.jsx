import React, { useState } from "react";
import styled from "styled-components";

export default function RegisterCardForm(props) {
  const [cardNumber, setCardNumber] = useState();
  const [cvc, setCVC] = useState();
  const [expiryDate, setExpiryDate] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [isCardDetailsValid, setIsCardDetailsValid] = useState(false);

  const validateCardDetails = () => {
    if (isNaN(cardNumber)) {
      setIsCardDetailsValid(false);
      setErrorMessage("Card number is not a valid number");
    } else if (isNaN(cvc)) {
      setIsCardDetailsValid(false);
      setErrorMessage("CVC is not a valid number");
    } else if (!(expiryDate instanceof Date && !isNaN(expiryDate))) {
      setIsCardDetailsValid(false);
      setErrorMessage("Expiry date is not a valid number");
    } else {
      setIsCardDetailsValid(true);
      setErrorMessage();
    }
  };

  const submitCardApplication = () => {
    validateCardDetails();

    if (isCardDetailsValid) {
      console.log(
        `Card Number: ${cardNumber}, CVC: ${cvc}, Expiry Date: ${expiryDate}`
      );
    }
  };

  return (
    <Container>
      <MessageArea>Welcome {props.firstName}</MessageArea>
      <CreditCardDetails>
        <CardNumber
          placeholder="Credit card number"
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <CVC placeholder="CVC" onChange={(e) => setCVC(e.target.value)} />
        <Expiry
          type="date"
          placeholder="expiry"
          onChange={(e) => setExpiryDate(new Date(e.target.value))}
        />
      </CreditCardDetails>
      <p>{errorMessage}</p>
      <SubmitButton onClick={submitCardApplication}>Submit</SubmitButton>
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
