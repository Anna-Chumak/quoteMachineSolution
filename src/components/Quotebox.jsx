import React from "react";
import styled from "styled-components";
import Authorbox from "./Authorbox";
import Newqbutton from "./Newqbutton";
import Textbox from "./Textbox";
import Twitterbutton from "./Twitterbutton";

const StyledQuoteBox = styled.div`
  text-align: center;
  width: 450px;
  padding: 50px;
  background-color: white;
  border-radius: 5px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Quotebox(props) {
  return (
    <StyledQuoteBox id="quote-box">
      <Textbox theme={props.theme} text={props.currQuote.quote} />
      <Authorbox theme={props.theme} author={props.currQuote.author} />
      <StyledDiv>
        <Twitterbutton theme={props.theme} />
        <Newqbutton
          setCurrQuote={props.setCurrQuote}
          quotes={props.quotes}
          theme={props.theme}
          setTheme={props.setTheme}
        />
      </StyledDiv>
    </StyledQuoteBox>
  );
}
