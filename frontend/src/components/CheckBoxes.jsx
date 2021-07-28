import React, { useEffect, useState } from "react";
import useDidMountEffect from "./useEffectDidMount";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export default function CheckBoxes({ text, title, type, price, click, state }) {
  const [active, setActive] = useState();
  const StyledCard = styled(Card)`
    text-align: center;
    transition: all 0.1s ease-in-out;
    border: ${active ? "3px" : "1px"} solid;
    width: 100%;
    height: 100%;
    &:hover {
      cursor: pointer;
      border: 3px solid;
    }
  `;
  useDidMountEffect(() => {
    // if (state !== null) {
    //   if (state.card.title === title && state.card.type === type) {
    //     setActive(true);
    //   } else if (state.card.title !== title && state.card.type !== type) {
    //     setActive(false);
    //   }
    // } else {
    //   return;
    // }
    if (sessionStorage.getItem(`card${type}`) !== null) {
      if (JSON.parse(sessionStorage.getItem(`card${type}`)).title === title) {
        setActive(true);
      } else {
        setActive(false);
      }
    }
  }, [state, sessionStorage]);
  return (
    <StyledCard
      className='border-success'
      id={title}
      onClick={() => click(type, title, price, text)}>
      <Card.Body id={title}>
        <Card.Title id={title}>{title}</Card.Title>
        <Card.Text id={title}>
          {text}
          {price}
        </Card.Text>
      </Card.Body>
    </StyledCard>
  );
}
