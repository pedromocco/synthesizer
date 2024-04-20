import * as Tone from "tone";

//Parametros Envelope
let synthAttack = 0, //Valor máximo: 2
  synthDecay = 2, //Valor máximo: 2
  synthSustain = 0, //Valor máximo: 1
  synthRelease = 2; //Valor máximo: 5

//Tipos de oscilador y selector
let synthOscType = ["sine", "square", "triangle", "sawtooth"],
  synthOscSelector = 2;

let synth = new Tone.Synth({
  oscillator: {
    type: synthOscType[synthOscSelector],
  },
  envelope: {
    attack: synthAttack,
    decay: synthDecay,
    sustain: synthSustain,
    release: synthRelease,
  },
}).toDestination();

export { synth };
