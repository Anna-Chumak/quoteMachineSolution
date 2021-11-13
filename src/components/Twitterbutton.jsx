import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const StyledTwitterButton = styled.a`
  width: 40px;
  height: 40px;
  color: white;
`;

export default function Twitterbutton(props) {
  return (
    <StyledTwitterButton
      id="tweet-quote"
      href="https://twitter.com/intent/tweet"
      target="_blank"
    >
      <FontAwesomeIcon
        icon={faTwitterSquare}
        style={{ color: props.theme, fontSize: "32pt" }}
      />
    </StyledTwitterButton>
  );
}
