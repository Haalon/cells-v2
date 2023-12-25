#version 300 es
precision mediump float;
out vec4 fragColor;

uniform sampler2D state;
uniform vec2 screenSize;

int get(vec2 offset) {
    return int(texture(state, (gl_FragCoord.xy + offset) / screenSize).r);
}

void main() {
    int sum =
        get(vec2(-1.0, 0.0)) +
        get(vec2(-2.0, 0.0)) +
        get(vec2(-3.0, 0.0)) +
        get(vec2(1.0, 0.0)) +
        get(vec2(2.0, 0.0)) +
        get(vec2(3.0, 0.0)) +
        get(vec2(0.0, 1.0)) +
        get(vec2(0.0, 2.0)) +
        get(vec2(0.0, 3.0)) +
        get(vec2(0.0, -1.0)) +
        get(vec2(0.0, -2.0)) +
        get(vec2(0.0, -3.0));
    float current = float(get(vec2(0.0, 0.0)));
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    if (current == 1.0 && (sum > 5 || sum == 3)) {
        fragColor = vec4(1.0, 1.0, 1.0, 1.0);        
    }

    if (current == 0.0 && (sum > 7 || sum == 2)) {
        fragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }        
}