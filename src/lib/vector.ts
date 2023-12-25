export type Vec = [number, number];

export function sub(a: Vec, b: Vec): Vec {
  return [a[0] - b[0], a[1] - b[1]];
}

export function add(a: Vec, b: Vec): Vec {
  return [a[0] + b[0], a[1] + b[1]];
}

export function scale(mult: number, a: Vec): Vec {
  return [a[0] * mult, a[1] * mult];
}

export function div(mult: number, a: Vec): Vec {
  return [a[0] / mult, a[1] / mult];
}

export function dot(a: Vec, b: Vec): number {
  return a[0] * b[0] + a[1] * b[1];
}

export function magnitude(a: Vec): number {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}

export function magnitude2(a: Vec): number {
  return a[0] * a[0] + a[1] * a[1];
}

export function normalize(a: Vec): Vec {
  return div(magnitude(a), a);
}

export function project(a: Vec, b: Vec): number {
  const normB = normalize(b);
  return dot(normB, a);
}

export const mod = (n: number, m: number) => ((n % m) + m) % m;

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function modByNum(a: Vec, n: number): Vec {
  return [mod(a[0], n), mod(a[1], n)];
}

export function modByVec(a: Vec, b: Vec): Vec {
  return [mod(a[0], b[0]), mod(a[1], b[1])];
}
