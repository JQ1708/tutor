/* 長廊：一條 1980 年代的醫院走廊，真實舊照掛在兩側牆上，往盡頭的門走。
   整條走廊在 fragment shader 裡逐像素算：光線打到牆、地、天花板，地板再反射一次。
   HALL() 回傳 {load(L, getImg, sp), render(t, W, H) -> canvas}，影片和網頁共用。沒有 WebGL2 回傳 null。 */
window.HALL = function () {
  var cv = document.createElement('canvas'), gl = cv.getContext('webgl2', { antialias: false, alpha: false, preserveDrawingBuffer: true });
  if (!gl) return null;
  var VS = `#version 300 es
in vec2 q; out vec2 v; void main(){ v=q*.5+.5; gl_Position=vec4(q,0.,1.); }`;
  var FS = `#version 300 es
precision highp float; precision highp sampler2DArray;
in vec2 v; out vec4 o;
uniform vec2 uR; uniform float uF,uS,uK,uSp,uEnd,uEye,uSway,uGlow,uSeed; uniform int uN; uniform float uTW,uW[48]; uniform sampler2DArray uP;
const float FL=-1.,CE=1.12,YC=.27,PH=.98,TS=4.,FR=.04,MAT=.03;
float h21(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float vn(vec2 p){ vec2 i=floor(p),f=fract(p); f=f*f*(3.-2.*f);
 return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y); }
vec3 W2(vec3 a,vec3 b){ return mix(a,b,uK); }
float lit(vec3 p,vec3 n){ float s=0.,zc=floor(p.z/TS+.5)*TS;
 for(int i=-2;i<=2;i++){ vec3 l=vec3(0.,CE-.02,zc+float(i)*TS)-p; float d2=dot(l,l); s+=max(dot(n,l)*inversesqrt(d2),0.)/(1.+d2*.3); }
 return s; }
float hit(vec3 ro,vec3 rd,out int id){ float t=1e9,a; id=0;
 a=((rd.x<0.?-1.:1.)-ro.x)/rd.x; if(a>0.&&a<t){t=a;id=rd.x<0.?1:2;}
 a=((rd.y<0.?FL:CE)-ro.y)/rd.y; if(a>0.&&a<t){t=a;id=rd.y<0.?3:4;}
 if(rd.z>0.){ a=(uEnd-ro.z)/rd.z; if(a<t){t=a;id=5;} }
 return t; }
vec3 wall(vec3 p,float side,float dist){
 vec3 n=vec3(-side,0.,0.);
 vec3 up=W2(vec3(.84,.87,.83),vec3(.80,.72,.56)),lo=W2(vec3(.50,.66,.59),vec3(.56,.47,.31));
 float pl=vn(p.zy*vec2(2.3,4.))*.6+vn(p.zy*23.)*.4;
 vec3 c=(p.y<-.3?lo*(1.04-.1*pl):up*(.93+.12*pl));
 c*=1.-.1*vn(vec2(p.z*.37,side*7.))*smoothstep(.2,-1.,p.y);
 /* 扶手、踢腳板 */
 float rl=smoothstep(-.37,-.365,p.y)*(1.-smoothstep(-.285,-.28,p.y));
 float rs=.75+.45*smoothstep(-.37,-.28,p.y);
 c=mix(c,W2(vec3(.40,.33,.26),vec3(.34,.25,.16))*rs,rl);
 c*=1.-.3*(1.-smoothstep(-.42,-.37,p.y))*smoothstep(-.5,-.37,p.y);
 c=mix(c,W2(vec3(.26,.30,.28),vec3(.24,.19,.13)),1.-smoothstep(FL+.09,FL+.095,p.y));
 float L=.46+.92*lit(p,n);
 int off=side>0.?1:0;
 int i=int(floor((p.z-3.-float(off)*uSp)/(2.*uSp)))*2+off;
 if(i>=0&&i<uN){
  float z0=3.+float(i)*uSp,pw=uW[i];
  vec2 q=vec2(p.z-z0,YC+PH*.5-p.y);
  float dd=max(max(-q.x,q.x-pw),max(-q.y,q.y-PH));
  if(dd<0.){
   float u=q.x/pw; if(side>0.)u=1.-u;
   vec2 st=vec2(.045+.91*u,.045+.91*q.y/PH);
   float lod=max(0.,log2(uTW/pw*dist*dist/uF*.5));
   vec3 ph=textureLod(uP,vec3(st,float(i)),lod).rgb;
   ph=pow(ph,vec3(1.05));
   return ph*(.62+.56*lit(p,n))+.02*vn(p.zy*90.);
  }
  if(dd<MAT) return vec3(.90,.87,.79)*L;
  if(dd<MAT+FR){ float e=(dd-MAT)/FR; return W2(vec3(.20,.16,.13),vec3(.20,.14,.09))*(.75+.5*e)*L; }
  c*=1.-(q.y>PH*.5?.42:.2)*exp(-(dd-MAT-FR)*11.);
 }
 return c*L;
}
vec3 ceilc(vec3 p){
 float zl=floor(p.z/TS+.5)*TS,dz=abs(p.z-zl);
 vec2 g=abs(fract(p.xz*1.6)-.5);
 vec3 c=W2(vec3(.86,.88,.85),vec3(.82,.74,.58))*(.95+.08*vn(p.xz*19.));
 c*=1.-.14*smoothstep(.485,.495,max(g.x,g.y));
 float d2=p.x*p.x+dz*dz;
 c*=.52+.75*exp(-d2*.55);
 float tube=(1.-smoothstep(.13,.15,abs(p.x)))*(1.-smoothstep(.72,.76,dz));
 return mix(c,W2(vec3(1.5,1.55,1.48),vec3(1.5,1.3,.98)),tube);
}
vec3 endc(vec3 p){
 vec3 c=W2(vec3(.84,.87,.83),vec3(.80,.72,.56))*.8;
 float dx=abs(p.x),top=.84;
 float d=max(dx-.6,p.y-top);
 if(d<0.) return W2(vec3(1.55,1.45,1.25),vec3(1.7,1.42,1.0))*(1.+uGlow);
 if(d<.05) return W2(vec3(.3,.3,.28),vec3(.3,.22,.14));
 return c*(1.-.4*exp(-d*7.));
}
vec3 flr(vec3 p){
 vec2 g=p.xz;
 float big=vn(g*7.),sp=vn(g*53.),s2=vn(g*131.);
 vec3 c=W2(vec3(.47,.52,.50),vec3(.44,.36,.26))*(.82+.24*big);
 c+=.13*smoothstep(.72,.8,sp)*vec3(1.,.97,.9)-.1*smoothstep(.74,.8,s2);
 vec2 q=abs(fract(g*vec2(.5,.5)+vec2(.5,0.))-.5);
 c*=1.-.28*smoothstep(.492,.497,max(q.x,q.y));
 return c*(.5+.85*lit(p,vec3(0.,1.,0.)));
}
vec3 surf(vec3 p,int id,float d){
 if(id==1) return wall(p,-1.,d);
 if(id==2) return wall(p,1.,d);
 if(id==4) return ceilc(p);
 if(id==5) return endc(p);
 return flr(p);
}
float fogf(float d){ return 1.-exp(-pow(d/17.,1.8)); }
void main(){
 vec2 px=(v-.5)*uR/uF;
 vec3 ro=vec3(uSway,uEye,uS),rd=normalize(vec3(px,1.));
 vec3 fc=W2(vec3(.80,.86,.83),vec3(.90,.78,.57));
 int id; float t=hit(ro,rd,id); vec3 p=ro+rd*t,c=surf(p,id,t);
 if(id==3){
  vec3 nn=normalize(vec3((vn(p.xz*6.)-.5)*.025,1.,(vn(p.zx*6.+9.)-.5)*.03));
  vec3 r2=reflect(rd,nn); int i2; float t2=hit(p+nn*.002,r2,i2);
  vec3 c2=surf(p+r2*t2,i2,t+t2);
  c2=mix(c2,fc,fogf(t+t2));
  float fr=.09+.62*pow(1.-max(r2.y,0.),5.);
  c=mix(c,c2,fr*exp(-t2*.16));
 }
 c=mix(c,fc,fogf(t));
 float r=length(px);
 c+=W2(vec3(1.,.97,.9),vec3(1.,.82,.52))*exp(-r*r*18.)*(.12+.8*uGlow);
 c+=W2(vec3(1.,.97,.9),vec3(1.,.85,.6))*exp(-r*r*2.)*uGlow*.85;
 float l=dot(c,vec3(.3,.59,.11));
 c=mix(c,vec3(l)*vec3(1.1,.96,.74),uK*.62);
 c=c/(1.+c*.22)*1.12;
 c*=1.-.42*smoothstep(.45,1.5,length((v-.5)*vec2(1.9,1.5)));
 c+=(h21(v*uR*.013+uSeed)-.5)*.022;
 o=vec4(c,1.);
}`;
  function sh(t, s) { var x = gl.createShader(t); gl.shaderSource(x, s); gl.compileShader(x); if (!gl.getShaderParameter(x, gl.COMPILE_STATUS)) console.log('HALL', gl.getShaderInfoLog(x)); return x; }
  var pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
  gl.bindAttribLocation(pr, 0, 'q'); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { console.log('HALL', gl.getProgramInfoLog(pr)); return null; }
  gl.useProgram(pr);
  var b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  function U(n) { return gl.getUniformLocation(pr, n); }
  var TW = 640, TH = 480, L = [], SC = 0, get = null, sp = 1.3, done = [], tex = gl.createTexture(), LEN = 0, tmp = document.createElement('canvas'), tc;
  tmp.width = TW; tmp.height = TH; tc = tmp.getContext('2d');
  function up(i) {
    var m = get(L[i]);
    if (done[i] || !m || !m.complete || !m.naturalWidth) return false;
    done[i] = true;
    tc.fillStyle = '#d9cfb8'; tc.fillRect(0, 0, TW, TH); tc.drawImage(m, 0, 0, TW, TH);
    gl.bindTexture(gl.TEXTURE_2D_ARRAY, tex);
    gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, TW, TH, 1, gl.RGBA, gl.UNSIGNED_BYTE, tmp);
    return true;
  }
  return {
    load: function (rows, getImg, spacing, tw) {
      L = rows.slice(0, 48); get = getImg; sp = spacing || 1.3; done = [];
      TW = tw || 640; TH = TW * 3 / 4; tmp.width = TW; tmp.height = TH; gl.uniform1f(U('uTW'), TW);
      gl.bindTexture(gl.TEXTURE_2D_ARRAY, tex);
      gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 7, gl.RGBA8, TW, TH, L.length);
      gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
      gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      var w = L.map(function (r) { return Math.min(.98 * r[2] / 300, 2 * sp - .22); });
      while (w.length < 48) w.push(1);
      gl.uniform1fv(U('uW'), new Float32Array(w)); gl.uniform1i(U('uN'), L.length); gl.uniform1f(U('uSp'), sp);
      LEN = L.length * sp + 3; SC = LEN + 4.2;
      gl.uniform1f(U('uEnd'), LEN + 7);
    },
    /* 第 t 刻鏡頭走到哪一年，由牆上照片的年份內插 */
    year: function (t) {
      var u = t * t * (3 - 2 * t), i = (SC * (.74 * t + .26 * u) - 3 + 2.6) / sp, a = Math.max(0, Math.min(L.length - 1, Math.floor(i))), b = Math.min(L.length - 1, a + 1);
      return Math.round(L[a][0] + (L[b][0] - L[a][0]) * Math.max(0, Math.min(1, i - a)));
    },
    render: function (t, W, H) {
      var any = false;
      for (var i = 0; i < L.length; i++) if (up(i)) any = true;
      if (any) { gl.bindTexture(gl.TEXTURE_2D_ARRAY, tex); gl.generateMipmap(gl.TEXTURE_2D_ARRAY); }
      if (cv.width !== W || cv.height !== H) { cv.width = W; cv.height = H; gl.viewport(0, 0, W, H); }
      function ramp(a, b) { return Math.min(1, Math.max(0, (t - a) / (b - a))); }
      var u = t * t * (3 - 2 * t), s = SC * (.74 * t + .26 * u);
      gl.uniform2f(U('uR'), W, H); gl.uniform1f(U('uF'), H > W ? W * 1.3 : H * 1.06);
      gl.uniform1f(U('uS'), s); gl.uniform1f(U('uK'), ramp(.28, .92));
      gl.uniform1f(U('uEye'), .03 + Math.sin(s * 2.1) * .007); gl.uniform1f(U('uSway'), Math.sin(s * 1.05) * .012);
      gl.uniform1f(U('uGlow'), Math.pow(ramp(.72, 1), 2)); gl.uniform1f(U('uSeed'), (t * 977) % 7);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      return cv;
    }
  };
};
