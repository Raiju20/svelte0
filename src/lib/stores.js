import { writable } from 'svelte/store';

export const count = writable(Array.from({ length: 10 }, (_, i) => i + 1));