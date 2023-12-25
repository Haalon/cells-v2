#version 300 es

precision mediump float;
uniform sampler2D state;
uniform sampler2D hist;
uniform vec2 screenSize;
uniform vec2 u_offset;
uniform float u_scale;

out vec4 fragColor;


float get(float fx,float fy){
    vec2 offset=vec2(fx,fy);
    return texture(state, (gl_FragCoord.xy / u_scale + u_offset + offset) / screenSize).r;
}

float get_old(float fx,float fy){
    vec2 offset=vec2(fx,fy);
    return texture(hist, (gl_FragCoord.xy / u_scale + u_offset + offset) / screenSize).r;
}

void main() {   
        
    float col = get(0.0,0.0);   

    float old_col = get_old(0.0,0.0);
    old_col = old_col > 0.7 ? old_col * 0.95 : old_col - 0.01;
    col = max(col, old_col);
    

    fragColor =  vec4(col,col,col,1.0);

    // vec2 floor_FragCoord = floor(gl_FragCoord.xy);
    // if (floor_FragCoord.x == 0.0 || floor_FragCoord.y == 0.0 ) fragColor = vec4(1.0, 0.0, 0.0, 1.0);
}