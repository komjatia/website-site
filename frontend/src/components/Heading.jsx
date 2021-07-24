import React from "react";
import styled from "styled-components";

export default function Heading({ text }) {
  return (
    <StyledHeading>
      <h1>{text}</h1>
    </StyledHeading>
  );
}

const StyledHeading = styled.div`
  font-size: 3rem;
  color: #4b4b4b;
  margin: 2rem 2rem;
`;
