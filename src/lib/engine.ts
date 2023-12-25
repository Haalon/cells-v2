import { Buffer, Framebuffer, Igloo, Program, Texture } from "ts-igloo";
import { add, div, modByVec, scale, sub, type Vec } from "./vector";

import copyFrag from "../glsl/copy.frag";
import copyVert from "../glsl/copy.vert";
import drawFrag from "../glsl/draw.frag";
import histFrag from "../glsl/hist.frag";

export class Engine {
  screenSize: Vec;
  stateSize: Vec;

  Igloo: Igloo;
  canvas: HTMLCanvasElement;
  gl: WebGL2RenderingContext;

  buffer: Buffer;
  frameBuffer: Framebuffer;

  program_copy: Program;
  program_hist: Program;
  program_rule: Program;
  program_draw: Program;

  tex_curr: Texture;
  tex_temp: Texture;
  tex_hist: Texture;

  counter: number = 0;

  scale = 1;
  offset: Vec = [0, 0];

  constructor(screenSize: Vec, canvas: HTMLCanvasElement, stateSize: Vec) {
    this.screenSize = screenSize;
    this.stateSize = stateSize;

    this.canvas = canvas;
    this.Igloo = new Igloo(canvas);
    const gl = (this.gl = this.Igloo.gl as WebGL2RenderingContext);

    this.buffer = this.Igloo.array(Igloo.QUAD2);

    this.program_copy = this.Igloo.program(copyVert, copyFrag);
    this.program_hist = this.Igloo.program(copyVert, histFrag);
    this.program_rule = this.Igloo.program(copyVert, copyFrag);
    this.program_draw = this.Igloo.program(copyVert, drawFrag);

    this.frameBuffer = this.Igloo.framebuffer(null!);

    this.tex_temp = this.Igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST, gl.UNSIGNED_BYTE, gl.RGBA, {}).blank(
      this.stateSize[0],
      this.stateSize[1]
    );
    this.tex_curr = this.Igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST, gl.UNSIGNED_BYTE, gl.RGBA, {}).blank(
      this.stateSize[0],
      this.stateSize[1]
    );
    this.tex_hist = this.Igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST, gl.UNSIGNED_BYTE, gl.RGBA, {}).blank(
      this.stateSize[0],
      this.stateSize[1]
    );
  }

  set(state: Uint8Array) {
    this.counter = 0;
    const gl = this.gl;
    const rgba = new Uint8Array(this.stateSize[0] * this.stateSize[1] * 4);
    for (let i = 0; i < state.length; i++) {
      const ii = i * 4;
      rgba[ii + 0] = rgba[ii + 1] = rgba[ii + 2] = state[i] ? 255 : 0;
      rgba[ii + 3] = 255;
    }
    this.tex_curr.subset(rgba, 0, 0, this.stateSize[0], this.stateSize[1]);
    this.tex_hist.subset(rgba, 0, 0, this.stateSize[0], this.stateSize[1]);
    return this;
  }

  setRandom(p: number = 0.4) {
    const size = this.stateSize[0] * this.stateSize[1];

    const rand = new Uint8Array(size);
    for (let i = 0; i < size; i++) {
      rand[i] = Math.random() < p ? 1 : 0;
    }
    this.set(rand);
    return this;
  }

  setRule(ruleSrc: string) {
    let prog: Program;
    try {
      prog = this.Igloo.program(copyVert, ruleSrc);
    } catch (error: any) {
      alert("compilation error:\n" + error.toString());
      return;
    }

    this.program_rule = prog;
  }

  setScreenSize(size: Vec) {
    this.screenSize = size;
  }

  setStateSize(size: Vec) {
    this.stateSize = size;
    const gl = this.gl;

    this.tex_temp = this.Igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST, gl.UNSIGNED_BYTE, gl.RGBA, {}).blank(
      this.stateSize[0],
      this.stateSize[1]
    );
    this.tex_curr = this.Igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST, gl.UNSIGNED_BYTE, gl.RGBA, {}).blank(
      this.stateSize[0],
      this.stateSize[1]
    );
    this.tex_hist = this.Igloo.texture(null, gl.RGBA, gl.REPEAT, gl.NEAREST, gl.UNSIGNED_BYTE, gl.RGBA, {}).blank(
      this.stateSize[0],
      this.stateSize[1]
    );
  }

  _swap() {
    const tmp = this.tex_curr;
    this.tex_curr = this.tex_temp;
    this.tex_temp = tmp;
    return this;
  }

  next() {
    var gl = this.gl;
    this.frameBuffer.attach(this.tex_temp);
    this.tex_curr.bind(0);
    gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
    this.program_rule
      .use()
      .attrib("a_position", this.buffer, 2, 0)
      .uniformi("state", 0)
      .uniform("screenSize", this.stateSize)
      .draw(gl.TRIANGLE_STRIP, 4);
    this._swap();
    this.counter += 1;

    return this;
  }

  display(history?: boolean) {
    const gl = this.gl;

    if (history) {
      this.frameBuffer.attach(this.tex_temp);
      this.tex_curr.bind(0);
      this.tex_hist.bind(1);
      gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
      this.program_hist
        .use()
        .attrib("a_position", this.buffer, 2, 0)
        .uniformi("state", 0)
        .uniformi("hist", 1)
        .uniform("u_scale", 1.0)
        .uniform("u_offset", [0, 0])
        .uniform("screenSize", this.stateSize)
        .draw(gl.TRIANGLE_STRIP, 4);
      this.tex_hist.copy(0, 0, this.stateSize[0], this.stateSize[1]);
    }

    this.Igloo.defaultFramebuffer.bind();
    if (history) this.tex_hist.bind(0);
    else this.tex_curr.bind(0);

    gl.viewport(0, 0, this.screenSize[0], this.screenSize[1]);
    this.program_copy
      .use()
      .attrib("a_position", this.buffer, 2, 0)
      .uniformi("state", 0)
      .uniform("u_scale", this.scale)
      .uniform("u_offset", this.offset)
      .uniform("screenSize", this.stateSize)
      .draw(gl.TRIANGLE_STRIP, 4);
    return this;
  }

  getWorldPositionFromEvent(event: MouseEvent): Vec {
    const rect = this.canvas.getBoundingClientRect();
    return [event.pageX - rect.left, this.canvas.height - (event.pageY - rect.top)];
  }

  getStatePos(pos: Vec): Vec {
    return modByVec(add(div(this.scale, pos), this.offset), this.stateSize);
  }

  shiftBy(delta: Vec) {
    delta = modByVec(div(this.scale, delta), this.stateSize);

    this.offset[0] += delta[0];
    this.offset[1] += delta[1];

    this.offset = modByVec(this.offset, this.stateSize);
  }

  zoomAt(origin: Vec, scale: number) {
    const oldStatePos = this.getStatePos(origin);
    this.scale = scale;
    const newStatePos = this.getStatePos(origin);

    // offset so the zoom's origin matches the mouse location
    this.offset[0] += oldStatePos[0] - newStatePos[0];
    this.offset[1] += oldStatePos[1] - newStatePos[1];
  }

  drawPoint({
    position,
    value,
    radius,
    mode,
  }: {
    position: Vec;

    value: boolean;
    radius: number;
    mode: number;
  }) {
    position = this.getStatePos(position);
    this.#drawLine({ origin: position, end: position, value, radius, mode });
  }

  drawLine({
    origin,
    end,
    value,
    radius,
    mode,
  }: {
    origin: Vec;
    end: Vec;
    value: boolean;
    radius: number;
    mode: number;
  }) {
    // translate origin into state space
    // apply same translation to end => end may be out of the state space
    const a = this.getStatePos(origin);

    const delta = div(this.scale, sub(end, origin));

    // we have a segment  a  + (b-a) * t (where t is in [0,1])
    // it starts in state space but may go out of borders several times over (intersect grid many times)
    // we want to split this segments by grid borders, draw resulting sub-segments as if they are in state space

    // const delta = sub(b, a);
    const lineStateCoords = (t: number): Vec => modByVec(add(a, scale(t, delta)), this.stateSize);

    let barrier_x = delta[0] > 0 ? this.stateSize[0] : delta[0] === 0 ? Infinity : 0;
    let barrier_y = delta[1] > 0 ? this.stateSize[1] : delta[1] === 0 ? Infinity : 0;

    const barrier_delta_x = delta[0] > 0 ? this.stateSize[0] : -this.stateSize[0];
    const barrier_delta_y = delta[1] > 0 ? this.stateSize[1] : -this.stateSize[1];

    let t = 0;
    origin = a;

    // separately solving for tx ty in:
    // a_x + (b_x-a_x) * tx = barrier_x
    // a_y + (b_y-a_y) * ty = barrier_y

    // lower of these 2 values is the first intersection
    const eps = 0.005;
    while (t < 1) {
      const tx = Math.min((barrier_x - a[0]) / delta[0], 1);
      const ty = Math.min((barrier_y - a[1]) / delta[1], 1);

      if (tx <= ty) {
        barrier_x += barrier_delta_x;
        t = tx;
      }

      if (ty <= tx) {
        barrier_y += barrier_delta_y;
        t = ty;
      }

      end = lineStateCoords(t - eps);
      this.#drawLine({ origin, end, value, radius, mode });
      origin = lineStateCoords(t + eps);
    }

    return this;
  }

  #drawLine({
    origin,
    end,
    value,
    radius,
    mode,
  }: {
    origin: Vec;
    end: Vec;
    value: boolean;
    radius: number;
    mode: number;
  }) {
    var gl = this.Igloo.gl;
    this.frameBuffer.attach(this.tex_temp);
    this.tex_curr.bind(0);
    gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
    this.program_draw
      .use()
      .attrib("a_position", this.buffer, 2, 0)
      .uniformi("state", 0)
      .uniform("screenSize", this.stateSize)
      .uniform("u_org", origin)
      .uniform("u_end", end)
      .uniform("u_val", Number(value))
      .uniform("u_rad", radius)
      .uniformi("u_mode", mode)
      .draw(gl.TRIANGLE_STRIP, 4);

    this._swap();

    this.frameBuffer.attach(this.tex_temp);
    this.tex_hist.bind(0);
    gl.viewport(0, 0, this.stateSize[0], this.stateSize[1]);
    this.program_draw
      .use()
      .attrib("a_position", this.buffer, 2, 0)
      .uniformi("state", 0)
      .uniform("screenSize", this.stateSize)
      .uniform("u_org", origin)
      .uniform("u_end", end)
      .uniform("u_val", Number(value))
      .uniform("u_rad", radius)
      .uniformi("u_mode", mode)
      .draw(gl.TRIANGLE_STRIP, 4);

    var tmp = this.tex_hist;
    this.tex_hist = this.tex_temp;
    this.tex_temp = tmp;
  }
}
