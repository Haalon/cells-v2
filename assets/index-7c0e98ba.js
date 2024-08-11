var _1=Object.defineProperty;var g1=(v,c,n)=>c in v?_1(v,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):v[c]=n;var t0=(v,c,n)=>(g1(v,typeof c!="symbol"?c+"":c,n),n),m1=(v,c,n)=>{if(!c.has(v))throw TypeError("Cannot "+n)};var Ev=(v,c,n)=>{if(c.has(v))throw TypeError("Cannot add the same private member more than once");c instanceof WeakSet?c.add(v):c.set(v,n)};var Gc=(v,c,n)=>(m1(v,c,"access private method"),n);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();function m0(){}function X(v,c){for(const n in c)v[n]=c[n];return v}function $v(v){return v()}function Tv(){return Object.create(null)}function k0(v){v.forEach($v)}function Dc(v){return typeof v=="function"}function i0(v,c){return v!=v?c==c:v!==c||v&&typeof v=="object"||typeof v=="function"}function p1(v){return Object.keys(v).length===0}function c1(v,...c){if(v==null){for(const e of c)e(void 0);return m0}const n=v.subscribe(...c);return n.unsubscribe?()=>n.unsubscribe():n}function Av(v){let c;return c1(v,n=>c=n)(),c}function g0(v,c,n){v.$$.on_destroy.push(c1(c,n))}function a0(v,c,n,e){if(v){const r=v1(v,c,n,e);return v[0](r)}}function v1(v,c,n,e){return v[1]&&e?X(n.ctx.slice(),v[1](e(c))):n.ctx}function f0(v,c,n,e){if(v[2]&&e){const r=v[2](e(n));if(c.dirty===void 0)return r;if(typeof r=="object"){const t=[],o=Math.max(c.dirty.length,r.length);for(let i=0;i<o;i+=1)t[i]=c.dirty[i]|r[i];return t}return c.dirty|r}return c.dirty}function s0(v,c,n,e,r,t){if(r){const o=v1(c,n,e,t);v.p(o,r)}}function u0(v){if(v.ctx.length>32){const c=[],n=v.ctx.length/32;for(let e=0;e<n;e++)c[e]=-1;return c}return-1}function v0(v){const c={};for(const n in v)n[0]!=="$"&&(c[n]=v[n]);return c}function o0(v,c){const n={};c=new Set(c);for(const e in v)!c.has(e)&&e[0]!=="$"&&(n[e]=v[e]);return n}function n1(v){const c={};for(const n in v)c[n]=!0;return c}function p0(v,c,n){return v.set(n),c}function ec(v){return v&&Dc(v.destroy)?v.destroy:m0}function b(v,c){v.appendChild(c)}function C(v,c,n){v.insertBefore(c,n||null)}function w(v){v.parentNode&&v.parentNode.removeChild(v)}function e1(v,c){for(let n=0;n<v.length;n+=1)v[n]&&v[n].d(c)}function R(v){return document.createElement(v)}function O(v){return document.createTextNode(v)}function I(){return O(" ")}function A0(){return O("")}function y(v,c,n,e){return v.addEventListener(c,n,e),()=>v.removeEventListener(c,n,e)}function b1(v){return function(c){return c.preventDefault(),v.call(this,c)}}function H(v,c,n){n==null?v.removeAttribute(c):v.getAttribute(c)!==n&&v.setAttribute(c,n)}const y1=["width","height"];function r0(v,c){const n=Object.getOwnPropertyDescriptors(v.__proto__);for(const e in c)c[e]==null?v.removeAttribute(e):e==="style"?v.style.cssText=c[e]:e==="__value"?v.value=v[e]=c[e]:n[e]&&n[e].set&&y1.indexOf(e)===-1?v[e]=c[e]:H(v,e,c[e])}function k1(v,c){Object.keys(c).forEach(n=>{w1(v,n,c[n])})}function w1(v,c,n){const e=c.toLowerCase();e in v?v[e]=typeof v[e]=="boolean"&&n===""?!0:n:c in v?v[c]=typeof v[c]=="boolean"&&n===""?!0:n:H(v,c,n)}function Ac(v){return/-/.test(v)?k1:r0}function C1(v){let c;return{p(...n){c=n,c.forEach(e=>v.push(e))},r(){c.forEach(n=>v.splice(v.indexOf(n),1))}}}function x1(v){return v===""?null:+v}function S1(v){return Array.from(v.childNodes)}function Z0(v,c){c=""+c,v.data!==c&&(v.data=c)}function L0(v,c){v.value=c??""}function Uc(v,c,n,e){n==null?v.style.removeProperty(c):v.style.setProperty(c,n,e?"important":"")}function kc(v,c,n){for(let e=0;e<v.options.length;e+=1){const r=v.options[e];if(r.__value===c){r.selected=!0;return}}(!n||c!==void 0)&&(v.selectedIndex=-1)}function Rv(v,c){for(let n=0;n<v.options.length;n+=1){const e=v.options[n];e.selected=~c.indexOf(e.__value)}}function z1(v){const c=v.querySelector(":checked");return c&&c.__value}let pc;function dc(v){pc=v}function Jc(){if(!pc)throw new Error("Function called outside component initialization");return pc}function E1(v){Jc().$$.on_mount.push(v)}function r1(v,c){return Jc().$$.context.set(v,c),c}function Pc(v){return Jc().$$.context.get(v)}function z(v,c){const n=v.$$.callbacks[c.type];n&&n.slice().forEach(e=>e.call(this,c))}const cc=[],C0=[];let vc=[];const Hc=[],T1=Promise.resolve();let Vc=!1;function A1(){Vc||(Vc=!0,T1.then(t1))}function Rc(v){vc.push(v)}function D0(v){Hc.push(v)}const Oc=new Set;let J0=0;function t1(){if(J0!==0)return;const v=pc;do{try{for(;J0<cc.length;){const c=cc[J0];J0++,dc(c),R1(c.$$)}}catch(c){throw cc.length=0,J0=0,c}for(dc(null),cc.length=0,J0=0;C0.length;)C0.pop()();for(let c=0;c<vc.length;c+=1){const n=vc[c];Oc.has(n)||(Oc.add(n),n())}vc.length=0}while(cc.length);for(;Hc.length;)Hc.pop()();Vc=!1,Oc.clear(),dc(v)}function R1(v){if(v.fragment!==null){v.update(),k0(v.before_update);const c=v.dirty;v.dirty=[-1],v.fragment&&v.fragment.p(v.ctx,c),v.after_update.forEach(Rc)}}function F1(v){const c=[],n=[];vc.forEach(e=>v.indexOf(e)===-1?c.push(e):n.push(e)),n.forEach(e=>e()),vc=c}const Sc=new Set;let K0;function B0(){K0={r:0,c:[],p:K0}}function G0(){K0.r||k0(K0.c),K0=K0.p}function k(v,c){v&&v.i&&(Sc.delete(v),v.i(c))}function x(v,c,n,e){if(v&&v.o){if(Sc.has(v))return;Sc.add(v),K0.c.push(()=>{Sc.delete(v),e&&(n&&v.d(1),e())}),v.o(c)}else e&&e()}function qc(v){return(v==null?void 0:v.length)!==void 0?v:Array.from(v)}function S0(v,c){const n={},e={},r={$$scope:1};let t=v.length;for(;t--;){const o=v[t],i=c[t];if(i){for(const l in o)l in i||(e[l]=1);for(const l in i)r[l]||(n[l]=i[l],r[l]=1);v[t]=i}else for(const l in o)r[l]=1}for(const o in e)o in n||(n[o]=void 0);return n}function P0(v,c,n){const e=v.$$.props[c];e!==void 0&&(v.$$.bound[e]=n,n(v.$$.ctx[e]))}function U(v){v&&v.c()}function B(v,c,n){const{fragment:e,after_update:r}=v.$$;e&&e.m(c,n),Rc(()=>{const t=v.$$.on_mount.map($v).filter(Dc);v.$$.on_destroy?v.$$.on_destroy.push(...t):k0(t),v.$$.on_mount=[]}),r.forEach(Rc)}function G(v,c){const n=v.$$;n.fragment!==null&&(F1(n.after_update),k0(n.on_destroy),n.fragment&&n.fragment.d(c),n.on_destroy=n.fragment=null,n.ctx=[])}function D1(v,c){v.$$.dirty[0]===-1&&(cc.push(v),A1(),v.$$.dirty.fill(0)),v.$$.dirty[c/31|0]|=1<<c%31}function b0(v,c,n,e,r,t,o=null,i=[-1]){const l=pc;dc(v);const a=v.$$={fragment:null,ctx:[],props:t,update:m0,not_equal:r,bound:Tv(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(l?l.$$.context:[])),callbacks:Tv(),dirty:i,skip_bound:!1,root:c.target||l.$$.root};o&&o(a.root);let f=!1;if(a.ctx=n?n(v,c.props||{},(s,u,...d)=>{const _=d.length?d[0]:u;return a.ctx&&r(a.ctx[s],a.ctx[s]=_)&&(!a.skip_bound&&a.bound[s]&&a.bound[s](_),f&&D1(v,s)),u}):[],a.update(),f=!0,k0(a.before_update),a.fragment=e?e(a.ctx):!1,c.target){if(c.hydrate){const s=S1(c.target);a.fragment&&a.fragment.l(s),s.forEach(w)}else a.fragment&&a.fragment.c();c.intro&&k(v.$$.fragment),B(v,c.target,c.anchor),t1()}dc(l)}class y0{constructor(){t0(this,"$$");t0(this,"$$set")}$destroy(){G(this,1),this.$destroy=m0}$on(c,n){if(!Dc(n))return m0;const e=this.$$.callbacks[c]||(this.$$.callbacks[c]=[]);return e.push(n),()=>{const r=e.indexOf(n);r!==-1&&e.splice(r,1)}}$set(c){this.$$set&&!p1(c)&&(this.$$.skip_bound=!0,this.$$set(c),this.$$.skip_bound=!1)}}const P1="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(P1);const I1=300,$c="none";function M1(v){return Array.isArray(v)?v:[v]}function ic(v,c,n){return v.addEventListener(c,n),()=>v.removeEventListener(c,n)}function N1(v,c){const n=v.getBoundingClientRect(),e=Math.abs(c[0].clientX-c[1].clientX),r=Math.abs(c[0].clientY-c[1].clientY),t=Math.min(c[0].clientX,c[1].clientX),o=Math.min(c[0].clientY,c[1].clientY),i=t+e/2,l=o+r/2,a=Math.round(i-n.left),f=Math.round(l-n.top);return{x:a,y:f}}function L1(v,c){return c.filter(n=>v.pointerId!==n.pointerId)}function wc(v,c,n,e,r){const t=v.getBoundingClientRect(),o=Math.round(n.clientX-t.left),i=Math.round(n.clientY-t.top);v.dispatchEvent(new CustomEvent(`${c}${r}`,{detail:{event:n,pointersCount:e.length,target:n.target,x:o,y:i}}))}function o1(v,c,n,e,r,t=$c){c.style.touchAction=M1(t).join(" ");let o=[];function i(a){o.push(a),wc(c,v,a,o,"down"),e==null||e(o,a);const f=a.pointerId;function s(p){f===p.pointerId&&(o=L1(p,o),o.length||u(),wc(c,v,p,o,"up"),r==null||r(o,p))}function u(){d(),_(),m(),h()}const d=ic(c,"pointermove",p=>{o=o.map(S=>p.pointerId===S.pointerId?p:S),wc(c,v,p,o,"move"),n==null||n(o,p)}),_=ic(c,"lostpointercapture",p=>{s(p)}),m=ic(c,"pointerup",p=>{s(p)}),h=ic(c,"pointerleave",p=>{o=[],u(),wc(c,v,p,o,"up"),r==null||r(o,p)})}const l=ic(c,"pointerdown",i);return{destroy:()=>{l()}}}function B1(v,c){let n={delay:I1,composed:!1,touchAction:$c,...c};const e="pan";let r,t;function o(l,a){r=Date.now(),t=a.target}function i(l,a){if(l.length===1&&Date.now()-r>n.delay){const f=v.getBoundingClientRect(),s=Math.round(a.clientX-f.left),u=Math.round(a.clientY-f.top);s>=0&&u>=0&&s<=f.width&&u<=f.height&&v.dispatchEvent(new CustomEvent(e,{detail:{x:s,y:u,target:t}}))}return!1}return n.composed?{onMove:i,onDown:o,onUp:null}:{...o1(e,v,i,o,null,n.touchAction),update:l=>{n={...n,...l}}}}function Fv(v){return Math.hypot(v[0].clientX-v[1].clientX,v[0].clientY-v[1].clientY)}function G1(v,c){const n={touchAction:$c,composed:!1,...c},e="pinch";let r,t=0,o;function i(f,s){f.length===1&&(r=void 0)}function l(f,s){f.length===2&&(t=Fv(f),o=N1(v,f))}function a(f,s){if(f.length===2){const u=Fv(f);if(r!==void 0&&u!==r){const d=u/t;v.dispatchEvent(new CustomEvent(e,{detail:{scale:d,center:o}}))}r=u}return!1}return n.composed?{onMove:a,onDown:l,onUp:null}:o1(e,v,a,l,i,n.touchAction)}const $0=[];function R0(v,c=m0){let n;const e=new Set;function r(i){if(i0(v,i)&&(v=i,n)){const l=!$0.length;for(const a of e)a[1](),$0.push(a,v);if(l){for(let a=0;a<$0.length;a+=2)$0[a][0]($0[a+1]);$0.length=0}}}function t(i){r(i(v))}function o(i,l=m0){const a=[i,l];return e.add(a),e.size===1&&(n=c(r,t)||m0),i(v),()=>{e.delete(a),e.size===0&&n&&(n(),n=null)}}return{set:r,update:t,subscribe:o}}class U1{constructor(c,n,e,r,t,o){this.gl=c;const i=this.texture=c.createTexture();c.bindTexture(c.TEXTURE_2D,i),e=e??c.CLAMP_TO_EDGE,r=r??c.LINEAR,c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,e),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,e),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,r),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,r),this.format=n??c.RGBA,this.internalFormat=o??c.RGBA,this.type=t??c.UNSIGNED_BYTE}bind(c){const n=this.gl;return c!=null&&c!=null&&n.activeTexture(n.TEXTURE0+c),n.bindTexture(n.TEXTURE_2D,this.texture),this}blank(c,n){const e=this.gl;return this.bind(),e.texImage2D(e.TEXTURE_2D,0,this.internalFormat,c,n,0,this.format,this.type,null),this}set(c,n,e){const r=this.gl;return this.bind(),c instanceof Array&&(this.type==r.FLOAT?c=new Float32Array(c):c=new Uint8Array(c)),n!=null&&e!=null?r.texImage2D(r.TEXTURE_2D,0,this.internalFormat,n,e,0,this.format,this.type,c):r.texImage2D(r.TEXTURE_2D,0,this.internalFormat,this.format,this.type,c),this}subset(c,n,e,r,t){const o=this.gl;return this.bind(),c instanceof Array&&(this.type==o.FLOAT?c=new Float32Array(c):c=new Uint8Array(c)),r!=null&&t!=null?o.texSubImage2D(o.TEXTURE_2D,0,n,e,r,t,this.format,this.type,c):o.texSubImage2D(o.TEXTURE_2D,0,n,e,this.format,this.type,c),this}copy(c,n,e,r){const t=this.gl;return t.copyTexImage2D(t.TEXTURE_2D,0,this.internalFormat,c,n,e,r,0),this}}class O1{constructor(c,n=null){this.gl=c,this.framebuffer=arguments.length==2?n:c.createFramebuffer(),this.renderbuffer=null}bind(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this}unbind(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this}attach(c,n=0){const e=this.gl;return n==0&&this.bind(),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.TEXTURE_2D,c.texture,0),this}attachDepth(c,n){const e=this.gl;return this.bind(),this.renderbuffer==null&&(this.renderbuffer=e.createRenderbuffer(),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,c,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.renderbuffer)),this}}class W1{constructor(c,n){this.gl=c,this.buffer=c.createBuffer(),this.target=n??c.ARRAY_BUFFER,this.size=-1}bind(){return this.gl.bindBuffer(this.target,this.buffer),this}update(c,n){const e=this.gl;return c instanceof Array&&(c=new Float32Array(c)),n=n??e.DYNAMIC_DRAW,this.bind(),this.size!==c.byteLength?(e.bufferData(this.target,c,n),this.size=c.byteLength):e.bufferSubData(this.target,0,c),this}}class j1{constructor(c,n,e){this.gl=c;const r=c.createProgram();if(!r)throw new Error("Failed to create program");if(this.program=r,c.attachShader(r,this.makeShader(c.VERTEX_SHADER,n)),c.attachShader(r,this.makeShader(c.FRAGMENT_SHADER,e)),c.linkProgram(r),!c.getProgramParameter(r,c.LINK_STATUS))throw new Error(c.getProgramInfoLog(r)||"Failed to link program");this.vars={}}makeShader(c,n){const e=this.gl,r=e.createShader(c);if(!r)throw new Error("Failed to create shader");if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;throw new Error(e.getShaderInfoLog(r)||"Failed to compile shader")}use(){return this.gl.useProgram(this.program),this}uniform(c,n,e,r){if(this.vars[c]==null){const o=this.gl.getUniformLocation(this.program,c);if(!o)throw new Error(`Failed to locate uniform '${c}'`);this.vars[c]=o}const t=this.vars[c];if(n0.isArray(n)){const o=n,l="uniform"+(r||o.length)+(e?"i":"f")+"v";this.gl[l](t,o)}else if(typeof n=="number"||typeof n=="boolean")e?this.gl.uniform1i(t,n):this.gl.uniform1f(t,n);else throw new Error("Invalid uniform value: "+n);return this}matrix(c,n,e){if(this.vars[c]==null){const t=this.gl.getUniformLocation(this.program,c);if(!t)throw new Error(`Failed to locate uniform '${c}'`);this.vars[c]=t}const r="uniformMatrix"+Math.sqrt(n.length)+"fv";return this.gl[r](this.vars[c],!!e,n),this}uniformi(c,n){return this.uniform(c,n,!0)}attrib(c,n,e,r){const t=this.gl;return this.vars[c]==null&&(this.vars[c]=t.getAttribLocation(this.program,c)),n.bind(),t.enableVertexAttribArray(this.vars[c]),t.vertexAttribPointer(this.vars[c],e,t.FLOAT,!1,r??0,0),this}draw(c,n,e){const r=this.gl;if(e==null?r.drawArrays(c,0,n):r.drawElements(c,n,e,0),r.getError()!==r.NO_ERROR)throw new Error("WebGL rendering error");return this}disable(){for(const c in this.vars){const n=this.vars[c];this.vars.hasOwnProperty(c)&&typeof n=="number"&&this.gl.disableVertexAttribArray(n)}return this}}class n0{constructor(c,n){let e;if(c instanceof HTMLCanvasElement){e=c;const r=n0.getContext(c,n);r&&(c=r)}else e=c.canvas;this.gl=c,this.canvas=e,this.defaultFramebuffer=new n0.Framebuffer(this.gl,null)}static getContext(c,n,e){let r;try{r=c.getContext("webgl2",n||{})}catch{r=null}if(r==null&&!e)throw new Error("Could not create WebGL context.");return r}static looksLikeURL(c){return/\s/.exec(c)==null}static isArray(c){const n=Object.prototype.toString.apply(c,[]);return/ (Float(32|64)|Int(16|32|8)|Uint(16|32|8(Clamped)?))?Array]$/.exec(n)!=null}program(c,n,e){return n0.looksLikeURL(c)&&(c=n0.fetch(c)),n0.looksLikeURL(n)&&(n=n0.fetch(n)),e!=null&&(c=e(c),n=e(n)),new n0.Program(this.gl,c,n)}array(c,n){const e=this.gl,r=new n0.Buffer(e,e.ARRAY_BUFFER);return c!=null&&r.update(c,n??e.STATIC_DRAW),r}elements(c,n){const e=this.gl,r=new n0.Buffer(e,e.ELEMENT_ARRAY_BUFFER);return c!=null&&r.update(c,n??e.STATIC_DRAW),r}texture(c,n,e,r,t,o,i){const l=new n0.Texture(this.gl,n,e,r,t,o);return c!=null&&(i&&i.type==="ArrayBufferView"?l.set(c,i.width,i.height):l.set(c)),l}framebuffer(c){const n=new n0.Framebuffer(this.gl);return c!=null&&n.attach(c),n}}n0.Framebuffer=O1;n0.Texture=U1;n0.Program=j1;n0.Buffer=W1;n0.QUAD2=new Float32Array([-1,-1,1,-1,-1,1,1,1]);n0.fetch=function(v,c){const n=new XMLHttpRequest;return n.open("GET",v,!!c),c!=null&&(n.onload=function(){c(n.responseText)}),n.send(),n.responseText};function l1(v,c){return[v[0]-c[0],v[1]-c[1]]}function Dv(v,c){return[v[0]+c[0],v[1]+c[1]]}function X1(v,c){return[c[0]*v,c[1]*v]}function Wc(v,c){return[c[0]/v,c[1]/v]}const Pv=(v,c)=>(v%c+c)%c;function Iv(v,c,n){return Math.min(Math.max(v,c),n)}function Cc(v,c){return[Pv(v[0],c[0]),Pv(v[1],c[1])]}var Mv=`#version 300 es

precision mediump float;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
uniform vec2 u_offset;\r
uniform float u_scale;

out vec4 fragColor;\r

void main() {\r
    
    
    
    fragColor =  texture(state, (gl_FragCoord.xy / u_scale + u_offset) / screenSize);\r
}`,ac=`#version 300 es

precision mediump float;

in vec2 a_position;

void main() {\r
    gl_Position = vec4(a_position, 0.0, 1.0);\r
}`,Y1=`#version 300 es

precision mediump float;\r
uniform sampler2D state;\r
uniform vec2 screenSize;

uniform vec2 u_org;\r
uniform vec2 u_end;\r
uniform float u_rad;\r
uniform float u_val;

uniform int u_mode;

out vec4 fragColor;

float d_1(vec2 o, vec2 e) {\r
    vec2 delta = abs(e - o);

    return delta.x + delta.y;\r
}\r

float d_2(vec2 o, vec2 e) {\r
    vec2 delta = abs(e - o);

    delta = delta * delta;\r
    return sqrt(delta.x + delta.y);\r
}

float d_inf(vec2 o, vec2 e) {\r
    vec2 delta = abs(e - o);

    return max(delta.x, delta.y);\r
}

float dist(vec2 a, vec2 b) {\r
    if(u_mode == 0)\r
        return d_inf(a,b);

    if(u_mode == 1)\r
        return d_1(a,b);

    return d_2(a,b);\r
}

float ldist_1(vec2 v, vec2 w, vec2 p) {\r
    
    
    
    
    

    vec2 txy = (p - v) / (w - v);

    txy = clamp(txy, vec2(0.0, 0.0), vec2(1.0, 1.0));\r
    vec2 projection_x = v + txy.x * (w - v);  
    vec2 projection_y = v + txy.y * (w - v);  
    return min(dist(p, projection_x), dist(p, projection_y));\r
}

float ldist_inf(vec2 v, vec2 w, vec2 p) {\r
    
    
    
    
    

    float t_pp = (p.x - v.x + v.y - p.y) / (w.x - v.x - w.y + v.y);\r
    float t_pm = (p.x - v.x - v.y + p.y) / (w.x - v.x + w.y - v.y);

    t_pp = clamp(t_pp, 0.0, 1.0);\r
    t_pm = clamp(t_pm, 0.0, 1.0);\r
    vec2 projection_pp = v + t_pp * (w - v);  
    vec2 projection_pm = v + t_pm * (w - v);  
    return min(dist(p, projection_pp), dist(p, projection_pm));\r
}

float ldist_2(vec2 v, vec2 w, vec2 p) {\r
    
    
    
    
    float t = clamp(dot(p - v, w - v) / dot(v - w, v - w), 0.0, 1.0);\r
    vec2 projection = v + t * (w - v);  
    return dist(p, projection);\r
}

float line_dist(vec2 v, vec2 w, vec2 p) {\r
    float l2 = dot(v - w, v - w);  
    if (l2 < 1.0) return dist(p, v);   
    \r
    if(u_mode == 0)\r
        return ldist_inf(v,w,p);

    if(u_mode == 1)\r
        return ldist_1(v,w,p);

    return ldist_2(v,w,p);\r
}\r

void main(){\r
    float color = texture(state, gl_FragCoord.xy / screenSize).r;\r
    fragColor=vec4(color,color,color,1.0);\r
    float radius = u_rad -0.45;

    if(line_dist(u_org, u_end, gl_FragCoord.xy) <= radius)\r
    {\r
        fragColor=vec4(u_val,u_val,u_val,1.0);\r
        return;\r
    }

    float dx = 0.0;\r
    float dy = 0.0;

    if(gl_FragCoord.x <= radius)\r
        dx = screenSize.x;\r
    else if(gl_FragCoord.x >= screenSize.x - radius)\r
        dx = -screenSize.x;

    if(dx!=0.0 && line_dist(u_org, u_end, gl_FragCoord.xy + vec2(dx,0)) <= radius)\r
    {\r
        fragColor=vec4(u_val,u_val,u_val,1.0);\r
        return;\r
    }

    if(gl_FragCoord.y <= radius)\r
        dy = screenSize.y;\r
    else if(gl_FragCoord.y >= screenSize.y - radius)\r
        dy = -screenSize.y;

    if(dy!=0.0 && line_dist(u_org, u_end, gl_FragCoord.xy + vec2(0,dy)) <= radius)\r
    {\r
        fragColor=vec4(u_val,u_val,u_val,1.0);\r
        return;\r
    }

    if(dy!=0.0 && dx!=0.0 && line_dist(u_org, u_end, gl_FragCoord.xy + vec2(dx,dy)) <= radius)\r
    {\r
        fragColor=vec4(u_val,u_val,u_val,1.0);\r
        return;\r
    }\r
}`,H1=`#version 300 es

precision mediump float;\r
uniform sampler2D state;\r
uniform sampler2D hist;\r
uniform vec2 screenSize;\r
uniform vec2 u_offset;\r
uniform float u_scale;

out vec4 fragColor;\r

float get(float fx,float fy){\r
    vec2 offset=vec2(fx,fy);\r
    return texture(state, (gl_FragCoord.xy / u_scale + u_offset + offset) / screenSize).r;\r
}

float get_old(float fx,float fy){\r
    vec2 offset=vec2(fx,fy);\r
    return texture(hist, (gl_FragCoord.xy / u_scale + u_offset + offset) / screenSize).r;\r
}

void main() {   \r
        \r
    float col = get(0.0,0.0);   

    float old_col = get_old(0.0,0.0);\r
    old_col = old_col > 0.7 ? old_col * 0.95 : old_col - 0.01;\r
    col = max(col, old_col);\r
    

    fragColor =  vec4(col,col,col,1.0);

    
    
}`,bc,Kc;class V1{constructor(c,n,e){Ev(this,bc);t0(this,"screenSize");t0(this,"stateSize");t0(this,"Igloo");t0(this,"canvas");t0(this,"gl");t0(this,"buffer");t0(this,"frameBuffer");t0(this,"program_copy");t0(this,"program_hist");t0(this,"program_rule");t0(this,"program_draw");t0(this,"tex_curr");t0(this,"tex_temp");t0(this,"tex_hist");t0(this,"counter",0);t0(this,"scale",1);t0(this,"offset",[0,0]);this.screenSize=c,this.stateSize=e,this.canvas=n,this.Igloo=new n0(n);const r=this.gl=this.Igloo.gl;this.buffer=this.Igloo.array(n0.QUAD2),this.program_copy=this.Igloo.program(ac,Mv),this.program_hist=this.Igloo.program(ac,H1),this.program_rule=this.Igloo.program(ac,Mv),this.program_draw=this.Igloo.program(ac,Y1),this.frameBuffer=this.Igloo.framebuffer(null),this.tex_temp=this.Igloo.texture(null,r.RGBA,r.REPEAT,r.NEAREST,r.UNSIGNED_BYTE,r.RGBA,{}).blank(this.stateSize[0],this.stateSize[1]),this.tex_curr=this.Igloo.texture(null,r.RGBA,r.REPEAT,r.NEAREST,r.UNSIGNED_BYTE,r.RGBA,{}).blank(this.stateSize[0],this.stateSize[1]),this.tex_hist=this.Igloo.texture(null,r.RGBA,r.REPEAT,r.NEAREST,r.UNSIGNED_BYTE,r.RGBA,{}).blank(this.stateSize[0],this.stateSize[1])}set(c){this.counter=0,this.gl;const n=new Uint8Array(this.stateSize[0]*this.stateSize[1]*4);for(let e=0;e<c.length;e++){const r=e*4;n[r+0]=n[r+1]=n[r+2]=c[e]?255:0,n[r+3]=255}return this.tex_curr.subset(n,0,0,this.stateSize[0],this.stateSize[1]),this.tex_hist.subset(n,0,0,this.stateSize[0],this.stateSize[1]),this}setRandom(c=.4){const n=this.stateSize[0]*this.stateSize[1],e=new Uint8Array(n);for(let r=0;r<n;r++)e[r]=Math.random()<c?1:0;return this.set(e),this}setRule(c){let n;try{n=this.Igloo.program(ac,c)}catch(e){alert(`compilation error:
`+e.toString());return}this.program_rule=n}setScreenSize(c){this.screenSize=c}setStateSize(c){this.stateSize=c;const n=this.gl;this.tex_temp=this.Igloo.texture(null,n.RGBA,n.REPEAT,n.NEAREST,n.UNSIGNED_BYTE,n.RGBA,{}).blank(this.stateSize[0],this.stateSize[1]),this.tex_curr=this.Igloo.texture(null,n.RGBA,n.REPEAT,n.NEAREST,n.UNSIGNED_BYTE,n.RGBA,{}).blank(this.stateSize[0],this.stateSize[1]),this.tex_hist=this.Igloo.texture(null,n.RGBA,n.REPEAT,n.NEAREST,n.UNSIGNED_BYTE,n.RGBA,{}).blank(this.stateSize[0],this.stateSize[1])}_swap(){const c=this.tex_curr;return this.tex_curr=this.tex_temp,this.tex_temp=c,this}next(){var c=this.gl;return this.frameBuffer.attach(this.tex_temp),this.tex_curr.bind(0),c.viewport(0,0,this.stateSize[0],this.stateSize[1]),this.program_rule.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniform("screenSize",this.stateSize).draw(c.TRIANGLE_STRIP,4),this._swap(),this.counter+=1,this}display(c){const n=this.gl;return c&&(this.frameBuffer.attach(this.tex_temp),this.tex_curr.bind(0),this.tex_hist.bind(1),n.viewport(0,0,this.stateSize[0],this.stateSize[1]),this.program_hist.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniformi("hist",1).uniform("u_scale",1).uniform("u_offset",[0,0]).uniform("screenSize",this.stateSize).draw(n.TRIANGLE_STRIP,4),this.tex_hist.copy(0,0,this.stateSize[0],this.stateSize[1])),this.Igloo.defaultFramebuffer.bind(),c?this.tex_hist.bind(0):this.tex_curr.bind(0),n.viewport(0,0,this.screenSize[0],this.screenSize[1]),this.program_copy.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniform("u_scale",this.scale).uniform("u_offset",this.offset).uniform("screenSize",this.stateSize).draw(n.TRIANGLE_STRIP,4),this}getWorldPositionFromEvent(c,n){const e=this.canvas.getBoundingClientRect();return[c-e.left,this.canvas.height-(n-e.top)]}getStatePos(c){return Cc(Dv(Wc(this.scale,c),this.offset),this.stateSize)}shiftBy(c){c=Cc(Wc(this.scale,c),this.stateSize),this.offset[0]+=c[0],this.offset[1]+=c[1],this.offset=Cc(this.offset,this.stateSize)}zoomAt(c,n){const e=this.getStatePos(c);this.scale=n;const r=this.getStatePos(c);this.offset[0]+=e[0]-r[0],this.offset[1]+=e[1]-r[1]}drawPoint({position:c,value:n,radius:e,mode:r}){c=this.getStatePos(c),Gc(this,bc,Kc).call(this,{origin:c,end:c,value:n,radius:e,mode:r})}drawLine({origin:c,end:n,value:e,radius:r,mode:t}){const o=this.getStatePos(c),i=Wc(this.scale,l1(n,c)),l=m=>Cc(Dv(o,X1(m,i)),this.stateSize);let a=i[0]>0?this.stateSize[0]:i[0]===0?1/0:0,f=i[1]>0?this.stateSize[1]:i[1]===0?1/0:0;const s=i[0]>0?this.stateSize[0]:-this.stateSize[0],u=i[1]>0?this.stateSize[1]:-this.stateSize[1];let d=0;c=o;const _=.005;for(;d<1;){const m=Math.min((a-o[0])/i[0],1),h=Math.min((f-o[1])/i[1],1);m<=h&&(a+=s,d=m),h<=m&&(f+=u,d=h),n=l(d-_),Gc(this,bc,Kc).call(this,{origin:c,end:n,value:e,radius:r,mode:t}),c=l(d+_)}return this}}bc=new WeakSet,Kc=function({origin:c,end:n,value:e,radius:r,mode:t}){var o=this.Igloo.gl;this.frameBuffer.attach(this.tex_temp),this.tex_curr.bind(0),o.viewport(0,0,this.stateSize[0],this.stateSize[1]),this.program_draw.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniform("screenSize",this.stateSize).uniform("u_org",c).uniform("u_end",n).uniform("u_val",Number(e)).uniform("u_rad",r).uniformi("u_mode",t).draw(o.TRIANGLE_STRIP,4),this._swap(),this.frameBuffer.attach(this.tex_temp),this.tex_hist.bind(0),o.viewport(0,0,this.stateSize[0],this.stateSize[1]),this.program_draw.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniform("screenSize",this.stateSize).uniform("u_org",c).uniform("u_end",n).uniform("u_val",Number(e)).uniform("u_rad",r).uniformi("u_mode",t).draw(o.TRIANGLE_STRIP,4);var i=this.tex_hist;this.tex_hist=this.tex_temp,this.tex_temp=i};var q1=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd1=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd2=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd3=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd4=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd5=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3+nhd4+nhd5;\r
    if(fin_0>=175.0){\r
        outval=0.0;\r
    }\r
    if(fin_0<=120.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=198.0&&fin_0<=270.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=165.0&&fin_0<=170.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=125.0&&fin_0<=130.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=68.0&&fin_0<=80.0){\r
        outval=1.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,K1=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=42.0&&fin_0<=95.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=69.0&&fin_0<=77.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=95.0&&fin_0<=115.0){\r
        outval=0.0;\r
    }\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    if(fin_1>=13.0&&fin_1<=19.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=9.0&&fin_1<=9.0){\r
        outval=0.0;\r
    }\r
    float nhd5=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd6=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd7=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd8=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd9=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd10=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_2=nhd5+nhd6+nhd7+nhd8+nhd9+nhd10;\r
    if(fin_2>=245.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Q1=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-3.0,0.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-1.0,-2.0)+cv(-1.0,2.0)+cv(0.0,-3.0)+cv(0.0,3.0)+cv(1.0,-2.0)+cv(1.0,2.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(3.0,0.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=7.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=3.0&&fin_0<=5.0){\r
        outval=1.0;\r
    }\r
    if(fin_0<=2.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);

}`,Z1=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=14.0&&fin_0<=17.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=9.0&&fin_0<=9.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=18.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=0.0&&fin_0<=4.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=7.0&&fin_0<=8.0){\r
        outval=0.0;\r
    }\r
    if(fin_0==9.0){\r
        outval=1.0;\r
    }\r
    float nhd1=cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,0.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,3.0)+cv(-1.0,-4.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,4.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(1.0,-4.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,4.0)+cv(2.0,-3.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,0.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0);\r
    float fin_1=nhd1;\r
    if(fin_1>=13.0&&fin_1<=14.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=7.0&&fin_1<=7.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=28.0&&fin_1<=33.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);

}`,J1=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0);\r
    float fin_0=nhd0;\r
    float nhd1=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd2=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd3=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd4=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_1=nhd1+nhd2+nhd3+nhd4;\r
    if(fin_0<=1.0){\r
        outval=0.0;\r
    }\r
    if(fin_0==5.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=7.0&&fin_0<=8.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=79.0&&fin_1<=80.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=69.0&&fin_1<=69.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=129.0&&fin_1<=159.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=76.0&&fin_1<=76.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=41.0&&fin_1<=51.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=180.0&&fin_1<=220.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,$1=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=29.0&&fin_0<=35.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>41.0){\r
        outval=0.0;\r
    }\r
    if(fin_0<24.0){\r
        outval=0.0;\r
    }\r
    float nhd1=cv(-20.0,-2.0)+cv(-20.0,-1.0)+cv(-20.0,0.0)+cv(-20.0,1.0)+cv(-20.0,2.0)+cv(-19.0,-5.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,5.0)+cv(-18.0,-8.0)+cv(-18.0,-7.0)+cv(-18.0,-6.0)+cv(-18.0,6.0)+cv(-18.0,7.0)+cv(-18.0,8.0)+cv(-17.0,-10.0)+cv(-17.0,-9.0)+cv(-17.0,9.0)+cv(-17.0,10.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-13.0)+cv(-15.0,-2.0)+cv(-15.0,-1.0)+cv(-15.0,0.0)+cv(-15.0,1.0)+cv(-15.0,2.0)+cv(-15.0,13.0)+cv(-14.0,-14.0)+cv(-14.0,-5.0)+cv(-14.0,-4.0)+cv(-14.0,-3.0)+cv(-14.0,3.0)+cv(-14.0,4.0)+cv(-14.0,5.0)+cv(-14.0,14.0)+cv(-13.0,-15.0)+cv(-13.0,-7.0)+cv(-13.0,-6.0)+cv(-13.0,6.0)+cv(-13.0,7.0)+cv(-13.0,15.0)+cv(-12.0,-16.0)+cv(-12.0,-9.0)+cv(-12.0,-8.0)+cv(-12.0,8.0)+cv(-12.0,9.0)+cv(-12.0,16.0)+cv(-11.0,-16.0)+cv(-11.0,-10.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0);\r
    float nhd2=cv(-11.0,3.0)+cv(-11.0,10.0)+cv(-11.0,16.0)+cv(-10.0,-17.0)+cv(-10.0,-11.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,-2.0)+cv(-10.0,2.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-10.0,11.0)+cv(-10.0,17.0)+cv(-9.0,-17.0)+cv(-9.0,-12.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,-5.0)+cv(-9.0,5.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-9.0,12.0)+cv(-9.0,17.0)+cv(-8.0,-18.0)+cv(-8.0,-12.0)+cv(-8.0,-8.0)+cv(-8.0,-7.0)+cv(-8.0,7.0)+cv(-8.0,8.0)+cv(-8.0,12.0)+cv(-8.0,18.0)+cv(-7.0,-18.0)+cv(-7.0,-13.0)+cv(-7.0,-9.0)+cv(-7.0,-8.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,8.0)+cv(-7.0,9.0)+cv(-7.0,13.0)+cv(-7.0,18.0)+cv(-6.0,-18.0)+cv(-6.0,-13.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-6.0,13.0)+cv(-6.0,18.0)+cv(-5.0,-19.0)+cv(-5.0,-14.0)+cv(-5.0,-10.0)+cv(-5.0,-9.0);\r
    float nhd3=cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,9.0)+cv(-5.0,10.0)+cv(-5.0,14.0)+cv(-5.0,19.0)+cv(-4.0,-19.0)+cv(-4.0,-14.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-4.0,14.0)+cv(-4.0,19.0)+cv(-3.0,-19.0)+cv(-3.0,-14.0)+cv(-3.0,-11.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-3.0,11.0)+cv(-3.0,14.0)+cv(-3.0,19.0)+cv(-2.0,-20.0)+cv(-2.0,-15.0)+cv(-2.0,-11.0)+cv(-2.0,-10.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,10.0)+cv(-2.0,11.0)+cv(-2.0,15.0)+cv(-2.0,20.0)+cv(-1.0,-20.0)+cv(-1.0,-15.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0);\r
    float nhd4=cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,15.0)+cv(-1.0,20.0)+cv(0.0,-20.0)+cv(0.0,-15.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,15.0)+cv(0.0,20.0)+cv(1.0,-20.0)+cv(1.0,-15.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,15.0)+cv(1.0,20.0)+cv(2.0,-20.0)+cv(2.0,-15.0)+cv(2.0,-11.0)+cv(2.0,-10.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,10.0)+cv(2.0,11.0)+cv(2.0,15.0)+cv(2.0,20.0)+cv(3.0,-19.0)+cv(3.0,-14.0)+cv(3.0,-11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(3.0,11.0);\r
    float nhd5=cv(3.0,14.0)+cv(3.0,19.0)+cv(4.0,-19.0)+cv(4.0,-14.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(4.0,14.0)+cv(4.0,19.0)+cv(5.0,-19.0)+cv(5.0,-14.0)+cv(5.0,-10.0)+cv(5.0,-9.0)+cv(5.0,-5.0)+cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,9.0)+cv(5.0,10.0)+cv(5.0,14.0)+cv(5.0,19.0)+cv(6.0,-18.0)+cv(6.0,-13.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(6.0,13.0)+cv(6.0,18.0)+cv(7.0,-18.0)+cv(7.0,-13.0)+cv(7.0,-9.0)+cv(7.0,-8.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,8.0)+cv(7.0,9.0)+cv(7.0,13.0)+cv(7.0,18.0)+cv(8.0,-18.0)+cv(8.0,-12.0)+cv(8.0,-8.0)+cv(8.0,-7.0)+cv(8.0,7.0)+cv(8.0,8.0)+cv(8.0,12.0)+cv(8.0,18.0)+cv(9.0,-17.0);\r
    float nhd6=cv(9.0,-12.0)+cv(9.0,-7.0)+cv(9.0,-6.0)+cv(9.0,-5.0)+cv(9.0,5.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(9.0,12.0)+cv(9.0,17.0)+cv(10.0,-17.0)+cv(10.0,-11.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,-2.0)+cv(10.0,2.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(10.0,11.0)+cv(10.0,17.0)+cv(11.0,-16.0)+cv(11.0,-10.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,10.0)+cv(11.0,16.0)+cv(12.0,-16.0)+cv(12.0,-9.0)+cv(12.0,-8.0)+cv(12.0,8.0)+cv(12.0,9.0)+cv(12.0,16.0)+cv(13.0,-15.0)+cv(13.0,-7.0)+cv(13.0,-6.0)+cv(13.0,6.0)+cv(13.0,7.0)+cv(13.0,15.0)+cv(14.0,-14.0)+cv(14.0,-5.0)+cv(14.0,-4.0)+cv(14.0,-3.0)+cv(14.0,3.0)+cv(14.0,4.0)+cv(14.0,5.0)+cv(14.0,14.0)+cv(15.0,-13.0)+cv(15.0,-2.0)+cv(15.0,-1.0)+cv(15.0,0.0)+cv(15.0,1.0)+cv(15.0,2.0)+cv(15.0,13.0)+cv(16.0,-12.0)+cv(16.0,-11.0);\r
    float nhd7=cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-10.0)+cv(17.0,-9.0)+cv(17.0,9.0)+cv(17.0,10.0)+cv(18.0,-8.0)+cv(18.0,-7.0)+cv(18.0,-6.0)+cv(18.0,6.0)+cv(18.0,7.0)+cv(18.0,8.0)+cv(19.0,-5.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,5.0)+cv(20.0,-2.0)+cv(20.0,-1.0)+cv(20.0,0.0)+cv(20.0,1.0)+cv(20.0,2.0);\r
    float fin_1=nhd1+nhd2+nhd3+nhd4+nhd5+nhd6+nhd7;\r
    if(fin_1>=148.0&&fin_1<=320.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=70.0&&fin_1<=74.0){\r
        outval=1.0;\r
    }\r
    if(fin_1==23.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=250.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);

}`,cn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=0.0&&fin_0<=12.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=25.0&&fin_0<=80.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=65.0&&fin_0<=76.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=39.0&&fin_0<=43.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=84.0&&fin_0<=139.0){\r
        outval=1.0;\r
    }\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    float nhd5=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd6=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_2=nhd5+nhd6;\r
    float nhd7=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd8=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd9=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd10=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd11=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd12=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_3=nhd7+nhd8+nhd9+nhd10+nhd11+nhd12;\r
    if(fin_1>=12.0&&fin_1<=21.0){\r
        outval=1.0;\r
    }\r
    if(fin_2>=7.0&&fin_2<=22.0){\r
        outval=0.0;\r
    }\r
    if(fin_2>=14.0&&fin_2<=15.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=143.0&&fin_3<=178.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=270.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,vn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=0.0&&fin_0<=12.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=25.0&&fin_0<=80.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=65.0&&fin_0<=76.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=39.0&&fin_0<=43.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=84.0&&fin_0<=139.0){\r
        outval=1.0;\r
    }\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    float nhd5=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd6=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_2=nhd5+nhd6;\r
    float nhd7=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd8=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd9=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd10=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd11=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd12=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_3=nhd7+nhd8+nhd9+nhd10+nhd11+nhd12;\r
    if(fin_1>=12.0&&fin_1<=37.0){\r
        outval=1.0;\r
    }\r
    if(fin_2>=12.0&&fin_2<=26.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=155.0&&fin_3<=183.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=300.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,nn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,0.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,3.0)+cv(-1.0,-4.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,4.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(1.0,-4.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,4.0)+cv(2.0,-3.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,0.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=17.0&&fin_0<=27.0){\r
        outval=1.0;\r
    }\r
    float nhd1=cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,3.0)+cv(-1.0,-3.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,3.0)+cv(2.0,-3.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,3.0);\r
    float fin_1=nhd1;\r
    if(fin_1>=44.0){\r
        outval=0.0;\r
    }\r
    if(fin_1<=21.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,en=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;

uniform sampler2D state;\r
uniform vec2 screenSize;

int get(vec2 offset) {\r
    return int(texture(state, (gl_FragCoord.xy + offset) / screenSize).r);\r
}

void main() {\r
    int sum =\r
        get(vec2(-1.0, 0.0)) +\r
        get(vec2(1.0, 0.0)) +\r
        get(vec2(0.0, 1.0)) +\r
        get(vec2(0.0, -1.0)) +\r
        get(vec2(-1.0, -1.0)) +\r
        get(vec2(1.0, -1.0)) + \r
        get(vec2(-1.0, 1.0)) +\r
        get(vec2(1.0, 1.0));\r
    int current = get(vec2(0.0, 0.0));\r
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);

    if (current == 0 && (sum == 3 || sum == 6 || sum == 7 || sum == 8)) {\r
        fragColor = vec4(1.0, 1.0, 1.0, 1.0);        \r
    }

    if (current == 1 && (sum == 3 || sum == 4 || sum == 6 || sum == 7 || sum == 8)) {\r
        fragColor = vec4(1.0, 1.0, 1.0, 1.0);\r
    }        \r
}`,rn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=127.0&&fin_0<=189.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=25.0&&fin_0<=66.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=79.0&&fin_0<=80.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=19.0){\r
        outval=0.0;\r
    }\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    if(fin_1>=11.0&&fin_1<=17.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=5.0&&fin_1<=5.0){\r
        outval=1.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,tn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0);\r
    float fin_0=nhd0;\r
    float nhd1=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd2=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd3=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd4=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_1=nhd1+nhd2+nhd3+nhd4;\r
    if(fin_0>=0.0&&fin_0<=2.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=6.0&&fin_0<=7.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=22.0&&fin_1<=33.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=111.0&&fin_1<=112.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=71.0&&fin_1<=77.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=143.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=80.0&&fin_1<=83.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=51.0&&fin_1<=51.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=31.0&&fin_1<=31.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=23.0&&fin_1<=23.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=117.0&&fin_1<=127.0){\r
        outval=1.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,on=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=29.0&&fin_0<=34.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=16.0&&fin_0<=26.0){\r
        outval=0.0;\r
    }\r
    float nhd1=cv(-20.0,-2.0)+cv(-20.0,-1.0)+cv(-20.0,0.0)+cv(-20.0,1.0)+cv(-20.0,2.0)+cv(-19.0,-5.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,5.0)+cv(-18.0,-8.0)+cv(-18.0,-7.0)+cv(-18.0,-6.0)+cv(-18.0,6.0)+cv(-18.0,7.0)+cv(-18.0,8.0)+cv(-17.0,-10.0)+cv(-17.0,-9.0)+cv(-17.0,9.0)+cv(-17.0,10.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-13.0)+cv(-15.0,-2.0)+cv(-15.0,-1.0)+cv(-15.0,0.0)+cv(-15.0,1.0)+cv(-15.0,2.0)+cv(-15.0,13.0)+cv(-14.0,-14.0)+cv(-14.0,-5.0)+cv(-14.0,-4.0)+cv(-14.0,-3.0)+cv(-14.0,3.0)+cv(-14.0,4.0)+cv(-14.0,5.0)+cv(-14.0,14.0)+cv(-13.0,-15.0)+cv(-13.0,-7.0)+cv(-13.0,-6.0)+cv(-13.0,6.0)+cv(-13.0,7.0)+cv(-13.0,15.0)+cv(-12.0,-16.0)+cv(-12.0,-9.0)+cv(-12.0,-8.0)+cv(-12.0,8.0)+cv(-12.0,9.0)+cv(-12.0,16.0)+cv(-11.0,-16.0)+cv(-11.0,-10.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0);\r
    float nhd2=cv(-11.0,3.0)+cv(-11.0,10.0)+cv(-11.0,16.0)+cv(-10.0,-17.0)+cv(-10.0,-11.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,-2.0)+cv(-10.0,2.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-10.0,11.0)+cv(-10.0,17.0)+cv(-9.0,-17.0)+cv(-9.0,-12.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,-5.0)+cv(-9.0,5.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-9.0,12.0)+cv(-9.0,17.0)+cv(-8.0,-18.0)+cv(-8.0,-12.0)+cv(-8.0,-8.0)+cv(-8.0,-7.0)+cv(-8.0,7.0)+cv(-8.0,8.0)+cv(-8.0,12.0)+cv(-8.0,18.0)+cv(-7.0,-18.0)+cv(-7.0,-13.0)+cv(-7.0,-9.0)+cv(-7.0,-8.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,8.0)+cv(-7.0,9.0)+cv(-7.0,13.0)+cv(-7.0,18.0)+cv(-6.0,-18.0)+cv(-6.0,-13.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-6.0,13.0)+cv(-6.0,18.0)+cv(-5.0,-19.0)+cv(-5.0,-14.0)+cv(-5.0,-10.0)+cv(-5.0,-9.0);\r
    float nhd3=cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,9.0)+cv(-5.0,10.0)+cv(-5.0,14.0)+cv(-5.0,19.0)+cv(-4.0,-19.0)+cv(-4.0,-14.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-4.0,14.0)+cv(-4.0,19.0)+cv(-3.0,-19.0)+cv(-3.0,-14.0)+cv(-3.0,-11.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-3.0,11.0)+cv(-3.0,14.0)+cv(-3.0,19.0)+cv(-2.0,-20.0)+cv(-2.0,-15.0)+cv(-2.0,-11.0)+cv(-2.0,-10.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,10.0)+cv(-2.0,11.0)+cv(-2.0,15.0)+cv(-2.0,20.0)+cv(-1.0,-20.0)+cv(-1.0,-15.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0);\r
    float nhd4=cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,15.0)+cv(-1.0,20.0)+cv(0.0,-20.0)+cv(0.0,-15.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,15.0)+cv(0.0,20.0)+cv(1.0,-20.0)+cv(1.0,-15.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,15.0)+cv(1.0,20.0)+cv(2.0,-20.0)+cv(2.0,-15.0)+cv(2.0,-11.0)+cv(2.0,-10.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,10.0)+cv(2.0,11.0)+cv(2.0,15.0)+cv(2.0,20.0)+cv(3.0,-19.0)+cv(3.0,-14.0)+cv(3.0,-11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(3.0,11.0);\r
    float nhd5=cv(3.0,14.0)+cv(3.0,19.0)+cv(4.0,-19.0)+cv(4.0,-14.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(4.0,14.0)+cv(4.0,19.0)+cv(5.0,-19.0)+cv(5.0,-14.0)+cv(5.0,-10.0)+cv(5.0,-9.0)+cv(5.0,-5.0)+cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,9.0)+cv(5.0,10.0)+cv(5.0,14.0)+cv(5.0,19.0)+cv(6.0,-18.0)+cv(6.0,-13.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(6.0,13.0)+cv(6.0,18.0)+cv(7.0,-18.0)+cv(7.0,-13.0)+cv(7.0,-9.0)+cv(7.0,-8.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,8.0)+cv(7.0,9.0)+cv(7.0,13.0)+cv(7.0,18.0)+cv(8.0,-18.0)+cv(8.0,-12.0)+cv(8.0,-8.0)+cv(8.0,-7.0)+cv(8.0,7.0)+cv(8.0,8.0)+cv(8.0,12.0)+cv(8.0,18.0)+cv(9.0,-17.0);\r
    float nhd6=cv(9.0,-12.0)+cv(9.0,-7.0)+cv(9.0,-6.0)+cv(9.0,-5.0)+cv(9.0,5.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(9.0,12.0)+cv(9.0,17.0)+cv(10.0,-17.0)+cv(10.0,-11.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,-2.0)+cv(10.0,2.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(10.0,11.0)+cv(10.0,17.0)+cv(11.0,-16.0)+cv(11.0,-10.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,10.0)+cv(11.0,16.0)+cv(12.0,-16.0)+cv(12.0,-9.0)+cv(12.0,-8.0)+cv(12.0,8.0)+cv(12.0,9.0)+cv(12.0,16.0)+cv(13.0,-15.0)+cv(13.0,-7.0)+cv(13.0,-6.0)+cv(13.0,6.0)+cv(13.0,7.0)+cv(13.0,15.0)+cv(14.0,-14.0)+cv(14.0,-5.0)+cv(14.0,-4.0)+cv(14.0,-3.0)+cv(14.0,3.0)+cv(14.0,4.0)+cv(14.0,5.0)+cv(14.0,14.0)+cv(15.0,-13.0)+cv(15.0,-2.0)+cv(15.0,-1.0)+cv(15.0,0.0)+cv(15.0,1.0)+cv(15.0,2.0)+cv(15.0,13.0)+cv(16.0,-12.0)+cv(16.0,-11.0);\r
    float nhd7=cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-10.0)+cv(17.0,-9.0)+cv(17.0,9.0)+cv(17.0,10.0)+cv(18.0,-8.0)+cv(18.0,-7.0)+cv(18.0,-6.0)+cv(18.0,6.0)+cv(18.0,7.0)+cv(18.0,8.0)+cv(19.0,-5.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,5.0)+cv(20.0,-2.0)+cv(20.0,-1.0)+cv(20.0,0.0)+cv(20.0,1.0)+cv(20.0,2.0);\r
    float fin_1=nhd1+nhd2+nhd3+nhd4+nhd5+nhd6+nhd7;\r
    if(fin_1>=0.0&&fin_1<=18.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=100.0&&fin_1<=104.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=70.0&&fin_1<=75.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=105.0&&fin_1<=135.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=219.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,ln=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=9.0&&fin_0<=11.0){\r
        outval=1.0;\r
    }\r
    float nhd1=cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,0.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,3.0)+cv(-1.0,-4.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,4.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(1.0,-4.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,4.0)+cv(2.0,-3.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,0.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0);\r
    float fin_1=nhd1;\r
    if(fin_1>=19.0&&fin_1<=23.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=0.0&&fin_1<=15.0){\r
        outval=0.0;\r
    }\r
    float nhd2=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_2=nhd2;\r
    if(fin_2>=31.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,an=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=29.0&&fin_0<=35.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>48.0){\r
        outval=0.0;\r
    }\r
    if(fin_0<28.0){\r
        outval=0.0;\r
    }\r
    float nhd1=cv(-20.0,-2.0)+cv(-20.0,-1.0)+cv(-20.0,0.0)+cv(-20.0,1.0)+cv(-20.0,2.0)+cv(-19.0,-5.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,5.0)+cv(-18.0,-8.0)+cv(-18.0,-7.0)+cv(-18.0,-6.0)+cv(-18.0,6.0)+cv(-18.0,7.0)+cv(-18.0,8.0)+cv(-17.0,-10.0)+cv(-17.0,-9.0)+cv(-17.0,9.0)+cv(-17.0,10.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-13.0)+cv(-15.0,-2.0)+cv(-15.0,-1.0)+cv(-15.0,0.0)+cv(-15.0,1.0)+cv(-15.0,2.0)+cv(-15.0,13.0)+cv(-14.0,-14.0)+cv(-14.0,-5.0)+cv(-14.0,-4.0)+cv(-14.0,-3.0)+cv(-14.0,3.0)+cv(-14.0,4.0)+cv(-14.0,5.0)+cv(-14.0,14.0)+cv(-13.0,-15.0)+cv(-13.0,-7.0)+cv(-13.0,-6.0)+cv(-13.0,6.0)+cv(-13.0,7.0)+cv(-13.0,15.0)+cv(-12.0,-16.0)+cv(-12.0,-9.0)+cv(-12.0,-8.0)+cv(-12.0,8.0)+cv(-12.0,9.0)+cv(-12.0,16.0)+cv(-11.0,-16.0)+cv(-11.0,-10.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0);\r
    float nhd2=cv(-11.0,3.0)+cv(-11.0,10.0)+cv(-11.0,16.0)+cv(-10.0,-17.0)+cv(-10.0,-11.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,-2.0)+cv(-10.0,2.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-10.0,11.0)+cv(-10.0,17.0)+cv(-9.0,-17.0)+cv(-9.0,-12.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,-5.0)+cv(-9.0,5.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-9.0,12.0)+cv(-9.0,17.0)+cv(-8.0,-18.0)+cv(-8.0,-12.0)+cv(-8.0,-8.0)+cv(-8.0,-7.0)+cv(-8.0,7.0)+cv(-8.0,8.0)+cv(-8.0,12.0)+cv(-8.0,18.0)+cv(-7.0,-18.0)+cv(-7.0,-13.0)+cv(-7.0,-9.0)+cv(-7.0,-8.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,8.0)+cv(-7.0,9.0)+cv(-7.0,13.0)+cv(-7.0,18.0)+cv(-6.0,-18.0)+cv(-6.0,-13.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-6.0,13.0)+cv(-6.0,18.0)+cv(-5.0,-19.0)+cv(-5.0,-14.0)+cv(-5.0,-10.0)+cv(-5.0,-9.0);\r
    float nhd3=cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,9.0)+cv(-5.0,10.0)+cv(-5.0,14.0)+cv(-5.0,19.0)+cv(-4.0,-19.0)+cv(-4.0,-14.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-4.0,14.0)+cv(-4.0,19.0)+cv(-3.0,-19.0)+cv(-3.0,-14.0)+cv(-3.0,-11.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-3.0,11.0)+cv(-3.0,14.0)+cv(-3.0,19.0)+cv(-2.0,-20.0)+cv(-2.0,-15.0)+cv(-2.0,-11.0)+cv(-2.0,-10.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,10.0)+cv(-2.0,11.0)+cv(-2.0,15.0)+cv(-2.0,20.0)+cv(-1.0,-20.0)+cv(-1.0,-15.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0);\r
    float nhd4=cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,15.0)+cv(-1.0,20.0)+cv(0.0,-20.0)+cv(0.0,-15.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,15.0)+cv(0.0,20.0)+cv(1.0,-20.0)+cv(1.0,-15.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,15.0)+cv(1.0,20.0)+cv(2.0,-20.0)+cv(2.0,-15.0)+cv(2.0,-11.0)+cv(2.0,-10.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,10.0)+cv(2.0,11.0)+cv(2.0,15.0)+cv(2.0,20.0)+cv(3.0,-19.0)+cv(3.0,-14.0)+cv(3.0,-11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(3.0,11.0);\r
    float nhd5=cv(3.0,14.0)+cv(3.0,19.0)+cv(4.0,-19.0)+cv(4.0,-14.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(4.0,14.0)+cv(4.0,19.0)+cv(5.0,-19.0)+cv(5.0,-14.0)+cv(5.0,-10.0)+cv(5.0,-9.0)+cv(5.0,-5.0)+cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,9.0)+cv(5.0,10.0)+cv(5.0,14.0)+cv(5.0,19.0)+cv(6.0,-18.0)+cv(6.0,-13.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(6.0,13.0)+cv(6.0,18.0)+cv(7.0,-18.0)+cv(7.0,-13.0)+cv(7.0,-9.0)+cv(7.0,-8.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,8.0)+cv(7.0,9.0)+cv(7.0,13.0)+cv(7.0,18.0)+cv(8.0,-18.0)+cv(8.0,-12.0)+cv(8.0,-8.0)+cv(8.0,-7.0)+cv(8.0,7.0)+cv(8.0,8.0)+cv(8.0,12.0)+cv(8.0,18.0)+cv(9.0,-17.0);\r
    float nhd6=cv(9.0,-12.0)+cv(9.0,-7.0)+cv(9.0,-6.0)+cv(9.0,-5.0)+cv(9.0,5.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(9.0,12.0)+cv(9.0,17.0)+cv(10.0,-17.0)+cv(10.0,-11.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,-2.0)+cv(10.0,2.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(10.0,11.0)+cv(10.0,17.0)+cv(11.0,-16.0)+cv(11.0,-10.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,10.0)+cv(11.0,16.0)+cv(12.0,-16.0)+cv(12.0,-9.0)+cv(12.0,-8.0)+cv(12.0,8.0)+cv(12.0,9.0)+cv(12.0,16.0)+cv(13.0,-15.0)+cv(13.0,-7.0)+cv(13.0,-6.0)+cv(13.0,6.0)+cv(13.0,7.0)+cv(13.0,15.0)+cv(14.0,-14.0)+cv(14.0,-5.0)+cv(14.0,-4.0)+cv(14.0,-3.0)+cv(14.0,3.0)+cv(14.0,4.0)+cv(14.0,5.0)+cv(14.0,14.0)+cv(15.0,-13.0)+cv(15.0,-2.0)+cv(15.0,-1.0)+cv(15.0,0.0)+cv(15.0,1.0)+cv(15.0,2.0)+cv(15.0,13.0)+cv(16.0,-12.0)+cv(16.0,-11.0);\r
    float nhd7=cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-10.0)+cv(17.0,-9.0)+cv(17.0,9.0)+cv(17.0,10.0)+cv(18.0,-8.0)+cv(18.0,-7.0)+cv(18.0,-6.0)+cv(18.0,6.0)+cv(18.0,7.0)+cv(18.0,8.0)+cv(19.0,-5.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,5.0)+cv(20.0,-2.0)+cv(20.0,-1.0)+cv(20.0,0.0)+cv(20.0,1.0)+cv(20.0,2.0);\r
    float fin_1=nhd1+nhd2+nhd3+nhd4+nhd5+nhd6+nhd7;\r
    if(fin_1>=188.0&&fin_1<=320.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=101.0&&fin_1<=103.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=70.0&&fin_1<=74.0){\r
        outval=1.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,fn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(0.0,-1.0)+cv(1.0,-1.0)+cv(0.0,-2.0)+cv(-1.0,-1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=3.0){\r
        outval=0.0;\r
    }\r
    if(fin_0==2.0){\r
        outval=1.0;\r
    }\r
    if(fin_0==1.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,sn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=165.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=67.0&&fin_0<=67.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=104.0&&fin_0<=150.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=81.0&&fin_0<=104.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,un=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;

uniform sampler2D state;\r
uniform vec2 screenSize;

int get(vec2 offset) {\r
    return int(texture(state, (gl_FragCoord.xy + offset) / screenSize).r);\r
}

void main() {\r
    int sum =\r
        get(vec2(-1.0, 0.0)) +\r
        get(vec2(1.0, 0.0)) +\r
        get(vec2(0.0, 1.0)) +\r
        get(vec2(0.0, -1.0)) +\r
        get(vec2(-1.0, -1.0)) +\r
        get(vec2(1.0, -1.0)) + \r
        get(vec2(-1.0, 1.0)) +\r
        get(vec2(1.0, 1.0));\r
    int current = get(vec2(0.0, 0.0));\r
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);

    if (current == 0 && sum == 3) {\r
        fragColor = vec4(1.0, 1.0, 1.0, 1.0);        \r
    }

    if (current == 1 && (sum == 3 || sum == 2)) {\r
        fragColor = vec4(1.0, 1.0, 1.0, 1.0);\r
    }        \r
}`,dn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd1=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd2=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd3=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd4=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd5=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3+nhd4+nhd5;\r
    if(fin_0>=148.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=107.0&&fin_0<=123.0){\r
        outval=1.0;\r
    }\r
    if(fin_0<=90.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=57.0&&fin_0<=61.0){\r
        outval=1.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,hn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd1=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_0=nhd0+nhd1;\r
    if(fin_0>=31.0&&fin_0<=39.0){\r
        outval=1.0;\r
    }\r
    if(fin_0<=15.0){\r
        outval=0.0;\r
    }\r
    float nhd2=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd3=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd4=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd5=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_1=nhd2+nhd3+nhd4+nhd5;\r
    if(fin_1>=95.0&&fin_1<=110.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=78.0&&fin_1<=86.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=125.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,_n=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd1=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_0=nhd0+nhd1;\r
    if(fin_0>=31.0&&fin_0<=36.0){\r
        outval=1.0;\r
    }\r
    if(fin_0<=15.0){\r
        outval=0.0;\r
    }\r
    float nhd2=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd3=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd4=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd5=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_1=nhd2+nhd3+nhd4+nhd5;\r
    if(fin_1>=125.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=78.0&&fin_1<=86.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);

}`,gn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=30.0&&fin_0<=155.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=40.0&&fin_0<=42.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=88.0&&fin_0<=155.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=111.0&&fin_0<=145.0){\r
        outval=1.0;\r
    }\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    if(fin_1>=15.0&&fin_1<=17.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=8.0&&fin_1<=8.0){\r
        outval=1.0;\r
    }\r
    float nhd5=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd6=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd7=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd8=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd9=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd10=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_2=nhd5+nhd6+nhd7+nhd8+nhd9+nhd10;\r
    if(fin_2>=201.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,mn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=14.0&&fin_0<=17.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=9.0&&fin_0<=9.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=18.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=0.0&&fin_0<=4.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=7.0&&fin_0<=8.0){\r
        outval=0.0;\r
    }\r
    if(fin_0==9.0){\r
        outval=1.0;\r
    }\r
    float nhd1=cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,0.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,3.0)+cv(-1.0,-4.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,4.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(1.0,-4.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,4.0)+cv(2.0,-3.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,0.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0);\r
    float fin_1=nhd1;\r
    if(fin_1>=13.0&&fin_1<=18.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=5.0&&fin_1<=5.0){\r
        outval=1.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,pn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;

uniform sampler2D state;\r
uniform vec2 screenSize;

int get(vec2 offset) {\r
    return int(texture(state, (gl_FragCoord.xy + offset) / screenSize).r);\r
}

void main() {\r
    int sum =\r
        get(vec2(-1.0, 0.0)) +\r
        get(vec2(-2.0, 0.0)) +\r
        get(vec2(-3.0, 0.0)) +\r
        get(vec2(1.0, 0.0)) +\r
        get(vec2(2.0, 0.0)) +\r
        get(vec2(3.0, 0.0)) +\r
        get(vec2(0.0, 1.0)) +\r
        get(vec2(0.0, 2.0)) +\r
        get(vec2(0.0, 3.0)) +\r
        get(vec2(0.0, -1.0)) +\r
        get(vec2(0.0, -2.0)) +\r
        get(vec2(0.0, -3.0));\r
    float current = float(get(vec2(0.0, 0.0)));\r
    fragColor = vec4(0.0, 0.0, 0.0, 1.0);\r
    if (current == 1.0 && (sum > 5 || sum == 3)) {\r
        fragColor = vec4(1.0, 1.0, 1.0, 1.0);        \r
    }

    if (current == 0.0 && (sum > 7 || sum == 2)) {\r
        fragColor = vec4(1.0, 1.0, 1.0, 1.0);\r
    }        \r
}`,bn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd1=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_0=nhd0+nhd1;\r
    if(fin_0>=44.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=30.0&&fin_0<=41.0){\r
        outval=1.0;\r
    }\r
    if(fin_0<=22.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,yn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    float nhd5=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd6=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_2=nhd5+nhd6;\r
    float nhd7=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd8=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd9=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd10=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd11=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd12=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_3=nhd7+nhd8+nhd9+nhd10+nhd11+nhd12;\r
    if(fin_0>=0.0&&fin_0<=12.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=25.0&&fin_0<=80.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=67.0&&fin_0<=71.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=39.0&&fin_0<=41.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=70.0&&fin_0<=139.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=12.0&&fin_1<=37.0){\r
        outval=1.0;\r
    }\r
    if(fin_2>=12.0&&fin_2<=32.0){\r
        outval=0.0;\r
    }\r
    if(fin_2>=73.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=155.0&&fin_3<=185.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=180.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,kn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float nhd1=cv(-20.0,-2.0)+cv(-20.0,-1.0)+cv(-20.0,0.0)+cv(-20.0,1.0)+cv(-20.0,2.0)+cv(-19.0,-5.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,5.0)+cv(-18.0,-8.0)+cv(-18.0,-7.0)+cv(-18.0,-6.0)+cv(-18.0,6.0)+cv(-18.0,7.0)+cv(-18.0,8.0)+cv(-17.0,-10.0)+cv(-17.0,-9.0)+cv(-17.0,9.0)+cv(-17.0,10.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-13.0)+cv(-15.0,-2.0)+cv(-15.0,-1.0)+cv(-15.0,0.0)+cv(-15.0,1.0)+cv(-15.0,2.0)+cv(-15.0,13.0)+cv(-14.0,-14.0)+cv(-14.0,-5.0)+cv(-14.0,-4.0)+cv(-14.0,-3.0)+cv(-14.0,3.0)+cv(-14.0,4.0)+cv(-14.0,5.0)+cv(-14.0,14.0)+cv(-13.0,-15.0)+cv(-13.0,-7.0)+cv(-13.0,-6.0)+cv(-13.0,6.0)+cv(-13.0,7.0)+cv(-13.0,15.0)+cv(-12.0,-16.0)+cv(-12.0,-9.0)+cv(-12.0,-8.0)+cv(-12.0,8.0)+cv(-12.0,9.0)+cv(-12.0,16.0)+cv(-11.0,-16.0)+cv(-11.0,-10.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,10.0)+cv(-11.0,16.0)+cv(-10.0,-17.0)+cv(-10.0,-11.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,-2.0)+cv(-10.0,2.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-10.0,11.0)+cv(-10.0,17.0)+cv(-9.0,-17.0)+cv(-9.0,-12.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,-5.0)+cv(-9.0,5.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-9.0,12.0)+cv(-9.0,17.0)+cv(-8.0,-18.0)+cv(-8.0,-12.0)+cv(-8.0,-8.0)+cv(-8.0,-7.0)+cv(-8.0,7.0)+cv(-8.0,8.0)+cv(-8.0,12.0)+cv(-8.0,18.0)+cv(-7.0,-18.0)+cv(-7.0,-13.0)+cv(-7.0,-9.0)+cv(-7.0,-8.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,8.0)+cv(-7.0,9.0)+cv(-7.0,13.0)+cv(-7.0,18.0)+cv(-6.0,-18.0)+cv(-6.0,-13.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-6.0,13.0)+cv(-6.0,18.0)+cv(-5.0,-19.0)+cv(-5.0,-14.0)+cv(-5.0,-10.0)+cv(-5.0,-9.0)+cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,9.0)+cv(-5.0,10.0)+cv(-5.0,14.0)+cv(-5.0,19.0)+cv(-4.0,-19.0)+cv(-4.0,-14.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-4.0,14.0)+cv(-4.0,19.0)+cv(-3.0,-19.0)+cv(-3.0,-14.0)+cv(-3.0,-11.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-3.0,11.0);\r
    float nhd2=cv(-3.0,14.0)+cv(-3.0,19.0)+cv(-2.0,-20.0)+cv(-2.0,-15.0)+cv(-2.0,-11.0)+cv(-2.0,-10.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,10.0)+cv(-2.0,11.0)+cv(-2.0,15.0)+cv(-2.0,20.0)+cv(-1.0,-20.0)+cv(-1.0,-15.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,15.0)+cv(-1.0,20.0)+cv(0.0,-20.0)+cv(0.0,-15.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,15.0)+cv(0.0,20.0)+cv(1.0,-20.0)+cv(1.0,-15.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,15.0)+cv(1.0,20.0)+cv(2.0,-20.0)+cv(2.0,-15.0)+cv(2.0,-11.0)+cv(2.0,-10.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,10.0)+cv(2.0,11.0)+cv(2.0,15.0)+cv(2.0,20.0)+cv(3.0,-19.0)+cv(3.0,-14.0)+cv(3.0,-11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(3.0,11.0)+cv(3.0,14.0)+cv(3.0,19.0)+cv(4.0,-19.0)+cv(4.0,-14.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(4.0,14.0)+cv(4.0,19.0)+cv(5.0,-19.0)+cv(5.0,-14.0)+cv(5.0,-10.0)+cv(5.0,-9.0)+cv(5.0,-5.0)+cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,9.0)+cv(5.0,10.0)+cv(5.0,14.0)+cv(5.0,19.0)+cv(6.0,-18.0)+cv(6.0,-13.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(6.0,13.0)+cv(6.0,18.0)+cv(7.0,-18.0)+cv(7.0,-13.0)+cv(7.0,-9.0)+cv(7.0,-8.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,8.0)+cv(7.0,9.0)+cv(7.0,13.0)+cv(7.0,18.0)+cv(8.0,-18.0)+cv(8.0,-12.0)+cv(8.0,-8.0)+cv(8.0,-7.0)+cv(8.0,7.0)+cv(8.0,8.0)+cv(8.0,12.0)+cv(8.0,18.0)+cv(9.0,-17.0)+cv(9.0,-12.0)+cv(9.0,-7.0);\r
    float nhd3=cv(9.0,-6.0)+cv(9.0,-5.0)+cv(9.0,5.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(9.0,12.0)+cv(9.0,17.0)+cv(10.0,-17.0)+cv(10.0,-11.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,-2.0)+cv(10.0,2.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(10.0,11.0)+cv(10.0,17.0)+cv(11.0,-16.0)+cv(11.0,-10.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,10.0)+cv(11.0,16.0)+cv(12.0,-16.0)+cv(12.0,-9.0)+cv(12.0,-8.0)+cv(12.0,8.0)+cv(12.0,9.0)+cv(12.0,16.0)+cv(13.0,-15.0)+cv(13.0,-7.0)+cv(13.0,-6.0)+cv(13.0,6.0)+cv(13.0,7.0)+cv(13.0,15.0)+cv(14.0,-14.0)+cv(14.0,-5.0)+cv(14.0,-4.0)+cv(14.0,-3.0)+cv(14.0,3.0)+cv(14.0,4.0)+cv(14.0,5.0)+cv(14.0,14.0)+cv(15.0,-13.0)+cv(15.0,-2.0)+cv(15.0,-1.0)+cv(15.0,0.0)+cv(15.0,1.0)+cv(15.0,2.0)+cv(15.0,13.0)+cv(16.0,-12.0)+cv(16.0,-11.0)+cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-10.0)+cv(17.0,-9.0)+cv(17.0,9.0)+cv(17.0,10.0)+cv(18.0,-8.0)+cv(18.0,-7.0)+cv(18.0,-6.0)+cv(18.0,6.0)+cv(18.0,7.0)+cv(18.0,8.0)+cv(19.0,-5.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,5.0)+cv(20.0,-2.0)+cv(20.0,-1.0)+cv(20.0,0.0)+cv(20.0,1.0)+cv(20.0,2.0);\r
    float fin_0=nhd0;\r
    float fin_1=nhd1+nhd2+nhd3;\r
    if(fin_0>=0.0&&fin_0<=26.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=29.0&&fin_0<=32.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=153.0&&fin_1<=160.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=101.0&&fin_1<=102.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=72.0&&fin_1<=74.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=55.0&&fin_1<=65.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=170.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,wn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=42.0&&fin_0<=95.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=69.0&&fin_0<=77.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=95.0&&fin_0<=115.0){\r
        outval=0.0;\r
    }\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    if(fin_1>=13.0&&fin_1<=19.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=9.0&&fin_1<=9.0){\r
        outval=0.0;\r
    }\r
    float nhd5=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd6=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd7=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd8=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd9=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd10=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_2=nhd5+nhd6+nhd7+nhd8+nhd9+nhd10;\r
    if(fin_2>=245.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Cn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float nhd1=cv(-20.0,-2.0)+cv(-20.0,-1.0)+cv(-20.0,0.0)+cv(-20.0,1.0)+cv(-20.0,2.0)+cv(-19.0,-5.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,5.0)+cv(-18.0,-8.0)+cv(-18.0,-7.0)+cv(-18.0,-6.0)+cv(-18.0,6.0)+cv(-18.0,7.0)+cv(-18.0,8.0)+cv(-17.0,-10.0)+cv(-17.0,-9.0)+cv(-17.0,9.0)+cv(-17.0,10.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-13.0)+cv(-15.0,-2.0)+cv(-15.0,-1.0)+cv(-15.0,0.0)+cv(-15.0,1.0)+cv(-15.0,2.0)+cv(-15.0,13.0)+cv(-14.0,-14.0)+cv(-14.0,-5.0)+cv(-14.0,-4.0)+cv(-14.0,-3.0)+cv(-14.0,3.0)+cv(-14.0,4.0)+cv(-14.0,5.0)+cv(-14.0,14.0)+cv(-13.0,-15.0)+cv(-13.0,-7.0)+cv(-13.0,-6.0)+cv(-13.0,6.0)+cv(-13.0,7.0)+cv(-13.0,15.0)+cv(-12.0,-16.0)+cv(-12.0,-9.0)+cv(-12.0,-8.0)+cv(-12.0,8.0)+cv(-12.0,9.0)+cv(-12.0,16.0)+cv(-11.0,-16.0)+cv(-11.0,-10.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,10.0)+cv(-11.0,16.0)+cv(-10.0,-17.0)+cv(-10.0,-11.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,-2.0)+cv(-10.0,2.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-10.0,11.0)+cv(-10.0,17.0)+cv(-9.0,-17.0)+cv(-9.0,-12.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,-5.0)+cv(-9.0,5.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-9.0,12.0)+cv(-9.0,17.0)+cv(-8.0,-18.0)+cv(-8.0,-12.0)+cv(-8.0,-8.0)+cv(-8.0,-7.0)+cv(-8.0,7.0)+cv(-8.0,8.0)+cv(-8.0,12.0)+cv(-8.0,18.0)+cv(-7.0,-18.0)+cv(-7.0,-13.0)+cv(-7.0,-9.0)+cv(-7.0,-8.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,8.0)+cv(-7.0,9.0)+cv(-7.0,13.0)+cv(-7.0,18.0)+cv(-6.0,-18.0)+cv(-6.0,-13.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-6.0,13.0)+cv(-6.0,18.0)+cv(-5.0,-19.0)+cv(-5.0,-14.0)+cv(-5.0,-10.0)+cv(-5.0,-9.0)+cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,9.0)+cv(-5.0,10.0)+cv(-5.0,14.0)+cv(-5.0,19.0)+cv(-4.0,-19.0)+cv(-4.0,-14.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-4.0,14.0)+cv(-4.0,19.0)+cv(-3.0,-19.0)+cv(-3.0,-14.0)+cv(-3.0,-11.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-3.0,11.0);\r
    float nhd2=cv(-3.0,14.0)+cv(-3.0,19.0)+cv(-2.0,-20.0)+cv(-2.0,-15.0)+cv(-2.0,-11.0)+cv(-2.0,-10.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,10.0)+cv(-2.0,11.0)+cv(-2.0,15.0)+cv(-2.0,20.0)+cv(-1.0,-20.0)+cv(-1.0,-15.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,15.0)+cv(-1.0,20.0)+cv(0.0,-20.0)+cv(0.0,-15.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,15.0)+cv(0.0,20.0)+cv(1.0,-20.0)+cv(1.0,-15.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,15.0)+cv(1.0,20.0)+cv(2.0,-20.0)+cv(2.0,-15.0)+cv(2.0,-11.0)+cv(2.0,-10.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,10.0)+cv(2.0,11.0)+cv(2.0,15.0)+cv(2.0,20.0)+cv(3.0,-19.0)+cv(3.0,-14.0)+cv(3.0,-11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(3.0,11.0)+cv(3.0,14.0)+cv(3.0,19.0)+cv(4.0,-19.0)+cv(4.0,-14.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(4.0,14.0)+cv(4.0,19.0)+cv(5.0,-19.0)+cv(5.0,-14.0)+cv(5.0,-10.0)+cv(5.0,-9.0)+cv(5.0,-5.0)+cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,9.0)+cv(5.0,10.0)+cv(5.0,14.0)+cv(5.0,19.0)+cv(6.0,-18.0)+cv(6.0,-13.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(6.0,13.0)+cv(6.0,18.0)+cv(7.0,-18.0)+cv(7.0,-13.0)+cv(7.0,-9.0)+cv(7.0,-8.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,8.0)+cv(7.0,9.0)+cv(7.0,13.0)+cv(7.0,18.0)+cv(8.0,-18.0)+cv(8.0,-12.0)+cv(8.0,-8.0)+cv(8.0,-7.0)+cv(8.0,7.0)+cv(8.0,8.0)+cv(8.0,12.0)+cv(8.0,18.0)+cv(9.0,-17.0)+cv(9.0,-12.0)+cv(9.0,-7.0);\r
    float nhd3=cv(9.0,-6.0)+cv(9.0,-5.0)+cv(9.0,5.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(9.0,12.0)+cv(9.0,17.0)+cv(10.0,-17.0)+cv(10.0,-11.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,-2.0)+cv(10.0,2.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(10.0,11.0)+cv(10.0,17.0)+cv(11.0,-16.0)+cv(11.0,-10.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,10.0)+cv(11.0,16.0)+cv(12.0,-16.0)+cv(12.0,-9.0)+cv(12.0,-8.0)+cv(12.0,8.0)+cv(12.0,9.0)+cv(12.0,16.0)+cv(13.0,-15.0)+cv(13.0,-7.0)+cv(13.0,-6.0)+cv(13.0,6.0)+cv(13.0,7.0)+cv(13.0,15.0)+cv(14.0,-14.0)+cv(14.0,-5.0)+cv(14.0,-4.0)+cv(14.0,-3.0)+cv(14.0,3.0)+cv(14.0,4.0)+cv(14.0,5.0)+cv(14.0,14.0)+cv(15.0,-13.0)+cv(15.0,-2.0)+cv(15.0,-1.0)+cv(15.0,0.0)+cv(15.0,1.0)+cv(15.0,2.0)+cv(15.0,13.0)+cv(16.0,-12.0)+cv(16.0,-11.0)+cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-10.0)+cv(17.0,-9.0)+cv(17.0,9.0)+cv(17.0,10.0)+cv(18.0,-8.0)+cv(18.0,-7.0)+cv(18.0,-6.0)+cv(18.0,6.0)+cv(18.0,7.0)+cv(18.0,8.0)+cv(19.0,-5.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,5.0)+cv(20.0,-2.0)+cv(20.0,-1.0)+cv(20.0,0.0)+cv(20.0,1.0)+cv(20.0,2.0);\r
    float fin_0=nhd0;\r
    float fin_1=nhd1+nhd2+nhd3;\r
    if(fin_0>=29.0&&fin_0<=34.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=16.0&&fin_0<=26.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=183.0&&fin_1<=290.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=101.0&&fin_1<=103.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=70.0&&fin_1<=74.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=55.0&&fin_1<=65.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=220.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,xn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=28.0&&fin_0<=35.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>40.0&&fin_0<47.0){\r
        outval=0.0;\r
    }\r
    if(fin_0<25.0){\r
        outval=0.0;\r
    }\r
    float nhd1=cv(-20.0,-2.0)+cv(-20.0,-1.0)+cv(-20.0,0.0)+cv(-20.0,1.0)+cv(-20.0,2.0)+cv(-19.0,-5.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,5.0)+cv(-18.0,-8.0)+cv(-18.0,-7.0)+cv(-18.0,-6.0)+cv(-18.0,6.0)+cv(-18.0,7.0)+cv(-18.0,8.0)+cv(-17.0,-10.0)+cv(-17.0,-9.0)+cv(-17.0,9.0)+cv(-17.0,10.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-13.0)+cv(-15.0,-2.0)+cv(-15.0,-1.0)+cv(-15.0,0.0)+cv(-15.0,1.0)+cv(-15.0,2.0)+cv(-15.0,13.0)+cv(-14.0,-14.0)+cv(-14.0,-5.0)+cv(-14.0,-4.0)+cv(-14.0,-3.0)+cv(-14.0,3.0)+cv(-14.0,4.0)+cv(-14.0,5.0)+cv(-14.0,14.0)+cv(-13.0,-15.0)+cv(-13.0,-7.0)+cv(-13.0,-6.0)+cv(-13.0,6.0)+cv(-13.0,7.0)+cv(-13.0,15.0)+cv(-12.0,-16.0)+cv(-12.0,-9.0)+cv(-12.0,-8.0)+cv(-12.0,8.0)+cv(-12.0,9.0)+cv(-12.0,16.0)+cv(-11.0,-16.0)+cv(-11.0,-10.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0);\r
    float nhd2=cv(-11.0,3.0)+cv(-11.0,10.0)+cv(-11.0,16.0)+cv(-10.0,-17.0)+cv(-10.0,-11.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,-2.0)+cv(-10.0,2.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-10.0,11.0)+cv(-10.0,17.0)+cv(-9.0,-17.0)+cv(-9.0,-12.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,-5.0)+cv(-9.0,5.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-9.0,12.0)+cv(-9.0,17.0)+cv(-8.0,-18.0)+cv(-8.0,-12.0)+cv(-8.0,-8.0)+cv(-8.0,-7.0)+cv(-8.0,7.0)+cv(-8.0,8.0)+cv(-8.0,12.0)+cv(-8.0,18.0)+cv(-7.0,-18.0)+cv(-7.0,-13.0)+cv(-7.0,-9.0)+cv(-7.0,-8.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,8.0)+cv(-7.0,9.0)+cv(-7.0,13.0)+cv(-7.0,18.0)+cv(-6.0,-18.0)+cv(-6.0,-13.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-6.0,13.0)+cv(-6.0,18.0)+cv(-5.0,-19.0)+cv(-5.0,-14.0)+cv(-5.0,-10.0)+cv(-5.0,-9.0);\r
    float nhd3=cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,9.0)+cv(-5.0,10.0)+cv(-5.0,14.0)+cv(-5.0,19.0)+cv(-4.0,-19.0)+cv(-4.0,-14.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-4.0,14.0)+cv(-4.0,19.0)+cv(-3.0,-19.0)+cv(-3.0,-14.0)+cv(-3.0,-11.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-3.0,11.0)+cv(-3.0,14.0)+cv(-3.0,19.0)+cv(-2.0,-20.0)+cv(-2.0,-15.0)+cv(-2.0,-11.0)+cv(-2.0,-10.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,10.0)+cv(-2.0,11.0)+cv(-2.0,15.0)+cv(-2.0,20.0)+cv(-1.0,-20.0)+cv(-1.0,-15.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0);\r
    float nhd4=cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,15.0)+cv(-1.0,20.0)+cv(0.0,-20.0)+cv(0.0,-15.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,15.0)+cv(0.0,20.0)+cv(1.0,-20.0)+cv(1.0,-15.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,15.0)+cv(1.0,20.0)+cv(2.0,-20.0)+cv(2.0,-15.0)+cv(2.0,-11.0)+cv(2.0,-10.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,10.0)+cv(2.0,11.0)+cv(2.0,15.0)+cv(2.0,20.0)+cv(3.0,-19.0)+cv(3.0,-14.0)+cv(3.0,-11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(3.0,11.0);\r
    float nhd5=cv(3.0,14.0)+cv(3.0,19.0)+cv(4.0,-19.0)+cv(4.0,-14.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(4.0,14.0)+cv(4.0,19.0)+cv(5.0,-19.0)+cv(5.0,-14.0)+cv(5.0,-10.0)+cv(5.0,-9.0)+cv(5.0,-5.0)+cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,9.0)+cv(5.0,10.0)+cv(5.0,14.0)+cv(5.0,19.0)+cv(6.0,-18.0)+cv(6.0,-13.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(6.0,13.0)+cv(6.0,18.0)+cv(7.0,-18.0)+cv(7.0,-13.0)+cv(7.0,-9.0)+cv(7.0,-8.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,8.0)+cv(7.0,9.0)+cv(7.0,13.0)+cv(7.0,18.0)+cv(8.0,-18.0)+cv(8.0,-12.0)+cv(8.0,-8.0)+cv(8.0,-7.0)+cv(8.0,7.0)+cv(8.0,8.0)+cv(8.0,12.0)+cv(8.0,18.0)+cv(9.0,-17.0);\r
    float nhd6=cv(9.0,-12.0)+cv(9.0,-7.0)+cv(9.0,-6.0)+cv(9.0,-5.0)+cv(9.0,5.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(9.0,12.0)+cv(9.0,17.0)+cv(10.0,-17.0)+cv(10.0,-11.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,-2.0)+cv(10.0,2.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(10.0,11.0)+cv(10.0,17.0)+cv(11.0,-16.0)+cv(11.0,-10.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,10.0)+cv(11.0,16.0)+cv(12.0,-16.0)+cv(12.0,-9.0)+cv(12.0,-8.0)+cv(12.0,8.0)+cv(12.0,9.0)+cv(12.0,16.0)+cv(13.0,-15.0)+cv(13.0,-7.0)+cv(13.0,-6.0)+cv(13.0,6.0)+cv(13.0,7.0)+cv(13.0,15.0)+cv(14.0,-14.0)+cv(14.0,-5.0)+cv(14.0,-4.0)+cv(14.0,-3.0)+cv(14.0,3.0)+cv(14.0,4.0)+cv(14.0,5.0)+cv(14.0,14.0)+cv(15.0,-13.0)+cv(15.0,-2.0)+cv(15.0,-1.0)+cv(15.0,0.0)+cv(15.0,1.0)+cv(15.0,2.0)+cv(15.0,13.0)+cv(16.0,-12.0)+cv(16.0,-11.0);\r
    float nhd7=cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-10.0)+cv(17.0,-9.0)+cv(17.0,9.0)+cv(17.0,10.0)+cv(18.0,-8.0)+cv(18.0,-7.0)+cv(18.0,-6.0)+cv(18.0,6.0)+cv(18.0,7.0)+cv(18.0,8.0)+cv(19.0,-5.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,5.0)+cv(20.0,-2.0)+cv(20.0,-1.0)+cv(20.0,0.0)+cv(20.0,1.0)+cv(20.0,2.0);\r
    float fin_1=nhd1+nhd2+nhd3+nhd4+nhd5+nhd6+nhd7;\r
    if(fin_1>=225.0&&fin_1<=285.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=124.0&&fin_1<=129.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=81.0&&fin_1<=86.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=62.0&&fin_1<=66.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=24.0&&fin_1<=25.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=95.0&&fin_1<=123.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=290.0&&fin_1<=321.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=331.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Sn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0);\r
    float fin_0=nhd0;\r
    float nhd1=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd2=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd3=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd4=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_1=nhd1+nhd2+nhd3+nhd4;\r
    if(fin_0<=1.0){\r
        outval=0.0;\r
    }\r
    if(fin_0==6.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=8.0&&fin_0<=8.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=69.0&&fin_1<=69.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=129.0&&fin_1<=159.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=139.0&&fin_1<=149.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=76.0&&fin_1<=76.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=41.0&&fin_1<=51.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=180.0&&fin_1<=220.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=250.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,zn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=14.0&&fin_0<=17.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=9.0&&fin_0<=9.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=18.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=0.0&&fin_0<=4.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=7.0&&fin_0<=8.0){\r
        outval=0.0;\r
    }\r
    if(fin_0==9.0){\r
        outval=1.0;\r
    }\r
    float nhd1=cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,0.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,3.0)+cv(-1.0,-4.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,4.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(1.0,-4.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,4.0)+cv(2.0,-3.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,0.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0);\r
    float fin_1=nhd1;\r
    if(fin_1>=13.0&&fin_1<=13.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=4.0&&fin_1<=4.0){\r
        outval=1.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,En=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd1=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_0=nhd0+nhd1;\r
    if(fin_0>=30.0&&fin_0<=40.0){\r
        outval=1.0;\r
    }\r
    if(fin_0<=25.0){\r
        outval=0.0;\r
    }\r
    float nhd2=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd3=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd4=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd5=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_1=nhd2+nhd3+nhd4+nhd5;\r
    if(fin_1>=115.0&&fin_1<=120.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=78.0&&fin_1<=86.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=145.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Tn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=14.0&&fin_0<=17.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=9.0&&fin_0<=9.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=18.0){\r
        outval=0.0;\r
    }\r
    float nhd1=cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,0.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,3.0)+cv(-1.0,-4.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,4.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(1.0,-4.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,4.0)+cv(2.0,-3.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,0.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0);\r
    float fin_1=nhd1;\r
    if(fin_1>=21.0&&fin_1<=31.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=21.0&&fin_1<=26.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=7.0&&fin_1<=7.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=10.0&&fin_1<=16.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=10.0&&fin_1<=13.0){\r
        outval=0.0;\r
    }\r
    float nhd2=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_2=nhd2;\r
    if(fin_2>=7.0&&fin_2<=12.0){\r
        outval=0.0;\r
    }\r
    if(fin_2>=13.0&&fin_2<=14.0){\r
        outval=1.0;\r
    }\r
    if(fin_2>=32.0&&fin_2<=40.0){\r
        outval=0.0;\r
    }\r
    float nhd3=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd4=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd5=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd6=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_3=nhd3+nhd4+nhd5+nhd6;\r
    if(fin_3>=89.0&&fin_3<=92.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=112.0&&fin_3<=170.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=135.0&&fin_3<=140.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=96.0&&fin_3<=100.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,An=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=0.0&&fin_0<=83.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=35.0&&fin_0<=39.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=84.0&&fin_0<=100.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=101.0&&fin_0<=101.0){\r
        outval=0.0;\r
    }\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    float nhd5=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd6=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd7=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd8=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd9=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd10=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_2=nhd5+nhd6+nhd7+nhd8+nhd9+nhd10;\r
    if(fin_1>=200.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Rn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0);\r
    float fin_0=nhd0;\r
    float nhd1=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd2=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd3=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd4=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_1=nhd1+nhd2+nhd3+nhd4;\r
    if(fin_0>=0.0&&fin_0<=1.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=5.0&&fin_0<=7.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=3.0&&fin_0<=3.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=80.0&&fin_1<=83.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=34.0&&fin_1<=34.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=22.0&&fin_1<=33.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=117.0&&fin_1<=124.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=111.0&&fin_1<=112.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=133.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=69.0&&fin_1<=77.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Fn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    if(fin_0>=12.0&&fin_0<=17.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=0.0&&fin_0<=4.0){\r
        outval=0.0;\r
    }\r
    float nhd5=cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,0.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-2.0,-3.0)+cv(-2.0,-1.0)+cv(-2.0,1.0)+cv(-2.0,3.0)+cv(-1.0,-4.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,4.0)+cv(0.0,-4.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,4.0)+cv(1.0,-4.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,4.0)+cv(2.0,-3.0)+cv(2.0,-1.0)+cv(2.0,1.0)+cv(2.0,3.0)+cv(3.0,-3.0)+cv(3.0,-2.0)+cv(3.0,0.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0);\r
    float fin_2=nhd5;\r
    if(fin_1>=21.0&&fin_1<=31.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=8.0&&fin_1<=8.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=10.0&&fin_1<=16.0){\r
        outval=0.0;\r
    }\r
    float nhd6=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_3=nhd6;\r
    if(fin_2>=32.0&&fin_2<=39.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Dn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-7.0,-3.0)+cv(-7.0,0.0)+cv(-7.0,3.0)+cv(-5.0,-5.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,5.0)+cv(-4.0,-3.0)+cv(-4.0,3.0)+cv(-3.0,-7.0)+cv(-3.0,-4.0)+cv(-3.0,4.0)+cv(-3.0,7.0)+cv(-2.0,-5.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,5.0)+cv(-1.0,-5.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,5.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(1.0,-5.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,5.0)+cv(2.0,-5.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,5.0)+cv(3.0,-7.0)+cv(3.0,-4.0)+cv(3.0,4.0)+cv(3.0,7.0)+cv(4.0,-3.0)+cv(4.0,3.0)+cv(5.0,-5.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,5.0)+cv(7.0,-3.0)+cv(7.0,0.0)+cv(7.0,3.0);\r
    float fin_0=nhd0;\r
    if(fin_0>=39.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=21.0&&fin_0<=32.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=26.0&&fin_0<=30.0){\r
        outval=1.0;\r
    }\r
    if(fin_0<=20.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Pn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=29.0&&fin_0<=90.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=97.0&&fin_0<=105.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=137.0&&fin_0<=155.0){\r
        outval=1.0;\r
    }\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    if(fin_1>=13.0&&fin_1<=19.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=9.0&&fin_1<=9.0){\r
        outval=1.0;\r
    }\r
    float nhd5=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd6=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd7=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd8=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd9=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd10=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_2=nhd5+nhd6+nhd7+nhd8+nhd9+nhd10;\r
    if(fin_2>=185.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,In=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    float nhd5=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd6=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_2=nhd5+nhd6;\r
    float nhd7=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd8=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd9=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd10=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd11=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd12=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_3=nhd7+nhd8+nhd9+nhd10+nhd11+nhd12;\r
    if(fin_0<=18.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=10.0&&fin_1<=11.0){\r
        outval=1.0;\r
    }\r
    if(fin_2>=0.0&&fin_2<=17.0){\r
        outval=0.0;\r
    }\r
    if(fin_2>=33.0&&fin_2<=37.0){\r
        outval=1.0;\r
    }\r
    if(fin_2>=45.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=86.0&&fin_3<=134.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=105.0&&fin_3<=111.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=91.0&&fin_3<=95.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=130.0&&fin_3<=135.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=160.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r

}`,Mn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    float nhd4=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float fin_1=nhd4;\r
    float nhd5=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-4.0)+cv(-3.0,-3.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,3.0)+cv(-3.0,4.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-4.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,4.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-5.0)+cv(-1.0,-4.0)+cv(-1.0,4.0)+cv(-1.0,5.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-5.0)+cv(0.0,-4.0)+cv(0.0,4.0)+cv(0.0,5.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-5.0)+cv(1.0,-4.0)+cv(1.0,4.0)+cv(1.0,5.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-4.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,4.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-4.0)+cv(3.0,-3.0);\r
    float nhd6=cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,3.0)+cv(3.0,4.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float fin_2=nhd5+nhd6;\r
    float nhd7=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0);\r
    float nhd8=cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0);\r
    float nhd9=cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0)+cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0);\r
    float nhd10=cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0);\r
    float nhd11=cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0);\r
    float nhd12=cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_3=nhd7+nhd8+nhd9+nhd10+nhd11+nhd12;\r
    if(fin_0<=25.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=10.0&&fin_1<=11.0){\r
        outval=1.0;\r
    }\r
    if(fin_2>=0.0&&fin_2<=17.0){\r
        outval=0.0;\r
    }\r
    if(fin_2>=33.0&&fin_2<=50.0){\r
        outval=1.0;\r
    }\r
    if(fin_2>=50.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=86.0&&fin_3<=134.0){\r
        outval=0.0;\r
    }\r
    if(fin_3>=105.0&&fin_3<=111.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=91.0&&fin_3<=95.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=130.0&&fin_3<=136.0){\r
        outval=1.0;\r
    }\r
    if(fin_3>=145.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r

}`,Nn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=86.0&&fin_0<=110.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=123.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=54.0&&fin_0<=62.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=67.0&&fin_0<=78.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=27.0&&fin_0<=31.0){\r
        outval=1.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Ln=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-3.0,-5.0)+cv(-3.0,-2.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,2.0)+cv(-3.0,5.0)+cv(-2.0,-5.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,5.0)+cv(-1.0,-6.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,6.0)+cv(0.0,-6.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,6.0)+cv(1.0,-6.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,6.0)+cv(2.0,-5.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,5.0)+cv(3.0,-5.0)+cv(3.0,-2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,2.0)+cv(3.0,5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0);\r
    float nhd1=cv(-20.0,-2.0)+cv(-20.0,-1.0)+cv(-20.0,0.0)+cv(-20.0,1.0)+cv(-20.0,2.0)+cv(-19.0,-5.0)+cv(-19.0,-4.0)+cv(-19.0,-3.0)+cv(-19.0,3.0)+cv(-19.0,4.0)+cv(-19.0,5.0)+cv(-18.0,-8.0)+cv(-18.0,-7.0)+cv(-18.0,-6.0)+cv(-18.0,6.0)+cv(-18.0,7.0)+cv(-18.0,8.0)+cv(-17.0,-10.0)+cv(-17.0,-9.0)+cv(-17.0,9.0)+cv(-17.0,10.0)+cv(-16.0,-12.0)+cv(-16.0,-11.0)+cv(-16.0,11.0)+cv(-16.0,12.0)+cv(-15.0,-13.0)+cv(-15.0,-2.0)+cv(-15.0,-1.0)+cv(-15.0,0.0)+cv(-15.0,1.0)+cv(-15.0,2.0)+cv(-15.0,13.0)+cv(-14.0,-14.0)+cv(-14.0,-5.0)+cv(-14.0,-4.0)+cv(-14.0,-3.0)+cv(-14.0,3.0)+cv(-14.0,4.0)+cv(-14.0,5.0)+cv(-14.0,14.0)+cv(-13.0,-15.0)+cv(-13.0,-7.0)+cv(-13.0,-6.0)+cv(-13.0,6.0)+cv(-13.0,7.0)+cv(-13.0,15.0)+cv(-12.0,-16.0)+cv(-12.0,-9.0)+cv(-12.0,-8.0)+cv(-12.0,8.0)+cv(-12.0,9.0)+cv(-12.0,16.0)+cv(-11.0,-16.0)+cv(-11.0,-10.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,10.0)+cv(-11.0,16.0)+cv(-10.0,-17.0)+cv(-10.0,-11.0)+cv(-10.0,-5.0)+cv(-10.0,-4.0)+cv(-10.0,-3.0)+cv(-10.0,-2.0)+cv(-10.0,2.0)+cv(-10.0,3.0)+cv(-10.0,4.0)+cv(-10.0,5.0)+cv(-10.0,11.0)+cv(-10.0,17.0)+cv(-9.0,-17.0)+cv(-9.0,-12.0)+cv(-9.0,-7.0)+cv(-9.0,-6.0)+cv(-9.0,-5.0)+cv(-9.0,5.0)+cv(-9.0,6.0)+cv(-9.0,7.0)+cv(-9.0,12.0)+cv(-9.0,17.0)+cv(-8.0,-18.0)+cv(-8.0,-12.0)+cv(-8.0,-8.0)+cv(-8.0,-7.0)+cv(-8.0,7.0)+cv(-8.0,8.0)+cv(-8.0,12.0)+cv(-8.0,18.0)+cv(-7.0,-18.0)+cv(-7.0,-13.0)+cv(-7.0,-9.0)+cv(-7.0,-8.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,8.0)+cv(-7.0,9.0)+cv(-7.0,13.0)+cv(-7.0,18.0)+cv(-6.0,-18.0)+cv(-6.0,-13.0)+cv(-6.0,-9.0)+cv(-6.0,-3.0)+cv(-6.0,-2.0)+cv(-6.0,-1.0)+cv(-6.0,0.0)+cv(-6.0,1.0)+cv(-6.0,2.0)+cv(-6.0,3.0)+cv(-6.0,9.0)+cv(-6.0,13.0)+cv(-6.0,18.0)+cv(-5.0,-19.0)+cv(-5.0,-14.0)+cv(-5.0,-10.0)+cv(-5.0,-9.0)+cv(-5.0,-5.0)+cv(-5.0,-4.0)+cv(-5.0,-3.0)+cv(-5.0,-2.0)+cv(-5.0,2.0)+cv(-5.0,3.0)+cv(-5.0,4.0)+cv(-5.0,5.0)+cv(-5.0,9.0)+cv(-5.0,10.0)+cv(-5.0,14.0)+cv(-5.0,19.0)+cv(-4.0,-19.0)+cv(-4.0,-14.0)+cv(-4.0,-10.0)+cv(-4.0,-5.0)+cv(-4.0,-4.0)+cv(-4.0,4.0)+cv(-4.0,5.0)+cv(-4.0,10.0)+cv(-4.0,14.0)+cv(-4.0,19.0)+cv(-3.0,-19.0)+cv(-3.0,-14.0)+cv(-3.0,-11.0)+cv(-3.0,-10.0)+cv(-3.0,-6.0)+cv(-3.0,-5.0)+cv(-3.0,5.0)+cv(-3.0,6.0)+cv(-3.0,10.0)+cv(-3.0,11.0)+cv(-3.0,14.0)+cv(-3.0,19.0)+cv(-2.0,-20.0)+cv(-2.0,-15.0)+cv(-2.0,-11.0)+cv(-2.0,-10.0)+cv(-2.0,-6.0)+cv(-2.0,-5.0)+cv(-2.0,-2.0)+cv(-2.0,-1.0)+cv(-2.0,0.0)+cv(-2.0,1.0)+cv(-2.0,2.0)+cv(-2.0,5.0)+cv(-2.0,6.0)+cv(-2.0,10.0)+cv(-2.0,11.0)+cv(-2.0,15.0)+cv(-2.0,20.0)+cv(-1.0,-20.0)+cv(-1.0,-15.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-6.0)+cv(-1.0,-2.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,2.0)+cv(-1.0,6.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,15.0)+cv(-1.0,20.0)+cv(0.0,-20.0)+cv(0.0,-15.0)+cv(0.0,-11.0)+cv(0.0,-7.0);\r
    float nhd2=cv(0.0,-6.0)+cv(0.0,-2.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,2.0)+cv(0.0,6.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,15.0)+cv(0.0,20.0)+cv(1.0,-20.0)+cv(1.0,-15.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-6.0)+cv(1.0,-2.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,2.0)+cv(1.0,6.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,15.0)+cv(1.0,20.0)+cv(2.0,-20.0)+cv(2.0,-15.0)+cv(2.0,-11.0)+cv(2.0,-10.0)+cv(2.0,-6.0)+cv(2.0,-5.0)+cv(2.0,-2.0)+cv(2.0,-1.0)+cv(2.0,0.0)+cv(2.0,1.0)+cv(2.0,2.0)+cv(2.0,5.0)+cv(2.0,6.0)+cv(2.0,10.0)+cv(2.0,11.0)+cv(2.0,15.0)+cv(2.0,20.0)+cv(3.0,-19.0)+cv(3.0,-14.0)+cv(3.0,-11.0)+cv(3.0,-10.0)+cv(3.0,-6.0)+cv(3.0,-5.0)+cv(3.0,5.0)+cv(3.0,6.0)+cv(3.0,10.0)+cv(3.0,11.0)+cv(3.0,14.0)+cv(3.0,19.0)+cv(4.0,-19.0)+cv(4.0,-14.0)+cv(4.0,-10.0)+cv(4.0,-5.0)+cv(4.0,-4.0)+cv(4.0,4.0)+cv(4.0,5.0)+cv(4.0,10.0)+cv(4.0,14.0)+cv(4.0,19.0)+cv(5.0,-19.0)+cv(5.0,-14.0)+cv(5.0,-10.0)+cv(5.0,-9.0)+cv(5.0,-5.0)+cv(5.0,-4.0)+cv(5.0,-3.0)+cv(5.0,-2.0)+cv(5.0,2.0)+cv(5.0,3.0)+cv(5.0,4.0)+cv(5.0,5.0)+cv(5.0,9.0)+cv(5.0,10.0)+cv(5.0,14.0)+cv(5.0,19.0)+cv(6.0,-18.0)+cv(6.0,-13.0)+cv(6.0,-9.0)+cv(6.0,-3.0)+cv(6.0,-2.0)+cv(6.0,-1.0)+cv(6.0,0.0)+cv(6.0,1.0)+cv(6.0,2.0)+cv(6.0,3.0)+cv(6.0,9.0)+cv(6.0,13.0)+cv(6.0,18.0)+cv(7.0,-18.0)+cv(7.0,-13.0)+cv(7.0,-9.0)+cv(7.0,-8.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,8.0)+cv(7.0,9.0)+cv(7.0,13.0)+cv(7.0,18.0)+cv(8.0,-18.0)+cv(8.0,-12.0)+cv(8.0,-8.0)+cv(8.0,-7.0)+cv(8.0,7.0)+cv(8.0,8.0)+cv(8.0,12.0)+cv(8.0,18.0)+cv(9.0,-17.0)+cv(9.0,-12.0)+cv(9.0,-7.0)+cv(9.0,-6.0)+cv(9.0,-5.0)+cv(9.0,5.0)+cv(9.0,6.0)+cv(9.0,7.0)+cv(9.0,12.0)+cv(9.0,17.0)+cv(10.0,-17.0)+cv(10.0,-11.0)+cv(10.0,-5.0)+cv(10.0,-4.0)+cv(10.0,-3.0)+cv(10.0,-2.0)+cv(10.0,2.0)+cv(10.0,3.0)+cv(10.0,4.0)+cv(10.0,5.0)+cv(10.0,11.0)+cv(10.0,17.0)+cv(11.0,-16.0)+cv(11.0,-10.0)+cv(11.0,-3.0)+cv(11.0,-2.0)+cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,10.0)+cv(11.0,16.0)+cv(12.0,-16.0)+cv(12.0,-9.0)+cv(12.0,-8.0)+cv(12.0,8.0)+cv(12.0,9.0)+cv(12.0,16.0)+cv(13.0,-15.0)+cv(13.0,-7.0)+cv(13.0,-6.0)+cv(13.0,6.0)+cv(13.0,7.0)+cv(13.0,15.0)+cv(14.0,-14.0)+cv(14.0,-5.0)+cv(14.0,-4.0)+cv(14.0,-3.0)+cv(14.0,3.0)+cv(14.0,4.0)+cv(14.0,5.0)+cv(14.0,14.0)+cv(15.0,-13.0)+cv(15.0,-2.0)+cv(15.0,-1.0)+cv(15.0,0.0)+cv(15.0,1.0)+cv(15.0,2.0)+cv(15.0,13.0)+cv(16.0,-12.0)+cv(16.0,-11.0)+cv(16.0,11.0)+cv(16.0,12.0)+cv(17.0,-10.0)+cv(17.0,-9.0)+cv(17.0,9.0)+cv(17.0,10.0)+cv(18.0,-8.0)+cv(18.0,-7.0)+cv(18.0,-6.0)+cv(18.0,6.0)+cv(18.0,7.0)+cv(18.0,8.0)+cv(19.0,-5.0)+cv(19.0,-4.0)+cv(19.0,-3.0)+cv(19.0,3.0)+cv(19.0,4.0)+cv(19.0,5.0)+cv(20.0,-2.0)+cv(20.0,-1.0)+cv(20.0,0.0)+cv(20.0,1.0)+cv(20.0,2.0);\r
    float fin_0=nhd0;\r
    float fin_1=nhd1+nhd2;\r
    if(fin_0>=28.0&&fin_0<=35.0){\r
        outval=1.0;\r
    }\r
    if(fin_0<=25.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=41.0&&fin_0<=46.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=290.0){\r
        outval=0.0;\r
    }\r
    if(fin_1>=180.0&&fin_1<=280.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=210.0&&fin_1<=270.0){\r
        outval=1.0;\r
    }\r
    if(fin_1==89.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=69.0&&fin_1<=74.0){\r
        outval=1.0;\r
    }\r
    if(fin_1>=310.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Bn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0)+cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0)+cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0);\r
    float nhd1=cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float nhd2=cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0);\r
    float nhd3=cv(-14.0,-3.0)+cv(-14.0,-2.0)+cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-14.0,2.0)+cv(-14.0,3.0)+cv(-13.0,-6.0)+cv(-13.0,-5.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,-1.0)+cv(-13.0,0.0)+cv(-13.0,1.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-13.0,5.0)+cv(-13.0,6.0)+cv(-12.0,-8.0)+cv(-12.0,-7.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,-4.0)+cv(-12.0,-3.0)+cv(-12.0,-2.0)+cv(-12.0,-1.0)+cv(-12.0,0.0)+cv(-12.0,1.0)+cv(-12.0,2.0)+cv(-12.0,3.0)+cv(-12.0,4.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-12.0,7.0)+cv(-12.0,8.0)+cv(-11.0,-9.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,-6.0)+cv(-11.0,-5.0)+cv(-11.0,-4.0)+cv(-11.0,-3.0)+cv(-11.0,-2.0)+cv(-11.0,-1.0)+cv(-11.0,0.0)+cv(-11.0,1.0)+cv(-11.0,2.0)+cv(-11.0,3.0)+cv(-11.0,4.0)+cv(-11.0,5.0)+cv(-11.0,6.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-11.0,9.0)+cv(-10.0,-10.0)+cv(-10.0,-9.0)+cv(-10.0,-8.0)+cv(-10.0,-7.0)+cv(-10.0,-6.0)+cv(-10.0,-5.0)+cv(-10.0,5.0)+cv(-10.0,6.0)+cv(-10.0,7.0)+cv(-10.0,8.0)+cv(-10.0,9.0)+cv(-10.0,10.0)+cv(-9.0,-11.0)+cv(-9.0,-10.0)+cv(-9.0,-9.0)+cv(-9.0,-8.0)+cv(-9.0,-7.0)+cv(-9.0,7.0)+cv(-9.0,8.0)+cv(-9.0,9.0)+cv(-9.0,10.0)+cv(-9.0,11.0)+cv(-8.0,-12.0)+cv(-8.0,-11.0)+cv(-8.0,-10.0)+cv(-8.0,-9.0)+cv(-8.0,-8.0)+cv(-8.0,8.0)+cv(-8.0,9.0)+cv(-8.0,10.0)+cv(-8.0,11.0)+cv(-8.0,12.0)+cv(-7.0,-12.0)+cv(-7.0,-11.0)+cv(-7.0,-10.0)+cv(-7.0,-9.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,9.0)+cv(-7.0,10.0)+cv(-7.0,11.0)+cv(-7.0,12.0)+cv(-6.0,-13.0)+cv(-6.0,-12.0)+cv(-6.0,-11.0)+cv(-6.0,-10.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,10.0)+cv(-6.0,11.0)+cv(-6.0,12.0)+cv(-6.0,13.0)+cv(-5.0,-13.0)+cv(-5.0,-12.0)+cv(-5.0,-11.0)+cv(-5.0,-10.0)+cv(-5.0,-5.0)+cv(-5.0,5.0)+cv(-5.0,10.0)+cv(-5.0,11.0)+cv(-5.0,12.0)+cv(-5.0,13.0)+cv(-4.0,-13.0)+cv(-4.0,-12.0)+cv(-4.0,-11.0)+cv(-4.0,-6.0)+cv(-4.0,-1.0)+cv(-4.0,0.0)+cv(-4.0,1.0)+cv(-4.0,6.0)+cv(-4.0,11.0)+cv(-4.0,12.0)+cv(-4.0,13.0)+cv(-3.0,-14.0)+cv(-3.0,-13.0)+cv(-3.0,-12.0)+cv(-3.0,-11.0)+cv(-3.0,-6.0)+cv(-3.0,-2.0)+cv(-3.0,2.0)+cv(-3.0,6.0)+cv(-3.0,11.0)+cv(-3.0,12.0)+cv(-3.0,13.0)+cv(-3.0,14.0)+cv(-2.0,-14.0)+cv(-2.0,-13.0)+cv(-2.0,-12.0)+cv(-2.0,-11.0)+cv(-2.0,-7.0)+cv(-2.0,-3.0)+cv(-2.0,3.0)+cv(-2.0,7.0)+cv(-2.0,11.0)+cv(-2.0,12.0);\r
    float nhd4=cv(-2.0,13.0)+cv(-2.0,14.0)+cv(-1.0,-14.0)+cv(-1.0,-13.0)+cv(-1.0,-12.0)+cv(-1.0,-11.0)+cv(-1.0,-7.0)+cv(-1.0,-4.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,4.0)+cv(-1.0,7.0)+cv(-1.0,11.0)+cv(-1.0,12.0)+cv(-1.0,13.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-13.0)+cv(0.0,-12.0)+cv(0.0,-11.0)+cv(0.0,-7.0)+cv(0.0,-4.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,4.0)+cv(0.0,7.0)+cv(0.0,11.0)+cv(0.0,12.0)+cv(0.0,13.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-13.0)+cv(1.0,-12.0)+cv(1.0,-11.0)+cv(1.0,-7.0)+cv(1.0,-4.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,4.0)+cv(1.0,7.0)+cv(1.0,11.0)+cv(1.0,12.0)+cv(1.0,13.0)+cv(1.0,14.0)+cv(2.0,-14.0)+cv(2.0,-13.0)+cv(2.0,-12.0)+cv(2.0,-11.0)+cv(2.0,-7.0)+cv(2.0,-3.0)+cv(2.0,3.0)+cv(2.0,7.0)+cv(2.0,11.0)+cv(2.0,12.0)+cv(2.0,13.0)+cv(2.0,14.0)+cv(3.0,-14.0)+cv(3.0,-13.0)+cv(3.0,-12.0)+cv(3.0,-11.0)+cv(3.0,-6.0)+cv(3.0,-2.0)+cv(3.0,2.0)+cv(3.0,6.0)+cv(3.0,11.0)+cv(3.0,12.0)+cv(3.0,13.0)+cv(3.0,14.0)+cv(4.0,-13.0)+cv(4.0,-12.0)+cv(4.0,-11.0)+cv(4.0,-6.0)+cv(4.0,-1.0)+cv(4.0,0.0)+cv(4.0,1.0)+cv(4.0,6.0)+cv(4.0,11.0)+cv(4.0,12.0)+cv(4.0,13.0)+cv(5.0,-13.0)+cv(5.0,-12.0)+cv(5.0,-11.0)+cv(5.0,-10.0)+cv(5.0,-5.0)+cv(5.0,5.0)+cv(5.0,10.0)+cv(5.0,11.0)+cv(5.0,12.0)+cv(5.0,13.0)+cv(6.0,-13.0)+cv(6.0,-12.0)+cv(6.0,-11.0)+cv(6.0,-10.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,10.0)+cv(6.0,11.0)+cv(6.0,12.0)+cv(6.0,13.0)+cv(7.0,-12.0)+cv(7.0,-11.0)+cv(7.0,-10.0)+cv(7.0,-9.0)+cv(7.0,-2.0)+cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,9.0)+cv(7.0,10.0)+cv(7.0,11.0)+cv(7.0,12.0)+cv(8.0,-12.0)+cv(8.0,-11.0)+cv(8.0,-10.0)+cv(8.0,-9.0)+cv(8.0,-8.0)+cv(8.0,8.0)+cv(8.0,9.0)+cv(8.0,10.0)+cv(8.0,11.0)+cv(8.0,12.0)+cv(9.0,-11.0)+cv(9.0,-10.0)+cv(9.0,-9.0)+cv(9.0,-8.0)+cv(9.0,-7.0)+cv(9.0,7.0)+cv(9.0,8.0)+cv(9.0,9.0)+cv(9.0,10.0)+cv(9.0,11.0)+cv(10.0,-10.0)+cv(10.0,-9.0)+cv(10.0,-8.0)+cv(10.0,-7.0)+cv(10.0,-6.0)+cv(10.0,-5.0)+cv(10.0,5.0)+cv(10.0,6.0)+cv(10.0,7.0)+cv(10.0,8.0)+cv(10.0,9.0)+cv(10.0,10.0)+cv(11.0,-9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,-6.0)+cv(11.0,-5.0)+cv(11.0,-4.0)+cv(11.0,-3.0)+cv(11.0,-2.0);\r
    float nhd5=cv(11.0,-1.0)+cv(11.0,0.0)+cv(11.0,1.0)+cv(11.0,2.0)+cv(11.0,3.0)+cv(11.0,4.0)+cv(11.0,5.0)+cv(11.0,6.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(11.0,9.0)+cv(12.0,-8.0)+cv(12.0,-7.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,-4.0)+cv(12.0,-3.0)+cv(12.0,-2.0)+cv(12.0,-1.0)+cv(12.0,0.0)+cv(12.0,1.0)+cv(12.0,2.0)+cv(12.0,3.0)+cv(12.0,4.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(12.0,7.0)+cv(12.0,8.0)+cv(13.0,-6.0)+cv(13.0,-5.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,-1.0)+cv(13.0,0.0)+cv(13.0,1.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(13.0,5.0)+cv(13.0,6.0)+cv(14.0,-3.0)+cv(14.0,-2.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0)+cv(14.0,2.0)+cv(14.0,3.0);\r
    float fin_0=nhd0+nhd1;\r
    if(fin_0>=120.0&&fin_0<=149.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=79.0&&fin_0<=80.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=157.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=40.0&&fin_0<=55.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=143.0&&fin_0<=155.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);\r
}`,Gn=`#version 300 es\r
precision mediump float;\r
out vec4 fragColor;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
float cv(float fx,float fy){\r
    vec2 v=vec2(fx,fy);\r
    float o=texture(state,(gl_FragCoord.xy+v)/screenSize).r;\r
    if(o>0.0){\r
        return 1.0;\r
    }else{\r
        return 0.0;\r
    }\r
}\r
void main(){\r
    float outval=cv(0.0,0.0);\r
    float nhd0=cv(-14.0,-1.0)+cv(-14.0,0.0)+cv(-14.0,1.0)+cv(-13.0,-4.0)+cv(-13.0,-3.0)+cv(-13.0,-2.0)+cv(-13.0,2.0)+cv(-13.0,3.0)+cv(-13.0,4.0)+cv(-12.0,-6.0)+cv(-12.0,-5.0)+cv(-12.0,5.0)+cv(-12.0,6.0)+cv(-11.0,-8.0)+cv(-11.0,-7.0)+cv(-11.0,7.0)+cv(-11.0,8.0)+cv(-10.0,-9.0)+cv(-10.0,-1.0)+cv(-10.0,0.0)+cv(-10.0,1.0)+cv(-10.0,9.0)+cv(-9.0,-10.0)+cv(-9.0,-4.0)+cv(-9.0,-3.0)+cv(-9.0,-2.0)+cv(-9.0,2.0)+cv(-9.0,3.0)+cv(-9.0,4.0)+cv(-9.0,10.0)+cv(-8.0,-11.0)+cv(-8.0,-6.0)+cv(-8.0,-5.0)+cv(-8.0,5.0)+cv(-8.0,6.0)+cv(-8.0,11.0)+cv(-7.0,-11.0)+cv(-7.0,-7.0)+cv(-7.0,-2.0)+cv(-7.0,-1.0)+cv(-7.0,0.0)+cv(-7.0,1.0)+cv(-7.0,2.0)+cv(-7.0,7.0)+cv(-7.0,11.0)+cv(-6.0,-12.0)+cv(-6.0,-8.0)+cv(-6.0,-4.0)+cv(-6.0,-3.0)+cv(-6.0,3.0)+cv(-6.0,4.0)+cv(-6.0,8.0)+cv(-6.0,12.0)+cv(-5.0,-12.0)+cv(-5.0,-8.0)+cv(-5.0,-5.0)+cv(-5.0,-1.0)+cv(-5.0,0.0)+cv(-5.0,1.0)+cv(-5.0,5.0);\r
    float nhd1=cv(-5.0,8.0)+cv(-5.0,12.0)+cv(-4.0,-13.0)+cv(-4.0,-9.0)+cv(-4.0,-6.0)+cv(-4.0,-3.0)+cv(-4.0,-2.0)+cv(-4.0,2.0)+cv(-4.0,3.0)+cv(-4.0,6.0)+cv(-4.0,9.0)+cv(-4.0,13.0)+cv(-3.0,-13.0)+cv(-3.0,-9.0)+cv(-3.0,-6.0)+cv(-3.0,-4.0)+cv(-3.0,-1.0)+cv(-3.0,0.0)+cv(-3.0,1.0)+cv(-3.0,4.0)+cv(-3.0,6.0)+cv(-3.0,9.0)+cv(-3.0,13.0)+cv(-2.0,-13.0)+cv(-2.0,-9.0)+cv(-2.0,-7.0)+cv(-2.0,-4.0)+cv(-2.0,-2.0)+cv(-2.0,2.0)+cv(-2.0,4.0)+cv(-2.0,7.0)+cv(-2.0,9.0)+cv(-2.0,13.0)+cv(-1.0,-14.0)+cv(-1.0,-10.0)+cv(-1.0,-7.0)+cv(-1.0,-5.0)+cv(-1.0,-3.0)+cv(-1.0,-1.0)+cv(-1.0,0.0)+cv(-1.0,1.0)+cv(-1.0,3.0)+cv(-1.0,5.0)+cv(-1.0,7.0)+cv(-1.0,10.0)+cv(-1.0,14.0)+cv(0.0,-14.0)+cv(0.0,-10.0)+cv(0.0,-7.0)+cv(0.0,-5.0)+cv(0.0,-3.0)+cv(0.0,-1.0)+cv(0.0,1.0)+cv(0.0,3.0)+cv(0.0,5.0)+cv(0.0,7.0)+cv(0.0,10.0)+cv(0.0,14.0)+cv(1.0,-14.0)+cv(1.0,-10.0)+cv(1.0,-7.0);\r
    float nhd2=cv(1.0,-5.0)+cv(1.0,-3.0)+cv(1.0,-1.0)+cv(1.0,0.0)+cv(1.0,1.0)+cv(1.0,3.0)+cv(1.0,5.0)+cv(1.0,7.0)+cv(1.0,10.0)+cv(1.0,14.0)+cv(2.0,-13.0)+cv(2.0,-9.0)+cv(2.0,-7.0)+cv(2.0,-4.0)+cv(2.0,-2.0)+cv(2.0,2.0)+cv(2.0,4.0)+cv(2.0,7.0)+cv(2.0,9.0)+cv(2.0,13.0)+cv(3.0,-13.0)+cv(3.0,-9.0)+cv(3.0,-6.0)+cv(3.0,-4.0)+cv(3.0,-1.0)+cv(3.0,0.0)+cv(3.0,1.0)+cv(3.0,4.0)+cv(3.0,6.0)+cv(3.0,9.0)+cv(3.0,13.0)+cv(4.0,-13.0)+cv(4.0,-9.0)+cv(4.0,-6.0)+cv(4.0,-3.0)+cv(4.0,-2.0)+cv(4.0,2.0)+cv(4.0,3.0)+cv(4.0,6.0)+cv(4.0,9.0)+cv(4.0,13.0)+cv(5.0,-12.0)+cv(5.0,-8.0)+cv(5.0,-5.0)+cv(5.0,-1.0)+cv(5.0,0.0)+cv(5.0,1.0)+cv(5.0,5.0)+cv(5.0,8.0)+cv(5.0,12.0)+cv(6.0,-12.0)+cv(6.0,-8.0)+cv(6.0,-4.0)+cv(6.0,-3.0)+cv(6.0,3.0)+cv(6.0,4.0)+cv(6.0,8.0)+cv(6.0,12.0)+cv(7.0,-11.0)+cv(7.0,-7.0)+cv(7.0,-2.0);\r
    float nhd3=cv(7.0,-1.0)+cv(7.0,0.0)+cv(7.0,1.0)+cv(7.0,2.0)+cv(7.0,7.0)+cv(7.0,11.0)+cv(8.0,-11.0)+cv(8.0,-6.0)+cv(8.0,-5.0)+cv(8.0,5.0)+cv(8.0,6.0)+cv(8.0,11.0)+cv(9.0,-10.0)+cv(9.0,-4.0)+cv(9.0,-3.0)+cv(9.0,-2.0)+cv(9.0,2.0)+cv(9.0,3.0)+cv(9.0,4.0)+cv(9.0,10.0)+cv(10.0,-9.0)+cv(10.0,-1.0)+cv(10.0,0.0)+cv(10.0,1.0)+cv(10.0,9.0)+cv(11.0,-8.0)+cv(11.0,-7.0)+cv(11.0,7.0)+cv(11.0,8.0)+cv(12.0,-6.0)+cv(12.0,-5.0)+cv(12.0,5.0)+cv(12.0,6.0)+cv(13.0,-4.0)+cv(13.0,-3.0)+cv(13.0,-2.0)+cv(13.0,2.0)+cv(13.0,3.0)+cv(13.0,4.0)+cv(14.0,-1.0)+cv(14.0,0.0)+cv(14.0,1.0);\r
    float fin_0=nhd0+nhd1+nhd2+nhd3;\r
    if(fin_0>=155.0){\r
        outval=0.0;\r
    }\r
    if(fin_0>=67.0&&fin_0<=68.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=86.0&&fin_0<=172.0){\r
        outval=1.0;\r
    }\r
    if(fin_0>=81.0&&fin_0<=105.0){\r
        outval=0.0;\r
    }\r
    fragColor=vec4(outval,outval,outval,1.0);

}`;const uc=[{name:"hungry cells",r:.53,src:gn},{name:"walking cells",r:.33,src:Nn,mobile:!0},{name:"flame",r:.3,src:fn,mobile:!0},{name:"mold",r:.3,src:wn},{name:"growing mold",r:.22,src:hn,mobile:!0},{name:"zebra",r:.45,src:Bn,mobile:!0},{name:"petri dish",r:.05,src:zn,mobile:!0},{name:"square worms",r:.51,src:Pn},{name:"bacteria",r:.5,src:K1},{name:"mitosis",r:.37,src:kn},{name:"patches",r:.4,src:Sn,mobile:!0},{name:"gears",r:.38,src:dn,mobile:!0},{name:"chained cells",r:.45,src:vn},{name:"primordial soup",r:.25,src:En,mobile:!0},{name:"primordial soup 2",r:.03,src:Tn,mobile:!0},{name:"cancer growth",r:.58,src:J1,mobile:!0},{name:"quicksand",r:.5,src:An,mobile:!0},{name:"flammable gas",r:.75,src:sn,mobile:!0},{name:"tentacles",r:.3,src:In},{name:"random walkers",r:.5,src:Rn,mobile:!0},{name:"game of life",r:.4,src:un,mobile:!0},{name:"guts",r:.5,src:_n,mobile:!0},{name:"crystals",r:.42,src:nn,mobile:!0},{name:"cells and worms",r:.4,src:$1},{name:"cells and worms 2",r:.35,src:cn},{name:"worms and cells",r:.38,src:Ln},{name:"amoebas and cancer",r:.35,src:q1},{name:"expanding worms",r:.45,src:on},{name:"expanding worms 2",r:.3,src:ln,mobile:!0},{name:"expanding worms 3",r:.42,src:an},{name:"kaleidoscope",r:.93,src:mn,mobile:!0},{name:"region maker",r:.5,src:Fn,mobile:!0},{name:"noisy cells",r:.45,src:xn},{name:"multicore primordial soup",r:.4,src:Cn},{name:"dividing dots",r:.5,src:rn,mobile:!0},{name:"medusa gliders",r:.5,src:bn,mobile:!0},{name:"medusa gliders 2",r:.35,src:yn},{name:"borders",r:.5,src:Q1,mobile:!0},{name:"borders 2",r:.09,src:Z1,mobile:!0},{name:"zones and cells",r:.3,src:Gn},{name:"trypophobic",r:.3,src:Mn},{name:"smoke walls",r:.3,src:Dn,mobile:!0},{name:"dotted amoebas",r:.5,src:tn},{name:"lazy builder",r:.3,src:pn,mobile:!0},{name:"day and night",r:.5,src:en,mobile:!0}],Fc=R0(!0),hc=R0(!1),nc=R0(.4),zc=R0(""),_c=R0(50),N0=R0(2),Qc=R0(!1),gc=R0([1024,1024]);function rc(){return"ontouchstart"in window||navigator.maxTouchPoints>0&&navigator.maxTouchPoints!==256}const cv="-";function Un(v){const c=Wn(v),{conflictingClassGroups:n,conflictingClassGroupModifiers:e}=v;function r(o){const i=o.split(cv);return i[0]===""&&i.length!==1&&i.shift(),i1(i,c)||On(o)}function t(o,i){const l=n[o]||[];return i&&e[o]?[...l,...e[o]]:l}return{getClassGroupId:r,getConflictingClassGroupIds:t}}function i1(v,c){var o;if(v.length===0)return c.classGroupId;const n=v[0],e=c.nextPart.get(n),r=e?i1(v.slice(1),e):void 0;if(r)return r;if(c.validators.length===0)return;const t=v.join(cv);return(o=c.validators.find(({validator:i})=>i(t)))==null?void 0:o.classGroupId}const Nv=/^\[(.+)\]$/;function On(v){if(Nv.test(v)){const c=Nv.exec(v)[1],n=c==null?void 0:c.substring(0,c.indexOf(":"));if(n)return"arbitrary.."+n}}function Wn(v){const{theme:c,prefix:n}=v,e={nextPart:new Map,validators:[]};return Xn(Object.entries(v.classGroups),n).forEach(([t,o])=>{Zc(o,e,t,c)}),e}function Zc(v,c,n,e){v.forEach(r=>{if(typeof r=="string"){const t=r===""?c:Lv(c,r);t.classGroupId=n;return}if(typeof r=="function"){if(jn(r)){Zc(r(e),c,n,e);return}c.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([t,o])=>{Zc(o,Lv(c,t),n,e)})})}function Lv(v,c){let n=v;return c.split(cv).forEach(e=>{n.nextPart.has(e)||n.nextPart.set(e,{nextPart:new Map,validators:[]}),n=n.nextPart.get(e)}),n}function jn(v){return v.isThemeGetter}function Xn(v,c){return c?v.map(([n,e])=>{const r=e.map(t=>typeof t=="string"?c+t:typeof t=="object"?Object.fromEntries(Object.entries(t).map(([o,i])=>[c+o,i])):t);return[n,r]}):v}function Yn(v){if(v<1)return{get:()=>{},set:()=>{}};let c=0,n=new Map,e=new Map;function r(t,o){n.set(t,o),c++,c>v&&(c=0,e=n,n=new Map)}return{get(t){let o=n.get(t);if(o!==void 0)return o;if((o=e.get(t))!==void 0)return r(t,o),o},set(t,o){n.has(t)?n.set(t,o):r(t,o)}}}const a1="!";function Hn(v){const c=v.separator,n=c.length===1,e=c[0],r=c.length;return function(o){const i=[];let l=0,a=0,f;for(let m=0;m<o.length;m++){let h=o[m];if(l===0){if(h===e&&(n||o.slice(m,m+r)===c)){i.push(o.slice(a,m)),a=m+r;continue}if(h==="/"){f=m;continue}}h==="["?l++:h==="]"&&l--}const s=i.length===0?o:o.substring(a),u=s.startsWith(a1),d=u?s.substring(1):s,_=f&&f>a?f-a:void 0;return{modifiers:i,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:_}}}function Vn(v){if(v.length<=1)return v;const c=[];let n=[];return v.forEach(e=>{e[0]==="["?(c.push(...n.sort(),e),n=[]):n.push(e)}),c.push(...n.sort()),c}function qn(v){return{cache:Yn(v.cacheSize),splitModifiers:Hn(v),...Un(v)}}const Kn=/\s+/;function Qn(v,c){const{splitModifiers:n,getClassGroupId:e,getConflictingClassGroupIds:r}=c,t=new Set;return v.trim().split(Kn).map(o=>{const{modifiers:i,hasImportantModifier:l,baseClassName:a,maybePostfixModifierPosition:f}=n(o);let s=e(f?a.substring(0,f):a),u=!!f;if(!s){if(!f)return{isTailwindClass:!1,originalClassName:o};if(s=e(a),!s)return{isTailwindClass:!1,originalClassName:o};u=!1}const d=Vn(i).join(":");return{isTailwindClass:!0,modifierId:l?d+a1:d,classGroupId:s,originalClassName:o,hasPostfixModifier:u}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:i,classGroupId:l,hasPostfixModifier:a}=o,f=i+l;return t.has(f)?!1:(t.add(f),r(l,a).forEach(s=>t.add(i+s)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function Zn(){let v=0,c,n,e="";for(;v<arguments.length;)(c=arguments[v++])&&(n=f1(c))&&(e&&(e+=" "),e+=n);return e}function f1(v){if(typeof v=="string")return v;let c,n="";for(let e=0;e<v.length;e++)v[e]&&(c=f1(v[e]))&&(n&&(n+=" "),n+=c);return n}function Jn(v,...c){let n,e,r,t=o;function o(l){const a=c.reduce((f,s)=>s(f),v());return n=qn(a),e=n.cache.get,r=n.cache.set,t=i,i(l)}function i(l){const a=e(l);if(a)return a;const f=Qn(l,n);return r(l,f),f}return function(){return t(Zn.apply(null,arguments))}}function Z(v){const c=n=>n[v]||[];return c.isThemeGetter=!0,c}const s1=/^\[(?:([a-z-]+):)?(.+)\]$/i,$n=/^\d+\/\d+$/,ce=new Set(["px","full","screen"]),ve=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ne=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ee=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,re=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function E0(v){return Q0(v)||ce.has(v)||$n.test(v)}function I0(v){return tc(v,"length",ue)}function Q0(v){return!!v&&!Number.isNaN(Number(v))}function xc(v){return tc(v,"number",Q0)}function fc(v){return!!v&&Number.isInteger(Number(v))}function te(v){return v.endsWith("%")&&Q0(v.slice(0,-1))}function j(v){return s1.test(v)}function M0(v){return ve.test(v)}const oe=new Set(["length","size","percentage"]);function le(v){return tc(v,oe,u1)}function ie(v){return tc(v,"position",u1)}const ae=new Set(["image","url"]);function fe(v){return tc(v,ae,he)}function se(v){return tc(v,"",de)}function sc(){return!0}function tc(v,c,n){const e=s1.exec(v);return e?e[1]?typeof c=="string"?e[1]===c:c.has(e[1]):n(e[2]):!1}function ue(v){return ne.test(v)}function u1(){return!1}function de(v){return ee.test(v)}function he(v){return re.test(v)}function _e(){const v=Z("colors"),c=Z("spacing"),n=Z("blur"),e=Z("brightness"),r=Z("borderColor"),t=Z("borderRadius"),o=Z("borderSpacing"),i=Z("borderWidth"),l=Z("contrast"),a=Z("grayscale"),f=Z("hueRotate"),s=Z("invert"),u=Z("gap"),d=Z("gradientColorStops"),_=Z("gradientColorStopPositions"),m=Z("inset"),h=Z("margin"),p=Z("opacity"),S=Z("padding"),L=Z("saturate"),P=Z("scale"),q=Z("sepia"),$=Z("skew"),K=Z("space"),c0=Z("translate"),V=()=>["auto","contain","none"],J=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",j,c],N=()=>[j,c],F=()=>["",E0,I0],E=()=>["auto",Q0,j],T=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],g=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],l0=()=>["start","end","center","between","around","evenly","stretch"],h0=()=>["","0",j],z0=()=>["auto","avoid","all","avoid-page","page","left","right","column"],x0=()=>[Q0,xc],w0=()=>[Q0,j];return{cacheSize:500,separator:":",theme:{colors:[sc],spacing:[E0,I0],blur:["none","",M0,j],brightness:x0(),borderColor:[v],borderRadius:["none","","full",M0,j],borderSpacing:N(),borderWidth:F(),contrast:x0(),grayscale:h0(),hueRotate:w0(),invert:h0(),gap:N(),gradientColorStops:[v],gradientColorStopPositions:[te,I0],inset:D(),margin:D(),opacity:x0(),padding:N(),saturate:x0(),scale:x0(),sepia:h0(),skew:w0(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",j]}],container:["container"],columns:[{columns:[M0]}],"break-after":[{"break-after":z0()}],"break-before":[{"break-before":z0()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...T(),j]}],overflow:[{overflow:J()}],"overflow-x":[{"overflow-x":J()}],"overflow-y":[{"overflow-y":J()}],overscroll:[{overscroll:V()}],"overscroll-x":[{"overscroll-x":V()}],"overscroll-y":[{"overscroll-y":V()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",fc,j]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",j]}],grow:[{grow:h0()}],shrink:[{shrink:h0()}],order:[{order:["first","last","none",fc,j]}],"grid-cols":[{"grid-cols":[sc]}],"col-start-end":[{col:["auto",{span:["full",fc,j]},j]}],"col-start":[{"col-start":E()}],"col-end":[{"col-end":E()}],"grid-rows":[{"grid-rows":[sc]}],"row-start-end":[{row:["auto",{span:[fc,j]},j]}],"row-start":[{"row-start":E()}],"row-end":[{"row-end":E()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",j]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",j]}],gap:[{gap:[u]}],"gap-x":[{"gap-x":[u]}],"gap-y":[{"gap-y":[u]}],"justify-content":[{justify:["normal",...l0()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...l0(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...l0(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[K]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[K]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",j,c]}],"min-w":[{"min-w":["min","max","fit",j,E0]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[M0]},M0,j]}],h:[{h:[j,c,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",E0,j]}],"max-h":[{"max-h":[j,c,"min","max","fit"]}],"font-size":[{text:["base",M0,I0]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",xc]}],"font-family":[{font:[sc]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",j]}],"line-clamp":[{"line-clamp":["none",Q0,xc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",E0,j]}],"list-image":[{"list-image":["none",j]}],"list-style-type":[{list:["none","disc","decimal",j]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[v]}],"placeholder-opacity":[{"placeholder-opacity":[p]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[v]}],"text-opacity":[{"text-opacity":[p]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...g(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",E0,I0]}],"underline-offset":[{"underline-offset":["auto",E0,j]}],"text-decoration-color":[{decoration:[v]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",j]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",j]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[p]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...T(),ie]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",le]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},fe]}],"bg-color":[{bg:[v]}],"gradient-from-pos":[{from:[_]}],"gradient-via-pos":[{via:[_]}],"gradient-to-pos":[{to:[_]}],"gradient-from":[{from:[d]}],"gradient-via":[{via:[d]}],"gradient-to":[{to:[d]}],rounded:[{rounded:[t]}],"rounded-s":[{"rounded-s":[t]}],"rounded-e":[{"rounded-e":[t]}],"rounded-t":[{"rounded-t":[t]}],"rounded-r":[{"rounded-r":[t]}],"rounded-b":[{"rounded-b":[t]}],"rounded-l":[{"rounded-l":[t]}],"rounded-ss":[{"rounded-ss":[t]}],"rounded-se":[{"rounded-se":[t]}],"rounded-ee":[{"rounded-ee":[t]}],"rounded-es":[{"rounded-es":[t]}],"rounded-tl":[{"rounded-tl":[t]}],"rounded-tr":[{"rounded-tr":[t]}],"rounded-br":[{"rounded-br":[t]}],"rounded-bl":[{"rounded-bl":[t]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[p]}],"border-style":[{border:[...g(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[p]}],"divide-style":[{divide:g()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...g()]}],"outline-offset":[{"outline-offset":[E0,j]}],"outline-w":[{outline:[E0,I0]}],"outline-color":[{outline:[v]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[v]}],"ring-opacity":[{"ring-opacity":[p]}],"ring-offset-w":[{"ring-offset":[E0,I0]}],"ring-offset-color":[{"ring-offset":[v]}],shadow:[{shadow:["","inner","none",M0,se]}],"shadow-color":[{shadow:[sc]}],opacity:[{opacity:[p]}],"mix-blend":[{"mix-blend":Q()}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[e]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",M0,j]}],grayscale:[{grayscale:[a]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[s]}],saturate:[{saturate:[L]}],sepia:[{sepia:[q]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[e]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[a]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[s]}],"backdrop-opacity":[{"backdrop-opacity":[p]}],"backdrop-saturate":[{"backdrop-saturate":[L]}],"backdrop-sepia":[{"backdrop-sepia":[q]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",j]}],duration:[{duration:w0()}],ease:[{ease:["linear","in","out","in-out",j]}],delay:[{delay:w0()}],animate:[{animate:["none","spin","ping","pulse","bounce",j]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[P]}],"scale-x":[{"scale-x":[P]}],"scale-y":[{"scale-y":[P]}],rotate:[{rotate:[fc,j]}],"translate-x":[{"translate-x":[c0]}],"translate-y":[{"translate-y":[c0]}],"skew-x":[{"skew-x":[$]}],"skew-y":[{"skew-y":[$]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",j]}],accent:[{accent:["auto",v]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",j]}],"caret-color":[{caret:[v]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",j]}],fill:[{fill:[v,"none"]}],"stroke-w":[{stroke:[E0,I0,xc]}],stroke:[{stroke:[v,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const e0=Jn(_e);function ge(v){let c=v[2],n,e,r=v[2]&&jc(v);return{c(){r&&r.c(),n=A0()},m(t,o){r&&r.m(t,o),C(t,n,o),e=!0},p(t,o){t[2]?c?i0(c,t[2])?(r.d(1),r=jc(t),c=t[2],r.c(),r.m(n.parentNode,n)):r.p(t,o):(r=jc(t),c=t[2],r.c(),r.m(n.parentNode,n)):c&&(r.d(1),r=null,c=t[2])},i(t){e||(k(r,t),e=!0)},o(t){x(r,t),e=!1},d(t){t&&w(n),r&&r.d(t)}}}function me(v){let c,n,e,r;const t=v[12].default,o=a0(t,v,v[11],null);let i=[{type:v[1]},v[4],{class:v[3]}],l={};for(let a=0;a<i.length;a+=1)l=X(l,i[a]);return{c(){c=R("button"),o&&o.c(),r0(c,l)},m(a,f){C(a,c,f),o&&o.m(c,null),c.autofocus&&c.focus(),n=!0,e||(r=[y(c,"click",v[22]),y(c,"change",v[23]),y(c,"keydown",v[24]),y(c,"keyup",v[25]),y(c,"touchstart",v[26],{passive:!0}),y(c,"touchend",v[27]),y(c,"touchcancel",v[28]),y(c,"mouseenter",v[29]),y(c,"mouseleave",v[30])],e=!0)},p(a,f){o&&o.p&&(!n||f[0]&2048)&&s0(o,t,a,a[11],n?f0(t,a[11],f,null):u0(a[11]),null),r0(c,l=S0(i,[(!n||f[0]&2)&&{type:a[1]},f[0]&16&&a[4],(!n||f[0]&8)&&{class:a[3]}]))},i(a){n||(k(o,a),n=!0)},o(a){x(o,a),n=!1},d(a){a&&w(c),o&&o.d(a),e=!1,k0(r)}}}function pe(v){let c,n,e,r;const t=v[12].default,o=a0(t,v,v[11],null);let i=[{href:v[0]},v[4],{class:v[3]},{role:"button"}],l={};for(let a=0;a<i.length;a+=1)l=X(l,i[a]);return{c(){c=R("a"),o&&o.c(),r0(c,l)},m(a,f){C(a,c,f),o&&o.m(c,null),n=!0,e||(r=[y(c,"click",v[13]),y(c,"change",v[14]),y(c,"keydown",v[15]),y(c,"keyup",v[16]),y(c,"touchstart",v[17],{passive:!0}),y(c,"touchend",v[18]),y(c,"touchcancel",v[19]),y(c,"mouseenter",v[20]),y(c,"mouseleave",v[21])],e=!0)},p(a,f){o&&o.p&&(!n||f[0]&2048)&&s0(o,t,a,a[11],n?f0(t,a[11],f,null):u0(a[11]),null),r0(c,l=S0(i,[(!n||f[0]&1)&&{href:a[0]},f[0]&16&&a[4],(!n||f[0]&8)&&{class:a[3]},{role:"button"}]))},i(a){n||(k(o,a),n=!0)},o(a){x(o,a),n=!1},d(a){a&&w(c),o&&o.d(a),e=!1,k0(r)}}}function jc(v){let c,n;const e=v[12].default,r=a0(e,v,v[11],null);let t=[v[4],{class:v[3]}],o={};for(let i=0;i<t.length;i+=1)o=X(o,t[i]);return{c(){c=R(v[2]),r&&r.c(),Ac(v[2])(c,o)},m(i,l){C(i,c,l),r&&r.m(c,null),n=!0},p(i,l){r&&r.p&&(!n||l[0]&2048)&&s0(r,e,i,i[11],n?f0(e,i[11],l,null):u0(i[11]),null),Ac(i[2])(c,o=S0(t,[l[0]&16&&i[4],(!n||l[0]&8)&&{class:i[3]}]))},i(i){n||(k(r,i),n=!0)},o(i){x(r,i),n=!1},d(i){i&&w(c),r&&r.d(i)}}}function be(v){let c,n,e,r;const t=[pe,me,ge],o=[];function i(l,a){return l[0]?0:l[2]==="button"?1:2}return c=i(v),n=o[c]=t[c](v),{c(){n.c(),e=A0()},m(l,a){o[c].m(l,a),C(l,e,a),r=!0},p(l,a){let f=c;c=i(l),c===f?o[c].p(l,a):(B0(),x(o[f],1,1,()=>{o[f]=null}),G0(),n=o[c],n?n.p(l,a):(n=o[c]=t[c](l),n.c()),k(n,1),n.m(e.parentNode,e))},i(l){r||(k(n),r=!0)},o(l){x(n),r=!1},d(l){l&&w(e),o[c].d(l)}}}function ye(v,c,n){const e=["pill","outline","size","href","type","color","shadow","tag","checked"];let r=o0(c,e),{$$slots:t={},$$scope:o}=c;const i=Pc("group");let{pill:l=!1}=c,{outline:a=!1}=c,{size:f=i?"sm":"md"}=c,{href:s=void 0}=c,{type:u="button"}=c,{color:d=i?a?"dark":"alternative":"primary"}=c,{shadow:_=!1}=c,{tag:m="button"}=c,{checked:h=void 0}=c;const p={alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white",blue:"text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",dark:"text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",green:"text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",primary:"text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",purple:"text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",red:"text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 ",none:""},S={alternative:"text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",blue:"text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",dark:"text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",green:"text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",light:"text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",primary:"text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",purple:"text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",red:"text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",yellow:"text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",none:""},L={alternative:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",blue:"focus-within:ring-blue-300 dark:focus-within:ring-blue-800",dark:"focus-within:ring-gray-300 dark:focus-within:ring-gray-700",green:"focus-within:ring-green-300 dark:focus-within:ring-green-800",light:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",primary:"focus-within:ring-primary-300 dark:focus-within:ring-primary-800",purple:"focus-within:ring-purple-300 dark:focus-within:ring-purple-900",red:"focus-within:ring-red-300 dark:focus-within:ring-red-900",yellow:"focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",none:""},P={alternative:"shadow-gray-500/50 dark:shadow-gray-800/80",blue:"shadow-blue-500/50 dark:shadow-blue-800/80",dark:"shadow-gray-500/50 dark:shadow-gray-800/80",green:"shadow-green-500/50 dark:shadow-green-800/80",light:"shadow-gray-500/50 dark:shadow-gray-800/80",primary:"shadow-primary-500/50 dark:shadow-primary-800/80",purple:"shadow-purple-500/50 dark:shadow-purple-800/80",red:"shadow-red-500/50 dark:shadow-red-800/80 ",yellow:"shadow-yellow-500/50 dark:shadow-yellow-800/80 ",none:""},q={alternative:"text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",blue:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",dark:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",green:"text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",light:"text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",primary:"text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",purple:"text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",red:"text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",yellow:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",none:""},$={xs:"px-3 py-2 text-xs",sm:"px-4 py-2 text-sm",md:"px-5 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-base"},K=()=>a||d==="alternative"||d==="light";let c0;function V(A){z.call(this,v,A)}function J(A){z.call(this,v,A)}function D(A){z.call(this,v,A)}function N(A){z.call(this,v,A)}function F(A){z.call(this,v,A)}function E(A){z.call(this,v,A)}function T(A){z.call(this,v,A)}function g(A){z.call(this,v,A)}function Q(A){z.call(this,v,A)}function l0(A){z.call(this,v,A)}function h0(A){z.call(this,v,A)}function z0(A){z.call(this,v,A)}function x0(A){z.call(this,v,A)}function w0(A){z.call(this,v,A)}function W(A){z.call(this,v,A)}function d0(A){z.call(this,v,A)}function F0(A){z.call(this,v,A)}function U0(A){z.call(this,v,A)}return v.$$set=A=>{n(39,c=X(X({},c),v0(A))),n(4,r=o0(c,e)),"pill"in A&&n(5,l=A.pill),"outline"in A&&n(6,a=A.outline),"size"in A&&n(7,f=A.size),"href"in A&&n(0,s=A.href),"type"in A&&n(1,u=A.type),"color"in A&&n(8,d=A.color),"shadow"in A&&n(9,_=A.shadow),"tag"in A&&n(2,m=A.tag),"checked"in A&&n(10,h=A.checked),"$$scope"in A&&n(11,o=A.$$scope)},v.$$.update=()=>{n(3,c0=e0("text-center font-medium",i?"focus-within:ring-2":"focus-within:ring-4",i&&"focus-within:z-10",i||"focus-within:outline-none","inline-flex items-center justify-center "+$[f],a&&h&&"border dark:border-gray-900",a&&h&&S[d],a&&!h&&q[d],!a&&h&&S[d],!a&&!h&&p[d],d==="alternative"&&(i&&!h?"dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600":"dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),a&&d==="dark"&&(i?h?"bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600":"dark:text-white border-gray-800 dark:border-white":"dark:text-gray-400 dark:border-gray-700"),L[d],K()&&i&&"border-l-0 first:border-l",i?l&&"first:rounded-l-full last:rounded-r-full"||"first:rounded-l-lg last:rounded-r-lg":l&&"rounded-full"||"rounded-lg",_&&"shadow-lg",_&&P[d],c.disabled&&"cursor-not-allowed opacity-50",c.class))},c=v0(c),[s,u,m,c0,r,l,a,f,d,_,h,o,t,V,J,D,N,F,E,T,g,Q,l0,h0,z0,x0,w0,W,d0,F0,U0]}class mc extends y0{constructor(c){super(),b0(this,c,ye,be,i0,{pill:5,outline:6,size:7,href:0,type:1,color:8,shadow:9,tag:2,checked:10},null,[-1,-1])}}function ke(v){let c,n,e;const r=v[5].default,t=a0(r,v,v[4],null);let o=[v[1],{class:n=e0(v[0],v[2].class)},{role:"group"}],i={};for(let l=0;l<o.length;l+=1)i=X(i,o[l]);return{c(){c=R("div"),t&&t.c(),r0(c,i)},m(l,a){C(l,c,a),t&&t.m(c,null),e=!0},p(l,[a]){t&&t.p&&(!e||a&16)&&s0(t,r,l,l[4],e?f0(r,l[4],a,null):u0(l[4]),null),r0(c,i=S0(o,[a&2&&l[1],(!e||a&5&&n!==(n=e0(l[0],l[2].class)))&&{class:n},{role:"group"}]))},i(l){e||(k(t,l),e=!0)},o(l){x(t,l),e=!1},d(l){l&&w(c),t&&t.d(l)}}}function we(v,c,n){const e=["size","divClass"];let r=o0(c,e),{$$slots:t={},$$scope:o}=c,{size:i="md"}=c,{divClass:l="inline-flex rounded-lg shadow-sm"}=c;return r1("group",{size:i}),v.$$set=a=>{n(2,c=X(X({},c),v0(a))),n(1,r=o0(c,e)),"size"in a&&n(3,i=a.size),"divClass"in a&&n(0,l=a.divClass),"$$scope"in a&&n(4,o=a.$$scope)},c=v0(c),[l,r,c,i,o,t]}class Ce extends y0{constructor(c){super(),b0(this,c,we,ke,i0,{size:3,divClass:0})}}function xe(v){let c;const n=v[5].default,e=a0(n,v,v[4],null);return{c(){e&&e.c()},m(r,t){e&&e.m(r,t),c=!0},p(r,t){e&&e.p&&(!c||t&16)&&s0(e,n,r,r[4],c?f0(n,r[4],t,null):u0(r[4]),null)},i(r){c||(k(e,r),c=!0)},o(r){x(e,r),c=!1},d(r){e&&e.d(r)}}}function Se(v){let c=v[0],n,e,r=v[0]&&Xc(v);return{c(){r&&r.c(),n=A0()},m(t,o){r&&r.m(t,o),C(t,n,o),e=!0},p(t,o){t[0]?c?i0(c,t[0])?(r.d(1),r=Xc(t),c=t[0],r.c(),r.m(n.parentNode,n)):r.p(t,o):(r=Xc(t),c=t[0],r.c(),r.m(n.parentNode,n)):c&&(r.d(1),r=null,c=t[0])},i(t){e||(k(r,t),e=!0)},o(t){x(r,t),e=!1},d(t){t&&w(n),r&&r.d(t)}}}function Xc(v){let c,n,e,r;const t=v[5].default,o=a0(t,v,v[4],null);let i=[v[3]],l={};for(let a=0;a<i.length;a+=1)l=X(l,i[a]);return{c(){c=R(v[0]),o&&o.c(),Ac(v[0])(c,l)},m(a,f){C(a,c,f),o&&o.m(c,null),n=!0,e||(r=ec(v[2].call(null,c)),e=!0)},p(a,f){o&&o.p&&(!n||f&16)&&s0(o,t,a,a[4],n?f0(t,a[4],f,null):u0(a[4]),null),Ac(a[0])(c,l=S0(i,[f&8&&a[3]]))},i(a){n||(k(o,a),n=!0)},o(a){x(o,a),n=!1},d(a){a&&w(c),o&&o.d(a),e=!1,r()}}}function ze(v){let c,n,e,r;const t=[Se,xe],o=[];function i(l,a){return l[1]?0:1}return c=i(v),n=o[c]=t[c](v),{c(){n.c(),e=A0()},m(l,a){o[c].m(l,a),C(l,e,a),r=!0},p(l,[a]){let f=c;c=i(l),c===f?o[c].p(l,a):(B0(),x(o[f],1,1,()=>{o[f]=null}),G0(),n=o[c],n?n.p(l,a):(n=o[c]=t[c](l),n.c()),k(n,1),n.m(e.parentNode,e))},i(l){r||(k(n),r=!0)},o(l){x(n),r=!1},d(l){l&&w(e),o[c].d(l)}}}function Ee(v,c,n){const e=["tag","show","use"];let r=o0(c,e),{$$slots:t={},$$scope:o}=c,{tag:i="div"}=c,{show:l}=c,{use:a=()=>{}}=c;return v.$$set=f=>{c=X(X({},c),v0(f)),n(3,r=o0(c,e)),"tag"in f&&n(0,i=f.tag),"show"in f&&n(1,l=f.show),"use"in f&&n(2,a=f.use),"$$scope"in f&&n(4,o=f.$$scope)},[i,l,a,r,o,t]}class d1 extends y0{constructor(c){super(),b0(this,c,Ee,ze,i0,{tag:0,show:1,use:2})}}function Te(v){let c;const n=v[7].default,e=a0(n,v,v[6],null);return{c(){e&&e.c()},m(r,t){e&&e.m(r,t),c=!0},p(r,t){e&&e.p&&(!c||t&64)&&s0(e,n,r,r[6],c?f0(n,r[6],t,null):u0(r[6]),null)},i(r){c||(k(e,r),c=!0)},o(r){x(e,r),c=!1},d(r){e&&e.d(r)}}}function Ae(v){let c,n;const e=v[7].default,r=a0(e,v,v[6],null);let t=[v[3],{class:v[2]}],o={};for(let i=0;i<t.length;i+=1)o=X(o,t[i]);return{c(){c=R("label"),r&&r.c(),r0(c,o)},m(i,l){C(i,c,l),r&&r.m(c,null),v[8](c),n=!0},p(i,l){r&&r.p&&(!n||l&64)&&s0(r,e,i,i[6],n?f0(e,i[6],l,null):u0(i[6]),null),r0(c,o=S0(t,[l&8&&i[3],(!n||l&4)&&{class:i[2]}]))},i(i){n||(k(r,i),n=!0)},o(i){x(r,i),n=!1},d(i){i&&w(c),r&&r.d(i),v[8](null)}}}function Re(v){let c,n,e,r;const t=[Ae,Te],o=[];function i(l,a){return l[0]?0:1}return c=i(v),n=o[c]=t[c](v),{c(){n.c(),e=A0()},m(l,a){o[c].m(l,a),C(l,e,a),r=!0},p(l,[a]){let f=c;c=i(l),c===f?o[c].p(l,a):(B0(),x(o[f],1,1,()=>{o[f]=null}),G0(),n=o[c],n?n.p(l,a):(n=o[c]=t[c](l),n.c()),k(n,1),n.m(e.parentNode,e))},i(l){r||(k(n),r=!0)},o(l){x(n),r=!1},d(l){l&&w(e),o[c].d(l)}}}function Fe(v,c,n){let e;const r=["color","defaultClass","show"];let t=o0(c,r),{$$slots:o={},$$scope:i}=c,{color:l="gray"}=c,{defaultClass:a="text-sm font-medium block"}=c,{show:f=!0}=c,s;const u={gray:"text-gray-900 dark:text-gray-300",green:"text-green-700 dark:text-green-500",red:"text-red-700 dark:text-red-500",disabled:"text-gray-400 dark:text-gray-500"};function d(_){C0[_?"unshift":"push"](()=>{s=_,n(1,s)})}return v.$$set=_=>{n(10,c=X(X({},c),v0(_))),n(3,t=o0(c,r)),"color"in _&&n(4,l=_.color),"defaultClass"in _&&n(5,a=_.defaultClass),"show"in _&&n(0,f=_.show),"$$scope"in _&&n(6,i=_.$$scope)},v.$$.update=()=>{if(v.$$.dirty&18){const _=s==null?void 0:s.control;n(4,l=_!=null&&_.disabled?"disabled":l)}n(2,e=e0(a,u[l],c.class))},c=v0(c),[f,s,e,t,l,a,i,o,d]}class De extends y0{constructor(c){super(),b0(this,c,Fe,Re,i0,{color:4,defaultClass:5,show:0})}}const Pe={primary:"text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",secondary:"text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",red:"text-red-600 focus:ring-red-500 dark:focus:ring-red-600",green:"text-green-600 focus:ring-green-500 dark:focus:ring-green-600",purple:"text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",teal:"text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",yellow:"text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",orange:"text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",blue:"text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"},Bv=(v,c)=>e0(v?"inline-flex":"flex","items-center",c);let Ie="mr-2";const Gv=(v,c,n,e,r)=>e0("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",Ie,e?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",v&&"sr-only peer",n&&"rounded",Pe[c],r);function Me(v){let c,n,e,r,t,o,i,l=[{type:"checkbox"},{__value:v[5]},v[12],{class:n=e0(v[6],Gv(v[3],v[2],!0,v[7],v[11].default||v[10].class))}],a={};for(let u=0;u<l.length;u+=1)a=X(a,l[u]);const f=v[13].default,s=a0(f,v,v[26],null);return{c(){c=R("input"),r=I(),s&&s.c(),r0(c,a)},m(u,d){C(u,c,d),c.autofocus&&c.focus(),c.checked=v[1],C(u,r,d),s&&s.m(u,d),t=!0,o||(i=[ec(e=v[8].call(null,c,v[0])),y(c,"change",v[25]),y(c,"keyup",v[14]),y(c,"keydown",v[15]),y(c,"keypress",v[16]),y(c,"focus",v[17]),y(c,"blur",v[18]),y(c,"click",v[19]),y(c,"mouseover",v[20]),y(c,"mouseenter",v[21]),y(c,"mouseleave",v[22]),y(c,"paste",v[23]),y(c,"change",v[9]),y(c,"change",v[24])],o=!0)},p(u,d){r0(c,a=S0(l,[{type:"checkbox"},(!t||d&32)&&{__value:u[5]},d&4096&&u[12],(!t||d&3148&&n!==(n=e0(u[6],Gv(u[3],u[2],!0,u[7],u[11].default||u[10].class))))&&{class:n}])),e&&Dc(e.update)&&d&1&&e.update.call(null,u[0]),d&2&&(c.checked=u[1]),s&&s.p&&(!t||d&67108864)&&s0(s,f,u,u[26],t?f0(f,u[26],d,null):u0(u[26]),null)},i(u){t||(k(s,u),t=!0)},o(u){x(s,u),t=!1},d(u){u&&(w(c),w(r)),s&&s.d(u),o=!1,k0(i)}}}function Ne(v){let c,n;return c=new De({props:{class:Bv(v[4],v[10].class),show:v[11].default,$$slots:{default:[Me]},$$scope:{ctx:v}}}),{c(){U(c.$$.fragment)},m(e,r){B(c,e,r),n=!0},p(e,[r]){const t={};r&1040&&(t.class=Bv(e[4],e[10].class)),r&2048&&(t.show=e[11].default),r&67116143&&(t.$$scope={dirty:r,ctx:e}),c.$set(t)},i(e){n||(k(c.$$.fragment,e),n=!0)},o(e){x(c.$$.fragment,e),n=!1},d(e){G(c,e)}}}function Le(v,c,n){const e=["color","custom","inline","group","value","checked","spacing"];let r=o0(c,e),{$$slots:t={},$$scope:o}=c;const i=n1(t);let{color:l="primary"}=c,{custom:a=!1}=c,{inline:f=!1}=c,{group:s=[]}=c,{value:u="on"}=c,{checked:d=void 0}=c,{spacing:_="mr-2"}=c,m=Pc("background");function h(E,T){return d===void 0&&n(1,d=T.includes(u)),p(),{update(g){n(1,d=g.includes(u))}}}function p(){const E=s.indexOf(u);d===void 0&&n(1,d=E>=0),d?E<0&&(s.push(u),n(0,s)):E>=0&&(s.splice(E,1),n(0,s))}function S(E){z.call(this,v,E)}function L(E){z.call(this,v,E)}function P(E){z.call(this,v,E)}function q(E){z.call(this,v,E)}function $(E){z.call(this,v,E)}function K(E){z.call(this,v,E)}function c0(E){z.call(this,v,E)}function V(E){z.call(this,v,E)}function J(E){z.call(this,v,E)}function D(E){z.call(this,v,E)}function N(E){z.call(this,v,E)}function F(){d=this.checked,n(1,d)}return v.$$set=E=>{n(10,c=X(X({},c),v0(E))),n(12,r=o0(c,e)),"color"in E&&n(2,l=E.color),"custom"in E&&n(3,a=E.custom),"inline"in E&&n(4,f=E.inline),"group"in E&&n(0,s=E.group),"value"in E&&n(5,u=E.value),"checked"in E&&n(1,d=E.checked),"spacing"in E&&n(6,_=E.spacing),"$$scope"in E&&n(26,o=E.$$scope)},c=v0(c),[s,d,l,a,f,u,_,m,h,p,c,i,r,t,S,L,P,q,$,K,c0,V,J,D,N,F,o]}class h1 extends y0{constructor(c){super(),b0(this,c,Le,Ne,i0,{color:2,custom:3,inline:4,group:0,value:5,checked:1,spacing:6})}}function Be(v){let c,n,e,r,t,o,i=[{type:"radio"},{__value:v[1]},v[8],{class:"sr-only"}],l={};for(let s=0;s<i.length;s+=1)l=X(l,i[s]);const a=v[10].default,f=a0(a,v,v[24],null);return r=C1(v[23][0]),{c(){c=R("input"),n=I(),f&&f.c(),r0(c,l),r.p(c)},m(s,u){C(s,c,u),c.autofocus&&c.focus(),c.checked=c.__value===v[0],C(s,n,u),f&&f.m(s,u),e=!0,t||(o=[y(c,"change",v[22]),y(c,"keyup",v[11]),y(c,"keydown",v[12]),y(c,"keypress",v[13]),y(c,"focus",v[14]),y(c,"blur",v[15]),y(c,"click",v[16]),y(c,"mouseover",v[17]),y(c,"mouseenter",v[18]),y(c,"mouseleave",v[19]),y(c,"paste",v[20]),y(c,"change",v[21])],t=!0)},p(s,u){r0(c,l=S0(i,[{type:"radio"},(!e||u&2)&&{__value:s[1]},u&256&&s[8],{class:"sr-only"}])),u&1&&(c.checked=c.__value===s[0]),f&&f.p&&(!e||u&16777216)&&s0(f,a,s,s[24],e?f0(a,s[24],u,null):u0(s[24]),null)},i(s){e||(k(f,s),e=!0)},o(s){x(f,s),e=!1},d(s){s&&(w(c),w(n)),f&&f.d(s),r.r(),t=!1,k0(o)}}}function Ge(v){let c,n;return c=new mc({props:{tag:"label",checked:v[1]===v[0],pill:v[2],outline:v[3],size:v[4],color:v[5],shadow:v[6],class:v[7],$$slots:{default:[Be]},$$scope:{ctx:v}}}),{c(){U(c.$$.fragment)},m(e,r){B(c,e,r),n=!0},p(e,[r]){const t={};r&3&&(t.checked=e[1]===e[0]),r&4&&(t.pill=e[2]),r&8&&(t.outline=e[3]),r&16&&(t.size=e[4]),r&32&&(t.color=e[5]),r&64&&(t.shadow=e[6]),r&128&&(t.class=e[7]),r&16777475&&(t.$$scope={dirty:r,ctx:e}),c.$set(t)},i(e){n||(k(c.$$.fragment,e),n=!0)},o(e){x(c.$$.fragment,e),n=!1},d(e){G(c,e)}}}function Ue(v,c,n){const e=["group","value","inline","pill","outline","size","color","shadow"];let r=o0(c,e),{$$slots:t={},$$scope:o}=c,{group:i=""}=c,{value:l=""}=c,{inline:a=!0}=c,{pill:f=!1}=c,{outline:s=!1}=c,{size:u=void 0}=c,{color:d=void 0}=c,{shadow:_=!1}=c,m;const h=[[]];function p(F){z.call(this,v,F)}function S(F){z.call(this,v,F)}function L(F){z.call(this,v,F)}function P(F){z.call(this,v,F)}function q(F){z.call(this,v,F)}function $(F){z.call(this,v,F)}function K(F){z.call(this,v,F)}function c0(F){z.call(this,v,F)}function V(F){z.call(this,v,F)}function J(F){z.call(this,v,F)}function D(F){z.call(this,v,F)}function N(){i=this.__value,n(0,i)}return v.$$set=F=>{n(25,c=X(X({},c),v0(F))),n(8,r=o0(c,e)),"group"in F&&n(0,i=F.group),"value"in F&&n(1,l=F.value),"inline"in F&&n(9,a=F.inline),"pill"in F&&n(2,f=F.pill),"outline"in F&&n(3,s=F.outline),"size"in F&&n(4,u=F.size),"color"in F&&n(5,d=F.color),"shadow"in F&&n(6,_=F.shadow),"$$scope"in F&&n(24,o=F.$$scope)},v.$$.update=()=>{n(7,m=e0(a?"inline-flex":"flex",c.class))},c=v0(c),[i,l,f,s,u,d,_,m,r,a,t,p,S,L,P,q,$,K,c0,V,J,D,N,h,o]}class Yc extends y0{constructor(c){super(),b0(this,c,Ue,Ge,i0,{group:0,value:1,inline:9,pill:2,outline:3,size:4,color:5,shadow:6})}}function Oe(v){let c,n,e,r=[{type:"range"},v[2],{class:v[1]}],t={};for(let o=0;o<r.length;o+=1)t=X(t,r[o]);return{c(){c=R("input"),r0(c,t)},m(o,i){C(o,c,i),c.autofocus&&c.focus(),L0(c,v[0]),n||(e=[y(c,"change",v[9]),y(c,"input",v[9]),y(c,"change",v[4]),y(c,"click",v[5]),y(c,"keydown",v[6]),y(c,"keypress",v[7]),y(c,"keyup",v[8])],n=!0)},p(o,[i]){r0(c,t=S0(r,[{type:"range"},i&4&&o[2],i&2&&{class:o[1]}])),i&1&&L0(c,o[0])},i:m0,o:m0,d(o){o&&w(c),n=!1,k0(e)}}}function We(v,c,n){const e=["value","size"];let r=o0(c,e),{value:t}=c,{size:o="md"}=c;const i={sm:"h-1 range-sm",md:"h-2",lg:"h-3 range-lg"};let l;function a(m){z.call(this,v,m)}function f(m){z.call(this,v,m)}function s(m){z.call(this,v,m)}function u(m){z.call(this,v,m)}function d(m){z.call(this,v,m)}function _(){t=x1(this.value),n(0,t)}return v.$$set=m=>{n(11,c=X(X({},c),v0(m))),n(2,r=o0(c,e)),"value"in m&&n(0,t=m.value),"size"in m&&n(3,o=m.size)},v.$$.update=()=>{n(1,l=e0("w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",i[o]??i.md,c.class))},c=v0(c),[t,l,r,o,a,f,s,u,d,_]}class Ec extends y0{constructor(c){super(),b0(this,c,We,Oe,i0,{value:0,size:3})}}function Uv(v,c,n){const e=v.slice();return e[0]=c[n].value,e[17]=c[n].name,e}function Ov(v){let c,n;return{c(){c=R("option"),n=O(v[2]),c.disabled=!0,c.selected=!0,c.__value="",L0(c,c.__value)},m(e,r){C(e,c,r),b(c,n)},p(e,r){r&4&&Z0(n,e[2])},d(e){e&&w(c)}}}function Wv(v){let c;const n=v[10].default,e=a0(n,v,v[9],null);return{c(){e&&e.c()},m(r,t){e&&e.m(r,t),c=!0},p(r,t){e&&e.p&&(!c||t&512)&&s0(e,n,r,r[9],c?f0(n,r[9],t,null):u0(r[9]),null)},i(r){c||(k(e,r),c=!0)},o(r){x(e,r),c=!1},d(r){e&&e.d(r)}}}function jv(v){let c,n=v[17]+"",e,r;return{c(){c=R("option"),e=O(n),c.__value=r=v[0],L0(c,c.__value)},m(t,o){C(t,c,o),b(c,e)},p(t,o){o&2&&n!==(n=t[17]+"")&&Z0(e,n),o&2&&r!==(r=t[0])&&(c.__value=r,L0(c,c.__value))},d(t){t&&w(c)}}}function je(v){let c,n,e,r,t=v[2]&&Ov(v),o=qc(v[1]),i=[];for(let s=0;s<o.length;s+=1)i[s]=jv(Uv(v,o,s));let l=null;o.length||(l=Wv(v));let a=[v[4],{class:v[3]}],f={};for(let s=0;s<a.length;s+=1)f=X(f,a[s]);return{c(){c=R("select"),t&&t.c(),n=A0();for(let s=0;s<i.length;s+=1)i[s].c();l&&l.c(),r0(c,f),v[0]===void 0&&Rc(()=>v[14].call(c))},m(s,u){C(s,c,u),t&&t.m(c,null),b(c,n);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(c,null);l&&l.m(c,null),"value"in f&&(f.multiple?Rv:kc)(c,f.value),c.autofocus&&c.focus(),kc(c,v[0],!0),e||(r=[y(c,"change",v[14]),y(c,"change",v[11]),y(c,"contextmenu",v[12]),y(c,"input",v[13])],e=!0)},p(s,[u]){if(s[2]?t?t.p(s,u):(t=Ov(s),t.c(),t.m(c,n)):t&&(t.d(1),t=null),u&514){o=qc(s[1]);let d;for(d=0;d<o.length;d+=1){const _=Uv(s,o,d);i[d]?i[d].p(_,u):(i[d]=jv(_),i[d].c(),i[d].m(c,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=o.length,!o.length&&l?l.p(s,u):o.length?l&&(B0(),x(l,1,1,()=>{l=null}),G0()):(l=Wv(s),l.c(),k(l,1),l.m(c,null))}r0(c,f=S0(a,[u&16&&s[4],{class:s[3]}])),u&24&&"value"in f&&(f.multiple?Rv:kc)(c,f.value),u&3&&kc(c,s[0])},i:m0,o:m0,d(s){s&&w(c),t&&t.d(),e1(i,s),l&&l.d(),e=!1,k0(r)}}}const Xe="block w-full";function Ye(v,c,n){const e=["items","value","placeholder","underline","size","defaultClass","underlineClass"];let r=o0(c,e),{$$slots:t={},$$scope:o}=c,{items:i=[]}=c,{value:l=void 0}=c,{placeholder:a="Choose option ..."}=c,{underline:f=!1}=c,{size:s="md"}=c,{defaultClass:u="text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}=c,{underlineClass:d="text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"}=c;const _={sm:"text-sm p-2",md:"text-sm p-2.5",lg:"text-base py-3 px-4"};let m;function h(P){z.call(this,v,P)}function p(P){z.call(this,v,P)}function S(P){z.call(this,v,P)}function L(){l=z1(this),n(0,l),n(1,i)}return v.$$set=P=>{n(16,c=X(X({},c),v0(P))),n(4,r=o0(c,e)),"items"in P&&n(1,i=P.items),"value"in P&&n(0,l=P.value),"placeholder"in P&&n(2,a=P.placeholder),"underline"in P&&n(5,f=P.underline),"size"in P&&n(6,s=P.size),"defaultClass"in P&&n(7,u=P.defaultClass),"underlineClass"in P&&n(8,d=P.underlineClass),"$$scope"in P&&n(9,o=P.$$scope)},v.$$.update=()=>{n(3,m=e0(Xe,f?d:u,_[s],f&&"!px-0",c.class))},c=v0(c),[l,i,a,m,r,f,s,u,d,o,t,h,p,S,L]}class He extends y0{constructor(c){super(),b0(this,c,Ye,je,i0,{items:1,value:0,placeholder:2,underline:5,size:6,defaultClass:7,underlineClass:8})}}const Ve=v=>({}),Xv=v=>({}),qe=v=>({}),Yv=v=>({});function Hv(v){let c,n;const e=v[11].header,r=a0(e,v,v[26],Yv);return{c(){c=R("div"),r&&r.c(),H(c,"class",v[5](!0))},m(t,o){C(t,c,o),r&&r.m(c,null),n=!0},p(t,o){r&&r.p&&(!n||o&67108864)&&s0(r,e,t,t[26],n?f0(e,t[26],o,qe):u0(t[26]),Yv)},i(t){n||(k(r,t),n=!0)},o(t){x(r,t),n=!1},d(t){t&&w(c),r&&r.d(t)}}}function Ke(v){let c,n,e,r=[v[7],{class:v[3]}],t={};for(let o=0;o<r.length;o+=1)t=X(t,r[o]);return{c(){c=R("textarea"),r0(c,t)},m(o,i){C(o,c,i),c.autofocus&&c.focus(),L0(c,v[0]),n||(e=[y(c,"input",v[25]),y(c,"blur",v[12]),y(c,"change",v[13]),y(c,"click",v[14]),y(c,"contextmenu",v[15]),y(c,"focus",v[16]),y(c,"input",v[17]),y(c,"keydown",v[18]),y(c,"keypress",v[19]),y(c,"keyup",v[20]),y(c,"mouseenter",v[21]),y(c,"mouseleave",v[22]),y(c,"mouseover",v[23]),y(c,"paste",v[24])],n=!0)},p(o,i){r0(c,t=S0(r,[i&128&&o[7],i&8&&{class:o[3]}])),i&1&&L0(c,o[0])},d(o){o&&w(c),n=!1,k0(e)}}}function Vv(v){let c,n;const e=v[11].footer,r=a0(e,v,v[26],Xv);return{c(){c=R("div"),r&&r.c(),H(c,"class",v[5](!1))},m(t,o){C(t,c,o),r&&r.m(c,null),n=!0},p(t,o){r&&r.p&&(!n||o&67108864)&&s0(r,e,t,t[26],n?f0(e,t[26],o,Ve):u0(t[26]),Xv)},i(t){n||(k(r,t),n=!0)},o(t){x(r,t),n=!1},d(t){t&&w(c),r&&r.d(t)}}}function Qe(v){let c,n,e,r,t,o=v[6].header&&Hv(v);n=new d1({props:{show:v[1],class:v[4],$$slots:{default:[Ke]},$$scope:{ctx:v}}});let i=v[6].footer&&Vv(v);return{c(){o&&o.c(),c=I(),U(n.$$.fragment),e=I(),i&&i.c(),r=A0()},m(l,a){o&&o.m(l,a),C(l,c,a),B(n,l,a),C(l,e,a),i&&i.m(l,a),C(l,r,a),t=!0},p(l,a){l[6].header?o?(o.p(l,a),a&64&&k(o,1)):(o=Hv(l),o.c(),k(o,1),o.m(c.parentNode,c)):o&&(B0(),x(o,1,1,()=>{o=null}),G0());const f={};a&2&&(f.show=l[1]),a&16&&(f.class=l[4]),a&67109001&&(f.$$scope={dirty:a,ctx:l}),n.$set(f),l[6].footer?i?(i.p(l,a),a&64&&k(i,1)):(i=Vv(l),i.c(),k(i,1),i.m(r.parentNode,r)):i&&(B0(),x(i,1,1,()=>{i=null}),G0())},i(l){t||(k(o),k(n.$$.fragment,l),k(i),t=!0)},o(l){x(o),x(n.$$.fragment,l),x(i),t=!1},d(l){l&&(w(c),w(e),w(r)),o&&o.d(l),G(n,l),i&&i.d(l)}}}function Ze(v){let c,n;return c=new d1({props:{show:v[1],class:v[2],$$slots:{default:[Qe]},$$scope:{ctx:v}}}),{c(){U(c.$$.fragment)},m(e,r){B(c,e,r),n=!0},p(e,[r]){const t={};r&2&&(t.show=e[1]),r&4&&(t.class=e[2]),r&67109083&&(t.$$scope={dirty:r,ctx:e}),c.$set(t)},i(e){n||(k(c.$$.fragment,e),n=!0)},o(e){x(c.$$.fragment,e),n=!1},d(e){G(c,e)}}}function Je(v,c,n){const e=["value","wrappedClass","unWrappedClass","innerWrappedClass"];let r=o0(c,e),{$$slots:t={},$$scope:o}=c;const i=n1(t),l=Pc("background");let{value:a=void 0}=c,{wrappedClass:f="block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0"}=c,{unWrappedClass:s="p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"}=c,{innerWrappedClass:u="py-2 px-4 bg-white dark:bg-gray-800"}=c,d,_,m;const h=g=>e0(g?"border-b":"border-t","py-2 px-3 border-gray-200 dark:border-gray-600");let p;function S(g){z.call(this,v,g)}function L(g){z.call(this,v,g)}function P(g){z.call(this,v,g)}function q(g){z.call(this,v,g)}function $(g){z.call(this,v,g)}function K(g){z.call(this,v,g)}function c0(g){z.call(this,v,g)}function V(g){z.call(this,v,g)}function J(g){z.call(this,v,g)}function D(g){z.call(this,v,g)}function N(g){z.call(this,v,g)}function F(g){z.call(this,v,g)}function E(g){z.call(this,v,g)}function T(){a=this.value,n(0,a)}return v.$$set=g=>{n(28,c=X(X({},c),v0(g))),n(7,r=o0(c,e)),"value"in g&&n(0,a=g.value),"wrappedClass"in g&&n(8,f=g.wrappedClass),"unWrappedClass"in g&&n(9,s=g.unWrappedClass),"innerWrappedClass"in g&&n(10,u=g.innerWrappedClass),"$$scope"in g&&n(26,o=g.$$scope)},v.$$.update=()=>{n(2,_=e0("w-full rounded-lg",l?"bg-white dark:bg-gray-800":"bg-gray-50 dark:bg-gray-700","text-gray-900 dark:placeholder-gray-400 dark:text-white ","border border-gray-200 dark:border-gray-600",c.class)),v.$$.dirty&774&&n(3,m=d?f:e0(_,s)),v.$$.dirty&1024&&n(4,p=e0(u,i.footer?"":"rounded-b-lg",i.header?"":"rounded-t-lg"))},n(1,d=i.header||i.footer),c=v0(c),[a,d,_,m,p,h,i,r,f,s,u,t,S,L,P,q,$,K,c0,V,J,D,N,F,E,T,o]}class $e extends y0{constructor(c){super(),b0(this,c,Je,Ze,i0,{value:0,wrappedClass:8,unWrappedClass:9,innerWrappedClass:10})}}function cr(v){let c,n,e;const r=v[3].default,t=a0(r,v,v[2],null);return{c(){c=R("kbd"),t&&t.c(),H(c,"class",n=e0(v[0],v[1].class))},m(o,i){C(o,c,i),t&&t.m(c,null),e=!0},p(o,[i]){t&&t.p&&(!e||i&4)&&s0(t,r,o,o[2],e?f0(r,o[2],i,null):u0(o[2]),null),(!e||i&3&&n!==(n=e0(o[0],o[1].class)))&&H(c,"class",n)},i(o){e||(k(t,o),e=!0)},o(o){x(t,o),e=!1},d(o){o&&w(c),t&&t.d(o)}}}function vr(v,c,n){let{$$slots:e={},$$scope:r}=c,{kbdClass:t="text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"}=c;return v.$$set=o=>{n(1,c=X(X({},c),v0(o))),"kbdClass"in o&&n(0,t=o.kbdClass),"$$scope"in o&&n(2,r=o.$$scope)},c=v0(c),[t,c,r,e]}class _0 extends y0{constructor(c){super(),b0(this,c,vr,cr,i0,{kbdClass:0})}}const nr=v=>({}),qv=v=>({});function er(v){let c;return{c(){c=O(v[1])},m(n,e){C(n,c,e)},p(n,e){e&2&&Z0(c,n[1])},d(n){n&&w(c)}}}function Kv(v){let c,n,e,r,t;const o=v[10].default,i=a0(o,v,v[9],null);return{c(){c=R("div"),n=R("div"),i&&i.c(),H(c,"class","hidden tab_content_placeholder")},m(l,a){C(l,c,a),b(c,n),i&&i.m(n,null),e=!0,r||(t=ec(v[3].call(null,n)),r=!0)},p(l,a){i&&i.p&&(!e||a&512)&&s0(i,o,l,l[9],e?f0(o,l[9],a,null):u0(l[9]),null)},i(l){e||(k(i,l),e=!0)},o(l){x(i,l),e=!1},d(l){l&&w(c),i&&i.d(l),r=!1,t()}}}function rr(v){let c,n,e,r,t,o,i;const l=v[10].title,a=a0(l,v,v[9],qv),f=a||er(v);let s=[{type:"button"},{role:"tab"},v[5],{class:v[2]}],u={};for(let _=0;_<s.length;_+=1)u=X(u,s[_]);let d=v[0]&&Kv(v);return{c(){c=R("li"),n=R("button"),f&&f.c(),e=I(),d&&d.c(),r0(n,u),H(c,"class",r=e0("group",v[4].class)),H(c,"role","presentation")},m(_,m){C(_,c,m),b(c,n),f&&f.m(n,null),n.autofocus&&n.focus(),b(c,e),d&&d.m(c,null),t=!0,o||(i=[y(n,"click",v[21]),y(n,"blur",v[11]),y(n,"click",v[12]),y(n,"contextmenu",v[13]),y(n,"focus",v[14]),y(n,"keydown",v[15]),y(n,"keypress",v[16]),y(n,"keyup",v[17]),y(n,"mouseenter",v[18]),y(n,"mouseleave",v[19]),y(n,"mouseover",v[20])],o=!0)},p(_,[m]){a?a.p&&(!t||m&512)&&s0(a,l,_,_[9],t?f0(l,_[9],m,nr):u0(_[9]),qv):f&&f.p&&(!t||m&2)&&f.p(_,t?m:-1),r0(n,u=S0(s,[{type:"button"},{role:"tab"},m&32&&_[5],(!t||m&4)&&{class:_[2]}])),_[0]?d?(d.p(_,m),m&1&&k(d,1)):(d=Kv(_),d.c(),k(d,1),d.m(c,null)):d&&(B0(),x(d,1,1,()=>{d=null}),G0()),(!t||m&16&&r!==(r=e0("group",_[4].class)))&&H(c,"class",r)},i(_){t||(k(f,_),k(d),t=!0)},o(_){x(f,_),x(d),t=!1},d(_){_&&w(c),f&&f.d(_),d&&d.d(),o=!1,k0(i)}}}function tr(v,c,n){const e=["open","title","activeClasses","inactiveClasses","defaultClass"];let r=o0(c,e),{$$slots:t={},$$scope:o}=c,{open:i=!1}=c,{title:l="Tab title"}=c,{activeClasses:a=void 0}=c,{inactiveClasses:f=void 0}=c,{defaultClass:s="inline-block text-sm font-medium text-center disabled:cursor-not-allowed"}=c;const u=Pc("ctx")??{},d=u.selected??R0();function _(D){return d.set(D),{destroy:d.subscribe(F=>{F!==D&&n(0,i=!1)})}}let m;function h(D){z.call(this,v,D)}function p(D){z.call(this,v,D)}function S(D){z.call(this,v,D)}function L(D){z.call(this,v,D)}function P(D){z.call(this,v,D)}function q(D){z.call(this,v,D)}function $(D){z.call(this,v,D)}function K(D){z.call(this,v,D)}function c0(D){z.call(this,v,D)}function V(D){z.call(this,v,D)}const J=()=>n(0,i=!0);return v.$$set=D=>{n(4,c=X(X({},c),v0(D))),n(5,r=o0(c,e)),"open"in D&&n(0,i=D.open),"title"in D&&n(1,l=D.title),"activeClasses"in D&&n(6,a=D.activeClasses),"inactiveClasses"in D&&n(7,f=D.inactiveClasses),"defaultClass"in D&&n(8,s=D.defaultClass),"$$scope"in D&&n(9,o=D.$$scope)},v.$$.update=()=>{v.$$.dirty&449&&n(2,m=e0(s,i?a??u.activeClasses:f??u.inactiveClasses,i&&"active"))},c=v0(c),[i,l,m,_,c,r,a,f,s,o,t,h,p,S,L,P,q,$,K,c0,V,J]}class Tc extends y0{constructor(c){super(),b0(this,c,tr,rr,i0,{open:0,title:1,activeClasses:6,inactiveClasses:7,defaultClass:8})}}const or=v=>({}),Qv=v=>({}),lr=v=>({style:v&2}),Zv=v=>({style:v[1]});function Jv(v){let c;const n=v[9].divider,e=a0(n,v,v[8],Qv),r=e||ir();return{c(){r&&r.c()},m(t,o){r&&r.m(t,o),c=!0},p(t,o){e&&e.p&&(!c||o&256)&&s0(e,n,t,t[8],c?f0(n,t[8],o,or):u0(t[8]),Qv)},i(t){c||(k(r,t),c=!0)},o(t){x(r,t),c=!1},d(t){r&&r.d(t)}}}function ir(v){let c;return{c(){c=R("div"),H(c,"class","h-px bg-gray-200 dark:bg-gray-700")},m(n,e){C(n,c,e)},p:m0,d(n){n&&w(c)}}}function ar(v){let c,n,e,r,t,o,i;const l=v[9].default,a=a0(l,v,v[8],Zv);let f=v[0]&&Jv(v);return{c(){c=R("ul"),a&&a.c(),n=I(),f&&f.c(),e=I(),r=R("div"),H(c,"class",v[3]),H(r,"class",v[2]),H(r,"role","tabpanel"),H(r,"aria-labelledby","id-tab")},m(s,u){C(s,c,u),a&&a.m(c,null),C(s,n,u),f&&f.m(s,u),C(s,e,u),C(s,r,u),t=!0,o||(i=ec(v[4].call(null,r)),o=!0)},p(s,[u]){a&&a.p&&(!t||u&258)&&s0(a,l,s,s[8],t?f0(l,s[8],u,lr):u0(s[8]),Zv),(!t||u&8)&&H(c,"class",s[3]),s[0]?f?(f.p(s,u),u&1&&k(f,1)):(f=Jv(s),f.c(),k(f,1),f.m(e.parentNode,e)):f&&(B0(),x(f,1,1,()=>{f=null}),G0()),(!t||u&4)&&H(r,"class",s[2])},i(s){t||(k(a,s),k(f),t=!0)},o(s){x(a,s),x(f),t=!1},d(s){s&&(w(c),w(n),w(e),w(r)),a&&a.d(s),f&&f.d(s),o=!1,i()}}}function fr(v,c,n){let e,{$$slots:r={},$$scope:t}=c,{style:o="none"}=c,{defaultClass:i="flex flex-wrap space-x-2"}=c,{contentClass:l="p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4"}=c,{divider:a=!0}=c,{activeClasses:f="p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500"}=c,{inactiveClasses:s="p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"}=c;const u={full:"p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",pill:"py-3 px-4 text-white bg-primary-600 rounded-lg",underline:"p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",none:""},d={full:"p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",pill:"py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",underline:"p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",none:""},_={activeClasses:u[o]||f,inactiveClasses:d[o]||s,selected:R0()};r1("ctx",_);function m(h){return{destroy:_.selected.subscribe(S=>{S&&h.replaceChildren(S)})}}return v.$$set=h=>{n(13,c=X(X({},c),v0(h))),"style"in h&&n(1,o=h.style),"defaultClass"in h&&n(5,i=h.defaultClass),"contentClass"in h&&n(2,l=h.contentClass),"divider"in h&&n(0,a=h.divider),"activeClasses"in h&&n(6,f=h.activeClasses),"inactiveClasses"in h&&n(7,s=h.inactiveClasses),"$$scope"in h&&n(8,t=h.$$scope)},v.$$.update=()=>{v.$$.dirty&3&&n(0,a=["full","pill"].includes(o)?!1:a),n(3,e=e0(i,o==="underline"&&"-mb-px",c.class))},c=v0(c),[a,o,l,e,m,i,f,s,t,r]}class sr extends y0{constructor(c){super(),b0(this,c,fr,ar,i0,{style:1,defaultClass:5,contentClass:2,divider:0,activeClasses:6,inactiveClasses:7})}}function ur(v,c,n){const e=v.slice();return e[30]=c[n].name,e[32]=n,e}function dr(v){let c,n;return c=new Tc({props:{title:"Controls",$$slots:{default:[Rr]},$$scope:{ctx:v}}}),{c(){U(c.$$.fragment)},m(e,r){B(c,e,r),n=!0},i(e){n||(k(c.$$.fragment,e),n=!0)},o(e){x(c.$$.fragment,e),n=!1},d(e){G(c,e)}}}function hr(v){let c;return{c(){c=O("Esc")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function _r(v){let c;return{c(){c=O("Backspace")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function gr(v){let c;return{c(){c=O("Delete")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function mr(v){let c;return{c(){c=O("Space")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function pr(v){let c;return{c(){c=O("Enter")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function br(v){let c;return{c(){c=O("Rmb")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function yr(v){let c;return{c(){c=O("Wheel")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function kr(v){let c;return{c(){c=O("Lmb")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function wr(v){let c;return{c(){c=O("Lmb")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Cr(v){let c;return{c(){c=O("Shift")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function xr(v){let c;return{c(){c=O("H")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Sr(v){let c;return{c(){c=O("1")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function zr(v){let c;return{c(){c=O("9")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Er(v){let c;return{c(){c=O("R")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Tr(v){let c;return{c(){c=O("C")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Ar(v){let c;return{c(){c=O("S")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Rr(v){let c,n,e,r,t,o,i,l,a,f,s,u,d,_,m,h,p,S,L,P,q,$,K,c0,V,J,D,N,F,E,T,g,Q,l0,h0,z0,x0,w0,W,d0,F0,U0,A,T0,oc,O0,vv,Ic,nv,Mc,W0,ev,Nc,rv,lc,j0,tv,X0,ov,Lc,lv,Y0,H0,iv,V0,av,q0,fv,Bc,yc;return e=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[hr]},$$scope:{ctx:v}}}),l=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[_r]},$$scope:{ctx:v}}}),d=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[gr]},$$scope:{ctx:v}}}),S=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[mr]},$$scope:{ctx:v}}}),K=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[pr]},$$scope:{ctx:v}}}),N=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[br]},$$scope:{ctx:v}}}),l0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[yr]},$$scope:{ctx:v}}}),W=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[kr]},$$scope:{ctx:v}}}),T0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[wr]},$$scope:{ctx:v}}}),O0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[Cr]},$$scope:{ctx:v}}}),W0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[xr]},$$scope:{ctx:v}}}),j0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[Sr]},$$scope:{ctx:v}}}),X0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[zr]},$$scope:{ctx:v}}}),H0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[Er]},$$scope:{ctx:v}}}),V0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[Tr]},$$scope:{ctx:v}}}),q0=new _0({props:{class:"px-2 py-1.5",$$slots:{default:[Ar]},$$scope:{ctx:v}}}),{c(){c=R("div"),n=R("div"),U(e.$$.fragment),r=I(),t=R("div"),t.textContent="Show\\Hide this dialog",o=I(),i=R("div"),U(l.$$.fragment),a=I(),f=R("div"),f.textContent="Repopulate field",s=I(),u=R("div"),U(d.$$.fragment),_=I(),m=R("div"),m.textContent="Clear field",h=I(),p=R("div"),U(S.$$.fragment),L=I(),P=R("div"),P.textContent="Toggle pause",q=I(),$=R("div"),U(K.$$.fragment),c0=I(),V=R("div"),V.textContent="Advance one iteration",J=I(),D=R("div"),U(N.$$.fragment),F=O(" + Mouse Drag"),E=I(),T=R("div"),T.textContent="Drag the field around",g=I(),Q=R("div"),U(l0.$$.fragment),h0=I(),z0=R("div"),z0.textContent="Zoom In\\Out",x0=I(),w0=R("div"),U(W.$$.fragment),d0=I(),F0=R("div"),F0.textContent="Draw on the field",U0=I(),A=R("div"),U(T0.$$.fragment),oc=O(" + "),U(O0.$$.fragment),vv=I(),Ic=R("div"),Ic.textContent="Erase on the field",nv=I(),Mc=R("div"),U(W0.$$.fragment),ev=I(),Nc=R("div"),Nc.textContent="Toggle history shader",rv=I(),lc=R("div"),U(j0.$$.fragment),tv=O("..."),U(X0.$$.fragment),ov=I(),Lc=R("div"),Lc.textContent="Switch preset drawing sizes",lv=I(),Y0=R("div"),U(H0.$$.fragment),iv=O(" / "),U(V0.$$.fragment),av=O(" / "),U(q0.$$.fragment),fv=I(),Bc=R("div"),Bc.textContent="Switch drawing shape",H(c,"class","grid grid-cols-2 gap-y-4 items-baseline")},m(M,Y){C(M,c,Y),b(c,n),B(e,n,null),b(c,r),b(c,t),b(c,o),b(c,i),B(l,i,null),b(c,a),b(c,f),b(c,s),b(c,u),B(d,u,null),b(c,_),b(c,m),b(c,h),b(c,p),B(S,p,null),b(c,L),b(c,P),b(c,q),b(c,$),B(K,$,null),b(c,c0),b(c,V),b(c,J),b(c,D),B(N,D,null),b(D,F),b(c,E),b(c,T),b(c,g),b(c,Q),B(l0,Q,null),b(c,h0),b(c,z0),b(c,x0),b(c,w0),B(W,w0,null),b(c,d0),b(c,F0),b(c,U0),b(c,A),B(T0,A,null),b(A,oc),B(O0,A,null),b(c,vv),b(c,Ic),b(c,nv),b(c,Mc),B(W0,Mc,null),b(c,ev),b(c,Nc),b(c,rv),b(c,lc),B(j0,lc,null),b(lc,tv),B(X0,lc,null),b(c,ov),b(c,Lc),b(c,lv),b(c,Y0),B(H0,Y0,null),b(Y0,iv),B(V0,Y0,null),b(Y0,av),B(q0,Y0,null),b(c,fv),b(c,Bc),yc=!0},p(M,Y){const sv={};Y[1]&4&&(sv.$$scope={dirty:Y,ctx:M}),e.$set(sv);const uv={};Y[1]&4&&(uv.$$scope={dirty:Y,ctx:M}),l.$set(uv);const dv={};Y[1]&4&&(dv.$$scope={dirty:Y,ctx:M}),d.$set(dv);const hv={};Y[1]&4&&(hv.$$scope={dirty:Y,ctx:M}),S.$set(hv);const _v={};Y[1]&4&&(_v.$$scope={dirty:Y,ctx:M}),K.$set(_v);const gv={};Y[1]&4&&(gv.$$scope={dirty:Y,ctx:M}),N.$set(gv);const mv={};Y[1]&4&&(mv.$$scope={dirty:Y,ctx:M}),l0.$set(mv);const pv={};Y[1]&4&&(pv.$$scope={dirty:Y,ctx:M}),W.$set(pv);const bv={};Y[1]&4&&(bv.$$scope={dirty:Y,ctx:M}),T0.$set(bv);const yv={};Y[1]&4&&(yv.$$scope={dirty:Y,ctx:M}),O0.$set(yv);const kv={};Y[1]&4&&(kv.$$scope={dirty:Y,ctx:M}),W0.$set(kv);const wv={};Y[1]&4&&(wv.$$scope={dirty:Y,ctx:M}),j0.$set(wv);const Cv={};Y[1]&4&&(Cv.$$scope={dirty:Y,ctx:M}),X0.$set(Cv);const xv={};Y[1]&4&&(xv.$$scope={dirty:Y,ctx:M}),H0.$set(xv);const Sv={};Y[1]&4&&(Sv.$$scope={dirty:Y,ctx:M}),V0.$set(Sv);const zv={};Y[1]&4&&(zv.$$scope={dirty:Y,ctx:M}),q0.$set(zv)},i(M){yc||(k(e.$$.fragment,M),k(l.$$.fragment,M),k(d.$$.fragment,M),k(S.$$.fragment,M),k(K.$$.fragment,M),k(N.$$.fragment,M),k(l0.$$.fragment,M),k(W.$$.fragment,M),k(T0.$$.fragment,M),k(O0.$$.fragment,M),k(W0.$$.fragment,M),k(j0.$$.fragment,M),k(X0.$$.fragment,M),k(H0.$$.fragment,M),k(V0.$$.fragment,M),k(q0.$$.fragment,M),yc=!0)},o(M){x(e.$$.fragment,M),x(l.$$.fragment,M),x(d.$$.fragment,M),x(S.$$.fragment,M),x(K.$$.fragment,M),x(N.$$.fragment,M),x(l0.$$.fragment,M),x(W.$$.fragment,M),x(T0.$$.fragment,M),x(O0.$$.fragment,M),x(W0.$$.fragment,M),x(j0.$$.fragment,M),x(X0.$$.fragment,M),x(H0.$$.fragment,M),x(V0.$$.fragment,M),x(q0.$$.fragment,M),yc=!1},d(M){M&&w(c),G(e),G(l),G(d),G(S),G(K),G(N),G(l0),G(W),G(T0),G(O0),G(W0),G(j0),G(X0),G(H0),G(V0),G(q0)}}}function Fr(v){let c;return{c(){c=R("option"),c.textContent=`${v[30]}`,c.__value=v[32],L0(c,c.__value)},m(n,e){C(n,c,e)},p:m0,d(n){n&&w(c)}}}function Dr(v){let c,n=qc(uc),e=[];for(let r=0;r<n.length;r+=1)e[r]=Fr(ur(v,n,r));return{c(){for(let r=0;r<e.length;r+=1)e[r].c();c=A0()},m(r,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(r,t);C(r,c,t)},p:m0,d(r){r&&w(c),e1(e,r)}}}function Pr(v){let c,n,e,r,t,o,i,l,a=v[6][0]+"",f,s,u,d,_,m,h=v[6][1]+"",p,S,L,P,q,$,K,c0,V,J,D,N,F,E,T,g;function Q(W){v[16](W)}let l0={id:"rules",placeholder:"",$$slots:{default:[Dr]},$$scope:{ctx:v}};v[1]!==void 0&&(l0.value=v[1]),r=new He({props:l0}),C0.push(()=>P0(r,"value",Q)),u=new Ec({props:{name:"size_x",value:v[6][0],min:"16",max:"4096",step:"16",class:"h-full bg-transparent dark:bg-transparent"}}),u.$on("change",v[12]),L=new Ec({props:{name:"size_y",value:v[6][1],min:"16",max:"4096",step:"16",class:"h-full bg-transparent dark:bg-transparent"}}),L.$on("change",v[13]);function h0(W){v[17](W)}let z0={name:"density",min:"0",max:"1",step:"0.01",class:"h-full bg-transparent dark:bg-transparent"};v[5]!==void 0&&(z0.value=v[5]),V=new Ec({props:z0}),C0.push(()=>P0(V,"value",h0));function x0(W){v[18](W)}let w0={name:"history"};return v[7]!==void 0&&(w0.checked=v[7]),E=new h1({props:w0}),C0.push(()=>P0(E,"checked",x0)),{c(){c=R("div"),n=R("label"),n.textContent="Select rule",e=I(),U(r.$$.fragment),o=I(),i=R("label"),l=O("Field width: "),f=O(a),s=I(),U(u.$$.fragment),d=I(),_=R("label"),m=O("Field height: "),p=O(h),S=I(),U(L.$$.fragment),P=I(),q=R("label"),$=O("Density: "),K=O(v[5]),c0=I(),U(V.$$.fragment),D=I(),N=R("label"),N.textContent="Enable history shader",F=I(),U(E.$$.fragment),H(n,"for","rules"),H(i,"for","size_x"),H(_,"for","size_y"),H(q,"for","density"),H(N,"for","history"),H(c,"class","grid grid-cols-2 gap-y-4 items-baseline")},m(W,d0){C(W,c,d0),b(c,n),b(c,e),B(r,c,null),b(c,o),b(c,i),b(i,l),b(i,f),b(c,s),B(u,c,null),b(c,d),b(c,_),b(_,m),b(_,p),b(c,S),B(L,c,null),b(c,P),b(c,q),b(q,$),b(q,K),b(c,c0),B(V,c,null),b(c,D),b(c,N),b(c,F),B(E,c,null),g=!0},p(W,d0){const F0={};d0[1]&4&&(F0.$$scope={dirty:d0,ctx:W}),!t&&d0[0]&2&&(t=!0,F0.value=W[1],D0(()=>t=!1)),r.$set(F0),(!g||d0[0]&64)&&a!==(a=W[6][0]+"")&&Z0(f,a);const U0={};d0[0]&64&&(U0.value=W[6][0]),u.$set(U0),(!g||d0[0]&64)&&h!==(h=W[6][1]+"")&&Z0(p,h);const A={};d0[0]&64&&(A.value=W[6][1]),L.$set(A),(!g||d0[0]&32)&&Z0(K,W[5]);const T0={};!J&&d0[0]&32&&(J=!0,T0.value=W[5],D0(()=>J=!1)),V.$set(T0);const oc={};!T&&d0[0]&128&&(T=!0,oc.checked=W[7],D0(()=>T=!1)),E.$set(oc)},i(W){g||(k(r.$$.fragment,W),k(u.$$.fragment,W),k(L.$$.fragment,W),k(V.$$.fragment,W),k(E.$$.fragment,W),g=!0)},o(W){x(r.$$.fragment,W),x(u.$$.fragment,W),x(L.$$.fragment,W),x(V.$$.fragment,W),x(E.$$.fragment,W),g=!1},d(W){W&&w(c),G(r),G(u),G(L),G(V),G(E)}}}function Ir(v){let c;return{c(){c=O("compile")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Mr(v){let c,n,e,r,t,o;function i(a){v[19](a)}let l={id:"textarea-id",placeholder:"Your message",rows:"12",wrap:"off",name:"message",class:"flex-grow"};return v[4]!==void 0&&(l.value=v[4]),n=new $e({props:l}),C0.push(()=>P0(n,"value",i)),n.$on("keydown",Zr),t=new mc({props:{$$slots:{default:[Ir]},$$scope:{ctx:v}}}),t.$on("click",v[20]),{c(){c=R("div"),U(n.$$.fragment),r=I(),U(t.$$.fragment),H(c,"class","flex flex-col min-h-full gap-4")},m(a,f){C(a,c,f),B(n,c,null),b(c,r),B(t,c,null),o=!0},p(a,f){const s={};!e&&f[0]&16&&(e=!0,s.value=a[4],D0(()=>e=!1)),n.$set(s);const u={};f[1]&4&&(u.$$scope={dirty:f,ctx:a}),t.$set(u)},i(a){o||(k(n.$$.fragment,a),k(t.$$.fragment,a),o=!0)},o(a){x(n.$$.fragment,a),x(t.$$.fragment,a),o=!1},d(a){a&&w(c),G(n),G(t)}}}function Nr(v){let c;return{c(){c=O("■")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Lr(v){let c;return{c(){c=O("◆")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Br(v){let c;return{c(){c=O("●")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Gr(v){let c,n,e,r,t,o,i,l,a;function f(h){v[22](h)}let s={value:0,$$slots:{default:[Nr]},$$scope:{ctx:v}};v[9]!==void 0&&(s.group=v[9]),c=new Yc({props:s}),C0.push(()=>P0(c,"group",f));function u(h){v[23](h)}let d={value:1,$$slots:{default:[Lr]},$$scope:{ctx:v}};v[9]!==void 0&&(d.group=v[9]),r=new Yc({props:d}),C0.push(()=>P0(r,"group",u));function _(h){v[24](h)}let m={value:2,$$slots:{default:[Br]},$$scope:{ctx:v}};return v[9]!==void 0&&(m.group=v[9]),i=new Yc({props:m}),C0.push(()=>P0(i,"group",_)),{c(){U(c.$$.fragment),e=I(),U(r.$$.fragment),o=I(),U(i.$$.fragment)},m(h,p){B(c,h,p),C(h,e,p),B(r,h,p),C(h,o,p),B(i,h,p),a=!0},p(h,p){const S={};p[1]&4&&(S.$$scope={dirty:p,ctx:h}),!n&&p[0]&512&&(n=!0,S.group=h[9],D0(()=>n=!1)),c.$set(S);const L={};p[1]&4&&(L.$$scope={dirty:p,ctx:h}),!t&&p[0]&512&&(t=!0,L.group=h[9],D0(()=>t=!1)),r.$set(L);const P={};p[1]&4&&(P.$$scope={dirty:p,ctx:h}),!l&&p[0]&512&&(l=!0,P.group=h[9],D0(()=>l=!1)),i.$set(P)},i(h){a||(k(c.$$.fragment,h),k(r.$$.fragment,h),k(i.$$.fragment,h),a=!0)},o(h){x(c.$$.fragment,h),x(r.$$.fragment,h),x(i.$$.fragment,h),a=!1},d(h){h&&(w(e),w(o)),G(c,h),G(r,h),G(i,h)}}}function Ur(v){let c,n,e,r,t;function o(l){v[25](l)}let i={name:"erase"};return v[10]!==void 0&&(i.checked=v[10]),e=new h1({props:i}),C0.push(()=>P0(e,"checked",o)),{c(){c=R("label"),c.textContent="Erase",n=I(),U(e.$$.fragment),H(c,"for","erase")},m(l,a){C(l,c,a),C(l,n,a),B(e,l,a),t=!0},p(l,a){const f={};!r&&a[0]&1024&&(r=!0,f.checked=l[10],D0(()=>r=!1)),e.$set(f)},i(l){t||(k(e.$$.fragment,l),t=!0)},o(l){x(e.$$.fragment,l),t=!1},d(l){l&&(w(c),w(n)),G(e,l)}}}function Or(v){let c,n,e,r,t,o,i,l,a,f,s,u,d=rc(),_;function m(S){v[21](S)}let h={name:"radius",min:"1",max:"100",step:"1",class:"h-full bg-transparent dark:bg-transparent"};v[8]!==void 0&&(h.value=v[8]),o=new Ec({props:h}),C0.push(()=>P0(o,"value",m)),s=new Ce({props:{name:"mode",$$slots:{default:[Gr]},$$scope:{ctx:v}}});let p=d&&Ur(v);return{c(){c=R("div"),n=R("label"),e=O("Radius: "),r=O(v[8]),t=I(),U(o.$$.fragment),l=I(),a=R("label"),a.textContent="Drawing shape",f=I(),U(s.$$.fragment),u=I(),p&&p.c(),H(n,"for","radius"),H(a,"for","mode"),H(c,"class","grid grid-cols-2 gap-y-4 items-baseline")},m(S,L){C(S,c,L),b(c,n),b(n,e),b(n,r),b(c,t),B(o,c,null),b(c,l),b(c,a),b(c,f),B(s,c,null),b(c,u),p&&p.m(c,null),_=!0},p(S,L){(!_||L[0]&256)&&Z0(r,S[8]);const P={};!i&&L[0]&256&&(i=!0,P.value=S[8],D0(()=>i=!1)),o.$set(P);const q={};L[0]&512|L[1]&4&&(q.$$scope={dirty:L,ctx:S}),s.$set(q),d&&p.p(S,L)},i(S){_||(k(o.$$.fragment,S),k(s.$$.fragment,S),k(p),_=!0)},o(S){x(o.$$.fragment,S),x(s.$$.fragment,S),x(p),_=!1},d(S){S&&w(c),G(o),G(s),p&&p.d()}}}function Wr(v){let c=!rc(),n,e,r,t,o,i,l,a=c&&dr(v);return e=new Tc({props:{open:!0,title:"General",$$slots:{default:[Pr]},$$scope:{ctx:v}}}),t=new Tc({props:{title:"Source",$$slots:{default:[Mr]},$$scope:{ctx:v}}}),i=new Tc({props:{title:"Drawing",$$slots:{default:[Or]},$$scope:{ctx:v}}}),{c(){a&&a.c(),n=I(),U(e.$$.fragment),r=I(),U(t.$$.fragment),o=I(),U(i.$$.fragment)},m(f,s){a&&a.m(f,s),C(f,n,s),B(e,f,s),C(f,r,s),B(t,f,s),C(f,o,s),B(i,f,s),l=!0},p(f,s){const u={};s[0]&226|s[1]&4&&(u.$$scope={dirty:s,ctx:f}),e.$set(u);const d={};s[0]&20|s[1]&4&&(d.$$scope={dirty:s,ctx:f}),t.$set(d);const _={};s[0]&1792|s[1]&4&&(_.$$scope={dirty:s,ctx:f}),i.$set(_)},i(f){l||(k(a),k(e.$$.fragment,f),k(t.$$.fragment,f),k(i.$$.fragment,f),l=!0)},o(f){x(a),x(e.$$.fragment,f),x(t.$$.fragment,f),x(i.$$.fragment,f),l=!1},d(f){f&&(w(n),w(r),w(o)),a&&a.d(f),G(e,f),G(t,f),G(i,f)}}}function jr(v){let c;return{c(){c=O("⏸")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Xr(v){let c;return{c(){c=O("▶")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Yr(v){let c;function n(t,o){return t[11]?Xr:jr}let e=n(v),r=e(v);return{c(){r.c(),c=A0()},m(t,o){r.m(t,o),C(t,c,o)},p(t,o){e!==(e=n(t))&&(r.d(1),r=e(t),r&&(r.c(),r.m(c.parentNode,c)))},d(t){t&&w(c),r.d(t)}}}function Hr(v){let c;return{c(){c=O("↺")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Vr(v){let c;return{c(){c=O("X")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function qr(v){let c;return{c(){c=O("☰")},m(n,e){C(n,c,e)},d(n){n&&w(c)}}}function Kr(v){let c;function n(t,o){return t[3]==="hidden"?qr:Vr}let e=n(v),r=e(v);return{c(){r.c(),c=A0()},m(t,o){r.m(t,o),C(t,c,o)},p(t,o){e!==(e=n(t))&&(r.d(1),r=e(t),r&&(r.c(),r.m(c.parentNode,c)))},d(t){t&&w(c),r.d(t)}}}function Qr(v){let c,n,e,r,t,o,i,l,a,f,s,u,d,_;return r=new sr({props:{style:"pill",contentClass:"p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4 grid flex-grow",$$slots:{default:[Wr]},$$scope:{ctx:v}}}),i=new mc({props:{size:"sm",$$slots:{default:[Yr]},$$scope:{ctx:v}}}),i.$on("click",v[26]),a=new mc({props:{size:"sm",$$slots:{default:[Hr]},$$scope:{ctx:v}}}),a.$on("click",v[27]),s=new mc({props:{size:"sm",$$slots:{default:[Kr]},$$scope:{ctx:v}}}),s.$on("click",v[28]),{c(){c=I(),n=R("div"),e=R("div"),U(r.$$.fragment),t=I(),o=R("div"),U(i.$$.fragment),l=I(),U(a.$$.fragment),f=I(),U(s.$$.fragment),H(e,"class","mt-2 mb-2 pointer-events-auto p-5 pt-10 bg-slate-900/95 w-fit min-w-[60%] text-white rounded flex flex-col flex-shrink-0"),H(n,"class","w-full min-h-full absolute items-stretch flex justify-end pointer-events-none"),Uc(n,"visibility",v[3]),H(o,"class","fixed top-2 right-2"),Uc(o,"visibility",rc()?"visible":"hidden")},m(m,h){C(m,c,h),C(m,n,h),b(n,e),B(r,e,null),C(m,t,h),C(m,o,h),B(i,o,null),b(o,l),B(a,o,null),b(o,f),B(s,o,null),u=!0,d||(_=y(document,"keydown",v[14]),d=!0)},p(m,h){const p={};h[0]&2038|h[1]&4&&(p.$$scope={dirty:h,ctx:m}),r.$set(p),h[0]&8&&Uc(n,"visibility",m[3]);const S={};h[0]&2048|h[1]&4&&(S.$$scope={dirty:h,ctx:m}),i.$set(S);const L={};h[1]&4&&(L.$$scope={dirty:h,ctx:m}),a.$set(L);const P={};h[0]&8|h[1]&4&&(P.$$scope={dirty:h,ctx:m}),s.$set(P)},i(m){u||(k(r.$$.fragment,m),k(i.$$.fragment,m),k(a.$$.fragment,m),k(s.$$.fragment,m),u=!0)},o(m){x(r.$$.fragment,m),x(i.$$.fragment,m),x(a.$$.fragment,m),x(s.$$.fragment,m),u=!1},d(m){m&&(w(c),w(n),w(t),w(o)),G(r),G(i),G(a),G(s),d=!1,_()}}}const Zr=v=>v.stopPropagation();function Jr(v,c,n){let e,r,t,o,i,l,a,f;g0(v,nc,g=>n(5,e=g)),g0(v,zc,g=>n(2,r=g)),g0(v,gc,g=>n(6,t=g)),g0(v,Fc,g=>n(7,o=g)),g0(v,_c,g=>n(8,i=g)),g0(v,N0,g=>n(9,l=g)),g0(v,Qc,g=>n(10,a=g)),g0(v,hc,g=>n(11,f=g));let{engine:s}=c,u=rc()?"hidden":"visible";const d=g=>{const Q=g.currentTarget;p0(gc,t=[+Q.value,t[1]],t)},_=g=>{const Q=g.currentTarget;p0(gc,t=[t[0],+Q.value],t)};function m(g){g.key=="Escape"&&n(3,u=u==="visible"?"hidden":"visible")}let h=Math.floor(Math.random()*uc.length),p="";const S=g=>{const Q=g.currentTarget;setTimeout(()=>Q.blur(),200)};function L(g){h=g,n(1,h)}function P(g){e=g,nc.set(e)}function q(g){o=g,Fc.set(o)}function $(g){p=g,n(4,p),n(2,r),n(1,h)}const K=()=>p0(zc,r=p,r);function c0(g){i=g,_c.set(i)}function V(g){l=g,N0.set(l)}function J(g){l=g,N0.set(l)}function D(g){l=g,N0.set(l)}function N(g){a=g,Qc.set(a)}const F=g=>{p0(hc,f=!f,f),S(g)},E=g=>{s==null||s.setRandom(e),S(g)},T=g=>{n(3,u=u==="visible"?"hidden":"visible"),S(g)};return v.$$set=g=>{"engine"in g&&n(0,s=g.engine)},v.$$.update=()=>{if(v.$$.dirty[0]&2){if(rc()){const Q=uc.filter(h0=>h0.mobile),l0=Q[Math.floor(Math.random()*Q.length)];n(1,h=uc.findIndex(h0=>l0===h0))}const g=uc[h];p0(zc,r=g.src,r),p0(nc,e=g.r,e)}v.$$.dirty[0]&4&&n(4,p=r)},[s,h,r,u,p,e,t,o,i,l,a,f,d,_,m,S,L,P,q,$,K,c0,V,J,D,N,F,E,T]}class $r extends y0{constructor(c){super(),b0(this,c,Jr,Qr,i0,{engine:0},null,[-1,-1])}}function ct(v){let c,n,e,r,t,o,i;return r=new $r({props:{engine:v[1]}}),{c(){c=I(),n=R("canvas"),e=I(),U(r.$$.fragment),H(n,"class","touch-none fixed top-0 left-0 bg-black")},m(l,a){C(l,c,a),C(l,n,a),v[13](n),C(l,e,a),B(r,l,a),t=!0,o||(i=[y(window,"resize",v[9]),y(document,"keydown",v[5]),ec(B1.call(null,n,{delay:500})),ec(G1.call(null,n)),y(n,"pandown",v[2]),y(n,"panmove",v[3]),y(n,"panup",v[4]),y(n,"wheel",v[6]),y(n,"pinchdown",v[7]),y(n,"pinch",v[8]),y(n,"contextmenu",b1(v[12]))],o=!0)},p(l,[a]){const f={};a&2&&(f.engine=l[1]),r.$set(f)},i(l){t||(k(r.$$.fragment,l),t=!0)},o(l){x(r.$$.fragment,l),t=!1},d(l){l&&(w(c),w(n),w(e)),v[13](null),G(r,l),o=!1,k0(i)}}}function vt(v,c,n){let e,r,t,o,i,l,a,f;g0(v,_c,T=>n(21,e=T)),g0(v,N0,T=>n(22,r=T)),g0(v,Fc,T=>n(23,t=T)),g0(v,hc,T=>n(24,o=T)),g0(v,nc,T=>n(25,i=T)),g0(v,Qc,T=>n(26,l=T)),g0(v,gc,T=>n(10,a=T)),g0(v,zc,T=>n(11,f=T));let s,u,d,_,m=[0,0],h=null,p=null,S=!1;const L=rc();E1(()=>{u=n(0,s.width=screen.width,s),d=n(0,s.height=screen.height,s),L&&p0(gc,a=[512,512],a),n(1,_=new V1([u,d],s,a)),_.setRandom();let T=requestAnimationFrame(function g(Q){T=requestAnimationFrame(g),o||_.next(),p===0&&h&&(_.drawLine({origin:h,end:m,mode:r,value:!S,radius:e}),h=m),p===2&&h&&(_.shiftBy(l1(h,m)),h=m),_.display(t)});return()=>{cancelAnimationFrame(T)}});function P(T){L?(h=m=_.getWorldPositionFromEvent(T.detail.x,T.detail.y),p=T.detail.pointersCount>1?2:0,S=l):(h=m=_.getWorldPositionFromEvent(T.detail.event.pageX,T.detail.event.pageY),p=T.detail.event.button,S=T.detail.event.shiftKey)}function q(T){L?(p=T.detail.pointersCount>1?2:0,m=_.getWorldPositionFromEvent(T.detail.x,T.detail.y)):(S=T.detail.event.shiftKey,m=_.getWorldPositionFromEvent(T.detail.event.pageX,T.detail.event.pageY))}function $(){p=null,h=null}function K(T){switch(T.code){case"Backspace":_.setRandom(i);break;case"Delete":_.setRandom(0);break;case"Space":p0(hc,o=!o,o);break;case"Enter":p0(hc,o=!0,o),_.next();break;case"KeyH":p0(Fc,t=!t,t);break;case"KeyC":p0(N0,r=2,r);break;case"KeyS":p0(N0,r=0,r);break;case"KeyR":p0(N0,r=1,r);break}isNaN(+T.key)||(+T.key==0?p0(_c,e=89,e):p0(_c,e=[1,2,3,5,8,13,21,34,55][+T.key-1],e))}function c0(T){const g=-Math.sign(T.deltaY);let Q=_.scale;g>0&&(Q*=2),g<0&&(Q/=2),Q=Iv(Q,.125,64),_.zoomAt(m,Q)}let V=1;function J(T){V=_.scale}function D(T){let g=T.detail.scale*V;const Q=_.getWorldPositionFromEvent(T.detail.center.x,T.detail.center.y);g=Iv(g,.125,64),_.zoomAt(Q,g)}function N(){u===screen.width&&d===screen.height||(u=n(0,s.width=screen.width,s),d=n(0,s.height=screen.height,s),_.setScreenSize([u,d]))}function F(T){z.call(this,v,T)}function E(T){C0[T?"unshift":"push"](()=>{s=T,n(0,s)})}return v.$$.update=()=>{v.$$.dirty&3075&&s&&_&&(_.setRule(f),_.setRandom(Av(nc)),_.setStateSize(a),_.setRandom(Av(nc)))},[s,_,P,q,$,K,c0,J,D,N,a,f,F,E]}class nt extends y0{constructor(c){super(),b0(this,c,vt,ct,i0,{})}}function et(v){let c,n,e;return n=new nt({}),{c(){c=R("main"),U(n.$$.fragment),H(c,"class","h-screen")},m(r,t){C(r,c,t),B(n,c,null),e=!0},p:m0,i(r){e||(k(n.$$.fragment,r),e=!0)},o(r){x(n.$$.fragment,r),e=!1},d(r){r&&w(c),G(n)}}}class rt extends y0{constructor(c){super(),b0(this,c,null,et,i0,{})}}new rt({target:document.getElementById("app")});
