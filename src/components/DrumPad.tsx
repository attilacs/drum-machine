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

  const playSound = () => {
    const audio = document.querySelector<HTMLAudioElement>(`#${button}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <DrumPadStyled
      className="drum-pad"
      id={`pad-${button}`}
      onClick={playSound}
    >
      {button}
      <audio className="clip" src={url} id={button} />
    </DrumPadStyled>
  );
};

export default DrumPad;
