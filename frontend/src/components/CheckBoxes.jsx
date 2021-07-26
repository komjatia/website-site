import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export default function CheckBoxes({ check, text, title, type, price }) {
  const addToLocalStorage = () => {
    if (sessionStorage.getItem(`card${type}`) === null) {
      sessionStorage.setItem(
        `card${type}`,
        JSON.stringify({
          title: title,
          price: price,
        })
      );
    } else {
      console.log("delete and add");
      sessionStorage.removeItem(`card${type}`);
      sessionStorage.setItem(
        `card${type}`,
        JSON.stringify({
          title: title,
          price: price,
        })
      );
    }
  };
  const StyledCard = styled(Card)`
    text-align: center;
    box-sizing: content-box;
    transition: all 0.1s ease-in-out;
    border: ${check ? "1px" : "3px"} solid;
    &:hover {
      cursor: pointer;
      border: 3px solid;
    }
  `;

  return (
    <StyledCard
      style={{ width: "15rem", maxWidth: "25%" }}
      className='border-success mb-3'
      onClick={addToLocalStorage}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
}
