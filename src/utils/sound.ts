export function beat(velocity: number, volume: number) {
  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  oscillator.frequency.value = 880;
  oscillator.connect(gainNode);
  gainNode.gain.value = volume;
  gainNode.connect(audioCtx.destination);
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
    audioCtx.close();
  }, velocity);
}

let tunerAudioContext: AudioContext | null = null;
export function playTuner(isActive: boolean, frequency: number, volume: number) {
  if (tunerAudioContext) {
    tunerAudioContext.close();
    tunerAudioContext=null;
  }
  if (!isActive) return;
  tunerAudioContext = new AudioContext();
  const oscillator = tunerAudioContext.createOscillator();
  const gainNode = tunerAudioContext.createGain();
  oscillator.frequency.value = frequency;
  oscillator.connect(gainNode);
  gainNode.gain.value = volume;
  gainNode.connect(tunerAudioContext.destination);
  oscillator.start();
}