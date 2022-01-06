import styled from "styled-components";
import { containerBackground } from "./colors";

const ContainerStyled = styled.div`
  background-color: ${containerBackground};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px 30px;
`;

export default ContainerStyled;
