var o1=Object.defineProperty;var l1=(v,c,n)=>c in v?o1(v,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):v[c]=n;var e0=(v,c,n)=>(l1(v,typeof c!="symbol"?c+"":c,n),n),i1=(v,c,n)=>{if(!c.has(v))throw TypeError("Cannot "+n)};var kv=(v,c,n)=>{if(c.has(v))throw TypeError("Cannot add the same private member more than once");c instanceof WeakSet?c.add(v):c.set(v,n)};var Pc=(v,c,n)=>(i1(v,c,"access private method"),n);(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();function t0(){}function X(v,c){for(const n in c)v[n]=c[n];return v}function qv(v){return v()}function wv(){return Object.create(null)}function m0(v){v.forEach(qv)}function Sc(v){return typeof v=="function"}function o0(v,c){return v!=v?c==c:v!==c||v&&typeof v=="object"||typeof v=="function"}function a1(v){return Object.keys(v).length===0}function Vv(v,...c){if(v==null){for(const e of c)e(void 0);return t0}const n=v.subscribe(...c);return n.unsubscribe?()=>n.unsubscribe():n}function Cv(v){let c;return Vv(v,n=>c=n)(),c}function y0(v,c,n){v.$$.on_destroy.push(Vv(c,n))}function l0(v,c,n,e){if(v){const r=Yv(v,c,n,e);return v[0](r)}}function Yv(v,c,n,e){return v[1]&&e?X(n.ctx.slice(),v[1](e(c))):n.ctx}function i0(v,c,n,e){if(v[2]&&e){const r=v[2](e(n));if(c.dirty===void 0)return r;if(typeof r=="object"){const t=[],o=Math.max(c.dirty.length,r.length);for(let l=0;l<o;l+=1)t[l]=c.dirty[l]|r[l];return t}return c.dirty|r}return c.dirty}function a0(v,c,n,e,r,t){if(r){const o=Yv(c,n,e,t);v.p(o,r)}}function f0(v){if(v.ctx.length>32){const c=[],n=v.ctx.length/32;for(let e=0;e<n;e++)c[e]=-1;return c}return-1}function $(v){const c={};for(const n in v)n[0]!=="$"&&(c[n]=v[n]);return c}function r0(v,c){const n={};c=new Set(c);for(const e in v)!c.has(e)&&e[0]!=="$"&&(n[e]=v[e]);return n}function Hv(v){const c={};for(const n in v)c[n]=!0;return c}function b0(v,c,n){return v.set(n),c}function zc(v){return v&&Sc(v.destroy)?v.destroy:t0}function m(v,c){v.appendChild(c)}function w(v,c,n){v.insertBefore(c,n||null)}function k(v){v.parentNode&&v.parentNode.removeChild(v)}function Kv(v,c){for(let n=0;n<v.length;n+=1)v[n]&&v[n].d(c)}function E(v){return document.createElement(v)}function W(v){return document.createTextNode(v)}function B(){return W(" ")}function G0(){return W("")}function p(v,c,n,e){return v.addEventListener(c,n,e),()=>v.removeEventListener(c,n,e)}function f1(v){return function(c){return c.preventDefault(),v.call(this,c)}}function Y(v,c,n){n==null?v.removeAttribute(c):v.getAttribute(c)!==n&&v.setAttribute(c,n)}const s1=["width","height"];function n0(v,c){const n=Object.getOwnPropertyDescriptors(v.__proto__);for(const e in c)c[e]==null?v.removeAttribute(e):e==="style"?v.style.cssText=c[e]:e==="__value"?v.value=v[e]=c[e]:n[e]&&n[e].set&&s1.indexOf(e)===-1?v[e]=c[e]:Y(v,e,c[e])}function u1(v,c){Object.keys(c).forEach(n=>{d1(v,n,c[n])})}function d1(v,c,n){const e=c.toLowerCase();e in v?v[e]=typeof v[e]=="boolean"&&n===""?!0:n:c in v?v[c]=typeof v[c]=="boolean"&&n===""?!0:n:Y(v,c,n)}function wc(v){return/-/.test(v)?u1:n0}function h1(v){let c;return{p(...n){c=n,c.forEach(e=>v.push(e))},r(){c.forEach(n=>v.splice(v.indexOf(n),1))}}}function _1(v){return v===""?null:+v}function g1(v){return Array.from(v.childNodes)}function Z0(v,c){c=""+c,v.data!==c&&(v.data=c)}function B0(v,c){v.value=c??""}function Ic(v,c,n,e){n==null?v.style.removeProperty(c):v.style.setProperty(c,n,e?"important":"")}function hc(v,c,n){for(let e=0;e<v.options.length;e+=1){const r=v.options[e];if(r.__value===c){r.selected=!0;return}}(!n||c!==void 0)&&(v.selectedIndex=-1)}function xv(v,c){for(let n=0;n<v.options.length;n+=1){const e=v.options[n];e.selected=~c.indexOf(e.__value)}}function m1(v){const c=v.querySelector(":checked");return c&&c.__value}let sc;function ac(v){sc=v}function Vc(){if(!sc)throw new Error("Function called outside component initialization");return sc}function p1(v){Vc().$$.on_mount.push(v)}function Qv(v,c){return Vc().$$.context.set(v,c),c}function Ec(v){return Vc().$$.context.get(v)}function C(v,c){const n=v.$$.callbacks[c.type];n&&n.slice().forEach(e=>e.call(this,c))}const cc=[],C0=[];let vc=[];const Oc=[],b1=Promise.resolve();let jc=!1;function y1(){jc||(jc=!0,b1.then(Zv))}function Cc(v){vc.push(v)}function I0(v){Oc.push(v)}const Nc=new Set;let J0=0;function Zv(){if(J0!==0)return;const v=sc;do{try{for(;J0<cc.length;){const c=cc[J0];J0++,ac(c),k1(c.$$)}}catch(c){throw cc.length=0,J0=0,c}for(ac(null),cc.length=0,J0=0;C0.length;)C0.pop()();for(let c=0;c<vc.length;c+=1){const n=vc[c];Nc.has(n)||(Nc.add(n),n())}vc.length=0}while(cc.length);for(;Oc.length;)Oc.pop()();jc=!1,Nc.clear(),ac(v)}function k1(v){if(v.fragment!==null){v.update(),m0(v.before_update);const c=v.dirty;v.dirty=[-1],v.fragment&&v.fragment.p(v.ctx,c),v.after_update.forEach(Cc)}}function w1(v){const c=[],n=[];vc.forEach(e=>v.indexOf(e)===-1?c.push(e):n.push(e)),n.forEach(e=>e()),vc=c}const pc=new Set;let K0;function M0(){K0={r:0,c:[],p:K0}}function L0(){K0.r||m0(K0.c),K0=K0.p}function b(v,c){v&&v.i&&(pc.delete(v),v.i(c))}function y(v,c,n,e){if(v&&v.o){if(pc.has(v))return;pc.add(v),K0.c.push(()=>{pc.delete(v),e&&(n&&v.d(1),e())}),v.o(c)}else e&&e()}function Wc(v){return(v==null?void 0:v.length)!==void 0?v:Array.from(v)}function x0(v,c){const n={},e={},r={$$scope:1};let t=v.length;for(;t--;){const o=v[t],l=c[t];if(l){for(const a in o)a in l||(e[a]=1);for(const a in l)r[a]||(n[a]=l[a],r[a]=1);v[t]=l}else for(const a in o)r[a]=1}for(const o in e)o in n||(n[o]=void 0);return n}function N0(v,c,n){const e=v.$$.props[c];e!==void 0&&(v.$$.bound[e]=n,n(v.$$.ctx[e]))}function j(v){v&&v.c()}function G(v,c,n){const{fragment:e,after_update:r}=v.$$;e&&e.m(c,n),Cc(()=>{const t=v.$$.on_mount.map(qv).filter(Sc);v.$$.on_destroy?v.$$.on_destroy.push(...t):m0(t),v.$$.on_mount=[]}),r.forEach(Cc)}function U(v,c){const n=v.$$;n.fragment!==null&&(w1(n.after_update),m0(n.on_destroy),n.fragment&&n.fragment.d(c),n.on_destroy=n.fragment=null,n.ctx=[])}function C1(v,c){v.$$.dirty[0]===-1&&(cc.push(v),y1(),v.$$.dirty.fill(0)),v.$$.dirty[c/31|0]|=1<<c%31}function _0(v,c,n,e,r,t,o=null,l=[-1]){const a=sc;ac(v);const i=v.$$={fragment:null,ctx:[],props:t,update:t0,not_equal:r,bound:wv(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(a?a.$$.context:[])),callbacks:wv(),dirty:l,skip_bound:!1,root:c.target||a.$$.root};o&&o(i.root);let f=!1;if(i.ctx=n?n(v,c.props||{},(s,d,...u)=>{const h=u.length?u[0]:d;return i.ctx&&r(i.ctx[s],i.ctx[s]=h)&&(!i.skip_bound&&i.bound[s]&&i.bound[s](h),f&&C1(v,s)),d}):[],i.update(),f=!0,m0(i.before_update),i.fragment=e?e(i.ctx):!1,c.target){if(c.hydrate){const s=g1(c.target);i.fragment&&i.fragment.l(s),s.forEach(k)}else i.fragment&&i.fragment.c();c.intro&&b(v.$$.fragment),G(v,c.target,c.anchor),Zv()}ac(a)}class g0{constructor(){e0(this,"$$");e0(this,"$$set")}$destroy(){U(this,1),this.$destroy=t0}$on(c,n){if(!Sc(n))return t0;const e=this.$$.callbacks[c]||(this.$$.callbacks[c]=[]);return e.push(n),()=>{const r=e.indexOf(n);r!==-1&&e.splice(r,1)}}$set(c){this.$$set&&!a1(c)&&(this.$$.skip_bound=!0,this.$$set(c),this.$$.skip_bound=!1)}}const x1="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(x1);const $0=[];function A0(v,c=t0){let n;const e=new Set;function r(l){if(o0(v,l)&&(v=l,n)){const a=!$0.length;for(const i of e)i[1](),$0.push(i,v);if(a){for(let i=0;i<$0.length;i+=2)$0[i][0]($0[i+1]);$0.length=0}}}function t(l){r(l(v))}function o(l,a=t0){const i=[l,a];return e.add(i),e.size===1&&(n=c(r,t)||t0),l(v),()=>{e.delete(i),e.size===0&&n&&(n(),n=null)}}return{set:r,update:t,subscribe:o}}class S1{constructor(c,n,e,r,t,o){this.gl=c;const l=this.texture=c.createTexture();c.bindTexture(c.TEXTURE_2D,l),e=e??c.CLAMP_TO_EDGE,r=r??c.LINEAR,c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,e),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,e),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,r),c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,r),this.format=n??c.RGBA,this.internalFormat=o??c.RGBA,this.type=t??c.UNSIGNED_BYTE}bind(c){const n=this.gl;return c!=null&&c!=null&&n.activeTexture(n.TEXTURE0+c),n.bindTexture(n.TEXTURE_2D,this.texture),this}blank(c,n){const e=this.gl;return this.bind(),e.texImage2D(e.TEXTURE_2D,0,this.internalFormat,c,n,0,this.format,this.type,null),this}set(c,n,e){const r=this.gl;return this.bind(),c instanceof Array&&(this.type==r.FLOAT?c=new Float32Array(c):c=new Uint8Array(c)),n!=null&&e!=null?r.texImage2D(r.TEXTURE_2D,0,this.internalFormat,n,e,0,this.format,this.type,c):r.texImage2D(r.TEXTURE_2D,0,this.internalFormat,this.format,this.type,c),this}subset(c,n,e,r,t){const o=this.gl;return this.bind(),c instanceof Array&&(this.type==o.FLOAT?c=new Float32Array(c):c=new Uint8Array(c)),r!=null&&t!=null?o.texSubImage2D(o.TEXTURE_2D,0,n,e,r,t,this.format,this.type,c):o.texSubImage2D(o.TEXTURE_2D,0,n,e,this.format,this.type,c),this}copy(c,n,e,r){const t=this.gl;return t.copyTexImage2D(t.TEXTURE_2D,0,this.internalFormat,c,n,e,r,0),this}}class z1{constructor(c,n=null){this.gl=c,this.framebuffer=arguments.length==2?n:c.createFramebuffer(),this.renderbuffer=null}bind(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.framebuffer),this}unbind(){return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this}attach(c,n=0){const e=this.gl;return n==0&&this.bind(),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.TEXTURE_2D,c.texture,0),this}attachDepth(c,n){const e=this.gl;return this.bind(),this.renderbuffer==null&&(this.renderbuffer=e.createRenderbuffer(),e.renderbufferStorage(e.RENDERBUFFER,e.DEPTH_COMPONENT16,c,n),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.RENDERBUFFER,this.renderbuffer)),this}}class E1{constructor(c,n){this.gl=c,this.buffer=c.createBuffer(),this.target=n??c.ARRAY_BUFFER,this.size=-1}bind(){return this.gl.bindBuffer(this.target,this.buffer),this}update(c,n){const e=this.gl;return c instanceof Array&&(c=new Float32Array(c)),n=n??e.DYNAMIC_DRAW,this.bind(),this.size!==c.byteLength?(e.bufferData(this.target,c,n),this.size=c.byteLength):e.bufferSubData(this.target,0,c),this}}class T1{constructor(c,n,e){this.gl=c;const r=c.createProgram();if(!r)throw new Error("Failed to create program");if(this.program=r,c.attachShader(r,this.makeShader(c.VERTEX_SHADER,n)),c.attachShader(r,this.makeShader(c.FRAGMENT_SHADER,e)),c.linkProgram(r),!c.getProgramParameter(r,c.LINK_STATUS))throw new Error(c.getProgramInfoLog(r)||"Failed to link program");this.vars={}}makeShader(c,n){const e=this.gl,r=e.createShader(c);if(!r)throw new Error("Failed to create shader");if(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;throw new Error(e.getShaderInfoLog(r)||"Failed to compile shader")}use(){return this.gl.useProgram(this.program),this}uniform(c,n,e,r){if(this.vars[c]==null){const o=this.gl.getUniformLocation(this.program,c);if(!o)throw new Error(`Failed to locate uniform '${c}'`);this.vars[c]=o}const t=this.vars[c];if(c0.isArray(n)){const o=n,a="uniform"+(r||o.length)+(e?"i":"f")+"v";this.gl[a](t,o)}else if(typeof n=="number"||typeof n=="boolean")e?this.gl.uniform1i(t,n):this.gl.uniform1f(t,n);else throw new Error("Invalid uniform value: "+n);return this}matrix(c,n,e){if(this.vars[c]==null){const t=this.gl.getUniformLocation(this.program,c);if(!t)throw new Error(`Failed to locate uniform '${c}'`);this.vars[c]=t}const r="uniformMatrix"+Math.sqrt(n.length)+"fv";return this.gl[r](this.vars[c],!!e,n),this}uniformi(c,n){return this.uniform(c,n,!0)}attrib(c,n,e,r){const t=this.gl;return this.vars[c]==null&&(this.vars[c]=t.getAttribLocation(this.program,c)),n.bind(),t.enableVertexAttribArray(this.vars[c]),t.vertexAttribPointer(this.vars[c],e,t.FLOAT,!1,r??0,0),this}draw(c,n,e){const r=this.gl;if(e==null?r.drawArrays(c,0,n):r.drawElements(c,n,e,0),r.getError()!==r.NO_ERROR)throw new Error("WebGL rendering error");return this}disable(){for(const c in this.vars){const n=this.vars[c];this.vars.hasOwnProperty(c)&&typeof n=="number"&&this.gl.disableVertexAttribArray(n)}return this}}class c0{constructor(c,n){let e;if(c instanceof HTMLCanvasElement){e=c;const r=c0.getContext(c,n);r&&(c=r)}else e=c.canvas;this.gl=c,this.canvas=e,this.defaultFramebuffer=new c0.Framebuffer(this.gl,null)}static getContext(c,n,e){let r;try{r=c.getContext("webgl2",n||{})}catch{r=null}if(r==null&&!e)throw new Error("Could not create WebGL context.");return r}static looksLikeURL(c){return/\s/.exec(c)==null}static isArray(c){const n=Object.prototype.toString.apply(c,[]);return/ (Float(32|64)|Int(16|32|8)|Uint(16|32|8(Clamped)?))?Array]$/.exec(n)!=null}program(c,n,e){return c0.looksLikeURL(c)&&(c=c0.fetch(c)),c0.looksLikeURL(n)&&(n=c0.fetch(n)),e!=null&&(c=e(c),n=e(n)),new c0.Program(this.gl,c,n)}array(c,n){const e=this.gl,r=new c0.Buffer(e,e.ARRAY_BUFFER);return c!=null&&r.update(c,n??e.STATIC_DRAW),r}elements(c,n){const e=this.gl,r=new c0.Buffer(e,e.ELEMENT_ARRAY_BUFFER);return c!=null&&r.update(c,n??e.STATIC_DRAW),r}texture(c,n,e,r,t,o,l){const a=new c0.Texture(this.gl,n,e,r,t,o);return c!=null&&(l&&l.type==="ArrayBufferView"?a.set(c,l.width,l.height):a.set(c)),a}framebuffer(c){const n=new c0.Framebuffer(this.gl);return c!=null&&n.attach(c),n}}c0.Framebuffer=z1;c0.Texture=S1;c0.Program=T1;c0.Buffer=E1;c0.QUAD2=new Float32Array([-1,-1,1,-1,-1,1,1,1]);c0.fetch=function(v,c){const n=new XMLHttpRequest;return n.open("GET",v,!!c),c!=null&&(n.onload=function(){c(n.responseText)}),n.send(),n.responseText};function Jv(v,c){return[v[0]-c[0],v[1]-c[1]]}function Sv(v,c){return[v[0]+c[0],v[1]+c[1]]}function R1(v,c){return[c[0]*v,c[1]*v]}function Bc(v,c){return[c[0]/v,c[1]/v]}const zv=(v,c)=>(v%c+c)%c;function A1(v,c,n){return Math.min(Math.max(v,c),n)}function _c(v,c){return[zv(v[0],c[0]),zv(v[1],c[1])]}var Ev=`#version 300 es

precision mediump float;\r
uniform sampler2D state;\r
uniform vec2 screenSize;\r
uniform vec2 u_offset;\r
uniform float u_scale;

out vec4 fragColor;\r

void main() {\r
    
    
    
    fragColor =  texture(state, (gl_FragCoord.xy / u_scale + u_offset) / screenSize);\r
}`,oc=`#version 300 es

precision mediump float;

in vec2 a_position;

void main() {\r
    gl_Position = vec4(a_position, 0.0, 1.0);\r
}`,F1=`#version 300 es

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
}`,D1=`#version 300 es

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

    
    
}`,uc,Xc;class P1{constructor(c,n,e){kv(this,uc);e0(this,"screenSize");e0(this,"stateSize");e0(this,"Igloo");e0(this,"canvas");e0(this,"gl");e0(this,"buffer");e0(this,"frameBuffer");e0(this,"program_copy");e0(this,"program_hist");e0(this,"program_rule");e0(this,"program_draw");e0(this,"tex_curr");e0(this,"tex_temp");e0(this,"tex_hist");e0(this,"counter",0);e0(this,"scale",1);e0(this,"offset",[0,0]);this.screenSize=c,this.stateSize=e,this.canvas=n,this.Igloo=new c0(n);const r=this.gl=this.Igloo.gl;this.buffer=this.Igloo.array(c0.QUAD2),this.program_copy=this.Igloo.program(oc,Ev),this.program_hist=this.Igloo.program(oc,D1),this.program_rule=this.Igloo.program(oc,Ev),this.program_draw=this.Igloo.program(oc,F1),this.frameBuffer=this.Igloo.framebuffer(null),this.tex_temp=this.Igloo.texture(null,r.RGBA,r.REPEAT,r.NEAREST,r.UNSIGNED_BYTE,r.RGBA,{}).blank(this.stateSize[0],this.stateSize[1]),this.tex_curr=this.Igloo.texture(null,r.RGBA,r.REPEAT,r.NEAREST,r.UNSIGNED_BYTE,r.RGBA,{}).blank(this.stateSize[0],this.stateSize[1]),this.tex_hist=this.Igloo.texture(null,r.RGBA,r.REPEAT,r.NEAREST,r.UNSIGNED_BYTE,r.RGBA,{}).blank(this.stateSize[0],this.stateSize[1])}set(c){this.counter=0,this.gl;const n=new Uint8Array(this.stateSize[0]*this.stateSize[1]*4);for(let e=0;e<c.length;e++){const r=e*4;n[r+0]=n[r+1]=n[r+2]=c[e]?255:0,n[r+3]=255}return this.tex_curr.subset(n,0,0,this.stateSize[0],this.stateSize[1]),this.tex_hist.subset(n,0,0,this.stateSize[0],this.stateSize[1]),this}setRandom(c=.4){const n=this.stateSize[0]*this.stateSize[1],e=new Uint8Array(n);for(let r=0;r<n;r++)e[r]=Math.random()<c?1:0;return this.set(e),this}setRule(c){let n;try{n=this.Igloo.program(oc,c)}catch(e){alert(`compilation error:
`+e.toString());return}this.program_rule=n}setScreenSize(c){this.screenSize=c}setStateSize(c){this.stateSize=c;const n=this.gl;this.tex_temp=this.Igloo.texture(null,n.RGBA,n.REPEAT,n.NEAREST,n.UNSIGNED_BYTE,n.RGBA,{}).blank(this.stateSize[0],this.stateSize[1]),this.tex_curr=this.Igloo.texture(null,n.RGBA,n.REPEAT,n.NEAREST,n.UNSIGNED_BYTE,n.RGBA,{}).blank(this.stateSize[0],this.stateSize[1]),this.tex_hist=this.Igloo.texture(null,n.RGBA,n.REPEAT,n.NEAREST,n.UNSIGNED_BYTE,n.RGBA,{}).blank(this.stateSize[0],this.stateSize[1])}_swap(){const c=this.tex_curr;return this.tex_curr=this.tex_temp,this.tex_temp=c,this}next(){var c=this.gl;return this.frameBuffer.attach(this.tex_temp),this.tex_curr.bind(0),c.viewport(0,0,this.stateSize[0],this.stateSize[1]),this.program_rule.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniform("screenSize",this.stateSize).draw(c.TRIANGLE_STRIP,4),this._swap(),this.counter+=1,this}display(c){const n=this.gl;return c&&(this.frameBuffer.attach(this.tex_temp),this.tex_curr.bind(0),this.tex_hist.bind(1),n.viewport(0,0,this.stateSize[0],this.stateSize[1]),this.program_hist.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniformi("hist",1).uniform("u_scale",1).uniform("u_offset",[0,0]).uniform("screenSize",this.stateSize).draw(n.TRIANGLE_STRIP,4),this.tex_hist.copy(0,0,this.stateSize[0],this.stateSize[1])),this.Igloo.defaultFramebuffer.bind(),c?this.tex_hist.bind(0):this.tex_curr.bind(0),n.viewport(0,0,this.screenSize[0],this.screenSize[1]),this.program_copy.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniform("u_scale",this.scale).uniform("u_offset",this.offset).uniform("screenSize",this.stateSize).draw(n.TRIANGLE_STRIP,4),this}getWorldPositionFromEvent(c){const n=this.canvas.getBoundingClientRect();return[c.pageX-n.left,this.canvas.height-(c.pageY-n.top)]}getStatePos(c){return _c(Sv(Bc(this.scale,c),this.offset),this.stateSize)}shiftBy(c){c=_c(Bc(this.scale,c),this.stateSize),this.offset[0]+=c[0],this.offset[1]+=c[1],this.offset=_c(this.offset,this.stateSize)}zoomAt(c,n){const e=this.getStatePos(c);this.scale=n;const r=this.getStatePos(c);this.offset[0]+=e[0]-r[0],this.offset[1]+=e[1]-r[1]}drawPoint({position:c,value:n,radius:e,mode:r}){c=this.getStatePos(c),Pc(this,uc,Xc).call(this,{origin:c,end:c,value:n,radius:e,mode:r})}drawLine({origin:c,end:n,value:e,radius:r,mode:t}){const o=this.getStatePos(c),l=Bc(this.scale,Jv(n,c)),a=g=>_c(Sv(o,R1(g,l)),this.stateSize);let i=l[0]>0?this.stateSize[0]:l[0]===0?1/0:0,f=l[1]>0?this.stateSize[1]:l[1]===0?1/0:0;const s=l[0]>0?this.stateSize[0]:-this.stateSize[0],d=l[1]>0?this.stateSize[1]:-this.stateSize[1];let u=0;c=o;const h=.005;for(;u<1;){const g=Math.min((i-o[0])/l[0],1),_=Math.min((f-o[1])/l[1],1);g<=_&&(i+=s,u=g),_<=g&&(f+=d,u=_),n=a(u-h),Pc(this,uc,Xc).call(this,{origin:c,end:n,value:e,radius:r,mode:t}),c=a(u+h)}return this}}uc=new WeakSet,Xc=function({origin:c,end:n,value:e,radius:r,mode:t}){var o=this.Igloo.gl;this.frameBuffer.attach(this.tex_temp),this.tex_curr.bind(0),o.viewport(0,0,this.stateSize[0],this.stateSize[1]),this.program_draw.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniform("screenSize",this.stateSize).uniform("u_org",c).uniform("u_end",n).uniform("u_val",Number(e)).uniform("u_rad",r).uniformi("u_mode",t).draw(o.TRIANGLE_STRIP,4),this._swap(),this.frameBuffer.attach(this.tex_temp),this.tex_hist.bind(0),o.viewport(0,0,this.stateSize[0],this.stateSize[1]),this.program_draw.use().attrib("a_position",this.buffer,2,0).uniformi("state",0).uniform("screenSize",this.stateSize).uniform("u_org",c).uniform("u_end",n).uniform("u_val",Number(e)).uniform("u_rad",r).uniformi("u_mode",t).draw(o.TRIANGLE_STRIP,4);var l=this.tex_hist;this.tex_hist=this.tex_temp,this.tex_temp=l};var I1=`#version 300 es\r
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
}`,N1=`#version 300 es\r
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
}`,B1=`#version 300 es\r
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

}`,M1=`#version 300 es\r
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

}`,L1=`#version 300 es\r
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
}`,G1=`#version 300 es\r
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

}`,U1=`#version 300 es\r
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
}`,O1=`#version 300 es\r
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
}`,j1=`#version 300 es\r
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
}`,W1=`#version 300 es\r
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
}`,X1=`#version 300 es\r
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
}`,q1=`#version 300 es\r
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
}`,V1=`#version 300 es\r
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
}`,Y1=`#version 300 es\r
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
}`,H1=`#version 300 es\r
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
}`,Z1=`#version 300 es\r
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
}`,un=`#version 300 es\r
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
}`,pn=`#version 300 es\r
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

}`;const $v=[{name:"hungry cells",r:.53,src:vn},{name:"walking cells",r:.33,src:wn},{name:"flame",r:.3,src:K1},{name:"mold",r:.3,src:ln},{name:"growing mold",r:.22,src:$1},{name:"zebra",r:.45,src:xn},{name:"petri dish",r:.05,src:un},{name:"square worms",r:.51,src:bn},{name:"bacteria",r:.5,src:N1},{name:"mitosis",r:.37,src:on},{name:"patches",r:.4,src:sn},{name:"gears",r:.38,src:J1},{name:"chained cells",r:.45,src:O1},{name:"primordial soup",r:.25,src:dn},{name:"primordial soup 2",r:.03,src:hn},{name:"cancer growth",r:.58,src:L1},{name:"quicksand",r:.5,src:_n},{name:"flammable gas",r:.75,src:Q1},{name:"tentacles",r:.3,src:yn},{name:"random walkers",r:.5,src:gn},{name:"game of life",r:.4,src:Z1},{name:"guts",r:.5,src:cn},{name:"crystals",r:.42,src:j1},{name:"cells and worms",r:.4,src:G1},{name:"cells and worms 2",r:.35,src:U1},{name:"worms and cells",r:.38,src:Cn},{name:"amoebas and cancer",r:.35,src:I1},{name:"expanding worms",r:.45,src:V1},{name:"expanding worms 2",r:.3,src:Y1},{name:"expanding worms 3",r:.42,src:H1},{name:"kaleidoscope",r:.93,src:nn},{name:"region maker",r:.5,src:mn},{name:"noisy cells",r:.45,src:fn},{name:"multicore primordial soup",r:.4,src:an},{name:"dividing dots",r:.5,src:X1},{name:"medusa gliders",r:.5,src:rn},{name:"medusa gliders 2",r:.35,src:tn},{name:"borders",r:.5,src:B1},{name:"borders 2",r:.09,src:M1},{name:"zones and cells",r:.3,src:Sn},{name:"trypophobic",r:.3,src:kn},{name:"smoke walls",r:.3,src:pn},{name:"dotted amoebas",r:.5,src:q1},{name:"lazy builder",r:.3,src:en},{name:"day and night",r:.5,src:W1}],xc=A0(!0),Mc=A0(!1),nc=A0(.4),bc=A0(""),fc=A0(50),P0=A0(2),yc=A0([1024,1024]);function zn(v){let c,n,e,r;return{c(){c=B(),n=E("canvas"),Y(n,"class","touch-none fixed top-0 left-0 bg-black")},m(t,o){w(t,c,o),w(t,n,o),v[11](n),e||(r=[p(window,"resize",v[6]),p(document,"keydown",v[4]),p(n,"pointerdown",v[1]),p(n,"pointermove",v[2]),p(n,"pointerup",v[3]),p(n,"wheel",v[5]),p(n,"contextmenu",f1(v[10]))],e=!0)},p:t0,i:t0,o:t0,d(t){t&&(k(c),k(n)),v[11](null),e=!1,m0(r)}}}function En(v,c,n){let e,r,t,o,l,a,i;y0(v,fc,T=>n(18,e=T)),y0(v,P0,T=>n(19,r=T)),y0(v,xc,T=>n(20,t=T)),y0(v,Mc,T=>n(21,o=T)),y0(v,nc,T=>n(22,l=T)),y0(v,yc,T=>n(8,a=T)),y0(v,bc,T=>n(9,i=T));let f,s,d,u,h=[0,0],g=[0,0],_=null,D=!1;p1(()=>{s=n(0,f.width=screen.width,f),d=n(0,f.height=screen.height,f),n(7,u=new P1([s,d],f,a)),u.setRandom();let T=requestAnimationFrame(function R(I){T=requestAnimationFrame(R),o||u.next(),_===0&&u.drawLine({origin:g,end:h,mode:r,value:!D,radius:e}),_===2&&u.shiftBy(Jv(g,h)),g=h,u.display(t)});return()=>{cancelAnimationFrame(T)}});function M(T){h=u.getWorldPositionFromEvent(T),_=T.button,D=T.shiftKey}function q(T){g=h,h=u.getWorldPositionFromEvent(T),D=T.shiftKey}function N(T){_=null}function K(T){switch(T.code){case"Backspace":u.setRandom(l);break;case"Delete":u.setRandom(0);break;case"Space":b0(Mc,o=!o,o);break;case"Enter":b0(Mc,o=!0,o),u.next();break;case"KeyH":b0(xc,t=!t,t);break;case"KeyC":b0(P0,r=2,r);break;case"KeyS":b0(P0,r=0,r);break;case"KeyR":b0(P0,r=1,r);break}isNaN(+T.key)||(+T.key==0?b0(fc,e=89,e):b0(fc,e=[1,2,3,5,8,13,21,34,55][+T.key-1],e))}function Z(T){const R=-Math.sign(T.deltaY);let I=u.scale;R>0&&(I*=2),R<0&&(I/=2),I=A1(I,.125,64),u.zoomAt(h,I)}function H(){console.log(screen.width,screen.height),!(s===screen.width&&d===screen.height)&&(s=n(0,f.width=screen.width,f),d=n(0,f.height=screen.height,f),u.setScreenSize([s,d]))}function J(T){C.call(this,v,T)}function x(T){C0[T?"unshift":"push"](()=>{f=T,n(0,f)})}return v.$$.update=()=>{v.$$.dirty&641&&f&&u&&(u.setRule(i),u.setRandom(Cv(nc))),v.$$.dirty&385&&f&&u&&(u.setStateSize(a),u.setRandom(Cv(nc)))},[f,M,q,N,K,Z,H,u,a,i,J,x]}class Tn extends g0{constructor(c){super(),_0(this,c,En,zn,o0,{})}}const Yc="-";function Rn(v){const c=Fn(v),{conflictingClassGroups:n,conflictingClassGroupModifiers:e}=v;function r(o){const l=o.split(Yc);return l[0]===""&&l.length!==1&&l.shift(),c1(l,c)||An(o)}function t(o,l){const a=n[o]||[];return l&&e[o]?[...a,...e[o]]:a}return{getClassGroupId:r,getConflictingClassGroupIds:t}}function c1(v,c){var o;if(v.length===0)return c.classGroupId;const n=v[0],e=c.nextPart.get(n),r=e?c1(v.slice(1),e):void 0;if(r)return r;if(c.validators.length===0)return;const t=v.join(Yc);return(o=c.validators.find(({validator:l})=>l(t)))==null?void 0:o.classGroupId}const Tv=/^\[(.+)\]$/;function An(v){if(Tv.test(v)){const c=Tv.exec(v)[1],n=c==null?void 0:c.substring(0,c.indexOf(":"));if(n)return"arbitrary.."+n}}function Fn(v){const{theme:c,prefix:n}=v,e={nextPart:new Map,validators:[]};return Pn(Object.entries(v.classGroups),n).forEach(([t,o])=>{qc(o,e,t,c)}),e}function qc(v,c,n,e){v.forEach(r=>{if(typeof r=="string"){const t=r===""?c:Rv(c,r);t.classGroupId=n;return}if(typeof r=="function"){if(Dn(r)){qc(r(e),c,n,e);return}c.validators.push({validator:r,classGroupId:n});return}Object.entries(r).forEach(([t,o])=>{qc(o,Rv(c,t),n,e)})})}function Rv(v,c){let n=v;return c.split(Yc).forEach(e=>{n.nextPart.has(e)||n.nextPart.set(e,{nextPart:new Map,validators:[]}),n=n.nextPart.get(e)}),n}function Dn(v){return v.isThemeGetter}function Pn(v,c){return c?v.map(([n,e])=>{const r=e.map(t=>typeof t=="string"?c+t:typeof t=="object"?Object.fromEntries(Object.entries(t).map(([o,l])=>[c+o,l])):t);return[n,r]}):v}function In(v){if(v<1)return{get:()=>{},set:()=>{}};let c=0,n=new Map,e=new Map;function r(t,o){n.set(t,o),c++,c>v&&(c=0,e=n,n=new Map)}return{get(t){let o=n.get(t);if(o!==void 0)return o;if((o=e.get(t))!==void 0)return r(t,o),o},set(t,o){n.has(t)?n.set(t,o):r(t,o)}}}const v1="!";function Nn(v){const c=v.separator,n=c.length===1,e=c[0],r=c.length;return function(o){const l=[];let a=0,i=0,f;for(let g=0;g<o.length;g++){let _=o[g];if(a===0){if(_===e&&(n||o.slice(g,g+r)===c)){l.push(o.slice(i,g)),i=g+r;continue}if(_==="/"){f=g;continue}}_==="["?a++:_==="]"&&a--}const s=l.length===0?o:o.substring(i),d=s.startsWith(v1),u=d?s.substring(1):s,h=f&&f>i?f-i:void 0;return{modifiers:l,hasImportantModifier:d,baseClassName:u,maybePostfixModifierPosition:h}}}function Bn(v){if(v.length<=1)return v;const c=[];let n=[];return v.forEach(e=>{e[0]==="["?(c.push(...n.sort(),e),n=[]):n.push(e)}),c.push(...n.sort()),c}function Mn(v){return{cache:In(v.cacheSize),splitModifiers:Nn(v),...Rn(v)}}const Ln=/\s+/;function Gn(v,c){const{splitModifiers:n,getClassGroupId:e,getConflictingClassGroupIds:r}=c,t=new Set;return v.trim().split(Ln).map(o=>{const{modifiers:l,hasImportantModifier:a,baseClassName:i,maybePostfixModifierPosition:f}=n(o);let s=e(f?i.substring(0,f):i),d=!!f;if(!s){if(!f)return{isTailwindClass:!1,originalClassName:o};if(s=e(i),!s)return{isTailwindClass:!1,originalClassName:o};d=!1}const u=Bn(l).join(":");return{isTailwindClass:!0,modifierId:a?u+v1:u,classGroupId:s,originalClassName:o,hasPostfixModifier:d}}).reverse().filter(o=>{if(!o.isTailwindClass)return!0;const{modifierId:l,classGroupId:a,hasPostfixModifier:i}=o,f=l+a;return t.has(f)?!1:(t.add(f),r(a,i).forEach(s=>t.add(l+s)),!0)}).reverse().map(o=>o.originalClassName).join(" ")}function Un(){let v=0,c,n,e="";for(;v<arguments.length;)(c=arguments[v++])&&(n=n1(c))&&(e&&(e+=" "),e+=n);return e}function n1(v){if(typeof v=="string")return v;let c,n="";for(let e=0;e<v.length;e++)v[e]&&(c=n1(v[e]))&&(n&&(n+=" "),n+=c);return n}function On(v,...c){let n,e,r,t=o;function o(a){const i=c.reduce((f,s)=>s(f),v());return n=Mn(i),e=n.cache.get,r=n.cache.set,t=l,l(a)}function l(a){const i=e(a);if(i)return i;const f=Gn(a,n);return r(a,f),f}return function(){return t(Un.apply(null,arguments))}}function Q(v){const c=n=>n[v]||[];return c.isThemeGetter=!0,c}const e1=/^\[(?:([a-z-]+):)?(.+)\]$/i,jn=/^\d+\/\d+$/,Wn=new Set(["px","full","screen"]),Xn=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qn=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Vn=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Yn=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function z0(v){return Q0(v)||Wn.has(v)||jn.test(v)}function F0(v){return ec(v,"length",ve)}function Q0(v){return!!v&&!Number.isNaN(Number(v))}function gc(v){return ec(v,"number",Q0)}function lc(v){return!!v&&Number.isInteger(Number(v))}function Hn(v){return v.endsWith("%")&&Q0(v.slice(0,-1))}function O(v){return e1.test(v)}function D0(v){return Xn.test(v)}const Kn=new Set(["length","size","percentage"]);function Qn(v){return ec(v,Kn,r1)}function Zn(v){return ec(v,"position",r1)}const Jn=new Set(["image","url"]);function $n(v){return ec(v,Jn,ee)}function ce(v){return ec(v,"",ne)}function ic(){return!0}function ec(v,c,n){const e=e1.exec(v);return e?e[1]?typeof c=="string"?e[1]===c:c.has(e[1]):n(e[2]):!1}function ve(v){return qn.test(v)}function r1(){return!1}function ne(v){return Vn.test(v)}function ee(v){return Yn.test(v)}function re(){const v=Q("colors"),c=Q("spacing"),n=Q("blur"),e=Q("brightness"),r=Q("borderColor"),t=Q("borderRadius"),o=Q("borderSpacing"),l=Q("borderWidth"),a=Q("contrast"),i=Q("grayscale"),f=Q("hueRotate"),s=Q("invert"),d=Q("gap"),u=Q("gradientColorStops"),h=Q("gradientColorStopPositions"),g=Q("inset"),_=Q("margin"),D=Q("opacity"),M=Q("padding"),q=Q("saturate"),N=Q("scale"),K=Q("sepia"),Z=Q("skew"),H=Q("space"),J=Q("translate"),x=()=>["auto","contain","none"],T=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",O,c],I=()=>[O,c],F=()=>["",z0,F0],S=()=>["auto",Q0,O],u0=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],A=()=>["solid","dashed","dotted","double","none"],E0=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],d0=()=>["start","end","center","between","around","evenly","stretch"],k0=()=>["","0",O],S0=()=>["auto","avoid","all","avoid-page","page","left","right","column"],w0=()=>[Q0,gc],p0=()=>[Q0,O];return{cacheSize:500,separator:":",theme:{colors:[ic],spacing:[z0,F0],blur:["none","",D0,O],brightness:w0(),borderColor:[v],borderRadius:["none","","full",D0,O],borderSpacing:I(),borderWidth:F(),contrast:w0(),grayscale:k0(),hueRotate:p0(),invert:k0(),gap:I(),gradientColorStops:[v],gradientColorStopPositions:[Hn,F0],inset:R(),margin:R(),opacity:w0(),padding:I(),saturate:w0(),scale:w0(),sepia:k0(),skew:p0(),space:I(),translate:I()},classGroups:{aspect:[{aspect:["auto","square","video",O]}],container:["container"],columns:[{columns:[D0]}],"break-after":[{"break-after":S0()}],"break-before":[{"break-before":S0()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...u0(),O]}],overflow:[{overflow:T()}],"overflow-x":[{"overflow-x":T()}],"overflow-y":[{"overflow-y":T()}],overscroll:[{overscroll:x()}],"overscroll-x":[{"overscroll-x":x()}],"overscroll-y":[{"overscroll-y":x()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",lc,O]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",O]}],grow:[{grow:k0()}],shrink:[{shrink:k0()}],order:[{order:["first","last","none",lc,O]}],"grid-cols":[{"grid-cols":[ic]}],"col-start-end":[{col:["auto",{span:["full",lc,O]},O]}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":[ic]}],"row-start-end":[{row:["auto",{span:[lc,O]},O]}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",O]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",O]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...d0()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...d0(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...d0(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[M]}],px:[{px:[M]}],py:[{py:[M]}],ps:[{ps:[M]}],pe:[{pe:[M]}],pt:[{pt:[M]}],pr:[{pr:[M]}],pb:[{pb:[M]}],pl:[{pl:[M]}],m:[{m:[_]}],mx:[{mx:[_]}],my:[{my:[_]}],ms:[{ms:[_]}],me:[{me:[_]}],mt:[{mt:[_]}],mr:[{mr:[_]}],mb:[{mb:[_]}],ml:[{ml:[_]}],"space-x":[{"space-x":[H]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[H]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",O,c]}],"min-w":[{"min-w":["min","max","fit",O,z0]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[D0]},D0,O]}],h:[{h:[O,c,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",z0,O]}],"max-h":[{"max-h":[O,c,"min","max","fit"]}],"font-size":[{text:["base",D0,F0]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",gc]}],"font-family":[{font:[ic]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",O]}],"line-clamp":[{"line-clamp":["none",Q0,gc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z0,O]}],"list-image":[{"list-image":["none",O]}],"list-style-type":[{list:["none","disc","decimal",O]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[v]}],"placeholder-opacity":[{"placeholder-opacity":[D]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[v]}],"text-opacity":[{"text-opacity":[D]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...A(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",z0,F0]}],"underline-offset":[{"underline-offset":["auto",z0,O]}],"text-decoration-color":[{decoration:[v]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[D]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...u0(),Zn]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Qn]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$n]}],"bg-color":[{bg:[v]}],"gradient-from-pos":[{from:[h]}],"gradient-via-pos":[{via:[h]}],"gradient-to-pos":[{to:[h]}],"gradient-from":[{from:[u]}],"gradient-via":[{via:[u]}],"gradient-to":[{to:[u]}],rounded:[{rounded:[t]}],"rounded-s":[{"rounded-s":[t]}],"rounded-e":[{"rounded-e":[t]}],"rounded-t":[{"rounded-t":[t]}],"rounded-r":[{"rounded-r":[t]}],"rounded-b":[{"rounded-b":[t]}],"rounded-l":[{"rounded-l":[t]}],"rounded-ss":[{"rounded-ss":[t]}],"rounded-se":[{"rounded-se":[t]}],"rounded-ee":[{"rounded-ee":[t]}],"rounded-es":[{"rounded-es":[t]}],"rounded-tl":[{"rounded-tl":[t]}],"rounded-tr":[{"rounded-tr":[t]}],"rounded-br":[{"rounded-br":[t]}],"rounded-bl":[{"rounded-bl":[t]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[D]}],"border-style":[{border:[...A(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[D]}],"divide-style":[{divide:A()}],"border-color":[{border:[r]}],"border-color-x":[{"border-x":[r]}],"border-color-y":[{"border-y":[r]}],"border-color-t":[{"border-t":[r]}],"border-color-r":[{"border-r":[r]}],"border-color-b":[{"border-b":[r]}],"border-color-l":[{"border-l":[r]}],"divide-color":[{divide:[r]}],"outline-style":[{outline:["",...A()]}],"outline-offset":[{"outline-offset":[z0,O]}],"outline-w":[{outline:[z0,F0]}],"outline-color":[{outline:[v]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[v]}],"ring-opacity":[{"ring-opacity":[D]}],"ring-offset-w":[{"ring-offset":[z0,F0]}],"ring-offset-color":[{"ring-offset":[v]}],shadow:[{shadow:["","inner","none",D0,ce]}],"shadow-color":[{shadow:[ic]}],opacity:[{opacity:[D]}],"mix-blend":[{"mix-blend":E0()}],"bg-blend":[{"bg-blend":E0()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[e]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",D0,O]}],grayscale:[{grayscale:[i]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[s]}],saturate:[{saturate:[q]}],sepia:[{sepia:[K]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[e]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[i]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[s]}],"backdrop-opacity":[{"backdrop-opacity":[D]}],"backdrop-saturate":[{"backdrop-saturate":[q]}],"backdrop-sepia":[{"backdrop-sepia":[K]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",O]}],duration:[{duration:p0()}],ease:[{ease:["linear","in","out","in-out",O]}],delay:[{delay:p0()}],animate:[{animate:["none","spin","ping","pulse","bounce",O]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[N]}],"scale-x":[{"scale-x":[N]}],"scale-y":[{"scale-y":[N]}],rotate:[{rotate:[lc,O]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[Z]}],"skew-y":[{"skew-y":[Z]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",O]}],accent:[{accent:["auto",v]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O]}],"caret-color":[{caret:[v]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O]}],fill:[{fill:[v,"none"]}],"stroke-w":[{stroke:[z0,F0,gc]}],stroke:[{stroke:[v,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const v0=On(re);function te(v){let c=v[2],n,e,r=v[2]&&Lc(v);return{c(){r&&r.c(),n=G0()},m(t,o){r&&r.m(t,o),w(t,n,o),e=!0},p(t,o){t[2]?c?o0(c,t[2])?(r.d(1),r=Lc(t),c=t[2],r.c(),r.m(n.parentNode,n)):r.p(t,o):(r=Lc(t),c=t[2],r.c(),r.m(n.parentNode,n)):c&&(r.d(1),r=null,c=t[2])},i(t){e||(b(r,t),e=!0)},o(t){y(r,t),e=!1},d(t){t&&k(n),r&&r.d(t)}}}function oe(v){let c,n,e,r;const t=v[12].default,o=l0(t,v,v[11],null);let l=[{type:v[1]},v[4],{class:v[3]}],a={};for(let i=0;i<l.length;i+=1)a=X(a,l[i]);return{c(){c=E("button"),o&&o.c(),n0(c,a)},m(i,f){w(i,c,f),o&&o.m(c,null),c.autofocus&&c.focus(),n=!0,e||(r=[p(c,"click",v[22]),p(c,"change",v[23]),p(c,"keydown",v[24]),p(c,"keyup",v[25]),p(c,"touchstart",v[26],{passive:!0}),p(c,"touchend",v[27]),p(c,"touchcancel",v[28]),p(c,"mouseenter",v[29]),p(c,"mouseleave",v[30])],e=!0)},p(i,f){o&&o.p&&(!n||f[0]&2048)&&a0(o,t,i,i[11],n?i0(t,i[11],f,null):f0(i[11]),null),n0(c,a=x0(l,[(!n||f[0]&2)&&{type:i[1]},f[0]&16&&i[4],(!n||f[0]&8)&&{class:i[3]}]))},i(i){n||(b(o,i),n=!0)},o(i){y(o,i),n=!1},d(i){i&&k(c),o&&o.d(i),e=!1,m0(r)}}}function le(v){let c,n,e,r;const t=v[12].default,o=l0(t,v,v[11],null);let l=[{href:v[0]},v[4],{class:v[3]},{role:"button"}],a={};for(let i=0;i<l.length;i+=1)a=X(a,l[i]);return{c(){c=E("a"),o&&o.c(),n0(c,a)},m(i,f){w(i,c,f),o&&o.m(c,null),n=!0,e||(r=[p(c,"click",v[13]),p(c,"change",v[14]),p(c,"keydown",v[15]),p(c,"keyup",v[16]),p(c,"touchstart",v[17],{passive:!0}),p(c,"touchend",v[18]),p(c,"touchcancel",v[19]),p(c,"mouseenter",v[20]),p(c,"mouseleave",v[21])],e=!0)},p(i,f){o&&o.p&&(!n||f[0]&2048)&&a0(o,t,i,i[11],n?i0(t,i[11],f,null):f0(i[11]),null),n0(c,a=x0(l,[(!n||f[0]&1)&&{href:i[0]},f[0]&16&&i[4],(!n||f[0]&8)&&{class:i[3]},{role:"button"}]))},i(i){n||(b(o,i),n=!0)},o(i){y(o,i),n=!1},d(i){i&&k(c),o&&o.d(i),e=!1,m0(r)}}}function Lc(v){let c,n;const e=v[12].default,r=l0(e,v,v[11],null);let t=[v[4],{class:v[3]}],o={};for(let l=0;l<t.length;l+=1)o=X(o,t[l]);return{c(){c=E(v[2]),r&&r.c(),wc(v[2])(c,o)},m(l,a){w(l,c,a),r&&r.m(c,null),n=!0},p(l,a){r&&r.p&&(!n||a[0]&2048)&&a0(r,e,l,l[11],n?i0(e,l[11],a,null):f0(l[11]),null),wc(l[2])(c,o=x0(t,[a[0]&16&&l[4],(!n||a[0]&8)&&{class:l[3]}]))},i(l){n||(b(r,l),n=!0)},o(l){y(r,l),n=!1},d(l){l&&k(c),r&&r.d(l)}}}function ie(v){let c,n,e,r;const t=[le,oe,te],o=[];function l(a,i){return a[0]?0:a[2]==="button"?1:2}return c=l(v),n=o[c]=t[c](v),{c(){n.c(),e=G0()},m(a,i){o[c].m(a,i),w(a,e,i),r=!0},p(a,i){let f=c;c=l(a),c===f?o[c].p(a,i):(M0(),y(o[f],1,1,()=>{o[f]=null}),L0(),n=o[c],n?n.p(a,i):(n=o[c]=t[c](a),n.c()),b(n,1),n.m(e.parentNode,e))},i(a){r||(b(n),r=!0)},o(a){y(n),r=!1},d(a){a&&k(e),o[c].d(a)}}}function ae(v,c,n){const e=["pill","outline","size","href","type","color","shadow","tag","checked"];let r=r0(c,e),{$$slots:t={},$$scope:o}=c;const l=Ec("group");let{pill:a=!1}=c,{outline:i=!1}=c,{size:f=l?"sm":"md"}=c,{href:s=void 0}=c,{type:d="button"}=c,{color:u=l?i?"dark":"alternative":"primary"}=c,{shadow:h=!1}=c,{tag:g="button"}=c,{checked:_=void 0}=c;const D={alternative:"text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white",blue:"text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",dark:"text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700",green:"text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700",light:"text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600",primary:"text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700",purple:"text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",red:"text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700",yellow:"text-white bg-yellow-400 hover:bg-yellow-500 ",none:""},M={alternative:"text-primary-700 border dark:text-primary-500 bg-gray-100 dark:bg-gray-700 border-gray-300 shadow-gray-300 dark:shadow-gray-800 shadow-inner",blue:"text-blue-900 bg-blue-400 dark:bg-blue-500 shadow-blue-700 dark:shadow-blue-800 shadow-inner",dark:"text-white bg-gray-500 dark:bg-gray-600 shadow-gray-800 dark:shadow-gray-900 shadow-inner",green:"text-green-900 bg-green-400 dark:bg-green-500 shadow-green-700 dark:shadow-green-800 shadow-inner",light:"text-gray-900 bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:text-gray-900 dark:border-gray-700 shadow-gray-300 dark:shadow-gray-700 shadow-inner",primary:"text-primary-900 bg-primary-400 dark:bg-primary-500 shadow-primary-700 dark:shadow-primary-800 shadow-inner",purple:"text-purple-900 bg-purple-400 dark:bg-purple-500 shadow-purple-700 dark:shadow-purple-800 shadow-inner",red:"text-red-900 bg-red-400 dark:bg-red-500 shadow-red-700 dark:shadow-red-800 shadow-inner",yellow:"text-yellow-900 bg-yellow-300 dark:bg-yellow-400 shadow-yellow-500 dark:shadow-yellow-700 shadow-inner",none:""},q={alternative:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",blue:"focus-within:ring-blue-300 dark:focus-within:ring-blue-800",dark:"focus-within:ring-gray-300 dark:focus-within:ring-gray-700",green:"focus-within:ring-green-300 dark:focus-within:ring-green-800",light:"focus-within:ring-gray-200 dark:focus-within:ring-gray-700",primary:"focus-within:ring-primary-300 dark:focus-within:ring-primary-800",purple:"focus-within:ring-purple-300 dark:focus-within:ring-purple-900",red:"focus-within:ring-red-300 dark:focus-within:ring-red-900",yellow:"focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",none:""},N={alternative:"shadow-gray-500/50 dark:shadow-gray-800/80",blue:"shadow-blue-500/50 dark:shadow-blue-800/80",dark:"shadow-gray-500/50 dark:shadow-gray-800/80",green:"shadow-green-500/50 dark:shadow-green-800/80",light:"shadow-gray-500/50 dark:shadow-gray-800/80",primary:"shadow-primary-500/50 dark:shadow-primary-800/80",purple:"shadow-purple-500/50 dark:shadow-purple-800/80",red:"shadow-red-500/50 dark:shadow-red-800/80 ",yellow:"shadow-yellow-500/50 dark:shadow-yellow-800/80 ",none:""},K={alternative:"text-gray-900 dark:text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white focus-within:ring-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600 dark:focus-within:ring-gray-800",blue:"text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600",dark:"text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus-within:bg-gray-900 focus-within:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600",green:"text-green-700 hover:text-white border border-green-700 hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600",light:"text-gray-500 hover:text-gray-900 bg-white border border-gray-200 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600",primary:"text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-600",purple:"text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500",red:"text-red-700 hover:text-white border border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600",yellow:"text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400",none:""},Z={xs:"px-3 py-2 text-xs",sm:"px-4 py-2 text-sm",md:"px-5 py-2.5 text-sm",lg:"px-5 py-3 text-base",xl:"px-6 py-3.5 text-base"},H=()=>i||u==="alternative"||u==="light";let J;function x(z){C.call(this,v,z)}function T(z){C.call(this,v,z)}function R(z){C.call(this,v,z)}function I(z){C.call(this,v,z)}function F(z){C.call(this,v,z)}function S(z){C.call(this,v,z)}function u0(z){C.call(this,v,z)}function A(z){C.call(this,v,z)}function E0(z){C.call(this,v,z)}function d0(z){C.call(this,v,z)}function k0(z){C.call(this,v,z)}function S0(z){C.call(this,v,z)}function w0(z){C.call(this,v,z)}function p0(z){C.call(this,v,z)}function L(z){C.call(this,v,z)}function s0(z){C.call(this,v,z)}function R0(z){C.call(this,v,z)}function U0(z){C.call(this,v,z)}return v.$$set=z=>{n(39,c=X(X({},c),$(z))),n(4,r=r0(c,e)),"pill"in z&&n(5,a=z.pill),"outline"in z&&n(6,i=z.outline),"size"in z&&n(7,f=z.size),"href"in z&&n(0,s=z.href),"type"in z&&n(1,d=z.type),"color"in z&&n(8,u=z.color),"shadow"in z&&n(9,h=z.shadow),"tag"in z&&n(2,g=z.tag),"checked"in z&&n(10,_=z.checked),"$$scope"in z&&n(11,o=z.$$scope)},v.$$.update=()=>{n(3,J=v0("text-center font-medium",l?"focus-within:ring-2":"focus-within:ring-4",l&&"focus-within:z-10",l||"focus-within:outline-none","inline-flex items-center justify-center "+Z[f],i&&_&&"border dark:border-gray-900",i&&_&&M[u],i&&!_&&K[u],!i&&_&&M[u],!i&&!_&&D[u],u==="alternative"&&(l&&!_?"dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600":"dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"),i&&u==="dark"&&(l?_?"bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600":"dark:text-white border-gray-800 dark:border-white":"dark:text-gray-400 dark:border-gray-700"),q[u],H()&&l&&"border-l-0 first:border-l",l?a&&"first:rounded-l-full last:rounded-r-full"||"first:rounded-l-lg last:rounded-r-lg":a&&"rounded-full"||"rounded-lg",h&&"shadow-lg",h&&N[u],c.disabled&&"cursor-not-allowed opacity-50",c.class))},c=$(c),[s,d,g,J,r,a,i,f,u,h,_,o,t,x,T,R,I,F,S,u0,A,E0,d0,k0,S0,w0,p0,L,s0,R0,U0]}class Hc extends g0{constructor(c){super(),_0(this,c,ae,ie,o0,{pill:5,outline:6,size:7,href:0,type:1,color:8,shadow:9,tag:2,checked:10},null,[-1,-1])}}function fe(v){let c,n,e;const r=v[5].default,t=l0(r,v,v[4],null);let o=[v[1],{class:n=v0(v[0],v[2].class)},{role:"group"}],l={};for(let a=0;a<o.length;a+=1)l=X(l,o[a]);return{c(){c=E("div"),t&&t.c(),n0(c,l)},m(a,i){w(a,c,i),t&&t.m(c,null),e=!0},p(a,[i]){t&&t.p&&(!e||i&16)&&a0(t,r,a,a[4],e?i0(r,a[4],i,null):f0(a[4]),null),n0(c,l=x0(o,[i&2&&a[1],(!e||i&5&&n!==(n=v0(a[0],a[2].class)))&&{class:n},{role:"group"}]))},i(a){e||(b(t,a),e=!0)},o(a){y(t,a),e=!1},d(a){a&&k(c),t&&t.d(a)}}}function se(v,c,n){const e=["size","divClass"];let r=r0(c,e),{$$slots:t={},$$scope:o}=c,{size:l="md"}=c,{divClass:a="inline-flex rounded-lg shadow-sm"}=c;return Qv("group",{size:l}),v.$$set=i=>{n(2,c=X(X({},c),$(i))),n(1,r=r0(c,e)),"size"in i&&n(3,l=i.size),"divClass"in i&&n(0,a=i.divClass),"$$scope"in i&&n(4,o=i.$$scope)},c=$(c),[a,r,c,l,o,t]}class ue extends g0{constructor(c){super(),_0(this,c,se,fe,o0,{size:3,divClass:0})}}function de(v){let c;const n=v[5].default,e=l0(n,v,v[4],null);return{c(){e&&e.c()},m(r,t){e&&e.m(r,t),c=!0},p(r,t){e&&e.p&&(!c||t&16)&&a0(e,n,r,r[4],c?i0(n,r[4],t,null):f0(r[4]),null)},i(r){c||(b(e,r),c=!0)},o(r){y(e,r),c=!1},d(r){e&&e.d(r)}}}function he(v){let c=v[0],n,e,r=v[0]&&Gc(v);return{c(){r&&r.c(),n=G0()},m(t,o){r&&r.m(t,o),w(t,n,o),e=!0},p(t,o){t[0]?c?o0(c,t[0])?(r.d(1),r=Gc(t),c=t[0],r.c(),r.m(n.parentNode,n)):r.p(t,o):(r=Gc(t),c=t[0],r.c(),r.m(n.parentNode,n)):c&&(r.d(1),r=null,c=t[0])},i(t){e||(b(r,t),e=!0)},o(t){y(r,t),e=!1},d(t){t&&k(n),r&&r.d(t)}}}function Gc(v){let c,n,e,r;const t=v[5].default,o=l0(t,v,v[4],null);let l=[v[3]],a={};for(let i=0;i<l.length;i+=1)a=X(a,l[i]);return{c(){c=E(v[0]),o&&o.c(),wc(v[0])(c,a)},m(i,f){w(i,c,f),o&&o.m(c,null),n=!0,e||(r=zc(v[2].call(null,c)),e=!0)},p(i,f){o&&o.p&&(!n||f&16)&&a0(o,t,i,i[4],n?i0(t,i[4],f,null):f0(i[4]),null),wc(i[0])(c,a=x0(l,[f&8&&i[3]]))},i(i){n||(b(o,i),n=!0)},o(i){y(o,i),n=!1},d(i){i&&k(c),o&&o.d(i),e=!1,r()}}}function _e(v){let c,n,e,r;const t=[he,de],o=[];function l(a,i){return a[1]?0:1}return c=l(v),n=o[c]=t[c](v),{c(){n.c(),e=G0()},m(a,i){o[c].m(a,i),w(a,e,i),r=!0},p(a,[i]){let f=c;c=l(a),c===f?o[c].p(a,i):(M0(),y(o[f],1,1,()=>{o[f]=null}),L0(),n=o[c],n?n.p(a,i):(n=o[c]=t[c](a),n.c()),b(n,1),n.m(e.parentNode,e))},i(a){r||(b(n),r=!0)},o(a){y(n),r=!1},d(a){a&&k(e),o[c].d(a)}}}function ge(v,c,n){const e=["tag","show","use"];let r=r0(c,e),{$$slots:t={},$$scope:o}=c,{tag:l="div"}=c,{show:a}=c,{use:i=()=>{}}=c;return v.$$set=f=>{c=X(X({},c),$(f)),n(3,r=r0(c,e)),"tag"in f&&n(0,l=f.tag),"show"in f&&n(1,a=f.show),"use"in f&&n(2,i=f.use),"$$scope"in f&&n(4,o=f.$$scope)},[l,a,i,r,o,t]}class t1 extends g0{constructor(c){super(),_0(this,c,ge,_e,o0,{tag:0,show:1,use:2})}}function me(v){let c;const n=v[7].default,e=l0(n,v,v[6],null);return{c(){e&&e.c()},m(r,t){e&&e.m(r,t),c=!0},p(r,t){e&&e.p&&(!c||t&64)&&a0(e,n,r,r[6],c?i0(n,r[6],t,null):f0(r[6]),null)},i(r){c||(b(e,r),c=!0)},o(r){y(e,r),c=!1},d(r){e&&e.d(r)}}}function pe(v){let c,n;const e=v[7].default,r=l0(e,v,v[6],null);let t=[v[3],{class:v[2]}],o={};for(let l=0;l<t.length;l+=1)o=X(o,t[l]);return{c(){c=E("label"),r&&r.c(),n0(c,o)},m(l,a){w(l,c,a),r&&r.m(c,null),v[8](c),n=!0},p(l,a){r&&r.p&&(!n||a&64)&&a0(r,e,l,l[6],n?i0(e,l[6],a,null):f0(l[6]),null),n0(c,o=x0(t,[a&8&&l[3],(!n||a&4)&&{class:l[2]}]))},i(l){n||(b(r,l),n=!0)},o(l){y(r,l),n=!1},d(l){l&&k(c),r&&r.d(l),v[8](null)}}}function be(v){let c,n,e,r;const t=[pe,me],o=[];function l(a,i){return a[0]?0:1}return c=l(v),n=o[c]=t[c](v),{c(){n.c(),e=G0()},m(a,i){o[c].m(a,i),w(a,e,i),r=!0},p(a,[i]){let f=c;c=l(a),c===f?o[c].p(a,i):(M0(),y(o[f],1,1,()=>{o[f]=null}),L0(),n=o[c],n?n.p(a,i):(n=o[c]=t[c](a),n.c()),b(n,1),n.m(e.parentNode,e))},i(a){r||(b(n),r=!0)},o(a){y(n),r=!1},d(a){a&&k(e),o[c].d(a)}}}function ye(v,c,n){let e;const r=["color","defaultClass","show"];let t=r0(c,r),{$$slots:o={},$$scope:l}=c,{color:a="gray"}=c,{defaultClass:i="text-sm font-medium block"}=c,{show:f=!0}=c,s;const d={gray:"text-gray-900 dark:text-gray-300",green:"text-green-700 dark:text-green-500",red:"text-red-700 dark:text-red-500",disabled:"text-gray-400 dark:text-gray-500"};function u(h){C0[h?"unshift":"push"](()=>{s=h,n(1,s)})}return v.$$set=h=>{n(10,c=X(X({},c),$(h))),n(3,t=r0(c,r)),"color"in h&&n(4,a=h.color),"defaultClass"in h&&n(5,i=h.defaultClass),"show"in h&&n(0,f=h.show),"$$scope"in h&&n(6,l=h.$$scope)},v.$$.update=()=>{if(v.$$.dirty&18){const h=s==null?void 0:s.control;n(4,a=h!=null&&h.disabled?"disabled":a)}n(2,e=v0(i,d[a],c.class))},c=$(c),[f,s,e,t,a,i,l,o,u]}class ke extends g0{constructor(c){super(),_0(this,c,ye,be,o0,{color:4,defaultClass:5,show:0})}}const we={primary:"text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",secondary:"text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",red:"text-red-600 focus:ring-red-500 dark:focus:ring-red-600",green:"text-green-600 focus:ring-green-500 dark:focus:ring-green-600",purple:"text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",teal:"text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",yellow:"text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",orange:"text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",blue:"text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"},Av=(v,c)=>v0(v?"inline-flex":"flex","items-center",c);let Ce="mr-2";const Fv=(v,c,n,e,r)=>v0("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2",Ce,e?"dark:bg-gray-600 dark:border-gray-500":"dark:bg-gray-700 dark:border-gray-600",v&&"sr-only peer",n&&"rounded",we[c],r);function xe(v){let c,n,e,r,t,o,l,a=[{type:"checkbox"},{__value:v[5]},v[12],{class:n=v0(v[6],Fv(v[3],v[2],!0,v[7],v[11].default||v[10].class))}],i={};for(let d=0;d<a.length;d+=1)i=X(i,a[d]);const f=v[13].default,s=l0(f,v,v[26],null);return{c(){c=E("input"),r=B(),s&&s.c(),n0(c,i)},m(d,u){w(d,c,u),c.autofocus&&c.focus(),c.checked=v[1],w(d,r,u),s&&s.m(d,u),t=!0,o||(l=[zc(e=v[8].call(null,c,v[0])),p(c,"change",v[25]),p(c,"keyup",v[14]),p(c,"keydown",v[15]),p(c,"keypress",v[16]),p(c,"focus",v[17]),p(c,"blur",v[18]),p(c,"click",v[19]),p(c,"mouseover",v[20]),p(c,"mouseenter",v[21]),p(c,"mouseleave",v[22]),p(c,"paste",v[23]),p(c,"change",v[9]),p(c,"change",v[24])],o=!0)},p(d,u){n0(c,i=x0(a,[{type:"checkbox"},(!t||u&32)&&{__value:d[5]},u&4096&&d[12],(!t||u&3148&&n!==(n=v0(d[6],Fv(d[3],d[2],!0,d[7],d[11].default||d[10].class))))&&{class:n}])),e&&Sc(e.update)&&u&1&&e.update.call(null,d[0]),u&2&&(c.checked=d[1]),s&&s.p&&(!t||u&67108864)&&a0(s,f,d,d[26],t?i0(f,d[26],u,null):f0(d[26]),null)},i(d){t||(b(s,d),t=!0)},o(d){y(s,d),t=!1},d(d){d&&(k(c),k(r)),s&&s.d(d),o=!1,m0(l)}}}function Se(v){let c,n;return c=new ke({props:{class:Av(v[4],v[10].class),show:v[11].default,$$slots:{default:[xe]},$$scope:{ctx:v}}}),{c(){j(c.$$.fragment)},m(e,r){G(c,e,r),n=!0},p(e,[r]){const t={};r&1040&&(t.class=Av(e[4],e[10].class)),r&2048&&(t.show=e[11].default),r&67116143&&(t.$$scope={dirty:r,ctx:e}),c.$set(t)},i(e){n||(b(c.$$.fragment,e),n=!0)},o(e){y(c.$$.fragment,e),n=!1},d(e){U(c,e)}}}function ze(v,c,n){const e=["color","custom","inline","group","value","checked","spacing"];let r=r0(c,e),{$$slots:t={},$$scope:o}=c;const l=Hv(t);let{color:a="primary"}=c,{custom:i=!1}=c,{inline:f=!1}=c,{group:s=[]}=c,{value:d="on"}=c,{checked:u=void 0}=c,{spacing:h="mr-2"}=c,g=Ec("background");function _(S,u0){return u===void 0&&n(1,u=u0.includes(d)),D(),{update(A){n(1,u=A.includes(d))}}}function D(){const S=s.indexOf(d);u===void 0&&n(1,u=S>=0),u?S<0&&(s.push(d),n(0,s)):S>=0&&(s.splice(S,1),n(0,s))}function M(S){C.call(this,v,S)}function q(S){C.call(this,v,S)}function N(S){C.call(this,v,S)}function K(S){C.call(this,v,S)}function Z(S){C.call(this,v,S)}function H(S){C.call(this,v,S)}function J(S){C.call(this,v,S)}function x(S){C.call(this,v,S)}function T(S){C.call(this,v,S)}function R(S){C.call(this,v,S)}function I(S){C.call(this,v,S)}function F(){u=this.checked,n(1,u)}return v.$$set=S=>{n(10,c=X(X({},c),$(S))),n(12,r=r0(c,e)),"color"in S&&n(2,a=S.color),"custom"in S&&n(3,i=S.custom),"inline"in S&&n(4,f=S.inline),"group"in S&&n(0,s=S.group),"value"in S&&n(5,d=S.value),"checked"in S&&n(1,u=S.checked),"spacing"in S&&n(6,h=S.spacing),"$$scope"in S&&n(26,o=S.$$scope)},c=$(c),[s,u,a,i,f,d,h,g,_,D,c,l,r,t,M,q,N,K,Z,H,J,x,T,R,I,F,o]}class Ee extends g0{constructor(c){super(),_0(this,c,ze,Se,o0,{color:2,custom:3,inline:4,group:0,value:5,checked:1,spacing:6})}}function Te(v){let c,n,e,r,t,o,l=[{type:"radio"},{__value:v[1]},v[8],{class:"sr-only"}],a={};for(let s=0;s<l.length;s+=1)a=X(a,l[s]);const i=v[10].default,f=l0(i,v,v[24],null);return r=h1(v[23][0]),{c(){c=E("input"),n=B(),f&&f.c(),n0(c,a),r.p(c)},m(s,d){w(s,c,d),c.autofocus&&c.focus(),c.checked=c.__value===v[0],w(s,n,d),f&&f.m(s,d),e=!0,t||(o=[p(c,"change",v[22]),p(c,"keyup",v[11]),p(c,"keydown",v[12]),p(c,"keypress",v[13]),p(c,"focus",v[14]),p(c,"blur",v[15]),p(c,"click",v[16]),p(c,"mouseover",v[17]),p(c,"mouseenter",v[18]),p(c,"mouseleave",v[19]),p(c,"paste",v[20]),p(c,"change",v[21])],t=!0)},p(s,d){n0(c,a=x0(l,[{type:"radio"},(!e||d&2)&&{__value:s[1]},d&256&&s[8],{class:"sr-only"}])),d&1&&(c.checked=c.__value===s[0]),f&&f.p&&(!e||d&16777216)&&a0(f,i,s,s[24],e?i0(i,s[24],d,null):f0(s[24]),null)},i(s){e||(b(f,s),e=!0)},o(s){y(f,s),e=!1},d(s){s&&(k(c),k(n)),f&&f.d(s),r.r(),t=!1,m0(o)}}}function Re(v){let c,n;return c=new Hc({props:{tag:"label",checked:v[1]===v[0],pill:v[2],outline:v[3],size:v[4],color:v[5],shadow:v[6],class:v[7],$$slots:{default:[Te]},$$scope:{ctx:v}}}),{c(){j(c.$$.fragment)},m(e,r){G(c,e,r),n=!0},p(e,[r]){const t={};r&3&&(t.checked=e[1]===e[0]),r&4&&(t.pill=e[2]),r&8&&(t.outline=e[3]),r&16&&(t.size=e[4]),r&32&&(t.color=e[5]),r&64&&(t.shadow=e[6]),r&128&&(t.class=e[7]),r&16777475&&(t.$$scope={dirty:r,ctx:e}),c.$set(t)},i(e){n||(b(c.$$.fragment,e),n=!0)},o(e){y(c.$$.fragment,e),n=!1},d(e){U(c,e)}}}function Ae(v,c,n){const e=["group","value","inline","pill","outline","size","color","shadow"];let r=r0(c,e),{$$slots:t={},$$scope:o}=c,{group:l=""}=c,{value:a=""}=c,{inline:i=!0}=c,{pill:f=!1}=c,{outline:s=!1}=c,{size:d=void 0}=c,{color:u=void 0}=c,{shadow:h=!1}=c,g;const _=[[]];function D(F){C.call(this,v,F)}function M(F){C.call(this,v,F)}function q(F){C.call(this,v,F)}function N(F){C.call(this,v,F)}function K(F){C.call(this,v,F)}function Z(F){C.call(this,v,F)}function H(F){C.call(this,v,F)}function J(F){C.call(this,v,F)}function x(F){C.call(this,v,F)}function T(F){C.call(this,v,F)}function R(F){C.call(this,v,F)}function I(){l=this.__value,n(0,l)}return v.$$set=F=>{n(25,c=X(X({},c),$(F))),n(8,r=r0(c,e)),"group"in F&&n(0,l=F.group),"value"in F&&n(1,a=F.value),"inline"in F&&n(9,i=F.inline),"pill"in F&&n(2,f=F.pill),"outline"in F&&n(3,s=F.outline),"size"in F&&n(4,d=F.size),"color"in F&&n(5,u=F.color),"shadow"in F&&n(6,h=F.shadow),"$$scope"in F&&n(24,o=F.$$scope)},v.$$.update=()=>{n(7,g=v0(i?"inline-flex":"flex",c.class))},c=$(c),[l,a,f,s,d,u,h,g,r,i,t,D,M,q,N,K,Z,H,J,x,T,R,I,_,o]}class Uc extends g0{constructor(c){super(),_0(this,c,Ae,Re,o0,{group:0,value:1,inline:9,pill:2,outline:3,size:4,color:5,shadow:6})}}function Fe(v){let c,n,e,r=[{type:"range"},v[2],{class:v[1]}],t={};for(let o=0;o<r.length;o+=1)t=X(t,r[o]);return{c(){c=E("input"),n0(c,t)},m(o,l){w(o,c,l),c.autofocus&&c.focus(),B0(c,v[0]),n||(e=[p(c,"change",v[9]),p(c,"input",v[9]),p(c,"change",v[4]),p(c,"click",v[5]),p(c,"keydown",v[6]),p(c,"keypress",v[7]),p(c,"keyup",v[8])],n=!0)},p(o,[l]){n0(c,t=x0(r,[{type:"range"},l&4&&o[2],l&2&&{class:o[1]}])),l&1&&B0(c,o[0])},i:t0,o:t0,d(o){o&&k(c),n=!1,m0(e)}}}function De(v,c,n){const e=["value","size"];let r=r0(c,e),{value:t}=c,{size:o="md"}=c;const l={sm:"h-1 range-sm",md:"h-2",lg:"h-3 range-lg"};let a;function i(g){C.call(this,v,g)}function f(g){C.call(this,v,g)}function s(g){C.call(this,v,g)}function d(g){C.call(this,v,g)}function u(g){C.call(this,v,g)}function h(){t=_1(this.value),n(0,t)}return v.$$set=g=>{n(11,c=X(X({},c),$(g))),n(2,r=r0(c,e)),"value"in g&&n(0,t=g.value),"size"in g&&n(3,o=g.size)},v.$$.update=()=>{n(1,a=v0("w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",l[o]??l.md,c.class))},c=$(c),[t,a,r,o,i,f,s,d,u,h]}class kc extends g0{constructor(c){super(),_0(this,c,De,Fe,o0,{value:0,size:3})}}function Dv(v,c,n){const e=v.slice();return e[0]=c[n].value,e[17]=c[n].name,e}function Pv(v){let c,n;return{c(){c=E("option"),n=W(v[2]),c.disabled=!0,c.selected=!0,c.__value="",B0(c,c.__value)},m(e,r){w(e,c,r),m(c,n)},p(e,r){r&4&&Z0(n,e[2])},d(e){e&&k(c)}}}function Iv(v){let c;const n=v[10].default,e=l0(n,v,v[9],null);return{c(){e&&e.c()},m(r,t){e&&e.m(r,t),c=!0},p(r,t){e&&e.p&&(!c||t&512)&&a0(e,n,r,r[9],c?i0(n,r[9],t,null):f0(r[9]),null)},i(r){c||(b(e,r),c=!0)},o(r){y(e,r),c=!1},d(r){e&&e.d(r)}}}function Nv(v){let c,n=v[17]+"",e,r;return{c(){c=E("option"),e=W(n),c.__value=r=v[0],B0(c,c.__value)},m(t,o){w(t,c,o),m(c,e)},p(t,o){o&2&&n!==(n=t[17]+"")&&Z0(e,n),o&2&&r!==(r=t[0])&&(c.__value=r,B0(c,c.__value))},d(t){t&&k(c)}}}function Pe(v){let c,n,e,r,t=v[2]&&Pv(v),o=Wc(v[1]),l=[];for(let s=0;s<o.length;s+=1)l[s]=Nv(Dv(v,o,s));let a=null;o.length||(a=Iv(v));let i=[v[4],{class:v[3]}],f={};for(let s=0;s<i.length;s+=1)f=X(f,i[s]);return{c(){c=E("select"),t&&t.c(),n=G0();for(let s=0;s<l.length;s+=1)l[s].c();a&&a.c(),n0(c,f),v[0]===void 0&&Cc(()=>v[14].call(c))},m(s,d){w(s,c,d),t&&t.m(c,null),m(c,n);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(c,null);a&&a.m(c,null),"value"in f&&(f.multiple?xv:hc)(c,f.value),c.autofocus&&c.focus(),hc(c,v[0],!0),e||(r=[p(c,"change",v[14]),p(c,"change",v[11]),p(c,"contextmenu",v[12]),p(c,"input",v[13])],e=!0)},p(s,[d]){if(s[2]?t?t.p(s,d):(t=Pv(s),t.c(),t.m(c,n)):t&&(t.d(1),t=null),d&514){o=Wc(s[1]);let u;for(u=0;u<o.length;u+=1){const h=Dv(s,o,u);l[u]?l[u].p(h,d):(l[u]=Nv(h),l[u].c(),l[u].m(c,null))}for(;u<l.length;u+=1)l[u].d(1);l.length=o.length,!o.length&&a?a.p(s,d):o.length?a&&(M0(),y(a,1,1,()=>{a=null}),L0()):(a=Iv(s),a.c(),b(a,1),a.m(c,null))}n0(c,f=x0(i,[d&16&&s[4],{class:s[3]}])),d&24&&"value"in f&&(f.multiple?xv:hc)(c,f.value),d&3&&hc(c,s[0])},i:t0,o:t0,d(s){s&&k(c),t&&t.d(),Kv(l,s),a&&a.d(),e=!1,m0(r)}}}const Ie="block w-full";function Ne(v,c,n){const e=["items","value","placeholder","underline","size","defaultClass","underlineClass"];let r=r0(c,e),{$$slots:t={},$$scope:o}=c,{items:l=[]}=c,{value:a=void 0}=c,{placeholder:i="Choose option ..."}=c,{underline:f=!1}=c,{size:s="md"}=c,{defaultClass:d="text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"}=c,{underlineClass:u="text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"}=c;const h={sm:"text-sm p-2",md:"text-sm p-2.5",lg:"text-base py-3 px-4"};let g;function _(N){C.call(this,v,N)}function D(N){C.call(this,v,N)}function M(N){C.call(this,v,N)}function q(){a=m1(this),n(0,a),n(1,l)}return v.$$set=N=>{n(16,c=X(X({},c),$(N))),n(4,r=r0(c,e)),"items"in N&&n(1,l=N.items),"value"in N&&n(0,a=N.value),"placeholder"in N&&n(2,i=N.placeholder),"underline"in N&&n(5,f=N.underline),"size"in N&&n(6,s=N.size),"defaultClass"in N&&n(7,d=N.defaultClass),"underlineClass"in N&&n(8,u=N.underlineClass),"$$scope"in N&&n(9,o=N.$$scope)},v.$$.update=()=>{n(3,g=v0(Ie,f?u:d,h[s],f&&"!px-0",c.class))},c=$(c),[a,l,i,g,r,f,s,d,u,o,t,_,D,M,q]}class Be extends g0{constructor(c){super(),_0(this,c,Ne,Pe,o0,{items:1,value:0,placeholder:2,underline:5,size:6,defaultClass:7,underlineClass:8})}}const Me=v=>({}),Bv=v=>({}),Le=v=>({}),Mv=v=>({});function Lv(v){let c,n;const e=v[11].header,r=l0(e,v,v[26],Mv);return{c(){c=E("div"),r&&r.c(),Y(c,"class",v[5](!0))},m(t,o){w(t,c,o),r&&r.m(c,null),n=!0},p(t,o){r&&r.p&&(!n||o&67108864)&&a0(r,e,t,t[26],n?i0(e,t[26],o,Le):f0(t[26]),Mv)},i(t){n||(b(r,t),n=!0)},o(t){y(r,t),n=!1},d(t){t&&k(c),r&&r.d(t)}}}function Ge(v){let c,n,e,r=[v[7],{class:v[3]}],t={};for(let o=0;o<r.length;o+=1)t=X(t,r[o]);return{c(){c=E("textarea"),n0(c,t)},m(o,l){w(o,c,l),c.autofocus&&c.focus(),B0(c,v[0]),n||(e=[p(c,"input",v[25]),p(c,"blur",v[12]),p(c,"change",v[13]),p(c,"click",v[14]),p(c,"contextmenu",v[15]),p(c,"focus",v[16]),p(c,"input",v[17]),p(c,"keydown",v[18]),p(c,"keypress",v[19]),p(c,"keyup",v[20]),p(c,"mouseenter",v[21]),p(c,"mouseleave",v[22]),p(c,"mouseover",v[23]),p(c,"paste",v[24])],n=!0)},p(o,l){n0(c,t=x0(r,[l&128&&o[7],l&8&&{class:o[3]}])),l&1&&B0(c,o[0])},d(o){o&&k(c),n=!1,m0(e)}}}function Gv(v){let c,n;const e=v[11].footer,r=l0(e,v,v[26],Bv);return{c(){c=E("div"),r&&r.c(),Y(c,"class",v[5](!1))},m(t,o){w(t,c,o),r&&r.m(c,null),n=!0},p(t,o){r&&r.p&&(!n||o&67108864)&&a0(r,e,t,t[26],n?i0(e,t[26],o,Me):f0(t[26]),Bv)},i(t){n||(b(r,t),n=!0)},o(t){y(r,t),n=!1},d(t){t&&k(c),r&&r.d(t)}}}function Ue(v){let c,n,e,r,t,o=v[6].header&&Lv(v);n=new t1({props:{show:v[1],class:v[4],$$slots:{default:[Ge]},$$scope:{ctx:v}}});let l=v[6].footer&&Gv(v);return{c(){o&&o.c(),c=B(),j(n.$$.fragment),e=B(),l&&l.c(),r=G0()},m(a,i){o&&o.m(a,i),w(a,c,i),G(n,a,i),w(a,e,i),l&&l.m(a,i),w(a,r,i),t=!0},p(a,i){a[6].header?o?(o.p(a,i),i&64&&b(o,1)):(o=Lv(a),o.c(),b(o,1),o.m(c.parentNode,c)):o&&(M0(),y(o,1,1,()=>{o=null}),L0());const f={};i&2&&(f.show=a[1]),i&16&&(f.class=a[4]),i&67109001&&(f.$$scope={dirty:i,ctx:a}),n.$set(f),a[6].footer?l?(l.p(a,i),i&64&&b(l,1)):(l=Gv(a),l.c(),b(l,1),l.m(r.parentNode,r)):l&&(M0(),y(l,1,1,()=>{l=null}),L0())},i(a){t||(b(o),b(n.$$.fragment,a),b(l),t=!0)},o(a){y(o),y(n.$$.fragment,a),y(l),t=!1},d(a){a&&(k(c),k(e),k(r)),o&&o.d(a),U(n,a),l&&l.d(a)}}}function Oe(v){let c,n;return c=new t1({props:{show:v[1],class:v[2],$$slots:{default:[Ue]},$$scope:{ctx:v}}}),{c(){j(c.$$.fragment)},m(e,r){G(c,e,r),n=!0},p(e,[r]){const t={};r&2&&(t.show=e[1]),r&4&&(t.class=e[2]),r&67109083&&(t.$$scope={dirty:r,ctx:e}),c.$set(t)},i(e){n||(b(c.$$.fragment,e),n=!0)},o(e){y(c.$$.fragment,e),n=!1},d(e){U(c,e)}}}function je(v,c,n){const e=["value","wrappedClass","unWrappedClass","innerWrappedClass"];let r=r0(c,e),{$$slots:t={},$$scope:o}=c;const l=Hv(t),a=Ec("background");let{value:i=void 0}=c,{wrappedClass:f="block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0"}=c,{unWrappedClass:s="p-2.5 text-sm focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"}=c,{innerWrappedClass:d="py-2 px-4 bg-white dark:bg-gray-800"}=c,u,h,g;const _=A=>v0(A?"border-b":"border-t","py-2 px-3 border-gray-200 dark:border-gray-600");let D;function M(A){C.call(this,v,A)}function q(A){C.call(this,v,A)}function N(A){C.call(this,v,A)}function K(A){C.call(this,v,A)}function Z(A){C.call(this,v,A)}function H(A){C.call(this,v,A)}function J(A){C.call(this,v,A)}function x(A){C.call(this,v,A)}function T(A){C.call(this,v,A)}function R(A){C.call(this,v,A)}function I(A){C.call(this,v,A)}function F(A){C.call(this,v,A)}function S(A){C.call(this,v,A)}function u0(){i=this.value,n(0,i)}return v.$$set=A=>{n(28,c=X(X({},c),$(A))),n(7,r=r0(c,e)),"value"in A&&n(0,i=A.value),"wrappedClass"in A&&n(8,f=A.wrappedClass),"unWrappedClass"in A&&n(9,s=A.unWrappedClass),"innerWrappedClass"in A&&n(10,d=A.innerWrappedClass),"$$scope"in A&&n(26,o=A.$$scope)},v.$$.update=()=>{n(2,h=v0("w-full rounded-lg",a?"bg-white dark:bg-gray-800":"bg-gray-50 dark:bg-gray-700","text-gray-900 dark:placeholder-gray-400 dark:text-white ","border border-gray-200 dark:border-gray-600",c.class)),v.$$.dirty&774&&n(3,g=u?f:v0(h,s)),v.$$.dirty&1024&&n(4,D=v0(d,l.footer?"":"rounded-b-lg",l.header?"":"rounded-t-lg"))},n(1,u=l.header||l.footer),c=$(c),[i,u,h,g,D,_,l,r,f,s,d,t,M,q,N,K,Z,H,J,x,T,R,I,F,S,u0,o]}class We extends g0{constructor(c){super(),_0(this,c,je,Oe,o0,{value:0,wrappedClass:8,unWrappedClass:9,innerWrappedClass:10})}}function Xe(v){let c,n,e;const r=v[3].default,t=l0(r,v,v[2],null);return{c(){c=E("kbd"),t&&t.c(),Y(c,"class",n=v0(v[0],v[1].class))},m(o,l){w(o,c,l),t&&t.m(c,null),e=!0},p(o,[l]){t&&t.p&&(!e||l&4)&&a0(t,r,o,o[2],e?i0(r,o[2],l,null):f0(o[2]),null),(!e||l&3&&n!==(n=v0(o[0],o[1].class)))&&Y(c,"class",n)},i(o){e||(b(t,o),e=!0)},o(o){y(t,o),e=!1},d(o){o&&k(c),t&&t.d(o)}}}function qe(v,c,n){let{$$slots:e={},$$scope:r}=c,{kbdClass:t="text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"}=c;return v.$$set=o=>{n(1,c=X(X({},c),$(o))),"kbdClass"in o&&n(0,t=o.kbdClass),"$$scope"in o&&n(2,r=o.$$scope)},c=$(c),[t,c,r,e]}class h0 extends g0{constructor(c){super(),_0(this,c,qe,Xe,o0,{kbdClass:0})}}const Ve=v=>({}),Uv=v=>({});function Ye(v){let c;return{c(){c=W(v[1])},m(n,e){w(n,c,e)},p(n,e){e&2&&Z0(c,n[1])},d(n){n&&k(c)}}}function Ov(v){let c,n,e,r,t;const o=v[10].default,l=l0(o,v,v[9],null);return{c(){c=E("div"),n=E("div"),l&&l.c(),Y(c,"class","hidden tab_content_placeholder")},m(a,i){w(a,c,i),m(c,n),l&&l.m(n,null),e=!0,r||(t=zc(v[3].call(null,n)),r=!0)},p(a,i){l&&l.p&&(!e||i&512)&&a0(l,o,a,a[9],e?i0(o,a[9],i,null):f0(a[9]),null)},i(a){e||(b(l,a),e=!0)},o(a){y(l,a),e=!1},d(a){a&&k(c),l&&l.d(a),r=!1,t()}}}function He(v){let c,n,e,r,t,o,l;const a=v[10].title,i=l0(a,v,v[9],Uv),f=i||Ye(v);let s=[{type:"button"},{role:"tab"},v[5],{class:v[2]}],d={};for(let h=0;h<s.length;h+=1)d=X(d,s[h]);let u=v[0]&&Ov(v);return{c(){c=E("li"),n=E("button"),f&&f.c(),e=B(),u&&u.c(),n0(n,d),Y(c,"class",r=v0("group",v[4].class)),Y(c,"role","presentation")},m(h,g){w(h,c,g),m(c,n),f&&f.m(n,null),n.autofocus&&n.focus(),m(c,e),u&&u.m(c,null),t=!0,o||(l=[p(n,"click",v[21]),p(n,"blur",v[11]),p(n,"click",v[12]),p(n,"contextmenu",v[13]),p(n,"focus",v[14]),p(n,"keydown",v[15]),p(n,"keypress",v[16]),p(n,"keyup",v[17]),p(n,"mouseenter",v[18]),p(n,"mouseleave",v[19]),p(n,"mouseover",v[20])],o=!0)},p(h,[g]){i?i.p&&(!t||g&512)&&a0(i,a,h,h[9],t?i0(a,h[9],g,Ve):f0(h[9]),Uv):f&&f.p&&(!t||g&2)&&f.p(h,t?g:-1),n0(n,d=x0(s,[{type:"button"},{role:"tab"},g&32&&h[5],(!t||g&4)&&{class:h[2]}])),h[0]?u?(u.p(h,g),g&1&&b(u,1)):(u=Ov(h),u.c(),b(u,1),u.m(c,null)):u&&(M0(),y(u,1,1,()=>{u=null}),L0()),(!t||g&16&&r!==(r=v0("group",h[4].class)))&&Y(c,"class",r)},i(h){t||(b(f,h),b(u),t=!0)},o(h){y(f,h),y(u),t=!1},d(h){h&&k(c),f&&f.d(h),u&&u.d(),o=!1,m0(l)}}}function Ke(v,c,n){const e=["open","title","activeClasses","inactiveClasses","defaultClass"];let r=r0(c,e),{$$slots:t={},$$scope:o}=c,{open:l=!1}=c,{title:a="Tab title"}=c,{activeClasses:i=void 0}=c,{inactiveClasses:f=void 0}=c,{defaultClass:s="inline-block text-sm font-medium text-center disabled:cursor-not-allowed"}=c;const d=Ec("ctx")??{},u=d.selected??A0();function h(R){return u.set(R),{destroy:u.subscribe(F=>{F!==R&&n(0,l=!1)})}}let g;function _(R){C.call(this,v,R)}function D(R){C.call(this,v,R)}function M(R){C.call(this,v,R)}function q(R){C.call(this,v,R)}function N(R){C.call(this,v,R)}function K(R){C.call(this,v,R)}function Z(R){C.call(this,v,R)}function H(R){C.call(this,v,R)}function J(R){C.call(this,v,R)}function x(R){C.call(this,v,R)}const T=()=>n(0,l=!0);return v.$$set=R=>{n(4,c=X(X({},c),$(R))),n(5,r=r0(c,e)),"open"in R&&n(0,l=R.open),"title"in R&&n(1,a=R.title),"activeClasses"in R&&n(6,i=R.activeClasses),"inactiveClasses"in R&&n(7,f=R.inactiveClasses),"defaultClass"in R&&n(8,s=R.defaultClass),"$$scope"in R&&n(9,o=R.$$scope)},v.$$.update=()=>{v.$$.dirty&449&&n(2,g=v0(s,l?i??d.activeClasses:f??d.inactiveClasses,l&&"active"))},c=$(c),[l,a,g,h,c,r,i,f,s,o,t,_,D,M,q,N,K,Z,H,J,x,T]}class mc extends g0{constructor(c){super(),_0(this,c,Ke,He,o0,{open:0,title:1,activeClasses:6,inactiveClasses:7,defaultClass:8})}}const Qe=v=>({}),jv=v=>({}),Ze=v=>({style:v&2}),Wv=v=>({style:v[1]});function Xv(v){let c;const n=v[9].divider,e=l0(n,v,v[8],jv),r=e||Je();return{c(){r&&r.c()},m(t,o){r&&r.m(t,o),c=!0},p(t,o){e&&e.p&&(!c||o&256)&&a0(e,n,t,t[8],c?i0(n,t[8],o,Qe):f0(t[8]),jv)},i(t){c||(b(r,t),c=!0)},o(t){y(r,t),c=!1},d(t){r&&r.d(t)}}}function Je(v){let c;return{c(){c=E("div"),Y(c,"class","h-px bg-gray-200 dark:bg-gray-700")},m(n,e){w(n,c,e)},p:t0,d(n){n&&k(c)}}}function $e(v){let c,n,e,r,t,o,l;const a=v[9].default,i=l0(a,v,v[8],Wv);let f=v[0]&&Xv(v);return{c(){c=E("ul"),i&&i.c(),n=B(),f&&f.c(),e=B(),r=E("div"),Y(c,"class",v[3]),Y(r,"class",v[2]),Y(r,"role","tabpanel"),Y(r,"aria-labelledby","id-tab")},m(s,d){w(s,c,d),i&&i.m(c,null),w(s,n,d),f&&f.m(s,d),w(s,e,d),w(s,r,d),t=!0,o||(l=zc(v[4].call(null,r)),o=!0)},p(s,[d]){i&&i.p&&(!t||d&258)&&a0(i,a,s,s[8],t?i0(a,s[8],d,Ze):f0(s[8]),Wv),(!t||d&8)&&Y(c,"class",s[3]),s[0]?f?(f.p(s,d),d&1&&b(f,1)):(f=Xv(s),f.c(),b(f,1),f.m(e.parentNode,e)):f&&(M0(),y(f,1,1,()=>{f=null}),L0()),(!t||d&4)&&Y(r,"class",s[2])},i(s){t||(b(i,s),b(f),t=!0)},o(s){y(i,s),y(f),t=!1},d(s){s&&(k(c),k(n),k(e),k(r)),i&&i.d(s),f&&f.d(s),o=!1,l()}}}function cr(v,c,n){let e,{$$slots:r={},$$scope:t}=c,{style:o="none"}=c,{defaultClass:l="flex flex-wrap space-x-2"}=c,{contentClass:a="p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4"}=c,{divider:i=!0}=c,{activeClasses:f="p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500"}=c,{inactiveClasses:s="p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"}=c;const d={full:"p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",pill:"py-3 px-4 text-white bg-primary-600 rounded-lg",underline:"p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500",none:""},u={full:"p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",pill:"py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",underline:"p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",none:""},h={activeClasses:d[o]||f,inactiveClasses:u[o]||s,selected:A0()};Qv("ctx",h);function g(_){return{destroy:h.selected.subscribe(M=>{M&&_.replaceChildren(M)})}}return v.$$set=_=>{n(13,c=X(X({},c),$(_))),"style"in _&&n(1,o=_.style),"defaultClass"in _&&n(5,l=_.defaultClass),"contentClass"in _&&n(2,a=_.contentClass),"divider"in _&&n(0,i=_.divider),"activeClasses"in _&&n(6,f=_.activeClasses),"inactiveClasses"in _&&n(7,s=_.inactiveClasses),"$$scope"in _&&n(8,t=_.$$scope)},v.$$.update=()=>{v.$$.dirty&3&&n(0,i=["full","pill"].includes(o)?!1:i),n(3,e=v0(l,o==="underline"&&"-mb-px",c.class))},c=$(c),[i,o,a,e,g,l,f,s,t,r]}class vr extends g0{constructor(c){super(),_0(this,c,cr,$e,o0,{style:1,defaultClass:5,contentClass:2,divider:0,activeClasses:6,inactiveClasses:7})}}function nr(){return"ontouchstart"in window||navigator.maxTouchPoints>0&&navigator.maxTouchPoints!==256}function er(v,c,n){const e=v.slice();return e[22]=c[n].name,e[24]=n,e}function rr(v){let c;return{c(){c=W("Esc")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function tr(v){let c;return{c(){c=W("Backspace")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function or(v){let c;return{c(){c=W("Delete")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function lr(v){let c;return{c(){c=W("Space")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function ir(v){let c;return{c(){c=W("Enter")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function ar(v){let c;return{c(){c=W("Rmb")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function fr(v){let c;return{c(){c=W("Wheel")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function sr(v){let c;return{c(){c=W("Lmb")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function ur(v){let c;return{c(){c=W("Lmb")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function dr(v){let c;return{c(){c=W("Shift")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function hr(v){let c;return{c(){c=W("H")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function _r(v){let c;return{c(){c=W("1")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function gr(v){let c;return{c(){c=W("9")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function mr(v){let c;return{c(){c=W("R")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function pr(v){let c;return{c(){c=W("C")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function br(v){let c;return{c(){c=W("S")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function yr(v){let c,n,e,r,t,o,l,a,i,f,s,d,u,h,g,_,D,M,q,N,K,Z,H,J,x,T,R,I,F,S,u0,A,E0,d0,k0,S0,w0,p0,L,s0,R0,U0,z,T0,rc,O0,Kc,Tc,Qc,Rc,j0,Zc,Ac,Jc,tc,W0,$c,X0,cv,Fc,vv,q0,V0,nv,Y0,ev,H0,rv,Dc,dc;return e=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[rr]},$$scope:{ctx:v}}}),a=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[tr]},$$scope:{ctx:v}}}),u=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[or]},$$scope:{ctx:v}}}),M=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[lr]},$$scope:{ctx:v}}}),H=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[ir]},$$scope:{ctx:v}}}),I=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[ar]},$$scope:{ctx:v}}}),d0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[fr]},$$scope:{ctx:v}}}),L=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[sr]},$$scope:{ctx:v}}}),T0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[ur]},$$scope:{ctx:v}}}),O0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[dr]},$$scope:{ctx:v}}}),j0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[hr]},$$scope:{ctx:v}}}),W0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[_r]},$$scope:{ctx:v}}}),X0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[gr]},$$scope:{ctx:v}}}),V0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[mr]},$$scope:{ctx:v}}}),Y0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[pr]},$$scope:{ctx:v}}}),H0=new h0({props:{class:"px-2 py-1.5",$$slots:{default:[br]},$$scope:{ctx:v}}}),{c(){c=E("div"),n=E("div"),j(e.$$.fragment),r=B(),t=E("div"),t.textContent="Show\\Hide this dialog",o=B(),l=E("div"),j(a.$$.fragment),i=B(),f=E("div"),f.textContent="Repopulate field",s=B(),d=E("div"),j(u.$$.fragment),h=B(),g=E("div"),g.textContent="Clear field",_=B(),D=E("div"),j(M.$$.fragment),q=B(),N=E("div"),N.textContent="Toggle pause",K=B(),Z=E("div"),j(H.$$.fragment),J=B(),x=E("div"),x.textContent="Advance one iteration",T=B(),R=E("div"),j(I.$$.fragment),F=W(" + Mouse Drag"),S=B(),u0=E("div"),u0.textContent="Drag the field around",A=B(),E0=E("div"),j(d0.$$.fragment),k0=B(),S0=E("div"),S0.textContent="Zoom In\\Out",w0=B(),p0=E("div"),j(L.$$.fragment),s0=B(),R0=E("div"),R0.textContent="Draw on the field",U0=B(),z=E("div"),j(T0.$$.fragment),rc=W(" + "),j(O0.$$.fragment),Kc=B(),Tc=E("div"),Tc.textContent="Erase on the field",Qc=B(),Rc=E("div"),j(j0.$$.fragment),Zc=B(),Ac=E("div"),Ac.textContent="Toggle history shader",Jc=B(),tc=E("div"),j(W0.$$.fragment),$c=W("..."),j(X0.$$.fragment),cv=B(),Fc=E("div"),Fc.textContent="Switch preset drawing sizes",vv=B(),q0=E("div"),j(V0.$$.fragment),nv=W(" / "),j(Y0.$$.fragment),ev=W(" / "),j(H0.$$.fragment),rv=B(),Dc=E("div"),Dc.textContent="Switch drawing shape",Y(c,"class","grid grid-cols-2 gap-y-4 items-baseline")},m(P,V){w(P,c,V),m(c,n),G(e,n,null),m(c,r),m(c,t),m(c,o),m(c,l),G(a,l,null),m(c,i),m(c,f),m(c,s),m(c,d),G(u,d,null),m(c,h),m(c,g),m(c,_),m(c,D),G(M,D,null),m(c,q),m(c,N),m(c,K),m(c,Z),G(H,Z,null),m(c,J),m(c,x),m(c,T),m(c,R),G(I,R,null),m(R,F),m(c,S),m(c,u0),m(c,A),m(c,E0),G(d0,E0,null),m(c,k0),m(c,S0),m(c,w0),m(c,p0),G(L,p0,null),m(c,s0),m(c,R0),m(c,U0),m(c,z),G(T0,z,null),m(z,rc),G(O0,z,null),m(c,Kc),m(c,Tc),m(c,Qc),m(c,Rc),G(j0,Rc,null),m(c,Zc),m(c,Ac),m(c,Jc),m(c,tc),G(W0,tc,null),m(tc,$c),G(X0,tc,null),m(c,cv),m(c,Fc),m(c,vv),m(c,q0),G(V0,q0,null),m(q0,nv),G(Y0,q0,null),m(q0,ev),G(H0,q0,null),m(c,rv),m(c,Dc),dc=!0},p(P,V){const tv={};V&33554432&&(tv.$$scope={dirty:V,ctx:P}),e.$set(tv);const ov={};V&33554432&&(ov.$$scope={dirty:V,ctx:P}),a.$set(ov);const lv={};V&33554432&&(lv.$$scope={dirty:V,ctx:P}),u.$set(lv);const iv={};V&33554432&&(iv.$$scope={dirty:V,ctx:P}),M.$set(iv);const av={};V&33554432&&(av.$$scope={dirty:V,ctx:P}),H.$set(av);const fv={};V&33554432&&(fv.$$scope={dirty:V,ctx:P}),I.$set(fv);const sv={};V&33554432&&(sv.$$scope={dirty:V,ctx:P}),d0.$set(sv);const uv={};V&33554432&&(uv.$$scope={dirty:V,ctx:P}),L.$set(uv);const dv={};V&33554432&&(dv.$$scope={dirty:V,ctx:P}),T0.$set(dv);const hv={};V&33554432&&(hv.$$scope={dirty:V,ctx:P}),O0.$set(hv);const _v={};V&33554432&&(_v.$$scope={dirty:V,ctx:P}),j0.$set(_v);const gv={};V&33554432&&(gv.$$scope={dirty:V,ctx:P}),W0.$set(gv);const mv={};V&33554432&&(mv.$$scope={dirty:V,ctx:P}),X0.$set(mv);const pv={};V&33554432&&(pv.$$scope={dirty:V,ctx:P}),V0.$set(pv);const bv={};V&33554432&&(bv.$$scope={dirty:V,ctx:P}),Y0.$set(bv);const yv={};V&33554432&&(yv.$$scope={dirty:V,ctx:P}),H0.$set(yv)},i(P){dc||(b(e.$$.fragment,P),b(a.$$.fragment,P),b(u.$$.fragment,P),b(M.$$.fragment,P),b(H.$$.fragment,P),b(I.$$.fragment,P),b(d0.$$.fragment,P),b(L.$$.fragment,P),b(T0.$$.fragment,P),b(O0.$$.fragment,P),b(j0.$$.fragment,P),b(W0.$$.fragment,P),b(X0.$$.fragment,P),b(V0.$$.fragment,P),b(Y0.$$.fragment,P),b(H0.$$.fragment,P),dc=!0)},o(P){y(e.$$.fragment,P),y(a.$$.fragment,P),y(u.$$.fragment,P),y(M.$$.fragment,P),y(H.$$.fragment,P),y(I.$$.fragment,P),y(d0.$$.fragment,P),y(L.$$.fragment,P),y(T0.$$.fragment,P),y(O0.$$.fragment,P),y(j0.$$.fragment,P),y(W0.$$.fragment,P),y(X0.$$.fragment,P),y(V0.$$.fragment,P),y(Y0.$$.fragment,P),y(H0.$$.fragment,P),dc=!1},d(P){P&&k(c),U(e),U(a),U(u),U(M),U(H),U(I),U(d0),U(L),U(T0),U(O0),U(j0),U(W0),U(X0),U(V0),U(Y0),U(H0)}}}function kr(v){let c;return{c(){c=E("option"),c.textContent=`${v[22]}`,c.__value=v[24],B0(c,c.__value)},m(n,e){w(n,c,e)},p:t0,d(n){n&&k(c)}}}function wr(v){let c,n=Wc($v),e=[];for(let r=0;r<n.length;r+=1)e[r]=kr(er(v,n,r));return{c(){for(let r=0;r<e.length;r+=1)e[r].c();c=G0()},m(r,t){for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(r,t);w(r,c,t)},p:t0,d(r){r&&k(c),Kv(e,r)}}}function Cr(v){let c,n,e,r,t,o,l,a,i=v[5][0]+"",f,s,d,u,h,g,_=v[5][1]+"",D,M,q,N,K,Z,H,J,x,T,R,I,F,S,u0,A;function E0(L){v[13](L)}let d0={id:"rules",placeholder:"",$$slots:{default:[wr]},$$scope:{ctx:v}};v[0]!==void 0&&(d0.value=v[0]),r=new Be({props:d0}),C0.push(()=>N0(r,"value",E0)),d=new kc({props:{name:"size_x",value:v[5][0],min:"16",max:"4096",step:"16",class:"h-full bg-transparent dark:bg-transparent"}}),d.$on("change",v[9]),q=new kc({props:{name:"size_y",value:v[5][1],min:"16",max:"4096",step:"16",class:"h-full bg-transparent dark:bg-transparent"}}),q.$on("change",v[10]);function k0(L){v[14](L)}let S0={name:"density",min:"0",max:"1",step:"0.01",class:"h-full bg-transparent dark:bg-transparent"};v[4]!==void 0&&(S0.value=v[4]),x=new kc({props:S0}),C0.push(()=>N0(x,"value",k0));function w0(L){v[15](L)}let p0={name:"history"};return v[6]!==void 0&&(p0.checked=v[6]),S=new Ee({props:p0}),C0.push(()=>N0(S,"checked",w0)),{c(){c=E("div"),n=E("label"),n.textContent="Select rule",e=B(),j(r.$$.fragment),o=B(),l=E("label"),a=W("Field width: "),f=W(i),s=B(),j(d.$$.fragment),u=B(),h=E("label"),g=W("Field height: "),D=W(_),M=B(),j(q.$$.fragment),N=B(),K=E("label"),Z=W("Density: "),H=W(v[4]),J=B(),j(x.$$.fragment),R=B(),I=E("label"),I.textContent="Enable history shader",F=B(),j(S.$$.fragment),Y(n,"for","rules"),Y(l,"for","size_x"),Y(h,"for","size_y"),Y(K,"for","density"),Y(I,"for","history"),Y(c,"class","grid grid-cols-2 gap-y-4 items-baseline")},m(L,s0){w(L,c,s0),m(c,n),m(c,e),G(r,c,null),m(c,o),m(c,l),m(l,a),m(l,f),m(c,s),G(d,c,null),m(c,u),m(c,h),m(h,g),m(h,D),m(c,M),G(q,c,null),m(c,N),m(c,K),m(K,Z),m(K,H),m(c,J),G(x,c,null),m(c,R),m(c,I),m(c,F),G(S,c,null),A=!0},p(L,s0){const R0={};s0&33554432&&(R0.$$scope={dirty:s0,ctx:L}),!t&&s0&1&&(t=!0,R0.value=L[0],I0(()=>t=!1)),r.$set(R0),(!A||s0&32)&&i!==(i=L[5][0]+"")&&Z0(f,i);const U0={};s0&32&&(U0.value=L[5][0]),d.$set(U0),(!A||s0&32)&&_!==(_=L[5][1]+"")&&Z0(D,_);const z={};s0&32&&(z.value=L[5][1]),q.$set(z),(!A||s0&16)&&Z0(H,L[4]);const T0={};!T&&s0&16&&(T=!0,T0.value=L[4],I0(()=>T=!1)),x.$set(T0);const rc={};!u0&&s0&64&&(u0=!0,rc.checked=L[6],I0(()=>u0=!1)),S.$set(rc)},i(L){A||(b(r.$$.fragment,L),b(d.$$.fragment,L),b(q.$$.fragment,L),b(x.$$.fragment,L),b(S.$$.fragment,L),A=!0)},o(L){y(r.$$.fragment,L),y(d.$$.fragment,L),y(q.$$.fragment,L),y(x.$$.fragment,L),y(S.$$.fragment,L),A=!1},d(L){L&&k(c),U(r),U(d),U(q),U(x),U(S)}}}function xr(v){let c;return{c(){c=W("compile")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function Sr(v){let c,n,e,r,t,o;function l(i){v[16](i)}let a={id:"textarea-id",placeholder:"Your message",rows:"12",wrap:"off",name:"message",class:"flex-grow"};return v[3]!==void 0&&(a.value=v[3]),n=new We({props:a}),C0.push(()=>N0(n,"value",l)),n.$on("keydown",Ir),t=new Hc({props:{$$slots:{default:[xr]},$$scope:{ctx:v}}}),t.$on("click",v[17]),{c(){c=E("div"),j(n.$$.fragment),r=B(),j(t.$$.fragment),Y(c,"class","flex flex-col min-h-full gap-4")},m(i,f){w(i,c,f),G(n,c,null),m(c,r),G(t,c,null),o=!0},p(i,f){const s={};!e&&f&8&&(e=!0,s.value=i[3],I0(()=>e=!1)),n.$set(s);const d={};f&33554432&&(d.$$scope={dirty:f,ctx:i}),t.$set(d)},i(i){o||(b(n.$$.fragment,i),b(t.$$.fragment,i),o=!0)},o(i){y(n.$$.fragment,i),y(t.$$.fragment,i),o=!1},d(i){i&&k(c),U(n),U(t)}}}function zr(v){let c;return{c(){c=W("■")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function Er(v){let c;return{c(){c=W("◆")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function Tr(v){let c;return{c(){c=W("●")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function Rr(v){let c,n,e,r,t,o,l,a,i;function f(_){v[19](_)}let s={value:0,$$slots:{default:[zr]},$$scope:{ctx:v}};v[8]!==void 0&&(s.group=v[8]),c=new Uc({props:s}),C0.push(()=>N0(c,"group",f));function d(_){v[20](_)}let u={value:1,$$slots:{default:[Er]},$$scope:{ctx:v}};v[8]!==void 0&&(u.group=v[8]),r=new Uc({props:u}),C0.push(()=>N0(r,"group",d));function h(_){v[21](_)}let g={value:2,$$slots:{default:[Tr]},$$scope:{ctx:v}};return v[8]!==void 0&&(g.group=v[8]),l=new Uc({props:g}),C0.push(()=>N0(l,"group",h)),{c(){j(c.$$.fragment),e=B(),j(r.$$.fragment),o=B(),j(l.$$.fragment)},m(_,D){G(c,_,D),w(_,e,D),G(r,_,D),w(_,o,D),G(l,_,D),i=!0},p(_,D){const M={};D&33554432&&(M.$$scope={dirty:D,ctx:_}),!n&&D&256&&(n=!0,M.group=_[8],I0(()=>n=!1)),c.$set(M);const q={};D&33554432&&(q.$$scope={dirty:D,ctx:_}),!t&&D&256&&(t=!0,q.group=_[8],I0(()=>t=!1)),r.$set(q);const N={};D&33554432&&(N.$$scope={dirty:D,ctx:_}),!a&&D&256&&(a=!0,N.group=_[8],I0(()=>a=!1)),l.$set(N)},i(_){i||(b(c.$$.fragment,_),b(r.$$.fragment,_),b(l.$$.fragment,_),i=!0)},o(_){y(c.$$.fragment,_),y(r.$$.fragment,_),y(l.$$.fragment,_),i=!1},d(_){_&&(k(e),k(o)),U(c,_),U(r,_),U(l,_)}}}function Ar(v){let c,n,e,r,t,o,l,a,i,f,s,d;function u(g){v[18](g)}let h={name:"radius",min:"1",max:"100",step:"1",class:"h-full bg-transparent dark:bg-transparent"};return v[7]!==void 0&&(h.value=v[7]),o=new kc({props:h}),C0.push(()=>N0(o,"value",u)),s=new ue({props:{name:"mode",$$slots:{default:[Rr]},$$scope:{ctx:v}}}),{c(){c=E("div"),n=E("label"),e=W("Radius: "),r=W(v[7]),t=B(),j(o.$$.fragment),a=B(),i=E("label"),i.textContent="Drawing shape",f=B(),j(s.$$.fragment),Y(n,"for","radius"),Y(i,"for","mode"),Y(c,"class","grid grid-cols-2 gap-y-4 items-baseline")},m(g,_){w(g,c,_),m(c,n),m(n,e),m(n,r),m(c,t),G(o,c,null),m(c,a),m(c,i),m(c,f),G(s,c,null),d=!0},p(g,_){(!d||_&128)&&Z0(r,g[7]);const D={};!l&&_&128&&(l=!0,D.value=g[7],I0(()=>l=!1)),o.$set(D);const M={};_&33554688&&(M.$$scope={dirty:_,ctx:g}),s.$set(M)},i(g){d||(b(o.$$.fragment,g),b(s.$$.fragment,g),d=!0)},o(g){y(o.$$.fragment,g),y(s.$$.fragment,g),d=!1},d(g){g&&k(c),U(o),U(s)}}}function Fr(v){let c,n,e,r,t,o,l,a;return c=new mc({props:{open:!0,title:"Controls",$$slots:{default:[yr]},$$scope:{ctx:v}}}),e=new mc({props:{title:"General",$$slots:{default:[Cr]},$$scope:{ctx:v}}}),t=new mc({props:{title:"Source",$$slots:{default:[Sr]},$$scope:{ctx:v}}}),l=new mc({props:{title:"Drawing",$$slots:{default:[Ar]},$$scope:{ctx:v}}}),{c(){j(c.$$.fragment),n=B(),j(e.$$.fragment),r=B(),j(t.$$.fragment),o=B(),j(l.$$.fragment)},m(i,f){G(c,i,f),w(i,n,f),G(e,i,f),w(i,r,f),G(t,i,f),w(i,o,f),G(l,i,f),a=!0},p(i,f){const s={};f&33554432&&(s.$$scope={dirty:f,ctx:i}),c.$set(s);const d={};f&33554545&&(d.$$scope={dirty:f,ctx:i}),e.$set(d);const u={};f&33554442&&(u.$$scope={dirty:f,ctx:i}),t.$set(u);const h={};f&33554816&&(h.$$scope={dirty:f,ctx:i}),l.$set(h)},i(i){a||(b(c.$$.fragment,i),b(e.$$.fragment,i),b(t.$$.fragment,i),b(l.$$.fragment,i),a=!0)},o(i){y(c.$$.fragment,i),y(e.$$.fragment,i),y(t.$$.fragment,i),y(l.$$.fragment,i),a=!1},d(i){i&&(k(n),k(r),k(o)),U(c,i),U(e,i),U(t,i),U(l,i)}}}function Dr(v){let c;return{c(){c=W("X")},m(n,e){w(n,c,e)},d(n){n&&k(c)}}}function Pr(v){let c,n,e,r,t,o,l,a,i,f;return r=new vr({props:{style:"pill",contentClass:"p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4 grid flex-grow",$$slots:{default:[Fr]},$$scope:{ctx:v}}}),l=new Hc({props:{size:"sm",$$slots:{default:[Dr]},$$scope:{ctx:v}}}),l.$on("click",v[12]),{c(){c=B(),n=E("div"),e=E("div"),j(r.$$.fragment),t=B(),o=E("div"),j(l.$$.fragment),Y(e,"class","mt-2 mb-2 pointer-events-auto p-5 pt-10 bg-slate-900/95 w-fit min-w-[60%] text-white rounded flex flex-col flex-shrink-0"),Y(n,"class","w-full min-h-full absolute items-stretch flex justify-end pointer-events-none"),Ic(n,"visibility",v[2]),Y(o,"class","fixed top-2 right-2"),Ic(o,"visibility",nr()?"visible":"hidden")},m(s,d){w(s,c,d),w(s,n,d),m(n,e),G(r,e,null),w(s,t,d),w(s,o,d),G(l,o,null),a=!0,i||(f=p(document,"keydown",v[11]),i=!0)},p(s,[d]){const u={};d&33554939&&(u.$$scope={dirty:d,ctx:s}),r.$set(u),d&4&&Ic(n,"visibility",s[2]);const h={};d&33554432&&(h.$$scope={dirty:d,ctx:s}),l.$set(h)},i(s){a||(b(r.$$.fragment,s),b(l.$$.fragment,s),a=!0)},o(s){y(r.$$.fragment,s),y(l.$$.fragment,s),a=!1},d(s){s&&(k(c),k(n),k(t),k(o)),U(r),U(l),i=!1,f()}}}const Ir=v=>v.stopPropagation();function Nr(v,c,n){let e,r,t,o,l,a;y0(v,nc,x=>n(4,e=x)),y0(v,bc,x=>n(1,r=x)),y0(v,yc,x=>n(5,t=x)),y0(v,xc,x=>n(6,o=x)),y0(v,fc,x=>n(7,l=x)),y0(v,P0,x=>n(8,a=x));let i="visible";const f=x=>{const T=x.currentTarget;b0(yc,t=[+T.value,t[1]],t)},s=x=>{const T=x.currentTarget;b0(yc,t=[t[0],+T.value],t)};function d(x){x.key=="Escape"&&n(2,i=i==="visible"?"hidden":"visible")}let u=0,h="";const g=x=>{const T=x.currentTarget;n(2,i=i==="visible"?"hidden":"visible"),setTimeout(()=>T.blur(),200)};function _(x){u=x,n(0,u)}function D(x){e=x,nc.set(e)}function M(x){o=x,xc.set(o)}function q(x){h=x,n(3,h),n(1,r),n(0,u)}const N=()=>b0(bc,r=h,r);function K(x){l=x,fc.set(l)}function Z(x){a=x,P0.set(a)}function H(x){a=x,P0.set(a)}function J(x){a=x,P0.set(a)}return v.$$.update=()=>{if(v.$$.dirty&1){const x=$v[u];b0(bc,r=x.src,r),b0(nc,e=x.r,e)}v.$$.dirty&2&&n(3,h=r)},[u,r,i,h,e,t,o,l,a,f,s,d,g,_,D,M,q,N,K,Z,H,J]}class Br extends g0{constructor(c){super(),_0(this,c,Nr,Pr,o0,{})}}function Mr(v){let c,n,e,r,t;return n=new Tn({}),r=new Br({}),{c(){c=E("main"),j(n.$$.fragment),e=B(),j(r.$$.fragment),Y(c,"class","h-screen")},m(o,l){w(o,c,l),G(n,c,null),m(c,e),G(r,c,null),t=!0},p:t0,i(o){t||(b(n.$$.fragment,o),b(r.$$.fragment,o),t=!0)},o(o){y(n.$$.fragment,o),y(r.$$.fragment,o),t=!1},d(o){o&&k(c),U(n),U(r)}}}class Lr extends g0{constructor(c){super(),_0(this,c,null,Mr,o0,{})}}new Lr({target:document.getElementById("app")});
