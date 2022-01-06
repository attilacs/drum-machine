import styled from "styled-components";
import { buttonColor, labelColor } from "./colors";

const DrumPadStyled = styled.div`
  align-items: center;
  background-color: ${buttonColor};
  border-radius: 5px;
  color: ${labelColor};
  cursor: pointer;
  display: flex;
  font-size: 32px;
  height: 100px;
  justify-content: center;
  width: 100px;}
`;

export default DrumPadStyled;
