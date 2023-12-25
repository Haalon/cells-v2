#version 300 es

precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
uniform vec2 u_offset;
uniform float u_scale;

out vec4 fragColor;


void main() {
    // gl_FragCoord.xy / u_scale  -  scales down canvas pixel to cell states
    // + u_offset  -  shifts in state coordinates
    // / screenSize  -  maps to viewPort
    fragColor =  texture(state, (gl_FragCoord.xy / u_scale + u_offset) / screenSize);
}