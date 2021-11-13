import React from "react";
import styled from "styled-components";

const StyledAuthorbox = styled.p`
  font-size: 24pt;
  text-align: right;
  color: white;
  font-family: Shalimar;
`;

export default function Authorbox(props) {
  return (
    <StyledAuthorbox id="author" style={{ color: props.theme }}>
      {" "}
      -- {props.author}
    </StyledAuthorbox>
  );
}
