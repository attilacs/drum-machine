import DrumPadStyled from "../styles/DrumPadStyled";

interface DrumPadInterface {
  button: string;
  keyCode: number;
  url: string;
}

interface DrumPadProps {
  setDisplayText: React.Dispatch<React.SetStateAction<string>>;
  drumPad: DrumPadInterface;
}

const DrumPad = ({ setDisplayText, drumPad }: DrumPadProps) => {
  const { button, keyCode, url } = drumPad;

  return (
    <DrumPadStyled
      className="drum-pad"
      id={`pad-${button}`}
    >
      {button}
      <audio className="clip" src={url} id={button} />
    </DrumPadStyled>
  );
};

export default DrumPad;
