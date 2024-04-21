import KeyBoard from "./modules/KeyboardComponent";
import TestComponent from "./modules/testComponent"
import "./SynthesizerStyle.css";

export default function Synthesizer() {

  return (
    <>
      <div className="synthesizer">
        <TestComponent />
        <KeyBoard />
      </div>
    </>
  );
}
