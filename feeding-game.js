(()=>{function en(r){return globalThis.__PUPPY_ASSETS?.[r]??"./assets/"+r}var ud=1,dd=2;var Bl=0,Np=1,zi=2;var tr=100,Dp=101,Op=102;var Fp=200,Bp=201,zp=202,Hp=203,mc=204,gc=205,kp=206,Vp=207,Gp=208,Wp=209,Xp=210,jp=211,qp=212,Yp=213,Zp=214,Kp=0,Jp=1,$p=2,Qp=3,ef=4,tf=5,nf=6,rf=7;var pd=4;var Gh="attached",sf="detached",ho=300,Dr=301,Or=302,Ms=303,vc=304,uo=306,Sn=1e3,En=1001,bs=1002,hn=1003,zl=1004;var Pr=1005;var St=1006,gs=1007;var Wn=1008,fd=1008,Ii=1009,md=1010,gd=1011,Ss=1012,Hl=1013,nr=1014,rn=1015,an=1016,kl=1017,Vl=1018,Fr=1020,vd=35902,_d=1021,yd=1022,ln=1023,xd=1024,Md=1025,Es=1026,Br=1027,Gl=1028,Wl=1029,bd=1030,Xl=1031;var jl=1033,Ia=33776,La=33777,Ua=33778,Na=33779,_c=35840,yc=35841,xc=35842,Mc=35843,bc=36196,Sc=37492,Ec=37496,wc=37808,Tc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Lc=37815,Uc=37816,Nc=37817,Dc=37818,Oc=37819,Fc=37820,Bc=37821,Da=36492,zc=36494,Hc=36495,Sd=36283,kc=36284,Vc=36285,Gc=36286;var zr=2300,Hr=2301,Lo=2302,Wh=2400,Xh=2401,jh=2402;var Ed=0,po=1,Vs=2;var Ti="",lt="srgb",At="srgb-linear",fo="linear",nt="srgb";var gr=7680;var af=512,of=513,cf=514,lf=515,hf=516,uf=517,df=518,pf=519,Wc=35044;var qh="300 es",kr=2e3,Oa=2001,Li=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let i=0,s=n.length;i<s;i++)n[i].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yh=1234567,Lr=Math.PI/180,Vr=180/Math.PI;function Mn(){let r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(jt[255&r]+jt[r>>8&255]+jt[r>>16&255]+jt[r>>24&255]+"-"+jt[255&e]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[63&t|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[255&n]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function Xc(r,e){return(r%e+e)%e}function vs(r,e,t){return(1-t)*r+t*e}function Bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}var je={DEG2RAD:Lr,RAD2DEG:Vr,generateUUID:Mn,clamp:Tt,euclideanModulo:Xc,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:vs,damp:function(r,e,t,n){return vs(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(Xc(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Yh=r);let e=Yh+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*Lr},radToDeg:function(r){return r*Vr},isPowerOfTwo:function(r){return!(r&r-1)&&r!==0},ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:function(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))},setQuaternionFromProperEuler:function(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*f,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*f,o*l);break;case"ZYZ":r.set(c*f,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}},normalize:tt,denormalize:Bn},pe=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ke=class r{constructor(e,t,n,i,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],g=i[0],m=i[3],_=i[6],v=i[1],y=i[4],x=i[7],S=i[2],b=i[5],A=i[8];return s[0]=a*g+o*v+c*S,s[3]=a*m+o*y+c*b,s[6]=a*_+o*x+c*A,s[1]=l*g+h*v+u*S,s[4]=l*m+h*y+u*b,s[7]=l*_+h*x+u*A,s[2]=d*g+p*v+f*S,s[5]=d*m+p*y+f*b,s[8]=d*_+p*x+f*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/f;return e[0]=u*g,e[1]=(i*l-h*n)*g,e[2]=(o*n-i*a)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*s-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Uo.makeScale(e,t)),this}rotate(e){return this.premultiply(Uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Uo=new ke;function wd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ws(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ff(){let r=ws("canvas");return r.style.display="block",r}var Zh={};function ms(r){r in Zh||(Zh[r]=!0,console.warn(r))}var Ke={enabled:!0,workingColorSpace:At,spaces:{},convert:function(r,e,t){return this.enabled!==!1&&e!==t&&e&&t&&(this.spaces[e].transfer===nt&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===nt&&(r.r=Ur(r.r),r.g=Ur(r.g),r.b=Ur(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?fo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ri(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function Ur(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}var Kh=[.64,.33,.3,.6,.15,.06],Jh=[.2126,.7152,.0722],$h=[.3127,.329],Qh=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),vr;Ke.define({[At]:{primaries:Kh,whitePoint:$h,transfer:fo,toXYZ:Qh,fromXYZ:eu,luminanceCoefficients:Jh,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:Kh,whitePoint:$h,transfer:nt,toXYZ:Qh,fromXYZ:eu,luminanceCoefficients:Jh,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}});var jc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{vr===void 0&&(vr=ws("canvas")),vr.width=e.width,vr.height=e.height;let n=vr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=vr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=255*ri(s[a]/255);return n.putImageData(i,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ri(t[n]/255)):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},mf=0,Fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(No(i[a].image)):s.push(No(i[a]))}else s=No(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function No(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?jc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var gf=0,Ft=class r extends Li{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=1001,i=1001,s=1006,a=1008,o=1023,c=1009,l=r.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Mn(),this.name="",this.source=new Fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sn:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Sn:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ft.DEFAULT_IMAGE=null,Ft.DEFAULT_MAPPING=ho,Ft.DEFAULT_ANISOTROPY=1;var $e=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],g=c[2],m=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,x=(p+1)/2,S=(_+1)/2,b=(h+d)/4,A=(u+g)/4,C=(f+m)/4;return y>x&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=A/n):x>S?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=C/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=C/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-f)*(m-f)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-f)/v,this.y=(u-g)/v,this.z=(d-h)/v,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qc=class extends Li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);let i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:St,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ft(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yc=class extends Ft{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],p=s[a+1],f=s[a+2],g=s[a+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=g);if(u!==g||c!==d||l!==p||h!==f){let m=1-o,_=c*d+l*p+h*f+u*g,v=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){let S=Math.sqrt(y),b=Math.atan2(S,_*v);m=Math.sin(m*b)/S,o=Math.sin(o*b)/S}let x=o*v;if(c=c*m+d*x,l=l*m+p*x,h=h*m+f*x,u=u*m+g*x,m===1-o){let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),p=c(i/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,s=this._z,a=this._w,o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let c=1-o*o;if(c<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},M=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Do=new M,tu=new xt,Yt=class{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(s,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$s.copy(n.boundingBox)),$s.applyMatrix4(e.matrixWorld),this.union($s)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),Qs.subVectors(this.max,ss),_r.subVectors(e.a,ss),yr.subVectors(e.b,ss),xr.subVectors(e.c,ss),xi.subVectors(yr,_r),Mi.subVectors(xr,yr),Yi.subVectors(_r,xr);let t=[0,-xi.z,xi.y,0,-Mi.z,Mi.y,0,-Yi.z,Yi.y,xi.z,0,-xi.x,Mi.z,0,-Mi.x,Yi.z,0,-Yi.x,-xi.y,xi.x,0,-Mi.y,Mi.x,0,-Yi.y,Yi.x,0];return!!Oo(t,_r,yr,xr,Qs)&&(t=[1,0,0,0,1,0,0,0,1],!!Oo(t,_r,yr,xr,Qs)&&(ea.crossVectors(xi,Mi),t=[ea.x,ea.y,ea.z],Oo(t,_r,yr,xr,Qs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Dn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Kn=[new M,new M,new M,new M,new M,new M,new M,new M],Dn=new M,$s=new Yt,_r=new M,yr=new M,xr=new M,xi=new M,Mi=new M,Yi=new M,ss=new M,Qs=new M,ea=new M,Zi=new M;function Oo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Zi.fromArray(r,s);let o=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),c=e.dot(Zi),l=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var vf=new Yt,as=new M,Fo=new M,un=class{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(as,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(Fo)),this.expandByPoint(as.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Jn=new M,Bo=new M,ta=new M,bi=new M,zo=new M,na=new M,Ho=new M,ir=class{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bo.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),bi.copy(this.origin).sub(Bo);let s=.5*e.distanceTo(t),a=-this.direction.dot(ta),o=bi.dot(this.direction),c=-bi.dot(ta),l=bi.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bo).addScaledVector(ta,d),p}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);let n=Jn.dot(this.direction),i=Jn.dot(Jn)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i?null:((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,n,i,s){zo.subVectors(t,e),na.subVectors(n,e),Ho.crossVectors(zo,na);let a,o=this.direction.dot(Ho);if(o>0){if(i)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}bi.subVectors(this.origin,e);let c=a*this.direction.dot(na.crossVectors(bi,na));if(c<0)return null;let l=a*this.direction.dot(zo.cross(bi));if(l<0||c+l>o)return null;let h=-a*bi.dot(Ho);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ue=class r{constructor(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m)}set(e,t,n,i,s,a,o,c,l,h,u,d,p,f,g,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,g=l*u;t[0]=d+g*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,g=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_f,e,yf)}lookAt(e,t,n){let i=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Si.crossVectors(n,fn),Si.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Si.crossVectors(n,fn)),Si.normalize(),ia.crossVectors(fn,Si),i[0]=Si.x,i[4]=ia.x,i[8]=fn.x,i[1]=Si.y,i[5]=ia.y,i[9]=fn.y,i[2]=Si.z,i[6]=ia.z,i[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],g=n[6],m=n[10],_=n[14],v=n[3],y=n[7],x=n[11],S=n[15],b=i[0],A=i[4],C=i[8],I=i[12],U=i[1],D=i[5],H=i[9],V=i[13],P=i[2],W=i[6],X=i[10],ie=i[14],re=i[3],ne=i[7],ue=i[11],Y=i[15];return s[0]=a*b+o*U+c*P+l*re,s[4]=a*A+o*D+c*W+l*ne,s[8]=a*C+o*H+c*X+l*ue,s[12]=a*I+o*V+c*ie+l*Y,s[1]=h*b+u*U+d*P+p*re,s[5]=h*A+u*D+d*W+p*ne,s[9]=h*C+u*H+d*X+p*ue,s[13]=h*I+u*V+d*ie+p*Y,s[2]=f*b+g*U+m*P+_*re,s[6]=f*A+g*D+m*W+_*ne,s[10]=f*C+g*H+m*X+_*ue,s[14]=f*I+g*V+m*ie+_*Y,s[3]=v*b+y*U+x*P+S*re,s[7]=v*A+y*D+x*W+S*ne,s[11]=v*C+y*H+x*X+S*ue,s[15]=v*I+y*V+x*ie+S*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-i*l*u-s*o*d+n*l*d+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-i*a*p+i*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*d+i*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],g=e[13],m=e[14],_=e[15],v=u*m*l-g*d*l+g*c*p-o*m*p-u*c*_+o*d*_,y=f*d*l-h*m*l-f*c*p+a*m*p+h*c*_-a*d*_,x=h*g*l-f*u*l+f*o*p-a*g*p-h*o*_+a*u*_,S=f*u*c-h*g*c-f*o*d+a*g*d+h*o*m-a*u*m,b=t*v+n*y+i*x+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/b;return e[0]=v*A,e[1]=(g*d*s-u*m*s-g*i*p+n*m*p+u*i*_-n*d*_)*A,e[2]=(o*m*s-g*c*s+g*i*l-n*m*l-o*i*_+n*c*_)*A,e[3]=(u*c*s-o*d*s-u*i*l+n*d*l+o*i*p-n*c*p)*A,e[4]=y*A,e[5]=(h*m*s-f*d*s+f*i*p-t*m*p-h*i*_+t*d*_)*A,e[6]=(f*c*s-a*m*s-f*i*l+t*m*l+a*i*_-t*c*_)*A,e[7]=(a*d*s-h*c*s+h*i*l-t*d*l-a*i*p+t*c*p)*A,e[8]=x*A,e[9]=(f*u*s-h*g*s-f*n*p+t*g*p+h*n*_-t*u*_)*A,e[10]=(a*g*s-f*o*s+f*n*l-t*g*l-a*n*_+t*o*_)*A,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*A,e[12]=S*A,e[13]=(h*g*i-f*u*i+f*n*d-t*g*d-h*n*m+t*u*m)*A,e[14]=(f*o*i-a*g*i-f*n*c+t*g*c+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*d+t*o*d)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,g=a*h,m=a*u,_=o*u,v=c*l,y=c*h,x=c*u,S=n.x,b=n.y,A=n.z;return i[0]=(1-(g+_))*S,i[1]=(p+x)*S,i[2]=(f-y)*S,i[3]=0,i[4]=(p-x)*b,i[5]=(1-(d+_))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(f+y)*A,i[9]=(m-v)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,s=Mr.set(i[0],i[1],i[2]).length(),a=Mr.set(i[4],i[5],i[6]).length(),o=Mr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],On.copy(this);let c=1/s,l=1/a,h=1/o;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=l,On.elements[5]*=l,On.elements[6]*=l,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,t.setFromRotationMatrix(On),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=2e3){let c=this.elements,l=2*s/(t-e),h=2*s/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i),p,f;if(o===kr)p=-(a+s)/(a-s),f=-2*a*s/(a-s);else{if(o!==Oa)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-a/(a-s),f=-a*s/(a-s)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=f,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=2e3){let c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-s),d=(t+e)*l,p=(n+i)*h,f,g;if(o===kr)f=(a+s)*u,g=-2*u;else{if(o!==Oa)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=s*u,g=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=g,c[14]=-f,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mr=new M,On=new Ue,_f=new M(0,0,0),yf=new M(1,1,1),Si=new M,ia=new M,fn=new M,nu=new Ue,iu=new xt,Zt=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zt.DEFAULT_ORDER="XYZ";var Ts=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}},xf=0,ru=new M,br=new xt,$n=new Ue,ra=new M,os=new M,Mf=new M,bf=new xt,su=new M(1,0,0),au=new M(0,1,0),ou=new M(0,0,1),cu={type:"added"},Sf={type:"removed"},Sr={type:"childadded",child:null},ko={type:"childremoved",child:null},mt=class r extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new M,t=new Zt,n=new xt,i=new M(1,1,1);t._onChange((function(){n.setFromEuler(t,!1)})),n._onChange((function(){t.setFromQuaternion(n,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new ke}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(su,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return ru.copy(e).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(su,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(os,ra,this.up):$n.lookAt(ra,os,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),br.setFromRotationMatrix($n),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sf),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map((o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()}))),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mt.DEFAULT_UP=new M(0,1,0),mt.DEFAULT_MATRIX_AUTO_UPDATE=!0,mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=new M,Qn=new M,Vo=new M,ei=new M,Er=new M,wr=new M,lu=new M,Go=new M,Wo=new M,Xo=new M,jo=new $e,qo=new $e,Yo=new $e,Ai=class r{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fn.subVectors(e,t),i.cross(Fn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Fn.subVectors(i,t),Qn.subVectors(n,t),Vo.subVectors(e,t);let a=Fn.dot(Fn),o=Fn.dot(Qn),c=Fn.dot(Vo),l=Qn.dot(Qn),h=Qn.dot(Vo),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ei)!==null&&ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ei.x),c.addScaledVector(a,ei.y),c.addScaledVector(o,ei.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return jo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),jo.fromBufferAttribute(e,t),qo.fromBufferAttribute(e,n),Yo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jo,s.x),a.addScaledVector(qo,s.y),a.addScaledVector(Yo,s.z),a}static isFrontFacing(e,t,n,i){return Fn.subVectors(n,t),Qn.subVectors(e,t),Fn.cross(Qn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),.5*Fn.cross(Qn).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Er.subVectors(i,n),wr.subVectors(s,n),Go.subVectors(e,n);let c=Er.dot(Go),l=wr.dot(Go);if(c<=0&&l<=0)return t.copy(n);Wo.subVectors(e,i);let h=Er.dot(Wo),u=wr.dot(Wo);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Er,a);Xo.subVectors(e,s);let p=Er.dot(Xo),f=wr.dot(Xo);if(f>=0&&p<=f)return t.copy(s);let g=p*l-c*f;if(g<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(wr,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return lu.subVectors(s,i),o=(u-h)/(u-h+(p-f)),t.copy(i).addScaledVector(lu,o);let _=1/(m+g+d);return a=g*_,o=d*_,t.copy(n).addScaledVector(Er,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Td={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},sa={h:0,s:0,l:0};function Zo(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Xc(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Zo(a,s,e+1/3),this.g=Zo(a,s,e),this.b=Zo(a,s,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=lt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=lt){let n=Td[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return Ke.fromWorkingColorSpace(qt.copy(this),e),65536*Math.round(Tt(255*qt.r,0,255))+256*Math.round(Tt(255*qt.g,0,255))+Math.round(Tt(255*qt.b,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(qt.copy(this),t);let n=qt.r,i=qt.g,s=qt.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=lt){Ke.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,i=qt.b;return e!==lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(sa);let n=vs(Ei.h,sa.h,t),i=vs(Ei.s,sa.s,t),s=vs(Ei.l,sa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new we;we.NAMES=Td;var Ef=0,dn=class extends Li{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Mn(),this.name="",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gr,this.stencilZFail=gr,this.stencilZPass=gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];i!==void 0?i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Et=class extends dn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ii=wf();function wf(){let r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Tf(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Tt(r,-65504,65504),ii.floatView[0]=r;let e=ii.uint32View[0],t=e>>23&511;return ii.baseTable[t]+((8388607&e)>>ii.shiftTable[t])}function Af(r){let e=r>>10;return ii.uint32View[0]=ii.mantissaTable[ii.offsetTable[e]+(1023&r)]+ii.exponentTable[e],ii.floatView[0]}var pi={toHalfFloat:Tf,fromHalfFloat:Af},wt=new M,aa=new pe,yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)aa.fromBufferAttribute(this,t),aa.applyMatrix3(e),this.setXY(t,aa.x,aa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wc&&(e.usage=this.usage),e}};var Ui=class extends yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var za=class extends yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ee=class extends yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rf=0,xn=new Ue,Ko=new mt,Tr=new M,mn=new Yt,cs=new Yt,Ot=new M,Qe=class r extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wd(e)?za:Ui)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ee(n,3))}else{for(let n=0,i=t.count;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new M,1/0);if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(mn.min,cs.min),mn.expandByPoint(Ot),Ot.addVectors(mn.max,cs.max),mn.expandByPoint(Ot)):(mn.expandByPoint(cs.min),mn.expandByPoint(cs.max))}mn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ot.fromBufferAttribute(o,l),c&&(Tr.fromBufferAttribute(e,l),Ot.add(Tr)),i=Math.max(i,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new M,c[C]=new M;let l=new M,h=new M,u=new M,d=new pe,p=new pe,f=new pe,g=new M,m=new M;function _(C,I,U){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,U),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,U),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let D=1/(p.x*f.y-f.x*p.y);isFinite(D)&&(g.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(D),o[C].add(g),o[I].add(g),o[U].add(g),c[C].add(m),c[I].add(m),c[U].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,I=v.length;C<I;++C){let U=v[C],D=U.start;for(let H=D,V=D+U.count;H<V;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let y=new M,x=new M,S=new M,b=new M;function A(C){S.fromBufferAttribute(i,C),b.copy(S);let I=o[C];y.copy(I),y.sub(S.multiplyScalar(S.dot(I))).normalize(),x.crossVectors(b,I);let U=x.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,U)}for(let C=0,I=v.length;C<I;++C){let U=v[C],D=U.start;for(let H=D,V=D+U.count;H<V;H+=3)A(e.getX(H+0)),A(e.getX(H+1)),A(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new M,s=new M,a=new M,o=new M,c=new M,l=new M,h=new M,u=new M;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,f),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let g=0,m=c.length;g<m;g++){p=o.isInterleavedBufferAttribute?c[g]*o.data.stride+o.offset:c[g]*h;for(let _=0;_<h;_++)d[f++]=l[p++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=e(i[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hu=new Ue,Ki=new ir,oa=new un,uu=new M,ca=new M,la=new M,ha=new M,Jo=new M,ua=new M,du=new M,da=new M,Xe=class extends mt{constructor(e=new Qe,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){ua.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Jo.fromBufferAttribute(u,e),a?ua.addScaledVector(Jo,h):ua.addScaledVector(Jo.sub(t),h))}t.add(ua)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),oa.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(oa,uu)===null||Ki.origin.distanceToSquared(uu)>(e.far-e.near)**2))return;hu.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(hu),n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Ki)}}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],_=a[m.materialIndex];for(let v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));v<y;v+=3)i=pa(this,_,e,n,l,h,u,o.getX(v),o.getX(v+1),o.getX(v+2)),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);f<g;f+=3)i=pa(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),i&&(i.faceIndex=Math.floor(f/3),t.push(i));else if(c!==void 0)if(Array.isArray(a))for(let f=0,g=d.length;f<g;f++){let m=d[f],_=a[m.materialIndex];for(let v=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));v<y;v+=3)i=pa(this,_,e,n,l,h,u,v,v+1,v+2),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}else for(let f=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);f<g;f+=3)i=pa(this,a,e,n,l,h,u,f,f+1,f+2),i&&(i.faceIndex=Math.floor(f/3),t.push(i))}};function pa(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ca),r.getVertexPosition(c,la),r.getVertexPosition(l,ha);let h=(function(u,d,p,f,g,m,_,v){let y;if(y=d.side===1?f.intersectTriangle(_,m,g,!0,v):f.intersectTriangle(g,m,_,d.side===0,v),y===null)return null;da.copy(v),da.applyMatrix4(u.matrixWorld);let x=p.ray.origin.distanceTo(da);return x<p.near||x>p.far?null:{distance:x,point:da.clone(),object:u}})(r,e,t,n,ca,la,ha,du);if(h){let u=new M;Ai.getBarycoord(du,ca,la,ha,u),i&&(h.uv=Ai.getInterpolatedAttribute(i,o,c,l,u,new pe)),s&&(h.uv1=Ai.getInterpolatedAttribute(s,o,c,l,u,new pe)),a&&(h.normal=Ai.getInterpolatedAttribute(a,o,c,l,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new M,materialIndex:0};Ai.getNormal(ca,la,ha,d.normal),h.face=d,h.barycoord=u}return h}var Gr=class r extends Qe{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(g,m,_,v,y,x,S,b,A,C,I){let U=x/A,D=S/C,H=x/2,V=S/2,P=b/2,W=A+1,X=C+1,ie=0,re=0,ne=new M;for(let ue=0;ue<X;ue++){let Y=ue*D-V;for(let Z=0;Z<W;Z++){let xe=Z*U-H;ne[g]=xe*v,ne[m]=Y*y,ne[_]=P,l.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[_]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),u.push(Z/A),u.push(1-ue/C),ie+=1}}for(let ue=0;ue<C;ue++)for(let Y=0;Y<A;Y++){let Z=d+Y+W*ue,xe=d+Y+W*(ue+1),ve=d+(Y+1)+W*(ue+1),se=d+(Y+1)+W*ue;c.push(Z,xe,se),c.push(xe,ve,se),re+=6}o.addGroup(p,re,I),p+=re,d+=ie}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,i,a,2),f("x","z","y",1,-1,e,n,-t,i,a,3),f("x","y","z",1,-1,e,t,n,i,s,4),f("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Wr(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function nn(r){let e={};for(let t=0;t<r.length;t++){let n=Wr(r[t]);for(let i in n)e[i]=n[i]}return e}function Ad(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var Cf={clone:Wr,merge:nn},jn=class extends dn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},As=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=kr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wi=new M,pu=new pe,fu=new pe,It=class extends As{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Vr*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Lr*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Vr*Math.atan(Math.tan(.5*Lr*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,t){return this.getViewBounds(e,pu,fu),t.subVectors(fu,pu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Lr*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ar=-90,Zc=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new It(Ar,1,e,t);i.layers=this.layers,this.add(i);let s=new It(Ar,1,e,t);s.layers=this.layers,this.add(s);let a=new It(Ar,1,e,t);a.layers=this.layers,this.add(a);let o=new It(Ar,1,e,t);o.layers=this.layers,this.add(o);let c=new It(Ar,1,e,t);c.layers=this.layers,this.add(c);let l=new It(Ar,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===kr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Oa)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ha=class extends Ft{constructor(e,t,n,i,s,a,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:Dr,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kc=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ha(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gr(5,5,5),s=new jn({name:"CubemapFromEquirect",uniforms:Wr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new Xe(i,s),o=t.minFilter;return t.minFilter===Wn&&(t.minFilter=St),new Zc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}},$o=new M,Pf=new M,If=new ke,ni=class{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=$o.subVectors(n,t).cross(Pf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||If.getNormalMatrix(e),i=this.coplanarPoint($o).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ji=new un,fa=new M,Xr=class{constructor(e=new ni,t=new ni,n=new ni,i=new ni,s=new ni,a=new ni){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){let n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],g=i[10],m=i[11],_=i[12],v=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-s,d-l,m-p,x-_).normalize(),n[1].setComponents(c+s,d+l,m+p,x+_).normalize(),n[2].setComponents(c+a,d+h,m+f,x+v).normalize(),n[3].setComponents(c-a,d-h,m-f,x-v).normalize(),n[4].setComponents(c-o,d-u,m-g,x-y).normalize(),t===kr)n[5].setComponents(c+o,d+u,m+g,x+y).normalize();else{if(t!==Oa)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,g,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(fa.x=i.normal.x>0?e.max.x:e.min.x,fa.y=i.normal.y>0?e.max.y:e.min.y,fa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Rd(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Lf(r){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(r.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let i=e.get(t);if(i===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=r.createBuffer(),u;if(r.bindBuffer(a,h),r.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=r.FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?r.HALF_FLOAT:r.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=r.SHORT;else if(o instanceof Uint32Array)u=r.UNSIGNED_INT;else if(o instanceof Int32Array)u=r.INT;else if(o instanceof Int8Array)u=r.BYTE;else if(o instanceof Uint8Array)u=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=r.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(i.version<t.version){if(i.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(r.bindBuffer(o,s),l.length===0)r.bufferSubData(o,0,c);else{l.sort(((u,d)=>u.start-d.start));let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];r.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(i.buffer,t,n),i.version=t.version}}}}var qn=class r extends Qe{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],g=[],m=[];for(let _=0;_<h;_++){let v=_*d-a;for(let y=0;y<l;y++){let x=y*u-s;f.push(x,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let v=0;v<o;v++){let y=v+l*_,x=v+l*(_+1),S=v+1+l*(_+1),b=v+1+l*_;p.push(y,x,b),p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Ve={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},be={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Gn={basic:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:nn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:nn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:nn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:nn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:nn([be.points,be.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:nn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:nn([be.common,be.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:nn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:nn([be.sprite,be.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:nn([be.common,be.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:nn([be.lights,be.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Gn.physical={uniforms:nn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var ma={r:0,b:0,g:0},$i=new Zt,Uf=new Ue;function Nf(r,e,t,n,i,s,a){let o=new we(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_}function g(m,_){m.getRGB(ma,Ad(r)),n.buffers.color.setClear(ma.r,ma.g,ma.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),h=_,g(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,g(o,h)},render:function(m){let _=!1,v=f(m);v===null?g(o,h):v&&v.isColor&&(g(v,1),_=!0);let y=r.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))},addToRenderList:function(m,_){let v=f(_);v&&(v.isCubeTexture||v.mapping===uo)?(l===void 0&&(l=new Xe(new Gr(1,1,1),new jn({name:"BackgroundCubeMaterial",uniforms:Wr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,x,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),$i.copy(_.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),l.material.uniforms.envMap.value=v,l.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Uf.makeRotationFromEuler($i)),l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==nt,u===v&&d===v.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Xe(new qn(2,2),new jn({name:"BackgroundMaterial",uniforms:Wr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),u===v&&d===v.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}}}function Df(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=l(null),s=i,a=!1;function o(_){return r.bindVertexArray(_)}function c(_){return r.deleteVertexArray(_)}function l(_){let v=[],y=[],x=[];for(let S=0;S<t;S++)v[S]=0,y[S]=0,x[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:y,attributeDivisors:x,object:_,attributes:{},index:null}}function h(){let _=s.newAttributes;for(let v=0,y=_.length;v<y;v++)_[v]=0}function u(_){d(_,0)}function d(_,v){let y=s.newAttributes,x=s.enabledAttributes,S=s.attributeDivisors;y[_]=1,x[_]===0&&(r.enableVertexAttribArray(_),x[_]=1),S[_]!==v&&(r.vertexAttribDivisor(_,v),S[_]=v)}function p(){let _=s.newAttributes,v=s.enabledAttributes;for(let y=0,x=v.length;y<x;y++)v[y]!==_[y]&&(r.disableVertexAttribArray(y),v[y]=0)}function f(_,v,y,x,S,b,A){A===!0?r.vertexAttribIPointer(_,v,y,S,b):r.vertexAttribPointer(_,v,y,x,S,b)}function g(){m(),a=!0,s!==i&&(s=i,o(s.object))}function m(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(_,v,y,x,S){let b=!1,A=(function(C,I,U){let D=U.wireframe===!0,H=n[C.id];H===void 0&&(H={},n[C.id]=H);let V=H[I.id];V===void 0&&(V={},H[I.id]=V);let P=V[D];return P===void 0&&(P=l(r.createVertexArray()),V[D]=P),P})(x,y,v);s!==A&&(s=A,o(s.object)),b=(function(C,I,U,D){let H=s.attributes,V=I.attributes,P=0,W=U.getAttributes();for(let X in W)if(W[X].location>=0){let ie=H[X],re=V[X];if(re===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(re=C.instanceColor)),ie===void 0||ie.attribute!==re||re&&ie.data!==re.data)return!0;P++}return s.attributesNum!==P||s.index!==D})(_,x,y,S),b&&(function(C,I,U,D){let H={},V=I.attributes,P=0,W=U.getAttributes();for(let X in W)if(W[X].location>=0){let ie=V[X];ie===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor));let re={};re.attribute=ie,ie&&ie.data&&(re.data=ie.data),H[X]=re,P++}s.attributes=H,s.attributesNum=P,s.index=D})(_,x,y,S),S!==null&&e.update(S,r.ELEMENT_ARRAY_BUFFER),(b||a)&&(a=!1,(function(C,I,U,D){h();let H=D.attributes,V=U.getAttributes(),P=I.defaultAttributeValues;for(let W in V){let X=V[W];if(X.location>=0){let ie=H[W];if(ie===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(ie=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(ie=C.instanceColor)),ie!==void 0){let re=ie.normalized,ne=ie.itemSize,ue=e.get(ie);if(ue===void 0)continue;let Y=ue.buffer,Z=ue.type,xe=ue.bytesPerElement,ve=Z===r.INT||Z===r.UNSIGNED_INT||ie.gpuType===Hl;if(ie.isInterleavedBufferAttribute){let se=ie.data,R=se.stride,T=ie.offset;if(se.isInstancedInterleavedBuffer){for(let F=0;F<X.locationSize;F++)d(X.location+F,se.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let F=0;F<X.locationSize;F++)u(X.location+F);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let F=0;F<X.locationSize;F++)f(X.location+F,ne/X.locationSize,Z,re,R*xe,(T+ne/X.locationSize*F)*xe,ve)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)d(X.location+se,ie.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<X.locationSize;se++)u(X.location+se);r.bindBuffer(r.ARRAY_BUFFER,Y);for(let se=0;se<X.locationSize;se++)f(X.location+se,ne/X.locationSize,Z,re,ne*xe,ne/X.locationSize*se*xe,ve)}}else if(P!==void 0){let re=P[W];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(X.location,re);break;case 3:r.vertexAttrib3fv(X.location,re);break;case 4:r.vertexAttrib4fv(X.location,re);break;default:r.vertexAttrib1fv(X.location,re)}}}}p()})(_,v,y,x),S!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))},reset:g,resetDefaultState:m,dispose:function(){g();for(let _ in n){let v=n[_];for(let y in v){let x=v[y];for(let S in x)c(x[S].object),delete x[S];delete v[y]}delete n[_]}},releaseStatesOfGeometry:function(_){if(n[_.id]===void 0)return;let v=n[_.id];for(let y in v){let x=v[y];for(let S in x)c(x[S].object),delete x[S];delete v[y]}delete n[_.id]},releaseStatesOfProgram:function(_){for(let v in n){let y=n[v];if(y[_.id]===void 0)continue;let x=y[_.id];for(let S in x)c(x[S].object),delete x[S];delete y[_.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Of(r,e,t){let n;function i(s,a,o){o!==0&&(r.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){r.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=i,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)i(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function Ff(r,e,t,n){let i;function s(d){if(d==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:s,textureFormatReadable:function(d){return d===ln||n.convert(d)===r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===an&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Ii&&n.convert(d)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==rn&&!p)},precision:a,logarithmicDepthBuffer:c,reverseDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:r.getParameter(r.MAX_TEXTURE_SIZE),maxCubemapSize:r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:r.getParameter(r.MAX_VERTEX_ATTRIBS),maxVertexUniforms:r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:r.getParameter(r.MAX_VARYING_VECTORS),maxFragmentUniforms:r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:r.getParameter(r.MAX_SAMPLES)}}function Bf(r){let e=this,t=null,n=0,i=!1,s=!1,a=new ni,o=new ke,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,g=null;if(f!==0){if(g=c.value,p!==!0||g===null){let m=d+4*f,_=u.matrixWorldInverse;o.getNormalMatrix(_),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=d;v!==f;++v,y+=4)a.copy(h[v]).applyMatrix4(_,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,g}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,g=h.clipShadows,m=r.get(h);if(!i||p===null||p.length===0||s&&!g)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let _=s?0:n,v=4*_,y=m.clippingState||null;c.value=y,y=l(p,u,v,d);for(let x=0;x!==v;++x)y[x]=t[x];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}}}function zf(r){let e=new WeakMap;function t(i,s){return s===Ms?i.mapping=Dr:s===vc&&(i.mapping=Or),i}function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping;if(s===Ms||s===vc){if(e.has(i))return t(e.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Kc(a.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}var jr=class extends As{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mu=[.125,.215,.35,.446,.526,.582],ls=20,Qo=new jr,gu=new we,ec=null,tc=0,nc=0,ic=!1,er=(1+Math.sqrt(5))/2,Rr=1/er,vu=[new M(-er,Rr,0),new M(er,Rr,0),new M(-Rr,0,er),new M(Rr,0,er),new M(0,er,-Rr),new M(0,er,Rr),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)],ka=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ec,tc,nc),this._renderer.xr.enabled=ic,e.scissorTest=!1,ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Dr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ec=this._renderer.getRenderTarget(),tc=this._renderer.getActiveCubeFace(),nc=this._renderer.getActiveMipmapLevel(),ic=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:St,minFilter:St,generateMipmaps:!1,type:an,format:ln,colorSpace:At,depthBuffer:!1},i=_u(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+mu.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);c.push(p);let f=1/p;d>a-4?f=mu[d-a+4-1]:d===0&&(f=0),l.push(f);let g=1/(p-2),m=-g,_=1+g,v=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,x=6,S=3,b=2,A=1,C=new Float32Array(S*x*y),I=new Float32Array(b*x*y),U=new Float32Array(A*x*y);for(let H=0;H<y;H++){let V=H%3*2/3-1,P=H>2?0:-1,W=[V,P,0,V+2/3,P,0,V+2/3,P+1,0,V,P,0,V+2/3,P+1,0,V,P+1,0];C.set(W,S*x*H),I.set(v,b*x*H);let X=[H,H,H,H,H,H];U.set(X,A*x*H)}let D=new Qe;D.setAttribute("position",new yt(C,S)),D.setAttribute("uv",new yt(I,b)),D.setAttribute("faceIndex",new yt(U,A)),o.push(D),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(ls),h=new M(0,1,0);return new jn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:ql(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})})(s,e,t)}return i}_compileMaterial(e){let t=new Xe(this._lodPlanes[0],e);this._renderer.compile(t,Qo)}_sceneToCubeUV(e,t,n,i){let s=new It(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(gu),c.toneMapping=0,c.autoClear=!1;let u=new Et({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),d=new Xe(new Gr,u),p=!1,f=e.background;f?f.isColor&&(u.color.copy(f),e.background=null,p=!0):(u.color.copy(gu),p=!0);for(let g=0;g<6;g++){let m=g%3;m===0?(s.up.set(0,a[g],0),s.lookAt(o[g],0,0)):m===1?(s.up.set(0,0,a[g]),s.lookAt(0,o[g],0)):(s.up.set(0,a[g],0),s.lookAt(0,0,o[g]));let _=this._cubeSize;ga(i,m*_,g>2?_:0,_,_),c.setRenderTarget(i),p&&c.render(d,s),c.render(e,s)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=f}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Dr||e.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Xe(this._lodPlanes[0],s);s.uniforms.envMap.value=e;let o=this._cubeSize;ga(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Qo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=vu[(i-s-1)%vu.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=new Xe(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,g=isFinite(s)?1+Math.floor(3*f):ls;g>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to 20`);let m=[],_=0;for(let x=0;x<ls;++x){let S=x/f,b=Math.exp(-S*S/2);m.push(b),x===0?_+=b:x<g&&(_+=2*b)}for(let x=0;x<m.length;x++)m[x]=m[x]/_;u.envMap.value=e.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=p,u.mipInt.value=v-n;let y=this._sizeLods[i];ga(t,3*y*(i>v-4?i-v+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,Qo)}};function _u(r,e,t){let n=new si(r,e,t);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ga(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function yu(){return new jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xu(){return new jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}function Hf(r){let e=new WeakMap,t=null;function n(i){let s=i.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(i){if(i&&i.isTexture){let s=i.mapping,a=s===Ms||s===vc,o=s===Dr||s===Or;if(a||o){let c=e.get(i),l=c!==void 0?c.texture.pmremVersion:0;if(i.isRenderTargetTexture&&i.pmremVersion!==l)return t===null&&(t=new ka(r)),c=a?t.fromEquirectangular(i,c):t.fromCubemap(i,c),c.texture.pmremVersion=i.pmremVersion,e.set(i,c),c.texture;if(c!==void 0)return c.texture;{let h=i.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new ka(r)),c=a?t.fromEquirectangular(i):t.fromCubemap(i),c.texture.pmremVersion=i.pmremVersion,e.set(i,c),i.addEventListener("dispose",n),c.texture):null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function kf(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ms("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vf(r,e,t,n){let i={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);for(let u in l.morphAttributes){let d=l.morphAttributes[u];for(let p=0,f=d.length;p<f;p++)e.remove(d[p])}l.removeEventListener("dispose",a),delete i[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let g=h.array;d=h.version;for(let m=0,_=g.length;m<_;m+=3){let v=g[m+0],y=g[m+1],x=g[m+2];l.push(v,y,y,x,x,v)}}else{if(u===void 0)return;{let g=u.array;d=u.version;for(let m=0,_=g.length/3-1;m<_;m+=3){let v=m+0,y=m+1,x=m+2;l.push(v,y,y,x,x,v)}}}let p=new(wd(l)?za:Ui)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let u in l)e.update(l[u],r.ARRAY_BUFFER);let h=c.morphAttributes;for(let u in h){let d=h[u];for(let p=0,f=d.length;p<f;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Gf(r,e,t){let n,i,s;function a(o,c,l){l!==0&&(r.drawElementsInstanced(n,c,i,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){i=o.type,s=o.bytesPerElement},this.render=function(o,c){r.drawElements(n,c,i,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,i,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,i,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function Wf(r){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",n)}}}}function Xf(r,e,t){let n=new WeakMap,i=new $e;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let C=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),f===!0&&(v=3);let y=a.attributes.position.count*v,x=1;y>e.maxTextureSize&&(x=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*x*4*h),b=new Ba(S,y,x,h);b.type=rn,b.needsUpdate=!0;let A=4*v;for(let I=0;I<h;I++){let U=g[I],D=m[I],H=_[I],V=y*x*4*I;for(let P=0;P<U.count;P++){let W=P*A;d===!0&&(i.fromBufferAttribute(U,P),S[V+W+0]=i.x,S[V+W+1]=i.y,S[V+W+2]=i.z,S[V+W+3]=0),p===!0&&(i.fromBufferAttribute(D,P),S[V+W+4]=i.x,S[V+W+5]=i.y,S[V+W+6]=i.z,S[V+W+7]=0),f===!0&&(i.fromBufferAttribute(H,P),S[V+W+8]=i.x,S[V+W+9]=i.y,S[V+W+10]=i.z,S[V+W+11]=H.itemSize===4?i.w:1)}}u={count:h,texture:b,size:new pe(y,x)},n.set(a,u),a.addEventListener("dispose",C)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(r,"morphTargetBaseInfluence",p),o.getUniforms().setValue(r,"morphTargetInfluences",c)}o.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}}}function jf(r,e,t,n){let i=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),i.get(a)!==o&&(t.update(a.instanceMatrix,r.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,r.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}var Va=class extends Ft{constructor(e,t,n,i,s,a,o,c,l,h=1026){if(h!==Es&&h!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Es&&(n=nr),n===void 0&&h===Br&&(n=Fr),super(null,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:hn,this.minFilter=c!==void 0?c:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cd=new Ft,Mu=new Va(1,1),Pd=new Ba,Id=new Yc,Ld=new Ha,bu=[],Su=[],Eu=new Float32Array(16),wu=new Float32Array(9),Tu=new Float32Array(4);function Qr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=bu[i];if(s===void 0&&(s=new Float32Array(i),bu[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Lt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function mo(r,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function qf(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Yf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function Zf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function Kf(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Jf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Lt(t,n))return;Tu.set(n),r.uniformMatrix2fv(this.addr,!1,Tu),Ut(t,n)}}function $f(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Lt(t,n))return;wu.set(n),r.uniformMatrix3fv(this.addr,!1,wu),Ut(t,n)}}function Qf(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Lt(t,n))return;Eu.set(n),r.uniformMatrix4fv(this.addr,!1,Eu),Ut(t,n)}}function em(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function nm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function im(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function rm(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sm(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function am(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function om(r,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function cm(r,e,t){let n=this.cache,i=t.allocateTextureUnit(),s;n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),this.type===r.SAMPLER_2D_SHADOW?(Mu.compareFunction=515,s=Mu):s=Cd,t.setTexture2D(e||s,i)}function lm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Id,i)}function hm(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ld,i)}function um(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pd,i)}function dm(r,e){r.uniform1fv(this.addr,e)}function pm(r,e){let t=Qr(e,this.size,2);r.uniform2fv(this.addr,t)}function fm(r,e){let t=Qr(e,this.size,3);r.uniform3fv(this.addr,t)}function mm(r,e){let t=Qr(e,this.size,4);r.uniform4fv(this.addr,t)}function gm(r,e){let t=Qr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function vm(r,e){let t=Qr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function _m(r,e){let t=Qr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ym(r,e){r.uniform1iv(this.addr,e)}function xm(r,e){r.uniform2iv(this.addr,e)}function Mm(r,e){r.uniform3iv(this.addr,e)}function bm(r,e){r.uniform4iv(this.addr,e)}function Sm(r,e){r.uniform1uiv(this.addr,e)}function Em(r,e){r.uniform2uiv(this.addr,e)}function wm(r,e){r.uniform3uiv(this.addr,e)}function Tm(r,e){r.uniform4uiv(this.addr,e)}function Am(r,e,t){let n=this.cache,i=e.length,s=mo(t,i);Lt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Cd,s[a])}function Rm(r,e,t){let n=this.cache,i=e.length,s=mo(t,i);Lt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Id,s[a])}function Cm(r,e,t){let n=this.cache,i=e.length,s=mo(t,i);Lt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ld,s[a])}function Pm(r,e,t){let n=this.cache,i=e.length,s=mo(t,i);Lt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Pd,s[a])}var Jc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(i){switch(i){case 5126:return qf;case 35664:return Yf;case 35665:return Zf;case 35666:return Kf;case 35674:return Jf;case 35675:return $f;case 35676:return Qf;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return rm;case 36294:return sm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return um}})(t.type)}},$c=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(i){switch(i){case 5126:return dm;case 35664:return pm;case 35665:return fm;case 35666:return mm;case 35674:return gm;case 35675:return vm;case 35676:return _m;case 5124:case 35670:return ym;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return bm;case 5125:return Sm;case 36294:return Em;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}})(t.type)}},Qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},rc=/(\w+)(\])?(\[|\.)?/g;function Au(r,e){r.seq.push(e),r.map[e.id]=e}function Im(r,e,t){let n=r.name,i=n.length;for(rc.lastIndex=0;;){let s=rc.exec(n),a=rc.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===i){Au(t,l===void 0?new Jc(o,r,e):new $c(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Qc(o),Au(t,h)),t=h}}}var Nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=e.getActiveUniform(t,i);Im(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Ru(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Lm=0,Cu=new ke;function Pu(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(r.getShaderSource(e),a)}return i}function Um(r,e){let t=(function(n){Ke._getMatrix(Cu,Ke.workingColorSpace,n);let i=`mat3( ${Cu.elements.map((s=>s.toFixed(4)))} )`;switch(Ke.getTransfer(n)){case fo:return[i,"LinearTransferOETF"];case nt:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[i,"LinearTransferOETF"]}})(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Nm(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="Cineon";break;case 4:t="ACESFilmic";break;case 6:t="AgX";break;case 7:t="Neutral";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var va=new M;function Dm(){return Ke.getLuminanceCoefficients(va),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${va.x.toFixed(4)}, ${va.y.toFixed(4)}, ${va.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hs(r){return r!==""}function Iu(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(r){return r.replace(Om,Bm)}var Fm=new Map;function Bm(r,e){let t=Ve[e];if(t===void 0){let n=Fm.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return el(t)}var zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(r){return r.replace(zm,Hm)}function Hm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Nu(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function km(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(D){let H="SHADOWMAP_TYPE_BASIC";return D.shadowMapType===1?H="SHADOWMAP_TYPE_PCF":D.shadowMapType===2?H="SHADOWMAP_TYPE_PCF_SOFT":D.shadowMapType===3&&(H="SHADOWMAP_TYPE_VSM"),H})(t),l=(function(D){let H="ENVMAP_TYPE_CUBE";if(D.envMap)switch(D.envMapMode){case Dr:case Or:H="ENVMAP_TYPE_CUBE";break;case uo:H="ENVMAP_TYPE_CUBE_UV"}return H})(t),h=(function(D){let H="ENVMAP_MODE_REFLECTION";return D.envMap&&D.envMapMode===Or&&(H="ENVMAP_MODE_REFRACTION"),H})(t),u=(function(D){let H="ENVMAP_BLENDING_NONE";if(D.envMap)switch(D.combine){case 0:H="ENVMAP_BLENDING_MULTIPLY";break;case 1:H="ENVMAP_BLENDING_MIX";break;case 2:H="ENVMAP_BLENDING_ADD"}return H})(t),d=(function(D){let H=D.envMapCubeUVHeight;if(H===null)return null;let V=Math.log2(H)-2,P=1/H;return{texelWidth:1/(3*Math.max(Math.pow(2,V),112)),texelHeight:P,maxMip:V}})(t),p=(function(D){return[D.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",D.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)})(t),f=(function(D){let H=[];for(let V in D){let P=D[V];P!==!1&&H.push("#define "+V+" "+P)}return H.join(`
`)})(s),g=i.createProgram(),m,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(hs).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(hs).join(`
`),_.length>0&&(_+=`
`)):(m=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),_=[Nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Ve.tonemapping_pars_fragment:"",t.toneMapping!==0?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Um("linearToOutputTexel",t.outputColorSpace),Dm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),a=el(a),a=Iu(a,t),a=Lu(a,t),o=el(o),o=Iu(o,t),o=Lu(o,t),a=Uu(a),o=Uu(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=v+m+a,x=v+_+o,S=Ru(i,i.VERTEX_SHADER,y),b=Ru(i,i.FRAGMENT_SHADER,x);function A(D){if(r.debug.checkShaderErrors){let H=i.getProgramInfoLog(g).trim(),V=i.getShaderInfoLog(S).trim(),P=i.getShaderInfoLog(b).trim(),W=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,S,b);else{let ie=Pu(i,S,"vertex"),re=Pu(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+ie+`
`+re)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):V!==""&&P!==""||(X=!1);X&&(D.diagnostics={runnable:W,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:P,prefix:_}})}i.deleteShader(S),i.deleteShader(b),C=new Nr(i,g),I=(function(H,V){let P={},W=H.getProgramParameter(V,H.ACTIVE_ATTRIBUTES);for(let X=0;X<W;X++){let ie=H.getActiveAttrib(V,X),re=ie.name,ne=1;ie.type===H.FLOAT_MAT2&&(ne=2),ie.type===H.FLOAT_MAT3&&(ne=3),ie.type===H.FLOAT_MAT4&&(ne=4),P[re]={type:ie.type,location:H.getAttribLocation(V,re),locationSize:ne}}return P})(i,g)}let C,I;i.attachShader(g,S),i.attachShader(g,b),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),this.getUniforms=function(){return C===void 0&&A(this),C},this.getAttributes=function(){return I===void 0&&A(this),I};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=i.getProgramParameter(g,37297)),U},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=b,this}var Vm=0,tl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new nl(e),t.set(e,n)),n}},nl=class{constructor(e){this.id=Vm++,this.code=e,this.usedTimes=0}};function Gm(r,e,t,n,i,s,a){let o=new Ts,c=new tl,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,v,y,x){let S=y.fog,b=x.geometry,A=m.isMeshStandardMaterial?y.environment:null,C=(m.isMeshStandardMaterial?t:e).get(m.envMap||A),I=C&&C.mapping===uo?C.image.height:null,U=f[m.type];m.precision!==null&&(p=i.getMaxPrecision(m.precision),p!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let D=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,H=D!==void 0?D.length:0,V,P,W,X,ie=0;if(b.morphAttributes.position!==void 0&&(ie=1),b.morphAttributes.normal!==void 0&&(ie=2),b.morphAttributes.color!==void 0&&(ie=3),U){let Ye=Gn[U];V=Ye.vertexShader,P=Ye.fragmentShader}else V=m.vertexShader,P=m.fragmentShader,c.update(m),W=c.getVertexShaderID(m),X=c.getFragmentShaderID(m);let re=r.getRenderTarget(),ne=r.state.buffers.depth.getReversed(),ue=x.isInstancedMesh===!0,Y=x.isBatchedMesh===!0,Z=!!m.map,xe=!!m.matcap,ve=!!C,se=!!m.aoMap,R=!!m.lightMap,T=!!m.bumpMap,F=!!m.normalMap,z=!!m.displacementMap,L=!!m.emissiveMap,B=!!m.metalnessMap,w=!!m.roughnessMap,N=m.anisotropy>0,O=m.clearcoat>0,J=m.dispersion>0,k=m.iridescence>0,$=m.sheen>0,K=m.transmission>0,ee=N&&!!m.anisotropyMap,ce=O&&!!m.clearcoatMap,ge=O&&!!m.clearcoatNormalMap,de=O&&!!m.clearcoatRoughnessMap,he=k&&!!m.iridescenceMap,ae=k&&!!m.iridescenceThicknessMap,Le=$&&!!m.sheenColorMap,Se=$&&!!m.sheenRoughnessMap,le=!!m.specularMap,me=!!m.specularColorMap,De=!!m.specularIntensityMap,_e=K&&!!m.transmissionMap,Re=K&&!!m.thicknessMap,Ae=!!m.gradientMap,gt=!!m.alphaMap,at=m.alphaTest>0,ot=!!m.alphaHash,et=!!m.extensions,Rt=0;m.toneMapped&&(re!==null&&re.isXRRenderTarget!==!0||(Rt=r.toneMapping));let G={shaderID:U,shaderType:m.type,shaderName:m.name,vertexShader:V,fragmentShader:P,defines:m.defines,customVertexShaderID:W,customFragmentShaderID:X,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Y,batchingColor:Y&&x._colorsTexture!==null,instancing:ue,instancingColor:ue&&x.instanceColor!==null,instancingMorph:ue&&x.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:At,alphaToCoverage:!!m.alphaToCoverage,map:Z,matcap:xe,envMap:ve,envMapMode:ve&&C.mapping,envMapCubeUVHeight:I,aoMap:se,lightMap:R,bumpMap:T,normalMap:F,displacementMap:d&&z,emissiveMap:L,normalMapObjectSpace:F&&m.normalMapType===1,normalMapTangentSpace:F&&m.normalMapType===0,metalnessMap:B,roughnessMap:w,anisotropy:N,anisotropyMap:ee,clearcoat:O,clearcoatMap:ce,clearcoatNormalMap:ge,clearcoatRoughnessMap:de,dispersion:J,iridescence:k,iridescenceMap:he,iridescenceThicknessMap:ae,sheen:$,sheenColorMap:Le,sheenRoughnessMap:Se,specularMap:le,specularColorMap:me,specularIntensityMap:De,transmission:K,transmissionMap:_e,thicknessMap:Re,gradientMap:Ae,opaque:m.transparent===!1&&m.blending===1&&m.alphaToCoverage===!1,alphaMap:gt,alphaTest:at,alphaHash:ot,combine:m.combine,mapUv:Z&&g(m.map.channel),aoMapUv:se&&g(m.aoMap.channel),lightMapUv:R&&g(m.lightMap.channel),bumpMapUv:T&&g(m.bumpMap.channel),normalMapUv:F&&g(m.normalMap.channel),displacementMapUv:z&&g(m.displacementMap.channel),emissiveMapUv:L&&g(m.emissiveMap.channel),metalnessMapUv:B&&g(m.metalnessMap.channel),roughnessMapUv:w&&g(m.roughnessMap.channel),anisotropyMapUv:ee&&g(m.anisotropyMap.channel),clearcoatMapUv:ce&&g(m.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&g(m.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&g(m.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(m.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(m.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(m.sheenRoughnessMap.channel),specularMapUv:le&&g(m.specularMap.channel),specularColorMapUv:me&&g(m.specularColorMap.channel),specularIntensityMapUv:De&&g(m.specularIntensityMap.channel),transmissionMapUv:_e&&g(m.transmissionMap.channel),thicknessMapUv:Re&&g(m.thicknessMap.channel),alphaMapUv:gt&&g(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(F||N),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:x.isPoints===!0&&!!b.attributes.uv&&(Z||gt),fog:!!S,useFog:m.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:m.flatShading===!0,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ne,skinning:x.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ie,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:r.shadowMap.enabled&&v.length>0,shadowMapType:r.shadowMap.type,toneMapping:Rt,decodeVideoTexture:Z&&m.map.isVideoTexture===!0&&Ke.getTransfer(m.map.colorSpace)===nt,decodeVideoTextureEmissive:L&&m.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(m.emissiveMap.colorSpace)===nt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===2,flipSided:m.side===1,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:et&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&m.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return G.vertexUv1s=l.has(1),G.vertexUv2s=l.has(2),G.vertexUv3s=l.has(3),l.clear(),G},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let v in m.defines)_.push(v),_.push(m.defines[v]);return m.isRawShaderMaterial===!1&&((function(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)})(_,m),(function(v,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)})(_,m),_.push(r.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=f[m.type],v;if(_){let y=Gn[_];v=Cf.clone(y.uniforms)}else v=m.uniforms;return v},acquireProgram:function(m,_){let v;for(let y=0,x=h.length;y<x;y++){let S=h[y];if(S.cacheKey===_){v=S,++v.usedTimes;break}}return v===void 0&&(v=new km(r,_,m,s),h.push(v)),v},releaseProgram:function(m){if(--m.usedTimes==0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function Wm(){let r=new WeakMap;return{has:function(e){return r.has(e)},get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Xm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Du(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ou(){let r=[],e=0,t=[],n=[],i=[];function s(a,o,c,l,h,u){let d=r[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},r[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?i.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=r.length;a<o;a++){let c=r[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Xm),n.length>1&&n.sort(o||Du),i.length>1&&i.sort(o||Du)}}}function jm(){let r=new WeakMap;return{get:function(e,t){let n=r.get(e),i;return n===void 0?(i=new Ou,r.set(e,[i])):t>=n.length?(i=new Ou,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function qm(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new we};break;case"SpotLight":t={position:new M,direction:new M,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new M,halfWidth:new M,halfHeight:new M}}return r[e.id]=t,t}}}var Ym=0;function Zm(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Km(r){let e=new qm,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new M);let i=new M,s=new Ue,a=new Ue;return{setup:function(o){let c=0,l=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let u=0,d=0,p=0,f=0,g=0,m=0,_=0,v=0,y=0,x=0,S=0;o.sort(Zm);for(let A=0,C=o.length;A<C;A++){let I=o[A],U=I.color,D=I.intensity,H=I.distance,V=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=U.r*D,l+=U.g*D,h+=U.b*D;else if(I.isLightProbe){for(let P=0;P<9;P++)n.probe[P].addScaledVector(I.sh.coefficients[P],D);S++}else if(I.isDirectionalLight){let P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,X=t.get(I);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,n.directionalShadow[u]=X,n.directionalShadowMap[u]=V,n.directionalShadowMatrix[u]=I.shadow.matrix,m++}n.directional[u]=P,u++}else if(I.isSpotLight){let P=e.get(I);P.position.setFromMatrixPosition(I.matrixWorld),P.color.copy(U).multiplyScalar(D),P.distance=H,P.coneCos=Math.cos(I.angle),P.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),P.decay=I.decay,n.spot[p]=P;let W=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,W.updateMatrices(I),I.castShadow&&x++),n.spotLightMatrix[p]=W.matrix,I.castShadow){let X=t.get(I);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,n.spotShadow[p]=X,n.spotShadowMap[p]=V,v++}p++}else if(I.isRectAreaLight){let P=e.get(I);P.color.copy(U).multiplyScalar(D),P.halfWidth.set(.5*I.width,0,0),P.halfHeight.set(0,.5*I.height,0),n.rectArea[f]=P,f++}else if(I.isPointLight){let P=e.get(I);if(P.color.copy(I.color).multiplyScalar(I.intensity),P.distance=I.distance,P.decay=I.decay,I.castShadow){let W=I.shadow,X=t.get(I);X.shadowIntensity=W.intensity,X.shadowBias=W.bias,X.shadowNormalBias=W.normalBias,X.shadowRadius=W.radius,X.shadowMapSize=W.mapSize,X.shadowCameraNear=W.camera.near,X.shadowCameraFar=W.camera.far,n.pointShadow[d]=X,n.pointShadowMap[d]=V,n.pointShadowMatrix[d]=I.shadow.matrix,_++}n.point[d]=P,d++}else if(I.isHemisphereLight){let P=e.get(I);P.skyColor.copy(I.color).multiplyScalar(D),P.groundColor.copy(I.groundColor).multiplyScalar(D),n.hemi[g]=P,g++}}f>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let b=n.hash;b.directionalLength===u&&b.pointLength===d&&b.spotLength===p&&b.rectAreaLength===f&&b.hemiLength===g&&b.numDirectionalShadows===m&&b.numPointShadows===_&&b.numSpotShadows===v&&b.numSpotMaps===y&&b.numLightProbes===S||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+y-x,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=S,b.directionalLength=u,b.pointLength=d,b.spotLength=p,b.rectAreaLength=f,b.hemiLength=g,b.numDirectionalShadows=m,b.numPointShadows=_,b.numSpotShadows=v,b.numSpotMaps=y,b.numLightProbes=S,n.version=Ym++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let g=0,m=o.length;g<m;g++){let _=o[g];if(_.isDirectionalLight){let v=n.directional[l];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),l++}else if(_.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(f),u++}else if(_.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),v.halfWidth.set(.5*_.width,0,0),v.halfHeight.set(0,.5*_.height,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let v=n.point[h];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(f),h++}else if(_.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(f),p++}}},state:n}}function Fu(r){let e=new Km(r),t=[],n=[],i={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){i.camera=s,t.length=0,n.length=0},state:i,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function Jm(r){let e=new WeakMap;return{get:function(t,n=0){let i=e.get(t),s;return i===void 0?(s=new Fu(r),e.set(t,[s])):n>=i.length?(s=new Fu(r),i.push(s)):s=i[n],s},dispose:function(){e=new WeakMap}}}var il=class extends dn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends dn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $m(r,e,t){let n=new Xr,i=new pe,s=new pe,a=new $e,o=new il({depthPacking:3201}),c=new rl,l={},h=t.maxTextureSize,u={[Bl]:1,[Np]:0,[zi]:2},d=new jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Qe;f.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Xe(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;function v(b,A){let C=e.update(g);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new si(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(A,null,C,d,g,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(A,null,C,p,g,null)}function y(b,A,C,I){let U=null,D=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)U=D;else if(U=C.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let H=U.uuid,V=A.uuid,P=l[H];P===void 0&&(P={},l[H]=P);let W=P[V];W===void 0&&(W=U.clone(),P[V]=W,A.addEventListener("dispose",S)),U=W}return U.visible=A.visible,U.wireframe=A.wireframe,U.side=I===3?A.shadowSide!==null?A.shadowSide:A.side:A.shadowSide!==null?A.shadowSide:u[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaTest,U.map=A.map,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,C.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(r.properties.get(U).light=C),U}function x(b,A,C,I,U){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&U===3)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);let H=e.update(b),V=b.material;if(Array.isArray(V)){let P=H.groups;for(let W=0,X=P.length;W<X;W++){let ie=P[W],re=V[ie.materialIndex];if(re&&re.visible){let ne=y(b,re,I,U);b.onBeforeShadow(r,b,A,C,H,ne,ie),r.renderBufferDirect(C,null,H,ne,b,ie),b.onAfterShadow(r,b,A,C,H,ne,ie)}}}else if(V.visible){let P=y(b,V,I,U);b.onBeforeShadow(r,b,A,C,H,P,null),r.renderBufferDirect(C,null,H,P,b,null),b.onAfterShadow(r,b,A,C,H,P,null)}}let D=b.children;for(let H=0,V=D.length;H<V;H++)x(D[H],A,C,I,U)}function S(b){b.target.removeEventListener("dispose",S);for(let A in l){let C=l[A],I=b.target.uuid;I in C&&(C[I].dispose(),delete C[I])}}this.render=function(b,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let I=r.getRenderTarget(),U=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),H=r.state;H.setBlending(0),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let V=_!==3&&this.type===3,P=_===3&&this.type!==3;for(let W=0,X=b.length;W<X;W++){let ie=b[W],re=ie.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;i.copy(re.mapSize);let ne=re.getFrameExtents();if(i.multiply(ne),s.copy(re.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/ne.x),i.x=s.x*ne.x,re.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/ne.y),i.y=s.y*ne.y,re.mapSize.y=s.y)),re.map===null||V===!0||P===!0){let Y=this.type!==3?{minFilter:hn,magFilter:hn}:{};re.map!==null&&re.map.dispose(),re.map=new si(i.x,i.y,Y),re.map.texture.name=ie.name+".shadowMap",re.camera.updateProjectionMatrix()}r.setRenderTarget(re.map),r.clear();let ue=re.getViewportCount();for(let Y=0;Y<ue;Y++){let Z=re.getViewport(Y);a.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),H.viewport(a),re.updateMatrices(ie,Y),n=re.getFrustum(),x(A,C,re.camera,ie,this.type)}re.isPointLightShadow!==!0&&this.type===3&&v(re,C),re.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(I,U,D)}}var Qm={[Kp]:1,[$p]:6,[ef]:7,[Qp]:5,[Jp]:0,[nf]:2,[rf]:4,[tf]:3};function eg(r,e){let t=new function(){let w=!1,N=new $e,O=null,J=new $e(0,0,0,0);return{setMask:function(k){O===k||w||(r.colorMask(k,k,k,k),O=k)},setLocked:function(k){w=k},setClear:function(k,$,K,ee,ce){ce===!0&&(k*=ee,$*=ee,K*=ee),N.set(k,$,K,ee),J.equals(N)===!1&&(r.clearColor(k,$,K,ee),J.copy(N))},reset:function(){w=!1,O=null,J.set(-1,0,0,0)}}},n=new function(){let w=!1,N=!1,O=null,J=null,k=null;return{setReversed:function($){if(N!==$){let K=e.get("EXT_clip_control");N?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT);let ee=k;k=null,this.setClear(ee)}N=$},getReversed:function(){return N},setTest:function($){$?ve(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function($){O===$||w||(r.depthMask($),O=$)},setFunc:function($){if(N&&($=Qm[$]),J!==$){switch($){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}J=$}},setLocked:function($){w=$},setClear:function($){k!==$&&(N&&($=1-$),r.clearDepth($),k=$)},reset:function(){w=!1,O=null,J=null,k=null,N=!1}}},i=new function(){let w=!1,N=null,O=null,J=null,k=null,$=null,K=null,ee=null,ce=null;return{setTest:function(ge){w||(ge?ve(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(ge){N===ge||w||(r.stencilMask(ge),N=ge)},setFunc:function(ge,de,he){O===ge&&J===de&&k===he||(r.stencilFunc(ge,de,he),O=ge,J=de,k=he)},setOp:function(ge,de,he){$===ge&&K===de&&ee===he||(r.stencilOp(ge,de,he),$=ge,K=de,ee=he)},setLocked:function(ge){w=ge},setClear:function(ge){ce!==ge&&(r.clearStencil(ge),ce=ge)},reset:function(){w=!1,N=null,O=null,J=null,k=null,$=null,K=null,ee=null,ce=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,_=null,v=null,y=null,x=new we(0,0,0),S=0,b=!1,A=null,C=null,I=null,U=null,D=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,P=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=P>=1):W.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=P>=2);let X=null,ie={},re=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),ue=new $e().fromArray(re),Y=new $e().fromArray(ne);function Z(w,N,O,J){let k=new Uint8Array(4),$=r.createTexture();r.bindTexture(w,$),r.texParameteri(w,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(w,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let K=0;K<O;K++)w===r.TEXTURE_3D||w===r.TEXTURE_2D_ARRAY?r.texImage3D(N,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,k):r.texImage2D(N+K,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,k);return $}let xe={};function ve(w){o[w]!==!0&&(r.enable(w),o[w]=!0)}function se(w){o[w]!==!1&&(r.disable(w),o[w]=!1)}xe[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),xe[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),xe[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),i.setClear(0),ve(r.DEPTH_TEST),n.setFunc(3),z(!1),L(1),ve(r.CULL_FACE),F(0);let R={[tr]:r.FUNC_ADD,[Dp]:r.FUNC_SUBTRACT,[Op]:r.FUNC_REVERSE_SUBTRACT};R[103]=r.MIN,R[104]=r.MAX;let T={[Fp]:r.ZERO,[Bp]:r.ONE,[zp]:r.SRC_COLOR,[mc]:r.SRC_ALPHA,[Xp]:r.SRC_ALPHA_SATURATE,[Gp]:r.DST_COLOR,[kp]:r.DST_ALPHA,[Hp]:r.ONE_MINUS_SRC_COLOR,[gc]:r.ONE_MINUS_SRC_ALPHA,[Wp]:r.ONE_MINUS_DST_COLOR,[Vp]:r.ONE_MINUS_DST_ALPHA,[jp]:r.CONSTANT_COLOR,[qp]:r.ONE_MINUS_CONSTANT_COLOR,[Yp]:r.CONSTANT_ALPHA,[Zp]:r.ONE_MINUS_CONSTANT_ALPHA};function F(w,N,O,J,k,$,K,ee,ce,ge){if(w!==0){if(d===!1&&(ve(r.BLEND),d=!0),w===5)k=k||N,$=$||O,K=K||J,N===f&&k===_||(r.blendEquationSeparate(R[N],R[k]),f=N,_=k),O===g&&J===m&&$===v&&K===y||(r.blendFuncSeparate(T[O],T[J],T[$],T[K]),g=O,m=J,v=$,y=K),ee.equals(x)!==!1&&ce===S||(r.blendColor(ee.r,ee.g,ee.b,ce),x.copy(ee),S=ce),p=w,b=!1;else if(w!==p||ge!==b){if(f===tr&&_===tr||(r.blendEquation(r.FUNC_ADD),f=tr,_=tr),ge)switch(w){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}else switch(w){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w)}g=null,m=null,v=null,y=null,x.set(0,0,0),S=0,p=w,b=ge}}else d===!0&&(se(r.BLEND),d=!1)}function z(w){A!==w&&(w?r.frontFace(r.CW):r.frontFace(r.CCW),A=w)}function L(w){w!==0?(ve(r.CULL_FACE),w!==C&&(w===1?r.cullFace(r.BACK):w===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),C=w}function B(w,N,O){w?(ve(r.POLYGON_OFFSET_FILL),U===N&&D===O||(r.polygonOffset(N,O),U=N,D=O)):se(r.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:i},enable:ve,disable:se,bindFramebuffer:function(w,N){return c[w]!==N&&(r.bindFramebuffer(w,N),c[w]=N,w===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=N),w===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=N),!0)},drawBuffers:function(w,N){let O=h,J=!1;if(w){O=l.get(N),O===void 0&&(O=[],l.set(N,O));let k=w.textures;if(O.length!==k.length||O[0]!==r.COLOR_ATTACHMENT0){for(let $=0,K=k.length;$<K;$++)O[$]=r.COLOR_ATTACHMENT0+$;O.length=k.length,J=!0}}else O[0]!==r.BACK&&(O[0]=r.BACK,J=!0);J&&r.drawBuffers(O)},useProgram:function(w){return u!==w&&(r.useProgram(w),u=w,!0)},setBlending:F,setMaterial:function(w,N){w.side===2?se(r.CULL_FACE):ve(r.CULL_FACE);let O=w.side===1;N&&(O=!O),z(O),w.blending===1&&w.transparent===!1?F(0):F(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),n.setFunc(w.depthFunc),n.setTest(w.depthTest),n.setMask(w.depthWrite),t.setMask(w.colorWrite);let J=w.stencilWrite;i.setTest(J),J&&(i.setMask(w.stencilWriteMask),i.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),i.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),B(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:z,setCullFace:L,setLineWidth:function(w){w!==I&&(V&&r.lineWidth(w),I=w)},setPolygonOffset:B,setScissorTest:function(w){w?ve(r.SCISSOR_TEST):se(r.SCISSOR_TEST)},activeTexture:function(w){w===void 0&&(w=r.TEXTURE0+H-1),X!==w&&(r.activeTexture(w),X=w)},bindTexture:function(w,N,O){O===void 0&&(O=X===null?r.TEXTURE0+H-1:X);let J=ie[O];J===void 0&&(J={type:void 0,texture:void 0},ie[O]=J),J.type===w&&J.texture===N||(X!==O&&(r.activeTexture(O),X=O),r.bindTexture(w,N||xe[w]),J.type=w,J.texture=N)},unbindTexture:function(){let w=ie[X];w!==void 0&&w.type!==void 0&&(r.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},updateUBOMapping:function(w,N){let O=a.get(N);O===void 0&&(O=new WeakMap,a.set(N,O));let J=O.get(w);J===void 0&&(J=r.getUniformBlockIndex(N,w.name),O.set(w,J))},uniformBlockBinding:function(w,N){let O=a.get(N).get(w);s.get(N)!==O&&(r.uniformBlockBinding(N,O,w.__bindingPointIndex),s.set(N,O))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(w){console.error("THREE.WebGLState:",w)}},scissor:function(w){ue.equals(w)===!1&&(r.scissor(w.x,w.y,w.z,w.w),ue.copy(w))},viewport:function(w){Y.equals(w)===!1&&(r.viewport(w.x,w.y,w.z,w.w),Y.copy(w))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),n.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},X=null,ie={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,g=null,m=null,_=null,v=null,y=null,x=new we(0,0,0),S=0,b=!1,A=null,C=null,I=null,U=null,D=null,ue.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),t.reset(),n.reset(),i.reset()}}}function Bu(r,e,t,n){let i=(function(s){switch(s){case Ii:case md:return{byteLength:1,components:1};case Ss:case gd:case an:return{byteLength:2,components:1};case kl:case Vl:return{byteLength:2,components:4};case nr:case Hl:case rn:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case _d:case xd:return r*e;case Md:return r*e*2;case Gl:case Wl:return r*e/i.components*i.byteLength;case bd:case Xl:return r*e*2/i.components*i.byteLength;case yd:return r*e*3/i.components*i.byteLength;case ln:case jl:return r*e*4/i.components*i.byteLength;case Ia:case La:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ua:case Na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yc:case Mc:return Math.max(r,16)*Math.max(e,8)/4;case _c:case xc:return Math.max(r,8)*Math.max(e,8)/2;case bc:case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ec:case wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Bc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Da:case zc:case Hc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Sd:case kc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Vc:case Gc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tg(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new pe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,T){return p?new OffscreenCanvas(R,T):ws("canvas")}function g(R,T,F){let z=1,L=se(R);if((L.width>F||L.height>F)&&(z=F/Math.max(L.width,L.height)),z<1){if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let B=Math.floor(z*L.width),w=Math.floor(z*L.height);u===void 0&&(u=f(B,w));let N=T?f(B,w):u;return N.width=B,N.height=w,N.getContext("2d").drawImage(R,0,0,B,w),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+B+"x"+w+")."),N}return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),R}return R}function m(R){return R.generateMipmaps}function _(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,T,F,z,L=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let B=T;if(T===r.RED&&(F===r.FLOAT&&(B=r.R32F),F===r.HALF_FLOAT&&(B=r.R16F),F===r.UNSIGNED_BYTE&&(B=r.R8)),T===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(B=r.R8UI),F===r.UNSIGNED_SHORT&&(B=r.R16UI),F===r.UNSIGNED_INT&&(B=r.R32UI),F===r.BYTE&&(B=r.R8I),F===r.SHORT&&(B=r.R16I),F===r.INT&&(B=r.R32I)),T===r.RG&&(F===r.FLOAT&&(B=r.RG32F),F===r.HALF_FLOAT&&(B=r.RG16F),F===r.UNSIGNED_BYTE&&(B=r.RG8)),T===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(B=r.RG8UI),F===r.UNSIGNED_SHORT&&(B=r.RG16UI),F===r.UNSIGNED_INT&&(B=r.RG32UI),F===r.BYTE&&(B=r.RG8I),F===r.SHORT&&(B=r.RG16I),F===r.INT&&(B=r.RG32I)),T===r.RGB_INTEGER&&(F===r.UNSIGNED_BYTE&&(B=r.RGB8UI),F===r.UNSIGNED_SHORT&&(B=r.RGB16UI),F===r.UNSIGNED_INT&&(B=r.RGB32UI),F===r.BYTE&&(B=r.RGB8I),F===r.SHORT&&(B=r.RGB16I),F===r.INT&&(B=r.RGB32I)),T===r.RGBA_INTEGER&&(F===r.UNSIGNED_BYTE&&(B=r.RGBA8UI),F===r.UNSIGNED_SHORT&&(B=r.RGBA16UI),F===r.UNSIGNED_INT&&(B=r.RGBA32UI),F===r.BYTE&&(B=r.RGBA8I),F===r.SHORT&&(B=r.RGBA16I),F===r.INT&&(B=r.RGBA32I)),T===r.RGB&&F===r.UNSIGNED_INT_5_9_9_9_REV&&(B=r.RGB9_E5),T===r.RGBA){let w=L?fo:Ke.getTransfer(z);F===r.FLOAT&&(B=r.RGBA32F),F===r.HALF_FLOAT&&(B=r.RGBA16F),F===r.UNSIGNED_BYTE&&(B=w===nt?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(B=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(B=r.RGB5_A1)}return B!==r.R16F&&B!==r.R32F&&B!==r.RG16F&&B!==r.RG32F&&B!==r.RGBA16F&&B!==r.RGBA32F||e.get("EXT_color_buffer_float"),B}function x(R,T){let F;return R?T===null||T===nr||T===Fr?F=r.DEPTH24_STENCIL8:T===rn?F=r.DEPTH32F_STENCIL8:T===Ss&&(F=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===nr||T===Fr?F=r.DEPTH_COMPONENT24:T===rn?F=r.DEPTH_COMPONENT32F:T===Ss&&(F=r.DEPTH_COMPONENT16),F}function S(R,T){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==St?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function b(R){let T=R.target;T.removeEventListener("dispose",b),(function(F){let z=n.get(F);if(z.__webglInit===void 0)return;let L=F.source,B=d.get(L);if(B){let w=B[z.__cacheKey];w.usedTimes--,w.usedTimes===0&&C(F),Object.keys(B).length===0&&d.delete(L)}n.remove(F)})(T),T.isVideoTexture&&h.delete(T)}function A(R){let T=R.target;T.removeEventListener("dispose",A),(function(F){let z=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(z.__webglFramebuffer[B]))for(let w=0;w<z.__webglFramebuffer[B].length;w++)r.deleteFramebuffer(z.__webglFramebuffer[B][w]);else r.deleteFramebuffer(z.__webglFramebuffer[B]);z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer[B])}else{if(Array.isArray(z.__webglFramebuffer))for(let B=0;B<z.__webglFramebuffer.length;B++)r.deleteFramebuffer(z.__webglFramebuffer[B]);else r.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&r.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&r.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let B=0;B<z.__webglColorRenderbuffer.length;B++)z.__webglColorRenderbuffer[B]&&r.deleteRenderbuffer(z.__webglColorRenderbuffer[B]);z.__webglDepthRenderbuffer&&r.deleteRenderbuffer(z.__webglDepthRenderbuffer)}let L=F.textures;for(let B=0,w=L.length;B<w;B++){let N=n.get(L[B]);N.__webglTexture&&(r.deleteTexture(N.__webglTexture),a.memory.textures--),n.remove(L[B])}n.remove(F)})(T)}function C(R){let T=n.get(R);r.deleteTexture(T.__webglTexture);let F=R.source;delete d.get(F)[T.__cacheKey],a.memory.textures--}let I=0;function U(R,T){let F=n.get(R);if(R.isVideoTexture&&(function(z){let L=a.render.frame;h.get(z)!==L&&(h.set(z,L),z.update())})(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){let z=R.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(z.complete!==!1)return void X(F,R,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+T)}let D={[Sn]:r.REPEAT,[En]:r.CLAMP_TO_EDGE,[bs]:r.MIRRORED_REPEAT},H={[hn]:r.NEAREST,[zl]:r.NEAREST_MIPMAP_NEAREST,[Pr]:r.NEAREST_MIPMAP_LINEAR,[St]:r.LINEAR,[gs]:r.LINEAR_MIPMAP_NEAREST,[Wn]:r.LINEAR_MIPMAP_LINEAR},V={[af]:r.NEVER,[pf]:r.ALWAYS,[of]:r.LESS,[lf]:r.LEQUAL,[cf]:r.EQUAL,[df]:r.GEQUAL,[hf]:r.GREATER,[uf]:r.NOTEQUAL};function P(R,T){if(T.type!==rn||e.has("OES_texture_float_linear")!==!1||T.magFilter!==St&&T.magFilter!==gs&&T.magFilter!==Pr&&T.magFilter!==Wn&&T.minFilter!==St&&T.minFilter!==gs&&T.minFilter!==Pr&&T.minFilter!==Wn||console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,D[T.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,D[T.wrapT]),R!==r.TEXTURE_3D&&R!==r.TEXTURE_2D_ARRAY||r.texParameteri(R,r.TEXTURE_WRAP_R,D[T.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,H[T.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,H[T.minFilter]),T.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hn||T.minFilter!==Pr&&T.minFilter!==Wn||T.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function W(R,T){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",b));let z=T.source,L=d.get(z);L===void 0&&(L={},d.set(z,L));let B=(function(w){let N=[];return N.push(w.wrapS),N.push(w.wrapT),N.push(w.wrapR||0),N.push(w.magFilter),N.push(w.minFilter),N.push(w.anisotropy),N.push(w.internalFormat),N.push(w.format),N.push(w.type),N.push(w.generateMipmaps),N.push(w.premultiplyAlpha),N.push(w.flipY),N.push(w.unpackAlignment),N.push(w.colorSpace),N.join()})(T);if(B!==R.__cacheKey){L[B]===void 0&&(L[B]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,F=!0),L[B].usedTimes++;let w=L[R.__cacheKey];w!==void 0&&(L[R.__cacheKey].usedTimes--,w.usedTimes===0&&C(T)),R.__cacheKey=B,R.__webglTexture=L[B].texture}return F}function X(R,T,F){let z=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(z=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(z=r.TEXTURE_3D);let L=W(R,T),B=T.source;t.bindTexture(z,R.__webglTexture,r.TEXTURE0+F);let w=n.get(B);if(B.version!==w.__version||L===!0){t.activeTexture(r.TEXTURE0+F);let N=Ke.getPrimaries(Ke.workingColorSpace),O=T.colorSpace===Ti?null:Ke.getPrimaries(T.colorSpace),J=T.colorSpace===Ti||N===O?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let k=g(T.image,!1,i.maxTextureSize);k=ve(T,k);let $=s.convert(T.format,T.colorSpace),K=s.convert(T.type),ee,ce=y(T.internalFormat,$,K,T.colorSpace,T.isVideoTexture);P(z,T);let ge=T.mipmaps,de=T.isVideoTexture!==!0,he=w.__version===void 0||L===!0,ae=B.dataReady,Le=S(T,k);if(T.isDepthTexture)ce=x(T.format===Br,T.type),he&&(de?t.texStorage2D(r.TEXTURE_2D,1,ce,k.width,k.height):t.texImage2D(r.TEXTURE_2D,0,ce,k.width,k.height,0,$,K,null));else if(T.isDataTexture)if(ge.length>0){de&&he&&t.texStorage2D(r.TEXTURE_2D,Le,ce,ge[0].width,ge[0].height);for(let Se=0,le=ge.length;Se<le;Se++)ee=ge[Se],de?ae&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ee.width,ee.height,$,K,ee.data):t.texImage2D(r.TEXTURE_2D,Se,ce,ee.width,ee.height,0,$,K,ee.data);T.generateMipmaps=!1}else de?(he&&t.texStorage2D(r.TEXTURE_2D,Le,ce,k.width,k.height),ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,k.width,k.height,$,K,k.data)):t.texImage2D(r.TEXTURE_2D,0,ce,k.width,k.height,0,$,K,k.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){de&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ce,ge[0].width,ge[0].height,k.depth);for(let Se=0,le=ge.length;Se<le;Se++)if(ee=ge[Se],T.format!==ln)if($!==null)if(de){if(ae)if(T.layerUpdates.size>0){let me=Bu(ee.width,ee.height,T.format,T.type);for(let De of T.layerUpdates){let _e=ee.data.subarray(De*me/ee.data.BYTES_PER_ELEMENT,(De+1)*me/ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,De,ee.width,ee.height,1,$,_e)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,ee.width,ee.height,k.depth,$,ee.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Se,ce,ee.width,ee.height,k.depth,0,ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else de?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Se,0,0,0,ee.width,ee.height,k.depth,$,K,ee.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Se,ce,ee.width,ee.height,k.depth,0,$,K,ee.data)}else{de&&he&&t.texStorage2D(r.TEXTURE_2D,Le,ce,ge[0].width,ge[0].height);for(let Se=0,le=ge.length;Se<le;Se++)ee=ge[Se],T.format!==ln?$!==null?de?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,Se,0,0,ee.width,ee.height,$,ee.data):t.compressedTexImage2D(r.TEXTURE_2D,Se,ce,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):de?ae&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,ee.width,ee.height,$,K,ee.data):t.texImage2D(r.TEXTURE_2D,Se,ce,ee.width,ee.height,0,$,K,ee.data)}else if(T.isDataArrayTexture)if(de){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Le,ce,k.width,k.height,k.depth),ae)if(T.layerUpdates.size>0){let Se=Bu(k.width,k.height,T.format,T.type);for(let le of T.layerUpdates){let me=k.data.subarray(le*Se/k.data.BYTES_PER_ELEMENT,(le+1)*Se/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,le,k.width,k.height,1,$,K,me)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,$,K,k.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ce,k.width,k.height,k.depth,0,$,K,k.data);else if(T.isData3DTexture)de?(he&&t.texStorage3D(r.TEXTURE_3D,Le,ce,k.width,k.height,k.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,$,K,k.data)):t.texImage3D(r.TEXTURE_3D,0,ce,k.width,k.height,k.depth,0,$,K,k.data);else if(T.isFramebufferTexture){if(he)if(de)t.texStorage2D(r.TEXTURE_2D,Le,ce,k.width,k.height);else{let Se=k.width,le=k.height;for(let me=0;me<Le;me++)t.texImage2D(r.TEXTURE_2D,me,ce,Se,le,0,$,K,null),Se>>=1,le>>=1}}else if(ge.length>0){if(de&&he){let Se=se(ge[0]);t.texStorage2D(r.TEXTURE_2D,Le,ce,Se.width,Se.height)}for(let Se=0,le=ge.length;Se<le;Se++)ee=ge[Se],de?ae&&t.texSubImage2D(r.TEXTURE_2D,Se,0,0,$,K,ee):t.texImage2D(r.TEXTURE_2D,Se,ce,$,K,ee);T.generateMipmaps=!1}else if(de){if(he){let Se=se(k);t.texStorage2D(r.TEXTURE_2D,Le,ce,Se.width,Se.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,$,K,k)}else t.texImage2D(r.TEXTURE_2D,0,ce,$,K,k);m(T)&&_(z),w.__version=B.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ie(R,T,F,z,L,B){let w=s.convert(F.format,F.colorSpace),N=s.convert(F.type),O=y(F.internalFormat,w,N,F.colorSpace),J=n.get(T),k=n.get(F);if(k.__renderTarget=T,!J.__hasExternalTextures){let $=Math.max(1,T.width>>B),K=Math.max(1,T.height>>B);L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?t.texImage3D(L,B,O,$,K,T.depth,0,w,N,null):t.texImage2D(L,B,O,$,K,0,w,N,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),xe(T)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,z,L,k.__webglTexture,0,Z(T)):(L===r.TEXTURE_2D||L>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,z,L,k.__webglTexture,B),t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,T,F){if(r.bindRenderbuffer(r.RENDERBUFFER,R),T.depthBuffer){let z=T.depthTexture,L=z&&z.isDepthTexture?z.type:null,B=x(T.stencilBuffer,L),w=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,N=Z(T);xe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N,B,T.width,T.height):F?r.renderbufferStorageMultisample(r.RENDERBUFFER,N,B,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,B,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,w,r.RENDERBUFFER,R)}else{let z=T.textures;for(let L=0;L<z.length;L++){let B=z[L],w=s.convert(B.format,B.colorSpace),N=s.convert(B.type),O=y(B.internalFormat,w,N,B.colorSpace),J=Z(T);F&&xe(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,O,T.width,T.height):xe(T)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,O,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,O,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ne(R){let T=n.get(R),F=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){let z=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),z){let L=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,z.removeEventListener("dispose",L)};z.addEventListener("dispose",L),T.__depthDisposeCallback=L}T.__boundDepthTexture=z}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(z,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,z),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let B=n.get(L.depthTexture);B.__renderTarget=L,B.__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),U(L.depthTexture,0);let w=B.__webglTexture,N=Z(L);if(L.depthTexture.format===Es)xe(L)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,w,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,w,0);else{if(L.depthTexture.format!==Br)throw new Error("Unknown depthTexture format");xe(L)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,w,0,N):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,w,0)}})(T.__webglFramebuffer,R)}else if(F){T.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[z]),T.__webglDepthbuffer[z]===void 0)T.__webglDepthbuffer[z]=r.createRenderbuffer(),re(T.__webglDepthbuffer[z],R,!1);else{let L=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,B=T.__webglDepthbuffer[z];r.bindRenderbuffer(r.RENDERBUFFER,B),r.framebufferRenderbuffer(r.FRAMEBUFFER,L,r.RENDERBUFFER,B)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),re(T.__webglDepthbuffer,R,!1);else{let z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,z,r.RENDERBUFFER,L)}t.bindFramebuffer(r.FRAMEBUFFER,null)}let ue=[],Y=[];function Z(R){return Math.min(i.maxSamples,R.samples)}function xe(R){let T=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ve(R,T){let F=R.colorSpace,z=R.format,L=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==At&&F!==Ti&&(Ke.getTransfer(F)===nt?z===ln&&L===Ii||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=function(){let R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R},this.resetTextureUnits=function(){I=0},this.setTexture2D=U,this.setTexture2DArray=function(R,T){let F=n.get(R);R.version>0&&F.__version!==R.version?X(F,R,T):t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+T)},this.setTexture3D=function(R,T){let F=n.get(R);R.version>0&&F.__version!==R.version?X(F,R,T):t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+T)},this.setTextureCube=function(R,T){let F=n.get(R);R.version>0&&F.__version!==R.version?(function(z,L,B){if(L.image.length!==6)return;let w=W(z,L),N=L.source;t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+B);let O=n.get(N);if(N.version!==O.__version||w===!0){t.activeTexture(r.TEXTURE0+B);let J=Ke.getPrimaries(Ke.workingColorSpace),k=L.colorSpace===Ti?null:Ke.getPrimaries(L.colorSpace),$=L.colorSpace===Ti||J===k?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let K=L.isCompressedTexture||L.image[0].isCompressedTexture,ee=L.image[0]&&L.image[0].isDataTexture,ce=[];for(let _e=0;_e<6;_e++)ce[_e]=K||ee?ee?L.image[_e].image:L.image[_e]:g(L.image[_e],!0,i.maxCubemapSize),ce[_e]=ve(L,ce[_e]);let ge=ce[0],de=s.convert(L.format,L.colorSpace),he=s.convert(L.type),ae=y(L.internalFormat,de,he,L.colorSpace),Le=L.isVideoTexture!==!0,Se=O.__version===void 0||w===!0,le=N.dataReady,me,De=S(L,ge);if(P(r.TEXTURE_CUBE_MAP,L),K){Le&&Se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,De,ae,ge.width,ge.height);for(let _e=0;_e<6;_e++){me=ce[_e].mipmaps;for(let Re=0;Re<me.length;Re++){let Ae=me[Re];L.format!==ln?de!==null?Le?le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,0,0,Ae.width,Ae.height,de,Ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,ae,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,0,0,Ae.width,Ae.height,de,he,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re,ae,Ae.width,Ae.height,0,de,he,Ae.data)}}}else{if(me=L.mipmaps,Le&&Se){me.length>0&&De++;let _e=se(ce[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,De,ae,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(ee){Le?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ce[_e].width,ce[_e].height,de,he,ce[_e].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ae,ce[_e].width,ce[_e].height,0,de,he,ce[_e].data);for(let Re=0;Re<me.length;Re++){let Ae=me[Re].image[_e].image;Le?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,0,0,Ae.width,Ae.height,de,he,Ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,ae,Ae.width,Ae.height,0,de,he,Ae.data)}}else{Le?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,de,he,ce[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ae,de,he,ce[_e]);for(let Re=0;Re<me.length;Re++){let Ae=me[Re];Le?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,0,0,de,he,Ae.image[_e]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Re+1,ae,de,he,Ae.image[_e])}}}m(L)&&_(r.TEXTURE_CUBE_MAP),O.__version=N.version,L.onUpdate&&L.onUpdate(L)}z.__version=L.version})(F,R,T):t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+T)},this.rebindTextures=function(R,T,F){let z=n.get(R);T!==void 0&&ie(z.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&ne(R)},this.setupRenderTarget=function(R){let T=R.texture,F=n.get(R),z=n.get(T);R.addEventListener("dispose",A);let L=R.textures,B=R.isWebGLCubeRenderTarget===!0,w=L.length>1;if(w||(z.__webglTexture===void 0&&(z.__webglTexture=r.createTexture()),z.__version=T.version,a.memory.textures++),B){F.__webglFramebuffer=[];for(let N=0;N<6;N++)if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[N]=[];for(let O=0;O<T.mipmaps.length;O++)F.__webglFramebuffer[N][O]=r.createFramebuffer()}else F.__webglFramebuffer[N]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let N=0;N<T.mipmaps.length;N++)F.__webglFramebuffer[N]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(w)for(let N=0,O=L.length;N<O;N++){let J=n.get(L[N]);J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&xe(R)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let N=0;N<L.length;N++){let O=L[N];F.__webglColorRenderbuffer[N]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[N]);let J=s.convert(O.format,O.colorSpace),k=s.convert(O.type),$=y(O.internalFormat,J,k,O.colorSpace,R.isXRRenderTarget===!0),K=Z(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,K,$,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+N,r.RENDERBUFFER,F.__webglColorRenderbuffer[N])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),re(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(B){t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture),P(r.TEXTURE_CUBE_MAP,T);for(let N=0;N<6;N++)if(T.mipmaps&&T.mipmaps.length>0)for(let O=0;O<T.mipmaps.length;O++)ie(F.__webglFramebuffer[N][O],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+N,O);else ie(F.__webglFramebuffer[N],R,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);m(T)&&_(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(w){for(let N=0,O=L.length;N<O;N++){let J=L[N],k=n.get(J);t.bindTexture(r.TEXTURE_2D,k.__webglTexture),P(r.TEXTURE_2D,J),ie(F.__webglFramebuffer,R,J,r.COLOR_ATTACHMENT0+N,r.TEXTURE_2D,0),m(J)&&_(r.TEXTURE_2D)}t.unbindTexture()}else{let N=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(N=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(N,z.__webglTexture),P(N,T),T.mipmaps&&T.mipmaps.length>0)for(let O=0;O<T.mipmaps.length;O++)ie(F.__webglFramebuffer[O],R,T,r.COLOR_ATTACHMENT0,N,O);else ie(F.__webglFramebuffer,R,T,r.COLOR_ATTACHMENT0,N,0);m(T)&&_(N),t.unbindTexture()}R.depthBuffer&&ne(R)},this.updateRenderTargetMipmap=function(R){let T=R.textures;for(let F=0,z=T.length;F<z;F++){let L=T[F];if(m(L)){let B=v(R),w=n.get(L).__webglTexture;t.bindTexture(B,w),_(B),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(R){if(R.samples>0){if(xe(R)===!1){let T=R.textures,F=R.width,z=R.height,L=r.COLOR_BUFFER_BIT,B=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,w=n.get(R),N=T.length>1;if(N)for(let O=0;O<T.length;O++)t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,w.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,w.__webglFramebuffer);for(let O=0;O<T.length;O++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(L|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(L|=r.STENCIL_BUFFER_BIT)),N){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,w.__webglColorRenderbuffer[O]);let J=n.get(T[O]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,F,z,0,0,F,z,L,r.NEAREST),c===!0&&(ue.length=0,Y.length=0,ue.push(r.COLOR_ATTACHMENT0+O),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ue.push(B),Y.push(B),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Y)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),N)for(let O=0;O<T.length;O++){t.bindFramebuffer(r.FRAMEBUFFER,w.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.RENDERBUFFER,w.__webglColorRenderbuffer[O]);let J=n.get(T[O]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+O,r.TEXTURE_2D,J,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,w.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){let T=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=xe}function ng(r,e){return{convert:function(t,n=""){let i,s=Ke.getTransfer(n);if(t===Ii)return r.UNSIGNED_BYTE;if(t===kl)return r.UNSIGNED_SHORT_4_4_4_4;if(t===Vl)return r.UNSIGNED_SHORT_5_5_5_1;if(t===vd)return r.UNSIGNED_INT_5_9_9_9_REV;if(t===md)return r.BYTE;if(t===gd)return r.SHORT;if(t===Ss)return r.UNSIGNED_SHORT;if(t===Hl)return r.INT;if(t===nr)return r.UNSIGNED_INT;if(t===rn)return r.FLOAT;if(t===an)return r.HALF_FLOAT;if(t===_d)return r.ALPHA;if(t===yd)return r.RGB;if(t===ln)return r.RGBA;if(t===xd)return r.LUMINANCE;if(t===Md)return r.LUMINANCE_ALPHA;if(t===Es)return r.DEPTH_COMPONENT;if(t===Br)return r.DEPTH_STENCIL;if(t===Gl)return r.RED;if(t===Wl)return r.RED_INTEGER;if(t===bd)return r.RG;if(t===Xl)return r.RG_INTEGER;if(t===jl)return r.RGBA_INTEGER;if(t===Ia||t===La||t===Ua||t===Na)if(s===nt){if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i===null)return null;if(t===Ia)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===La)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Ua)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Na)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=e.get("WEBGL_compressed_texture_s3tc"),i===null)return null;if(t===Ia)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===La)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Ua)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Na)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===_c||t===yc||t===xc||t===Mc){if(i=e.get("WEBGL_compressed_texture_pvrtc"),i===null)return null;if(t===_c)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===yc)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===xc)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Mc)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===bc||t===Sc||t===Ec){if(i=e.get("WEBGL_compressed_texture_etc"),i===null)return null;if(t===bc||t===Sc)return s===nt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(t===Ec)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(t===wc||t===Tc||t===Ac||t===Rc||t===Cc||t===Pc||t===Ic||t===Lc||t===Uc||t===Nc||t===Dc||t===Oc||t===Fc||t===Bc){if(i=e.get("WEBGL_compressed_texture_astc"),i===null)return null;if(t===wc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Tc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Ac)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Rc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Cc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Pc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Ic)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Lc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Uc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Nc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Dc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Oc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Fc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Bc)return s===nt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Da||t===zc||t===Hc){if(i=e.get("EXT_texture_compression_bptc"),i===null)return null;if(t===Da)return s===nt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===zc)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Hc)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Sd||t===kc||t===Vc||t===Gc){if(i=e.get("EXT_texture_compression_rgtc"),i===null)return null;if(t===Da)return i.COMPRESSED_RED_RGTC1_EXT;if(t===kc)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Vc)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Gc)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===Fr?r.UNSIGNED_INT_24_8:r[t]!==void 0?r[t]:null}}}var sl=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},sn=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ig={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),_=this._getHandJoint(l,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ig)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},al=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let i=new Ft;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new jn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ol=class extends Li{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,g=new al,m=t.getContextAttributes(),_=null,v=null,y=[],x=[],S=new pe,b=null,A=new It;A.viewport=new $e;let C=new It;C.viewport=new $e;let I=[A,C],U=new sl,D=null,H=null;function V(Y){let Z=x.indexOf(Y.inputSource);if(Z===-1)return;let xe=y[Z];xe!==void 0&&(xe.update(Y.inputSource,Y.frame,l||a),xe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function P(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",W);for(let Y=0;Y<y.length;Y++){let Z=x[Y];Z!==null&&(x[Y]=null,y[Y].disconnect(Z))}D=null,H=null,g.reset(),e.setRenderTarget(_),p=null,d=null,u=null,i=null,v=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}function W(Y){for(let Z=0;Z<Y.removed.length;Z++){let xe=Y.removed[Z],ve=x.indexOf(xe);ve>=0&&(x[ve]=null,y[ve].disconnect(xe))}for(let Z=0;Z<Y.added.length;Z++){let xe=Y.added[Z],ve=x.indexOf(xe);if(ve===-1){for(let R=0;R<y.length;R++){if(R>=x.length){x.push(xe),ve=R;break}if(x[R]===null){x[R]=xe,ve=R;break}}if(ve===-1)break}let se=y[ve];se&&se.connect(xe)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Z=y[Y];return Z===void 0&&(Z=new _s,y[Y]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(Y){let Z=y[Y];return Z===void 0&&(Z=new _s,y[Y]=Z),Z.getGripSpace()},this.getHand=function(Y){let Z=y[Y];return Z===void 0&&(Z=new _s,y[Y]=Z),Z.getHandSpace()},this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",P),i.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(S),i.renderState.layers===void 0){let Z={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new si(p.framebufferWidth,p.framebufferHeight,{format:ln,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Z=null,xe=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=m.stencil?Br:Es,xe=m.stencil?Fr:nr);let se={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(se),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new si(d.textureWidth,d.textureHeight,{format:ln,type:Ii,depthTexture:new Va(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};let X=new M,ie=new M;function re(Y,Z){Z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Z=Y.near,xe=Y.far;g.texture!==null&&(g.depthNear>0&&(Z=g.depthNear),g.depthFar>0&&(xe=g.depthFar)),U.near=C.near=A.near=Z,U.far=C.far=A.far=xe,D===U.near&&H===U.far||(i.updateRenderState({depthNear:U.near,depthFar:U.far}),D=U.near,H=U.far),A.layers.mask=2|Y.layers.mask,C.layers.mask=4|Y.layers.mask,U.layers.mask=A.layers.mask|C.layers.mask;let ve=Y.parent,se=U.cameras;re(U,ve);for(let R=0;R<se.length;R++)re(se[R],ve);se.length===2?(function(R,T,F){X.setFromMatrixPosition(T.matrixWorld),ie.setFromMatrixPosition(F.matrixWorld);let z=X.distanceTo(ie),L=T.projectionMatrix.elements,B=F.projectionMatrix.elements,w=L[14]/(L[10]-1),N=L[14]/(L[10]+1),O=(L[9]+1)/L[5],J=(L[9]-1)/L[5],k=(L[8]-1)/L[0],$=(B[8]+1)/B[0],K=w*k,ee=w*$,ce=z/(-k+$),ge=ce*-k;if(T.matrixWorld.decompose(R.position,R.quaternion,R.scale),R.translateX(ge),R.translateZ(ce),R.matrixWorld.compose(R.position,R.quaternion,R.scale),R.matrixWorldInverse.copy(R.matrixWorld).invert(),L[10]===-1)R.projectionMatrix.copy(T.projectionMatrix),R.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let de=w+ce,he=N+ce,ae=K-ge,Le=ee+(z-ge),Se=O*N/he*de,le=J*N/he*de;R.projectionMatrix.makePerspective(ae,Le,Se,le,de,he),R.projectionMatrixInverse.copy(R.projectionMatrix).invert()}})(U,A,C):U.projectionMatrix.copy(A.projectionMatrix),(function(R,T,F){F===null?R.matrix.copy(T.matrixWorld):(R.matrix.copy(F.matrixWorld),R.matrix.invert(),R.matrix.multiply(T.matrixWorld)),R.matrix.decompose(R.position,R.quaternion,R.scale),R.updateMatrixWorld(!0),R.projectionMatrix.copy(T.projectionMatrix),R.projectionMatrixInverse.copy(T.projectionMatrixInverse),R.isPerspectiveCamera&&(R.fov=2*Vr*Math.atan(1/R.projectionMatrix.elements[5]),R.zoom=1)})(Y,U,ve)},this.getCamera=function(){return U},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)};let ne=null,ue=new Rd;ue.setAnimationLoop((function(Y,Z){if(h=Z.getViewerPose(l||a),f=Z,h!==null){let xe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let ve=!1;xe.length!==U.cameras.length&&(U.cameras.length=0,ve=!0);for(let R=0;R<xe.length;R++){let T=xe[R],F=null;if(p!==null)F=p.getViewport(T);else{let L=u.getViewSubImage(d,T);F=L.viewport,R===0&&(e.setRenderTargetTextures(v,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let z=I[R];z===void 0&&(z=new It,z.layers.enable(R),z.viewport=new $e,I[R]=z),z.matrix.fromArray(T.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(T.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(F.x,F.y,F.width,F.height),R===0&&(U.matrix.copy(z.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ve===!0&&U.cameras.push(z)}let se=i.enabledFeatures;if(se&&se.includes("depth-sensing")){let R=u.getDepthInformation(xe[0]);R&&R.isValid&&R.texture&&g.init(e,R,i.renderState)}}for(let xe=0;xe<y.length;xe++){let ve=x[xe],se=y[xe];ve!==null&&se!==void 0&&se.update(ve,Z,l||a)}ne&&ne(Y,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),f=null})),this.setAnimationLoop=function(Y){ne=Y},this.dispose=function(){}}},Qi=new Zt,rg=new Ue;function sg(r,e){function t(i,s){i.matrixAutoUpdate===!0&&i.updateMatrix(),s.value.copy(i.matrix)}function n(i,s){i.opacity.value=s.opacity,s.color&&i.diffuse.value.copy(s.color),s.emissive&&i.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(i.map.value=s.map,t(s.map,i.mapTransform)),s.alphaMap&&(i.alphaMap.value=s.alphaMap,t(s.alphaMap,i.alphaMapTransform)),s.bumpMap&&(i.bumpMap.value=s.bumpMap,t(s.bumpMap,i.bumpMapTransform),i.bumpScale.value=s.bumpScale,s.side===1&&(i.bumpScale.value*=-1)),s.normalMap&&(i.normalMap.value=s.normalMap,t(s.normalMap,i.normalMapTransform),i.normalScale.value.copy(s.normalScale),s.side===1&&i.normalScale.value.negate()),s.displacementMap&&(i.displacementMap.value=s.displacementMap,t(s.displacementMap,i.displacementMapTransform),i.displacementScale.value=s.displacementScale,i.displacementBias.value=s.displacementBias),s.emissiveMap&&(i.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,i.emissiveMapTransform)),s.specularMap&&(i.specularMap.value=s.specularMap,t(s.specularMap,i.specularMapTransform)),s.alphaTest>0&&(i.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(i.envMap.value=o,Qi.copy(c),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),i.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(Qi)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=s.reflectivity,i.ior.value=s.ior,i.refractionRatio.value=s.refractionRatio),s.lightMap&&(i.lightMap.value=s.lightMap,i.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,i.lightMapTransform)),s.aoMap&&(i.aoMap.value=s.aoMap,i.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,s){s.color.getRGB(i.fogColor.value,Ad(r)),s.isFog?(i.fogNear.value=s.near,i.fogFar.value=s.far):s.isFogExp2&&(i.fogDensity.value=s.density)},refreshMaterialUniforms:function(i,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(i,s):s.isMeshToonMaterial?(n(i,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(i,s)):s.isMeshPhongMaterial?(n(i,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(i,s)):s.isMeshStandardMaterial?(n(i,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(i,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(i,s,c)):s.isMeshMatcapMaterial?(n(i,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(i,s)):s.isMeshDepthMaterial?n(i,s):s.isMeshDistanceMaterial?(n(i,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(i,s)):s.isMeshNormalMaterial?n(i,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(i,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(i,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(i,s):s.isShadowMaterial?(i.color.value.copy(s.color),i.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function ag(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let g=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof g=="number"||typeof g=="boolean"?g:g.clone(),!0;{let _=f[m];if(typeof g=="number"||typeof g=="boolean"){if(_!==g)return f[m]=g,!0}else if(_.equals(g)===!1)return _.copy(g),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&((function(m){let _=m.uniforms,v=0,y=16;for(let S=0,b=_.length;S<b;S++){let A=Array.isArray(_[S])?_[S]:[_[S]];for(let C=0,I=A.length;C<I;C++){let U=A[C],D=Array.isArray(U.value)?U.value:[U.value];for(let H=0,V=D.length;H<V;H++){let P=l(D[H]),W=v%y,X=W%P.boundary,ie=W+X;v+=X,ie!==0&&y-ie<P.storage&&(v+=y-ie),U.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=P.storage}}}let x=v%y;x>0&&(v+=y-x),m.__size=v,m.__cache={}})(u),p=(function(m){let _=(function(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=_;let v=r.createBuffer(),y=m.__size,x=m.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,y,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v})(u),i[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let g=e.render.frame;s[u.id]!==g&&((function(m){let _=i[m.id],v=m.uniforms,y=m.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let x=0,S=v.length;x<S;x++){let b=Array.isArray(v[x])?v[x]:[v[x]];for(let A=0,C=b.length;A<C;A++){let I=b[A];if(c(I,x,A,y)===!0){let U=I.__offset,D=Array.isArray(I.value)?I.value:[I.value],H=0;for(let V=0;V<D.length;V++){let P=D[V],W=l(P);typeof P=="number"||typeof P=="boolean"?(I.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,U+H,I.__data)):P.isMatrix3?(I.__data[0]=P.elements[0],I.__data[1]=P.elements[1],I.__data[2]=P.elements[2],I.__data[3]=0,I.__data[4]=P.elements[3],I.__data[5]=P.elements[4],I.__data[6]=P.elements[5],I.__data[7]=0,I.__data[8]=P.elements[6],I.__data[9]=P.elements[7],I.__data[10]=P.elements[8],I.__data[11]=0):(P.toArray(I.__data,H),H+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)})(u),s[u.id]=g)},dispose:function(){for(let u in i)r.deleteBuffer(i[u]);a=[],i={},s={}}}}var Ga=class{constructor(e={}){let{canvas:t=ff(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Uint32Array(4),g=new Int32Array(4),m=null,_=null,v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=lt,this.toneMapping=0,this.toneMappingExposure=1;let x=this,S=!1,b=0,A=0,C=null,I=-1,U=null,D=new $e,H=new $e,V=null,P=new we(0),W=0,X=t.width,ie=t.height,re=1,ne=null,ue=null,Y=new $e(0,0,X,ie),Z=new $e(0,0,X,ie),xe=!1,ve=new Xr,se=!1,R=!1,T=new Ue,F=new Ue,z=new M,L=new $e,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},w=!1;function N(){return C===null?re:1}let O,J,k,$,K,ee,ce,ge,de,he,ae,Le,Se,le,me,De,_e,Re,Ae,gt,at,ot,et,Rt,G=n;function Ye(E,j){return t.getContext(E,j)}try{let E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",Jt,!1),G===null){let j="webgl2";if(G=Ye(j,E),G===null)throw Ye(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}function ut(){O=new kf(G),O.init(),ot=new ng(G,O),J=new Ff(G,O,e,ot),k=new eg(G,O),J.reverseDepthBuffer&&d&&k.buffers.depth.setReversed(!0),$=new Wf(G),K=new Wm,ee=new tg(G,O,k,K,J,ot,$),ce=new zf(x),ge=new Hf(x),de=new Lf(G),et=new Df(G,de),he=new Vf(G,de,$,et),ae=new jf(G,he,de,$),Ae=new Xf(G,J,ee),De=new Bf(K),Le=new Gm(x,ce,ge,O,J,et,De),Se=new sg(x,K),le=new jm,me=new Jm(O),Re=new Nf(x,ce,ge,k,ae,p,c),_e=new $m(x,ae,J),Rt=new ag(G,$,J,k),gt=new Of(G,O,$),at=new Gf(G,O,$),$.programs=Le.programs,x.capabilities=J,x.extensions=O,x.properties=K,x.renderLists=le,x.shadowMap=_e,x.state=k,x.info=$}ut();let Be=new ol(x,G);function Ct(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Nt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let E=$.autoReset,j=_e.enabled,te=_e.autoUpdate,oe=_e.needsUpdate,q=_e.type;ut(),$.autoReset=E,_e.enabled=j,_e.autoUpdate=te,_e.needsUpdate=oe,_e.type=q}function Jt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){let j=E.target;j.removeEventListener("dispose",dt),(function(te){(function(oe){let q=K.get(oe).programs;q!==void 0&&(q.forEach((function(fe){Le.releaseProgram(fe)})),oe.isShaderMaterial&&Le.releaseShaderCache(oe))})(te),K.remove(te)})(j)}function pt(E,j,te){E.transparent===!0&&E.side===2&&E.forceSinglePass===!1?(E.side=1,E.needsUpdate=!0,$t(E,j,te),E.side=0,E.needsUpdate=!0,$t(E,j,te),E.side=2):$t(E,j,te)}this.xr=Be,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let E=O.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=O.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(E){E!==void 0&&(re=E,this.setSize(X,ie,!1))},this.getSize=function(E){return E.set(X,ie)},this.setSize=function(E,j,te=!0){Be.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(X=E,ie=j,t.width=Math.floor(E*re),t.height=Math.floor(j*re),te===!0&&(t.style.width=E+"px",t.style.height=j+"px"),this.setViewport(0,0,E,j))},this.getDrawingBufferSize=function(E){return E.set(X*re,ie*re).floor()},this.setDrawingBufferSize=function(E,j,te){X=E,ie=j,re=te,t.width=Math.floor(E*te),t.height=Math.floor(j*te),this.setViewport(0,0,E,j)},this.getCurrentViewport=function(E){return E.copy(D)},this.getViewport=function(E){return E.copy(Y)},this.setViewport=function(E,j,te,oe){E.isVector4?Y.set(E.x,E.y,E.z,E.w):Y.set(E,j,te,oe),k.viewport(D.copy(Y).multiplyScalar(re).round())},this.getScissor=function(E){return E.copy(Z)},this.setScissor=function(E,j,te,oe){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,j,te,oe),k.scissor(H.copy(Z).multiplyScalar(re).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(E){k.setScissorTest(xe=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){ue=E},this.getClearColor=function(E){return E.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(E=!0,j=!0,te=!0){let oe=0;if(E){let q=!1;if(C!==null){let fe=C.texture.format;q=fe===jl||fe===Xl||fe===Wl}if(q){let fe=C.texture.type,ye=fe===Ii||fe===nr||fe===Ss||fe===Fr||fe===kl||fe===Vl,Me=Re.getClearColor(),Ce=Re.getClearAlpha(),Ne=Me.r,He=Me.g,Oe=Me.b;ye?(f[0]=Ne,f[1]=He,f[2]=Oe,f[3]=Ce,G.clearBufferuiv(G.COLOR,0,f)):(g[0]=Ne,g[1]=He,g[2]=Oe,g[3]=Ce,G.clearBufferiv(G.COLOR,0,g))}else oe|=G.COLOR_BUFFER_BIT}j&&(oe|=G.DEPTH_BUFFER_BIT),te&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",Jt,!1),le.dispose(),me.dispose(),K.dispose(),ce.dispose(),ge.dispose(),ae.dispose(),et.dispose(),Rt.dispose(),Le.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",zt),Be.removeEventListener("sessionend",vn),Ht.stop()},this.renderBufferDirect=function(E,j,te,oe,q,fe){j===null&&(j=B);let ye=q.isMesh&&q.matrixWorld.determinant()<0,Me=(function(Je,Qt,Vt,We,ze){Qt.isScene!==!0&&(Qt=B),ee.resetTextureUnits();let Ln=Qt.fog,To=We.isMeshStandardMaterial?Qt.environment:null,is=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:At,mr=(We.isMeshStandardMaterial?ge:ce).get(We.envMap||To),Ao=We.vertexColors===!0&&!!Vt.attributes.color&&Vt.attributes.color.itemSize===4,Ro=!!Vt.attributes.tangent&&(!!We.normalMap||We.anisotropy>0),Co=!!Vt.morphAttributes.position,_i=!!Vt.morphAttributes.normal,Ip=!!Vt.morphAttributes.color,zh=0;We.toneMapped&&(C!==null&&C.isXRRenderTarget!==!0||(zh=x.toneMapping));let Hh=Vt.morphAttributes.position||Vt.morphAttributes.normal||Vt.morphAttributes.color,Lp=Hh!==void 0?Hh.length:0,Ze=K.get(We),Up=_.state.lights;if(se===!0&&(R===!0||Je!==U)){let yn=Je===U&&We.id===I;De.setState(We,Je,yn)}let Un=!1;We.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Up.state.version||Ze.outputColorSpace!==is||ze.isBatchedMesh&&Ze.batching===!1?Un=!0:ze.isBatchedMesh||Ze.batching!==!0?ze.isBatchedMesh&&Ze.batchingColor===!0&&ze.colorTexture===null||ze.isBatchedMesh&&Ze.batchingColor===!1&&ze.colorTexture!==null||ze.isInstancedMesh&&Ze.instancing===!1?Un=!0:ze.isInstancedMesh||Ze.instancing!==!0?ze.isSkinnedMesh&&Ze.skinning===!1?Un=!0:ze.isSkinnedMesh||Ze.skinning!==!0?ze.isInstancedMesh&&Ze.instancingColor===!0&&ze.instanceColor===null||ze.isInstancedMesh&&Ze.instancingColor===!1&&ze.instanceColor!==null||ze.isInstancedMesh&&Ze.instancingMorph===!0&&ze.morphTexture===null||ze.isInstancedMesh&&Ze.instancingMorph===!1&&ze.morphTexture!==null||Ze.envMap!==mr||We.fog===!0&&Ze.fog!==Ln?Un=!0:Ze.numClippingPlanes===void 0||Ze.numClippingPlanes===De.numPlanes&&Ze.numIntersection===De.numIntersection?(Ze.vertexAlphas!==Ao||Ze.vertexTangents!==Ro||Ze.morphTargets!==Co||Ze.morphNormals!==_i||Ze.morphColors!==Ip||Ze.toneMapping!==zh||Ze.morphTargetsCount!==Lp)&&(Un=!0):Un=!0:Un=!0:Un=!0:Un=!0:(Un=!0,Ze.__version=We.version);let ji=Ze.currentProgram;Un===!0&&(ji=$t(We,Qt,ze));let kh=!1,rs=!1,Po=!1,bt=ji.getUniforms(),yi=Ze.uniforms;if(k.useProgram(ji.program)&&(kh=!0,rs=!0,Po=!0),We.id!==I&&(I=We.id,rs=!0),kh||U!==Je){k.buffers.depth.getReversed()?(T.copy(Je.projectionMatrix),(function(qi){let ht=qi.elements;ht[2]=.5*ht[2]+.5*ht[3],ht[6]=.5*ht[6]+.5*ht[7],ht[10]=.5*ht[10]+.5*ht[11],ht[14]=.5*ht[14]+.5*ht[15]})(T),(function(qi){let ht=qi.elements;ht[11]===-1?(ht[10]=-ht[10]-1,ht[14]=-ht[14]):(ht[10]=-ht[10],ht[14]=1-ht[14])})(T),bt.setValue(G,"projectionMatrix",T)):bt.setValue(G,"projectionMatrix",Je.projectionMatrix),bt.setValue(G,"viewMatrix",Je.matrixWorldInverse);let yn=bt.map.cameraPosition;yn!==void 0&&yn.setValue(G,z.setFromMatrixPosition(Je.matrixWorld)),J.logarithmicDepthBuffer&&bt.setValue(G,"logDepthBufFC",2/(Math.log(Je.far+1)/Math.LN2)),(We.isMeshPhongMaterial||We.isMeshToonMaterial||We.isMeshLambertMaterial||We.isMeshBasicMaterial||We.isMeshStandardMaterial||We.isShaderMaterial)&&bt.setValue(G,"isOrthographic",Je.isOrthographicCamera===!0),U!==Je&&(U=Je,rs=!0,Po=!0)}if(ze.isSkinnedMesh){bt.setOptional(G,ze,"bindMatrix"),bt.setOptional(G,ze,"bindMatrixInverse");let yn=ze.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),bt.setValue(G,"boneTexture",yn.boneTexture,ee))}ze.isBatchedMesh&&(bt.setOptional(G,ze,"batchingTexture"),bt.setValue(G,"batchingTexture",ze._matricesTexture,ee),bt.setOptional(G,ze,"batchingIdTexture"),bt.setValue(G,"batchingIdTexture",ze._indirectTexture,ee),bt.setOptional(G,ze,"batchingColorTexture"),ze._colorsTexture!==null&&bt.setValue(G,"batchingColorTexture",ze._colorsTexture,ee));let Io=Vt.morphAttributes;Io.position===void 0&&Io.normal===void 0&&Io.color===void 0||Ae.update(ze,Vt,ji),(rs||Ze.receiveShadow!==ze.receiveShadow)&&(Ze.receiveShadow=ze.receiveShadow,bt.setValue(G,"receiveShadow",ze.receiveShadow)),We.isMeshGouraudMaterial&&We.envMap!==null&&(yi.envMap.value=mr,yi.flipEnvMap.value=mr.isCubeTexture&&mr.isRenderTargetTexture===!1?-1:1),We.isMeshStandardMaterial&&We.envMap===null&&Qt.environment!==null&&(yi.envMapIntensity.value=Qt.environmentIntensity),rs&&(bt.setValue(G,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&(Nn=Po,(Vn=yi).ambientLightColor.needsUpdate=Nn,Vn.lightProbe.needsUpdate=Nn,Vn.directionalLights.needsUpdate=Nn,Vn.directionalLightShadows.needsUpdate=Nn,Vn.pointLights.needsUpdate=Nn,Vn.pointLightShadows.needsUpdate=Nn,Vn.spotLights.needsUpdate=Nn,Vn.spotLightShadows.needsUpdate=Nn,Vn.rectAreaLights.needsUpdate=Nn,Vn.hemisphereLights.needsUpdate=Nn),Ln&&We.fog===!0&&Se.refreshFogUniforms(yi,Ln),Se.refreshMaterialUniforms(yi,We,re,ie,_.state.transmissionRenderTarget[Je.id]),Nr.upload(G,Xt(Ze),yi,ee));var Vn,Nn;if(We.isShaderMaterial&&We.uniformsNeedUpdate===!0&&(Nr.upload(G,Xt(Ze),yi,ee),We.uniformsNeedUpdate=!1),We.isSpriteMaterial&&bt.setValue(G,"center",ze.center),bt.setValue(G,"modelViewMatrix",ze.modelViewMatrix),bt.setValue(G,"normalMatrix",ze.normalMatrix),bt.setValue(G,"modelMatrix",ze.matrixWorld),We.isShaderMaterial||We.isRawShaderMaterial){let yn=We.uniformsGroups;for(let qi=0,ht=yn.length;qi<ht;qi++){let Vh=yn[qi];Rt.update(Vh,ji),Rt.bind(Vh,ji)}}return ji})(E,j,te,oe,q);k.setMaterial(oe,ye);let Ce=te.index,Ne=1;if(oe.wireframe===!0){if(Ce=he.getWireframeAttribute(te),Ce===void 0)return;Ne=2}let He=te.drawRange,Oe=te.attributes.position,Ge=He.start*Ne,_t=(He.start+He.count)*Ne;fe!==null&&(Ge=Math.max(Ge,fe.start*Ne),_t=Math.min(_t,(fe.start+fe.count)*Ne)),Ce!==null?(Ge=Math.max(Ge,0),_t=Math.min(_t,Ce.count)):Oe!=null&&(Ge=Math.max(Ge,0),_t=Math.min(_t,Oe.count));let it=_t-Ge;if(it<0||it===1/0)return;let Pt;et.setup(q,oe,Me,te,Ce);let ct=gt;if(Ce!==null&&(Pt=de.get(Ce),ct=at,ct.setIndex(Pt)),q.isMesh)oe.wireframe===!0?(k.setLineWidth(oe.wireframeLinewidth*N()),ct.setMode(G.LINES)):ct.setMode(G.TRIANGLES);else if(q.isLine){let Je=oe.linewidth;Je===void 0&&(Je=1),k.setLineWidth(Je*N()),q.isLineSegments?ct.setMode(G.LINES):q.isLineLoop?ct.setMode(G.LINE_LOOP):ct.setMode(G.LINE_STRIP)}else q.isPoints?ct.setMode(G.POINTS):q.isSprite&&ct.setMode(G.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ct.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))ct.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Je=q._multiDrawStarts,Qt=q._multiDrawCounts,Vt=q._multiDrawCount,We=Ce?de.get(Ce).bytesPerElement:1,ze=K.get(oe).currentProgram.getUniforms();for(let Ln=0;Ln<Vt;Ln++)ze.setValue(G,"_gl_DrawID",Ln),ct.render(Je[Ln]/We,Qt[Ln])}else if(q.isInstancedMesh)ct.renderInstances(Ge,it,q.count);else if(te.isInstancedBufferGeometry){let Je=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Qt=Math.min(te.instanceCount,Je);ct.renderInstances(Ge,it,Qt)}else ct.render(Ge,it)},this.compile=function(E,j,te=null){te===null&&(te=E),_=me.get(te),_.init(j),y.push(_),te.traverseVisible((function(q){q.isLight&&q.layers.test(j.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))})),E!==te&&E.traverseVisible((function(q){q.isLight&&q.layers.test(j.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))})),_.setupLights();let oe=new Set;return E.traverse((function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let fe=q.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){let Me=fe[ye];pt(Me,te,q),oe.add(Me)}else pt(fe,te,q),oe.add(fe)})),y.pop(),_=null,oe},this.compileAsync=function(E,j,te=null){let oe=this.compile(E,j,te);return new Promise((q=>{function fe(){oe.forEach((function(ye){K.get(ye).currentProgram.isReady()&&oe.delete(ye)})),oe.size!==0?setTimeout(fe,10):q(E)}O.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)}))};let vt=null;function zt(){Ht.stop()}function vn(){Ht.start()}let Ht=new Rd;function In(E,j,te,oe){if(E.visible===!1)return;if(E.layers.test(j.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(j);else if(E.isLight)_.pushLight(E),E.castShadow&&_.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ve.intersectsSprite(E)){oe&&L.setFromMatrixPosition(E.matrixWorld).applyMatrix4(F);let fe=ae.update(E),ye=E.material;ye.visible&&m.push(E,fe,ye,te,L.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ve.intersectsObject(E))){let fe=ae.update(E),ye=E.material;if(oe&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),L.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),L.copy(fe.boundingSphere.center)),L.applyMatrix4(E.matrixWorld).applyMatrix4(F)),Array.isArray(ye)){let Me=fe.groups;for(let Ce=0,Ne=Me.length;Ce<Ne;Ce++){let He=Me[Ce],Oe=ye[He.materialIndex];Oe&&Oe.visible&&m.push(E,fe,Oe,te,L.z,He)}}else ye.visible&&m.push(E,fe,ye,te,L.z,null)}}let q=E.children;for(let fe=0,ye=q.length;fe<ye;fe++)In(q[fe],j,te,oe)}function Zn(E,j,te,oe){let q=E.opaque,fe=E.transmissive,ye=E.transparent;_.setupLightsView(te),se===!0&&De.setGlobalState(x.clippingPlanes,te),oe&&k.viewport(D.copy(oe)),q.length>0&&kt(q,j,te),fe.length>0&&kt(fe,j,te),ye.length>0&&kt(ye,j,te),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function kn(E,j,te,oe){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[oe.id]===void 0&&(_.state.transmissionRenderTarget[oe.id]=new si(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?an:Ii,minFilter:Wn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let q=_.state.transmissionRenderTarget[oe.id],fe=oe.viewport||D;q.setSize(fe.z,fe.w);let ye=x.getRenderTarget();x.setRenderTarget(q),x.getClearColor(P),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),w&&Re.render(te);let Me=x.toneMapping;x.toneMapping=0;let Ce=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),_.setupLightsView(oe),se===!0&&De.setGlobalState(x.clippingPlanes,oe),kt(E,te,oe),ee.updateMultisampleRenderTarget(q),ee.updateRenderTargetMipmap(q),O.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let He=0,Oe=j.length;He<Oe;He++){let Ge=j[He],_t=Ge.object,it=Ge.geometry,Pt=Ge.material,ct=Ge.group;if(Pt.side===2&&_t.layers.test(oe.layers)){let Je=Pt.side;Pt.side=1,Pt.needsUpdate=!0,_n(_t,te,oe,it,Pt,ct),Pt.side=Je,Pt.needsUpdate=!0,Ne=!0}}Ne===!0&&(ee.updateMultisampleRenderTarget(q),ee.updateRenderTargetMipmap(q))}x.setRenderTarget(ye),x.setClearColor(P,W),Ce!==void 0&&(oe.viewport=Ce),x.toneMapping=Me}function kt(E,j,te){let oe=j.isScene===!0?j.overrideMaterial:null;for(let q=0,fe=E.length;q<fe;q++){let ye=E[q],Me=ye.object,Ce=ye.geometry,Ne=oe===null?ye.material:oe,He=ye.group;Me.layers.test(te.layers)&&_n(Me,j,te,Ce,Ne,He)}}function _n(E,j,te,oe,q,fe){E.onBeforeRender(x,j,te,oe,q,fe),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(x,j,te,oe,E,fe),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1?(q.side=1,q.needsUpdate=!0,x.renderBufferDirect(te,j,oe,q,E,fe),q.side=0,q.needsUpdate=!0,x.renderBufferDirect(te,j,oe,q,E,fe),q.side=2):x.renderBufferDirect(te,j,oe,q,E,fe),E.onAfterRender(x,j,te,oe,q,fe)}function $t(E,j,te){j.isScene!==!0&&(j=B);let oe=K.get(E),q=_.state.lights,fe=_.state.shadowsArray,ye=q.state.version,Me=Le.getParameters(E,q.state,fe,j,te),Ce=Le.getProgramCacheKey(Me),Ne=oe.programs;oe.environment=E.isMeshStandardMaterial?j.environment:null,oe.fog=j.fog,oe.envMap=(E.isMeshStandardMaterial?ge:ce).get(E.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&E.envMap===null?j.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",dt),Ne=new Map,oe.programs=Ne);let He=Ne.get(Ce);if(He!==void 0){if(oe.currentProgram===He&&oe.lightsStateVersion===ye)return Dt(E,Me),He}else Me.uniforms=Le.getUniforms(E),E.onBeforeCompile(Me,x),He=Le.acquireProgram(Me,Ce),Ne.set(Ce,He),oe.uniforms=Me.uniforms;let Oe=oe.uniforms;return(E.isShaderMaterial||E.isRawShaderMaterial)&&E.clipping!==!0||(Oe.clippingPlanes=De.uniform),Dt(E,Me),oe.needsLights=(function(Ge){return Ge.isMeshLambertMaterial||Ge.isMeshToonMaterial||Ge.isMeshPhongMaterial||Ge.isMeshStandardMaterial||Ge.isShadowMaterial||Ge.isShaderMaterial&&Ge.lights===!0})(E),oe.lightsStateVersion=ye,oe.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.directionalShadowMap.value=q.state.directionalShadowMap,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotShadowMap.value=q.state.spotShadowMap,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMap.value=q.state.pointShadowMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix),oe.currentProgram=He,oe.uniformsList=null,He}function Xt(E){if(E.uniformsList===null){let j=E.currentProgram.getUniforms();E.uniformsList=Nr.seqWithValue(j.seq,E.uniforms)}return E.uniformsList}function Dt(E,j){let te=K.get(E);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}Ht.setAnimationLoop((function(E){vt&&vt(E)})),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(E){vt=E,Be.setAnimationLoop(E),E===null?Ht.stop():Ht.start()},Be.addEventListener("sessionstart",zt),Be.addEventListener("sessionend",vn),this.render=function(E,j){if(j!==void 0&&j.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(j),j=Be.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,j,C),_=me.get(E,y.length),_.init(j),y.push(_),F.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ve.setFromProjectionMatrix(F),R=this.localClippingEnabled,se=De.init(this.clippingPlanes,R),m=le.get(E,v.length),m.init(),v.push(m),Be.enabled===!0&&Be.isPresenting===!0){let fe=x.xr.getDepthSensingMesh();fe!==null&&In(fe,j,-1/0,x.sortObjects)}In(E,j,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ne,ue),w=Be.enabled===!1||Be.isPresenting===!1||Be.hasDepthSensing()===!1,w&&Re.addToRenderList(m,E),this.info.render.frame++,se===!0&&De.beginShadows();let te=_.state.shadowsArray;_e.render(te,E,j),se===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=m.opaque,q=m.transmissive;if(_.setupLights(),j.isArrayCamera){let fe=j.cameras;if(q.length>0)for(let ye=0,Me=fe.length;ye<Me;ye++)kn(oe,q,E,fe[ye]);w&&Re.render(E);for(let ye=0,Me=fe.length;ye<Me;ye++){let Ce=fe[ye];Zn(m,E,Ce,Ce.viewport)}}else q.length>0&&kn(oe,q,E,j),w&&Re.render(E),Zn(m,E,j);C!==null&&(ee.updateMultisampleRenderTarget(C),ee.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,j),et.resetDefaultState(),I=-1,U=null,y.pop(),y.length>0?(_=y[y.length-1],se===!0&&De.setGlobalState(x.clippingPlanes,_.state.camera)):_=null,v.pop(),m=v.length>0?v[v.length-1]:null},this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,j,te){K.get(E.texture).__webglTexture=j,K.get(E.depthTexture).__webglTexture=te;let oe=K.get(E);oe.__hasExternalTextures=!0,oe.__autoAllocateDepthBuffer=te===void 0,oe.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),oe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,j){let te=K.get(E);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(E,j=0,te=0){C=E,b=j,A=te;let oe=!0,q=null,fe=!1,ye=!1;if(E){let Me=K.get(E);if(Me.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(G.FRAMEBUFFER,null),oe=!1;else if(Me.__webglFramebuffer===void 0)ee.setupRenderTarget(E);else if(Me.__hasExternalTextures)ee.rebindTextures(E,K.get(E.texture).__webglTexture,K.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let He=E.depthTexture;if(Me.__boundDepthTexture!==He){if(He!==null&&K.has(He)&&(E.width!==He.image.width||E.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(E)}}let Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ye=!0);let Ne=K.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(q=Array.isArray(Ne[j])?Ne[j][te]:Ne[j],fe=!0):q=E.samples>0&&ee.useMultisampledRTT(E)===!1?K.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?Ne[te]:Ne,D.copy(E.viewport),H.copy(E.scissor),V=E.scissorTest}else D.copy(Y).multiplyScalar(re).floor(),H.copy(Z).multiplyScalar(re).floor(),V=xe;if(k.bindFramebuffer(G.FRAMEBUFFER,q)&&oe&&k.drawBuffers(E,q),k.viewport(D),k.scissor(H),k.setScissorTest(V),fe){let Me=K.get(E.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+j,Me.__webglTexture,te)}else if(ye){let Me=K.get(E.texture),Ce=j||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Me.__webglTexture,te||0,Ce)}I=-1},this.readRenderTargetPixels=function(E,j,te,oe,q,fe,ye){if(!E||!E.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){k.bindFramebuffer(G.FRAMEBUFFER,Me);try{let Ce=E.texture,Ne=Ce.format,He=Ce.type;if(!J.textureFormatReadable(Ne))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(He))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");j>=0&&j<=E.width-oe&&te>=0&&te<=E.height-q&&G.readPixels(j,te,oe,q,ot.convert(Ne),ot.convert(He),fe)}finally{let Ce=C!==null?K.get(C).__webglFramebuffer:null;k.bindFramebuffer(G.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,j,te,oe,q,fe,ye){if(!E||!E.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=K.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){let Ce=E.texture,Ne=Ce.format,He=Ce.type;if(!J.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=E.width-oe&&te>=0&&te<=E.height-q){k.bindFramebuffer(G.FRAMEBUFFER,Me);let Oe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,Oe),G.bufferData(G.PIXEL_PACK_BUFFER,fe.byteLength,G.STREAM_READ),G.readPixels(j,te,oe,q,ot.convert(Ne),ot.convert(He),0);let Ge=C!==null?K.get(C).__webglFramebuffer:null;k.bindFramebuffer(G.FRAMEBUFFER,Ge);let _t=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await(function(it,Pt,ct){return new Promise((function(Je,Qt){setTimeout((function Vt(){switch(it.clientWaitSync(Pt,it.SYNC_FLUSH_COMMANDS_BIT,0)){case it.WAIT_FAILED:Qt();break;case it.TIMEOUT_EXPIRED:setTimeout(Vt,ct);break;default:Je()}}),ct)}))})(G,_t,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,Oe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,fe),G.deleteBuffer(Oe),G.deleteSync(_t),fe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,j=null,te=0){E.isTexture!==!0&&(ms("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1]);let oe=Math.pow(2,-te),q=Math.floor(E.image.width*oe),fe=Math.floor(E.image.height*oe),ye=j!==null?j.x:0,Me=j!==null?j.y:0;ee.setTexture2D(E,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,ye,Me,q,fe),k.unbindTexture()},this.copyTextureToTexture=function(E,j,te=null,oe=null,q=0){let fe,ye,Me,Ce,Ne,He,Oe,Ge,_t;E.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture function signature has changed."),oe=arguments[0]||null,E=arguments[1],j=arguments[2],q=arguments[3]||0,te=null);let it=E.isCompressedTexture?E.mipmaps[q]:E.image;te!==null?(fe=te.max.x-te.min.x,ye=te.max.y-te.min.y,Me=te.isBox3?te.max.z-te.min.z:1,Ce=te.min.x,Ne=te.min.y,He=te.isBox3?te.min.z:0):(fe=it.width,ye=it.height,Me=it.depth||1,Ce=0,Ne=0,He=0),oe!==null?(Oe=oe.x,Ge=oe.y,_t=oe.z):(Oe=0,Ge=0,_t=0);let Pt=ot.convert(j.format),ct=ot.convert(j.type),Je;j.isData3DTexture?(ee.setTexture3D(j,0),Je=G.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(ee.setTexture2DArray(j,0),Je=G.TEXTURE_2D_ARRAY):(ee.setTexture2D(j,0),Je=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,j.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,j.unpackAlignment);let Qt=G.getParameter(G.UNPACK_ROW_LENGTH),Vt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),We=G.getParameter(G.UNPACK_SKIP_PIXELS),ze=G.getParameter(G.UNPACK_SKIP_ROWS),Ln=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,it.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,it.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ce),G.pixelStorei(G.UNPACK_SKIP_ROWS,Ne),G.pixelStorei(G.UNPACK_SKIP_IMAGES,He);let To=E.isDataArrayTexture||E.isData3DTexture,is=j.isDataArrayTexture||j.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let mr=K.get(E),Ao=K.get(j),Ro=K.get(mr.__renderTarget),Co=K.get(Ao.__renderTarget);k.bindFramebuffer(G.READ_FRAMEBUFFER,Ro.__webglFramebuffer),k.bindFramebuffer(G.DRAW_FRAMEBUFFER,Co.__webglFramebuffer);for(let _i=0;_i<Me;_i++)To&&G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(E).__webglTexture,q,He+_i),E.isDepthTexture?(is&&G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,K.get(j).__webglTexture,q,_t+_i),G.blitFramebuffer(Ce,Ne,fe,ye,Oe,Ge,fe,ye,G.DEPTH_BUFFER_BIT,G.NEAREST)):is?G.copyTexSubImage3D(Je,q,Oe,Ge,_t+_i,Ce,Ne,fe,ye):G.copyTexSubImage2D(Je,q,Oe,Ge,_t+_i,Ce,Ne,fe,ye);k.bindFramebuffer(G.READ_FRAMEBUFFER,null),k.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else is?E.isDataTexture||E.isData3DTexture?G.texSubImage3D(Je,q,Oe,Ge,_t,fe,ye,Me,Pt,ct,it.data):j.isCompressedArrayTexture?G.compressedTexSubImage3D(Je,q,Oe,Ge,_t,fe,ye,Me,Pt,it.data):G.texSubImage3D(Je,q,Oe,Ge,_t,fe,ye,Me,Pt,ct,it):E.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,q,Oe,Ge,fe,ye,Pt,ct,it.data):E.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,q,Oe,Ge,it.width,it.height,Pt,it.data):G.texSubImage2D(G.TEXTURE_2D,q,Oe,Ge,fe,ye,Pt,ct,it);G.pixelStorei(G.UNPACK_ROW_LENGTH,Qt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Vt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,We),G.pixelStorei(G.UNPACK_SKIP_ROWS,ze),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ln),q===0&&j.generateMipmaps&&G.generateMipmap(Je),k.unbindTexture()},this.copyTextureToTexture3D=function(E,j,te=null,oe=null,q=0){return E.isTexture!==!0&&(ms("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,oe=arguments[1]||null,E=arguments[2],j=arguments[3],q=arguments[4]||0),ms('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,j,te,oe,q)},this.initRenderTarget=function(E){K.get(E).__webglFramebuffer===void 0&&ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ee.setTextureCube(E,0):E.isData3DTexture?ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ee.setTexture2DArray(E,0):ee.setTexture2D(E,0),k.unbindTexture()},this.resetState=function(){b=0,A=0,C=null,k.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Wa=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new M,Cs=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),s=tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var X0=new M,j0=new M,q0=new M,Y0=new pe,Z0=new pe,K0=new Ue,J0=new M,$0=new M,Q0=new M,ev=new pe,tv=new pe,nv=new pe;var iv=new M,rv=new M;var zu=new M,Hu=new $e,ku=new $e,og=new M,Vu=new Ue,_a=new M,sc=new un,Gu=new Ue,ac=new ir,Ni=class extends Xe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gh,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Yt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingBox.expandByPoint(_a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingSphere.expandByPoint(_a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(i),e.ray.intersectsSphere(sc)!==!1&&(Gu.copy(i).invert(),ac.copy(e.ray).applyMatrix4(Gu),this.boundingBox!==null&&ac.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,ac)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Hu.fromBufferAttribute(i.attributes.skinIndex,e),ku.fromBufferAttribute(i.attributes.skinWeight,e),zu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){let a=ku.getComponent(s);if(a!==0){let o=Hu.getComponent(s);Vu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(og.copy(zu).applyMatrix4(Vu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},rr=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},sr=class extends Ft{constructor(e=null,t=1,n=1,i,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wu=new Ue,cg=new Ue,qr=class r{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:cg;Wu.multiplyMatrices(o,t[s]),Wu.toArray(n,16*s)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new sr(t,e,e,ln,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new rr),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ar=class extends yt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cr=new Ue,Xu=new Ue,ya=[],ju=new Yt,lg=new Ue,us=new Xe,ds=new un,Xa=class extends Xe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),ju.copy(e.boundingBox).applyMatrix4(Cr),this.boundingBox.union(ju)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Cr),ds.copy(e.boundingSphere).applyMatrix4(Cr),this.boundingSphere.union(ds)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=i[s+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(us.geometry=this.geometry,us.material=this.material,us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ds.copy(this.boundingSphere),ds.applyMatrix4(n),e.ray.intersectsSphere(ds)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Cr),Xu.multiplyMatrices(n,Cr),us.matrixWorld=Xu,us.raycast(e,ya);for(let a=0,o=ya.length;a<o;a++){let c=ya[a];c.instanceId=s,c.object=this,t.push(c)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new sr(new Float32Array(i*this.count),i,this.count,Gl,rn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var cl=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,i){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=i}reset(){this.list.length=0,this.index=0}},sv=new Ue,av=new we(1,1,1),ov=new Xr,cv=new Yt,lv=new un,hv=new M,uv=new M,dv=new M,pv=new cl,fv=new Xe;var Ps=class extends dn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ja=new M,qa=new M,qu=new Ue,ps=new ir,xa=new un,oc=new M,Yu=new M,Yr=class extends mt{constructor(e=new Qe,t=new Ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ja.fromBufferAttribute(t,i-1),qa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ja.distanceTo(qa);e.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=s,e.ray.intersectsSphere(xa)===!1)return;qu.copy(i).invert(),ps.copy(e.ray).applyMatrix4(qu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let f=d,g=p-1;f<g;f+=l){let m=h.getX(f),_=h.getX(f+1),v=Ma(this,e,ps,c,m,_);v&&t.push(v)}if(this.isLineLoop){let f=h.getX(p-1),g=h.getX(d),m=Ma(this,e,ps,c,f,g);m&&t.push(m)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let f=d,g=p-1;f<g;f+=l){let m=Ma(this,e,ps,c,f,f+1);m&&t.push(m)}if(this.isLineLoop){let f=Ma(this,e,ps,c,p-1,d);f&&t.push(f)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function Ma(r,e,t,n,i,s){let a=r.geometry.attributes.position;if(ja.fromBufferAttribute(a,i),qa.fromBufferAttribute(a,s),t.distanceSqToSegment(ja,qa,oc,Yu)>n)return;oc.applyMatrix4(r.matrixWorld);let o=e.ray.origin.distanceTo(oc);return o<e.near||o>e.far?void 0:{distance:o,point:Yu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Zu=new M,Ku=new M,Ya=class extends Yr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Zu.fromBufferAttribute(t,i),Ku.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zu.distanceTo(Ku);e.setAttribute("lineDistance",new Ee(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Za=class extends Yr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Is=class extends dn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ju=new Ue,ll=new ir,ba=new un,Sa=new M,Ka=class extends mt{constructor(e=new Qe,t=new Is){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(i),ba.radius+=s,e.ray.intersectsSphere(ba)===!1)return;Ju.copy(i).invert(),ll.copy(e.ray).applyMatrix4(Ju);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);Sa.fromBufferAttribute(h,p),$u(Sa,p,c,i,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Sa.fromBufferAttribute(h,u),$u(Sa,u,c,i,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++){let a=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=i}}}}};function $u(r,e,t,n,i,s,a){let o=ll.distanceSqToPoint(r);if(o<t){let c=new M;ll.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ls=class extends Ft{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(i=Math.floor(c+(l-c)/2),o=n[i]-a,o<0)c=i+1;else{if(!(o>0)){l=i;break}l=i-1}if(i=l,n[i]===a)return i/(s-1);let h=n[i];return(i+(a-h)/(n[i+1]-h))/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let a=this.getPoint(i),o=this.getPoint(s),c=t||(a.isVector2?new pe:new M);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new M,i=[],s=[],a=[],o=new M,c=new Ue;for(let p=0;p<=e;p++){let f=p/e;i[p]=this.getTangentAt(f,new M)}s[0]=new M,a[0]=new M;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Tt(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(Tt(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(i[f],p*f)),a[f].crossVectors(i[f],s[f])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Us=class extends wn{constructor(e=0,t=0,n=1,i=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){let n=t,i=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(s=a?0:i),this.aClockwise!==!0||a||(s===i?s=-i:s-=i);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hl=class extends Us{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yl(){let r=0,e=0,t=0,n=0;function i(s,a,o,c){r=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){i(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,i(a,o,d,p)},calc:function(s){let a=s*s;return r+e*s+t*a+n*(a*s)}}}var Ea=new M,cc=new Yl,lc=new Yl,hc=new Yl,Di=class extends wn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){let n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=i[(l-1)%s]:(Ea.subVectors(i[0],i[1]).add(i[0]),o=Ea);let u=i[l%s],d=i[(l+1)%s];if(this.closed||l+2<s?c=i[(l+2)%s]:(Ea.subVectors(i[s-1],i[s-2]).add(i[s-1]),c=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);g<1e-4&&(g=1),f<1e-4&&(f=g),m<1e-4&&(m=g),cc.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,g,m),lc.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,g,m),hc.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,g,m)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),lc.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),hc.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(cc.calc(h),lc.calc(h),hc.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Qu(r,e,t,n,i){let s=.5*(n-e),a=.5*(i-t),o=r*r;return(2*t-2*n+s+a)*(r*o)+(-3*t+3*n-2*s-a)*o+s*r+t}function ys(r,e,t,n){return(function(i,s){let a=1-i;return a*a*s})(r,e)+(function(i,s){return 2*(1-i)*i*s})(r,t)+(function(i,s){return i*i*s})(r,n)}function xs(r,e,t,n,i){return(function(s,a){let o=1-s;return o*o*o*a})(r,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(r,t)+(function(s,a){return 3*(1-s)*s*s*a})(r,n)+(function(s,a){return s*s*s*a})(r,i)}var Ja=class extends wn{constructor(e=new pe,t=new pe,n=new pe,i=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new pe){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xs(e,i.x,s.x,a.x,o.x),xs(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ul=class extends wn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(xs(e,i.x,s.x,a.x,o.x),xs(e,i.y,s.y,a.y,o.y),xs(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends wn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},dl=class extends wn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends wn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ys(e,i.x,s.x,a.x),ys(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends wn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(ys(e,i.x,s.x,a.x),ys(e,i.y,s.y,a.y),ys(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ns=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(Qu(o,c.x,l.x,h.x,u.x),Qu(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new pe().fromArray(i))}return this}},eo=Object.freeze({__proto__:null,ArcCurve:hl,CatmullRomCurve3:Di,CubicBezierCurve:Ja,CubicBezierCurve3:ul,EllipseCurve:Us,LineCurve:$a,LineCurve3:dl,QuadraticBezierCurve:Qa,QuadraticBezierCurve3:Zr,SplineCurve:Ns}),pl=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let a=i[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let a=s[i],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new eo[i.type]().fromJSON(i))}return this}},Ds=class extends pl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new Qa(this.currentPoint.clone(),new pe(e,t),new pe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){let o=new Ja(this.currentPoint.clone(),new pe(e,t),new pe(n,i),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ns(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,i,s,a,o,c),this}absellipse(e,t,n,i,s,a,o,c){let l=new Us(e,t,n,i,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ai=class r extends Qe{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,i=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Tt(i,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new M,d=new pe,p=new M,f=new M,g=new M,m=0,_=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,p.x=1*_,p.y=-m,p.z=0*_,g.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(g.x,g.y,g.z);break;default:m=e[v+1].x-e[v].x,_=e[v+1].y-e[v].y,p.x=1*_,p.y=-m,p.z=0*_,f.copy(p),p.x+=g.x,p.y+=g.y,p.z+=g.z,p.normalize(),c.push(p.x,p.y,p.z),g.copy(f)}for(let v=0;v<=t;v++){let y=n+v*h*i,x=Math.sin(y),S=Math.cos(y);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*x,u.y=e[b].y,u.z=e[b].x*S,a.push(u.x,u.y,u.z),d.x=v/t,d.y=b/(e.length-1),o.push(d.x,d.y);let A=c[3*b+0]*x,C=c[3*b+1],I=c[3*b+0]*S;l.push(A,C,I)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){let x=y+v*e.length,S=x,b=x+e.length,A=x+e.length+1,C=x+1;s.push(S,b,C),s.push(A,C,b)}this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}},fl=class r extends ai{constructor(e=1,t=1,n=4,i=8){let s=new Ds;s.absarc(0,-t/2,e,1.5*Math.PI,0),s.absarc(0,t/2,e,0,.5*Math.PI),super(s.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new r(e.radius,e.length,e.capSegments,e.radialSegments)}},Os=class r extends Qe{constructor(e=1,t=32,n=0,i=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new M,h=new pe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*i;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},zn=class r extends Qe{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,g=[],m=n/2,_=0;function v(y){let x=f,S=new pe,b=new M,A=0,C=y===!0?e:t,I=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),f++;let U=f;for(let D=0;D<=i;D++){let H=D/i*c+o,V=Math.cos(H),P=Math.sin(H);b.x=C*P,b.y=m*I,b.z=C*V,u.push(b.x,b.y,b.z),d.push(0,I,0),S.x=.5*V+.5,S.y=.5*P*I+.5,p.push(S.x,S.y),f++}for(let D=0;D<i;D++){let H=x+D,V=U+D;y===!0?h.push(V,V+1,H):h.push(V+1,V,H),A+=3}l.addGroup(_,A,y===!0?1:2),_+=A}(function(){let y=new M,x=new M,S=0,b=(t-e)/n;for(let A=0;A<=s;A++){let C=[],I=A/s,U=I*(t-e)+e;for(let D=0;D<=i;D++){let H=D/i,V=H*c+o,P=Math.sin(V),W=Math.cos(V);x.x=U*P,x.y=-I*n+m,x.z=U*W,u.push(x.x,x.y,x.z),y.set(P,b,W).normalize(),d.push(y.x,y.y,y.z),p.push(H,1-I),C.push(f++)}g.push(C)}for(let A=0;A<i;A++)for(let C=0;C<s;C++){let I=g[C][A],U=g[C+1][A],D=g[C+1][A+1],H=g[C][A+1];(e>0||C!==0)&&(h.push(I,U,H),S+=3),(t>0||C!==s-1)&&(h.push(U,D,H),S+=3)}l.addGroup(_,S,0),_+=S})(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ml=class r extends zn{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new r(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},or=class r extends Qe{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],a=[];function o(d,p,f,g){let m=g+1,_=[];for(let v=0;v<=m;v++){_[v]=[];let y=d.clone().lerp(f,v/m),x=p.clone().lerp(f,v/m),S=m-v;for(let b=0;b<=S;b++)_[v][b]=b===0&&v===m?y:y.clone().lerp(x,b/S)}for(let v=0;v<m;v++)for(let y=0;y<2*(m-v)-1;y++){let x=Math.floor(y/2);y%2==0?(c(_[v][x+1]),c(_[v+1][x]),c(_[v][x])):(c(_[v][x+1]),c(_[v+1][x+1]),c(_[v+1][x]))}}function c(d){s.push(d.x,d.y,d.z)}function l(d,p){let f=3*d;p.x=e[f+0],p.y=e[f+1],p.z=e[f+2]}function h(d,p,f,g){g<0&&d.x===1&&(a[p]=d.x-1),f.x===0&&f.z===0&&(a[p]=g/2/Math.PI+.5)}function u(d){return Math.atan2(d.z,-d.x)}(function(d){let p=new M,f=new M,g=new M;for(let m=0;m<t.length;m+=3)l(t[m+0],p),l(t[m+1],f),l(t[m+2],g),o(p,f,g,d)})(i),(function(d){let p=new M;for(let f=0;f<s.length;f+=3)p.x=s[f+0],p.y=s[f+1],p.z=s[f+2],p.normalize().multiplyScalar(d),s[f+0]=p.x,s[f+1]=p.y,s[f+2]=p.z})(n),(function(){let d=new M;for(let f=0;f<s.length;f+=3){d.x=s[f+0],d.y=s[f+1],d.z=s[f+2];let g=u(d)/2/Math.PI+.5,m=(p=d,Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))/Math.PI+.5);a.push(g,1-m)}var p;(function(){let f=new M,g=new M,m=new M,_=new M,v=new pe,y=new pe,x=new pe;for(let S=0,b=0;S<s.length;S+=9,b+=6){f.set(s[S+0],s[S+1],s[S+2]),g.set(s[S+3],s[S+4],s[S+5]),m.set(s[S+6],s[S+7],s[S+8]),v.set(a[b+0],a[b+1]),y.set(a[b+2],a[b+3]),x.set(a[b+4],a[b+5]),_.copy(f).add(g).add(m).divideScalar(3);let A=u(_);h(v,b+0,f,A),h(y,b+2,g,A),h(x,b+4,m,A)}})(),(function(){for(let f=0;f<a.length;f+=6){let g=a[f+0],m=a[f+2],_=a[f+4],v=Math.max(g,m,_),y=Math.min(g,m,_);v>.9&&y<.1&&(g<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ee(s,3)),this.setAttribute("normal",new Ee(s.slice(),3)),this.setAttribute("uv",new Ee(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.details)}},gl=class r extends or{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},wa=new M,Ta=new M,uc=new M,Aa=new Ai,vl=class extends Qe{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),s=Math.cos(Lr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:g,b:m,c:_}=Aa;if(g.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),Aa.getNormal(uc),u[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let v=0;v<3;v++){let y=(v+1)%3,x=u[v],S=u[y],b=Aa[h[v]],A=Aa[h[y]],C=`${x}_${S}`,I=`${S}_${x}`;I in d&&d[I]?(uc.dot(d[I].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(A.x,A.y,A.z)),d[I]=null):C in d||(d[C]={index0:l[v],index1:l[y],normal:uc.clone()})}}for(let f in d)if(d[f]){let{index0:g,index1:m}=d[f];wa.fromBufferAttribute(o,g),Ta.fromBufferAttribute(o,m),p.push(wa.x,wa.y,wa.z),p.push(Ta.x,Ta.y,Ta.z)}this.setAttribute("position",new Ee(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Kr=class extends Ds{constructor(e){super(e),this.uuid=Mn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new Ds().fromJSON(i))}return this}},hg=function(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=ed(r,0,i,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,u,d,p;if(n&&(s=(function(f,g,m,_){let v=[],y,x,S,b,A;for(y=0,x=g.length;y<x;y++)S=g[y]*_,b=y<x-1?g[y+1]*_:f.length,A=ed(f,S,b,_,!1),A===A.next&&(A.steiner=!0),v.push(_g(A));for(v.sort(mg),y=0;y<v.length;y++)m=gg(v[y],m);return m})(r,e,s,t)),r.length>80*t){o=l=r[0],c=h=r[1];for(let f=t;f<i;f+=t)u=r[f],d=r[f+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-o,h-c),p=p!==0?32767/p:0}return Fs(s,a,t,o,c,p,0),a};function ed(r,e,t,n,i){let s,a;if(i===(function(o,c,l,h){let u=0;for(let d=c,p=l-h;d<l;d+=h)u+=(o[p]-o[d])*(o[d+1]+o[p+1]),p=d;return u})(r,e,t,n)>0)for(s=e;s<t;s+=n)a=td(s,r[s],r[s+1],a);else for(s=t-n;s>=e;s-=n)a=td(s,r[s],r[s+1],a);return a&&go(a,a.next)&&(zs(a),a=a.next),a}function cr(r,e){if(!r)return r;e||(e=r);let t,n=r;do if(t=!1,n.steiner||!go(n,n.next)&&ft(n.prev,n,n.next)!==0)n=n.next;else{if(zs(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function Fs(r,e,t,n,i,s,a){if(!r)return;!a&&s&&(function(h,u,d,p){let f=h;do f.z===0&&(f.z=_l(f.x,f.y,u,d,p)),f.prevZ=f.prev,f.nextZ=f.next,f=f.next;while(f!==h);f.prevZ.nextZ=null,f.prevZ=null,(function(g){let m,_,v,y,x,S,b,A,C=1;do{for(_=g,g=null,x=null,S=0;_;){for(S++,v=_,b=0,m=0;m<C&&(b++,v=v.nextZ,v);m++);for(A=C;b>0||A>0&&v;)b!==0&&(A===0||!v||_.z<=v.z)?(y=_,_=_.nextZ,b--):(y=v,v=v.nextZ,A--),x?x.nextZ=y:g=y,y.prevZ=x,x=y;_=v}x.nextZ=null,C*=2}while(S>1)})(f)})(r,n,i,s);let o,c,l=r;for(;r.prev!==r.next;)if(o=r.prev,c=r.next,s?dg(r,n,i,s):ug(r))e.push(o.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),zs(r),r=c.next,l=c.next;else if((r=c)===l){a?a===1?Fs(r=pg(cr(r),e,t),e,t,n,i,s,2):a===2&&fg(r,e,t,n,i,s):Fs(cr(r),e,t,n,i,s,1);break}}function ug(r){let e=r.prev,t=r,n=r.next;if(ft(e,t,n)>=0)return!1;let i=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=i<s?i<a?i:a:s<a?s:a,u=o<c?o<l?o:l:c<l?c:l,d=i>s?i>a?i:a:s>a?s:a,p=o>c?o>l?o:l:c>l?c:l,f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Ir(i,o,s,c,a,l,f.x,f.y)&&ft(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function dg(r,e,t,n){let i=r.prev,s=r,a=r.next;if(ft(i,s,a)>=0)return!1;let o=i.x,c=s.x,l=a.x,h=i.y,u=s.y,d=a.y,p=o<c?o<l?o:l:c<l?c:l,f=h<u?h<d?h:d:u<d?u:d,g=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,_=_l(p,f,e,t,n),v=_l(g,m,e,t,n),y=r.prevZ,x=r.nextZ;for(;y&&y.z>=_&&x&&x.z<=v;){if(y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&Ir(o,h,c,u,l,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&Ir(o,h,c,u,l,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=g&&y.y>=f&&y.y<=m&&y!==i&&y!==a&&Ir(o,h,c,u,l,d,y.x,y.y)&&ft(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=g&&x.y>=f&&x.y<=m&&x!==i&&x!==a&&Ir(o,h,c,u,l,d,x.x,x.y)&&ft(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function pg(r,e,t){let n=r;do{let i=n.prev,s=n.next.next;!go(i,s)&&Ud(i,n,n.next,s)&&Bs(i,s)&&Bs(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),zs(n),zs(n.next),n=r=s),n=n.next}while(n!==r);return cr(n)}function fg(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&yg(a,o)){let c=Nd(a,o);return a=cr(a,a.next),c=cr(c,c.next),Fs(a,e,t,n,i,s,0),void Fs(c,e,t,n,i,s,0)}o=o.next}a=a.next}while(a!==r)}function mg(r,e){return r.x-e.x}function gg(r,e){let t=(function(i,s){let a,o=s,c=-1/0,l=i.x,h=i.y;do{if(h<=o.y&&h>=o.next.y&&o.next.y!==o.y){let m=o.x+(h-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(m<=l&&m>c&&(c=m,a=o.x<o.next.x?o:o.next,m===l))return a}o=o.next}while(o!==s);if(!a)return null;let u=a,d=a.x,p=a.y,f,g=1/0;o=a;do l>=o.x&&o.x>=d&&l!==o.x&&Ir(h<p?l:c,h,d,p,h<p?c:l,h,o.x,o.y)&&(f=Math.abs(h-o.y)/(l-o.x),Bs(o,i)&&(f<g||f===g&&(o.x>a.x||o.x===a.x&&vg(a,o)))&&(a=o,g=f)),o=o.next;while(o!==u);return a})(r,e);if(!t)return e;let n=Nd(t,r);return cr(n,n.next),cr(t,t.next)}function vg(r,e){return ft(r.prev,r,e.prev)<0&&ft(e.next,r,r.next)<0}function _l(r,e,t,n,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=(r-t)*i|0)|r<<8))|r<<4))|r<<2))|r<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*i|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function _g(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ir(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function yg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!(function(t,n){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==n.i&&i.next.i!==n.i&&Ud(i,i.next,t,n))return!0;i=i.next}while(i!==t);return!1})(r,e)&&(Bs(r,e)&&Bs(e,r)&&(function(t,n){let i=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do i.y>o!=i.next.y>o&&i.next.y!==i.y&&a<(i.next.x-i.x)*(o-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==t);return s})(r,e)&&(ft(r.prev,r,e.prev)||ft(r,e.prev,e))||go(r,e)&&ft(r.prev,r,r.next)>0&&ft(e.prev,e,e.next)>0)}function ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function go(r,e){return r.x===e.x&&r.y===e.y}function Ud(r,e,t,n){let i=Ca(ft(r,e,t)),s=Ca(ft(r,e,n)),a=Ca(ft(t,n,r)),o=Ca(ft(t,n,e));return i!==s&&a!==o||!(i!==0||!Ra(r,t,e))||!(s!==0||!Ra(r,n,e))||!(a!==0||!Ra(t,r,n))||!(o!==0||!Ra(t,e,n))}function Ra(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ca(r){return r>0?1:r<0?-1:0}function Bs(r,e){return ft(r.prev,r,r.next)<0?ft(r,e,r.next)>=0&&ft(r,r.prev,e)>=0:ft(r,e,r.prev)<0||ft(r,r.next,e)<0}function Nd(r,e){let t=new yl(r.i,r.x,r.y),n=new yl(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function td(r,e,t,n){let i=new yl(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function zs(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function yl(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Xn=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return .5*n}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];nd(e),id(n,e);let a=e.length;t.forEach(nd);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,id(n,t[c]);let o=hg(n,i);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function nd(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function id(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var xl=class r extends Qe{constructor(e=new Kr([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:xg,y,x,S,b,A,C=!1;_&&(y=_.getSpacedPoints(h),C=!0,d=!1,x=_.computeFrenetFrames(h,!1),S=new M,b=new M,A=new M),d||(m=0,p=0,f=0,g=0);let I=o.extractPoints(l),U=I.shape,D=I.holes;if(!Xn.isClockWise(U)){U=U.reverse();for(let z=0,L=D.length;z<L;z++){let B=D[z];Xn.isClockWise(B)&&(D[z]=B.reverse())}}let H=Xn.triangulateShape(U,D),V=U;for(let z=0,L=D.length;z<L;z++){let B=D[z];U=U.concat(B)}function P(z,L,B){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(L,B)}let W=U.length,X=H.length;function ie(z,L,B){let w,N,O,J=z.x-L.x,k=z.y-L.y,$=B.x-z.x,K=B.y-z.y,ee=J*J+k*k,ce=J*K-k*$;if(Math.abs(ce)>Number.EPSILON){let ge=Math.sqrt(ee),de=Math.sqrt($*$+K*K),he=L.x-k/ge,ae=L.y+J/ge,Le=((B.x-K/de-he)*K-(B.y+$/de-ae)*$)/(J*K-k*$);w=he+J*Le-z.x,N=ae+k*Le-z.y;let Se=w*w+N*N;if(Se<=2)return new pe(w,N);O=Math.sqrt(Se/2)}else{let ge=!1;J>Number.EPSILON?$>Number.EPSILON&&(ge=!0):J<-Number.EPSILON?$<-Number.EPSILON&&(ge=!0):Math.sign(k)===Math.sign(K)&&(ge=!0),ge?(w=-k,N=J,O=Math.sqrt(ee)):(w=J,N=k,O=Math.sqrt(ee/2))}return new pe(w/O,N/O)}let re=[];for(let z=0,L=V.length,B=L-1,w=z+1;z<L;z++,B++,w++)B===L&&(B=0),w===L&&(w=0),re[z]=ie(V[z],V[B],V[w]);let ne=[],ue,Y=re.concat();for(let z=0,L=D.length;z<L;z++){let B=D[z];ue=[];for(let w=0,N=B.length,O=N-1,J=w+1;w<N;w++,O++,J++)O===N&&(O=0),J===N&&(J=0),ue[w]=ie(B[w],B[O],B[J]);ne.push(ue),Y=Y.concat(ue)}for(let z=0;z<m;z++){let L=z/m,B=p*Math.cos(L*Math.PI/2),w=f*Math.sin(L*Math.PI/2)+g;for(let N=0,O=V.length;N<O;N++){let J=P(V[N],re[N],w);ve(J.x,J.y,-B)}for(let N=0,O=D.length;N<O;N++){let J=D[N];ue=ne[N];for(let k=0,$=J.length;k<$;k++){let K=P(J[k],ue[k],w);ve(K.x,K.y,-B)}}}let Z=f+g;for(let z=0;z<W;z++){let L=d?P(U[z],Y[z],Z):U[z];C?(b.copy(x.normals[0]).multiplyScalar(L.x),S.copy(x.binormals[0]).multiplyScalar(L.y),A.copy(y[0]).add(b).add(S),ve(A.x,A.y,A.z)):ve(L.x,L.y,0)}for(let z=1;z<=h;z++)for(let L=0;L<W;L++){let B=d?P(U[L],Y[L],Z):U[L];C?(b.copy(x.normals[z]).multiplyScalar(B.x),S.copy(x.binormals[z]).multiplyScalar(B.y),A.copy(y[z]).add(b).add(S),ve(A.x,A.y,A.z)):ve(B.x,B.y,u/h*z)}for(let z=m-1;z>=0;z--){let L=z/m,B=p*Math.cos(L*Math.PI/2),w=f*Math.sin(L*Math.PI/2)+g;for(let N=0,O=V.length;N<O;N++){let J=P(V[N],re[N],w);ve(J.x,J.y,u+B)}for(let N=0,O=D.length;N<O;N++){let J=D[N];ue=ne[N];for(let k=0,$=J.length;k<$;k++){let K=P(J[k],ue[k],w);C?ve(K.x,K.y+y[h-1].y,y[h-1].x+B):ve(K.x,K.y,u+B)}}}function xe(z,L){let B=z.length;for(;--B>=0;){let w=B,N=B-1;N<0&&(N=z.length-1);for(let O=0,J=h+2*m;O<J;O++){let k=W*O,$=W*(O+1);R(L+w+k,L+N+k,L+N+$,L+w+$)}}}function ve(z,L,B){c.push(z),c.push(L),c.push(B)}function se(z,L,B){T(z),T(L),T(B);let w=i.length/3,N=v.generateTopUV(n,i,w-3,w-2,w-1);F(N[0]),F(N[1]),F(N[2])}function R(z,L,B,w){T(z),T(L),T(w),T(L),T(B),T(w);let N=i.length/3,O=v.generateSideWallUV(n,i,N-6,N-3,N-2,N-1);F(O[0]),F(O[1]),F(O[3]),F(O[1]),F(O[2]),F(O[3])}function T(z){i.push(c[3*z+0]),i.push(c[3*z+1]),i.push(c[3*z+2])}function F(z){s.push(z.x),s.push(z.y)}(function(){let z=i.length/3;if(d){let L=0,B=W*L;for(let w=0;w<X;w++){let N=H[w];se(N[2]+B,N[1]+B,N[0]+B)}L=h+2*m,B=W*L;for(let w=0;w<X;w++){let N=H[w];se(N[0]+B,N[1]+B,N[2]+B)}}else{for(let L=0;L<X;L++){let B=H[L];se(B[2],B[1],B[0])}for(let L=0;L<X;L++){let B=H[L];se(B[0]+W*h,B[1]+W*h,B[2]+W*h)}}n.addGroup(z,i.length/3-z,0)})(),(function(){let z=i.length/3,L=0;xe(V,L),L+=V.length;for(let B=0,w=D.length;B<w;B++){let N=D[B];xe(N,L),L+=N.length}n.addGroup(z,i.length/3-z,1)})()}this.setAttribute("position",new Ee(i,3)),this.setAttribute("uv",new Ee(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,i){if(i.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];i.shapes.push(o.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},n),n.extrudePath!==void 0&&(i.options.extrudePath=n.extrudePath.toJSON()),i})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new eo[i.type]().fromJSON(i)),new r(n,e.options)}},xg={generateTopUV:function(r,e,t,n,i){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*i],h=e[3*i+1];return[new pe(s,a),new pe(o,c),new pe(l,h)]},generateSideWallUV:function(r,e,t,n,i,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*i],p=e[3*i+1],f=e[3*i+2],g=e[3*s],m=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new pe(a,1-c),new pe(l,1-u),new pe(d,1-f),new pe(g,1-_)]:[new pe(o,1-c),new pe(h,1-u),new pe(p,1-f),new pe(m,1-_)]}},oi=class r extends or{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Ml=class r extends or{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},bl=class r extends Qe{constructor(e=.5,t=1,n=32,i=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(i=Math.max(1,i)),p=new M,f=new pe;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let _=s+m/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let _=0;_<n;_++){let v=_+m,y=v,x=v+n+1,S=v+n+2,b=v+1;o.push(y,x,b),o.push(x,S,b)}}this.setIndex(o),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Sl=class r extends Qe{constructor(e=new Kr([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=i.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;Xn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,_=f.length;m<_;m++){let v=f[m];Xn.isClockWise(v)===!0&&(f[m]=v.reverse())}let g=Xn.triangulateShape(p,f);for(let m=0,_=f.length;m<_;m++){let v=f[m];p=p.concat(v)}for(let m=0,_=p.length;m<_;m++){let v=p[m];i.push(v.x,v.y,0),s.push(0,0,1),a.push(v.x,v.y)}for(let m=0,_=g.length;m<_;m++){let v=g[m],y=v[0]+u,x=v[1]+u,S=v[2]+u;n.push(y,x,S),c+=3}}this.setIndex(n),this.setAttribute("position",new Ee(i,3)),this.setAttribute("normal",new Ee(s,3)),this.setAttribute("uv",new Ee(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let a=t[i];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let a=t[e.shapes[i]];n.push(a)}return new r(n,e.curveSegments)}},Mt=class r extends Qe{constructor(e=1,t=32,n=16,i=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new M,d=new M,p=[],f=[],g=[],m=[];for(let _=0;_<=n;_++){let v=[],y=_/n,x=0;_===0&&a===0?x=.5/t:_===n&&c===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let b=S/t;u.x=-e*Math.cos(i+b*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(i+b*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(b+x,1-y),v.push(l++)}h.push(v)}for(let _=0;_<n;_++)for(let v=0;v<t;v++){let y=h[_][v+1],x=h[_][v],S=h[_+1][v],b=h[_+1][v+1];(_!==0||a>0)&&p.push(y,x,b),(_!==n-1||c<Math.PI)&&p.push(x,S,b)}this.setIndex(p),this.setAttribute("position",new Ee(f,3)),this.setAttribute("normal",new Ee(g,3)),this.setAttribute("uv",new Ee(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},El=class r extends or{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},Hs=class r extends Qe{constructor(e=1,t=.4,n=12,i=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],h=new M,u=new M,d=new M;for(let p=0;p<=n;p++)for(let f=0;f<=i;f++){let g=f/i*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(g),u.y=(e+t*Math.cos(m))*Math.sin(g),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(g),h.y=e*Math.sin(g),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=i;f++){let g=(i+1)*p+f-1,m=(i+1)*(p-1)+f-1,_=(i+1)*(p-1)+f,v=(i+1)*p+f;a.push(g,m,v),a.push(m,_,v)}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},wl=class r extends Qe{constructor(e=1,t=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);let o=[],c=[],l=[],h=[],u=new M,d=new M,p=new M,f=new M,g=new M,m=new M,_=new M;for(let y=0;y<=n;++y){let x=y/n*s*Math.PI*2;v(x,s,a,e,p),v(x+.01,s,a,e,f),m.subVectors(f,p),_.addVectors(f,p),g.crossVectors(m,_),_.crossVectors(g,m),g.normalize(),_.normalize();for(let S=0;S<=i;++S){let b=S/i*Math.PI*2,A=-t*Math.cos(b),C=t*Math.sin(b);u.x=p.x+(A*_.x+C*g.x),u.y=p.y+(A*_.y+C*g.y),u.z=p.z+(A*_.z+C*g.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(S/i)}}for(let y=1;y<=n;y++)for(let x=1;x<=i;x++){let S=(i+1)*(y-1)+(x-1),b=(i+1)*y+(x-1),A=(i+1)*y+x,C=(i+1)*(y-1)+x;o.push(S,b,C),o.push(b,A,C)}function v(y,x,S,b,A){let C=Math.cos(y),I=Math.sin(y),U=S/x*y,D=Math.cos(U);A.x=b*(2+D)*.5*C,A.y=b*(2+D)*I*.5,A.z=b*Math.sin(U)*.5}this.setIndex(o),this.setAttribute("position",new Ee(c,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ci=class r extends Qe{constructor(e=new Zr(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new M,c=new M,l=new pe,h=new M,u=[],d=[],p=[],f=[];function g(m){h=e.getPointAt(m/t,h);let _=a.normals[m],v=a.binormals[m];for(let y=0;y<=i;y++){let x=y/i*Math.PI*2,S=Math.sin(x),b=-Math.cos(x);c.x=b*_.x+S*v.x,c.y=b*_.y+S*v.y,c.z=b*_.z+S*v.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)g(m);g(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let _=0;_<=i;_++)l.x=m/t,l.y=_/i,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let _=1;_<=i;_++){let v=(i+1)*(m-1)+(_-1),y=(i+1)*m+(_-1),x=(i+1)*m+_,S=(i+1)*(m-1)+_;f.push(v,y,S),f.push(y,x,S)}})()})(),this.setIndex(f),this.setAttribute("position",new Ee(u,3)),this.setAttribute("normal",new Ee(d,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new eo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Tl=class extends Qe{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,i=new M,s=new M;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let g=0;g<3;g++){let m=o.getX(p+g),_=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),s.fromBufferAttribute(a,_),rd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;i.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),rd(i,s,n)===!0&&(t.push(i.x,i.y,i.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function rd(r,e,t){let n=`${r.x},${r.y},${r.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${r.x},${r.y},${r.z}`;return t.has(n)!==!0&&t.has(i)!==!0&&(t.add(n),t.add(i),!0)}var mv=Object.freeze({__proto__:null,BoxGeometry:Gr,CapsuleGeometry:fl,CircleGeometry:Os,ConeGeometry:ml,CylinderGeometry:zn,DodecahedronGeometry:gl,EdgesGeometry:vl,ExtrudeGeometry:xl,IcosahedronGeometry:oi,LatheGeometry:ai,OctahedronGeometry:Ml,PlaneGeometry:qn,PolyhedronGeometry:or,RingGeometry:bl,ShapeGeometry:Sl,SphereGeometry:Mt,TetrahedronGeometry:El,TorusGeometry:Hs,TorusKnotGeometry:wl,TubeGeometry:ci,WireframeGeometry:Tl}),to=class extends dn{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new we(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var gn=class extends dn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},st=class extends gn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Pa(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Mg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function bg(r){let e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort((function(n,i){return r[n]-r[i]})),t}function sd(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function Dd(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Oi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];t:{e:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break n}if(e>=s)break t;{let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0}}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Al=class extends Oi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xh:s=e,o=2*t-n;break;case jh:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xh:a=e,c=2*n-t;break;case jh:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(i-t),g=f*f,m=g*f,_=-d*m+2*d*g-d*f,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*g+.5*f,x=p*m-p*g;for(let S=0;S!==o;++S)s[S]=_*a[h+S]+v*a[l+S]+y*a[c+S]+x*a[u+S];return s}},Rl=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Cl=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pa(t,this.TimeBufferType),this.values=Pa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pa(e.times,Array),values:Pa(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Al(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zr:t=this.InterpolantFactoryMethodDiscrete;break;case Hr:t=this.InterpolantFactoryMethodLinear;break;case Lo:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zr;case this.InterpolantFactoryMethodLinear:return Hr;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Mg(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};bn.prototype.TimeBufferType=Float32Array,bn.prototype.ValueBufferType=Float32Array,bn.prototype.DefaultInterpolation=Hr;var Ri=class extends bn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool",Ri.prototype.ValueBufferType=Array,Ri.prototype.DefaultInterpolation=zr,Ri.prototype.InterpolantFactoryMethodLinear=void 0,Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var no=class extends bn{};no.prototype.ValueTypeName="color";var li=class extends bn{};li.prototype.ValueTypeName="number";var Pl=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)xt.slerpFlat(s,0,a,l-o,a,l,c);return s}},hi=class extends bn{InterpolantFactoryMethodLinear(e){return new Pl(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion",hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends bn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string",Ci.prototype.ValueBufferType=Array,Ci.prototype.DefaultInterpolation=zr,Ci.prototype.InterpolantFactoryMethodLinear=void 0,Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends bn{};ui.prototype.ValueTypeName="vector";var io=class{constructor(e="",t=-1,n=[],i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Sg(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=bg(c);c=sd(c,1,h),l=sd(l,1,h),i||c[0]!==0||(c.push(s),l.push(l[0])),a.push(new li(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,u,d,p,f){if(d.length!==0){let g=[],m=[];Dd(d,g,m,p),g.length!==0&&f.push(new h(u,g,m))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let u=l[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){let d={},p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let f=0;f<u[p].morphTargets.length;f++)d[u[p].morphTargets[f]]=-1;for(let f in d){let g=[],m=[];for(let _=0;_!==u[p].morphTargets.length;++_){let v=u[p];g.push(v.time),m.push(v.morphTarget===f?1:0)}i.push(new li(".morphTargetInfluence["+f+"]",g,m))}c=d.length*a}else{let d=".bones["+t[h].name+"]";n(ui,d+".position",u,"pos",i),n(hi,d+".quaternion",u,"rot",i),n(ui,d+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){let i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Sg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=(function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return li;case"vector":case"vector2":case"vector3":case"vector4":return ui;case"color":return no;case"quaternion":return hi;case"bool":case"boolean":return Ri;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)})(r.type);if(r.times===void 0){let t=[],n=[];Dd(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}var Pi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Il=class{constructor(e,t,n){let i=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,a===!1&&i.onStart!==void 0&&i.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null}}},Eg=new Il,Tn=class{constructor(e){this.manager=e!==void 0?e:Eg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(i,s){n.load(e,i,t,s)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Tn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ti={},Ll=class extends Error{constructor(e,t){super(e),this.response=t}},Fi=class extends Tn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Pi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(s),this.manager.itemEnd(e)}),0),s;if(ti[e]!==void 0)return void ti[e].push({onLoad:t,onProgress:n,onError:i});ti[e]=[],ti[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then((l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=ti[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,f=p!==0,g=0,m=new ReadableStream({start(_){(function v(){u.read().then((({done:y,value:x})=>{if(y)_.close();else{g+=x.byteLength;let S=new ProgressEvent("progress",{lengthComputable:f,loaded:g,total:p});for(let b=0,A=h.length;b<A;b++){let C=h[b];C.onProgress&&C.onProgress(S)}_.enqueue(x),v()}}),(y=>{_.error(y)}))})()}});return new Response(m)}throw new Ll(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)})).then((l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then((h=>new DOMParser().parseFromString(h,o)));case"json":return l.json();default:if(o===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then((p=>d.decode(p)))}}})).then((l=>{Pi.add(e,l);let h=ti[e];delete ti[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(l)}})).catch((l=>{let h=ti[e];if(h===void 0)throw this.manager.itemError(e),l;delete ti[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ul=class extends Tn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Pi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a;let o=ws("img");function c(){h(),Pi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}};var ro=class extends Tn{constructor(e){super(e)}load(e,t,n,i){let s=this,a=new sr,o=new Fi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,(function(c){let l;try{l=s.parse(c)}catch(h){if(i===void 0)return void console.error(h);i(h)}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:En,a.wrapT=l.wrapT!==void 0?l.wrapT:En,a.magFilter=l.magFilter!==void 0?l.magFilter:St,a.minFilter=l.minFilter!==void 0?l.minFilter:St,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Wn),l.mipmapCount===1&&(a.minFilter=St),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)}),n,i),a}},Jr=class extends Tn{constructor(e){super(e)}load(e,t,n,i){let s=new Ft,a=new Ul(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)}),n,i),s}},$r=class extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},so=class extends $r{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},dc=new Ue,ad=new M,od=new M,ks=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nl=class extends ks{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=2*Vr*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;n===t.fov&&i===t.aspect&&s===t.far||(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ao=class extends $r{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Nl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cd=new Ue,fs=new M,pc=new M,Dl=class extends ks{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fs.setFromMatrixPosition(e.matrixWorld),n.position.copy(fs),pc.copy(n.position),pc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(pc),n.updateMatrixWorld(),i.makeTranslation(-fs.x,-fs.y,-fs.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd)}},oo=class extends $r{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dl}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ol=class extends ks{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},di=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new Ol}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Bi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var co=class extends Tn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Pi.get(e);if(a!==void 0)return s.manager.itemStart(e),a.then?void a.then((l=>{t&&t(l),s.manager.itemEnd(e)})).catch((l=>{i&&i(l)})):(setTimeout((function(){t&&t(a),s.manager.itemEnd(e)}),0),a);let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then((function(l){return l.blob()})).then((function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))})).then((function(l){return Pi.add(e,l),t&&t(l),s.manager.itemEnd(e),l})).catch((function(l){i&&i(l),Pi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)}));Pi.add(e,c),s.manager.itemStart(e)}};var gv=new Ue,vv=new Ue,_v=new Ue;var yv=new M,xv=new xt,Mv=new M,bv=new M;var Sv=new M,Ev=new xt,wv=new M,Tv=new M;var Zl="\\[\\]\\.:\\/",wg=new RegExp("["+Zl+"]","g"),fc="[^"+Zl+"]",Tg="[^"+Zl.replace("\\.","")+"]",Ag=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",fc)+/(WCOD+)?/.source.replace("WCOD",Tg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc)+"$"),Rg=["material","materials","bones","map"],rt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wg,"")}static parseTrackName(e){let t=Ag.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Rg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};rt.Composite=class{constructor(r,e,t){let n=t||rt.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){let r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},rt.prototype.GetterByBindingType=[rt.prototype._getValue_direct,rt.prototype._getValue_array,rt.prototype._getValue_arrayElement,rt.prototype._getValue_toArray],rt.prototype.SetterByBindingTypeAndVersioning=[[rt.prototype._setValue_direct,rt.prototype._setValue_direct_setNeedsUpdate,rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_array,rt.prototype._setValue_array_setNeedsUpdate,rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_arrayElement,rt.prototype._setValue_arrayElement_setNeedsUpdate,rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[rt.prototype._setValue_fromArray,rt.prototype._setValue_fromArray_setNeedsUpdate,rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Av=new Float32Array(1);var ld=new Ue,lo=class{constructor(e,t,n=0,i=1/0){this.ray=new ir(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(e,t=!0,n=[]){return Fl(e,this,n,t),n.sort(hd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Fl(e[i],this,n,t);return n.sort(hd),n}};function hd(r,e){return r.distance-e.distance}function Fl(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Fl(s[a],e,t,!0)}}var Rv=new pe;var Cv=new M,Pv=new M;var Iv=new M;var Lv=new M,Uv=new Ue,Nv=new Ue;var Dv=new M,Ov=new we,Fv=new we;var Bv=new M,zv=new M,Hv=new M;var kv=new M,Vv=new As;var Gv=new Yt;var Wv=new M;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Cg=Array(1024).fill(0).map((r,e)=>Math.pow(e/255*.9478672986+.0521327014,2.4)),vo=class extends Tn{constructor(e){super(e),this.type=an}setDataType(e){return this.type=e,this}parse(e,t){let n={version:null,baseRenditionIsHDR:null,gainMapMin:null,gainMapMax:null,gamma:null,offsetSDR:null,offsetHDR:null,hdrCapacityMin:null,hdrCapacityMax:null},i=new TextDecoder,s=new DataView(e),a=0,o=[];for(;a<s.byteLength;){let h=s.getUint8(a);if(h===255){let u=s.getUint8(a+1);[216,224,225,226].includes(u)?(o.push({sectionType:u,section:[h,u],sectionOffset:a+2}),a+=2):(o[o.length-1].section.push(h,u),a+=2)}else o[o.length-1].section.push(h),a++}let c,l;for(let h=0;h<o.length;h++){let{sectionType:u,section:d,sectionOffset:p}=o[h];if(u!==224){if(u===225)this._parseXMPMetadata(i.decode(new Uint8Array(d)),n);else if(u===226){let f=new DataView(new Uint8Array(d.slice(2)).buffer);if(f.getUint32(2,!1)===1297106432){let m=f.getUint32(6)===1229531648,_=60,v=f.getUint32(_,m),y=f.getUint32(_+4,m),x=f.getUint32(_+16,m),S=f.getUint32(_+20,m)+p+6;c=new Uint8Array(s.buffer,y,v),l=new Uint8Array(s.buffer,S,x)}}}}if(!n.version)throw new Error("THREE.UltraHDRLoader: Not a valid UltraHDR image");if(c&&l)this._applyGainmapToSDR(n,c,l,(h,u,d)=>{t({width:u,height:d,data:h,format:ln,type:this.type})},h=>{throw new Error(h)});else throw new Error("THREE.UltraHDRLoader: Could not parse UltraHDR images")}load(e,t,n,i){let s=new sr(this.type===an?new Uint16Array:new Float32Array,0,0,ln,this.type,ho,En,En,St,fd,1,At);s.generateMipmaps=!0,s.flipY=!0;let a=new Fi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(e,o=>{try{this.parse(o,c=>{s.image={data:c.data,width:c.width,height:c.height},s.needsUpdate=!0,t&&t(s,c)})}catch(c){i&&i(c),console.error(c)}},n,i),s}_parseXMPMetadata(e,t){let i=new DOMParser().parseFromString(e.substring(e.indexOf("<"),e.lastIndexOf(">")+1),"text/xml"),[s]=i.getElementsByTagName("Container:Directory");if(!s){let[a]=i.getElementsByTagName("rdf:Description");t.version=a.getAttribute("hdrgm:Version"),t.baseRenditionIsHDR=a.getAttribute("hdrgm:BaseRenditionIsHDR")==="True",t.gainMapMin=parseFloat(a.getAttribute("hdrgm:GainMapMin")||0),t.gainMapMax=parseFloat(a.getAttribute("hdrgm:GainMapMax")||1),t.gamma=parseFloat(a.getAttribute("hdrgm:Gamma")||1),t.offsetSDR=parseFloat(a.getAttribute("hdrgm:OffsetSDR")/(1/64)),t.offsetHDR=parseFloat(a.getAttribute("hdrgm:OffsetHDR")/(1/64)),t.hdrCapacityMin=parseFloat(a.getAttribute("hdrgm:HDRCapacityMin")||0),t.hdrCapacityMax=parseFloat(a.getAttribute("hdrgm:HDRCapacityMax")||1)}}_srgbToLinear(e){return e/255<.04045?e/255*.0773993808:e<1024?Cg[~~e]:Math.pow(e/255*.9478672986+.0521327014,2.4)}_applyGainmapToSDR(e,t,n,i,s){let a=o=>new Promise((c,l)=>{let h=document.createElement("img");h.onload=()=>{let u={width:h.naturalWidth,height:h.naturalHeight,source:h};URL.revokeObjectURL(h.src),c(u)},h.onerror=()=>{URL.revokeObjectURL(h.src),l()},h.src=URL.createObjectURL(new Blob([o],{type:"image/jpeg"}))});Promise.all([a(t),a(n)]).then(([o,c])=>{let l=o.width/o.height,h=c.width/c.height;if(l!==h){s("THREE.UltraHDRLoader Error: Aspect ratio mismatch between SDR and Gainmap images");return}let u=document.createElement("canvas"),d=u.getContext("2d",{willReadFrequently:!0,colorSpace:"srgb"});u.width=o.width,u.height=o.height,d.drawImage(c.source,0,0,c.width,c.height,0,0,o.width,o.height);let p=d.getImageData(0,0,o.width,o.height,{colorSpace:"srgb"});d.drawImage(o.source,0,0);let f=d.getImageData(0,0,o.width,o.height,{colorSpace:"srgb"}),g;this.type===an?g=new Uint16Array(f.data.length).fill(23544):g=new Float32Array(f.data.length).fill(255);let m=Math.sqrt(Math.pow(1.8,e.hdrCapacityMax)),_=(Math.log2(m)-e.hdrCapacityMin)/(e.hdrCapacityMax-e.hdrCapacityMin),v=Math.min(Math.max(_,0),1),y=e.gamma===1;for(let x=0;x<f.data.length;x+=4){let S=x/4%o.width,b=Math.floor(x/4/o.width);for(let A=0;A<3;A++){let C=f.data[x+A],I=(b*o.width+S)*4+A,U=p.data[I]/255,D=y?U:Math.pow(U,1/e.gamma),H=e.gainMapMin*(1-D)+e.gainMapMax*D,V=(C+e.offsetSDR)*(H*v===0?1:Math.pow(2,H*v))-e.offsetHDR,P=Math.min(Math.max(this._srgbToLinear(V),0),65504);g[x+A]=this.type===an?pi.toHalfFloat(P):P}}i(g,o.width,o.height)}).catch(()=>{throw new Error("THREE.UltraHDRLoader Error: Could not parse UltraHDR images")})}};var _o=class extends ro{constructor(e){super(e),this.type=an}parse(e){let a=function(C,I){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(I||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(I||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(I||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(I||""))}},u=function(C,I,U){I=I||1024;let H=C.pos,V=-1,P=0,W="",X=String.fromCharCode.apply(null,new Uint16Array(C.subarray(H,H+128)));for(;0>(V=X.indexOf(`
`))&&P<I&&H<C.byteLength;)W+=X,P+=X.length,H+=128,X+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(H,H+128)));return-1<V?(U!==!1&&(C.pos+=P+V+1),W+X.slice(0,V)):!1},d=function(C){let I=/^#\?(\S+)/,U=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,H=/^\s*FORMAT=(\S+)\s*$/,V=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},W,X;for((C.pos>=C.byteLength||!(W=u(C)))&&a(1,"no header found"),(X=W.match(I))||a(3,"bad initial token"),P.valid|=1,P.programtype=X[1],P.string+=W+`
`;W=u(C),W!==!1;){if(P.string+=W+`
`,W.charAt(0)==="#"){P.comments+=W+`
`;continue}if((X=W.match(U))&&(P.gamma=parseFloat(X[1])),(X=W.match(D))&&(P.exposure=parseFloat(X[1])),(X=W.match(H))&&(P.valid|=2,P.format=X[1]),(X=W.match(V))&&(P.valid|=4,P.height=parseInt(X[1],10),P.width=parseInt(X[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||a(3,"missing format specifier"),P.valid&4||a(3,"missing image size specifier"),P},p=function(C,I,U){let D=I;if(D<8||D>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);D!==(C[2]<<8|C[3])&&a(3,"wrong scanline width");let H=new Uint8Array(4*I*U);H.length||a(4,"unable to allocate buffer space");let V=0,P=0,W=4*D,X=new Uint8Array(4),ie=new Uint8Array(W),re=U;for(;re>0&&P<C.byteLength;){P+4>C.byteLength&&a(1),X[0]=C[P++],X[1]=C[P++],X[2]=C[P++],X[3]=C[P++],(X[0]!=2||X[1]!=2||(X[2]<<8|X[3])!=D)&&a(3,"bad rgbe scanline format");let ne=0,ue;for(;ne<W&&P<C.byteLength;){ue=C[P++];let Z=ue>128;if(Z&&(ue-=128),(ue===0||ne+ue>W)&&a(3,"bad scanline data"),Z){let xe=C[P++];for(let ve=0;ve<ue;ve++)ie[ne++]=xe}else ie.set(C.subarray(P,P+ue),ne),ne+=ue,P+=ue}let Y=D;for(let Z=0;Z<Y;Z++){let xe=0;H[V]=ie[Z+xe],xe+=D,H[V+1]=ie[Z+xe],xe+=D,H[V+2]=ie[Z+xe],xe+=D,H[V+3]=ie[Z+xe],V+=4}re--}return H},f=function(C,I,U,D){let H=C[I+3],V=Math.pow(2,H-128)/255;U[D+0]=C[I+0]*V,U[D+1]=C[I+1]*V,U[D+2]=C[I+2]*V,U[D+3]=1},g=function(C,I,U,D){let H=C[I+3],V=Math.pow(2,H-128)/255;U[D+0]=pi.toHalfFloat(Math.min(C[I+0]*V,65504)),U[D+1]=pi.toHalfFloat(Math.min(C[I+1]*V,65504)),U[D+2]=pi.toHalfFloat(Math.min(C[I+2]*V,65504)),U[D+3]=pi.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let _=d(m),v=_.width,y=_.height,x=p(m.subarray(m.pos),v,y),S,b,A;switch(this.type){case rn:A=x.length/4;let C=new Float32Array(A*4);for(let U=0;U<A;U++)f(x,U*4,C,U*4);S=C,b=rn;break;case an:A=x.length/4;let I=new Uint16Array(A*4);for(let U=0;U<A;U++)g(x,U*4,I,U*4);S=I,b=an;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:v,height:y,data:S,header:_.string,gamma:_.gamma,exposure:_.exposure,type:b}}setDataType(e){return this.type=e,this}load(e,t,n,i){function s(a,o){switch(a.type){case rn:case an:a.colorSpace=At,a.minFilter=St,a.magFilter=St,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,i)}};var yo=class extends Xe{constructor(e,t,n,i=128){if(t<=0||n<=0||i<=0)throw new Error("GroundedSkybox height, radius, and resolution must be positive.");let s=new Mt(n,2*i,i);s.scale(1,1,-1);let a=s.getAttribute("position"),o=new M;for(let c=0;c<a.count;++c)if(o.fromBufferAttribute(a,c),o.y<0){let l=-t*3/2,h=o.y<l?-t/o.y:1-o.y*o.y/(3*l*l);o.multiplyScalar(h),o.toArray(a.array,3*c)}a.needsUpdate=!0,super(s,new Et({map:e,depthWrite:!1}))}};function Od(r,e,t=Ti){let n=document.createElement("canvas");n.width=n.height=r,e(n.getContext("2d"),r);let i=new Ls(n);return i.colorSpace=t,i}function Pg(){let r=Od(256,(e,t)=>{let n=e.createImageData(t,t),i=52673;for(let s=0;s<n.data.length;s+=4){i=Math.imul(i,1664525)+1013904223>>>0;let a=i/4294967296,o=a<.026?-38:(a-.44)*28,c=s/4/t|0,l=Math.sin(c/t*Math.PI*7)*3;n.data[s]=146+o+l,n.data[s+1]=155+o+l,n.data[s+2]=137+o+l,n.data[s+3]=255}e.putImageData(n,0,0)},lt);return r.wrapS=Sn,r.repeat.set(4,1),r.anisotropy=5,r}function Ig(r,e,t,n,i){let s=new Xe(new qn(2,2),new to({color:"#261e16",opacity:e}));s.rotation.x=-Math.PI/2,s.position.y=.005,s.receiveShadow=!0,r.add(s);let a=Od(96,(l,h)=>{let u=h/2,d=l.createRadialGradient(u,u,1,u,u,u);d.addColorStop(0,"rgba(23,17,11,.86)"),d.addColorStop(.25,"rgba(23,17,11,.67)"),d.addColorStop(.6,"rgba(29,21,12,.30)"),d.addColorStop(1,"rgba(29,21,12,0)"),l.fillStyle=d,l.fillRect(0,0,h,h)},lt);function o(l,h,u,d,p){let f=new Xe(new qn(u,d),new Et({map:a,transparent:!0,opacity:p,depthWrite:!1,toneMapped:!1}));return f.position.set(l,.008,h),f.rotation.x=-Math.PI/2,r.add(f),f}o(-.063,-.06,.39,.38,.52),o(-.048,t?.109:.095,t?.076:.096,.105,.66);let c=o(t?-.127:-.167,t?.105:.012,.076,.103,.57);return t&&o(n.x,n.z,.225*i,.221*i,.47),c}function Fd(r,e=.2,t=!1,n=!1){let i=new M(n?-.082:-.096,.052,n?.257:.279),s=n?1.36:1,a=Ig(r,e,t,i,s),o=n?.036:.031,c=n?.46:.63,l=new ai([[0,.01],[.074,.01],[.09,.0105],[.096,.012],[.099,.016],[.099,.021],[.094,.039],[.087,.059],[.084,.066],[.082,.069],[.078,.069],[.075,.067],[.074,.063],[.072,.051],[.067,.037],[.059,.025],[.049,.023],[0,.023]].map(([d,p],f)=>{if(!t)return new pe(d,p);let g=p>.031?.031+c*(p-.031):p;return new pe(d,f>=14?Math.max(g,o):g)}),96),h=new Xe(l,new st({map:Pg(),roughness:.49,clearcoat:.26,clearcoatRoughness:.28,specularIntensity:.58,envMapIntensity:.78}));h.position.set(i.x,0,i.z),h.scale.set(s,1,s),h.castShadow=!0,h.receiveShadow=!0,r.add(h);let u=new Xe(new Os(.097,64),new Et({color:"#30251e",transparent:!0,opacity:.23,depthWrite:!1,toneMapped:!1}));return u.rotation.x=-Math.PI/2,u.position.set(i.x,.009,i.z),t||r.add(u),{bowl:i,bowlMesh:h,bowlFloor:o,bowlRadius:.084*s,animate(d){let p=d===null?0:je.smoothstep(d,.1,.88)*(1-je.smoothstep(d,2.47,3.19));a.material.opacity=(t?.57:.48)*(1-.86*p),a.position.z=(t?.105:.012)+.13*p,a.scale.setScalar(1+.55*p)}}}function Hi(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new Qe,l=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(u.morphAttributes[p])}if(e){let p;if(t)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let p=r[d].index;for(let f=0;f<p.count;++f)u.push(p.getX(f)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Bd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let g=0;g<a[h].length;++g)p.push(a[h][g][d]);let f=Bd(p);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(f)}}return c}function Bd(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new yt(a,t,n),c=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,p=h.count;d<p;d++)for(let f=0;f<t;f++){let g=h.getComponent(d,f);o.setComponent(d+u,f,g)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function Kl(r,e){if(e===Ed)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Vs||e===po){let t=r.getIndex();if(t===null){let a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Vs)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}var xo=class extends Tn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ih(t)}),this.register(function(t){return new rh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new oh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new lh(t)}),this.register(function(t){return new nh(t)}),this.register(function(t){return new hh(t)}),this.register(function(t){return new sh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new eh(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new vh(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Bi.extractUrlBase(e);a=Bi.resolveURL(l,this.path)}else a=Bi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Fi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gd){try{a[qe.KHR_BINARY_GLTF]=new _h(e)}catch(u){i&&i(u);return}s=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new wh(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new th;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new yh(s,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new xh;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new Mh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function Lg(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}var qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},eh=class{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],At);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new di(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new oo(h),l.distance=u;break;case"spot":l=new ao(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,mi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},th=class{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Et}extendParams(e,t,n){let i=[];e.color=new we(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],At),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,lt))}return Promise.all(i)}},nh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}},ih=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new pe(o,o)}return Promise.all(s)}},rh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},sh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}},ah=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],At)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,lt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}},oh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}},ch=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],At),Promise.all(s)}},lh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},hh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],At),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,lt)),Promise.all(s)}},uh=class{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}},dh=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:st}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}},ph=class{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},fh=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},mh=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},gh=class{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}},vh=class{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==An.TRIANGLES&&l.mode!==An.TRIANGLE_STRIP&&l.mode!==An.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,p=[];for(let f of u){let g=new Ue,m=new M,_=new xt,v=new M(1,1,1),y=new Xa(f.geometry,f.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&_.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,g.compose(m,_,v));for(let x in c)if(x==="_COLOR_0"){let S=c[x];y.instanceColor=new ar(S.array,S.itemSize,S.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&f.geometry.setAttribute(x,c[x]);mt.prototype.copy.call(y,f),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Gd="glTF",Gs=12,zd={JSON:1313821514,BIN:5130562},_h=class{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Gs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Gs,s=new DataView(e,Gs),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===zd.JSON){let l=new Uint8Array(e,Gs+a,o);this.content=n.decode(l)}else if(c===zd.BIN){let l=Gs+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},yh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Sh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Sh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],p=es[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(let f in p.attributes){let g=p.attributes[f],m=c[f];m!==void 0&&(g.normalized=m)}u(p)},o,l,At,d)})})}},xh=class{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Mh=class{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}},Mo=class extends Oi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,f=e*l,g=f-l,m=-2*p+3*d,_=p-d,v=1-m,y=_-d+u;for(let x=0;x!==o;x++){let S=a[g+x+o],b=a[g+x+c]*h,A=a[f+x+o],C=a[f+x]*h;s[x]=v*S+y*b+m*A+_*C}return s}},Ug=new xt,bh=class extends Mo{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Ug.fromArray(s).normalize().toArray(s),s}},An={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},es={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hd={9728:hn,9729:St,9984:zl,9985:gs,9986:Pr,9987:Wn},kd={33071:En,33648:bs,10497:Sn},Jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ng={CUBICSPLINE:void 0,LINEAR:Hr,STEP:zr},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Dg(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new gn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bl})),r.DefaultMaterial}function lr(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function mi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Og(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function Fg(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Bg(r){let e,t=r.extensions&&r.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ql(t.attributes):e=r.indices+":"+Ql(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Ql(r.targets[n]);return e}function Ql(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Eh(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zg(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Hg=new Ue,wh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Lg,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Jr(this.options.manager):this.textureLoader=new co(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Fi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return lr(s,o,i),mi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Bi.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=Jl[i.type],o=es[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new yt(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=Jl[i.type],l=es[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,f=i.normalized===!0,g,m;if(p&&p!==u){let _=Math.floor(d/p),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count,y=t.cache.get(v);y||(g=new l(o,_*p,i.count*p/h),y=new Rs(g,p/h),t.cache.add(v,y)),m=new Cs(y,c,d%p/h,f)}else o===null?g=new l(i.count*c):g=new l(o,d,i.count*c),m=new yt(g,c,f);if(i.sparse!==void 0){let _=Jl.SCALAR,v=es[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,S=new v(a[1],y,i.sparse.count*_),b=new l(a[2],x,i.sparse.count*c);o!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=S.length;A<C;A++){let I=S[A];if(m.setX(I,b[A*c]),c>=2&&m.setY(I,b[A*c+1]),c>=3&&m.setZ(I,b[A*c+2]),c>=4&&m.setW(I,b[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=f}return m})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Hd[d.magFilter]||St,h.minFilter=Hd[d.minFilter]||Wn,h.wrapS=kd[d.wrapS]||Sn,h.wrapT=kd[d.wrapT]||Sn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==hn&&h.minFilter!==St,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let f=d;t.isImageBitmapLoader===!0&&(f=function(g){let m=new Ft(g);m.needsUpdate=!0,d(m)}),t.load(Bi.resolveURL(u,s.path),f,void 0,p)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),mi(u,a),u.userData.mimeType=a.mimeType||zg(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Is,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ps,dn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return gn}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){let u=i[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],At),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,lt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=zi);let h=s.alphaMode||$l.OPAQUE;if(h===$l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$l.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Et&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new pe(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Et&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Et){let u=s.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],At)}return s.emissiveTexture!==void 0&&a!==Et&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,lt)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),mi(u,s),t.associations.set(u,{materials:e}),s.extensions&&lr(i,u,s),u})}createUniqueName(e){let t=rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Vd(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=Bg(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Vd(new Qe,l,t),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Dg(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let p=0,f=h.length;p<f;p++){let g=h[p],m=a[p],_,v=l[p];if(m.mode===An.TRIANGLES||m.mode===An.TRIANGLE_STRIP||m.mode===An.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new Ni(g,v):new Xe(g,v),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===An.TRIANGLE_STRIP?_.geometry=Kl(_.geometry,po):m.mode===An.TRIANGLE_FAN&&(_.geometry=Kl(_.geometry,Vs));else if(m.mode===An.LINES)_=new Ya(g,v);else if(m.mode===An.LINE_STRIP)_=new Yr(g,v);else if(m.mode===An.LINE_LOOP)_=new Za(g,v);else if(m.mode===An.POINTS)_=new Ka(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&Fg(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),mi(_,s),m.extensions&&lr(i,_,m),t.assignFinalMaterial(_),u.push(_)}for(let p=0,f=u.length;p<f;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return s.extensions&&lr(i,u[0],s),u[0];let d=new sn;s.extensions&&lr(i,d,s),t.associations.set(d,{meshes:e});for(let p=0,f=u.length;p<f;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(je.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new jr(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),mi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ue;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new qr(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let p=i.channels[u],f=i.samplers[p.sampler],g=p.target,m=g.node,_=i.parameters!==void 0?i.parameters[f.input]:f.input,v=i.parameters!==void 0?i.parameters[f.output]:f.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",_)),c.push(this.getDependency("accessor",v)),l.push(f),h.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],f=u[2],g=u[3],m=u[4],_=[];for(let v=0,y=d.length;v<y;v++){let x=d[v],S=p[v],b=f[v],A=g[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();let I=n._createAnimationTracks(x,S,b,A,C);if(I)for(let U=0;U<I.length;U++)_.push(I[U])}return new io(s,void 0,_)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Hg)});for(let p=0,f=u.length;p<f;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new rr:l.length>1?h=new sn:l.length===1?h=l[0]:h=new mt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),mi(h,s),s.extensions&&lr(n,h,s),s.matrix!==void 0){let u=new Ue;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new sn;n.name&&(s.name=i.createUniqueName(n.name)),mi(s,n),n.extensions&&lr(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)s.add(c[h]);let l=h=>{let u=new Map;for(let[d,p]of i.associations)(d instanceof dn||d instanceof Ft)&&u.set(d,p);return h.traverse(d=>{let p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,c=[];ki[s.path]===ki.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ki[s.path]){case ki.weights:l=li;break;case ki.rotation:l=hi;break;case ki.position:case ki.scale:l=ui;break;default:switch(n.itemSize){case 1:l=li;break;case 2:case 3:default:l=ui;break}break}let h=i.interpolation!==void 0?Ng[i.interpolation]:Hr,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){let f=new l(c[d]+"."+ki[s.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(f),a.push(f)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Eh(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof hi?bh:Mo;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function kg(r,e,t){let n=e.attributes,i=new Yt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new M(c[0],c[1],c[2]),new M(l[0],l[1],l[2])),o.normalized){let h=Eh(es[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new M,c=new M;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,f=d.max;if(p!==void 0&&f!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(f[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(f[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(f[2]))),d.normalized){let g=Eh(es[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new un;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Vd(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=Sh[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ke.workingColorSpace!==At&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),mi(r,e),kg(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Og(r,e.targets,t):r})}var Te=je.smoothstep,Vg=13e3,Gg=95e3;function Th(r,e=null,t=!1,n=null,i=!1){return r.onBeforeCompile=s=>{n&&(s.uniforms.petContact=n.contact,s.uniforms.petStroke=n.stroke),s.fragmentShader=s.fragmentShader.replace("#include <map_fragment>",i?`#include <map_fragment>
      float coatY = dot(diffuseColor.rgb, vec3(.2126, .7152, .0722));
      float coatL = pow(clamp(coatY, 0.0, 1.0), 1.35);
      // Lifted deep charcoal (#1c1917 - #26211e range in sRGB) to preserve shadow detail without chocolate cast
      diffuseColor.rgb = vec3(.0135, .0128, .0124) + coatL * vec3(.0240, .0225, .0215);`:`#include <map_fragment>
      float coatY = dot(diffuseColor.rgb, vec3(.2126, .7152, .0722));
      diffuseColor.rgb = mix(vec3(coatY), diffuseColor.rgb, .88);
      diffuseColor.rgb += .006 * (1. - smoothstep(.007, .040, coatY));`),t&&(s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        varying vec3 coatPosition;
        varying vec3 coatNormal;`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        coatPosition = position;
        coatNormal = normal;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
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
        }`),s.fragmentShader=s.fragmentShader.replace("#include <roughnessmap_fragment>",`
        vec3 coatP = coatPosition;
        ${n?`float stroked = petContact.w*(1.0-smoothstep(.02,.074,distance(coatP,petContact.xyz)));
        coatP -= petStroke * (.007*stroked);`:""}
        float stroke = mix(coatP.x + .16*coatP.y, coatP.z - .41*coatP.y + .16*coatP.x,
          smoothstep(.30, .84, abs(normalize(coatNormal).x)));
        vec2 grainUV = vec2(stroke*440.0, coatP.y*54.0);
        float grain = coatFibers(grainUV) - .5;
        float fine2 = coatFibers(grainUV*vec2(1.9,.85)+11.3) - .5;
        float broad = coatFibers(grainUV*vec2(.32,.62)+7.9) - .5;
        float faceVelvet = (coatFibers(coatP.xy * 680.0 + coatP.z * 420.0) - .5) * .65 +
          (coatFibers(coatP.zy * 920.0 - coatP.x * 540.0 + 5.3) - .5) * .35;
        float awayFromFace = 1.0 - smoothstep(.125,.185,coatP.z)*smoothstep(.280,.365,coatP.y);
        float screenFilter = 1.0 - smoothstep(.38,1.65,fwidth(grainUV.x));
        float bodyGrain = (.085*grain + .045*fine2)*screenFilter + .048*broad;
        diffuseColor.rgb *= 1.0 + mix(${i?".048*faceVelvet":"0.0"}, bodyGrain, awayFromFace);
        ${n?"diffuseColor.rgb *= 1.0 + .075*stroked*awayFromFace;":""}
        ${i?`
        float dEyeL = distance(coatP, vec3(-.1070, .3776, .1649));
        float dEyeR = distance(coatP, vec3(-.0530, .3729, .1629));
        float dEye = min(dEyeL, dEyeR);
        // Calm dark chestnut-brown iris + crisp dark pupil + razor-tight moist eyelid waterline
        float darkTex = 1.0 - smoothstep(.10, .24, coatY);
        float eyeMask = (1.0 - smoothstep(.0050, .0085, dEye)) * darkTex;
        float pupilMask = (1.0 - smoothstep(.0020, .0044, dEye)) * darkTex;
        float lidLine = smoothstep(.0072, .0086, dEye) * (1.0 - smoothstep(.0090, .0106, dEye));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.014, .0065, .0025), eyeMask * .62);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(.004, .003, .003), pupilMask * .90);
        diffuseColor.rgb += vec3(.0050, .0046, .0044) * lidLine;`:""}
        #include <roughnessmap_fragment>`),i&&(s.fragmentShader=s.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
          float dEyeR2 = min(distance(coatPosition, vec3(-.1070, .3776, .1649)), distance(coatPosition, vec3(-.0530, .3729, .1629)));
          float wetEye = (1.0 - smoothstep(.0050, .0085, dEyeR2)) * (1.0 - smoothstep(.10, .24, coatY));
          float wetLid = smoothstep(.0072, .0086, dEyeR2) * (1.0 - smoothstep(.0090, .0106, dEyeR2));
          // Keep wet nose strictly above the upper lip seam (y > 0.330) with glossy pebbled moisture
          float wetNose = (1.0 - smoothstep(.011, .020, distance(coatPosition, vec3(-.080, .340, .207)))) *
            smoothstep(.330, .336, coatPosition.y);
          float nosePebble = coatFibers(coatPosition.xy * 580.0 + coatPosition.z * 420.0) - .5;
          float noseAA = 1.0 - smoothstep(.35, 1.4, fwidth(coatPosition.x * 580.0));
          float furTexMask = 1.0 - clamp(max(max(wetEye, wetNose), wetLid), 0.0, 1.0);
          float microRough = mix(faceVelvet * .06, (.07 * grain * screenFilter + .04 * broad), awayFromFace);
          roughnessFactor = clamp(roughnessFactor + furTexMask * microRough, .48, .95);
          roughnessFactor = mix(roughnessFactor, .18 + .06 * nosePebble, wetNose * .92);
          roughnessFactor = mix(roughnessFactor, .24, wetLid * .65);
          roughnessFactor = mix(roughnessFactor, .04, wetEye);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          {
            // Fine isotropic velvet bump on face/muzzle + gentle pebble bump on moist nose + fiber bump on body
            vec3 dPosX = dFdx(vViewPosition);
            vec3 dPosY = dFdy(vViewPosition);
            vec3 r1 = cross(dPosY, normal);
            vec3 r2 = cross(normal, dPosX);
            float det = dot(dPosX, r1);
            if (abs(det) > 1e-8) {
              float hFur = mix(faceVelvet * .55, (grain * .65 + fine2 * .35) * screenFilter, awayFromFace);
              float bumpAmt = mix(.0013, .0021, awayFromFace);
              vec3 surfGrad = sign(det) * (dFdx(hFur) * r1 + dFdy(hFur) * r2);
              vec3 noseGrad = sign(det) * (dFdx(nosePebble) * r1 + dFdy(nosePebble) * r2);
              normal = normalize(abs(det) * normal - furTexMask * bumpAmt * surfGrad - wetNose * noseAA * .0009 * noseGrad);
            }
          }`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
          material.clearcoat = clamp(max(wetEye, wetNose * .88), 0.0, 1.0);
          material.clearcoatRoughness = max(mix(.12, .035, wetEye), .0525);`).replace("#include <dithering_fragment>",`
          {
            // Cool-neutral daylight window rim glow on grazing fur edges, muted at the mouth seam
            float mouthMute = 1.0 - smoothstep(.168, .185, coatPosition.z) *
              smoothstep(.308, .318, coatPosition.y) * (1.0 - smoothstep(.328, .336, coatPosition.y));
            float rimF = pow(1.0 - clamp(abs(dot(normalize(vNormal), normalize(vViewPosition))), 0.0, 1.0), 3.0);
            gl_FragColor.rgb += vec3(.095, .100, .112) * rimF * mouthMute;
          }
          #include <dithering_fragment>`))),e&&(s.uniforms.coatMotion=e,s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
        attribute vec3 strandBend;
        uniform vec2 coatMotion;
        ${n?"attribute float strandFreedom; uniform vec4 petContact; uniform vec3 petStroke;":""}`),s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        float sway = sin(coatMotion.x * 8.0 + position.y * 21.0 + position.z * 9.0);
        transformed += strandBend * (sway * coatMotion.y);
        ${n?`float touchFalloff = petContact.w*(1.0-smoothstep(.018,.071,distance(position,petContact.xyz)));
        vec3 strokeAlongCoat = petStroke-normal*dot(normal,petStroke);
        transformed += (strokeAlongCoat*.010-normal*.0028) * strandFreedom * touchFalloff;`:""}`),s.fragmentShader=s.fragmentShader.replace("#include <normal_fragment_maps>",`normal *= faceDirection;
#include <normal_fragment_maps>`),i&&(s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`
          {
            float rimS = pow(1.0 - clamp(abs(dot(normalize(vNormal), normalize(vViewPosition))), 0.0, 1.0), 2.8);
            gl_FragColor.rgb += vec3(.105, .112, .125) * rimS;
          }
          #include <dithering_fragment>`)))},r.customProgramCacheKey=()=>{let s=e?"retriever-groomed-strands":t?"retriever-fiber-pattern":"puppy-coat-color";return(i?"black-":"")+(n?s+"-pet":s)},r}var Wg=115e3,Xg=[[-.1097,.323,.1752],[-.0623,.323,.1752]];function Wd(r){return r.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        float pebble = shibaNoise(shibaPos.xy * 520.0 + shibaPos.z * 360.0) * .68 +
          shibaNoise(shibaPos.xy * 920.0 - shibaPos.z * 640.0) * .32;
        float pebbleAA = 1.0 - smoothstep(.35, 1.4, fwidth(shibaPos.x * 520.0));
        float furRough = clamp(.88 + .06 * fine * aa, .80, .96);
        roughnessFactor = mix(furRough, .42, mouthZone);
        roughnessFactor = mix(roughnessFactor, .34 + .08 * pebble, noseZone);
        roughnessFactor = mix(roughnessFactor, .04, eyeZone);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        if (noseZone > .02) {
          vec3 dPosX = dFdx(vViewPosition);
          vec3 dPosY = dFdy(vViewPosition);
          vec3 r1 = cross(dPosY, normal);
          vec3 r2 = cross(normal, dPosX);
          float det = dot(dPosX, r1);
          if (abs(det) > 1e-8) {
            vec3 surfGrad = sign(det) * (dFdx(pebble) * r1 + dFdy(pebble) * r2);
            normal = normalize(abs(det) * normal - noseZone * pebbleAA * .0007 * surfGrad);
          }
        }`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
        material.clearcoat = max(max(eyeZone, noseZone * .38), mouthZone * .10);
        material.clearcoatRoughness = max(mix(.32, .035, eyeZone), .0525);`)},r.customProgramCacheKey=()=>"shiba-pbr-multizone",r}function Xd(r,e,t,n=!1,i=null,s=!1,a=!1){let o=r.geometry,{position:c,normal:l,uv:h,skinIndex:u,skinWeight:d}=o.attributes,p=new we,f=new we,g=new we,m=o.index.array.subarray(0,t),_=new Float32Array(m.length/3),v=new M,y=new M,x=new M,S=0;for(let ee=0;ee<m.length;ee+=3)v.fromBufferAttribute(c,m[ee]),y.fromBufferAttribute(c,m[ee+1]).sub(v),x.fromBufferAttribute(c,m[ee+2]).sub(v),S+=y.cross(x).length()*.5,_[ee/3]=S;let b=50325;function A(){return b=Math.imul(b,1664525)+1013904223>>>0,b/4294967296}function C(){let ee=A()*S,ce=0,ge=_.length-1;for(;ce<ge;){let de=ce+ge>>>1;_[de]<ee?ce=de+1:ge=de}return ce*3}let I=[],U=[],D=[],H=[],V=[],P=[],W=[],X=[],ie=[],re=new Float32Array(3),ne=new Float32Array(r.skeleton.bones.length),ue=[...ne.keys()],Y=new M,Z=new M,xe=new M,ve=new M,se=new M,R=new M,T=new M,F=new M,z=new M,L=0,B=0,w=0;function N(ee,ce,ge=0,de=null){I.push(ee.x,ee.y,ee.z),U.push(Z.x,Z.y,Z.z),D.push(L,B),de?H.push(de.r*ce,de.g*ce,de.b*ce):H.push(ce,ce*.966,ce*.94),n&&V.push(z.x*ge,z.y*ge,z.z*ge),i&&P.push(ge);for(let he=0;he<4;he++){let ae=ue[he];W.push(ae),X.push(ne[ae]/w)}}let O=s?Wg:n?Gg:Vg;for(let ee=0;ee<O;ee++){let ce=C(),ge=Math.sqrt(A());re[0]=1-ge,re[1]=ge*A(),re[2]=1-re[0]-re[1],Y.set(0,0,0),Z.set(0,0,0),ne.fill(0),L=0,B=0;for(let G=0;G<3;G++){let Ye=m[ce+G],ut=re[G];Y.addScaledVector(xe.fromBufferAttribute(c,Ye),ut),Z.addScaledVector(xe.fromBufferAttribute(l,Ye),ut),h&&(L+=h.getX(Ye)*ut,B+=h.getY(Ye)*ut);for(let Be=0;Be<4;Be++){let Ct=u.getComponent(Ye,Be);ne[Ct]+=d.getComponent(Ye,Be)*ut}}let de=Y.x,he=Y.y,ae=Y.z;if(he<.009)continue;if(s){if(ae>.166&&he>.264&&he<.296&&Math.abs(de+.086)<.036||((de+.086)/.019)**2+((he-.301)/.013)**2+((ae-.203)/.018)**2<1||Xg.some(([Me,Ce,Ne])=>(de-Me)**2+(he-Ce)**2+(ae-Ne)**2<18e-5)||(Z.normalize(),Z.lengthSq()<.5))continue;ue.sort((Me,Ce)=>ne[Ce]-ne[Me]),w=ne[ue[0]]+ne[ue[1]]+ne[ue[2]]+ne[ue[3]];let G=de+.086,Ye=Math.abs(G),ut=Te(he,.012,.024)*(1-Te(he,.042,.062))*Te(ae,.055,.085),Be=(1-Te(he,.055,.115))*Te(ae,.035,.085)*(1-.75*ut),Ct=Te(ae,.155,.19)*Te(he,.275,.31)*(1-Te(Ye,.022,.042)),Nt=Te(he,.32,.348)*Te(ae,.13,.172),Jt=Te(he,.338,.36),dt=Math.max(Be,Ct,Nt*.75,Jt*.85);if(dt>.65&&A()<dt*.42)continue;let pt=Te(he,.265,.315)*(1-Te(he,.325,.352))*Te(ae,.105,.155)*(1-Te(ae,.165,.185))*Te(Ye,.028,.052),vt=Te(he,.105,.175)*(1-Te(he,.255,.295))*Te(ae,.025,.095),zt=1-Te(ae,-.11,-.065),vn=(1-Te(ae,.035,.095))*Te(he,.115,.185)*(1-zt),Ht=(1-Te(ae,-.075,-.015))*(1-Te(he,.105,.165))*(1-zt),In=de*270+Math.sin(he*155+ae*95)*2.1,Zn=ae*235-he*190+de*80,kn=.5+.5*Math.sin(In)*Math.sin(Zn),kt=Math.cos(In)*.35,_n=A()*(.58+.58*kn),$t=(.0058+.0072*_n**1.25)*(1-.64*dt),Xt=.0055*pt+.0072*vt+.0085*zt+.006*Ht+.0045*ut,Dt=$t+Xt*(.55+.65*_n),E=(2e-4+A()*18e-5)*(1-.32*dt+.3*zt),j=Te(he,.265,.315)*Te(ae,.1,.165),te=vn*Math.sign(G||1)*(1.35+.9*Te(Ye,.005,.045));ve.set(G*(1.5+1.8*pt)+te+kt*(.35+.65*vn)+(A()-.5)*.34,-1-.55*ut+.55*j+.95*zt*(Z.y>0?.7:-.3),-.55-.85*j-.55*vn+.55*vt+.45*ut-.65*zt+(A()-.5)*.28),ve.addScaledVector(Z,-ve.dot(Z)),ve.lengthSq()<1e-5&&ve.set(0,-1,0),ve.normalize(),se.crossVectors(Z,ve).normalize();let oe=.26+.24*pt+.22*vt+.42*zt+.18*Ht-.12*dt;Y.addScaledVector(Z,-35e-5),R.copy(Y).addScaledVector(Z,Dt*oe).addScaledVector(ve,Dt*.46),T.copy(Y).addScaledVector(Z,Dt*(oe*1.25)).addScaledVector(ve,Dt*.96);let q=Te(Z.y,.35,.85)*(1-Te(ae,.08,.15))*Te(he,.12,.24)*(A()<.26?.22:0),fe=.92+.18*kn+(A()-.5)*.08;p.setRGB(.7*fe,.66*fe,.62*fe),g.setRGB((1.06-q)*fe,(1.04-q*1.15)*fe,(1.01-q*1.25)*fe),f.copy(p).lerp(g,.58);let ye=I.length/3;N(F.copy(Y).addScaledVector(se,-E),1,0,p),N(F.copy(Y).addScaledVector(se,E),1,0,p),N(F.copy(R).addScaledVector(se,-E*.62),1,0,f),N(F.copy(R).addScaledVector(se,E*.62),1,0,f),N(T,1,0,g),ie.push(ye,ye+1,ye+2,ye+2,ye+1,ye+3,ye+2,ye+3,ye+4);continue}if(n){let G=de+.08,Ye=Math.abs(G);if(ae>.166&&he>.295&&he<.342&&Ye<.036||(G/.022)**2+((he-.334)/.018)**2+((ae-.206)/.022)**2<1||(de+.107)**2+(he-.3776)**2+(ae-.1649)**2<3e-4||(de+.053)**2+(he-.3738)**2+(ae-.1629)**2<36e-5||(Z.normalize(),Z.lengthSq()<.5))continue;ue.sort((Ce,Ne)=>ne[Ne]-ne[Ce]),w=ne[ue[0]]+ne[ue[1]]+ne[ue[2]]+ne[ue[3]];let ut=(1-Te(he,.055,.13))*Te(ae,.035,.105),Be=Te(he,.045,.09)*(1-Te(he,.145,.195))*Te(ae,.005,.055)*(1-Te(ae,.062,.092))*Te(Ye,.022,.055),Ct=Te(ae,.15,.192)*Te(he,.305,.36)*(1-Te(Ye,.025,.05)),Nt=Te(he,.348,.395)*Te(ae,.105,.168),Jt=Math.max(ut*(1-.75*Be),Ct,Nt*.78);if(Jt>.62&&A()<Jt*.48)continue;let dt=Te(he,.115,.185)*(1-Te(he,.255,.31))*Te(ae,.055,.125),pt=Te(he,.275,.318)*(1-Te(he,.358,.392))*(1-Te(ae,.135,.172))*Te(Ye,.026,.056),vt=Te(de,-.015,.065)*(1-Te(ae,-.13,-.068))*(1-Te(he,.045,.09)),zt=(1-Te(ae,.025,.095))*Te(he,.12,.21)*(1-vt),vn=(1-Te(ae,-.095,-.015))*(1-Te(he,.11,.185))*(1-vt),Ht=de*210+Math.sin(he*120+ae*85)*2.4,In=ae*185-he*150+de*65,Zn=.5+.5*Math.sin(Ht)*Math.sin(In),kn=Math.cos(Ht)*.42,kt=A()*(.56+.6*Zn),_n=(1-Te(ae,-.075,.025))*(1-Te(he,.085,.175))*Te(Ye,.052,.082)*(1-vt),$t=(.0065+.0085*kt**1.2)*(1-.68*Jt)*(1-.42*_n),Xt=.0095*dt+.0085*pt+.0135*vt+.0025*vn*(1-_n)+.0065*Be+.004*zt,Dt=$t+Xt*(.55+.65*kt),E=(21e-5+A()*2e-4)*(1-.36*Jt+.28*vt+.15*dt),j=Nt*(1-pt),te=zt*Math.sign(G||1)*(1.15+.8*Te(Ye,.006,.05));ve.set(G*(.95+1.5*j)+te+kn*(.38+.55*zt+.45*pt)+1.35*vt+(A()-.5)*.28,-1.05+.72*vt+.42*j-.35*pt-.25*dt,-.52-.68*j+.72*dt-.58*vt-.42*Be+(A()-.5)*.24),ve.addScaledVector(Z,-ve.dot(Z)),ve.lengthSq()<1e-5&&ve.set(0,-1,0),ve.normalize(),se.crossVectors(Z,ve).normalize();let oe=Te(Z.y,.25,.75)*(1-vt),q=Math.max(.02,(.2+.16*dt+.13*pt+.24*vt-.1*vn-.12*Jt-.13*oe)*(1-.82*_n)),fe=Math.sin(he*95+de*70+ae*55)*Dt*(.12+.14*pt+.12*dt+.16*vt);Y.addScaledVector(Z,-3e-4-45e-5*_n),R.copy(Y).addScaledVector(Z,Dt*q).addScaledVector(ve,Dt*.47).addScaledVector(se,fe),T.copy(Y).addScaledVector(Z,Dt*(q*1.18)).addScaledVector(ve,Dt*.96).addScaledVector(se,-fe*.45),z.copy(Z).multiplyScalar(.82).addScaledVector(se,.26).multiplyScalar(Dt*(.035+.18*dt+.15*pt+.26*vt+.1*Be));let ye=.96+.09*Zn+(A()-.5)*.04;a?(p.setRGB(.76*ye,.77*ye,.8*ye),g.setRGB(1.02*ye,1.03*ye,1.06*ye)):(p.setRGB(.88*ye,.85*ye,.8*ye),g.setRGB(1.04*ye,1.02*ye,.99*ye)),f.copy(p).lerp(g,.58);let Me=I.length/3;N(F.copy(Y).addScaledVector(se,-E),1,0,p),N(F.copy(Y).addScaledVector(se,E),1,0,p),N(F.copy(R).addScaledVector(se,-E*.6),1,.38,f),N(F.copy(R).addScaledVector(se,E*.6),1,.38,f),N(T,1,1,g),ie.push(Me,Me+1,Me+2,Me+2,Me+1,Me+3,Me+2,Me+3,Me+4);continue}let Le=1-Te(Math.abs(de+.091),.038,.08),Se=Te(ae,.156,.206)*Le,le=Te(ae,.142,.195)*Te(he,.295,.325),me=Math.max(Se,le);if(me>.4&&A()<me*.92||(Z.normalize(),Z.lengthSq()<.5))continue;ue.sort((G,Ye)=>ne[Ye]-ne[G]),w=ne[ue[0]]+ne[ue[1]]+ne[ue[2]]+ne[ue[3]];let De=1-Te(he,.065,.17),_e=Te(he,.3,.37),Ae=(.0027+.0091*A()**1.5)*(1-.68*Math.max(De*.75,me,_e*.56)),gt=(145e-6+A()*205e-6)*(1-De*.36),at=.76+A()*.3;ve.set((de+.069)*1.9+(A()-.5)*.4,-1,-.5+A()*.33),ve.addScaledVector(Z,-ve.dot(Z)).normalize(),se.crossVectors(Z,ve).normalize(),Y.addScaledVector(Z,-38e-5),R.copy(Y).addScaledVector(Z,Ae*.47).addScaledVector(ve,Ae*.38),T.copy(Y).addScaledVector(Z,Ae*.58).addScaledVector(ve,Ae*.82);let et=I.length/3;N(F.copy(Y).addScaledVector(se,-gt),at*.68),N(F.copy(Y).addScaledVector(se,gt),at*.68);let Rt=gt*.68;N(F.copy(R).addScaledVector(se,-Rt),at,.34),N(F.copy(R).addScaledVector(se,Rt),at,.34),N(T,at*.87,1),ie.push(et,et+1,et+2,et+2,et+1,et+3,et+2,et+3,et+4)}let J=new Qe;J.setAttribute("position",new Ee(I,3)),J.setAttribute("normal",new Ee(U,3)),J.setAttribute("uv",new Ee(D,2)),J.setAttribute("color",new Ee(H,3)),J.setAttribute("skinIndex",new Ui(W,4)),J.setAttribute("skinWeight",new Ee(X,4)),n&&J.setAttribute("strandBend",new Ee(V,3)),i&&J.setAttribute("strandFreedom",new Ee(P,1)),J.setIndex(ie);let k=n?{value:new pe}:null,$=s?new st({map:e,vertexColors:!0,side:zi,roughness:.8,specularIntensity:.26,sheen:.55,sheenColor:new we("#f7d8b5"),sheenRoughness:.55,envMapIntensity:.46}):Th(new st({map:e,vertexColors:!0,side:zi,roughness:a?.78:n?.82:1,envMapIntensity:a?.52:n?.58:.4,specularIntensity:a?.16:n?.2:.11,sheen:a?.56:n?.55:0,sheenColor:new we(a?"#5a606a":"#ffebd0"),sheenRoughness:a?.66:.62}),k,!1,i,a);s&&($.onBeforeCompile=ee=>{ee.fragmentShader=ee.fragmentShader.replace("#include <normal_fragment_maps>",`normal *= faceDirection;
#include <normal_fragment_maps>`)},$.customProgramCacheKey=()=>"shiba-guard-hair");let K=new Ni(J,$);return K.name="Coat strands",K.frustumCulled=!1,K.bind(r.skeleton,r.bindMatrix),r.add(K),k}var{smoothstep:s_,lerp:a_}=je;var o_=new we("#bf5f22"),c_=new we("#d98a3c"),l_=new we("#f4dfbc"),h_=new we("#8c4a26");function ts(r,e,t,n,i,s,a=0){let o=Math.cos(a),c=Math.sin(a),l=Math.min(n,i,s);return(h,u,d)=>{let p=u-e,f=d-t,g=(h-r)/n,m=(o*p+c*f)/i,_=(o*f-c*p)/s;return(Math.sqrt(g*g+m*m+_*_)-1)*l}}function Ws(r,e,t){let n=Math.max(t-Math.abs(r-e),0)/t;return Math.min(r,e)-n*n*t*.25}var jg=ts(0,30.32,10.44,7,5.3,5.95,-.18),qg=ts(3.7,27.9,12.3,4.7,3.9,4.7,.1),Yg=ts(0,26.34,15.62,3.32,1.58,4.34,-.12),Zg=ts(.84,27.58,17.62,2.4,1.97,3.46,-.19),Kg=ts(0,29.35,15.92,2.06,2.58,3.79,-.32),Jg=ts(4.9,26.6,10,2.8,2.5,4.3,.64);function $g(r,e,t){let n=Math.abs(r),i=Ws(jg(r,e,t),qg(n,e,t),1.35),s=Ws(i,Jg(n,e,t),.92),a=Ws(Zg(n,e,t),Kg(r,e,t),1.18);return Ws(Ws(s,a,.87),Yg(r,e,t),.86)}var jd=.44,u_=Math.cos(jd),d_=Math.sin(jd),Qg=3.2,e0=30.92,t0=13.5;for(let r=13.5;r<18;r+=.024)$g(Qg,e0,r)<0&&(t0=r);var hr=je.smoothstep;function Ah(r,e){return .278+.004*hr(e,.187,.211)+.001*(1-hr(e,.15,.181))+.001*hr(Math.abs(r+.083),.022,.054)-.005*(1-hr(r,-.103,-.087))*(1-hr(e,.195,.213))}function Rh(r,e){return hr(e,.143,.178)*(1-hr(Math.abs(r+.081),.04,.069))}function qd(r,e=Ah,t=Rh){let{position:n,normal:i,uv:s}=r.attributes,a=Array.from(n.array),o=Array.from(i.array),c=[],l=new Float32Array(n.count),h=new Array(n.count).fill(0);for(let v=0;v<n.count;v++)c.push(s.getX(v),s.getY(v)),l[v]=n.getY(v)-e(n.getX(v),n.getZ(v));let u=new Map;function d(v,y){let x=Math.min(v,y)*n.count+Math.max(v,y),S=u.get(x);if(!S){let b=l[v]/(l[v]-l[y]),A=new M().fromBufferAttribute(n,v).lerp(new M().fromBufferAttribute(n,y),b),C=new M().fromBufferAttribute(i,v).lerp(new M().fromBufferAttribute(i,y),b).normalize();S={point:A,surfaceNormal:C,u:je.lerp(s.getX(v),s.getX(y),b),v:je.lerp(s.getY(v),s.getY(y),b),active:t(A.x,A.z)>.002},u.set(x,S)}return S}function p(v,y){let x=y+1;if(v.vertices??=[],v.vertices[x]!==void 0)return v.vertices[x];let S=v.point.clone();y===0&&S.addScaledVector(v.surfaceNormal,-.008);let b=a.length/3;return a.push(S.x,S.y,S.z),o.push(v.surfaceNormal.x,v.surfaceNormal.y,v.surfaceNormal.z),c.push(v.u,v.v),h.push(y===0?2:y),v.vertices[x]=b,b}let f=[],g=[],m=r.index.array;function _(v,y,x){let S=[];for(let b=0;b<3;b++){let A=v[b];l[A]>=0==(y===1)&&S.push(A),x[b]&&S.push(p(x[b],y))}for(let b=2;b<S.length;b++)f.push(S[0],S[b-1],S[b])}for(let v=0;v<m.length;v+=3){let y=m[v],x=m[v+1],S=m[v+2],b=l[y]>=0;if(b===l[x]>=0&&b===l[S]>=0){f.push(y,x,S);continue}let A=[y,x,S],C=A.map((ie,re)=>{let ne=A[(re+1)%3];return l[ie]>=0==l[ne]>=0?null:d(ie,ne)});if(!C.some(ie=>ie?.active)){f.push(y,x,S);continue}_(A,1,C),_(A,-1,C);let[I,U]=C.filter(Boolean),D=p(I,1),H=p(U,1),V=p(I,0),P=p(U,0),W=p(I,-1),X=p(U,-1);g.push(D,H,P,D,P,V,V,P,X,V,X,W)}return r.setAttribute("position",new Ee(a,3)),r.setAttribute("normal",new Ee(o,3)),r.setAttribute("uv",new Ee(c,2)),r.setIndex(f.concat(g)),r.clearGroups(),r.addGroup(0,f.length,0),r.addGroup(f.length,g.length,1),{lipSides:h,exteriorCount:f.length}}var Xs=1.65,Yn={contact:1.24,grip:1.45,lift:1.58,tuck:1.74,hide:1.95,duration:4200,chews:[{open:2,peak:2.12,close:2.18,end:2.31,weight:1},{open:2.4,peak:2.49,close:2.55,end:2.72,weight:.75},{open:2.85,peak:2.98,close:3.07,end:3.23,weight:.56}]},Gt=je.smoothstep;function Ch(r,e,t,n=.01,i=.013){let s=r.position.clone(),a=e.position.clone(),o=t.position.clone(),c=s.clone().add(a).add(o),l=a.length(),h=o.length(),u=a.clone().normalize(),d=o.clone().normalize(),p=c.clone().sub(s).normalize(),f=a.clone().addScaledVector(p,-a.dot(p)).normalize(),g=new M,m=new M,_=new M,v=new M,y=new xt;return x=>{r.position.copy(s),r.position.y-=x*n,r.position.z+=x*i;let S=g.subVectors(c,r.position).length();g.normalize(),m.copy(f).addScaledVector(g,-f.dot(g)).normalize();let b=(l**2-h**2+S**2)/(2*S),A=Math.sqrt(Math.max(0,l**2-b**2));_.copy(g).multiplyScalar(b).addScaledVector(m,A),r.quaternion.setFromUnitVectors(u,v.copy(_).normalize()),y.copy(r.quaternion).invert(),v.subVectors(c,r.position).sub(_).normalize().applyQuaternion(y),e.quaternion.setFromUnitVectors(d,v),t.quaternion.multiplyQuaternions(r.quaternion,e.quaternion).invert()}}function Yd(r,e){let t=r.attributes.position;for(let n=0;n<t.count;n++){let i=t.getX(n),s=t.getY(n),a=t.getZ(n),o=(1-Gt(s,.013,.041))*Gt(a,.089,.134),c=i>-.086?-.046:-.126,l=Math.abs(i-c),h=o*(1-Gt(l,.015,.029)),u=Gt(s,.032,.049)*(1-Gt(s,.064,.085))*Gt(a,.069,.102)*(1-Gt(l,.016,.034)),d=Math.abs(s-e(i,a)),f=9e-4*(Gt(a,.155,.182)*(1-Gt(a,.194,.209))*Gt(Math.abs(i+.08),.018,.03))*(1-Gt(d,7e-4,.004)),g=i<-.08?1:-1,m=Math.max(1-Gt(Math.abs(i-c-.008),.001,.0035),1-Gt(Math.abs(i-c+.007),.001,.0035)),_=Gt(i,.017,.078)*(1-Gt(a,-.128,-.081))*(1-Gt(s,.035,.069));t.setXYZ(n,i-.11*(i-c)*u+g*f,s-.0038*h*Gt(s,.003,.013)-.33*_*Math.max(0,s-.013),a-.0036*h*m+.23*_*(-.15-a))}t.needsUpdate=!0}var Q=je.smoothstep,Ph=je.lerp,Rn=1.16,Kd=1.45,js=[["body",null,[0,0,0]],["chest","body",[-.095,.144,.017]],["neck","chest",[-.1,.227,.074]],["head","neck",[-.1,.301,.125]],["jaw","head",[-.086,.29,.155]],["earOutside","head",[-.16,.351,.109]],["earInside","head",[-.036,.354,.112]],["shoulder","body",[-.153,.178,.045]],["elbow","shoulder",[-.164,.109,.012]],["wrist","elbow",[-.171,.039,.004]],["tailBase","body",[.046,.042,-.166]],["tailTip","tailBase",[.113,.024,-.188]]],n0=[["nearShoulder","body",[-.042,.187,.089]],["nearElbow","nearShoulder",[-.044,.109,.077]],["nearWrist","nearElbow",[-.048,.034,.104]]],i0={neck:[-.08,.25,.077],head:[-.08,.327,.122],jaw:[-.08,.326,.15],earOutside:[-.122,.382,.107],earInside:[-.036,.382,.107],shoulder:[-.128,.18,.089],elbow:[-.126,.108,.076],wrist:[-.126,.035,.105],tailBase:[-.012,.037,-.124],tailTip:[.025,.016,-.153]},r0={chest:[-.086,.162,.032],neck:[-.086,.236,.074],head:[-.086,.295,.118],jaw:[-.086,.286,.162],earOutside:[-.125,.348,.135],earInside:[-.047,.348,.135],shoulder:[-.112,.172,.076],elbow:[-.109,.104,.064],wrist:[-.105,.026,.098],nearShoulder:[-.06,.172,.076],nearElbow:[-.063,.104,.064],nearWrist:[-.067,.026,.098],tailBase:[-.086,.048,-.088],tailTip:[-.095,.095,-.135]};function s0(r,e){return .282+.002*Q(e,.185,.205)}function a0(r,e){return Q(e,.162,.182)*(1-Q(Math.abs(r+.086),.02,.036))}function o0(r,e,t,n){let i=r+.086,s=Q(t,.044,.078)*Q(Math.abs(i),.005,.02)*(1-Q(e,.12,.205)),a=(1-Q(t,-.105,-.072))*(1-Q(e,.13,.175)),o=Q(e,.342,.362)*(1-Q(t,.155,.185));return{frontLeg:s*(1-Q(i,-.004,.004)),nearLeg:s*Q(i,-.004,.004),chest:Q(e,.095,.205)*Q(t,-.055,.045),neck:Q(e,.2,.275)*Q(t,.015,.095),head:Math.max(Q(e,.258,.3)*Q(t,.045,.115),Q(t,.145,.175)*Q(e,.25,.275),n*Q(e,.252,.282)),tail:a,tailTip:1-Q(t,-.145,-.1),earOutside:(1-Q(i,-.034,-.018))*o,earInside:Q(i,.018,.034)*o}}function Zd(r,e){return .323+.009*Q(e,.184,.21)-.001*Q(-r,.076,.104)}function c0(r,e){return Q(e,.148,.183)*(1-Q(Math.abs(r+.08),.032,.062))}function l0(r,e,t,n){let i=(1-Q(Math.abs(r+.128),.024,.049))*Q(t,.027,.07)*(1-Q(e,.155,.225)),s=(1-Q(Math.abs(r+.047),.018,.035))*Q(t,.028,.07)*(1-Q(e,.15,.23)),a=Q(r,.001,.032)*(1-Q(e,.03,.057))*(1-Q(t,-.135,-.08)),o=Q(e,.108,.256)*Q(t,-.109,.093),c=Q(e,.199,.327)*Q(t,-.015,.11),l=Math.max(Q(e,.301,.346)*Q(t,.003,.078),Q(t,.111,.161)*Q(e,.269,.309),n*Q(e,.27,.312)),h=Q(e,.277,.306)*(1-Q(e,.369,.395))*(1-Q(t,.132,.16));return{frontLeg:i,nearLeg:s,tail:a,chest:o,neck:c,head:l,tailTip:Q(r,.025,.067),earOutside:Q(-r,.112,.136)*h,earInside:(1-Q(-r,.027,.051))*h}}function h0(r,e,t,n){let i=Math.abs(r-Ph(-.173,-.15,Q(e,.014,.176))),s=Ph(-.064,-.028,Q(e,.115,.198)),a=(1-Q(i,.025,.06))*Q(t,s,s+.031)*(1-Q(e,.144,.214)),o=Q(r,.049,.094)*(1-Q(e,.031,.062))*(1-Q(t,-.089,-.018)),c=Q(e,.11,.224)*Q(t,-.079,.093),l=Q(e,.204,.283)*Q(t,.015,.1),h=Math.max(Q(e,.273,.321)*Q(t,.007,.085),Q(t,.127,.166)*Q(e,.231,.267),n*Q(e,.234,.262)),u=Q(e,.252,.285)*(1-Q(e,.345,.373))*(1-Q(t,.155,.185));return{frontLeg:a,tail:o,chest:c,neck:l,head:h,tailTip:Q(r,.104,.155),earOutside:Q(-r,.147,.174)*u,earInside:(1-Q(-r,.017,.05))*u}}function u0(r,e,t,n,i,s,a=!1){let o=r.attributes.position,c=new Uint16Array(o.count*4),l=new Float32Array(o.count*4),h=new Float32Array(s),u=[...h.keys()];for(let d=0;d<o.count;d++){let p=o.getX(d),f=o.getY(d),g=o.getZ(d),m=i(p,g),{frontLeg:_,nearLeg:v=0,tail:y,chest:x,neck:S,head:b,tailTip:A,earOutside:C,earInside:I}=t(p,f,g,m),U=1-Q(f,.028,.067),D=1-Q(f,.09,.138),H=Math.max(0,1-_-v-y),V=e[d],P=m*(V===-1?1:V===1?0:V===2?.5:1-Q(f-n(p,g),a?-.003:-.006,a?.003:.007)),W=!a&&s>js.length&&V===0?.13*Q(g,.126,.149)*(1-Q(g,.153,.183))*Q(f,.3,.316)*(1-Q(f,.326,.345))*Q(Math.abs(p+.08),.015,.035):0,X=Math.max(P,W),ie=H*b;h[0]=H*(1-b)*(1-S)*(1-x),h[1]=H*(1-b)*(1-S)*x,h[2]=H*(1-b)*S,h[3]=ie*(1-X-C-I),h[4]=ie*X,h[5]=ie*C,h[6]=ie*I,h[7]=_*(1-D),h[8]=_*D*(1-U),h[9]=_*D*U,h[10]=y*(1-A),h[11]=y*A,v?(h[12]=v*(1-D),h[13]=v*D*(1-U),h[14]=v*D*U):s>js.length&&h.fill(0,js.length),u.sort((ne,ue)=>h[ue]-h[ne]);let re=h[u[0]]+h[u[1]]+h[u[2]]+h[u[3]];for(let ne=0;ne<4;ne++){let ue=d*4+ne;c[ue]=u[ne],l[ue]=h[u[ne]]/re}}r.setAttribute("skinIndex",new Ui(c,4)),r.setAttribute("skinWeight",new Ee(l,4))}function d0(r){let e=r.attributes.position,t=-.086;for(let n=0;n<e.count;n++){let i=e.getX(n),s=e.getY(n),a=e.getZ(n),o=i-t,c=Math.abs(o),l=o<0?-1:1,h=Q(s,.07,.14)*(1-Q(s,.195,.255)),u=Q(a,-.105,-.005),d=.175*h*u;i=t+o*(1-d);let p=Q(s,.19,.235)*(1-Q(s,.248,.282));i+=o*.085*p,a+=.0045*p*Q(a,.035,.115);let g=Q(s,.006,.035)*(1-Q(s,.095,.145))*Q(a,.035,.075)*Q(c,.003,.016)*(1-Q(c,.036,.058));i+=l*.0038*g;let m=(1-Q(a,-.035,.065))*(1-Q(c,.038,.08)),_=Q(s,.195,.24)*(1-Q(s,.258,.295))*m;a+=.011*_;let v=Q(s,.135,.18)*(1-Q(s,.195,.232))*(1-Q(a,-.075,.015));a-=.006*v;let y=Q(s,.105,.155)*(1-Q(s,.185,.232))*Q(a,.082,.135);a-=.014*y;let x=Q(s,.08,.112)*(1-Q(s,.128,.165))*Q(a,.025,.075)*(1-Q(a,.09,.125))*Q(c,.018,.045);a-=.008*x;let S=(1-Q(s,.018,.062))*Q(a,.055,.095)*(1-Q(c,.04,.062));a+=.005*S;let b=Q(s,.038,.078)*(1-Q(s,.105,.145))*Q(a,-.065,-.005)*(1-Q(a,.025,.065))*Q(c,.028,.058);a-=.01*b,s+=.005*b;let A=(1-Q(s,.028,.062))*Q(a,-.085,-.01)*(1-Q(a,.03,.068))*Q(c,.032,.056);a-=.013*A,e.setXYZ(n,i,Math.max(s,.001),a)}r.computeVertexNormals()}async function bo(r=!1,e=!1,t=!1,n=!1,i=!1,s=!1){let a=n?"shiba-scan.glb":r?"golden-retriever.glb":"puppy.glb",c=(await new xo().loadAsync(en(a))).scene.getObjectByProperty("isMesh",!0),l=c.geometry;n?(l.scale(.004304,.004304,.004304),l.translate(-.08569,.00199,-.04472),d0(l)):r&&(l.scale(.214,.214,.214),l.translate(-.058,.20441,.024),Yd(l,Zd));let h=n?s0:r?Zd:Ah,u=n?a0:r?c0:Rh,{lipSides:d,exteriorCount:p}=n?{lipSides:new Int8Array(l.attributes.position.count),exteriorCount:l.index.count}:qd(l,h,u),f=r?js.concat(n0):js;u0(l,d,n?o0:r?l0:h0,h,u,f.length,n);let g=n?r0:r?i0:{},m=new Map;for(let[O,J,k]of f){let $=g[O]??k,K=new rr;if(K.name=O,K.position.set(...$),J){let ee=m.get(J);K.position.sub(ee.bindPosition),ee.joint.add(K)}m.set(O,{joint:K,bindPosition:new M(...$)})}let _=t&&!e&&!n?{contact:{value:new $e},stroke:{value:new M}}:null,v=n?e?new gn({color:"#b7b0a8",roughness:.86,side:c.material.side}):Wd(new st({map:c.material.map??c.material.emissiveMap,color:"#ffffff",roughness:.88,side:c.material.side,specularIntensity:.32,clearcoat:1,clearcoatRoughness:.05,sheen:.5,sheenColor:new we("#f5d2ab"),sheenRoughness:.65,envMapIntensity:.65})):Th(new st({map:e?null:c.material.map??c.material.emissiveMap,color:e?"#b8b6b2":s?"#ffffff":r?"#f6ebd8":"#ffffff",roughness:s?.8:r?.84:.92,side:c.material.side,specularIntensity:s?.16:r?.28:.23,clearcoat:s?1:0,clearcoatRoughness:.05,sheen:r&&!e?s?.44:.54:0,sheenColor:new we(s?"#525862":"#f7d8a8"),sheenRoughness:s?.72:.56,envMapIntensity:s?.54:r?.56:.48}),null,r&&!e,_,s);v.map&&(v.map.anisotropy=8);let y=n?null:new gn({color:e?"#353535":s?"#221515":r?"#41292a":"#28171a",side:zi,roughness:.98,envMapIntensity:.23}),x=new Ni(l,n?v:[v,y]);x.name="Puppy",x.castShadow=!0,x.receiveShadow=!1,x.frustumCulled=!1,x.add(m.get("body").joint),x.updateMatrixWorld(!0),x.bind(new qr([...m.values()].map(O=>O.joint)));let S=e?null:Xd(x,v.map,p,n?!1:r,_,n,s),b=O=>m.get(O).joint,A=null;if(s&&!e){let O=m.get("head").bindPosition,J=.0068,k=new Mt(J,20,12,0,Math.PI*2,0,Math.PI*.38),$=new st({color:"#ffffff",transparent:!0,opacity:.16,roughness:.04,metalness:0,ior:1.45,clearcoat:1,clearcoatRoughness:.02,reflectivity:1,envMapIntensity:3.8,depthWrite:!1}),K=new Mt(.0012,10,8),ee=new Et({color:"#ffffff",transparent:!0,opacity:.94,depthWrite:!1}),ce=new M(0,1,0);for(let[ge,de,he]of[[[-.107,.3776,.1649],[-.568,.013,.823],-1],[[-.053,.3742,.1629],[.696,-.12,.708],1]]){let ae=new M(...ge),Le=new M(...de).normalize(),Se=new Xe(k,$);Se.position.copy(ae).addScaledVector(Le,-(J-6e-4)).sub(O),Se.quaternion.setFromUnitVectors(ce,Le),Se.renderOrder=2;let le=new Xe(K,ee);le.position.set(he*.0014,J-2e-4,.0016),le.renderOrder=3,Se.add(le),b("head").add(Se)}}if(n&&!e){let O=m.get("head").bindPosition,J=new st({color:"#ffffff",transparent:!0,opacity:.15,roughness:.02,metalness:0,ior:1.44,clearcoat:1,clearcoatRoughness:.02,reflectivity:1,envMapIntensity:2.6,depthWrite:!1}),k=new Mt(.0076,20,14);k.scale(1,.92,.78);for(let[ce,ge,de,he]of[[-.1097,.323,.1764,-.28],[-.0623,.323,.1764,.28]]){let ae=new Xe(k,J);ae.position.set(ce-O.x,ge-O.y,de-O.z),ae.rotation.y=he,b("head").add(ae)}let $=new gn({color:"#2a201a",roughness:.45,transparent:!0,opacity:.62}),K=new sn;K.name="Shiba whiskers";let ee=(ce,ge,de,he)=>{let ae=new Zr(new M(...ce).sub(O),new M(...ge).sub(O),new M(...de).sub(O)),Le=new ci(ae,6,he,4,!1);K.add(new Xe(Le,$))};for(let ce of[-1,1]){for(let[he,ae,Le,Se,le]of[[.294,.196,.034,-.004,-.008],[.291,.197,.038,-.009,-.011],[.289,.195,.035,-.013,-.013],[.293,.192,.031,-.006,-.016],[.287,.192,.028,-.014,-.015]]){let me=-.086+ce*.014;ee([me,he,ae],[me+ce*Le*.55,he+Se*.35,ae+le*.45],[me+ce*Le,he+Se,ae+le],22e-5)}let de=-.086+ce*.016;ee([de,.331,.177],[de+ce*.009,.341,.175],[de+ce*.018,.347,.17],2e-4),ee([de+ce*.004,.332,.176],[de+ce*.013,.341,.173],[de+ce*.022,.345,.167],18e-5)}b("head").add(K)}let C=b("jaw"),I=b("head");n&&I.scale.setScalar(.93);let U=b("neck"),D=b("chest"),H=I.position.clone(),V=U.position.clone(),P=n?-.086:t?-.074:-.063,W=n?.201:t?.196:.19,X=h(P,W),ie=new M(P,X,W).sub(m.get("head").bindPosition),re=new M(P,X,W).sub(m.get("jaw").bindPosition),ne=new M,ue=new M,Y=new M,Z=new xt,xe=r?[Ch(b("shoulder"),b("elbow"),b("wrist"),n?.032:void 0,n?.024:void 0),Ch(b("nearShoulder"),b("nearElbow"),b("nearWrist"),n?.032:void 0,n?.024:void 0)]:[],ve=new M(...r?[-.079,.324,.202]:[-.071,.272,.205]).sub(m.get("jaw").bindPosition);function se(O,J,k,$,K){return Q(O,J,k)*(1-Q(O,$,K))}let R=D.position.clone(),T=new M,F=new M;function z(O,J,k){O.worldToLocal(N(ue)),O.worldToLocal(F.copy(T));let $=ue,K=F,ee=Math.atan2($.z*K.x-$.x*K.z,$.z*K.z+$.x*K.x),ce=Math.atan2($.y*K.z-$.z*K.y,$.y*K.y+$.z*K.z);O.rotation.y=je.clamp(O.rotation.y+.65*ee,-k,k),O.rotation.x=je.clamp(O.rotation.x+.65*ce,-.055,J)}function L(O,J){T.copy(N(ue)).lerp(O,J);for(let k=0;k<4;k++)z(D,.64,.1),z(U,.78,.22),z(I,.68,.28);Y.subVectors(T,N(ue)),Y.applyQuaternion(D.parent.getWorldQuaternion(Z).invert()),Y.x=je.clamp(Y.x,-.024,.024),D.position.add(Y.clampLength(0,.055))}function B(O,J,k,$,K,ee=null,ce=null,ge=!1){let de=$?0:1,he=Math.sin(O*3.7)*.008*de,ae=J??-1,{contact:Le,grip:Se,lift:le}=Yn,me=r?Le:Rn,De=1-Q(ae,r?3.49:2.69,r?4.06:3.25),_e=1-.77*Q(ae,r?le:Rn+.04,r?2.04:1.55),Re=Q(ae,.22,r?1.18:1.14)*_e*De,Ae=Q(ae,.36,me)*_e*De,gt=Q(ae,.48,me)*_e*De,at=se(ae,0,.21,.31,.61),ot=se(ae,.68,.79,.83,.96),et=r?Ph(.26*se(ae,.99,1.19,1.27,Se),.116,Q(ae,1.27,Se))*(1-Q(ae,1.76,1.96)):se(ae,Rn-.11,Rn-.01,Rn+.025,Rn+.115),Rt=r?Yn.chews.reduce((Me,{open:Ce,peak:Ne,close:He,end:Oe,weight:Ge})=>Me+se(ae,Ce,Ne,He,Oe)*Ge,0):se(ae,Kd,1.59,1.65,1.84)+se(ae,1.93,2.035,2.075,2.23)*.92+se(ae,2.32,2.43,2.46,2.6)*.69,G=r?se(ae,1.74,2.13,3.22,4.04):se(ae,1.23,1.55,2.6,3.22),Ye=r?se(ae,3.35,3.47,3.54,3.74):se(ae,2.63,2.72,2.76,2.9),ut=r?Q(ae,.54,1.31)*(1-Q(ae,1.69,2.19)):gt,Be=k===null?0:Q(k,.12,.88)*(1-Q(k,2.47,3.19)),Ct=Be*Math.sin(Math.max(0,(k??0)-.65)*10.8)*de,Nt=k===null?0:Q(k,0,.48),Jt=de&&t&&ee!==null?1-Q(ae,0,.24):0,dt=ee??0,pt=Jt*se(dt,0,.18,1.1,Xs),vt=Jt*se(dt,0,.23,.53,1.39),zt=Jt*se(dt,.14,.31,.76,1.34),vn=(dt-.14)*Math.PI*3.2,Ht=zt*Math.sin(vn),In=zt*Math.sin(vn-.7),Zn=de&&t&&J===null&&k===null?.045*Math.sin(O*1.2):0,kn=t&&!ge&&k===null?1-Q(ae,.15,.67)+Q(ae,3.48,4.06):0,kt=J===null&&k===null?(ce?.strength??0)*de:0,_n=n&&!ge?.13*(1-Q(ae,.12,.83)*De):0,$t=r&&k===null?Math.max(Jt*se(dt,.15,.42,1.22,Xs),.82*kt):0,Xt=n&&ge==="smile"?1:0,Dt=n&&ge==="chew"?1:0,E=ge==="pant"?.91:ge==="smile"?.24:$t;D.position.set(R.x,R.y-(n?.038:r?.067:.053)*Re+(n?.006*E:0),R.z+(n?.028:r?.022:.052)*Re+(n?.005*E:0)),D.rotation.set((n?.4:r?.55:.48)*Re+he*(1-Ae)-.039*Nt-(n?.055*E:0),0,.077*Be);let j=n?-.12*(1-Ae):0;if(b("neck").rotation.set(j+(n?.5:r?.4:.34)*Ae-.034*Ye-.035*Nt-.05*Xt+.04*E,-.095*at+.05*Be+.045*Ht+.06*Xt-.04*Dt,-.013*de*Math.sin(O*1.7)*(1-Ae)+.04*Xt),b("head").rotation.set(-j*.96+(n?.42:r?.25:.206)*gt+.086*at+.027*ot+.004*Rt-.06*Nt+(n?.075:.15)*kn-.13*vt-.065*kt-.08*Xt+.05*E+.06*Dt,.105*G+.051*Math.sin(O*1.34)*(1-Ae)*de-.055*kn+.25*Ht+.075*kt+_n+.05*Xt,-.085*Nt+.04*Ct+Zn-.065*Ht+.2*kt+.12*Xt-.07*Dt),C.rotation.x=n?et*.42+.18*Rt+(.22+.022*Math.sin(O*12))*E+.04*Xt:(r?et:.155*et)+(r?.28:.332)*Rt+.014*Nt+.185*$t,C.rotation.y=-.012*Rt,A){let Me=(O+.46)%4.63,Ce=Math.max(se(Me,.19,.28,.3,.43),.72*se(Me,.62,.68,.7,.81)),Ne=ge==="smile"?1:Math.max(pt,.62*kt);A(de*Ce,Ne,C.rotation.x)}let te=n?.22*E-.08*Xt:0,oe=n?.18*E-.05*Xt:0;if(b("earOutside").rotation.set(-.084*ut-.024*ot+.032*$t-te,0,.036*Ct+.021*ut+.095*In-.052*$t+oe),b("earInside").rotation.set(-.098*ut-.019*ot+.028*$t-te,0,-.036*Ct-.018*ut+.083*In+.044*$t-oe),b("shoulder").position.y=(r?.18:.178)+.012*Be,b("shoulder").rotation.set(-.58*Be,.13*Be,-.14*Be),b("elbow").rotation.set(-1.16*Be-.25*Ct,0,.1*Ct),b("wrist").rotation.set(.58*Be+.25*Ct,0,.21*Ct),r){for(let Ce of xe)Ce(Re);I.position.copy(H),U.position.copy(V);let Me=K?se(ae,.89,Le,le,n?1.8:1.88):0;if(Me&&n)L(K,Me);else if(Me){N(ue),Y.subVectors(K,ue).clampLength(0,t?.068:.058).multiplyScalar(Me);let Ce=U.parent.getWorldQuaternion(Z).invert();U.position.addScaledVector(Y.applyQuaternion(Ce),.47),N(ue);let Ne=I.parent.getWorldQuaternion(Z).invert();Y.subVectors(K,ue).clampLength(0,t?.052:.042),I.position.addScaledVector(Y.applyQuaternion(Ne),Math.min(1,Me*1.17))}U.position.y+=.0042*Ye,U.position.z-=.0035*Ye}let q=dt*Math.PI*5.2,fe=(.17+.045*Ae+.27*kt)*Math.sin(O*6.5)*de,ye=n?.61:1;b("tailBase").rotation.set(0,ye*(fe*(1-pt)+.62*pt*Math.sin(q)),ye*(.077*Nt+pt*(.24+.13*Math.sin(q-.32))+.1*kt)),b("tailTip").rotation.set(0,ye*(.14*(1-pt)*Math.sin(O*6.3-.65)*de+.4*pt*Math.sin(q-.85)),ye*pt*(.08+.1*Math.sin(q-.97))),S?.value.set(O,de*(.19+.57*ut+.72*pt)),_&&ce&&(_.contact.value.set(ce.point.x,ce.point.y,ce.point.z,ce.strength*($?.4:1)),_.stroke.value.copy(ce.stroke))}function w(O){return C.localToWorld(O.copy(ve))}function N(O){return I.localToWorld(O.copy(ie)),C.localToWorld(ne.copy(re)),O.lerp(ne,.52)}return{mesh:x,pose:B,mouthPosition:w,gripPosition:N,skull:I}}var tp=[["carrot","\u80E1\u841D\u535C"],["chicken","\u9E21\u8089"],["blueberry","\u84DD\u8393"],["radish","\u767D\u841D\u535C"],["broccoli","\u897F\u5170\u82B1"],["strawberry","\u8349\u8393"],["cherry","\u8F66\u5398\u5B50"],["pork","\u732A\u8089"],["steak","\u725B\u6392"],["shrimp","\u867E"],["lamb","\u7F8A\u6392"],["kibble","\u72D7\u7CAE"],["pumpkin","\u719F\u5357\u74DC"],["sweetpotato","\u719F\u7EA2\u85AF"],["rice","\u767D\u7C73\u996D"],["apple","\u53BB\u6838\u82F9\u679C"],["cucumber","\u9EC4\u74DC"],["greenbean","\u719F\u56DB\u5B63\u8C46"]],np={carrot:.052,chicken:.061,blueberry:.034,radish:.06,broccoli:.057,strawberry:.051,cherry:.031,pork:.059,steak:.064,shrimp:.062,lamb:.06,kibble:.042,pumpkin:.052,sweetpotato:.048,rice:.044,apple:.052,cucumber:.046,greenbean:.052},{sin:Fe,cos:Bt,PI:So,abs:qs,sqrt:ip,atan2:vi,hypot:Vi}=Math,Kt=je.clamp,Pe=je.smoothstep,Ie=r=>new we(r),Ys=2.399963,p0=Ie("#ffffff"),Jd={meat:{key:"meat",freq:[28,18,9],bump:.0042,speck:.075,wet:.24,sss:[.42,.12,.06],sssAmp:.08},juicy:{key:"juicy",freq:[24,24,24],bump:.0026,speck:.055,wet:.32,sss:[.85,.28,.16],sssAmp:.16},crisp:{key:"crisp",freq:[32,22,32],bump:.0022,speck:.045,wet:.28,sss:[.75,.82,.52],sssAmp:.14},root:{key:"root",freq:[26,20,26],bump:.0028,speck:.06,wet:.22,sss:[.92,.45,.14],sssAmp:.14},starchy:{key:"starchy",freq:[34,34,34],bump:.0038,speck:.065,wet:.1,sss:[.95,.58,.18],sssAmp:.1},bloom:{key:"bloom",freq:[16,16,16],bump:.0016,speck:.085,wet:.08,sss:[.22,.25,.48],sssAmp:.05},berry:{key:"berry",freq:[22,22,22],bump:.001,speck:.03,wet:.36,sss:[.72,.08,.12],sssAmp:.15},floret:{key:"floret",freq:[48,48,48],bump:.0055,speck:.09,wet:.06,sss:[.35,.58,.16],sssAmp:.08},baked:{key:"baked",freq:[52,52,52],bump:.0065,speck:.105,wet:.08,sss:[.28,.16,.08],sssAmp:.02},starch:{key:"starch",freq:[22,22,22],bump:.0012,speck:.028,wet:.34,sss:[.96,.92,.8],sssAmp:.14},shell:{key:"shell",freq:[24,24,24],bump:.002,speck:.048,wet:.3,sss:[.95,.48,.32],sssAmp:.18},pod:{key:"pod",freq:[18,36,18],bump:.0022,speck:.05,wet:.24,sss:[.42,.72,.2],sssAmp:.12},leaf:{key:"leaf",freq:[26,26,26],bump:.0024,speck:.055,wet:.1,sss:[.32,.62,.16],sssAmp:.1}};function f0(r,e="crisp"){let t=Jd[e]??Jd.crisp;return r.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        #include <dithering_fragment>`)},r.customProgramCacheKey=()=>"food-pbr-"+t.key,r}function Cn(r,e){let t=r.attributes.position,n=new Float32Array(t.count*3);for(let i=0;i<t.count;i++){let s=e(t.getX(i),t.getY(i),t.getZ(i));n[i*3]=s.r,n[i*3+1]=s.g,n[i*3+2]=s.b}return r.setAttribute("color",new yt(n,3)),r}function gi(r){return r.attributes.uv&&r.deleteAttribute("uv"),r.index||r.setIndex(Array.from({length:r.attributes.position.count},(e,t)=>t)),r.attributes.normal||r.computeVertexNormals(),r}function on(r,e){return Fe(37*r+17*e)*Fe(41*e-12*r)*.57+Fe(95*r-121*e)*.19}function rp(r){let e=new Kr;for(let t=0;t<r.length;t++){let[n,i]=r[t],[s,a]=r[(t+1)%r.length],o=[(n+s)/2,(i+a)/2];t===0?e.moveTo(...o):e.quadraticCurveTo(n,i,...o)}return e.quadraticCurveTo(...r[0],(r[0][0]+r[1][0])/2,(r[0][1]+r[1][1])/2),e}function Gi(r,e,t,n=(s,a)=>on(s,a)*.007,i=72){let s=rp(r).getSpacedPoints(i).slice(0,-1);Xn.isClockWise(s)||s.reverse();let a=[],o=[],c=[],l=s.length,h=[...Array.from({length:24},(d,p)=>[.003+p*.0405,"cut"]),[.975,"cut"],[.996,"bevel"],[1,"side"],[.978,"lowSide"],[.945,"base"],[.003,"base"]];for(let[d,p]of h)for(let f of s){let g=f.x*d,m=f.y*d,_=e(g,m,d)/2,v=p==="cut"?n(g,m):on(g,m)*.003,y=p==="cut"?_+v:p==="bevel"?_*.78+v:p==="side"?_*.2+v:p==="lowSide"?-_*.58+v:-_+v,x=t(g,m,d,p);a.push(g,y,m),o.push(x.r,x.g,x.b)}for(let d=1;d<h.length;d++)for(let p=0;p<l;p++){let f=(d-1)*l+p,g=(d-1)*l+(p+1)%l;c.push(f,g+l,g,f,f+l,g+l)}for(let d=1;d<l-1;d++){c.push(0,d,d+1);let p=(h.length-1)*l;c.push(p,p+d+1,p+d)}let u=new Qe;return u.setAttribute("position",new Ee(a,3)),u.setAttribute("color",new Ee(o,3)),u.setIndex(c),u.computeVertexNormals(),u}var sp={carrot:{points:[[-.9,-.12],[-.7,-.56],[-.25,-.74],[.24,-.76],[.68,-.48],[.86,-.08],[.78,.34],[.38,.66],[-.14,.74],[-.64,.5],[-.82,.22]],body:"#df5c16",core:"#f69b3a",cambium:"#c24610",skin:"#9d390e",thickness:(r,e)=>.28+.08*r+.06*e},radish:{points:[[-.9,-.24],[-.62,-.76],[-.06,-.88],[.52,-.75],[.86,-.36],[.88,.18],[.76,.64],[.24,.84],[-.34,.82],[-.78,.5],[-.92,.12]],body:"#ebe6d6",core:"#f8f6ef",cambium:"#ded9c8",skin:"#b4c29c",thickness:r=>.24+.04*r}};function m0(r,e){let{points:t,body:n,core:i,cambium:s,skin:a,thickness:o}=sp[e],c=Ie(n),l=Ie(i),h=Ie(s),u=Ie(a),d=e==="radish";r(Gi(t,o,(p,f,g,m)=>{let _=Vi(p+.04,f*.92),v=vi(f,p),y=1-Pe(_,.34,.44),x=Math.exp(-(((_-.42)/.055)**2)),S=Fe(v*(d?22:18)+_*7)*.045,b=Fe(_*32+.4*Fe(v*5))*.03,A=m!=="cut"?Pe(Fe(p*16+f*24),.65,.95)*.16:0,C=Pe(g,.89,1)*(d?.75:.55);return c.clone().lerp(l,y*.84+.06).lerp(h,x*(d?.32:.55)).lerp(u,m==="cut"?C:.92).multiplyScalar(1+S+b-A+on(p,f)*.06)},(p,f)=>on(p,f)*.006+Fe(Vi(p,f)*34)*.0025),{roughness:d?.36:.48,clearcoat:d?.38:.22,clearcoatRoughness:.22},[1,1,1],[0,0,0],d?"crisp":"root")}var ap={chicken:{points:[[-.96,-.08],[-.88,-.35],[-.62,-.52],[-.3,-.54],[-.06,-.48],[.18,-.58],[.44,-.42],[.62,-.34],[.88,-.1],[.82,.18],[.58,.3],[.42,.46],[.18,.54],[-.12,.48],[-.44,.54],[-.74,.4],[-.9,.24]],lean:"#d9b594",light:"#f4e0c6",edge:"#b67d52",fat:"#f6e7cf",thickness:(r,e)=>.32-.12*r+.045*Fe(6*e+2*r)+.012*Fe(17*r+9*e)},pork:{points:[[-.88,-.36],[-.58,-.58],[-.18,-.5],[.36,-.54],[.78,-.26],[.88,.06],[.68,.44],[.4,.54],[.02,.48],[-.38,.58],[-.72,.36],[-.82,.08]],lean:"#c28b74",light:"#e0b39d",edge:"#7a422b",fat:"#efe0c6",thickness:(r,e)=>.36+.04*r+.048*Bt(4*r-6*e)},steak:{points:[[-1,-.18],[-.86,-.48],[-.5,-.58],[-.22,-.48],[-.02,-.4],[.22,-.52],[.6,-.46],[.9,-.22],[.98,.04],[.84,.32],[.62,.52],[.18,.48],[-.16,.38],[-.5,.56],[-.74,.44],[-.92,.22]],lean:"#8f3f38",light:"#b85b4c",edge:"#3e2116",fat:"#e8d4b7",thickness:(r,e,t)=>(.38+.05*r+.065*e+.035*Fe(7*r+4*e))*(1-.14*Pe(t,.76,1))},lamb:{points:[[-.96,-.22],[-.78,-.52],[-.42,-.6],[-.08,-.46],[.34,-.34],[.76,-.04],[.96,.2],[.56,.42],[.22,.48],[-.04,.3],[-.34,.5],[-.66,.36],[-.86,.14]],lean:"#9a4f40",light:"#c47964",edge:"#4a2719",fat:"#efe1c9",thickness:(r,e)=>.4-.06*r+.046*Fe(8*e-5*r)}};function g0(r,e){let{points:t,lean:n,light:i,edge:s,fat:a,thickness:o}=ap[e],c=Ie(n),l=Ie(i),h=Ie(s),u=Ie(a),d=e==="chicken",p=e==="steak";function f(g,m){let _=m+.06*Fe(2.8*g)+.028*Fe(5.4*g+.7),v=_*42+1.3*Fe(_*12)+.28*Fe(g*9+m*7);return(.42+.58*Pe(Fe(_*16+g*1.3),-.55,.65))*(Fe(v)+.28*Fe(v*2.3))}r(Gi(t,o,(g,m,_,v)=>{let y=f(g,m)*(d?.32:.18),x=m-(.14+.12*Fe(4.2*g+.5)+.04*Fe(14*g)),S=m+(.22+.09*Bt(5.5*g-.4)),b=1-Pe(qs(x),.008,.052),A=(1-Pe(qs(S),.006,.036))*.65,C=d?0:Pe(_,.78,.95)*Pe(m,.1,.38)*.72,I=Kt((b+A)*(d?.08:.42)+C,0,.88),U=d?0:Pe(Fe((g*.85+m*.55)*14),.72,.96)*Pe(_,.15,.55)*.32,D=.48+.38*Pe(Fe(7*g+6*m)+.4*Bt(13*m),-.6,.8),H=v==="cut"?Pe(_,.84,1)*D*.85:Kt(D*1.05,0,1),V=p?(1-Pe(_,.2,.78))*.22:0;return c.clone().lerp(l,Kt(.52+y+.05*Fe(4*g+3*m)-V,0,1)).lerp(u,I).lerp(h,Kt(H*(d?.52:1)+U,0,.94))},(g,m)=>f(g,m)*(d?.012:.0085)),{roughness:d?.48:.52,clearcoat:d?.26:.24,clearcoatRoughness:.3},[1,1,1],[0,0,0],"meat")}var $d=[[-.76,-.36],[-.56,-.7],[-.22,-.74],[.02,-.62],[.3,-.72],[.64,-.58],[.78,-.3],[.66,.04],[.48,.34],[.22,.64],[.02,.84],[-.18,.68],[-.44,.42],[-.66,.1]],Qd=(r,e,t)=>(.22-.055*e+.016*Fe(5*r))*(1-.32*Pe(t,.7,1));function v0(r){let e=Ie("#d62431"),t=Ie("#ec444a"),n=Ie("#fae0d6"),i=Ie("#9e1422");r(Gi($d,Qd,(h,u,d,p)=>{let f=(1-Pe(qs(h-.01+.03*Fe(8*u)),.02,.42))*(1-Pe(qs(u+.06),.08,.58)),g=Math.exp(-(((Vi(h*1.3,u+.05)-.32)/.08)**2))*.35,m=Fe(vi(u+.16,h)*24+8*d)*.045;return e.clone().lerp(t,Pe(d,.45,.82)*.45).lerp(n,Kt(f*.88+g,0,.95)).lerp(i,p==="cut"?Pe(d,.76,1)*.55:.82).multiplyScalar(1+on(h,u)*.08+m)},(h,u)=>on(h,u)*.005),{roughness:.34,clearcoat:.52,clearcoatRoughness:.16},[1,1,1],[0,0,0],"juicy");let s=[];for(let[h,u]of rp($d).getSpacedPoints(24).slice(0,-1).entries()){let d=.9-.05*Fe(h*Ys),p=u.x*d,f=u.y*d;if(f<-.58)continue;let g=Cn(new Mt(1,8,6),()=>Ie(h%3?"#c99c48":"#edd07c"));g.scale(.016,.009,.026).rotateY(vi(p,f)).translate(p,Qd(p,f,d)/2+.004,f),s.push(gi(g))}r(Hi(s),{roughness:.72,clearcoat:.12},[1,1,1],[0,0,0],"baked");let a=[],o=Ie("#2d6124"),c=Ie("#578e38");for(let[h,u,d]of[[-1.05,.36,.14],[-.52,.42,.16],[0,.44,.17],[.52,.42,.16],[1.05,.36,.14]]){let p=Cn(new Mt(1,10,6),(f,g,m)=>o.clone().lerp(c,Kt(.45+m*.35+g*.4,0,1)));p.scale(d,.036,u).translate(0,0,-u*.45).rotateX(.18).rotateY(h).translate(.02,.055,-.64),a.push(gi(p))}let l=Cn(new zn(.032,.048,.22,8),(h,u)=>o.clone().lerp(c,.4+u*2));l.rotateX(1.38).translate(.02,.08,-.76),a.push(gi(l)),r(Hi(a),{roughness:.76,sheen:.22,sheenColor:Ie("#8db860")},[1,1,1],[0,0,0],"leaf")}function _0(){let r=[[0,-.48],[.28,-.46],[.48,-.36],[.62,-.22],[.68,-.02],[.65,.18],[.52,.34],[.34,.43],[.2,.44],[.14,.36],[.06,.31],[0,.31]],e=new ai(r.map(([a,o])=>new pe(a,o)),32),t=e.attributes.position;for(let a=0;a<t.count;a++){let o=t.getX(a),c=t.getY(a),l=t.getZ(a),h=vi(l,o),u=1+.035*Fe(3*h)+.022*Fe(5*h+2*c),d=(1-Pe(Vi(o,l),.14,.28))*Pe(c,.26,.42);t.setXYZ(a,o*u,c+.075*d*Bt(h*5),l*u*.95)}e.computeVertexNormals();let n=Ie("#1e254a"),i=Ie("#7c8eb8"),s=Ie("#2e2d48");return Cn(e,(a,o,c)=>{let l=Vi(a,c),h=Fe(16*a+9*o)*Fe(18*c-11*o)*.16+Fe(31*a+23*c)*.07,u=(1-Pe(l,.12,.24))*Pe(o,.24,.36),d=Pe(l,.18,.48);return n.clone().lerp(i,Kt((.48+o*.26+h)*d,.08,.82)).lerp(s,u*.75)})}function y0(r,e){if(e){let h=[];for(let[u,d,p]of[[[-.42,-.02,.22],[.22,.4,-.18],.64],[[.44,-.04,.18],[-.18,2.1,.26],.6],[[.02,0,-.44],[.32,-1.2,.12],.62]]){let f=_0();f.scale(p,p,p).rotateX(d[0]).rotateY(d[1]).rotateZ(d[2]).translate(...u),h.push(gi(f))}r(Hi(h),{roughness:.78,clearcoat:.06,sheen:.45,sheenColor:Ie("#a5b8de"),sheenRoughness:.72},[1,1,1],[0,0,0],"bloom");return}let t=[[0,-.42],[.3,-.4],[.52,-.32],[.7,-.12],[.75,.1],[.65,.28],[.46,.34],[.24,.3],[.12,.19],[.05,.16],[0,.16]],n=new ai(t.map(([h,u])=>new pe(h,u)),40),i=n.attributes.position;for(let h=0;h<i.count;h++){let u=i.getX(h),d=i.getY(h),p=i.getZ(h),f=-.04*Math.exp(-((u*4)**2))*Pe(p,.1,.7);i.setXYZ(h,u*1.04,d,p*.94+f)}n.computeVertexNormals();let s=Ie("#4e0916"),a=Ie("#9e1428"),o=Ie("#c42a3b");r(Cn(n,(h,u,d)=>s.clone().lerp(a,Kt(.48+u*.45+d*.22,0,1)).lerp(o,Pe(u,.05,.32)*.35)),{roughness:.16,clearcoat:.95,clearcoatRoughness:.06},[1,1,1],[0,0,0],"berry");let c=new Di([new M(0,.17,0),new M(.06,.52,-.04),new M(.22,.86,-.1)]),l=Cn(new ci(c,12,.036,8,!1),(h,u)=>Ie("#4f732c").lerp(Ie("#6b8f38"),Kt(u,0,1)));r(l,{roughness:.72},[1,1,1],[0,0,0],"leaf")}function ep(r,e,t,n,i){let s=new M(...e),a=new M(...t),o=new zn(i,n,s.distanceTo(a),10,4),c=o.attributes.position;for(let u=0;u<c.count;u++){let d=c.getX(u),p=c.getY(u),f=c.getZ(u),g=1+.07*Bt(vi(f,d)*6);c.setXYZ(u,d*g,p,f*g)}o.computeVertexNormals();let l=Ie("#b5c982"),h=Ie("#62843a");Cn(o,(u,d,p)=>l.clone().lerp(h,Kt(.22+Fe(vi(p,u)*6)*.12+d*.42,0,1))),o.applyQuaternion(new xt().setFromUnitVectors(new M(0,1,0),a.clone().sub(s).normalize())),o.translate(...s.add(a).multiplyScalar(.5).toArray()),r(gi(o))}function x0(r){let e=[],t=o=>e.push(gi(o));ep(t,[.06,-.14,-.94],[.02,0,-.22],.175,.135);let n=[{at:[-.4,.04,.12],size:[.36,.32,.35],buds:28},{at:[.08,.17,.34],size:[.44,.39,.4],buds:42},{at:[.48,.02,.02],size:[.31,.27,.32],buds:22},{at:[-.1,-.04,.48],size:[.26,.23,.26],buds:18}],i=Ie("#3a612a"),s=Ie("#1c361a"),a=Ie("#719442");for(let{at:o,size:c,buds:l}of n){ep(t,[.02,-.01,-.3],[o[0],o[1]-.09,o[2]],.102,.054);let h=new Mt(1,36,20),u=h.attributes.position;for(let d=0;d<u.count;d++){let p=u.getX(d),f=u.getY(d),g=u.getZ(d),m=.95+.072*Fe(7*p+3*f)*Fe(7*g-2*p)+.036*Bt(18*p+9*g)*Fe(16*f-11*g)+.018*Fe(42*p)*Bt(34*g+15*f);u.setXYZ(d,p*m,f*m,g*m)}h.computeVertexNormals(),Cn(h,(d,p,f)=>i.clone().lerp(s,Kt((.68-p)*.48,0,.72)).lerp(a,Kt((p+.18)*.36+.16*Fe(d*15+f*9)*Bt(p*11-f*8),0,.68))),h.scale(...c).translate(...o),t(h);for(let d=0;d<l;d++){let p=.06+.9*(d+.5)/l,f=ip(Math.max(0,1-p*p)),g=f*Bt(d*Ys),m=f*Fe(d*Ys),_=.046+.02*Bt(d*2.7+o[0]),v=new oi(_,1);Cn(v,(y,x)=>i.clone().lerp(a,Kt(.28+p*.38+.14*Bt(d*2)+x*.35,0,1))),t(v.scale(1,.76,1).translate(o[0]+g*c[0]*.95,o[1]+p*c[1]*.97,o[2]+m*c[2]*.94))}}r(Hi(e).rotateY(-2.26),{roughness:.88,sheen:.25,sheenColor:Ie("#8db35c")},[1,1,1],[0,0,0],"floret")}function M0(r){let e=new Di([new M(-.62,-.01,-.27),new M(-.48,.05,.29),new M(-.05,.07,.55),new M(.4,.03,.36),new M(.54,-.04,-.16)]),t=96,n=new ci(e,t,.265,20,!1),i=n.attributes.position,s=Ie("#f7dfd0"),a=Ie("#e26f48"),o=Ie("#c43f26"),c=[];for(let g=0;g<i.count;g++){let m=Math.floor(g/21)/t,_=e.getPointAt(m),v=new M().fromBufferAttribute(i,g).sub(_),y=6.28*m+.32*m*m+.07*Bt(v.y*12),x=y-Math.floor(y),S=Pe(x,.04,.16)*(1-Pe(x,.2,.92)),b=Pe(x,.12,.32)*(1-Pe(x,.45,.72)),A=1-Pe(x,.02,.14)+Pe(x,.92,1),C=(1-.62*m)*(.9+.14*S)*(.22+.78*Pe(m,0,.06)),I=Pe(v.y,-.08,.18),U=s.clone().lerp(a,Kt(.22+I*.68+S*.18,0,1)).lerp(o,Kt(b*I*.68+A*.25+Pe(m,.82,1)*.28,0,.82));c.push(U.r,U.g,U.b),v.multiplyScalar(C).add(_),i.setXYZ(g,v.x,v.y,v.z)}n.computeVertexNormals(),n.setAttribute("color",new Ee(c,3)),r(n,{roughness:.34,clearcoat:.52,clearcoatRoughness:.16},[1,1,1],[0,0,0],"shell");let l=e.getPointAt(1),h=e.getTangentAt(1),u=vi(-h.x,-h.z),d=Ie("#b83824"),p=Ie("#ee8052"),f=[[-.04,.051],[-.11,-.08],[-.16,-.238],[-.088,-.37],[.031,-.4],[.132,-.3],[.12,-.145],[.052,.046]];for(let g of[-.72,0,.69]){let m=Gi(f,(_,v)=>.03+.034*Pe(v,-.32,.03),(_,v,y)=>d.clone().lerp(p,.16+.5*y+.14*Bt(_*26)),void 0,36);m.rotateX(.24).rotateY(u+g).translate(l.x,l.y+(g===0?.013:0),l.z),r(m,{roughness:.36,clearcoat:.42},[1,1,1],[0,0,0],"shell")}}function b0(r){let e=[[-.76,-.38],[-.4,-.72],[.18,-.78],[.7,-.52],[.82,-.02],[.66,.44],[.18,.68],[-.4,.64],[-.78,.28]],t=Ie("#265222"),n=Ie("#c6e39b"),i=Ie("#e9f5c8"),s=Ie("#f7f4dc");r(Gi(e,(a,o,c)=>(.22+.03*a)*(1-.14*Pe(c,.82,1)),(a,o,c,l)=>{let h=Vi(a,o*1.06),u=vi(o,a),d=.46+.08*Bt(u*3+.4),p=1-Pe(h,d-.1,d+.06),f=(u+So)%(2*So/3)-So/3,g=Math.exp(-(((h-.26)/.085)**2)-(f/.26)**2)*Pe(h,.08,.18),m=l!=="cut"?.08*Bt(u*14):0,_=l==="cut"?Pe(c,.86,1)*.92:.95;return n.clone().lerp(i,p*.78).lerp(s,g*.75).lerp(t,_).multiplyScalar(1+m+on(a,o)*.04)},(a,o)=>on(a,o)*.004-.004*(1-Pe(Vi(a,o),.35,.52))),{roughness:.28,clearcoat:.56,clearcoatRoughness:.14},[1,1,1],[0,0,0],"crisp")}function S0(r){let e=[[-.94,.06],[-.56,-.42],[-.02,-.64],[.56,-.54],[.88,-.16],[.58,.16],[.06,.34],[-.54,.26]],t=Ie("#f6e6bc"),n=Ie("#fff7dc"),i=Ie("#b82528"),s=Ie("#d96842");r(Gi(e,(a,o)=>.14+.32*(1-Pe(o,-.55,.32)),(a,o,c,l)=>{let h=Pe(-o,.12,.48)*Pe(c,.84,1),u=i.clone().lerp(s,.32+.28*Fe(a*7+o*5)),p=l!=="cut"&&o<.12?.94:h*.88;return t.clone().lerp(n,(1-Pe(c,.15,.78))*.68).lerp(u,p).multiplyScalar(1+on(a,o)*.04)},(a,o)=>on(a,o)*.004),{roughness:.32,clearcoat:.48,clearcoatRoughness:.16},[1,1,1],[0,0,0],"crisp")}function E0(r){let e=[[-.82,-.46],[-.1,-.64],[.68,-.34],[.62,.12],[.44,.58],[-.42,.64],[-.66,.22]],t=Ie("#e87f1e"),n=Ie("#f9b446"),i=Ie("#294524"),s=Ie("#58753e");r(Gi(e,(a,o,c)=>.38*(1+.14*a-.14*Pe(c,.78,1)),(a,o,c,l)=>{let h=l!=="cut"&&o<-.1||l==="cut"&&Pe(c,.86,1)*Pe(-o,.15,.48)>.25,u=i.clone().lerp(s,Pe(Fe(a*14+o*9),.2,.8)*.55),d=h?l==="cut"?Pe(c,.86,1)*Pe(-o,.15,.48)*.9:.92:0;return t.clone().lerp(n,(1-Pe(c,.15,.75))*.62).lerp(u,d).multiplyScalar(1+on(a,o)*.07)},(a,o)=>on(a,o)*.009),{roughness:.64,clearcoat:.14,clearcoatRoughness:.35},[1,1,1],[0,0,0],"starchy")}function w0(r){let e=[[-.82,-.22],[-.48,-.54],[.2,-.58],[.74,-.26],[.68,.3],[.24,.54],[-.38,.48],[-.8,.24]],t=Ie("#e58d2e"),n=Ie("#f8c262"),i=Ie("#782d38"),s=Ie("#c46822");r(Gi(e,(a,o,c)=>.42*(1+.1*a-.15*Pe(c,.78,1)),(a,o,c,l)=>{let h=l==="cut"?Pe(c,.87,1)*.82:.94,u=Pe(c,.55,.88)*.28;return t.clone().lerp(n,(1-Pe(c,.12,.7))*.68).lerp(s,u).lerp(i,h).multiplyScalar(1+on(a,o)*.07)},(a,o)=>on(a,o)*.008),{roughness:.56,clearcoat:.2,clearcoatRoughness:.3},[1,1,1],[0,0,0],"starchy")}function T0(r){let e=["#7b4b2f","#663d26","#8a5534","#72442a"],t=[],n=[[-.52,-.08,.2,.3],[.48,-.09,.18,.29],[.12,-.1,-.46,.31],[-.34,-.09,-.36,.28],[.54,-.08,-.28,.27],[-.06,-.08,.48,.29],[-.2,.13,-.06,.3],[.22,.12,.16,.28],[.04,.14,-.28,.26]];for(let[i,[s,a,o,c]]of n.entries()){let l=new Mt(c,14,10),h=l.attributes.position;for(let d=0;d<h.count;d++){let p=h.getX(d),f=h.getY(d),g=h.getZ(d),m=vi(g,p),_=Vi(p,g)/c,v=1+.1*Bt(m*3+i)+.04*Fe(m*5),y=1-.22*Math.exp(-((_*2.4)**2)),x=1+.05*Fe(p*38+g*29);h.setXYZ(d,p*v*x,f*.54*y,g*v*x)}l.computeVertexNormals();let u=Ie(e[i%e.length]);Cn(l,(d,p,f)=>u.clone().multiplyScalar(.92+.18*Pe(p,-.12,.12)+.1*on(d*3,f*3))),l.rotateY(i*Ys).rotateX(.15*Fe(i*2.1)).translate(s,a,o),t.push(gi(l))}r(Hi(t),{roughness:.88,clearcoat:.06,clearcoatRoughness:.55},[1,1,1],[0,0,0],"baked")}function A0(r){let e=[];for(let n=0;n<72;n++){let i=(n+.5)/72,s=.76*ip(i),a=n*Ys,o=.24*(1-i*.88)+.05*Fe(n*4.7),c=Cn(new Mt(1,8,6),(l,h)=>Ie(n%5===0?"#ede4d0":"#fcf8ee").multiplyScalar(.95+.07*h));c.scale(.19,.085,.078).rotateZ(.35*Fe(n*3.1)).rotateX(.28*Bt(n*2.3)).rotateY(a*.85+n).translate(s*Bt(a),o-.1,s*Fe(a)*.88),e.push(gi(c))}r(Hi(e),{roughness:.28,clearcoat:.58,clearcoatRoughness:.16},[1,1,1],[0,0,0],"starch")}function R0(r){let e=[],t=Ie("#3e6e24"),n=Ie("#6fa33c"),i=Ie("#8bb854");for(let[s,[a,o,c,l,h,u]]of[[-.34,-.06,-.08,.28,.06,.14],[-.04,.05,.04,.62,-.08,-.12],[.24,-.07,-.04,.95,.05,.11],[.12,-.05,.28,-.35,.04,-.1]].entries()){let d=new Di([new M(0,0,-.52),new M(u,.03,-.16),new M(u*.8,.02,.18),new M(0,-.01,.52)]),p=new ci(d,18,.125,10,!1),f=p.attributes.position;for(let g=0;g<f.count;g++){let m=Math.floor(g/11)/18,_=d.getPointAt(m),v=new M().fromBufferAttribute(f,g).sub(_),y=Pe(m,0,.14)*(1-Pe(m,.86,1))*.75+.25,x=1+.14*Fe(m*So*3.5);v.x*=.86*y*x,v.y*=1.05*y*x,f.setXYZ(g,_.x+v.x,_.y+v.y,_.z+v.z)}p.computeVertexNormals(),Cn(p,(g,m,_)=>t.clone().lerp(n,Kt(.45+m*2.5+.12*Fe(_*11),0,1)).lerp(i,Pe(qs(g),.08,.12)*.35)),p.rotateX(h).rotateY(l).translate(a,o,c),e.push(gi(p))}r(Hi(e),{roughness:.42,clearcoat:.34,clearcoatRoughness:.22},[1,1,1],[0,0,0],"pod")}function op(r,e){function t(n,i,s=[1,1,1],a=[0,0,0],o="crisp"){let c=f0(new st({color:p0,vertexColors:!!n.attributes.color,...i}),o),l=new Xe(n,c);return l.scale.set(...s),l.position.set(...a),l.castShadow=!0,l.receiveShadow=!0,e.add(l),l}sp[r]?m0(t,r):ap[r]?g0(t,r):r==="blueberry"||r==="cherry"?y0(t,r==="blueberry"):r==="strawberry"?v0(t):r==="broccoli"?x0(t):r==="shrimp"?M0(t):r==="cucumber"?b0(t):r==="apple"?S0(t):r==="pumpkin"?E0(t):r==="sweetpotato"?w0(t):r==="kibble"?T0(t):r==="rice"?A0(t):r==="greenbean"&&R0(t)}var Pn=.004,C0=.075,Ih=[[2,-2],[9,-9],[-6,9],[11,4],[-8,-3],[2,10],[-8,-9],[12,-3],[8,9],[-8,6],[1,-12],[0,0],[5,12],[7,5],[-4,-5]],Lh=[[0,0,0],[-.14,.31,.11],[.12,-.25,-.1]],cp=320,Zs=(r,e)=>r*128+e,P0=8;function I0(r,e){let t=new Map,n=new Ue().makeRotationFromEuler(e);n.scale(new M().setScalar(r.scale));let i=new Ue,s=new M;for(let a of r.shape.children){a.updateMatrix(),i.multiplyMatrices(n,a.matrix);let o=a.geometry.attributes.position,c=Array.from({length:o.count},(u,d)=>s.fromBufferAttribute(o,d).applyMatrix4(i).toArray()),l=a.geometry.index?.array,h=l?.length??c.length;for(let u=0;u<h;u+=3){let[d,p,f]=c[l?l[u]:u],[g,m,_]=c[l?l[u+1]:u+1],[v,y,x]=c[l?l[u+2]:u+2],S=g-d,b=_-f,A=v-d,C=x-f,I=S*C-b*A;if(Math.abs(I)<1e-10)continue;let U=Math.ceil(Math.min(d,g,v)/Pn),D=Math.floor(Math.max(d,g,v)/Pn),H=Math.ceil(Math.min(f,_,x)/Pn),V=Math.floor(Math.max(f,_,x)/Pn);for(let P=U;P<=D;P++)for(let W=H;W<=V;W++){let X=P*Pn-d,ie=W*Pn-f,re=(X*C-ie*A)/I,ne=(S*ie-b*X)/I;if(re<-1e-4||ne<-1e-4||re+ne>1.0001)continue;let ue=p+re*(m-p)+ne*(y-p),Y=Zs(P,W),Z=t.get(Y);Z?(Z.low=Math.min(Z.low,ue),Z.high=Math.max(Z.high,ue)):t.set(Y,{x:P,z:W,low:ue,high:ue})}}}return[...t.values()]}function L0(r,e){let t=[],n=[],i=[],s=new Map,{x:a,z:o,height:c,contacts:l}=r;for(let{sample:d,contactHeight:p,height:f}of l){let g=c-p;g>=.011||(s.set(Zs(d.x,d.z),{index:t.length/3,receiver:f}),t.push(e.x+(a+d.x)*Pn,f+6e-4,e.z+(o+d.z)*Pn),n.push(.19,.15,.11,.24*(1-je.smoothstep(g,5e-4,.011))))}for(let{sample:d,ceramic:p}of l){let f=[[0,0],[0,1],[1,1],[1,0]].map(([x,S])=>s.get(Zs(d.x+x,d.z+S)));if(f.some(x=>!x))continue;let g=f.map(x=>x.receiver);if(Math.max(...g)-Math.min(...g)>(p?.005:.003))continue;let[m,_,v,y]=f.map(x=>x.index);i.push(m,_,v,m,v,y)}let h=new Qe;h.setAttribute("position",new Ee(t,3)),h.setAttribute("color",new Ee(n,4)),h.setIndex(i);let u=new Et({vertexColors:!0,transparent:!0,depthWrite:!1,toneMapped:!1});return new Xe(h,u)}function lp(r,e,t,n,i){let s=[],a=new Map;function o(l,h){if(s.length>=P0)return!1;let u=e(l);if(!u)return!1;let d=new Map,p=new Set;for(let v of s)for(let y of v.profile){let x=Zs(v.x+y.x,v.z+y.z);d.set(x,Math.max(d.get(x)??-1/0,v.position.y+y.high)),v.name==="blueberry"&&Math.hypot(y.x,y.z)<=2.5&&p.add(x)}let f;for(let v=0;v<Lh.length;v++){let y=(s.length+v)%Lh.length,[x,S,b]=Lh[y],A=new Zt(n.x+x,n.y+S,n.z+b),C=l+y;a.has(C)||a.set(C,I0(u,A));let I=a.get(C),U=Math.min(...I.map(D=>D.low));for(let D=0;D<Ih.length;D++){let[H,V]=Ih[(s.length+D)%Ih.length],P=-1/0,W=[],X=!1;for(let se of I){let R=Pn*Math.hypot(H+se.x,V+se.z);if(R>C0){P=1/0;break}let T=Zs(H+se.x,V+se.z),F=i+Math.max(0,R-.066)*1.45,z=Math.max(F,d.get(T)??-1/0),L=z-se.low;P=Math.max(P,L),W.push({sample:se,contactHeight:L,height:z,ceramic:z===F}),X||=p.has(T)}if(!Number.isFinite(P))continue;let ie=W.filter(se=>P-se.contactHeight<.0027),re=ie.reduce((se,{sample:R})=>se+R.x,0)/ie.length,ne=ie.reduce((se,{sample:R})=>se+R.z,0)/ie.length,ue=Pn*Math.hypot(re,ne),Y=ie.filter(se=>se.ceramic).length/ie.length,Z=l==="blueberry"&&H+V>9,xe=(1-Y)*(l==="shrimp"?.011:.005),ve=P+U+ue*.24+(X?.024:0)+xe-(Z?.006:0);if((!f||ve<f.score-8e-4)&&(f={x:H,z:V,height:P,score:ve,profile:I,restingRotation:A,contacts:W}),!s.length&&Y===1&&(l!=="blueberry"||Z)&&ue<.007)break}}if(!f)return!1;let g=new M(t.x+f.x*Pn,f.height,t.z+f.z*Pn),m=u.shape.clone(!0);m.visible=!0,m.scale.setScalar(u.scale),m.rotation.copy(f.restingRotation),m.position.copy(g),m.position.y+=.064;let _=L0(f,t);return _.visible=!1,r.add(m,_),s.push({name:l,mesh:m,shadow:_,position:g,profile:f.profile,x:f.x,z:f.z,droppedAt:h}),!0}function c(l,h){for(let u of s){if(u.shadow.visible=u.mesh.visible,!u.mesh.visible)continue;let d=h?1:je.clamp((l-u.droppedAt)/cp,0,1);u.mesh.position.y=u.position.y+.064*(1-d**2),u.shadow.material.opacity=je.smoothstep(d,.88,1)}}return{add:o,draw:c,size:()=>s.length,next:()=>s.at(-1),remove(l){s.at(-1)===l&&(r.remove(l.mesh,l.shadow),l.shadow.geometry.dispose(),l.shadow.material.dispose(),s.pop())},settledAt:()=>(s.at(-1)?.droppedAt??0)+cp}}var U0=3390,ns=je.smoothstep,hp={pumpkin(r,e){e(r,new Mt(1,32,20,0,Math.PI*1.45),"#345324",[1.04,.6,.79],[0,-.1,-.015]),e(r,new Mt(1,32,20,0,Math.PI*1.45),"#e89121",[.95,.57,.77])},carrot(r,e){let t=e(r,new zn(.83,.82,.27,36),"#ed6718",[1,1,1]);t.rotation.x=.93,e(r,new zn(.31,.31,.015,28),"#ffa13b",[1,1,1],[0,.08,.112]).rotation.copy(t.rotation)},chicken(r,e){let t=e(r,new Mt(1,28,20),"#e6bd8e",[.95,.49,.7]);t.rotation.z=.23,e(r,new Mt(1,24,14),"#f2dabe",[.77,.33,.68],[.1,-.06,.1])},broccoli(r,e){let t=e(r,new zn(.23,.19,1.08,12),"#86a94b",[1,1,1],[.02,-.27,0]);t.rotation.z=-.14;for(let n=0;n<37;n++){let i=n*2.39996,s=Math.sqrt(n/37);e(r,new oi(.22,1),["#367129","#4a8128","#275223"][n%3],[1,1,1],[Math.cos(i)*s*.6,.18+(1-s*s)*.4,Math.sin(i)*s*.48])}},sweetpotato(r,e){let t=e(r,new oi(1,1),"#985747",[1.02,.65,.72],[-.08,-.03,0]);t.rotation.z=-.26;let n=e(r,new oi(1,1),"#eeb044",[.66,.58,.55],[.34,.05,.23]);n.rotation.z=-.26},blueberry(r,e){for(let[t,n,i,s]of[[-.4,-.08,.1,.49],[.45,-.1,.12,.48],[.02,.37,-.19,.5]]){e(r,new Mt(s,24,18),"#334760",[1,.9,1],[t,n,i]);let a=e(r,new Hs(s*.25,.027,7,18),"#172b3d",[1,1,1],[t,n+.18,i+s*.86]);a.rotation.x=-.42}}};function N0(r,e,t,n,i,s,a){let o=n==="retriever",c=new Ga({canvas:r,alpha:!0,antialias:!0});c.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65)),c.outputColorSpace=lt,c.toneMapping=pd,c.toneMappingExposure=1.02,c.shadowMap.enabled=!0,c.shadowMap.type=o?ud:dd;let l=new Wa,h=new It(35,1,.04,10);s?h.position.set(.918,.425,.556):t?h.position.set(.7,.365,.86):h.position.set(.182,.456,1.046);let u=new M(-.052,.184,.09),d=h.position.clone().sub(u);h.lookAt(u);function p(le){h.position.copy(d).applyAxisAngle(h.up,je.degToRad(le)).add(u),h.lookAt(u),h.updateMatrixWorld()}let f=Fd(l,t||s?.12:void 0,o,s),{bowl:g,bowlFloor:m}=f,_=new M,v=new M,y=new lo,x=new pe,S=new M;function b(le,me,De){let _e=r.getBoundingClientRect();if(!_e.width||!_e.height||me<_e.left||me>_e.right||De<_e.top||De>_e.bottom)return null;x.set((me-_e.left)/_e.width*2-1,1-(De-_e.top)/_e.height*2),y.setFromCamera(x,h);let Re=y.intersectObject(le,!1)[0];if(!Re?.barycoord)return null;let Ae=y.intersectObject(f.bowlMesh,!1)[0];if(Ae&&Ae.distance<Re.distance)return null;let{face:gt,barycoord:at}=Re,ot=le.geometry.attributes.position;return new M().fromBufferAttribute(ot,gt.a).multiplyScalar(at.x).addScaledVector(S.fromBufferAttribute(ot,gt.b),at.y).addScaledVector(S.fromBufferAttribute(ot,gt.c),at.z)}function A(){let le=r.getBoundingClientRect();return!le.width||!le.height?null:(_.copy(g).project(h),v.setFromMatrixColumn(h.matrixWorld,0).multiplyScalar(f.bowlRadius).add(g).project(h),{x:le.left+(_.x+1)*le.width/2,y:le.top+(1-_.y)*le.height/2,radius:Math.abs(v.x-_.x)*le.width/2})}let C=s&&!i?D0(l):t||s?Promise.resolve():O0(e),I=new so(s?"#fffaf4":"#e9eff9",s?"#dfd2c0":"#9f978e",s?1.28:1.17);l.add(I);let U=new di("#fff8ed",s?.85:1.71);s&&!i?U.position.set(.12,1.19,-.79):U.position.set(-.8,1.19,.42),U.target.position.set(-.04,.01,.1),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),o&&(U.shadow.radius=3.5),U.shadow.camera.left=-.59,U.shadow.camera.right=.59,U.shadow.camera.top=.6,U.shadow.camera.bottom=-.62,U.shadow.camera.near=.1,U.shadow.camera.far=3,U.shadow.normalBias=.003,U.shadow.bias=-13e-5,l.add(U,U.target);let D=new di(s?"#fff5e6":"#f4f6ff",s?.7:.44);s?D.position.set(.83,.64,.87):D.position.set(.68,.65,.93),l.add(D);let H=s?new di("#fff4e4",.4):null;H&&(H.castShadow=!1,H.position.set(-1.15,.52,.95),l.add(H));let V=s?new di("#c49664",0):null;V&&(V.castShadow=!1,V.position.set(-.18,-.42,1.15),l.add(V));let P=s?.45:.49,W=-1.28;function X(le){if(!s)return;let me=le==="black";I.color.set(me?"#f6f7fa":"#fffaf4"),I.groundColor.set(me?"#a67d52":"#dfd2c0"),I.intensity=me?1.9:1.28,U.intensity=me?.92:.85,D.intensity=me?.88:.7,H&&(H.intensity=me?1.55:.4),V&&(V.intensity=me?.58:0),P=me?.68:.45,W=me?-.55:-1.28,l.environment&&(l.environmentIntensity=P),l.environmentRotation.y=W}function ie(le){le.mapping=Ms,l.environment=le,l.environmentIntensity=P,l.environmentRotation.y=W}let re=new _o().loadAsync(en(s?"blinds-512.hdr":"blinds.hdr")).then(le=>{let me=le.image.data,{fromHalfFloat:De,toHalfFloat:_e}=pi;for(let Re=0;Re<me.length;Re+=4){let Ae=De(me[Re]),gt=De(me[Re+1]),at=De(me[Re+2]),ot=.2126*Ae+.7152*gt+.0722*at;me[Re]=_e(je.lerp(Ae,ot,.73)),me[Re+1]=_e(je.lerp(gt,ot,.73)),me[Re+2]=_e(je.lerp(at,ot,.73))}ie(le)}).catch(()=>new vo().loadAsync(en("royal_esplanade.hdr.jpg")).then(ie).catch(()=>{})),ne=new sn;l.add(ne);function ue(le,me,De,_e,Re=[0,0,0]){let Ae=new Xe(me,new gn({color:De,roughness:.63}));return Ae.scale.set(..._e),Ae.position.set(...Re),Ae.castShadow=!0,Ae.receiveShadow=!0,le.add(Ae),Ae}let Y=new Map,Z=new Yt,xe=new M,ve=s?new Zt(.08,.35,-.08):o?new Zt(1.06,.06,-.04):new Zt(.28,.42,-.11),se=new Set(o?tp.map(([le])=>le):t?[t]:Object.keys(hp));function R(le){if(!se.has(le))return null;if(Y.has(le))return Y.get(le);let me=new sn;o?op(le,me):hp[le](me,ue),Z.setFromObject(me,!0).getSize(xe);let De=s?np[le]/Math.max(xe.x,xe.z):o?Math.min(.0165,.0065/xe.y):.018;me.rotation.copy(ve),Z.setFromObject(me,!0);let _e={shape:me,scale:De,restHeight:m-Z.min.y*De};return me.rotation.set(0,0,0),Y.set(le,_e),_e}ne.visible=!1;function T(){let{width:le,height:me}=e.getBoundingClientRect();!le||!me||(c.setSize(le,me,!1),h.aspect=le/me,h.fov=t||s?Math.min(58,(n==="retriever"?34.8:37.5)/Math.min(h.aspect,1.24)):je.clamp(31.5/Math.sqrt(h.aspect),25,43),h.updateProjectionMatrix(),h.updateMatrixWorld(),a())}let F=new M,z=new M,L=new M,B=g.clone().add(new M(.022,0,-.023)),w=new M,N=new xt,O=new xt,J=new M,k=new M,$=s?lp(l,R,g,ve,m):null;function K(le){let me=e.getBoundingClientRect(),De=(le.left+le.width/2-me.left)/me.width*2-1,_e=(le.top+le.height/3-me.top)/me.height*2-1;F.set(De,-Math.min(_e,1.1),-.2).unproject(h),z.set(De,-Math.min(_e,1.1),1).unproject(h);let Re=(.73-F.z)/(z.z-F.z);L.copy(F).lerp(z,Re)}function ee(le){return!le||!o?null:le.piece?le.piece.position:(B.y=R(le.name).restHeight,B)}let ce=null,ge=t;function de(le,me,De,_e){let Re=o?Yn.hide:Rn+.13;le&&!le.piece&&(ge=o&&me>=Re&&!le.gripped?le.name:null);let Ae=le?.piece;if(ne.visible=Ae?!!le.gripped&&me<Re:!!ge||!!le&&me<Re,!ne.visible&&!(Ae&&me>=Yn.grip&&me<Re))return;let gt=le?.name??ge,at=R(gt);ce!==at.shape&&(ce&&ne.remove(ce),ce=at.shape,ne.add(ce));let et=t||Ae?1:je.clamp((me-.045)/(.5-.045),0,1),Rt=Ae?.position??B;Ae||(B.y=at.restHeight),ne.position.copy(L).lerp(Rt,et),ne.rotation.copy(Ae?Ae.mesh.rotation:ve);let G=at.scale;if(o&&t&&le&&me<.28&&!De){let Ye=je.clamp(me/.28,0,1);ne.position.y+=.055*(1-Ye**2)}if(!De&&et<1&&(ne.position.y+=.085*4*et*(1-et),ne.rotation.x-=.65*(1-et),ne.rotation.z+=.38*(1-et)),o&&le&&me>=Yn.grip){let{grip:Ye,lift:ut,tuck:Be,hide:Ct}=Yn;if(!le.gripped&&me<=ut+.034&&me>=Ye&&(_e.gripPosition(k),k.distanceToSquared(Rt)<.012**2&&(_e.skull.worldToLocal(w.copy(Rt)),_e.skull.getWorldQuaternion(O).invert(),N.multiplyQuaternions(O,ne.quaternion),le.gripped=!0,Ae&&(Ae.mesh.visible=!1,Ae.shadow.visible=!1,ne.visible=!0))),le.gripped){let Nt=ns(me,Ae?Be-.035:Be,Ct);J.copy(w),Ae&&(J.x-=.012*Nt,G*=1-ns(me,Be-.01,Ct-.025)*.8),J.z-=(Ae?.032:.027)*Nt,J.y+=.003*Nt,ne.position.copy(_e.skull.localToWorld(J)),ne.quaternion.multiplyQuaternions(_e.skull.getWorldQuaternion(O),N)}}else if(!o&&me>=Rn){let Ye=ns(me,Rn,Rn+.07);_e.mouthPosition(k),ne.position.lerp(k,Ye),ne.position.y+=.004*Math.sin(Math.PI*Ye),G*=1-ns(me,Rn+.045,Re)}ne.scale.setScalar(G)}let he=Promise.all([bo(o,i,s),C,re]).then(([le])=>(le.mesh.position.y=.01,l.add(le.mesh),le)),ae,Le;function Se(le){return le==="retriever"?he:le==="black"?(Le??=bo(!0,i,s,!1,!1,!0).catch(me=>{throw Le=null,me}),Le):(ae??=bo(!0,i,s,!0).catch(me=>{throw ae=null,me}),ae)}return new ResizeObserver(T).observe(e),T(),{renderer:c,world:l,camera:h,puppy:he,loadBreed:Se,setBreedLighting:X,itemPosition:K,foodTarget:ee,animateFood:de,kitchen:f,pile:$,setViewYaw:p,bowlScreenPosition:A,pickCoat:b}}async function D0(r){let e=new Jr,[t,n]=await Promise.all([e.loadAsync(en("lebombo-room.webp")).catch(()=>null),e.loadAsync(en("wood-floor.webp")).catch(()=>null)]);if(t){t.colorSpace=lt,t.anisotropy=4;let i=1.36,s=new yo(t,i,6.8,112);s.position.y=i,s.rotation.y=-3.03,s.material.toneMapped=!1,s.renderOrder=-1,r.add(s)}if(n){n.colorSpace=lt,n.wrapS=n.wrapT=Sn,n.anisotropy=8,n.repeat.set(3.8/1.7,3.8/1.7);let i=new Xe(new qn(3.8,3.8),new Et({map:n,color:"#dacbb3",transparent:!0,depthWrite:!1,toneMapped:!1}));i.material.onBeforeCompile=s=>{s.vertexShader=`varying vec2 floorPosition;
`+s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
floorPosition = position.xy;`),s.fragmentShader=`varying vec2 floorPosition;
`+s.fragmentShader.replace("#include <alphamap_fragment>",`#include <alphamap_fragment>
diffuseColor.a *= 1.0 - smoothstep(0.63, 1.72, length(floorPosition));`)},i.rotation.x=-Math.PI/2,i.position.y=.002,i.renderOrder=-1,r.add(i)}}function O0(r){let e=new Image;return e.src=en("kitchen.webp"),e.decode().then(()=>{r.style.backgroundImage='url("'+e.src+'")'}).catch(()=>{})}function up(r,{presetFood:e=null,dog:t="bernese",clay:n=!1,meal:i=!1,onBiteSound:s}={}){let a=t==="retriever"?Yn.duration:U0,o=r.querySelector("canvas"),c=r.querySelector(".plate"),l=matchMedia("(prefers-reduced-motion: reduce)"),h=null,u=null,d=null,p,f=!1,g,m=null,_=-1/0,v=!1,y=!1,x=null,S={point:new M,target:new M,stroke:new M,strength:0,held:!1,startedAt:-1/0,releasedAt:-1/0},b=new M,A=new M(.08,-1,-.4).normalize();function C(){o.hidden=!0,c&&(c.hidden=!1),r.dataset.renderer="still",v=!0}function I(P){m=null;let W=d===null?null:(P-d)/1e3,X=S.held||P-S.releasedAt<720,ie=!!h||X||W!==null&&W<Xs||u!==null&&P-u<3400,re=!i||!l.matches;if(!ie&&re&&P-_<30){U();return}_=P;let ne=h?(P-h.start)/1e3:null,ue=u===null?null:(P-u)/1e3;if(S.point.lerp(S.target,.48),S.strength=ns(P-S.startedAt,0,135)*(S.held?1:1-ns(P-S.releasedAt,70,720)),p.pose(P/1e3,ne,ue,l.matches,g.foodTarget(h),W,S),g.kitchen.animate(ue),g.pile?.draw(P,l.matches),g.animateFood(h,ne,l.matches,p),s&&h?.piece&&h.gripped){for(let[Y,{close:Z}]of Yn.chews.entries()){let xe=Z+.04;h.lastSoundTime<xe&&ne>=xe&&ne-xe<.16&&s(h.name,Y)}h.lastSoundTime=ne}if(g.renderer.render(g.world,g.camera),ne!==null&&ne*1e3>=a){let Y=h;h=null,Y.piece&&(Y.gripped&&g.pile.remove(Y.piece),Y.resolve(!!Y.gripped))}(ie||re)&&U()}function U(){m===null&&p&&!y&&!document.hidden&&(m=requestAnimationFrame(I))}function D(){_=-1/0,U()}function H(){m!==null&&cancelAnimationFrame(m),m=null}let V;try{g=N0(o,r,e,t,n,i,D),V=g.puppy.then(P=>{p=P,!y&&(v=!0,o.hidden=!1,c&&(c.hidden=!0),r.dataset.renderer="three",D())}).catch(C),o.addEventListener("webglcontextlost",P=>{P.preventDefault(),y=!0,h?.piece&&(h.piece.mesh.visible=!0,h.resolve(!1),h=null),H(),C()}),o.addEventListener("webglcontextrestored",()=>{y=!1,p&&(o.hidden=!1,c&&(c.hidden=!0),r.dataset.renderer="three",D())})}catch{C(),V=Promise.resolve()}return document.addEventListener("visibilitychange",()=>{if(i){let P=performance.now();document.hidden?x=P:x!==null&&(h?.piece&&(h.start+=P-x),x=null)}document.hidden?H():D()}),l.addEventListener("change",D),{ready:V,duration:a,isReady:()=>v,async selectDog(P){if(P!=="retriever"&&P!=="shiba"&&P!=="black"||!i||!p||h||y||f)return!1;f=!0;try{let W=await g.loadBreed(P);return y?!1:(W.mesh.position.y=.01,g.world.remove(p.mesh),g.world.add(W.mesh),g.setBreedLighting(P),p=W,d=null,S.held=!1,S.startedAt=S.releasedAt=-1/0,D(),!0)}catch{return!1}finally{f=!1}},bowlScreenPosition:()=>g?.bowlScreenPosition(),touchDog(P,W){if(!i||!p||y)return!1;let X=g.pickCoat(p.mesh,P,W);return X?(S.held?(b.subVectors(X,S.target),b.lengthSq()>8e-6&&S.stroke.lerp(b.normalize(),.65)):(S.startedAt=performance.now(),S.held=!0,S.point.copy(X),S.stroke.copy(A)),S.target.copy(X),D(),!0):!1},releaseDog(){S.held&&(S.held=!1,S.releasedAt=performance.now(),D())},cheer(){d=performance.now(),D()},setViewYaw(P){!i||!g||y||(g.setViewYaw(P),D())},addFood(P){return h||y||!g?.pile?.add(P,performance.now())?!1:(D(),!0)},undoFood(){let P=g?.pile,W=P?.next();return!W||h||y?null:(P.remove(W),D(),W.name)},bowlSize:()=>g?.pile?.size()??0,nextFood:()=>g?.pile?.next()?.name??null,eatNext(){let P=g?.pile?.next();return!P||h||y?Promise.resolve(!1):new Promise(W=>{let X=Math.max(performance.now(),g.pile.settledAt());h={name:P.name,piece:P,start:X,resolve:W},D()})},feed(P,W){e||g?.itemPosition(W),h={name:P,start:performance.now()},D()},goodbye(){h=null,u=performance.now(),D()},reset(){h=null,u=null,D()}}}var dp="golden-retriever-muted",F0=9,B0=.32,z0=.27,H0=[1,.73,.48],k0=new Set(["carrot","radish","broccoli","kibble","cucumber"]);function pp(){let r=window.AudioContext||window.webkitAudioContext,e=!1,t,n,i=new Map;try{e=localStorage.getItem(dp)==="1"}catch{}if(r){for(let c of["crisp","soft"]){let l=fetch(en(`dog-chew-${c}.mp3`)).then(h=>h.ok?h.arrayBuffer():null).catch(()=>null);i.set(c,{encoded:l,buffer:null,next:0})}let o=fetch(en("dog-bark.mp3")).then(c=>c.ok?c.arrayBuffer():null).catch(()=>null);i.set("bark",{encoded:o,buffer:null,next:0})}function s(){n&&(n.gain.value=e||document.hidden?0:.72)}function a(){if(!(!r||e))try{if(!t){t=new r,n=t.createGain(),n.connect(t.destination),s();for(let o of i.values())o.encoded.then(c=>c&&t.decodeAudioData(c)).then(c=>{o.buffer=c}).catch(()=>{})}t.state!=="running"&&t.resume().catch(()=>{})}catch{}}return document.addEventListener("visibilitychange",s),{isMuted:()=>e,toggle(){e=!e,s();try{localStorage.setItem(dp,e?"1":"0")}catch{}a()},unlock:a,play(o,c){let l=i.get(k0.has(o)?"crisp":"soft");if(e||document.hidden||!l?.buffer||t.state!=="running")return;let h=t.createBufferSource(),u=t.createGain();h.buffer=l.buffer,u.gain.value=H0[c],h.connect(u).connect(n),h.start(0,l.next*B0,z0),l.next=(l.next+1)%F0},bark(o="retriever"){let c=i.get("bark");if(e||document.hidden||!c?.buffer||t.state!=="running")return;let l=t.createBufferSource(),h=t.createGain();l.buffer=c.buffer;let u=o==="shiba"?1.18:o==="black"?.9:.96;l.playbackRate.value=u*(.96+Math.random()*.08),h.gain.value=.62,l.connect(h).connect(n),l.start(0)}}}var fp=[["carrot","\u80E1\u841D\u535C"],["chicken","\u719F\u9E21\u8089"],["blueberry","\u84DD\u8393"],["broccoli","\u897F\u5170\u82B1"],["kibble","\u72D7\u7CAE"],["pumpkin","\u719F\u5357\u74DC"],["strawberry","\u8349\u8393"],["cucumber","\u9EC4\u74DC"],["apple","\u53BB\u6838\u82F9\u679C"],["steak","\u53BB\u9AA8\u719F\u725B\u8089"],["sweetpotato","\u719F\u7EA2\u85AF"],["greenbean","\u719F\u56DB\u5B63\u8C46"],["radish","\u767D\u841D\u535C"],["pork","\u53BB\u9AA8\u719F\u732A\u8089"],["rice","\u767D\u7C73\u996D"],["lamb","\u53BB\u9AA8\u719F\u7F8A\u8089"]],fr=document.getElementById("demo-stage"),Hn=fr.querySelector("canvas"),wo=document.getElementById("view-controls"),_p=document.getElementById("dog-picker"),Uh=[..._p.querySelectorAll("button")],yp=document.getElementById("reset-view"),xp=document.getElementById("toggle-sound"),Nh=document.getElementById("food-menu"),pr=document.getElementById("dog-message"),V0=document.getElementById("tap-cue"),ur=document.getElementById("bowl-target"),Eo=document.getElementById("meal-hearts"),Mp=matchMedia("(prefers-reduced-motion: reduce)"),Js=pp(),cn=up(fr,{meal:!0,dog:"retriever",clay:new URLSearchParams(location.search).has("clay"),onBiteSound:Js.play}),bp=[],Wi="loading",Dh="retriever",Sp=!0,pn=null,Wt=null,dr=0,Oh,Ep,wp,Fh="\u6478\u6478\u6211\uFF0C\u597D\u8212\u670D\u5440\uFF01";function Ks(r){dr=r%360,cn.setViewYaw(dr),yp.hidden=Math.min(Math.abs(dr),360-Math.abs(dr))<1}Hn.addEventListener("pointerdown",r=>{if(Wt||pn||Wi==="switching"||!r.isPrimary||r.button!==0)return;let e=cn.touchDog(r.clientX,r.clientY);pn={id:r.pointerId,x:r.clientX,scale:360/Hn.clientWidth,petting:e,lastSample:performance.now()},Hn.setPointerCapture(r.pointerId),Hn.classList.add(e?"petting":"dragging"),e&&Wi!=="eating"&&(clearTimeout(Ep),pr.textContent!==Fh&&(wp=pr.textContent),pr.textContent=Fh)});Hn.addEventListener("pointermove",r=>{if(!(Wt||pn?.id!==r.pointerId))if(pn.petting){let e=performance.now();if(e-pn.lastSample<65)return;pn.lastSample=e,cn.touchDog(r.clientX,r.clientY)||cn.releaseDog()}else Ks(dr-(r.clientX-pn.x)*pn.scale),pn.x=r.clientX});for(let r of["pointerup","pointercancel","lostpointercapture"])Hn.addEventListener(r,e=>{pn?.id===e.pointerId&&(pn.petting&&(cn.releaseDog(),Ep=setTimeout(()=>{pr.textContent===Fh&&(pr.textContent=wp)},1150)),pn=null,Hn.classList.remove("dragging","petting"))});Hn.addEventListener("keydown",r=>{if(!Wt){if(r.key==="ArrowLeft")Ks(dr+20);else if(r.key==="ArrowRight")Ks(dr-20);else if(r.key==="Home")Ks(0);else return;r.preventDefault()}});yp.addEventListener("click",()=>{Ks(0),wo.open=!1});function Tp(){xp.setAttribute("aria-pressed",String(Js.isMuted()))}xp.addEventListener("click",()=>{Js.toggle(),Tp()});Tp();function Xi(r,e){Wi=r,fr.dataset.mood=r,pr.textContent=e;let t=Wi==="hungry"||Wi==="happy";for(let n of bp)n.disabled=!t;for(let n of Uh)n.disabled=!t;Pp()}function mp(r){let{left:e,top:t,width:n,height:i}=r.getBoundingClientRect();return{x:e+n/2,y:t+i/2}}function Ap(r,e){let t=new Image;return t.src=en("menu-"+r+".webp"),t.alt="",t.className="food-ghost",t.setAttribute("aria-hidden","true"),document.body.append(t),Rp(t,e),t}function Rp(r,{x:e,y:t}){r.style.left=e+"px",r.style.top=t+"px"}function Cp(r,e,t,n){if(Mp.matches||!t){r.remove();return}r.animate([{left:e.x+"px",top:e.y+"px",opacity:1},{left:t.x+"px",top:t.y+"px",opacity:0,transform:"translate(-50%, -50%) scale(.55)"}],{duration:n?210:160,easing:"ease-out"}).finished.then(()=>r.remove(),()=>r.remove())}function G0(r,e){let t=fr.getBoundingClientRect();ur.style.left=r.x-t.left+"px",ur.style.top=r.y-t.top+r.radius*.2+"px",ur.style.width=Math.max(60,r.radius*2.04)+"px",ur.style.height=Math.max(26,r.radius*.86)+"px",ur.dataset.mode=e,ur.hidden=!1}function Pp(){let r=Sp&&Wi==="hungry"&&!Wt;Nh.classList.toggle("show-cue",r),Wt||(ur.hidden=!0)}function gp(r){let e=cn.bowlScreenPosition();if(!e)return!1;let t=Math.max(60,e.radius+30),n=Math.max(52,e.radius*.7+28),i=((r.x-e.x)/t)**2+((r.y-e.y)/n)**2<=1;return G0(e,i?"hot":"drag"),i}async function vp(r,e,t,n){if(Wi!=="hungry"&&Wi!=="happy"||!cn.addFood(r)){n?.remove();return}Sp=!1,Js.unlock(),clearTimeout(Oh),Eo.hidden=!0,wo.open=!1,(n||!Mp.matches)&&Cp(n??Ap(r,t),t,cn.bowlScreenPosition(),!0),e.classList.add("feeding"),Xi("eating","\u597D\u9999\u5440\uFF01");let i=await cn.eatNext();if(e.classList.remove("feeding"),!i){cn.undoFood(),fr.dataset.renderer==="three"&&Xi("hungry","\u518D\u5582\u6211\u4E00\u6B21\u5427\uFF01");return}cn.cheer(),Js.bark(Dh),Eo.hidden=!1,Oh=setTimeout(()=>{Eo.hidden=!0},1420),Xi("happy","\u597D\u5403\uFF01\u8C22\u8C22\u4F60\uFF01")}for(let[r,e]of fp){let s=function(a){if(Wt?.id!==a.pointerId)return;let{ghost:o}=Wt;if(Wt=null,t.classList.remove("dragging"),o){i=!0;let c={x:a.clientX,y:a.clientY};a.type==="pointerup"&&gp(c)?vp(r,t,c,o):a.type==="pointerup"?(Cp(o,c,mp(n),!1),pr.textContent="\u628A\u98DF\u6750\u653E\u8FDB\u4EAE\u4EAE\u7684\u98DF\u76C6\u5427\uFF01"):o.remove()}Pp()},t=document.createElement("button");t.type="button",t.className="food-card",t.dataset.food=r,t.setAttribute("aria-label",e),t.disabled=!0;let n=new Image;n.alt="",n.src=en("menu-"+r+".webp"),n.draggable=!1,t.append(n),r===fp[0][0]&&t.append(V0.content.cloneNode(!0));let i=!1;t.addEventListener("click",a=>{if(a.detail&&i){i=!1;return}vp(r,t,mp(n))}),t.addEventListener("pointerdown",a=>{!a.isPrimary||a.button!==0||pn||Wt||t.disabled||(i=!1,Wt={id:a.pointerId,start:{x:a.clientX,y:a.clientY},ghost:null},t.setPointerCapture(a.pointerId))}),t.addEventListener("pointermove",a=>{if(Wt?.id!==a.pointerId)return;let o={x:a.clientX,y:a.clientY};!Wt.ghost&&Math.hypot(o.x-Wt.start.x,o.y-Wt.start.y)<8||(Wt.ghost??=Ap(r,o),Nh.classList.remove("show-cue"),t.classList.add("dragging"),Rp(Wt.ghost,o),gp(o))});for(let a of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(a,s);bp.push(t),Nh.append(t)}for(let r of Uh){let e=r.dataset.breed,t=new Image;t.src=en("dog-"+e+".webp"),t.alt="",t.draggable=!1,r.append(t),r.addEventListener("click",async()=>{if(!(e===Dh||pn||Wt))if(clearTimeout(Oh),Eo.hidden=!0,wo.open=!1,Xi("switching","\u72D7\u72D7\u9A6C\u4E0A\u5C31\u6765\u2026"),await cn.selectDog(e)){Dh=e,Hn.setAttribute("aria-label",r.getAttribute("aria-label")+"\u548C\u5B83\u7684\u98DF\u76C6");for(let n of Uh)n.setAttribute("aria-pressed",String(n===r));Xi("hungry","\u6C6A\u6C6A\uFF01\u6211\u997F\u5566\uFF01")}else fr.dataset.renderer==="three"&&Xi("hungry","\u8FD9\u53EA\u72D7\u72D7\u6682\u65F6\u6CA1\u80FD\u51FA\u73B0\u3002")})}function Bh(){let r=fr.dataset.renderer==="three";if(wo.hidden=!r,_p.hidden=!r,!r)Xi("unavailable","\u8FD9\u53F0\u8BBE\u5907\u6682\u65F6\u770B\u4E0D\u5230\u72D7\u72D7\u3002");else{for(;cn.bowlSize()&&cn.undoFood(););Xi("hungry","\u6C6A\u6C6A\uFF01\u6211\u997F\u5566\uFF01")}}cn.ready.then(Bh);Hn.addEventListener("webglcontextlost",Bh);Hn.addEventListener("webglcontextrestored",Bh);})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
