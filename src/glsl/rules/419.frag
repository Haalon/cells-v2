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
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);
    float nhd1=cv(-20.0,-2.0)+cv(-20.0,-1.0)+cv(-20.0,0.0)+cv(-20.0,1.0)+cv(-20.0,2.0)+cv(-19.0,-5.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,5.0)+cv(-18.0,-8.0)+cv(-18.0,-7.0)+cv(-18.0,-6.0)+cv(-18.0,6.0)+cv(-18.0,7.0)+cv(-18.0,8.0)+cv(-17.0,-10.0)+cv(-17.0,-9.0)+cv(-17.0,9.0)+cv(-17.0,10.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-13.0)+cv(-15.0,-2.0)+cv(-15.0,-1.0)+cv(-15.0,0.0)+cv(-15.0,1.0)+cv(-15.0,2.0)+cv(-15.0,13.0)+cv(-14.0,-14.0)+cv(-14.0,-5.0)+cv(-14.0,-4.0)+cv(-14.0,-3.0)+cv(-14.0,3.0)+cv(-14.0,4.0)+cv(-14.0,5.0)+cv(-14.0,14.0)+cv(-13.0,-15.0)+cv(-13.0,-7.0)+cv(-13.0,-6.0)+cv(-13.0,6.0)+cv(-13.0,7.0)+cv(-13.0,15.0)+cv(-12.0,-16.0)+cv(-12.0,-9.0)+cv(-12.0,-8.0)+cv(-12.0,8.0)+cv(-12.0,9.0)+cv(-12.0,16.0)+cv(-11.0,-16.0)+cv(-11.0,-10.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,10.0)+cv(-11.0,16.0)+cv(-10.0,-17.0)+cv(-10.0,-11.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,-2.0)+cv(-10.0,2.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-10.0,11.0)+cv(-10.0,17.0)+cv(-9.0,-17.0)+cv(-9.0,-12.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,-5.0)+cv(-9.0,5.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-9.0,12.0)+cv(-9.0,17.0)+cv(-8.0,-18.0)+cv(-8.0,-12.0)+cv(-8.0,-8.0)+cv(-8.0,-7.0)+cv(-8.0,7.0)+cv(-8.0,8.0)+cv(-8.0,12.0)+cv(-8.0,18.0)+cv(-7.0,-18.0)+cv(-7.0,-13.0)+cv(-7.0,-9.0)+cv(-7.0,-8.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,8.0)+cv(-7.0,9.0)+cv(-7.0,13.0)+cv(-7.0,18.0)+cv(-6.0,-18.0)+cv(-6.0,-13.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-6.0,13.0)+cv(-6.0,18.0)+cv(-5.0,-19.0)+cv(-5.0,-14.0)+cv(-5.0,-10.0)+cv(-5.0,-9.0)+cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,9.0)+cv(-5.0,10.0)+cv(-5.0,14.0)+cv(-5.0,19.0)+cv(-4.0,-19.0)+cv(-4.0,-14.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-4.0,14.0)+cv(-4.0,19.0)+cv(-3.0,-19.0)+cv(-3.0,-14.0)+cv(-3.0,-11.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-3.0,11.0)+cv(-3.0,14.0)+cv(-3.0,19.0)+cv(-2.0,-20.0)+cv(-2.0,-15.0)+cv(-2.0,-11.0)+cv(-2.0,-10.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,10.0)+cv(-2.0,11.0)+cv(-2.0,15.0)+cv(-2.0,20.0)+cv(-1.0,-20.0)+cv(-1.0,-15.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,15.0)+cv(-1.0,20.0)+cv(0.0,-20.0)+cv(0.0,-15.0)+cv(0.0,-11.0)+cv(0.0,-7.0);
    float nhd2=cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,15.0)+cv(0.0,20.0)+cv(1.0,-20.0)+cv(1.0,-15.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,15.0)+cv(1.0,20.0)+cv(2.0,-20.0)+cv(2.0,-15.0)+cv(2.0,-11.0)+cv(2.0,-10.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,10.0)+cv(2.0,11.0)+cv(2.0,15.0)+cv(2.0,20.0)+cv(3.0,-19.0)+cv(3.0,-14.0)+cv(3.0,-11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(3.0,11.0)+cv(3.0,14.0)+cv(3.0,19.0)+cv(4.0,-19.0)+cv(4.0,-14.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(4.0,14.0)+cv(4.0,19.0)+cv(5.0,-19.0)+cv(5.0,-14.0)+cv(5.0,-10.0)+cv(5.0,-9.0)+cv(5.0,-5.0)+cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,9.0)+cv(5.0,10.0)+cv(5.0,14.0)+cv(5.0,19.0)+cv(6.0,-18.0)+cv(6.0,-13.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(6.0,13.0)+cv(6.0,18.0)+cv(7.0,-18.0)+cv(7.0,-13.0)+cv(7.0,-9.0)+cv(7.0,-8.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,8.0)+cv(7.0,9.0)+cv(7.0,13.0)+cv(7.0,18.0)+cv(8.0,-18.0)+cv(8.0,-12.0)+cv(8.0,-8.0)+cv(8.0,-7.0)+cv(8.0,7.0)+cv(8.0,8.0)+cv(8.0,12.0)+cv(8.0,18.0)+cv(9.0,-17.0)+cv(9.0,-12.0)+cv(9.0,-7.0)+cv(9.0,-6.0)+cv(9.0,-5.0)+cv(9.0,5.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(9.0,12.0)+cv(9.0,17.0)+cv(10.0,-17.0)+cv(10.0,-11.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,-2.0)+cv(10.0,2.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(10.0,11.0)+cv(10.0,17.0)+cv(11.0,-16.0)+cv(11.0,-10.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,10.0)+cv(11.0,16.0)+cv(12.0,-16.0)+cv(12.0,-9.0)+cv(12.0,-8.0)+cv(12.0,8.0)+cv(12.0,9.0)+cv(12.0,16.0)+cv(13.0,-15.0)+cv(13.0,-7.0)+cv(13.0,-6.0)+cv(13.0,6.0)+cv(13.0,7.0)+cv(13.0,15.0)+cv(14.0,-14.0)+cv(14.0,-5.0)+cv(14.0,-4.0)+cv(14.0,-3.0)+cv(14.0,3.0)+cv(14.0,4.0)+cv(14.0,5.0)+cv(14.0,14.0)+cv(15.0,-13.0)+cv(15.0,-2.0)+cv(15.0,-1.0)+cv(15.0,0.0)+cv(15.0,1.0)+cv(15.0,2.0)+cv(15.0,13.0)+cv(16.0,-12.0)+cv(16.0,-11.0)+cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-10.0)+cv(17.0,-9.0)+cv(17.0,9.0)+cv(17.0,10.0)+cv(18.0,-8.0)+cv(18.0,-7.0)+cv(18.0,-6.0)+cv(18.0,6.0)+cv(18.0,7.0)+cv(18.0,8.0)+cv(19.0,-5.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,5.0)+cv(20.0,-2.0)+cv(20.0,-1.0)+cv(20.0,0.0)+cv(20.0,1.0)+cv(20.0,2.0);
    float fin_0=nhd0;
    float fin_1=nhd1+nhd2;
    if(fin_0>=28.0&&fin_0<=35.0){
        outval=1.0;
    }
    if(fin_0<=25.0){
        outval=0.0;
    }
    if(fin_0>=41.0&&fin_0<=46.0){
        outval=0.0;
    }
    if(fin_1>=290.0){
        outval=0.0;
    }
    if(fin_1>=180.0&&fin_1<=280.0){
        outval=1.0;
    }
    if(fin_1>=210.0&&fin_1<=270.0){
        outval=1.0;
    }
    if(fin_1>=230.0&&fin_1<=250.0){
        outval=1.0;
    }
    if(fin_1>=240.0&&fin_1<=243.0){
        outval=1.0;
    }
    if(fin_1==89.0){
        outval=1.0;
    }
    if(fin_1>=69.0&&fin_1<=74.0){
        outval=1.0;
    }
    if(fin_1>=310.0){
        outval=0.0;
    }
    gl_FragColor=vec4(outval,outval,outval,1.0);
}
