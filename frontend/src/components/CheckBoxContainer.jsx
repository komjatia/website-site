import React, { useState } from "react";
import styled from "styled-components";
import CheckBoxes from "./CheckBoxes";

export default function CheckBoxContainer() {
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
  const addToLocalStorage = (type, title, price) => {
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

  return (
    <StyledCheckboxContainer>
      {newData.map((x) => (
        <>
          <CheckBoxes
            text={x.text}
            type={x.type}
            title={x.title}
            price={x.price}
            key={x.title}
            click={addToLocalStorage}
          />
        </>
      ))}
    </StyledCheckboxContainer>
  );
}

const StyledCheckboxContainer = styled.div``;
