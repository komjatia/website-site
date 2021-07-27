import React from "react";
import styled from "styled-components";
import Checked from "./CheckMark";

export default function Line() {
  const data = ["Olcso", "Biztonsagos", "Gyors", "Kenyelmes"];
  return (
    <StyledLineContainer>
      <hr />
      <div className='d-flex'>
        {data.map((x) => (
          <Checked text={x} key={x} />
        ))}
      </div>
    </StyledLineContainer>
  );
}

const StyledLineContainer = styled.div`
  margin: 2rem 0;
  hr {
    margin: 0.5rem 0;
  }
`;
