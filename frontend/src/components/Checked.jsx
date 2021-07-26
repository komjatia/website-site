import React from "react";
import styled from "styled-components";
import { BsCheck } from "react-icons/bs";

export default function Checked({ text }) {
  return (
    <StyledCheck>
      <p>
        <BsCheck />
        {text}
      </p>
    </StyledCheck>
  );
}
const StyledCheck = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 0.2rem 1rem;
  @media only screen and (max-width: 1200px) {
    margin: 0.2rem 0.5rem;
  }
  @media only screen and (max-width: 992px) {
    margin: 0.2rem 0.3rem;
  }
  p {
    display: flex;
    align-items: center;
  }
  svg {
    color: #4abf73;
    font-size: 2rem;
  }
`;
