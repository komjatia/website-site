import React from "react";
import CheckBoxContainer from "../components/CheckBoxContainer";
import Contact from "../components/Contact";
import styled from "styled-components";

export default function PricingPage() {
  return (
    <StyledPricingPage>
      <CheckBoxContainer />

      <div className='osszeg p-5'>
        <h3>Varhato kiadas:</h3>
        <h3 className='price'>43432 FT</h3>
      </div>
      <Contact />
    </StyledPricingPage>
  );
}
const StyledPricingPage = styled.div`
  .osszeg {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 5rem;
    align-items: center;
    .price {
      color: #47b16c;
    }
  }
`;
