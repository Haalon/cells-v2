#version 300 es
precision mediump float;
out vec4 fragColor;
uniform sampler2D state;
uniform vec2 screenSize;
float cv(float fx,float fy){
    vec2 v=vec2(fx,fy);
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;
    if(o>0.0){
        return 1.0;
    }else{
        return 0.0;
    }
}
void main(){
    float outval=cv(0.0,0.0);
    float nhd0=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);
    float fin_0=nhd0;
    if(fin_0>=14.0&&fin_0<=17.0){
        outval=1.0;
    }
    if(fin_0>=9.0&&fin_0<=9.0){
        outval=1.0;
    }
    if(fin_0>=18.0){
        outval=0.0;
    }
    if(fin_0>=0.0&&fin_0<=4.0){
        outval=0.0;
    }
    if(fin_0>=7.0&&fin_0<=8.0){
        outval=0.0;
    }
    if(fin_0==9.0){
        outval=1.0;
    }
    float nhd1=cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,0.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,3.0)+cv(-1.0,-4.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,4.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(1.0,-4.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,4.0)+cv(2.0,-3.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,0.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0);
    float fin_1=nhd1;
    if(fin_1>=13.0&&fin_1<=18.0){
        outval=0.0;
    }
    if(fin_1>=5.0&&fin_1<=5.0){
        outval=1.0;
    }
    fragColor=vec4(outval,outval,outval,1.0);
}
