export function beat(velocity: number) {
  const audioCtx = new AudioContext();
  const oscillator = audioCtx.createOscillator();
  oscillator.frequency.value = 220;
  oscillator.connect(audioCtx.destination);
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, velocity);
}