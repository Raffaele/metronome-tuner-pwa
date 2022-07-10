type MetronomeInfo = {
  volume: number;
  speed: number;
  movements: number;
};

type TunerInfo = {
  volume: number;
  selectedNote: string;
  octave: number;
  aFrequency: number;
};

const METRONOME_KEY = 'KEY:METRONOME';
const TUNER_KEY = 'KEY:TUNER';

export function storeMetronome(value: MetronomeInfo) {
  store(METRONOME_KEY, value);
}

export function getMetronome() {
  return recover(METRONOME_KEY);
}

export function storeTuner(value: TunerInfo) {
  console.log(value);
  store(TUNER_KEY, value);
}

export function getTuner() {
  return recover(TUNER_KEY);
}

function store(key: string, value: Record<string, string|number>) {
  localStorage.setItem(key, JSON.stringify(value));
}

function recover(key: string) {
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : {};
}
