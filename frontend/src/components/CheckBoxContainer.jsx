import React, { useState } from "react";
import styled from "styled-components";
import CheckBoxes from "./CheckBoxes";

export default function CheckBoxContainer() {
  const [card, setCard] = useState();
  const newData = [
    {
      type: "Design",
      text: "sfsfdfsdfs",
      title: "EgyediD",
      price: 52,
    },
    {
      type: "Design",
      text: "sfsfdfsdfs",
      title: "SablonD",
      price: 55,
    },
    {
      type: "Design",
      text: "sfsfdfsdfs",
      title: "EgyediF",
      price: 55,
    },
  ];
  const addToLocalStorage = (type, title, price, text) => {
    if (sessionStorage.getItem(`card${type}`) === null) {
      sessionStorage.setItem(
        `card${type}`,
        JSON.stringify({
          title: title,
          price: price,
        })
      );
      setCard({
        card: {
          type: type,
          title: title,
          text: text,
        },
      });
    } else {
      sessionStorage.removeItem(`card${type}`);
      sessionStorage.setItem(
        `card${type}`,
        JSON.stringify({
          title: title,
          price: price,
        })
      );
      setCard({
        card: {
          type: type,
          title: title,
          text: text,
        },
      });
    }
  };
  return (
    <StyledCheckboxContainer className='p-2 form-group my-4 border-secondary'>
      <legend className='control-label customer-legend pl-1 w-auto'>
        Design{" "}
      </legend>
      {newData.map((x) => (
        <CheckBoxes
          state={card}
          text={x.text}
          type={x.type}
          title={x.title}
          price={x.price}
          key={x.title}
          click={addToLocalStorage}
        />
      ))}
    </StyledCheckboxContainer>
  );
}

const StyledCheckboxContainer = styled.fieldset`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 25rem;
  legend {
    float: none;
  }
`;
