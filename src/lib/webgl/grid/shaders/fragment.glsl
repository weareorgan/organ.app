uniform float uTime;
uniform vec4 uResolution;

varying vec2 vUv;
varying vec3 vPosition;

void main() {

     vec2 uv = (2.*gl_FragCoord.xy-uResolution.xy)/uResolution.y;

    
    float d = 1./abs(uv.y); //depth
    vec2 pv = vec2(uv.x*d, d); //perspective
    pv.y += uTime; //offset
    pv *= 2.; //scale
    

    // my anti-aliasing attempt
    pv = abs((fract(pv)-.5)*2.); //grid vector
    float b = 10./uResolution.y*d; //blur
    float t = .02; //thickness
    float g = 1.-smoothstep(t-b,t+b,pv.x)*smoothstep(t-b,t+b,pv.y); //grid
    
    vec3 backgroundSmooth = smoothstep(0., 1.,vec3(g/d));
    vec3 foregroundSmooth = (1. - smoothstep(0.1, 1., vec3(g/d))) * 0.5;
    
    vec3 col = 1. - backgroundSmooth * foregroundSmooth;
   

    gl_FragColor = vec4(col,1.);
}