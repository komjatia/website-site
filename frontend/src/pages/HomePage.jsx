import React from "react";
import SectionOne from "../components/SectionOne";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div
      class='d-flex justify-content-between mx-5 my-5 flex-row'
      style={{ maxWidth: "95%" }}>
      <SectionOne />
      <img
        style={{ margin: "2rem 0rem 0 2rem" }}
        src='https://dummyimage.com/600x400'
      />
    </div>
  );
}
