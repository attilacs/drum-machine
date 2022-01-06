import { createGlobalStyle } from "styled-components";
import { pageBackground } from "./colors";

const AppStyled = createGlobalStyle`
body {
  align-items: center;
  background-color: ${pageBackground};
  display: flex;
  font-family: sans-serif;
  height: 100vh;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  user-select: none;
}`;

export default AppStyled;
