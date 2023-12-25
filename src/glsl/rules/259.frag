precision mediump float;
uniform sampler2D state;
uniform vec2 screenSize;
float cv(float fx,float fy){
    vec2 v=vec2(fx,fy);
    float o=texture2D(state,(gl_FragCoord.xy+v)/screenSize).r;
    if(o>0.0){
        return 1.0;
    }else{
        return 0.0;
    }
}
void main(){
    float outval=cv(0.0,0.0);
    float nhd0=cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-7.0,-9.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,9.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-2.0,-11.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0);
    float nhd1=cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,11.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(2.0,-11.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(5.0,-10.0)+cv(5.0,-5.0);
    float nhd2=cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,10.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(7.0,-9.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(9.0,-7.0)+cv(9.0,-6.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0);
    float fin_0=nhd0+nhd1+nhd2;
    if(fin_0<=32.0){
        outval=0.0;
    }
    if(fin_0>=87.0&&fin_0<=133.0){
        outval=1.0;
    }
    if(fin_0>=54.0&&fin_0<=62.0){
        outval=0.0;
    }
    if(fin_0>=32.0&&fin_0<=32.0){
        outval=1.0;
    }
    if(fin_0>=11.0&&fin_0<=11.0){
        outval=1.0;
    }
    if(fin_0>=134.0){
        outval=0.0;
    }
    gl_FragColor=vec4(outval,outval,outval,1.0);
}
