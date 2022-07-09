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