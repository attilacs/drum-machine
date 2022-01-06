import ContainerStyled from "../styles/ContainerStyled";
import Heading from "./Heading";
import Display from "./Display";
import PadBank from "./PadBank";
import { useState } from "react";

const Container = () => {
  const [displayText, setDisplayText] = useState("");

  return (
    <ContainerStyled id="drum-machine">
      <Heading />
      <PadBank setDisplayText={setDisplayText} />
      <Display displayText={displayText} />
    </ContainerStyled>
  );
};

export default Container;
