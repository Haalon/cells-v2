import { derived, writable } from "svelte/store";
import { rules } from "./lib/rules";
import type { Vec } from "./lib/vector";

export const scale = writable(1);
export const offset = writable([0, 0]);

export const history = writable(true);
export const paused = writable(false);

export const density = writable(0.4);
export const src = writable("");

// drawing
export const radius = writable(50);
export const mode = writable(2);

export const stateSize = writable<Vec>([1024, 1024]);
