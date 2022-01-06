import { useState } from "react";
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

  const [isPressed, setIsPressed] = useState(false);

  const getDisplayText = (url: string) => {
    const splitted = url.split("/");
    const title = splitted[splitted.length - 1];
    return title.replace(/-|_/g, " ").replace(/.mp3/gi, "");
  };

  const pressButton = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 100);
  };

  const playSound = () => {
    const audio = document.querySelector<HTMLAudioElement>(`#${button}`);
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    pressButton();
    setDisplayText(getDisplayText(url));
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
