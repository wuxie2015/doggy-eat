(()=>{function Jt(r){return globalThis.__PUPPY_ASSETS?.[r]??"./assets/"+r}var ud=1,dd=2;var Fc=0,Np=1,Bi=2;var er=100,Dp=101,Op=102;var Fp=200,Bp=201,zp=202,Hp=203,fl=204,ml=205,kp=206,Vp=207,Gp=208,Wp=209,Xp=210,jp=211,qp=212,Yp=213,Zp=214,Kp=0,Jp=1,$p=2,Qp=3,ef=4,tf=5,nf=6,rf=7;var pd=4;var Gh="attached",sf="detached",ho=300,Dr=301,Or=302,Ms=303,gl=304,uo=306,Sn=1e3,En=1001,bs=1002,ln=1003,Bc=1004;var Ir=1005;var Mt=1006,gs=1007;var Xn=1008,fd=1008,Ii=1009,md=1010,gd=1011,Ss=1012,zc=1013,tr=1014,en=1015,nn=1016,Hc=1017,kc=1018,Fr=1020,vd=35902,_d=1021,xd=1022,on=1023,yd=1024,Md=1025,Es=1026,Br=1027,Vc=1028,Gc=1029,bd=1030,Wc=1031;var Xc=1033,Pa=33776,La=33777,Ua=33778,Na=33779,vl=35840,_l=35841,xl=35842,yl=35843,Ml=36196,bl=37492,Sl=37496,El=37808,wl=37809,Tl=37810,Al=37811,Rl=37812,Cl=37813,Il=37814,Pl=37815,Ll=37816,Ul=37817,Nl=37818,Dl=37819,Ol=37820,Fl=37821,Da=36492,Bl=36494,zl=36495,Sd=36283,Hl=36284,kl=36285,Vl=36286;var zr=2300,Hr=2301,Po=2302,Wh=2400,Xh=2401,jh=2402;var Ed=0,po=1,Vs=2;var wi="",at="srgb",Tt="srgb-linear",fo="linear",tt="srgb";var gr=7680;var af=512,of=513,lf=514,cf=515,hf=516,uf=517,df=518,pf=519,Gl=35044;var qh="300 es",kr=2e3,Oa=2001,Pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,Lr=Math.PI/180,Vr=180/Math.PI;function Mn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(Vt[255&r]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]+"-"+Vt[255&e]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[63&t|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[255&n]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Et(r,e,t){return Math.max(e,Math.min(t,r))}function Wl(r,e){return(r%e+e)%e}function vs(r,e,t){return(1-t)*r+t*e}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qe(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var Ge={DEG2RAD:Lr,RAD2DEG:Vr,generateUUID:Mn,clamp:Et,euclideanModulo:Wl,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:vs,damp:function(r,e,t,n){return vs(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Wl(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Yh=r);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Lr},radToDeg:function(r){return r*Vr},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*f,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*f,o*c);break;case"ZYZ":r.set(l*f,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:Qe,denormalize:Bn},fe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class r{constructor(e,t,n,i,s,a,o,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=i[0],m=i[3],_=i[6],v=i[1],x=i[4],y=i[7],b=i[2],S=i[5],C=i[8];return s[0]=a*g+o*v+l*b,s[3]=a*m+o*x+l*S,s[6]=a*_+o*y+l*C,s[1]=c*g+h*v+u*b,s[4]=c*m+h*x+u*S,s[7]=c*_+h*y+u*C,s[2]=d*g+p*v+f*b,s[5]=d*m+p*x+f*S,s[8]=d*_+p*y+f*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*s*h+n*o*l+i*s*c-i*a*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,p=c*s-a*l,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new ze;function wd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ff(){let r=ws("canvas");return r.style.display="block",r}var Zh={};function ms(r){r in Zh||(Zh[r]=!0,console.warn(r))}var qe={enabled:!0,workingColorSpace:Tt,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===tt&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?fo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ri(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ur(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Kh=[.64,.33,.3,.6,.15,.06],Jh=[.2126,.7152,.0722],$h=[.3127,.329],Qh=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),vr;qe.define({[Tt]:{primaries:Kh,whitePoint:$h,transfer:fo,toXYZ:Qh,fromXYZ:eu,luminanceCoefficients:Jh,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:Kh,whitePoint:$h,transfer:tt,toXYZ:Qh,fromXYZ:eu,luminanceCoefficients:Jh,outputColorSpaceConfig:{drawingBufferColorSpace:at}}});var Xl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=ws("canvas")),vr.width=e.width,vr.height=e.height;let n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*ri(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ri(t[n]/255)):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mf=0,Fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Uo(i[a].image)):s.push(Uo(i[a]))}else s=Uo(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Uo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Xl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gf=0,Dt=class r extends Pi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,l=1009,c=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Mn(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Dt.DEFAULT_IMAGE=null,Dt.DEFAULT_MAPPING=ho,Dt.DEFAULT_ANISOTROPY=1;var Ke=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(p+1)/2,b=(_+1)/2,S=(h+d)/4,C=(u+g)/4,R=(f+m)/4;return x>y&&x>b?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=C/n):y>b?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=R/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=R/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jl=class extends Pi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ke(0,0,e,t),this.scissorTest=!1,this.viewport=new Ke(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends jl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends Dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=l,e[t+1]=c,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||l!==d||c!==p||h!==f){let m=1-o,_=l*d+c*p+h*f+u*g,v=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){let b=Math.sqrt(x),S=Math.atan2(b,_*v);m=Math.sin(m*S)/b,o=Math.sin(o*S)/b}let y=o*v;if(l=l*m+d*y,c=c*m+p*y,h=h*m+f*y,u=u*m+g*y,m===1-o){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+l*p-c*d,e[t+1]=l*f+h*d+c*u-o*p,e[t+2]=c*f+h*p+o*d-l*u,e[t+3]=h*f-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(s/2),d=l(n/2),p=l(i/2),f=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-s*l,this._y=i*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-s*u,this.z=i+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},No=new M,tu=new xt,Wt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Qs.subVectors(this.max,ss),_r.subVectors(e.a,ss),xr.subVectors(e.b,ss),yr.subVectors(e.c,ss),xi.subVectors(xr,_r),yi.subVectors(yr,xr),qi.subVectors(_r,yr);let t=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-qi.z,qi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,qi.z,0,-qi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-qi.y,qi.x,0];return!!Do(t,_r,xr,yr,Qs)&&(t=[1,0,0,0,1,0,0,0,1],!!Do(t,_r,xr,yr,Qs)&&(ea.crossVectors(xi,yi),t=[ea.x,ea.y,ea.z],Do(t,_r,xr,yr,Qs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Dn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new M,new M,new M,new M,new M,new M,new M,new M],Dn=new M,$s=new Wt,_r=new M,xr=new M,yr=new M,xi=new M,yi=new M,qi=new M,ss=new M,Qs=new M,ea=new M,Yi=new M;function Do(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Yi.fromArray(r,s);let o=i.x*Math.abs(Yi.x)+i.y*Math.abs(Yi.y)+i.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),h=n.dot(Yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vf=new Wt,as=new M,Oo=new M,cn=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Oo)),this.expandByPoint(as.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new M,Fo=new M,ta=new M,Mi=new M,Bo=new M,na=new M,zo=new M,nr=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Fo.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(Fo);let s=.5*e.distanceTo(t),a=-this.direction.dot(ta),o=Mi.dot(this.direction),l=-Mi.dot(ta),c=Mi.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*l-o,d=a*o-l,f=s*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Fo).addScaledVector(ta,d),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i?null:((o>n||n!=n)&&(n=o),(l<i||i!=i)&&(i=l),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,s){Bo.subVectors(t,e),na.subVectors(n,e),zo.crossVectors(Bo,na);let a,o=this.direction.dot(zo);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Mi.subVectors(this.origin,e);let l=a*this.direction.dot(na.crossVectors(Mi,na));if(l<0)return null;let c=a*this.direction.dot(Bo.cross(Mi));if(c<0||l+c>o)return null;let h=-a*Mi.dot(zo);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class r{constructor(e,t,n,i,s,a,o,l,c,h,u,d,p,f,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,g,m)}set(e,t,n,i,s,a,o,l,c,h,u,d,p,f,g,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+f*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=f+p*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,f=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=l*h,t[4]=f*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*l,p=a*c,f=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_f,e,xf)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),bi.crossVectors(n,fn),bi.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),bi.crossVectors(n,fn)),bi.normalize(),ia.crossVectors(fn,bi),i[0]=bi.x,i[4]=ia.x,i[8]=fn.x,i[1]=bi.y,i[5]=ia.y,i[9]=fn.y,i[2]=bi.z,i[6]=ia.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],_=n[14],v=n[3],x=n[7],y=n[11],b=n[15],S=i[0],C=i[4],R=i[8],I=i[12],N=i[1],D=i[5],H=i[9],k=i[13],L=i[2],W=i[6],X=i[10],se=i[14],te=i[3],ce=i[7],he=i[11],Z=i[15];return s[0]=a*S+o*N+l*L+c*te,s[4]=a*C+o*D+l*W+c*ce,s[8]=a*R+o*H+l*X+c*he,s[12]=a*I+o*k+l*se+c*Z,s[1]=h*S+u*N+d*L+p*te,s[5]=h*C+u*D+d*W+p*ce,s[9]=h*R+u*H+d*X+p*he,s[13]=h*I+u*k+d*se+p*Z,s[2]=f*S+g*N+m*L+_*te,s[6]=f*C+g*D+m*W+_*ce,s[10]=f*R+g*H+m*X+_*he,s[14]=f*I+g*k+m*se+_*Z,s[3]=v*S+x*N+y*L+b*te,s[7]=v*C+x*D+y*W+b*ce,s[11]=v*R+x*H+y*X+b*he,s[15]=v*I+x*k+y*se+b*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*l*u-i*c*u-s*o*d+n*c*d+i*o*p-n*l*p)+e[7]*(+t*l*p-t*c*d+s*a*d-i*a*p+i*c*h-s*l*h)+e[11]*(+t*c*u-t*o*p-s*a*u+n*a*p+s*o*h-n*c*h)+e[15]*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],_=e[15],v=u*m*c-g*d*c+g*l*p-o*m*p-u*l*_+o*d*_,x=f*d*c-h*m*c-f*l*p+a*m*p+h*l*_-a*d*_,y=h*g*c-f*u*c+f*o*p-a*g*p-h*o*_+a*u*_,b=f*u*l-h*g*l-f*o*d+a*g*d+h*o*m-a*u*m,S=t*v+n*x+i*y+s*b;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/S;return e[0]=v*C,e[1]=(g*d*s-u*m*s-g*i*p+n*m*p+u*i*_-n*d*_)*C,e[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*_+n*l*_)*C,e[3]=(u*l*s-o*d*s-u*i*c+n*d*c+o*i*p-n*l*p)*C,e[4]=x*C,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*_+t*d*_)*C,e[6]=(f*l*s-a*m*s-f*i*c+t*m*c+a*i*_-t*l*_)*C,e[7]=(a*d*s-h*l*s+h*i*c-t*d*c-a*i*p+t*l*p)*C,e[8]=y*C,e[9]=(f*u*s-h*g*s-f*n*p+t*g*p+h*n*_-t*u*_)*C,e[10]=(a*g*s-f*o*s+f*n*c-t*g*c-a*n*_+t*o*_)*C,e[11]=(h*o*s-a*u*s-h*n*c+t*u*c+a*n*p-t*o*p)*C,e[12]=b*C,e[13]=(h*g*i-f*u*i+f*n*d-t*g*d-h*n*m+t*u*m)*C,e[14]=(f*o*i-a*g*i-f*n*l+t*g*l+a*n*m-t*o*m)*C,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*C,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,p=s*h,f=s*u,g=a*h,m=a*u,_=o*u,v=l*c,x=l*h,y=l*u,b=n.x,S=n.y,C=n.z;return i[0]=(1-(g+_))*b,i[1]=(p+y)*b,i[2]=(f-x)*b,i[3]=0,i[4]=(p-y)*S,i[5]=(1-(d+_))*S,i[6]=(m+v)*S,i[7]=0,i[8]=(f+x)*C,i[9]=(m-v)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Mr.set(i[0],i[1],i[2]).length(),a=Mr.set(i[4],i[5],i[6]).length(),o=Mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],On.copy(this);let l=1/s,c=1/a,h=1/o;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,t.setFromRotationMatrix(On),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let l=this.elements,c=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===kr)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Oa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*c,p=(n+i)*h,f,g;if(o===kr)f=(a+s)*u,g=-2*u;else{if(o!==Oa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mr=new M,On=new Ie,_f=new M(0,0,0),xf=new M(1,1,1),bi=new M,ia=new M,fn=new M,nu=new Ie,iu=new xt,Xt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xt.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},yf=0,ru=new M,br=new xt,$n=new Ie,ra=new M,os=new M,Mf=new M,bf=new xt,su=new M(1,0,0),au=new M(0,1,0),ou=new M(0,0,1),lu={type:"added"},Sf={type:"removed"},Sr={type:"childadded",child:null},Ho={type:"childremoved",child:null},mt=class r extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new M,t=new Xt,n=new xt,i=new M(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ze}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(os,ra,this.up):$n.lookAt(ra,os,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),br.setFromRotationMatrix($n),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mt.DEFAULT_UP=new M(0,1,0),mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new M,Qn=new M,ko=new M,ei=new M,Er=new M,wr=new M,cu=new M,Vo=new M,Go=new M,Wo=new M,Xo=new Ke,jo=new Ke,qo=new Ke,Ti=class r{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Fn.subVectors(i,t),Qn.subVectors(n,t),ko.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(Qn),l=Fn.dot(ko),c=Qn.dot(Qn),h=Qn.dot(ko),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,f=(a*h-o*l)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ei)!==null&&ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Xo.setScalar(0),jo.setScalar(0),qo.setScalar(0),Xo.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Xo,s.x),a.addScaledVector(jo,s.y),a.addScaledVector(qo,s.z),a}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),Qn.subVectors(e,t),Fn.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),.5*Fn.cross(Qn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Er.subVectors(i,n),wr.subVectors(s,n),Vo.subVectors(e,n);let l=Er.dot(Vo),c=wr.dot(Vo);if(l<=0&&c<=0)return t.copy(n);Go.subVectors(e,i);let h=Er.dot(Go),u=wr.dot(Go);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Er,a);Wo.subVectors(e,s);let p=Er.dot(Wo),f=wr.dot(Wo);if(f>=0&&p<=f)return t.copy(s);let g=p*c-l*f;if(g<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(wr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return cu.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(cu,o);let _=1/(m+g+d);return a=g*_,o=d*_,t.copy(n).addScaledVector(Er,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Yo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=Wl(e,1),t=Et(t,0,1),n=Et(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yo(a,s,e+1/3),this.g=Yo(a,s,e),this.b=Yo(a,s,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=at){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return qe.fromWorkingColorSpace(Gt.copy(this),e),65536*Math.round(Et(255*Gt.r,0,255))+256*Math.round(Et(255*Gt.g,0,255))+Math.round(Et(255*Gt.b,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Gt.copy(this),t);let n=Gt.r,i=Gt.g,s=Gt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=at){qe.fromWorkingColorSpace(Gt.copy(this),e);let t=Gt.r,n=Gt.g,i=Gt.b;return e!==at?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(sa);let n=vs(Si.h,sa.h,t),i=vs(Si.s,sa.s,t),s=vs(Si.l,sa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Ee;Ee.NAMES=Td;var Ef=0,hn=class extends Pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Mn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=ml,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==ml&&(n.blendDst=this.blendDst),this.blendEquation!==er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},It=class extends hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ii=wf();function wf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[256|l]=32768,i[l]=24,i[256|l]=24):c<-14?(n[l]=1024>>-c-14,n[256|l]=1024>>-c-14|32768,i[l]=-c-1,i[256|l]=-c-1):c<=15?(n[l]=c+15<<10,n[256|l]=c+15<<10|32768,i[l]=13,i[256|l]=13):c<128?(n[l]=31744,n[256|l]=64512,i[l]=24,i[256|l]=24):(n[l]=31744,n[256|l]=64512,i[l]=13,i[256|l]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(8388608&c);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Tf(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Et(r,-65504,65504),ii.floatView[0]=r;let e=ii.uint32View[0],t=e>>23&511;return ii.baseTable[t]+((8388607&e)>>ii.shiftTable[t])}function Af(r){let e=r>>10;return ii.uint32View[0]=ii.mantissaTable[ii.offsetTable[e]+(1023&r)]+ii.exponentTable[e],ii.floatView[0]}var di={toHalfFloat:Tf,fromHalfFloat:Af},St=new M,aa=new fe,_t=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gl&&(e.usage=this.usage),e}};var Li=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var za=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var be=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rf=0,yn=new Ie,Zo=new mt,Tr=new M,mn=new Wt,ls=new Wt,Nt=new M,Je=class r extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?za:Li)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Zo.lookAt(e),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(mn.min,ls.min),mn.expandByPoint(Nt),Nt.addVectors(mn.max,ls.max),mn.expandByPoint(Nt)):(mn.expandByPoint(ls.min),mn.expandByPoint(ls.max))}mn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Nt.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),Nt.add(Tr)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _t(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new M,l[R]=new M;let c=new M,h=new M,u=new M,d=new fe,p=new fe,f=new fe,g=new M,m=new M;function _(R,I,N){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,N),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,N),h.sub(c),u.sub(c),p.sub(d),f.sub(d);let D=1/(p.x*f.y-f.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(D),o[R].add(g),o[I].add(g),o[N].add(g),l[R].add(m),l[I].add(m),l[N].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,I=v.length;R<I;++R){let N=v[R],D=N.start;for(let H=D,k=D+N.count;H<k;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let x=new M,y=new M,b=new M,S=new M;function C(R){b.fromBufferAttribute(i,R),S.copy(b);let I=o[R];x.copy(I),x.sub(b.multiplyScalar(b.dot(I))).normalize(),y.crossVectors(S,I);let N=y.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,N)}for(let R=0,I=v.length;R<I;++R){let N=v[R],D=N.start;for(let H=D,k=D+N.count;H<k;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _t(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new M,s=new M,a=new M,o=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,f=0;for(let g=0,m=l.length;g<m;g++){p=o.isInterleavedBufferAttribute?l[g]*o.data.stride+o.offset:l[g]*h;for(let _=0;_<h;_++)d[f++]=c[p++]}return new _t(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let l=e(i[o],n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){let d=e(c[h],n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new Ie,Zi=new nr,oa=new cn,uu=new M,la=new M,ca=new M,ha=new M,Ko=new M,ua=new M,du=new M,da=new M,Ze=class extends mt{constructor(e=new Je,t=new It){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ua.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],u=s[l];h!==0&&(Ko.fromBufferAttribute(u,e),a?ua.addScaledVector(Ko,h):ua.addScaledVector(Ko.sub(t),h))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),Zi.copy(e.ray).recast(e.near),oa.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(oa,uu)===null||Zi.origin.distanceToSquared(uu)>(e.far-e.near)**2))return;hu.copy(s).invert(),Zi.copy(e.ray).applyMatrix4(hu),n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Zi)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],_=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)i=pa(this,_,e,n,c,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)i=pa(this,a,e,n,c,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(l!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],_=a[m.materialIndex];for(let v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));v<x;v+=3)i=pa(this,_,e,n,c,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);f<g;f+=3)i=pa(this,a,e,n,c,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function pa(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,la),r.getVertexPosition(l,ca),r.getVertexPosition(c,ha);let h=(function(u,d,p,f,g,m,_,v){let x;if(x=d.side===1?f.intersectTriangle(_,m,g,!0,v):f.intersectTriangle(g,m,_,d.side===0,v),x===null)return null;da.copy(v),da.applyMatrix4(u.matrixWorld);let y=p.ray.origin.distanceTo(da);return y<p.near||y>p.far?null:{distance:y,point:da.clone(),object:u}})(r,e,t,n,la,ca,ha,du);if(h){let u=new M;Ti.getBarycoord(du,la,ca,ha,u),i&&(h.uv=Ti.getInterpolatedAttribute(i,o,l,c,u,new fe)),s&&(h.uv1=Ti.getInterpolatedAttribute(s,o,l,c,u,new fe)),a&&(h.normal=Ti.getInterpolatedAttribute(a,o,l,c,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new M,materialIndex:0};Ti.getNormal(la,ca,ha,d.normal),h.face=d,h.barycoord=u}return h}var Gr=class r extends Je{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;function f(g,m,_,v,x,y,b,S,C,R,I){let N=y/C,D=b/R,H=y/2,k=b/2,L=S/2,W=C+1,X=R+1,se=0,te=0,ce=new M;for(let he=0;he<X;he++){let Z=he*D-k;for(let le=0;le<W;le++){let ue=le*N-H;ce[g]=ue*v,ce[m]=Z*x,ce[_]=L,c.push(ce.x,ce.y,ce.z),ce[g]=0,ce[m]=0,ce[_]=S>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(le/C),u.push(1-he/R),se+=1}}for(let he=0;he<R;he++)for(let Z=0;Z<C;Z++){let le=d+Z+W*he,ue=d+Z+W*(he+1),de=d+(Z+1)+W*(he+1),me=d+(Z+1)+W*he;l.push(le,ue,me),l.push(ue,de,me),te+=6}o.addGroup(p,te,I),p+=te,d+=se}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Wr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Qt(r){let e={};for(let t=0;t<r.length;t++){let n=Wr(r[t]);for(let i in n)e[i]=n[i]}return e}function Ad(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var Cf={clone:Wr,merge:Qt},qn=class extends hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},As=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=kr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ei=new M,pu=new fe,fu=new fe,Ct=class extends As{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Vr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Lr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Vr*Math.atan(Math.tan(.5*Lr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,t){return this.getViewBounds(e,pu,fu),t.subVectors(fu,pu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Lr*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ar=-90,Yl=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ct(Ar,1,e,t);i.layers=this.layers,this.add(i);let s=new Ct(Ar,1,e,t);s.layers=this.layers,this.add(s);let a=new Ct(Ar,1,e,t);a.layers=this.layers,this.add(a);let o=new Ct(Ar,1,e,t);o.layers=this.layers,this.add(o);let l=new Ct(Ar,1,e,t);l.layers=this.layers,this.add(l);let c=new Ct(Ar,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===kr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Oa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ha=class extends Dt{constructor(e,t,n,i,s,a,o,l,c,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Dr,n,i,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zl=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ha(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gr(5,5,5),s=new qn({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Ze(i,s),o=t.minFilter;return t.minFilter===Xn&&(t.minFilter=Mt),new Yl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},Jo=new M,If=new M,Pf=new ze,ni=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Jo.subVectors(n,t).cross(If.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Jo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Pf.getNormalMatrix(e),i=this.coplanarPoint(Jo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new cn,fa=new M,Xr=class{constructor(e=new ni,t=new ni,n=new ni,i=new ni,s=new ni,a=new ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],g=i[10],m=i[11],_=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-p,y-_).normalize(),n[1].setComponents(l+s,d+c,m+p,y+_).normalize(),n[2].setComponents(l+a,d+h,m+f,y+v).normalize(),n[3].setComponents(l-a,d-h,m-f,y-v).normalize(),n[4].setComponents(l-o,d-u,m-g,y-x).normalize(),t===kr)n[5].setComponents(l+o,d+u,m+g,y+x).normalize();else{if(t!==Oa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,x).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Lf(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,l=s.usage,c=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,l),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:c}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let l=a.array,c=a.updateRanges;if(r.bindBuffer(o,s),c.length===0)r.bufferSubData(o,0,l);else{c.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<c.length;u++){let d=c[h],p=c[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,c[h]=p)}c.length=h+1;for(let u=0,d=c.length;u<d;u++){let p=c[u];r.bufferSubData(o,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var Yn=class r extends Je{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],f=[],g=[],m=[];for(let _=0;_<h;_++){let v=_*d-a;for(let x=0;x<c;x++){let y=x*u-s;f.push(y,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<o;v++){let x=v+c*_,y=v+c*(_+1),b=v+1+c*(_+1),S=v+1+c*_;p.push(x,y,S),p.push(y,b,S)}this.setIndex(p),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},He={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ve={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Wn={basic:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ee(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Qt([ve.points,ve.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Qt([ve.common,ve.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Qt([ve.sprite,ve.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Qt([ve.common,ve.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Qt([ve.lights,ve.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Wn.physical={uniforms:Qt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};var ma={r:0,b:0,g:0},Ji=new Xt,Uf=new Ie;function Nf(r,e,t,n,i,s,a){let o=new Ee(0),l,c,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_}function g(m,_){m.getRGB(ma,Ad(r)),n.buffers.color.setClear(ma.r,ma.g,ma.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),h=_,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:function(m){let _=!1,v=f(m);v===null?g(o,h):v&&v.isColor&&(g(v,1),_=!0);let x=r.xr.getEnvironmentBlendMode();x==="additive"?n.buffers.color.setClear(0,0,0,1,a):x==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,_){let v=f(_);v&&(v.isCubeTexture||v.mapping===uo)?(c===void 0&&(c=new Ze(new Gr(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Wr(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,y,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ji.copy(_.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler(Ji)),c.material.toneMapped=qe.getTransfer(v.colorSpace)!==tt,u===v&&d===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ze(new Yn(2,2),new qn({name:"BackgroundMaterial",uniforms:Wr(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=qe.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}}}function Df(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=c(null),s=i,a=!1;function o(_){return r.bindVertexArray(_)}function l(_){return r.deleteVertexArray(_)}function c(_){let v=[],x=[],y=[];for(let b=0;b<t;b++)v[b]=0,x[b]=0,y[b]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:x,attributeDivisors:y,object:_,attributes:{},index:null}}function h(){let _=s.newAttributes;for(let v=0,x=_.length;v<x;v++)_[v]=0}function u(_){d(_,0)}function d(_,v){let x=s.newAttributes,y=s.enabledAttributes,b=s.attributeDivisors;x[_]=1,y[_]===0&&(r.enableVertexAttribArray(_),y[_]=1),b[_]!==v&&(r.vertexAttribDivisor(_,v),b[_]=v)}function p(){let _=s.newAttributes,v=s.enabledAttributes;for(let x=0,y=v.length;x<y;x++)v[x]!==_[x]&&(r.disableVertexAttribArray(x),v[x]=0)}function f(_,v,x,y,b,S,C){C===!0?r.vertexAttribIPointer(_,v,x,b,S):r.vertexAttribPointer(_,v,x,y,b,S)}function g(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(_,v,x,y,b){let S=!1,C=(function(R,I,N){let D=N.wireframe===!0,H=n[R.id];H===void 0&&(H={},n[R.id]=H);let k=H[I.id];k===void 0&&(k={},H[I.id]=k);let L=k[D];return L===void 0&&(L=c(r.createVertexArray()),k[D]=L),L})(y,x,v);s!==C&&(s=C,o(s.object)),S=(function(R,I,N,D){let H=s.attributes,k=I.attributes,L=0,W=N.getAttributes();for(let X in W)if(W[X].location>=0){let se=H[X],te=k[X];if(te===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(te=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(te=R.instanceColor)),se===void 0||se.attribute!==te||te&&se.data!==te.data)return!0;L++}return s.attributesNum!==L||s.index!==D})(_,y,x,b),S&&(function(R,I,N,D){let H={},k=I.attributes,L=0,W=N.getAttributes();for(let X in W)if(W[X].location>=0){let se=k[X];se===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));let te={};te.attribute=se,se&&se.data&&(te.data=se.data),H[X]=te,L++}s.attributes=H,s.attributesNum=L,s.index=D})(_,y,x,b),b!==null&&e.update(b,r.ELEMENT_ARRAY_BUFFER),(S||a)&&(a=!1,(function(R,I,N,D){h();let H=D.attributes,k=N.getAttributes(),L=I.defaultAttributeValues;for(let W in k){let X=k[W];if(X.location>=0){let se=H[W];if(se===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(se=R.instanceColor)),se!==void 0){let te=se.normalized,ce=se.itemSize,he=e.get(se);if(he===void 0)continue;let Z=he.buffer,le=he.type,ue=he.bytesPerElement,de=le===r.INT||le===r.UNSIGNED_INT||se.gpuType===zc;if(se.isInterleavedBufferAttribute){let me=se.data,A=me.stride,w=se.offset;if(me.isInstancedInterleavedBuffer){for(let B=0;B<X.locationSize;B++)d(X.location+B,me.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let B=0;B<X.locationSize;B++)u(X.location+B);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let B=0;B<X.locationSize;B++)f(X.location+B,ce/X.locationSize,le,te,A*ue,(w+ce/X.locationSize*B)*ue,de)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)d(X.location+me,se.meshPerAttribute);R.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<X.locationSize;me++)u(X.location+me);r.bindBuffer(r.ARRAY_BUFFER,Z);for(let me=0;me<X.locationSize;me++)f(X.location+me,ce/X.locationSize,le,te,ce*ue,ce/X.locationSize*me*ue,de)}}else if(L!==void 0){let te=L[W];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(X.location,te);break;case 3:r.vertexAttrib3fv(X.location,te);break;case 4:r.vertexAttrib4fv(X.location,te);break;default:r.vertexAttrib1fv(X.location,te)}}}}p()})(_,v,x,y),b!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(b).buffer))},reset:g,resetDefaultState:m,dispose:function(){g();for(let _ in n){let v=n[_];for(let x in v){let y=v[x];for(let b in y)l(y[b].object),delete y[b];delete v[x]}delete n[_]}},releaseStatesOfGeometry:function(_){if(n[_.id]===void 0)return;let v=n[_.id];for(let x in v){let y=v[x];for(let b in y)l(y[b].object),delete y[b];delete v[x]}delete n[_.id]},releaseStatesOfProgram:function(_){for(let v in n){let x=n[v];if(x[_.id]===void 0)continue;let y=x[_.id];for(let b in y)l(y[b].object),delete y[b];delete x[_.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Of(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let l=0;for(let c=0;c<o;c++)l+=a[c];t.update(l,n,1)},this.renderMultiDrawInstances=function(s,a,o,l){if(o===0)return;let c=e.get("WEBGL_multi_draw");if(c===null)for(let h=0;h<s.length;h++)i(s[h],a[h],l[h]);else{c.multiDrawArraysInstancedWEBGL(n,s,0,a,0,l,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*l[u];t.update(h,n,1)}}}function Ff(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=t.logarithmicDepthBuffer===!0,c=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===on||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Ii&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==en&&!p)},precision:a,logarithmicDepthBuffer:l,reverseDepthBuffer:c,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Bf(r){let e=this,t=null,n=0,i=!1,s=!1,a=new ni,o=new ze,l={value:null,needsUpdate:!1};function c(h,u,d,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=l.value,p!==!0||g===null){let m=d+4*f,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,x=d;v!==f;++v,x+=4)a.copy(h[v]).applyMatrix4(_,o),a.normal.toArray(g,x),g[x+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=c(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?c(null):(function(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let _=s?0:n,v=4*_,x=m.clippingState||null;l.value=x,x=c(p,u,v,d);for(let y=0;y!==v;++y)x[y]=t[y];m.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}}}function zf(r){let e=new WeakMap;function t(i,s){return s===Ms?i.mapping=Dr:s===gl&&(i.mapping=Or),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Ms||s===gl){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Zl(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var jr=class extends As{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mu=[.125,.215,.35,.446,.526,.582],cs=20,$o=new jr,gu=new Ee,Qo=null,el=0,tl=0,nl=!1,Qi=(1+Math.sqrt(5))/2,Rr=1/Qi,vu=[new M(-Qi,Rr,0),new M(Qi,Rr,0),new M(-Rr,0,Qi),new M(Rr,0,Qi),new M(0,Qi,-Rr),new M(0,Qi,Rr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],ka=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qo,el,tl),this._renderer.xr.enabled=nl,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qo=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),tl=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:nn,format:on,colorSpace:Tt,depthBuffer:!1},i=_u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],l=[],c=[],h=a,u=a-4+1+mu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);l.push(p);let f=1/p;d>a-4?f=mu[d-a+4-1]:d===0&&(f=0),c.push(f);let g=1/(p-2),m=-g,_=1+g,v=[m,m,_,m,_,_,m,m,_,_,m,_],x=6,y=6,b=3,S=2,C=1,R=new Float32Array(b*y*x),I=new Float32Array(S*y*x),N=new Float32Array(C*y*x);for(let H=0;H<x;H++){let k=H%3*2/3-1,L=H>2?0:-1,W=[k,L,0,k+2/3,L,0,k+2/3,L+1,0,k,L,0,k+2/3,L+1,0,k,L+1,0];R.set(W,b*y*H),I.set(v,S*y*H);let X=[H,H,H,H,H,H];N.set(X,C*y*H)}let D=new Je;D.setAttribute("position",new _t(R,b)),D.setAttribute("uv",new _t(I,S)),D.setAttribute("faceIndex",new _t(N,C)),o.push(D),h>4&&h--}return{lodPlanes:o,sizeLods:l,sigmas:c}})(s)),this._blurMaterial=(function(a,o,l){let c=new Float32Array(cs),h=new M(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:c},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new Ze(this._lodPlanes[0],e);this._renderer.compile(t,$o)}_sceneToCubeUV(e,t,n,i){let s=new Ct(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(gu),l.toneMapping=0,l.autoClear=!1;let u=new It({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Ze(new Gr,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(gu),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let _=this._cubeSize;ga(i,m*_,g>2?_:0,_,_),l.setRenderTarget(i),p&&l.render(d,s),l.render(e,s)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Dr||e.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ze(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ga(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,$o)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vu[(i-s-1)%vu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Ze(this._lodPlanes[i],c),u=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,g=isFinite(s)?1+Math.floor(3*f):cs;g>cs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],_=0;for(let y=0;y<cs;++y){let b=y/f,S=Math.exp(-b*b/2);m.push(S),y===0?_+=S:y<g&&(_+=2*S)}for(let y=0;y<m.length;y++)m[y]=m[y]/_;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let x=this._sizeLods[i];ga(t,3*x*(i>v-4?i-v+4:0),4*(this._cubeSize-x),3*x,2*x),l.setRenderTarget(t),l.render(h,$o)}};function _u(r,e,t){let n=new si(r,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function xu(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yu(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Hf(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Ms||s===gl,o=s===Dr||s===Or;if(a||o){let l=e.get(i),c=l!==void 0?l.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return t===null&&(t=new ka(r)),l=a?t.fromEquirectangular(i,l):t.fromCubemap(i,l),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),l.texture;if(l!==void 0)return l.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new ka(r)),l=a?t.fromEquirectangular(i):t.fromCubemap(i),l.texture.pmremVersion=i.pmremVersion,e.set(i,l),i.addEventListener("dispose",n),l.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function kf(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vf(r,e,t,n){let i={},s=new WeakMap;function a(l){let c=l.target;c.index!==null&&e.remove(c.index);for(let u in c.attributes)e.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}c.removeEventListener("dispose",a),delete i[c.id];let h=s.get(c);h&&(e.remove(h),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(l){let c=[],h=l.index,u=l.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let m=0,_=g.length;m<_;m+=3){let v=g[m+0],x=g[m+1],y=g[m+2];c.push(v,x,x,y,y,v)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let m=0,_=g.length/3-1;m<_;m+=3){let v=m+0,x=m+1,y=m+2;c.push(v,x,x,y,y,v)}}}let p=new(wd(c)?za:Li)(c,1);p.version=d;let f=s.get(l);f&&e.remove(f),s.set(l,p)}return{get:function(l,c){return i[c.id]===!0||(c.addEventListener("dispose",a),i[c.id]=!0,t.memory.geometries++),c},update:function(l){let c=l.attributes;for(let u in c)e.update(c[u],r.ARRAY_BUFFER);let h=l.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let c=s.get(l);if(c){let h=l.index;h!==null&&c.version<h.version&&o(l)}else o(l);return s.get(l)}}}function Gf(r,e,t){let n,i,s;function a(o,l,c){c!==0&&(r.drawElementsInstanced(n,l,i,o*s,c),t.update(l,n,c))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,l){r.drawElements(n,l,i,o*s),t.update(l,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,l,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,l,0,i,o,0,c);let h=0;for(let u=0;u<c;u++)h+=l[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,l,c,h){if(c===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,l[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,l,0,i,o,0,h,0,c);let d=0;for(let p=0;p<c;p++)d+=l[p]*h[p];t.update(d,n,1)}}}function Wf(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Xf(r,e,t){let n=new WeakMap,i=new Ke;return{update:function(s,a,o){let l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0,u=n.get(a);if(u===void 0||u.count!==h){let R=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",R)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let x=a.attributes.position.count*v,y=1;x>e.maxTextureSize&&(y=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let b=new Float32Array(x*y*4*h),S=new Ba(b,x,y,h);S.type=en,S.needsUpdate=!0;let C=4*v;for(let I=0;I<h;I++){let N=g[I],D=m[I],H=_[I],k=x*y*4*I;for(let L=0;L<N.count;L++){let W=L*C;d===!0&&(i.fromBufferAttribute(N,L),b[k+W+0]=i.x,b[k+W+1]=i.y,b[k+W+2]=i.z,b[k+W+3]=0),p===!0&&(i.fromBufferAttribute(D,L),b[k+W+4]=i.x,b[k+W+5]=i.y,b[k+W+6]=i.z,b[k+W+7]=0),f===!0&&(i.fromBufferAttribute(H,L),b[k+W+8]=i.x,b[k+W+9]=i.y,b[k+W+10]=i.z,b[k+W+11]=H.itemSize===4?i.w:1)}}u={count:h,texture:S,size:new fe(x,y)},n.set(a,u),a.addEventListener("dispose",R)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<l.length;f++)d+=l[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",l)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function jf(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,l=a.geometry,c=e.get(a,l);if(i.get(c)!==o&&(e.update(c),i.set(c,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return c},dispose:function(){i=new WeakMap}}}var Va=class extends Dt{constructor(e,t,n,i,s,a,o,l,c,h=1026){if(h!==Es&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=tr),n===void 0&&h===Br&&(n=Fr),super(null,i,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cd=new Dt,Mu=new Va(1,1),Id=new Ba,Pd=new ql,Ld=new Ha,bu=[],Su=[],Eu=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function Qr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=bu[i];if(s===void 0&&(s=new Float32Array(i),bu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function mo(r,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Yf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function Zf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function Kf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function Jf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Tu.set(n),r.uniformMatrix2fv(this.addr,!1,Tu),Lt(t,n)}}function $f(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;wu.set(n),r.uniformMatrix3fv(this.addr,!1,wu),Lt(t,n)}}function Qf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,n))return;Eu.set(n),r.uniformMatrix4fv(this.addr,!1,Eu),Lt(t,n)}}function em(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function nm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function im(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function rm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function am(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function om(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function lm(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(Mu.compareFunction=515,s=Mu):s=Cd,t.setTexture2D(e||s,i)}function cm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pd,i)}function hm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ld,i)}function um(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Id,i)}function dm(r,e){r.uniform1fv(this.addr,e)}function pm(r,e){let t=Qr(e,this.size,2);r.uniform2fv(this.addr,t)}function fm(r,e){let t=Qr(e,this.size,3);r.uniform3fv(this.addr,t)}function mm(r,e){let t=Qr(e,this.size,4);r.uniform4fv(this.addr,t)}function gm(r,e){let t=Qr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function vm(r,e){let t=Qr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function _m(r,e){let t=Qr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function xm(r,e){r.uniform1iv(this.addr,e)}function ym(r,e){r.uniform2iv(this.addr,e)}function Mm(r,e){r.uniform3iv(this.addr,e)}function bm(r,e){r.uniform4iv(this.addr,e)}function Sm(r,e){r.uniform1uiv(this.addr,e)}function Em(r,e){r.uniform2uiv(this.addr,e)}function wm(r,e){r.uniform3uiv(this.addr,e)}function Tm(r,e){r.uniform4uiv(this.addr,e)}function Am(r,e,t){let n=this.cache,i=e.length,s=mo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Cd,s[a])}function Rm(r,e,t){let n=this.cache,i=e.length,s=mo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Pd,s[a])}function Cm(r,e,t){let n=this.cache,i=e.length,s=mo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ld,s[a])}function Im(r,e,t){let n=this.cache,i=e.length,s=mo(t,i);Pt(n,s)||(r.uniform1iv(this.addr,s),Lt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Id,s[a])}var Kl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return qf;case 35664:return Yf;case 35665:return Zf;case 35666:return Kf;case 35674:return Jf;case 35675:return $f;case 35676:return Qf;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return rm;case 36294:return sm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}})(t.type)}},Jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return dm;case 35664:return pm;case 35665:return fm;case 35666:return mm;case 35674:return gm;case 35675:return vm;case 35676:return _m;case 5124:case 35670:return xm;case 35667:case 35671:return ym;case 35668:case 35672:return Mm;case 35669:case 35673:return bm;case 5125:return Sm;case 36294:return Em;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Im}})(t.type)}},$l=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},il=/(\w+)(\])?(\[|\.)?/g;function Au(r,e){r.seq.push(e),r.map[e.id]=e}function Pm(r,e,t){let n=r.name,i=n.length;for(il.lastIndex=0;;){let s=il.exec(n),a=il.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o|=0),c===void 0||c==="["&&a+2===i){Au(t,c===void 0?new Kl(o,r,e):new Jl(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new $l(o),Au(t,h)),t=h}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Pm(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ru(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Lm=0,Cu=new ze;function Iu(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,l){let c=o.split(`
`),h=[],u=Math.max(l-6,0),d=Math.min(l+6,c.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===l?">":" "} ${f}: ${c[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Um(r,e){let t=(function(n){qe._getMatrix(Cu,qe.workingColorSpace,n);let i=`mat3( ${Cu.elements.map((s=>s.toFixed(4)))} )`;switch(qe.getTransfer(n)){case fo:return[i,"LinearTransferOETF"];case tt:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nm(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var va=new M;function Dm(){return qe.getLuminanceCoefficients(va),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${va.x.toFixed(4)}, ${va.y.toFixed(4)}, ${va.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hs(r){return r!==""}function Pu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(r){return r.replace(Om,Bm)}var Fm=new Map;function Bm(r,e){let t=He[e];if(t===void 0){let n=Fm.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ql(t)}var zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(r){return r.replace(zm,Hm)}function Hm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nu(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function km(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=(function(D){let H="SHADOWMAP_TYPE_BASIC";return D.shadowMapType===1?H="SHADOWMAP_TYPE_PCF":D.shadowMapType===2?H="SHADOWMAP_TYPE_PCF_SOFT":D.shadowMapType===3&&(H="SHADOWMAP_TYPE_VSM"),H})(t),c=(function(D){let H="ENVMAP_TYPE_CUBE";if(D.envMap)switch(D.envMapMode){case Dr:case Or:H="ENVMAP_TYPE_CUBE";break;case uo:H="ENVMAP_TYPE_CUBE_UV"}return H})(t),h=(function(D){let H="ENVMAP_MODE_REFLECTION";return D.envMap&&D.envMapMode===Or&&(H="ENVMAP_MODE_REFRACTION"),H})(t),u=(function(D){let H="ENVMAP_BLENDING_NONE";if(D.envMap)switch(D.combine){case 0:H="ENVMAP_BLENDING_MULTIPLY";break;case 1:H="ENVMAP_BLENDING_MIX";break;case 2:H="ENVMAP_BLENDING_ADD"}return H})(t),d=(function(D){let H=D.envMapCubeUVHeight;if(H===null)return null;let k=Math.log2(H)-2,L=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,k),112)),texelHeight:L,maxMip:k}})(t),p=(function(D){return[D.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",D.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)})(t),f=(function(D){let H=[];for(let k in D){let L=D[k];L!==!1&&H.push("#define "+k+" "+L)}return H.join(`
`)})(s),g=i.createProgram(),m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(hs).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(hs).join(`
`),_.length>0&&(_+=`
`)):(m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),_=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?He.tonemapping_pars_fragment:"",t.toneMapping!==0?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,Um("linearToOutputTexel",t.outputColorSpace),Dm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=Ql(a),a=Pu(a,t),a=Lu(a,t),o=Ql(o),o=Pu(o,t),o=Lu(o,t),a=Uu(a),o=Uu(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let x=v+m+a,y=v+_+o,b=Ru(i,i.VERTEX_SHADER,x),S=Ru(i,i.FRAGMENT_SHADER,y);function C(D){if(r.debug.checkShaderErrors){let H=i.getProgramInfoLog(g).trim(),k=i.getShaderInfoLog(b).trim(),L=i.getShaderInfoLog(S).trim(),W=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,S);else{let se=Iu(i,b,"vertex"),te=Iu(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+se+`
`+te)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):k!==""&&L!==""||(X=!1);X&&(D.diagnostics={runnable:W,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:L,prefix:_}})}i.deleteShader(b),i.deleteShader(S),R=new Nr(i,g),I=(function(H,k){let L={},W=H.getProgramParameter(k,H.ACTIVE_ATTRIBUTES);for(let X=0;X<W;X++){let se=H.getActiveAttrib(k,X),te=se.name,ce=1;se.type===H.FLOAT_MAT2&&(ce=2),se.type===H.FLOAT_MAT3&&(ce=3),se.type===H.FLOAT_MAT4&&(ce=4),L[te]={type:se.type,location:H.getAttribLocation(k,te),locationSize:ce}}return L})(i,g)}let R,I;i.attachShader(g,b),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),this.getUniforms=function(){return R===void 0&&C(this),R},this.getAttributes=function(){return I===void 0&&C(this),I};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=i.getProgramParameter(g,37297)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=S,this}var Vm=0,ec=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new tc(e),t.set(e,n)),n}},tc=class{constructor(e){this.id=Vm++,this.code=e,this.usedTimes=0}};function Gm(r,e,t,n,i,s,a){let o=new Ts,l=new ec,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return c.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,v,x,y){let b=x.fog,S=y.geometry,C=m.isMeshStandardMaterial?x.environment:null,R=(m.isMeshStandardMaterial?t:e).get(m.envMap||C),I=R&&R.mapping===uo?R.image.height:null,N=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let D=S.morphAttributes.position||S.morphAttributes.normal||S.morphAttributes.color,H=D!==void 0?D.length:0,k,L,W,X,se=0;if(S.morphAttributes.position!==void 0&&(se=1),S.morphAttributes.normal!==void 0&&(se=2),S.morphAttributes.color!==void 0&&(se=3),N){let lt=Wn[N];k=lt.vertexShader,L=lt.fragmentShader}else k=m.vertexShader,L=m.fragmentShader,l.update(m),W=l.getVertexShaderID(m),X=l.getFragmentShaderID(m);let te=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),he=y.isInstancedMesh===!0,Z=y.isBatchedMesh===!0,le=!!m.map,ue=!!m.matcap,de=!!R,me=!!m.aoMap,A=!!m.lightMap,w=!!m.bumpMap,B=!!m.normalMap,O=!!m.displacementMap,U=!!m.emissiveMap,F=!!m.metalnessMap,E=!!m.roughnessMap,P=m.anisotropy>0,z=m.clearcoat>0,ie=m.dispersion>0,V=m.iridescence>0,Q=m.sheen>0,$=m.transmission>0,ee=P&&!!m.anisotropyMap,K=z&&!!m.clearcoatMap,j=z&&!!m.clearcoatNormalMap,ae=z&&!!m.clearcoatRoughnessMap,J=V&&!!m.iridescenceMap,Se=V&&!!m.iridescenceThicknessMap,_e=Q&&!!m.sheenColorMap,xe=Q&&!!m.sheenRoughnessMap,Ce=!!m.specularMap,Ne=!!m.specularColorMap,Xe=!!m.specularIntensityMap,ye=$&&!!m.transmissionMap,Pe=$&&!!m.thicknessMap,Be=!!m.gradientMap,Ft=!!m.alphaMap,dn=m.alphaTest>0,et=!!m.alphaHash,gt=!!m.extensions,rt=0;m.toneMapped&&(te!==null&&te.isXRRenderTarget!==!0||(rt=r.toneMapping));let G={shaderID:N,shaderType:m.type,shaderName:m.name,vertexShader:k,fragmentShader:L,defines:m.defines,customVertexShaderID:W,customFragmentShaderID:X,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Z,batchingColor:Z&&y._colorsTexture!==null,instancing:he,instancingColor:he&&y.instanceColor!==null,instancingMorph:he&&y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Tt,alphaToCoverage:!!m.alphaToCoverage,map:le,matcap:ue,envMap:de,envMapMode:de&&R.mapping,envMapCubeUVHeight:I,aoMap:me,lightMap:A,bumpMap:w,normalMap:B,displacementMap:d&&O,emissiveMap:U,normalMapObjectSpace:B&&m.normalMapType===1,normalMapTangentSpace:B&&m.normalMapType===0,metalnessMap:F,roughnessMap:E,anisotropy:P,anisotropyMap:ee,clearcoat:z,clearcoatMap:K,clearcoatNormalMap:j,clearcoatRoughnessMap:ae,dispersion:ie,iridescence:V,iridescenceMap:J,iridescenceThicknessMap:Se,sheen:Q,sheenColorMap:_e,sheenRoughnessMap:xe,specularMap:Ce,specularColorMap:Ne,specularIntensityMap:Xe,transmission:$,transmissionMap:ye,thicknessMap:Pe,gradientMap:Be,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:Ft,alphaTest:dn,alphaHash:et,combine:m.combine,mapUv:le&&g(m.map.channel),aoMapUv:me&&g(m.aoMap.channel),lightMapUv:A&&g(m.lightMap.channel),bumpMapUv:w&&g(m.bumpMap.channel),normalMapUv:B&&g(m.normalMap.channel),displacementMapUv:O&&g(m.displacementMap.channel),emissiveMapUv:U&&g(m.emissiveMap.channel),metalnessMapUv:F&&g(m.metalnessMap.channel),roughnessMapUv:E&&g(m.roughnessMap.channel),anisotropyMapUv:ee&&g(m.anisotropyMap.channel),clearcoatMapUv:K&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:j&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(m.sheenRoughnessMap.channel),specularMapUv:Ce&&g(m.specularMap.channel),specularColorMapUv:Ne&&g(m.specularColorMap.channel),specularIntensityMapUv:Xe&&g(m.specularIntensityMap.channel),transmissionMapUv:ye&&g(m.transmissionMap.channel),thicknessMapUv:Pe&&g(m.thicknessMap.channel),alphaMapUv:Ft&&g(m.alphaMap.channel),vertexTangents:!!S.attributes.tangent&&(B||P),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!S.attributes.color&&S.attributes.color.itemSize===4,pointsUvs:y.isPoints===!0&&!!S.attributes.uv&&(le||Ft),fog:!!b,useFog:m.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ce,skinning:y.isSkinnedMesh===!0,morphTargets:S.morphAttributes.position!==void 0,morphNormals:S.morphAttributes.normal!==void 0,morphColors:S.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:se,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:rt,decodeVideoTexture:le&&m.map.isVideoTexture===!0&&qe.getTransfer(m.map.colorSpace)===tt,decodeVideoTextureEmissive:U&&m.emissiveMap.isVideoTexture===!0&&qe.getTransfer(m.emissiveMap.colorSpace)===tt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:gt&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&m.extensions.multiDraw===!0||Z)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return G.vertexUv1s=c.has(1),G.vertexUv2s=c.has(2),G.vertexUv3s=c.has(3),c.clear(),G},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)_.push(v),_.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)})(_,m),(function(v,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),v.push(o.mask)})(_,m),_.push(r.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=f[m.type],v;if(_){let x=Wn[_];v=Cf.clone(x.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,_){let v;for(let x=0,y=h.length;x<y;x++){let b=h[x];if(b.cacheKey===_){v=b,++v.usedTimes;break}}return v===void 0&&(v=new km(r,_,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){l.remove(m)},programs:h,dispose:function(){l.dispose()}}}function Wm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Xm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Du(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ou(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,l,c,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:l,groupOrder:c,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=l,d.groupOrder=c,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.push(d):l.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,l,c,h,u){let d=s(a,o,l,c,h,u);l.transmission>0?n.unshift(d):l.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let l=r[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Xm),n.length>1&&n.sort(o||Du),i.length>1&&i.sort(o||Du)}}}function jm(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Ou,r.set(e,[i])):t>=n.length?(i=new Ou,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function qm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Ee};break;case"SpotLight":t={position:new M,direction:new M,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new M,halfWidth:new M,halfHeight:new M}}return r[e.id]=t,t}}}var Ym=0;function Zm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Km(r){let e=new qm,t=(function(){let o={};return{get:function(l){if(o[l.id]!==void 0)return o[l.id];let c;switch(l.type){case"DirectionalLight":case"SpotLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":c={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[l.id]=c,c}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let i=new M,s=new Ie,a=new Ie;return{setup:function(o){let l=0,c=0,h=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let u=0,d=0,p=0,f=0,g=0,m=0,_=0,v=0,x=0,y=0,b=0;o.sort(Zm);for(let C=0,R=o.length;C<R;C++){let I=o[C],N=I.color,D=I.intensity,H=I.distance,k=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)l+=N.r*D,c+=N.g*D,h+=N.b*D;else if(I.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(I.sh.coefficients[L],D);b++}else if(I.isDirectionalLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,X=t.get(I);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,n.directionalShadow[u]=X,n.directionalShadowMap[u]=k,n.directionalShadowMatrix[u]=I.shadow.matrix,m++}n.directional[u]=L,u++}else if(I.isSpotLight){let L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(N).multiplyScalar(D),L.distance=H,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,n.spot[p]=L;let W=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,W.updateMatrices(I),I.castShadow&&y++),n.spotLightMatrix[p]=W.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,n.spotShadow[p]=X,n.spotShadowMap[p]=k,v++}p++}else if(I.isRectAreaLight){let L=e.get(I);L.color.copy(N).multiplyScalar(D),L.halfWidth.set(.5*I.width,0,0),L.halfHeight.set(0,.5*I.height,0),n.rectArea[f]=L,f++}else if(I.isPointLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){let W=I.shadow,X=t.get(I);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,X.shadowCameraNear=W.camera.near,X.shadowCameraFar=W.camera.far,n.pointShadow[d]=X,n.pointShadowMap[d]=k,n.pointShadowMatrix[d]=I.shadow.matrix,_++}n.point[d]=L,d++}else if(I.isHemisphereLight){let L=e.get(I);L.skyColor.copy(I.color).multiplyScalar(D),L.groundColor.copy(I.groundColor).multiplyScalar(D),n.hemi[g]=L,g++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=c,n.ambient[2]=h;let S=n.hash;S.directionalLength===u&&S.pointLength===d&&S.spotLength===p&&S.rectAreaLength===f&&S.hemiLength===g&&S.numDirectionalShadows===m&&S.numPointShadows===_&&S.numSpotShadows===v&&S.numSpotMaps===x&&S.numLightProbes===b||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+x-y,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=b,S.directionalLength=u,S.pointLength=d,S.spotLength=p,S.rectAreaLength=f,S.hemiLength=g,S.numDirectionalShadows=m,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=x,S.numLightProbes=b,n.version=Ym++)},setupView:function(o,l){let c=0,h=0,u=0,d=0,p=0,f=l.matrixWorldInverse;for(let g=0,m=o.length;g<m;g++){let _=o[g];if(_.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),c++}else if(_.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),u++}else if(_.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*_.width,0,0),v.halfHeight.set(0,.5*_.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),h++}else if(_.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function Fu(r){let e=new Km(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Jm(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new Fu(r),e.set(t,[s])):n>=i.length?(s=new Fu(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var nc=class extends hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ic=class extends hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $m(r,e,t){let n=new Xr,i=new fe,s=new fe,a=new Ke,o=new nc({depthPacking:3201}),l=new ic,c={},h=t.maxTextureSize,u={[Fc]:1,[Np]:0,[Bi]:2},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Je;f.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ze(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;function v(S,C){let R=e.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new si(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(C,null,R,d,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(C,null,R,p,g,null)}function x(S,C,R,I){let N=null,D=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)N=D;else if(N=R.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let H=N.uuid,k=C.uuid,L=c[H];L===void 0&&(L={},c[H]=L);let W=L[k];W===void 0&&(W=N.clone(),L[k]=W,C.addEventListener("dispose",b)),N=W}return N.visible=C.visible,N.wireframe=C.wireframe,N.side=I===3?C.shadowSide!==null?C.shadowSide:C.side:C.shadowSide!==null?C.shadowSide:u[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,R.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(r.properties.get(N).light=R),N}function y(S,C,R,I,N){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===3)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);let H=e.update(S),k=S.material;if(Array.isArray(k)){let L=H.groups;for(let W=0,X=L.length;W<X;W++){let se=L[W],te=k[se.materialIndex];if(te&&te.visible){let ce=x(S,te,I,N);S.onBeforeShadow(r,S,C,R,H,ce,se),r.renderBufferDirect(R,null,H,ce,S,se),S.onAfterShadow(r,S,C,R,H,ce,se)}}}else if(k.visible){let L=x(S,k,I,N);S.onBeforeShadow(r,S,C,R,H,L,null),r.renderBufferDirect(R,null,H,L,S,null),S.onAfterShadow(r,S,C,R,H,L,null)}}let D=S.children;for(let H=0,k=D.length;H<k;H++)y(D[H],C,R,I,N)}function b(S){S.target.removeEventListener("dispose",b);for(let C in c){let R=c[C],I=S.target.uuid;I in R&&(R[I].dispose(),delete R[I])}}this.render=function(S,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;let I=r.getRenderTarget(),N=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),H=r.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let k=_!==3&&this.type===3,L=_===3&&this.type!==3;for(let W=0,X=S.length;W<X;W++){let se=S[W],te=se.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;i.copy(te.mapSize);let ce=te.getFrameExtents();if(i.multiply(ce),s.copy(te.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ce.x),i.x=s.x*ce.x,te.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ce.y),i.y=s.y*ce.y,te.mapSize.y=s.y)),te.map===null||k===!0||L===!0){let Z=this.type!==3?{minFilter:ln,magFilter:ln}:{};te.map!==null&&te.map.dispose(),te.map=new si(i.x,i.y,Z),te.map.texture.name=se.name+".shadowMap",te.camera.updateProjectionMatrix()}r.setRenderTarget(te.map),r.clear();let he=te.getViewportCount();for(let Z=0;Z<he;Z++){let le=te.getViewport(Z);a.set(s.x*le.x,s.y*le.y,s.x*le.z,s.y*le.w),H.viewport(a),te.updateMatrices(se,Z),n=te.getFrustum(),y(C,R,te.camera,se,this.type)}te.isPointLightShadow!==!0&&this.type===3&&v(te,R),te.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(I,N,D)}}var Qm={[Kp]:1,[$p]:6,[ef]:7,[Qp]:5,[Jp]:0,[nf]:2,[rf]:4,[tf]:3};function eg(r,e){let t=new function(){let E=!1,P=new Ke,z=null,ie=new Ke(0,0,0,0);return{setMask:function(V){z===V||E||(r.colorMask(V,V,V,V),z=V)},setLocked:function(V){E=V},setClear:function(V,Q,$,ee,K){K===!0&&(V*=ee,Q*=ee,$*=ee),P.set(V,Q,$,ee),ie.equals(P)===!1&&(r.clearColor(V,Q,$,ee),ie.copy(P))},reset:function(){E=!1,z=null,ie.set(-1,0,0,0)}}},n=new function(){let E=!1,P=!1,z=null,ie=null,V=null;return{setReversed:function(Q){if(P!==Q){let $=e.get("EXT_clip_control");P?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT);let ee=V;V=null,this.setClear(ee)}P=Q},getReversed:function(){return P},setTest:function(Q){Q?de(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(Q){z===Q||E||(r.depthMask(Q),z=Q)},setFunc:function(Q){if(P&&(Q=Qm[Q]),ie!==Q){switch(Q){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}ie=Q}},setLocked:function(Q){E=Q},setClear:function(Q){V!==Q&&(P&&(Q=1-Q),r.clearDepth(Q),V=Q)},reset:function(){E=!1,z=null,ie=null,V=null,P=!1}}},i=new function(){let E=!1,P=null,z=null,ie=null,V=null,Q=null,$=null,ee=null,K=null;return{setTest:function(j){E||(j?de(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(j){P===j||E||(r.stencilMask(j),P=j)},setFunc:function(j,ae,J){z===j&&ie===ae&&V===J||(r.stencilFunc(j,ae,J),z=j,ie=ae,V=J)},setOp:function(j,ae,J){Q===j&&$===ae&&ee===J||(r.stencilOp(j,ae,J),Q=j,$=ae,ee=J)},setLocked:function(j){E=j},setClear:function(j){K!==j&&(r.clearStencil(j),K=j)},reset:function(){E=!1,P=null,z=null,ie=null,V=null,Q=null,$=null,ee=null,K=null}}},s=new WeakMap,a=new WeakMap,o={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,_=null,v=null,x=null,y=new Ee(0,0,0),b=0,S=!1,C=null,R=null,I=null,N=null,D=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,L=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=L>=1):W.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=L>=2);let X=null,se={},te=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),he=new Ke().fromArray(te),Z=new Ke().fromArray(ce);function le(E,P,z,ie){let V=new Uint8Array(4),Q=r.createTexture();r.bindTexture(E,Q),r.texParameteri(E,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(E,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $=0;$<z;$++)E===r.TEXTURE_3D||E===r.TEXTURE_2D_ARRAY?r.texImage3D(P,0,r.RGBA,1,1,ie,0,r.RGBA,r.UNSIGNED_BYTE,V):r.texImage2D(P+$,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,V);return Q}let ue={};function de(E){o[E]!==!0&&(r.enable(E),o[E]=!0)}function me(E){o[E]!==!1&&(r.disable(E),o[E]=!1)}ue[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),ue[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ue[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),de(r.DEPTH_TEST),n.setFunc(3),O(!1),U(1),de(r.CULL_FACE),B(0);let A={[er]:r.FUNC_ADD,[Dp]:r.FUNC_SUBTRACT,[Op]:r.FUNC_REVERSE_SUBTRACT};A[103]=r.MIN,A[104]=r.MAX;let w={[Fp]:r.ZERO,[Bp]:r.ONE,[zp]:r.SRC_COLOR,[fl]:r.SRC_ALPHA,[Xp]:r.SRC_ALPHA_SATURATE,[Gp]:r.DST_COLOR,[kp]:r.DST_ALPHA,[Hp]:r.ONE_MINUS_SRC_COLOR,[ml]:r.ONE_MINUS_SRC_ALPHA,[Wp]:r.ONE_MINUS_DST_COLOR,[Vp]:r.ONE_MINUS_DST_ALPHA,[jp]:r.CONSTANT_COLOR,[qp]:r.ONE_MINUS_CONSTANT_COLOR,[Yp]:r.CONSTANT_ALPHA,[Zp]:r.ONE_MINUS_CONSTANT_ALPHA};function B(E,P,z,ie,V,Q,$,ee,K,j){if(E!==0){if(d===!1&&(de(r.BLEND),d=!0),E===5)V=V||P,Q=Q||z,$=$||ie,P===f&&V===_||(r.blendEquationSeparate(A[P],A[V]),f=P,_=V),z===g&&ie===m&&Q===v&&$===x||(r.blendFuncSeparate(w[z],w[ie],w[Q],w[$]),g=z,m=ie,v=Q,x=$),ee.equals(y)!==!1&&K===b||(r.blendColor(ee.r,ee.g,ee.b,K),y.copy(ee),b=K),p=E,S=!1;else if(E!==p||j!==S){if(f===er&&_===er||(r.blendEquation(r.FUNC_ADD),f=er,_=er),j)switch(E){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}else switch(E){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E)}g=null,m=null,v=null,x=null,y.set(0,0,0),b=0,p=E,S=j}}else d===!0&&(me(r.BLEND),d=!1)}function O(E){C!==E&&(E?r.frontFace(r.CW):r.frontFace(r.CCW),C=E)}function U(E){E!==0?(de(r.CULL_FACE),E!==R&&(E===1?r.cullFace(r.BACK):E===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),R=E}function F(E,P,z){E?(de(r.POLYGON_OFFSET_FILL),N===P&&D===z||(r.polygonOffset(P,z),N=P,D=z)):me(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:de,disable:me,bindFramebuffer:function(E,P){return l[E]!==P&&(r.bindFramebuffer(E,P),l[E]=P,E===r.DRAW_FRAMEBUFFER&&(l[r.FRAMEBUFFER]=P),E===r.FRAMEBUFFER&&(l[r.DRAW_FRAMEBUFFER]=P),!0)},drawBuffers:function(E,P){let z=h,ie=!1;if(E){z=c.get(P),z===void 0&&(z=[],c.set(P,z));let V=E.textures;if(z.length!==V.length||z[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,$=V.length;Q<$;Q++)z[Q]=r.COLOR_ATTACHMENT0+Q;z.length=V.length,ie=!0}}else z[0]!==r.BACK&&(z[0]=r.BACK,ie=!0);ie&&r.drawBuffers(z)},useProgram:function(E){return u!==E&&(r.useProgram(E),u=E,!0)},setBlending:B,setMaterial:function(E,P){E.side===2?me(r.CULL_FACE):de(r.CULL_FACE);let z=E.side===1;P&&(z=!z),O(z),E.blending===1&&E.transparent===!1?B(0):B(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),n.setFunc(E.depthFunc),n.setTest(E.depthTest),n.setMask(E.depthWrite),t.setMask(E.colorWrite);let ie=E.stencilWrite;i.setTest(ie),ie&&(i.setMask(E.stencilWriteMask),i.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),i.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),F(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?de(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:O,setCullFace:U,setLineWidth:function(E){E!==I&&(k&&r.lineWidth(E),I=E)},setPolygonOffset:F,setScissorTest:function(E){E?de(r.SCISSOR_TEST):me(r.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=r.TEXTURE0+H-1),X!==E&&(r.activeTexture(E),X=E)},bindTexture:function(E,P,z){z===void 0&&(z=X===null?r.TEXTURE0+H-1:X);let ie=se[z];ie===void 0&&(ie={type:void 0,texture:void 0},se[z]=ie),ie.type===E&&ie.texture===P||(X!==z&&(r.activeTexture(z),X=z),r.bindTexture(E,P||ue[E]),ie.type=E,ie.texture=P)},unbindTexture:function(){let E=se[X];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},updateUBOMapping:function(E,P){let z=a.get(P);z===void 0&&(z=new WeakMap,a.set(P,z));let ie=z.get(E);ie===void 0&&(ie=r.getUniformBlockIndex(P,E.name),z.set(E,ie))},uniformBlockBinding:function(E,P){let z=a.get(P).get(E);s.get(P)!==z&&(r.uniformBlockBinding(P,z,E.__bindingPointIndex),s.set(P,z))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(E){console.error("THREE.WebGLState:",E)}},scissor:function(E){he.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),he.copy(E))},viewport:function(E){Z.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),Z.copy(E))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},X=null,se={},l={},c=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,_=null,v=null,x=null,y=new Ee(0,0,0),b=0,S=!1,C=null,R=null,I=null,N=null,D=null,he.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Bu(r,e,t,n){let i=(function(s){switch(s){case Ii:case md:return{byteLength:1,components:1};case Ss:case gd:case nn:return{byteLength:2,components:1};case Hc:case kc:return{byteLength:2,components:4};case tr:case zc:case en:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case _d:case yd:return r*e;case Md:return r*e*2;case Vc:case Gc:return r*e/i.components*i.byteLength;case bd:case Wc:return r*e*2/i.components*i.byteLength;case xd:return r*e*3/i.components*i.byteLength;case on:case Xc:return r*e*4/i.components*i.byteLength;case Pa:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case _l:case yl:return Math.max(r,16)*Math.max(e,8)/4;case vl:case xl:return Math.max(r,8)*Math.max(e,8)/2;case Ml:case bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sl:case El:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Al:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Cl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Il:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Da:case Bl:case zl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sd:case Hl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case kl:case Vl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tg(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new fe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,w){return p?new OffscreenCanvas(A,w):ws("canvas")}function g(A,w,B){let O=1,U=me(A);if((U.width>B||U.height>B)&&(O=B/Math.max(U.width,U.height)),O<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let F=Math.floor(O*U.width),E=Math.floor(O*U.height);u===void 0&&(u=f(F,E));let P=w?f(F,E):u;return P.width=F,P.height=E,P.getContext("2d").drawImage(A,0,0,F,E),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+F+"x"+E+")."),P}return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),A}return A}function m(A){return A.generateMipmaps}function _(A){r.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(A,w,B,O,U=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let F=w;if(w===r.RED&&(B===r.FLOAT&&(F=r.R32F),B===r.HALF_FLOAT&&(F=r.R16F),B===r.UNSIGNED_BYTE&&(F=r.R8)),w===r.RED_INTEGER&&(B===r.UNSIGNED_BYTE&&(F=r.R8UI),B===r.UNSIGNED_SHORT&&(F=r.R16UI),B===r.UNSIGNED_INT&&(F=r.R32UI),B===r.BYTE&&(F=r.R8I),B===r.SHORT&&(F=r.R16I),B===r.INT&&(F=r.R32I)),w===r.RG&&(B===r.FLOAT&&(F=r.RG32F),B===r.HALF_FLOAT&&(F=r.RG16F),B===r.UNSIGNED_BYTE&&(F=r.RG8)),w===r.RG_INTEGER&&(B===r.UNSIGNED_BYTE&&(F=r.RG8UI),B===r.UNSIGNED_SHORT&&(F=r.RG16UI),B===r.UNSIGNED_INT&&(F=r.RG32UI),B===r.BYTE&&(F=r.RG8I),B===r.SHORT&&(F=r.RG16I),B===r.INT&&(F=r.RG32I)),w===r.RGB_INTEGER&&(B===r.UNSIGNED_BYTE&&(F=r.RGB8UI),B===r.UNSIGNED_SHORT&&(F=r.RGB16UI),B===r.UNSIGNED_INT&&(F=r.RGB32UI),B===r.BYTE&&(F=r.RGB8I),B===r.SHORT&&(F=r.RGB16I),B===r.INT&&(F=r.RGB32I)),w===r.RGBA_INTEGER&&(B===r.UNSIGNED_BYTE&&(F=r.RGBA8UI),B===r.UNSIGNED_SHORT&&(F=r.RGBA16UI),B===r.UNSIGNED_INT&&(F=r.RGBA32UI),B===r.BYTE&&(F=r.RGBA8I),B===r.SHORT&&(F=r.RGBA16I),B===r.INT&&(F=r.RGBA32I)),w===r.RGB&&B===r.UNSIGNED_INT_5_9_9_9_REV&&(F=r.RGB9_E5),w===r.RGBA){let E=U?fo:qe.getTransfer(O);B===r.FLOAT&&(F=r.RGBA32F),B===r.HALF_FLOAT&&(F=r.RGBA16F),B===r.UNSIGNED_BYTE&&(F=E===tt?r.SRGB8_ALPHA8:r.RGBA8),B===r.UNSIGNED_SHORT_4_4_4_4&&(F=r.RGBA4),B===r.UNSIGNED_SHORT_5_5_5_1&&(F=r.RGB5_A1)}return F!==r.R16F&&F!==r.R32F&&F!==r.RG16F&&F!==r.RG32F&&F!==r.RGBA16F&&F!==r.RGBA32F||e.get("EXT_color_buffer_float"),F}function y(A,w){let B;return A?w===null||w===tr||w===Fr?B=r.DEPTH24_STENCIL8:w===en?B=r.DEPTH32F_STENCIL8:w===Ss&&(B=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===tr||w===Fr?B=r.DEPTH_COMPONENT24:w===en?B=r.DEPTH_COMPONENT32F:w===Ss&&(B=r.DEPTH_COMPONENT16),B}function b(A,w){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==Mt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function S(A){let w=A.target;w.removeEventListener("dispose",S),(function(B){let O=n.get(B);if(O.__webglInit===void 0)return;let U=B.source,F=d.get(U);if(F){let E=F[O.__cacheKey];E.usedTimes--,E.usedTimes===0&&R(B),Object.keys(F).length===0&&d.delete(U)}n.remove(B)})(w),w.isVideoTexture&&h.delete(w)}function C(A){let w=A.target;w.removeEventListener("dispose",C),(function(B){let O=n.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),n.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(O.__webglFramebuffer[F]))for(let E=0;E<O.__webglFramebuffer[F].length;E++)r.deleteFramebuffer(O.__webglFramebuffer[F][E]);else r.deleteFramebuffer(O.__webglFramebuffer[F]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[F])}else{if(Array.isArray(O.__webglFramebuffer))for(let F=0;F<O.__webglFramebuffer.length;F++)r.deleteFramebuffer(O.__webglFramebuffer[F]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let F=0;F<O.__webglColorRenderbuffer.length;F++)O.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[F]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}let U=B.textures;for(let F=0,E=U.length;F<E;F++){let P=n.get(U[F]);P.__webglTexture&&(r.deleteTexture(P.__webglTexture),a.memory.textures--),n.remove(U[F])}n.remove(B)})(w)}function R(A){let w=n.get(A);r.deleteTexture(w.__webglTexture);let B=A.source;delete d.get(B)[w.__cacheKey],a.memory.textures--}let I=0;function N(A,w){let B=n.get(A);if(A.isVideoTexture&&(function(O){let U=a.render.frame;h.get(O)!==U&&(h.set(O,U),O.update())})(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let O=A.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(O.complete!==!1)return void X(B,A,w);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,B.__webglTexture,r.TEXTURE0+w)}let D={[Sn]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[bs]:r.MIRRORED_REPEAT},H={[ln]:r.NEAREST,[Bc]:r.NEAREST_MIPMAP_NEAREST,[Ir]:r.NEAREST_MIPMAP_LINEAR,[Mt]:r.LINEAR,[gs]:r.LINEAR_MIPMAP_NEAREST,[Xn]:r.LINEAR_MIPMAP_LINEAR},k={[af]:r.NEVER,[pf]:r.ALWAYS,[of]:r.LESS,[cf]:r.LEQUAL,[lf]:r.EQUAL,[df]:r.GEQUAL,[hf]:r.GREATER,[uf]:r.NOTEQUAL};function L(A,w){if(w.type!==en||e.has("OES_texture_float_linear")!==!1||w.magFilter!==Mt&&w.magFilter!==gs&&w.magFilter!==Ir&&w.magFilter!==Xn&&w.minFilter!==Mt&&w.minFilter!==gs&&w.minFilter!==Ir&&w.minFilter!==Xn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,D[w.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,D[w.wrapT]),A!==r.TEXTURE_3D&&A!==r.TEXTURE_2D_ARRAY||r.texParameteri(A,r.TEXTURE_WRAP_R,D[w.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,H[w.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,H[w.minFilter]),w.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ln||w.minFilter!==Ir&&w.minFilter!==Xn||w.type===en&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function W(A,w){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",S));let O=w.source,U=d.get(O);U===void 0&&(U={},d.set(O,U));let F=(function(E){let P=[];return P.push(E.wrapS),P.push(E.wrapT),P.push(E.wrapR||0),P.push(E.magFilter),P.push(E.minFilter),P.push(E.anisotropy),P.push(E.internalFormat),P.push(E.format),P.push(E.type),P.push(E.generateMipmaps),P.push(E.premultiplyAlpha),P.push(E.flipY),P.push(E.unpackAlignment),P.push(E.colorSpace),P.join()})(w);if(F!==A.__cacheKey){U[F]===void 0&&(U[F]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,B=!0),U[F].usedTimes++;let E=U[A.__cacheKey];E!==void 0&&(U[A.__cacheKey].usedTimes--,E.usedTimes===0&&R(w)),A.__cacheKey=F,A.__webglTexture=U[F].texture}return B}function X(A,w,B){let O=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(O=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(O=r.TEXTURE_3D);let U=W(A,w),F=w.source;t.bindTexture(O,A.__webglTexture,r.TEXTURE0+B);let E=n.get(F);if(F.version!==E.__version||U===!0){t.activeTexture(r.TEXTURE0+B);let P=qe.getPrimaries(qe.workingColorSpace),z=w.colorSpace===wi?null:qe.getPrimaries(w.colorSpace),ie=w.colorSpace===wi||P===z?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let V=g(w.image,!1,i.maxTextureSize);V=de(w,V);let Q=s.convert(w.format,w.colorSpace),$=s.convert(w.type),ee,K=x(w.internalFormat,Q,$,w.colorSpace,w.isVideoTexture);L(O,w);let j=w.mipmaps,ae=w.isVideoTexture!==!0,J=E.__version===void 0||U===!0,Se=F.dataReady,_e=b(w,V);if(w.isDepthTexture)K=y(w.format===Br,w.type),J&&(ae?t.texStorage2D(r.TEXTURE_2D,1,K,V.width,V.height):t.texImage2D(r.TEXTURE_2D,0,K,V.width,V.height,0,Q,$,null));else if(w.isDataTexture)if(j.length>0){ae&&J&&t.texStorage2D(r.TEXTURE_2D,_e,K,j[0].width,j[0].height);for(let xe=0,Ce=j.length;xe<Ce;xe++)ee=j[xe],ae?Se&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,ee.width,ee.height,Q,$,ee.data):t.texImage2D(r.TEXTURE_2D,xe,K,ee.width,ee.height,0,Q,$,ee.data);w.generateMipmaps=!1}else ae?(J&&t.texStorage2D(r.TEXTURE_2D,_e,K,V.width,V.height),Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,V.width,V.height,Q,$,V.data)):t.texImage2D(r.TEXTURE_2D,0,K,V.width,V.height,0,Q,$,V.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ae&&J&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,K,j[0].width,j[0].height,V.depth);for(let xe=0,Ce=j.length;xe<Ce;xe++)if(ee=j[xe],w.format!==on)if(Q!==null)if(ae){if(Se)if(w.layerUpdates.size>0){let Ne=Bu(ee.width,ee.height,w.format,w.type);for(let Xe of w.layerUpdates){let ye=ee.data.subarray(Xe*Ne/ee.data.BYTES_PER_ELEMENT,(Xe+1)*Ne/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,Xe,ee.width,ee.height,1,Q,ye)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,ee.width,ee.height,V.depth,Q,ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,xe,K,ee.width,ee.height,V.depth,0,ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,xe,0,0,0,ee.width,ee.height,V.depth,Q,$,ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,xe,K,ee.width,ee.height,V.depth,0,Q,$,ee.data)}else{ae&&J&&t.texStorage2D(r.TEXTURE_2D,_e,K,j[0].width,j[0].height);for(let xe=0,Ce=j.length;xe<Ce;xe++)ee=j[xe],w.format!==on?Q!==null?ae?Se&&t.compressedTexSubImage2D(r.TEXTURE_2D,xe,0,0,ee.width,ee.height,Q,ee.data):t.compressedTexImage2D(r.TEXTURE_2D,xe,K,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?Se&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,ee.width,ee.height,Q,$,ee.data):t.texImage2D(r.TEXTURE_2D,xe,K,ee.width,ee.height,0,Q,$,ee.data)}else if(w.isDataArrayTexture)if(ae){if(J&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,K,V.width,V.height,V.depth),Se)if(w.layerUpdates.size>0){let xe=Bu(V.width,V.height,w.format,w.type);for(let Ce of w.layerUpdates){let Ne=V.data.subarray(Ce*xe/V.data.BYTES_PER_ELEMENT,(Ce+1)*xe/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ce,V.width,V.height,1,Q,$,Ne)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Q,$,V.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,K,V.width,V.height,V.depth,0,Q,$,V.data);else if(w.isData3DTexture)ae?(J&&t.texStorage3D(r.TEXTURE_3D,_e,K,V.width,V.height,V.depth),Se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Q,$,V.data)):t.texImage3D(r.TEXTURE_3D,0,K,V.width,V.height,V.depth,0,Q,$,V.data);else if(w.isFramebufferTexture){if(J)if(ae)t.texStorage2D(r.TEXTURE_2D,_e,K,V.width,V.height);else{let xe=V.width,Ce=V.height;for(let Ne=0;Ne<_e;Ne++)t.texImage2D(r.TEXTURE_2D,Ne,K,xe,Ce,0,Q,$,null),xe>>=1,Ce>>=1}}else if(j.length>0){if(ae&&J){let xe=me(j[0]);t.texStorage2D(r.TEXTURE_2D,_e,K,xe.width,xe.height)}for(let xe=0,Ce=j.length;xe<Ce;xe++)ee=j[xe],ae?Se&&t.texSubImage2D(r.TEXTURE_2D,xe,0,0,Q,$,ee):t.texImage2D(r.TEXTURE_2D,xe,K,Q,$,ee);w.generateMipmaps=!1}else if(ae){if(J){let xe=me(V);t.texStorage2D(r.TEXTURE_2D,_e,K,xe.width,xe.height)}Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Q,$,V)}else t.texImage2D(r.TEXTURE_2D,0,K,Q,$,V);m(w)&&_(O),E.__version=F.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function se(A,w,B,O,U,F){let E=s.convert(B.format,B.colorSpace),P=s.convert(B.type),z=x(B.internalFormat,E,P,B.colorSpace),ie=n.get(w),V=n.get(B);if(V.__renderTarget=w,!ie.__hasExternalTextures){let Q=Math.max(1,w.width>>F),$=Math.max(1,w.height>>F);U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?t.texImage3D(U,F,z,Q,$,w.depth,0,E,P,null):t.texImage2D(U,F,z,Q,$,0,E,P,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),ue(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,O,U,V.__webglTexture,0,le(w)):(U===r.TEXTURE_2D||U>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,O,U,V.__webglTexture,F),t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(A,w,B){if(r.bindRenderbuffer(r.RENDERBUFFER,A),w.depthBuffer){let O=w.depthTexture,U=O&&O.isDepthTexture?O.type:null,F=y(w.stencilBuffer,U),E=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,P=le(w);ue(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,F,w.width,w.height):B?r.renderbufferStorageMultisample(r.RENDERBUFFER,P,F,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,F,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,E,r.RENDERBUFFER,A)}else{let O=w.textures;for(let U=0;U<O.length;U++){let F=O[U],E=s.convert(F.format,F.colorSpace),P=s.convert(F.type),z=x(F.internalFormat,E,P,F.colorSpace),ie=le(w);B&&ue(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,z,w.width,w.height):ue(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,z,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,z,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ce(A){let w=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let O=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),O){let U=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,O.removeEventListener("dispose",U)};O.addEventListener("dispose",U),w.__depthDisposeCallback=U}w.__boundDepthTexture=O}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");(function(O,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let F=n.get(U.depthTexture);F.__renderTarget=U,F.__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),N(U.depthTexture,0);let E=F.__webglTexture,P=le(U);if(U.depthTexture.format===Es)ue(U)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,E,0,P):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,E,0);else{if(U.depthTexture.format!==Br)throw new Error("Unknown depthTexture format");ue(U)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,E,0,P):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,E,0)}})(w.__webglFramebuffer,A)}else if(B){w.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[O]),w.__webglDepthbuffer[O]===void 0)w.__webglDepthbuffer[O]=r.createRenderbuffer(),te(w.__webglDepthbuffer[O],A,!1);else{let U=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,F=w.__webglDepthbuffer[O];r.bindRenderbuffer(r.RENDERBUFFER,F),r.framebufferRenderbuffer(r.FRAMEBUFFER,U,r.RENDERBUFFER,F)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),te(w.__webglDepthbuffer,A,!1);else{let O=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,U=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,U),r.framebufferRenderbuffer(r.FRAMEBUFFER,O,r.RENDERBUFFER,U)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let he=[],Z=[];function le(A){return Math.min(i.maxSamples,A.samples)}function ue(A){let w=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function de(A,w){let B=A.colorSpace,O=A.format,U=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==Tt&&B!==wi&&(qe.getTransfer(B)===tt?O===on&&U===Ii||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),w}function me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=function(){let A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A},this.resetTextureUnits=function(){I=0},this.setTexture2D=N,this.setTexture2DArray=function(A,w){let B=n.get(A);A.version>0&&B.__version!==A.version?X(B,A,w):t.bindTexture(r.TEXTURE_2D_ARRAY,B.__webglTexture,r.TEXTURE0+w)},this.setTexture3D=function(A,w){let B=n.get(A);A.version>0&&B.__version!==A.version?X(B,A,w):t.bindTexture(r.TEXTURE_3D,B.__webglTexture,r.TEXTURE0+w)},this.setTextureCube=function(A,w){let B=n.get(A);A.version>0&&B.__version!==A.version?(function(O,U,F){if(U.image.length!==6)return;let E=W(O,U),P=U.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+F);let z=n.get(P);if(P.version!==z.__version||E===!0){t.activeTexture(r.TEXTURE0+F);let ie=qe.getPrimaries(qe.workingColorSpace),V=U.colorSpace===wi?null:qe.getPrimaries(U.colorSpace),Q=U.colorSpace===wi||ie===V?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,U.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,U.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let $=U.isCompressedTexture||U.image[0].isCompressedTexture,ee=U.image[0]&&U.image[0].isDataTexture,K=[];for(let ye=0;ye<6;ye++)K[ye]=$||ee?ee?U.image[ye].image:U.image[ye]:g(U.image[ye],!0,i.maxCubemapSize),K[ye]=de(U,K[ye]);let j=K[0],ae=s.convert(U.format,U.colorSpace),J=s.convert(U.type),Se=x(U.internalFormat,ae,J,U.colorSpace),_e=U.isVideoTexture!==!0,xe=z.__version===void 0||E===!0,Ce=P.dataReady,Ne,Xe=b(U,j);if(L(r.TEXTURE_CUBE_MAP,U),$){_e&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Xe,Se,j.width,j.height);for(let ye=0;ye<6;ye++){Ne=K[ye].mipmaps;for(let Pe=0;Pe<Ne.length;Pe++){let Be=Ne[Pe];U.format!==on?ae!==null?_e?Ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe,0,0,Be.width,Be.height,ae,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe,Se,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe,0,0,Be.width,Be.height,ae,J,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe,Se,Be.width,Be.height,0,ae,J,Be.data)}}}else{if(Ne=U.mipmaps,_e&&xe){Ne.length>0&&Xe++;let ye=me(K[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Xe,Se,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(ee){_e?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,K[ye].width,K[ye].height,ae,J,K[ye].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Se,K[ye].width,K[ye].height,0,ae,J,K[ye].data);for(let Pe=0;Pe<Ne.length;Pe++){let Be=Ne[Pe].image[ye].image;_e?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe+1,0,0,Be.width,Be.height,ae,J,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe+1,Se,Be.width,Be.height,0,ae,J,Be.data)}}else{_e?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ae,J,K[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Se,ae,J,K[ye]);for(let Pe=0;Pe<Ne.length;Pe++){let Be=Ne[Pe];_e?Ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe+1,0,0,ae,J,Be.image[ye]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Pe+1,Se,ae,J,Be.image[ye])}}}m(U)&&_(r.TEXTURE_CUBE_MAP),z.__version=P.version,U.onUpdate&&U.onUpdate(U)}O.__version=U.version})(B,A,w):t.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+w)},this.rebindTextures=function(A,w,B){let O=n.get(A);w!==void 0&&se(O.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),B!==void 0&&ce(A)},this.setupRenderTarget=function(A){let w=A.texture,B=n.get(A),O=n.get(w);A.addEventListener("dispose",C);let U=A.textures,F=A.isWebGLCubeRenderTarget===!0,E=U.length>1;if(E||(O.__webglTexture===void 0&&(O.__webglTexture=r.createTexture()),O.__version=w.version,a.memory.textures++),F){B.__webglFramebuffer=[];for(let P=0;P<6;P++)if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer[P]=[];for(let z=0;z<w.mipmaps.length;z++)B.__webglFramebuffer[P][z]=r.createFramebuffer()}else B.__webglFramebuffer[P]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){B.__webglFramebuffer=[];for(let P=0;P<w.mipmaps.length;P++)B.__webglFramebuffer[P]=r.createFramebuffer()}else B.__webglFramebuffer=r.createFramebuffer();if(E)for(let P=0,z=U.length;P<z;P++){let ie=n.get(U[P]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&ue(A)===!1){B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let P=0;P<U.length;P++){let z=U[P];B.__webglColorRenderbuffer[P]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,B.__webglColorRenderbuffer[P]);let ie=s.convert(z.format,z.colorSpace),V=s.convert(z.type),Q=x(z.internalFormat,ie,V,z.colorSpace,A.isXRRenderTarget===!0),$=le(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,$,Q,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+P,r.RENDERBUFFER,B.__webglColorRenderbuffer[P])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),te(B.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(F){t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture),L(r.TEXTURE_CUBE_MAP,w);for(let P=0;P<6;P++)if(w.mipmaps&&w.mipmaps.length>0)for(let z=0;z<w.mipmaps.length;z++)se(B.__webglFramebuffer[P][z],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,z);else se(B.__webglFramebuffer[P],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+P,0);m(w)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(E){for(let P=0,z=U.length;P<z;P++){let ie=U[P],V=n.get(ie);t.bindTexture(r.TEXTURE_2D,V.__webglTexture),L(r.TEXTURE_2D,ie),se(B.__webglFramebuffer,A,ie,r.COLOR_ATTACHMENT0+P,r.TEXTURE_2D,0),m(ie)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let P=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(P=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(P,O.__webglTexture),L(P,w),w.mipmaps&&w.mipmaps.length>0)for(let z=0;z<w.mipmaps.length;z++)se(B.__webglFramebuffer[z],A,w,r.COLOR_ATTACHMENT0,P,z);else se(B.__webglFramebuffer,A,w,r.COLOR_ATTACHMENT0,P,0);m(w)&&_(P),t.unbindTexture()}A.depthBuffer&&ce(A)},this.updateRenderTargetMipmap=function(A){let w=A.textures;for(let B=0,O=w.length;B<O;B++){let U=w[B];if(m(U)){let F=v(A),E=n.get(U).__webglTexture;t.bindTexture(F,E),_(F),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(ue(A)===!1){let w=A.textures,B=A.width,O=A.height,U=r.COLOR_BUFFER_BIT,F=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,E=n.get(A),P=w.length>1;if(P)for(let z=0;z<w.length;z++)t.bindFramebuffer(r.FRAMEBUFFER,E.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,E.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,E.__webglFramebuffer);for(let z=0;z<w.length;z++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(U|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(U|=r.STENCIL_BUFFER_BIT)),P){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,E.__webglColorRenderbuffer[z]);let ie=n.get(w[z]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,B,O,0,0,B,O,U,r.NEAREST),l===!0&&(he.length=0,Z.length=0,he.push(r.COLOR_ATTACHMENT0+z),A.depthBuffer&&A.resolveDepthBuffer===!1&&(he.push(F),Z.push(F),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Z)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),P)for(let z=0;z<w.length;z++){t.bindFramebuffer(r.FRAMEBUFFER,E.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.RENDERBUFFER,E.__webglColorRenderbuffer[z]);let ie=n.get(w[z]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+z,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,E.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let w=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}},this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ue}function ng(r,e){return{convert:function(t,n=""){let i,s=qe.getTransfer(n);if(t===Ii)return r.UNSIGNED_BYTE;if(t===Hc)return r.UNSIGNED_SHORT_4_4_4_4;if(t===kc)return r.UNSIGNED_SHORT_5_5_5_1;if(t===vd)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===md)return r.BYTE;if(t===gd)return r.SHORT;if(t===Ss)return r.UNSIGNED_SHORT;if(t===zc)return r.INT;if(t===tr)return r.UNSIGNED_INT;if(t===en)return r.FLOAT;if(t===nn)return r.HALF_FLOAT;if(t===_d)return r.ALPHA;if(t===xd)return r.RGB;if(t===on)return r.RGBA;if(t===yd)return r.LUMINANCE;if(t===Md)return r.LUMINANCE_ALPHA;if(t===Es)return r.DEPTH_COMPONENT;if(t===Br)return r.DEPTH_STENCIL;if(t===Vc)return r.RED;if(t===Gc)return r.RED_INTEGER;if(t===bd)return r.RG;if(t===Wc)return r.RG_INTEGER;if(t===Xc)return r.RGBA_INTEGER;if(t===Pa||t===La||t===Ua||t===Na)if(s===tt){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Pa)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===La)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ua)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Na)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Pa)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===La)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ua)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Na)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===vl||t===_l||t===xl||t===yl){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===vl)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===_l)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===xl)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===yl)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Ml||t===bl||t===Sl){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===Ml||t===bl)return s===tt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===Sl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===El||t===wl||t===Tl||t===Al||t===Rl||t===Cl||t===Il||t===Pl||t===Ll||t===Ul||t===Nl||t===Dl||t===Ol||t===Fl){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===El)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===wl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Tl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Al)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Rl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Cl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Il)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Pl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Ll)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Ul)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Nl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Dl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Ol)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Fl)return s===tt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Da||t===Bl||t===zl){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Da)return s===tt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Bl)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===zl)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Sd||t===Hl||t===kl||t===Vl){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Da)return i.COMPRESSED_RED_RGTC1_EXT;if(t===Hl)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===kl)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Vl)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Fr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var rc=class extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},tn=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ig={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Dt;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qn({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ze(new Yn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ac=class extends Pi{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null,g=new sc,m=t.getContextAttributes(),_=null,v=null,x=[],y=[],b=new fe,S=null,C=new Ct;C.viewport=new Ke;let R=new Ct;R.viewport=new Ke;let I=[C,R],N=new rc,D=null,H=null;function k(Z){let le=y.indexOf(Z.inputSource);if(le===-1)return;let ue=x[le];ue!==void 0&&(ue.update(Z.inputSource,Z.frame,c||a),ue.dispatchEvent({type:Z.type,data:Z.inputSource}))}function L(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",L),i.removeEventListener("inputsourceschange",W);for(let Z=0;Z<x.length;Z++){let le=y[Z];le!==null&&(y[Z]=null,x[Z].disconnect(le))}D=null,H=null,g.reset(),e.setRenderTarget(_),p=null,d=null,u=null,i=null,v=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}function W(Z){for(let le=0;le<Z.removed.length;le++){let ue=Z.removed[le],de=y.indexOf(ue);de>=0&&(y[de]=null,x[de].disconnect(ue))}for(let le=0;le<Z.added.length;le++){let ue=Z.added[le],de=y.indexOf(ue);if(de===-1){for(let A=0;A<x.length;A++){if(A>=y.length){y.push(ue),de=A;break}if(y[A]===null){y[A]=ue,de=A;break}}if(de===-1)break}let me=x[de];me&&me.connect(ue)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=x[Z];return le===void 0&&(le=new _s,x[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=x[Z];return le===void 0&&(le=new _s,x[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=x[Z];return le===void 0&&(le=new _s,x[Z]=le),le.getHandSpace()},this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",L),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(b),i.renderState.layers===void 0){let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new si(p.framebufferWidth,p.framebufferHeight,{format:on,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,ue=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?Br:Es,ue=m.stencil?Fr:tr);let me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(me),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new si(d.textureWidth,d.textureHeight,{format:on,type:Ii,depthTexture:new Va(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),he.setContext(i),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let X=new M,se=new M;function te(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let le=Z.near,ue=Z.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),N.near=R.near=C.near=le,N.far=R.far=C.far=ue,D===N.near&&H===N.far||(i.updateRenderState({depthNear:N.near,depthFar:N.far}),D=N.near,H=N.far),C.layers.mask=2|Z.layers.mask,R.layers.mask=4|Z.layers.mask,N.layers.mask=C.layers.mask|R.layers.mask;let de=Z.parent,me=N.cameras;te(N,de);for(let A=0;A<me.length;A++)te(me[A],de);me.length===2?(function(A,w,B){X.setFromMatrixPosition(w.matrixWorld),se.setFromMatrixPosition(B.matrixWorld);let O=X.distanceTo(se),U=w.projectionMatrix.elements,F=B.projectionMatrix.elements,E=U[14]/(U[10]-1),P=U[14]/(U[10]+1),z=(U[9]+1)/U[5],ie=(U[9]-1)/U[5],V=(U[8]-1)/U[0],Q=(F[8]+1)/F[0],$=E*V,ee=E*Q,K=O/(-V+Q),j=K*-V;if(w.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(j),A.translateZ(K),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),U[10]===-1)A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let ae=E+K,J=P+K,Se=$-j,_e=ee+(O-j),xe=z*P/J*ae,Ce=ie*P/J*ae;A.projectionMatrix.makePerspective(Se,_e,xe,Ce,ae,J),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}})(N,C,R):N.projectionMatrix.copy(C.projectionMatrix),(function(A,w,B){B===null?A.matrix.copy(w.matrixWorld):(A.matrix.copy(B.matrixWorld),A.matrix.invert(),A.matrix.multiply(w.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*Vr*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(Z,N,de)},this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||p!==null)return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)};let ce=null,he=new Rd;he.setAnimationLoop((function(Z,le){if(h=le.getViewerPose(c||a),f=le,h!==null){let ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;ue.length!==N.cameras.length&&(N.cameras.length=0,de=!0);for(let A=0;A<ue.length;A++){let w=ue[A],B=null;if(p!==null)B=p.getViewport(w);else{let U=u.getViewSubImage(d,w);B=U.viewport,A===0&&(e.setRenderTargetTextures(v,U.colorTexture,d.ignoreDepthValues?void 0:U.depthStencilTexture),e.setRenderTarget(v))}let O=I[A];O===void 0&&(O=new Ct,O.layers.enable(A),O.viewport=new Ke,I[A]=O),O.matrix.fromArray(w.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(w.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(B.x,B.y,B.width,B.height),A===0&&(N.matrix.copy(O.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),de===!0&&N.cameras.push(O)}let me=i.enabledFeatures;if(me&&me.includes("depth-sensing")){let A=u.getDepthInformation(ue[0]);A&&A.isValid&&A.texture&&g.init(e,A,i.renderState)}}for(let ue=0;ue<x.length;ue++){let de=y[ue],me=x[ue];de!==null&&me!==void 0&&me.update(de,le,c||a)}ce&&ce(Z,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),f=null})),this.setAnimationLoop=function(Z){ce=Z},this.dispose=function(){}}},$i=new Xt,rg=new Ie;function sg(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===1&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===1&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,l=a.envMapRotation;o&&(i.envMap.value=o,$i.copy(l),$i.x*=-1,$i.y*=-1,$i.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),i.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler($i)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Ad(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,l){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(c,h){h.gradientMap&&(c.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(c,h){c.specular.value.copy(h.specular),c.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(c,h){c.metalness.value=h.metalness,h.metalnessMap&&(c.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,c.metalnessMapTransform)),c.roughness.value=h.roughness,h.roughnessMap&&(c.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,c.roughnessMapTransform)),h.envMap&&(c.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(c,h,u){c.ior.value=h.ior,h.sheen>0&&(c.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),c.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(c.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,c.sheenColorMapTransform)),h.sheenRoughnessMap&&(c.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,c.sheenRoughnessMapTransform))),h.clearcoat>0&&(c.clearcoat.value=h.clearcoat,c.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(c.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,c.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(c.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,c.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(c.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,c.clearcoatNormalMapTransform),c.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&c.clearcoatNormalScale.value.negate())),h.dispersion>0&&(c.dispersion.value=h.dispersion),h.iridescence>0&&(c.iridescence.value=h.iridescence,c.iridescenceIOR.value=h.iridescenceIOR,c.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],c.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(c.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,c.iridescenceMapTransform)),h.iridescenceThicknessMap&&(c.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,c.iridescenceThicknessMapTransform))),h.transmission>0&&(c.transmission.value=h.transmission,c.transmissionSamplerMap.value=u.texture,c.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(c.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,c.transmissionMapTransform)),c.thickness.value=h.thickness,h.thicknessMap&&(c.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,c.thicknessMapTransform)),c.attenuationDistance.value=h.attenuationDistance,c.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(c.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(c.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,c.anisotropyMapTransform))),c.specularIntensity.value=h.specularIntensity,c.specularColor.value.copy(h.specularColor),h.specularColorMap&&(c.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,c.specularColorMapTransform)),h.specularIntensityMap&&(c.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,c.specularIntensityMapTransform))})(i,s,l)):s.isMeshMatcapMaterial?(n(i,s),(function(c,h){h.matcap&&(c.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(c,h){let u=e.get(h).light;c.referencePosition.value.setFromMatrixPosition(u.matrixWorld),c.nearDistance.value=u.shadow.camera.near,c.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(c,h){c.dashSize.value=h.dashSize,c.totalSize.value=h.dashSize+h.gapSize,c.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(c,h,u,d){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.size.value=h.size*u,c.scale.value=.5*d,h.map&&(c.map.value=h.map,t(h.map,c.uvTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(c,h){c.diffuse.value.copy(h.color),c.opacity.value=h.opacity,c.rotation.value=h.rotation,h.map&&(c.map.value=h.map,t(h.map,c.mapTransform)),h.alphaMap&&(c.alphaMap.value=h.alphaMap,t(h.alphaMap,c.alphaMapTransform)),h.alphaTest>0&&(c.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function ag(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(u,d,p,f){let g=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let _=f[m];if(typeof g=="number"||typeof g=="boolean"){if(_!==g)return f[m]=g,!0}else if(_.equals(g)===!1)return _.copy(g),!0}return!1}function c(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let _=m.uniforms,v=0,x=16;for(let b=0,S=_.length;b<S;b++){let C=Array.isArray(_[b])?_[b]:[_[b]];for(let R=0,I=C.length;R<I;R++){let N=C[R],D=Array.isArray(N.value)?N.value:[N.value];for(let H=0,k=D.length;H<k;H++){let L=c(D[H]),W=v%x,X=W%L.boundary,se=W+X;v+=X,se!==0&&x-se<L.storage&&(v+=x-se),N.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=L.storage}}}let y=v%x;y>0&&(v+=x-y),m.__size=v,m.__cache={}})(u),p=(function(m){let _=(function(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=_;let v=r.createBuffer(),x=m.__size,y=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,x,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&((function(m){let _=i[m.id],v=m.uniforms,x=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let y=0,b=v.length;y<b;y++){let S=Array.isArray(v[y])?v[y]:[v[y]];for(let C=0,R=S.length;C<R;C++){let I=S[C];if(l(I,y,C,x)===!0){let N=I.__offset,D=Array.isArray(I.value)?I.value:[I.value],H=0;for(let k=0;k<D.length;k++){let L=D[k],W=c(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,N+H,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):(L.toArray(I.__data,H),H+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Ga=class{constructor(e={}){let{canvas:t=ff(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),g=new Int32Array(4),m=null,_=null,v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=at,this.toneMapping=0,this.toneMappingExposure=1;let y=this,b=!1,S=0,C=0,R=null,I=-1,N=null,D=new Ke,H=new Ke,k=null,L=new Ee(0),W=0,X=t.width,se=t.height,te=1,ce=null,he=null,Z=new Ke(0,0,X,se),le=new Ke(0,0,X,se),ue=!1,de=new Xr,me=!1,A=!1,w=new Ie,B=new Ie,O=new M,U=new Ke,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},E=!1;function P(){return R===null?te:1}let z,ie,V,Q,$,ee,K,j,ae,J,Se,_e,xe,Ce,Ne,Xe,ye,Pe,Be,Ft,dn,et,gt,rt,G=n;function lt(T,q){return t.getContext(T,q)}try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",an,!1),t.addEventListener("webglcontextrestored",qt,!1),t.addEventListener("webglcontextcreationerror",ut,!1),G===null){let q="webgl2";if(G=lt(q,T),G===null)throw lt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}function ct(){z=new kf(G),z.init(),et=new ng(G,z),ie=new Ff(G,z,e,et),V=new eg(G,z),ie.reverseDepthBuffer&&d&&V.buffers.depth.setReversed(!0),Q=new Wf(G),$=new Wm,ee=new tg(G,z,V,$,ie,et,Q),K=new zf(y),j=new Hf(y),ae=new Lf(G),gt=new Df(G,ae),J=new Vf(G,ae,Q,gt),Se=new jf(G,J,ae,Q),Be=new Xf(G,ie,ee),Xe=new Bf($),_e=new Gm(y,K,j,z,ie,gt,Xe),xe=new sg(y,$),Ce=new jm,Ne=new Jm(z),Pe=new Nf(y,K,j,V,Se,p,l),ye=new $m(y,Se,ie),rt=new ag(G,Q,ie,V),Ft=new Of(G,z,Q),dn=new Gf(G,z,Q),Q.programs=_e.programs,y.capabilities=ie,y.extensions=z,y.properties=$,y.renderLists=Ce,y.shadowMap=ye,y.state=V,y.info=Q}ct();let $e=new ac(y,G);function an(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function qt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let T=Q.autoReset,q=ye.enabled,ne=ye.autoUpdate,oe=ye.needsUpdate,Y=ye.type;ct(),Q.autoReset=T,ye.enabled=q,ye.autoUpdate=ne,ye.needsUpdate=oe,ye.type=Y}function ut(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){let q=T.target;q.removeEventListener("dispose",dt),(function(ne){(function(oe){let Y=$.get(oe).programs;Y!==void 0&&(Y.forEach((function(pe){_e.releaseProgram(pe)})),oe.isShaderMaterial&&_e.releaseShaderCache(oe))})(ne),$.remove(ne)})(q)}function At(T,q,ne){T.transparent===!0&&T.side===2&&T.forceSinglePass===!1?(T.side=1,T.needsUpdate=!0,pt(T,q,ne),T.side=0,T.needsUpdate=!0,pt(T,q,ne),T.side=2):pt(T,q,ne)}this.xr=$e,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=z.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=z.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(X,se,!1))},this.getSize=function(T){return T.set(X,se)},this.setSize=function(T,q,ne=!0){$e.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(X=T,se=q,t.width=Math.floor(T*te),t.height=Math.floor(q*te),ne===!0&&(t.style.width=T+"px",t.style.height=q+"px"),this.setViewport(0,0,T,q))},this.getDrawingBufferSize=function(T){return T.set(X*te,se*te).floor()},this.setDrawingBufferSize=function(T,q,ne){X=T,se=q,te=ne,t.width=Math.floor(T*ne),t.height=Math.floor(q*ne),this.setViewport(0,0,T,q)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,q,ne,oe){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,q,ne,oe),V.viewport(D.copy(Z).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(le)},this.setScissor=function(T,q,ne,oe){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,q,ne,oe),V.scissor(H.copy(le).multiplyScalar(te).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){V.setScissorTest(ue=T)},this.setOpaqueSort=function(T){ce=T},this.setTransparentSort=function(T){he=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(T=!0,q=!0,ne=!0){let oe=0;if(T){let Y=!1;if(R!==null){let pe=R.texture.format;Y=pe===Xc||pe===Wc||pe===Gc}if(Y){let pe=R.texture.type,ge=pe===Ii||pe===tr||pe===Ss||pe===Fr||pe===Hc||pe===kc,Me=Pe.getClearColor(),Re=Pe.getClearAlpha(),De=Me.r,Fe=Me.g,Le=Me.b;ge?(f[0]=De,f[1]=Fe,f[2]=Le,f[3]=Re,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=De,g[1]=Fe,g[2]=Le,g[3]=Re,G.clearBufferiv(G.COLOR,0,g))}else oe|=G.COLOR_BUFFER_BIT}q&&(oe|=G.DEPTH_BUFFER_BIT),ne&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",an,!1),t.removeEventListener("webglcontextrestored",qt,!1),t.removeEventListener("webglcontextcreationerror",ut,!1),Ce.dispose(),Ne.dispose(),$.dispose(),K.dispose(),j.dispose(),Se.dispose(),gt.dispose(),rt.dispose(),_e.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",vn),$e.removeEventListener("sessionend",_n),Yt.stop()},this.renderBufferDirect=function(T,q,ne,oe,Y,pe){q===null&&(q=F);let ge=Y.isMesh&&Y.matrixWorld.determinant()<0,Me=(function(Ye,Kt,Bt,ke,Oe){Kt.isScene!==!0&&(Kt=F),ee.resetTextureUnits();let Ln=Kt.fog,wo=ke.isMeshStandardMaterial?Kt.environment:null,is=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Tt,mr=(ke.isMeshStandardMaterial?j:K).get(ke.envMap||wo),To=ke.vertexColors===!0&&!!Bt.attributes.color&&Bt.attributes.color.itemSize===4,Ao=!!Bt.attributes.tangent&&(!!ke.normalMap||ke.anisotropy>0),Ro=!!Bt.morphAttributes.position,vi=!!Bt.morphAttributes.normal,Pp=!!Bt.morphAttributes.color,zh=0;ke.toneMapped&&(R!==null&&R.isXRRenderTarget!==!0||(zh=y.toneMapping));let Hh=Bt.morphAttributes.position||Bt.morphAttributes.normal||Bt.morphAttributes.color,Lp=Hh!==void 0?Hh.length:0,je=$.get(ke),Up=_.state.lights;if(me===!0&&(A===!0||Ye!==N)){let xn=Ye===N&&ke.id===I;Xe.setState(ke,Ye,xn)}let Un=!1;ke.version===je.__version?je.needsLights&&je.lightsStateVersion!==Up.state.version||je.outputColorSpace!==is||Oe.isBatchedMesh&&je.batching===!1?Un=!0:Oe.isBatchedMesh||je.batching!==!0?Oe.isBatchedMesh&&je.batchingColor===!0&&Oe.colorTexture===null||Oe.isBatchedMesh&&je.batchingColor===!1&&Oe.colorTexture!==null||Oe.isInstancedMesh&&je.instancing===!1?Un=!0:Oe.isInstancedMesh||je.instancing!==!0?Oe.isSkinnedMesh&&je.skinning===!1?Un=!0:Oe.isSkinnedMesh||je.skinning!==!0?Oe.isInstancedMesh&&je.instancingColor===!0&&Oe.instanceColor===null||Oe.isInstancedMesh&&je.instancingColor===!1&&Oe.instanceColor!==null||Oe.isInstancedMesh&&je.instancingMorph===!0&&Oe.morphTexture===null||Oe.isInstancedMesh&&je.instancingMorph===!1&&Oe.morphTexture!==null||je.envMap!==mr||ke.fog===!0&&je.fog!==Ln?Un=!0:je.numClippingPlanes===void 0||je.numClippingPlanes===Xe.numPlanes&&je.numIntersection===Xe.numIntersection?(je.vertexAlphas!==To||je.vertexTangents!==Ao||je.morphTargets!==Ro||je.morphNormals!==vi||je.morphColors!==Pp||je.toneMapping!==zh||je.morphTargetsCount!==Lp)&&(Un=!0):Un=!0:Un=!0:Un=!0:Un=!0:(Un=!0,je.__version=ke.version);let Xi=je.currentProgram;Un===!0&&(Xi=pt(ke,Kt,Oe));let kh=!1,rs=!1,Co=!1,yt=Xi.getUniforms(),_i=je.uniforms;if(V.useProgram(Xi.program)&&(kh=!0,rs=!0,Co=!0),ke.id!==I&&(I=ke.id,rs=!0),kh||N!==Ye){V.buffers.depth.getReversed()?(w.copy(Ye.projectionMatrix),(function(ji){let ht=ji.elements;ht[2]=.5*ht[2]+.5*ht[3],ht[6]=.5*ht[6]+.5*ht[7],ht[10]=.5*ht[10]+.5*ht[11],ht[14]=.5*ht[14]+.5*ht[15]})(w),(function(ji){let ht=ji.elements;ht[11]===-1?(ht[10]=-ht[10]-1,ht[14]=-ht[14]):(ht[10]=-ht[10],ht[14]=1-ht[14])})(w),yt.setValue(G,"projectionMatrix",w)):yt.setValue(G,"projectionMatrix",Ye.projectionMatrix),yt.setValue(G,"viewMatrix",Ye.matrixWorldInverse);let xn=yt.map.cameraPosition;xn!==void 0&&xn.setValue(G,O.setFromMatrixPosition(Ye.matrixWorld)),ie.logarithmicDepthBuffer&&yt.setValue(G,"logDepthBufFC",2/(Math.log(Ye.far+1)/Math.LN2)),(ke.isMeshPhongMaterial||ke.isMeshToonMaterial||ke.isMeshLambertMaterial||ke.isMeshBasicMaterial||ke.isMeshStandardMaterial||ke.isShaderMaterial)&&yt.setValue(G,"isOrthographic",Ye.isOrthographicCamera===!0),N!==Ye&&(N=Ye,rs=!0,Co=!0)}if(Oe.isSkinnedMesh){yt.setOptional(G,Oe,"bindMatrix"),yt.setOptional(G,Oe,"bindMatrixInverse");let xn=Oe.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),yt.setValue(G,"boneTexture",xn.boneTexture,ee))}Oe.isBatchedMesh&&(yt.setOptional(G,Oe,"batchingTexture"),yt.setValue(G,"batchingTexture",Oe._matricesTexture,ee),yt.setOptional(G,Oe,"batchingIdTexture"),yt.setValue(G,"batchingIdTexture",Oe._indirectTexture,ee),yt.setOptional(G,Oe,"batchingColorTexture"),Oe._colorsTexture!==null&&yt.setValue(G,"batchingColorTexture",Oe._colorsTexture,ee));let Io=Bt.morphAttributes;Io.position===void 0&&Io.normal===void 0&&Io.color===void 0||Be.update(Oe,Bt,Xi),(rs||je.receiveShadow!==Oe.receiveShadow)&&(je.receiveShadow=Oe.receiveShadow,yt.setValue(G,"receiveShadow",Oe.receiveShadow)),ke.isMeshGouraudMaterial&&ke.envMap!==null&&(_i.envMap.value=mr,_i.flipEnvMap.value=mr.isCubeTexture&&mr.isRenderTargetTexture===!1?-1:1),ke.isMeshStandardMaterial&&ke.envMap===null&&Kt.environment!==null&&(_i.envMapIntensity.value=Kt.environmentIntensity),rs&&(yt.setValue(G,"toneMappingExposure",y.toneMappingExposure),je.needsLights&&(Nn=Co,(Gn=_i).ambientLightColor.needsUpdate=Nn,Gn.lightProbe.needsUpdate=Nn,Gn.directionalLights.needsUpdate=Nn,Gn.directionalLightShadows.needsUpdate=Nn,Gn.pointLights.needsUpdate=Nn,Gn.pointLightShadows.needsUpdate=Nn,Gn.spotLights.needsUpdate=Nn,Gn.spotLightShadows.needsUpdate=Nn,Gn.rectAreaLights.needsUpdate=Nn,Gn.hemisphereLights.needsUpdate=Nn),Ln&&ke.fog===!0&&xe.refreshFogUniforms(_i,Ln),xe.refreshMaterialUniforms(_i,ke,te,se,_.state.transmissionRenderTarget[Ye.id]),Nr.upload(G,kt(je),_i,ee));var Gn,Nn;if(ke.isShaderMaterial&&ke.uniformsNeedUpdate===!0&&(Nr.upload(G,kt(je),_i,ee),ke.uniformsNeedUpdate=!1),ke.isSpriteMaterial&&yt.setValue(G,"center",Oe.center),yt.setValue(G,"modelViewMatrix",Oe.modelViewMatrix),yt.setValue(G,"normalMatrix",Oe.normalMatrix),yt.setValue(G,"modelMatrix",Oe.matrixWorld),ke.isShaderMaterial||ke.isRawShaderMaterial){let xn=ke.uniformsGroups;for(let ji=0,ht=xn.length;ji<ht;ji++){let Vh=xn[ji];rt.update(Vh,Xi),rt.bind(Vh,Xi)}}return Xi})(T,q,ne,oe,Y);V.setMaterial(oe,ge);let Re=ne.index,De=1;if(oe.wireframe===!0){if(Re=J.getWireframeAttribute(ne),Re===void 0)return;De=2}let Fe=ne.drawRange,Le=ne.attributes.position,Ve=Fe.start*De,vt=(Fe.start+Fe.count)*De;pe!==null&&(Ve=Math.max(Ve,pe.start*De),vt=Math.min(vt,(pe.start+pe.count)*De)),Re!==null?(Ve=Math.max(Ve,0),vt=Math.min(vt,Re.count)):Le!=null&&(Ve=Math.max(Ve,0),vt=Math.min(vt,Le.count));let nt=vt-Ve;if(nt<0||nt===1/0)return;let Rt;gt.setup(Y,oe,Me,ne,Re);let st=Ft;if(Re!==null&&(Rt=ae.get(Re),st=dn,st.setIndex(Rt)),Y.isMesh)oe.wireframe===!0?(V.setLineWidth(oe.wireframeLinewidth*P()),st.setMode(G.LINES)):st.setMode(G.TRIANGLES);else if(Y.isLine){let Ye=oe.linewidth;Ye===void 0&&(Ye=1),V.setLineWidth(Ye*P()),Y.isLineSegments?st.setMode(G.LINES):Y.isLineLoop?st.setMode(G.LINE_LOOP):st.setMode(G.LINE_STRIP)}else Y.isPoints?st.setMode(G.POINTS):Y.isSprite&&st.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)st.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(z.get("WEBGL_multi_draw"))st.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Ye=Y._multiDrawStarts,Kt=Y._multiDrawCounts,Bt=Y._multiDrawCount,ke=Re?ae.get(Re).bytesPerElement:1,Oe=$.get(oe).currentProgram.getUniforms();for(let Ln=0;Ln<Bt;Ln++)Oe.setValue(G,"_gl_DrawID",Ln),st.render(Ye[Ln]/ke,Kt[Ln])}else if(Y.isInstancedMesh)st.renderInstances(Ve,nt,Y.count);else if(ne.isInstancedBufferGeometry){let Ye=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Kt=Math.min(ne.instanceCount,Ye);st.renderInstances(Ve,nt,Kt)}else st.render(Ve,nt)},this.compile=function(T,q,ne=null){ne===null&&(ne=T),_=Ne.get(ne),_.init(q),x.push(_),ne.traverseVisible((function(Y){Y.isLight&&Y.layers.test(q.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))})),T!==ne&&T.traverseVisible((function(Y){Y.isLight&&Y.layers.test(q.layers)&&(_.pushLight(Y),Y.castShadow&&_.pushShadow(Y))})),_.setupLights();let oe=new Set;return T.traverse((function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let pe=Y.material;if(pe)if(Array.isArray(pe))for(let ge=0;ge<pe.length;ge++){let Me=pe[ge];At(Me,ne,Y),oe.add(Me)}else At(pe,ne,Y),oe.add(pe)})),x.pop(),_=null,oe},this.compileAsync=function(T,q,ne=null){let oe=this.compile(T,q,ne);return new Promise((Y=>{function pe(){oe.forEach((function(ge){$.get(ge).currentProgram.isReady()&&oe.delete(ge)})),oe.size!==0?setTimeout(pe,10):Y(T)}z.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)}))};let Ut=null;function vn(){Yt.stop()}function _n(){Yt.start()}let Yt=new Rd;function kn(T,q,ne,oe){if(T.visible===!1)return;if(T.layers.test(q.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(q);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||de.intersectsSprite(T)){oe&&U.setFromMatrixPosition(T.matrixWorld).applyMatrix4(B);let pe=Se.update(T),ge=T.material;ge.visible&&m.push(T,pe,ge,ne,U.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||de.intersectsObject(T))){let pe=Se.update(T),ge=T.material;if(oe&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),U.copy(T.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),U.copy(pe.boundingSphere.center)),U.applyMatrix4(T.matrixWorld).applyMatrix4(B)),Array.isArray(ge)){let Me=pe.groups;for(let Re=0,De=Me.length;Re<De;Re++){let Fe=Me[Re],Le=ge[Fe.materialIndex];Le&&Le.visible&&m.push(T,pe,Le,ne,U.z,Fe)}}else ge.visible&&m.push(T,pe,ge,ne,U.z,null)}}let Y=T.children;for(let pe=0,ge=Y.length;pe<ge;pe++)kn(Y[pe],q,ne,oe)}function Vn(T,q,ne,oe){let Y=T.opaque,pe=T.transmissive,ge=T.transparent;_.setupLightsView(ne),me===!0&&Xe.setGlobalState(y.clippingPlanes,ne),oe&&V.viewport(D.copy(oe)),Y.length>0&&Pn(Y,q,ne),pe.length>0&&Pn(pe,q,ne),ge.length>0&&Pn(ge,q,ne),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Zt(T,q,ne,oe){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new si(1,1,{generateMipmaps:!0,type:z.has("EXT_color_buffer_half_float")||z.has("EXT_color_buffer_float")?nn:Ii,minFilter:Xn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));let Y=_.state.transmissionRenderTarget[oe.id],pe=oe.viewport||D;Y.setSize(pe.z,pe.w);let ge=y.getRenderTarget();y.setRenderTarget(Y),y.getClearColor(L),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),E&&Pe.render(ne);let Me=y.toneMapping;y.toneMapping=0;let Re=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),me===!0&&Xe.setGlobalState(y.clippingPlanes,oe),Pn(T,ne,oe),ee.updateMultisampleRenderTarget(Y),ee.updateRenderTargetMipmap(Y),z.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Fe=0,Le=q.length;Fe<Le;Fe++){let Ve=q[Fe],vt=Ve.object,nt=Ve.geometry,Rt=Ve.material,st=Ve.group;if(Rt.side===2&&vt.layers.test(oe.layers)){let Ye=Rt.side;Rt.side=1,Rt.needsUpdate=!0,pn(vt,ne,oe,nt,Rt,st),Rt.side=Ye,Rt.needsUpdate=!0,De=!0}}De===!0&&(ee.updateMultisampleRenderTarget(Y),ee.updateRenderTargetMipmap(Y))}y.setRenderTarget(ge),y.setClearColor(L,W),Re!==void 0&&(oe.viewport=Re),y.toneMapping=Me}function Pn(T,q,ne){let oe=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,pe=T.length;Y<pe;Y++){let ge=T[Y],Me=ge.object,Re=ge.geometry,De=oe===null?ge.material:oe,Fe=ge.group;Me.layers.test(ne.layers)&&pn(Me,q,ne,Re,De,Fe)}}function pn(T,q,ne,oe,Y,pe){T.onBeforeRender(y,q,ne,oe,Y,pe),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(y,q,ne,oe,T,pe),Y.transparent===!0&&Y.side===2&&Y.forceSinglePass===!1?(Y.side=1,Y.needsUpdate=!0,y.renderBufferDirect(ne,q,oe,Y,T,pe),Y.side=0,Y.needsUpdate=!0,y.renderBufferDirect(ne,q,oe,Y,T,pe),Y.side=2):y.renderBufferDirect(ne,q,oe,Y,T,pe),T.onAfterRender(y,q,ne,oe,Y,pe)}function pt(T,q,ne){q.isScene!==!0&&(q=F);let oe=$.get(T),Y=_.state.lights,pe=_.state.shadowsArray,ge=Y.state.version,Me=_e.getParameters(T,Y.state,pe,q,ne),Re=_e.getProgramCacheKey(Me),De=oe.programs;oe.environment=T.isMeshStandardMaterial?q.environment:null,oe.fog=q.fog,oe.envMap=(T.isMeshStandardMaterial?j:K).get(T.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&T.envMap===null?q.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",dt),De=new Map,oe.programs=De);let Fe=De.get(Re);if(Fe!==void 0){if(oe.currentProgram===Fe&&oe.lightsStateVersion===ge)return bt(T,Me),Fe}else Me.uniforms=_e.getUniforms(T),T.onBeforeCompile(Me,y),Fe=_e.acquireProgram(Me,Re),De.set(Re,Fe),oe.uniforms=Me.uniforms;let Le=oe.uniforms;return(T.isShaderMaterial||T.isRawShaderMaterial)&&T.clipping!==!0||(Le.clippingPlanes=Xe.uniform),bt(T,Me),oe.needsLights=(function(Ve){return Ve.isMeshLambertMaterial||Ve.isMeshToonMaterial||Ve.isMeshPhongMaterial||Ve.isMeshStandardMaterial||Ve.isShadowMaterial||Ve.isShaderMaterial&&Ve.lights===!0})(T),oe.lightsStateVersion=ge,oe.needsLights&&(Le.ambientLightColor.value=Y.state.ambient,Le.lightProbe.value=Y.state.probe,Le.directionalLights.value=Y.state.directional,Le.directionalLightShadows.value=Y.state.directionalShadow,Le.spotLights.value=Y.state.spot,Le.spotLightShadows.value=Y.state.spotShadow,Le.rectAreaLights.value=Y.state.rectArea,Le.ltc_1.value=Y.state.rectAreaLTC1,Le.ltc_2.value=Y.state.rectAreaLTC2,Le.pointLights.value=Y.state.point,Le.pointLightShadows.value=Y.state.pointShadow,Le.hemisphereLights.value=Y.state.hemi,Le.directionalShadowMap.value=Y.state.directionalShadowMap,Le.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Le.spotShadowMap.value=Y.state.spotShadowMap,Le.spotLightMatrix.value=Y.state.spotLightMatrix,Le.spotLightMap.value=Y.state.spotLightMap,Le.pointShadowMap.value=Y.state.pointShadowMap,Le.pointShadowMatrix.value=Y.state.pointShadowMatrix),oe.currentProgram=Fe,oe.uniformsList=null,Fe}function kt(T){if(T.uniformsList===null){let q=T.currentProgram.getUniforms();T.uniformsList=Nr.seqWithValue(q.seq,T.uniforms)}return T.uniformsList}function bt(T,q){let ne=$.get(T);ne.outputColorSpace=q.outputColorSpace,ne.batching=q.batching,ne.batchingColor=q.batchingColor,ne.instancing=q.instancing,ne.instancingColor=q.instancingColor,ne.instancingMorph=q.instancingMorph,ne.skinning=q.skinning,ne.morphTargets=q.morphTargets,ne.morphNormals=q.morphNormals,ne.morphColors=q.morphColors,ne.morphTargetsCount=q.morphTargetsCount,ne.numClippingPlanes=q.numClippingPlanes,ne.numIntersection=q.numClipIntersection,ne.vertexAlphas=q.vertexAlphas,ne.vertexTangents=q.vertexTangents,ne.toneMapping=q.toneMapping}Yt.setAnimationLoop((function(T){Ut&&Ut(T)})),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(T){Ut=T,$e.setAnimationLoop(T),T===null?Yt.stop():Yt.start()},$e.addEventListener("sessionstart",vn),$e.addEventListener("sessionend",_n),this.render=function(T,q){if(q!==void 0&&q.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&($e.cameraAutoUpdate===!0&&$e.updateCamera(q),q=$e.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,q,R),_=Ne.get(T,x.length),_.init(q),x.push(_),B.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),de.setFromProjectionMatrix(B),A=this.localClippingEnabled,me=Xe.init(this.clippingPlanes,A),m=Ce.get(T,v.length),m.init(),v.push(m),$e.enabled===!0&&$e.isPresenting===!0){let pe=y.xr.getDepthSensingMesh();pe!==null&&kn(pe,q,-1/0,y.sortObjects)}kn(T,q,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ce,he),E=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,E&&Pe.addToRenderList(m,T),this.info.render.frame++,me===!0&&Xe.beginShadows();let ne=_.state.shadowsArray;ye.render(ne,T,q),me===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=m.opaque,Y=m.transmissive;if(_.setupLights(),q.isArrayCamera){let pe=q.cameras;if(Y.length>0)for(let ge=0,Me=pe.length;ge<Me;ge++)Zt(oe,Y,T,pe[ge]);E&&Pe.render(T);for(let ge=0,Me=pe.length;ge<Me;ge++){let Re=pe[ge];Vn(m,T,Re,Re.viewport)}}else Y.length>0&&Zt(oe,Y,T,q),E&&Pe.render(T),Vn(m,T,q);R!==null&&(ee.updateMultisampleRenderTarget(R),ee.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,q),gt.resetDefaultState(),I=-1,N=null,x.pop(),x.length>0?(_=x[x.length-1],me===!0&&Xe.setGlobalState(y.clippingPlanes,_.state.camera)):_=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,q,ne){$.get(T.texture).__webglTexture=q,$.get(T.depthTexture).__webglTexture=ne;let oe=$.get(T);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=ne===void 0,oe.__autoAllocateDepthBuffer||z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,q){let ne=$.get(T);ne.__webglFramebuffer=q,ne.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(T,q=0,ne=0){R=T,S=q,C=ne;let oe=!0,Y=null,pe=!1,ge=!1;if(T){let Me=$.get(T);if(Me.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(G.FRAMEBUFFER,null),oe=!1;else if(Me.__webglFramebuffer===void 0)ee.setupRenderTarget(T);else if(Me.__hasExternalTextures)ee.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Fe=T.depthTexture;if(Me.__boundDepthTexture!==Fe){if(Fe!==null&&$.has(Fe)&&(T.width!==Fe.image.width||T.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(T)}}let Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ge=!0);let De=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Y=Array.isArray(De[q])?De[q][ne]:De[q],pe=!0):Y=T.samples>0&&ee.useMultisampledRTT(T)===!1?$.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?De[ne]:De,D.copy(T.viewport),H.copy(T.scissor),k=T.scissorTest}else D.copy(Z).multiplyScalar(te).floor(),H.copy(le).multiplyScalar(te).floor(),k=ue;if(V.bindFramebuffer(G.FRAMEBUFFER,Y)&&oe&&V.drawBuffers(T,Y),V.viewport(D),V.scissor(H),V.setScissorTest(k),pe){let Me=$.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Me.__webglTexture,ne)}else if(ge){let Me=$.get(T.texture),Re=q||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Me.__webglTexture,ne||0,Re)}I=-1},this.readRenderTargetPixels=function(T,q,ne,oe,Y,pe,ge){if(!T||!T.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){V.bindFramebuffer(G.FRAMEBUFFER,Me);try{let Re=T.texture,De=Re.format,Fe=Re.type;if(!ie.textureFormatReadable(De))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Fe))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");q>=0&&q<=T.width-oe&&ne>=0&&ne<=T.height-Y&&G.readPixels(q,ne,oe,Y,et.convert(De),et.convert(Fe),pe)}finally{let Re=R!==null?$.get(R).__webglFramebuffer:null;V.bindFramebuffer(G.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(T,q,ne,oe,Y,pe,ge){if(!T||!T.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){let Re=T.texture,De=Re.format,Fe=Re.type;if(!ie.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=T.width-oe&&ne>=0&&ne<=T.height-Y){V.bindFramebuffer(G.FRAMEBUFFER,Me);let Le=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Le),G.bufferData(G.PIXEL_PACK_BUFFER,pe.byteLength,G.STREAM_READ),G.readPixels(q,ne,oe,Y,et.convert(De),et.convert(Fe),0);let Ve=R!==null?$.get(R).__webglFramebuffer:null;V.bindFramebuffer(G.FRAMEBUFFER,Ve);let vt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await(function(nt,Rt,st){return new Promise((function(Ye,Kt){setTimeout((function Bt(){switch(nt.clientWaitSync(Rt,nt.SYNC_FLUSH_COMMANDS_BIT,0)){case nt.WAIT_FAILED:Kt();break;case nt.TIMEOUT_EXPIRED:setTimeout(Bt,st);break;default:Ye()}}),st)}))})(G,vt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Le),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,pe),G.deleteBuffer(Le),G.deleteSync(vt),pe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,q=null,ne=0){T.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1]);let oe=Math.pow(2,-ne),Y=Math.floor(T.image.width*oe),pe=Math.floor(T.image.height*oe),ge=q!==null?q.x:0,Me=q!==null?q.y:0;ee.setTexture2D(T,0),G.copyTexSubImage2D(G.TEXTURE_2D,ne,0,0,ge,Me,Y,pe),V.unbindTexture()},this.copyTextureToTexture=function(T,q,ne=null,oe=null,Y=0){let pe,ge,Me,Re,De,Fe,Le,Ve,vt;T.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,T=arguments[1],q=arguments[2],Y=arguments[3]||0,ne=null);let nt=T.isCompressedTexture?T.mipmaps[Y]:T.image;ne!==null?(pe=ne.max.x-ne.min.x,ge=ne.max.y-ne.min.y,Me=ne.isBox3?ne.max.z-ne.min.z:1,Re=ne.min.x,De=ne.min.y,Fe=ne.isBox3?ne.min.z:0):(pe=nt.width,ge=nt.height,Me=nt.depth||1,Re=0,De=0,Fe=0),oe!==null?(Le=oe.x,Ve=oe.y,vt=oe.z):(Le=0,Ve=0,vt=0);let Rt=et.convert(q.format),st=et.convert(q.type),Ye;q.isData3DTexture?(ee.setTexture3D(q,0),Ye=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(ee.setTexture2DArray(q,0),Ye=G.TEXTURE_2D_ARRAY):(ee.setTexture2D(q,0),Ye=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);let Kt=G.getParameter(G.UNPACK_ROW_LENGTH),Bt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ke=G.getParameter(G.UNPACK_SKIP_PIXELS),Oe=G.getParameter(G.UNPACK_SKIP_ROWS),Ln=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,nt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Re),G.pixelStorei(G.UNPACK_SKIP_ROWS,De),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fe);let wo=T.isDataArrayTexture||T.isData3DTexture,is=q.isDataArrayTexture||q.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let mr=$.get(T),To=$.get(q),Ao=$.get(mr.__renderTarget),Ro=$.get(To.__renderTarget);V.bindFramebuffer(G.READ_FRAMEBUFFER,Ao.__webglFramebuffer),V.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let vi=0;vi<Me;vi++)wo&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$.get(T).__webglTexture,Y,Fe+vi),T.isDepthTexture?(is&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,$.get(q).__webglTexture,Y,vt+vi),G.blitFramebuffer(Re,De,pe,ge,Le,Ve,pe,ge,G.DEPTH_BUFFER_BIT,G.NEAREST)):is?G.copyTexSubImage3D(Ye,Y,Le,Ve,vt+vi,Re,De,pe,ge):G.copyTexSubImage2D(Ye,Y,Le,Ve,vt+vi,Re,De,pe,ge);V.bindFramebuffer(G.READ_FRAMEBUFFER,null),V.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else is?T.isDataTexture||T.isData3DTexture?G.texSubImage3D(Ye,Y,Le,Ve,vt,pe,ge,Me,Rt,st,nt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Ye,Y,Le,Ve,vt,pe,ge,Me,Rt,nt.data):G.texSubImage3D(Ye,Y,Le,Ve,vt,pe,ge,Me,Rt,st,nt):T.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Y,Le,Ve,pe,ge,Rt,st,nt.data):T.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Y,Le,Ve,nt.width,nt.height,Rt,nt.data):G.texSubImage2D(G.TEXTURE_2D,Y,Le,Ve,pe,ge,Rt,st,nt);G.pixelStorei(G.UNPACK_ROW_LENGTH,Kt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Bt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ke),G.pixelStorei(G.UNPACK_SKIP_ROWS,Oe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ln),Y===0&&q.generateMipmaps&&G.generateMipmap(Ye),V.unbindTexture()},this.copyTextureToTexture3D=function(T,q,ne=null,oe=null,Y=0){return T.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,oe=arguments[1]||null,T=arguments[2],q=arguments[3],Y=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,q,ne,oe,Y)},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&ee.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ee.setTextureCube(T,0):T.isData3DTexture?ee.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ee.setTexture2DArray(T,0):ee.setTexture2D(T,0),V.unbindTexture()},this.resetState=function(){S=0,C=0,R=null,V.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}};var Wa=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$t=new M,Cs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var X0=new M,j0=new M,q0=new M,Y0=new fe,Z0=new fe,K0=new Ie,J0=new M,$0=new M,Q0=new M,ev=new fe,tv=new fe,nv=new fe;var iv=new M,rv=new M;var zu=new M,Hu=new Ke,ku=new Ke,og=new M,Vu=new Ie,_a=new M,rl=new cn,Gu=new Ie,sl=new nr,Ui=class extends Ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gh,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingBox.expandByPoint(_a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingSphere.expandByPoint(_a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(i),e.ray.intersectsSphere(rl)!==!1&&(Gu.copy(i).invert(),sl.copy(e.ray).applyMatrix4(Gu),this.boundingBox!==null&&sl.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,sl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ke,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Hu.fromBufferAttribute(i.attributes.skinIndex,e),ku.fromBufferAttribute(i.attributes.skinWeight,e),zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=ku.getComponent(s);if(a!==0){let o=Hu.getComponent(s);Vu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(og.copy(zu).applyMatrix4(Vu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ir=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},rr=class extends Dt{constructor(e=null,t=1,n=1,i,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wu=new Ie,lg=new Ie,qr=class r{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:lg;Wu.multiplyMatrices(o,t[s]),Wu.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new rr(t,e,e,on,en);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new ir),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},sr=class extends _t{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cr=new Ie,Xu=new Ie,xa=[],ju=new Wt,cg=new Ie,us=new Ze,ds=new cn,Xa=class extends Ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sr(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),ju.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),ds.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),e.ray.intersectsSphere(ds)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Cr),Xu.multiplyMatrices(n,Cr),us.matrixWorld=Xu,us.raycast(e,xa);for(let a=0,o=xa.length;a<o;a++){let l=xa[a];l.instanceId=s,l.object=this,t.push(l)}xa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sr(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(i*this.count),i,this.count,Vc,en));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var oc=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},sv=new Ie,av=new Ee(1,1,1),ov=new Xr,lv=new Wt,cv=new cn,hv=new M,uv=new M,dv=new M,pv=new oc,fv=new Ze;var Is=class extends hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ja=new M,qa=new M,qu=new Ie,ps=new nr,ya=new cn,al=new M,Yu=new M,Yr=class extends mt{constructor(e=new Je,t=new Is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ja.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ja.distanceTo(qa);e.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=s,e.ray.intersectsSphere(ya)===!1)return;qu.copy(i).invert(),ps.copy(e.ray).applyMatrix4(qu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,g=p-1;f<g;f+=c){let m=h.getX(f),_=h.getX(f+1),v=Ma(this,e,ps,l,m,_);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),g=h.getX(d),m=Ma(this,e,ps,l,f,g);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,g=p-1;f<g;f+=c){let m=Ma(this,e,ps,l,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=Ma(this,e,ps,l,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Ma(r,e,t,n,i,s){let a=r.geometry.attributes.position;if(ja.fromBufferAttribute(a,i),qa.fromBufferAttribute(a,s),t.distanceSqToSegment(ja,qa,al,Yu)>n)return;al.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(al);return o<e.near||o>e.far?void 0:{distance:o,point:Yu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Zu=new M,Ku=new M,Ya=class extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zu.fromBufferAttribute(t,i),Ku.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zu.distanceTo(Ku);e.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Za=class extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ps=class extends hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ju=new Ie,lc=new nr,ba=new cn,Sa=new M,Ka=class extends mt{constructor(e=new Je,t=new Ps){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;Ju.copy(i).invert(),lc.copy(e.ray).applyMatrix4(Ju);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null)for(let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);u<d;u++){let p=c.getX(u);Sa.fromBufferAttribute(h,p),$u(Sa,p,l,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Sa.fromBufferAttribute(h,u),$u(Sa,u,l,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function $u(r,e,t,n,i,s,a){let o=lc.distanceSqToPoint(r);if(o<t){let l=new M;lc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ls=class extends Dt{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,l=0,c=s-1;for(;l<=c;)if(i=Math.floor(l+(c-l)/2),o=n[i]-a,o<0)l=i+1;else{if(!(o>0)){c=i;break}c=i-1}if(i=c,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new fe:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,i=[],s=[],a=[],o=new M,l=new Ie;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Et(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Et(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Us=class extends wn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cc=class extends Us{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function qc(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Ea=new M,ol=new qc,ll=new qc,cl=new qc,Ni=class extends wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,l,c=Math.floor(a),h=a-c;this.closed?c+=c>0?0:(Math.floor(Math.abs(c)/s)+1)*s:h===0&&c===s-1&&(c=s-2,h=1),this.closed||c>0?o=i[(c-1)%s]:(Ea.subVectors(i[0],i[1]).add(i[0]),o=Ea);let u=i[c%s],d=i[(c+1)%s];if(this.closed||c+2<s?l=i[(c+2)%s]:(Ea.subVectors(i[s-1],i[s-2]).add(i[s-1]),l=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(l),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),ol.initNonuniformCatmullRom(o.x,u.x,d.x,l.x,f,g,m),ll.initNonuniformCatmullRom(o.y,u.y,d.y,l.y,f,g,m),cl.initNonuniformCatmullRom(o.z,u.z,d.z,l.z,f,g,m)}else this.curveType==="catmullrom"&&(ol.initCatmullRom(o.x,u.x,d.x,l.x,this.tension),ll.initCatmullRom(o.y,u.y,d.y,l.y,this.tension),cl.initCatmullRom(o.z,u.z,d.z,l.z,this.tension));return n.set(ol.calc(h),ll.calc(h),cl.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qu(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function xs(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function ys(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var Ja=class extends wn{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ys(e,i.x,s.x,a.x,o.x),ys(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},hc=class extends wn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ys(e,i.x,s.x,a.x,o.x),ys(e,i.y,s.y,a.y,o.y),ys(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends wn{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uc=class extends wn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends wn{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(xs(e,i.x,s.x,a.x),xs(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends wn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(xs(e,i.x,s.x,a.x),xs(e,i.y,s.y,a.y),xs(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Qu(o,l.x,c.x,h.x,u.x),Qu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new fe().fromArray(i))}return this}},eo=Object.freeze({__proto__:null,ArcCurve:cc,CatmullRomCurve3:Ni,CubicBezierCurve:Ja,CubicBezierCurve3:hc,EllipseCurve:Us,LineCurve:$a,LineCurve3:uc,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:Zr,SplineCurve:Ns}),dc=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new eo[i.type]().fromJSON(i))}return this}},Ds=class extends dc{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Qa(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Ja(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ns(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){let c=new Us(e,t,n,i,s,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ai=class r extends Je{constructor(e=[new fe(0,-.5),new fe(.5,0),new fe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Et(i,0,2*Math.PI);let s=[],a=[],o=[],l=[],c=[],h=1/t,u=new M,d=new fe,p=new M,f=new M,g=new M,m=0,_=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,p.x=1*_,p.y=-m,p.z=0*_,g.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,p.x=1*_,p.y=-m,p.z=0*_,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),l.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=t;v++){let x=n+v*h*i,y=Math.sin(x),b=Math.cos(x);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*y,u.y=e[S].y,u.z=e[S].x*b,a.push(u.x,u.y,u.z),d.x=v/t,d.y=S/(e.length-1),o.push(d.x,d.y);let C=l[3*S+0]*y,R=l[3*S+1],I=l[3*S+0]*b;c.push(C,R,I)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let y=x+v*e.length,b=y,S=y+e.length,C=y+e.length+1,R=y+1;s.push(b,S,R),s.push(C,R,S)}this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("uv",new be(o,2)),this.setAttribute("normal",new be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},pc=class r extends ai{constructor(e=1,t=1,n=4,i=8){let s=new Ds;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Os=class r extends Je{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new M,h=new fe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new be(a,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zn=class r extends Je{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,g=[],m=n/2,_=0;function v(x){let y=f,b=new fe,S=new M,C=0,R=x===!0?e:t,I=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),f++;let N=f;for(let D=0;D<=i;D++){let H=D/i*l+o,k=Math.cos(H),L=Math.sin(H);S.x=R*L,S.y=m*I,S.z=R*k,u.push(S.x,S.y,S.z),d.push(0,I,0),b.x=.5*k+.5,b.y=.5*L*I+.5,p.push(b.x,b.y),f++}for(let D=0;D<i;D++){let H=y+D,k=N+D;x===!0?h.push(k,k+1,H):h.push(k+1,k,H),C+=3}c.addGroup(_,C,x===!0?1:2),_+=C}(function(){let x=new M,y=new M,b=0,S=(t-e)/n;for(let C=0;C<=s;C++){let R=[],I=C/s,N=I*(t-e)+e;for(let D=0;D<=i;D++){let H=D/i,k=H*l+o,L=Math.sin(k),W=Math.cos(k);y.x=N*L,y.y=-I*n+m,y.z=N*W,u.push(y.x,y.y,y.z),x.set(L,S,W).normalize(),d.push(x.x,x.y,x.z),p.push(H,1-I),R.push(f++)}g.push(R)}for(let C=0;C<i;C++)for(let R=0;R<s;R++){let I=g[R][C],N=g[R+1][C],D=g[R+1][C+1],H=g[R][C+1];(e>0||R!==0)&&(h.push(I,N,H),b+=3),(t>0||R!==s-1)&&(h.push(N,D,H),b+=3)}c.addGroup(_,b,0),_+=b})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},fc=class r extends zn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ar=class r extends Je{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,g){let m=g+1,_=[];for(let v=0;v<=m;v++){_[v]=[];let x=d.clone().lerp(f,v/m),y=p.clone().lerp(f,v/m),b=m-v;for(let S=0;S<=b;S++)_[v][S]=S===0&&v===m?x:x.clone().lerp(y,S/b)}for(let v=0;v<m;v++)for(let x=0;x<2*(m-v)-1;x++){let y=Math.floor(x/2);x%2==0?(l(_[v][y+1]),l(_[v+1][y]),l(_[v][y])):(l(_[v][y+1]),l(_[v+1][y+1]),l(_[v+1][y]))}}function l(d){s.push(d.x,d.y,d.z)}function c(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,g){g<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new M,f=new M,g=new M;for(let m=0;m<t.length;m+=3)c(t[m+0],p),c(t[m+1],f),c(t[m+2],g),o(p,f,g,d)})(i),(function(d){let p=new M;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new M;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let g=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new M,g=new M,m=new M,_=new M,v=new fe,x=new fe,y=new fe;for(let b=0,S=0;b<s.length;b+=9,S+=6){f.set(s[b+0],s[b+1],s[b+2]),g.set(s[b+3],s[b+4],s[b+5]),m.set(s[b+6],s[b+7],s[b+8]),v.set(a[S+0],a[S+1]),x.set(a[S+2],a[S+3]),y.set(a[S+4],a[S+5]),_.copy(f).add(g).add(m).divideScalar(3);let C=u(_);h(v,S+0,f,C),h(x,S+2,g,C),h(y,S+4,m,C)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],_=a[f+4],v=Math.max(g,m,_),x=Math.min(g,m,_);v>.9&&x<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new be(s,3)),this.setAttribute("normal",new be(s.slice(),3)),this.setAttribute("uv",new be(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},mc=class r extends ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},wa=new M,Ta=new M,hl=new M,Aa=new Ti,gc=class extends Je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Lr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<l;f+=3){a?(c[0]=a.getX(f),c[1]=a.getX(f+1),c[2]=a.getX(f+2)):(c[0]=f,c[1]=f+1,c[2]=f+2);let{a:g,b:m,c:_}=Aa;if(g.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),Aa.getNormal(hl),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let x=(v+1)%3,y=u[v],b=u[x],S=Aa[h[v]],C=Aa[h[x]],R=`${y}_${b}`,I=`${b}_${y}`;I in d&&d[I]?(hl.dot(d[I].normal)<=s&&(p.push(S.x,S.y,S.z),p.push(C.x,C.y,C.z)),d[I]=null):R in d||(d[R]={index0:c[v],index1:c[x],normal:hl.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:m}=d[f];wa.fromBufferAttribute(o,g),Ta.fromBufferAttribute(o,m),p.push(wa.x,wa.y,wa.z),p.push(Ta.x,Ta.y,Ta.z)}this.setAttribute("position",new be(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Kr=class extends Ds{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ds().fromJSON(i))}return this}},hg=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=ed(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,p;if(n&&(s=(function(f,g,m,_){let v=[],x,y,b,S,C;for(x=0,y=g.length;x<y;x++)b=g[x]*_,S=x<y-1?g[x+1]*_:f.length,C=ed(f,b,S,_,!1),C===C.next&&(C.steiner=!0),v.push(_g(C));for(v.sort(mg),x=0;x<v.length;x++)m=gg(v[x],m);return m})(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return Fs(s,a,t,o,l,p,0),a};function ed(r,e,t,n,i){let s,a;if(i===(function(o,l,c,h){let u=0;for(let d=l,p=c-h;d<c;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=td(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=td(s,r[s],r[s+1],a);return a&&go(a,a.next)&&(zs(a),a=a.next),a}function or(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!go(n,n.next)&&ft(n.prev,n,n.next)!==0)n=n.next;else{if(zs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Fs(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=vc(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let m,_,v,x,y,b,S,C,R=1;do{for(_=g,g=null,y=null,b=0;_;){for(b++,v=_,S=0,m=0;m<R&&(S++,v=v.nextZ,v);m++);for(C=R;S>0||C>0&&v;)S!==0&&(C===0||!v||_.z<=v.z)?(x=_,_=_.nextZ,S--):(x=v,v=v.nextZ,C--),y?y.nextZ=x:g=x,x.prevZ=y,y=x;_=v}y.nextZ=null,R*=2}while(b>1)})(f)})(r,n,i,s);let o,l,c=r;for(;r.prev!==r.next;)if(o=r.prev,l=r.next,s?dg(r,n,i,s):ug(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),zs(r),r=l.next,c=l.next;else if((r=l)===c){a?a===1?Fs(r=pg(or(r),e,t),e,t,n,i,s,2):a===2&&fg(r,e,t,n,i,s):Fs(or(r),e,t,n,i,s,1);break}}function ug(r){let e=r.prev,t=r,n=r.next;if(ft(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<l?o<c?o:c:l<c?l:c,d=i>s?i>a?i:a:s>a?s:a,p=o>l?o>c?o:c:l>c?l:c,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Pr(i,o,s,l,a,c,f.x,f.y)&&ft(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function dg(r,e,t,n){let i=r.prev,s=r,a=r.next;if(ft(i,s,a)>=0)return!1;let o=i.x,l=s.x,c=a.x,h=i.y,u=s.y,d=a.y,p=o<l?o<c?o:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,g=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,_=vc(p,f,e,t,n),v=vc(g,m,e,t,n),x=r.prevZ,y=r.nextZ;for(;x&&x.z>=_&&y&&y.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&Pr(o,h,l,u,c,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&Pr(o,h,l,u,c,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=_;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&Pr(o,h,l,u,c,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&Pr(o,h,l,u,c,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function pg(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!go(i,s)&&Ud(i,n,n.next,s)&&Bs(i,s)&&Bs(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),zs(n),zs(n.next),n=r=s),n=n.next}while(n!==r);return or(n)}function fg(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&xg(a,o)){let l=Nd(a,o);return a=or(a,a.next),l=or(l,l.next),Fs(a,e,t,n,i,s,0),void Fs(l,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function mg(r,e){return r.x-e.x}function gg(r,e){let t=(function(i,s){let a,o=s,l=-1/0,c=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=c&&m>l&&(l=m,a=o.x<o.next.x?o:o.next,m===c))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,g=1/0;o=a;do c>=o.x&&o.x>=d&&c!==o.x&&Pr(h<p?c:l,h,d,p,h<p?l:c,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(c-o.x),Bs(o,i)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&vg(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=Nd(t,r);return or(n,n.next),or(t,t.next)}function vg(r,e){return ft(r.prev,r,e.prev)<0&&ft(e.next,r,r.next)<0}function vc(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function _g(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Pr(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function xg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Ud(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Bs(r,e)&&Bs(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(ft(r.prev,r,e.prev)||ft(r,e.prev,e))||go(r,e)&&ft(r.prev,r,r.next)>0&&ft(e.prev,e,e.next)>0)}function ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function go(r,e){return r.x===e.x&&r.y===e.y}function Ud(r,e,t,n){let i=Ca(ft(r,e,t)),s=Ca(ft(r,e,n)),a=Ca(ft(t,n,r)),o=Ca(ft(t,n,e));return i!==s&&a!==o||!(i!==0||!Ra(r,t,e))||!(s!==0||!Ra(r,n,e))||!(a!==0||!Ra(t,r,n))||!(o!==0||!Ra(t,e,n))}function Ra(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ca(r){return r>0?1:r<0?-1:0}function Bs(r,e){return ft(r.prev,r,r.next)<0?ft(r,e,r.next)>=0&&ft(r,r.prev,e)>=0:ft(r,e,r.prev)<0||ft(r,r.next,e)<0}function Nd(r,e){let t=new _c(r.i,r.x,r.y),n=new _c(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function td(r,e,t,n){let i=new _c(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function _c(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var jn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];nd(e),id(n,e);let a=e.length;t.forEach(nd);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,id(n,t[l]);let o=hg(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function nd(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function id(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var xc=class r extends Je{constructor(e=new Kr([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:yg,x,y,b,S,C,R=!1;_&&(x=_.getSpacedPoints(h),R=!0,d=!1,y=_.computeFrenetFrames(h,!1),b=new M,S=new M,C=new M),d||(m=0,p=0,f=0,g=0);let I=o.extractPoints(c),N=I.shape,D=I.holes;if(!jn.isClockWise(N)){N=N.reverse();for(let O=0,U=D.length;O<U;O++){let F=D[O];jn.isClockWise(F)&&(D[O]=F.reverse())}}let H=jn.triangulateShape(N,D),k=N;for(let O=0,U=D.length;O<U;O++){let F=D[O];N=N.concat(F)}function L(O,U,F){return U||console.error("THREE.ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(U,F)}let W=N.length,X=H.length;function se(O,U,F){let E,P,z,ie=O.x-U.x,V=O.y-U.y,Q=F.x-O.x,$=F.y-O.y,ee=ie*ie+V*V,K=ie*$-V*Q;if(Math.abs(K)>Number.EPSILON){let j=Math.sqrt(ee),ae=Math.sqrt(Q*Q+$*$),J=U.x-V/j,Se=U.y+ie/j,_e=((F.x-$/ae-J)*$-(F.y+Q/ae-Se)*Q)/(ie*$-V*Q);E=J+ie*_e-O.x,P=Se+V*_e-O.y;let xe=E*E+P*P;if(xe<=2)return new fe(E,P);z=Math.sqrt(xe/2)}else{let j=!1;ie>Number.EPSILON?Q>Number.EPSILON&&(j=!0):ie<-Number.EPSILON?Q<-Number.EPSILON&&(j=!0):Math.sign(V)===Math.sign($)&&(j=!0),j?(E=-V,P=ie,z=Math.sqrt(ee)):(E=ie,P=V,z=Math.sqrt(ee/2))}return new fe(E/z,P/z)}let te=[];for(let O=0,U=k.length,F=U-1,E=O+1;O<U;O++,F++,E++)F===U&&(F=0),E===U&&(E=0),te[O]=se(k[O],k[F],k[E]);let ce=[],he,Z=te.concat();for(let O=0,U=D.length;O<U;O++){let F=D[O];he=[];for(let E=0,P=F.length,z=P-1,ie=E+1;E<P;E++,z++,ie++)z===P&&(z=0),ie===P&&(ie=0),he[E]=se(F[E],F[z],F[ie]);ce.push(he),Z=Z.concat(he)}for(let O=0;O<m;O++){let U=O/m,F=p*Math.cos(U*Math.PI/2),E=f*Math.sin(U*Math.PI/2)+g;for(let P=0,z=k.length;P<z;P++){let ie=L(k[P],te[P],E);de(ie.x,ie.y,-F)}for(let P=0,z=D.length;P<z;P++){let ie=D[P];he=ce[P];for(let V=0,Q=ie.length;V<Q;V++){let $=L(ie[V],he[V],E);de($.x,$.y,-F)}}}let le=f+g;for(let O=0;O<W;O++){let U=d?L(N[O],Z[O],le):N[O];R?(S.copy(y.normals[0]).multiplyScalar(U.x),b.copy(y.binormals[0]).multiplyScalar(U.y),C.copy(x[0]).add(S).add(b),de(C.x,C.y,C.z)):de(U.x,U.y,0)}for(let O=1;O<=h;O++)for(let U=0;U<W;U++){let F=d?L(N[U],Z[U],le):N[U];R?(S.copy(y.normals[O]).multiplyScalar(F.x),b.copy(y.binormals[O]).multiplyScalar(F.y),C.copy(x[O]).add(S).add(b),de(C.x,C.y,C.z)):de(F.x,F.y,u/h*O)}for(let O=m-1;O>=0;O--){let U=O/m,F=p*Math.cos(U*Math.PI/2),E=f*Math.sin(U*Math.PI/2)+g;for(let P=0,z=k.length;P<z;P++){let ie=L(k[P],te[P],E);de(ie.x,ie.y,u+F)}for(let P=0,z=D.length;P<z;P++){let ie=D[P];he=ce[P];for(let V=0,Q=ie.length;V<Q;V++){let $=L(ie[V],he[V],E);R?de($.x,$.y+x[h-1].y,x[h-1].x+F):de($.x,$.y,u+F)}}}function ue(O,U){let F=O.length;for(;--F>=0;){let E=F,P=F-1;P<0&&(P=O.length-1);for(let z=0,ie=h+2*m;z<ie;z++){let V=W*z,Q=W*(z+1);A(U+E+V,U+P+V,U+P+Q,U+E+Q)}}}function de(O,U,F){l.push(O),l.push(U),l.push(F)}function me(O,U,F){w(O),w(U),w(F);let E=i.length/3,P=v.generateTopUV(n,i,E-3,E-2,E-1);B(P[0]),B(P[1]),B(P[2])}function A(O,U,F,E){w(O),w(U),w(E),w(U),w(F),w(E);let P=i.length/3,z=v.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);B(z[0]),B(z[1]),B(z[3]),B(z[1]),B(z[2]),B(z[3])}function w(O){i.push(l[3*O+0]),i.push(l[3*O+1]),i.push(l[3*O+2])}function B(O){s.push(O.x),s.push(O.y)}(function(){let O=i.length/3;if(d){let U=0,F=W*U;for(let E=0;E<X;E++){let P=H[E];me(P[2]+F,P[1]+F,P[0]+F)}U=h+2*m,F=W*U;for(let E=0;E<X;E++){let P=H[E];me(P[0]+F,P[1]+F,P[2]+F)}}else{for(let U=0;U<X;U++){let F=H[U];me(F[2],F[1],F[0])}for(let U=0;U<X;U++){let F=H[U];me(F[0]+W*h,F[1]+W*h,F[2]+W*h)}}n.addGroup(O,i.length/3-O,0)})(),(function(){let O=i.length/3,U=0;ue(k,U),U+=k.length;for(let F=0,E=D.length;F<E;F++){let P=D[F];ue(P,U),U+=P.length}n.addGroup(O,i.length/3-O,1)})()}this.setAttribute("position",new be(i,3)),this.setAttribute("uv",new be(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new eo[i.type]().fromJSON(i)),new r(n,e.options)}},yg={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],l=e[3*n+1],c=e[3*i],h=e[3*i+1];return[new fe(s,a),new fe(o,l),new fe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],c=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],g=e[3*s],m=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-u),new fe(d,1-f),new fe(g,1-_)]:[new fe(o,1-l),new fe(h,1-u),new fe(p,1-f),new fe(m,1-_)]}},oi=class r extends ar{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},yc=class r extends ar{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Mc=class r extends Je{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new M,f=new fe;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let _=s+m/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),l.push(p.x,p.y,p.z),c.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let _=0;_<n;_++){let v=_+m,x=v,y=v+n+1,b=v+n+2,S=v+1;o.push(x,y,S),o.push(y,b,S)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},bc=class r extends Je{constructor(e=new Kr([new fe(0,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;function c(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;jn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,_=f.length;m<_;m++){let v=f[m];jn.isClockWise(v)===!0&&(f[m]=v.reverse())}let g=jn.triangulateShape(p,f);for(let m=0,_=f.length;m<_;m++){let v=f[m];p=p.concat(v)}for(let m=0,_=p.length;m<_;m++){let v=p[m];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,_=g.length;m<_;m++){let v=g[m],x=v[0]+u,y=v[1]+u,b=v[2]+u;n.push(x,y,b),l+=3}}this.setIndex(n),this.setAttribute("position",new be(i,3)),this.setAttribute("normal",new be(s,3)),this.setAttribute("uv",new be(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},wt=class r extends Je{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new M,d=new M,p=[],f=[],g=[],m=[];for(let _=0;_<=n;_++){let v=[],x=_/n,y=0;_===0&&a===0?y=.5/t:_===n&&l===Math.PI&&(y=-.5/t);for(let b=0;b<=t;b++){let S=b/t;u.x=-e*Math.cos(i+S*s)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+S*s)*Math.sin(a+x*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(S+y,1-x),v.push(c++)}h.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){let x=h[_][v+1],y=h[_][v],b=h[_+1][v],S=h[_+1][v+1];(_!==0||a>0)&&p.push(x,y,S),(_!==n-1||l<Math.PI)&&p.push(y,b,S)}this.setIndex(p),this.setAttribute("position",new be(f,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Sc=class r extends ar{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Hs=class r extends Je{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new M,u=new M,d=new M;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let g=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(f/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let g=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,_=(i+1)*(p-1)+f,v=(i+1)*p+f;a.push(g,m,v),a.push(m,_,v)}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Ec=class r extends Je{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],l=[],c=[],h=[],u=new M,d=new M,p=new M,f=new M,g=new M,m=new M,_=new M;for(let x=0;x<=n;++x){let y=x/n*s*Math.PI*2;v(y,s,a,e,p),v(y+.01,s,a,e,f),m.subVectors(f,p),_.addVectors(f,p),g.crossVectors(m,_),_.crossVectors(g,m),g.normalize(),_.normalize();for(let b=0;b<=i;++b){let S=b/i*Math.PI*2,C=-t*Math.cos(S),R=t*Math.sin(S);u.x=p.x+(C*_.x+R*g.x),u.y=p.y+(C*_.y+R*g.y),u.z=p.z+(C*_.z+R*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),c.push(d.x,d.y,d.z),h.push(x/n),h.push(b/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){let b=(i+1)*(x-1)+(y-1),S=(i+1)*x+(y-1),C=(i+1)*x+y,R=(i+1)*(x-1)+y;o.push(b,S,R),o.push(S,C,R)}function v(x,y,b,S,C){let R=Math.cos(x),I=Math.sin(x),N=b/y*x,D=Math.cos(N);C.x=S*(2+D)*.5*R,C.y=S*(2+D)*I*.5,C.z=S*Math.sin(N)*.5}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},li=class r extends Je{constructor(e=new Zr(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,l=new M,c=new fe,h=new M,u=[],d=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let _=a.normals[m],v=a.binormals[m];for(let x=0;x<=i;x++){let y=x/i*Math.PI*2,b=Math.sin(y),S=-Math.cos(y);l.x=S*_.x+b*v.x,l.y=S*_.y+b*v.y,l.z=S*_.z+b*v.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let _=0;_<=i;_++)c.x=m/t,c.y=_/i,p.push(c.x,c.y)})(),(function(){for(let m=1;m<=t;m++)for(let _=1;_<=i;_++){let v=(i+1)*(m-1)+(_-1),x=(i+1)*m+(_-1),y=(i+1)*m+_,b=(i+1)*(m-1)+_;f.push(v,x,b),f.push(x,y,b)}})()})(),this.setIndex(f),this.setAttribute("position",new be(u,3)),this.setAttribute("normal",new be(d,3)),this.setAttribute("uv",new be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new eo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},wc=class extends Je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),_=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,_),rd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),rd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new be(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function rd(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var mv=Object.freeze({__proto__:null,BoxGeometry:Gr,CapsuleGeometry:pc,CircleGeometry:Os,ConeGeometry:fc,CylinderGeometry:zn,DodecahedronGeometry:mc,EdgesGeometry:gc,ExtrudeGeometry:xc,IcosahedronGeometry:oi,LatheGeometry:ai,OctahedronGeometry:yc,PlaneGeometry:Yn,PolyhedronGeometry:ar,RingGeometry:Mc,ShapeGeometry:bc,SphereGeometry:wt,TetrahedronGeometry:Sc,TorusGeometry:Hs,TorusKnotGeometry:Ec,TubeGeometry:li,WireframeGeometry:wc}),to=class extends hn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Ee(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var gn=class extends hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ot=class extends gn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ia(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Mg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function bg(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort((function(n,i){return r[n]-r[i]})),t}function sd(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function Dd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Di=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tc=class extends Di{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xh:s=e,o=2*t-n;break;case jh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xh:a=e,l=2*n-t;break;case jh:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}let c=.5*(n-t),h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,_=-d*m+2*d*g-d*f,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,x=(-1-p)*m+(1.5+p)*g+.5*f,y=p*m-p*g;for(let b=0;b!==o;++b)s[b]=_*a[h+b]+v*a[c+b]+x*a[l+b]+y*a[u+b];return s}},Ac=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}},Rc=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ia(t,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ia(e.times,Array),values:Ia(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Rc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ac(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Po:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Mg(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Po,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o];if(c!==e[o+1]&&(o!==1||c!==e[0]))if(i)l=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};bn.prototype.TimeBufferType=Float32Array,bn.prototype.ValueBufferType=Float32Array,bn.prototype.DefaultInterpolation=Hr;var Ai=class extends bn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="bool",Ai.prototype.ValueBufferType=Array,Ai.prototype.DefaultInterpolation=zr,Ai.prototype.InterpolantFactoryMethodLinear=void 0,Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends bn{};no.prototype.ValueTypeName="color";var ci=class extends bn{};ci.prototype.ValueTypeName="number";var Cc=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t),c=e*o;for(let h=c+o;c!==h;c+=4)xt.slerpFlat(s,0,a,c-o,a,c,l);return s}},hi=class extends bn{InterpolantFactoryMethodLinear(e){return new Cc(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion",hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends bn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string",Ri.prototype.ValueBufferType=Array,Ri.prototype.DefaultInterpolation=zr,Ri.prototype.InterpolantFactoryMethodLinear=void 0,Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends bn{};ui.prototype.ValueTypeName="vector";var io=class{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Sg(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=bg(l);l=sd(l,1,h),c=sd(c,1,h),i||l[0]!==0||(l.push(s),c.push(c[0])),a.push(new ci(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(c)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,f){if(d.length!==0){let g=[],m=[];Dd(d,g,m,p),g.length!==0&&f.push(new h(u,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let u=c[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let g=[],m=[];for(let _=0;_!==u[p].morphTargets.length;++_){let v=u[p];g.push(v.time),m.push(v.morphTarget===f?1:0)}i.push(new ci(".morphTargetInfluence["+f+"]",g,m))}l=d.length*a}else{let d=".bones["+t[h].name+"]";n(ui,d+".position",u,"pos",i),n(hi,d+".quaternion",u,"rot",i),n(ui,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Sg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ci;case"vector":case"vector2":case"vector3":case"vector4":return ui;case"color":return no;case"quaternion":return hi;case"bool":case"boolean":return Ai;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(r.type);if(r.times===void 0){let t=[],n=[];Dd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Ci={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Ic=class{constructor(e,t,n){let i=this,s,a=!1,o=0,l=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,l),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,l),o===l&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],f=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Eg=new Ic,Tn=class{constructor(e){this.manager=e!==void 0?e:Eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Tn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},Pc=class extends Error{constructor(e,t){super(e),this.response=t}},Oi=class extends Tn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Ci.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(s),this.manager.itemEnd(e)}),0),s;if(ti[e]!==void 0)return void ti[e].push({onLoad:t,onProgress:n,onError:i});ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then((c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ti[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,g=0,m=new ReadableStream({start(_){(function v(){u.read().then((({done:x,value:y})=>{if(x)_.close();else{g+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:p});for(let S=0,C=h.length;S<C;S++){let R=h[S];R.onProgress&&R.onProgress(b)}_.enqueue(y),v()}}),(x=>{_.error(x)}))})()}});return new Response(m)}throw new Pc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)})).then((c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then((p=>d.decode(p)))}}})).then((c=>{Ci.add(e,c);let h=ti[e];delete ti[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}})).catch((c=>{let h=ti[e];if(h===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Lc=class extends Tn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ci.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=ws("img");function l(){h(),Ci.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var ro=class extends Tn{constructor(e){super(e)}load(e,t,n,i){let s=this,a=new rr,o=new Oi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,(function(l){let c;try{c=s.parse(l)}catch(h){if(i===void 0)return void console.error(h);i(h)}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:En,a.wrapT=c.wrapT!==void 0?c.wrapT:En,a.magFilter=c.magFilter!==void 0?c.magFilter:Mt,a.minFilter=c.minFilter!==void 0?c.minFilter:Mt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Xn),c.mipmapCount===1&&(a.minFilter=Mt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)}),n,i),a}},Jr=class extends Tn{constructor(e){super(e)}load(e,t,n,i){let s=new Dt,a=new Lc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},$r=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},so=class extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},ul=new Ie,ad=new M,od=new M,ks=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uc=class extends ks{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Vr*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ao=class extends $r{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Uc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ld=new Ie,fs=new M,dl=new M,Nc=class extends ks{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new Ke(2,1,1,1),new Ke(0,1,1,1),new Ke(3,1,1,1),new Ke(1,1,1,1),new Ke(3,0,1,1),new Ke(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(fs),dl.copy(n.position),dl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(dl),n.updateMatrixWorld(),i.makeTranslation(-fs.x,-fs.y,-fs.z),ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld)}},oo=class extends $r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nc}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Dc=class extends ks{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Dc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var lo=class extends Tn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Ci.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then((c=>{t&&t(c),s.manager.itemEnd(e)})).catch((c=>{i&&i(c)})):(setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then((function(c){return c.blob()})).then((function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))})).then((function(c){return Ci.add(e,c),t&&t(c),s.manager.itemEnd(e),c})).catch((function(c){i&&i(c),Ci.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)}));Ci.add(e,l),s.manager.itemStart(e)}};var gv=new Ie,vv=new Ie,_v=new Ie;var xv=new M,yv=new xt,Mv=new M,bv=new M;var Sv=new M,Ev=new xt,wv=new M,Tv=new M;var Yc="\\[\\]\\.:\\/",wg=new RegExp("["+Yc+"]","g"),pl="[^"+Yc+"]",Tg="[^"+Yc.replace("\\.","")+"]",Ag=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",pl)+/(WCOD+)?/.source.replace("WCOD",Tg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pl)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pl)+"$"),Rg=["material","materials","bones","map"],it=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(e){let t=Ag.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Rg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(c!==void 0){if(e[c]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[c]}}let a=e[i];if(a===void 0){let c=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};it.Composite=class{constructor(r,e,t){let n=t||it.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray],it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Av=new Float32Array(1);var cd=new Ie,co=class{constructor(e,t,n=0,i=1/0){this.ray=new nr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return cd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(cd),this}intersectObject(e,t=!0,n=[]){return Oc(e,this,n,t),n.sort(hd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Oc(e[i],this,n,t);return n.sort(hd),n}};function hd(r,e){return r.distance-e.distance}function Oc(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Oc(s[a],e,t,!0)}}var Rv=new fe;var Cv=new M,Iv=new M;var Pv=new M;var Lv=new M,Uv=new Ie,Nv=new Ie;var Dv=new M,Ov=new Ee,Fv=new Ee;var Bv=new M,zv=new M,Hv=new M;var kv=new M,Vv=new As;var Gv=new Wt;var Wv=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Cg=Array(1024).fill(0).map((r,e)=>Math.pow(e/255*.9478672986+.0521327014,2.4)),vo=class extends Tn{constructor(e){super(e),this.type=nn}setDataType(e){return this.type=e,this}parse(e,t){let n={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},i=new TextDecoder,s=new DataView(e),a=0,o=[];for(;a<s.byteLength;){let h=s.getUint8(a);if(h===255){let u=s.getUint8(a+1);[216,224,225,226].includes(u)?(o.push({sectionType:u,section:[h,u],sectionOffset:a+2}),a+=2):(o[o.length-1].section.push(h,u),a+=2)}else o[o.length-1].section.push(h),a++}let l,c;for(let h=0;h<o.length;h++){let{sectionType:u,section:d,sectionOffset:p}=o[h];if(u!==224){if(u===225)this._parseXMPMetadata(i.decode(new Uint8Array(d)),n);else if(u===226){let f=new DataView(new Uint8Array(d.slice(2)).buffer);if(f.getUint32(2,!1)===1297106432){let m=f.getUint32(6)===1229531648,_=60,v=f.getUint32(_,m),x=f.getUint32(_+4,m),y=f.getUint32(_+16,m),b=f.getUint32(_+20,m)+p+6;l=new Uint8Array(s.buffer,x,v),c=new Uint8Array(s.buffer,b,y)}}}}if(!n.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(l&&c)this._applyGainmapToSDR(n,l,c,(h,u,d)=>{t({width:u,height:d,data:h,format:on,type:this.type})},h=>{throw new Error(h)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}load(e,t,n,i){let s=new rr(this.type===nn?new Uint16Array:new Float32Array,0,0,on,this.type,ho,En,En,Mt,fd,1,Tt);s.generateMipmaps=!0,s.flipY=!0;let a=new Oi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{try{this.parse(o,l=>{s.image={data:l.data,width:l.width,height:l.height},s.needsUpdate=!0,t&&t(s,l)})}catch(l){i&&i(l),console.error(l)}},n,i),s}_parseXMPMetadata(e,t){let i=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[s]=i.getElementsByTagName("Container:Directory");if(!s){let[a]=i.getElementsByTagName("rdf:Description");t.version=a.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=a.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(a.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(a.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(a.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(a.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(a.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(a.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(a.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e/255<.04045?e/255*.0773993808:e<1024?Cg[~~e]:Math.pow(e/255*.9478672986+.0521327014,2.4)}_applyGainmapToSDR(e,t,n,i,s){let a=o=>new Promise((l,c)=>{let h=document.createElement("img");h.onload=()=>{let u={width:h.naturalWidth,height:h.naturalHeight,source:h};URL.revokeObjectURL(h.src),l(u)},h.onerror=()=>{URL.revokeObjectURL(h.src),c()},h.src=URL.createObjectURL(new Blob([o],{type:"image/jpeg"}))});Promise.all([a(t),a(n)]).then(([o,l])=>{let c=o.width/o.height,h=l.width/l.height;if(c!==h){s("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}let u=document.createElement("canvas"),d=u.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});u.width=o.width,u.height=o.height,d.drawImage(l.source,0,0,l.width,l.height,0,0,o.width,o.height);let p=d.getImageData(0,0,o.width,o.height,{colorSpace:"srgb"});d.drawImage(o.source,0,0);let f=d.getImageData(0,0,o.width,o.height,{colorSpace:"srgb"}),g;this.type===nn?g=new Uint16Array(f.data.length).fill(23544):g=new Float32Array(f.data.length).fill(255);let m=Math.sqrt(Math.pow(1.8,e.hdrCapacityMax)),_=(Math.log2(m)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),v=Math.min(Math.max(_,0),1),x=e.gamma===1;for(let y=0;y<f.data.length;y+=4){let b=y/4%o.width,S=Math.floor(y/4/o.width);for(let C=0;C<3;C++){let R=f.data[y+C],I=(S*o.width+b)*4+C,N=p.data[I]/255,D=x?N:Math.pow(N,1/e.gamma),H=e.gainMapMin*(1-D)+e.gainMapMax*D,k=(R+e.offsetSDR)*(H*v===0?1:Math.pow(2,H*v))-e.offsetHDR,L=Math.min(Math.max(this._srgbToLinear(k),0),65504);g[y+C]=this.type===nn?di.toHalfFloat(L):L}}i(g,o.width,o.height)}).catch(()=>{throw new Error("THREE.UltraHDRLoader Error: Could not parse UltraHDR images")})}};var _o=class extends ro{constructor(e){super(e),this.type=nn}parse(e){let a=function(R,I){switch(R){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(I||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(I||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(I||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(I||""))}},u=function(R,I,N){I=I||1024;let H=R.pos,k=-1,L=0,W="",X=String.fromCharCode.apply(null,new Uint16Array(R.subarray(H,H+128)));for(;0>(k=X.indexOf(`
`))&&L<I&&H<R.byteLength;)W+=X,L+=X.length,H+=128,X+=String.fromCharCode.apply(null,new Uint16Array(R.subarray(H,H+128)));return-1<k?(N!==!1&&(R.pos+=L+k+1),W+X.slice(0,k)):!1},d=function(R){let I=/^#\?(\S+)/,N=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,H=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},W,X;for((R.pos>=R.byteLength||!(W=u(R)))&&a(1,"no header found"),(X=W.match(I))||a(3,"bad initial token"),L.valid|=1,L.programtype=X[1],L.string+=W+`
`;W=u(R),W!==!1;){if(L.string+=W+`
`,W.charAt(0)==="#"){L.comments+=W+`
`;continue}if((X=W.match(N))&&(L.gamma=parseFloat(X[1])),(X=W.match(D))&&(L.exposure=parseFloat(X[1])),(X=W.match(H))&&(L.valid|=2,L.format=X[1]),(X=W.match(k))&&(L.valid|=4,L.height=parseInt(X[1],10),L.width=parseInt(X[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||a(3,"missing format specifier"),L.valid&4||a(3,"missing image size specifier"),L},p=function(R,I,N){let D=I;if(D<8||D>32767||R[0]!==2||R[1]!==2||R[2]&128)return new Uint8Array(R);D!==(R[2]<<8|R[3])&&a(3,"wrong scanline width");let H=new Uint8Array(4*I*N);H.length||a(4,"unable to allocate buffer space");let k=0,L=0,W=4*D,X=new Uint8Array(4),se=new Uint8Array(W),te=N;for(;te>0&&L<R.byteLength;){L+4>R.byteLength&&a(1),X[0]=R[L++],X[1]=R[L++],X[2]=R[L++],X[3]=R[L++],(X[0]!=2||X[1]!=2||(X[2]<<8|X[3])!=D)&&a(3,"bad rgbe scanline format");let ce=0,he;for(;ce<W&&L<R.byteLength;){he=R[L++];let le=he>128;if(le&&(he-=128),(he===0||ce+he>W)&&a(3,"bad scanline data"),le){let ue=R[L++];for(let de=0;de<he;de++)se[ce++]=ue}else se.set(R.subarray(L,L+he),ce),ce+=he,L+=he}let Z=D;for(let le=0;le<Z;le++){let ue=0;H[k]=se[le+ue],ue+=D,H[k+1]=se[le+ue],ue+=D,H[k+2]=se[le+ue],ue+=D,H[k+3]=se[le+ue],k+=4}te--}return H},f=function(R,I,N,D){let H=R[I+3],k=Math.pow(2,H-128)/255;N[D+0]=R[I+0]*k,N[D+1]=R[I+1]*k,N[D+2]=R[I+2]*k,N[D+3]=1},g=function(R,I,N,D){let H=R[I+3],k=Math.pow(2,H-128)/255;N[D+0]=di.toHalfFloat(Math.min(R[I+0]*k,65504)),N[D+1]=di.toHalfFloat(Math.min(R[I+1]*k,65504)),N[D+2]=di.toHalfFloat(Math.min(R[I+2]*k,65504)),N[D+3]=di.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let _=d(m),v=_.width,x=_.height,y=p(m.subarray(m.pos),v,x),b,S,C;switch(this.type){case en:C=y.length/4;let R=new Float32Array(C*4);for(let N=0;N<C;N++)f(y,N*4,R,N*4);b=R,S=en;break;case nn:C=y.length/4;let I=new Uint16Array(C*4);for(let N=0;N<C;N++)g(y,N*4,I,N*4);b=I,S=nn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:x,data:b,header:_.string,gamma:_.gamma,exposure:_.exposure,type:S}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case en:case nn:a.colorSpace=Tt,a.minFilter=Mt,a.magFilter=Mt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}};var xo=class extends Ze{constructor(e,t,n,i=128){if(t<=0||n<=0||i<=0)throw new Error("GroundedSkybox height, radius, and resolution must be positive.");let s=new wt(n,2*i,i);s.scale(1,1,-1);let a=s.getAttribute("position"),o=new M;for(let l=0;l<a.count;++l)if(o.fromBufferAttribute(a,l),o.y<0){let c=-t*3/2,h=o.y<c?-t/o.y:1-o.y*o.y/(3*c*c);o.multiplyScalar(h),o.toArray(a.array,3*l)}a.needsUpdate=!0,super(s,new It({map:e,depthWrite:!1}))}};function Od(r,e,t=wi){let n=document.createElement("canvas");n.width=n.height=r,e(n.getContext("2d"),r);let i=new Ls(n);return i.colorSpace=t,i}function Ig(){let r=Od(256,(e,t)=>{let n=e.createImageData(t,t),i=52673;for(let s=0;s<n.data.length;s+=4){i=Math.imul(i,1664525)+1013904223>>>0;let a=i/4294967296,o=a<.026?-38:(a-.44)*28,l=s/4/t|0,c=Math.sin(l/t*Math.PI*7)*3;n.data[s]=146+o+c,n.data[s+1]=155+o+c,n.data[s+2]=137+o+c,n.data[s+3]=255}e.putImageData(n,0,0)},at);return r.wrapS=Sn,r.repeat.set(4,1),r.anisotropy=5,r}function Pg(r,e,t,n,i){let s=new Ze(new Yn(2,2),new to({color:"#261e16",opacity:e}));s.rotation.x=-Math.PI/2,s.position.y=.005,s.receiveShadow=!0,r.add(s);let a=Od(96,(c,h)=>{let u=h/2,d=c.createRadialGradient(u,u,1,u,u,u);d.addColorStop(0,"rgba(23,17,11,.86)"),d.addColorStop(.25,"rgba(23,17,11,.67)"),d.addColorStop(.6,"rgba(29,21,12,.30)"),d.addColorStop(1,"rgba(29,21,12,0)"),c.fillStyle=d,c.fillRect(0,0,h,h)},at);function o(c,h,u,d,p){let f=new Ze(new Yn(u,d),new It({map:a,transparent:!0,opacity:p,depthWrite:!1,toneMapped:!1}));return f.position.set(c,.008,h),f.rotation.x=-Math.PI/2,r.add(f),f}o(-.063,-.06,.39,.38,.52),o(-.048,t?.109:.095,t?.076:.096,.105,.66);let l=o(t?-.127:-.167,t?.105:.012,.076,.103,.57);return t&&o(n.x,n.z,.225*i,.221*i,.47),l}function Fd(r,e=.2,t=!1,n=!1){let i=new M(n?-.082:-.096,.052,n?.257:.279),s=n?1.36:1,a=Pg(r,e,t,i,s),o=n?.036:.031,l=n?.46:.63,c=new ai([[0,.01],[.074,.01],[.09,.0105],[.096,.012],[.099,.016],[.099,.021],[.094,.039],[.087,.059],[.084,.066],[.082,.069],[.078,.069],[.075,.067],[.074,.063],[.072,.051],[.067,.037],[.059,.025],[.049,.023],[0,.023]].map(([d,p],f)=>{if(!t)return new fe(d,p);let g=p>.031?.031+l*(p-.031):p;return new fe(d,f>=14?Math.max(g,o):g)}),96),h=new Ze(c,new ot({map:Ig(),roughness:.49,clearcoat:.26,clearcoatRoughness:.28,specularIntensity:.58,envMapIntensity:.78}));h.position.set(i.x,0,i.z),h.scale.set(s,1,s),h.castShadow=!0,h.receiveShadow=!0,r.add(h);let u=new Ze(new Os(.097,64),new It({color:"#30251e",transparent:!0,opacity:.23,depthWrite:!1,toneMapped:!1}));return u.rotation.x=-Math.PI/2,u.position.set(i.x,.009,i.z),t||r.add(u),{bowl:i,bowlMesh:h,bowlFloor:o,bowlRadius:.084*s,animate(d){let p=d===null?0:Ge.smoothstep(d,.1,.88)*(1-Ge.smoothstep(d,2.47,3.19));a.material.opacity=(t?.57:.48)*(1-.86*p),a.position.z=(t?.105:.012)+.13*p,a.scale.setScalar(1+.55*p)}}}function zi(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,l=new Je,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let p=r[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Bd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][d]);let f=Bd(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(f)}}return l}function Bd(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new _t(a,t,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<t;f++){let g=h.getComponent(d,f);o.setComponent(d+u,f,g)}}else a.set(h.array,l);l+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Zc(r,e){if(e===Ed)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Vs||e===po){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Vs)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var yo=class extends Tn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nh(t)}),this.register(function(t){return new ih(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new th(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new gh(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Fi.extractUrlBase(e);a=Fi.resolveURL(c,this.path)}else a=Fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Oi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Gd){try{a[We.KHR_BINARY_GLTF]=new vh(e)}catch(u){i&&i(u);return}s=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Eh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case We.KHR_MATERIALS_UNLIT:a[u]=new eh;break;case We.KHR_DRACO_MESH_COMPRESSION:a[u]=new _h(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[u]=new xh;break;case We.KHR_MESH_QUANTIZATION:a[u]=new yh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Lg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Qc=class{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Ee(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Tt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new lr(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new oo(h),c.distance=u;break;case"spot":c=new ao(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},eh=class{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return It}extendParams(e,t,n){let i=[];e.color=new Ee(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Tt),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,at))}return Promise.all(i)}},th=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},nh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(o,o)}return Promise.all(s)}},ih=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},rh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},sh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Tt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,at)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},ah=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},oh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],Tt),Promise.all(s)}},lh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},ch=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],Tt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,at)),Promise.all(s)}},hh=class{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},uh=class{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ot}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},dh=class{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},ph=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},fh=class{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mh=class{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},gh=class{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let c of i.primitives)if(c.mode!==An.TRIANGLES&&c.mode!==An.TRIANGLE_STRIP&&c.mode!==An.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let f of u){let g=new Ie,m=new M,_=new xt,v=new M(1,1,1),x=new Xa(f.geometry,f.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,g.compose(m,_,v));for(let y in l)if(y==="_COLOR_0"){let b=l[y];x.instanceColor=new sr(b.array,b.itemSize,b.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&f.geometry.setAttribute(y,l[y]);mt.prototype.copy.call(x,f),this.parser.assignFinalMaterial(x),p.push(x)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Gd="glTF",Gs=12,zd={JSON:1313821514,BIN:5130562},vh=class{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Gs,s=new DataView(e,Gs),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let l=s.getUint32(a,!0);if(a+=4,l===zd.JSON){let c=new Uint8Array(e,Gs+a,o);this.content=n.decode(c)}else if(l===zd.BIN){let c=Gs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},_h=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=bh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=bh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=es[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let f in p.attributes){let g=p.attributes[f],m=l[f];m!==void 0&&(g.normalized=m)}u(p)},o,c,Tt,d)})})}},xh=class{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},yh=class{constructor(){this.name=We.KHR_MESH_QUANTIZATION}},Mo=class extends Di{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,f=e*c,g=f-c,m=-2*p+3*d,_=p-d,v=1-m,x=_-d+u;for(let y=0;y!==o;y++){let b=a[g+y+o],S=a[g+y+l]*h,C=a[f+y+o],R=a[f+y]*h;s[y]=v*b+x*S+m*C+_*R}return s}},Ug=new xt,Mh=class extends Mo{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Ug.fromArray(s).normalize().toArray(s),s}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hd={9728:ln,9729:Mt,9984:Bc,9985:gs,9986:Ir,9987:Xn},kd={33071:En,33648:bs,10497:Sn},Kc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ng={CUBICSPLINE:void 0,LINEAR:Hr,STEP:zr},Jc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Dg(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new gn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fc})),r.DefaultMaterial}function cr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Og(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Fg(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bg(r){let e,t=r.extensions&&r.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+$c(t.attributes):e=r.indices+":"+$c(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+$c(r.targets[n]);return e}function $c(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Sh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zg(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Hg=new Ie,Eh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Lg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Jr(this.options.manager):this.textureLoader=new lo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Oi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return cr(s,o,i),fi(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())s(h,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Fi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Kc[i.type],o=es[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new _t(c,a,l))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],l=Kc[i.type],c=es[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0,g,m;if(p&&p!==u){let _=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count,x=t.cache.get(v);x||(g=new c(o,_*p,i.count*p/h),x=new Rs(g,p/h),t.cache.add(v,x)),m=new Cs(x,l,d%p/h,f)}else o===null?g=new c(i.count*l):g=new c(o,d,i.count*l),m=new _t(g,l,f);if(i.sparse!==void 0){let _=Kc.SCALAR,v=es[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,b=new v(a[1],x,i.sparse.count*_),S=new c(a[2],y,i.sparse.count*l);o!==null&&(m=new _t(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,R=b.length;C<R;C++){let I=b[C];if(m.setX(I,S[C*l]),l>=2&&m.setY(I,S[C*l+1]),l>=3&&m.setZ(I,S[C*l+2]),l>=4&&m.setW(I,S[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Hd[d.magFilter]||Mt,h.minFilter=Hd[d.minFilter]||Xn,h.wrapS=kd[d.wrapS]||Sn,h.wrapT=kd[d.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ln&&h.minFilter!==Mt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(g){let m=new Dt(g);m.needsUpdate=!0,d(m)}),t.load(Fi.resolveURL(u,s.path),f,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),fi(u,a),u.userData.mimeType=a.mimeType||zg(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Ps,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Is,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return gn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){let u=i[We.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Tt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,at)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Bi);let h=s.alphaMode||Jc.OPAQUE;if(h===Jc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Jc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==It&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new fe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==It&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==It){let u=s.emissiveFactor;o.emissive=new Ee().setRGB(u[0],u[1],u[2],Tt)}return s.emissiveTexture!==void 0&&a!==It&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,at)),Promise.all(c).then(function(){let u=new a(o);return s.name&&(u.name=s.name),fi(u,s),t.associations.set(u,{materials:e}),s.extensions&&cr(i,u,s),u})}createUniqueName(e){let t=it.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Vd(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=Bg(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Vd(new Je,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?Dg(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let g=h[p],m=a[p],_,v=c[p];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new Ui(g,v):new Ze(g,v),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?_.geometry=Zc(_.geometry,po):m.mode===An.TRIANGLE_FAN&&(_.geometry=Zc(_.geometry,Vs));else if(m.mode===An.LINES)_=new Ya(g,v);else if(m.mode===An.LINE_STRIP)_=new Yr(g,v);else if(m.mode===An.LINE_LOOP)_=new Za(g,v);else if(m.mode===An.POINTS)_=new Ka(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&Fg(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),fi(_,s),m.extensions&&cr(i,_,m),t.assignFinalMaterial(_),u.push(_)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&cr(i,u[0],s),u[0];let d=new tn;s.extensions&&cr(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ct(Ge.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new jr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new Ie;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qr(o,l)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],f=i.samplers[p.sampler],g=p.target,m=g.node,_=i.parameters!==void 0?i.parameters[f.input]:f.input,v=i.parameters!==void 0?i.parameters[f.output]:f.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",v)),c.push(f),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],f=u[2],g=u[3],m=u[4],_=[];for(let v=0,x=d.length;v<x;v++){let y=d[v],b=p[v],S=f[v],C=g[v],R=m[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let I=n._createAnimationTracks(y,b,S,C,R);if(I)for(let N=0;N<I.length;N++)_.push(I[N])}return new io(s,void 0,_)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Hg)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new ir:c.length>1?h=new tn:c.length===1?h=c[0]:h=new mt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),fi(h,s),s.extensions&&cr(n,h,s),s.matrix!==void 0){let u=new Ie;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new tn;n.name&&(s.name=i.createUniqueName(n.name)),fi(s,n),n.extensions&&cr(t,s,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof hn||d instanceof Dt)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,l=[];Hi[s.path]===Hi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Hi[s.path]){case Hi.weights:c=ci;break;case Hi.rotation:c=hi;break;case Hi.position:case Hi.scale:c=ui;break;default:switch(n.itemSize){case 1:c=ci;break;case 2:case 3:default:c=ui;break}break}let h=i.interpolation!==void 0?Ng[i.interpolation]:Hr,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let f=new c(l[d]+"."+Hi[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Sh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof hi?Mh:Mo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function kg(r,e,t){let n=e.attributes,i=new Wt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new M(l[0],l[1],l[2]),new M(c[0],c[1],c[2])),o.normalized){let h=Sh(es[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new M,l=new M;for(let c=0,h=s.length;c<h;c++){let u=s[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let g=Sh(es[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new cn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Vd(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(let a in n){let o=bh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return qe.workingColorSpace!==Tt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${qe.workingColorSpace}" not supported.`),fi(r,e),kg(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Og(r,e.targets,t):r})}var we=Ge.smoothstep,Vg=13e3,Gg=95e3;function wh(r,e=null,t=!1,n=null){return r.onBeforeCompile=i=>{n&&(i.uniforms.petContact=n.contact,i.uniforms.petStroke=n.stroke),i.fragmentShader=i.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
      float coatY = dot(diffuseColor.rgb, vec3(.2126, .7152, .0722));
      diffuseColor.rgb = mix(vec3(coatY), diffuseColor.rgb, .88);
      diffuseColor.rgb += .006 * (1. - smoothstep(.007, .040, coatY));`),t&&(i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 coatPosition;
        varying vec3 coatNormal;`),i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        coatPosition = position;
        coatNormal = normal;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 coatPosition;
        varying vec3 coatNormal;
        ${n?"uniform vec4 petContact; uniform vec3 petStroke;":""}
        float coatHash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float coatFibers(vec2 uv) {
          vec2 cell = floor(uv);
          vec2 f = fract(uv);
          f = f*f*(3.0-2.0*f);
          return mix(mix(coatHash(cell), coatHash(cell+vec2(1.0,0.0)), f.x),
            mix(coatHash(cell+vec2(0.0,1.0)), coatHash(cell+1.0), f.x), f.y);
        }`),i.fragmentShader=i.fragmentShader.replace("#include <normal_fragment_begin>",`
        vec3 coatP = coatPosition;
        ${n?`float stroked = petContact.w*(1.0-smoothstep(.02,.074,distance(coatP,petContact.xyz)));
        coatP -= petStroke * (.007*stroked);`:""}
        float stroke = mix(coatP.x + .16*coatP.y, coatP.z - .41*coatP.y + .16*coatP.x,
          smoothstep(.30, .84, abs(normalize(coatNormal).x)));
        vec2 grainUV = vec2(stroke*440.0, coatP.y*54.0);
        float grain = coatFibers(grainUV) - .5;
        float fine2 = coatFibers(grainUV*vec2(1.9,.85)+11.3) - .5;
        float broad = coatFibers(grainUV*vec2(.32,.62)+7.9) - .5;
        float awayFromFace = 1.0 - smoothstep(.145,.195,coatP.z)*smoothstep(.285,.355,coatP.y);
        float screenFilter = 1.0 - smoothstep(.38,1.65,fwidth(grainUV.x));
        diffuseColor.rgb *= 1.0 + awayFromFace*((.088*grain + .048*fine2)*screenFilter + .055*broad);
        ${n?"diffuseColor.rgb *= 1.0 + .075*stroked*awayFromFace;":""}
        #include <normal_fragment_begin>`)),e&&(i.uniforms.coatMotion=e,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 strandBend;
        uniform vec2 coatMotion;
        ${n?"attribute float strandFreedom; uniform vec4 petContact; uniform vec3 petStroke;":""}`),i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float sway = sin(coatMotion.x * 8.0 + position.y * 21.0 + position.z * 9.0);
        transformed += strandBend * (sway * coatMotion.y);
        ${n?`float touchFalloff = petContact.w*(1.0-smoothstep(.018,.071,distance(position,petContact.xyz)));
        vec3 strokeAlongCoat = petStroke-normal*dot(normal,petStroke);
        transformed += (strokeAlongCoat*.010-normal*.0028) * strandFreedom * touchFalloff;`:""}`),i.fragmentShader=i.fragmentShader.replace("#include <normal_fragment_maps>",`normal *= faceDirection;
#include <normal_fragment_maps>`))},r.customProgramCacheKey=()=>{let i=e?"retriever-groomed-strands":t?"retriever-fiber-pattern":"puppy-coat-color";return n?i+"-pet":i},r}var Wg=115e3,Xg=[[-.1097,.323,.1752],[-.0623,.323,.1752]];function Wd(r){return r.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 shibaPos;
        varying vec3 shibaNorm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        shibaPos = position;
        shibaNorm = normal;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 shibaPos;
        varying vec3 shibaNorm;
        float shibaHash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float shibaNoise(vec2 uv) {
          vec2 cell = floor(uv), f = fract(uv);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(shibaHash(cell), shibaHash(cell + vec2(1.0, 0.0)), f.x),
            mix(shibaHash(cell + vec2(0.0, 1.0)), shibaHash(cell + 1.0), f.x),
            f.y
          );
        }`).replace("#include <map_fragment>",`#include <map_fragment>
        float coatY = dot(diffuseColor.rgb, vec3(.2126, .7152, .0722));
        float dEyeL = distance(shibaPos, vec3(-.1097, .3230, .1752));
        float dEyeR = distance(shibaPos, vec3(-.0623, .3230, .1752));
        float eyeZone = (1.0 - smoothstep(.0075, .0115, min(dEyeL, dEyeR))) * (1.0 - smoothstep(.10, .24, coatY));
        vec3 nRel = (shibaPos - vec3(-.086, .300, .201)) / vec3(.018, .011, .016);
        float noseZone = (1.0 - smoothstep(.78, 1.08, length(nRel))) * (1.0 - smoothstep(.08, .20, coatY));
        float mouthZone = smoothstep(.170, .182, shibaPos.z) * smoothstep(.266, .274, shibaPos.y) *
          (1.0 - smoothstep(.290, .296, shibaPos.y)) * (1.0 - smoothstep(.026, .036, abs(shibaPos.x + .086)));
        float wetMask = clamp(max(max(eyeZone, noseZone), mouthZone), 0.0, 1.0);
        // Subtle warm amber-brown iris depth on dark eyes
        float irisRing = eyeZone * smoothstep(.012, .055, coatY) * (1.0 - smoothstep(.09, .18, coatY));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.14, .065, .022), irisRing * .55);
        // Directional fur fiber micro-detail with bilateral spinal flow on the back
        vec3 fn = normalize(shibaNorm);
        float spineSide = sign(shibaPos.x + .086);
        float backMask = (1.0 - smoothstep(.04, .11, shibaPos.z)) * smoothstep(.08, .15, shibaPos.y);
        float sideFlow = mix(shibaPos.x + .12 * shibaPos.y, shibaPos.z - .35 * shibaPos.y + .15 * shibaPos.x,
          smoothstep(.30, .82, abs(fn.x)));
        float spineFlow = abs(shibaPos.x + .086) * 1.15 - .28 * shibaPos.y - .18 * shibaPos.z;
        float flowU = mix(sideFlow, spineFlow, backMask * .75);
        vec2 furUV = vec2(flowU * 480.0, shibaPos.y * 62.0 + spineSide * .35);
        float fine = shibaNoise(furUV) - .5;
        float fine2 = shibaNoise(furUV * vec2(1.9, .85) + 11.3) - .5;
        float clump = shibaNoise(furUV * vec2(.30, .58) + 4.7) - .5;
        float aa = 1.0 - smoothstep(.35, 1.65, fwidth(furUV.x));
        float furRegion = 1.0 - wetMask;
        diffuseColor.rgb *= 1.0 + furRegion * ((.095 * fine + .055 * fine2) * aa + (.058 + .035 * backMask) * clump);
        // Gentle crevice AO under chin and chest fold
        float chinAO = smoothstep(.11, .165, shibaPos.z) * (1.0 - smoothstep(.245, .280, shibaPos.y)) *
          smoothstep(.215, .255, shibaPos.y) * (1.0 - smoothstep(.025, .065, abs(shibaPos.x + .086)));
        diffuseColor.rgb *= 1.0 - .14 * chinAO;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float pebble = shibaNoise(shibaPos.xy * 1250.0 + shibaPos.z * 850.0) * .65 +
          shibaNoise(shibaPos.xy * 2400.0 - shibaPos.z * 1600.0) * .35;
        float furRough = clamp(.88 + .06 * fine * aa, .80, .96);
        roughnessFactor = mix(furRough, .28, mouthZone);
        roughnessFactor = mix(roughnessFactor, .15 + .10 * pebble, noseZone);
        roughnessFactor = mix(roughnessFactor, .03, eyeZone);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        if (noseZone > .02) {
          vec3 dPosX = dFdx(vViewPosition);
          vec3 dPosY = dFdy(vViewPosition);
          vec3 r1 = cross(dPosY, normal);
          vec3 r2 = cross(normal, dPosX);
          float det = dot(dPosX, r1);
          if (abs(det) > 1e-8) {
            vec3 surfGrad = sign(det) * (dFdx(pebble) * r1 + dFdy(pebble) * r2);
            normal = normalize(abs(det) * normal - noseZone * .0022 * surfGrad);
          }
        }`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
        material.clearcoat = max(max(eyeZone, noseZone * .90), mouthZone * .42);
        material.clearcoatRoughness = max(mix(.12, .03, eyeZone), .0525);`)},r.customProgramCacheKey=()=>"shiba-pbr-multizone",r}function Xd(r,e,t,n=!1,i=null,s=!1){let a=r.geometry,{position:o,normal:l,uv:c,skinIndex:h,skinWeight:u}=a.attributes,d=new Ee,p=new Ee,f=new Ee,g=a.index.array.subarray(0,t),m=new Float32Array(g.length/3),_=new M,v=new M,x=new M,y=0;for(let $=0;$<g.length;$+=3)_.fromBufferAttribute(o,g[$]),v.fromBufferAttribute(o,g[$+1]).sub(_),x.fromBufferAttribute(o,g[$+2]).sub(_),y+=v.cross(x).length()*.5,m[$/3]=y;let b=50325;function S(){return b=Math.imul(b,1664525)+1013904223>>>0,b/4294967296}function C(){let $=S()*y,ee=0,K=m.length-1;for(;ee<K;){let j=ee+K>>>1;m[j]<$?ee=j+1:K=j}return ee*3}let R=[],I=[],N=[],D=[],H=[],k=[],L=[],W=[],X=[],se=new Float32Array(3),te=new Float32Array(r.skeleton.bones.length),ce=[...te.keys()],he=new M,Z=new M,le=new M,ue=new M,de=new M,me=new M,A=new M,w=new M,B=new M,O=0,U=0,F=0;function E($,ee,K=0,j=null){R.push($.x,$.y,$.z),I.push(Z.x,Z.y,Z.z),N.push(O,U),j?D.push(j.r*ee,j.g*ee,j.b*ee):D.push(ee,ee*.966,ee*.94),n&&H.push(B.x*K,B.y*K,B.z*K),i&&k.push(K);for(let ae=0;ae<4;ae++){let J=ce[ae];L.push(J),W.push(te[J]/F)}}let P=s?Wg:n?Gg:Vg;for(let $=0;$<P;$++){let ee=C(),K=Math.sqrt(S());se[0]=1-K,se[1]=K*S(),se[2]=1-se[0]-se[1],he.set(0,0,0),Z.set(0,0,0),te.fill(0),O=0,U=0;for(let rt=0;rt<3;rt++){let G=g[ee+rt],lt=se[rt];he.addScaledVector(le.fromBufferAttribute(o,G),lt),Z.addScaledVector(le.fromBufferAttribute(l,G),lt),c&&(O+=c.getX(G)*lt,U+=c.getY(G)*lt);for(let ct=0;ct<4;ct++){let $e=h.getComponent(G,ct);te[$e]+=u.getComponent(G,ct)*lt}}let j=he.x,ae=he.y,J=he.z;if(ae<.009)continue;if(s){if(J>.166&&ae>.264&&ae<.296&&Math.abs(j+.086)<.036||((j+.086)/.019)**2+((ae-.301)/.013)**2+((J-.203)/.018)**2<1||Xg.some(([ge,Me,Re])=>(j-ge)**2+(ae-Me)**2+(J-Re)**2<18e-5)||(Z.normalize(),Z.lengthSq()<.5))continue;ce.sort((ge,Me)=>te[Me]-te[ge]),F=te[ce[0]]+te[ce[1]]+te[ce[2]]+te[ce[3]];let rt=j+.086,G=Math.abs(rt),lt=we(ae,.012,.024)*(1-we(ae,.042,.062))*we(J,.055,.085),ct=(1-we(ae,.055,.115))*we(J,.035,.085)*(1-.75*lt),$e=we(J,.155,.19)*we(ae,.275,.31)*(1-we(G,.022,.042)),an=we(ae,.32,.348)*we(J,.13,.172),qt=we(ae,.338,.36),ut=Math.max(ct,$e,an*.75,qt*.85);if(ut>.65&&S()<ut*.42)continue;let dt=we(ae,.265,.315)*(1-we(ae,.325,.352))*we(J,.105,.155)*(1-we(J,.165,.185))*we(G,.028,.052),At=we(ae,.105,.175)*(1-we(ae,.255,.295))*we(J,.025,.095),Ut=1-we(J,-.11,-.065),vn=(1-we(J,.035,.095))*we(ae,.115,.185)*(1-Ut),_n=(1-we(J,-.075,-.015))*(1-we(ae,.105,.165))*(1-Ut),Yt=j*270+Math.sin(ae*155+J*95)*2.1,kn=J*235-ae*190+j*80,Vn=.5+.5*Math.sin(Yt)*Math.sin(kn),Zt=Math.cos(Yt)*.35,Pn=S()*(.58+.58*Vn),pn=(.0058+.0072*Pn**1.25)*(1-.64*ut),pt=.0055*dt+.0072*At+.0085*Ut+.006*_n+.0045*lt,kt=pn+pt*(.55+.65*Pn),bt=(2e-4+S()*18e-5)*(1-.32*ut+.3*Ut),T=we(ae,.265,.315)*we(J,.1,.165),q=vn*Math.sign(rt||1)*(1.35+.9*we(G,.005,.045));ue.set(rt*(1.5+1.8*dt)+q+Zt*(.35+.65*vn)+(S()-.5)*.34,-1-.55*lt+.55*T+.95*Ut*(Z.y>0?.7:-.3),-.55-.85*T-.55*vn+.55*At+.45*lt-.65*Ut+(S()-.5)*.28),ue.addScaledVector(Z,-ue.dot(Z)),ue.lengthSq()<1e-5&&ue.set(0,-1,0),ue.normalize(),de.crossVectors(Z,ue).normalize();let ne=.26+.24*dt+.22*At+.42*Ut+.18*_n-.12*ut;he.addScaledVector(Z,-35e-5),me.copy(he).addScaledVector(Z,kt*ne).addScaledVector(ue,kt*.46),A.copy(he).addScaledVector(Z,kt*(ne*1.25)).addScaledVector(ue,kt*.96);let oe=we(Z.y,.35,.85)*(1-we(J,.08,.15))*we(ae,.12,.24)*(S()<.26?.22:0),Y=.92+.18*Vn+(S()-.5)*.08;d.setRGB(.7*Y,.66*Y,.62*Y),f.setRGB((1.06-oe)*Y,(1.04-oe*1.15)*Y,(1.01-oe*1.25)*Y),p.copy(d).lerp(f,.58);let pe=R.length/3;E(w.copy(he).addScaledVector(de,-bt),1,0,d),E(w.copy(he).addScaledVector(de,bt),1,0,d),E(w.copy(me).addScaledVector(de,-bt*.62),1,0,p),E(w.copy(me).addScaledVector(de,bt*.62),1,0,p),E(A,1,0,f),X.push(pe,pe+1,pe+2,pe+2,pe+1,pe+3,pe+2,pe+3,pe+4);continue}if(n){let rt=j+.08,G=Math.abs(rt);if(J>.166&&ae>.295&&ae<.342&&G<.036||(rt/.022)**2+((ae-.334)/.018)**2+((J-.206)/.022)**2<1||J>.152&&ae>.332&&ae<.366&&G>.012&&G<.042||(Z.normalize(),Z.lengthSq()<.5))continue;ce.sort((pe,ge)=>te[ge]-te[pe]),F=te[ce[0]]+te[ce[1]]+te[ce[2]]+te[ce[3]];let lt=(1-we(ae,.055,.13))*we(J,.035,.105),ct=we(ae,.045,.09)*(1-we(ae,.145,.195))*we(J,.005,.055)*(1-we(J,.062,.092))*we(G,.022,.055),$e=we(J,.15,.192)*we(ae,.305,.36)*(1-we(G,.025,.05)),an=we(ae,.348,.395)*we(J,.105,.168),qt=Math.max(lt*(1-.75*ct),$e,an*.78);if(qt>.62&&S()<qt*.48)continue;let ut=we(ae,.115,.185)*(1-we(ae,.255,.31))*we(J,.055,.125),dt=we(ae,.275,.318)*(1-we(ae,.358,.392))*(1-we(J,.135,.172))*we(G,.026,.056),At=we(j,-.015,.065)*(1-we(J,-.13,-.068))*(1-we(ae,.045,.09)),Ut=(1-we(J,.025,.095))*we(ae,.12,.21)*(1-At),vn=(1-we(J,-.095,-.015))*(1-we(ae,.11,.185))*(1-At),_n=j*210+Math.sin(ae*120+J*85)*2.4,Yt=J*185-ae*150+j*65,kn=.5+.5*Math.sin(_n)*Math.sin(Yt),Vn=Math.cos(_n)*.42,Zt=S()*(.56+.6*kn),Pn=(.0065+.0085*Zt**1.2)*(1-.68*qt),pn=.0095*ut+.0085*dt+.0135*At+.007*vn+.0065*ct+.004*Ut,pt=Pn+pn*(.55+.65*Zt),kt=(21e-5+S()*2e-4)*(1-.36*qt+.28*At+.15*ut),bt=an*(1-dt),T=Ut*Math.sign(rt||1)*(1.15+.8*we(G,.006,.05));ue.set(rt*(.95+1.5*bt)+T+Vn*(.38+.55*Ut+.45*dt)+1.35*At+(S()-.5)*.28,-1.05+.72*At+.42*bt-.35*dt-.25*ut,-.52-.68*bt+.72*ut-.58*At-.42*ct+(S()-.5)*.24),ue.addScaledVector(Z,-ue.dot(Z)),ue.lengthSq()<1e-5&&ue.set(0,-1,0),ue.normalize(),de.crossVectors(Z,ue).normalize();let q=.24+.18*ut+.14*dt+.28*At+.16*vn-.12*qt,ne=Math.sin(ae*95+j*70+J*55)*pt*(.12+.14*dt+.12*ut+.16*At);he.addScaledVector(Z,-3e-4),me.copy(he).addScaledVector(Z,pt*q).addScaledVector(ue,pt*.47).addScaledVector(de,ne),A.copy(he).addScaledVector(Z,pt*(q*1.18)).addScaledVector(ue,pt*.96).addScaledVector(de,-ne*.45),B.copy(Z).multiplyScalar(.82).addScaledVector(de,.26).multiplyScalar(pt*(.035+.18*ut+.15*dt+.26*At+.1*ct));let oe=.96+.1*kn+(S()-.5)*.05;d.setRGB(.88*oe,.85*oe,.8*oe),f.setRGB(1.04*oe,1.02*oe,.99*oe),p.copy(d).lerp(f,.58);let Y=R.length/3;E(w.copy(he).addScaledVector(de,-kt),1,0,d),E(w.copy(he).addScaledVector(de,kt),1,0,d),E(w.copy(me).addScaledVector(de,-kt*.6),1,.38,p),E(w.copy(me).addScaledVector(de,kt*.6),1,.38,p),E(A,1,1,f),X.push(Y,Y+1,Y+2,Y+2,Y+1,Y+3,Y+2,Y+3,Y+4);continue}let Se=1-we(Math.abs(j+.091),.038,.08),_e=we(J,.156,.206)*Se,xe=we(J,.142,.195)*we(ae,.295,.325),Ce=Math.max(_e,xe);if(Ce>.4&&S()<Ce*.92||(Z.normalize(),Z.lengthSq()<.5))continue;ce.sort((rt,G)=>te[G]-te[rt]),F=te[ce[0]]+te[ce[1]]+te[ce[2]]+te[ce[3]];let Ne=1-we(ae,.065,.17),Xe=we(ae,.3,.37),Pe=(.0027+.0091*S()**1.5)*(1-.68*Math.max(Ne*.75,Ce,Xe*.56)),Be=(145e-6+S()*205e-6)*(1-Ne*.36),Ft=.76+S()*.3;ue.set((j+.069)*1.9+(S()-.5)*.4,-1,-.5+S()*.33),ue.addScaledVector(Z,-ue.dot(Z)).normalize(),de.crossVectors(Z,ue).normalize(),he.addScaledVector(Z,-38e-5),me.copy(he).addScaledVector(Z,Pe*.47).addScaledVector(ue,Pe*.38),A.copy(he).addScaledVector(Z,Pe*.58).addScaledVector(ue,Pe*.82);let et=R.length/3;E(w.copy(he).addScaledVector(de,-Be),Ft*.68),E(w.copy(he).addScaledVector(de,Be),Ft*.68);let gt=Be*.68;E(w.copy(me).addScaledVector(de,-gt),Ft,.34),E(w.copy(me).addScaledVector(de,gt),Ft,.34),E(A,Ft*.87,1),X.push(et,et+1,et+2,et+2,et+1,et+3,et+2,et+3,et+4)}let z=new Je;z.setAttribute("position",new be(R,3)),z.setAttribute("normal",new be(I,3)),z.setAttribute("uv",new be(N,2)),z.setAttribute("color",new be(D,3)),z.setAttribute("skinIndex",new Li(L,4)),z.setAttribute("skinWeight",new be(W,4)),n&&z.setAttribute("strandBend",new be(H,3)),i&&z.setAttribute("strandFreedom",new be(k,1)),z.setIndex(X);let ie=n?{value:new fe}:null,V=s?new ot({map:e,vertexColors:!0,side:Bi,roughness:.8,specularIntensity:.26,sheen:.55,sheenColor:new Ee("#f7d8b5"),sheenRoughness:.55,envMapIntensity:.46}):wh(new ot({map:e,vertexColors:!0,side:Bi,roughness:n?.82:1,envMapIntensity:n?.58:.4,specularIntensity:n?.2:.11,sheen:n?.55:0,sheenColor:new Ee("#ffebd0"),sheenRoughness:.62}),ie,!1,i);s&&(V.onBeforeCompile=$=>{$.fragmentShader=$.fragmentShader.replace("#include <normal_fragment_maps>",`normal *= faceDirection;
#include <normal_fragment_maps>`)},V.customProgramCacheKey=()=>"shiba-guard-hair");let Q=new Ui(z,V);return Q.name="Coat strands",Q.frustumCulled=!1,Q.bind(r.skeleton,r.bindMatrix),r.add(Q),ie}var{smoothstep:s_,lerp:a_}=Ge;var o_=new Ee("#bf5f22"),l_=new Ee("#d98a3c"),c_=new Ee("#f4dfbc"),h_=new Ee("#8c4a26");function ts(r,e,t,n,i,s,a=0){let o=Math.cos(a),l=Math.sin(a),c=Math.min(n,i,s);return(h,u,d)=>{let p=u-e,f=d-t,g=(h-r)/n,m=(o*p+l*f)/i,_=(o*f-l*p)/s;return(Math.sqrt(g*g+m*m+_*_)-1)*c}}function Ws(r,e,t){let n=Math.max(t-Math.abs(r-e),0)/t;return Math.min(r,e)-n*n*t*.25}var jg=ts(0,30.32,10.44,7,5.3,5.95,-.18),qg=ts(3.7,27.9,12.3,4.7,3.9,4.7,.1),Yg=ts(0,26.34,15.62,3.32,1.58,4.34,-.12),Zg=ts(.84,27.58,17.62,2.4,1.97,3.46,-.19),Kg=ts(0,29.35,15.92,2.06,2.58,3.79,-.32),Jg=ts(4.9,26.6,10,2.8,2.5,4.3,.64);function $g(r,e,t){let n=Math.abs(r),i=Ws(jg(r,e,t),qg(n,e,t),1.35),s=Ws(i,Jg(n,e,t),.92),a=Ws(Zg(n,e,t),Kg(r,e,t),1.18);return Ws(Ws(s,a,.87),Yg(r,e,t),.86)}var jd=.44,u_=Math.cos(jd),d_=Math.sin(jd),Qg=3.2,e0=30.92,t0=13.5;for(let r=13.5;r<18;r+=.024)$g(Qg,e0,r)<0&&(t0=r);var hr=Ge.smoothstep;function Th(r,e){return .278+.004*hr(e,.187,.211)+.001*(1-hr(e,.15,.181))+.001*hr(Math.abs(r+.083),.022,.054)-.005*(1-hr(r,-.103,-.087))*(1-hr(e,.195,.213))}function Ah(r,e){return hr(e,.143,.178)*(1-hr(Math.abs(r+.081),.04,.069))}function qd(r,e=Th,t=Ah){let{position:n,normal:i,uv:s}=r.attributes,a=Array.from(n.array),o=Array.from(i.array),l=[],c=new Float32Array(n.count),h=new Array(n.count).fill(0);for(let v=0;v<n.count;v++)l.push(s.getX(v),s.getY(v)),c[v]=n.getY(v)-e(n.getX(v),n.getZ(v));let u=new Map;function d(v,x){let y=Math.min(v,x)*n.count+Math.max(v,x),b=u.get(y);if(!b){let S=c[v]/(c[v]-c[x]),C=new M().fromBufferAttribute(n,v).lerp(new M().fromBufferAttribute(n,x),S),R=new M().fromBufferAttribute(i,v).lerp(new M().fromBufferAttribute(i,x),S).normalize();b={point:C,surfaceNormal:R,u:Ge.lerp(s.getX(v),s.getX(x),S),v:Ge.lerp(s.getY(v),s.getY(x),S),active:t(C.x,C.z)>.002},u.set(y,b)}return b}function p(v,x){let y=x+1;if(v.vertices??=[],v.vertices[y]!==void 0)return v.vertices[y];let b=v.point.clone();x===0&&b.addScaledVector(v.surfaceNormal,-.008);let S=a.length/3;return a.push(b.x,b.y,b.z),o.push(v.surfaceNormal.x,v.surfaceNormal.y,v.surfaceNormal.z),l.push(v.u,v.v),h.push(x===0?2:x),v.vertices[y]=S,S}let f=[],g=[],m=r.index.array;function _(v,x,y){let b=[];for(let S=0;S<3;S++){let C=v[S];c[C]>=0==(x===1)&&b.push(C),y[S]&&b.push(p(y[S],x))}for(let S=2;S<b.length;S++)f.push(b[0],b[S-1],b[S])}for(let v=0;v<m.length;v+=3){let x=m[v],y=m[v+1],b=m[v+2],S=c[x]>=0;if(S===c[y]>=0&&S===c[b]>=0){f.push(x,y,b);continue}let C=[x,y,b],R=C.map((se,te)=>{let ce=C[(te+1)%3];return c[se]>=0==c[ce]>=0?null:d(se,ce)});if(!R.some(se=>se?.active)){f.push(x,y,b);continue}_(C,1,R),_(C,-1,R);let[I,N]=R.filter(Boolean),D=p(I,1),H=p(N,1),k=p(I,0),L=p(N,0),W=p(I,-1),X=p(N,-1);g.push(D,H,L,D,L,k,k,L,X,k,X,W)}return r.setAttribute("position",new be(a,3)),r.setAttribute("normal",new be(o,3)),r.setAttribute("uv",new be(l,2)),r.setIndex(f.concat(g)),r.clearGroups(),r.addGroup(0,f.length,0),r.addGroup(f.length,g.length,1),{lipSides:h,exteriorCount:f.length}}var Xs=1.65,Zn={contact:1.24,grip:1.45,lift:1.58,tuck:1.74,hide:1.95,duration:4200,chews:[{open:2,peak:2.12,close:2.18,end:2.31,weight:1},{open:2.4,peak:2.49,close:2.55,end:2.72,weight:.75},{open:2.85,peak:2.98,close:3.07,end:3.23,weight:.56}]},zt=Ge.smoothstep;function Rh(r,e,t,n=.01,i=.013){let s=r.position.clone(),a=e.position.clone(),o=t.position.clone(),l=s.clone().add(a).add(o),c=a.length(),h=o.length(),u=a.clone().normalize(),d=o.clone().normalize(),p=l.clone().sub(s).normalize(),f=a.clone().addScaledVector(p,-a.dot(p)).normalize(),g=new M,m=new M,_=new M,v=new M,x=new xt;return y=>{r.position.copy(s),r.position.y-=y*n,r.position.z+=y*i;let b=g.subVectors(l,r.position).length();g.normalize(),m.copy(f).addScaledVector(g,-f.dot(g)).normalize();let S=(c**2-h**2+b**2)/(2*b),C=Math.sqrt(Math.max(0,c**2-S**2));_.copy(g).multiplyScalar(S).addScaledVector(m,C),r.quaternion.setFromUnitVectors(u,v.copy(_).normalize()),x.copy(r.quaternion).invert(),v.subVectors(l,r.position).sub(_).normalize().applyQuaternion(x),e.quaternion.setFromUnitVectors(d,v),t.quaternion.multiplyQuaternions(r.quaternion,e.quaternion).invert()}}function Yd(r,e){let t=r.attributes.position;for(let n=0;n<t.count;n++){let i=t.getX(n),s=t.getY(n),a=t.getZ(n),o=(1-zt(s,.013,.041))*zt(a,.089,.134),l=i>-.086?-.046:-.126,c=Math.abs(i-l),h=o*(1-zt(c,.015,.029)),u=zt(s,.032,.049)*(1-zt(s,.064,.085))*zt(a,.069,.102)*(1-zt(c,.016,.034)),d=Math.abs(s-e(i,a)),f=9e-4*(zt(a,.155,.182)*(1-zt(a,.194,.209))*zt(Math.abs(i+.08),.018,.03))*(1-zt(d,7e-4,.004)),g=i<-.08?1:-1,m=Math.max(1-zt(Math.abs(i-l-.008),.001,.0035),1-zt(Math.abs(i-l+.007),.001,.0035)),_=zt(i,.017,.078)*(1-zt(a,-.128,-.081))*(1-zt(s,.035,.069));t.setXYZ(n,i-.11*(i-l)*u+g*f,s-.0038*h*zt(s,.003,.013)-.33*_*Math.max(0,s-.013),a-.0036*h*m+.23*_*(-.15-a))}t.needsUpdate=!0}var re=Ge.smoothstep,Ch=Ge.lerp,Rn=1.16,Kd=1.45,js=[["body",null,[0,0,0]],["chest","body",[-.095,.144,.017]],["neck","chest",[-.1,.227,.074]],["head","neck",[-.1,.301,.125]],["jaw","head",[-.086,.29,.155]],["earOutside","head",[-.16,.351,.109]],["earInside","head",[-.036,.354,.112]],["shoulder","body",[-.153,.178,.045]],["elbow","shoulder",[-.164,.109,.012]],["wrist","elbow",[-.171,.039,.004]],["tailBase","body",[.046,.042,-.166]],["tailTip","tailBase",[.113,.024,-.188]]],n0=[["nearShoulder","body",[-.042,.187,.089]],["nearElbow","nearShoulder",[-.044,.109,.077]],["nearWrist","nearElbow",[-.048,.034,.104]]],i0={neck:[-.08,.25,.077],head:[-.08,.327,.122],jaw:[-.08,.326,.15],earOutside:[-.122,.382,.107],earInside:[-.036,.382,.107],shoulder:[-.128,.18,.089],elbow:[-.126,.108,.076],wrist:[-.126,.035,.105],tailBase:[-.012,.037,-.124],tailTip:[.025,.016,-.153]},r0={chest:[-.086,.162,.032],neck:[-.086,.236,.074],head:[-.086,.295,.118],jaw:[-.086,.286,.162],earOutside:[-.125,.348,.135],earInside:[-.047,.348,.135],shoulder:[-.112,.172,.076],elbow:[-.109,.104,.064],wrist:[-.105,.026,.098],nearShoulder:[-.06,.172,.076],nearElbow:[-.063,.104,.064],nearWrist:[-.067,.026,.098],tailBase:[-.086,.048,-.088],tailTip:[-.095,.095,-.135]};function s0(r,e){return .282+.002*re(e,.185,.205)}function a0(r,e){return re(e,.162,.182)*(1-re(Math.abs(r+.086),.02,.036))}function o0(r,e,t,n){let i=r+.086,s=re(t,.044,.078)*re(Math.abs(i),.005,.02)*(1-re(e,.12,.205)),a=(1-re(t,-.105,-.072))*(1-re(e,.13,.175)),o=re(e,.342,.362)*(1-re(t,.155,.185));return{frontLeg:s*(1-re(i,-.004,.004)),nearLeg:s*re(i,-.004,.004),chest:re(e,.095,.205)*re(t,-.055,.045),neck:re(e,.2,.275)*re(t,.015,.095),head:Math.max(re(e,.258,.3)*re(t,.045,.115),re(t,.145,.175)*re(e,.25,.275),n*re(e,.252,.282)),tail:a,tailTip:1-re(t,-.145,-.1),earOutside:(1-re(i,-.034,-.018))*o,earInside:re(i,.018,.034)*o}}function Zd(r,e){return .323+.009*re(e,.184,.21)-.001*re(-r,.076,.104)}function l0(r,e){return re(e,.148,.183)*(1-re(Math.abs(r+.08),.032,.062))}function c0(r,e,t,n){let i=(1-re(Math.abs(r+.128),.024,.049))*re(t,.027,.07)*(1-re(e,.155,.225)),s=(1-re(Math.abs(r+.047),.018,.035))*re(t,.028,.07)*(1-re(e,.15,.23)),a=re(r,.001,.032)*(1-re(e,.03,.057))*(1-re(t,-.135,-.08)),o=re(e,.108,.256)*re(t,-.109,.093),l=re(e,.199,.327)*re(t,-.015,.11),c=Math.max(re(e,.301,.346)*re(t,.003,.078),re(t,.111,.161)*re(e,.269,.309),n*re(e,.27,.312)),h=re(e,.277,.306)*(1-re(e,.369,.395))*(1-re(t,.132,.16));return{frontLeg:i,nearLeg:s,tail:a,chest:o,neck:l,head:c,tailTip:re(r,.025,.067),earOutside:re(-r,.112,.136)*h,earInside:(1-re(-r,.027,.051))*h}}function h0(r,e,t,n){let i=Math.abs(r-Ch(-.173,-.15,re(e,.014,.176))),s=Ch(-.064,-.028,re(e,.115,.198)),a=(1-re(i,.025,.06))*re(t,s,s+.031)*(1-re(e,.144,.214)),o=re(r,.049,.094)*(1-re(e,.031,.062))*(1-re(t,-.089,-.018)),l=re(e,.11,.224)*re(t,-.079,.093),c=re(e,.204,.283)*re(t,.015,.1),h=Math.max(re(e,.273,.321)*re(t,.007,.085),re(t,.127,.166)*re(e,.231,.267),n*re(e,.234,.262)),u=re(e,.252,.285)*(1-re(e,.345,.373))*(1-re(t,.155,.185));return{frontLeg:a,tail:o,chest:l,neck:c,head:h,tailTip:re(r,.104,.155),earOutside:re(-r,.147,.174)*u,earInside:(1-re(-r,.017,.05))*u}}function u0(r,e,t,n,i,s,a=!1){let o=r.attributes.position,l=new Uint16Array(o.count*4),c=new Float32Array(o.count*4),h=new Float32Array(s),u=[...h.keys()];for(let d=0;d<o.count;d++){let p=o.getX(d),f=o.getY(d),g=o.getZ(d),m=i(p,g),{frontLeg:_,nearLeg:v=0,tail:x,chest:y,neck:b,head:S,tailTip:C,earOutside:R,earInside:I}=t(p,f,g,m),N=1-re(f,.028,.067),D=1-re(f,.09,.138),H=Math.max(0,1-_-v-x),k=e[d],L=m*(k===-1?1:k===1?0:k===2?.5:1-re(f-n(p,g),a?-.003:-.006,a?.003:.007)),W=!a&&s>js.length&&k===0?.13*re(g,.126,.149)*(1-re(g,.153,.183))*re(f,.3,.316)*(1-re(f,.326,.345))*re(Math.abs(p+.08),.015,.035):0,X=Math.max(L,W),se=H*S;h[0]=H*(1-S)*(1-b)*(1-y),h[1]=H*(1-S)*(1-b)*y,h[2]=H*(1-S)*b,h[3]=se*(1-X-R-I),h[4]=se*X,h[5]=se*R,h[6]=se*I,h[7]=_*(1-D),h[8]=_*D*(1-N),h[9]=_*D*N,h[10]=x*(1-C),h[11]=x*C,v?(h[12]=v*(1-D),h[13]=v*D*(1-N),h[14]=v*D*N):s>js.length&&h.fill(0,js.length),u.sort((ce,he)=>h[he]-h[ce]);let te=h[u[0]]+h[u[1]]+h[u[2]]+h[u[3]];for(let ce=0;ce<4;ce++){let he=d*4+ce;l[he]=u[ce],c[he]=h[u[ce]]/te}}r.setAttribute("skinIndex",new Li(l,4)),r.setAttribute("skinWeight",new be(c,4))}function d0(r){let e=r.attributes.position,t=-.086;for(let n=0;n<e.count;n++){let i=e.getX(n),s=e.getY(n),a=e.getZ(n),o=i-t,l=Math.abs(o),c=o<0?-1:1,h=re(s,.07,.14)*(1-re(s,.195,.255)),u=re(a,-.105,-.005),d=.175*h*u;i=t+o*(1-d);let p=re(s,.19,.235)*(1-re(s,.248,.282));i+=o*.085*p,a+=.0045*p*re(a,.035,.115);let g=re(s,.006,.035)*(1-re(s,.095,.145))*re(a,.035,.075)*re(l,.003,.016)*(1-re(l,.036,.058));i+=c*.0038*g;let m=(1-re(a,-.035,.065))*(1-re(l,.038,.08)),_=re(s,.195,.24)*(1-re(s,.258,.295))*m;a+=.011*_;let v=re(s,.135,.18)*(1-re(s,.195,.232))*(1-re(a,-.075,.015));a-=.006*v;let x=re(s,.105,.155)*(1-re(s,.185,.232))*re(a,.082,.135);a-=.014*x;let y=re(s,.08,.112)*(1-re(s,.128,.165))*re(a,.025,.075)*(1-re(a,.09,.125))*re(l,.018,.045);a-=.008*y;let b=(1-re(s,.018,.062))*re(a,.055,.095)*(1-re(l,.04,.062));a+=.005*b;let S=re(s,.038,.078)*(1-re(s,.105,.145))*re(a,-.065,-.005)*(1-re(a,.025,.065))*re(l,.028,.058);a-=.01*S,s+=.005*S;let C=(1-re(s,.028,.062))*re(a,-.085,-.01)*(1-re(a,.03,.068))*re(l,.032,.056);a-=.013*C,e.setXYZ(n,i,Math.max(s,.001),a)}r.computeVertexNormals()}async function Ih(r=!1,e=!1,t=!1,n=!1,i=!1){let s=n?"shiba-scan.glb":r?"golden-retriever.glb":"puppy.glb",o=(await new yo().loadAsync(Jt(s))).scene.getObjectByProperty("isMesh",!0),l=o.geometry;n?(l.scale(.004304,.004304,.004304),l.translate(-.08569,.00199,-.04472),d0(l)):r&&(l.scale(.214,.214,.214),l.translate(-.058,.20441,.024),Yd(l,Zd));let c=n?s0:r?Zd:Th,h=n?a0:r?l0:Ah,{lipSides:u,exteriorCount:d}=n?{lipSides:new Int8Array(l.attributes.position.count),exteriorCount:l.index.count}:qd(l,c,h),p=r?js.concat(n0):js;u0(l,u,n?o0:r?c0:h0,c,h,p.length,n);let f=n?r0:r?i0:{},g=new Map;for(let[P,z,ie]of p){let V=f[P]??ie,Q=new ir;if(Q.name=P,Q.position.set(...V),z){let $=g.get(z);Q.position.sub($.bindPosition),$.joint.add(Q)}g.set(P,{joint:Q,bindPosition:new M(...V)})}let m=t&&!e&&!n?{contact:{value:new Ke},stroke:{value:new M}}:null,_=n?e?new gn({color:"#b7b0a8",roughness:.86,side:o.material.side}):Wd(new ot({map:o.material.map??o.material.emissiveMap,color:"#ffffff",roughness:.88,side:o.material.side,specularIntensity:.32,clearcoat:1,clearcoatRoughness:.05,sheen:.5,sheenColor:new Ee("#f5d2ab"),sheenRoughness:.65,envMapIntensity:.65})):wh(new ot({map:e?null:o.material.map??o.material.emissiveMap,color:e?"#b8b6b2":r?"#f6ebd8":"#ffffff",roughness:r?.84:.92,side:o.material.side,specularIntensity:r?.28:.23,sheen:r&&!e?.54:0,sheenColor:new Ee("#f7d8a8"),sheenRoughness:.56,envMapIntensity:r?.56:.48}),null,r&&!e,m);_.map&&(_.map.anisotropy=8);let v=n?null:new gn({color:e?"#353535":r?"#41292a":"#28171a",side:Bi,roughness:.98,envMapIntensity:.23}),x=new Ui(l,n?_:[_,v]);x.name="Puppy",x.castShadow=!0,x.receiveShadow=!1,x.frustumCulled=!1,x.add(g.get("body").joint),x.updateMatrixWorld(!0),x.bind(new qr([...g.values()].map(P=>P.joint)));let y=e?null:Xd(x,_.map,d,n?!1:r,m,n),b=P=>g.get(P).joint,S=null;if(n&&!e){let P=g.get("head").bindPosition,z=new ot({color:"#ffffff",transparent:!0,opacity:.15,roughness:.02,metalness:0,ior:1.44,clearcoat:1,clearcoatRoughness:.02,reflectivity:1,envMapIntensity:2.6,depthWrite:!1}),ie=new wt(.0076,20,14);ie.scale(1,.92,.78);for(let[ee,K,j,ae]of[[-.1097,.323,.1764,-.28],[-.0623,.323,.1764,.28]]){let J=new Ze(ie,z);J.position.set(ee-P.x,K-P.y,j-P.z),J.rotation.y=ae,b("head").add(J)}let V=new gn({color:"#2a201a",roughness:.45,transparent:!0,opacity:.62}),Q=new tn;Q.name="Shiba whiskers";let $=(ee,K,j,ae)=>{let J=new Zr(new M(...ee).sub(P),new M(...K).sub(P),new M(...j).sub(P)),Se=new li(J,6,ae,4,!1);Q.add(new Ze(Se,V))};for(let ee of[-1,1]){for(let[ae,J,Se,_e,xe]of[[.294,.196,.034,-.004,-.008],[.291,.197,.038,-.009,-.011],[.289,.195,.035,-.013,-.013],[.293,.192,.031,-.006,-.016],[.287,.192,.028,-.014,-.015]]){let Ce=-.086+ee*.014;$([Ce,ae,J],[Ce+ee*Se*.55,ae+_e*.35,J+xe*.45],[Ce+ee*Se,ae+_e,J+xe],22e-5)}let j=-.086+ee*.016;$([j,.331,.177],[j+ee*.009,.341,.175],[j+ee*.018,.347,.17],2e-4),$([j+ee*.004,.332,.176],[j+ee*.013,.341,.173],[j+ee*.022,.345,.167],18e-5)}b("head").add(Q)}let C=b("jaw"),R=b("head");n&&R.scale.setScalar(.93);let I=b("neck"),N=b("chest"),D=R.position.clone(),H=I.position.clone(),k=n?-.086:t?-.074:-.063,L=n?.201:t?.196:.19,W=c(k,L),X=new M(k,W,L).sub(g.get("head").bindPosition),se=new M(k,W,L).sub(g.get("jaw").bindPosition),te=new M,ce=new M,he=new M,Z=new xt,le=r?[Rh(b("shoulder"),b("elbow"),b("wrist"),n?.032:void 0,n?.024:void 0),Rh(b("nearShoulder"),b("nearElbow"),b("nearWrist"),n?.032:void 0,n?.024:void 0)]:[],ue=new M(...r?[-.079,.324,.202]:[-.071,.272,.205]).sub(g.get("jaw").bindPosition);function de(P,z,ie,V,Q){return re(P,z,ie)*(1-re(P,V,Q))}let me=N.position.clone(),A=new M,w=new M;function B(P,z,ie){P.worldToLocal(E(ce)),P.worldToLocal(w.copy(A));let V=ce,Q=w,$=Math.atan2(V.z*Q.x-V.x*Q.z,V.z*Q.z+V.x*Q.x),ee=Math.atan2(V.y*Q.z-V.z*Q.y,V.y*Q.y+V.z*Q.z);P.rotation.y=Ge.clamp(P.rotation.y+.65*$,-ie,ie),P.rotation.x=Ge.clamp(P.rotation.x+.65*ee,-.055,z)}function O(P,z){A.copy(E(ce)).lerp(P,z);for(let ie=0;ie<4;ie++)B(N,.64,.1),B(I,.78,.22),B(R,.68,.28);he.subVectors(A,E(ce)),he.applyQuaternion(N.parent.getWorldQuaternion(Z).invert()),he.x=Ge.clamp(he.x,-.024,.024),N.position.add(he.clampLength(0,.055))}function U(P,z,ie,V,Q,$=null,ee=null,K=!1){let j=V?0:1,ae=Math.sin(P*3.7)*.008*j,J=z??-1,{contact:Se,grip:_e,lift:xe}=Zn,Ce=r?Se:Rn,Ne=1-re(J,r?3.49:2.69,r?4.06:3.25),Xe=1-.77*re(J,r?xe:Rn+.04,r?2.04:1.55),ye=re(J,.22,r?1.18:1.14)*Xe*Ne,Pe=re(J,.36,Ce)*Xe*Ne,Be=re(J,.48,Ce)*Xe*Ne,Ft=de(J,0,.21,.31,.61),dn=de(J,.68,.79,.83,.96),et=r?Ch(.26*de(J,.99,1.19,1.27,_e),.116,re(J,1.27,_e))*(1-re(J,1.76,1.96)):de(J,Rn-.11,Rn-.01,Rn+.025,Rn+.115),gt=r?Zn.chews.reduce((ge,{open:Me,peak:Re,close:De,end:Fe,weight:Le})=>ge+de(J,Me,Re,De,Fe)*Le,0):de(J,Kd,1.59,1.65,1.84)+de(J,1.93,2.035,2.075,2.23)*.92+de(J,2.32,2.43,2.46,2.6)*.69,rt=r?de(J,1.74,2.13,3.22,4.04):de(J,1.23,1.55,2.6,3.22),G=r?de(J,3.35,3.47,3.54,3.74):de(J,2.63,2.72,2.76,2.9),lt=r?re(J,.54,1.31)*(1-re(J,1.69,2.19)):Be,ct=ie===null?0:re(ie,.12,.88)*(1-re(ie,2.47,3.19)),$e=ct*Math.sin(Math.max(0,(ie??0)-.65)*10.8)*j,an=ie===null?0:re(ie,0,.48),qt=j&&t&&$!==null?1-re(J,0,.24):0,ut=$??0,dt=qt*de(ut,0,.18,1.1,Xs),At=qt*de(ut,0,.23,.53,1.39),Ut=qt*de(ut,.14,.31,.76,1.34),vn=(ut-.14)*Math.PI*3.2,_n=Ut*Math.sin(vn),Yt=Ut*Math.sin(vn-.7),kn=j&&t&&z===null&&ie===null?.045*Math.sin(P*1.2):0,Vn=t&&!K&&ie===null?1-re(J,.15,.67)+re(J,3.48,4.06):0,Zt=z===null&&ie===null?(ee?.strength??0)*j:0,Pn=n&&!K?.13*(1-re(J,.12,.83)*Ne):0,pn=r&&ie===null?Math.max(qt*de(ut,.15,.42,1.22,Xs),.82*Zt):0,pt=n&&K==="smile"?1:0,kt=n&&K==="chew"?1:0,bt=K==="pant"?.91:K==="smile"?.24:pn;N.position.set(me.x,me.y-(n?.038:r?.067:.053)*ye+(n?.006*bt:0),me.z+(n?.028:r?.022:.052)*ye+(n?.005*bt:0)),N.rotation.set((n?.4:r?.55:.48)*ye+ae*(1-Pe)-.039*an-(n?.055*bt:0),0,.077*ct);let T=n?-.12*(1-Pe):0;if(b("neck").rotation.set(T+(n?.5:r?.4:.34)*Pe-.034*G-.035*an-.05*pt+.04*bt,-.095*Ft+.05*ct+.045*_n+.06*pt-.04*kt,-.013*j*Math.sin(P*1.7)*(1-Pe)+.04*pt),b("head").rotation.set(-T*.96+(n?.42:r?.25:.206)*Be+.086*Ft+.027*dn+.004*gt-.06*an+(n?.075:.15)*Vn-.13*At-.065*Zt-.08*pt+.05*bt+.06*kt,.105*rt+.051*Math.sin(P*1.34)*(1-Pe)*j-.055*Vn+.25*_n+.075*Zt+Pn+.05*pt,-.085*an+.04*$e+kn-.065*_n+.2*Zt+.12*pt-.07*kt),C.rotation.x=n?et*.42+.18*gt+(.22+.022*Math.sin(P*12))*bt+.04*pt:(r?et:.155*et)+(r?.28:.332)*gt+.014*an+.185*pn,C.rotation.y=-.012*gt,S){let ge=(P+.46)%4.63,Me=Math.max(de(ge,.19,.28,.3,.43),.72*de(ge,.62,.68,.7,.81)),Re=K==="smile"?1:Math.max(dt,.62*Zt);S(j*Me,Re,C.rotation.x)}let q=n?.22*bt-.08*pt:0,ne=n?.18*bt-.05*pt:0;if(b("earOutside").rotation.set(-.084*lt-.024*dn+.032*pn-q,0,.036*$e+.021*lt+.095*Yt-.052*pn+ne),b("earInside").rotation.set(-.098*lt-.019*dn+.028*pn-q,0,-.036*$e-.018*lt+.083*Yt+.044*pn-ne),b("shoulder").position.y=(r?.18:.178)+.012*ct,b("shoulder").rotation.set(-.58*ct,.13*ct,-.14*ct),b("elbow").rotation.set(-1.16*ct-.25*$e,0,.1*$e),b("wrist").rotation.set(.58*ct+.25*$e,0,.21*$e),r){for(let Me of le)Me(ye);R.position.copy(D),I.position.copy(H);let ge=Q?de(J,.89,Se,xe,n?1.8:1.88):0;if(ge&&n)O(Q,ge);else if(ge){E(ce),he.subVectors(Q,ce).clampLength(0,t?.068:.058).multiplyScalar(ge);let Me=I.parent.getWorldQuaternion(Z).invert();I.position.addScaledVector(he.applyQuaternion(Me),.47),E(ce);let Re=R.parent.getWorldQuaternion(Z).invert();he.subVectors(Q,ce).clampLength(0,t?.052:.042),R.position.addScaledVector(he.applyQuaternion(Re),Math.min(1,ge*1.17))}I.position.y+=.0042*G,I.position.z-=.0035*G}let oe=ut*Math.PI*5.2,Y=(.17+.045*Pe+.27*Zt)*Math.sin(P*6.5)*j,pe=n?.61:1;b("tailBase").rotation.set(0,pe*(Y*(1-dt)+.62*dt*Math.sin(oe)),pe*(.077*an+dt*(.24+.13*Math.sin(oe-.32))+.1*Zt)),b("tailTip").rotation.set(0,pe*(.14*(1-dt)*Math.sin(P*6.3-.65)*j+.4*dt*Math.sin(oe-.85)),pe*dt*(.08+.1*Math.sin(oe-.97))),y?.value.set(P,j*(.19+.57*lt+.72*dt)),m&&ee&&(m.contact.value.set(ee.point.x,ee.point.y,ee.point.z,ee.strength*(V?.4:1)),m.stroke.value.copy(ee.stroke))}function F(P){return C.localToWorld(P.copy(ue))}function E(P){return R.localToWorld(P.copy(X)),C.localToWorld(te.copy(se)),P.lerp(te,.52)}return{mesh:x,pose:U,mouthPosition:F,gripPosition:E,skull:R}}var tp=[["carrot","\u80E1\u841D\u535C"],["chicken","\u9E21\u8089"],["blueberry","\u84DD\u8393"],["radish","\u767D\u841D\u535C"],["broccoli","\u897F\u5170\u82B1"],["strawberry","\u8349\u8393"],["cherry","\u8F66\u5398\u5B50"],["pork","\u732A\u8089"],["steak","\u725B\u6392"],["shrimp","\u867E"],["lamb","\u7F8A\u6392"],["kibble","\u72D7\u7CAE"],["pumpkin","\u719F\u5357\u74DC"],["sweetpotato","\u719F\u7EA2\u85AF"],["rice","\u767D\u7C73\u996D"],["apple","\u53BB\u6838\u82F9\u679C"],["cucumber","\u9EC4\u74DC"],["greenbean","\u719F\u56DB\u5B63\u8C46"]],np={carrot:.052,chicken:.061,blueberry:.034,radish:.06,broccoli:.057,strawberry:.051,cherry:.031,pork:.059,steak:.064,shrimp:.062,lamb:.06,kibble:.042,pumpkin:.052,sweetpotato:.048,rice:.044,apple:.052,cucumber:.046,greenbean:.052},{sin:Ue,cos:Ot,PI:bo,abs:qs,sqrt:ip,atan2:gi,hypot:ki}=Math,jt=Ge.clamp,Te=Ge.smoothstep,Ae=r=>new Ee(r),Ys=2.399963,p0=Ae("#ffffff"),Jd={meat:{key:"meat",freq:[28,18,9],bump:.0042,speck:.075,wet:.24,sss:[.42,.12,.06],sssAmp:.08},juicy:{key:"juicy",freq:[24,24,24],bump:.0026,speck:.055,wet:.32,sss:[.85,.28,.16],sssAmp:.16},crisp:{key:"crisp",freq:[32,22,32],bump:.0022,speck:.045,wet:.28,sss:[.75,.82,.52],sssAmp:.14},root:{key:"root",freq:[26,20,26],bump:.0028,speck:.06,wet:.22,sss:[.92,.45,.14],sssAmp:.14},starchy:{key:"starchy",freq:[34,34,34],bump:.0038,speck:.065,wet:.1,sss:[.95,.58,.18],sssAmp:.1},bloom:{key:"bloom",freq:[16,16,16],bump:.0016,speck:.085,wet:.08,sss:[.22,.25,.48],sssAmp:.05},berry:{key:"berry",freq:[22,22,22],bump:.001,speck:.03,wet:.36,sss:[.72,.08,.12],sssAmp:.15},floret:{key:"floret",freq:[48,48,48],bump:.0055,speck:.09,wet:.06,sss:[.35,.58,.16],sssAmp:.08},baked:{key:"baked",freq:[52,52,52],bump:.0065,speck:.105,wet:.08,sss:[.28,.16,.08],sssAmp:.02},starch:{key:"starch",freq:[22,22,22],bump:.0012,speck:.028,wet:.34,sss:[.96,.92,.8],sssAmp:.14},shell:{key:"shell",freq:[24,24,24],bump:.002,speck:.048,wet:.3,sss:[.95,.48,.32],sssAmp:.18},pod:{key:"pod",freq:[18,36,18],bump:.0022,speck:.05,wet:.24,sss:[.42,.72,.2],sssAmp:.12},leaf:{key:"leaf",freq:[26,26,26],bump:.0024,speck:.055,wet:.1,sss:[.32,.62,.16],sssAmp:.1}};function f0(r,e="crisp"){let t=Jd[e]??Jd.crisp;return r.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 vFoodPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vFoodPos = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vFoodPos;
        float fHash(vec3 p) {
          p = fract(p * 0.3183099 + 0.1);
          p *= 17.0;
          return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
        }
        float fNoise(vec3 x) {
          vec3 i = floor(x), f = fract(x);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(mix(fHash(i + vec3(0,0,0)), fHash(i + vec3(1,0,0)), f.x),
                mix(fHash(i + vec3(0,1,0)), fHash(i + vec3(1,1,0)), f.x), f.y),
            mix(mix(fHash(i + vec3(0,0,1)), fHash(i + vec3(1,0,1)), f.x),
                mix(fHash(i + vec3(0,1,1)), fHash(i + vec3(1,1,1)), f.x), f.y),
            f.z);
        }
        float fFbm(vec3 p) {
          return fNoise(p) * 0.62 + fNoise(p * 2.17 + 7.3) * 0.28 + fNoise(p * 4.61 - 3.1) * 0.10;
        }`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 fp = vFoodPos * vec3(${t.freq[0].toFixed(1)}, ${t.freq[1].toFixed(1)}, ${t.freq[2].toFixed(1)});
        float fn1 = fFbm(fp);
        float fn2 = fNoise(fp * 2.4 + 13.7);
        diffuseColor.rgb *= 1.0 + (fn1 - 0.5) * ${(t.speck*2).toFixed(3)} + (fn2 - 0.5) * ${t.speck.toFixed(3)};`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float moist = smoothstep(0.32, 0.78, fn1 * 0.65 + fn2 * 0.35);
        roughnessFactor = clamp(roughnessFactor - moist * ${t.wet.toFixed(3)} + (fn2 - 0.5) * 0.08, 0.06, 0.98);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        {
          vec3 dPosX = dFdx(vViewPosition);
          vec3 dPosY = dFdy(vViewPosition);
          vec3 r1 = cross(dPosY, normal);
          vec3 r2 = cross(normal, dPosX);
          float det = dot(dPosX, r1);
          if (abs(det) > 1e-8) {
            float h = fn1 * 0.7 + fn2 * 0.3;
            vec3 grad = sign(det) * (dFdx(h) * r1 + dFdy(h) * r2);
            normal = normalize(abs(det) * normal - ${t.bump.toFixed(5)} * grad);
          }
        }`).replace("#include <dithering_fragment>",`
        {
          float rim = pow(1.0 - clamp(abs(dot(normalize(vNormal), normalize(vViewPosition))), 0.0, 1.0), 2.2);
          gl_FragColor.rgb += vec3(${t.sss[0].toFixed(2)}, ${t.sss[1].toFixed(2)}, ${t.sss[2].toFixed(2)}) * rim * ${t.sssAmp.toFixed(3)};
        }
        #include <dithering_fragment>`)},r.customProgramCacheKey=()=>"food-pbr-"+t.key,r}function Cn(r,e){let t=r.attributes.position,n=new Float32Array(t.count*3);for(let i=0;i<t.count;i++){let s=e(t.getX(i),t.getY(i),t.getZ(i));n[i*3]=s.r,n[i*3+1]=s.g,n[i*3+2]=s.b}return r.setAttribute("color",new _t(n,3)),r}function mi(r){return r.attributes.uv&&r.deleteAttribute("uv"),r.index||r.setIndex(Array.from({length:r.attributes.position.count},(e,t)=>t)),r.attributes.normal||r.computeVertexNormals(),r}function rn(r,e){return Ue(37*r+17*e)*Ue(41*e-12*r)*.57+Ue(95*r-121*e)*.19}function rp(r){let e=new Kr;for(let t=0;t<r.length;t++){let[n,i]=r[t],[s,a]=r[(t+1)%r.length],o=[(n+s)/2,(i+a)/2];t===0?e.moveTo(...o):e.quadraticCurveTo(n,i,...o)}return e.quadraticCurveTo(...r[0],(r[0][0]+r[1][0])/2,(r[0][1]+r[1][1])/2),e}function Vi(r,e,t,n=(s,a)=>rn(s,a)*.007,i=72){let s=rp(r).getSpacedPoints(i).slice(0,-1);jn.isClockWise(s)||s.reverse();let a=[],o=[],l=[],c=s.length,h=[...Array.from({length:24},(d,p)=>[.003+p*.0405,"cut"]),[.975,"cut"],[.996,"bevel"],[1,"side"],[.978,"lowSide"],[.945,"base"],[.003,"base"]];for(let[d,p]of h)for(let f of s){let g=f.x*d,m=f.y*d,_=e(g,m,d)/2,v=p==="cut"?n(g,m):rn(g,m)*.003,x=p==="cut"?_+v:p==="bevel"?_*.78+v:p==="side"?_*.2+v:p==="lowSide"?-_*.58+v:-_+v,y=t(g,m,d,p);a.push(g,x,m),o.push(y.r,y.g,y.b)}for(let d=1;d<h.length;d++)for(let p=0;p<c;p++){let f=(d-1)*c+p,g=(d-1)*c+(p+1)%c;l.push(f,g+c,g,f,f+c,g+c)}for(let d=1;d<c-1;d++){l.push(0,d,d+1);let p=(h.length-1)*c;l.push(p,p+d+1,p+d)}let u=new Je;return u.setAttribute("position",new be(a,3)),u.setAttribute("color",new be(o,3)),u.setIndex(l),u.computeVertexNormals(),u}var sp={carrot:{points:[[-.9,-.12],[-.7,-.56],[-.25,-.74],[.24,-.76],[.68,-.48],[.86,-.08],[.78,.34],[.38,.66],[-.14,.74],[-.64,.5],[-.82,.22]],body:"#df5c16",core:"#f69b3a",cambium:"#c24610",skin:"#9d390e",thickness:(r,e)=>.28+.08*r+.06*e},radish:{points:[[-.9,-.24],[-.62,-.76],[-.06,-.88],[.52,-.75],[.86,-.36],[.88,.18],[.76,.64],[.24,.84],[-.34,.82],[-.78,.5],[-.92,.12]],body:"#ebe6d6",core:"#f8f6ef",cambium:"#ded9c8",skin:"#b4c29c",thickness:r=>.24+.04*r}};function m0(r,e){let{points:t,body:n,core:i,cambium:s,skin:a,thickness:o}=sp[e],l=Ae(n),c=Ae(i),h=Ae(s),u=Ae(a),d=e==="radish";r(Vi(t,o,(p,f,g,m)=>{let _=ki(p+.04,f*.92),v=gi(f,p),x=1-Te(_,.34,.44),y=Math.exp(-(((_-.42)/.055)**2)),b=Ue(v*(d?22:18)+_*7)*.045,S=Ue(_*32+.4*Ue(v*5))*.03,C=m!=="cut"?Te(Ue(p*16+f*24),.65,.95)*.16:0,R=Te(g,.89,1)*(d?.75:.55);return l.clone().lerp(c,x*.84+.06).lerp(h,y*(d?.32:.55)).lerp(u,m==="cut"?R:.92).multiplyScalar(1+b+S-C+rn(p,f)*.06)},(p,f)=>rn(p,f)*.006+Ue(ki(p,f)*34)*.0025),{roughness:d?.36:.48,clearcoat:d?.38:.22,clearcoatRoughness:.22},[1,1,1],[0,0,0],d?"crisp":"root")}var ap={chicken:{points:[[-.96,-.08],[-.88,-.35],[-.62,-.52],[-.3,-.54],[-.06,-.48],[.18,-.58],[.44,-.42],[.62,-.34],[.88,-.1],[.82,.18],[.58,.3],[.42,.46],[.18,.54],[-.12,.48],[-.44,.54],[-.74,.4],[-.9,.24]],lean:"#d9b594",light:"#f4e0c6",edge:"#b67d52",fat:"#f6e7cf",thickness:(r,e)=>.32-.12*r+.045*Ue(6*e+2*r)+.012*Ue(17*r+9*e)},pork:{points:[[-.88,-.36],[-.58,-.58],[-.18,-.5],[.36,-.54],[.78,-.26],[.88,.06],[.68,.44],[.4,.54],[.02,.48],[-.38,.58],[-.72,.36],[-.82,.08]],lean:"#c28b74",light:"#e0b39d",edge:"#7a422b",fat:"#efe0c6",thickness:(r,e)=>.36+.04*r+.048*Ot(4*r-6*e)},steak:{points:[[-1,-.18],[-.86,-.48],[-.5,-.58],[-.22,-.48],[-.02,-.4],[.22,-.52],[.6,-.46],[.9,-.22],[.98,.04],[.84,.32],[.62,.52],[.18,.48],[-.16,.38],[-.5,.56],[-.74,.44],[-.92,.22]],lean:"#8f3f38",light:"#b85b4c",edge:"#3e2116",fat:"#e8d4b7",thickness:(r,e,t)=>(.38+.05*r+.065*e+.035*Ue(7*r+4*e))*(1-.14*Te(t,.76,1))},lamb:{points:[[-.96,-.22],[-.78,-.52],[-.42,-.6],[-.08,-.46],[.34,-.34],[.76,-.04],[.96,.2],[.56,.42],[.22,.48],[-.04,.3],[-.34,.5],[-.66,.36],[-.86,.14]],lean:"#9a4f40",light:"#c47964",edge:"#4a2719",fat:"#efe1c9",thickness:(r,e)=>.4-.06*r+.046*Ue(8*e-5*r)}};function g0(r,e){let{points:t,lean:n,light:i,edge:s,fat:a,thickness:o}=ap[e],l=Ae(n),c=Ae(i),h=Ae(s),u=Ae(a),d=e==="chicken",p=e==="steak";function f(g,m){let _=m+.06*Ue(2.8*g)+.028*Ue(5.4*g+.7),v=_*42+1.3*Ue(_*12)+.28*Ue(g*9+m*7);return(.42+.58*Te(Ue(_*16+g*1.3),-.55,.65))*(Ue(v)+.28*Ue(v*2.3))}r(Vi(t,o,(g,m,_,v)=>{let x=f(g,m)*(d?.32:.18),y=m-(.14+.12*Ue(4.2*g+.5)+.04*Ue(14*g)),b=m+(.22+.09*Ot(5.5*g-.4)),S=1-Te(qs(y),.008,.052),C=(1-Te(qs(b),.006,.036))*.65,R=d?0:Te(_,.78,.95)*Te(m,.1,.38)*.72,I=jt((S+C)*(d?.08:.42)+R,0,.88),N=d?0:Te(Ue((g*.85+m*.55)*14),.72,.96)*Te(_,.15,.55)*.32,D=.48+.38*Te(Ue(7*g+6*m)+.4*Ot(13*m),-.6,.8),H=v==="cut"?Te(_,.84,1)*D*.85:jt(D*1.05,0,1),k=p?(1-Te(_,.2,.78))*.22:0;return l.clone().lerp(c,jt(.52+x+.05*Ue(4*g+3*m)-k,0,1)).lerp(u,I).lerp(h,jt(H*(d?.52:1)+N,0,.94))},(g,m)=>f(g,m)*(d?.012:.0085)),{roughness:d?.48:.52,clearcoat:d?.26:.24,clearcoatRoughness:.3},[1,1,1],[0,0,0],"meat")}var $d=[[-.76,-.36],[-.56,-.7],[-.22,-.74],[.02,-.62],[.3,-.72],[.64,-.58],[.78,-.3],[.66,.04],[.48,.34],[.22,.64],[.02,.84],[-.18,.68],[-.44,.42],[-.66,.1]],Qd=(r,e,t)=>(.22-.055*e+.016*Ue(5*r))*(1-.32*Te(t,.7,1));function v0(r){let e=Ae("#d62431"),t=Ae("#ec444a"),n=Ae("#fae0d6"),i=Ae("#9e1422");r(Vi($d,Qd,(h,u,d,p)=>{let f=(1-Te(qs(h-.01+.03*Ue(8*u)),.02,.42))*(1-Te(qs(u+.06),.08,.58)),g=Math.exp(-(((ki(h*1.3,u+.05)-.32)/.08)**2))*.35,m=Ue(gi(u+.16,h)*24+8*d)*.045;return e.clone().lerp(t,Te(d,.45,.82)*.45).lerp(n,jt(f*.88+g,0,.95)).lerp(i,p==="cut"?Te(d,.76,1)*.55:.82).multiplyScalar(1+rn(h,u)*.08+m)},(h,u)=>rn(h,u)*.005),{roughness:.34,clearcoat:.52,clearcoatRoughness:.16},[1,1,1],[0,0,0],"juicy");let s=[];for(let[h,u]of rp($d).getSpacedPoints(24).slice(0,-1).entries()){let d=.9-.05*Ue(h*Ys),p=u.x*d,f=u.y*d;if(f<-.58)continue;let g=Cn(new wt(1,8,6),()=>Ae(h%3?"#c99c48":"#edd07c"));g.scale(.016,.009,.026).rotateY(gi(p,f)).translate(p,Qd(p,f,d)/2+.004,f),s.push(mi(g))}r(zi(s),{roughness:.72,clearcoat:.12},[1,1,1],[0,0,0],"baked");let a=[],o=Ae("#2d6124"),l=Ae("#578e38");for(let[h,u,d]of[[-1.05,.36,.14],[-.52,.42,.16],[0,.44,.17],[.52,.42,.16],[1.05,.36,.14]]){let p=Cn(new wt(1,10,6),(f,g,m)=>o.clone().lerp(l,jt(.45+m*.35+g*.4,0,1)));p.scale(d,.036,u).translate(0,0,-u*.45).rotateX(.18).rotateY(h).translate(.02,.055,-.64),a.push(mi(p))}let c=Cn(new zn(.032,.048,.22,8),(h,u)=>o.clone().lerp(l,.4+u*2));c.rotateX(1.38).translate(.02,.08,-.76),a.push(mi(c)),r(zi(a),{roughness:.76,sheen:.22,sheenColor:Ae("#8db860")},[1,1,1],[0,0,0],"leaf")}function _0(){let r=[[0,-.48],[.28,-.46],[.48,-.36],[.62,-.22],[.68,-.02],[.65,.18],[.52,.34],[.34,.43],[.2,.44],[.14,.36],[.06,.31],[0,.31]],e=new ai(r.map(([a,o])=>new fe(a,o)),32),t=e.attributes.position;for(let a=0;a<t.count;a++){let o=t.getX(a),l=t.getY(a),c=t.getZ(a),h=gi(c,o),u=1+.035*Ue(3*h)+.022*Ue(5*h+2*l),d=(1-Te(ki(o,c),.14,.28))*Te(l,.26,.42);t.setXYZ(a,o*u,l+.075*d*Ot(h*5),c*u*.95)}e.computeVertexNormals();let n=Ae("#1e254a"),i=Ae("#7c8eb8"),s=Ae("#2e2d48");return Cn(e,(a,o,l)=>{let c=ki(a,l),h=Ue(16*a+9*o)*Ue(18*l-11*o)*.16+Ue(31*a+23*l)*.07,u=(1-Te(c,.12,.24))*Te(o,.24,.36),d=Te(c,.18,.48);return n.clone().lerp(i,jt((.48+o*.26+h)*d,.08,.82)).lerp(s,u*.75)})}function x0(r,e){if(e){let h=[];for(let[u,d,p]of[[[-.42,-.02,.22],[.22,.4,-.18],.64],[[.44,-.04,.18],[-.18,2.1,.26],.6],[[.02,0,-.44],[.32,-1.2,.12],.62]]){let f=_0();f.scale(p,p,p).rotateX(d[0]).rotateY(d[1]).rotateZ(d[2]).translate(...u),h.push(mi(f))}r(zi(h),{roughness:.78,clearcoat:.06,sheen:.45,sheenColor:Ae("#a5b8de"),sheenRoughness:.72},[1,1,1],[0,0,0],"bloom");return}let t=[[0,-.42],[.3,-.4],[.52,-.32],[.7,-.12],[.75,.1],[.65,.28],[.46,.34],[.24,.3],[.12,.19],[.05,.16],[0,.16]],n=new ai(t.map(([h,u])=>new fe(h,u)),40),i=n.attributes.position;for(let h=0;h<i.count;h++){let u=i.getX(h),d=i.getY(h),p=i.getZ(h),f=-.04*Math.exp(-((u*4)**2))*Te(p,.1,.7);i.setXYZ(h,u*1.04,d,p*.94+f)}n.computeVertexNormals();let s=Ae("#4e0916"),a=Ae("#9e1428"),o=Ae("#c42a3b");r(Cn(n,(h,u,d)=>s.clone().lerp(a,jt(.48+u*.45+d*.22,0,1)).lerp(o,Te(u,.05,.32)*.35)),{roughness:.16,clearcoat:.95,clearcoatRoughness:.06},[1,1,1],[0,0,0],"berry");let l=new Ni([new M(0,.17,0),new M(.06,.52,-.04),new M(.22,.86,-.1)]),c=Cn(new li(l,12,.036,8,!1),(h,u)=>Ae("#4f732c").lerp(Ae("#6b8f38"),jt(u,0,1)));r(c,{roughness:.72},[1,1,1],[0,0,0],"leaf")}function ep(r,e,t,n,i){let s=new M(...e),a=new M(...t),o=new zn(i,n,s.distanceTo(a),10,4),l=o.attributes.position;for(let u=0;u<l.count;u++){let d=l.getX(u),p=l.getY(u),f=l.getZ(u),g=1+.07*Ot(gi(f,d)*6);l.setXYZ(u,d*g,p,f*g)}o.computeVertexNormals();let c=Ae("#b5c982"),h=Ae("#62843a");Cn(o,(u,d,p)=>c.clone().lerp(h,jt(.22+Ue(gi(p,u)*6)*.12+d*.42,0,1))),o.applyQuaternion(new xt().setFromUnitVectors(new M(0,1,0),a.clone().sub(s).normalize())),o.translate(...s.add(a).multiplyScalar(.5).toArray()),r(mi(o))}function y0(r){let e=[],t=o=>e.push(mi(o));ep(t,[.06,-.14,-.94],[.02,0,-.22],.175,.135);let n=[{at:[-.4,.04,.12],size:[.36,.32,.35],buds:28},{at:[.08,.17,.34],size:[.44,.39,.4],buds:42},{at:[.48,.02,.02],size:[.31,.27,.32],buds:22},{at:[-.1,-.04,.48],size:[.26,.23,.26],buds:18}],i=Ae("#3a612a"),s=Ae("#1c361a"),a=Ae("#719442");for(let{at:o,size:l,buds:c}of n){ep(t,[.02,-.01,-.3],[o[0],o[1]-.09,o[2]],.102,.054);let h=new wt(1,36,20),u=h.attributes.position;for(let d=0;d<u.count;d++){let p=u.getX(d),f=u.getY(d),g=u.getZ(d),m=.95+.072*Ue(7*p+3*f)*Ue(7*g-2*p)+.036*Ot(18*p+9*g)*Ue(16*f-11*g)+.018*Ue(42*p)*Ot(34*g+15*f);u.setXYZ(d,p*m,f*m,g*m)}h.computeVertexNormals(),Cn(h,(d,p,f)=>i.clone().lerp(s,jt((.68-p)*.48,0,.72)).lerp(a,jt((p+.18)*.36+.16*Ue(d*15+f*9)*Ot(p*11-f*8),0,.68))),h.scale(...l).translate(...o),t(h);for(let d=0;d<c;d++){let p=.06+.9*(d+.5)/c,f=ip(Math.max(0,1-p*p)),g=f*Ot(d*Ys),m=f*Ue(d*Ys),_=.046+.02*Ot(d*2.7+o[0]),v=new oi(_,1);Cn(v,(x,y)=>i.clone().lerp(a,jt(.28+p*.38+.14*Ot(d*2)+y*.35,0,1))),t(v.scale(1,.76,1).translate(o[0]+g*l[0]*.95,o[1]+p*l[1]*.97,o[2]+m*l[2]*.94))}}r(zi(e).rotateY(-2.26),{roughness:.88,sheen:.25,sheenColor:Ae("#8db35c")},[1,1,1],[0,0,0],"floret")}function M0(r){let e=new Ni([new M(-.62,-.01,-.27),new M(-.48,.05,.29),new M(-.05,.07,.55),new M(.4,.03,.36),new M(.54,-.04,-.16)]),t=96,n=new li(e,t,.265,20,!1),i=n.attributes.position,s=Ae("#f7dfd0"),a=Ae("#e26f48"),o=Ae("#c43f26"),l=[];for(let g=0;g<i.count;g++){let m=Math.floor(g/21)/t,_=e.getPointAt(m),v=new M().fromBufferAttribute(i,g).sub(_),x=6.28*m+.32*m*m+.07*Ot(v.y*12),y=x-Math.floor(x),b=Te(y,.04,.16)*(1-Te(y,.2,.92)),S=Te(y,.12,.32)*(1-Te(y,.45,.72)),C=1-Te(y,.02,.14)+Te(y,.92,1),R=(1-.62*m)*(.9+.14*b)*(.22+.78*Te(m,0,.06)),I=Te(v.y,-.08,.18),N=s.clone().lerp(a,jt(.22+I*.68+b*.18,0,1)).lerp(o,jt(S*I*.68+C*.25+Te(m,.82,1)*.28,0,.82));l.push(N.r,N.g,N.b),v.multiplyScalar(R).add(_),i.setXYZ(g,v.x,v.y,v.z)}n.computeVertexNormals(),n.setAttribute("color",new be(l,3)),r(n,{roughness:.34,clearcoat:.52,clearcoatRoughness:.16},[1,1,1],[0,0,0],"shell");let c=e.getPointAt(1),h=e.getTangentAt(1),u=gi(-h.x,-h.z),d=Ae("#b83824"),p=Ae("#ee8052"),f=[[-.04,.051],[-.11,-.08],[-.16,-.238],[-.088,-.37],[.031,-.4],[.132,-.3],[.12,-.145],[.052,.046]];for(let g of[-.72,0,.69]){let m=Vi(f,(_,v)=>.03+.034*Te(v,-.32,.03),(_,v,x)=>d.clone().lerp(p,.16+.5*x+.14*Ot(_*26)),void 0,36);m.rotateX(.24).rotateY(u+g).translate(c.x,c.y+(g===0?.013:0),c.z),r(m,{roughness:.36,clearcoat:.42},[1,1,1],[0,0,0],"shell")}}function b0(r){let e=[[-.76,-.38],[-.4,-.72],[.18,-.78],[.7,-.52],[.82,-.02],[.66,.44],[.18,.68],[-.4,.64],[-.78,.28]],t=Ae("#265222"),n=Ae("#c6e39b"),i=Ae("#e9f5c8"),s=Ae("#f7f4dc");r(Vi(e,(a,o,l)=>(.22+.03*a)*(1-.14*Te(l,.82,1)),(a,o,l,c)=>{let h=ki(a,o*1.06),u=gi(o,a),d=.46+.08*Ot(u*3+.4),p=1-Te(h,d-.1,d+.06),f=(u+bo)%(2*bo/3)-bo/3,g=Math.exp(-(((h-.26)/.085)**2)-(f/.26)**2)*Te(h,.08,.18),m=c!=="cut"?.08*Ot(u*14):0,_=c==="cut"?Te(l,.86,1)*.92:.95;return n.clone().lerp(i,p*.78).lerp(s,g*.75).lerp(t,_).multiplyScalar(1+m+rn(a,o)*.04)},(a,o)=>rn(a,o)*.004-.004*(1-Te(ki(a,o),.35,.52))),{roughness:.28,clearcoat:.56,clearcoatRoughness:.14},[1,1,1],[0,0,0],"crisp")}function S0(r){let e=[[-.94,.06],[-.56,-.42],[-.02,-.64],[.56,-.54],[.88,-.16],[.58,.16],[.06,.34],[-.54,.26]],t=Ae("#f6e6bc"),n=Ae("#fff7dc"),i=Ae("#b82528"),s=Ae("#d96842");r(Vi(e,(a,o)=>.14+.32*(1-Te(o,-.55,.32)),(a,o,l,c)=>{let h=Te(-o,.12,.48)*Te(l,.84,1),u=i.clone().lerp(s,.32+.28*Ue(a*7+o*5)),p=c!=="cut"&&o<.12?.94:h*.88;return t.clone().lerp(n,(1-Te(l,.15,.78))*.68).lerp(u,p).multiplyScalar(1+rn(a,o)*.04)},(a,o)=>rn(a,o)*.004),{roughness:.32,clearcoat:.48,clearcoatRoughness:.16},[1,1,1],[0,0,0],"crisp")}function E0(r){let e=[[-.82,-.46],[-.1,-.64],[.68,-.34],[.62,.12],[.44,.58],[-.42,.64],[-.66,.22]],t=Ae("#e87f1e"),n=Ae("#f9b446"),i=Ae("#294524"),s=Ae("#58753e");r(Vi(e,(a,o,l)=>.38*(1+.14*a-.14*Te(l,.78,1)),(a,o,l,c)=>{let h=c!=="cut"&&o<-.1||c==="cut"&&Te(l,.86,1)*Te(-o,.15,.48)>.25,u=i.clone().lerp(s,Te(Ue(a*14+o*9),.2,.8)*.55),d=h?c==="cut"?Te(l,.86,1)*Te(-o,.15,.48)*.9:.92:0;return t.clone().lerp(n,(1-Te(l,.15,.75))*.62).lerp(u,d).multiplyScalar(1+rn(a,o)*.07)},(a,o)=>rn(a,o)*.009),{roughness:.64,clearcoat:.14,clearcoatRoughness:.35},[1,1,1],[0,0,0],"starchy")}function w0(r){let e=[[-.82,-.22],[-.48,-.54],[.2,-.58],[.74,-.26],[.68,.3],[.24,.54],[-.38,.48],[-.8,.24]],t=Ae("#e58d2e"),n=Ae("#f8c262"),i=Ae("#782d38"),s=Ae("#c46822");r(Vi(e,(a,o,l)=>.42*(1+.1*a-.15*Te(l,.78,1)),(a,o,l,c)=>{let h=c==="cut"?Te(l,.87,1)*.82:.94,u=Te(l,.55,.88)*.28;return t.clone().lerp(n,(1-Te(l,.12,.7))*.68).lerp(s,u).lerp(i,h).multiplyScalar(1+rn(a,o)*.07)},(a,o)=>rn(a,o)*.008),{roughness:.56,clearcoat:.2,clearcoatRoughness:.3},[1,1,1],[0,0,0],"starchy")}function T0(r){let e=["#7b4b2f","#663d26","#8a5534","#72442a"],t=[],n=[[-.52,-.08,.2,.3],[.48,-.09,.18,.29],[.12,-.1,-.46,.31],[-.34,-.09,-.36,.28],[.54,-.08,-.28,.27],[-.06,-.08,.48,.29],[-.2,.13,-.06,.3],[.22,.12,.16,.28],[.04,.14,-.28,.26]];for(let[i,[s,a,o,l]]of n.entries()){let c=new wt(l,14,10),h=c.attributes.position;for(let d=0;d<h.count;d++){let p=h.getX(d),f=h.getY(d),g=h.getZ(d),m=gi(g,p),_=ki(p,g)/l,v=1+.1*Ot(m*3+i)+.04*Ue(m*5),x=1-.22*Math.exp(-((_*2.4)**2)),y=1+.05*Ue(p*38+g*29);h.setXYZ(d,p*v*y,f*.54*x,g*v*y)}c.computeVertexNormals();let u=Ae(e[i%e.length]);Cn(c,(d,p,f)=>u.clone().multiplyScalar(.92+.18*Te(p,-.12,.12)+.1*rn(d*3,f*3))),c.rotateY(i*Ys).rotateX(.15*Ue(i*2.1)).translate(s,a,o),t.push(mi(c))}r(zi(t),{roughness:.88,clearcoat:.06,clearcoatRoughness:.55},[1,1,1],[0,0,0],"baked")}function A0(r){let e=[];for(let n=0;n<72;n++){let i=(n+.5)/72,s=.76*ip(i),a=n*Ys,o=.24*(1-i*.88)+.05*Ue(n*4.7),l=Cn(new wt(1,8,6),(c,h)=>Ae(n%5===0?"#ede4d0":"#fcf8ee").multiplyScalar(.95+.07*h));l.scale(.19,.085,.078).rotateZ(.35*Ue(n*3.1)).rotateX(.28*Ot(n*2.3)).rotateY(a*.85+n).translate(s*Ot(a),o-.1,s*Ue(a)*.88),e.push(mi(l))}r(zi(e),{roughness:.28,clearcoat:.58,clearcoatRoughness:.16},[1,1,1],[0,0,0],"starch")}function R0(r){let e=[],t=Ae("#3e6e24"),n=Ae("#6fa33c"),i=Ae("#8bb854");for(let[s,[a,o,l,c,h,u]]of[[-.34,-.06,-.08,.28,.06,.14],[-.04,.05,.04,.62,-.08,-.12],[.24,-.07,-.04,.95,.05,.11],[.12,-.05,.28,-.35,.04,-.1]].entries()){let d=new Ni([new M(0,0,-.52),new M(u,.03,-.16),new M(u*.8,.02,.18),new M(0,-.01,.52)]),p=new li(d,18,.125,10,!1),f=p.attributes.position;for(let g=0;g<f.count;g++){let m=Math.floor(g/11)/18,_=d.getPointAt(m),v=new M().fromBufferAttribute(f,g).sub(_),x=Te(m,0,.14)*(1-Te(m,.86,1))*.75+.25,y=1+.14*Ue(m*bo*3.5);v.x*=.86*x*y,v.y*=1.05*x*y,f.setXYZ(g,_.x+v.x,_.y+v.y,_.z+v.z)}p.computeVertexNormals(),Cn(p,(g,m,_)=>t.clone().lerp(n,jt(.45+m*2.5+.12*Ue(_*11),0,1)).lerp(i,Te(qs(g),.08,.12)*.35)),p.rotateX(h).rotateY(c).translate(a,o,l),e.push(mi(p))}r(zi(e),{roughness:.42,clearcoat:.34,clearcoatRoughness:.22},[1,1,1],[0,0,0],"pod")}function op(r,e){function t(n,i,s=[1,1,1],a=[0,0,0],o="crisp"){let l=f0(new ot({color:p0,vertexColors:!!n.attributes.color,...i}),o),c=new Ze(n,l);return c.scale.set(...s),c.position.set(...a),c.castShadow=!0,c.receiveShadow=!0,e.add(c),c}sp[r]?m0(t,r):ap[r]?g0(t,r):r==="blueberry"||r==="cherry"?x0(t,r==="blueberry"):r==="strawberry"?v0(t):r==="broccoli"?y0(t):r==="shrimp"?M0(t):r==="cucumber"?b0(t):r==="apple"?S0(t):r==="pumpkin"?E0(t):r==="sweetpotato"?w0(t):r==="kibble"?T0(t):r==="rice"?A0(t):r==="greenbean"&&R0(t)}var In=.004,C0=.075,Ph=[[2,-2],[9,-9],[-6,9],[11,4],[-8,-3],[2,10],[-8,-9],[12,-3],[8,9],[-8,6],[1,-12],[0,0],[5,12],[7,5],[-4,-5]],Lh=[[0,0,0],[-.14,.31,.11],[.12,-.25,-.1]],lp=320,Zs=(r,e)=>r*128+e,I0=8;function P0(r,e){let t=new Map,n=new Ie().makeRotationFromEuler(e);n.scale(new M().setScalar(r.scale));let i=new Ie,s=new M;for(let a of r.shape.children){a.updateMatrix(),i.multiplyMatrices(n,a.matrix);let o=a.geometry.attributes.position,l=Array.from({length:o.count},(u,d)=>s.fromBufferAttribute(o,d).applyMatrix4(i).toArray()),c=a.geometry.index?.array,h=c?.length??l.length;for(let u=0;u<h;u+=3){let[d,p,f]=l[c?c[u]:u],[g,m,_]=l[c?c[u+1]:u+1],[v,x,y]=l[c?c[u+2]:u+2],b=g-d,S=_-f,C=v-d,R=y-f,I=b*R-S*C;if(Math.abs(I)<1e-10)continue;let N=Math.ceil(Math.min(d,g,v)/In),D=Math.floor(Math.max(d,g,v)/In),H=Math.ceil(Math.min(f,_,y)/In),k=Math.floor(Math.max(f,_,y)/In);for(let L=N;L<=D;L++)for(let W=H;W<=k;W++){let X=L*In-d,se=W*In-f,te=(X*R-se*C)/I,ce=(b*se-S*X)/I;if(te<-1e-4||ce<-1e-4||te+ce>1.0001)continue;let he=p+te*(m-p)+ce*(x-p),Z=Zs(L,W),le=t.get(Z);le?(le.low=Math.min(le.low,he),le.high=Math.max(le.high,he)):t.set(Z,{x:L,z:W,low:he,high:he})}}}return[...t.values()]}function L0(r,e){let t=[],n=[],i=[],s=new Map,{x:a,z:o,height:l,contacts:c}=r;for(let{sample:d,contactHeight:p,height:f}of c){let g=l-p;g>=.011||(s.set(Zs(d.x,d.z),{index:t.length/3,receiver:f}),t.push(e.x+(a+d.x)*In,f+6e-4,e.z+(o+d.z)*In),n.push(.19,.15,.11,.24*(1-Ge.smoothstep(g,5e-4,.011))))}for(let{sample:d,ceramic:p}of c){let f=[[0,0],[0,1],[1,1],[1,0]].map(([y,b])=>s.get(Zs(d.x+y,d.z+b)));if(f.some(y=>!y))continue;let g=f.map(y=>y.receiver);if(Math.max(...g)-Math.min(...g)>(p?.005:.003))continue;let[m,_,v,x]=f.map(y=>y.index);i.push(m,_,v,m,v,x)}let h=new Je;h.setAttribute("position",new be(t,3)),h.setAttribute("color",new be(n,4)),h.setIndex(i);let u=new It({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1});return new Ze(h,u)}function cp(r,e,t,n,i){let s=[],a=new Map;function o(c,h){if(s.length>=I0)return!1;let u=e(c);if(!u)return!1;let d=new Map,p=new Set;for(let v of s)for(let x of v.profile){let y=Zs(v.x+x.x,v.z+x.z);d.set(y,Math.max(d.get(y)??-1/0,v.position.y+x.high)),v.name==="blueberry"&&Math.hypot(x.x,x.z)<=2.5&&p.add(y)}let f;for(let v=0;v<Lh.length;v++){let x=(s.length+v)%Lh.length,[y,b,S]=Lh[x],C=new Xt(n.x+y,n.y+b,n.z+S),R=c+x;a.has(R)||a.set(R,P0(u,C));let I=a.get(R),N=Math.min(...I.map(D=>D.low));for(let D=0;D<Ph.length;D++){let[H,k]=Ph[(s.length+D)%Ph.length],L=-1/0,W=[],X=!1;for(let me of I){let A=In*Math.hypot(H+me.x,k+me.z);if(A>C0){L=1/0;break}let w=Zs(H+me.x,k+me.z),B=i+Math.max(0,A-.066)*1.45,O=Math.max(B,d.get(w)??-1/0),U=O-me.low;L=Math.max(L,U),W.push({sample:me,contactHeight:U,height:O,ceramic:O===B}),X||=p.has(w)}if(!Number.isFinite(L))continue;let se=W.filter(me=>L-me.contactHeight<.0027),te=se.reduce((me,{sample:A})=>me+A.x,0)/se.length,ce=se.reduce((me,{sample:A})=>me+A.z,0)/se.length,he=In*Math.hypot(te,ce),Z=se.filter(me=>me.ceramic).length/se.length,le=c==="blueberry"&&H+k>9,ue=(1-Z)*(c==="shrimp"?.011:.005),de=L+N+he*.24+(X?.024:0)+ue-(le?.006:0);if((!f||de<f.score-8e-4)&&(f={x:H,z:k,height:L,score:de,profile:I,restingRotation:C,contacts:W}),!s.length&&Z===1&&(c!=="blueberry"||le)&&he<.007)break}}if(!f)return!1;let g=new M(t.x+f.x*In,f.height,t.z+f.z*In),m=u.shape.clone(!0);m.visible=!0,m.scale.setScalar(u.scale),m.rotation.copy(f.restingRotation),m.position.copy(g),m.position.y+=.064;let _=L0(f,t);return _.visible=!1,r.add(m,_),s.push({name:c,mesh:m,shadow:_,position:g,profile:f.profile,x:f.x,z:f.z,droppedAt:h}),!0}function l(c,h){for(let u of s){if(u.shadow.visible=u.mesh.visible,!u.mesh.visible)continue;let d=h?1:Ge.clamp((c-u.droppedAt)/lp,0,1);u.mesh.position.y=u.position.y+.064*(1-d**2),u.shadow.material.opacity=Ge.smoothstep(d,.88,1)}}return{add:o,draw:l,size:()=>s.length,next:()=>s.at(-1),remove(c){s.at(-1)===c&&(r.remove(c.mesh,c.shadow),c.shadow.geometry.dispose(),c.shadow.material.dispose(),s.pop())},settledAt:()=>(s.at(-1)?.droppedAt??0)+lp}}var U0=3390,ns=Ge.smoothstep,hp={pumpkin(r,e){e(r,new wt(1,32,20,0,Math.PI*1.45),"#345324",[1.04,.6,.79],[0,-.1,-.015]),e(r,new wt(1,32,20,0,Math.PI*1.45),"#e89121",[.95,.57,.77])},carrot(r,e){let t=e(r,new zn(.83,.82,.27,36),"#ed6718",[1,1,1]);t.rotation.x=.93,e(r,new zn(.31,.31,.015,28),"#ffa13b",[1,1,1],[0,.08,.112]).rotation.copy(t.rotation)},chicken(r,e){let t=e(r,new wt(1,28,20),"#e6bd8e",[.95,.49,.7]);t.rotation.z=.23,e(r,new wt(1,24,14),"#f2dabe",[.77,.33,.68],[.1,-.06,.1])},broccoli(r,e){let t=e(r,new zn(.23,.19,1.08,12),"#86a94b",[1,1,1],[.02,-.27,0]);t.rotation.z=-.14;for(let n=0;n<37;n++){let i=n*2.39996,s=Math.sqrt(n/37);e(r,new oi(.22,1),["#367129","#4a8128","#275223"][n%3],[1,1,1],[Math.cos(i)*s*.6,.18+(1-s*s)*.4,Math.sin(i)*s*.48])}},sweetpotato(r,e){let t=e(r,new oi(1,1),"#985747",[1.02,.65,.72],[-.08,-.03,0]);t.rotation.z=-.26;let n=e(r,new oi(1,1),"#eeb044",[.66,.58,.55],[.34,.05,.23]);n.rotation.z=-.26},blueberry(r,e){for(let[t,n,i,s]of[[-.4,-.08,.1,.49],[.45,-.1,.12,.48],[.02,.37,-.19,.5]]){e(r,new wt(s,24,18),"#334760",[1,.9,1],[t,n,i]);let a=e(r,new Hs(s*.25,.027,7,18),"#172b3d",[1,1,1],[t,n+.18,i+s*.86]);a.rotation.x=-.42}}};function N0(r,e,t,n,i,s,a){let o=n==="retriever",l=new Ga({canvas:r,alpha:!0,antialias:!0});l.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65)),l.outputColorSpace=at,l.toneMapping=pd,l.toneMappingExposure=1.02,l.shadowMap.enabled=!0,l.shadowMap.type=o?ud:dd;let c=new Wa,h=new Ct(35,1,.04,10);s?h.position.set(.918,.425,.556):t?h.position.set(.7,.365,.86):h.position.set(.182,.456,1.046);let u=new M(-.052,.184,.09),d=h.position.clone().sub(u);h.lookAt(u);function p(K){h.position.copy(d).applyAxisAngle(h.up,Ge.degToRad(K)).add(u),h.lookAt(u),h.updateMatrixWorld()}let f=Fd(c,t||s?.12:void 0,o,s),{bowl:g,bowlFloor:m}=f,_=new M,v=new M,x=new co,y=new fe,b=new M;function S(K,j,ae){let J=r.getBoundingClientRect();if(!J.width||!J.height||j<J.left||j>J.right||ae<J.top||ae>J.bottom)return null;y.set((j-J.left)/J.width*2-1,1-(ae-J.top)/J.height*2),x.setFromCamera(y,h);let Se=x.intersectObject(K,!1)[0];if(!Se?.barycoord)return null;let _e=x.intersectObject(f.bowlMesh,!1)[0];if(_e&&_e.distance<Se.distance)return null;let{face:xe,barycoord:Ce}=Se,Ne=K.geometry.attributes.position;return new M().fromBufferAttribute(Ne,xe.a).multiplyScalar(Ce.x).addScaledVector(b.fromBufferAttribute(Ne,xe.b),Ce.y).addScaledVector(b.fromBufferAttribute(Ne,xe.c),Ce.z)}function C(){let K=r.getBoundingClientRect();return!K.width||!K.height?null:(_.copy(g).project(h),v.setFromMatrixColumn(h.matrixWorld,0).multiplyScalar(f.bowlRadius).add(g).project(h),{x:K.left+(_.x+1)*K.width/2,y:K.top+(1-_.y)*K.height/2,radius:Math.abs(v.x-_.x)*K.width/2})}let R=s&&!i?D0(c):t||s?Promise.resolve():O0(e);c.add(new so(s?"#fff8f0":"#e9eff9",s?"#ddd0be":"#9f978e",s?1.55:1.17));let I=new lr("#fff8ed",s?1.05:1.71);s&&!i?I.position.set(.12,1.19,-.79):I.position.set(-.8,1.19,.42),I.target.position.set(-.04,.01,.1),I.castShadow=!0,I.shadow.mapSize.set(1024,1024),o&&(I.shadow.radius=3.5),I.shadow.camera.left=-.59,I.shadow.camera.right=.59,I.shadow.camera.top=.6,I.shadow.camera.bottom=-.62,I.shadow.camera.near=.1,I.shadow.camera.far=3,I.shadow.normalBias=.003,I.shadow.bias=-13e-5,c.add(I,I.target);let N=new lr(s?"#fff5e6":"#f4f6ff",s?.95:.44);s?N.position.set(.83,.64,.87):N.position.set(.68,.65,.93),c.add(N);function D(K){K.mapping=Ms,c.environment=K,c.environmentIntensity=s?.56:.49,c.environmentRotation.y=-1.28}let H=new _o().loadAsync(Jt(s?"blinds-512.hdr":"blinds.hdr")).then(K=>{let j=K.image.data,{fromHalfFloat:ae,toHalfFloat:J}=di;for(let Se=0;Se<j.length;Se+=4){let _e=ae(j[Se]),xe=ae(j[Se+1]),Ce=ae(j[Se+2]),Ne=.2126*_e+.7152*xe+.0722*Ce;j[Se]=J(Ge.lerp(_e,Ne,.73)),j[Se+1]=J(Ge.lerp(xe,Ne,.73)),j[Se+2]=J(Ge.lerp(Ce,Ne,.73))}D(K)}).catch(()=>new vo().loadAsync(Jt("royal_esplanade.hdr.jpg")).then(D).catch(()=>{})),k=new tn;c.add(k);function L(K,j,ae,J,Se=[0,0,0]){let _e=new Ze(j,new gn({color:ae,roughness:.63}));return _e.scale.set(...J),_e.position.set(...Se),_e.castShadow=!0,_e.receiveShadow=!0,K.add(_e),_e}let W=new Map,X=new Wt,se=new M,te=s?new Xt(.08,.35,-.08):o?new Xt(1.06,.06,-.04):new Xt(.28,.42,-.11),ce=new Set(o?tp.map(([K])=>K):t?[t]:Object.keys(hp));function he(K){if(!ce.has(K))return null;if(W.has(K))return W.get(K);let j=new tn;o?op(K,j):hp[K](j,L),X.setFromObject(j,!0).getSize(se);let ae=s?np[K]/Math.max(se.x,se.z):o?Math.min(.0165,.0065/se.y):.018;j.rotation.copy(te),X.setFromObject(j,!0);let J={shape:j,scale:ae,restHeight:m-X.min.y*ae};return j.rotation.set(0,0,0),W.set(K,J),J}k.visible=!1;function Z(){let{width:K,height:j}=e.getBoundingClientRect();!K||!j||(l.setSize(K,j,!1),h.aspect=K/j,h.fov=t||s?Math.min(58,(n==="retriever"?34.8:37.5)/Math.min(h.aspect,1.24)):Ge.clamp(31.5/Math.sqrt(h.aspect),25,43),h.updateProjectionMatrix(),h.updateMatrixWorld(),a())}let le=new M,ue=new M,de=new M,me=g.clone().add(new M(.022,0,-.023)),A=new M,w=new xt,B=new xt,O=new M,U=new M,F=s?cp(c,he,g,te,m):null;function E(K){let j=e.getBoundingClientRect(),ae=(K.left+K.width/2-j.left)/j.width*2-1,J=(K.top+K.height/3-j.top)/j.height*2-1;le.set(ae,-Math.min(J,1.1),-.2).unproject(h),ue.set(ae,-Math.min(J,1.1),1).unproject(h);let Se=(.73-le.z)/(ue.z-le.z);de.copy(le).lerp(ue,Se)}function P(K){return!K||!o?null:K.piece?K.piece.position:(me.y=he(K.name).restHeight,me)}let z=null,ie=t;function V(K,j,ae,J){let Se=o?Zn.hide:Rn+.13;K&&!K.piece&&(ie=o&&j>=Se&&!K.gripped?K.name:null);let _e=K?.piece;if(k.visible=_e?!!K.gripped&&j<Se:!!ie||!!K&&j<Se,!k.visible&&!(_e&&j>=Zn.grip&&j<Se))return;let xe=K?.name??ie,Ce=he(xe);z!==Ce.shape&&(z&&k.remove(z),z=Ce.shape,k.add(z));let Xe=t||_e?1:Ge.clamp((j-.045)/(.5-.045),0,1),ye=_e?.position??me;_e||(me.y=Ce.restHeight),k.position.copy(de).lerp(ye,Xe),k.rotation.copy(_e?_e.mesh.rotation:te);let Pe=Ce.scale;if(o&&t&&K&&j<.28&&!ae){let Be=Ge.clamp(j/.28,0,1);k.position.y+=.055*(1-Be**2)}if(!ae&&Xe<1&&(k.position.y+=.085*4*Xe*(1-Xe),k.rotation.x-=.65*(1-Xe),k.rotation.z+=.38*(1-Xe)),o&&K&&j>=Zn.grip){let{grip:Be,lift:Ft,tuck:dn,hide:et}=Zn;if(!K.gripped&&j<=Ft+.034&&j>=Be&&(J.gripPosition(U),U.distanceToSquared(ye)<.012**2&&(J.skull.worldToLocal(A.copy(ye)),J.skull.getWorldQuaternion(B).invert(),w.multiplyQuaternions(B,k.quaternion),K.gripped=!0,_e&&(_e.mesh.visible=!1,_e.shadow.visible=!1,k.visible=!0))),K.gripped){let gt=ns(j,_e?dn-.035:dn,et);O.copy(A),_e&&(O.x-=.012*gt,Pe*=1-ns(j,dn-.01,et-.025)*.8),O.z-=(_e?.032:.027)*gt,O.y+=.003*gt,k.position.copy(J.skull.localToWorld(O)),k.quaternion.multiplyQuaternions(J.skull.getWorldQuaternion(B),w)}}else if(!o&&j>=Rn){let Be=ns(j,Rn,Rn+.07);J.mouthPosition(U),k.position.lerp(U,Be),k.position.y+=.004*Math.sin(Math.PI*Be),Pe*=1-ns(j,Rn+.045,Se)}k.scale.setScalar(Pe)}let Q=Promise.all([Ih(o,i,s),R,H]).then(([K])=>(K.mesh.position.y=.01,c.add(K.mesh),K)),$;function ee(K){return K==="retriever"?Q:($??=Ih(!0,i,s,!0).catch(j=>{throw $=null,j}),$)}return new ResizeObserver(Z).observe(e),Z(),{renderer:l,world:c,camera:h,puppy:Q,loadBreed:ee,itemPosition:E,foodTarget:P,animateFood:V,kitchen:f,pile:F,setViewYaw:p,bowlScreenPosition:C,pickCoat:S}}async function D0(r){let e=new Jr,[t,n]=await Promise.all([e.loadAsync(Jt("lebombo-room.webp")).catch(()=>null),e.loadAsync(Jt("wood-floor.webp")).catch(()=>null)]);if(t){t.colorSpace=at,t.anisotropy=4;let i=1.36,s=new xo(t,i,6.8,112);s.position.y=i,s.rotation.y=-3.03,s.material.toneMapped=!1,s.renderOrder=-1,r.add(s)}if(n){n.colorSpace=at,n.wrapS=n.wrapT=Sn,n.anisotropy=8,n.repeat.set(3.8/1.7,3.8/1.7);let i=new Ze(new Yn(3.8,3.8),new It({map:n,color:"#dacbb3",transparent:!0,depthWrite:!1,toneMapped:!1}));i.material.onBeforeCompile=s=>{s.vertexShader=`varying vec2 floorPosition;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
floorPosition = position.xy;`),s.fragmentShader=`varying vec2 floorPosition;
`+s.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
diffuseColor.a *= 1.0 - smoothstep(0.63, 1.72, length(floorPosition));`)},i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=-1,r.add(i)}}function O0(r){let e=new Image;return e.src=Jt("kitchen.webp"),e.decode().then(()=>{r.style.backgroundImage='url("'+e.src+'")'}).catch(()=>{})}function up(r,{presetFood:e=null,dog:t="bernese",clay:n=!1,meal:i=!1,onBiteSound:s}={}){let a=t==="retriever"?Zn.duration:U0,o=r.querySelector("canvas"),l=r.querySelector(".plate"),c=matchMedia("(prefers-reduced-motion: reduce)"),h=null,u=null,d=null,p,f=!1,g,m=null,_=-1/0,v=!1,x=!1,y=null,b={point:new M,target:new M,stroke:new M,strength:0,held:!1,startedAt:-1/0,releasedAt:-1/0},S=new M,C=new M(.08,-1,-.4).normalize();function R(){o.hidden=!0,l&&(l.hidden=!1),r.dataset.renderer="still",v=!0}function I(L){m=null;let W=d===null?null:(L-d)/1e3,X=b.held||L-b.releasedAt<720,se=!!h||X||W!==null&&W<Xs||u!==null&&L-u<3400,te=!i||!c.matches;if(!se&&te&&L-_<30){N();return}_=L;let ce=h?(L-h.start)/1e3:null,he=u===null?null:(L-u)/1e3;if(b.point.lerp(b.target,.48),b.strength=ns(L-b.startedAt,0,135)*(b.held?1:1-ns(L-b.releasedAt,70,720)),p.pose(L/1e3,ce,he,c.matches,g.foodTarget(h),W,b),g.kitchen.animate(he),g.pile?.draw(L,c.matches),g.animateFood(h,ce,c.matches,p),s&&h?.piece&&h.gripped){for(let[Z,{close:le}]of Zn.chews.entries()){let ue=le+.04;h.lastSoundTime<ue&&ce>=ue&&ce-ue<.16&&s(h.name,Z)}h.lastSoundTime=ce}if(g.renderer.render(g.world,g.camera),ce!==null&&ce*1e3>=a){let Z=h;h=null,Z.piece&&(Z.gripped&&g.pile.remove(Z.piece),Z.resolve(!!Z.gripped))}(se||te)&&N()}function N(){m===null&&p&&!x&&!document.hidden&&(m=requestAnimationFrame(I))}function D(){_=-1/0,N()}function H(){m!==null&&cancelAnimationFrame(m),m=null}let k;try{g=N0(o,r,e,t,n,i,D),k=g.puppy.then(L=>{p=L,!x&&(v=!0,o.hidden=!1,l&&(l.hidden=!0),r.dataset.renderer="three",D())}).catch(R),o.addEventListener("webglcontextlost",L=>{L.preventDefault(),x=!0,h?.piece&&(h.piece.mesh.visible=!0,h.resolve(!1),h=null),H(),R()}),o.addEventListener("webglcontextrestored",()=>{x=!1,p&&(o.hidden=!1,l&&(l.hidden=!0),r.dataset.renderer="three",D())})}catch{R(),k=Promise.resolve()}return document.addEventListener("visibilitychange",()=>{if(i){let L=performance.now();document.hidden?y=L:y!==null&&(h?.piece&&(h.start+=L-y),y=null)}document.hidden?H():D()}),c.addEventListener("change",D),{ready:k,duration:a,isReady:()=>v,async selectDog(L){if(L!=="retriever"&&L!=="shiba"||!i||!p||h||x||f)return!1;f=!0;try{let W=await g.loadBreed(L);return x?!1:(W.mesh.position.y=.01,g.world.remove(p.mesh),g.world.add(W.mesh),p=W,d=null,b.held=!1,b.startedAt=b.releasedAt=-1/0,D(),!0)}catch{return!1}finally{f=!1}},bowlScreenPosition:()=>g?.bowlScreenPosition(),touchDog(L,W){if(!i||!p||x)return!1;let X=g.pickCoat(p.mesh,L,W);return X?(b.held?(S.subVectors(X,b.target),S.lengthSq()>8e-6&&b.stroke.lerp(S.normalize(),.65)):(b.startedAt=performance.now(),b.held=!0,b.point.copy(X),b.stroke.copy(C)),b.target.copy(X),D(),!0):!1},releaseDog(){b.held&&(b.held=!1,b.releasedAt=performance.now(),D())},cheer(){d=performance.now(),D()},setViewYaw(L){!i||!g||x||(g.setViewYaw(L),D())},addFood(L){return h||x||!g?.pile?.add(L,performance.now())?!1:(D(),!0)},undoFood(){let L=g?.pile,W=L?.next();return!W||h||x?null:(L.remove(W),D(),W.name)},bowlSize:()=>g?.pile?.size()??0,nextFood:()=>g?.pile?.next()?.name??null,eatNext(){let L=g?.pile?.next();return!L||h||x?Promise.resolve(!1):new Promise(W=>{let X=Math.max(performance.now(),g.pile.settledAt());h={name:L.name,piece:L,start:X,resolve:W},D()})},feed(L,W){e||g?.itemPosition(W),h={name:L,start:performance.now()},D()},goodbye(){h=null,u=performance.now(),D()},reset(){h=null,u=null,D()}}}var dp="golden-retriever-muted",F0=9,B0=.32,z0=.27,H0=[1,.73,.48],k0=new Set(["carrot","radish","broccoli","kibble","cucumber"]);function pp(){let r=window.AudioContext||window.webkitAudioContext,e=!1,t,n,i=new Map;try{e=localStorage.getItem(dp)==="1"}catch{}if(r){for(let l of["crisp","soft"]){let c=fetch(Jt(`dog-chew-${l}.mp3`)).then(h=>h.ok?h.arrayBuffer():null).catch(()=>null);i.set(l,{encoded:c,buffer:null,next:0})}let o=fetch(Jt("dog-bark.mp3")).then(l=>l.ok?l.arrayBuffer():null).catch(()=>null);i.set("bark",{encoded:o,buffer:null,next:0})}function s(){n&&(n.gain.value=e||document.hidden?0:.72)}function a(){if(!(!r||e))try{if(!t){t=new r,n=t.createGain(),n.connect(t.destination),s();for(let o of i.values())o.encoded.then(l=>l&&t.decodeAudioData(l)).then(l=>{o.buffer=l}).catch(()=>{})}t.state!=="running"&&t.resume().catch(()=>{})}catch{}}return document.addEventListener("visibilitychange",s),{isMuted:()=>e,toggle(){e=!e,s();try{localStorage.setItem(dp,e?"1":"0")}catch{}a()},unlock:a,play(o,l){let c=i.get(k0.has(o)?"crisp":"soft");if(e||document.hidden||!c?.buffer||t.state!=="running")return;let h=t.createBufferSource(),u=t.createGain();h.buffer=c.buffer,u.gain.value=H0[l],h.connect(u).connect(n),h.start(0,c.next*B0,z0),c.next=(c.next+1)%F0},bark(o="retriever"){let l=i.get("bark");if(e||document.hidden||!l?.buffer||t.state!=="running")return;let c=t.createBufferSource(),h=t.createGain();c.buffer=l.buffer;let u=o==="shiba"?1.18:.96;c.playbackRate.value=u*(.96+Math.random()*.08),h.gain.value=.62,c.connect(h).connect(n),c.start(0)}}}var fp=[["carrot","\u80E1\u841D\u535C"],["chicken","\u719F\u9E21\u8089"],["blueberry","\u84DD\u8393"],["broccoli","\u897F\u5170\u82B1"],["kibble","\u72D7\u7CAE"],["pumpkin","\u719F\u5357\u74DC"],["strawberry","\u8349\u8393"],["cucumber","\u9EC4\u74DC"],["apple","\u53BB\u6838\u82F9\u679C"],["steak","\u53BB\u9AA8\u719F\u725B\u8089"],["sweetpotato","\u719F\u7EA2\u85AF"],["greenbean","\u719F\u56DB\u5B63\u8C46"],["radish","\u767D\u841D\u535C"],["pork","\u53BB\u9AA8\u719F\u732A\u8089"],["rice","\u767D\u7C73\u996D"],["lamb","\u53BB\u9AA8\u719F\u7F8A\u8089"]],fr=document.getElementById("demo-stage"),Hn=fr.querySelector("canvas"),Eo=document.getElementById("view-controls"),_p=document.getElementById("dog-picker"),Uh=[..._p.querySelectorAll("button")],xp=document.getElementById("reset-view"),yp=document.getElementById("toggle-sound"),Nh=document.getElementById("food-menu"),pr=document.getElementById("dog-message"),V0=document.getElementById("tap-cue"),ur=document.getElementById("bowl-target"),So=document.getElementById("meal-hearts"),Mp=matchMedia("(prefers-reduced-motion: reduce)"),Js=pp(),sn=up(fr,{meal:!0,dog:"retriever",clay:new URLSearchParams(location.search).has("clay"),onBiteSound:Js.play}),bp=[],Gi="loading",Dh="retriever",Sp=!0,un=null,Ht=null,dr=0,Oh,Ep,wp,Fh="\u6478\u6478\u6211\uFF0C\u597D\u8212\u670D\u5440\uFF01";function Ks(r){dr=r%360,sn.setViewYaw(dr),xp.hidden=Math.min(Math.abs(dr),360-Math.abs(dr))<1}Hn.addEventListener("pointerdown",r=>{if(Ht||un||Gi==="switching"||!r.isPrimary||r.button!==0)return;let e=sn.touchDog(r.clientX,r.clientY);un={id:r.pointerId,x:r.clientX,scale:360/Hn.clientWidth,petting:e,lastSample:performance.now()},Hn.setPointerCapture(r.pointerId),Hn.classList.add(e?"petting":"dragging"),e&&Gi!=="eating"&&(clearTimeout(Ep),pr.textContent!==Fh&&(wp=pr.textContent),pr.textContent=Fh)});Hn.addEventListener("pointermove",r=>{if(!(Ht||un?.id!==r.pointerId))if(un.petting){let e=performance.now();if(e-un.lastSample<65)return;un.lastSample=e,sn.touchDog(r.clientX,r.clientY)||sn.releaseDog()}else Ks(dr-(r.clientX-un.x)*un.scale),un.x=r.clientX});for(let r of["pointerup","pointercancel","lostpointercapture"])Hn.addEventListener(r,e=>{un?.id===e.pointerId&&(un.petting&&(sn.releaseDog(),Ep=setTimeout(()=>{pr.textContent===Fh&&(pr.textContent=wp)},1150)),un=null,Hn.classList.remove("dragging","petting"))});Hn.addEventListener("keydown",r=>{if(!Ht){if(r.key==="ArrowLeft")Ks(dr+20);else if(r.key==="ArrowRight")Ks(dr-20);else if(r.key==="Home")Ks(0);else return;r.preventDefault()}});xp.addEventListener("click",()=>{Ks(0),Eo.open=!1});function Tp(){yp.setAttribute("aria-pressed",String(Js.isMuted()))}yp.addEventListener("click",()=>{Js.toggle(),Tp()});Tp();function Wi(r,e){Gi=r,fr.dataset.mood=r,pr.textContent=e;let t=Gi==="hungry"||Gi==="happy";for(let n of bp)n.disabled=!t;for(let n of Uh)n.disabled=!t;Ip()}function mp(r){let{left:e,top:t,width:n,height:i}=r.getBoundingClientRect();return{x:e+n/2,y:t+i/2}}function Ap(r,e){let t=new Image;return t.src=Jt("menu-"+r+".webp"),t.alt="",t.className="food-ghost",t.setAttribute("aria-hidden","true"),document.body.append(t),Rp(t,e),t}function Rp(r,{x:e,y:t}){r.style.left=e+"px",r.style.top=t+"px"}function Cp(r,e,t,n){if(Mp.matches||!t){r.remove();return}r.animate([{left:e.x+"px",top:e.y+"px",opacity:1},{left:t.x+"px",top:t.y+"px",opacity:0,transform:"translate(-50%, -50%) scale(.55)"}],{duration:n?210:160,easing:"ease-out"}).finished.then(()=>r.remove(),()=>r.remove())}function G0(r,e){let t=fr.getBoundingClientRect();ur.style.left=r.x-t.left+"px",ur.style.top=r.y-t.top+r.radius*.2+"px",ur.style.width=Math.max(60,r.radius*2.04)+"px",ur.style.height=Math.max(26,r.radius*.86)+"px",ur.dataset.mode=e,ur.hidden=!1}function Ip(){let r=Sp&&Gi==="hungry"&&!Ht;Nh.classList.toggle("show-cue",r),Ht||(ur.hidden=!0)}function gp(r){let e=sn.bowlScreenPosition();if(!e)return!1;let t=Math.max(60,e.radius+30),n=Math.max(52,e.radius*.7+28),i=((r.x-e.x)/t)**2+((r.y-e.y)/n)**2<=1;return G0(e,i?"hot":"drag"),i}async function vp(r,e,t,n){if(Gi!=="hungry"&&Gi!=="happy"||!sn.addFood(r)){n?.remove();return}Sp=!1,Js.unlock(),clearTimeout(Oh),So.hidden=!0,Eo.open=!1,(n||!Mp.matches)&&Cp(n??Ap(r,t),t,sn.bowlScreenPosition(),!0),e.classList.add("feeding"),Wi("eating","\u597D\u9999\u5440\uFF01");let i=await sn.eatNext();if(e.classList.remove("feeding"),!i){sn.undoFood(),fr.dataset.renderer==="three"&&Wi("hungry","\u518D\u5582\u6211\u4E00\u6B21\u5427\uFF01");return}sn.cheer(),Js.bark(Dh),So.hidden=!1,Oh=setTimeout(()=>{So.hidden=!0},1420),Wi("happy","\u597D\u5403\uFF01\u8C22\u8C22\u4F60\uFF01")}for(let[r,e]of fp){let s=function(a){if(Ht?.id!==a.pointerId)return;let{ghost:o}=Ht;if(Ht=null,t.classList.remove("dragging"),o){i=!0;let l={x:a.clientX,y:a.clientY};a.type==="pointerup"&&gp(l)?vp(r,t,l,o):a.type==="pointerup"?(Cp(o,l,mp(n),!1),pr.textContent="\u628A\u98DF\u6750\u653E\u8FDB\u4EAE\u4EAE\u7684\u98DF\u76C6\u5427\uFF01"):o.remove()}Ip()},t=document.createElement("button");t.type="button",t.className="food-card",t.dataset.food=r,t.setAttribute("aria-label",e),t.disabled=!0;let n=new Image;n.alt="",n.src=Jt("menu-"+r+".webp"),n.draggable=!1,t.append(n),r===fp[0][0]&&t.append(V0.content.cloneNode(!0));let i=!1;t.addEventListener("click",a=>{if(a.detail&&i){i=!1;return}vp(r,t,mp(n))}),t.addEventListener("pointerdown",a=>{!a.isPrimary||a.button!==0||un||Ht||t.disabled||(i=!1,Ht={id:a.pointerId,start:{x:a.clientX,y:a.clientY},ghost:null},t.setPointerCapture(a.pointerId))}),t.addEventListener("pointermove",a=>{if(Ht?.id!==a.pointerId)return;let o={x:a.clientX,y:a.clientY};!Ht.ghost&&Math.hypot(o.x-Ht.start.x,o.y-Ht.start.y)<8||(Ht.ghost??=Ap(r,o),Nh.classList.remove("show-cue"),t.classList.add("dragging"),Rp(Ht.ghost,o),gp(o))});for(let a of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(a,s);bp.push(t),Nh.append(t)}for(let r of Uh){let e=r.dataset.breed,t=new Image;t.src=Jt("dog-"+e+".webp"),t.alt="",t.draggable=!1,r.append(t),r.addEventListener("click",async()=>{if(!(e===Dh||un||Ht))if(clearTimeout(Oh),So.hidden=!0,Eo.open=!1,Wi("switching","\u72D7\u72D7\u9A6C\u4E0A\u5C31\u6765\u2026"),await sn.selectDog(e)){Dh=e,Hn.setAttribute("aria-label",r.getAttribute("aria-label")+"\u548C\u5B83\u7684\u98DF\u76C6");for(let n of Uh)n.setAttribute("aria-pressed",String(n===r));Wi("hungry","\u6C6A\u6C6A\uFF01\u6211\u997F\u5566\uFF01")}else fr.dataset.renderer==="three"&&Wi("hungry","\u8FD9\u53EA\u72D7\u72D7\u6682\u65F6\u6CA1\u80FD\u51FA\u73B0\u3002")})}function Bh(){let r=fr.dataset.renderer==="three";if(Eo.hidden=!r,_p.hidden=!r,!r)Wi("unavailable","\u8FD9\u53F0\u8BBE\u5907\u6682\u65F6\u770B\u4E0D\u5230\u72D7\u72D7\u3002");else{for(;sn.bowlSize()&&sn.undoFood(););Wi("hungry","\u6C6A\u6C6A\uFF01\u6211\u997F\u5566\uFF01")}}sn.ready.then(Bh);Hn.addEventListener("webglcontextlost",Bh);Hn.addEventListener("webglcontextrestored",Bh);})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
