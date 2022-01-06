import DisplayStyled from "../styles/DisplayStyled";

interface DisplayProps {
  displayText: string;
}

const Display = ({ displayText }: DisplayProps) => {
  return <DisplayStyled id="display">{displayText}</DisplayStyled>;
};

export default Display;
