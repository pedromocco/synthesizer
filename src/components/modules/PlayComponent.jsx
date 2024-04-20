import * as Tone from "tone";
import { synth } from "./SynthComponent";

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

//_______________________________________
export async function PlayC6() {
  await Tone.start();
  synth.triggerAttackRelease("C6", "8n");
}
export async function PlayCsus6() {
  await Tone.start();
  synth.triggerAttackRelease("C#6", "8n");
}
export async function PlayD6() {
  await Tone.start();
  synth.triggerAttackRelease("D6", "8n");
}
export async function PlayDsus6() {
  await Tone.start();
  synth.triggerAttackRelease("D#6", "8n");
}
export async function PlayE6() {
  await Tone.start();
  synth.triggerAttackRelease("E6", "8n");
}
export async function PlayF6() {
  await Tone.start();
  synth.triggerAttackRelease("F6", "8n");
}
export async function PlayFsus6() {
  await Tone.start();
  synth.triggerAttackRelease("F#6", "8n");
}
export async function PlayG6() {
  await Tone.start();
  synth.triggerAttackRelease("G6", "8n");
}
export async function PlayGsus6() {
  await Tone.start();
  synth.triggerAttackRelease("G#6", "8n");
}
export async function PlayA6() {
  await Tone.start();
  synth.triggerAttackRelease("A6", "8n");
}
export async function PlayAsus6() {
  await Tone.start();
  synth.triggerAttackRelease("A#6", "8n");
}
export async function PlayB6() {
  await Tone.start();
  synth.triggerAttackRelease("B6", "8n");
}

export function PlayNote(event) {
  switch (event.keyCode) {
    case 90:
      PlayC4();
      break;
    case 83:
      PlayCsus4();
      break;
    case 88:
      PlayD4();
      break;
    case 68:
      PlayDsus4();
      break;
    case 67:
      PlayE4();
      break;
    case 86:
      PlayF4();
      break;
    case 71:
      PlayFsus4();
      break;
    case 66:
      PlayG4();
      break;
    case 72:
      PlayGsus4();
      break;
    case 78:
      PlayA4();
      break;
    case 74:
      PlayAsus4();
      break;
    case 77:
      PlayB4();
      break;

    case 188:
      PlayC5();
      break;
    case 76:
      PlayCsus5();
      break;
    case 190:
      PlayD5();
      break;
    case 49:
      PlayDsus5();
      break;
    case 81:
      PlayE5();
      break;
    case 87:
      PlayF5();
      break;
    case 51:
      PlayFsus5();
      break;
    case 69:
      PlayG5();
      break;
    case 52:
      PlayGsus5();
      break;
    case 82:
      PlayA5();
      break;
    case 53:
      PlayAsus5();
      break;
    case 84:
      PlayB5();
      break;

    case 89:
      PlayC6();
      break;
    case 55:
      PlayCsus6();
      break;
    case 85:
      PlayD6();
      break;
    case 56:
      PlayDsus6();
      break;
    case 73:
      PlayE6();
      break;
    case 79:
      PlayF6();
      break;
    case 48:
      PlayFsus6();
      break;
    case 80:
      PlayG6();
      break;
  }
}
