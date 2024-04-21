import * as Tone from "tone";

//Parametros Envelope
let synthAttack = 0, //Valor máximo: 2
  synthDecay = 2, //Valor máximo: 2
  synthSustain = 0, //Valor máximo: 1
  synthRelease = 2; //Valor máximo: 5

//Tipos de oscilador y selector
let synthOscType = ["sine", "square", "triangle", "sawtooth"],
  synthOscSelector = 2;

function synth(){  
  let esynth = new Tone.Synth({
    oscillator: {
      type: synthOscType[0],
    },
    envelope: {
      attack: 0,
      decay: 2,
      sustain: 0,
      release: 0.5,
    },
  }).toDestination();

  return esynth
}

export default synth()
