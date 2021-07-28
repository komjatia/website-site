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
      type: "Funkcio",
      text: "sfsfdfsdfs",
      title: "EgyediF",
      price: 55,
    },
    {
      type: "Funkcio",
      text: "sfsfdfsdfs",
      title: "SablonF",
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
      console.log("delete and add");
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
    <StyledCheckboxContainer>
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

const StyledCheckboxContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .checked {
    width: 15rem;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center !important;
    padding: 1rem;
  }
  .checked:hover {
    border: 1px solid;
  }
`;
