import {
  PlayC4,
  PlayCsus4,
  PlayD4,
  PlayDsus4,
  PlayE4,
  PlayF4,
  PlayFsus4,
  PlayG4,
  PlayGsus4,
  PlayA4,
  PlayAsus4,
  PlayB4,
  PlayC5,
  PlayCsus5,
  PlayD5,
  PlayDsus5,
  PlayE5,
  PlayF5,
  PlayFsus5,
  PlayG5,
  PlayGsus5,
  PlayA5,
  PlayAsus5,
  PlayB5,
  PlayC6,
  PlayCsus6,
  PlayD6,
  PlayDsus6,
  PlayE6,
  PlayF6,
  PlayFsus6,
  PlayG6,
  PlayNote,
} from "./PlayComponent";
import "./KeyboardStyle.css";

window.addEventListener("keydown", PlayNote);

export default function KeyBoard() {
  return (
    <>
      <ul className="piano-keys">
        <li className="key white" onClick={PlayC4}>
          <span>Z</span>
        </li>
        <li className="key black" onClick={PlayCsus4}>
          <span>S</span>
        </li>
        <li className="key white" onClick={PlayD4}>
          <span>X</span>
        </li>
        <li className="key black" onClick={PlayDsus4}>
          <span>D</span>
        </li>
        <li className="key white" onClick={PlayE4}>
          <span>C</span>
        </li>
        <li className="key white" onClick={PlayF4}>
          <span>V</span>
        </li>
        <li className="key black" onClick={PlayFsus4}>
          <span>G</span>
        </li>
        <li className="key white" onClick={PlayG4}>
          <span>B</span>
        </li>
        <li className="key black" onClick={PlayGsus4}>
          <span>H</span>
        </li>
        <li className="key white" onClick={PlayA4}>
          <span>N</span>
        </li>
        <li className="key black" onClick={PlayAsus4}>
          <span>J</span>
        </li>
        <li className="key white" onClick={PlayB4}>
          <span>M</span>
        </li>
        <li className="key white" onClick={PlayC5}>
          <span>,</span>
        </li>
        <li className="key black" onClick={PlayCsus5}>
          <span>L</span>
        </li>
        <li className="key white" onClick={PlayD5}>
          <span>.</span>
        </li>
        <li className="key black" onClick={PlayDsus5}>
          <span>1</span>
        </li>
        <li className="key white" onClick={PlayE5}>
          <span>Q</span>
        </li>
        <li className="key white" onClick={PlayF5}>
          <span>W</span>
        </li>
        <li className="key black" onClick={PlayFsus5}>
          <span>3</span>
        </li>
        <li className="key white" onClick={PlayG5}>
          <span>E</span>
        </li>
        <li className="key black" onClick={PlayGsus5}>
          <span>4</span>
        </li>
        <li className="key white" onClick={PlayA5}>
          <span>R</span>
        </li>
        <li className="key black" onClick={PlayAsus5}>
          <span>5</span>
        </li>
        <li className="key white" onClick={PlayB5}>
          <span>T</span>
        </li>
        <li className="key white" onClick={PlayC6}>
          <span>Y</span>
        </li>
        <li className="key black" onClick={PlayCsus6}>
          <span>7</span>
        </li>
        <li className="key white" onClick={PlayD6}>
          <span>U</span>
        </li>
        <li className="key black" onClick={PlayDsus6}>
          <span>8</span>
        </li>
        <li className="key white" onClick={PlayE6}>
          <span>I</span>
        </li>
        <li className="key white" onClick={PlayF6}>
          <span>O</span>
        </li>
        <li className="key black" onClick={PlayFsus6}>
          <span>0</span>
        </li>
        <li className="key white" onClick={PlayG6}>
          <span>P</span>
        </li>
      </ul>
    </>
  );
}
