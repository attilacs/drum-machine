import styled from "styled-components";
import { labelColor, displayColor } from "./colors";

const DisplayStyled = styled.div`
  align-items: center;
  background-color: ${displayColor};
  color: ${labelColor};
  display: flex;
  font-size: 24px;
  height: 50px;
  justify-content: center;
`;

export default DisplayStyled;
