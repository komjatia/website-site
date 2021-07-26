import React from "react";
import Heading from "./Heading";
import { LinkContainer } from "react-router-bootstrap";
import Line from "./Line";
import styled from "styled-components";

export default function SectionOne() {
  return (
    <div>
      <Heading text='Blalalla focim' />
      <StyeledTextConainer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        repudiandae natus facilis cumque debitis quis earum veritatis esse
        mollitia quas, labore deserunt quisquam totam? Amet quam nam facere
        quaerat fugit.
      </StyeledTextConainer>
      <LinkContainer to='/contact'>
        <button type='button' className='btn btn-success'>
          Kapcsolat
        </button>
      </LinkContainer>
      <Line />
    </div>
  );
}

const StyeledTextConainer = styled.div`
  min-width: 50%;
  margin-bottom: 2.5rem;
`;
