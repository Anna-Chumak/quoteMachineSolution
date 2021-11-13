import React from "react";
import styled from "styled-components";
import { colors } from "../utility/colors";
const StyledNewQButton = styled.button`
  width: 150px;
  font-size: 16pt;
  color: white;
  border: none;
  background-color: #5858e7;
  border-radius: 5px;
  min-height: 40px;
`;
export default function Newqbutton(props) {
  return (
    <StyledNewQButton
      id="new-quote"
      style={{ backgroundColor: props.theme }}
      onClick={() => {
        const random = Math.floor(Math.random() * (colors.length - 1));
        props.setTheme(colors[random]);
        const randomQuote = Math.floor(
          Math.random() * (props.quotes.length - 1)
        );
        props.setCurrQuote(props.quotes[randomQuote]);
      }}
    >
      Next Quote
    </StyledNewQButton>
  );
}
