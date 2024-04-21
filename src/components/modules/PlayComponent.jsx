import * as Tone from "tone";
import synth from "./SynthComponent"

export async function PlayC3() {
  await Tone.start();
  synth.triggerAttackRelease("C3", "8n");
}
export async function PlayCsus3() {
  await Tone.start();
  synth.triggerAttackRelease("C#3", "8n");
}
export async function PlayD3() {
  await Tone.start();
  synth.triggerAttackRelease("D3", "8n");
}
export async function PlayDsus3() {
  await Tone.start();
  synth.triggerAttackRelease("D#3", "8n");
}
export async function PlayE3() {
  await Tone.start();
  synth.triggerAttackRelease("E3", "8n");
}
export async function PlayF3() {
  await Tone.start();
  synth.triggerAttackRelease("F3", "8n");
}
export async function PlayFsus3() {
  await Tone.start();
  synth.triggerAttackRelease("F#3", "8n");
}
export async function PlayG3() {
  await Tone.start();
  synth.triggerAttackRelease("G3", "8n");
}
export async function PlayGsus3() {
  await Tone.start();
  synth.triggerAttackRelease("G#3", "8n");
}
export async function PlayA3() {
  await Tone.start();
  synth.triggerAttackRelease("A3", "8n");
}
export async function PlayAsus3() {
  await Tone.start();
  synth.triggerAttackRelease("A#3", "8n");
}
export async function PlayB3() {
  await Tone.start();
  synth.triggerAttackRelease("B3", "8n");
}

//_______________________________________
export async function PlayC4() {
  await Tone.start();
  synth.triggerAttackRelease("C4", "8n");
}
export async function PlayCsus4() {
  await Tone.start();
  synth.triggerAttackRelease("C#4", "8n");
}
export async function PlayD4() {
  await Tone.start();
  synth.triggerAttackRelease("D4", "8n");
}
export async function PlayDsus4() {
  await Tone.start();
  synth.triggerAttackRelease("D#4", "8n");
}
export async function PlayE4() {
  await Tone.start();
  synth.triggerAttackRelease("E4", "8n");
}
export async function PlayF4() {
  await Tone.start();
  synth.triggerAttackRelease("F4", "8n");
}
export async function PlayFsus4() {
  await Tone.start();
  synth.triggerAttackRelease("F#4", "8n");
}
export async function PlayG4() {
  await Tone.start();
  synth.triggerAttackRelease("G4", "8n");
}
export async function PlayGsus4() {
  await Tone.start();
  synth.triggerAttackRelease("G#4", "8n");
}
export async function PlayA4() {
  await Tone.start();
  synth.triggerAttackRelease("A4", "8n");
}
export async function PlayAsus4() {
  await Tone.start();
  synth.triggerAttackRelease("A#4", "8n");
}
export async function PlayB4() {
  await Tone.start();
  synth.triggerAttackRelease("B4", "8n");
}

//_______________________________________
export async function PlayC5() {
  await Tone.start();
  synth.triggerAttackRelease("C5", "8n");
}
export async function PlayCsus5() {
  await Tone.start();
  synth.triggerAttackRelease("C#5", "8n");
}
export async function PlayD5() {
  await Tone.start();
  synth.triggerAttackRelease("D5", "8n");
}
export async function PlayDsus5() {
  await Tone.start();
  synth.triggerAttackRelease("D#5", "8n");
}
export async function PlayE5() {
  await Tone.start();
  synth.triggerAttackRelease("E5", "8n");
}
export async function PlayF5() {
  await Tone.start();
  synth.triggerAttackRelease("F5", "8n");
}
export async function PlayFsus5() {
  await Tone.start();
  synth.triggerAttackRelease("F#5", "8n");
}
export async function PlayG5() {
  await Tone.start();
  synth.triggerAttackRelease("G5", "8n");
}
export async function PlayGsus5() {
  await Tone.start();
  synth.triggerAttackRelease("G#5", "8n");
}
export async function PlayA5() {
  await Tone.start();
  synth.triggerAttackRelease("A5", "8n");
}
export async function PlayAsus5() {
  await Tone.start();
  synth.triggerAttackRelease("A#5", "8n");
}
export async function PlayB5() {
  await Tone.start();
  synth.triggerAttackRelease("B5", "8n");
}

export function PlayNote(event) {
  switch (event.keyCode) {
    case 90:
      PlayC3();
      break;
    case 83:
      PlayCsus3();
      break;
    case 88:
      PlayD3();
      break;
    case 68:
      PlayDsus3();
      break;
    case 67:
      PlayE3();
      break;
    case 86:
      PlayF3();
      break;
    case 71:
      PlayFsus3();
      break;
    case 66:
      PlayG3();
      break;
    case 72:
      PlayGsus3();
      break;
    case 78:
      PlayA3();
      break;
    case 74:
      PlayAsus3();
      break;
    case 77:
      PlayB3();
      break;

    case 188:
      PlayC4();
      break;
    case 76:
      PlayCsus4();
      break;
    case 190:
      PlayD4();
      break;
    case 49:
      PlayDsus4();
      break;
    case 81:
      PlayE4();
      break;
    case 87:
      PlayF4();
      break;
    case 51:
      PlayFsus4();
      break;
    case 69:
      PlayG4();
      break;
    case 52:
      PlayGsus4();
      break;
    case 82:
      PlayA4();
      break;
    case 53:
      PlayAsus4();
      break;
    case 84:
      PlayB4();
      break;

    case 89:
      PlayC5();
      break;
    case 55:
      PlayCsus5();
      break;
    case 85:
      PlayD5();
      break;
    case 56:
      PlayDsus5();
      break;
    case 73:
      PlayE5();
      break;
    case 79:
      PlayF5();
      break;
    case 48:
      PlayFsus5();
      break;
    case 80:
      PlayG5();
      break;
  }
}