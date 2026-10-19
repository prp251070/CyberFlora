(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ma="174",Xl=0,ka=1,Yl=2,Jo=1,ql=2,_n=3,Ln=0,Pe=1,Ee=2,Mn=0,Si=1,_e=2,Ha=3,Va=4,Zl=5,Xn=100,Kl=101,$l=102,jl=103,Jl=104,Ql=200,tc=201,ec=202,nc=203,Cr=204,Rr=205,ic=206,sc=207,rc=208,ac=209,oc=210,lc=211,cc=212,hc=213,uc=214,Pr=0,Dr=1,Lr=2,Ti=3,Ir=4,Ur=5,Nr=6,Fr=7,Qo=0,dc=1,fc=2,Dn=0,tl=1,el=2,nl=3,ga=4,il=5,sl=6,rl=7,al=300,Ei=301,Ai=302,Or=303,Br=304,Ys=306,He=1e3,qn=1001,zr=1002,Ve=1003,pc=1004,is=1005,cn=1006,js=1007,Zn=1008,wn=1009,ol=1010,ll=1011,ji=1012,_a=1013,$n=1014,hn=1015,xn=1016,va=1017,Ma=1018,Ci=1020,cl=35902,hl=1021,ul=1022,Qe=1023,dl=1024,fl=1025,wi=1026,Ri=1027,xa=1028,ya=1029,pl=1030,Sa=1031,wa=1033,Is=33776,Us=33777,Ns=33778,Fs=33779,Gr=35840,kr=35841,Hr=35842,Vr=35843,Wr=36196,Xr=37492,Yr=37496,qr=37808,Zr=37809,Kr=37810,$r=37811,jr=37812,Jr=37813,Qr=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,aa=37821,Os=36492,oa=36494,la=36495,ml=36283,ca=36284,ha=36285,ua=36286,mc=3200,gc=3201,gl=0,_c=1,Pn="",Ze="srgb",Pi="srgb-linear",zs="linear",oe="srgb",ti=7680,Wa=519,vc=512,Mc=513,xc=514,_l=515,yc=516,Sc=517,wc=518,bc=519,da=35044,Xa="300 es",vn=2e3,Gs=2001;class Ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ya=1234567;const Ki=Math.PI/180,Ji=180/Math.PI;function yn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function qt(s,t,e){return Math.max(t,Math.min(e,s))}function ba(s,t){return(s%t+t)%t}function Tc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Ec(s,t,e){return s!==t?(e-s)/(t-s):0}function $i(s,t,e){return(1-e)*s+e*t}function Ac(s,t,e,n){return $i(s,t,1-Math.exp(-e*n))}function Cc(s,t=1){return t-Math.abs(ba(s,t*2)-t)}function Rc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Pc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Dc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Lc(s,t){return s+Math.random()*(t-s)}function Ic(s){return s*(.5-Math.random())}function Uc(s){s!==void 0&&(Ya=s);let t=Ya+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nc(s){return s*Ki}function Fc(s){return s*Ji}function Oc(s){return(s&s-1)===0&&s!==0}function Bc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function zc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Gc(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function an(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const kt={DEG2RAD:Ki,RAD2DEG:Ji,generateUUID:yn,clamp:qt,euclideanModulo:ba,mapLinear:Tc,inverseLerp:Ec,lerp:$i,damp:Ac,pingpong:Cc,smoothstep:Rc,smootherstep:Pc,randInt:Dc,randFloat:Lc,randFloatSpread:Ic,seededRandom:Uc,degToRad:Nc,radToDeg:Fc,isPowerOfTwo:Oc,ceilPowerOfTwo:Bc,floorPowerOfTwo:zc,setQuaternionFromProperEuler:Gc,normalize:le,denormalize:an};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,i,r,a,o,l,c){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=i[0],m=i[3],f=i[6],y=i[1],M=i[4],v=i[7],A=i[2],T=i[5],E=i[8];return r[0]=a*_+o*y+l*A,r[3]=a*m+o*M+l*T,r[6]=a*f+o*v+l*E,r[1]=c*_+h*y+u*A,r[4]=c*m+h*M+u*T,r[7]=c*f+h*v+u*E,r[2]=d*_+p*y+g*A,r[5]=d*m+p*M+g*T,r[8]=d*f+p*v+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new Vt;function vl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function kc(){const s=ks("canvas");return s.style.display="block",s}const qa={};function Hn(s){s in qa||(qa[s]=!0,console.warn(s))}function Hc(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Vc(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Wc(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Za=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ka=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xc(){const s={enabled:!0,workingColorSpace:Pi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===oe&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pn?zs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Pi]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:Za,fromXYZ:Ka,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Za,fromXYZ:Ka,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),s}const te=Xc();function Sn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ei;class Yc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ei===void 0&&(ei=ks("canvas")),ei.width=t.width,ei.height=t.height;const n=ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ei}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Sn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qc=0;class Ta{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qc++}),this.uuid=yn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Qs(i[a].image)):r.push(Qs(i[a]))}else r=Qs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Yc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zc=0;class De extends Ii{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=qn,i=qn,r=cn,a=Zn,o=Qe,l=wn,c=De.DEFAULT_ANISOTROPY,h=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zc++}),this.uuid=yn(),this.name="",this.source=new Ta(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case He:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case zr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case He:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case zr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=al;De.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(p+1)/2,A=(f+1)/2,T=(h+d)/4,E=(u+_)/4,R=(g+m)/4;return M>v&&M>A?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=T/n,r=E/n):v>A?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=R/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=E/r,i=R/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Kc extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ta(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends Kc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ml extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $c extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const A=Math.sqrt(M),T=Math.atan2(A,f*y);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const v=o*y;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-o*p,t[e+2]=c*g+h*p+o*d-l*u,t[e+3]=h*g-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tr.copy(this).projectOnVector(t),this.sub(tr)}reflect(t){return this.sub(tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tr=new L,$a=new ts;class jn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(nn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(nn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(t.matrixWorld),this.expandByPoint(nn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ss.copy(n.boundingBox)),ss.applyMatrix4(t.matrixWorld),this.union(ss)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,nn),nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Oi),rs.subVectors(this.max,Oi),ni.subVectors(t.a,Oi),ii.subVectors(t.b,Oi),si.subVectors(t.c,Oi),bn.subVectors(ii,ni),Tn.subVectors(si,ii),Fn.subVectors(ni,si);let e=[0,-bn.z,bn.y,0,-Tn.z,Tn.y,0,-Fn.z,Fn.y,bn.z,0,-bn.x,Tn.z,0,-Tn.x,Fn.z,0,-Fn.x,-bn.y,bn.x,0,-Tn.y,Tn.x,0,-Fn.y,Fn.x,0];return!er(e,ni,ii,si,rs)||(e=[1,0,0,0,1,0,0,0,1],!er(e,ni,ii,si,rs))?!1:(as.crossVectors(bn,Tn),e=[as.x,as.y,as.z],er(e,ni,ii,si,rs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,nn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(nn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new L,new L,new L,new L,new L,new L,new L,new L],nn=new L,ss=new jn,ni=new L,ii=new L,si=new L,bn=new L,Tn=new L,Fn=new L,Oi=new L,rs=new L,as=new L,On=new L;function er(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){On.fromArray(s,r);const o=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const jc=new jn,Bi=new L,nr=new L;class Jn{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jc.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Bi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(nr)),this.expandByPoint(Bi.copy(t.center).sub(nr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new L,ir=new L,os=new L,En=new L,sr=new L,ls=new L,rr=new L;class Ea{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ir.copy(t).add(e).multiplyScalar(.5),os.copy(e).sub(t).normalize(),En.copy(this.origin).sub(ir);const r=t.distanceTo(e)*.5,a=-this.direction.dot(os),o=En.dot(this.direction),l=-En.dot(os),c=En.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ir).addScaledVector(os,d),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,r){sr.subVectors(e,t),ls.subVectors(n,t),rr.crossVectors(sr,ls);let a=this.direction.dot(rr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);const l=o*this.direction.dot(ls.crossVectors(En,ls));if(l<0)return null;const c=o*this.direction.dot(sr.cross(En));if(c<0||l+c>a)return null;const h=-o*En.dot(rr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ri.setFromMatrixColumn(t,0).length(),r=1/ri.setFromMatrixColumn(t,1).length(),a=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;e[0]=d-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jc,t,Qc)}lookAt(t,e,n){const i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),An.crossVectors(n,ze),An.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),An.crossVectors(n,ze)),An.normalize(),cs.crossVectors(ze,An),i[0]=An.x,i[4]=cs.x,i[8]=ze.x,i[1]=An.y,i[5]=cs.y,i[9]=ze.y,i[2]=An.z,i[6]=cs.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],y=n[3],M=n[7],v=n[11],A=n[15],T=i[0],E=i[4],R=i[8],w=i[12],x=i[1],P=i[5],B=i[9],F=i[13],H=i[2],K=i[6],Z=i[10],tt=i[14],V=i[3],ut=i[7],X=i[11],lt=i[15];return r[0]=a*T+o*x+l*H+c*V,r[4]=a*E+o*P+l*K+c*ut,r[8]=a*R+o*B+l*Z+c*X,r[12]=a*w+o*F+l*tt+c*lt,r[1]=h*T+u*x+d*H+p*V,r[5]=h*E+u*P+d*K+p*ut,r[9]=h*R+u*B+d*Z+p*X,r[13]=h*w+u*F+d*tt+p*lt,r[2]=g*T+_*x+m*H+f*V,r[6]=g*E+_*P+m*K+f*ut,r[10]=g*R+_*B+m*Z+f*X,r[14]=g*w+_*F+m*tt+f*lt,r[3]=y*T+M*x+v*H+A*V,r[7]=y*E+M*P+v*K+A*ut,r[11]=y*R+M*B+v*Z+A*X,r[15]=y*w+M*F+v*tt+A*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+_*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],y=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,M=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,v=h*_*c-g*u*c+g*o*p-a*_*p-h*o*f+a*u*f,A=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,T=e*y+n*M+i*v+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=y*E,t[1]=(_*d*r-u*m*r-_*i*p+n*m*p+u*i*f-n*d*f)*E,t[2]=(o*m*r-_*l*r+_*i*c-n*m*c-o*i*f+n*l*f)*E,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*E,t[4]=M*E,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*E,t[6]=(g*l*r-a*m*r-g*i*c+e*m*c+a*i*f-e*l*f)*E,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*E,t[8]=v*E,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*f-e*u*f)*E,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*f+e*o*f)*E,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*E,t[12]=A*E,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*E,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*m-e*o*m)*E,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,_=a*h,m=a*u,f=o*u,y=l*c,M=l*h,v=l*u,A=n.x,T=n.y,E=n.z;return i[0]=(1-(_+f))*A,i[1]=(p+v)*A,i[2]=(g-M)*A,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(d+f))*T,i[6]=(m+y)*T,i[7]=0,i[8]=(g+M)*E,i[9]=(m-y)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ri.set(i[0],i[1],i[2]).length();const a=ri.set(i[4],i[5],i[6]).length(),o=ri.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);const c=1/r,h=1/a,u=1/o;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=u,sn.elements[9]*=u,sn.elements[10]*=u,e.setFromRotationMatrix(sn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=vn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(o===vn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Gs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=vn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),d=(e+t)*c,p=(n+i)*h;let g,_;if(o===vn)g=(a+r)*u,_=-2*u;else if(o===Gs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new L,sn=new ie,Jc=new L(0,0,0),Qc=new L(1,1,1),An=new L,cs=new L,ze=new L,ja=new ie,Ja=new ts;class Ne{constructor(t=0,e=0,n=0,i=Ne.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ja.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ja,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ne.DEFAULT_ORDER="XYZ";class xl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let th=0;const Qa=new L,ai=new ts,pn=new ie,hs=new L,zi=new L,eh=new L,nh=new ts,to=new L(1,0,0),eo=new L(0,1,0),no=new L(0,0,1),io={type:"added"},ih={type:"removed"},oi={type:"childadded",child:null},ar={type:"childremoved",child:null};class xe extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new L,e=new Ne,n=new ts,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Vt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.multiply(ai),this}rotateOnWorldAxis(t,e){return ai.setFromAxisAngle(t,e),this.quaternion.premultiply(ai),this}rotateX(t){return this.rotateOnAxis(to,t)}rotateY(t){return this.rotateOnAxis(eo,t)}rotateZ(t){return this.rotateOnAxis(no,t)}translateOnAxis(t,e){return Qa.copy(t).applyQuaternion(this.quaternion),this.position.add(Qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(to,t)}translateY(t){return this.translateOnAxis(eo,t)}translateZ(t){return this.translateOnAxis(no,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?hs.copy(t):hs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(zi,hs,this.up):pn.lookAt(hs,zi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),ai.setFromRotationMatrix(pn),this.quaternion.premultiply(ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(io),oi.child=t,this.dispatchEvent(oi),oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ih),ar.child=t,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(io),oi.child=t,this.dispatchEvent(oi),oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,eh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,nh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new L(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new L,mn=new L,or=new L,gn=new L,li=new L,ci=new L,so=new L,lr=new L,cr=new L,hr=new L,ur=new ge,dr=new ge,fr=new ge;class Je{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){rn.subVectors(i,e),mn.subVectors(n,e),or.subVectors(t,e);const a=rn.dot(rn),o=rn.dot(mn),l=rn.dot(or),c=mn.dot(mn),h=mn.dot(or),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return ur.setScalar(0),dr.setScalar(0),fr.setScalar(0),ur.fromBufferAttribute(t,e),dr.fromBufferAttribute(t,n),fr.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ur,r.x),a.addScaledVector(dr,r.y),a.addScaledVector(fr,r.z),a}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),mn.subVectors(t,e),rn.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),rn.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;li.subVectors(i,n),ci.subVectors(r,n),lr.subVectors(t,n);const l=li.dot(lr),c=ci.dot(lr);if(l<=0&&c<=0)return e.copy(n);cr.subVectors(t,i);const h=li.dot(cr),u=ci.dot(cr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(li,a);hr.subVectors(t,r);const p=li.dot(hr),g=ci.dot(hr);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ci,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return so.subVectors(r,i),o=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(so,o);const f=1/(m+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},us={h:0,s:0,l:0};function pr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class J{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=te.workingColorSpace){if(t=ba(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=pr(a,r,t+1/3),this.g=pr(a,r,t),this.b=pr(a,r,t-1/3)}return te.toWorkingColorSpace(this,i),this}setStyle(t,e=Ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=yl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return te.fromWorkingColorSpace(Re.copy(this),t),Math.round(qt(Re.r*255,0,255))*65536+Math.round(qt(Re.g*255,0,255))*256+Math.round(qt(Re.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,r=Re.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ze){te.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(us);const n=$i(Cn.h,us.h,e),i=$i(Cn.s,us.s,e),r=$i(Cn.l,us.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new J;J.NAMES=yl;let sh=0;class In extends Ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=Si,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Rr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new J(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ti,this.stencilZFail=ti,this.stencilZPass=ti,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Rr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ti&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ti&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ti&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $t extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new J(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new L,ds=new It;let rh=0;class ce{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=da,this.updateRanges=[],this.gpuType=hn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ds.fromBufferAttribute(this,e),ds.applyMatrix3(t),this.setXY(e,ds.x,ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==da&&(t.usage=this.usage),t}}class Sl extends ce{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wl extends ce{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends ce{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ah=0;const Ye=new ie,mr=new xe,hi=new L,Ge=new jn,Gi=new jn,we=new L;class ue extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vl(t)?wl:Sl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return mr.lookAt(t),mr.updateMatrix(),this.applyMatrix4(mr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hi).negate(),this.translate(hi.x,hi.y,hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ne(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ge.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Gi.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Ge.min,Gi.min),Ge.expandByPoint(we),we.addVectors(Ge.max,Gi.max),Ge.expandByPoint(we)):(Ge.expandByPoint(Gi.min),Ge.expandByPoint(Gi.max))}Ge.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)we.fromBufferAttribute(o,c),l&&(hi.fromBufferAttribute(t,c),we.add(hi)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ce(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;const c=new L,h=new L,u=new L,d=new It,p=new It,g=new It,_=new L,m=new L;function f(R,w,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,w),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(_),o[w].add(_),o[x].add(_),l[R].add(m),l[w].add(m),l[x].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,w=y.length;R<w;++R){const x=y[R],P=x.start,B=x.count;for(let F=P,H=P+B;F<H;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const M=new L,v=new L,A=new L,T=new L;function E(R){A.fromBufferAttribute(i,R),T.copy(A);const w=o[R];M.copy(w),M.sub(A.multiplyScalar(A.dot(w))).normalize(),v.crossVectors(T,w);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,w=y.length;R<w;++R){const x=y[R],P=x.start,B=x.count;for(let F=P,H=P+B;F<H;F+=3)E(t.getX(F+0)),E(t.getX(F+1)),E(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ce(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new ce(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ue,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ro=new ie,Bn=new Ea,fs=new Jn,ao=new L,ps=new L,ms=new L,gs=new L,gr=new L,_s=new L,oo=new L,vs=new L;class Y extends xe{constructor(t=new ue,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){_s.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(gr.fromBufferAttribute(u,t),a?_s.addScaledVector(gr,h):_s.addScaledVector(gr.sub(e),h))}e.add(_s)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fs.copy(n.boundingSphere),fs.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(fs.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(fs,ao)===null||Bn.origin.distanceToSquared(ao)>(t.far-t.near)**2))&&(ro.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(ro),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,A=M;v<A;v+=3){const T=o.getX(v),E=o.getX(v+1),R=o.getX(v+2);i=Ms(this,f,t,n,c,h,u,T,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),M=o.getX(m+1),v=o.getX(m+2);i=Ms(this,a,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,A=M;v<A;v+=3){const T=v,E=v+1,R=v+2;i=Ms(this,f,t,n,c,h,u,T,E,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,M=m+1,v=m+2;i=Ms(this,a,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function oh(s,t,e,n,i,r,a,o){let l;if(t.side===Pe?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===Ln,o),l===null)return null;vs.copy(o),vs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(vs);return c<e.near||c>e.far?null:{distance:c,point:vs.clone(),object:s}}function Ms(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ps),s.getVertexPosition(l,ms),s.getVertexPosition(c,gs);const h=oh(s,t,e,n,ps,ms,gs,oo);if(h){const u=new L;Je.getBarycoord(oo,ps,ms,gs,u),i&&(h.uv=Je.getInterpolatedAttribute(i,o,l,c,u,new It)),r&&(h.uv1=Je.getInterpolatedAttribute(r,o,l,c,u,new It)),a&&(h.normal=Je.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};Je.getNormal(ps,ms,gs,d.normal),h.face=d,h.barycoord=u}return h}class pt extends ue{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function g(_,m,f,y,M,v,A,T,E,R,w){const x=v/E,P=A/R,B=v/2,F=A/2,H=T/2,K=E+1,Z=R+1;let tt=0,V=0;const ut=new L;for(let X=0;X<Z;X++){const lt=X*P-F;for(let at=0;at<K;at++){const ht=at*x-B;ut[_]=ht*y,ut[m]=lt*M,ut[f]=H,c.push(ut.x,ut.y,ut.z),ut[_]=0,ut[m]=0,ut[f]=T>0?1:-1,h.push(ut.x,ut.y,ut.z),u.push(at/E),u.push(1-X/R),tt+=1}}for(let X=0;X<R;X++)for(let lt=0;lt<E;lt++){const at=d+lt+K*X,ht=d+lt+K*(X+1),O=d+(lt+1)+K*(X+1),$=d+(lt+1)+K*X;l.push(at,ht,$),l.push(ht,O,$),V+=6}o.addGroup(p,V,w),p+=V,d+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Di(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){const t={};for(let e=0;e<s.length;e++){const n=Di(s[e]);for(const i in n)t[i]=n[i]}return t}function lh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function bl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const Qi={clone:Di,merge:Ue};var ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class be extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ch,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Di(t.uniforms),this.uniformsGroups=lh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Tl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new L,lo=new It,co=new It;class $e extends Tl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ji*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-t/Rn.z)}getViewSize(t,e){return this.getViewBounds(t,lo,co),e.subVectors(co,lo)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ki*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,di=1;class uh extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new $e(ui,di,t,e);i.layers=this.layers,this.add(i);const r=new $e(ui,di,t,e);r.layers=this.layers,this.add(r);const a=new $e(ui,di,t,e);a.layers=this.layers,this.add(a);const o=new $e(ui,di,t,e);o.layers=this.layers,this.add(o);const l=new $e(ui,di,t,e);l.layers=this.layers,this.add(l);const c=new $e(ui,di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class El extends De{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dh extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new El(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pt(5,5,5),r=new be({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pe,blending:Mn});r.uniforms.tEquirect.value=e;const a=new Y(i,r),o=e.minFilter;return e.minFilter===Zn&&(e.minFilter=cn),new uh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}class Zt extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fh={type:"move"};class _r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fh)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Aa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new J(t),this.density=e}clone(){return new Aa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ph extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ne,this.environmentIntensity=1,this.environmentRotation=new Ne,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mh{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=da,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ie=new L;class Hs{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),i=le(i,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ce(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ke extends In{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let fi;const ki=new L,pi=new L,mi=new L,gi=new It,Hi=new It,Al=new ie,xs=new L,Vi=new L,ys=new L,ho=new It,vr=new It,uo=new It;class qe extends xe{constructor(t=new ke){if(super(),this.isSprite=!0,this.type="Sprite",fi===void 0){fi=new ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mh(e,5);fi.setIndex([0,1,2,0,2,3]),fi.setAttribute("position",new Hs(n,3,0,!1)),fi.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=fi,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pi.setFromMatrixScale(this.matrixWorld),Al.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),mi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pi.multiplyScalar(-mi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ss(xs.set(-.5,-.5,0),mi,a,pi,i,r),Ss(Vi.set(.5,-.5,0),mi,a,pi,i,r),Ss(ys.set(.5,.5,0),mi,a,pi,i,r),ho.set(0,0),vr.set(1,0),uo.set(1,1);let o=t.ray.intersectTriangle(xs,Vi,ys,!1,ki);if(o===null&&(Ss(Vi.set(-.5,.5,0),mi,a,pi,i,r),vr.set(0,1),o=t.ray.intersectTriangle(xs,ys,Vi,!1,ki),o===null))return;const l=t.ray.origin.distanceTo(ki);l<t.near||l>t.far||e.push({distance:l,point:ki.clone(),uv:Je.getInterpolation(ki,xs,Vi,ys,ho,vr,uo,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ss(s,t,e,n,i,r){gi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Hi.x=r*gi.x-i*gi.y,Hi.y=i*gi.x+r*gi.y):Hi.copy(gi),s.copy(t),s.x+=Hi.x,s.y+=Hi.y,s.applyMatrix4(Al)}class Cl extends De{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ve,h=Ve,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fo extends ce{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const _i=new ie,po=new ie,ws=[],mo=new jn,gh=new ie,Wi=new Y,Xi=new Jn;class bs extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gh)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),mo.copy(t.boundingBox).applyMatrix4(_i),this.boundingBox.union(mo)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,_i),Xi.copy(t.boundingSphere).applyMatrix4(_i),this.boundingSphere.union(Xi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Wi.geometry=this.geometry,Wi.material=this.material,Wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xi.copy(this.boundingSphere),Xi.applyMatrix4(n),t.ray.intersectsSphere(Xi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,_i),po.multiplyMatrices(n,_i),Wi.matrixWorld=po,Wi.raycast(t,ws);for(let a=0,o=ws.length;a<o;a++){const l=ws[a];l.instanceId=r,l.object=this,e.push(l)}ws.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cl(new Float32Array(i*this.count),i,this.count,xa,hn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mr=new L,_h=new L,vh=new Vt;class Vn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Mr.subVectors(n,e).cross(_h.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Mr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||vh.getNormalMatrix(t),i=this.coplanarPoint(Mr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Jn,Ts=new L;class Ca{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,r=new Vn,a=new Vn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],_=i[10],m=i[11],f=i[12],y=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+a,d+h,m+g,v+y).normalize(),n[3].setComponents(l-a,d-h,m-g,v-y).normalize(),n[4].setComponents(l-o,d-u,m-_,v-M).normalize(),e===vn)n[5].setComponents(l+o,d+u,m+_,v+M).normalize();else if(e===Gs)n[5].setComponents(o,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ts.x=i.normal.x>0?t.max.x:t.min.x,Ts.y=i.normal.y>0?t.max.y:t.min.y,Ts.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ra extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new J(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vs=new L,Ws=new L,go=new ie,Yi=new Ea,Es=new Jn,xr=new L,_o=new L;class Mh extends xe{constructor(t=new ue,e=new Ra){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Vs.fromBufferAttribute(e,i-1),Ws.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Vs.distanceTo(Ws);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=r,t.ray.intersectsSphere(Es)===!1)return;go.copy(i).invert(),Yi.copy(t.ray).applyMatrix4(go);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),y=h.getX(_+1),M=As(this,t,Yi,l,f,y,_);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=As(this,t,Yi,l,_,m,g-1);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=As(this,t,Yi,l,_,_+1,_);f&&e.push(f)}if(this.isLineLoop){const _=As(this,t,Yi,l,g-1,p,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function As(s,t,e,n,i,r,a){const o=s.geometry.attributes.position;if(Vs.fromBufferAttribute(o,i),Ws.fromBufferAttribute(o,r),e.distanceSqToSegment(Vs,Ws,xr,_o)>n)return;xr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xr);if(!(c<t.near||c>t.far))return{distance:c,point:_o.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const vo=new L,Mo=new L;class Rl extends Mh{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)vo.fromBufferAttribute(e,i),Mo.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+vo.distanceTo(Mo);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mi extends In{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new J(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xo=new ie,fa=new Ea,Cs=new Jn,Rs=new L;class qi extends xe{constructor(t=new ue,e=new Mi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=r,t.ray.intersectsSphere(Cs)===!1)return;xo.copy(i).invert(),fa.copy(t.ray).applyMatrix4(xo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);Rs.fromBufferAttribute(u,m),yo(Rs,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,_=p;g<_;g++)Rs.fromBufferAttribute(u,g),yo(Rs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yo(s,t,e,n,i,r,a){const o=fa.distanceSqToPoint(s);if(o<e){const l=new L;fa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class je extends De{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pl extends De{constructor(t,e,n,i,r,a,o,l,c,h=wi){if(h!==wi&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=$n),n===void 0&&h===Ri&&(n=Ci),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ve,this.minFilter=l!==void 0?l:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ta(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Oe extends ue{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;y(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(p,2));function y(){const v=new L,A=new L;let T=0;const E=(e-t)/n;for(let R=0;R<=r;R++){const w=[],x=R/r,P=x*(e-t)+t;for(let B=0;B<=i;B++){const F=B/i,H=F*l+o,K=Math.sin(H),Z=Math.cos(H);A.x=P*K,A.y=-x*n+m,A.z=P*Z,u.push(A.x,A.y,A.z),v.set(K,E,Z).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-x),w.push(g++)}_.push(w)}for(let R=0;R<i;R++)for(let w=0;w<r;w++){const x=_[w][R],P=_[w+1][R],B=_[w+1][R+1],F=_[w][R+1];(t>0||w!==0)&&(h.push(x,P,F),T+=3),(e>0||w!==r-1)&&(h.push(P,B,F),T+=3)}c.addGroup(f,T,0),f+=T}function M(v){const A=g,T=new It,E=new L;let R=0;const w=v===!0?t:e,x=v===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const P=g;for(let B=0;B<=i;B++){const H=B/i*l+o,K=Math.cos(H),Z=Math.sin(H);E.x=w*Z,E.y=m*x,E.z=w*K,u.push(E.x,E.y,E.z),d.push(0,x,0),T.x=K*.5+.5,T.y=Z*.5*x+.5,p.push(T.x,T.y),g++}for(let B=0;B<i;B++){const F=A+B,H=P+B;v===!0?h.push(H,H+1,F):h.push(H+1,H,F),R+=3}c.addGroup(f,R,v===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ke extends Oe{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ke(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pa extends ue{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const M=new L,v=new L,A=new L;for(let T=0;T<e.length;T+=3)p(e[T+0],M),p(e[T+1],v),p(e[T+2],A),l(M,v,A,y)}function l(y,M,v,A){const T=A+1,E=[];for(let R=0;R<=T;R++){E[R]=[];const w=y.clone().lerp(v,R/T),x=M.clone().lerp(v,R/T),P=T-R;for(let B=0;B<=P;B++)B===0&&R===T?E[R][B]=w:E[R][B]=w.clone().lerp(x,B/P)}for(let R=0;R<T;R++)for(let w=0;w<2*(T-R)-1;w++){const x=Math.floor(w/2);w%2===0?(d(E[R][x+1]),d(E[R+1][x]),d(E[R][x])):(d(E[R][x+1]),d(E[R+1][x+1]),d(E[R+1][x]))}}function c(y){const M=new L;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const y=new L;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const v=m(y)/2/Math.PI+.5,A=f(y)/Math.PI+.5;a.push(v,1-A)}g(),u()}function u(){for(let y=0;y<a.length;y+=6){const M=a[y+0],v=a[y+2],A=a[y+4],T=Math.max(M,v,A),E=Math.min(M,v,A);T>.9&&E<.1&&(M<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function p(y,M){const v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const y=new L,M=new L,v=new L,A=new L,T=new It,E=new It,R=new It;for(let w=0,x=0;w<r.length;w+=9,x+=6){y.set(r[w+0],r[w+1],r[w+2]),M.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),T.set(a[x+0],a[x+1]),E.set(a[x+2],a[x+3]),R.set(a[x+4],a[x+5]),A.copy(y).add(M).add(v).divideScalar(3);const P=m(A);_(T,x+0,y,P),_(E,x+2,M,P),_(R,x+4,v,P)}}function _(y,M,v,A){A<0&&y.x===1&&(a[M]=y.x-1),v.x===0&&v.z===0&&(a[M]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.vertices,t.indices,t.radius,t.details)}}class xi extends Pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xi(t.radius,t.detail)}}class me extends ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-a;for(let M=0;M<c;M++){const v=M*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const M=y+c*f,v=y+c*(f+1),A=y+1+c*(f+1),T=y+1+c*f;p.push(M,v,T),p.push(v,A,T)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new me(t.width,t.height,t.widthSegments,t.heightSegments)}}class qs extends ue{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new L,g=new It;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let f=0;f<n;f++){const y=f+m,M=y,v=y+n+1,A=y+n+2,T=y+1;o.push(M,v,T),o.push(v,A,T)}}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Kn extends ue{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const y=[],M=f/n;let v=0;f===0&&a===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const T=A/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+M*o),u.y=t*Math.cos(a+M*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+M*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-M),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const M=h[f][y+1],v=h[f][y],A=h[f+1][y],T=h[f+1][y+1];(f!==0||a>0)&&p.push(M,v,T),(f!==n-1||l<Math.PI)&&p.push(v,A,T)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xs extends ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new L,u=new L,d=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const _=g/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const _=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,y=(i+1)*p+g;a.push(_,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class xh extends be{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yt extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new J(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new J(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ne,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class yh extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sh extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Dl extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new J(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const yr=new ie,So=new L,wo=new L;class wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;So.setFromMatrixPosition(t.matrixWorld),e.position.copy(So),wo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wo),e.updateMatrixWorld(),yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Da extends Tl{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class bh extends wh{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bo extends Dl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new bh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Th extends Dl{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Eh extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Ll{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=To(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=To();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function To(){return performance.now()}class Ah extends Rl{constructor(t=10,e=10,n=4473924,i=8947848){n=new J(n),i=new J(i);const r=e/2,a=t/e,o=t/2,l=[],c=[];for(let d=0,p=0,g=-o;d<=e;d++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=d===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new ue;h.setAttribute("position",new ne(l,3)),h.setAttribute("color",new ne(c,3));const u=new Ra({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Eo(s,t,e,n){const i=Ch(n);switch(e){case hl:return s*t;case dl:return s*t;case fl:return s*t*2;case xa:return s*t/i.components*i.byteLength;case ya:return s*t/i.components*i.byteLength;case pl:return s*t*2/i.components*i.byteLength;case Sa:return s*t*2/i.components*i.byteLength;case ul:return s*t*3/i.components*i.byteLength;case Qe:return s*t*4/i.components*i.byteLength;case wa:return s*t*4/i.components*i.byteLength;case Is:case Us:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ns:case Fs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case kr:case Vr:return Math.max(s,16)*Math.max(t,8)/4;case Gr:case Hr:return Math.max(s,8)*Math.max(t,8)/2;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Kr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $r:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case jr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Jr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Qr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Os:case oa:case la:return Math.ceil(s/4)*Math.ceil(t/4)*16;case ml:case ca:return Math.ceil(s/4)*Math.ceil(t/4)*8;case ha:case ua:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ch(s){switch(s){case wn:case ol:return{byteLength:1,components:1};case ji:case ll:case xn:return{byteLength:2,components:1};case va:case Ma:return{byteLength:2,components:4};case $n:case _a:case hn:return{byteLength:4,components:1};case cl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ma);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Il(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Rh(s){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var Ph=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dh=`#ifdef USE_ALPHAHASH
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
#endif`,Lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fh=`#ifdef USE_AOMAP
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
#endif`,Oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bh=`#ifdef USE_BATCHING
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
#endif`,zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vh=`#ifdef USE_IRIDESCENCE
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
#endif`,Wh=`#ifdef USE_BUMPMAP
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
#endif`,Xh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qh=`#define PI 3.141592653589793
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
} // validated`,tu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eu=`vec3 transformedNormal = objectNormal;
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
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ru=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,au="gl_FragColor = linearToOutputTexel( gl_FragColor );",ou=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lu=`#ifdef USE_ENVMAP
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
#endif`,cu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_u=`#ifdef USE_GRADIENTMAP
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
}`,vu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yu=`uniform bool receiveShadow;
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
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Au=`PhysicalMaterial material;
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
#endif`,Cu=`struct PhysicalMaterial {
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
}`,Ru=`
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
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Du=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zu=`#if defined( USE_POINTS_UV )
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
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xu=`#ifdef USE_MORPHTARGETS
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
#endif`,Yu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ju=`#ifdef USE_NORMALMAP
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
#endif`,Qu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ed=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,id=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ad=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,od=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ud=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pd=`float getShadowMask() {
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
}`,md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gd=`#ifdef USE_SKINNING
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
#endif`,_d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vd=`#ifdef USE_SKINNING
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
#endif`,Md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wd=`#ifdef USE_TRANSMISSION
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
#endif`,bd=`#ifdef USE_TRANSMISSION
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
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pd=`uniform sampler2D t2D;
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ld=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`#include <common>
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
}`,Fd=`#if DEPTH_PACKING == 3200
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
}`,Od=`#define DISTANCE
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
}`,Bd=`#define DISTANCE
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
}`,zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kd=`uniform float scale;
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
}`,Hd=`uniform vec3 diffuse;
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
}`,Vd=`#include <common>
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
}`,Wd=`uniform vec3 diffuse;
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
}`,Xd=`#define LAMBERT
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
}`,Yd=`#define LAMBERT
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
}`,qd=`#define MATCAP
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
}`,Zd=`#define MATCAP
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
}`,Kd=`#define NORMAL
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
}`,$d=`#define NORMAL
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
}`,jd=`#define PHONG
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
}`,Jd=`#define PHONG
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
}`,Qd=`#define STANDARD
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
}`,tf=`#define STANDARD
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
}`,ef=`#define TOON
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
}`,nf=`#define TOON
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
}`,sf=`uniform float size;
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
}`,rf=`uniform vec3 diffuse;
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
}`,af=`#include <common>
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
}`,of=`uniform vec3 color;
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
}`,lf=`uniform float rotation;
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
}`,cf=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Ph,alphahash_pars_fragment:Dh,alphamap_fragment:Lh,alphamap_pars_fragment:Ih,alphatest_fragment:Uh,alphatest_pars_fragment:Nh,aomap_fragment:Fh,aomap_pars_fragment:Oh,batching_pars_vertex:Bh,batching_vertex:zh,begin_vertex:Gh,beginnormal_vertex:kh,bsdfs:Hh,iridescence_fragment:Vh,bumpmap_pars_fragment:Wh,clipping_planes_fragment:Xh,clipping_planes_pars_fragment:Yh,clipping_planes_pars_vertex:qh,clipping_planes_vertex:Zh,color_fragment:Kh,color_pars_fragment:$h,color_pars_vertex:jh,color_vertex:Jh,common:Qh,cube_uv_reflection_fragment:tu,defaultnormal_vertex:eu,displacementmap_pars_vertex:nu,displacementmap_vertex:iu,emissivemap_fragment:su,emissivemap_pars_fragment:ru,colorspace_fragment:au,colorspace_pars_fragment:ou,envmap_fragment:lu,envmap_common_pars_fragment:cu,envmap_pars_fragment:hu,envmap_pars_vertex:uu,envmap_physical_pars_fragment:Su,envmap_vertex:du,fog_vertex:fu,fog_pars_vertex:pu,fog_fragment:mu,fog_pars_fragment:gu,gradientmap_pars_fragment:_u,lightmap_pars_fragment:vu,lights_lambert_fragment:Mu,lights_lambert_pars_fragment:xu,lights_pars_begin:yu,lights_toon_fragment:wu,lights_toon_pars_fragment:bu,lights_phong_fragment:Tu,lights_phong_pars_fragment:Eu,lights_physical_fragment:Au,lights_physical_pars_fragment:Cu,lights_fragment_begin:Ru,lights_fragment_maps:Pu,lights_fragment_end:Du,logdepthbuf_fragment:Lu,logdepthbuf_pars_fragment:Iu,logdepthbuf_pars_vertex:Uu,logdepthbuf_vertex:Nu,map_fragment:Fu,map_pars_fragment:Ou,map_particle_fragment:Bu,map_particle_pars_fragment:zu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Hu,morphcolor_vertex:Vu,morphnormal_vertex:Wu,morphtarget_pars_vertex:Xu,morphtarget_vertex:Yu,normal_fragment_begin:qu,normal_fragment_maps:Zu,normal_pars_fragment:Ku,normal_pars_vertex:$u,normal_vertex:ju,normalmap_pars_fragment:Ju,clearcoat_normal_fragment_begin:Qu,clearcoat_normal_fragment_maps:td,clearcoat_pars_fragment:ed,iridescence_pars_fragment:nd,opaque_fragment:id,packing:sd,premultiplied_alpha_fragment:rd,project_vertex:ad,dithering_fragment:od,dithering_pars_fragment:ld,roughnessmap_fragment:cd,roughnessmap_pars_fragment:hd,shadowmap_pars_fragment:ud,shadowmap_pars_vertex:dd,shadowmap_vertex:fd,shadowmask_pars_fragment:pd,skinbase_vertex:md,skinning_pars_vertex:gd,skinning_vertex:_d,skinnormal_vertex:vd,specularmap_fragment:Md,specularmap_pars_fragment:xd,tonemapping_fragment:yd,tonemapping_pars_fragment:Sd,transmission_fragment:wd,transmission_pars_fragment:bd,uv_pars_fragment:Td,uv_pars_vertex:Ed,uv_vertex:Ad,worldpos_vertex:Cd,background_vert:Rd,background_frag:Pd,backgroundCube_vert:Dd,backgroundCube_frag:Ld,cube_vert:Id,cube_frag:Ud,depth_vert:Nd,depth_frag:Fd,distanceRGBA_vert:Od,distanceRGBA_frag:Bd,equirect_vert:zd,equirect_frag:Gd,linedashed_vert:kd,linedashed_frag:Hd,meshbasic_vert:Vd,meshbasic_frag:Wd,meshlambert_vert:Xd,meshlambert_frag:Yd,meshmatcap_vert:qd,meshmatcap_frag:Zd,meshnormal_vert:Kd,meshnormal_frag:$d,meshphong_vert:jd,meshphong_frag:Jd,meshphysical_vert:Qd,meshphysical_frag:tf,meshtoon_vert:ef,meshtoon_frag:nf,points_vert:sf,points_frag:rf,shadow_vert:af,shadow_frag:of,sprite_vert:lf,sprite_frag:cf},ft={common:{diffuse:{value:new J(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new J(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new J(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},ln={basic:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new J(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ue([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ue([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new J(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ue([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new J(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ue([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ue([ft.points,ft.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ue([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ue([ft.common,ft.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ue([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ue([ft.sprite,ft.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ue([ft.common,ft.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ue([ft.lights,ft.fog,{color:{value:new J(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};ln.physical={uniforms:Ue([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new J(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new J(0)},specularColor:{value:new J(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Ps={r:0,b:0,g:0},Gn=new Ne,hf=new ie;function uf(s,t,e,n,i,r,a){const o=new J(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function _(M){let v=!1;const A=g(M);A===null?f(o,l):A&&A.isColor&&(f(A,1),v=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(M,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===Ys)?(h===void 0&&(h=new Y(new pt(1,1,1),new be({name:"BackgroundCubeMaterial",uniforms:Di(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Pe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Gn.copy(v.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hf.makeRotationFromEuler(Gn)),h.material.toneMapped=te.getTransfer(A.colorSpace)!==oe,(u!==A||d!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Y(new me(2,2),new be({name:"BackgroundMaterial",uniforms:Di(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=te.getTransfer(A.colorSpace)!==oe,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,p=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function f(M,v){M.getRGB(Ps,bl(s)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,v,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,f(o,l)},render:_,addToRenderList:m,dispose:y}}function df(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(x,P,B,F,H){let K=!1;const Z=u(F,B,P);r!==Z&&(r=Z,c(r.object)),K=p(x,F,B,H),K&&g(x,F,B,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(x,P,B,F),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,P,B){const F=B.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let K=H[P.id];K===void 0&&(K={},H[P.id]=K);let Z=K[F];return Z===void 0&&(Z=d(l()),K[F]=Z),Z}function d(x){const P=[],B=[],F=[];for(let H=0;H<e;H++)P[H]=0,B[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,P,B,F){const H=r.attributes,K=P.attributes;let Z=0;const tt=B.getAttributes();for(const V in tt)if(tt[V].location>=0){const X=H[V];let lt=K[V];if(lt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),X===void 0||X.attribute!==lt||lt&&X.data!==lt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==F}function g(x,P,B,F){const H={},K=P.attributes;let Z=0;const tt=B.getAttributes();for(const V in tt)if(tt[V].location>=0){let X=K[V];X===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(X=x.instanceColor));const lt={};lt.attribute=X,X&&X.data&&(lt.data=X.data),H[V]=lt,Z++}r.attributes=H,r.attributesNum=Z,r.index=F}function _(){const x=r.newAttributes;for(let P=0,B=x.length;P<B;P++)x[P]=0}function m(x){f(x,0)}function f(x,P){const B=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;B[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),H[x]!==P&&(s.vertexAttribDivisor(x,P),H[x]=P)}function y(){const x=r.newAttributes,P=r.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==x[B]&&(s.disableVertexAttribArray(B),P[B]=0)}function M(x,P,B,F,H,K,Z){Z===!0?s.vertexAttribIPointer(x,P,B,H,K):s.vertexAttribPointer(x,P,B,F,H,K)}function v(x,P,B,F){_();const H=F.attributes,K=B.getAttributes(),Z=P.defaultAttributeValues;for(const tt in K){const V=K[tt];if(V.location>=0){let ut=H[tt];if(ut===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),ut!==void 0){const X=ut.normalized,lt=ut.itemSize,at=t.get(ut);if(at===void 0)continue;const ht=at.buffer,O=at.type,$=at.bytesPerElement,G=O===s.INT||O===s.UNSIGNED_INT||ut.gpuType===_a;if(ut.isInterleavedBufferAttribute){const q=ut.data,nt=q.stride,et=ut.offset;if(q.isInstancedInterleavedBuffer){for(let it=0;it<V.locationSize;it++)f(V.location+it,q.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let it=0;it<V.locationSize;it++)m(V.location+it);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let it=0;it<V.locationSize;it++)M(V.location+it,lt/V.locationSize,O,X,nt*$,(et+lt/V.locationSize*it)*$,G)}else{if(ut.isInstancedBufferAttribute){for(let q=0;q<V.locationSize;q++)f(V.location+q,ut.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let q=0;q<V.locationSize;q++)m(V.location+q);s.bindBuffer(s.ARRAY_BUFFER,ht);for(let q=0;q<V.locationSize;q++)M(V.location+q,lt/V.locationSize,O,X,lt*$,lt/V.locationSize*q*$,G)}}else if(Z!==void 0){const X=Z[tt];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(V.location,X);break;case 3:s.vertexAttrib3fv(V.location,X);break;case 4:s.vertexAttrib4fv(V.location,X);break;default:s.vertexAttrib1fv(V.location,X)}}}}y()}function A(){R();for(const x in n){const P=n[x];for(const B in P){const F=P[B];for(const H in F)h(F[H].object),delete F[H];delete P[B]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const B in P){const F=P[B];for(const H in F)h(F[H].object),delete F[H];delete P[B]}delete n[x.id]}function E(x){for(const P in n){const B=n[P];if(B[x.id]===void 0)continue;const F=B[x.id];for(const H in F)h(F[H].object),delete F[H];delete B[x.id]}}function R(){w(),a=!0,r!==i&&(r=i,c(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function ff(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pf(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Qe&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const R=E===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==wn&&n.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==hn&&!R)}function l(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:A,maxSamples:T}}function mf(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Vn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const y=r?0:n,M=y*4;let v=f.clippingState||null;l.value=v,v=h(g,d,M,p);for(let A=0;A!==M;++A)v[A]=e[A];f.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,v=p;M!==_;++M,v+=4)a.copy(u[M]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function gf(s){let t=new WeakMap;function e(a,o){return o===Or?a.mapping=Ei:o===Br&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Or||o===Br)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new dh(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const yi=4,Ao=[.125,.215,.35,.446,.526,.582],Yn=20,Sr=new Da,Co=new J;let wr=null,br=0,Tr=0,Er=!1;const Wn=(1+Math.sqrt(5))/2,vi=1/Wn,Ro=[new L(-Wn,vi,0),new L(Wn,vi,0),new L(-vi,0,Wn),new L(vi,0,Wn),new L(0,Wn,-vi),new L(0,Wn,vi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],_f=new L;class Po{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:a=256,position:o=_f}=r;wr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wr,br,Tr),this._renderer.xr.enabled=Er,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wr=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:xn,format:Qe,colorSpace:Pi,depthBuffer:!1},i=Do(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vf(r)),this._blurMaterial=Mf(r,t,e)}return i}_compileMaterial(t){const e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,Sr)}_sceneToCubeUV(t,e,n,i,r){const l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Co),u.toneMapping=Dn,u.autoClear=!1;const g=new $t({name:"PMREM.Background",side:Pe,depthWrite:!1,depthTest:!1}),_=new Y(new pt,g);let m=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,m=!0):(g.color.copy(Co),m=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const v=this._cubeSize;Ds(i,M*v,y>2?v:0,v,v),u.setRenderTarget(i),m&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ei||t.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Io()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Y(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Sr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ro[(i-r-1)%Ro.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Y(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yn;m>Yn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let y=0;for(let E=0;E<Yn;++E){const R=E/_,w=Math.exp(-R*R/2);f.push(w),E===0?y+=w:E<m&&(y+=2*w)}for(let E=0;E<f.length;E++)f[E]=f[E]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[i],A=3*v*(i>M-yi?i-M+yi:0),T=4*(this._cubeSize-v);Ds(e,A,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Sr)}}function vf(s){const t=[],e=[],n=[];let i=s;const r=s-yi+1+Ao.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>s-yi?l=Ao[a-s+yi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),M=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){const E=T%3*2/3-1,R=T>2?0:-1,w=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];y.set(w,_*g*T),M.set(d,m*g*T);const x=[T,T,T,T,T,T];v.set(x,f*g*T)}const A=new ue;A.setAttribute("position",new ce(y,_)),A.setAttribute("uv",new ce(M,m)),A.setAttribute("faceIndex",new ce(v,f)),t.push(A),i>yi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Do(s,t,e){const n=new on(s,t,e);return n.texture.mapping=Ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Mf(s,t,e){const n=new Float32Array(Yn),i=new L(0,1,0);return new be({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:La(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Lo(){return new be({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Io(){return new be({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function La(){return`

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
	`}function xf(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Or||l===Br,h=l===Ei||l===Ai;if(c||h){let u=t.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Po(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Po(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function yf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Hn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sf(s,t,e,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let M=0,v=y.length;M<v;M+=3){const A=y[M+0],T=y[M+1],E=y[M+2];d.push(A,T,T,E,E,A)}}else if(g!==void 0){const y=g.array;_=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const A=M+0,T=M+1,E=M+2;d.push(A,T,T,E,E,A)}}else return;const m=new(vl(d)?wl:Sl)(d,1);m.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function wf(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y]*_[y];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Tf(s,t,e){const n=new WeakMap,i=new ge;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let x=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=o.attributes.position.count*v,T=1;A>t.maxTextureSize&&(T=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const E=new Float32Array(A*T*4*u),R=new Ml(E,A,T,u);R.type=hn,R.needsUpdate=!0;const w=v*4;for(let P=0;P<u;P++){const B=f[P],F=y[P],H=M[P],K=A*T*4*P;for(let Z=0;Z<B.count;Z++){const tt=Z*w;g===!0&&(i.fromBufferAttribute(B,Z),E[K+tt+0]=i.x,E[K+tt+1]=i.y,E[K+tt+2]=i.z,E[K+tt+3]=0),_===!0&&(i.fromBufferAttribute(F,Z),E[K+tt+4]=i.x,E[K+tt+5]=i.y,E[K+tt+6]=i.z,E[K+tt+7]=0),m===!0&&(i.fromBufferAttribute(H,Z),E[K+tt+8]=i.x,E[K+tt+9]=i.y,E[K+tt+10]=i.z,E[K+tt+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:R,size:new It(A,T)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Ef(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}const Ul=new De,Uo=new Pl(1,1),Nl=new Ml,Fl=new $c,Ol=new El,No=[],Fo=[],Oo=new Float32Array(16),Bo=new Float32Array(9),zo=new Float32Array(4);function Ui(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=No[i];if(r===void 0&&(r=new Float32Array(i),No[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Zs(s,t){let e=Fo[t];e===void 0&&(e=new Int32Array(t),Fo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Af(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Cf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function Rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function Pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function Df(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;zo.set(n),s.uniformMatrix2fv(this.addr,!1,zo),Se(e,n)}}function Lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Bo.set(n),s.uniformMatrix3fv(this.addr,!1,Bo),Se(e,n)}}function If(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(ye(e,n))return;Oo.set(n),s.uniformMatrix4fv(this.addr,!1,Oo),Se(e,n)}}function Uf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function Ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function Of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function Bf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Hf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Uo.compareFunction=_l,r=Uo):r=Ul,e.setTexture2D(t||r,i)}function Vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fl,i)}function Wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ol,i)}function Xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Nl,i)}function Yf(s){switch(s){case 5126:return Af;case 35664:return Cf;case 35665:return Rf;case 35666:return Pf;case 35674:return Df;case 35675:return Lf;case 35676:return If;case 5124:case 35670:return Uf;case 35667:case 35671:return Nf;case 35668:case 35672:return Ff;case 35669:case 35673:return Of;case 5125:return Bf;case 36294:return zf;case 36295:return Gf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Hf;case 35679:case 36299:case 36307:return Vf;case 35680:case 36300:case 36308:case 36293:return Wf;case 36289:case 36303:case 36311:case 36292:return Xf}}function qf(s,t){s.uniform1fv(this.addr,t)}function Zf(s,t){const e=Ui(t,this.size,2);s.uniform2fv(this.addr,e)}function Kf(s,t){const e=Ui(t,this.size,3);s.uniform3fv(this.addr,e)}function $f(s,t){const e=Ui(t,this.size,4);s.uniform4fv(this.addr,e)}function jf(s,t){const e=Ui(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Jf(s,t){const e=Ui(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Qf(s,t){const e=Ui(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function tp(s,t){s.uniform1iv(this.addr,t)}function ep(s,t){s.uniform2iv(this.addr,t)}function np(s,t){s.uniform3iv(this.addr,t)}function ip(s,t){s.uniform4iv(this.addr,t)}function sp(s,t){s.uniform1uiv(this.addr,t)}function rp(s,t){s.uniform2uiv(this.addr,t)}function ap(s,t){s.uniform3uiv(this.addr,t)}function op(s,t){s.uniform4uiv(this.addr,t)}function lp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ul,r[a])}function cp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Fl,r[a])}function hp(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Ol,r[a])}function up(s,t,e){const n=this.cache,i=t.length,r=Zs(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Nl,r[a])}function dp(s){switch(s){case 5126:return qf;case 35664:return Zf;case 35665:return Kf;case 35666:return $f;case 35674:return jf;case 35675:return Jf;case 35676:return Qf;case 5124:case 35670:return tp;case 35667:case 35671:return ep;case 35668:case 35672:return np;case 35669:case 35673:return ip;case 5125:return sp;case 36294:return rp;case 36295:return ap;case 36296:return op;case 35678:case 36198:case 36298:case 36306:case 35682:return lp;case 35679:case 36299:case 36307:return cp;case 35680:case 36300:case 36308:case 36293:return hp;case 36289:case 36303:case 36311:case 36292:return up}}class fp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yf(e.type)}}class pp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dp(e.type)}}class mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function Go(s,t){s.seq.push(t),s.map[t.id]=t}function gp(s,t,e){const n=s.name,i=n.length;for(Ar.lastIndex=0;;){const r=Ar.exec(n),a=Ar.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Go(e,c===void 0?new fp(o,s,t):new pp(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new mp(o),Go(e,u)),e=u}}}class Bs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);gp(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ko(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const _p=37297;let vp=0;function Mp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Ho=new Vt;function xp(s){te._getMatrix(Ho,te.workingColorSpace,s);const t=`mat3( ${Ho.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(s)){case zs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Vo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Mp(s.getShaderSource(t),a)}else return i}function yp(s,t){const e=xp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sp(s,t){let e;switch(t){case tl:e="Linear";break;case el:e="Reinhard";break;case nl:e="Cineon";break;case ga:e="ACESFilmic";break;case sl:e="AgX";break;case rl:e="Neutral";break;case il:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ls=new L;function wp(){te.getLuminanceCoefficients(Ls);const s=Ls.x.toFixed(4),t=Ls.y.toFixed(4),e=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function Tp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ep(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Zi(s){return s!==""}function Wo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ap=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(s){return s.replace(Ap,Rp)}const Cp=new Map;function Rp(s,t){let e=Xt[t];if(e===void 0){const n=Cp.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pa(e)}const Pp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(s){return s.replace(Pp,Dp)}function Dp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function qo(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ql?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function Ip(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ei:case Ai:t="ENVMAP_TYPE_CUBE";break;case Ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Up(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function Np(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Qo:t="ENVMAP_BLENDING_MULTIPLY";break;case dc:t="ENVMAP_BLENDING_MIX";break;case fc:t="ENVMAP_BLENDING_ADD";break}return t}function Fp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Op(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Lp(e),c=Ip(e),h=Up(e),u=Np(e),d=Fp(e),p=bp(e),g=Tp(r),_=i.createProgram();let m,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Zi).join(`
`),f.length>0&&(f+=`
`)):(m=[qo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),f=[qo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Sp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,yp("linearToOutputTexel",e.outputColorSpace),wp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),a=pa(a),a=Wo(a,e),a=Xo(a,e),o=pa(o),o=Wo(o,e),o=Xo(o,e),a=Yo(a),o=Yo(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=y+m+a,v=y+f+o,A=ko(i,i.VERTEX_SHADER,M),T=ko(i,i.FRAGMENT_SHADER,v);i.attachShader(_,A),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(P){if(s.debug.checkShaderErrors){const B=i.getProgramInfoLog(_).trim(),F=i.getShaderInfoLog(A).trim(),H=i.getShaderInfoLog(T).trim();let K=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,A,T);else{const tt=Vo(i,A,"vertex"),V=Vo(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+tt+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||H==="")&&(Z=!1);Z&&(P.diagnostics={runnable:K,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(A),i.deleteShader(T),R=new Bs(i,_),w=Ep(i,_)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,_p)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}let Bp=0;class zp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gp(t),e.set(t,n)),n}}class Gp{constructor(t){this.id=Bp++,this.code=t,this.usedTimes=0}}function kp(s,t,e,n,i,r,a){const o=new xl,l=new zp,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,x,P,B,F){const H=B.fog,K=F.geometry,Z=w.isMeshStandardMaterial?B.environment:null,tt=(w.isMeshStandardMaterial?e:t).get(w.envMap||Z),V=tt&&tt.mapping===Ys?tt.image.height:null,ut=g[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const X=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,lt=X!==void 0?X.length:0;let at=0;K.morphAttributes.position!==void 0&&(at=1),K.morphAttributes.normal!==void 0&&(at=2),K.morphAttributes.color!==void 0&&(at=3);let ht,O,$,G;if(ut){const ae=ln[ut];ht=ae.vertexShader,O=ae.fragmentShader}else ht=w.vertexShader,O=w.fragmentShader,l.update(w),$=l.getVertexShaderID(w),G=l.getFragmentShaderID(w);const q=s.getRenderTarget(),nt=s.state.buffers.depth.getReversed(),et=F.isInstancedMesh===!0,it=F.isBatchedMesh===!0,Et=!!w.map,yt=!!w.matcap,bt=!!tt,D=!!w.aoMap,jt=!!w.lightMap,Ft=!!w.bumpMap,Pt=!!w.normalMap,Mt=!!w.displacementMap,Dt=!!w.emissiveMap,St=!!w.metalnessMap,C=!!w.roughnessMap,S=w.anisotropy>0,z=w.clearcoat>0,st=w.dispersion>0,ot=w.iridescence>0,Q=w.sheen>0,Lt=w.transmission>0,_t=S&&!!w.anisotropyMap,Tt=z&&!!w.clearcoatMap,Jt=z&&!!w.clearcoatNormalMap,dt=z&&!!w.clearcoatRoughnessMap,At=ot&&!!w.iridescenceMap,Ot=ot&&!!w.iridescenceThicknessMap,Bt=Q&&!!w.sheenColorMap,Ct=Q&&!!w.sheenRoughnessMap,Kt=!!w.specularMap,Wt=!!w.specularColorMap,he=!!w.specularIntensityMap,I=Lt&&!!w.transmissionMap,mt=Lt&&!!w.thicknessMap,j=!!w.gradientMap,rt=!!w.alphaMap,xt=w.alphaTest>0,vt=!!w.alphaHash,Ht=!!w.extensions;let fe=Dn;w.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(fe=s.toneMapping);const Ae={shaderID:ut,shaderType:w.type,shaderName:w.name,vertexShader:ht,fragmentShader:O,defines:w.defines,customVertexShaderID:$,customFragmentShaderID:G,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:it,batchingColor:it&&F._colorsTexture!==null,instancing:et,instancingColor:et&&F.instanceColor!==null,instancingMorph:et&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Pi,alphaToCoverage:!!w.alphaToCoverage,map:Et,matcap:yt,envMap:bt,envMapMode:bt&&tt.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:jt,bumpMap:Ft,normalMap:Pt,displacementMap:d&&Mt,emissiveMap:Dt,normalMapObjectSpace:Pt&&w.normalMapType===_c,normalMapTangentSpace:Pt&&w.normalMapType===gl,metalnessMap:St,roughnessMap:C,anisotropy:S,anisotropyMap:_t,clearcoat:z,clearcoatMap:Tt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:dt,dispersion:st,iridescence:ot,iridescenceMap:At,iridescenceThicknessMap:Ot,sheen:Q,sheenColorMap:Bt,sheenRoughnessMap:Ct,specularMap:Kt,specularColorMap:Wt,specularIntensityMap:he,transmission:Lt,transmissionMap:I,thicknessMap:mt,gradientMap:j,opaque:w.transparent===!1&&w.blending===Si&&w.alphaToCoverage===!1,alphaMap:rt,alphaTest:xt,alphaHash:vt,combine:w.combine,mapUv:Et&&_(w.map.channel),aoMapUv:D&&_(w.aoMap.channel),lightMapUv:jt&&_(w.lightMap.channel),bumpMapUv:Ft&&_(w.bumpMap.channel),normalMapUv:Pt&&_(w.normalMap.channel),displacementMapUv:Mt&&_(w.displacementMap.channel),emissiveMapUv:Dt&&_(w.emissiveMap.channel),metalnessMapUv:St&&_(w.metalnessMap.channel),roughnessMapUv:C&&_(w.roughnessMap.channel),anisotropyMapUv:_t&&_(w.anisotropyMap.channel),clearcoatMapUv:Tt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(w.sheenRoughnessMap.channel),specularMapUv:Kt&&_(w.specularMap.channel),specularColorMapUv:Wt&&_(w.specularColorMap.channel),specularIntensityMapUv:he&&_(w.specularIntensityMap.channel),transmissionMapUv:I&&_(w.transmissionMap.channel),thicknessMapUv:mt&&_(w.thicknessMap.channel),alphaMapUv:rt&&_(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Pt||S),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!K.attributes.uv&&(Et||rt),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:nt,skinning:F.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:at,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:Et&&w.map.isVideoTexture===!0&&te.getTransfer(w.map.colorSpace)===oe,decodeVideoTextureEmissive:Dt&&w.emissiveMap.isVideoTexture===!0&&te.getTransfer(w.emissiveMap.colorSpace)===oe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ee,flipSided:w.side===Pe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ht&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&w.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function f(w){const x=[];if(w.shaderID?x.push(w.shaderID):(x.push(w.customVertexShaderID),x.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)x.push(P),x.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(x,w),M(x,w),x.push(s.outputColorSpace)),x.push(w.customProgramCacheKey),x.join()}function y(w,x){w.push(x.precision),w.push(x.outputColorSpace),w.push(x.envMapMode),w.push(x.envMapCubeUVHeight),w.push(x.mapUv),w.push(x.alphaMapUv),w.push(x.lightMapUv),w.push(x.aoMapUv),w.push(x.bumpMapUv),w.push(x.normalMapUv),w.push(x.displacementMapUv),w.push(x.emissiveMapUv),w.push(x.metalnessMapUv),w.push(x.roughnessMapUv),w.push(x.anisotropyMapUv),w.push(x.clearcoatMapUv),w.push(x.clearcoatNormalMapUv),w.push(x.clearcoatRoughnessMapUv),w.push(x.iridescenceMapUv),w.push(x.iridescenceThicknessMapUv),w.push(x.sheenColorMapUv),w.push(x.sheenRoughnessMapUv),w.push(x.specularMapUv),w.push(x.specularColorMapUv),w.push(x.specularIntensityMapUv),w.push(x.transmissionMapUv),w.push(x.thicknessMapUv),w.push(x.combine),w.push(x.fogExp2),w.push(x.sizeAttenuation),w.push(x.morphTargetsCount),w.push(x.morphAttributeCount),w.push(x.numDirLights),w.push(x.numPointLights),w.push(x.numSpotLights),w.push(x.numSpotLightMaps),w.push(x.numHemiLights),w.push(x.numRectAreaLights),w.push(x.numDirLightShadows),w.push(x.numPointLightShadows),w.push(x.numSpotLightShadows),w.push(x.numSpotLightShadowsWithMaps),w.push(x.numLightProbes),w.push(x.shadowMapType),w.push(x.toneMapping),w.push(x.numClippingPlanes),w.push(x.numClipIntersection),w.push(x.depthPacking)}function M(w,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),w.push(o.mask)}function v(w){const x=g[w.type];let P;if(x){const B=ln[x];P=Qi.clone(B.uniforms)}else P=w.uniforms;return P}function A(w,x){let P;for(let B=0,F=h.length;B<F;B++){const H=h[B];if(H.cacheKey===x){P=H,++P.usedTimes;break}}return P===void 0&&(P=new Op(s,x,w,r),h.push(P)),P}function T(w){if(--w.usedTimes===0){const x=h.indexOf(w);h[x]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:A,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:R}}function Hp(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Vp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Zo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ko(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,g,_,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),t++,f}function o(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,_,m){const f=a(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Vp),n.length>1&&n.sort(d||Zo),i.length>1&&i.sort(d||Zo)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Wp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Ko,s.set(n,[a])):i>=r.length?(a=new Ko,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new J};break;case"SpotLight":e={position:new L,direction:new L,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new J,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new J,groundColor:new J};break;case"RectAreaLight":e={color:new J,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function Yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let qp=0;function Zp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Kp(s){const t=new Xp,e=Yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new ie,a=new ie;function o(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,y=0,M=0,v=0,A=0,T=0,E=0;c.sort(Zp);for(let w=0,x=c.length;w<x;w++){const P=c[w],B=P.color,F=P.intensity,H=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(P.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(P.sh.coefficients[Z],F);E++}else if(P.isDirectionalLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,V=e.get(P);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=Z,p++}else if(P.isSpotLight){const Z=t.get(P);Z.position.setFromMatrixPosition(P.matrixWorld),Z.color.copy(B).multiplyScalar(F),Z.distance=H,Z.coneCos=Math.cos(P.angle),Z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Z.decay=P.decay,n.spot[_]=Z;const tt=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,tt.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=tt.matrix,P.castShadow){const V=e.get(P);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=K,v++}_++}else if(P.isRectAreaLight){const Z=t.get(P);Z.color.copy(B).multiplyScalar(F),Z.halfWidth.set(P.width*.5,0,0),Z.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Z,m++}else if(P.isPointLight){const Z=t.get(P);if(Z.color.copy(P.color).multiplyScalar(P.intensity),Z.distance=P.distance,Z.decay=P.decay,P.castShadow){const tt=P.shadow,V=e.get(P);V.shadowIntensity=tt.intensity,V.shadowBias=tt.bias,V.shadowNormalBias=tt.normalBias,V.shadowRadius=tt.radius,V.shadowMapSize=tt.mapSize,V.shadowCameraNear=tt.camera.near,V.shadowCameraFar=tt.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=Z,g++}else if(P.isHemisphereLight){const Z=t.get(P);Z.skyColor.copy(P.color).multiplyScalar(F),Z.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[f]=Z,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==y||R.numPointShadows!==M||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==E)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=y,R.numPointShadows=M,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=E,n.version=qp++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const M=c[f];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function $o(s){const t=new Kp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function $p(s){let t=new WeakMap;function e(i,r=0){const a=t.get(i);let o;return a===void 0?(o=new $o(s),t.set(i,[o])):r>=a.length?(o=new $o(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const jp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jp=`uniform sampler2D shadow_pass;
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
}`;function Qp(s,t,e){let n=new Ca;const i=new It,r=new It,a=new ge,o=new yh({depthPacking:gc}),l=new Sh,c={},h=e.maxTextureSize,u={[Ln]:Pe,[Pe]:Ln,[Ee]:Ee},d=new be({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:jp,fragmentShader:Jp}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new ue;g.setAttribute("position",new ce(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Y(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let f=this.type;this.render=function(T,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),x=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),B=s.state;B.setBlending(Mn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=f!==_n&&this.type===_n,H=f===_n&&this.type!==_n;for(let K=0,Z=T.length;K<Z;K++){const tt=T[K],V=tt.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ut=V.getFrameExtents();if(i.multiply(ut),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ut.x),i.x=r.x*ut.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ut.y),i.y=r.y*ut.y,V.mapSize.y=r.y)),V.map===null||F===!0||H===!0){const lt=this.type!==_n?{minFilter:Ve,magFilter:Ve}:{};V.map!==null&&V.map.dispose(),V.map=new on(i.x,i.y,lt),V.map.texture.name=tt.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const X=V.getViewportCount();for(let lt=0;lt<X;lt++){const at=V.getViewport(lt);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),B.viewport(a),V.updateMatrices(tt,lt),n=V.getFrustum(),v(E,R,V.camera,tt,this.type)}V.isPointLightShadow!==!0&&this.type===_n&&y(V,R),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(w,x,P)};function y(T,E){const R=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new on(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(E,null,R,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(E,null,R,p,_,null)}function M(T,E,R,w){let x=null;const P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)x=P;else if(x=R.isPointLight===!0?l:o,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const B=x.uuid,F=E.uuid;let H=c[B];H===void 0&&(H={},c[B]=H);let K=H[F];K===void 0&&(K=x.clone(),H[F]=K,E.addEventListener("dispose",A)),x=K}if(x.visible=E.visible,x.wireframe=E.wireframe,w===_n?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:u[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=s.properties.get(x);B.light=R}return x}function v(T,E,R,w,x){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===_n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const F=t.update(T),H=T.material;if(Array.isArray(H)){const K=F.groups;for(let Z=0,tt=K.length;Z<tt;Z++){const V=K[Z],ut=H[V.materialIndex];if(ut&&ut.visible){const X=M(T,ut,w,x);T.onBeforeShadow(s,T,E,R,F,X,V),s.renderBufferDirect(R,null,F,X,T,V),T.onAfterShadow(s,T,E,R,F,X,V)}}}else if(H.visible){const K=M(T,H,w,x);T.onBeforeShadow(s,T,E,R,F,K,null),s.renderBufferDirect(R,null,F,K,T,null),T.onAfterShadow(s,T,E,R,F,K,null)}}const B=T.children;for(let F=0,H=B.length;F<H;F++)v(B[F],E,R,w,x)}function A(T){T.target.removeEventListener("dispose",A);for(const R in c){const w=c[R],x=T.target.uuid;x in w&&(w[x].dispose(),delete w[x])}}}const tm={[Pr]:Dr,[Lr]:Nr,[Ir]:Fr,[Ti]:Ur,[Dr]:Pr,[Nr]:Lr,[Fr]:Ir,[Ur]:Ti};function em(s,t){function e(){let I=!1;const mt=new ge;let j=null;const rt=new ge(0,0,0,0);return{setMask:function(xt){j!==xt&&!I&&(s.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){I=xt},setClear:function(xt,vt,Ht,fe,Ae){Ae===!0&&(xt*=fe,vt*=fe,Ht*=fe),mt.set(xt,vt,Ht,fe),rt.equals(mt)===!1&&(s.clearColor(xt,vt,Ht,fe),rt.copy(mt))},reset:function(){I=!1,j=null,rt.set(-1,0,0,0)}}}function n(){let I=!1,mt=!1,j=null,rt=null,xt=null;return{setReversed:function(vt){if(mt!==vt){const Ht=t.get("EXT_clip_control");mt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const fe=xt;xt=null,this.setClear(fe)}mt=vt},getReversed:function(){return mt},setTest:function(vt){vt?q(s.DEPTH_TEST):nt(s.DEPTH_TEST)},setMask:function(vt){j!==vt&&!I&&(s.depthMask(vt),j=vt)},setFunc:function(vt){if(mt&&(vt=tm[vt]),rt!==vt){switch(vt){case Pr:s.depthFunc(s.NEVER);break;case Dr:s.depthFunc(s.ALWAYS);break;case Lr:s.depthFunc(s.LESS);break;case Ti:s.depthFunc(s.LEQUAL);break;case Ir:s.depthFunc(s.EQUAL);break;case Ur:s.depthFunc(s.GEQUAL);break;case Nr:s.depthFunc(s.GREATER);break;case Fr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=vt}},setLocked:function(vt){I=vt},setClear:function(vt){xt!==vt&&(mt&&(vt=1-vt),s.clearDepth(vt),xt=vt)},reset:function(){I=!1,j=null,rt=null,xt=null,mt=!1}}}function i(){let I=!1,mt=null,j=null,rt=null,xt=null,vt=null,Ht=null,fe=null,Ae=null;return{setTest:function(ae){I||(ae?q(s.STENCIL_TEST):nt(s.STENCIL_TEST))},setMask:function(ae){mt!==ae&&!I&&(s.stencilMask(ae),mt=ae)},setFunc:function(ae,tn,un){(j!==ae||rt!==tn||xt!==un)&&(s.stencilFunc(ae,tn,un),j=ae,rt=tn,xt=un)},setOp:function(ae,tn,un){(vt!==ae||Ht!==tn||fe!==un)&&(s.stencilOp(ae,tn,un),vt=ae,Ht=tn,fe=un)},setLocked:function(ae){I=ae},setClear:function(ae){Ae!==ae&&(s.clearStencil(ae),Ae=ae)},reset:function(){I=!1,mt=null,j=null,rt=null,xt=null,vt=null,Ht=null,fe=null,Ae=null}}}const r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,M=null,v=null,A=null,T=null,E=new J(0,0,0),R=0,w=!1,x=null,P=null,B=null,F=null,H=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,tt=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=tt>=1):V.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=tt>=2);let ut=null,X={};const lt=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),ht=new ge().fromArray(lt),O=new ge().fromArray(at);function $(I,mt,j,rt){const xt=new Uint8Array(4),vt=s.createTexture();s.bindTexture(I,vt),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ht=0;Ht<j;Ht++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,rt,0,s.RGBA,s.UNSIGNED_BYTE,xt):s.texImage2D(mt+Ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xt);return vt}const G={};G[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),G[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),G[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(s.DEPTH_TEST),a.setFunc(Ti),Ft(!1),Pt(ka),q(s.CULL_FACE),D(Mn);function q(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function nt(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function et(I,mt){return u[I]!==mt?(s.bindFramebuffer(I,mt),u[I]=mt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=mt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function it(I,mt){let j=p,rt=!1;if(I){j=d.get(mt),j===void 0&&(j=[],d.set(mt,j));const xt=I.textures;if(j.length!==xt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let vt=0,Ht=xt.length;vt<Ht;vt++)j[vt]=s.COLOR_ATTACHMENT0+vt;j.length=xt.length,rt=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,rt=!0);rt&&s.drawBuffers(j)}function Et(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const yt={[Xn]:s.FUNC_ADD,[Kl]:s.FUNC_SUBTRACT,[$l]:s.FUNC_REVERSE_SUBTRACT};yt[jl]=s.MIN,yt[Jl]=s.MAX;const bt={[Ql]:s.ZERO,[tc]:s.ONE,[ec]:s.SRC_COLOR,[Cr]:s.SRC_ALPHA,[oc]:s.SRC_ALPHA_SATURATE,[rc]:s.DST_COLOR,[ic]:s.DST_ALPHA,[nc]:s.ONE_MINUS_SRC_COLOR,[Rr]:s.ONE_MINUS_SRC_ALPHA,[ac]:s.ONE_MINUS_DST_COLOR,[sc]:s.ONE_MINUS_DST_ALPHA,[lc]:s.CONSTANT_COLOR,[cc]:s.ONE_MINUS_CONSTANT_COLOR,[hc]:s.CONSTANT_ALPHA,[uc]:s.ONE_MINUS_CONSTANT_ALPHA};function D(I,mt,j,rt,xt,vt,Ht,fe,Ae,ae){if(I===Mn){_===!0&&(nt(s.BLEND),_=!1);return}if(_===!1&&(q(s.BLEND),_=!0),I!==Zl){if(I!==m||ae!==w){if((f!==Xn||v!==Xn)&&(s.blendEquation(s.FUNC_ADD),f=Xn,v=Xn),ae)switch(I){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _e:s.blendFunc(s.ONE,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _e:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ha:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Va:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,M=null,A=null,T=null,E.set(0,0,0),R=0,m=I,w=ae}return}xt=xt||mt,vt=vt||j,Ht=Ht||rt,(mt!==f||xt!==v)&&(s.blendEquationSeparate(yt[mt],yt[xt]),f=mt,v=xt),(j!==y||rt!==M||vt!==A||Ht!==T)&&(s.blendFuncSeparate(bt[j],bt[rt],bt[vt],bt[Ht]),y=j,M=rt,A=vt,T=Ht),(fe.equals(E)===!1||Ae!==R)&&(s.blendColor(fe.r,fe.g,fe.b,Ae),E.copy(fe),R=Ae),m=I,w=!1}function jt(I,mt){I.side===Ee?nt(s.CULL_FACE):q(s.CULL_FACE);let j=I.side===Pe;mt&&(j=!j),Ft(j),I.blending===Si&&I.transparent===!1?D(Mn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const rt=I.stencilWrite;o.setTest(rt),rt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Dt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):nt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(I){x!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),x=I)}function Pt(I){I!==Xl?(q(s.CULL_FACE),I!==P&&(I===ka?s.cullFace(s.BACK):I===Yl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):nt(s.CULL_FACE),P=I}function Mt(I){I!==B&&(Z&&s.lineWidth(I),B=I)}function Dt(I,mt,j){I?(q(s.POLYGON_OFFSET_FILL),(F!==mt||H!==j)&&(s.polygonOffset(mt,j),F=mt,H=j)):nt(s.POLYGON_OFFSET_FILL)}function St(I){I?q(s.SCISSOR_TEST):nt(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+K-1),ut!==I&&(s.activeTexture(I),ut=I)}function S(I,mt,j){j===void 0&&(ut===null?j=s.TEXTURE0+K-1:j=ut);let rt=X[j];rt===void 0&&(rt={type:void 0,texture:void 0},X[j]=rt),(rt.type!==I||rt.texture!==mt)&&(ut!==j&&(s.activeTexture(j),ut=j),s.bindTexture(I,mt||G[I]),rt.type=I,rt.texture=mt)}function z(){const I=X[ut];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function st(){try{s.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{s.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{s.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{s.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{s.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{s.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(I){ht.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),ht.copy(I))}function Ct(I){O.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),O.copy(I))}function Kt(I,mt){let j=c.get(mt);j===void 0&&(j=new WeakMap,c.set(mt,j));let rt=j.get(I);rt===void 0&&(rt=s.getUniformBlockIndex(mt,I.name),j.set(I,rt))}function Wt(I,mt){const rt=c.get(mt).get(I);l.get(mt)!==rt&&(s.uniformBlockBinding(mt,rt,I.__bindingPointIndex),l.set(mt,rt))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ut=null,X={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,y=null,M=null,v=null,A=null,T=null,E=new J(0,0,0),R=0,w=!1,x=null,P=null,B=null,F=null,H=null,ht.set(0,0,s.canvas.width,s.canvas.height),O.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:nt,bindFramebuffer:et,drawBuffers:it,useProgram:Et,setBlending:D,setMaterial:jt,setFlipSided:Ft,setCullFace:Pt,setLineWidth:Mt,setPolygonOffset:Dt,setScissorTest:St,activeTexture:C,bindTexture:S,unbindTexture:z,compressedTexImage2D:st,compressedTexImage3D:ot,texImage2D:At,texImage3D:Ot,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:Jt,texStorage3D:dt,texSubImage2D:Q,texSubImage3D:Lt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Tt,scissor:Bt,viewport:Ct,reset:he}}function nm(s,t,e,n,i,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,S){return p?new OffscreenCanvas(C,S):ks("canvas")}function _(C,S,z){let st=1;const ot=St(C);if((ot.width>z||ot.height>z)&&(st=z/Math.max(ot.width,ot.height)),st<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Q=Math.floor(st*ot.width),Lt=Math.floor(st*ot.height);u===void 0&&(u=g(Q,Lt));const _t=S?g(Q,Lt):u;return _t.width=Q,_t.height=Lt,_t.getContext("2d").drawImage(C,0,0,Q,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+Lt+")."),_t}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){s.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,S,z,st,ot=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Q=S;if(S===s.RED&&(z===s.FLOAT&&(Q=s.R32F),z===s.HALF_FLOAT&&(Q=s.R16F),z===s.UNSIGNED_BYTE&&(Q=s.R8)),S===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.R8UI),z===s.UNSIGNED_SHORT&&(Q=s.R16UI),z===s.UNSIGNED_INT&&(Q=s.R32UI),z===s.BYTE&&(Q=s.R8I),z===s.SHORT&&(Q=s.R16I),z===s.INT&&(Q=s.R32I)),S===s.RG&&(z===s.FLOAT&&(Q=s.RG32F),z===s.HALF_FLOAT&&(Q=s.RG16F),z===s.UNSIGNED_BYTE&&(Q=s.RG8)),S===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RG8UI),z===s.UNSIGNED_SHORT&&(Q=s.RG16UI),z===s.UNSIGNED_INT&&(Q=s.RG32UI),z===s.BYTE&&(Q=s.RG8I),z===s.SHORT&&(Q=s.RG16I),z===s.INT&&(Q=s.RG32I)),S===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),z===s.UNSIGNED_INT&&(Q=s.RGB32UI),z===s.BYTE&&(Q=s.RGB8I),z===s.SHORT&&(Q=s.RGB16I),z===s.INT&&(Q=s.RGB32I)),S===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),z===s.UNSIGNED_INT&&(Q=s.RGBA32UI),z===s.BYTE&&(Q=s.RGBA8I),z===s.SHORT&&(Q=s.RGBA16I),z===s.INT&&(Q=s.RGBA32I)),S===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),S===s.RGBA){const Lt=ot?zs:te.getTransfer(st);z===s.FLOAT&&(Q=s.RGBA32F),z===s.HALF_FLOAT&&(Q=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Q=Lt===oe?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(C,S){let z;return C?S===null||S===$n||S===Ci?z=s.DEPTH24_STENCIL8:S===hn?z=s.DEPTH32F_STENCIL8:S===ji&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===$n||S===Ci?z=s.DEPTH_COMPONENT24:S===hn?z=s.DEPTH_COMPONENT32F:S===ji&&(z=s.DEPTH_COMPONENT16),z}function A(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){const S=C.target;S.removeEventListener("dispose",T),R(S),S.isVideoTexture&&h.delete(S)}function E(C){const S=C.target;S.removeEventListener("dispose",E),x(S)}function R(C){const S=n.get(C);if(S.__webglInit===void 0)return;const z=C.source,st=d.get(z);if(st){const ot=st[S.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&w(C),Object.keys(st).length===0&&d.delete(z)}n.remove(C)}function w(C){const S=n.get(C);s.deleteTexture(S.__webglTexture);const z=C.source,st=d.get(z);delete st[S.__cacheKey],a.memory.textures--}function x(C){const S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(S.__webglFramebuffer[st]))for(let ot=0;ot<S.__webglFramebuffer[st].length;ot++)s.deleteFramebuffer(S.__webglFramebuffer[st][ot]);else s.deleteFramebuffer(S.__webglFramebuffer[st]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[st])}else{if(Array.isArray(S.__webglFramebuffer))for(let st=0;st<S.__webglFramebuffer.length;st++)s.deleteFramebuffer(S.__webglFramebuffer[st]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let st=0;st<S.__webglColorRenderbuffer.length;st++)S.__webglColorRenderbuffer[st]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[st]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=C.textures;for(let st=0,ot=z.length;st<ot;st++){const Q=n.get(z[st]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(z[st])}n.remove(C)}let P=0;function B(){P=0}function F(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function H(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function K(C,S){const z=n.get(C);if(C.isVideoTexture&&Mt(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const st=C.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(z,C,S);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+S)}function Z(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){O(z,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+S)}function tt(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){O(z,C,S);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+S)}function V(C,S){const z=n.get(C);if(C.version>0&&z.__version!==C.version){$(z,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+S)}const ut={[He]:s.REPEAT,[qn]:s.CLAMP_TO_EDGE,[zr]:s.MIRRORED_REPEAT},X={[Ve]:s.NEAREST,[pc]:s.NEAREST_MIPMAP_NEAREST,[is]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[js]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},lt={[vc]:s.NEVER,[bc]:s.ALWAYS,[Mc]:s.LESS,[_l]:s.LEQUAL,[xc]:s.EQUAL,[wc]:s.GEQUAL,[yc]:s.GREATER,[Sc]:s.NOTEQUAL};function at(C,S){if(S.type===hn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===js||S.magFilter===is||S.magFilter===Zn||S.minFilter===cn||S.minFilter===js||S.minFilter===is||S.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,ut[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,ut[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,ut[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,X[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,X[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ve||S.minFilter!==is&&S.minFilter!==Zn||S.type===hn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ht(C,S){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));const st=S.source;let ot=d.get(st);ot===void 0&&(ot={},d.set(st,ot));const Q=H(S);if(Q!==C.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ot[Q].usedTimes++;const Lt=ot[C.__cacheKey];Lt!==void 0&&(ot[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(S)),C.__cacheKey=Q,C.__webglTexture=ot[Q].texture}return z}function O(C,S,z){let st=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(st=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(st=s.TEXTURE_3D);const ot=ht(C,S),Q=S.source;e.bindTexture(st,C.__webglTexture,s.TEXTURE0+z);const Lt=n.get(Q);if(Q.version!==Lt.__version||ot===!0){e.activeTexture(s.TEXTURE0+z);const _t=te.getPrimaries(te.workingColorSpace),Tt=S.colorSpace===Pn?null:te.getPrimaries(S.colorSpace),Jt=S.colorSpace===Pn||_t===Tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let dt=_(S.image,!1,i.maxTextureSize);dt=Dt(S,dt);const At=r.convert(S.format,S.colorSpace),Ot=r.convert(S.type);let Bt=M(S.internalFormat,At,Ot,S.colorSpace,S.isVideoTexture);at(st,S);let Ct;const Kt=S.mipmaps,Wt=S.isVideoTexture!==!0,he=Lt.__version===void 0||ot===!0,I=Q.dataReady,mt=A(S,dt);if(S.isDepthTexture)Bt=v(S.format===Ri,S.type),he&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,Bt,dt.width,dt.height):e.texImage2D(s.TEXTURE_2D,0,Bt,dt.width,dt.height,0,At,Ot,null));else if(S.isDataTexture)if(Kt.length>0){Wt&&he&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,Kt[0].width,Kt[0].height);for(let j=0,rt=Kt.length;j<rt;j++)Ct=Kt[j],Wt?I&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Ct.width,Ct.height,At,Ot,Ct.data):e.texImage2D(s.TEXTURE_2D,j,Bt,Ct.width,Ct.height,0,At,Ot,Ct.data);S.generateMipmaps=!1}else Wt?(he&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,dt.width,dt.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt.width,dt.height,At,Ot,dt.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,dt.width,dt.height,0,At,Ot,dt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Wt&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Bt,Kt[0].width,Kt[0].height,dt.depth);for(let j=0,rt=Kt.length;j<rt;j++)if(Ct=Kt[j],S.format!==Qe)if(At!==null)if(Wt){if(I)if(S.layerUpdates.size>0){const xt=Eo(Ct.width,Ct.height,S.format,S.type);for(const vt of S.layerUpdates){const Ht=Ct.data.subarray(vt*xt/Ct.data.BYTES_PER_ELEMENT,(vt+1)*xt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,vt,Ct.width,Ct.height,1,At,Ht)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Ct.width,Ct.height,dt.depth,At,Ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Bt,Ct.width,Ct.height,dt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,Ct.width,Ct.height,dt.depth,At,Ot,Ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,j,Bt,Ct.width,Ct.height,dt.depth,0,At,Ot,Ct.data)}else{Wt&&he&&e.texStorage2D(s.TEXTURE_2D,mt,Bt,Kt[0].width,Kt[0].height);for(let j=0,rt=Kt.length;j<rt;j++)Ct=Kt[j],S.format!==Qe?At!==null?Wt?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,Ct.width,Ct.height,At,Ct.data):e.compressedTexImage2D(s.TEXTURE_2D,j,Bt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?I&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,Ct.width,Ct.height,At,Ot,Ct.data):e.texImage2D(s.TEXTURE_2D,j,Bt,Ct.width,Ct.height,0,At,Ot,Ct.data)}else if(S.isDataArrayTexture)if(Wt){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Bt,dt.width,dt.height,dt.depth),I)if(S.layerUpdates.size>0){const j=Eo(dt.width,dt.height,S.format,S.type);for(const rt of S.layerUpdates){const xt=dt.data.subarray(rt*j/dt.data.BYTES_PER_ELEMENT,(rt+1)*j/dt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,rt,dt.width,dt.height,1,At,Ot,xt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,At,Ot,dt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,dt.width,dt.height,dt.depth,0,At,Ot,dt.data);else if(S.isData3DTexture)Wt?(he&&e.texStorage3D(s.TEXTURE_3D,mt,Bt,dt.width,dt.height,dt.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,At,Ot,dt.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,dt.width,dt.height,dt.depth,0,At,Ot,dt.data);else if(S.isFramebufferTexture){if(he)if(Wt)e.texStorage2D(s.TEXTURE_2D,mt,Bt,dt.width,dt.height);else{let j=dt.width,rt=dt.height;for(let xt=0;xt<mt;xt++)e.texImage2D(s.TEXTURE_2D,xt,Bt,j,rt,0,At,Ot,null),j>>=1,rt>>=1}}else if(Kt.length>0){if(Wt&&he){const j=St(Kt[0]);e.texStorage2D(s.TEXTURE_2D,mt,Bt,j.width,j.height)}for(let j=0,rt=Kt.length;j<rt;j++)Ct=Kt[j],Wt?I&&e.texSubImage2D(s.TEXTURE_2D,j,0,0,At,Ot,Ct):e.texImage2D(s.TEXTURE_2D,j,Bt,At,Ot,Ct);S.generateMipmaps=!1}else if(Wt){if(he){const j=St(dt);e.texStorage2D(s.TEXTURE_2D,mt,Bt,j.width,j.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,At,Ot,dt)}else e.texImage2D(s.TEXTURE_2D,0,Bt,At,Ot,dt);m(S)&&f(st),Lt.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,z){if(S.image.length!==6)return;const st=ht(C,S),ot=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+z);const Q=n.get(ot);if(ot.version!==Q.__version||st===!0){e.activeTexture(s.TEXTURE0+z);const Lt=te.getPrimaries(te.workingColorSpace),_t=S.colorSpace===Pn?null:te.getPrimaries(S.colorSpace),Tt=S.colorSpace===Pn||Lt===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Jt=S.isCompressedTexture||S.image[0].isCompressedTexture,dt=S.image[0]&&S.image[0].isDataTexture,At=[];for(let rt=0;rt<6;rt++)!Jt&&!dt?At[rt]=_(S.image[rt],!0,i.maxCubemapSize):At[rt]=dt?S.image[rt].image:S.image[rt],At[rt]=Dt(S,At[rt]);const Ot=At[0],Bt=r.convert(S.format,S.colorSpace),Ct=r.convert(S.type),Kt=M(S.internalFormat,Bt,Ct,S.colorSpace),Wt=S.isVideoTexture!==!0,he=Q.__version===void 0||st===!0,I=ot.dataReady;let mt=A(S,Ot);at(s.TEXTURE_CUBE_MAP,S);let j;if(Jt){Wt&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Kt,Ot.width,Ot.height);for(let rt=0;rt<6;rt++){j=At[rt].mipmaps;for(let xt=0;xt<j.length;xt++){const vt=j[xt];S.format!==Qe?Bt!==null?Wt?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt,0,0,vt.width,vt.height,Bt,vt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt,Kt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt,0,0,vt.width,vt.height,Bt,Ct,vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt,Kt,vt.width,vt.height,0,Bt,Ct,vt.data)}}}else{if(j=S.mipmaps,Wt&&he){j.length>0&&mt++;const rt=St(At[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Kt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(dt){Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,At[rt].width,At[rt].height,Bt,Ct,At[rt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,At[rt].width,At[rt].height,0,Bt,Ct,At[rt].data);for(let xt=0;xt<j.length;xt++){const Ht=j[xt].image[rt].image;Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt+1,0,0,Ht.width,Ht.height,Bt,Ct,Ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt+1,Kt,Ht.width,Ht.height,0,Bt,Ct,Ht.data)}}else{Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Bt,Ct,At[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Kt,Bt,Ct,At[rt]);for(let xt=0;xt<j.length;xt++){const vt=j[xt];Wt?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt+1,0,0,Bt,Ct,vt.image[rt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt+1,Kt,Bt,Ct,vt.image[rt])}}}m(S)&&f(s.TEXTURE_CUBE_MAP),Q.__version=ot.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function G(C,S,z,st,ot,Q){const Lt=r.convert(z.format,z.colorSpace),_t=r.convert(z.type),Tt=M(z.internalFormat,Lt,_t,z.colorSpace),Jt=n.get(S),dt=n.get(z);if(dt.__renderTarget=S,!Jt.__hasExternalTextures){const At=Math.max(1,S.width>>Q),Ot=Math.max(1,S.height>>Q);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,Tt,At,Ot,S.depth,0,Lt,_t,null):e.texImage2D(ot,Q,Tt,At,Ot,0,Lt,_t,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Pt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,st,ot,dt.__webglTexture,0,Ft(S)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,st,ot,dt.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function q(C,S,z){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){const st=S.depthTexture,ot=st&&st.isDepthTexture?st.type:null,Q=v(S.stencilBuffer,ot),Lt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=Ft(S);Pt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,Q,S.width,S.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Q,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Q,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Lt,s.RENDERBUFFER,C)}else{const st=S.textures;for(let ot=0;ot<st.length;ot++){const Q=st[ot],Lt=r.convert(Q.format,Q.colorSpace),_t=r.convert(Q.type),Tt=M(Q.internalFormat,Lt,_t,Q.colorSpace),Jt=Ft(S);z&&Pt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Tt,S.width,S.height):Pt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,Tt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,Tt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=n.get(S.depthTexture);st.__renderTarget=S,(!st.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const ot=st.__webglTexture,Q=Ft(S);if(S.depthTexture.format===wi)Pt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(S.depthTexture.format===Ri)Pt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function et(C){const S=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){const st=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),st){const ot=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,st.removeEventListener("dispose",ot)};st.addEventListener("dispose",ot),S.__depthDisposeCallback=ot}S.__boundDepthTexture=st}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");nt(S.__webglFramebuffer,C)}else if(z){S.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[st]),S.__webglDepthbuffer[st]===void 0)S.__webglDepthbuffer[st]=s.createRenderbuffer(),q(S.__webglDepthbuffer[st],C,!1);else{const ot=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer[st];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),q(S.__webglDepthbuffer,C,!1);else{const st=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function it(C,S,z){const st=n.get(C);S!==void 0&&G(st.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&et(C)}function Et(C){const S=C.texture,z=n.get(C),st=n.get(S);C.addEventListener("dispose",E);const ot=C.textures,Q=C.isWebGLCubeRenderTarget===!0,Lt=ot.length>1;if(Lt||(st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture()),st.__version=S.version,a.memory.textures++),Q){z.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[_t]=[];for(let Tt=0;Tt<S.mipmaps.length;Tt++)z.__webglFramebuffer[_t][Tt]=s.createFramebuffer()}else z.__webglFramebuffer[_t]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let _t=0;_t<S.mipmaps.length;_t++)z.__webglFramebuffer[_t]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Lt)for(let _t=0,Tt=ot.length;_t<Tt;_t++){const Jt=n.get(ot[_t]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Pt(C)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let _t=0;_t<ot.length;_t++){const Tt=ot[_t];z.__webglColorRenderbuffer[_t]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[_t]);const Jt=r.convert(Tt.format,Tt.colorSpace),dt=r.convert(Tt.type),At=M(Tt.internalFormat,Jt,dt,Tt.colorSpace,C.isXRRenderTarget===!0),Ot=Ft(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,At,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,z.__webglColorRenderbuffer[_t])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),q(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,st.__webglTexture),at(s.TEXTURE_CUBE_MAP,S);for(let _t=0;_t<6;_t++)if(S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)G(z.__webglFramebuffer[_t][Tt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt);else G(z.__webglFramebuffer[_t],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(S)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let _t=0,Tt=ot.length;_t<Tt;_t++){const Jt=ot[_t],dt=n.get(Jt);e.bindTexture(s.TEXTURE_2D,dt.__webglTexture),at(s.TEXTURE_2D,Jt),G(z.__webglFramebuffer,C,Jt,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,0),m(Jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let _t=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_t=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(_t,st.__webglTexture),at(_t,S),S.mipmaps&&S.mipmaps.length>0)for(let Tt=0;Tt<S.mipmaps.length;Tt++)G(z.__webglFramebuffer[Tt],C,S,s.COLOR_ATTACHMENT0,_t,Tt);else G(z.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,_t,0);m(S)&&f(_t),e.unbindTexture()}C.depthBuffer&&et(C)}function yt(C){const S=C.textures;for(let z=0,st=S.length;z<st;z++){const ot=S[z];if(m(ot)){const Q=y(C),Lt=n.get(ot).__webglTexture;e.bindTexture(Q,Lt),f(Q),e.unbindTexture()}}}const bt=[],D=[];function jt(C){if(C.samples>0){if(Pt(C)===!1){const S=C.textures,z=C.width,st=C.height;let ot=s.COLOR_BUFFER_BIT;const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(C),_t=S.length>1;if(_t)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),_t){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const Jt=n.get(S[Tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,z,st,0,0,z,st,ot,s.NEAREST),l===!0&&(bt.length=0,D.length=0,bt.push(s.COLOR_ATTACHMENT0+Tt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(bt.push(Q),D.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,D)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_t)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Tt]);const Jt=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Tt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ft(C){return Math.min(i.maxSamples,C.samples)}function Pt(C){const S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Mt(C){const S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Dt(C,S){const z=C.colorSpace,st=C.format,ot=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Pi&&z!==Pn&&(te.getTransfer(z)===oe?(st!==Qe||ot!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function St(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=V,this.rebindTextures=it,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=G,this.useMultisampledRTT=Pt}function im(s,t){function e(n,i=Pn){let r;const a=te.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===va)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ma)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return s.BYTE;if(n===ll)return s.SHORT;if(n===ji)return s.UNSIGNED_SHORT;if(n===_a)return s.INT;if(n===$n)return s.UNSIGNED_INT;if(n===hn)return s.FLOAT;if(n===xn)return s.HALF_FLOAT;if(n===hl)return s.ALPHA;if(n===ul)return s.RGB;if(n===Qe)return s.RGBA;if(n===dl)return s.LUMINANCE;if(n===fl)return s.LUMINANCE_ALPHA;if(n===wi)return s.DEPTH_COMPONENT;if(n===Ri)return s.DEPTH_STENCIL;if(n===xa)return s.RED;if(n===ya)return s.RED_INTEGER;if(n===pl)return s.RG;if(n===Sa)return s.RG_INTEGER;if(n===wa)return s.RGBA_INTEGER;if(n===Is||n===Us||n===Ns||n===Fs)if(a===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Is)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Is)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Us)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ns)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gr||n===kr||n===Hr||n===Vr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wr||n===Xr||n===Yr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wr||n===Xr)return a===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yr)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===qr||n===Zr||n===Kr||n===$r||n===jr||n===Jr||n===Qr||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===aa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===qr)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zr)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kr)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$r)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jr)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jr)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qr)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return a===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Os||n===oa||n===la)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Os)return a===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ml||n===ca||n===ha||n===ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Os)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const sm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rm=`
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

}`;class am{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new De,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new be({vertexShader:sm,fragmentShader:rm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new me(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class om extends Ii{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new am,m=e.getContextAttributes();let f=null,y=null;const M=[],v=[],A=new It;let T=null;const E=new $e;E.viewport=new ge;const R=new $e;R.viewport=new ge;const w=[E,R],x=new Eh;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=M[O];return $===void 0&&($=new _r,M[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=M[O];return $===void 0&&($=new _r,M[O]=$),$.getGripSpace()},this.getHand=function(O){let $=M[O];return $===void 0&&($=new _r,M[O]=$),$.getHandSpace()};function F(O){const $=v.indexOf(O.inputSource);if($===-1)return;const G=M[$];G!==void 0&&(G.update(O.inputSource,O.frame,c||a),G.dispatchEvent({type:O.type,data:O.inputSource}))}function H(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",K);for(let O=0;O<M.length;O++){const $=v[O];$!==null&&(v[O]=null,M[O].disconnect($))}P=null,B=null,_.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,y=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",H),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let G=null,q=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,G=m.stencil?Ri:wi,q=m.stencil?Ci:$n);const et={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(et),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new on(d.textureWidth,d.textureHeight,{format:Qe,type:wn,depthTexture:new Pl(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const G={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new on(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(O){for(let $=0;$<O.removed.length;$++){const G=O.removed[$],q=v.indexOf(G);q>=0&&(v[q]=null,M[q].disconnect(G))}for(let $=0;$<O.added.length;$++){const G=O.added[$];let q=v.indexOf(G);if(q===-1){for(let et=0;et<M.length;et++)if(et>=v.length){v.push(G),q=et;break}else if(v[et]===null){v[et]=G,q=et;break}if(q===-1)break}const nt=M[q];nt&&nt.connect(G)}}const Z=new L,tt=new L;function V(O,$,G){Z.setFromMatrixPosition($.matrixWorld),tt.setFromMatrixPosition(G.matrixWorld);const q=Z.distanceTo(tt),nt=$.projectionMatrix.elements,et=G.projectionMatrix.elements,it=nt[14]/(nt[10]-1),Et=nt[14]/(nt[10]+1),yt=(nt[9]+1)/nt[5],bt=(nt[9]-1)/nt[5],D=(nt[8]-1)/nt[0],jt=(et[8]+1)/et[0],Ft=it*D,Pt=it*jt,Mt=q/(-D+jt),Dt=Mt*-D;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Dt),O.translateZ(Mt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),nt[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const St=it+Mt,C=Et+Mt,S=Ft-Dt,z=Pt+(q-Dt),st=yt*Et/C*St,ot=bt*Et/C*St;O.projectionMatrix.makePerspective(S,z,st,ot,St,C),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function ut(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let $=O.near,G=O.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(G=_.depthFar)),x.near=R.near=E.near=$,x.far=R.far=E.far=G,(P!==x.near||B!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,B=x.far),E.layers.mask=O.layers.mask|2,R.layers.mask=O.layers.mask|4,x.layers.mask=E.layers.mask|R.layers.mask;const q=O.parent,nt=x.cameras;ut(x,q);for(let et=0;et<nt.length;et++)ut(nt[et],q);nt.length===2?V(x,E,R):x.projectionMatrix.copy(E.projectionMatrix),X(O,x,q)};function X(O,$,G){G===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(G.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Ji*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let lt=null;function at(O,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const G=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let q=!1;G.length!==x.cameras.length&&(x.cameras.length=0,q=!0);for(let it=0;it<G.length;it++){const Et=G[it];let yt=null;if(p!==null)yt=p.getViewport(Et);else{const D=u.getViewSubImage(d,Et);yt=D.viewport,it===0&&(t.setRenderTargetTextures(y,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(y))}let bt=w[it];bt===void 0&&(bt=new $e,bt.layers.enable(it),bt.viewport=new ge,w[it]=bt),bt.matrix.fromArray(Et.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Et.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(yt.x,yt.y,yt.width,yt.height),it===0&&(x.matrix.copy(bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),q===!0&&x.cameras.push(bt)}const nt=i.enabledFeatures;if(nt&&nt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const it=u.getDepthInformation(G[0]);it&&it.isValid&&it.texture&&_.init(t,it,i.renderState)}}for(let G=0;G<M.length;G++){const q=v[G],nt=M[G];q!==null&&nt!==void 0&&nt.update(q,$,c||a)}lt&&lt(O,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ht=new Il;ht.setAnimationLoop(at),this.setAnimationLoop=function(O){lt=O},this.dispose=function(){}}}const kn=new Ne,lm=new ie;function cm(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,bl(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,M,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Pe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Pe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,kn.copy(v),kn.x*=-1,kn.y*=-1,kn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),m.envMapRotation.value.setFromMatrix4(lm.makeRotationFromEuler(kn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Pe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hm(s,t,e,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;n.uniformBlockBinding(y,v)}function c(y,M){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",m));const A=M.program;n.updateUBOMapping(y,A);const T=t.render.frame;r[y.id]!==T&&(d(y),r[y.id]=T)}function h(y){const M=u();y.__bindingPointIndex=M;const v=s.createBuffer(),A=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,A,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=i[y.id],v=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,E=v.length;T<E;T++){const R=Array.isArray(v[T])?v[T]:[v[T]];for(let w=0,x=R.length;w<x;w++){const P=R[w];if(p(P,T,w,A)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let K=0;K<F.length;K++){const Z=F[K],tt=_(Z);typeof Z=="number"||typeof Z=="boolean"?(P.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,B+H,P.__data)):Z.isMatrix3?(P.__data[0]=Z.elements[0],P.__data[1]=Z.elements[1],P.__data[2]=Z.elements[2],P.__data[3]=0,P.__data[4]=Z.elements[3],P.__data[5]=Z.elements[4],P.__data[6]=Z.elements[5],P.__data[7]=0,P.__data[8]=Z.elements[6],P.__data[9]=Z.elements[7],P.__data[10]=Z.elements[8],P.__data[11]=0):(Z.toArray(P.__data,H),H+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,M,v,A){const T=y.value,E=M+"_"+v;if(A[E]===void 0)return typeof T=="number"||typeof T=="boolean"?A[E]=T:A[E]=T.clone(),!0;{const R=A[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return A[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(y){const M=y.uniforms;let v=0;const A=16;for(let E=0,R=M.length;E<R;E++){const w=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,P=w.length;x<P;x++){const B=w[x],F=Array.isArray(B.value)?B.value:[B.value];for(let H=0,K=F.length;H<K;H++){const Z=F[H],tt=_(Z),V=v%A,ut=V%tt.boundary,X=V+ut;v+=ut,X!==0&&A-X<tt.storage&&(v+=A-X),B.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=tt.storage}}}const T=v%A;return T>0&&(v+=A-T),y.__size=v,y.__cache={},this}function _(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class um{constructor(t={}){const{canvas:e=kc(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this.toneMapping=Dn,this.toneMappingExposure=1;const v=this;let A=!1,T=0,E=0,R=null,w=-1,x=null;const P=new ge,B=new ge;let F=null;const H=new J(0);let K=0,Z=e.width,tt=e.height,V=1,ut=null,X=null;const lt=new ge(0,0,Z,tt),at=new ge(0,0,Z,tt);let ht=!1;const O=new Ca;let $=!1,G=!1;this.transmissionResolutionScale=1;const q=new ie,nt=new ie,et=new L,it=new ge,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function bt(){return R===null?V:1}let D=n;function jt(b,U){return e.getContext(b,U)}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ma}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",vt,!1),D===null){const U="webgl2";if(D=jt(U,b),D===null)throw jt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,Pt,Mt,Dt,St,C,S,z,st,ot,Q,Lt,_t,Tt,Jt,dt,At,Ot,Bt,Ct,Kt,Wt,he,I;function mt(){Ft=new yf(D),Ft.init(),Wt=new im(D,Ft),Pt=new pf(D,Ft,t,Wt),Mt=new em(D,Ft),Pt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Dt=new bf(D),St=new Hp,C=new nm(D,Ft,Mt,St,Pt,Wt,Dt),S=new gf(v),z=new xf(v),st=new Rh(D),he=new df(D,st),ot=new Sf(D,st,Dt,he),Q=new Ef(D,ot,st,Dt),Bt=new Tf(D,Pt,C),dt=new mf(St),Lt=new kp(v,S,z,Ft,Pt,he,dt),_t=new cm(v,St),Tt=new Wp,Jt=new $p(Ft),Ot=new uf(v,S,z,Mt,Q,p,l),At=new Qp(v,Q,Pt),I=new hm(D,Dt,Pt,Mt),Ct=new ff(D,Ft,Dt),Kt=new wf(D,Ft,Dt),Dt.programs=Lt.programs,v.capabilities=Pt,v.extensions=Ft,v.properties=St,v.renderLists=Tt,v.shadowMap=At,v.state=Mt,v.info=Dt}mt();const j=new om(v,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(Z,tt,!1))},this.getSize=function(b){return b.set(Z,tt)},this.setSize=function(b,U,k=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,tt=U,e.width=Math.floor(b*V),e.height=Math.floor(U*V),k===!0&&(e.style.width=b+"px",e.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Z*V,tt*V).floor()},this.setDrawingBufferSize=function(b,U,k){Z=b,tt=U,V=k,e.width=Math.floor(b*k),e.height=Math.floor(U*k),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,U,k,W){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,U,k,W),Mt.viewport(P.copy(lt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(at)},this.setScissor=function(b,U,k,W){b.isVector4?at.set(b.x,b.y,b.z,b.w):at.set(b,U,k,W),Mt.scissor(B.copy(at).multiplyScalar(V).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(b){Mt.setScissorTest(ht=b)},this.setOpaqueSort=function(b){ut=b},this.setTransparentSort=function(b){X=b},this.getClearColor=function(b){return b.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,k=!0){let W=0;if(b){let N=!1;if(R!==null){const ct=R.texture.format;N=ct===wa||ct===Sa||ct===ya}if(N){const ct=R.texture.type,gt=ct===wn||ct===$n||ct===ji||ct===Ci||ct===va||ct===Ma,wt=Ot.getClearColor(),Rt=Ot.getClearAlpha(),zt=wt.r,Gt=wt.g,Ut=wt.b;gt?(g[0]=zt,g[1]=Gt,g[2]=Ut,g[3]=Rt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=zt,_[1]=Gt,_[2]=Ut,_[3]=Rt,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT),k&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Ot.dispose(),Tt.dispose(),Jt.dispose(),St.dispose(),S.dispose(),z.dispose(),Q.dispose(),he.dispose(),I.dispose(),Lt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ua),j.removeEventListener("sessionend",Na),Un.stop()};function rt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=Dt.autoReset,U=At.enabled,k=At.autoUpdate,W=At.needsUpdate,N=At.type;mt(),Dt.autoReset=b,At.enabled=U,At.autoUpdate=k,At.needsUpdate=W,At.type=N}function vt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ht(b){const U=b.target;U.removeEventListener("dispose",Ht),fe(U)}function fe(b){Ae(b),St.remove(b)}function Ae(b){const U=St.get(b).programs;U!==void 0&&(U.forEach(function(k){Lt.releaseProgram(k)}),b.isShaderMaterial&&Lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,k,W,N,ct){U===null&&(U=Et);const gt=N.isMesh&&N.matrixWorld.determinant()<0,wt=zl(b,U,k,W,N);Mt.setMaterial(W,gt);let Rt=k.index,zt=1;if(W.wireframe===!0){if(Rt=ot.getWireframeAttribute(k),Rt===void 0)return;zt=2}const Gt=k.drawRange,Ut=k.attributes.position;let Qt=Gt.start*zt,se=(Gt.start+Gt.count)*zt;ct!==null&&(Qt=Math.max(Qt,ct.start*zt),se=Math.min(se,(ct.start+ct.count)*zt)),Rt!==null?(Qt=Math.max(Qt,0),se=Math.min(se,Rt.count)):Ut!=null&&(Qt=Math.max(Qt,0),se=Math.min(se,Ut.count));const ve=se-Qt;if(ve<0||ve===1/0)return;he.setup(N,W,wt,k,Rt);let pe,ee=Ct;if(Rt!==null&&(pe=st.get(Rt),ee=Kt,ee.setIndex(pe)),N.isMesh)W.wireframe===!0?(Mt.setLineWidth(W.wireframeLinewidth*bt()),ee.setMode(D.LINES)):ee.setMode(D.TRIANGLES);else if(N.isLine){let Nt=W.linewidth;Nt===void 0&&(Nt=1),Mt.setLineWidth(Nt*bt()),N.isLineSegments?ee.setMode(D.LINES):N.isLineLoop?ee.setMode(D.LINE_LOOP):ee.setMode(D.LINE_STRIP)}else N.isPoints?ee.setMode(D.POINTS):N.isSprite&&ee.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Hn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ee.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))ee.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Nt=N._multiDrawStarts,Te=N._multiDrawCounts,re=N._multiDrawCount,en=Rt?st.get(Rt).bytesPerElement:1,Qn=St.get(W).currentProgram.getUniforms();for(let Be=0;Be<re;Be++)Qn.setValue(D,"_gl_DrawID",Be),ee.render(Nt[Be]/en,Te[Be])}else if(N.isInstancedMesh)ee.renderInstances(Qt,ve,N.count);else if(k.isInstancedBufferGeometry){const Nt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Te=Math.min(k.instanceCount,Nt);ee.renderInstances(Qt,ve,Te)}else ee.render(Qt,ve)};function ae(b,U,k){b.transparent===!0&&b.side===Ee&&b.forceSinglePass===!1?(b.side=Pe,b.needsUpdate=!0,ns(b,U,k),b.side=Ln,b.needsUpdate=!0,ns(b,U,k),b.side=Ee):ns(b,U,k)}this.compile=function(b,U,k=null){k===null&&(k=b),f=Jt.get(k),f.init(U),M.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),b!==k&&b.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const W=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ct=N.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const wt=ct[gt];ae(wt,k,N),W.add(wt)}else ae(ct,k,N),W.add(ct)}),f=M.pop(),W},this.compileAsync=function(b,U,k=null){const W=this.compile(b,U,k);return new Promise(N=>{function ct(){if(W.forEach(function(gt){St.get(gt).currentProgram.isReady()&&W.delete(gt)}),W.size===0){N(b);return}setTimeout(ct,10)}Ft.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let tn=null;function un(b){tn&&tn(b)}function Ua(){Un.stop()}function Na(){Un.start()}const Un=new Il;Un.setAnimationLoop(un),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(b){tn=b,j.setAnimationLoop(b),b===null?Un.stop():Un.start()},j.addEventListener("sessionstart",Ua),j.addEventListener("sessionend",Na),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,R),f=Jt.get(b,M.length),f.init(U),M.push(f),nt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O.setFromProjectionMatrix(nt),G=this.localClippingEnabled,$=dt.init(this.clippingPlanes,G),m=Tt.get(b,y.length),m.init(),y.push(m),j.enabled===!0&&j.isPresenting===!0){const ct=v.xr.getDepthSensingMesh();ct!==null&&Ks(ct,U,-1/0,v.sortObjects)}Ks(b,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ut,X),yt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,yt&&Ot.addToRenderList(m,b),this.info.render.frame++,$===!0&&dt.beginShadows();const k=f.state.shadowsArray;At.render(k,b,U),$===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const ct=U.cameras;if(N.length>0)for(let gt=0,wt=ct.length;gt<wt;gt++){const Rt=ct[gt];Oa(W,N,b,Rt)}yt&&Ot.render(b);for(let gt=0,wt=ct.length;gt<wt;gt++){const Rt=ct[gt];Fa(m,b,Rt,Rt.viewport)}}else N.length>0&&Oa(W,N,b,U),yt&&Ot.render(b),Fa(m,b,U);R!==null&&E===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,U),he.resetDefaultState(),w=-1,x=null,M.pop(),M.length>0?(f=M[M.length-1],$===!0&&dt.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ks(b,U,k,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||O.intersectsSprite(b)){W&&it.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);const gt=Q.update(b),wt=b.material;wt.visible&&m.push(b,gt,wt,k,it.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||O.intersectsObject(b))){const gt=Q.update(b),wt=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),it.copy(b.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),it.copy(gt.boundingSphere.center)),it.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(wt)){const Rt=gt.groups;for(let zt=0,Gt=Rt.length;zt<Gt;zt++){const Ut=Rt[zt],Qt=wt[Ut.materialIndex];Qt&&Qt.visible&&m.push(b,gt,Qt,k,it.z,Ut)}}else wt.visible&&m.push(b,gt,wt,k,it.z,null)}}const ct=b.children;for(let gt=0,wt=ct.length;gt<wt;gt++)Ks(ct[gt],U,k,W)}function Fa(b,U,k,W){const N=b.opaque,ct=b.transmissive,gt=b.transparent;f.setupLightsView(k),$===!0&&dt.setGlobalState(v.clippingPlanes,k),W&&Mt.viewport(P.copy(W)),N.length>0&&es(N,U,k),ct.length>0&&es(ct,U,k),gt.length>0&&es(gt,U,k),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Oa(b,U,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new on(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?xn:wn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ct=f.state.transmissionRenderTarget[W.id],gt=W.viewport||P;ct.setSize(gt.z*v.transmissionResolutionScale,gt.w*v.transmissionResolutionScale);const wt=v.getRenderTarget();v.setRenderTarget(ct),v.getClearColor(H),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),yt&&Ot.render(k);const Rt=v.toneMapping;v.toneMapping=Dn;const zt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),$===!0&&dt.setGlobalState(v.clippingPlanes,W),es(b,k,W),C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ut=0,Qt=U.length;Ut<Qt;Ut++){const se=U[Ut],ve=se.object,pe=se.geometry,ee=se.material,Nt=se.group;if(ee.side===Ee&&ve.layers.test(W.layers)){const Te=ee.side;ee.side=Pe,ee.needsUpdate=!0,Ba(ve,k,W,pe,ee,Nt),ee.side=Te,ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(C.updateMultisampleRenderTarget(ct),C.updateRenderTargetMipmap(ct))}v.setRenderTarget(wt),v.setClearColor(H,K),zt!==void 0&&(W.viewport=zt),v.toneMapping=Rt}function es(b,U,k){const W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ct=b.length;N<ct;N++){const gt=b[N],wt=gt.object,Rt=gt.geometry,zt=W===null?gt.material:W,Gt=gt.group;wt.layers.test(k.layers)&&Ba(wt,U,k,Rt,zt,Gt)}}function Ba(b,U,k,W,N,ct){b.onBeforeRender(v,U,k,W,N,ct),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(v,U,k,W,b,ct),N.transparent===!0&&N.side===Ee&&N.forceSinglePass===!1?(N.side=Pe,N.needsUpdate=!0,v.renderBufferDirect(k,U,W,N,b,ct),N.side=Ln,N.needsUpdate=!0,v.renderBufferDirect(k,U,W,N,b,ct),N.side=Ee):v.renderBufferDirect(k,U,W,N,b,ct),b.onAfterRender(v,U,k,W,N,ct)}function ns(b,U,k){U.isScene!==!0&&(U=Et);const W=St.get(b),N=f.state.lights,ct=f.state.shadowsArray,gt=N.state.version,wt=Lt.getParameters(b,N.state,ct,U,k),Rt=Lt.getProgramCacheKey(wt);let zt=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?z:S).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,zt===void 0&&(b.addEventListener("dispose",Ht),zt=new Map,W.programs=zt);let Gt=zt.get(Rt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===gt)return Ga(b,wt),Gt}else wt.uniforms=Lt.getUniforms(b),b.onBeforeCompile(wt,v),Gt=Lt.acquireProgram(wt,Rt),zt.set(Rt,Gt),W.uniforms=wt.uniforms;const Ut=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=dt.uniform),Ga(b,wt),W.needsLights=kl(b),W.lightsStateVersion=gt,W.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function za(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Bs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Ga(b,U){const k=St.get(b);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function zl(b,U,k,W,N){U.isScene!==!0&&(U=Et),C.resetTextureUnits();const ct=U.fog,gt=W.isMeshStandardMaterial?U.environment:null,wt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Pi,Rt=(W.isMeshStandardMaterial?z:S).get(W.envMap||gt),zt=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Gt=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!k.morphAttributes.position,Qt=!!k.morphAttributes.normal,se=!!k.morphAttributes.color;let ve=Dn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ve=v.toneMapping);const pe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ee=pe!==void 0?pe.length:0,Nt=St.get(W),Te=f.state.lights;if($===!0&&(G===!0||b!==x)){const Le=b===x&&W.id===w;dt.setState(W,b,Le)}let re=!1;W.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Te.state.version||Nt.outputColorSpace!==wt||N.isBatchedMesh&&Nt.batching===!1||!N.isBatchedMesh&&Nt.batching===!0||N.isBatchedMesh&&Nt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Nt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Nt.instancing===!1||!N.isInstancedMesh&&Nt.instancing===!0||N.isSkinnedMesh&&Nt.skinning===!1||!N.isSkinnedMesh&&Nt.skinning===!0||N.isInstancedMesh&&Nt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Nt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Nt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Nt.instancingMorph===!1&&N.morphTexture!==null||Nt.envMap!==Rt||W.fog===!0&&Nt.fog!==ct||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==dt.numPlanes||Nt.numIntersection!==dt.numIntersection)||Nt.vertexAlphas!==zt||Nt.vertexTangents!==Gt||Nt.morphTargets!==Ut||Nt.morphNormals!==Qt||Nt.morphColors!==se||Nt.toneMapping!==ve||Nt.morphTargetsCount!==ee)&&(re=!0):(re=!0,Nt.__version=W.version);let en=Nt.currentProgram;re===!0&&(en=ns(W,U,N));let Qn=!1,Be=!1,Fi=!1;const de=en.getUniforms(),We=Nt.uniforms;if(Mt.useProgram(en.program)&&(Qn=!0,Be=!0,Fi=!0),W.id!==w&&(w=W.id,Be=!0),Qn||x!==b){Mt.buffers.depth.getReversed()?(q.copy(b.projectionMatrix),Vc(q),Wc(q),de.setValue(D,"projectionMatrix",q)):de.setValue(D,"projectionMatrix",b.projectionMatrix),de.setValue(D,"viewMatrix",b.matrixWorldInverse);const Fe=de.map.cameraPosition;Fe!==void 0&&Fe.setValue(D,et.setFromMatrixPosition(b.matrixWorld)),Pt.logarithmicDepthBuffer&&de.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&de.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,Be=!0,Fi=!0)}if(N.isSkinnedMesh){de.setOptional(D,N,"bindMatrix"),de.setOptional(D,N,"bindMatrixInverse");const Le=N.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),de.setValue(D,"boneTexture",Le.boneTexture,C))}N.isBatchedMesh&&(de.setOptional(D,N,"batchingTexture"),de.setValue(D,"batchingTexture",N._matricesTexture,C),de.setOptional(D,N,"batchingIdTexture"),de.setValue(D,"batchingIdTexture",N._indirectTexture,C),de.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&de.setValue(D,"batchingColorTexture",N._colorsTexture,C));const Xe=k.morphAttributes;if((Xe.position!==void 0||Xe.normal!==void 0||Xe.color!==void 0)&&Bt.update(N,k,en),(Be||Nt.receiveShadow!==N.receiveShadow)&&(Nt.receiveShadow=N.receiveShadow,de.setValue(D,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(We.envMap.value=Rt,We.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(We.envMapIntensity.value=U.environmentIntensity),Be&&(de.setValue(D,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Gl(We,Fi),ct&&W.fog===!0&&_t.refreshFogUniforms(We,ct),_t.refreshMaterialUniforms(We,W,V,tt,f.state.transmissionRenderTarget[b.id]),Bs.upload(D,za(Nt),We,C)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Bs.upload(D,za(Nt),We,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&de.setValue(D,"center",N.center),de.setValue(D,"modelViewMatrix",N.modelViewMatrix),de.setValue(D,"normalMatrix",N.normalMatrix),de.setValue(D,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Le=W.uniformsGroups;for(let Fe=0,$s=Le.length;Fe<$s;Fe++){const Nn=Le[Fe];I.update(Nn,en),I.bind(Nn,en)}}return en}function Gl(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function kl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,U,k){St.get(b.texture).__webglTexture=U,St.get(b.depthTexture).__webglTexture=k;const W=St.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const k=St.get(b);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0};const Hl=D.createFramebuffer();this.setRenderTarget=function(b,U=0,k=0){R=b,T=U,E=k;let W=!0,N=null,ct=!1,gt=!1;if(b){const Rt=St.get(b);if(Rt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Rt.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Rt.__hasExternalTextures)C.rebindTextures(b,St.get(b.texture).__webglTexture,St.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ut=b.depthTexture;if(Rt.__boundDepthTexture!==Ut){if(Ut!==null&&St.has(Ut)&&(b.width!==Ut.image.width||b.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const zt=b.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(gt=!0);const Gt=St.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?N=Gt[U][k]:N=Gt[U],ct=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?N=St.get(b).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[k]:N=Gt,P.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else P.copy(lt).multiplyScalar(V).floor(),B.copy(at).multiplyScalar(V).floor(),F=ht;if(k!==0&&(N=Hl),Mt.bindFramebuffer(D.FRAMEBUFFER,N)&&W&&Mt.drawBuffers(b,N),Mt.viewport(P),Mt.scissor(B),Mt.setScissorTest(F),ct){const Rt=St.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,k)}else if(gt){const Rt=St.get(b.texture),zt=U;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,k,zt)}else if(b!==null&&k!==0){const Rt=St.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,k)}w=-1},this.readRenderTargetPixels=function(b,U,k,W,N,ct,gt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){Mt.bindFramebuffer(D.FRAMEBUFFER,wt);try{const Rt=b.texture,zt=Rt.format,Gt=Rt.type;if(!Pt.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&k>=0&&k<=b.height-N&&D.readPixels(U,k,W,N,Wt.convert(zt),Wt.convert(Gt),ct)}finally{const Rt=R!==null?St.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(b,U,k,W,N,ct,gt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=St.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&gt!==void 0&&(wt=wt[gt]),wt){const Rt=b.texture,zt=Rt.format,Gt=Rt.type;if(!Pt.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-W&&k>=0&&k<=b.height-N){Mt.bindFramebuffer(D.FRAMEBUFFER,wt);const Ut=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.bufferData(D.PIXEL_PACK_BUFFER,ct.byteLength,D.STREAM_READ),D.readPixels(U,k,W,N,Wt.convert(zt),Wt.convert(Gt),0);const Qt=R!==null?St.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Qt);const se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Hc(D,se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ut),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ct),D.deleteBuffer(Ut),D.deleteSync(se),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,k=0){b.isTexture!==!0&&(Hn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-k),N=Math.floor(b.image.width*W),ct=Math.floor(b.image.height*W),gt=U!==null?U.x:0,wt=U!==null?U.y:0;C.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,gt,wt,N,ct),Mt.unbindTexture()};const Vl=D.createFramebuffer(),Wl=D.createFramebuffer();this.copyTextureToTexture=function(b,U,k=null,W=null,N=0,ct=null){b.isTexture!==!0&&(Hn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],U=arguments[2],ct=arguments[3]||0,k=null),ct===null&&(N!==0?(Hn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=N,N=0):ct=0);let gt,wt,Rt,zt,Gt,Ut,Qt,se,ve;const pe=b.isCompressedTexture?b.mipmaps[ct]:b.image;if(k!==null)gt=k.max.x-k.min.x,wt=k.max.y-k.min.y,Rt=k.isBox3?k.max.z-k.min.z:1,zt=k.min.x,Gt=k.min.y,Ut=k.isBox3?k.min.z:0;else{const Xe=Math.pow(2,-N);gt=Math.floor(pe.width*Xe),wt=Math.floor(pe.height*Xe),b.isDataArrayTexture?Rt=pe.depth:b.isData3DTexture?Rt=Math.floor(pe.depth*Xe):Rt=1,zt=0,Gt=0,Ut=0}W!==null?(Qt=W.x,se=W.y,ve=W.z):(Qt=0,se=0,ve=0);const ee=Wt.convert(U.format),Nt=Wt.convert(U.type);let Te;U.isData3DTexture?(C.setTexture3D(U,0),Te=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),Te=D.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),Te=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const re=D.getParameter(D.UNPACK_ROW_LENGTH),en=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Qn=D.getParameter(D.UNPACK_SKIP_PIXELS),Be=D.getParameter(D.UNPACK_SKIP_ROWS),Fi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ut);const de=b.isDataArrayTexture||b.isData3DTexture,We=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Xe=St.get(b),Le=St.get(U),Fe=St.get(Xe.__renderTarget),$s=St.get(Le.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Fe.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,$s.__webglFramebuffer);for(let Nn=0;Nn<Rt;Nn++)de&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(b).__webglTexture,N,Ut+Nn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,St.get(U).__webglTexture,ct,ve+Nn)),D.blitFramebuffer(zt,Gt,gt,wt,Qt,se,gt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||b.isRenderTargetTexture||St.has(b)){const Xe=St.get(b),Le=St.get(U);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,Vl),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Wl);for(let Fe=0;Fe<Rt;Fe++)de?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Xe.__webglTexture,N,Ut+Fe):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Xe.__webglTexture,N),We?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.__webglTexture,ct,ve+Fe):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Le.__webglTexture,ct),N!==0?D.blitFramebuffer(zt,Gt,gt,wt,Qt,se,gt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):We?D.copyTexSubImage3D(Te,ct,Qt,se,ve+Fe,zt,Gt,gt,wt):D.copyTexSubImage2D(Te,ct,Qt,se,zt,Gt,gt,wt);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else We?b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Te,ct,Qt,se,ve,gt,wt,Rt,ee,Nt,pe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Te,ct,Qt,se,ve,gt,wt,Rt,ee,pe.data):D.texSubImage3D(Te,ct,Qt,se,ve,gt,wt,Rt,ee,Nt,pe):b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ct,Qt,se,gt,wt,ee,Nt,pe.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ct,Qt,se,pe.width,pe.height,ee,pe.data):D.texSubImage2D(D.TEXTURE_2D,ct,Qt,se,gt,wt,ee,Nt,pe);D.pixelStorei(D.UNPACK_ROW_LENGTH,re),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,en),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Qn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fi),ct===0&&U.generateMipmaps&&D.generateMipmap(Te),Mt.unbindTexture()},this.copyTextureToTexture3D=function(b,U,k=null,W=null,N=0){return b.isTexture!==!0&&(Hn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,b=arguments[2],U=arguments[3],N=arguments[4]||0),Hn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,k,W,N)},this.initRenderTarget=function(b){St.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Mt.unbindTexture()},this.resetState=function(){T=0,E=0,R=null,Mt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Bl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ni{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const dm=new Da(-1,1,1,-1,0,1);class fm extends ue{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const pm=new fm;class Ia{constructor(t){this._mesh=new Y(pm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class mm extends Ni{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof be?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Qi.clone(t.uniforms),this.material=new be({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ia(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jo extends Ni{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class gm extends Ni{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class _m{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new mm(Bl),this.copyPass.material.blending=Mn,this.clock=new Ll}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jo!==void 0&&(a instanceof jo?n=!0:a instanceof gm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class vm extends Ni{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new J}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Mm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new J(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Li extends Ni{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new J(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,a,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new on(r,a,{type:xn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new on(r,a,{type:xn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=Mm;this.highPassUniforms=Qi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new be({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new It(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Bl;this.copyUniforms=Qi.clone(h.uniforms),this.blendMaterial=new be({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:_e,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new J,this.oldClearAlpha=1,this.basic=new $t,this.fsQuad=new Ia(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Li.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Li.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new be({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new be({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Li.BlurDirectionX=new It(1,0);Li.BlurDirectionY=new It(0,1);const xm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class ym extends Ni{constructor(){super();const t=xm;this.uniforms=Qi.clone(t.uniforms),this.material=new xh({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ia(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},te.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===tl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===el?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===il&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Sm{constructor(){this.audioCtx=null,this.analyser=null,this.dataArray=null,this.sourceNode=null,this.gainNode=null,this.isPlaying=!1,this.currentMode="synth",this.audioElement=null,this.micStream=null,this.synthInterval=null,this.bpm=124,this.step=0,this.bassNotes=[36,36,48,36,39,36,41,38],this.leadNotes=[60,63,67,70,72,70,67,63,65,68,72,75,77,75,72,68],this.levels={bass:0,mid:0,treble:0,overall:0,beat:0,waveform:new Float32Array(128)},this.sensitivity=1.3,this.beatDecay=.92}initContext(){if(!this.audioCtx){const t=window.AudioContext||window.webkitAudioContext;this.audioCtx=new t,this.analyser=this.audioCtx.createAnalyser(),this.analyser.fftSize=512,this.analyser.smoothingTimeConstant=.82,this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.timeData=new Uint8Array(this.analyser.fftSize),this.gainNode=this.audioCtx.createGain(),this.gainNode.gain.value=.9,this.gainNode.connect(this.analyser),this.analyser.connect(this.audioCtx.destination)}this.audioCtx.state==="suspended"&&this.audioCtx.resume()}startBuiltInSynth(){this.stopCurrentSource(),this.initContext(),this.currentMode="synth",this.isPlaying=!0;const t=60/this.bpm/4;let e=this.audioCtx.currentTime+.05;const n=()=>{if(!(!this.isPlaying||this.currentMode!=="synth")){for(;e<this.audioCtx.currentTime+.15;)this.playSynthStep(this.step,e),this.step=(this.step+1)%64,e+=t;this.synthInterval=requestAnimationFrame(n)}};n()}midiToFreq(t){return 440*Math.pow(2,(t-69)/12)}playSynthStep(t,e){if(!this.audioCtx)return;if(t%4===0){const c=this.audioCtx.createOscillator(),h=this.audioCtx.createGain();c.type="sine",c.frequency.setValueAtTime(140,e),c.frequency.exponentialRampToValueAtTime(32,e+.12),h.gain.setValueAtTime(1.1,e),h.gain.exponentialRampToValueAtTime(.001,e+.22),c.connect(h),h.connect(this.gainNode),c.start(e),c.stop(e+.25)}if(t%8===4){const c=this.audioCtx.sampleRate*.15,h=this.audioCtx.createBuffer(1,c,this.audioCtx.sampleRate),u=h.getChannelData(0);for(let _=0;_<c;_++)u[_]=Math.random()*2-1;const d=this.audioCtx.createBufferSource();d.buffer=h;const p=this.audioCtx.createBiquadFilter();p.type="highpass",p.frequency.setValueAtTime(1e3,e);const g=this.audioCtx.createGain();g.gain.setValueAtTime(.6,e),g.gain.exponentialRampToValueAtTime(.001,e+.15),d.connect(p),p.connect(g),g.connect(this.gainNode),d.start(e),d.stop(e+.16)}if(t%2===1||t%4===2&&Math.random()>.3){const c=this.audioCtx.sampleRate*.04,h=this.audioCtx.createBuffer(1,c,this.audioCtx.sampleRate),u=h.getChannelData(0);for(let _=0;_<c;_++)u[_]=Math.random()*2-1;const d=this.audioCtx.createBufferSource();d.buffer=h;const p=this.audioCtx.createBiquadFilter();p.type="highpass",p.frequency.setValueAtTime(6500,e);const g=this.audioCtx.createGain();g.gain.setValueAtTime(.25,e),g.gain.exponentialRampToValueAtTime(.001,e+.035),d.connect(p),p.connect(g),g.connect(this.gainNode),d.start(e),d.stop(e+.04)}const n=Math.floor(t/2)%this.bassNotes.length,i=this.bassNotes[n],r=this.midiToFreq(i),a=this.audioCtx.createOscillator(),o=this.audioCtx.createBiquadFilter(),l=this.audioCtx.createGain();if(a.type="sawtooth",a.frequency.setValueAtTime(r,e),o.type="lowpass",o.Q.setValueAtTime(4.5,e),o.frequency.setValueAtTime(400,e),o.frequency.exponentialRampToValueAtTime(1400,e+.03),o.frequency.exponentialRampToValueAtTime(250,e+.12),l.gain.setValueAtTime(.55,e),l.gain.exponentialRampToValueAtTime(.001,e+.14),a.connect(o),o.connect(l),l.connect(this.gainNode),a.start(e),a.stop(e+.15),t%2===0&&t>=16){const c=this.leadNotes[t/2%this.leadNotes.length],h=this.midiToFreq(c),u=this.audioCtx.createOscillator(),d=this.audioCtx.createBiquadFilter(),p=this.audioCtx.createGain();u.type="square",u.frequency.setValueAtTime(h,e),d.type="bandpass",d.Q.setValueAtTime(3,e),d.frequency.setValueAtTime(h*1.5,e),p.gain.setValueAtTime(.2,e),p.gain.exponentialRampToValueAtTime(.001,e+.12),u.connect(d),d.connect(p),p.connect(this.gainNode),u.start(e),u.stop(e+.13)}}loadAudioFile(t){this.stopCurrentSource(),this.initContext(),this.currentMode="file";const e=URL.createObjectURL(t);this.audioElement=new Audio(e),this.audioElement.loop=!0,this.sourceNode=this.audioCtx.createMediaElementSource(this.audioElement),this.sourceNode.connect(this.gainNode),this.audioElement.play().then(()=>{this.isPlaying=!0}).catch(n=>{console.warn("Playback error:",n)})}async startMicrophone(){this.stopCurrentSource(),this.initContext(),this.currentMode="mic";try{this.micStream=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),this.sourceNode=this.audioCtx.createMediaStreamSource(this.micStream),this.analyser.disconnect(),this.sourceNode.connect(this.gainNode),this.isPlaying=!0}catch(t){console.error("Microphone access denied or error:",t),alert("Could not access microphone: "+t.message),this.startBuiltInSynth()}}stopCurrentSource(){if(this.isPlaying=!1,this.synthInterval&&(cancelAnimationFrame(this.synthInterval),this.synthInterval=null),this.audioElement&&(this.audioElement.pause(),this.audioElement.src="",this.audioElement=null),this.micStream&&(this.micStream.getTracks().forEach(t=>t.stop()),this.micStream=null),this.sourceNode&&(this.sourceNode.disconnect(),this.sourceNode=null),this.analyser&&this.audioCtx)try{this.analyser.connect(this.audioCtx.destination)}catch{}}togglePlayPause(){return this.audioCtx?this.isPlaying?(this.currentMode==="synth"?(this.isPlaying=!1,this.synthInterval&&cancelAnimationFrame(this.synthInterval)):this.currentMode==="file"&&this.audioElement&&(this.audioElement.pause(),this.isPlaying=!1),!1):(this.currentMode==="synth"?this.startBuiltInSynth():this.currentMode==="file"&&this.audioElement&&(this.audioElement.play(),this.isPlaying=!0),!0):(this.startBuiltInSynth(),!0)}update(){if(!this.analyser||!this.isPlaying)return this.levels.bass*=.9,this.levels.mid*=.9,this.levels.treble*=.9,this.levels.overall*=.9,this.levels.beat*=this.beatDecay,this.levels;this.analyser.getByteFrequencyData(this.dataArray),this.analyser.getByteTimeDomainData(this.timeData);const t=this.analyser.frequencyBinCount;let e=0;const n=Math.min(14,t);for(let g=2;g<n;g++)e+=this.dataArray[g];const i=e/(n-2)/255;let r=0;const a=Math.min(70,t);for(let g=15;g<a;g++)r+=this.dataArray[g];const o=r/(a-15)/255;let l=0;const c=Math.min(180,t);for(let g=71;g<c;g++)l+=this.dataArray[g];const h=l/(c-71)/255,u=this.sensitivity;this.levels.bass=Math.min(1,i*u),this.levels.mid=Math.min(1,o*u),this.levels.treble=Math.min(1,h*u),this.levels.overall=Math.min(1,(i*.5+o*.3+h*.2)*u),this.levels.bass>.65&&this.levels.bass>this.levels.beat*1.15?this.levels.beat=1:this.levels.beat*=this.beatDecay;const d=this.levels.waveform.length,p=Math.floor(this.timeData.length/d);for(let g=0;g<d;g++)this.levels.waveform[g]=this.timeData[g*p]/128-1;return this.levels}}class wm{constructor(t){this.scene=t,this.chunkSize=220,this.gridRadius=4,this.gridDiameter=this.gridRadius*2+1,this.totalChunks=this.gridDiameter*this.gridDiameter,this.chunkPool=new Map,this.cityGroup=new Zt,this.scene.add(this.cityGroup),this.buildingColliders=new Map,this.audioReactiveMeshes={windowMaterials:[],neonMaterials:[],trafficMaterials:[],searchlights:[],billboardMaterials:[]},this.simTime=0,this.trafficCars=[],this.maglevTrains=[],this.initMaterials(),this.createGround(),this.initTraffic(),this.initMaglevSystem(),this.createSkyElements(),this.lastCenterChunkX=null,this.lastCenterChunkZ=null}createWindowTextureSet(t){const a=document.createElement("canvas");a.width=512,a.height=512;const o=a.getContext("2d"),l=document.createElement("canvas");l.width=512,l.height=512;const c=l.getContext("2d");o.fillStyle=t.facadeColor,o.fillRect(0,0,512,512),c.fillStyle="#000000",c.fillRect(0,0,512,512);const h=512/8,u=512/8,d=5.5,p=7;for(let m=0;m<8;m++){o.fillStyle=t.spandrelColor,o.fillRect(0,m*u,512,4);const f=.42+Math.sin(m*1.5)*.12;for(let y=0;y<8;y++){const M=y*h+d,v=m*u+p,A=h-d*2,T=u-p*2,E=Math.sin(y*19.3+m*37.1)*43758.5453,R=E-Math.floor(E);if(R<f){const x=Math.floor(R*t.litColors.length),P=t.litColors[x];o.fillStyle="#060a12",o.fillRect(M,v,A,T),o.save(),o.globalAlpha=.18,o.fillStyle=P,o.fillRect(M+2,v+2,A-4,T-4),o.restore(),R>.3&&(o.fillStyle="rgba(6, 10, 18, 0.75)",o.fillRect(M,v+T*.38,A,2.5),o.fillRect(M+A*.5-1,v,2,T)),c.fillStyle=P,c.fillRect(M,v,A,T)}else o.fillStyle=t.unlitColor,o.fillRect(M,v,A,T)}}o.fillStyle=t.pierColor;for(let m=0;m<=8;m+=2)o.fillRect(m*h-2.5,0,5,512);const g=new je(a);g.wrapS=He,g.wrapT=He;const _=new je(l);return _.wrapS=He,_.wrapT=He,{diffTexture:g,emissTexture:_}}initWindowTextures(){this.windowSets=[],[{facadeColor:"#0d1b33",spandrelColor:"#081020",pierColor:"#050a14",unlitColor:"#040810",litColors:["#00f3ff","#00d2ff","#0284c7","#38bdf8","#0ea5e9"]},{facadeColor:"#1d0e33",spandrelColor:"#110820",pierColor:"#090412",unlitColor:"#06020c",litColors:["#d946ef","#c026d3","#a855f7","#9333ea","#ff007f"]},{facadeColor:"#08211d",spandrelColor:"#051412",pierColor:"#030c0b",unlitColor:"#020706",litColors:["#00ffaa","#10b981","#059669","#34d399","#0d9488"]},{facadeColor:"#26160c",spandrelColor:"#170d07",pierColor:"#0e0704",unlitColor:"#080402",litColors:["#ffaa00","#f59e0b","#fb923c","#ea580c","#d97706"]},{facadeColor:"#111624",spandrelColor:"#0a0d17",pierColor:"#06080e",unlitColor:"#030508",litColors:["#00f3ff","#38bdf8","#0284c7","#60a5fa","#00d2ff"]},{facadeColor:"#240a15",spandrelColor:"#16060d",pierColor:"#0c0307",unlitColor:"#070204",litColors:["#ff0055","#f43f5e","#e11d48","#fb7185","#ff1744"]}].forEach(e=>{this.windowSets.push(this.createWindowTextureSet(e))})}createBuildingBoxGeometry(t,e,n){const i=new pt(t,e,n),r=i.attributes.uv,a=t/24,o=n/24,l=e/28;for(let c=0;c<8;c++)r.setXY(c,r.getX(c)*o,r.getY(c)*l);for(let c=8;c<16;c++)r.setXY(c,.01,.01);for(let c=16;c<24;c++)r.setXY(c,r.getX(c)*a,r.getY(c)*l);return r.needsUpdate=!0,i}createBuildingCylinderGeometry(t,e,n=24){const i=new Oe(t,t,e,n),r=i.attributes.uv,o=2*Math.PI*t/24,l=e/28;for(let c=0;c<r.count;c++)r.setXY(c,r.getX(c)*o,r.getY(c)*l);return r.needsUpdate=!0,i}initMaterials(){this.initWindowTextures();const t=e=>new Yt({map:this.windowSets[e].diffTexture,emissiveMap:this.windowSets[e].emissTexture,emissive:new J(16777215),emissiveIntensity:.65,color:new J(13684944),roughness:.78,metalness:.12});this.matCobalt=t(0),this.matViolet=t(1),this.matTeal=t(2),this.matBronze=t(3),this.matTitanium=t(4),this.matCrimson=t(5),this.matSlateGrey=this.matCobalt,this.matTitaniumSilver=this.matViolet,this.matCoolSteel=this.matTeal,this.matChromePlatinum=this.matTitanium,this.matWarmConcrete=this.matBronze,this.matGraphiteGrey=this.matCrimson,this.facadeMaterials=[this.matCobalt,this.matViolet,this.matTeal,this.matBronze,this.matTitanium,this.matCrimson],this.audioReactiveMeshes.windowMaterials.push(...this.facadeMaterials),this.neonCyanMat=new $t({color:62463}),this.neonMagentaMat=new $t({color:16711807}),this.neonAmberMat=new $t({color:16755200}),this.neonPurpleMat=new $t({color:11032055}),this.neonLimeMat=new $t({color:65450}),this.audioReactiveMeshes.neonMaterials.push(this.neonCyanMat,this.neonMagentaMat,this.neonAmberMat,this.neonPurpleMat,this.neonLimeMat),this.roadMat=new Yt({color:988448,roughness:.85,metalness:.15}),this.sidewalkMat=new Yt({color:2502717,roughness:.7,metalness:.25}),this.curbCyanMat=this.neonCyanMat,this.curbMagentaMat=this.neonMagentaMat,this.roadMarkingAmberMat=new $t({color:16755200}),this.roadMarkingCyanMat=new $t({color:54527}),this.roadMarkingStopMat=new $t({color:16711765}),this.gantryMat=new Yt({color:1976635,roughness:.5,metalness:.7}),this.signGreenMat=new $t({color:65416}),this.carChassisMaterials=[new Yt({color:1976635,roughness:.4,metalness:.75}),new Yt({color:10033947,roughness:.38,metalness:.7}),new Yt({color:165063,roughness:.38,metalness:.7}),new Yt({color:11817737,roughness:.38,metalness:.7}),new Yt({color:3359061,roughness:.42,metalness:.75}),new Yt({color:5774471,roughness:.38,metalness:.75})],this.carCanopyMat=new Yt({color:461848,roughness:.15,metalness:.85}),this.headlightMat=new $t({color:62463}),this.headlightBeamMat=new $t({color:62463,transparent:!0,opacity:.16,depthWrite:!1,side:Ee}),this.taillightMat=new $t({color:16711748}),this.underglowCyanMat=new $t({color:62463,transparent:!0,opacity:.85}),this.underglowMagentaMat=new $t({color:16711807,transparent:!0,opacity:.85}),this.trailMat=new $t({color:16711748,transparent:!0,opacity:.65}),this.maglevTrackMat=new Yt({color:1581101,roughness:.65,metalness:.6}),this.maglevRailCyanMat=new $t({color:62463}),this.maglevRailAmberMat=new $t({color:16755200}),this.trainChassisDarkMat=new Yt({color:856863,roughness:.32,metalness:.85}),this.trainAccentCyanMat=new $t({color:62463}),this.trainAccentMagentaMat=new $t({color:16711807}),this.trainWindowLitMat=new $t({color:8246268}),this.trainWindowAmberMat=new $t({color:16638023}),this.trainUnderglowLevMat=new $t({color:62463,transparent:!0,opacity:.9}),this.trainUnderglowMagMat=new $t({color:16711807,transparent:!0,opacity:.9}),this.trainPlasmaTrailMat=new $t({color:58879,transparent:!0,opacity:.7}),this.audioReactiveMeshes.neonMaterials.push(this.maglevRailCyanMat,this.maglevRailAmberMat),this.audioReactiveMeshes.trafficMaterials.push(this.underglowCyanMat,this.underglowMagentaMat,this.trailMat,this.trainUnderglowLevMat,this.trainUnderglowMagMat,this.trainPlasmaTrailMat),this.createBillboardTextures()}createCarMesh(t=!1){const e=new Zt,n=this.carChassisMaterials[Math.floor(Math.random()*this.carChassisMaterials.length)],i=new pt(2.4,.75,4.8),r=new Y(i,n);r.position.y=.55,e.add(r);const a=new pt(2.2,.45,1.8),o=new Y(a,n);o.position.set(0,.4,-2.6),e.add(o);const l=new Y(new pt(2.3,.12,1.4),this.carCanopyMat);l.position.set(0,.18,-2.9),e.add(l);const c=new pt(1.8,.55,2.3),h=new Y(c,this.carCanopyMat);h.position.set(0,1.1,.3),e.add(h),[-.85,.85].forEach(T=>{const E=new Y(new pt(.42,.2,.15),this.headlightMat);E.position.set(T,.45,-3.45),e.add(E)}),this.sharedBeamGeo||(this.sharedBeamGeo=new Ke(2.6,14,8,1,!0),this.sharedBeamGeo.rotateX(-Math.PI/2+.1),this.sharedBeamGeo.translate(0,-.2,-7));const u=new Y(this.sharedBeamGeo,this.headlightBeamMat);u.position.set(0,.55,-2.8),e.add(u);const d=new Y(new pt(2.3,.22,.15),this.taillightMat);d.position.set(0,.6,2.45),e.add(d);const p=new Y(new pt(.15,.45,.3),n);p.position.set(-.9,1.05,2.2);const g=new Y(new pt(.15,.45,.3),n);g.position.set(.9,1.05,2.2);const _=new Y(new pt(2.4,.12,.6),n);_.position.set(0,1.25,2.2),e.add(p,g,_),[-1.25,1.25].forEach(T=>{[-1.5,1.5].forEach(E=>{const R=new Y(new Oe(.42,.42,.32,12),this.carCanopyMat);R.rotateZ(Math.PI/2),R.position.set(T,.38,E),e.add(R);const w=new Y(new Xs(.44,.05,6,12),this.neonCyanMat);w.rotateY(Math.PI/2),w.position.set(T>0?T+.18:T-.18,.38,E),e.add(w)})});const m=Math.random()<.5,f=m?this.underglowMagentaMat:this.underglowCyanMat,y=new Y(new pt(2.1,.08,4.4),f);if(y.position.set(0,.1,0),e.add(y),t){const T=new Y(new pt(1.6,.12,.8),n);T.position.set(-2,.65,.2),T.rotateZ(-.15);const E=new Y(new pt(1.6,.12,.8),n);E.position.set(2,.65,.2),E.rotateZ(.15),e.add(T,E)}const M=t?22:12,v=new pt(.25,.12,M),A=new Y(v,m?this.neonMagentaMat:this.trailMat);return A.position.set(0,.55,2.45+M/2),e.add(A),e}initTraffic(){this.trafficCars=[],this.trafficGroup=new Zt,this.cityGroup.add(this.trafficGroup);const t=[3.8,8.2,-3.8,-8.2],e=48;for(let i=0;i<e;i++){const r=i%2===0,a=this.createCarMesh(!1),o=Math.floor(i/2)%5-2,l=i%4,c=t[l],u=l<2?1:-1,p=(l%2===0?62:46)+(Math.sin(i*13.7)*.5+.5)*16;let g,_;r?(g=0,_=u*p,a.rotation.y=u>0?0:Math.PI):(g=u*p,_=0,a.rotation.y=u>0?-Math.PI/2:Math.PI/2),a.position.set(0,1.15,0),a.userData={isNS:r,aveRel:o,laneOffset:c,vx:g,vz:_,baseY:1.15,seed:Math.random()*100,isFlying:!1},this.trafficGroup.add(a),this.trafficCars.push(a)}const n=16;for(let i=0;i<n;i++){const r=this.createCarMesh(!0),a=i%2===0,o=i%4<2?1:-1,l=70+Math.random()*45,c=55+i%4*15;let h,u,d,p;a?(h=(Math.floor(i/4)-2)*this.chunkSize+96,u=(Math.random()-.5)*800,d=0,p=o*l,r.rotation.y=o>0?0:Math.PI):(h=(Math.random()-.5)*800,u=(Math.floor(i/4)-2)*this.chunkSize+96,d=o*l,p=0,r.rotation.y=o>0?-Math.PI/2:Math.PI/2),r.position.set(h,c,u),r.userData={isNS:a,vx:d,vz:p,baseY:c,seed:Math.random()*100,isFlying:!0},this.trafficGroup.add(r),this.trafficCars.push(r)}}createMaglevTrain(t="cyan"){const e=new Zt,n=t==="cyan",i=t==="amber",r=n?this.trainAccentCyanMat:i?this.maglevRailAmberMat:this.trainAccentMagentaMat,a=n||!i?this.trainWindowLitMat:this.trainWindowAmberMat,o=n?this.trainUnderglowLevMat:this.trainUnderglowMagMat;return[{type:"lead",ox:41},{type:"passenger",ox:25},{type:"passenger",ox:10},{type:"passenger",ox:-5},{type:"passenger",ox:-20},{type:"rear",ox:-39}].forEach(c=>{const h=new Zt;if(h.position.x=c.ox,c.type==="lead"){const p=new pt(10,2.8,3.4),g=new Y(p,this.trainChassisDarkMat);g.position.set(0,1.4,0),h.add(g);const _=new pt(8,1.8,3.1),m=new Y(_,this.trainChassisDarkMat);m.position.set(8.5,.9,0),h.add(m);const f=new Y(new pt(2.5,.6,2.6),this.trainChassisDarkMat);f.position.set(13.2,.35,0),h.add(f);const y=new Y(new pt(4.2,.8,2.7),this.carCanopyMat);y.position.set(5.5,2,0),h.add(y);const M=new Y(new pt(6,.45,.5),r);M.position.set(0,2.95,0),h.add(M),[-1.1,1.1].forEach(A=>{const T=new Y(new pt(.3,.4,.6),r);T.position.set(13.6,.45,A),h.add(T)}),this.sharedTrainBeamGeo||(this.sharedTrainBeamGeo=new Ke(5.5,55,8,1,!0),this.sharedTrainBeamGeo.rotateZ(-Math.PI/2),this.sharedTrainBeamGeo.translate(27.5,0,0));const v=new Y(this.sharedTrainBeamGeo,this.headlightBeamMat);v.position.set(13.5,.45,0),h.add(v)}else if(c.type==="rear"){const p=new pt(10,2.8,3.4),g=new Y(p,this.trainChassisDarkMat);g.position.set(0,1.4,0),h.add(g);const _=new pt(8,2,3.1),m=new Y(_,this.trainChassisDarkMat);m.position.set(-8.5,1,0),h.add(m);const f=new Y(new pt(.2,.5,2.8),this.taillightMat);f.position.set(-12.6,.8,0),h.add(f),[-1,1].forEach(y=>{const M=new Y(new pt(28,.2,.35),this.trainPlasmaTrailMat);M.position.set(-26.5,.8,y),h.add(M)})}else{const p=new pt(13.5,2.8,3.4),g=new Y(p,this.trainChassisDarkMat);g.position.set(0,1.4,0),h.add(g),[-1.72,1.72].forEach(m=>{const f=new Y(new me(12.2,.85),a);m<0&&f.rotateY(Math.PI),f.position.set(0,1.6,m),h.add(f)}),[-1.73,1.73].forEach(m=>{[-4.5,4.5].forEach(f=>{const y=new Y(new pt(.12,2.1,.05),r);y.position.set(f,1.35,m),h.add(y)})});const _=new Y(new pt(1.6,2.5,3.1),this.maglevTrackMat);_.position.set(-7.2,1.35,0),h.add(_)}[-1.72,1.72].forEach(p=>{const g=new Y(new pt(c.type==="passenger"?13.4:10,.12,.05),r);g.position.set(0,.6,p),h.add(g)});const u=new Y(new pt(c.type==="passenger"?12:9,.35,2.8),this.maglevTrackMat);u.position.set(0,-.05,0),h.add(u);const d=new Y(new pt(c.type==="passenger"?12.8:10,.12,3.2),o);d.position.set(0,-.22,0),h.add(d),e.add(h)}),e}initMaglevSystem(){this.maglevTrains=[],this.maglevGroup=new Zt,this.cityGroup.add(this.maglevGroup);const t=this.createMaglevTrain("cyan");t.userData={trackZ:48,vx:92,baseY:44.8,seed:0,isForward:!0},t.position.set(0,44.8,48),this.maglevGroup.add(t),this.maglevTrains.push(t);const e=this.createMaglevTrain("magenta");e.rotation.y=Math.PI,e.userData={trackZ:54,vx:-96,baseY:44.8,seed:25,isForward:!1},e.position.set(120,44.8,54),this.maglevGroup.add(e),this.maglevTrains.push(e);const n=this.createMaglevTrain("amber");n.userData={trackZ:48,vx:88,baseY:44.8,seed:50,isForward:!0},n.position.set(-450,44.8,48),this.maglevGroup.add(n),this.maglevTrains.push(n)}createBillboardTextures(){this.billboardCanvases=[],this.billboardTextures=[],[{text:"CYBER//CORP",sub:"NEURAL LINK v9.4",color:"#00f3ff"},{text:"NIGHT//CITY",sub:"BIO-ENHANCEMENT",color:"#ff0077"},{text:"AERO-DRONE",sub:"HYPER-FPV DRIVER",color:"#ffaa00"},{text:"SYNTH//WAVE",sub:"FREQUENCY OVERDRIVE",color:"#a855f7"},{text:"QUANTUM//AI",sub:"SUB-ATOMIC CORE",color:"#00ffaa"}].forEach(e=>{const n=document.createElement("canvas");n.width=512,n.height=256;const i=n.getContext("2d");i.fillStyle="#0f172a",i.fillRect(0,0,512,256),i.strokeStyle=e.color,i.lineWidth=6,i.strokeRect(10,10,492,236),i.fillStyle=e.color,i.font='bold 44px "Orbitron", monospace',i.textAlign="center",i.shadowColor=e.color,i.shadowBlur=18,i.fillText(e.text,256,95),i.fillStyle="#ffffff",i.font='22px "Share Tech Mono", monospace',i.shadowBlur=8,i.fillText(e.sub,256,155),i.fillStyle=e.color;for(let o=0;o<22;o++){const l=15+Math.random()*45;i.fillRect(65+o*18,220-l,12,l)}const r=new je(n);this.billboardTextures.push(r);const a=new $t({map:r,transparent:!0,opacity:.95,side:Ee});this.audioReactiveMeshes.billboardMaterials.push(a)})}createGround(){const t=new me(3500,3500,32,32);t.rotateX(-Math.PI/2);const e=new Yt({color:2239030,roughness:.65,metalness:.35});this.groundMesh=new Y(t,e),this.groundMesh.position.y=0,this.scene.add(this.groundMesh);const n=new Ah(3500,70,54527,1977669);n.position.y=.5,this.scene.add(n),this.groundGrid=n}createSkyElements(){this.searchlightGroup=new Zt;const t=new Oe(.4,1.6,550,8,1,!0);t.translate(0,275,0);const e=[62463,16711799,65450,11032055];for(let n=0;n<4;n++){const i=new $t({color:e[n%e.length],transparent:!0,opacity:.16,side:Ee,depthWrite:!1}),r=new Y(t,i),a=n/4*Math.PI*2;r.position.set(Math.cos(a)*500,80,Math.sin(a)*500),r.rotation.z=.22,r.userData={baseRotZ:r.rotation.z,rotSpeed:n%2===0?.35:-.35,mat:i},this.searchlightGroup.add(r),this.audioReactiveMeshes.searchlights.push(r)}this.scene.add(this.searchlightGroup)}hash2D(t,e){let n=Math.sin(t*12.9898+e*78.233)*43758.5453;return n-Math.floor(n)}createChunkGroup(t,e){const n=new Zt,i=t*this.chunkSize,r=e*this.chunkSize;n.position.set(i,0,r);const a=this.hash2D(t,e),o=[],l=Math.floor(a*5);if(l===0){const at=this.facadeMaterials[Math.floor(this.hash2D(t+1,e)*this.facadeMaterials.length)],ht=this.audioReactiveMeshes.neonMaterials[Math.floor(this.hash2D(t,e+1)*this.audioReactiveMeshes.neonMaterials.length)],O=80,$=85,G=new Y(this.createBuildingBoxGeometry($,O,$),at);G.position.set(0,O/2,0),n.add(G);const q=new Y(new pt($+1.5,2,$+1.5),ht);q.position.set(0,O,0),n.add(q);const nt=120,et=60,it=new Y(this.createBuildingBoxGeometry(et,nt,et),at);it.position.set(0,O+nt/2,0),n.add(it);const Et=new Y(new pt(et+1.5,2,et+1.5),ht);Et.position.set(0,O+nt,0),n.add(Et);const yt=150,bt=38,D=new Y(this.createBuildingBoxGeometry(bt,yt,bt),at);D.position.set(0,O+nt+yt/2,0),n.add(D);const jt=O+nt+yt,Ft=new Y(new qs(8,14,16),ht);Ft.rotateX(-Math.PI/2),Ft.position.set(0,jt+.5,0),n.add(Ft);const Pt=new Y(new Oe(.6,2.5,55,8),at);Pt.position.set(0,jt+27.5,0),n.add(Pt),o.push({x:i,z:r,width:$,depth:$,height:jt,radius:$*.7}),[{ox:-72,oz:72,w:28,d:24,h:180},{ox:48,oz:-65,w:32,d:28,h:220}].forEach((Dt,St)=>{const C=this.facadeMaterials[(St+2)%this.facadeMaterials.length],S=new Y(this.createBuildingBoxGeometry(Dt.w,Dt.h,Dt.d),C);S.position.set(Dt.ox,Dt.h/2,Dt.oz),n.add(S);const z=new Y(new pt(2,Dt.h*.8,Dt.d+.8),this.neonCyanMat);z.position.set(Dt.ox,Dt.h*.45,Dt.oz),n.add(z),o.push({x:i+Dt.ox,z:r+Dt.oz,width:Dt.w,depth:Dt.d,height:Dt.h,radius:Math.sqrt(Dt.w*Dt.w+Dt.d*Dt.d)/2})})}else if(l===1){const at=this.matCobalt,ht=this.matViolet,O=340+a*80,$=360+a*60,G=42,q=42,nt=new Y(this.createBuildingBoxGeometry(G,O,q),at);nt.position.set(-48,O/2,0),n.add(nt);const et=new Y(this.createBuildingBoxGeometry(G,$,q),ht);et.position.set(48,$/2,0),n.add(et),[O*.45,O*.78].forEach((it,Et)=>{const yt=new Y(new pt(56,7,14),this.matTitanium);yt.position.set(0,it,0),n.add(yt);const bt=new Y(new pt(56,1,14.8),Et===0?this.neonMagentaMat:this.neonCyanMat);bt.position.set(0,it-3.8,0),n.add(bt)}),[-48,48].forEach((it,Et)=>{const yt=new Y(new pt(G+.8,120,2),Et===0?this.neonCyanMat:this.neonMagentaMat);yt.position.set(it,140,q/2),n.add(yt)}),o.push({x:i-48,z:r,width:G,depth:q,height:O,radius:30},{x:i+48,z:r,width:G,depth:q,height:$,radius:30})}else if(l===2){const at=5+Math.floor(a*3);for(let ht=0;ht<at;ht++){const O=this.hash2D(t*7+ht,e*11+ht),$=ht%3,G=Math.floor(ht/3),q=-60+$*50+(O-.5)*10,nt=-60+G*50+(this.hash2D(t,ht)-.5)*10,et=24+O*16,it=24+this.hash2D(ht,e)*16,Et=90+O*290,yt=this.facadeMaterials[(ht+t)%this.facadeMaterials.length],bt=new Y(this.createBuildingBoxGeometry(et,Et,it),yt);bt.position.set(q,Et/2,nt),bt.rotation.y=ht%2===0?0:.25,n.add(bt);const D=this.audioReactiveMeshes.neonMaterials[ht%this.audioReactiveMeshes.neonMaterials.length],jt=new Y(new pt(et+.8,2,it+.8),D);if(jt.position.set(q,Et*.7,nt),n.add(jt),O>.45){const Ft=this.audioReactiveMeshes.billboardMaterials[ht%this.audioReactiveMeshes.billboardMaterials.length],Pt=et*.85,Mt=new Y(new me(Pt,Pt*.5),Ft);Mt.position.set(q,Et*.55,nt+it/2+.6),n.add(Mt)}o.push({x:i+q,z:r+nt,width:et,depth:it,height:Et,radius:Math.sqrt(et*et+it*it)/2})}}else if(l===3){const at=260+a*90,ht=32,O=this.createBuildingCylinderGeometry(ht,at,24),$=new Y(O,this.matTeal);$.position.set(-45,at/2,10),n.add($);for(let Et=1;Et<=3;Et++){const yt=new Xs(ht+.8,1.2,8,24);yt.rotateX(Math.PI/2);const bt=new Y(yt,this.neonLimeMat);bt.position.set(-45,at*(Et*.25),10),n.add(bt)}const G=340+a*120,q=46,nt=46,et=new Y(this.createBuildingBoxGeometry(q,G,nt),this.matCrimson);et.position.set(45,G/2,-20),et.rotation.y=Math.PI/4,n.add(et);const it=new Y(new Ke(8,24,4),this.neonAmberMat);it.position.set(45,G+12,-20),it.rotation.y=Math.PI/4,n.add(it),o.push({x:i-45,z:r+10,width:ht*2,depth:ht*2,height:at,radius:ht},{x:i+45,z:r-20,width:q,depth:nt,height:G,radius:34})}else{const at=this.matTitanium,ht=500,O=34,$=new Y(this.createBuildingBoxGeometry(O,140,O),at);$.position.set(0,70,0),n.add($);const G=new Oe(1.5,7,360,10),q=new Y(G,this.matTitanium);q.position.set(0,320,0),n.add(q),[280,380,460].forEach((et,it)=>{const Et=new Oe(18-it*4,18-it*4,3,16),yt=new Y(Et,this.neonCyanMat);yt.position.set(0,et,0),n.add(yt)}),o.push({x:i,z:r,width:O,depth:O,height:ht,radius:26}),[{ox:-65,oz:-65,w:40,d:40,h:48},{ox:48,oz:24,w:32,d:32,h:52}].forEach((et,it)=>{const Et=this.facadeMaterials[(it+3)%this.facadeMaterials.length],yt=new Y(this.createBuildingBoxGeometry(et.w,et.h,et.d),Et);yt.position.set(et.ox,et.h/2,et.oz),n.add(yt),o.push({x:i+et.ox,z:r+et.oz,width:et.w,depth:et.d,height:et.h,radius:26})})}const c=28,h=this.chunkSize,u=new Y(new me(h,c),this.roadMat);u.rotateX(-Math.PI/2),u.position.set(0,.08,96),n.add(u);const d=new Y(new me(c,h),this.roadMat);d.rotateX(-Math.PI/2),d.position.set(96,.08,0),n.add(d);const p=new Y(new pt(4,.22,h),this.sidewalkMat);p.position.set(80,.11,0),n.add(p);const g=new Y(new pt(4,.22,h),this.sidewalkMat);g.position.set(112,.11,0),n.add(g);const _=new Y(new pt(h,.22,4),this.sidewalkMat);_.position.set(0,.11,80),n.add(_);const m=new Y(new pt(h,.22,4),this.sidewalkMat);m.position.set(0,.11,112),n.add(m);const f=new Y(new pt(.5,.28,h),this.curbCyanMat);f.position.set(82,.14,0),n.add(f);const y=new Y(new pt(.5,.28,h),this.curbMagentaMat);y.position.set(110,.14,0),n.add(y);const M=new Y(new pt(h,.28,.5),this.curbCyanMat);M.position.set(0,.14,82),n.add(M);const v=new Y(new pt(h,.28,.5),this.curbMagentaMat);v.position.set(0,.14,110),n.add(v);const A=10;for(let at=0;at<A;at++){const ht=(at/A-.5)*h+11;if(Math.abs(ht-96)<18)continue;const O=new Y(new me(.8,9),this.roadMarkingAmberMat);O.rotateX(-Math.PI/2),O.position.set(96,.12,ht),n.add(O);const $=new Y(new me(9,.8),this.roadMarkingAmberMat);$.rotateX(-Math.PI/2),$.position.set(ht,.12,96),n.add($),[-5.8,5.8].forEach(G=>{const q=new Y(new me(.5,7),this.roadMarkingCyanMat);q.rotateX(-Math.PI/2),q.position.set(96+G,.12,ht),n.add(q);const nt=new Y(new me(7,.5),this.roadMarkingCyanMat);nt.rotateX(-Math.PI/2),nt.position.set(ht,.12,96+G),n.add(nt)})}[{x:96,z:80,isH:!1},{x:96,z:112,isH:!1},{x:80,z:96,isH:!0},{x:112,z:96,isH:!0}].forEach(at=>{if(at.isH){const ht=new Y(new me(1.2,24),this.roadMarkingStopMat);ht.rotateX(-Math.PI/2),ht.position.set(at.x>96?at.x+3:at.x-3,.13,at.z),n.add(ht);for(let O=-4;O<=4;O++){const $=new Y(new me(5,1.4),this.roadMarkingCyanMat);$.rotateX(-Math.PI/2),$.position.set(at.x,.13,at.z+O*2.6),n.add($)}}else{const ht=new Y(new me(24,1.2),this.roadMarkingStopMat);ht.rotateX(-Math.PI/2),ht.position.set(at.x,.13,at.z>96?at.z+3:at.z-3),n.add(ht);for(let O=-4;O<=4;O++){const $=new Y(new me(1.4,5),this.roadMarkingCyanMat);$.rotateX(-Math.PI/2),$.position.set(at.x+O*2.6,.13,at.z),n.add($)}}});const E=new Zt,R=new pt(.8,11,.8),w=new Y(R,this.gantryMat);w.position.set(81.5,5.5,70);const x=new Y(R,this.gantryMat);x.position.set(110.5,5.5,70);const P=new pt(29.8,1.2,1.2),B=new Y(P,this.gantryMat);B.position.set(96,10.5,70),E.add(w,x,B),[-8.2,-3.8,3.8,8.2].forEach((at,ht)=>{const O=ht===0||ht===3?this.roadMarkingAmberMat:this.signGreenMat,$=new Y(new me(2.4,1.4),O);$.position.set(96+at,9.2,70.65),E.add($)}),n.add(E),[-55,0].forEach(at=>{const ht=new Y(new pt(.4,8,.4),this.gantryMat);ht.position.set(80.5,4,at);const O=new Y(new pt(3.5,.3,.4),this.gantryMat);O.position.set(82.2,8,at);const $=new Y(new pt(1.4,.25,.6),this.neonCyanMat);$.position.set(83.6,7.8,at),n.add(ht,O,$)});const F=43.6,H=new Y(new pt(h,1.6,2.8),this.maglevTrackMat);H.position.set(0,F,48),n.add(H);const K=new Y(new pt(h,1.6,2.8),this.maglevTrackMat);K.position.set(0,F,54),n.add(K);const Z=new Y(new pt(h,.25,3.2),this.maglevTrackMat);Z.position.set(0,F-.5,51),n.add(Z);const tt=new Y(new pt(h,.16,.22),this.maglevRailCyanMat);tt.position.set(0,F+.85,48-1.35);const V=new Y(new pt(h,.16,.22),this.maglevRailCyanMat);V.position.set(0,F+.85,48+1.35),n.add(tt,V);const ut=new Y(new pt(h,.16,.22),this.maglevRailAmberMat);ut.position.set(0,F+.85,54-1.35);const X=new Y(new pt(h,.16,.22),this.maglevRailAmberMat);X.position.set(0,F+.85,54+1.35),n.add(ut,X),[-55,55].forEach(at=>{const ht=new Y(new pt(4.5,2,14),this.maglevTrackMat);ht.position.set(at,1,51),n.add(ht);const O=new Y(new pt(2,42,2.4),this.maglevTrackMat);O.position.set(at,21,46.5);const $=new Y(new pt(2,42,2.4),this.maglevTrackMat);$.position.set(at,21,55.5),n.add(O,$);const G=new Y(new pt(3.6,2.2,13.5),this.maglevTrackMat);G.position.set(at,42,51),n.add(G);const q=new Y(new pt(1.4,8,1.4),this.maglevTrackMat);q.position.set(at,38,44.5),q.rotateX(.4);const nt=new Y(new pt(1.4,8,1.4),this.maglevTrackMat);nt.position.set(at,38,57.5),nt.rotateX(-.4),n.add(q,nt),[-6.8,6.8].forEach(et=>{const it=new Y(new pt(.35,.5,.35),this.taillightMat);it.position.set(at,43.5,51+et),n.add(it)}),o.push({x:i+at,z:r+51,width:4.5,depth:14,height:44,radius:8})});const lt=`${t},${e}`;return this.buildingColliders.set(lt,o),n}checkObstacleRadar(t,e,n=100){let i=1/0,r=null,a=0,o=0;const l=e.x,c=e.z,h=.906,u=.423,d=l*h-c*u,p=l*u+c*h,g=l*h+c*u,_=-l*u+c*h;let m=n,f=n;for(const[y,M]of this.buildingColliders.entries())for(let v=0;v<M.length;v++){const A=M[v];if(t.y>A.height+14)continue;const T=A.x-t.x,E=A.z-t.z,R=T*T+E*E,w=A.radius+16,x=Math.sqrt(R);if(x<w){const H=w-x;a-=T/(x||1)*H,o-=E/(x||1)*H}const P=T*l+E*c;if(P>0&&P<n){const H=-T*c+E*l;if(Math.abs(H)<w&&P<i){i=P;const K=H>=0?1:-1,Z=Math.max(.2,1-P/n);r={collisionAhead:!0,avoidDir:K,urgency:Z,forwardDist:P,buildingHeight:A.height,lateralDist:H}}}const B=T*d+E*p;if(B>0&&B<n){const H=-T*p+E*d;Math.abs(H)<w&&(m=Math.min(m,B))}const F=T*g+E*_;if(F>0&&F<n){const H=-T*_+E*g;Math.abs(H)<w&&(f=Math.min(f,F))}}return r?(r.pushX=a,r.pushZ=o,r.minLeftDist=m,r.minRightDist=f,Math.abs(r.lateralDist)<12&&(r.avoidDir=m>=f?1:-1),r):a!==0||o!==0?{collisionAhead:!1,pushX:a,pushZ:o,minLeftDist:m,minRightDist:f}:null}update(t,e,n){const i=Math.floor(t.x/this.chunkSize),r=Math.floor(t.z/this.chunkSize);if(this.groundMesh&&(this.groundMesh.position.x=t.x,this.groundMesh.position.z=t.z,this.groundGrid.position.x=t.x,this.groundGrid.position.z=t.z),i!==this.lastCenterChunkX||r!==this.lastCenterChunkZ){this.lastCenterChunkX=i,this.lastCenterChunkZ=r;const A=new Set;for(let T=-this.gridRadius;T<=this.gridRadius;T++)for(let E=-this.gridRadius;E<=this.gridRadius;E++){const R=i+T,w=r+E,x=`${R},${w}`;if(A.add(x),!this.chunkPool.has(x)){const P=this.createChunkGroup(R,w);this.cityGroup.add(P),this.chunkPool.set(x,{mesh:P,cx:R,cz:w})}}for(const[T,E]of this.chunkPool.entries())A.has(T)||(this.cityGroup.remove(E.mesh),E.mesh.traverse(R=>{R.isMesh&&R.geometry&&R.geometry.dispose()}),this.chunkPool.delete(T),this.buildingColliders.delete(T))}const a=e.bass||0,o=e.mid||0,l=e.treble||0,c=e.beat||0,h=new J(62463).multiplyScalar(1+o*.45+c*.35);this.neonCyanMat.color.copy(h);const u=new J(16711807).multiplyScalar(1+a*.5+c*.35);this.neonMagentaMat.color.copy(u);const d=new J(16755200).multiplyScalar(1+l*.35);this.neonAmberMat.color.copy(d);const p=new J(65450).multiplyScalar(1+o*.4);if(this.neonLimeMat.color.copy(p),this.searchlightGroup.position.x=t.x,this.searchlightGroup.position.z=t.z,this.audioReactiveMeshes.searchlights.forEach(A=>{A.rotation.y+=A.userData.rotSpeed*n,A.userData.mat.opacity=.14+o*.16}),this.audioReactiveMeshes.billboardMaterials.forEach(A=>{A.opacity=.85+o*.15}),this.groundGrid){const A=.35+a*.45;this.groundGrid.material.color.setRGB(0,.55*A,.75*A)}const g=.58+o*.16+c*.14;this.audioReactiveMeshes.windowMaterials.forEach(A=>{A.emissiveIntensity=g}),this.simTime+=n;const _=Math.floor(t.x/this.chunkSize),m=Math.floor(t.z/this.chunkSize),f=440;this.trafficCars.forEach(A=>{const T=A.userData;if(T.isFlying){A.position.x+=T.vx*n,A.position.z+=T.vz*n;const E=A.position.x-t.x,R=A.position.z-t.z;E>f?A.position.x-=f*2:E<-f&&(A.position.x+=f*2),R>f?A.position.z-=f*2:R<-f&&(A.position.z+=f*2),A.position.y=T.baseY+Math.sin(this.simTime*2.8+T.seed)*.85}else if(T.isNS){A.position.z+=T.vz*n;const E=A.position.z-t.z;E>f?A.position.z-=f*2:E<-f&&(A.position.z+=f*2);const R=(_+T.aveRel)*this.chunkSize+96+T.laneOffset;A.position.x=R,A.position.y=T.baseY+Math.sin(this.simTime*4+T.seed)*.14}else{A.position.x+=T.vx*n;const E=A.position.x-t.x;E>f?A.position.x-=f*2:E<-f&&(A.position.x+=f*2);const R=(m+T.aveRel)*this.chunkSize+96+T.laneOffset;A.position.z=R,A.position.y=T.baseY+Math.sin(this.simTime*4+T.seed)*.14}});const y=.85+a*.45+c*.4;this.underglowCyanMat.opacity=Math.min(1,y),this.underglowMagentaMat.opacity=Math.min(1,y),this.trailMat.opacity=Math.min(.95,.6+c*.35);const M=650;this.maglevTrains.forEach(A=>{const T=A.userData;A.position.x+=T.vx*n;const E=A.position.x-t.x;E>M?A.position.x-=M*2:E<-M&&(A.position.x+=M*2);const R=m*this.chunkSize+T.trackZ;A.position.z=R,A.position.y=T.baseY+Math.sin(this.simTime*5.5+T.seed)*.12});const v=.85+a*.5+c*.4;this.trainUnderglowLevMat.opacity=Math.min(1,v),this.trainUnderglowMagMat.opacity=Math.min(1,v),this.maglevRailCyanMat.color.setRGB(0,.95*(1+l*.35),1)}}const bm=`#define M_PI 3.1415926535897932384626433832795

uniform float uTime;
uniform float uGrassDistance;
uniform vec3 uPlayerPosition;
uniform sampler2D uNoiseTexture;
uniform float uFresnelOffset;
uniform float uFresnelScale;
uniform float uFresnelPower;
uniform vec3 uSunPosition;
uniform float uAudioBass;

attribute vec2 center;
attribute float tipness;

varying vec3 vColor;

#include ../partials/inverseLerp.glsl
#include ../partials/remap.glsl
#include ../partials/getSunShade.glsl;
#include ../partials/getSunShadeColor.glsl;
#include ../partials/getSunReflection.glsl;
#include ../partials/getSunReflectionColor.glsl;
#include ../partials/getGrassAttenuation.glsl;
#include ../partials/getRotatePivot2d.glsl;

// Procedural continuous terrain elevation with natural organic alpine curves & glacial valleys
float getTerrainElevation(vec2 pos)
{
    float x = pos.x;
    float z = pos.y; // XZ plane
    
    // Smooth serpentine river canyon meander with natural curvature
    float riverCurve = sin(z * 0.0028) * 110.0 + cos(z * 0.0014) * 55.0 + sin(z * 0.006) * 18.0;
    float distToRiver = abs(x - riverCurve);

    // Glacial U-shaped valley floor with rolling alluvial terraces
    float valleyWidth = 75.0 + sin(z * 0.002) * 20.0;
    float valleyFactor = min(1.0, distToRiver / valleyWidth);
    float valleyProfile = pow(valleyFactor, 1.8); // Smooth parabolic U-shape curves

    float riverBed = -6.0 * (1.0 - min(1.0, distToRiver / 32.0));

    // Multi-harmonic alpine mountain ridges and crags
    float macro = sin(x * 0.004 + 0.5) * 65.0 + cos(z * 0.0035 - 0.3) * 75.0;
    float ridges = abs(sin(x * 0.0085 + z * 0.0065)) * 48.0; // Sharp natural arête crests
    float hills = cos(x * 0.016 - z * 0.012) * 22.0 + sin(x * 0.025 + z * 0.02) * 10.0;

    float totalMountain = (macro + ridges + hills) * (0.15 + valleyProfile * 1.55);
    return max(-8.0, totalMountain + riverBed);
}

// Terrain normal calculation via central differences
vec3 getTerrainNormal(vec2 pos)
{
    float eps = 0.6;
    float hL = getTerrainElevation(pos - vec2(eps, 0.0));
    float hR = getTerrainElevation(pos + vec2(eps, 0.0));
    float hD = getTerrainElevation(pos - vec2(0.0, eps));
    float hU = getTerrainElevation(pos + vec2(0.0, eps));
    return normalize(vec3(hL - hR, 2.0 * eps, hD - hU));
}

void main()
{
    // Recalculate center and keep around player (infinite field wrapping)
    vec2 newCenter = center;
    newCenter -= uPlayerPosition.xz;
    float halfSize = uGrassDistance * 0.5;
    newCenter.x = mod(newCenter.x + halfSize, uGrassDistance) - halfSize;
    newCenter.y = mod(newCenter.y + halfSize, uGrassDistance) - halfSize; // Y considered as Z
    vec4 modelCenter = modelMatrix * vec4(newCenter.x, 0.0, newCenter.y, 1.0);

    // Blade-specific pseudo-random hashes for organic variation
    float bladeHash1 = fract(sin(dot(center, vec2(12.9898, 78.233))) * 43758.5453);
    float bladeHash2 = fract(cos(dot(center, vec2(39.346, 11.135))) * 23421.631);

    // Move grass blade to world grid position
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    // --- 🌿 ORGANIC BLADE CURVATURE & PARABOLIC ARCH ---
    // Real grass blades arch gracefully in an organic curve rather than sticking straight up
    float archAngle = bladeHash1 * 6.28318;
    float archStrength = (0.35 + bladeHash2 * 0.45);
    float curveFactor = pow(tipness, 2.2); // Parabolic curvature increases toward tip

    modelPosition.x += cos(archAngle) * archStrength * curveFactor;
    modelPosition.z += sin(archAngle) * archStrength * curveFactor;
    modelPosition.y -= curveFactor * 0.22; // Natural gravitational droop

    modelPosition.xz += newCenter; // Root position

    // Rotate blade to face camera (billboarding)
    float angleToCamera = atan(modelCenter.x - cameraPosition.x, modelCenter.z - cameraPosition.z);
    modelPosition.xz = getRotatePivot2d(modelPosition.xz, angleToCamera, modelCenter.xz);

    // Analytical terrain data
    float terrainHeight = getTerrainElevation(modelPosition.xz);
    vec3 normal = getTerrainNormal(modelPosition.xz);

    modelPosition.y += terrainHeight;
    modelCenter.y += terrainHeight;

    // Slope attenuation (steep crags and vertical cliffs remain bare stone)
    float slope = 1.0 - abs(dot(vec3(0.0, 1.0, 0.0), normal));

    // Distance attenuation
    float distanceScale = getGrassAttenuation(modelCenter.xz);
    float slopeScale = smoothstep(remap(slope, 0.38, 0.54, 1.0, 0.0), 0.0, 1.0);
    
    // Water level exclusion (don't grow underwater, river bed is around y = 4.5)
    float waterScale = smoothstep(5.5, 7.2, terrainHeight);

    // High mountain snow summit exclusion (above 115m summits)
    float altitudeScale = 1.0 - smoothstep(95.0, 130.0, terrainHeight);

    float scale = distanceScale * slopeScale * waterScale * altitudeScale;
    modelPosition.xyz = mix(modelCenter.xyz, modelPosition.xyz, scale);

    // Wind animation using noise texture and audio reactivity
    vec2 noiseUv = modelPosition.xz * 0.018 + uTime * 0.055;
    vec4 noiseColor = texture2D(uNoiseTexture, noiseUv);
    float windStrength = (1.15 + uAudioBass * 0.95);
    modelPosition.x += (noiseColor.x - 0.5) * tipness * scale * windStrength;
    modelPosition.z += (noiseColor.y - 0.5) * tipness * scale * windStrength;

    // Final projected position
    vec4 viewPosition = viewMatrix * modelPosition;
    gl_Position = projectionMatrix * viewPosition;
    
    vec3 viewDirection = normalize(modelPosition.xyz - cameraPosition);
    vec3 worldNormal = normalize(mat3(modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz) * normal);
    vec3 viewNormal = normalize(normalMatrix * normal);

    // --- 🎨 BLADE-TO-BLADE ORGANIC COLOR DIVERSITY ---
    // Blend between deep meadow emerald, vibrant fresh lime shoots, and golden alpine fescue tips
    vec3 emeraldTip = vec3(0.36, 0.74, 0.28);
    vec3 limeTip    = vec3(0.52, 0.82, 0.22);
    vec3 goldenTip  = vec3(0.68, 0.76, 0.26);

    vec3 tipColor = mix(emeraldTip, limeTip, bladeHash1);
    if (bladeHash2 > 0.75) {
        tipColor = mix(tipColor, goldenTip, 0.55);
    }

    vec3 rootColor = vec3(0.11, 0.30, 0.12); // Deep moist organic root
    vec3 lowColor = mix(rootColor, tipColor, 1.0 - scale);
    vec3 color = mix(lowColor, tipColor, tipness);

    // Sun shade
    float sunShade = getSunShade(normal);
    color = getSunShadeColor(color, sunShade);

    // Sun reflection
    float sunReflection = getSunReflection(viewDirection, worldNormal, viewNormal);
    color = getSunReflectionColor(color, sunReflection);

    // --- ☀️ SUBSURFACE SCATTERING (SSS) / TRANSLUCENT BACKLIGHT GLOW ---
    // When looking toward the sun, thin grass blades glow with brilliant golden-green translucency
    vec3 sunDir = -normalize(uSunPosition);
    float backLight = max(0.0, dot(viewDirection, sunDir));
    float sss = pow(backLight, 3.8) * tipness * scale;
    vec3 sssColor = vec3(0.72, 0.96, 0.24); // Radiant translucent sunlit grass glow
    color += sssColor * sss * 0.68;

    vColor = color;
}`,Tm=`varying vec3 vColor;

void main()
{
    gl_FragColor = vec4(vColor, 1.0);
}`,Em=`float getGrassAttenuation(vec2 position)
{
    float distanceAttenuation = distance(uPlayerPosition.xz, position) / uGrassDistance * 2.0;
    return 1.0 - clamp(smoothstep(0.3, 1.0, distanceAttenuation), 0.0, 1.0);
}`,Am=`vec2 getRotatePivot2d(vec2 uv, float rotation, vec2 pivot)
{
    return vec2(
        cos(rotation) * (uv.x - pivot.x) + sin(rotation) * (uv.y - pivot.y) + pivot.x,
        cos(rotation) * (uv.y - pivot.y) - sin(rotation) * (uv.x - pivot.x) + pivot.y
    );
}`,Cm=`float inverseLerp(float v, float minValue, float maxValue)
{
    return (v - minValue) / (maxValue - minValue);
}`,Rm=`float remap(float v, float inMin, float inMax, float outMin, float outMax)
{
    float t = inverseLerp(v, inMin, inMax);
    return mix(outMin, outMax, t);
}`,Pm=`float getSunShade(vec3 normal)
{
    float sunShade = dot(normal, - uSunPosition);
    sunShade = sunShade * 0.5 + 0.5;

    return sunShade;
}`,Dm=`vec3 getSunShadeColor(vec3 baseColor, float sunShade)
{
    vec3 shadeColor = baseColor * vec3(0.0, 0.5, 0.7);
    return mix(baseColor, shadeColor, sunShade);
}`,Lm=`float getSunReflection(vec3 viewDirection, vec3 worldNormal, vec3 viewNormal)
{
    vec3 sunViewReflection = reflect(uSunPosition, viewNormal);
    float sunViewStrength = max(0.2, dot(sunViewReflection, viewDirection));

    float fresnel = uFresnelOffset + uFresnelScale * (1.0 + dot(viewDirection, worldNormal));
    float sunReflection = fresnel * sunViewStrength;
    sunReflection = pow(sunReflection, uFresnelPower);

    return sunReflection;
}`,Im=`vec3 getSunReflectionColor(vec3 baseColor, float sunReflection)
{
    return mix(baseColor, vec3(1.0, 1.0, 1.0), clamp(sunReflection, 0.0, 1.0));
}`;function Um(s={}){let t=bm.replace(/#include\s+\.\.\/partials\/inverseLerp\.glsl;?/g,Cm).replace(/#include\s+\.\.\/partials\/remap\.glsl;?/g,Rm).replace(/#include\s+\.\.\/partials\/getSunShade\.glsl;?/g,Pm).replace(/#include\s+\.\.\/partials\/getSunShadeColor\.glsl;?/g,Dm).replace(/#include\s+\.\.\/partials\/getSunReflection\.glsl;?/g,Lm).replace(/#include\s+\.\.\/partials\/getSunReflectionColor\.glsl;?/g,Im).replace(/#include\s+\.\.\/partials\/getGrassAttenuation\.glsl;?/g,Em).replace(/#include\s+\.\.\/partials\/getRotatePivot2d\.glsl;?/g,Am);return new be({uniforms:{uTime:{value:0},uGrassDistance:{value:s.distance||320},uPlayerPosition:{value:new L},uNoiseTexture:{value:s.noiseTexture||null},uFresnelOffset:{value:0},uFresnelScale:{value:.5},uFresnelPower:{value:2},uSunPosition:{value:new L(-.4,-.75,-.5).normalize()},uAudioBass:{value:0}},vertexShader:t,fragmentShader:Tm,side:Ee,depthWrite:!0,depthTest:!0})}class Nm{constructor(t,e={}){this.scene=t,this.details=e.details||190,this.size=e.size||320,this.count=this.details*this.details,this.fragmentSize=this.size/this.details,this.bladeWidthRatio=1.45,this.bladeHeightRatio=4,this.bladeHeightRandomness=.55,this.positionRandomness=.75,this.noiseTexture=this.createNoiseTexture(128,128),this.setGeometry(),this.setMaterial(),this.setMesh()}createNoiseTexture(t=128,e=128){const n=t*e,i=new Uint8Array(4*n);for(let a=0;a<e;a++)for(let o=0;o<t;o++){const l=(a*t+o)*4,c=o/t*Math.PI*2,h=a/e*Math.PI*2,u=Math.sin(c)*Math.cos(h)+Math.sin(c*2+h*2)*.45,d=Math.cos(c)*Math.sin(h)+Math.cos(c*3-h*2)*.45,p=Math.sin(c*3+1.2)*Math.sin(h*3+.8);i[l]=Math.floor((u*.5+.5)*255),i[l+1]=Math.floor((d*.5+.5)*255),i[l+2]=Math.floor((p*.5+.5)*255),i[l+3]=255}const r=new Cl(i,t,e,Qe);return r.wrapS=He,r.wrapT=He,r.needsUpdate=!0,r}setGeometry(){const t=new Float32Array(this.count*3*2),e=new Float32Array(this.count*3*3),n=new Float32Array(this.count*3);for(let i=0;i<this.details;i++){const r=(i/this.details-.5)*this.size+this.fragmentSize*.5;for(let a=0;a<this.details;a++){const o=(a/this.details-.5)*this.size+this.fragmentSize*.5,l=(i*this.details+a)*9,c=(i*this.details+a)*6,h=(i*this.details+a)*3,u=r+(Math.random()-.5)*this.fragmentSize*this.positionRandomness,d=o+(Math.random()-.5)*this.fragmentSize*this.positionRandomness;t[c]=u,t[c+1]=d,t[c+2]=u,t[c+3]=d,t[c+4]=u,t[c+5]=d;const g=this.fragmentSize*this.bladeWidthRatio*.5,_=this.fragmentSize*this.bladeHeightRatio*(1-this.bladeHeightRandomness+Math.random()*this.bladeHeightRandomness);e[l]=-g,e[l+1]=0,e[l+2]=0,n[h]=0,e[l+3]=0,e[l+4]=_,e[l+5]=0,n[h+1]=1,e[l+6]=g,e[l+7]=0,e[l+8]=0,n[h+2]=0}}this.geometry=new ue,this.geometry.setAttribute("center",new ne(t,2)),this.geometry.setAttribute("position",new ne(e,3)),this.geometry.setAttribute("tipness",new ne(n,1))}setMaterial(){this.material=new Um({distance:this.size,noiseTexture:this.noiseTexture})}setMesh(){this.mesh=new Y(this.geometry,this.material),this.mesh.frustumCulled=!1,this.scene.add(this.mesh)}setVisible(t){this.mesh&&(this.mesh.visible=t)}update(t,e,n,i){!this.mesh||!this.mesh.visible||(this.material.uniforms.uTime.value+=n,this.mesh.position.set(t.x,0,t.z),this.material.uniforms.uPlayerPosition.value.set(t.x,t.y,t.z),e&&(this.material.uniforms.uAudioBass.value=e.bass||0),i&&this.material.uniforms.uSunPosition.value.copy(i).normalize())}dispose(){this.mesh&&(this.scene.remove(this.mesh),this.geometry.dispose(),this.material.dispose(),this.noiseTexture&&this.noiseTexture.dispose())}}class Fm{constructor(t){this.scene=t,this.chunkSize=220,this.gridRadius=2,this.chunkPool=new Map,this.natureGroup=new Zt,this.natureGroup.visible=!1,this.scene.add(this.natureGroup),this.lastCenterChunkX=null,this.lastCenterChunkZ=null,this.waterfalls=[],this.crystals=[],this.birds=[],this.birdPathTime=0,this.timeOfDay="day",this.targetTransition=0,this.currentTransition=0,this.initProceduralTextures(),this.initMaterials(),this.createSkyDome(),this.createDistantMountains(),this.createWater(),this.createDaylightSun(),this.createFireflies(),this.createBirds(),this.infiniteGrass=new Nm(this.natureGroup,{details:75,size:260})}initProceduralTextures(){const t=document.createElement("canvas");t.width=256,t.height=512;const e=t.getContext("2d");e.fillStyle="#0284c7",e.fillRect(0,0,256,512),e.fillStyle="#ffffff";for(let c=0;c<90;c++){const h=Math.random()*256,u=Math.random()*512,d=2+Math.random()*6,p=45+Math.random()*95;e.globalAlpha=.25+Math.random()*.65,e.fillRect(h,u,d,p)}e.globalAlpha=.55;for(let c=0;c<140;c++){const h=Math.random()*256,u=Math.random()*512,d=1.5+Math.random()*3.5;e.beginPath(),e.arc(h,u,d,0,Math.PI*2),e.fill()}this.waterfallTexture=new je(t),this.waterfallTexture.wrapS=He,this.waterfallTexture.wrapT=He;const n=document.createElement("canvas");n.width=256,n.height=256;const i=n.getContext("2d");i.fillStyle="#0284c7",i.fillRect(0,0,256,256),i.fillStyle="#38bdf8";for(let c=0;c<70;c++){const h=Math.random()*256,u=Math.random()*256,d=14+Math.random()*28,p=4+Math.random()*8;i.globalAlpha=.35+Math.random()*.45,i.beginPath(),i.ellipse(h,u,d,p,Math.random()*Math.PI,0,Math.PI*2),i.fill()}i.fillStyle="#ffffff",i.globalAlpha=.65;for(let c=0;c<45;c++){const h=Math.random()*256,u=Math.random()*256;i.fillRect(h,u,2.5,2.5)}this.waterTexture=new je(n),this.waterTexture.wrapS=He,this.waterTexture.wrapT=He,this.waterTexture.repeat.set(48,48);const r=document.createElement("canvas");r.width=64,r.height=64;const a=r.getContext("2d"),o=32,l=a.createRadialGradient(o,o,0,o,o,o);l.addColorStop(0,"rgba(255, 255, 255, 1.0)"),l.addColorStop(.25,"rgba(187, 247, 208, 0.85)"),l.addColorStop(.6,"rgba(250, 204, 21, 0.35)"),l.addColorStop(1,"rgba(0, 0, 0, 0)"),a.fillStyle=l,a.fillRect(0,0,64,64),this.fireflyTexture=new je(r)}getTerrainHeight(t,e){const n=Math.sin(e*.0028)*110+Math.cos(e*.0014)*55+Math.sin(e*.006)*18,i=Math.abs(t-n),r=36+Math.sin(e*.003)*8,a=85+Math.sin(e*.002)*20,o=Math.sin(t*.004+.5)*65+Math.cos(e*.0035-.3)*75,l=Math.abs(Math.sin(t*.0085+e*.0065))*48,c=Math.cos(t*.016-e*.012)*22+Math.sin(t*.025+e*.02)*10,h=Math.max(0,o+l+c);let u;if(i<r){const d=i/r;u=9.5-Math.cos(d*Math.PI*.5)*8}else{const d=Math.min(1,(i-r)/(a-r)),p=9.5+Math.pow(d,1.5)*35,g=Math.pow(d,2.2);u=p+h*g*1.35}return u}initMaterials(){this.terrainMaterial=new Yt({vertexColors:!0,roughness:.88,metalness:.04,flatShading:!1}),this.pineFoliageMat=new Yt({color:1786666,roughness:.8,metalness:.02}),this.pineBarkMat=new Yt({color:4007709,roughness:.9,metalness:0}),this.birchBarkMat=new Yt({color:14212579,roughness:.85,metalness:.05}),this.birchFoliageMat=new Yt({color:4766584,roughness:.72,metalness:.02}),this.autumnGoldMat=new Yt({color:16096779,roughness:.68,metalness:.02}),this.autumnAmberMat=new Yt({color:15357964,roughness:.7,metalness:.02}),this.sakuraPinkMat=new Yt({color:16020150,roughness:.75,metalness:.02}),this.shrubMat=new Yt({color:2582345,roughness:.85,metalness:0}),this.flowerGeo=this.createFlowerGeometry(),this.flowerMat=new Yt({roughness:.65,metalness:.04}),this.boulderMat=new Yt({color:6583435,roughness:.92,metalness:.08,flatShading:!0}),this.wetRockMat=new Yt({color:3359061,roughness:.35,metalness:.2,flatShading:!0}),this.bridgeStoneMat=new Yt({color:5924210,roughness:.9,metalness:.08,flatShading:!0}),this.bridgeMossMat=new Yt({color:2968118,roughness:.95,metalness:.02}),this.woodTimberMat=new Yt({color:4333574,roughness:.82,metalness:.05}),this.cabinRoofMat=new Yt({color:2500134,roughness:.88,metalness:.08}),this.cabinWindowGlowMat=new Yt({color:16772565,emissive:new J(16755200),emissiveIntensity:1.6,roughness:.25,metalness:.5}),this.waterfallMat=new Yt({map:this.waterfallTexture,color:3718648,emissive:new J(165063),emissiveIntensity:.35,roughness:.12,metalness:.45,transparent:!0,opacity:.9,side:Ee}),this.mistSplashMat=new $t({color:8246268,transparent:!0,opacity:.45,side:Ee,depthWrite:!1}),this.rapidFoamMat=new $t({color:14742270,transparent:!0,opacity:.75,side:Ee}),this.crystalCyanMat=new Yt({color:561586,emissive:new J(62463),emissiveIntensity:1.6,roughness:.12,metalness:.88}),this.crystalAmethystMat=new Yt({color:7020968,emissive:new J(11032055),emissiveIntensity:1.6,roughness:.12,metalness:.88}),this.crystalEmeraldMat=new Yt({color:292951,emissive:new J(65450),emissiveIntensity:1.6,roughness:.12,metalness:.88}),this.distantMountainMat=new Yt({vertexColors:!0,roughness:.95,metalness:.05,flatShading:!0}),this.initSharedGeometries()}mergeGeometriesWithColors(t){let e=0,n=0;t.forEach(({geo:p})=>{e+=p.attributes.position.count,p.index?n+=p.index.count:n+=p.attributes.position.count});const i=new Float32Array(e*3),r=new Float32Array(e*3),a=new Float32Array(e*3),o=[];let l=0,c=0,h=0,u=0;t.forEach(({geo:p,color:g})=>{const _=p.attributes.position,m=p.attributes.normal,f=_.count;for(let y=0;y<f;y++)i[c++]=_.getX(y),i[c++]=_.getY(y),i[c++]=_.getZ(y),m?(r[h++]=m.getX(y),r[h++]=m.getY(y),r[h++]=m.getZ(y)):(r[h++]=0,r[h++]=1,r[h++]=0),a[u++]=g.r,a[u++]=g.g,a[u++]=g.b;if(p.index){const y=p.index;for(let M=0;M<y.count;M++)o.push(y.getX(M)+l)}else for(let y=0;y<f;y++)o.push(y+l);l+=f,p.dispose()});const d=new ue;return d.setAttribute("position",new ce(i,3)),d.setAttribute("normal",new ce(r,3)),d.setAttribute("color",new ce(a,3)),d.setIndex(o),d}createCompoundPineGeometry(){const t=new Oe(.35,.65,8,5);t.translate(0,4,0);const e=new Ke(4.2,5.5,6);e.translate(0,6.5,0);const n=new Ke(3.4,4.8,6);n.translate(0,9.5,0);const i=new Ke(2.5,4,6);i.translate(0,12,0);const r=new Ke(1.6,3.2,6);return r.translate(0,14,0),this.mergeGeometriesWithColors([{geo:t,color:new J(3811352)},{geo:e,color:new J(1786674)},{geo:n,color:new J(2976335)},{geo:i,color:new J(2976335)},{geo:r,color:new J(4231532)}])}createCompoundDeciduousGeometry(){const t=new Oe(.35,.6,7,5);t.translate(0,3.5,0);const e=new xi(3.2,0);e.translate(0,8.5,0);const n=new xi(2.2,0);return n.translate(.9,10.2,-.6),this.mergeGeometriesWithColors([{geo:t,color:new J(14212579)},{geo:e,color:new J(4766584)},{geo:n,color:new J(6869905)}])}initSharedGeometries(){this.sharedPineTreeGeo=this.createCompoundPineGeometry(),this.pineTreeMat=new Yt({vertexColors:!0,roughness:.85,metalness:.05}),this.sharedDeciduousTreeGeo=this.createCompoundDeciduousGeometry(),this.deciduousTreeMat=new Yt({roughness:.72,metalness:.02}),this.sharedBoulderGeo=new xi(1,1),this.sharedCrystalGeo=new Oe(.1,.4,3.2,5),this.sharedCrystalGeo.translate(0,1.6,0),this.sharedCabinBodyGeo=new pt(14,6.5,10),this.sharedCabinRoofGeo=new Ke(8.5,4.5,4),this.sharedCabinRoofGeo.rotateY(Math.PI/4),this.sharedCabinRoofGeo.scale(1.2,1,1.35),this.sharedCabinChimneyGeo=new pt(1.8,8.5,1.8),this.sharedCabinWindowGeo=new me(2.2,2.2),this.sharedCabinPorchGeo=new pt(14,.6,4),this.sharedBridgeDeckGeo=new pt(85,3.8,8.5),this.sharedBridgeParapetGeo=new pt(85,1.8,.8),this.sharedBridgeArchGeo=new Oe(26,26,8.5,14,1,!0,0,Math.PI),this.sharedBridgeArchGeo.rotateZ(Math.PI/2),this.sharedBridgeArchGeo.rotateY(Math.PI/2),this.sharedBridgePierGeo=new pt(7,35,9),this.sharedGeometries=new Set([this.flowerGeo,this.sharedPineTreeGeo,this.sharedDeciduousTreeGeo,this.sharedBoulderGeo,this.sharedCrystalGeo,this.sharedCabinBodyGeo,this.sharedCabinRoofGeo,this.sharedCabinChimneyGeo,this.sharedCabinWindowGeo,this.sharedCabinPorchGeo,this.sharedBridgeDeckGeo,this.sharedBridgeParapetGeo,this.sharedBridgeArchGeo,this.sharedBridgePierGeo])}createFlowerGeometry(){new Zt,new Oe(.04,.04,.75,4).translate(0,.375,0);const e=new xi(.35,0);return e.translate(0,.75,0),e}createSkyDome(){const t=new Kn(4800,32,24);this.skyMat=new be({uniforms:{uSunPosition:{value:new L(650,850,-800).normalize()},uTopColor:{value:new J(165063)},uMidColor:{value:new J(3718648)},uHorizonColor:{value:new J(12248829)},uSunColor:{value:new J(16775909)},uOpacity:{value:1}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * viewMatrix * worldPosition;
        }
      `,fragmentShader:`
        uniform vec3 uSunPosition;
        uniform vec3 uTopColor;
        uniform vec3 uMidColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uSunColor;
        uniform float uOpacity;
        varying vec3 vWorldPosition;

        void main() {
          vec3 dir = normalize(vWorldPosition);
          float elevation = dir.y;

          vec3 sky;
          if (elevation >= 0.0) {
            if (elevation > 0.25) {
              float t = (elevation - 0.25) / 0.75;
              sky = mix(uMidColor, uTopColor, smoothstep(0.0, 1.0, t));
            } else {
              float t = elevation / 0.25;
              sky = mix(uHorizonColor, uMidColor, smoothstep(0.0, 1.0, t));
            }
          } else {
            sky = mix(uHorizonColor, vec3(0.12, 0.35, 0.65), clamp(-elevation * 3.0, 0.0, 1.0));
          }

          // Radiant Sun Glare & Atmospheric Flare
          float sunDot = max(0.0, dot(dir, normalize(uSunPosition)));
          float sunGlare = pow(sunDot, 4.0) * 0.35 + pow(sunDot, 128.0) * 1.8;
          sky += uSunColor * sunGlare;

          gl_FragColor = vec4(sky, uOpacity);
        }
      `,side:Pe,depthWrite:!1,transparent:!0}),this.skyDome=new Y(t,this.skyMat),this.skyDome.renderOrder=-9999,this.natureGroup.add(this.skyDome)}createDistantMountains(){this.distantMountainGroup=new Zt;const t=22,e=2600;for(let n=0;n<t;n++){const i=n/t*Math.PI*2,r=e+(Math.sin(n*19.3)*.5+.5)*600,a=Math.cos(i)*r,o=Math.sin(i)*r,l=850+Math.abs(Math.sin(n*13.7))*550,c=340+Math.abs(Math.cos(n*11.2))*220,h=new Ke(c,l,5);h.translate(0,l/2,0);const u=h.attributes.position,d=new Float32Array(u.count*3),p=new J(15261131),g=new J(7234133),_=new J(3813932),m=new J;for(let y=0;y<u.count;y++){const v=u.getY(y)/l;v>.62?m.copy(p):v>.38?m.copy(g).lerp(p,(v-.38)/.24):m.copy(_).lerp(g,v/.38),d[y*3]=m.r,d[y*3+1]=m.g,d[y*3+2]=m.b}h.setAttribute("color",new ce(d,3)),h.computeVertexNormals();const f=new Y(h,this.distantMountainMat);f.position.set(a,-50,o),f.rotation.y=i+Math.sin(n*5.5),this.distantMountainGroup.add(f)}this.natureGroup.add(this.distantMountainGroup)}createWater(){const t=new me(6e3,6e3,32,32);t.rotateX(-Math.PI/2),this.lakeMaterial=new Yt({map:this.waterTexture,color:35071,emissive:new J(21964),emissiveIntensity:.55,roughness:.16,metalness:.08,transparent:!0,opacity:.95,flatShading:!1}),this.waterMesh=new Y(t,this.lakeMaterial),this.waterMesh.position.y=12,this.natureGroup.add(this.waterMesh)}createDaylightSun(){this.sunGroup=new Zt;const t=new Kn(38,16,16);this.sunMeshMat=new $t({color:16775909}),this.sunMesh=new Y(t,this.sunMeshMat),this.sunGroup.add(this.sunMesh);const e=new Kn(105,16,16);this.coronaMat=new $t({color:16771720,transparent:!0,opacity:.42,depthWrite:!1}),this.coronaMesh=new Y(e,this.coronaMat),this.sunGroup.add(this.coronaMesh),this.natureGroup.add(this.sunGroup)}createFireflies(){const e=new ue,n=new Float32Array(450*3),i=new Float32Array(450*3),r=new Float32Array(450),a=new J(3718648),o=new J(16436245);for(let l=0;l<450;l++){n[l*3]=(Math.random()-.5)*360,n[l*3+1]=6+Math.random()*32,n[l*3+2]=(Math.random()-.5)*360;const c=Math.random()<.5?a:o;i[l*3]=c.r,i[l*3+1]=c.g,i[l*3+2]=c.b,r[l]=Math.random()*Math.PI*2}e.setAttribute("position",new ce(n,3)),e.setAttribute("color",new ce(i,3)),this.fireflyMat=new Mi({size:5.5,map:this.fireflyTexture,vertexColors:!0,transparent:!0,opacity:.92,blending:_e,depthWrite:!1}),this.fireflies=new qi(e,this.fireflyMat),this.fireflyPhases=r,this.fireflyCount=450,this.natureGroup.add(this.fireflies)}createBirds(){this.birdGroup=new Zt,this.birds=[];const t=9,e=new Ke(.55,3,4);e.rotateX(Math.PI/2);const n=new ue,i=new Float32Array([0,0,.7,-3.4,0,-.3,0,0,-.7]);n.setAttribute("position",new ce(i,3)),n.computeVertexNormals();const r=new Yt({color:2235414,roughness:.8,metalness:.1,side:Ee});for(let a=0;a<t;a++){const o=new Zt,l=new Y(e,r);o.add(l);const c=new Y(n,r);o.add(c);const h=new Y(n,r);h.scale.x=-1,o.add(h),o.userData={leftWing:c,rightWing:h,flapSpeed:3.8+Math.random()*.7,flapPhase:a*.65,pathOffsetS:a*.28,pathRadius:45+a%3*20},this.birdGroup.add(o),this.birds.push(o)}this.natureGroup.add(this.birdGroup)}createChunkGroup(t,e){const n=new Zt,i=t*this.chunkSize,r=e*this.chunkSize;n.position.set(i,0,r);const a=24,o=new me(this.chunkSize,this.chunkSize,a,a);o.rotateX(-Math.PI/2);const l=o.attributes.position;for(let G=0;G<l.count;G++){const q=l.getX(G),nt=l.getZ(G);l.setY(G,this.getTerrainHeight(i+q,r+nt))}o.computeVertexNormals();const c=o.attributes.normal,h=new J(165063),u=new J(223649),d=new J(2976335),p=new J(1786674),g=new J(4866877),_=new J(15261131),m=new Float32Array(l.count*3),f=new J;for(let G=0;G<l.count;G++){const q=i+l.getX(G),nt=r+l.getZ(G),et=l.getY(G),it=c.getY(G);if(et<10.5)f.copy(h);else if(et<13.5)f.copy(u);else if(it<.62)f.copy(g);else if(et<48){const yt=Math.min(1,Math.max(0,(et-13.5)/34.5));f.copy(d).lerp(p,yt*.4)}else if(et<92){const yt=Math.min(1,Math.max(0,(et-48)/44));f.copy(p).lerp(g,yt)}else if(et<118){const yt=Math.min(1,Math.max(0,(et-92)/26));f.copy(g).lerp(_,yt*.7)}else{const yt=Math.min(1,Math.max(0,(et-118)/28));f.copy(g).lerp(_,.7+yt*.3)}const Et=Math.sin(q*.06)*Math.cos(nt*.06)*.045;f.r+=Et,f.g+=Et,f.b+=Et,m[G*3]=f.r,m[G*3+1]=f.g,m[G*3+2]=f.b}o.setAttribute("color",new ce(m,3));const y=new Y(o,this.terrainMaterial);n.add(y);const M=Math.abs(Math.sin(t*17.43+e*37.19)),v=this.chunkSize/2,A=Math.sin(r*.0028)*110+Math.cos(r*.0014)*55+Math.sin(r*.006)*18,T=65,E=new bs(this.flowerGeo,this.flowerMat,T),R=new ie,w=[new J(16436245),new J(15680580),new J(3718648),new J(11032055),new J(16317180)];let x=0;for(let G=0;G<T;G++){const q=Math.sin(M*33+G*7.1)*.85*v,nt=Math.cos(M*44+G*5.3)*.85*v,et=this.getTerrainHeight(i+q,r+nt);if(et>13&&et<48){const it=.75+Math.random()*.55;R.makeRotationY(Math.random()*Math.PI*2),R.scale(new L(it,it,it)),R.setPosition(q,et,nt),E.setMatrixAt(x,R);const Et=w[G%w.length];E.setColorAt(x,Et),x++}}if(E.count=x,E.instanceMatrix.needsUpdate=!0,E.instanceColor&&(E.instanceColor.needsUpdate=!0),n.add(E),M>.42){const G=t%2===0?-1:1,q=A-i+G*(46+M*14),nt=Math.sin(M*27)*.35*v,et=this.getTerrainHeight(i+q,r+nt);if(et>28){const it=et-12,Et=10+M*6,yt=new me(Et,it,1,2),bt=new Y(yt,this.waterfallMat);bt.position.set(q,12+it/2,nt),bt.rotation.y=G>0?-Math.PI/2:Math.PI/2,n.add(bt),this.waterfalls.push(bt);const D=new qs(1.5,Et*.95,8);D.rotateX(-Math.PI/2);const jt=new Y(D,this.mistSplashMat);jt.position.set(q,12.1,nt),n.add(jt)}}if(M>.35){const G=new Zt,q=A-i+(M>.65?28:-28),nt=(M-.5)*v,et=this.getTerrainHeight(i+q,r+nt);if(et>13&&et<48){G.position.set(q,et,nt);const it=[this.crystalCyanMat,this.crystalAmethystMat,this.crystalEmeraldMat],Et=it[Math.floor(M*10)%it.length],yt=4+Math.floor(M*3);for(let bt=0;bt<yt;bt++){const D=2.4+Math.random()*2.8,jt=.35+Math.random()*.45,Ft=new Y(this.sharedCrystalGeo,Et);Ft.scale.set(jt/.4,D/3.2,jt/.4);const Pt=(Math.random()-.5)*.65,Mt=(Math.random()-.5)*.65;Ft.rotation.set(Pt,Math.random()*Math.PI,Mt),Ft.position.set((Math.random()-.5)*2,0,(Math.random()-.5)*2),G.add(Ft)}n.add(G),this.crystals.push(G)}}if(M>.7){const G=A-i+(M>.85?65:-65),q=(M-.5)*v*.7,nt=this.getTerrainHeight(i+G,r+q);if(nt>15&&nt<45){const et=new Zt;et.position.set(G,nt,q);const it=new Y(this.sharedCabinBodyGeo,this.woodTimberMat);it.position.y=3.25,et.add(it);const Et=new Y(this.sharedCabinRoofGeo,this.cabinRoofMat);Et.position.y=8.5,et.add(Et);const yt=new Y(this.sharedCabinChimneyGeo,this.bridgeStoneMat);yt.position.set(4.8,7,-2.8),et.add(yt),[-3.2,3.2].forEach(D=>{const jt=new Y(this.sharedCabinWindowGeo,this.cabinWindowGlowMat);jt.position.set(D,3.8,5.05),et.add(jt)});const bt=new Y(this.sharedCabinPorchGeo,this.woodTimberMat);bt.position.set(0,.3,7),et.add(bt),n.add(et)}}if(Math.abs(e)%4===1&&Math.abs(i-A)<130&&M>.4){const G=new Zt,q=A-i,nt=85;G.position.set(q,35,0);const it=new Y(this.sharedBridgeDeckGeo,this.bridgeStoneMat);G.add(it);const Et=new Y(this.sharedBridgeParapetGeo,this.bridgeStoneMat);Et.position.set(0,2.6,3.8),G.add(Et);const yt=new Y(this.sharedBridgeParapetGeo,this.bridgeStoneMat);yt.position.set(0,2.6,-3.8),G.add(yt);const bt=new Y(this.sharedBridgeArchGeo,this.bridgeStoneMat);bt.position.set(0,-6,0),G.add(bt);const D=new Y(this.sharedBridgePierGeo,this.bridgeMossMat);D.position.set(-nt*.44,-16,0),G.add(D);const jt=new Y(this.sharedBridgePierGeo,this.bridgeMossMat);jt.position.set(nt*.44,-16,0),G.add(jt),n.add(G)}const B=Math.floor(5+M*6),F=new bs(this.sharedBoulderGeo,this.boulderMat,B);let H=0;const K=new ie,Z=new Ne;for(let G=0;G<B;G++){const q=Math.sin(M*44+G*13)*.75*v,nt=Math.cos(M*55+G*17)*.75*v,et=this.getTerrainHeight(i+q,r+nt);if(et<85){const it=2+Math.random()*3.5;Z.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),K.makeRotationFromEuler(Z),K.scale(new L(it*1.2,it*.65,it)),K.setPosition(q,et+it*.4,nt),F.setMatrixAt(H++,K)}}F.count=H,F.instanceMatrix.needsUpdate=!0,n.add(F);const tt=Math.floor(24+M*14),V=new bs(this.sharedPineTreeGeo,this.pineTreeMat,tt);let ut=0;const X=new ie;for(let G=0;G<tt;G++){const q=Math.sin(M*88+G*9.3)*.88*v,nt=Math.cos(M*66+G*7.7)*.88*v,et=this.getTerrainHeight(i+q,r+nt);if(et>13.5&&et<112){const it=.8+Math.abs(Math.sin(G*13))*.55;X.makeRotationY(Math.random()*Math.PI*2),X.scale(new L(it,it,it)),X.setPosition(q,et,nt),V.setMatrixAt(ut++,X)}}V.count=ut,V.instanceMatrix.needsUpdate=!0,n.add(V);const lt=Math.floor(10+M*8),at=new bs(this.sharedDeciduousTreeGeo,this.deciduousTreeMat,lt);let ht=0;const O=new J,$=[new J(5420936),new J(16096779),new J(14251782),new J(16020150)];for(let G=0;G<lt;G++){const q=Math.cos(M*37+G*8.1)*.82*v,nt=Math.sin(M*51+G*6.5)*.82*v,et=this.getTerrainHeight(i+q,r+nt);if(et>13.5&&et<55){const it=.85+Math.abs(Math.sin(G*11))*.45;X.makeRotationY(Math.random()*Math.PI*2),X.scale(new L(it,it,it)),X.setPosition(q,et,nt),at.setMatrixAt(ht,X),O.copy($[G%$.length]),at.setColorAt(ht,O),ht++}}return at.count=ht,at.instanceMatrix.needsUpdate=!0,at.instanceColor&&(at.instanceColor.needsUpdate=!0),n.add(at),n}update(t,e,n,i={}){const r=Math.floor(t.x/this.chunkSize),a=Math.floor(t.z/this.chunkSize);if(this.infiniteGrass){const u=i.cyanDirLight?i.cyanDirLight.position:null;this.infiniteGrass.update(t,e,n,u)}if(r!==this.lastCenterChunkX||a!==this.lastCenterChunkZ){this.lastCenterChunkX=r,this.lastCenterChunkZ=a;const u=new Set;for(let d=-this.gridRadius;d<=this.gridRadius;d++)for(let p=-this.gridRadius;p<=this.gridRadius;p++){const g=r+d,_=a+p,m=`${g},${_}`;if(u.add(m),!this.chunkPool.has(m)){const f=this.createChunkGroup(g,_);this.natureGroup.add(f),this.chunkPool.set(m,{mesh:f,cx:g,cz:_})}}for(const[d,p]of this.chunkPool.entries())u.has(d)||(this.natureGroup.remove(p.mesh),p.mesh.traverse(g=>{g.isMesh&&g.geometry&&!this.sharedGeometries.has(g.geometry)&&g.geometry.dispose()}),this.chunkPool.delete(d))}if(e.bass,e.mid,e.beat,this.waterfallTexture&&(this.waterfallTexture.offset.y-=n*1.6),this.waterTexture&&(this.waterTexture.offset.x+=n*.05,this.waterTexture.offset.y+=n*.08),this.fireflies&&(this.fireflies.position.x=t.x,this.fireflies.position.z=t.z,this.fireflies.position.y=8+Math.sin(Date.now()*.0015)*1.5,this.fireflies.rotation.y+=n*.08,this.fireflyMat.opacity=.7+Math.sin(Date.now()*.0025)*.25),this.birds){this.birdPathTime+=n*.45;const u=this.birdPathTime;this.birds.forEach(d=>{const p=d.userData,g=u+p.pathOffsetS,_=t.z-140+Math.sin(g*1.2)*80,m=Math.sin(_*.0028)*110+Math.cos(_*.0014)*55,f=m+Math.cos(g*2.2)*p.pathRadius,y=46+Math.sin(g*2.8)*16,M=_+Math.sin(g*1.8)*35,v=m+Math.cos((g+.05)*2.2)*p.pathRadius,A=_+Math.sin((g+.05)*1.8)*35,T=Math.atan2(v-f,A-M);d.position.set(f,y,M),d.rotation.y=T+Math.PI,d.rotation.z=Math.sin(g*2.2)*.35;const E=Math.sin(Date.now()*.003*p.flapSpeed+p.flapPhase);p.leftWing.rotation.z=E*.45,p.rightWing.rotation.z=-E*.45})}const o=2.8;this.currentTransition<this.targetTransition?this.currentTransition=Math.min(this.targetTransition,this.currentTransition+n*o):this.currentTransition>this.targetTransition&&(this.currentTransition=Math.max(this.targetTransition,this.currentTransition-n*o));const l=this.currentTransition;if(this.sunGroup){const u=t.x+400-l*200,d=kt.lerp(780,-260,l),p=t.z-750;this.sunGroup.position.set(u,d,p),this.sunGroup.visible=l<.85}if(this.skyMat){const u=new L(.45,.85,-.6).normalize(),d=new L(-.35,.75,-.5).normalize();this.skyMat.uniforms.uSunPosition.value.copy(u).lerp(d,l);const p=new J(165063),g=new J(66834);this.skyMat.uniforms.uTopColor.value.copy(p).lerp(g,l);const _=new J(3718648),m=new J(199196);this.skyMat.uniforms.uMidColor.value.copy(_).lerp(m,l);const f=new J(12248829),y=new J(398382);this.skyMat.uniforms.uHorizonColor.value.copy(f).lerp(y,l);const M=new J(16775909),v=new J(6333946);this.skyMat.uniforms.uSunColor.value.copy(M).lerp(v,l)}if(i.ambientLight&&i.cyanDirLight&&i.scene){const u=new J(12248829),d=new J(791846);i.ambientLight.color.copy(u).lerp(d,l),i.ambientLight.intensity=kt.lerp(1.45,.28,l);const p=new J(16776168),g=new J(6333946);i.cyanDirLight.color.copy(p).lerp(g,l),i.cyanDirLight.intensity=kt.lerp(2.2,.45,l);const _=new J(3462041),m=new J(1973067);i.pinkDirLight.color.copy(_).lerp(m,l),i.pinkDirLight.intensity=kt.lerp(.55,.15,l);const f=new J(3718648),y=new J(199196);if(i.scene.background.copy(f).lerp(y,l),i.scene.fog){const M=new J(8246268),v=new J(398382);i.scene.fog.color.copy(M).lerp(v,l)}}this.fireflyMat&&(this.fireflyMat.size=kt.lerp(5.5,8,l));const c=kt.lerp(1.6,3,l);this.crystalCyanMat&&(this.crystalCyanMat.emissiveIntensity=c),this.crystalAmethystMat&&(this.crystalAmethystMat.emissiveIntensity=c),this.crystalEmeraldMat&&(this.crystalEmeraldMat.emissiveIntensity=c),this.cabinWindowGlowMat&&(this.cabinWindowGlowMat.emissiveIntensity=kt.lerp(1.6,2.8,l));const h=Math.max(0,Math.min(1,1-(l-.15)/.7));this.skyMat&&this.skyMat.uniforms.uOpacity&&(this.skyMat.uniforms.uOpacity.value=h),this.skyDome&&(this.skyDome.position.copy(t),this.skyDome.visible=h>.01),this.waterMesh&&(this.waterMesh.position.x=t.x,this.waterMesh.position.z=t.z),this.distantMountainGroup&&(this.distantMountainGroup.position.x=t.x,this.distantMountainGroup.position.z=t.z)}setVisible(t){this.natureGroup.visible=t}setTimeOfDay(t){t!=="day"&&t!=="night"||(this.timeOfDay=t,this.targetTransition=t==="night"?1:0,t==="day"&&this.skyDome&&(this.skyDome.visible=!0))}toggleTimeOfDay(){return this.setTimeOfDay(this.timeOfDay==="day"?"night":"day"),this.timeOfDay}}class Om{constructor(t,e){this.camera=t,this.domElement=e||document.body,this.mode="straight",this.baseSpeedKmh=140,this.currentSpeedKmh=140,this.audioBoostMultiplier=1,this.position=new L(0,75,0),this.velocity=new L(0,0,-1),this.direction=new L(0,0,-1),this.yaw=0,this.pitch=0,this.roll=0,this.targetPitch=0,this.targetRoll=0,this.targetYaw=0,this.simTime=0,this.randomYaw=0,this.randomTurnRate=0,this.targetManeuverTurnRate=0,this.maneuverTimer=2,this.evasionTimer=0,this.evasionDir=1,this.cruiseAltitudeCyber=80,this.altitudeCycleTimer=0,this.randomCurves={yawFreq1:.12,yawFreq2:.28,yawAmp:.7,pitchFreq:.18,pitchAmp:.22,altitudeCenter:75,altitudeAmp:35},this.keys={forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,boost:!1},this.mouse={isDown:!1,deltaX:0,deltaY:0},this.telemetry={speedKmh:140,altitudeM:75,pitchDeg:0,rollDeg:0,headingDeg:0,flightMode:"STRAIGHT CRUISING",gForce:1,isBoosting:!1},this.initEventListeners()}setMode(t){["straight","random","manual"].includes(t)&&(this.mode=t,t==="straight"?(this.targetYaw=0,this.targetPitch=0,this.targetRoll=0):t==="random"&&(this.randomYaw=this.yaw,this.targetYaw=this.yaw,this.randomTurnRate=0,this.targetManeuverTurnRate=0,this.evasionTimer=0,this.maneuverTimer=1.5,this.cruiseAltitudeCyber=Math.max(50,Math.min(260,this.position.y))))}setBaseSpeed(t){this.baseSpeedKmh=Math.max(10,Math.min(450,t))}initEventListeners(){window.addEventListener("keydown",n=>{switch(n.code){case"KeyW":case"ArrowUp":this.keys.forward=!0;break;case"KeyS":case"ArrowDown":this.keys.backward=!0;break;case"KeyA":case"ArrowLeft":this.keys.left=!0;break;case"KeyD":case"ArrowRight":this.keys.right=!0;break;case"Space":this.keys.up=!0;break;case"ShiftLeft":case"ShiftRight":this.keys.down=!0;break}}),window.addEventListener("keyup",n=>{switch(n.code){case"KeyW":case"ArrowUp":this.keys.forward=!1;break;case"KeyS":case"ArrowDown":this.keys.backward=!1;break;case"KeyA":case"ArrowLeft":this.keys.left=!1;break;case"KeyD":case"ArrowRight":this.keys.right=!1;break;case"Space":this.keys.up=!1;break;case"ShiftLeft":case"ShiftRight":this.keys.down=!1;break}});let t=0,e=0;this.domElement.addEventListener("mousedown",n=>{n.target.closest("#control-deck")||(this.mouse.isDown=!0,t=n.clientX,e=n.clientY)}),window.addEventListener("mousemove",n=>{if(this.mouse.isDown&&this.mode==="manual"){const i=n.clientX-t,r=n.clientY-e;t=n.clientX,e=n.clientY,this.yaw-=i*.003,this.pitch-=r*.003,this.pitch=Math.max(-Math.PI*.4,Math.min(Math.PI*.4,this.pitch))}}),window.addEventListener("mouseup",()=>{this.mouse.isDown=!1})}update(t,e,n=null,i=null){this.simTime+=t;const r=e.bass||0,a=e.beat||0;this.audioBoostMultiplier=1+r*.4+a*.6;let o=this.baseSpeedKmh*(1e3/3600)*this.audioBoostMultiplier;this.currentSpeedKmh=Math.round(this.baseSpeedKmh*this.audioBoostMultiplier);const l=n?n(this.position.x,this.position.z):0,c=55+this.currentSpeedKmh*.25,h=this.position.x+this.direction.x*c,u=this.position.z+this.direction.z*c,d=n?n(h,u):0,p=Math.max(l,d),g=85+this.currentSpeedKmh*.32,_=i?i(this.position,this.direction,g):null,f=p+32;this.mode==="straight"?this.updateStraightFlight(t,r,a,f,n,_):this.mode==="random"?this.updateRandomFlight(t,r,a,f,d-l,_,n):this.mode==="manual"&&this.updateManualFlight(t,o,l,_);const y=this.direction.clone().multiplyScalar(o*t);if(this.position.x+=y.x,this.position.z+=y.z,this.mode==="manual"&&(this.position.y+=y.y),_&&(_.pushX||_.pushZ)){const E=Math.min(o*t*.35,.45);this.position.x+=kt.clamp(_.pushX*t*2.5,-E,E),this.position.z+=kt.clamp(_.pushZ*t*2.5,-E,E)}const M=l+18;this.position.y<M&&(this.position.y=M,this.pitch<0&&(this.pitch=.05)),this.camera.position.copy(this.position);const v=new Ne(0,0,0,"YXZ");v.y=this.yaw,v.x=this.pitch,v.z=this.roll,this.camera.quaternion.setFromEuler(v);const T=75+this.baseSpeedKmh/40+r*14+a*18;if(this.camera.fov=kt.lerp(this.camera.fov,Math.min(115,T),.1),this.camera.updateProjectionMatrix(),a>.6){const E=.35*a;this.camera.position.x+=(Math.random()-.5)*E,this.camera.position.y+=(Math.random()-.5)*E}this.updateTelemetry(r,a,l)}updateStraightFlight(t,e,n,i,r,a=null){if(r){const l=(Math.sin(this.position.z*.0028)*110+Math.cos(this.position.z*.0014)*55+Math.sin(this.position.z*.006)*18-this.position.x)*.018;this.targetYaw=Math.max(-.4,Math.min(.4,l)),this.targetRoll=this.targetYaw*.8;const c=28,h=r(this.position.x,this.position.z),u=65+this.currentSpeedKmh*.25,d=r(this.position.x+this.direction.x*u,this.position.z+this.direction.z*u),p=d-h;let g;if(p>6)g=d+28,this.targetPitch=kt.clamp(p*.007,.08,.28);else{g=h+c;const f=this.position.y-g;if(f>6){const y=kt.clamp(f*.007,.08,.26);this.targetPitch=-y}else this.targetPitch=-.04}const m=this.position.y-g>15?5.2:3.8;this.position.y=kt.lerp(this.position.y,g,t*m),this.yaw=kt.lerp(this.yaw,this.targetYaw,t*3.2),this.pitch=kt.lerp(this.pitch,this.targetPitch,t*4.2),this.roll=kt.lerp(this.roll,this.targetRoll,t*4.2)}else{if(this.targetYaw=0,this.targetRoll=Math.sin(this.simTime*.4)*.04,this.targetPitch=-.05-this.baseSpeedKmh/1200,a&&a.collisionAhead){const l=.75+a.urgency*1.5;this.targetYaw=a.avoidDir*l,this.targetRoll=a.avoidDir*kt.clamp(l*.75,.4,1.15),a.buildingHeight&&this.position.y<a.buildingHeight+25&&(this.targetPitch=Math.max(this.targetPitch,.14*a.urgency))}this.yaw=kt.lerp(this.yaw,this.targetYaw,t*3.2),this.pitch=kt.lerp(this.pitch,this.targetPitch,t*4),this.roll=kt.lerp(this.roll,this.targetRoll,t*4.2);const o=Math.max(i,65+Math.sin(this.simTime*.3)*6);this.position.y=kt.lerp(this.position.y,o,t*3.5)}this.direction.set(0,0,-1).applyEuler(new Ne(this.pitch,this.yaw,0,"YXZ")).normalize()}updateRandomFlight(t,e,n,i,r,a=null,o=null){if(o){const l=this.randomCurves,c=this.simTime,h=(Math.sin(c*l.yawFreq1)*.65+Math.sin(c*l.yawFreq2+1.2)*.35)*l.yawAmp;this.targetYaw=h;const u=(Math.cos(c*l.yawFreq1)*l.yawFreq1*.65+Math.cos(c*l.yawFreq2+1.2)*l.yawFreq2*.35)*l.yawAmp;this.targetRoll=u*1.8;const d=28+(Math.sin(c*.35)*.5+.5)*10,p=o(this.position.x,this.position.z),g=65+this.currentSpeedKmh*.25,_=o(this.position.x+this.direction.x*g,this.position.z+this.direction.z*g),m=_-p;let f;if(m>6)f=_+28,this.targetPitch=kt.clamp(m*.007,.1,.3);else{f=p+d;const v=this.position.y-f;if(v>6){const A=kt.clamp(v*.007,.08,.26);this.targetPitch=-A}else this.targetPitch=Math.sin(c*l.pitchFreq)*.05-.03}const M=this.position.y-f>15?5.2:3.8;this.position.y=kt.lerp(this.position.y,f,t*M),this.yaw=kt.lerp(this.yaw,this.targetYaw,t*2.8),this.pitch=kt.lerp(this.pitch,this.targetPitch,t*4),this.roll=kt.lerp(this.roll,this.targetRoll,t*4.2)}else{if(this.maneuverTimer-=t,this.maneuverTimer<=0){const m=Math.random();if(m<.45){const f=Math.random()<.5?1:-1;this.targetManeuverTurnRate=f*(.12+Math.random()*.16),this.maneuverTimer=4.5+Math.random()*3.5}else if(m<.75)this.targetManeuverTurnRate=0,this.maneuverTimer=5+Math.random()*4;else{const f=Math.random()<.5?1:-1;this.targetManeuverTurnRate=f*(.28+Math.random()*.14),this.maneuverTimer=3.2+Math.random()*2.2}}this.randomTurnRate=kt.lerp(this.randomTurnRate,this.targetManeuverTurnRate,t*1.8);const l=Math.sin(this.simTime*1.2)*(.02+e*.04);let c=0;if(a&&a.collisionAhead){this.evasionDir=a.avoidDir,this.evasionTimer=Math.max(this.evasionTimer,1.6+a.urgency*1);const m=kt.clamp(a.urgency,.2,1);if(c=this.evasionDir*(.35+m*.45),a.buildingHeight&&this.position.y<a.buildingHeight+30){const f=Math.min(320,a.buildingHeight+40);this.cruiseAltitudeCyber=kt.lerp(this.cruiseAltitudeCyber,f,t*2.5),this.targetPitch=Math.max(this.targetPitch,m*.16)}}if(this.evasionTimer>0){this.evasionTimer-=t;const m=kt.clamp(this.evasionTimer/1.6,.2,1),f=this.evasionDir*(.38*m);c=kt.lerp(c,f,t*3)}const h=c!==0?kt.lerp(this.randomTurnRate,c,t*3.5):this.randomTurnRate;this.randomTurnRate=h;const u=h+l;this.yaw+=u*t;const d=kt.clamp(u*.85,-.65,.65);this.targetRoll=d,this.roll=kt.lerp(this.roll,this.targetRoll,t*3.8),this.altitudeCycleTimer+=t,this.altitudeCycleTimer>22&&(this.altitudeCycleTimer=0,this.cruiseAltitudeCyber=this.cruiseAltitudeCyber>105?65+Math.random()*25:130+Math.random()*50);const p=Math.sin(this.simTime*.28)*8,g=Math.max(50,Math.max(i,this.cruiseAltitudeCyber+p));this.position.y=kt.lerp(this.position.y,g,t*2);const _=g-this.position.y;this.targetPitch=kt.clamp(_*.005-.04,-.12,.16),this.pitch=kt.lerp(this.pitch,this.targetPitch,t*3)}this.direction.set(0,0,-1).applyEuler(new Ne(this.pitch,this.yaw,0,"YXZ")).normalize()}updateManualFlight(t,e,n,i=null){const r=1.4*t;this.keys.left?(this.yaw+=r,this.targetRoll=.45):this.keys.right?(this.yaw-=r,this.targetRoll=-.45):this.targetRoll=0,this.keys.forward?this.targetPitch=-.18:this.keys.backward?this.targetPitch=.15:this.targetPitch=0,this.keys.up&&(this.position.y+=35*t),this.keys.down&&(this.position.y-=35*t),this.roll=kt.lerp(this.roll,this.targetRoll,t*6),this.pitch=kt.lerp(this.pitch,this.targetPitch,t*5),this.direction.set(0,0,-1).applyEuler(new Ne(this.pitch,this.yaw,0,"YXZ")).normalize()}updateTelemetry(t,e,n=0){this.telemetry.speedKmh=this.currentSpeedKmh,this.telemetry.altitudeM=Math.round(this.position.y),this.telemetry.altitudeAGL=Math.max(0,Math.round(this.position.y-n)),this.telemetry.terrainWarning=this.telemetry.altitudeAGL<24,this.telemetry.pitchDeg=Math.round(kt.radToDeg(-this.pitch)),this.telemetry.rollDeg=Math.round(kt.radToDeg(this.roll));let i=Math.round(kt.radToDeg(this.yaw)%360);i<0&&(i+=360),this.telemetry.headingDeg=i,this.telemetry.flightMode=this.mode==="straight"?"AUTONOMOUS // STRAIGHT BOULEVARD":this.mode==="random"?"AUTONOMOUS // DYNAMIC SLALOM":"MANUAL // FPV PILOT",this.telemetry.isBoosting=e>.6||this.currentSpeedKmh>260,this.telemetry.gForce=(1+this.currentSpeedKmh/200+Math.abs(this.roll)*1.5).toFixed(1)}}class Bm{constructor(t){this.canvas=t,this.ctx=t.getContext("2d"),this.width=window.innerWidth,this.height=window.innerHeight,this.dpr=Math.min(window.devicePixelRatio||1,2),this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*this.dpr,this.canvas.height=this.height*this.dpr,this.canvas.style.width=`${this.width}px`,this.canvas.style.height=`${this.height}px`,this.ctx.scale(this.dpr,this.dpr)}render(t,e,n="cyber"){const i=this.ctx,r=this.width,a=this.height,o=r/2,l=a/2;i.clearRect(0,0,r,a),e.bass;const c=e.beat||0,h=c>.75&&Math.random()>.8,u=n==="nature",p=h?"#ff0077":u?"#00ffaa":"#00f3ff",g="#ff0055";i.save(),h&&i.translate((Math.random()-.5)*4,(Math.random()-.5)*4),this.drawCornerBrackets(i,r,a,p),this.drawCompassTape(i,o,40,t.headingDeg,p),this.drawCenterReticle(i,o,l,p,c),this.drawSpeedLadder(i,80,l,t.speedKmh,p,t.isBoosting),this.drawAltitudeLadder(i,r-80,l,t.altitudeM,p),this.drawAudioRadar(i,o,a-85,e,p),this.drawTelemetryOverlay(i,r,a,t,e,p,g,u),i.restore()}drawCornerBrackets(t,e,n,i){t.strokeStyle=i,t.lineWidth=2,t.beginPath(),t.moveTo(24,59),t.lineTo(24,24),t.lineTo(59,24),t.stroke(),t.beginPath(),t.moveTo(e-24-35,24),t.lineTo(e-24,24),t.lineTo(e-24,59),t.stroke(),t.beginPath(),t.moveTo(24,n-24-35),t.lineTo(24,n-24),t.lineTo(59,n-24),t.stroke(),t.beginPath(),t.moveTo(e-24-35,n-24),t.lineTo(e-24,n-24),t.lineTo(e-24,n-24-35),t.stroke()}drawCompassTape(t,e,n,i,r){const o=e-160;t.strokeStyle=r,t.fillStyle=r,t.lineWidth=1.5,t.font='11px "Share Tech Mono", monospace',t.textAlign="center",t.beginPath(),t.moveTo(e,n+18),t.lineTo(e-6,n+26),t.lineTo(e+6,n+26),t.closePath(),t.fill();const l=2.4;for(let c=-60;c<=60;c+=5){const h=(i+c+360)%360,u=e+c*l;if(u>=o&&u<=o+320){const d=h%15===0,p=d?10:5;if(t.beginPath(),t.moveTo(u,n+16),t.lineTo(u,n+16-p),t.stroke(),d){let g=h.toString().padStart(3,"0");h===0?g="N":h===90?g="E":h===180?g="S":h===270&&(g="W"),t.fillText(g,u,n+4)}}}t.fillStyle="rgba(10, 15, 26, 0.8)",t.fillRect(e-30,n+28,60,20),t.strokeStyle=r,t.strokeRect(e-30,n+28,60,20),t.fillStyle=r,t.font='bold 12px "Orbitron", monospace',t.fillText(`${i.toString().padStart(3,"0")}°`,e,n+42)}drawArtificialHorizon(t,e,n,i,r,a){t.save(),t.translate(e,n),t.rotate(r*Math.PI/180);const o=4.5,l=i*o;t.strokeStyle="rgba(0, 243, 255, 0.45)",t.fillStyle=a,t.lineWidth=1.5,t.font='10px "Share Tech Mono", monospace',t.textAlign="center";for(let h=-30;h<=30;h+=10){if(h===0)continue;const u=-h*o-l;if(Math.abs(u)>130)continue;const d=35,p=6;t.beginPath(),t.moveTo(-d,u),t.lineTo(-d+20,u),t.lineTo(-d+20,u+(h>0?p:-p)),t.moveTo(d,u),t.lineTo(d-20,u),t.lineTo(d-20,u+(h>0?p:-p)),t.stroke(),t.fillText(`${Math.abs(h)}`,-d-10,u+3),t.fillText(`${Math.abs(h)}`,d+10,u+3)}const c=-l;Math.abs(c)<140&&(t.strokeStyle=a,t.lineWidth=2,t.beginPath(),t.moveTo(-60,c),t.lineTo(-20,c),t.moveTo(20,c),t.lineTo(60,c),t.stroke()),t.restore()}drawCenterReticle(t,e,n,i,r){t.fillStyle=i,t.beginPath(),t.arc(e,n,2.5,0,Math.PI*2),t.fill()}drawSpeedLadder(t,e,n,i,r,a){const l=n-130;t.fillStyle="rgba(8, 12, 22, 0.75)",t.fillRect(e-45,l,70,260),t.strokeStyle=a?"#ff0055":r,t.lineWidth=1.5,t.strokeRect(e-45,l,70,260),t.fillStyle=a?"#ff0055":r,t.font='bold 11px "Orbitron", monospace',t.textAlign="center",t.fillText("SPEED",e-10,l+18),t.font='9px "Share Tech Mono", monospace',t.fillText("KM/H",e-10,l+30);const c=1.8;for(let h=-60;h<=60;h+=20){const u=i+h;if(u<0)continue;const d=n-h*c;d>=l+40&&d<=l+260-10&&(t.strokeStyle=r,t.beginPath(),t.moveTo(e+15,d),t.lineTo(e+25,d),t.stroke(),t.fillStyle="rgba(255, 255, 255, 0.7)",t.font='10px "Share Tech Mono", monospace',t.textAlign="right",t.fillText(`${u}`,e+10,d+3))}t.fillStyle=a?"rgba(255, 0, 85, 0.9)":"rgba(0, 243, 255, 0.9)",t.fillRect(e-40,n-14,60,28),t.fillStyle="#05070f",t.font='bold 16px "Orbitron", monospace',t.textAlign="center",t.fillText(`${i}`,e-10,n+6)}drawAltitudeLadder(t,e,n,i,r){const o=n-130;t.fillStyle="rgba(8, 12, 22, 0.75)",t.fillRect(e-25,o,70,260),t.strokeStyle=r,t.lineWidth=1.5,t.strokeRect(e-25,o,70,260),t.fillStyle=r,t.font='bold 11px "Orbitron", monospace',t.textAlign="center",t.fillText("ALT",e+10,o+18),t.font='9px "Share Tech Mono", monospace',t.fillText("METERS",e+10,o+30);const l=1.8;for(let c=-50;c<=50;c+=15){const h=i+c;if(h<0)continue;const u=n-c*l;u>=o+40&&u<=o+260-10&&(t.strokeStyle=r,t.beginPath(),t.moveTo(e-25,u),t.lineTo(e-15,u),t.stroke(),t.fillStyle="rgba(255, 255, 255, 0.7)",t.font='10px "Share Tech Mono", monospace',t.textAlign="left",t.fillText(`${h}m`,e-10,u+3))}t.fillStyle="rgba(0, 243, 255, 0.9)",t.fillRect(e-20,n-14,60,28),t.fillStyle="#05070f",t.font='bold 16px "Orbitron", monospace',t.textAlign="center",t.fillText(`${i}m`,e+10,n+6)}drawAudioRadar(t,e,n,i,r){const o=i.waveform||[],l=i.bass||0,c=i.beat||0;if(t.fillStyle="rgba(5, 10, 20, 0.8)",t.beginPath(),t.arc(e,n,42,0,Math.PI*2),t.fill(),t.strokeStyle=r,t.lineWidth=1.5,t.stroke(),t.strokeStyle="rgba(0, 243, 255, 0.25)",t.beginPath(),t.arc(e,n,42*.5,0,Math.PI*2),t.arc(e,n,42*.8,0,Math.PI*2),t.stroke(),o.length>0){t.strokeStyle=c>.6?"#ff0077":r,t.lineWidth=2,t.beginPath();const h=o.length;for(let u=0;u<h;u++){const d=u/h*Math.PI*2,p=42+o[u]*18*(1+l*1.5),g=e+Math.cos(d)*p,_=n+Math.sin(d)*p;u===0?t.moveTo(g,_):t.lineTo(g,_)}t.closePath(),t.stroke()}t.fillStyle=c>.6?"#ff0077":r,t.beginPath(),t.arc(e,n,3+c*4,0,Math.PI*2),t.fill(),t.fillStyle=r,t.font='9px "Share Tech Mono", monospace',t.textAlign="center",t.fillText("AUDIO//RADAR",e,n+42+15)}drawTelemetryOverlay(t,e,n,i,r,a,o,l){t.font='11px "Share Tech Mono", monospace',t.textAlign="left",t.fillStyle=a,t.fillText(l?"BIOME // EMERALD CANYON (DAY MODE)":"BIOME // NEO-METROPOLIS (NIGHT)",32,22),t.fillText("FPV-LINK // 5.8GHZ [99.4%]",32,38),t.fillText(`ALT-AGL // ${i.altitudeAGL!==void 0?i.altitudeAGL:i.altitudeM}M [GROUND RADAR]`,32,54),t.fillText(`G-FORCE // ${i.gForce}G | BATT // 24.8V`,32,70),t.textAlign="right",t.fillStyle=a,t.fillText("GPS // 18 SATS LOCKED",e-32,38),t.fillText("FPS // 60.0 [STABLE]",e-32,54),t.textAlign="center",t.font='bold 12px "Orbitron", monospace',t.fillStyle=a,t.fillText(i.flightMode,e/2,88),i.isBoosting&&(t.fillStyle=o,t.font='bold 16px "Orbitron", monospace',t.fillText("⚡ HYPERSPEED WARP BOOST ⚡",e/2,114)),i.terrainWarning&&l&&(t.fillStyle="#ffaa00",t.font='bold 12px "Orbitron", monospace',t.fillText("▲ TERRAIN RADAR: MOUNTAIN SKIM ACTIVE ▲",e/2,134));const c=32,h=n-65,u=85,d=7;t.fillStyle="rgba(255, 255, 255, 0.7)",t.font='10px "Share Tech Mono", monospace',t.textAlign="left",t.fillText("BASS",c,h),t.fillStyle="rgba(255, 255, 255, 0.2)",t.fillRect(c+45,h-7,u,d),t.fillStyle="#ff0077",t.fillRect(c+45,h-7,u*(r.bass||0),d),t.fillStyle="rgba(255, 255, 255, 0.7)",t.fillText("MID",c,h+16),t.fillStyle="rgba(255, 255, 255, 0.2)",t.fillRect(c+45,h+9,u,d),t.fillStyle="#00f3ff",t.fillRect(c+45,h+9,u*(r.mid||0),d),t.fillStyle="rgba(255, 255, 255, 0.7)",t.fillText("TREB",c,h+32),t.fillStyle="rgba(255, 255, 255, 0.2)",t.fillRect(c+45,h+25,u,d),t.fillStyle="#ffaa00",t.fillRect(c+45,h+25,u*(r.treble||0),d)}}class zm{constructor(t){this.scene=t,this.group=new Zt,this.group.name="CosmicSkySystem",this.scene.add(this.group),this.elapsedTime=0,this.twinkleStars=null,this.textures={star:this.generateStarTexture(),prominentStar:this.generateProminentStarTexture(),moon:this.generateMoonTexture(),moonGlow:this.generateGlowTexture(128,"rgba(165, 180, 252, 0.9)","rgba(79, 70, 229, 0.0)"),nebula:this.generateNebulaPuffTexture(),galaxyCore:this.generateGalaxyCoreTexture()},this.createSkyDome(),this.createMoon(),this.createMilkyWay(),this.createConstellations(),this.createGalaxies(),this.createNebulae(),this.createStarClusters(),this.createBackgroundStarfield(),this.group.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material.forEach(n=>{n.fog=!1}):e.material.fog=!1)})}generateStarTexture(){const e=document.createElement("canvas");e.width=64,e.height=64;const n=e.getContext("2d"),i=n.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);i.addColorStop(0,"rgba(255, 255, 255, 1.0)"),i.addColorStop(.15,"rgba(235, 245, 255, 0.9)"),i.addColorStop(.4,"rgba(147, 197, 253, 0.45)"),i.addColorStop(.8,"rgba(99, 102, 241, 0.1)"),i.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=i,n.fillRect(0,0,64,64);const r=new je(e);return r.generateMipmaps=!0,r}generateProminentStarTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const n=e.getContext("2d"),i=128/2,r=n.createRadialGradient(i,i,0,i,i,i);r.addColorStop(0,"rgba(255, 255, 255, 1.0)"),r.addColorStop(.12,"rgba(224, 242, 254, 0.85)"),r.addColorStop(.35,"rgba(125, 211, 252, 0.35)"),r.addColorStop(.7,"rgba(99, 102, 241, 0.08)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=r,n.fillRect(0,0,128,128),n.strokeStyle="rgba(255, 255, 255, 0.55)",n.lineWidth=1.5,n.beginPath(),n.moveTo(i,4),n.lineTo(i,124),n.moveTo(4,i),n.lineTo(124,i),n.stroke();const a=new je(e);return a.generateMipmaps=!0,a}generateMoonTexture(){const e=document.createElement("canvas");e.width=1024,e.height=1024;const n=e.getContext("2d");n.fillStyle="#c5ccd6",n.fillRect(0,0,1024,1024);const i=n.getImageData(0,0,1024,1024),r=i.data;for(let p=0;p<r.length;p+=4){const g=(Math.random()-.5)*18;r[p]=Math.min(255,Math.max(0,r[p]+g)),r[p+1]=Math.min(255,Math.max(0,r[p+1]+g)),r[p+2]=Math.min(255,Math.max(0,r[p+2]+g))}n.putImageData(i,0,0);const a=(p,g,_,m,f,y,M="#555b68")=>{n.save(),n.translate(p,g),n.rotate(f),n.scale(_,m);const v=n.createRadialGradient(0,0,0,0,0,1);v.addColorStop(0,M),v.addColorStop(.7,M),v.addColorStop(1,"rgba(197, 204, 214, 0)"),n.fillStyle=v,n.globalAlpha=y,n.beginPath(),n.arc(0,0,1,0,Math.PI*2),n.fill(),n.restore()};a(1024*.38,1024*.42,170,130,.2,.72,"#484e5b"),a(1024*.32,1024*.52,110,95,-.1,.68,"#464c58"),a(1024*.48,1024*.32,120,100,.15,.75,"#424855"),a(1024*.62,1024*.38,105,90,-.2,.76,"#404652"),a(1024*.66,1024*.5,115,95,.3,.78,"#3d434f"),a(1024*.62,1024*.62,95,80,.1,.7,"#4a505c"),a(1024*.8,1024*.42,65,55,-.1,.82,"#383e4a"),a(1024*.54,1024*.66,85,70,0,.65,"#525866");const o=1024*.52,l=1024*.82;n.save(),n.globalAlpha=.45,n.strokeStyle="#eef2f6",n.lineWidth=1.6;for(let p=0;p<Math.PI*2;p+=.08){const g=180+Math.random()*320;n.beginPath(),n.moveTo(o,l),n.lineTo(o+Math.cos(p)*g,l+Math.sin(p)*g),n.stroke()}n.restore();const c=1024*.44,h=1024*.44;n.save(),n.globalAlpha=.35,n.strokeStyle="#f1f5f9",n.lineWidth=1.2;for(let p=0;p<Math.PI*2;p+=.12){const g=90+Math.random()*150;n.beginPath(),n.moveTo(c,h),n.lineTo(c+Math.cos(p)*g,h+Math.sin(p)*g),n.stroke()}n.restore();const u=(p,g,_,m=.7)=>{n.save(),n.globalAlpha=.5,n.strokeStyle="#f8fafc",n.lineWidth=Math.max(1,_*.15),n.beginPath(),n.arc(p,g,_,0,Math.PI*2),n.stroke(),n.globalAlpha=m,n.fillStyle="#2f3540",n.beginPath(),n.arc(p+_*.12,g+_*.12,_*.78,0,Math.PI*2),n.fill(),n.globalAlpha=.75,n.fillStyle="#e2e8f0",n.beginPath(),n.arc(p,g,Math.max(1,_*.2),0,Math.PI*2),n.fill(),n.restore()};u(o,l,22,.85),u(c,h,20,.8),u(1024*.34,1024*.45,14,.75),u(1024*.58,1024*.76,16,.75),u(1024*.42,1024*.26,18,.8);for(let p=0;p<180;p++){const g=Math.random()*1024,_=Math.random()*1024,m=2+Math.random()*8;u(g,_,m,.4+Math.random()*.35)}const d=new je(e);return d.generateMipmaps=!0,d}generateGlowTexture(t=128,e,n){const i=document.createElement("canvas");i.width=t,i.height=t;const r=i.getContext("2d"),a=t/2,o=r.createRadialGradient(a,a,0,a,a,a);o.addColorStop(0,e),o.addColorStop(.2,e),o.addColorStop(.55,"rgba(99, 102, 241, 0.25)"),o.addColorStop(1,n),r.fillStyle=o,r.fillRect(0,0,t,t);const l=new je(i);return l.generateMipmaps=!0,l}generateNebulaPuffTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=256/2;n.fillStyle="#000000",n.fillRect(0,0,256,256);const r=(o,l,c,h)=>{const u=n.createRadialGradient(o,l,0,o,l,c);u.addColorStop(0,`rgba(255, 255, 255, ${h})`),u.addColorStop(.35,`rgba(255, 255, 255, ${h*.6})`),u.addColorStop(.7,`rgba(255, 255, 255, ${h*.2})`),u.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=u,n.beginPath(),n.arc(o,l,c,0,Math.PI*2),n.fill()};r(i,i,i*.9,.7),r(i-25,i+15,i*.65,.5),r(i+28,i-20,i*.6,.45),r(i+10,i+35,i*.55,.4),r(i-30,i-25,i*.5,.35);const a=new je(e);return a.generateMipmaps=!0,a}generateGalaxyCoreTexture(){const e=document.createElement("canvas");e.width=256,e.height=256;const n=e.getContext("2d"),i=256/2,r=n.createRadialGradient(i,i,0,i,i,i);r.addColorStop(0,"rgba(255, 255, 245, 1.0)"),r.addColorStop(.12,"rgba(254, 240, 138, 0.95)"),r.addColorStop(.35,"rgba(251, 146, 60, 0.45)"),r.addColorStop(.65,"rgba(168, 85, 247, 0.15)"),r.addColorStop(1,"rgba(0, 0, 0, 0)"),n.fillStyle=r,n.fillRect(0,0,256,256);const a=new je(e);return a.generateMipmaps=!0,a}createSkyDome(){const t=new Kn(4800,36,24),e=new be({side:Pe,depthWrite:!1,renderOrder:-9999,uniforms:{topColor:{value:new J(132370)},midColor:{value:new J(331560)},horizonColor:{value:new J(596024)},bottomColor:{value:new J(66054)}},vertexShader:`
        varying vec3 vWorldPosition;
        void main() {
          vWorldPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        varying vec3 vWorldPosition;

        void main() {
          vec3 nPos = normalize(vWorldPosition);
          float y = nPos.y;

          vec3 finalColor;
          if (y >= 0.0) {
            if (y > 0.4) {
              float factor = (y - 0.4) / 0.6;
              finalColor = mix(midColor, topColor, factor);
            } else {
              float factor = y / 0.4;
              finalColor = mix(horizonColor, midColor, factor);
            }
          } else {
            float factor = clamp(-y * 2.5, 0.0, 1.0);
            finalColor = mix(horizonColor, bottomColor, factor);
          }

          // Subtle cosmic starlight micro-dither
          float dither = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
          finalColor += (dither - 0.5) * 0.004;

          gl_FragColor = vec4(finalColor, 1.0);
        }
      `});this.skyDome=new Y(t,e),this.skyDome.name="SkyDomeGradient",this.group.add(this.skyDome)}createMoon(){this.moonGroup=new Zt,this.moonGroup.name="MoonSystem";const n=new L(.55,.62,-.56).normalize().clone().multiplyScalar(4100);this.moonGroup.position.copy(n);const i=new Kn(95,36,28),r=new $t({map:this.textures.moon,color:15857145,depthWrite:!1});this.moonMesh=new Y(i,r),this.moonMesh.rotation.y=1.25,this.moonMesh.rotation.x=.35,this.moonMesh.renderOrder=-500,this.moonGroup.add(this.moonMesh);const a=new ke({map:this.textures.moonGlow,color:12573694,transparent:!0,opacity:.85,blending:_e,depthWrite:!1}),o=new qe(a);o.scale.set(650,650,1),o.renderOrder=-501,this.moonGroup.add(o);const l=new ke({map:this.textures.moonGlow,color:8490232,transparent:!0,opacity:.4,blending:_e,depthWrite:!1}),c=new qe(l);c.scale.set(1300,1300,1),c.renderOrder=-502,this.moonGroup.add(c),this.group.add(this.moonGroup)}createMilkyWay(){this.milkyWayGroup=new Zt,this.milkyWayGroup.name="MilkyWayGalacticBand";const t=new L(.55,.72,.42).normalize(),e=new L().crossVectors(t,new L(0,1,0)).normalize(),n=new L().crossVectors(t,e).normalize(),i=8e3,r=new Float32Array(i*3),a=new Float32Array(i*3),o=new Float32Array(i),l=4300,c=new J;for(let g=0;g<i;g++){const _=Math.random()*Math.PI*2,m=Math.abs(Math.sin((_-1)*.5)),f=1-m*.7,y=(Math.random()+Math.random()-1)*(260*(1.3-m*.6)),M=(Math.random()-.5)*180,v=l+M,A=v*(Math.cos(_)*e.x+Math.sin(_)*n.x)+y*t.x,T=v*(Math.cos(_)*e.y+Math.sin(_)*n.y)+y*t.y,E=v*(Math.cos(_)*e.z+Math.sin(_)*n.z)+y*t.z;r[g*3]=A,r[g*3+1]=T,r[g*3+2]=E;const R=Math.random();f>.7&&R<.45?c.setHSL(.11+Math.random()*.05,.85,.75):R<.35?c.setHSL(.58+Math.random()*.08,.8,.85):R<.7?c.setHSL(0,0,.95):c.setHSL(.72+Math.random()*.08,.6,.8),a[g*3]=c.r,a[g*3+1]=c.g,a[g*3+2]=c.b,o[g]=(1.5+Math.random()*3.5)*(.8+f*.8)}const h=new ue;h.setAttribute("position",new ce(r,3)),h.setAttribute("color",new ce(a,3));const u=new Mi({size:4,vertexColors:!0,map:this.textures.star,transparent:!0,opacity:.88,blending:_e,depthWrite:!1}),d=new qi(h,u);d.renderOrder=-700,this.milkyWayGroup.add(d);const p=52;for(let g=0;g<p;g++){const _=g/p*Math.PI*2,m=Math.abs(Math.sin((_-1)*.5)),f=Math.max(0,1-m*1.2),y=(Math.random()-.5)*160,M=(Math.random()-.5)*160,v=(Math.random()-.5)*120,A=l-80,T=A*(Math.cos(_)*e.x+Math.sin(_)*n.x)+v*t.x+y*e.x,E=A*(Math.cos(_)*e.y+Math.sin(_)*n.y)+v*t.y+M*n.y,R=A*(Math.cos(_)*e.z+Math.sin(_)*n.z)+v*t.z;let w=6514417;f>.4?w=11032055:g%3===0?w=3718648:g%2===0&&(w=8490232);const x=new ke({map:this.textures.nebula,color:w,transparent:!0,opacity:.14+f*.16,blending:_e,depthWrite:!1}),P=new qe(x);P.position.set(T,E,R);const B=550+Math.random()*450+f*300;P.scale.set(B,B,1),P.renderOrder=-750,this.milkyWayGroup.add(P)}this.group.add(this.milkyWayGroup)}createConstellations(){this.constellationGroup=new Zt,this.constellationGroup.name="ConstellationsSystem";const t=4250,e=(Pt,Mt)=>{const Dt=Pt*Math.PI/180,St=Mt*Math.PI/180;return new L(t*Math.cos(St)*Math.sin(Dt),t*Math.sin(St),t*Math.cos(St)*Math.cos(Dt))},n=[],i=[],r=(Pt,Mt,Dt,St,C=!1)=>{i.push({pos:Pt,name:Mt,colorHex:Dt,size:St,isAlpha:C})},a=(Pt,Mt)=>{n.push(Pt.x,Pt.y,Pt.z),n.push(Mt.x,Mt.y,Mt.z)},o=210,l=44,c=e(o-4.5,l+6.2),h=e(o+4.8,l-6.5),u=e(o+4.2,l+5.5),d=e(o-4.2,l-6.8),p=e(o-2.2,l),g=e(o,l+.2),_=e(o+2.2,l+.4),m=e(o-.2,l-1.6),f=e(o-.1,l-2.8),y=e(o,l-3.8);r(c,"Betelgeuse",16486972,24,!0),r(h,"Rigel",9684477,25,!0),r(u,"Bellatrix",13095678,17),r(d,"Saiph",9684477,16),r(p,"Alnitak",14739455,18),r(g,"Alnilam",15857145,20),r(_,"Mintaka",14739455,18),r(m,"42 Orionis",9684477,12),r(f,"Trapezium (M42)",16007006,18,!0),r(y,"Iota Orionis",9684477,13),a(c,u),a(c,p),a(u,_),a(p,g),a(g,_),a(p,d),a(_,h),a(d,h),a(g,m),a(m,f),a(f,y);const M=330,v=58,A=e(M-5.5,v+4.8),T=e(M-6.2,v-1.2),E=e(M,v-2),R=e(M+.8,v+3.8),w=e(M+6.8,v+4.5),x=e(M+12.5,v+5.8),P=e(M+18.2,v+4.2);r(A,"Dubhe",16638023,21,!0),r(T,"Merak",16317180,19),r(E,"Phecda",16317180,17),r(R,"Megrez",14870768,16),r(w,"Alioth",6809849,22,!0),r(x,"Mizar",9684477,19),r(P,"Alkaid",6333946,20),a(A,T),a(T,E),a(E,R),a(R,A),a(R,w),a(w,x),a(x,P);const B=e(0,72);r(B,"Polaris",16707722,26,!0),a(T,A),a(A,B);const F=48,H=64,K=e(F-8.2,H-2.5),Z=e(F-14.5,H+2.2),tt=e(F-2,H+4.8),V=e(F+4.5,H-1.5),ut=e(F+10.8,H+3.2);r(K,"Schedar",16486972,21,!0),r(Z,"Caph",16317180,18),r(tt,"Gamma Cassiopeiae",6809849,21,!0),r(V,"Ruchbah",14739455,17),r(ut,"Segin",9684477,16),a(Z,K),a(K,tt),a(tt,V),a(V,ut);const X=115,lt=75,at=e(X,lt+7.5),ht=e(X,lt),O=e(X,lt-9.8),$=e(X-7.5,lt-1.2),G=e(X+7.5,lt+1.2);r(at,"Deneb",14742270,25,!0),r(ht,"Sadr",16707722,19),r(O,"Albireo",16569165,18,!0),r($,"Gienah",9684477,17),r(G,"Fawaris",9684477,16),a(at,ht),a(ht,O),a($,ht),a(ht,G);const q=e(182,28);r(q,"Sirius",16317180,34,!0);const nt=e(177,26),et=e(184,18),it=e(181,15);r(nt,"Mirzam",9684477,18),r(et,"Wezen",16638023,19),r(it,"Adhara",9684477,18),a(q,nt),a(q,et),a(et,it);const Et=e(242,38),yt=e(248,52),bt=e(252,42);r(Et,"Aldebaran",16347926,26,!0),r(yt,"Elnath",9684477,19),r(bt,"Tianguan",14739455,17),a(Et,yt),a(Et,bt);const D=new ue;D.setAttribute("position",new ne(n,3));const jt=new Ra({color:8246268,transparent:!0,opacity:.38,blending:_e,depthWrite:!1}),Ft=new Rl(D,jt);Ft.renderOrder=-600,this.constellationGroup.add(Ft),i.forEach(Pt=>{const Mt=new ke({map:Pt.isAlpha?this.textures.prominentStar:this.textures.star,color:Pt.colorHex,transparent:!0,opacity:Pt.isAlpha?.96:.82,blending:_e,depthWrite:!1}),Dt=new qe(Mt);Dt.position.copy(Pt.pos);const St=Pt.size*(Pt.isAlpha?4.2:3);Dt.scale.set(St,St,1),Dt.renderOrder=-550,this.constellationGroup.add(Dt)}),this.group.add(this.constellationGroup)}createGalaxies(){this.galaxiesGroup=new Zt,this.galaxiesGroup.name="GalaxiesSystem";const t=new L(-1800,2900,2200).normalize().multiplyScalar(4100),e=new Zt;e.position.copy(t),e.lookAt(0,0,0),e.rotateZ(.72),e.rotateX(.48);const n=new ke({map:this.textures.galaxyCore,color:16707722,transparent:!0,opacity:.95,blending:_e,depthWrite:!1}),i=new qe(n);i.scale.set(380,240,1),i.renderOrder=-650,e.add(i);const r=2800,a=new Float32Array(r*3),o=new Float32Array(r*3),l=new J;for(let v=0;v<r;v++){const A=v%2===0?0:Math.PI,T=Math.pow(Math.random(),1.4),E=T*5.2+A,R=60+T*420,w=(Math.random()-.5)*(35+T*55),x=Math.cos(E)*R+w,P=(Math.sin(E)*R+w)*.45,B=(Math.random()-.5)*25;a[v*3]=x,a[v*3+1]=P,a[v*3+2]=B,T<.25?l.setHSL(.12,.8,.85):Math.random()<.2?l.setHSL(.92,.9,.8):l.setHSL(.58+Math.random()*.08,.85,.85),o[v*3]=l.r,o[v*3+1]=l.g,o[v*3+2]=l.b}const c=new ue;c.setAttribute("position",new ce(a,3)),c.setAttribute("color",new ce(o,3));const h=new Mi({size:3.5,vertexColors:!0,map:this.textures.star,transparent:!0,opacity:.88,blending:_e,depthWrite:!1}),u=new qi(c,h);u.renderOrder=-640,e.add(u);const d=new ke({map:this.textures.nebula,color:8490232,transparent:!0,opacity:.22,blending:_e,depthWrite:!1}),p=new qe(d);p.scale.set(780,480,1),p.renderOrder=-660,e.add(p),this.galaxiesGroup.add(e),this.andromedaGroup=e;const g=new L(2600,2200,-2200).normalize().multiplyScalar(4150),_=new Zt;_.position.copy(g),_.lookAt(0,0,0);const m=new ke({map:this.textures.galaxyCore,color:6809849,transparent:!0,opacity:.75,blending:_e,depthWrite:!1}),f=new qe(m);f.scale.set(220,220,1),f.renderOrder=-650,_.add(f);const y=new ke({map:this.textures.nebula,color:3718648,transparent:!0,opacity:.28,blending:_e,depthWrite:!1}),M=new qe(y);M.scale.set(420,420,1),M.renderOrder=-660,_.add(M),this.galaxiesGroup.add(_),this.group.add(this.galaxiesGroup)}createNebulae(){this.nebulaeGroup=new Zt,this.nebulaeGroup.name="CosmicNebulaeSystem",this.nebulaSprites=[];const t=(r,a,o=1)=>{const l=r.clone().normalize().multiplyScalar(4180),c=new Zt;c.position.copy(l),c.lookAt(0,0,0),a.forEach((h,u)=>{const d=new ke({map:this.textures.nebula,color:h.hex,transparent:!0,opacity:h.opacity,blending:_e,depthWrite:!1}),p=new qe(d),g=(Math.random()-.5)*180*o,_=(Math.random()-.5)*180*o;p.position.set(g,_,-u*5);const m=(360+Math.random()*280)*o;p.scale.set(m,m,1),p.renderOrder=-720,c.add(p),this.nebulaSprites.push({sprite:p,baseOpacity:h.opacity})}),this.nebulaeGroup.add(c)},e=new L(-.48,.65,-.58);t(e,[{hex:15485081,opacity:.55},{hex:9133302,opacity:.48},{hex:440020,opacity:.42},{hex:16007006,opacity:.35}],1.25);const n=new L(.72,.42,.55);t(n,[{hex:16007006,opacity:.52},{hex:11032055,opacity:.45},{hex:16486972,opacity:.32},{hex:3718648,opacity:.28}],1.4);const i=new L(.28,.88,.38);t(i,[{hex:2282478,opacity:.48},{hex:12616956,opacity:.38},{hex:8490232,opacity:.3}],1.1),this.group.add(this.nebulaeGroup)}createStarClusters(){this.clustersGroup=new Zt,this.clustersGroup.name="StarClustersSystem";const e=new L(-.68,.58,-.45).normalize().clone().multiplyScalar(4220),n=new Zt;n.position.copy(e),n.lookAt(0,0,0);const i=new ke({map:this.textures.nebula,color:3718648,transparent:!0,opacity:.48,blending:_e,depthWrite:!1}),r=new qe(i);r.scale.set(340,260,1),r.renderOrder=-680,n.add(r),[{x:0,y:0,name:"Alcyone",size:26},{x:-28,y:18,name:"Maia",size:22},{x:-44,y:8,name:"Electra",size:21},{x:-16,y:-24,name:"Merope",size:20},{x:-36,y:34,name:"Taygeta",size:18},{x:-46,y:28,name:"Celaeno",size:16},{x:34,y:-8,name:"Atlas",size:23},{x:36,y:4,name:"Pleione",size:17}].forEach(M=>{const v=new ke({map:this.textures.prominentStar,color:12573694,transparent:!0,opacity:.95,blending:_e,depthWrite:!1}),A=new qe(v);A.position.set(M.x,M.y,0);const T=M.size*2.8;A.scale.set(T,T,1),A.renderOrder=-620,n.add(A)}),this.clustersGroup.add(n);const l=new L(.35,.78,.52).normalize().clone().multiplyScalar(4240),c=new Zt;c.position.copy(l),c.lookAt(0,0,0);const h=750,u=new Float32Array(h*3),d=new Float32Array(h*3),p=new J;for(let M=0;M<h;M++){const v=Math.max(1e-4,Math.random()),A=Math.random(),T=Math.sqrt(-2*Math.log(v))*36,E=A*Math.PI*2,R=Math.acos(Math.random()*2-1);u[M*3]=T*Math.sin(R)*Math.cos(E),u[M*3+1]=T*Math.sin(R)*Math.sin(E),u[M*3+2]=T*Math.cos(R),T<22?p.setHSL(.12,.75,.9):p.setHSL(.58,.6,.92),d[M*3]=p.r,d[M*3+1]=p.g,d[M*3+2]=p.b}const g=new ue;g.setAttribute("position",new ce(u,3)),g.setAttribute("color",new ce(d,3));const _=new Mi({size:3.2,vertexColors:!0,map:this.textures.star,transparent:!0,opacity:.92,blending:_e,depthWrite:!1}),m=new qi(g,_);m.renderOrder=-630,c.add(m);const f=new ke({map:this.textures.galaxyCore,color:16707722,transparent:!0,opacity:.45,blending:_e,depthWrite:!1}),y=new qe(f);y.scale.set(160,160,1),y.renderOrder=-640,c.add(y),this.clustersGroup.add(c),this.group.add(this.clustersGroup)}createBackgroundStarfield(){const e=new Float32Array(13500),n=new Float32Array(4500*3),i=new Float32Array(4500),r=new Float32Array(4500),a=new Float32Array(4500),o=new J,l=4350;for(let u=0;u<4500;u++){const d=Math.random()*Math.PI*2,p=Math.acos(Math.random()*1.85-.95),g=l+(Math.random()-.5)*200;e[u*3]=g*Math.sin(p)*Math.cos(d),e[u*3+1]=Math.abs(g*Math.cos(p))+120,e[u*3+2]=g*Math.sin(p)*Math.sin(d);const _=Math.random();_<.4?o.setHSL(.58+Math.random()*.06,.75,.82):_<.75?o.setHSL(0,0,.95):_<.9?o.setHSL(.12+Math.random()*.04,.85,.8):o.setHSL(.04+Math.random()*.04,.9,.75),n[u*3]=o.r,n[u*3+1]=o.g,n[u*3+2]=o.b,i[u]=Math.random()*Math.PI*2,r[u]=1.5+Math.random()*3.5,a[u]=.65+Math.random()*.35}const c=new ue;c.setAttribute("position",new ce(e,3)),c.setAttribute("color",new ce(n,3)),this.starOriginalColors=n.slice(),this.starColorsAttr=c.attributes.color,this.twinklePhases=i,this.twinkleSpeeds=r,this.baseAlphas=a,this.bgStarCount=4500;const h=new Mi({size:3.8,vertexColors:!0,map:this.textures.star,transparent:!0,opacity:.92,blending:_e,depthWrite:!1});this.starPoints=new qi(c,h),this.starPoints.renderOrder=-800,this.group.add(this.starPoints)}update(t,e,n={}){this.elapsedTime+=e,t&&this.group.position.copy(t.position),this.group.rotation.y+=e*.0015,this.andromedaGroup&&(this.andromedaGroup.rotation.z+=e*.012);const r=1+(n.bass||0)*.18;if(this.nebulaSprites&&this.nebulaSprites.forEach(a=>{a.sprite.material.opacity=a.baseOpacity*(.85+r*.15)}),this.twinkleFrame=(this.twinkleFrame||0)+1,this.starColorsAttr&&this.elapsedTime>0&&this.twinkleFrame%3===0){const a=this.starColorsAttr.array,o=this.starOriginalColors,l=this.elapsedTime,c=this.bgStarCount,h=8,u=Math.floor(this.elapsedTime*60%h);for(let d=u;d<c;d+=h){const p=this.twinklePhases[d],g=this.twinkleSpeeds[d],_=.77+.38*Math.sin(l*g+p);a[d*3]=Math.min(1,o[d*3]*_),a[d*3+1]=Math.min(1,o[d*3+1]*_),a[d*3+2]=Math.min(1,o[d*3+2]*_)}this.starColorsAttr.needsUpdate=!0}}setVisible(t){this.group.visible=t}}class Gm{constructor(){this.container=document.getElementById("canvas-container"),this.hudCanvas=document.getElementById("hud-canvas"),this.clock=new Ll,this.isHudVisible=!1,this.hudCanvas&&(this.hudCanvas.style.display="none"),this.initThree(),this.initPostProcessing(),this.audioManager=new Sm,this.drone=new Om(this.camera,this.renderer.domElement),this.currentTheme="cyber",this.city=new wm(this.scene),this.nature=new Fm(this.scene),this.hud=new Bm(this.hudCanvas),this.setupUI(),this.setupWindowResize(),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}initThree(){this.scene=new ph,this.scene.background=new J(198424),this.scene.fog=null,this.camera=new $e(75,window.innerWidth/window.innerHeight,.5,6e3),this.renderer=new um({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.toneMapping=ga,this.renderer.toneMappingExposure=1,this.container.appendChild(this.renderer.domElement),this.ambientLight=new Th(1582134,.35),this.scene.add(this.ambientLight),this.cyanDirLight=new bo(1994655,.32),this.cyanDirLight.position.set(250,450,200),this.scene.add(this.cyanDirLight),this.pinkDirLight=new bo(8591427,.22),this.pinkDirLight.position.set(-200,350,-200),this.scene.add(this.pinkDirLight),this.cosmicSky=new zm(this.scene)}initPostProcessing(){const t=new vm(this.scene,this.camera),e=new Li(new It(Math.floor(window.innerWidth*.75),Math.floor(window.innerHeight*.75)),.35,.25,.88);this.bloomPass=e,this.isBloomEnabled=!0;const n=new ym;this.composer=new _m(this.renderer),this.composer.addPass(t),this.composer.addPass(e),this.composer.addPass(n)}setupUI(){const t=document.getElementById("start-overlay");document.getElementById("btn-start").addEventListener("click",()=>{this.audioManager.startBuiltInSynth(),t.classList.add("hidden")});const n=document.getElementById("btn-mode-straight"),i=document.getElementById("btn-mode-random"),r=document.getElementById("btn-mode-manual"),a=[n,i,r],o=(X,lt)=>{this.drone.setMode(X),a.forEach(at=>at.classList.remove("active")),lt.classList.add("active")};n.addEventListener("click",()=>o("straight",n)),i.addEventListener("click",()=>o("random",i)),r.addEventListener("click",()=>o("manual",r));const l=document.getElementById("speed-slider"),c=document.getElementById("speed-display");l.addEventListener("input",X=>{const lt=parseInt(X.target.value,10);this.drone.setBaseSpeed(lt),c.textContent=`${lt} KM/H`}),document.querySelectorAll(".preset-chip").forEach(X=>{X.addEventListener("click",()=>{const lt=parseInt(X.getAttribute("data-speed"),10);l.value=lt,this.drone.setBaseSpeed(lt),c.textContent=`${lt} KM/H`})});const h=document.getElementById("btn-audio-synth"),u=document.getElementById("btn-audio-mic"),d=document.getElementById("btn-audio-file"),p=document.getElementById("audio-file-input"),g=[h,u,d],_=X=>{g.forEach(lt=>lt.classList.remove("active")),X.classList.add("active")};h.addEventListener("click",()=>{_(h),this.audioManager.startBuiltInSynth()}),u.addEventListener("click",()=>{_(u),this.audioManager.startMicrophone()}),d.addEventListener("click",()=>{p.click()}),p.addEventListener("change",X=>{X.target.files&&X.target.files[0]&&(_(d),this.audioManager.loadAudioFile(X.target.files[0]))}),window.addEventListener("dragover",X=>X.preventDefault()),window.addEventListener("drop",X=>{if(X.preventDefault(),X.dataTransfer.files&&X.dataTransfer.files[0]){const lt=X.dataTransfer.files[0];(lt.type.startsWith("audio/")||lt.name.match(/\.(mp3|wav|ogg|flac|m4a)$/i))&&(_(d),this.audioManager.loadAudioFile(lt),t.classList.add("hidden"))}});const m=document.getElementById("control-deck"),f=document.getElementById("btn-collapse-deck");let y=!1;f.addEventListener("click",()=>{y=!y,y?(m.classList.add("collapsed"),f.textContent="EXPAND ▼"):(m.classList.remove("collapsed"),f.textContent="COLLAPSE ▲")});const M=document.getElementById("btn-toggle-hud"),v=document.getElementById("btn-hide-all-options"),A=document.querySelector(".quick-deck"),T=document.getElementById("ui-toast");let E=null;const R=X=>{T&&(T.textContent=X,T.classList.add("show"),E&&clearTimeout(E),E=setTimeout(()=>{T.classList.remove("show")},1800))};this.isUiVisible=!0;const w=()=>{this.isUiVisible=!this.isUiVisible,this.isHudVisible=this.isUiVisible,this.hudCanvas.style.display=this.isUiVisible?"block":"none",m.classList.toggle("ui-hidden",!this.isUiVisible),A&&A.classList.toggle("ui-hidden-mode",!this.isUiVisible),M&&(M.classList.toggle("hidden-mode",!this.isUiVisible),M.title=this.isUiVisible?"Hide All Options (H)":"Show All Options (H)"),v&&(v.textContent=this.isUiVisible?"HIDE ALL (H)":"SHOW ALL (H)"),R(this.isUiVisible?"ALL OPTIONS RESTORED":"ALL OPTIONS HIDDEN // PRESS [H] TO RESTORE")};M&&M.addEventListener("click",w),v&&v.addEventListener("click",w);const x=document.getElementById("btn-fullscreen"),P=()=>{document.fullscreenElement?document.exitFullscreen().catch(()=>{}):document.documentElement.requestFullscreen().catch(()=>{})};x.addEventListener("click",P);const B=document.getElementById("btn-toggle-bloom"),F=()=>{this.isBloomEnabled=!this.isBloomEnabled,this.bloomPass&&(this.bloomPass.enabled=this.isBloomEnabled),B.classList.toggle("active",this.isBloomEnabled)};B&&B.addEventListener("click",F);const H=document.getElementById("btn-theme-cyber"),K=document.getElementById("btn-theme-nature"),Z=document.getElementById("btn-toggle-theme");this.setTheme=X=>{if(this.currentTheme=X,X==="cyber")this.city.cityGroup.visible=!0,this.nature.setVisible(!1),this.scene.background.set(198424),this.scene.fog=null,this.cosmicSky&&this.cosmicSky.setVisible(!0),this.ambientLight.color.set(1582134),this.ambientLight.intensity=.35,this.cyanDirLight.color.set(1994655),this.cyanDirLight.intensity=.32,this.cyanDirLight.position.set(250,450,200),this.pinkDirLight.color.set(8591427),this.pinkDirLight.intensity=.22,H&&H.classList.add("active"),K&&K.classList.remove("active");else if(X==="nature"){this.city.cityGroup.visible=!1,this.nature.setVisible(!0);const lt=this.timeOfDay==="night";this.scene.background.set(lt?199196:3718648),this.scene.fog=new Aa(lt?398382:8246268,15e-5),this.cosmicSky&&this.cosmicSky.setVisible(lt),this.ambientLight.color.set(lt?791846:12248829),this.ambientLight.intensity=lt?.28:1.45,this.cyanDirLight.color.set(lt?6333946:16776168),this.cyanDirLight.intensity=lt?.45:2.2,this.cyanDirLight.position.set(400,800,250),this.pinkDirLight.color.set(lt?1973067:3462041),this.pinkDirLight.intensity=lt?.15:.55,K&&K.classList.add("active"),H&&H.classList.remove("active")}},this.toggleTheme=()=>{const X=this.currentTheme==="cyber"?"nature":"cyber";this.setTheme(X)},H&&H.addEventListener("click",()=>this.setTheme("cyber")),K&&K.addEventListener("click",()=>this.setTheme("nature")),Z&&Z.addEventListener("click",()=>this.toggleTheme());const tt=document.getElementById("btn-time-day"),V=document.getElementById("btn-time-night"),ut=document.getElementById("btn-toggle-daynight");this.timeOfDay="day",this.setTimeOfDay=X=>{if(X!=="day"&&X!=="night")return;this.timeOfDay=X,this.nature&&this.nature.setTimeOfDay(X);const lt=this.currentTheme==="cyber"||this.currentTheme==="nature"&&X==="night";this.cosmicSky&&this.cosmicSky.setVisible(lt),tt&&tt.classList.toggle("active",X==="day"),V&&V.classList.toggle("active",X==="night"),ut&&(ut.title=X==="day"?"Switch to Night (N)":"Switch to Day (N)",ut.innerHTML=X==="day"?`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
            </svg>`:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>`),R(X==="day"?"CELESTIAL TIME: DAY [☀️ BRIGHT SUNNY DAY]":"CELESTIAL TIME: NIGHT [🌙 STARRY GALAXY SKY]")},this.toggleTimeOfDay=()=>{const X=this.timeOfDay==="day"?"night":"day";this.setTimeOfDay(X)},tt&&tt.addEventListener("click",()=>this.setTimeOfDay("day")),V&&V.addEventListener("click",()=>this.setTimeOfDay("night")),ut&&ut.addEventListener("click",()=>this.toggleTimeOfDay()),window.addEventListener("keydown",X=>{X.target&&X.target.tagName==="INPUT"||((X.code==="KeyH"||X.key==="h"||X.key==="H")&&w(),X.code==="KeyB"&&F(),X.code==="KeyF"&&P(),X.code==="KeyT"&&this.toggleTheme(),(X.code==="KeyN"||X.key==="n"||X.key==="N")&&this.toggleTimeOfDay(),X.code==="Digit1"&&o("straight",n),X.code==="Digit2"&&o("random",i),X.code==="Digit3"&&o("manual",r))})}setupWindowResize(){window.addEventListener("resize",()=>{const t=window.innerWidth,e=window.innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e),this.composer.setSize(t,e),this.bloomPass&&this.bloomPass.setSize(Math.floor(t*.75),Math.floor(e*.75))})}animate(){requestAnimationFrame(this.animate);const t=Math.min(this.clock.getDelta(),.1),e=this.audioManager.update();this.bloomPass&&(this.bloomPass.strength=.32+(e.bass||0)*.12);const n=this.currentTheme==="nature"?(a,o)=>this.nature.getTerrainHeight(a,o):null,i=this.currentTheme==="cyber"?(a,o,l)=>this.city.checkObstacleRadar(a,o,l):null;this.drone.update(t,e,n,i),this.currentTheme==="cyber"?this.city.update(this.drone.position,e,t):this.nature.update(this.drone.position,e,t,{ambientLight:this.ambientLight,cyanDirLight:this.cyanDirLight,pinkDirLight:this.pinkDirLight,scene:this.scene});const r=this.currentTheme==="cyber"||this.currentTheme==="nature"&&this.timeOfDay==="night";this.cosmicSky&&r&&this.cosmicSky.update(this.camera,t,e),this.composer.render(),this.isHudVisible&&this.hud.render(this.drone.telemetry,e,this.currentTheme)}}window.addEventListener("DOMContentLoaded",()=>{new Gm});
