import React from "react";
import styled from "styled-components";
const StyledTextBox = styled.p`
  font-size: 28pt;
  color: white;
  font-family: Raleway;
`;
export default function Textbox(props) {
  return (
    <StyledTextBox id="text" style={{ color: props.theme }}>
      {props.text}
    </StyledTextBox>
  );
}
