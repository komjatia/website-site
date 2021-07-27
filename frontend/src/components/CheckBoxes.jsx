import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export default function CheckBoxes({ text, title, type, price, click, x }) {
  const StyledCard = styled(Card)`
    text-align: center;
    box-sizing: content-box;
    transition: all 0.1s ease-in-out;
    border: solid;
    &:hover {
      cursor: pointer;
      border: 3px solid;
    }
  `;
  return (
    <StyledCard
      style={{ width: "15rem", maxWidth: "25%" }}
      className='border-success mb-3'
      onClick={() => click(type, title, price)}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
          {price}
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
}
