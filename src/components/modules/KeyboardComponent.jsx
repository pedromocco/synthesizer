import {
  PlayC3,
  PlayCsus3,
  PlayD3,
  PlayDsus3,
  PlayE3,
  PlayF3,
  PlayFsus3,
  PlayG3,
  PlayGsus3,
  PlayA3,
  PlayAsus3,
  PlayB3,
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
  PlayNote,
} from "./PlayComponent";
import "./KeyboardStyle.css";

window.addEventListener("keydown", PlayNote);

export default function KeyBoard() {
  return (
    <>
      <ul className="piano-keys">
        <li className="key white" onClick={PlayC3}>
          <span>Z</span>
        </li>
        <li className="key black" onClick={PlayCsus3}>
          <span>S</span>
        </li>
        <li className="key white" onClick={PlayD3}>
          <span>X</span>
        </li>
        <li className="key black" onClick={PlayDsus3}>
          <span>D</span>
        </li>
        <li className="key white" onClick={PlayE3}>
          <span>C</span>
        </li>
        <li className="key white" onClick={PlayF3}>
          <span>V</span>
        </li>
        <li className="key black" onClick={PlayFsus3}>
          <span>G</span>
        </li>
        <li className="key white" onClick={PlayG3}>
          <span>B</span>
        </li>
        <li className="key black" onClick={PlayGsus3}>
          <span>H</span>
        </li>
        <li className="key white" onClick={PlayA3}>
          <span>N</span>
        </li>
        <li className="key black" onClick={PlayAsus3}>
          <span>J</span>
        </li>
        <li className="key white" onClick={PlayB3}>
          <span>M</span>
        </li>
        <li className="key white" onClick={PlayC4}>
          <span>,</span>
        </li>
        <li className="key black" onClick={PlayCsus4}>
          <span>L</span>
        </li>
        <li className="key white" onClick={PlayD4}>
          <span>.</span>
        </li>
        <li className="key black" onClick={PlayDsus4}>
          <span>1</span>
        </li>
        <li className="key white" onClick={PlayE4}>
          <span>Q</span>
        </li>
        <li className="key white" onClick={PlayF4}>
          <span>W</span>
        </li>
        <li className="key black" onClick={PlayFsus4}>
          <span>3</span>
        </li>
        <li className="key white" onClick={PlayG4}>
          <span>E</span>
        </li>
        <li className="key black" onClick={PlayGsus4}>
          <span>4</span>
        </li>
        <li className="key white" onClick={PlayA4}>
          <span>R</span>
        </li>
        <li className="key black" onClick={PlayAsus4}>
          <span>5</span>
        </li>
        <li className="key white" onClick={PlayB4}>
          <span>T</span>
        </li>
        <li className="key white" onClick={PlayC5}>
          <span>Y</span>
        </li>
        <li className="key black" onClick={PlayCsus5}>
          <span>7</span>
        </li>
        <li className="key white" onClick={PlayD5}>
          <span>U</span>
        </li>
        <li className="key black" onClick={PlayDsus5}>
          <span>8</span>
        </li>
        <li className="key white" onClick={PlayE5}>
          <span>I</span>
        </li>
        <li className="key white" onClick={PlayF5}>
          <span>O</span>
        </li>
        <li className="key black" onClick={PlayFsus5}>
          <span>0</span>
        </li>
        <li className="key white" onClick={PlayG5}>
          <span>P</span>
        </li>
      </ul>
    </>
  );
}
