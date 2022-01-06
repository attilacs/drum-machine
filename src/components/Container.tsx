import ContainerStyled from "../styles/ContainerStyled";
import Heading from "./Heading";
import { useState } from "react";

const Container = () => {
  const [displayText, setDisplayText] = useState("");

  return (
    <ContainerStyled id="drum-machine">
      <Heading />
    </ContainerStyled>
  );
};

export default Container;
