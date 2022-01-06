import PadBankStyled from "../styles/PadBankStyled";
import DrumPad from "./DrumPad";
import drumPads from "./drumPadList";

interface PadBankProps {
  setDisplayText: React.Dispatch<React.SetStateAction<string>>;
}

const PadBank = ({ setDisplayText }: PadBankProps) => {
  return (
    <PadBankStyled>
      {drumPads.map((drumPad) => (
        <DrumPad
          drumPad={drumPad}
          key={drumPad.button}
          setDisplayText={setDisplayText}
        />
      ))}
    </PadBankStyled>
  );
};

export default PadBank;
