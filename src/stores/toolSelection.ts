import { writable } from 'svelte/store';

export enum ToolSelection {
  Metronome = 'METRONOME',
  Tuner = 'TUNER'
};

export const toolSelection = writable<ToolSelection>(ToolSelection.Tuner);
