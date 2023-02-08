(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Rc(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function Pc(r){if(De(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Tt(n)?Wm(n):Pc(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Tt(r))return r;if(ct(r))return r}}const Vm=/;(?![^(]*\))/g,Gm=/:([^]+)/,Hm=/\/\*.*?\*\//gs;function Wm(r){const e={};return r.replace(Hm,"").split(Vm).forEach(t=>{if(t){const n=t.split(Gm);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Dc(r){let e="";if(Tt(r))e=r;else if(De(r))for(let t=0;t<r.length;t++){const n=Dc(r[t]);n&&(e+=n+" ")}else if(ct(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const Xm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qm=Rc(Xm);function ad(r){return!!r||r===""}const Ga=r=>Tt(r)?r:r==null?"":De(r)||ct(r)&&(r.toString===fd||!Oe(r.toString))?JSON.stringify(r,ld,2):String(r),ld=(r,e)=>e&&e.__v_isRef?ld(r,e.value):qr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,i])=>(t[`${n} =>`]=i,t),{})}:cd(e)?{[`Set(${e.size})`]:[...e.values()]}:ct(e)&&!De(e)&&!hd(e)?String(e):e,rt={},qs=[],Rn=()=>{},jm=()=>!1,Ym=/^on[^a-z]/,ba=r=>Ym.test(r),Ic=r=>r.startsWith("onUpdate:"),Ut=Object.assign,Nc=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},Km=Object.prototype.hasOwnProperty,He=(r,e)=>Km.call(r,e),De=Array.isArray,qr=r=>Sa(r)==="[object Map]",cd=r=>Sa(r)==="[object Set]",Oe=r=>typeof r=="function",Tt=r=>typeof r=="string",Oc=r=>typeof r=="symbol",ct=r=>r!==null&&typeof r=="object",ud=r=>ct(r)&&Oe(r.then)&&Oe(r.catch),fd=Object.prototype.toString,Sa=r=>fd.call(r),$m=r=>Sa(r).slice(8,-1),hd=r=>Sa(r)==="[object Object]",Fc=r=>Tt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Jo=Rc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wa=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},Zm=/-(\w)/g,ts=wa(r=>r.replace(Zm,(e,t)=>t?t.toUpperCase():"")),Jm=/\B([A-Z])/g,xs=wa(r=>r.replace(Jm,"-$1").toLowerCase()),dd=wa(r=>r.charAt(0).toUpperCase()+r.slice(1)),Ha=wa(r=>r?`on${dd(r)}`:""),Qs=(r,e)=>!Object.is(r,e),Wa=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},la=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},Qm=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let Iu;const eg=()=>Iu||(Iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let An;class tg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=An,!e&&An&&(this.index=(An.scopes||(An.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=An;try{return An=this,e()}finally{An=t}}}on(){An=this}off(){An=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function ng(r,e=An){e&&e.active&&e.effects.push(r)}function ig(){return An}const Uc=r=>{const e=new Set(r);return e.w=0,e.n=0,e},pd=r=>(r.w&Ii)>0,md=r=>(r.n&Ii)>0,rg=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=Ii},sg=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];pd(i)&&!md(i)?i.delete(r):e[t++]=i,i.w&=~Ii,i.n&=~Ii}e.length=t}},Hl=new WeakMap;let Vs=0,Ii=1;const Wl=30;let Cn;const lr=Symbol(""),Xl=Symbol("");class zc{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,ng(this,n)}run(){if(!this.active)return this.fn();let e=Cn,t=Ci;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Cn,Cn=this,Ci=!0,Ii=1<<++Vs,Vs<=Wl?rg(this):Nu(this),this.fn()}finally{Vs<=Wl&&sg(this),Ii=1<<--Vs,Cn=this.parent,Ci=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Cn===this?this.deferStop=!0:this.active&&(Nu(this),this.onStop&&this.onStop(),this.active=!1)}}function Nu(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let Ci=!0;const gd=[];function vs(){gd.push(Ci),Ci=!1}function ys(){const r=gd.pop();Ci=r===void 0?!0:r}function Zt(r,e,t){if(Ci&&Cn){let n=Hl.get(r);n||Hl.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=Uc()),_d(i)}}function _d(r,e){let t=!1;Vs<=Wl?md(r)||(r.n|=Ii,t=!pd(r)):t=!r.has(Cn),t&&(r.add(Cn),Cn.deps.push(r))}function ci(r,e,t,n,i,s){const o=Hl.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&De(r)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":De(r)?Fc(t)&&a.push(o.get("length")):(a.push(o.get(lr)),qr(r)&&a.push(o.get(Xl)));break;case"delete":De(r)||(a.push(o.get(lr)),qr(r)&&a.push(o.get(Xl)));break;case"set":qr(r)&&a.push(o.get(lr));break}if(a.length===1)a[0]&&ql(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);ql(Uc(l))}}function ql(r,e){const t=De(r)?r:[...r];for(const n of t)n.computed&&Ou(n);for(const n of t)n.computed||Ou(n)}function Ou(r,e){(r!==Cn||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const og=Rc("__proto__,__v_isRef,__isVue"),xd=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(Oc)),ag=Bc(),lg=Bc(!1,!0),cg=Bc(!0),Fu=ug();function ug(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=je(this);for(let s=0,o=this.length;s<o;s++)Zt(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(je)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){vs();const n=je(this)[e].apply(this,t);return ys(),n}}),r}function fg(r){const e=je(this);return Zt(e,"has",r),e.hasOwnProperty(r)}function Bc(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?Ag:Sd:e?bd:Md).get(n))return n;const o=De(n);if(!r){if(o&&He(Fu,i))return Reflect.get(Fu,i,s);if(i==="hasOwnProperty")return fg}const a=Reflect.get(n,i,s);return(Oc(i)?xd.has(i):og(i))||(r||Zt(n,"get",i),e)?a:Nt(a)?o&&Fc(i)?a:a.value:ct(a)?r?wd(a):Gc(a):a}}const hg=vd(),dg=vd(!0);function vd(r=!1){return function(t,n,i,s){let o=t[n];if(ns(o)&&Nt(o)&&!Nt(i))return!1;if(!r&&(!ca(i)&&!ns(i)&&(o=je(o),i=je(i)),!De(t)&&Nt(o)&&!Nt(i)))return o.value=i,!0;const a=De(t)&&Fc(n)?Number(n)<t.length:He(t,n),l=Reflect.set(t,n,i,s);return t===je(s)&&(a?Qs(i,o)&&ci(t,"set",n,i):ci(t,"add",n,i)),l}}function pg(r,e){const t=He(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&ci(r,"delete",e,void 0),n}function mg(r,e){const t=Reflect.has(r,e);return(!Oc(e)||!xd.has(e))&&Zt(r,"has",e),t}function gg(r){return Zt(r,"iterate",De(r)?"length":lr),Reflect.ownKeys(r)}const yd={get:ag,set:hg,deleteProperty:pg,has:mg,ownKeys:gg},_g={get:cg,set(r,e){return!0},deleteProperty(r,e){return!0}},xg=Ut({},yd,{get:lg,set:dg}),kc=r=>r,Ta=r=>Reflect.getPrototypeOf(r);function bo(r,e,t=!1,n=!1){r=r.__v_raw;const i=je(r),s=je(e);t||(e!==s&&Zt(i,"get",e),Zt(i,"get",s));const{has:o}=Ta(i),a=n?kc:t?Wc:eo;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function So(r,e=!1){const t=this.__v_raw,n=je(t),i=je(r);return e||(r!==i&&Zt(n,"has",r),Zt(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function wo(r,e=!1){return r=r.__v_raw,!e&&Zt(je(r),"iterate",lr),Reflect.get(r,"size",r)}function Uu(r){r=je(r);const e=je(this);return Ta(e).has.call(e,r)||(e.add(r),ci(e,"add",r,r)),this}function zu(r,e){e=je(e);const t=je(this),{has:n,get:i}=Ta(t);let s=n.call(t,r);s||(r=je(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?Qs(e,o)&&ci(t,"set",r,e):ci(t,"add",r,e),this}function Bu(r){const e=je(this),{has:t,get:n}=Ta(e);let i=t.call(e,r);i||(r=je(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&ci(e,"delete",r,void 0),s}function ku(){const r=je(this),e=r.size!==0,t=r.clear();return e&&ci(r,"clear",void 0,void 0),t}function To(r,e){return function(n,i){const s=this,o=s.__v_raw,a=je(o),l=e?kc:r?Wc:eo;return!r&&Zt(a,"iterate",lr),o.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Eo(r,e,t){return function(...n){const i=this.__v_raw,s=je(i),o=qr(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,c=i[r](...n),u=t?kc:e?Wc:eo;return!e&&Zt(s,"iterate",l?Xl:lr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function pi(r){return function(...e){return r==="delete"?!1:this}}function vg(){const r={get(s){return bo(this,s)},get size(){return wo(this)},has:So,add:Uu,set:zu,delete:Bu,clear:ku,forEach:To(!1,!1)},e={get(s){return bo(this,s,!1,!0)},get size(){return wo(this)},has:So,add:Uu,set:zu,delete:Bu,clear:ku,forEach:To(!1,!0)},t={get(s){return bo(this,s,!0)},get size(){return wo(this,!0)},has(s){return So.call(this,s,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:To(!0,!1)},n={get(s){return bo(this,s,!0,!0)},get size(){return wo(this,!0)},has(s){return So.call(this,s,!0)},add:pi("add"),set:pi("set"),delete:pi("delete"),clear:pi("clear"),forEach:To(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Eo(s,!1,!1),t[s]=Eo(s,!0,!1),e[s]=Eo(s,!1,!0),n[s]=Eo(s,!0,!0)}),[r,t,e,n]}const[yg,Mg,bg,Sg]=vg();function Vc(r,e){const t=e?r?Sg:bg:r?Mg:yg;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(He(t,i)&&i in n?t:n,i,s)}const wg={get:Vc(!1,!1)},Tg={get:Vc(!1,!0)},Eg={get:Vc(!0,!1)},Md=new WeakMap,bd=new WeakMap,Sd=new WeakMap,Ag=new WeakMap;function Cg(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lg(r){return r.__v_skip||!Object.isExtensible(r)?0:Cg($m(r))}function Gc(r){return ns(r)?r:Hc(r,!1,yd,wg,Md)}function Rg(r){return Hc(r,!1,xg,Tg,bd)}function wd(r){return Hc(r,!0,_g,Eg,Sd)}function Hc(r,e,t,n,i){if(!ct(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=Lg(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function jr(r){return ns(r)?jr(r.__v_raw):!!(r&&r.__v_isReactive)}function ns(r){return!!(r&&r.__v_isReadonly)}function ca(r){return!!(r&&r.__v_isShallow)}function Td(r){return jr(r)||ns(r)}function je(r){const e=r&&r.__v_raw;return e?je(e):r}function Ed(r){return la(r,"__v_skip",!0),r}const eo=r=>ct(r)?Gc(r):r,Wc=r=>ct(r)?wd(r):r;function Ad(r){Ci&&Cn&&(r=je(r),_d(r.dep||(r.dep=Uc())))}function Cd(r,e){r=je(r);const t=r.dep;t&&ql(t)}function Nt(r){return!!(r&&r.__v_isRef===!0)}function Cs(r){return Pg(r,!1)}function Pg(r,e){return Nt(r)?r:new Dg(r,e)}class Dg{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:eo(e)}get value(){return Ad(this),this._value}set value(e){const t=this.__v_isShallow||ca(e)||ns(e);e=t?e:je(e),Qs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:eo(e),Cd(this))}}function Ig(r){return Nt(r)?r.value:r}const Ng={get:(r,e,t)=>Ig(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return Nt(i)&&!Nt(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function Ld(r){return jr(r)?r:new Proxy(r,Ng)}var Rd;class Og{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Rd]=!1,this._dirty=!0,this.effect=new zc(e,()=>{this._dirty||(this._dirty=!0,Cd(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=je(this);return Ad(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Rd="__v_isReadonly";function Fg(r,e,t=!1){let n,i;const s=Oe(r);return s?(n=r,i=Rn):(n=r.get,i=r.set),new Og(n,i,s||!i,t)}function Li(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){Ea(s,e,t)}return i}function bn(r,e,t,n){if(Oe(r)){const s=Li(r,e,t,n);return s&&ud(s)&&s.catch(o=>{Ea(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(bn(r[s],e,t,n));return i}function Ea(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Li(l,null,10,[r,o,a]);return}}Ug(r,t,i,n)}function Ug(r,e,t,n=!0){console.error(r)}let to=!1,jl=!1;const Pt=[];let zn=0;const Yr=[];let Qn=null,er=0;const Pd=Promise.resolve();let Xc=null;function zg(r){const e=Xc||Pd;return r?e.then(this?r.bind(this):r):e}function Bg(r){let e=zn+1,t=Pt.length;for(;e<t;){const n=e+t>>>1;no(Pt[n])<r?e=n+1:t=n}return e}function qc(r){(!Pt.length||!Pt.includes(r,to&&r.allowRecurse?zn+1:zn))&&(r.id==null?Pt.push(r):Pt.splice(Bg(r.id),0,r),Dd())}function Dd(){!to&&!jl&&(jl=!0,Xc=Pd.then(Nd))}function kg(r){const e=Pt.indexOf(r);e>zn&&Pt.splice(e,1)}function Vg(r){De(r)?Yr.push(...r):(!Qn||!Qn.includes(r,r.allowRecurse?er+1:er))&&Yr.push(r),Dd()}function Vu(r,e=to?zn+1:0){for(;e<Pt.length;e++){const t=Pt[e];t&&t.pre&&(Pt.splice(e,1),e--,t())}}function Id(r){if(Yr.length){const e=[...new Set(Yr)];if(Yr.length=0,Qn){Qn.push(...e);return}for(Qn=e,Qn.sort((t,n)=>no(t)-no(n)),er=0;er<Qn.length;er++)Qn[er]();Qn=null,er=0}}const no=r=>r.id==null?1/0:r.id,Gg=(r,e)=>{const t=no(r)-no(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function Nd(r){jl=!1,to=!0,Pt.sort(Gg);const e=Rn;try{for(zn=0;zn<Pt.length;zn++){const t=Pt[zn];t&&t.active!==!1&&Li(t,null,14)}}finally{zn=0,Pt.length=0,Id(),to=!1,Xc=null,(Pt.length||Yr.length)&&Nd()}}function Hg(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||rt;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||rt;h&&(i=t.map(p=>Tt(p)?p.trim():p)),f&&(i=t.map(Qm))}let a,l=n[a=Ha(e)]||n[a=Ha(ts(e))];!l&&s&&(l=n[a=Ha(xs(e))]),l&&bn(l,r,6,i);const c=n[a+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,bn(c,r,6,i)}}function Od(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!Oe(r)){const l=c=>{const u=Od(c,e,!0);u&&(a=!0,Ut(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(ct(r)&&n.set(r,null),null):(De(s)?s.forEach(l=>o[l]=null):Ut(o,s),ct(r)&&n.set(r,o),o)}function Aa(r,e){return!r||!ba(e)?!1:(e=e.slice(2).replace(/Once$/,""),He(r,e[0].toLowerCase()+e.slice(1))||He(r,xs(e))||He(r,e))}let Ln=null,Fd=null;function ua(r){const e=Ln;return Ln=r,Fd=r&&r.type.__scopeId||null,e}function Wg(r,e=Ln,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&$u(-1);const s=ua(e);let o;try{o=r(...i)}finally{ua(s),n._d&&$u(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Xa(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:d}=r;let m,_;const M=ua(r);try{if(t.shapeFlag&4){const y=i||n;m=Fn(u.call(y,y,f,s,p,h,g)),_=l}else{const y=e;m=Fn(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:Xg(l)}}catch(y){Ea(y,r,1),m=cr(oi)}let x=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:S}=x;y.length&&S&7&&(o&&y.some(Ic)&&(_=qg(_,o)),x=Ni(x,_))}return t.dirs&&(x=Ni(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,ua(M),m}const Xg=r=>{let e;for(const t in r)(t==="class"||t==="style"||ba(t))&&((e||(e={}))[t]=r[t]);return e},qg=(r,e)=>{const t={};for(const n in r)(!Ic(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function jg(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Gu(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!Aa(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Gu(n,o,c):!0:!!o;return!1}function Gu(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!Aa(t,s))return!0}return!1}function Yg({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const Kg=r=>r.__isSuspense;function $g(r,e){e&&e.pendingBranch?De(r)?e.effects.push(...r):e.effects.push(r):Vg(r)}function Zg(r,e){if(mt){let t=mt.provides;const n=mt.parent&&mt.parent.provides;n===t&&(t=mt.provides=Object.create(n)),t[r]=e}}function Qo(r,e,t=!1){const n=mt||Ln;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Oe(e)?e.call(n.proxy):e}}const Ao={};function qa(r,e,t){return Ud(r,e,t)}function Ud(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=rt){const a=ig()===(mt==null?void 0:mt.scope)?mt:null;let l,c=!1,u=!1;if(Nt(r)?(l=()=>r.value,c=ca(r)):jr(r)?(l=()=>r,n=!0):De(r)?(u=!0,c=r.some(x=>jr(x)||ca(x)),l=()=>r.map(x=>{if(Nt(x))return x.value;if(jr(x))return Vr(x);if(Oe(x))return Li(x,a,2)})):Oe(r)?e?l=()=>Li(r,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),bn(r,a,3,[h])}:l=Rn,e&&n){const x=l;l=()=>Vr(x())}let f,h=x=>{f=_.onStop=()=>{Li(x,a,4)}},p;if(io)if(h=Rn,e?t&&bn(e,a,3,[l(),u?[]:void 0,h]):l(),i==="sync"){const x=j_();p=x.__watcherHandles||(x.__watcherHandles=[])}else return Rn;let g=u?new Array(r.length).fill(Ao):Ao;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((y,S)=>Qs(y,g[S])):Qs(x,g)))&&(f&&f(),bn(e,a,3,[x,g===Ao?void 0:u&&g[0]===Ao?[]:g,h]),g=x)}else _.run()};d.allowRecurse=!!e;let m;i==="sync"?m=d:i==="post"?m=()=>qt(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>qc(d));const _=new zc(l,m);e?t?d():g=_.run():i==="post"?qt(_.run.bind(_),a&&a.suspense):_.run();const M=()=>{_.stop(),a&&a.scope&&Nc(a.scope.effects,_)};return p&&p.push(M),M}function Jg(r,e,t){const n=this.proxy,i=Tt(r)?r.includes(".")?zd(n,r):()=>n[r]:r.bind(n,n);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=mt;is(this);const a=Ud(i,s.bind(n),t);return o?is(o):ur(),a}function zd(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Vr(r,e){if(!ct(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),Nt(r))Vr(r.value,e);else if(De(r))for(let t=0;t<r.length;t++)Vr(r[t],e);else if(cd(r)||qr(r))r.forEach(t=>{Vr(t,e)});else if(hd(r))for(const t in r)Vr(r[t],e);return r}function Qg(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return jc(()=>{r.isMounted=!0}),Gd(()=>{r.isUnmounting=!0}),r}const fn=[Function,Array],e_={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fn,onEnter:fn,onAfterEnter:fn,onEnterCancelled:fn,onBeforeLeave:fn,onLeave:fn,onAfterLeave:fn,onLeaveCancelled:fn,onBeforeAppear:fn,onAppear:fn,onAfterAppear:fn,onAppearCancelled:fn},setup(r,{slots:e}){const t=B_(),n=Qg();let i;return()=>{const s=e.default&&kd(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==oi){o=d;break}}const a=je(r),{mode:l}=a;if(n.isLeaving)return ja(o);const c=Hu(o);if(!c)return ja(o);const u=Yl(c,a,n,t);Kl(c,u);const f=t.subTree,h=f&&Hu(f);let p=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,p=!0)}if(h&&h.type!==oi&&(!tr(c,h)||p)){const d=Yl(h,a,n,t);if(Kl(h,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},ja(o);l==="in-out"&&c.type!==oi&&(d.delayLeave=(m,_,M)=>{const x=Bd(n,h);x[String(h.key)]=h,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},t_=e_;function Bd(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Yl(r,e,t,n){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:d,onAppear:m,onAfterAppear:_,onAppearCancelled:M}=e,x=String(r.key),y=Bd(t,r),S=(v,w)=>{v&&bn(v,n,9,w)},C=(v,w)=>{const P=w[1];S(v,w),De(v)?v.every(V=>V.length<=1)&&P():v.length<=1&&P()},L={mode:s,persisted:o,beforeEnter(v){let w=a;if(!t.isMounted)if(i)w=d||a;else return;v._leaveCb&&v._leaveCb(!0);const P=y[x];P&&tr(r,P)&&P.el._leaveCb&&P.el._leaveCb(),S(w,[v])},enter(v){let w=l,P=c,V=u;if(!t.isMounted)if(i)w=m||l,P=_||c,V=M||u;else return;let j=!1;const D=v._enterCb=I=>{j||(j=!0,I?S(V,[v]):S(P,[v]),L.delayedLeave&&L.delayedLeave(),v._enterCb=void 0)};w?C(w,[v,D]):D()},leave(v,w){const P=String(r.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return w();S(f,[v]);let V=!1;const j=v._leaveCb=D=>{V||(V=!0,w(),D?S(g,[v]):S(p,[v]),v._leaveCb=void 0,y[P]===r&&delete y[P])};y[P]=r,h?C(h,[v,j]):j()},clone(v){return Yl(v,e,t,n)}};return L}function ja(r){if(Ca(r))return r=Ni(r),r.children=null,r}function Hu(r){return Ca(r)?r.children?r.children[0]:void 0:r}function Kl(r,e){r.shapeFlag&6&&r.component?Kl(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function kd(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let o=r[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===On?(o.patchFlag&128&&i++,n=n.concat(kd(o.children,e,a))):(e||o.type!==oi)&&n.push(a!=null?Ni(o,{key:a}):o)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const ea=r=>!!r.type.__asyncLoader,Ca=r=>r.type.__isKeepAlive;function n_(r,e){Vd(r,"a",e)}function i_(r,e){Vd(r,"da",e)}function Vd(r,e,t=mt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(La(e,n,t),t){let i=t.parent;for(;i&&i.parent;)Ca(i.parent.vnode)&&r_(n,e,t,i),i=i.parent}}function r_(r,e,t,n){const i=La(e,r,n,!0);Hd(()=>{Nc(n[e],i)},t)}function La(r,e,t=mt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;vs(),is(t);const a=bn(e,t,r,o);return ur(),ys(),a});return n?i.unshift(s):i.push(s),s}}const di=r=>(e,t=mt)=>(!io||r==="sp")&&La(r,(...n)=>e(...n),t),s_=di("bm"),jc=di("m"),o_=di("bu"),a_=di("u"),Gd=di("bum"),Hd=di("um"),l_=di("sp"),c_=di("rtg"),u_=di("rtc");function f_(r,e=mt){La("ec",r,e)}function Hi(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(vs(),bn(l,t,8,[r.el,a,r,e]),ys())}}const h_=Symbol(),$l=r=>r?Qd(r)?Jc(r)||r.proxy:$l(r.parent):null,js=Ut(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>$l(r.parent),$root:r=>$l(r.root),$emit:r=>r.emit,$options:r=>Yc(r),$forceUpdate:r=>r.f||(r.f=()=>qc(r.update)),$nextTick:r=>r.n||(r.n=zg.bind(r.proxy)),$watch:r=>Jg.bind(r)}),Ya=(r,e)=>r!==rt&&!r.__isScriptSetup&&He(r,e),d_={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Ya(n,e))return o[e]=1,n[e];if(i!==rt&&He(i,e))return o[e]=2,i[e];if((c=r.propsOptions[0])&&He(c,e))return o[e]=3,s[e];if(t!==rt&&He(t,e))return o[e]=4,t[e];Zl&&(o[e]=0)}}const u=js[e];let f,h;if(u)return e==="$attrs"&&Zt(r,"get",e),u(r);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==rt&&He(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,He(h,e))return h[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Ya(i,e)?(i[e]=t,!0):n!==rt&&He(n,e)?(n[e]=t,!0):He(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==rt&&He(r,o)||Ya(e,o)||(a=s[0])&&He(a,o)||He(n,o)||He(js,o)||He(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:He(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let Zl=!0;function p_(r){const e=Yc(r),t=r.proxy,n=r.ctx;Zl=!1,e.beforeCreate&&Wu(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:M,destroyed:x,unmounted:y,render:S,renderTracked:C,renderTriggered:L,errorCaptured:v,serverPrefetch:w,expose:P,inheritAttrs:V,components:j,directives:D,filters:I}=e;if(c&&m_(c,n,null,r.appContext.config.unwrapInjectedRef),o)for(const X in o){const z=o[X];Oe(z)&&(n[X]=z.bind(t))}if(i){const X=i.call(t,t);ct(X)&&(r.data=Gc(X))}if(Zl=!0,s)for(const X in s){const z=s[X],se=Oe(z)?z.bind(t,t):Oe(z.get)?z.get.bind(t,t):Rn,oe=!Oe(z)&&Oe(z.set)?z.set.bind(t):Rn,_e=X_({get:se,set:oe});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>_e.value,set:B=>_e.value=B})}if(a)for(const X in a)Wd(a[X],n,t,X);if(l){const X=Oe(l)?l.call(t):l;Reflect.ownKeys(X).forEach(z=>{Zg(z,X[z])})}u&&Wu(u,r,"c");function Y(X,z){De(z)?z.forEach(se=>X(se.bind(t))):z&&X(z.bind(t))}if(Y(s_,f),Y(jc,h),Y(o_,p),Y(a_,g),Y(n_,d),Y(i_,m),Y(f_,v),Y(u_,C),Y(c_,L),Y(Gd,M),Y(Hd,y),Y(l_,w),De(P))if(P.length){const X=r.exposed||(r.exposed={});P.forEach(z=>{Object.defineProperty(X,z,{get:()=>t[z],set:se=>t[z]=se})})}else r.exposed||(r.exposed={});S&&r.render===Rn&&(r.render=S),V!=null&&(r.inheritAttrs=V),j&&(r.components=j),D&&(r.directives=D)}function m_(r,e,t=Rn,n=!1){De(r)&&(r=Jl(r));for(const i in r){const s=r[i];let o;ct(s)?"default"in s?o=Qo(s.from||i,s.default,!0):o=Qo(s.from||i):o=Qo(s),Nt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function Wu(r,e,t){bn(De(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function Wd(r,e,t,n){const i=n.includes(".")?zd(t,n):()=>t[n];if(Tt(r)){const s=e[r];Oe(s)&&qa(i,s)}else if(Oe(r))qa(i,r.bind(t));else if(ct(r))if(De(r))r.forEach(s=>Wd(s,e,t,n));else{const s=Oe(r.handler)?r.handler.bind(t):e[r.handler];Oe(s)&&qa(i,s,r)}}function Yc(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>fa(l,c,o,!0)),fa(l,e,o)),ct(e)&&s.set(e,l),l}function fa(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&fa(r,s,t,!0),i&&i.forEach(o=>fa(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=g_[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const g_={data:Xu,props:$i,emits:$i,methods:$i,computed:$i,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:$i,directives:$i,watch:x_,provide:Xu,inject:__};function Xu(r,e){return e?r?function(){return Ut(Oe(r)?r.call(this,this):r,Oe(e)?e.call(this,this):e)}:e:r}function __(r,e){return $i(Jl(r),Jl(e))}function Jl(r){if(De(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function Vt(r,e){return r?[...new Set([].concat(r,e))]:e}function $i(r,e){return r?Ut(Ut(Object.create(null),r),e):e}function x_(r,e){if(!r)return e;if(!e)return r;const t=Ut(Object.create(null),r);for(const n in e)t[n]=Vt(r[n],e[n]);return t}function v_(r,e,t,n=!1){const i={},s={};la(s,Pa,1),r.propsDefaults=Object.create(null),Xd(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:Rg(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function y_(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=je(i),[l]=r.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=r.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Aa(r.emitsOptions,h))continue;const p=e[h];if(l)if(He(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=ts(h);i[g]=Ql(l,a,g,p,r,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Xd(r,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!He(e,f)&&((u=xs(f))===f||!He(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(i[f]=Ql(l,a,f,void 0,r,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!He(e,f))&&(delete s[f],c=!0)}c&&ci(r,"set","$attrs")}function Xd(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(Jo(l))continue;const c=e[l];let u;i&&He(i,u=ts(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Aa(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=je(t),c=a||rt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ql(i,l,f,c[f],r,!He(c,f))}}return o}function Ql(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=He(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Oe(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(is(i),n=c[t]=l.call(null,e),ur())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===xs(t))&&(n=!0))}return n}function qd(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!Oe(r)){const u=f=>{l=!0;const[h,p]=qd(f,e,!0);Ut(o,h),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return ct(r)&&n.set(r,qs),qs;if(De(s))for(let u=0;u<s.length;u++){const f=ts(s[u]);qu(f)&&(o[f]=rt)}else if(s)for(const u in s){const f=ts(u);if(qu(f)){const h=s[u],p=o[f]=De(h)||Oe(h)?{type:h}:Object.assign({},h);if(p){const g=Ku(Boolean,p.type),d=Ku(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||He(p,"default"))&&a.push(f)}}}const c=[o,a];return ct(r)&&n.set(r,c),c}function qu(r){return r[0]!=="$"}function ju(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function Yu(r,e){return ju(r)===ju(e)}function Ku(r,e){return De(e)?e.findIndex(t=>Yu(t,r)):Oe(e)&&Yu(e,r)?0:-1}const jd=r=>r[0]==="_"||r==="$stable",Kc=r=>De(r)?r.map(Fn):[Fn(r)],M_=(r,e,t)=>{if(e._n)return e;const n=Wg((...i)=>Kc(e(...i)),t);return n._c=!1,n},Yd=(r,e,t)=>{const n=r._ctx;for(const i in r){if(jd(i))continue;const s=r[i];if(Oe(s))e[i]=M_(i,s,n);else if(s!=null){const o=Kc(s);e[i]=()=>o}}},Kd=(r,e)=>{const t=Kc(e);r.slots.default=()=>t},b_=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=je(e),la(e,"_",t)):Yd(e,r.slots={})}else r.slots={},e&&Kd(r,e);la(r.slots,Pa,1)},S_=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=rt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Ut(i,e),!t&&a===1&&delete i._):(s=!e.$stable,Yd(e,i)),o=e}else e&&(Kd(r,e),o={default:1});if(s)for(const a in i)!jd(a)&&!(a in o)&&delete i[a]};function $d(){return{app:null,config:{isNativeTag:jm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w_=0;function T_(r,e){return function(n,i=null){Oe(n)||(n=Object.assign({},n)),i!=null&&!ct(i)&&(i=null);const s=$d(),o=new Set;let a=!1;const l=s.app={_uid:w_++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Y_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Oe(c.install)?(o.add(c),c.install(l,...u)):Oe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=cr(n,i);return h.appContext=s,u&&e?e(h,c):r(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Jc(h.component)||h.component.proxy}},unmount(){a&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function ec(r,e,t,n,i=!1){if(De(r)){r.forEach((h,p)=>ec(h,e&&(De(e)?e[p]:e),t,n,i));return}if(ea(n)&&!i)return;const s=n.shapeFlag&4?Jc(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,He(f,c)&&(f[c]=null)):Nt(c)&&(c.value=null)),Oe(l))Li(l,a,12,[o,u]);else{const h=Tt(l),p=Nt(l);if(h||p){const g=()=>{if(r.f){const d=h?He(f,l)?f[l]:u[l]:l.value;i?De(d)&&Nc(d,s):De(d)?d.includes(s)||d.push(s):h?(u[l]=[s],He(f,l)&&(f[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else h?(u[l]=o,He(f,l)&&(f[l]=o)):p&&(l.value=o,r.k&&(u[r.k]=o))};o?(g.id=-1,qt(g,t)):g()}}}const qt=$g;function E_(r){return A_(r)}function A_(r,e){const t=eg();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Rn,insertStaticContent:g}=r,d=(A,R,W,ne=null,J=null,ae=null,ce=!1,te=null,he=!!R.dynamicChildren)=>{if(A===R)return;A&&!tr(A,R)&&(ne=Le(A),B(A,J,ae,!0),A=null),R.patchFlag===-2&&(he=!1,R.dynamicChildren=null);const{type:re,ref:T,shapeFlag:b}=R;switch(re){case Ra:m(A,R,W,ne);break;case oi:_(A,R,W,ne);break;case Ka:A==null&&M(R,W,ne,ce);break;case On:j(A,R,W,ne,J,ae,ce,te,he);break;default:b&1?S(A,R,W,ne,J,ae,ce,te,he):b&6?D(A,R,W,ne,J,ae,ce,te,he):(b&64||b&128)&&re.process(A,R,W,ne,J,ae,ce,te,he,be)}T!=null&&J&&ec(T,A&&A.ref,ae,R||A,!R)},m=(A,R,W,ne)=>{if(A==null)n(R.el=a(R.children),W,ne);else{const J=R.el=A.el;R.children!==A.children&&c(J,R.children)}},_=(A,R,W,ne)=>{A==null?n(R.el=l(R.children||""),W,ne):R.el=A.el},M=(A,R,W,ne)=>{[A.el,A.anchor]=g(A.children,R,W,ne,A.el,A.anchor)},x=({el:A,anchor:R},W,ne)=>{let J;for(;A&&A!==R;)J=h(A),n(A,W,ne),A=J;n(R,W,ne)},y=({el:A,anchor:R})=>{let W;for(;A&&A!==R;)W=h(A),i(A),A=W;i(R)},S=(A,R,W,ne,J,ae,ce,te,he)=>{ce=ce||R.type==="svg",A==null?C(R,W,ne,J,ae,ce,te,he):w(A,R,J,ae,ce,te,he)},C=(A,R,W,ne,J,ae,ce,te)=>{let he,re;const{type:T,props:b,shapeFlag:O,transition:q,dirs:Q}=A;if(he=A.el=o(A.type,ae,b&&b.is,b),O&8?u(he,A.children):O&16&&v(A.children,he,null,ne,J,ae&&T!=="foreignObject",ce,te),Q&&Hi(A,null,ne,"created"),L(he,A,A.scopeId,ce,ne),b){for(const ge in b)ge!=="value"&&!Jo(ge)&&s(he,ge,null,b[ge],ae,A.children,ne,J,H);"value"in b&&s(he,"value",null,b.value),(re=b.onVnodeBeforeMount)&&In(re,ne,A)}Q&&Hi(A,null,ne,"beforeMount");const le=(!J||J&&!J.pendingBranch)&&q&&!q.persisted;le&&q.beforeEnter(he),n(he,R,W),((re=b&&b.onVnodeMounted)||le||Q)&&qt(()=>{re&&In(re,ne,A),le&&q.enter(he),Q&&Hi(A,null,ne,"mounted")},J)},L=(A,R,W,ne,J)=>{if(W&&p(A,W),ne)for(let ae=0;ae<ne.length;ae++)p(A,ne[ae]);if(J){let ae=J.subTree;if(R===ae){const ce=J.vnode;L(A,ce,ce.scopeId,ce.slotScopeIds,J.parent)}}},v=(A,R,W,ne,J,ae,ce,te,he=0)=>{for(let re=he;re<A.length;re++){const T=A[re]=te?bi(A[re]):Fn(A[re]);d(null,T,R,W,ne,J,ae,ce,te)}},w=(A,R,W,ne,J,ae,ce)=>{const te=R.el=A.el;let{patchFlag:he,dynamicChildren:re,dirs:T}=R;he|=A.patchFlag&16;const b=A.props||rt,O=R.props||rt;let q;W&&Wi(W,!1),(q=O.onVnodeBeforeUpdate)&&In(q,W,R,A),T&&Hi(R,A,W,"beforeUpdate"),W&&Wi(W,!0);const Q=J&&R.type!=="foreignObject";if(re?P(A.dynamicChildren,re,te,W,ne,Q,ae):ce||z(A,R,te,null,W,ne,Q,ae,!1),he>0){if(he&16)V(te,R,b,O,W,ne,J);else if(he&2&&b.class!==O.class&&s(te,"class",null,O.class,J),he&4&&s(te,"style",b.style,O.style,J),he&8){const le=R.dynamicProps;for(let ge=0;ge<le.length;ge++){const fe=le[ge],K=b[fe],we=O[fe];(we!==K||fe==="value")&&s(te,fe,K,we,J,A.children,W,ne,H)}}he&1&&A.children!==R.children&&u(te,R.children)}else!ce&&re==null&&V(te,R,b,O,W,ne,J);((q=O.onVnodeUpdated)||T)&&qt(()=>{q&&In(q,W,R,A),T&&Hi(R,A,W,"updated")},ne)},P=(A,R,W,ne,J,ae,ce)=>{for(let te=0;te<R.length;te++){const he=A[te],re=R[te],T=he.el&&(he.type===On||!tr(he,re)||he.shapeFlag&70)?f(he.el):W;d(he,re,T,null,ne,J,ae,ce,!0)}},V=(A,R,W,ne,J,ae,ce)=>{if(W!==ne){if(W!==rt)for(const te in W)!Jo(te)&&!(te in ne)&&s(A,te,W[te],null,ce,R.children,J,ae,H);for(const te in ne){if(Jo(te))continue;const he=ne[te],re=W[te];he!==re&&te!=="value"&&s(A,te,re,he,ce,R.children,J,ae,H)}"value"in ne&&s(A,"value",W.value,ne.value)}},j=(A,R,W,ne,J,ae,ce,te,he)=>{const re=R.el=A?A.el:a(""),T=R.anchor=A?A.anchor:a("");let{patchFlag:b,dynamicChildren:O,slotScopeIds:q}=R;q&&(te=te?te.concat(q):q),A==null?(n(re,W,ne),n(T,W,ne),v(R.children,W,T,J,ae,ce,te,he)):b>0&&b&64&&O&&A.dynamicChildren?(P(A.dynamicChildren,O,W,J,ae,ce,te),(R.key!=null||J&&R===J.subTree)&&Zd(A,R,!0)):z(A,R,W,T,J,ae,ce,te,he)},D=(A,R,W,ne,J,ae,ce,te,he)=>{R.slotScopeIds=te,A==null?R.shapeFlag&512?J.ctx.activate(R,W,ne,ce,he):I(R,W,ne,J,ae,ce,he):G(A,R,he)},I=(A,R,W,ne,J,ae,ce)=>{const te=A.component=z_(A,ne,J);if(Ca(A)&&(te.ctx.renderer=be),k_(te),te.asyncDep){if(J&&J.registerDep(te,Y),!A.el){const he=te.subTree=cr(oi);_(null,he,R,W)}return}Y(te,A,R,W,J,ae,ce)},G=(A,R,W)=>{const ne=R.component=A.component;if(jg(A,R,W))if(ne.asyncDep&&!ne.asyncResolved){X(ne,R,W);return}else ne.next=R,kg(ne.update),ne.update();else R.el=A.el,ne.vnode=R},Y=(A,R,W,ne,J,ae,ce)=>{const te=()=>{if(A.isMounted){let{next:T,bu:b,u:O,parent:q,vnode:Q}=A,le=T,ge;Wi(A,!1),T?(T.el=Q.el,X(A,T,ce)):T=Q,b&&Wa(b),(ge=T.props&&T.props.onVnodeBeforeUpdate)&&In(ge,q,T,Q),Wi(A,!0);const fe=Xa(A),K=A.subTree;A.subTree=fe,d(K,fe,f(K.el),Le(K),A,J,ae),T.el=fe.el,le===null&&Yg(A,fe.el),O&&qt(O,J),(ge=T.props&&T.props.onVnodeUpdated)&&qt(()=>In(ge,q,T,Q),J)}else{let T;const{el:b,props:O}=R,{bm:q,m:Q,parent:le}=A,ge=ea(R);if(Wi(A,!1),q&&Wa(q),!ge&&(T=O&&O.onVnodeBeforeMount)&&In(T,le,R),Wi(A,!0),b&&Ke){const fe=()=>{A.subTree=Xa(A),Ke(b,A.subTree,A,J,null)};ge?R.type.__asyncLoader().then(()=>!A.isUnmounted&&fe()):fe()}else{const fe=A.subTree=Xa(A);d(null,fe,W,ne,A,J,ae),R.el=fe.el}if(Q&&qt(Q,J),!ge&&(T=O&&O.onVnodeMounted)){const fe=R;qt(()=>In(T,le,fe),J)}(R.shapeFlag&256||le&&ea(le.vnode)&&le.vnode.shapeFlag&256)&&A.a&&qt(A.a,J),A.isMounted=!0,R=W=ne=null}},he=A.effect=new zc(te,()=>qc(re),A.scope),re=A.update=()=>he.run();re.id=A.uid,Wi(A,!0),re()},X=(A,R,W)=>{R.component=A;const ne=A.vnode.props;A.vnode=R,A.next=null,y_(A,R.props,ne,W),S_(A,R.children,W),vs(),Vu(),ys()},z=(A,R,W,ne,J,ae,ce,te,he=!1)=>{const re=A&&A.children,T=A?A.shapeFlag:0,b=R.children,{patchFlag:O,shapeFlag:q}=R;if(O>0){if(O&128){oe(re,b,W,ne,J,ae,ce,te,he);return}else if(O&256){se(re,b,W,ne,J,ae,ce,te,he);return}}q&8?(T&16&&H(re,J,ae),b!==re&&u(W,b)):T&16?q&16?oe(re,b,W,ne,J,ae,ce,te,he):H(re,J,ae,!0):(T&8&&u(W,""),q&16&&v(b,W,ne,J,ae,ce,te,he))},se=(A,R,W,ne,J,ae,ce,te,he)=>{A=A||qs,R=R||qs;const re=A.length,T=R.length,b=Math.min(re,T);let O;for(O=0;O<b;O++){const q=R[O]=he?bi(R[O]):Fn(R[O]);d(A[O],q,W,null,J,ae,ce,te,he)}re>T?H(A,J,ae,!0,!1,b):v(R,W,ne,J,ae,ce,te,he,b)},oe=(A,R,W,ne,J,ae,ce,te,he)=>{let re=0;const T=R.length;let b=A.length-1,O=T-1;for(;re<=b&&re<=O;){const q=A[re],Q=R[re]=he?bi(R[re]):Fn(R[re]);if(tr(q,Q))d(q,Q,W,null,J,ae,ce,te,he);else break;re++}for(;re<=b&&re<=O;){const q=A[b],Q=R[O]=he?bi(R[O]):Fn(R[O]);if(tr(q,Q))d(q,Q,W,null,J,ae,ce,te,he);else break;b--,O--}if(re>b){if(re<=O){const q=O+1,Q=q<T?R[q].el:ne;for(;re<=O;)d(null,R[re]=he?bi(R[re]):Fn(R[re]),W,Q,J,ae,ce,te,he),re++}}else if(re>O)for(;re<=b;)B(A[re],J,ae,!0),re++;else{const q=re,Q=re,le=new Map;for(re=Q;re<=O;re++){const ve=R[re]=he?bi(R[re]):Fn(R[re]);ve.key!=null&&le.set(ve.key,re)}let ge,fe=0;const K=O-Q+1;let we=!1,Ce=0;const Me=new Array(K);for(re=0;re<K;re++)Me[re]=0;for(re=q;re<=b;re++){const ve=A[re];if(fe>=K){B(ve,J,ae,!0);continue}let Re;if(ve.key!=null)Re=le.get(ve.key);else for(ge=Q;ge<=O;ge++)if(Me[ge-Q]===0&&tr(ve,R[ge])){Re=ge;break}Re===void 0?B(ve,J,ae,!0):(Me[Re-Q]=re+1,Re>=Ce?Ce=Re:we=!0,d(ve,R[Re],W,null,J,ae,ce,te,he),fe++)}const Ee=we?C_(Me):qs;for(ge=Ee.length-1,re=K-1;re>=0;re--){const ve=Q+re,Re=R[ve],Je=ve+1<T?R[ve+1].el:ne;Me[re]===0?d(null,Re,W,Je,J,ae,ce,te,he):we&&(ge<0||re!==Ee[ge]?_e(Re,W,Je,2):ge--)}}},_e=(A,R,W,ne,J=null)=>{const{el:ae,type:ce,transition:te,children:he,shapeFlag:re}=A;if(re&6){_e(A.component.subTree,R,W,ne);return}if(re&128){A.suspense.move(R,W,ne);return}if(re&64){ce.move(A,R,W,be);return}if(ce===On){n(ae,R,W);for(let b=0;b<he.length;b++)_e(he[b],R,W,ne);n(A.anchor,R,W);return}if(ce===Ka){x(A,R,W);return}if(ne!==2&&re&1&&te)if(ne===0)te.beforeEnter(ae),n(ae,R,W),qt(()=>te.enter(ae),J);else{const{leave:b,delayLeave:O,afterLeave:q}=te,Q=()=>n(ae,R,W),le=()=>{b(ae,()=>{Q(),q&&q()})};O?O(ae,Q,le):le()}else n(ae,R,W)},B=(A,R,W,ne=!1,J=!1)=>{const{type:ae,props:ce,ref:te,children:he,dynamicChildren:re,shapeFlag:T,patchFlag:b,dirs:O}=A;if(te!=null&&ec(te,null,W,A,!0),T&256){R.ctx.deactivate(A);return}const q=T&1&&O,Q=!ea(A);let le;if(Q&&(le=ce&&ce.onVnodeBeforeUnmount)&&In(le,R,A),T&6)pe(A.component,W,ne);else{if(T&128){A.suspense.unmount(W,ne);return}q&&Hi(A,null,R,"beforeUnmount"),T&64?A.type.remove(A,R,W,J,be,ne):re&&(ae!==On||b>0&&b&64)?H(re,R,W,!1,!0):(ae===On&&b&384||!J&&T&16)&&H(he,R,W),ne&&ie(A)}(Q&&(le=ce&&ce.onVnodeUnmounted)||q)&&qt(()=>{le&&In(le,R,A),q&&Hi(A,null,R,"unmounted")},W)},ie=A=>{const{type:R,el:W,anchor:ne,transition:J}=A;if(R===On){de(W,ne);return}if(R===Ka){y(A);return}const ae=()=>{i(W),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(A.shapeFlag&1&&J&&!J.persisted){const{leave:ce,delayLeave:te}=J,he=()=>ce(W,ae);te?te(A.el,ae,he):he()}else ae()},de=(A,R)=>{let W;for(;A!==R;)W=h(A),i(A),A=W;i(R)},pe=(A,R,W)=>{const{bum:ne,scope:J,update:ae,subTree:ce,um:te}=A;ne&&Wa(ne),J.stop(),ae&&(ae.active=!1,B(ce,A,R,W)),te&&qt(te,R),qt(()=>{A.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},H=(A,R,W,ne=!1,J=!1,ae=0)=>{for(let ce=ae;ce<A.length;ce++)B(A[ce],R,W,ne,J)},Le=A=>A.shapeFlag&6?Le(A.component.subTree):A.shapeFlag&128?A.suspense.next():h(A.anchor||A.el),Se=(A,R,W)=>{A==null?R._vnode&&B(R._vnode,null,null,!0):d(R._vnode||null,A,R,null,null,null,W),Vu(),Id(),R._vnode=A},be={p:d,um:B,m:_e,r:ie,mt:I,mc:v,pc:z,pbc:P,n:Le,o:r};let xe,Ke;return e&&([xe,Ke]=e(be)),{render:Se,hydrate:xe,createApp:T_(Se,xe)}}function Wi({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function Zd(r,e,t=!1){const n=r.children,i=e.children;if(De(n)&&De(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=bi(i[s]),a.el=o.el),t||Zd(o,a)),a.type===Ra&&(a.el=o.el)}}function C_(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<c?s=a+1:o=a;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const L_=r=>r.__isTeleport,On=Symbol(void 0),Ra=Symbol(void 0),oi=Symbol(void 0),Ka=Symbol(void 0);let Gr=null,$c=1;function $u(r){$c+=r}function R_(r){return r?r.__v_isVNode===!0:!1}function tr(r,e){return r.type===e.type&&r.key===e.key}const Pa="__vInternal",Jd=({key:r})=>r??null,ta=({ref:r,ref_key:e,ref_for:t})=>r!=null?Tt(r)||Nt(r)||Oe(r)?{i:Ln,r,k:e,f:!!t}:r:null;function P_(r,e=null,t=null,n=0,i=null,s=r===On?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&Jd(e),ref:e&&ta(e),scopeId:Fd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ln};return a?(Zc(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),$c>0&&!o&&Gr&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Gr.push(l),l}const cr=D_;function D_(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===h_)&&(r=oi),R_(r)){const a=Ni(r,e,!0);return t&&Zc(a,t),$c>0&&!s&&Gr&&(a.shapeFlag&6?Gr[Gr.indexOf(r)]=a:Gr.push(a)),a.patchFlag|=-2,a}if(W_(r)&&(r=r.__vccOpts),e){e=I_(e);let{class:a,style:l}=e;a&&!Tt(a)&&(e.class=Dc(a)),ct(l)&&(Td(l)&&!De(l)&&(l=Ut({},l)),e.style=Pc(l))}const o=Tt(r)?1:Kg(r)?128:L_(r)?64:ct(r)?4:Oe(r)?2:0;return P_(r,e,t,n,i,o,s,!0)}function I_(r){return r?Td(r)||Pa in r?Ut({},r):r:null}function Ni(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?O_(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&Jd(a),ref:e&&e.ref?t&&i?De(i)?i.concat(ta(e)):[i,ta(e)]:ta(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==On?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Ni(r.ssContent),ssFallback:r.ssFallback&&Ni(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function N_(r=" ",e=0){return cr(Ra,null,r,e)}function Fn(r){return r==null||typeof r=="boolean"?cr(oi):De(r)?cr(On,null,r.slice()):typeof r=="object"?bi(r):cr(Ra,null,String(r))}function bi(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Ni(r)}function Zc(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(De(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Zc(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Pa in e)?e._ctx=Ln:i===3&&Ln&&(Ln.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Ln},t=32):(e=String(e),n&64?(t=16,e=[N_(e)]):t=8);r.children=e,r.shapeFlag|=t}function O_(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=Dc([e.class,n.class]));else if(i==="style")e.style=Pc([e.style,n.style]);else if(ba(i)){const s=e[i],o=n[i];o&&s!==o&&!(De(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function In(r,e,t,n=null){bn(r,e,7,[t,n])}const F_=$d();let U_=0;function z_(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||F_,s={uid:U_++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new tg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qd(n,i),emitsOptions:Od(n,i),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:n.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Hg.bind(null,s),r.ce&&r.ce(s),s}let mt=null;const B_=()=>mt||Ln,is=r=>{mt=r,r.scope.on()},ur=()=>{mt&&mt.scope.off(),mt=null};function Qd(r){return r.vnode.shapeFlag&4}let io=!1;function k_(r,e=!1){io=e;const{props:t,children:n}=r.vnode,i=Qd(r);v_(r,t,i,e),b_(r,n);const s=i?V_(r,e):void 0;return io=!1,s}function V_(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=Ed(new Proxy(r.ctx,d_));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?H_(r):null;is(r),vs();const s=Li(n,r,0,[r.props,i]);if(ys(),ur(),ud(s)){if(s.then(ur,ur),e)return s.then(o=>{Zu(r,o,e)}).catch(o=>{Ea(o,r,0)});r.asyncDep=s}else Zu(r,s,e)}else ep(r,e)}function Zu(r,e,t){Oe(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:ct(e)&&(r.setupState=Ld(e)),ep(r,t)}let Ju;function ep(r,e,t){const n=r.type;if(!r.render){if(!e&&Ju&&!n.render){const i=n.template||Yc(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ut(Ut({isCustomElement:s,delimiters:a},o),l);n.render=Ju(i,c)}}r.render=n.render||Rn}is(r),vs(),p_(r),ys(),ur()}function G_(r){return new Proxy(r.attrs,{get(e,t){return Zt(r,"get","$attrs"),e[t]}})}function H_(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=G_(r))},slots:r.slots,emit:r.emit,expose:e}}function Jc(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Ld(Ed(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in js)return js[t](r)},has(e,t){return t in e||t in js}}))}function W_(r){return Oe(r)&&"__vccOpts"in r}const X_=(r,e)=>Fg(r,e,io),q_=Symbol(""),j_=()=>Qo(q_),Y_="3.2.47",K_="http://www.w3.org/2000/svg",nr=typeof document<"u"?document:null,Qu=nr&&nr.createElement("template"),$_={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?nr.createElementNS(K_,r):nr.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>nr.createTextNode(r),createComment:r=>nr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>nr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Qu.innerHTML=n?`<svg>${r}</svg>`:r;const a=Qu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Z_(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function J_(r,e,t){const n=r.style,i=Tt(t);if(t&&!i){if(e&&!Tt(e))for(const s in e)t[s]==null&&tc(n,s,"");for(const s in t)tc(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const ef=/\s*!important$/;function tc(r,e,t){if(De(t))t.forEach(n=>tc(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=Q_(r,e);ef.test(t)?r.setProperty(xs(n),t.replace(ef,""),"important"):r[n]=t}}const tf=["Webkit","Moz","ms"],$a={};function Q_(r,e){const t=$a[e];if(t)return t;let n=ts(e);if(n!=="filter"&&n in r)return $a[e]=n;n=dd(n);for(let i=0;i<tf.length;i++){const s=tf[i]+n;if(s in r)return $a[e]=s}return e}const nf="http://www.w3.org/1999/xlink";function e0(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(nf,e.slice(6,e.length)):r.setAttributeNS(nf,e,t);else{const s=qm(e);t==null||s&&!ad(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function t0(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t??"";return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=ad(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}function n0(r,e,t,n){r.addEventListener(e,t,n)}function i0(r,e,t,n){r.removeEventListener(e,t,n)}function r0(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=s0(e);if(n){const c=s[e]=l0(n,i);n0(r,a,c,l)}else o&&(i0(r,a,o,l),s[e]=void 0)}}const rf=/(?:Once|Passive|Capture)$/;function s0(r){let e;if(rf.test(r)){e={};let n;for(;n=r.match(rf);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):xs(r.slice(2)),e]}let Za=0;const o0=Promise.resolve(),a0=()=>Za||(o0.then(()=>Za=0),Za=Date.now());function l0(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;bn(c0(n,t.value),e,5,[n])};return t.value=r,t.attached=a0(),t}function c0(r,e){if(De(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const sf=/^on[a-z]/,u0=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?Z_(r,n,i):e==="style"?J_(r,t,n):ba(e)?Ic(e)||r0(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f0(r,e,n,i))?t0(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),e0(r,e,n,i))};function f0(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&sf.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||sf.test(e)&&Tt(t)?!1:e in r}const h0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};t_.props;const d0=Ut({patchProp:u0},$_);let of;function p0(){return of||(of=E_(d0))}const m0=(...r)=>{const e=p0().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=g0(n);if(!i)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function g0(r){return Tt(r)?document.querySelector(r):r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qc="149",_0=0,af=1,x0=2,tp=1,v0=2,Gs=3,ui=0,on=1,ii=2,Ri=0,Kr=1,lf=2,cf=3,uf=4,y0=5,kr=100,M0=101,b0=102,ff=103,hf=104,S0=200,w0=201,T0=202,E0=203,np=204,ip=205,A0=206,C0=207,L0=208,R0=209,P0=210,D0=0,I0=1,N0=2,nc=3,O0=4,F0=5,U0=6,z0=7,rp=0,B0=1,k0=2,ai=0,V0=1,G0=2,H0=3,sp=4,W0=5,op=300,rs=301,ss=302,ic=303,rc=304,Da=306,os=1e3,gn=1001,ha=1002,wt=1003,sc=1004,na=1005,jt=1006,ap=1007,gr=1008,_r=1009,X0=1010,q0=1011,lp=1012,j0=1013,rr=1014,wi=1015,ro=1016,Y0=1017,K0=1018,$r=1020,$0=1021,_n=1023,Z0=1024,J0=1025,fr=1026,as=1027,Q0=1028,ex=1029,tx=1030,nx=1031,ix=1033,Ja=33776,Qa=33777,el=33778,tl=33779,df=35840,pf=35841,mf=35842,gf=35843,rx=36196,_f=37492,xf=37496,vf=37808,yf=37809,Mf=37810,bf=37811,Sf=37812,wf=37813,Tf=37814,Ef=37815,Af=37816,Cf=37817,Lf=37818,Rf=37819,Pf=37820,Df=37821,nl=36492,sx=36283,If=36284,Nf=36285,Of=36286,so=2300,ls=2301,il=2302,Ff=2400,Uf=2401,zf=2402,ox=2500,ax=0,cp=1,oc=2,xr=3e3,Ye=3001,lx=3200,cx=3201,up=0,ux=1,Nn="srgb",oo="srgb-linear",rl=7680,fx=519,ac=35044,Bf="300 es",lc=1035;class Ms{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kf=1234567;const Ys=Math.PI/180,ao=180/Math.PI;function Pn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[r&255]+Rt[r>>8&255]+Rt[r>>16&255]+Rt[r>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function Ht(r,e,t){return Math.max(e,Math.min(t,r))}function eu(r,e){return(r%e+e)%e}function hx(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function dx(r,e,t){return r!==e?(t-r)/(e-r):0}function Ks(r,e,t){return(1-t)*r+t*e}function px(r,e,t,n){return Ks(r,e,1-Math.exp(-t*n))}function mx(r,e=1){return e-Math.abs(eu(r,e*2)-e)}function _x(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function xx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function yx(r,e){return r+Math.random()*(e-r)}function Mx(r){return r*(.5-Math.random())}function bx(r){r!==void 0&&(kf=r);let e=kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sx(r){return r*Ys}function wx(r){return r*ao}function cc(r){return(r&r-1)===0&&r!==0}function fp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function da(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Tx(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*f,l*h,a*c);break;case"YZY":r.set(l*h,a*u,l*f,a*c);break;case"ZXZ":r.set(l*f,l*h,a*u,a*c);break;case"XZX":r.set(a*u,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*u,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ri(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ex=Object.freeze({__proto__:null,DEG2RAD:Ys,RAD2DEG:ao,ceilPowerOfTwo:fp,clamp:Ht,damp:px,degToRad:Sx,denormalize:ri,euclideanModulo:eu,floorPowerOfTwo:da,generateUUID:Pn,inverseLerp:dx,isPowerOfTwo:cc,lerp:Ks,mapLinear:hx,normalize:et,pingpong:mx,radToDeg:wx,randFloat:yx,randFloatSpread:Mx,randInt:vx,seededRandom:bx,setQuaternionFromProperEuler:Tx,smootherstep:xx,smoothstep:_x});class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sn{constructor(){sn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],M=i[1],x=i[4],y=i[7],S=i[2],C=i[5],L=i[8];return s[0]=o*d+a*M+l*S,s[3]=o*m+a*x+l*C,s[6]=o*_+a*y+l*L,s[1]=c*d+u*M+f*S,s[4]=c*m+u*x+f*C,s[7]=c*_+u*y+f*L,s[2]=h*d+p*M+g*S,s[5]=h*m+p*x+g*C,s[8]=h*_+p*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=t*f+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=f*d,e[1]=(i*c-u*n)*d,e[2]=(a*n-i*o)*d,e[3]=h*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sl.makeScale(e,t)),this}rotate(e){return this.premultiply(sl.makeRotation(-e)),this}translate(e,t){return this.premultiply(sl.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new sn;function hp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ol={[Nn]:{[oo]:hr},[oo]:{[Nn]:ia}},Bt={legacyMode:!0,get workingColorSpace(){return oo},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(ol[e]&&ol[e][t]!==void 0){const n=ol[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gt={r:0,g:0,b:0},wn={h:0,s:0,l:0},Co={h:0,s:0,l:0};function al(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Lo(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Bt.workingColorSpace){if(e=eu(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=al(o,s,e+1/3),this.g=al(o,s,e),this.b=al(o,s,e-1/3)}return Bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Bt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Bt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Bt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Bt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nn){const n=dp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return Bt.fromWorkingColorSpace(Lo(this,gt),e),Ht(gt.r*255,0,255)<<16^Ht(gt.g*255,0,255)<<8^Ht(gt.b*255,0,255)<<0}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.fromWorkingColorSpace(Lo(this,gt),t);const n=gt.r,i=gt.g,s=gt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Bt.workingColorSpace){return Bt.fromWorkingColorSpace(Lo(this,gt),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Nn){return Bt.fromWorkingColorSpace(Lo(this,gt),e),e!==Nn?`color(${e} ${gt.r} ${gt.g} ${gt.b})`:`rgb(${gt.r*255|0},${gt.g*255|0},${gt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(wn),wn.h+=e,wn.s+=t,wn.l+=n,this.setHSL(wn.h,wn.s,wn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(Co);const n=Ks(wn.h,Co.h,t),i=Ks(wn.s,Co.s,t),s=Ks(wn.l,Co.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Fe.NAMES=dp;let Tr;class pp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=lo("canvas")),Tr.width=e.width,Tr.height=e.height;const n=Tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=hr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hr(t[n]/255)*255):t[n]=hr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class mp{constructor(e=null){this.isSource=!0,this.uuid=Pn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ll(i[o].image)):s.push(ll(i[o]))}else s=ll(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ll(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ax=0;class Ct extends Ms{constructor(e=Ct.DEFAULT_IMAGE,t=Ct.DEFAULT_MAPPING,n=gn,i=gn,s=jt,o=gr,a=_n,l=_r,c=Ct.DEFAULT_ANISOTROPY,u=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Pn(),this.name="",this.source=new mp(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new sn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case ha:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case ha:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ct.DEFAULT_IMAGE=null;Ct.DEFAULT_MAPPING=op;Ct.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,i=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,S=(_+1)/2,C=(u+h)/4,L=(f+d)/4,v=(g+m)/4;return x>y&&x>S?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=C/n,s=L/n):y>S?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=C/i,s=v/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=L/s,i=v/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-d)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vr extends Ms{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Ct(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:jt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gp extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cx extends Ct{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=wt,this.minFilter=wt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(f!==d||l!==h||c!==p||u!==g){let m=1-a;const _=l*h+c*p+u*g+f*d,M=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const S=Math.sqrt(x),C=Math.atan2(S,_*M);m=Math.sin(m*C)/S,a=Math.sin(a*C)/S}const y=a*M;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+d*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-a*p,e[t+2]=c*g+u*p+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cl=new F,Vf=new Ui;class bs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<n&&(n=f),h<i&&(i=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Xi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xi)}else n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox),ul.applyMatrix4(e.matrixWorld),this.union(ul);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ls),Ro.subVectors(this.max,Ls),Er.subVectors(e.a,Ls),Ar.subVectors(e.b,Ls),Cr.subVectors(e.c,Ls),mi.subVectors(Ar,Er),gi.subVectors(Cr,Ar),qi.subVectors(Er,Cr);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-qi.z,qi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,qi.z,0,-qi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-qi.y,qi.x,0];return!fl(t,Er,Ar,Cr,Ro)||(t=[1,0,0,0,1,0,0,0,1],!fl(t,Er,Ar,Cr,Ro))?!1:(Po.crossVectors(mi,gi),t=[Po.x,Po.y,Po.z],fl(t,Er,Ar,Cr,Ro))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Xi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new F,new F,new F,new F,new F,new F,new F,new F],Xi=new F,ul=new bs,Er=new F,Ar=new F,Cr=new F,mi=new F,gi=new F,qi=new F,Ls=new F,Ro=new F,Po=new F,ji=new F;function fl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ji.fromArray(r,s);const a=i.x*Math.abs(ji.x)+i.y*Math.abs(ji.y)+i.z*Math.abs(ji.z),l=e.dot(ji),c=t.dot(ji),u=n.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lx=new bs,Rs=new F,hl=new F;class Ss{constructor(e=new F,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Lx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(hl)),this.expandByPoint(Rs.copy(e.center).sub(hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new F,dl=new F,Do=new F,_i=new F,pl=new F,Io=new F,ml=new F;class tu{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.direction).multiplyScalar(t).add(this.origin),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dl.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),_i.copy(this.origin).sub(dl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Do),a=_i.dot(this.direction),l=-_i.dot(Do),c=_i.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const d=1/u;f*=d,h*=d,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Do).multiplyScalar(h).add(dl),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,i,s){pl.subVectors(t,e),Io.subVectors(n,e),ml.crossVectors(pl,Io);let o=this.direction.dot(ml),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);const l=a*this.direction.dot(Io.crossVectors(_i,Io));if(l<0)return null;const c=a*this.direction.dot(pl.cross(_i));if(c<0||l+c>o)return null;const u=-a*_i.dot(ml);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),o=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-d*c,t[9]=-a*l,t[2]=d-h*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,d=c*f;t[0]=h-d*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,d=a*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-h*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-d*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rx,e,Px)}lookAt(e,t,n){const i=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),xi.crossVectors(n,en),xi.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),xi.crossVectors(n,en)),xi.normalize(),No.crossVectors(en,xi),i[0]=xi.x,i[4]=No.x,i[8]=en.x,i[1]=xi.y,i[5]=No.y,i[9]=en.y,i[2]=xi.z,i[6]=No.z,i[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],M=n[3],x=n[7],y=n[11],S=n[15],C=i[0],L=i[4],v=i[8],w=i[12],P=i[1],V=i[5],j=i[9],D=i[13],I=i[2],G=i[6],Y=i[10],X=i[14],z=i[3],se=i[7],oe=i[11],_e=i[15];return s[0]=o*C+a*P+l*I+c*z,s[4]=o*L+a*V+l*G+c*se,s[8]=o*v+a*j+l*Y+c*oe,s[12]=o*w+a*D+l*X+c*_e,s[1]=u*C+f*P+h*I+p*z,s[5]=u*L+f*V+h*G+p*se,s[9]=u*v+f*j+h*Y+p*oe,s[13]=u*w+f*D+h*X+p*_e,s[2]=g*C+d*P+m*I+_*z,s[6]=g*L+d*V+m*G+_*se,s[10]=g*v+d*j+m*Y+_*oe,s[14]=g*w+d*D+m*X+_*_e,s[3]=M*C+x*P+y*I+S*z,s[7]=M*L+x*V+y*G+S*se,s[11]=M*v+x*j+y*Y+S*oe,s[15]=M*w+x*D+y*X+S*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*p-n*l*p)+d*(+t*l*p-t*c*h+s*o*h-i*o*p+i*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+_*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],M=f*m*c-d*h*c+d*l*p-a*m*p-f*l*_+a*h*_,x=g*h*c-u*m*c-g*l*p+o*m*p+u*l*_-o*h*_,y=u*d*c-g*f*c+g*a*p-o*d*p-u*a*_+o*f*_,S=g*f*l-u*d*l-g*a*h+o*d*h+u*a*m-o*f*m,C=t*M+n*x+i*y+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return e[0]=M*L,e[1]=(d*h*s-f*m*s-d*i*p+n*m*p+f*i*_-n*h*_)*L,e[2]=(a*m*s-d*l*s+d*i*c-n*m*c-a*i*_+n*l*_)*L,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*p-n*l*p)*L,e[4]=x*L,e[5]=(u*m*s-g*h*s+g*i*p-t*m*p-u*i*_+t*h*_)*L,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*_-t*l*_)*L,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*p+t*l*p)*L,e[8]=y*L,e[9]=(g*f*s-u*d*s-g*n*p+t*d*p+u*n*_-t*f*_)*L,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*L,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*p-t*a*p)*L,e[12]=S*L,e[13]=(u*d*i-g*f*i+g*n*h-t*d*h-u*n*m+t*f*m)*L,e[14]=(g*a*i-o*d*i-g*n*l+t*d*l+o*n*m-t*a*m)*L,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,d=o*u,m=o*f,_=a*f,M=l*c,x=l*u,y=l*f,S=n.x,C=n.y,L=n.z;return i[0]=(1-(d+_))*S,i[1]=(p+y)*S,i[2]=(g-x)*S,i[3]=0,i[4]=(p-y)*C,i[5]=(1-(h+_))*C,i[6]=(m+M)*C,i[7]=0,i[8]=(g+x)*L,i[9]=(m-M)*L,i[10]=(1-(h+d))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Lr.set(i[0],i[1],i[2]).length();const o=Lr.set(i[4],i[5],i[6]).length(),a=Lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Tn.copy(this);const c=1/s,u=1/o,f=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Lr=new F,Tn=new ze,Rx=new F(0,0,0),Px=new F(1,1,1),xi=new F,No=new F,en=new F,Gf=new ze,Hf=new Ui;class Ia{constructor(e=0,t=0,n=0,i=Ia.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hf.setFromEuler(this),this.setFromQuaternion(Hf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ia.DEFAULT_ORDER="XYZ";class _p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Dx=0;const Wf=new F,Rr=new Ui,Kn=new ze,Oo=new F,Ps=new F,Ix=new F,Nx=new Ui,Xf=new F(1,0,0),qf=new F(0,1,0),jf=new F(0,0,1),Ox={type:"added"},Yf={type:"removed"};class at extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new F,t=new Ia,n=new Ui,i=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new sn}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new _p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Xf,e)}rotateY(e){return this.rotateOnAxis(qf,e)}rotateZ(e){return this.rotateOnAxis(jf,e)}translateOnAxis(e,t){return Wf.copy(e).applyQuaternion(this.quaternion),this.position.add(Wf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xf,e)}translateY(e){return this.translateOnAxis(qf,e)}translateZ(e){return this.translateOnAxis(jf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oo.copy(e):Oo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Ps,Oo,this.up):Kn.lookAt(Oo,Ps,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),Rr.setFromRotationMatrix(Kn),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ox)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new F(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new F,$n=new F,gl=new F,Zn=new F,Pr=new F,Dr=new F,Kf=new F,_l=new F,xl=new F,vl=new F;class ni{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),En.subVectors(e,t),i.cross(En);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){En.subVectors(i,t),$n.subVectors(n,t),gl.subVectors(e,t);const o=En.dot(En),a=En.dot($n),l=En.dot(gl),c=$n.dot($n),u=$n.dot(gl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Zn),Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Zn),l.set(0,0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l}static isFrontFacing(e,t,n,i){return En.subVectors(n,t),$n.subVectors(e,t),En.cross($n).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),En.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ni.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ni.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Pr.subVectors(i,n),Dr.subVectors(s,n),_l.subVectors(e,n);const l=Pr.dot(_l),c=Dr.dot(_l);if(l<=0&&c<=0)return t.copy(n);xl.subVectors(e,i);const u=Pr.dot(xl),f=Dr.dot(xl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Pr,o);vl.subVectors(e,s);const p=Pr.dot(vl),g=Dr.dot(vl);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Dr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Kf.subVectors(s,i),a=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(Kf,a);const _=1/(m+d+h);return o=d*_,a=h*_,t.copy(n).addScaledVector(Pr,o).addScaledVector(Dr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Fx=0;class kn extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=Kr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=np,this.blendDst=ip,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rl,this.stencilZFail=rl,this.stencilZPass=rl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sr extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new F,Fo=new Xe;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ac,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fo.fromBufferAttribute(this,t),Fo.applyMatrix3(e),this.setXY(t,Fo.x,Fo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ac&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class xp extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vp extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class li extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ux=0;const hn=new ze,yl=new at,Ir=new F,tn=new bs,Ds=new bs,St=new F;class Hn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hp(e)?vp:xp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new sn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,t,n){return hn.makeTranslation(e,t,n),this.applyMatrix4(hn),this}scale(e,t,n){return hn.makeScale(e,t,n),this.applyMatrix4(hn),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new li(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(tn.min,Ds.min),tn.expandByPoint(St),St.addVectors(tn.max,Ds.max),tn.expandByPoint(St)):(tn.expandByPoint(Ds.min),tn.expandByPoint(Ds.max))}tn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)St.fromBufferAttribute(a,c),l&&(Ir.fromBufferAttribute(e,c),St.add(Ir)),i=Math.max(i,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let P=0;P<a;P++)c[P]=new F,u[P]=new F;const f=new F,h=new F,p=new F,g=new Xe,d=new Xe,m=new Xe,_=new F,M=new F;function x(P,V,j){f.fromArray(i,P*3),h.fromArray(i,V*3),p.fromArray(i,j*3),g.fromArray(o,P*2),d.fromArray(o,V*2),m.fromArray(o,j*2),h.sub(f),p.sub(f),d.sub(g),m.sub(g);const D=1/(d.x*m.y-m.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(D),M.copy(p).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(D),c[P].add(_),c[V].add(_),c[j].add(_),u[P].add(M),u[V].add(M),u[j].add(M))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let P=0,V=y.length;P<V;++P){const j=y[P],D=j.start,I=j.count;for(let G=D,Y=D+I;G<Y;G+=3)x(n[G+0],n[G+1],n[G+2])}const S=new F,C=new F,L=new F,v=new F;function w(P){L.fromArray(s,P*3),v.copy(L);const V=c[P];S.copy(V),S.sub(L.multiplyScalar(L.dot(V))).normalize(),C.crossVectors(v,V);const D=C.dot(u[P])<0?-1:1;l[P*4]=S.x,l[P*4+1]=S.y,l[P*4+2]=S.z,l[P*4+3]=D}for(let P=0,V=y.length;P<V;++P){const j=y[P],D=j.start,I=j.count;for(let G=D,Y=D+I;G<Y;G+=3)w(n[G+0]),w(n[G+1]),w(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new F,s=new F,o=new F,a=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)h[g++]=c[p++]}return new Xt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const $f=new ze,Nr=new tu,Ml=new Ss,Is=new F,Ns=new F,Os=new F,bl=new F,Uo=new F,zo=new Xe,Bo=new Xe,ko=new Xe,Sl=new F,Vo=new F;class xn extends at{constructor(e=new Hn,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Uo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(bl.fromBufferAttribute(f,e),o?Uo.addScaledVector(bl,u):Uo.addScaledVector(bl.sub(t),u))}t.add(Uo)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ml.copy(n.boundingSphere),Ml.applyMatrix4(s),e.ray.intersectsSphere(Ml)===!1)||($f.copy(s).invert(),Nr.copy(e.ray).applyMatrix4($f),n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=i[d.materialIndex],_=Math.max(d.start,h.start),M=Math.min(a.count,Math.min(d.start+d.count,h.start+h.count));for(let x=_,y=M;x<y;x+=3){const S=a.getX(x),C=a.getX(x+1),L=a.getX(x+2);o=Go(this,m,e,Nr,c,u,S,C,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),M=a.getX(d+1),x=a.getX(d+2);o=Go(this,i,e,Nr,c,u,_,M,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=f.length;p<g;p++){const d=f[p],m=i[d.materialIndex],_=Math.max(d.start,h.start),M=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let x=_,y=M;x<y;x+=3){const S=x,C=x+1,L=x+2;o=Go(this,m,e,Nr,c,u,S,C,L),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let d=p,m=g;d<m;d+=3){const _=d,M=d+1,x=d+2;o=Go(this,i,e,Nr,c,u,_,M,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function zx(r,e,t,n,i,s,o,a){let l;if(e.side===on?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===ui,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Vo);return c<t.near||c>t.far?null:{distance:c,point:Vo.clone(),object:r}}function Go(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Is),r.getVertexPosition(a,Ns),r.getVertexPosition(l,Os);const c=zx(r,e,t,n,Is,Ns,Os,Sl);if(c){i&&(zo.fromBufferAttribute(i,o),Bo.fromBufferAttribute(i,a),ko.fromBufferAttribute(i,l),c.uv=ni.getUV(Sl,Is,Ns,Os,zo,Bo,ko,new Xe)),s&&(zo.fromBufferAttribute(s,o),Bo.fromBufferAttribute(s,a),ko.fromBufferAttribute(s,l),c.uv2=ni.getUV(Sl,Is,Ns,Os,zo,Bo,ko,new Xe));const u={a:o,b:a,c:l,normal:new F,materialIndex:0};ni.getNormal(Is,Ns,Os,u.normal),c.face=u}return c}class xo extends Hn{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(f,2));function g(d,m,_,M,x,y,S,C,L,v,w){const P=y/L,V=S/v,j=y/2,D=S/2,I=C/2,G=L+1,Y=v+1;let X=0,z=0;const se=new F;for(let oe=0;oe<Y;oe++){const _e=oe*V-D;for(let B=0;B<G;B++){const ie=B*P-j;se[d]=ie*M,se[m]=_e*x,se[_]=I,c.push(se.x,se.y,se.z),se[d]=0,se[m]=0,se[_]=C>0?1:-1,u.push(se.x,se.y,se.z),f.push(B/L),f.push(1-oe/v),X+=1}}for(let oe=0;oe<v;oe++)for(let _e=0;_e<L;_e++){const B=h+_e+G*oe,ie=h+_e+G*(oe+1),de=h+(_e+1)+G*(oe+1),pe=h+(_e+1)+G*oe;l.push(B,ie,pe),l.push(ie,de,pe),z+=6}a.addGroup(p,z,w),p+=z,h+=X}}static fromJSON(e){return new xo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Gt(r){const e={};for(let t=0;t<r.length;t++){const n=cs(r[t]);for(const i in n)e[i]=n[i]}return e}function Bx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function yp(r){return r.getRenderTarget()===null&&r.outputEncoding===Ye?Nn:oo}const kx={clone:cs,merge:Gt};var Vx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vx,this.fragmentShader=Gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cs(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Mp extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Mp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ao*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ao*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ys*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Or=-90,Fr=1;class Hx extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Wt(Or,Fr,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Wt(Or,Fr,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Wt(Or,Fr,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Wt(Or,Fr,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Wt(Or,Fr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Wt(Or,Fr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=ai,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class bp extends Ct{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:rs,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wx extends vr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new bp(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xo(5,5,5),s=new yr({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ri});s.uniforms.tEquirect.value=t;const o=new xn(i,s),a=t.minFilter;return t.minFilter===gr&&(t.minFilter=jt),new Hx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const wl=new F,Xx=new F,qx=new sn;class Zi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wl.subVectors(n,t).cross(Xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(wl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qx.getNormalMatrix(e),i=this.coplanarPoint(wl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new Ss,Ho=new F;class nu{constructor(e=new Zi,t=new Zi,n=new Zi,i=new Zi,s=new Zi,o=new Zi){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],M=n[14],x=n[15];return t[0].setComponents(a-i,f-l,d-h,x-m).normalize(),t[1].setComponents(a+i,f+l,d+h,x+m).normalize(),t[2].setComponents(a+s,f+c,d+p,x+_).normalize(),t[3].setComponents(a-s,f-c,d-p,x-_).normalize(),t[4].setComponents(a-o,f-u,d-g,x-M).normalize(),t[5].setComponents(a+o,f+u,d+g,x+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSprite(e){return Ur.center.set(0,0,0),Ur.radius=.7071067811865476,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ho.x=i.normal.x>0?e.max.x:e.min.x,Ho.y=i.normal.y>0?e.max.y:e.min.y,Ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sp(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function jx(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;r.bindBuffer(f,c),p.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class iu extends Hn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const M=_*h-o;for(let x=0;x<c;x++){const y=x*f-s;g.push(y,-M,0),d.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){const x=M+c*_,y=M+c*(_+1),S=M+1+c*(_+1),C=M+1+c*_;p.push(x,y,C),p.push(y,S,C)}this.setIndex(p),this.setAttribute("position",new li(g,3)),this.setAttribute("normal",new li(d,3)),this.setAttribute("uv",new li(m,2))}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$x=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ev="vec3 transformed = vec3( position );",tv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nv=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,iv=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,rv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dv=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,pv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bv=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Sv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wv=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ev=`#ifdef USE_ENVMAP
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
#endif`,Av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pv=`#ifdef USE_GRADIENTMAP
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
}`,Dv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Uv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Hv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Wv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ey=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ty=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ny=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,iy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,oy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ly=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,py=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,my=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,_y=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,yy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,My=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,by=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ty=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ey=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ay=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ly=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ry=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Py=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Dy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Iy=`#ifdef USE_SKINNING
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
#endif`,Ny=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,By=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ky=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Vy=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gy=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Hy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Wy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xy=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yy=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,Ky=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$y=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qy=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,eM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,nM=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aM=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,uM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,hM=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,pM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,gM=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,xM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,yM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,bM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,TM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,EM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ie={alphamap_fragment:Yx,alphamap_pars_fragment:Kx,alphatest_fragment:$x,alphatest_pars_fragment:Zx,aomap_fragment:Jx,aomap_pars_fragment:Qx,begin_vertex:ev,beginnormal_vertex:tv,bsdfs:nv,iridescence_fragment:iv,bumpmap_pars_fragment:rv,clipping_planes_fragment:sv,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:av,clipping_planes_vertex:lv,color_fragment:cv,color_pars_fragment:uv,color_pars_vertex:fv,color_vertex:hv,common:dv,cube_uv_reflection_fragment:pv,defaultnormal_vertex:mv,displacementmap_pars_vertex:gv,displacementmap_vertex:_v,emissivemap_fragment:xv,emissivemap_pars_fragment:vv,encodings_fragment:yv,encodings_pars_fragment:Mv,envmap_fragment:bv,envmap_common_pars_fragment:Sv,envmap_pars_fragment:wv,envmap_pars_vertex:Tv,envmap_physical_pars_fragment:Uv,envmap_vertex:Ev,fog_vertex:Av,fog_pars_vertex:Cv,fog_fragment:Lv,fog_pars_fragment:Rv,gradientmap_pars_fragment:Pv,lightmap_fragment:Dv,lightmap_pars_fragment:Iv,lights_lambert_fragment:Nv,lights_lambert_pars_fragment:Ov,lights_pars_begin:Fv,lights_toon_fragment:zv,lights_toon_pars_fragment:Bv,lights_phong_fragment:kv,lights_phong_pars_fragment:Vv,lights_physical_fragment:Gv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Wv,lights_fragment_maps:Xv,lights_fragment_end:qv,logdepthbuf_fragment:jv,logdepthbuf_pars_fragment:Yv,logdepthbuf_pars_vertex:Kv,logdepthbuf_vertex:$v,map_fragment:Zv,map_pars_fragment:Jv,map_particle_fragment:Qv,map_particle_pars_fragment:ey,metalnessmap_fragment:ty,metalnessmap_pars_fragment:ny,morphcolor_vertex:iy,morphnormal_vertex:ry,morphtarget_pars_vertex:sy,morphtarget_vertex:oy,normal_fragment_begin:ay,normal_fragment_maps:ly,normal_pars_fragment:cy,normal_pars_vertex:uy,normal_vertex:fy,normalmap_pars_fragment:hy,clearcoat_normal_fragment_begin:dy,clearcoat_normal_fragment_maps:py,clearcoat_pars_fragment:my,iridescence_pars_fragment:_y,output_fragment:xy,packing:vy,premultiplied_alpha_fragment:yy,project_vertex:My,dithering_fragment:by,dithering_pars_fragment:Sy,roughnessmap_fragment:wy,roughnessmap_pars_fragment:Ty,shadowmap_pars_fragment:Ey,shadowmap_pars_vertex:Ay,shadowmap_vertex:Cy,shadowmask_pars_fragment:Ly,skinbase_vertex:Ry,skinning_pars_vertex:Py,skinning_vertex:Dy,skinnormal_vertex:Iy,specularmap_fragment:Ny,specularmap_pars_fragment:Oy,tonemapping_fragment:Fy,tonemapping_pars_fragment:Uy,transmission_fragment:zy,transmission_pars_fragment:By,uv_pars_fragment:ky,uv_pars_vertex:Vy,uv_vertex:Gy,uv2_pars_fragment:Hy,uv2_pars_vertex:Wy,uv2_vertex:Xy,worldpos_vertex:qy,background_vert:jy,background_frag:Yy,backgroundCube_vert:Ky,backgroundCube_frag:$y,cube_vert:Zy,cube_frag:Jy,depth_vert:Qy,depth_frag:eM,distanceRGBA_vert:tM,distanceRGBA_frag:nM,equirect_vert:iM,equirect_frag:rM,linedashed_vert:sM,linedashed_frag:oM,meshbasic_vert:aM,meshbasic_frag:lM,meshlambert_vert:cM,meshlambert_frag:uM,meshmatcap_vert:fM,meshmatcap_frag:hM,meshnormal_vert:dM,meshnormal_frag:pM,meshphong_vert:mM,meshphong_frag:gM,meshphysical_vert:_M,meshphysical_frag:xM,meshtoon_vert:vM,meshtoon_frag:yM,points_vert:MM,points_frag:bM,shadow_vert:SM,shadow_frag:wM,sprite_vert:TM,sprite_frag:EM},me={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new sn},uv2Transform:{value:new sn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new sn}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new sn}}},Un={basic:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:Gt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:Gt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:Gt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:Gt([me.points,me.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:Gt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:Gt([me.common,me.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:Gt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:Gt([me.sprite,me.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new sn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:Gt([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:Gt([me.lights,me.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Un.physical={uniforms:Gt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Wo={r:0,b:0,g:0};function AM(r,e,t,n,i,s,o){const a=new Fe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,_){let M=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const y=r.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),M=!0),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Da)?(u===void 0&&(u=new xn(new xo(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:cs(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,L,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==Ye,(f!==x||h!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new xn(new iu(2,2),new yr({name:"BackgroundMaterial",uniforms:cs(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==Ye,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(Wo,yp(r)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function CM(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(I,G,Y,X,z){let se=!1;if(o){const oe=d(X,Y,G);c!==oe&&(c=oe,p(c.object)),se=_(I,X,Y,z),se&&M(I,X,Y,z)}else{const oe=G.wireframe===!0;(c.geometry!==X.id||c.program!==Y.id||c.wireframe!==oe)&&(c.geometry=X.id,c.program=Y.id,c.wireframe=oe,se=!0)}z!==null&&t.update(z,34963),(se||u)&&(u=!1,v(I,G,Y,X),z!==null&&r.bindBuffer(34963,t.get(z).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function d(I,G,Y){const X=Y.wireframe===!0;let z=a[I.id];z===void 0&&(z={},a[I.id]=z);let se=z[G.id];se===void 0&&(se={},z[G.id]=se);let oe=se[X];return oe===void 0&&(oe=m(h()),se[X]=oe),oe}function m(I){const G=[],Y=[],X=[];for(let z=0;z<i;z++)G[z]=0,Y[z]=0,X[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:X,object:I,attributes:{},index:null}}function _(I,G,Y,X){const z=c.attributes,se=G.attributes;let oe=0;const _e=Y.getAttributes();for(const B in _e)if(_e[B].location>=0){const de=z[B];let pe=se[B];if(pe===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(pe=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(pe=I.instanceColor)),de===void 0||de.attribute!==pe||pe&&de.data!==pe.data)return!0;oe++}return c.attributesNum!==oe||c.index!==X}function M(I,G,Y,X){const z={},se=G.attributes;let oe=0;const _e=Y.getAttributes();for(const B in _e)if(_e[B].location>=0){let de=se[B];de===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const pe={};pe.attribute=de,de&&de.data&&(pe.data=de.data),z[B]=pe,oe++}c.attributes=z,c.attributesNum=oe,c.index=X}function x(){const I=c.newAttributes;for(let G=0,Y=I.length;G<Y;G++)I[G]=0}function y(I){S(I,0)}function S(I,G){const Y=c.newAttributes,X=c.enabledAttributes,z=c.attributeDivisors;Y[I]=1,X[I]===0&&(r.enableVertexAttribArray(I),X[I]=1),z[I]!==G&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),z[I]=G)}function C(){const I=c.newAttributes,G=c.enabledAttributes;for(let Y=0,X=G.length;Y<X;Y++)G[Y]!==I[Y]&&(r.disableVertexAttribArray(Y),G[Y]=0)}function L(I,G,Y,X,z,se){n.isWebGL2===!0&&(Y===5124||Y===5125)?r.vertexAttribIPointer(I,G,Y,z,se):r.vertexAttribPointer(I,G,Y,X,z,se)}function v(I,G,Y,X){if(n.isWebGL2===!1&&(I.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const z=X.attributes,se=Y.getAttributes(),oe=G.defaultAttributeValues;for(const _e in se){const B=se[_e];if(B.location>=0){let ie=z[_e];if(ie===void 0&&(_e==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),_e==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){const de=ie.normalized,pe=ie.itemSize,H=t.get(ie);if(H===void 0)continue;const Le=H.buffer,Se=H.type,be=H.bytesPerElement;if(ie.isInterleavedBufferAttribute){const xe=ie.data,Ke=xe.stride,A=ie.offset;if(xe.isInstancedInterleavedBuffer){for(let R=0;R<B.locationSize;R++)S(B.location+R,xe.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let R=0;R<B.locationSize;R++)y(B.location+R);r.bindBuffer(34962,Le);for(let R=0;R<B.locationSize;R++)L(B.location+R,pe/B.locationSize,Se,de,Ke*be,(A+pe/B.locationSize*R)*be)}else{if(ie.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)S(B.location+xe,ie.meshPerAttribute);I.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe);r.bindBuffer(34962,Le);for(let xe=0;xe<B.locationSize;xe++)L(B.location+xe,pe/B.locationSize,Se,de,pe*be,pe/B.locationSize*xe*be)}}else if(oe!==void 0){const de=oe[_e];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(B.location,de);break;case 3:r.vertexAttrib3fv(B.location,de);break;case 4:r.vertexAttrib4fv(B.location,de);break;default:r.vertexAttrib1fv(B.location,de)}}}}C()}function w(){j();for(const I in a){const G=a[I];for(const Y in G){const X=G[Y];for(const z in X)g(X[z].object),delete X[z];delete G[Y]}delete a[I]}}function P(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const Y in G){const X=G[Y];for(const z in X)g(X[z].object),delete X[z];delete G[Y]}delete a[I.id]}function V(I){for(const G in a){const Y=a[G];if(Y[I.id]===void 0)continue;const X=Y[I.id];for(const z in X)g(X[z].object),delete X[z];delete Y[I.id]}}function j(){D(),u=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:y,disableUnusedAttributes:C}}function LM(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function RM(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),M=r.getParameter(36349),x=h>0,y=o||e.has("OES_texture_float"),S=x&&y,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:C}}function PM(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Zi,a=new sn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,d=f.clipIntersection,m=f.clipShadows,_=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,x=M*4;let y=_.clippingState||null;l.value=y,y=u(g,h,x,p);for(let S=0;S!==x;++S)y[S]=t[S];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const d=f!==null?f.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,y=p;x!==d;++x,y+=4)o.copy(f[x]).applyMatrix4(M,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function DM(r){let e=new WeakMap;function t(o,a){return a===ic?o.mapping=rs:a===rc&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ic||a===rc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wx(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ru extends Mp{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hr=4,Zf=[.125,.215,.35,.446,.526,.582],ir=20,Tl=new ru,Jf=new Fe;let El=null;const Ji=(1+Math.sqrt(5))/2,zr=1/Ji,Qf=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Ji,zr),new F(0,Ji,-zr),new F(zr,0,Ji),new F(-zr,0,Ji),new F(Ji,zr,0),new F(-Ji,zr,0)];class eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){El=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(El),e.scissorTest=!1,Xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),El=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:ro,format:_n,encoding:xr,depthBuffer:!1},i=th(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=th(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IM(s)),this._blurMaterial=NM(s,e,t)}return i}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,n,i){const a=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Jf),u.toneMapping=ai,u.autoClear=!1;const p=new sr({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new xn(new xo,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Jf),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;Xo(i,M*x,_>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===ss;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new xn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Qf[(i-1)%Qf.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new xn(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ir-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):ir;m>ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);const _=[];let M=0;for(let L=0;L<ir;++L){const v=L/d,w=Math.exp(-v*v/2);_.push(w),L===0?M+=w:L<m&&(M+=2*w)}for(let L=0;L<_.length;L++)_[L]=_[L]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const y=this._sizeLods[i],S=3*y*(i>x-Hr?i-x+Hr:0),C=4*(this._cubeSize-y);Xo(t,S,C,3*y,2*y),l.setRenderTarget(t),l.render(f,Tl)}}function IM(r){const e=[],t=[],n=[];let i=r;const s=r-Hr+1+Zf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Hr?l=Zf[o-r+Hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,d=3,m=2,_=1,M=new Float32Array(d*g*p),x=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let C=0;C<p;C++){const L=C%3*2/3-1,v=C>2?0:-1,w=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];M.set(w,d*g*C),x.set(h,m*g*C);const P=[C,C,C,C,C,C];y.set(P,_*g*C)}const S=new Hn;S.setAttribute("position",new Xt(M,d)),S.setAttribute("uv",new Xt(x,m)),S.setAttribute("faceIndex",new Xt(y,_)),e.push(S),i>Hr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function th(r,e,t){const n=new vr(r,e,t);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function NM(r,e,t){const n=new Float32Array(ir),i=new F(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:su(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function nh(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ih(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function OM(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ic||l===rc,u=l===rs||l===ss;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new eh(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new eh(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function FM(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function UM(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const p=f.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let d=0;if(p!==null){const M=p.array;d=p.version;for(let x=0,y=M.length;x<y;x+=3){const S=M[x+0],C=M[x+1],L=M[x+2];h.push(S,C,C,L,L,S)}}else{const M=g.array;d=g.version;for(let x=0,y=M.length/3-1;x<y;x+=3){const S=x+0,C=x+1,L=x+2;h.push(S,C,C,L,L,S)}}const m=new(hp(h)?vp:xp)(h,1);m.version=d;const _=s.get(f);_&&e.remove(_),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function zM(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(s,p,a,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let d,m;if(i)d=r,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,h*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function BM(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function kM(r,e){return r[0]-e[0]}function VM(r,e){return Math.abs(e[1])-Math.abs(r[1])}function GM(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new nt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f,h){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==m){let Y=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",Y)};var g=Y;_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let P=0;y===!0&&(P=1),S===!0&&(P=2),C===!0&&(P=3);let V=u.attributes.position.count*P,j=1;V>e.maxTextureSize&&(j=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const D=new Float32Array(V*j*4*m),I=new gp(D,V,j,m);I.type=wi,I.needsUpdate=!0;const G=P*4;for(let X=0;X<m;X++){const z=L[X],se=v[X],oe=w[X],_e=V*j*4*X;for(let B=0;B<z.count;B++){const ie=B*G;y===!0&&(o.fromBufferAttribute(z,B),D[_e+ie+0]=o.x,D[_e+ie+1]=o.y,D[_e+ie+2]=o.z,D[_e+ie+3]=0),S===!0&&(o.fromBufferAttribute(se,B),D[_e+ie+4]=o.x,D[_e+ie+5]=o.y,D[_e+ie+6]=o.z,D[_e+ie+7]=0),C===!0&&(o.fromBufferAttribute(oe,B),D[_e+ie+8]=o.x,D[_e+ie+9]=o.y,D[_e+ie+10]=o.z,D[_e+ie+11]=oe.itemSize===4?o.w:1)}}_={count:m,texture:I,size:new Xe(V,j)},s.set(u,_),u.addEventListener("dispose",Y)}let M=0;for(let y=0;y<p.length;y++)M+=p[y];const x=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",p),h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const d=p===void 0?0:p.length;let m=n[u.id];if(m===void 0||m.length!==d){m=[];for(let S=0;S<d;S++)m[S]=[S,0];n[u.id]=m}for(let S=0;S<d;S++){const C=m[S];C[0]=S,C[1]=p[S]}m.sort(VM);for(let S=0;S<8;S++)S<d&&m[S][1]?(a[S][0]=m[S][0],a[S][1]=m[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(kM);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let x=0;for(let S=0;S<8;S++){const C=a[S],L=C[0],v=C[1];L!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+S)!==_[L]&&u.setAttribute("morphTarget"+S,_[L]),M&&u.getAttribute("morphNormal"+S)!==M[L]&&u.setAttribute("morphNormal"+S,M[L]),i[S]=v,x+=v):(_&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),M&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const y=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function HM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const wp=new Ct,Tp=new gp,Ep=new Cx,Ap=new bp,rh=[],sh=[],oh=new Float32Array(16),ah=new Float32Array(9),lh=new Float32Array(4);function ws(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=rh[i];if(s===void 0&&(s=new Float32Array(i),rh[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function xt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function vt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Na(r,e){let t=sh[e];t===void 0&&(t=new Int32Array(e),sh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function WM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function XM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2fv(this.addr,e),vt(t,e)}}function qM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;r.uniform3fv(this.addr,e),vt(t,e)}}function jM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4fv(this.addr,e),vt(t,e)}}function YM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;lh.set(n),r.uniformMatrix2fv(this.addr,!1,lh),vt(t,n)}}function KM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;ah.set(n),r.uniformMatrix3fv(this.addr,!1,ah),vt(t,n)}}function $M(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(xt(t,n))return;oh.set(n),r.uniformMatrix4fv(this.addr,!1,oh),vt(t,n)}}function ZM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function JM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2iv(this.addr,e),vt(t,e)}}function QM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3iv(this.addr,e),vt(t,e)}}function eb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4iv(this.addr,e),vt(t,e)}}function tb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;r.uniform2uiv(this.addr,e),vt(t,e)}}function ib(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;r.uniform3uiv(this.addr,e),vt(t,e)}}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;r.uniform4uiv(this.addr,e),vt(t,e)}}function sb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||wp,i)}function ob(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ep,i)}function ab(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ap,i)}function lb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tp,i)}function cb(r){switch(r){case 5126:return WM;case 35664:return XM;case 35665:return qM;case 35666:return jM;case 35674:return YM;case 35675:return KM;case 35676:return $M;case 5124:case 35670:return ZM;case 35667:case 35671:return JM;case 35668:case 35672:return QM;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(r,e){r.uniform1fv(this.addr,e)}function fb(r,e){const t=ws(e,this.size,2);r.uniform2fv(this.addr,t)}function hb(r,e){const t=ws(e,this.size,3);r.uniform3fv(this.addr,t)}function db(r,e){const t=ws(e,this.size,4);r.uniform4fv(this.addr,t)}function pb(r,e){const t=ws(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function mb(r,e){const t=ws(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function gb(r,e){const t=ws(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function _b(r,e){r.uniform1iv(this.addr,e)}function xb(r,e){r.uniform2iv(this.addr,e)}function vb(r,e){r.uniform3iv(this.addr,e)}function yb(r,e){r.uniform4iv(this.addr,e)}function Mb(r,e){r.uniform1uiv(this.addr,e)}function bb(r,e){r.uniform2uiv(this.addr,e)}function Sb(r,e){r.uniform3uiv(this.addr,e)}function wb(r,e){r.uniform4uiv(this.addr,e)}function Tb(r,e,t){const n=this.cache,i=e.length,s=Na(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||wp,s[o])}function Eb(r,e,t){const n=this.cache,i=e.length,s=Na(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ep,s[o])}function Ab(r,e,t){const n=this.cache,i=e.length,s=Na(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Ap,s[o])}function Cb(r,e,t){const n=this.cache,i=e.length,s=Na(t,i);xt(n,s)||(r.uniform1iv(this.addr,s),vt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tp,s[o])}function Lb(r){switch(r){case 5126:return ub;case 35664:return fb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return _b;case 35667:case 35671:return xb;case 35668:case 35672:return vb;case 35669:case 35673:return yb;case 5125:return Mb;case 36294:return bb;case 36295:return Sb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Cb}}class Rb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=cb(t.type)}}class Pb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Lb(t.type)}}class Db{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function ch(r,e){r.seq.push(e),r.map[e.id]=e}function Ib(r,e,t){const n=r.name,i=n.length;for(Al.lastIndex=0;;){const s=Al.exec(n),o=Al.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ch(t,c===void 0?new Rb(a,r,e):new Pb(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Db(a),ch(t,f)),t=f}}}class ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Ib(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function uh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Nb=0;function Ob(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Fb(r){switch(r){case xr:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function fh(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Ob(r.getShaderSource(e),o)}else return i}function Ub(r,e){const t=Fb(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function zb(r,e){let t;switch(e){case V0:t="Linear";break;case G0:t="Reinhard";break;case H0:t="OptimizedCineon";break;case sp:t="ACESFilmic";break;case W0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Bb(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Hs).join(`
`)}function kb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vb(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Hs(r){return r!==""}function hh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(r){return r.replace(Gb,Hb)}function Hb(r,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return uc(t)}const Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ph(r){return r.replace(Wb,Xb)}function Xb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function mh(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qb(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tp?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===v0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gs&&(e="SHADOWMAP_TYPE_VSM"),e}function jb(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case rs:case ss:e="ENVMAP_TYPE_CUBE";break;case Da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yb(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function Kb(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case rp:e="ENVMAP_BLENDING_MULTIPLY";break;case B0:e="ENVMAP_BLENDING_MIX";break;case k0:e="ENVMAP_BLENDING_ADD";break}return e}function $b(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Zb(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qb(t),c=jb(t),u=Yb(t),f=Kb(t),h=$b(t),p=t.isWebGL2?"":Bb(t),g=kb(s),d=i.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Hs).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Hs).join(`
`),_.length>0&&(_+=`
`)):(m=[mh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hs).join(`
`),_=[p,mh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ie.tonemapping_pars_fragment:"",t.toneMapping!==ai?zb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,Ub("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hs).join(`
`)),o=uc(o),o=hh(o,t),o=dh(o,t),a=uc(a),a=hh(a,t),a=dh(a,t),o=ph(o),a=ph(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=M+m+o,y=M+_+a,S=uh(i,35633,x),C=uh(i,35632,y);if(i.attachShader(d,S),i.attachShader(d,C),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),P=i.getShaderInfoLog(S).trim(),V=i.getShaderInfoLog(C).trim();let j=!0,D=!0;if(i.getProgramParameter(d,35714)===!1){j=!1;const I=fh(i,S,"vertex"),G=fh(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+I+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(P===""||V==="")&&(D=!1);D&&(this.diagnostics={runnable:j,programLog:w,vertexShader:{log:P,prefix:m},fragmentShader:{log:V,prefix:_}})}i.deleteShader(S),i.deleteShader(C);let L;this.getUniforms=function(){return L===void 0&&(L=new ra(i,d)),L};let v;return this.getAttributes=function(){return v===void 0&&(v=Vb(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=C,this}let Jb=0;class Qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eS(e),t.set(e,n)),n}}class eS{constructor(e){this.id=Jb++,this.code=e,this.usedTimes=0}}function tS(r,e,t,n,i,s,o){const a=new _p,l=new Qb,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,w,P,V,j){const D=V.fog,I=j.geometry,G=v.isMeshStandardMaterial?V.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||G),X=Y&&Y.mapping===Da?Y.image.height:null,z=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const se=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,oe=se!==void 0?se.length:0;let _e=0;I.morphAttributes.position!==void 0&&(_e=1),I.morphAttributes.normal!==void 0&&(_e=2),I.morphAttributes.color!==void 0&&(_e=3);let B,ie,de,pe;if(z){const Ke=Un[z];B=Ke.vertexShader,ie=Ke.fragmentShader}else B=v.vertexShader,ie=v.fragmentShader,l.update(v),de=l.getVertexShaderID(v),pe=l.getFragmentShaderID(v);const H=r.getRenderTarget(),Le=v.alphaTest>0,Se=v.clearcoat>0,be=v.iridescence>0;return{isWebGL2:u,shaderID:z,shaderName:v.type,vertexShader:B,fragmentShader:ie,defines:v.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:h,outputEncoding:H===null?r.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:xr,map:!!v.map,matcap:!!v.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:X,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===ux,tangentSpaceNormalMap:v.normalMapType===up,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ye,clearcoat:Se,clearcoatMap:Se&&!!v.clearcoatMap,clearcoatRoughnessMap:Se&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Se&&!!v.clearcoatNormalMap,iridescence:be,iridescenceMap:be&&!!v.iridescenceMap,iridescenceThicknessMap:be&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Kr,alphaMap:!!v.alphaMap,alphaTest:Le,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!I.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!D,useFog:v.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:_e,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:ai,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ii,flipSided:v.side===on,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)w.push(P),w.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(_(w,v),M(w,v),w.push(r.outputEncoding)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputEncoding),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.combine),v.push(w.vertexUvs),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),v.push(a.mask)}function x(v){const w=g[v.type];let P;if(w){const V=Un[w];P=kx.clone(V.uniforms)}else P=v.uniforms;return P}function y(v,w){let P;for(let V=0,j=c.length;V<j;V++){const D=c[V];if(D.cacheKey===w){P=D,++P.usedTimes;break}}return P===void 0&&(P=new Zb(r,w,v,s),c.push(P)),P}function S(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),v.destroy()}}function C(v){l.remove(v)}function L(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:S,releaseShaderCache:C,programs:c,dispose:L}}function nS(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function iS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _h(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,p,g,d,m){let _=r[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:d,group:m},r[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=p,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=d,_.group=m),e++,_}function a(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(f,h,p,g,d,m){const _=o(f,h,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||iS),n.length>1&&n.sort(h||gh),i.length>1&&i.sort(h||gh)}function u(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function rS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new _h,r.set(n,[o])):i>=s.length?(o=new _h,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function sS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Fe};break;case"SpotLight":t={position:new F,direction:new F,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new F,halfWidth:new F,halfHeight:new F};break}return r[e.id]=t,t}}}function oS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let aS=0;function lS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function cS(r,e){const t=new sS,n=oS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const s=new F,o=new ze,a=new ze;function l(u,f){let h=0,p=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let d=0,m=0,_=0,M=0,x=0,y=0,S=0,C=0,L=0,v=0;u.sort(lS);const w=f!==!0?Math.PI:1;for(let V=0,j=u.length;V<j;V++){const D=u[V],I=D.color,G=D.intensity,Y=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=I.r*G*w,p+=I.g*G*w,g+=I.b*G*w;else if(D.isLightProbe)for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],G);else if(D.isDirectionalLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const se=D.shadow,oe=n.get(D);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,i.directionalShadow[d]=oe,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=D.shadow.matrix,y++}i.directional[d]=z,d++}else if(D.isSpotLight){const z=t.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(I).multiplyScalar(G*w),z.distance=Y,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[_]=z;const se=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,se.updateMatrices(D),D.castShadow&&v++),i.spotLightMatrix[_]=se.matrix,D.castShadow){const oe=n.get(D);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,i.spotShadow[_]=oe,i.spotShadowMap[_]=X,C++}_++}else if(D.isRectAreaLight){const z=t.get(D);z.color.copy(I).multiplyScalar(G),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=z,M++}else if(D.isPointLight){const z=t.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity*w),z.distance=D.distance,z.decay=D.decay,D.castShadow){const se=D.shadow,oe=n.get(D);oe.shadowBias=se.bias,oe.shadowNormalBias=se.normalBias,oe.shadowRadius=se.radius,oe.shadowMapSize=se.mapSize,oe.shadowCameraNear=se.camera.near,oe.shadowCameraFar=se.camera.far,i.pointShadow[m]=oe,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=D.shadow.matrix,S++}i.point[m]=z,m++}else if(D.isHemisphereLight){const z=t.get(D);z.skyColor.copy(D.color).multiplyScalar(G*w),z.groundColor.copy(D.groundColor).multiplyScalar(G*w),i.hemi[x]=z,x++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==d||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==M||P.hemiLength!==x||P.numDirectionalShadows!==y||P.numPointShadows!==S||P.numSpotShadows!==C||P.numSpotMaps!==L)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+L-v,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=v,P.directionalLength=d,P.pointLength=m,P.spotLength=_,P.rectAreaLength=M,P.hemiLength=x,P.numDirectionalShadows=y,P.numPointShadows=S,P.numSpotShadows=C,P.numSpotMaps=L,i.version=aS++)}function c(u,f){let h=0,p=0,g=0,d=0,m=0;const _=f.matrixWorldInverse;for(let M=0,x=u.length;M<x;M++){const y=u[M];if(y.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),h++}else if(y.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const S=i.rectArea[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function xh(r,e){const t=new cS(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function uS(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new xh(r,e),t.set(s,[l])):o>=a.length?(l=new xh(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class fS extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hS extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
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
}`;function mS(r,e,t){let n=new nu;const i=new Xe,s=new Xe,o=new nt,a=new fS({depthPacking:cx}),l=new hS,c={},u=t.maxTextureSize,f={[ui]:on,[on]:ui,[ii]:ii},h=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:dS,fragmentShader:pS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Hn;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new xn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tp,this.render=function(y,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Ri),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let V=0,j=y.length;V<j;V++){const D=y[V],I=D.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const G=I.getFrameExtents();if(i.multiply(G),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/G.x),i.x=s.x*G.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/G.y),i.y=s.y*G.y,I.mapSize.y=s.y)),I.map===null){const X=this.type!==Gs?{minFilter:wt,magFilter:wt}:{};I.map=new vr(i.x,i.y,X),I.map.texture.name=D.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const Y=I.getViewportCount();for(let X=0;X<Y;X++){const z=I.getViewport(X);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),P.viewport(o),I.updateMatrices(D,X),n=I.getFrustum(),x(S,C,I.camera,D,this.type)}I.isPointLightShadow!==!0&&this.type===Gs&&_(I,C),I.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(L,v,w)};function _(y,S){const C=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new vr(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(S,null,C,h,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(S,null,C,p,d,null)}function M(y,S,C,L,v,w){let P=null;const V=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(V!==void 0)P=V;else if(P=C.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const j=P.uuid,D=S.uuid;let I=c[j];I===void 0&&(I={},c[j]=I);let G=I[D];G===void 0&&(G=P.clone(),I[D]=G),P=G}return P.visible=S.visible,P.wireframe=S.wireframe,w===Gs?P.side=S.shadowSide!==null?S.shadowSide:S.side:P.side=S.shadowSide!==null?S.shadowSide:f[S.side],P.alphaMap=S.alphaMap,P.alphaTest=S.alphaTest,P.map=S.map,P.clipShadows=S.clipShadows,P.clippingPlanes=S.clippingPlanes,P.clipIntersection=S.clipIntersection,P.displacementMap=S.displacementMap,P.displacementScale=S.displacementScale,P.displacementBias=S.displacementBias,P.wireframeLinewidth=S.wireframeLinewidth,P.linewidth=S.linewidth,C.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(C.matrixWorld),P.nearDistance=L,P.farDistance=v),P}function x(y,S,C,L,v){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Gs)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const V=e.update(y),j=y.material;if(Array.isArray(j)){const D=V.groups;for(let I=0,G=D.length;I<G;I++){const Y=D[I],X=j[Y.materialIndex];if(X&&X.visible){const z=M(y,X,L,C.near,C.far,v);r.renderBufferDirect(C,null,V,z,y,Y)}}}else if(j.visible){const D=M(y,j,L,C.near,C.far,v);r.renderBufferDirect(C,null,V,D,y,null)}}const P=y.children;for(let V=0,j=P.length;V<j;V++)x(P[V],S,C,L,v)}}function gS(r,e,t){const n=t.isWebGL2;function i(){let N=!1;const $=new nt;let ue=null;const ye=new nt(0,0,0,0);return{setMask:function(Te){ue!==Te&&!N&&(r.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){N=Te},setClear:function(Te,$e,Mt,Lt,Bi){Bi===!0&&(Te*=Lt,$e*=Lt,Mt*=Lt),$.set(Te,$e,Mt,Lt),ye.equals($)===!1&&(r.clearColor(Te,$e,Mt,Lt),ye.copy($))},reset:function(){N=!1,ue=null,ye.set(-1,0,0,0)}}}function s(){let N=!1,$=null,ue=null,ye=null;return{setTest:function(Te){Te?Le(2929):Se(2929)},setMask:function(Te){$!==Te&&!N&&(r.depthMask(Te),$=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case D0:r.depthFunc(512);break;case I0:r.depthFunc(519);break;case N0:r.depthFunc(513);break;case nc:r.depthFunc(515);break;case O0:r.depthFunc(514);break;case F0:r.depthFunc(518);break;case U0:r.depthFunc(516);break;case z0:r.depthFunc(517);break;default:r.depthFunc(515)}ue=Te}},setLocked:function(Te){N=Te},setClear:function(Te){ye!==Te&&(r.clearDepth(Te),ye=Te)},reset:function(){N=!1,$=null,ue=null,ye=null}}}function o(){let N=!1,$=null,ue=null,ye=null,Te=null,$e=null,Mt=null,Lt=null,Bi=null;return{setTest:function(it){N||(it?Le(2960):Se(2960))},setMask:function(it){$!==it&&!N&&(r.stencilMask(it),$=it)},setFunc:function(it,Xn,un){(ue!==it||ye!==Xn||Te!==un)&&(r.stencilFunc(it,Xn,un),ue=it,ye=Xn,Te=un)},setOp:function(it,Xn,un){($e!==it||Mt!==Xn||Lt!==un)&&(r.stencilOp(it,Xn,un),$e=it,Mt=Xn,Lt=un)},setLocked:function(it){N=it},setClear:function(it){Bi!==it&&(r.clearStencil(it),Bi=it)},reset:function(){N=!1,$=null,ue=null,ye=null,Te=null,$e=null,Mt=null,Lt=null,Bi=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,d=[],m=null,_=!1,M=null,x=null,y=null,S=null,C=null,L=null,v=null,w=!1,P=null,V=null,j=null,D=null,I=null;const G=r.getParameter(35661);let Y=!1,X=0;const z=r.getParameter(7938);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=X>=2);let se=null,oe={};const _e=r.getParameter(3088),B=r.getParameter(2978),ie=new nt().fromArray(_e),de=new nt().fromArray(B);function pe(N,$,ue){const ye=new Uint8Array(4),Te=r.createTexture();r.bindTexture(N,Te),r.texParameteri(N,10241,9728),r.texParameteri(N,10240,9728);for(let $e=0;$e<ue;$e++)r.texImage2D($+$e,0,6408,1,1,0,6408,5121,ye);return Te}const H={};H[3553]=pe(3553,3553,1),H[34067]=pe(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Le(2929),l.setFunc(nc),J(!1),ae(af),Le(2884),W(Ri);function Le(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function Se(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function be(N,$){return p[N]!==$?(r.bindFramebuffer(N,$),p[N]=$,n&&(N===36009&&(p[36160]=$),N===36160&&(p[36009]=$)),!0):!1}function xe(N,$){let ue=d,ye=!1;if(N)if(ue=g.get($),ue===void 0&&(ue=[],g.set($,ue)),N.isWebGLMultipleRenderTargets){const Te=N.texture;if(ue.length!==Te.length||ue[0]!==36064){for(let $e=0,Mt=Te.length;$e<Mt;$e++)ue[$e]=36064+$e;ue.length=Te.length,ye=!0}}else ue[0]!==36064&&(ue[0]=36064,ye=!0);else ue[0]!==1029&&(ue[0]=1029,ye=!0);ye&&(t.isWebGL2?r.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Ke(N){return m!==N?(r.useProgram(N),m=N,!0):!1}const A={[kr]:32774,[M0]:32778,[b0]:32779};if(n)A[ff]=32775,A[hf]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(A[ff]=N.MIN_EXT,A[hf]=N.MAX_EXT)}const R={[S0]:0,[w0]:1,[T0]:768,[np]:770,[P0]:776,[L0]:774,[A0]:772,[E0]:769,[ip]:771,[R0]:775,[C0]:773};function W(N,$,ue,ye,Te,$e,Mt,Lt){if(N===Ri){_===!0&&(Se(3042),_=!1);return}if(_===!1&&(Le(3042),_=!0),N!==y0){if(N!==M||Lt!==w){if((x!==kr||C!==kr)&&(r.blendEquation(32774),x=kr,C=kr),Lt)switch(N){case Kr:r.blendFuncSeparate(1,771,1,771);break;case lf:r.blendFunc(1,1);break;case cf:r.blendFuncSeparate(0,769,0,1);break;case uf:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Kr:r.blendFuncSeparate(770,771,1,771);break;case lf:r.blendFunc(770,1);break;case cf:r.blendFuncSeparate(0,769,0,1);break;case uf:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,S=null,L=null,v=null,M=N,w=Lt}return}Te=Te||$,$e=$e||ue,Mt=Mt||ye,($!==x||Te!==C)&&(r.blendEquationSeparate(A[$],A[Te]),x=$,C=Te),(ue!==y||ye!==S||$e!==L||Mt!==v)&&(r.blendFuncSeparate(R[ue],R[ye],R[$e],R[Mt]),y=ue,S=ye,L=$e,v=Mt),M=N,w=!1}function ne(N,$){N.side===ii?Se(2884):Le(2884);let ue=N.side===on;$&&(ue=!ue),J(ue),N.blending===Kr&&N.transparent===!1?W(Ri):W(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const ye=N.stencilWrite;c.setTest(ye),ye&&(c.setMask(N.stencilWriteMask),c.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),c.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),te(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Le(32926):Se(32926)}function J(N){P!==N&&(N?r.frontFace(2304):r.frontFace(2305),P=N)}function ae(N){N!==_0?(Le(2884),N!==V&&(N===af?r.cullFace(1029):N===x0?r.cullFace(1028):r.cullFace(1032))):Se(2884),V=N}function ce(N){N!==j&&(Y&&r.lineWidth(N),j=N)}function te(N,$,ue){N?(Le(32823),(D!==$||I!==ue)&&(r.polygonOffset($,ue),D=$,I=ue)):Se(32823)}function he(N){N?Le(3089):Se(3089)}function re(N){N===void 0&&(N=33984+G-1),se!==N&&(r.activeTexture(N),se=N)}function T(N,$,ue){ue===void 0&&(se===null?ue=33984+G-1:ue=se);let ye=oe[ue];ye===void 0&&(ye={type:void 0,texture:void 0},oe[ue]=ye),(ye.type!==N||ye.texture!==$)&&(se!==ue&&(r.activeTexture(ue),se=ue),r.bindTexture(N,$||H[N]),ye.type=N,ye.texture=$)}function b(){const N=oe[se];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function O(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function we(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(N){ie.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function ve(N){de.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),de.copy(N))}function Re(N,$){let ue=f.get($);ue===void 0&&(ue=new WeakMap,f.set($,ue));let ye=ue.get(N);ye===void 0&&(ye=r.getUniformBlockIndex($,N.name),ue.set(N,ye))}function Je(N,$){const ye=f.get($).get(N);u.get($)!==ye&&(r.uniformBlockBinding($,ye,N.__bindingPointIndex),u.set($,ye))}function yt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},se=null,oe={},p={},g=new WeakMap,d=[],m=null,_=!1,M=null,x=null,y=null,S=null,C=null,L=null,v=null,w=!1,P=null,V=null,j=null,D=null,I=null,ie.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Le,disable:Se,bindFramebuffer:be,drawBuffers:xe,useProgram:Ke,setBlending:W,setMaterial:ne,setFlipSided:J,setCullFace:ae,setLineWidth:ce,setPolygonOffset:te,setScissorTest:he,activeTexture:re,bindTexture:T,unbindTexture:b,compressedTexImage2D:O,compressedTexImage3D:q,texImage2D:Ce,texImage3D:Me,updateUBOMapping:Re,uniformBlockBinding:Je,texStorage2D:K,texStorage3D:we,texSubImage2D:Q,texSubImage3D:le,compressedTexSubImage2D:ge,compressedTexSubImage3D:fe,scissor:Ee,viewport:ve,reset:yt}}function _S(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(T,b){return _?new OffscreenCanvas(T,b):lo("canvas")}function x(T,b,O,q){let Q=1;if((T.width>q||T.height>q)&&(Q=q/Math.max(T.width,T.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const le=b?da:Math.floor,ge=le(Q*T.width),fe=le(Q*T.height);d===void 0&&(d=M(ge,fe));const K=O?M(ge,fe):d;return K.width=ge,K.height=fe,K.getContext("2d").drawImage(T,0,0,ge,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ge+"x"+fe+")."),K}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return cc(T.width)&&cc(T.height)}function S(T){return a?!1:T.wrapS!==gn||T.wrapT!==gn||T.minFilter!==wt&&T.minFilter!==jt}function C(T,b){return T.generateMipmaps&&b&&T.minFilter!==wt&&T.minFilter!==jt}function L(T){r.generateMipmap(T)}function v(T,b,O,q,Q=!1){if(a===!1)return b;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let le=b;return b===6403&&(O===5126&&(le=33326),O===5131&&(le=33325),O===5121&&(le=33321)),b===33319&&(O===5126&&(le=33328),O===5131&&(le=33327),O===5121&&(le=33323)),b===6408&&(O===5126&&(le=34836),O===5131&&(le=34842),O===5121&&(le=q===Ye&&Q===!1?35907:32856),O===32819&&(le=32854),O===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function w(T,b,O){return C(T,O)===!0||T.isFramebufferTexture&&T.minFilter!==wt&&T.minFilter!==jt?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function P(T){return T===wt||T===sc||T===na?9728:9729}function V(T){const b=T.target;b.removeEventListener("dispose",V),D(b),b.isVideoTexture&&g.delete(b)}function j(T){const b=T.target;b.removeEventListener("dispose",j),G(b)}function D(T){const b=n.get(T);if(b.__webglInit===void 0)return;const O=T.source,q=m.get(O);if(q){const Q=q[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(T),Object.keys(q).length===0&&m.delete(O)}n.remove(T)}function I(T){const b=n.get(T);r.deleteTexture(b.__webglTexture);const O=T.source,q=m.get(O);delete q[b.__cacheKey],o.memory.textures--}function G(T){const b=T.texture,O=n.get(T),q=n.get(b);if(q.__webglTexture!==void 0&&(r.deleteTexture(q.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(O.__webglFramebuffer[Q]),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Q=0;Q<O.__webglColorRenderbuffer.length;Q++)O.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[Q]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Q=0,le=b.length;Q<le;Q++){const ge=n.get(b[Q]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(b[Q])}n.remove(b),n.remove(T)}let Y=0;function X(){Y=0}function z(){const T=Y;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),Y+=1,T}function se(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.encoding),b.join()}function oe(T,b){const O=n.get(T);if(T.isVideoTexture&&he(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(O,T,b);return}}t.bindTexture(3553,O.__webglTexture,33984+b)}function _e(T,b){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Se(O,T,b);return}t.bindTexture(35866,O.__webglTexture,33984+b)}function B(T,b){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Se(O,T,b);return}t.bindTexture(32879,O.__webglTexture,33984+b)}function ie(T,b){const O=n.get(T);if(T.version>0&&O.__version!==T.version){be(O,T,b);return}t.bindTexture(34067,O.__webglTexture,33984+b)}const de={[os]:10497,[gn]:33071,[ha]:33648},pe={[wt]:9728,[sc]:9984,[na]:9986,[jt]:9729,[ap]:9985,[gr]:9987};function H(T,b,O){if(O?(r.texParameteri(T,10242,de[b.wrapS]),r.texParameteri(T,10243,de[b.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,de[b.wrapR]),r.texParameteri(T,10240,pe[b.magFilter]),r.texParameteri(T,10241,pe[b.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(b.wrapS!==gn||b.wrapT!==gn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,P(b.magFilter)),r.texParameteri(T,10241,P(b.minFilter)),b.minFilter!==wt&&b.minFilter!==jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===wt||b.minFilter!==na&&b.minFilter!==gr||b.type===wi&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===ro&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(T,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Le(T,b){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",V));const q=b.source;let Q=m.get(q);Q===void 0&&(Q={},m.set(q,Q));const le=se(b);if(le!==T.__cacheKey){Q[le]===void 0&&(Q[le]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Q[le].usedTimes++;const ge=Q[T.__cacheKey];ge!==void 0&&(Q[T.__cacheKey].usedTimes--,ge.usedTimes===0&&I(b)),T.__cacheKey=le,T.__webglTexture=Q[le].texture}return O}function Se(T,b,O){let q=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(q=35866),b.isData3DTexture&&(q=32879);const Q=Le(T,b),le=b.source;t.bindTexture(q,T.__webglTexture,33984+O);const ge=n.get(le);if(le.version!==ge.__version||Q===!0){t.activeTexture(33984+O),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const fe=S(b)&&y(b.image)===!1;let K=x(b.image,fe,!1,u);K=re(b,K);const we=y(K)||a,Ce=s.convert(b.format,b.encoding);let Me=s.convert(b.type),Ee=v(b.internalFormat,Ce,Me,b.encoding,b.isVideoTexture);H(q,b,we);let ve;const Re=b.mipmaps,Je=a&&b.isVideoTexture!==!0,yt=ge.__version===void 0||Q===!0,N=w(b,K,we);if(b.isDepthTexture)Ee=6402,a?b.type===wi?Ee=36012:b.type===rr?Ee=33190:b.type===$r?Ee=35056:Ee=33189:b.type===wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===fr&&Ee===6402&&b.type!==lp&&b.type!==rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=rr,Me=s.convert(b.type)),b.format===as&&Ee===6402&&(Ee=34041,b.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=$r,Me=s.convert(b.type))),yt&&(Je?t.texStorage2D(3553,1,Ee,K.width,K.height):t.texImage2D(3553,0,Ee,K.width,K.height,0,Ce,Me,null));else if(b.isDataTexture)if(Re.length>0&&we){Je&&yt&&t.texStorage2D(3553,N,Ee,Re[0].width,Re[0].height);for(let $=0,ue=Re.length;$<ue;$++)ve=Re[$],Je?t.texSubImage2D(3553,$,0,0,ve.width,ve.height,Ce,Me,ve.data):t.texImage2D(3553,$,Ee,ve.width,ve.height,0,Ce,Me,ve.data);b.generateMipmaps=!1}else Je?(yt&&t.texStorage2D(3553,N,Ee,K.width,K.height),t.texSubImage2D(3553,0,0,0,K.width,K.height,Ce,Me,K.data)):t.texImage2D(3553,0,Ee,K.width,K.height,0,Ce,Me,K.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Je&&yt&&t.texStorage3D(35866,N,Ee,Re[0].width,Re[0].height,K.depth);for(let $=0,ue=Re.length;$<ue;$++)ve=Re[$],b.format!==_n?Ce!==null?Je?t.compressedTexSubImage3D(35866,$,0,0,0,ve.width,ve.height,K.depth,Ce,ve.data,0,0):t.compressedTexImage3D(35866,$,Ee,ve.width,ve.height,K.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(35866,$,0,0,0,ve.width,ve.height,K.depth,Ce,Me,ve.data):t.texImage3D(35866,$,Ee,ve.width,ve.height,K.depth,0,Ce,Me,ve.data)}else{Je&&yt&&t.texStorage2D(3553,N,Ee,Re[0].width,Re[0].height);for(let $=0,ue=Re.length;$<ue;$++)ve=Re[$],b.format!==_n?Ce!==null?Je?t.compressedTexSubImage2D(3553,$,0,0,ve.width,ve.height,Ce,ve.data):t.compressedTexImage2D(3553,$,Ee,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(3553,$,0,0,ve.width,ve.height,Ce,Me,ve.data):t.texImage2D(3553,$,Ee,ve.width,ve.height,0,Ce,Me,ve.data)}else if(b.isDataArrayTexture)Je?(yt&&t.texStorage3D(35866,N,Ee,K.width,K.height,K.depth),t.texSubImage3D(35866,0,0,0,0,K.width,K.height,K.depth,Ce,Me,K.data)):t.texImage3D(35866,0,Ee,K.width,K.height,K.depth,0,Ce,Me,K.data);else if(b.isData3DTexture)Je?(yt&&t.texStorage3D(32879,N,Ee,K.width,K.height,K.depth),t.texSubImage3D(32879,0,0,0,0,K.width,K.height,K.depth,Ce,Me,K.data)):t.texImage3D(32879,0,Ee,K.width,K.height,K.depth,0,Ce,Me,K.data);else if(b.isFramebufferTexture){if(yt)if(Je)t.texStorage2D(3553,N,Ee,K.width,K.height);else{let $=K.width,ue=K.height;for(let ye=0;ye<N;ye++)t.texImage2D(3553,ye,Ee,$,ue,0,Ce,Me,null),$>>=1,ue>>=1}}else if(Re.length>0&&we){Je&&yt&&t.texStorage2D(3553,N,Ee,Re[0].width,Re[0].height);for(let $=0,ue=Re.length;$<ue;$++)ve=Re[$],Je?t.texSubImage2D(3553,$,0,0,Ce,Me,ve):t.texImage2D(3553,$,Ee,Ce,Me,ve);b.generateMipmaps=!1}else Je?(yt&&t.texStorage2D(3553,N,Ee,K.width,K.height),t.texSubImage2D(3553,0,0,0,Ce,Me,K)):t.texImage2D(3553,0,Ee,Ce,Me,K);C(b,we)&&L(q),ge.__version=le.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function be(T,b,O){if(b.image.length!==6)return;const q=Le(T,b),Q=b.source;t.bindTexture(34067,T.__webglTexture,33984+O);const le=n.get(Q);if(Q.version!==le.__version||q===!0){t.activeTexture(33984+O),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const ge=b.isCompressedTexture||b.image[0].isCompressedTexture,fe=b.image[0]&&b.image[0].isDataTexture,K=[];for(let $=0;$<6;$++)!ge&&!fe?K[$]=x(b.image[$],!1,!0,c):K[$]=fe?b.image[$].image:b.image[$],K[$]=re(b,K[$]);const we=K[0],Ce=y(we)||a,Me=s.convert(b.format,b.encoding),Ee=s.convert(b.type),ve=v(b.internalFormat,Me,Ee,b.encoding),Re=a&&b.isVideoTexture!==!0,Je=le.__version===void 0||q===!0;let yt=w(b,we,Ce);H(34067,b,Ce);let N;if(ge){Re&&Je&&t.texStorage2D(34067,yt,ve,we.width,we.height);for(let $=0;$<6;$++){N=K[$].mipmaps;for(let ue=0;ue<N.length;ue++){const ye=N[ue];b.format!==_n?Me!==null?Re?t.compressedTexSubImage2D(34069+$,ue,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(34069+$,ue,ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+$,ue,0,0,ye.width,ye.height,Me,Ee,ye.data):t.texImage2D(34069+$,ue,ve,ye.width,ye.height,0,Me,Ee,ye.data)}}}else{N=b.mipmaps,Re&&Je&&(N.length>0&&yt++,t.texStorage2D(34067,yt,ve,K[0].width,K[0].height));for(let $=0;$<6;$++)if(fe){Re?t.texSubImage2D(34069+$,0,0,0,K[$].width,K[$].height,Me,Ee,K[$].data):t.texImage2D(34069+$,0,ve,K[$].width,K[$].height,0,Me,Ee,K[$].data);for(let ue=0;ue<N.length;ue++){const Te=N[ue].image[$].image;Re?t.texSubImage2D(34069+$,ue+1,0,0,Te.width,Te.height,Me,Ee,Te.data):t.texImage2D(34069+$,ue+1,ve,Te.width,Te.height,0,Me,Ee,Te.data)}}else{Re?t.texSubImage2D(34069+$,0,0,0,Me,Ee,K[$]):t.texImage2D(34069+$,0,ve,Me,Ee,K[$]);for(let ue=0;ue<N.length;ue++){const ye=N[ue];Re?t.texSubImage2D(34069+$,ue+1,0,0,Me,Ee,ye.image[$]):t.texImage2D(34069+$,ue+1,ve,Me,Ee,ye.image[$])}}}C(b,Ce)&&L(34067),le.__version=Q.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function xe(T,b,O,q,Q){const le=s.convert(O.format,O.encoding),ge=s.convert(O.type),fe=v(O.internalFormat,le,ge,O.encoding);n.get(b).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,fe,b.width,b.height,b.depth,0,le,ge,null):t.texImage2D(Q,0,fe,b.width,b.height,0,le,ge,null)),t.bindFramebuffer(36160,T),te(b)?h.framebufferTexture2DMultisampleEXT(36160,q,Q,n.get(O).__webglTexture,0,ce(b)):(Q===3553||Q>=34069&&Q<=34074)&&r.framebufferTexture2D(36160,q,Q,n.get(O).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ke(T,b,O){if(r.bindRenderbuffer(36161,T),b.depthBuffer&&!b.stencilBuffer){let q=33189;if(O||te(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===wi?q=36012:Q.type===rr&&(q=33190));const le=ce(b);te(b)?h.renderbufferStorageMultisampleEXT(36161,le,q,b.width,b.height):r.renderbufferStorageMultisample(36161,le,q,b.width,b.height)}else r.renderbufferStorage(36161,q,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(b.depthBuffer&&b.stencilBuffer){const q=ce(b);O&&te(b)===!1?r.renderbufferStorageMultisample(36161,q,35056,b.width,b.height):te(b)?h.renderbufferStorageMultisampleEXT(36161,q,35056,b.width,b.height):r.renderbufferStorage(36161,34041,b.width,b.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const q=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<q.length;Q++){const le=q[Q],ge=s.convert(le.format,le.encoding),fe=s.convert(le.type),K=v(le.internalFormat,ge,fe,le.encoding),we=ce(b);O&&te(b)===!1?r.renderbufferStorageMultisample(36161,we,K,b.width,b.height):te(b)?h.renderbufferStorageMultisampleEXT(36161,we,K,b.width,b.height):r.renderbufferStorage(36161,K,b.width,b.height)}}r.bindRenderbuffer(36161,null)}function A(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),oe(b.depthTexture,0);const q=n.get(b.depthTexture).__webglTexture,Q=ce(b);if(b.depthTexture.format===fr)te(b)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,q,0,Q):r.framebufferTexture2D(36160,36096,3553,q,0);else if(b.depthTexture.format===as)te(b)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,q,0,Q):r.framebufferTexture2D(36160,33306,3553,q,0);else throw new Error("Unknown depthTexture format")}function R(T){const b=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");A(b.__webglFramebuffer,T)}else if(O){b.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(36160,b.__webglFramebuffer[q]),b.__webglDepthbuffer[q]=r.createRenderbuffer(),Ke(b.__webglDepthbuffer[q],T,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),Ke(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function W(T,b,O){const q=n.get(T);b!==void 0&&xe(q.__webglFramebuffer,T,T.texture,36064,3553),O!==void 0&&R(T)}function ne(T){const b=T.texture,O=n.get(T),q=n.get(b);T.addEventListener("dispose",j),T.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=b.version,o.memory.textures++);const Q=T.isWebGLCubeRenderTarget===!0,le=T.isWebGLMultipleRenderTargets===!0,ge=y(T)||a;if(Q){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)O.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(O.__webglFramebuffer=r.createFramebuffer(),le)if(i.drawBuffers){const fe=T.texture;for(let K=0,we=fe.length;K<we;K++){const Ce=n.get(fe[K]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&te(T)===!1){const fe=le?b:[b];O.__webglMultisampledFramebuffer=r.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,O.__webglMultisampledFramebuffer);for(let K=0;K<fe.length;K++){const we=fe[K];O.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(36161,O.__webglColorRenderbuffer[K]);const Ce=s.convert(we.format,we.encoding),Me=s.convert(we.type),Ee=v(we.internalFormat,Ce,Me,we.encoding,T.isXRRenderTarget===!0),ve=ce(T);r.renderbufferStorageMultisample(36161,ve,Ee,T.width,T.height),r.framebufferRenderbuffer(36160,36064+K,36161,O.__webglColorRenderbuffer[K])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=r.createRenderbuffer(),Ke(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,q.__webglTexture),H(34067,b,ge);for(let fe=0;fe<6;fe++)xe(O.__webglFramebuffer[fe],T,b,36064,34069+fe);C(b,ge)&&L(34067),t.unbindTexture()}else if(le){const fe=T.texture;for(let K=0,we=fe.length;K<we;K++){const Ce=fe[K],Me=n.get(Ce);t.bindTexture(3553,Me.__webglTexture),H(3553,Ce,ge),xe(O.__webglFramebuffer,T,Ce,36064+K,3553),C(Ce,ge)&&L(3553)}t.unbindTexture()}else{let fe=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?fe=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,q.__webglTexture),H(fe,b,ge),xe(O.__webglFramebuffer,T,b,36064,fe),C(b,ge)&&L(fe),t.unbindTexture()}T.depthBuffer&&R(T)}function J(T){const b=y(T)||a,O=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let q=0,Q=O.length;q<Q;q++){const le=O[q];if(C(le,b)){const ge=T.isWebGLCubeRenderTarget?34067:3553,fe=n.get(le).__webglTexture;t.bindTexture(ge,fe),L(ge),t.unbindTexture()}}}function ae(T){if(a&&T.samples>0&&te(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],O=T.width,q=T.height;let Q=16384;const le=[],ge=T.stencilBuffer?33306:36096,fe=n.get(T),K=T.isWebGLMultipleRenderTargets===!0;if(K)for(let we=0;we<b.length;we++)t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+we,36161,null),t.bindFramebuffer(36160,fe.__webglFramebuffer),r.framebufferTexture2D(36009,36064+we,3553,null,0);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer);for(let we=0;we<b.length;we++){le.push(36064+we),T.depthBuffer&&le.push(ge);const Ce=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ce===!1&&(T.depthBuffer&&(Q|=256),T.stencilBuffer&&(Q|=1024)),K&&r.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[we]),Ce===!0&&(r.invalidateFramebuffer(36008,[ge]),r.invalidateFramebuffer(36009,[ge])),K){const Me=n.get(b[we]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Me,0)}r.blitFramebuffer(0,0,O,q,0,0,O,q,Q,9728),p&&r.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),K)for(let we=0;we<b.length;we++){t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+we,36161,fe.__webglColorRenderbuffer[we]);const Ce=n.get(b[we]).__webglTexture;t.bindFramebuffer(36160,fe.__webglFramebuffer),r.framebufferTexture2D(36009,36064+we,3553,Ce,0)}t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function ce(T){return Math.min(f,T.samples)}function te(T){const b=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(T){const b=o.render.frame;g.get(T)!==b&&(g.set(T,b),T.update())}function re(T,b){const O=T.encoding,q=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===lc||O!==xr&&(O===Ye?a===!1?e.has("EXT_sRGB")===!0&&q===_n?(T.format=lc,T.minFilter=jt,T.generateMipmaps=!1):b=pp.sRGBToLinear(b):(q!==_n||Q!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",O)),b}this.allocateTextureUnit=z,this.resetTextureUnits=X,this.setTexture2D=oe,this.setTexture2DArray=_e,this.setTexture3D=B,this.setTextureCube=ie,this.rebindTextures=W,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=te}function xS(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===_r)return 5121;if(s===Y0)return 32819;if(s===K0)return 32820;if(s===X0)return 5120;if(s===q0)return 5122;if(s===lp)return 5123;if(s===j0)return 5124;if(s===rr)return 5125;if(s===wi)return 5126;if(s===ro)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$0)return 6406;if(s===_n)return 6408;if(s===Z0)return 6409;if(s===J0)return 6410;if(s===fr)return 6402;if(s===as)return 34041;if(s===lc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Q0)return 6403;if(s===ex)return 36244;if(s===tx)return 33319;if(s===nx)return 33320;if(s===ix)return 36249;if(s===Ja||s===Qa||s===el||s===tl)if(o===Ye)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ja)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ja)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===el)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===df||s===pf||s===mf||s===gf)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===df)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===pf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===mf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===gf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_f||s===xf)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===_f)return o===Ye?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===xf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===vf||s===yf||s===Mf||s===bf||s===Sf||s===wf||s===Tf||s===Ef||s===Af||s===Cf||s===Lf||s===Rf||s===Pf||s===Df)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===vf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===wf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Tf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ef)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Af)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Pf)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Df)return o===Ye?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nl)return o===Ye?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===sx||s===If||s===Nf||s===Of)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nl)return a.COMPRESSED_RED_RGTC1_EXT;if(s===If)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Nf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Of)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$r?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class vS extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class or extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yS={type:"move"};class Cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new or,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new or,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new or,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new or;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class MS extends Ct{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:fr,u!==fr&&u!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fr&&(n=rr),n===void 0&&u===as&&(n=$r),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:wt,this.minFilter=l!==void 0?l:wt,this.flipY=!1,this.generateMipmaps=!1}}class bS extends Ms{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const M=[],x=[],y=new Set,S=new Map,C=new Wt;C.layers.enable(1),C.viewport=new nt;const L=new Wt;L.layers.enable(2),L.viewport=new nt;const v=[C,L],w=new vS;w.layers.enable(1),w.layers.enable(2);let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let ie=M[B];return ie===void 0&&(ie=new Cl,M[B]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(B){let ie=M[B];return ie===void 0&&(ie=new Cl,M[B]=ie),ie.getGripSpace()},this.getHand=function(B){let ie=M[B];return ie===void 0&&(ie=new Cl,M[B]=ie),ie.getHandSpace()};function j(B){const ie=x.indexOf(B.inputSource);if(ie===-1)return;const de=M[ie];de!==void 0&&de.dispatchEvent({type:B.type,data:B.inputSource})}function D(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",I);for(let B=0;B<M.length;B++){const ie=x[B];ie!==null&&(x[B]=null,M[B].disconnect(ie))}P=null,V=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,_=null,_e.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",D),i.addEventListener("inputsourceschange",I),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:p}),_=new vr(p.framebufferWidth,p.framebufferHeight,{format:_n,type:_r,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ie=null,de=null,pe=null;d.depth&&(pe=d.stencil?35056:33190,ie=d.stencil?as:fr,de=d.stencil?$r:rr);const H={colorFormat:32856,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(H),i.updateRenderState({layers:[h]}),_=new vr(h.textureWidth,h.textureHeight,{format:_n,type:_r,depthTexture:new MS(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const Le=e.properties.get(_);Le.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(B){for(let ie=0;ie<B.removed.length;ie++){const de=B.removed[ie],pe=x.indexOf(de);pe>=0&&(x[pe]=null,M[pe].disconnect(de))}for(let ie=0;ie<B.added.length;ie++){const de=B.added[ie];let pe=x.indexOf(de);if(pe===-1){for(let Le=0;Le<M.length;Le++)if(Le>=x.length){x.push(de),pe=Le;break}else if(x[Le]===null){x[Le]=de,pe=Le;break}if(pe===-1)break}const H=M[pe];H&&H.connect(de)}}const G=new F,Y=new F;function X(B,ie,de){G.setFromMatrixPosition(ie.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const pe=G.distanceTo(Y),H=ie.projectionMatrix.elements,Le=de.projectionMatrix.elements,Se=H[14]/(H[10]-1),be=H[14]/(H[10]+1),xe=(H[9]+1)/H[5],Ke=(H[9]-1)/H[5],A=(H[8]-1)/H[0],R=(Le[8]+1)/Le[0],W=Se*A,ne=Se*R,J=pe/(-A+R),ae=J*-A;ie.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ae),B.translateZ(J),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ce=Se+J,te=be+J,he=W-ae,re=ne+(pe-ae),T=xe*be/te*ce,b=Ke*be/te*ce;B.projectionMatrix.makePerspective(he,re,T,b,ce,te)}function z(B,ie){ie===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(ie.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;w.near=L.near=C.near=B.near,w.far=L.far=C.far=B.far,(P!==w.near||V!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,V=w.far);const ie=B.parent,de=w.cameras;z(w,ie);for(let H=0;H<de.length;H++)z(de[H],ie);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),B.matrix.copy(w.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const pe=B.children;for(let H=0,Le=pe.length;H<Le;H++)pe[H].updateMatrixWorld(!0);de.length===2?X(w,C,L):w.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.getPlanes=function(){return y};let se=null;function oe(B,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let pe=!1;de.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let H=0;H<de.length;H++){const Le=de[H];let Se=null;if(p!==null)Se=p.getViewport(Le);else{const xe=f.getViewSubImage(h,Le);Se=xe.viewport,H===0&&(e.setRenderTargetTextures(_,xe.colorTexture,h.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(_))}let be=v[H];be===void 0&&(be=new Wt,be.layers.enable(H),be.viewport=new nt,v[H]=be),be.matrix.fromArray(Le.transform.matrix),be.projectionMatrix.fromArray(Le.projectionMatrix),be.viewport.set(Se.x,Se.y,Se.width,Se.height),H===0&&w.matrix.copy(be.matrix),pe===!0&&w.cameras.push(be)}}for(let de=0;de<M.length;de++){const pe=x[de],H=M[de];pe!==null&&H!==void 0&&H.update(pe,ie,c||o)}if(se&&se(B,ie),ie.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ie.detectedPlanes});let de=null;for(const pe of y)ie.detectedPlanes.has(pe)||(de===null&&(de=[]),de.push(pe));if(de!==null)for(const pe of de)y.delete(pe),S.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of ie.detectedPlanes)if(!y.has(pe))y.add(pe),S.set(pe,ie.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const H=S.get(pe);pe.lastChangedTime>H&&(S.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}g=null}const _e=new Sp;_e.setAnimationLoop(oe),this.setAnimationLoop=function(B){se=B},this.dispose=function(){}}}function SS(r,e){function t(d,m){m.color.getRGB(d.fogColor.value,yp(r)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),f(d,m),m.isMeshPhysicalMaterial&&h(d,m,x)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,M):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===on&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===on&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,M){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=M*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===on&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function wS(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(M,x){const y=x.program;n.uniformBlockBinding(M,y)}function c(M,x){let y=i[M.id];y===void 0&&(g(M),y=u(M),i[M.id]=y,M.addEventListener("dispose",m));const S=x.program;n.updateUBOMapping(M,S);const C=e.render.frame;s[M.id]!==C&&(h(M),s[M.id]=C)}function u(M){const x=f();M.__bindingPointIndex=x;const y=r.createBuffer(),S=M.__size,C=M.usage;return r.bindBuffer(35345,y),r.bufferData(35345,S,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,y),y}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=i[M.id],y=M.uniforms,S=M.__cache;r.bindBuffer(35345,x);for(let C=0,L=y.length;C<L;C++){const v=y[C];if(p(v,C,S)===!0){const w=v.__offset,P=Array.isArray(v.value)?v.value:[v.value];let V=0;for(let j=0;j<P.length;j++){const D=P[j],I=d(D);typeof D=="number"?(v.__data[0]=D,r.bufferSubData(35345,w+V,v.__data)):D.isMatrix3?(v.__data[0]=D.elements[0],v.__data[1]=D.elements[1],v.__data[2]=D.elements[2],v.__data[3]=D.elements[0],v.__data[4]=D.elements[3],v.__data[5]=D.elements[4],v.__data[6]=D.elements[5],v.__data[7]=D.elements[0],v.__data[8]=D.elements[6],v.__data[9]=D.elements[7],v.__data[10]=D.elements[8],v.__data[11]=D.elements[0]):(D.toArray(v.__data,V),V+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,w,v.__data)}}r.bindBuffer(35345,null)}function p(M,x,y){const S=M.value;if(y[x]===void 0){if(typeof S=="number")y[x]=S;else{const C=Array.isArray(S)?S:[S],L=[];for(let v=0;v<C.length;v++)L.push(C[v].clone());y[x]=L}return!0}else if(typeof S=="number"){if(y[x]!==S)return y[x]=S,!0}else{const C=Array.isArray(y[x])?y[x]:[y[x]],L=Array.isArray(S)?S:[S];for(let v=0;v<C.length;v++){const w=C[v];if(w.equals(L[v])===!1)return w.copy(L[v]),!0}}return!1}function g(M){const x=M.uniforms;let y=0;const S=16;let C=0;for(let L=0,v=x.length;L<v;L++){const w=x[L],P={boundary:0,storage:0},V=Array.isArray(w.value)?w.value:[w.value];for(let j=0,D=V.length;j<D;j++){const I=V[j],G=d(I);P.boundary+=G.boundary,P.storage+=G.storage}if(w.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,L>0){C=y%S;const j=S-C;C!==0&&j-P.boundary<0&&(y+=S-C,w.__offset=y)}y+=P.storage}return C=y%S,C>0&&(y+=S-C),M.__size=y,M.__cache={},this}function d(M){const x={boundary:0,storage:0};return typeof M=="number"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function TS(){const r=lo("canvas");return r.style.display="block",r}function Cp(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:TS(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let f=null,h=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=xr,this.physicallyCorrectLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const d=this;let m=!1,_=0,M=0,x=null,y=-1,S=null;const C=new nt,L=new nt;let v=null,w=e.width,P=e.height,V=1,j=null,D=null;const I=new nt(0,0,w,P),G=new nt(0,0,w,P);let Y=!1;const X=new nu;let z=!1,se=!1,oe=null;const _e=new ze,B=new Xe,ie=new F,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return x===null?V:1}let H=t;function Le(E,k){for(let Z=0;Z<E.length;Z++){const U=E[Z],ee=e.getContext(U,k);if(ee!==null)return ee}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qc}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Re,!1),H===null){const k=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&k.shift(),H=Le(k,E),H===null)throw Le(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,be,xe,Ke,A,R,W,ne,J,ae,ce,te,he,re,T,b,O,q,Q,le,ge,fe,K,we;function Ce(){Se=new FM(H),be=new RM(H,Se,r),Se.init(be),fe=new xS(H,Se,be),xe=new gS(H,Se,be),Ke=new BM,A=new nS,R=new _S(H,Se,xe,A,be,fe,Ke),W=new DM(d),ne=new OM(d),J=new jx(H,be),K=new CM(H,Se,J,be),ae=new UM(H,J,Ke,K),ce=new HM(H,ae,J,Ke),Q=new GM(H,be,R),b=new PM(A),te=new tS(d,W,ne,Se,be,K,b),he=new SS(d,A),re=new rS,T=new uS(Se,be),q=new AM(d,W,ne,xe,ce,u,o),O=new mS(d,ce,be),we=new wS(H,Ke,be,xe),le=new LM(H,Se,Ke,be),ge=new zM(H,Se,Ke,be),Ke.programs=te.programs,d.capabilities=be,d.extensions=Se,d.properties=A,d.renderLists=re,d.shadowMap=O,d.state=xe,d.info=Ke}Ce();const Me=new bS(d,H);this.xr=Me,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(w,P,!1))},this.getSize=function(E){return E.set(w,P)},this.setSize=function(E,k,Z){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=E,P=k,e.width=Math.floor(E*V),e.height=Math.floor(k*V),Z!==!1&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(w*V,P*V).floor()},this.setDrawingBufferSize=function(E,k,Z){w=E,P=k,V=Z,e.width=Math.floor(E*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,k,Z,U){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,k,Z,U),xe.viewport(C.copy(I).multiplyScalar(V).floor())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,k,Z,U){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,k,Z,U),xe.scissor(L.copy(G).multiplyScalar(V).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(E){xe.setScissorTest(Y=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){D=E},this.getClearColor=function(E){return E.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(E=!0,k=!0,Z=!0){let U=0;E&&(U|=16384),k&&(U|=256),Z&&(U|=1024),H.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),re.dispose(),T.dispose(),A.dispose(),W.dispose(),ne.dispose(),ce.dispose(),K.dispose(),we.dispose(),te.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ye),Me.removeEventListener("sessionend",Te),oe&&(oe.dispose(),oe=null),$e.stop()};function Ee(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=Ke.autoReset,k=O.enabled,Z=O.autoUpdate,U=O.needsUpdate,ee=O.type;Ce(),Ke.autoReset=E,O.enabled=k,O.autoUpdate=Z,O.needsUpdate=U,O.type=ee}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){const k=E.target;k.removeEventListener("dispose",Je),yt(k)}function yt(E){N(E),A.remove(E)}function N(E){const k=A.get(E).programs;k!==void 0&&(k.forEach(function(Z){te.releaseProgram(Z)}),E.isShaderMaterial&&te.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,Z,U,ee,Ae){k===null&&(k=de);const Pe=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=Um(E,k,Z,U,ee);xe.setMaterial(U,Pe);let Ue=Z.index,qe=1;U.wireframe===!0&&(Ue=ae.getWireframeAttribute(Z),qe=2);const ke=Z.drawRange,Ve=Z.attributes.position;let ft=ke.start*qe,Jt=(ke.start+ke.count)*qe;Ae!==null&&(ft=Math.max(ft,Ae.start*qe),Jt=Math.min(Jt,(Ae.start+Ae.count)*qe)),Ue!==null?(ft=Math.max(ft,0),Jt=Math.min(Jt,Ue.count)):Ve!=null&&(ft=Math.max(ft,0),Jt=Math.min(Jt,Ve.count));const qn=Jt-ft;if(qn<0||qn===1/0)return;K.setup(ee,U,Ne,Z,Ue);let ki,ht=le;if(Ue!==null&&(ki=J.get(Ue),ht=ge,ht.setIndex(ki)),ee.isMesh)U.wireframe===!0?(xe.setLineWidth(U.wireframeLinewidth*pe()),ht.setMode(1)):ht.setMode(4);else if(ee.isLine){let Ge=U.linewidth;Ge===void 0&&(Ge=1),xe.setLineWidth(Ge*pe()),ee.isLineSegments?ht.setMode(1):ee.isLineLoop?ht.setMode(2):ht.setMode(3)}else ee.isPoints?ht.setMode(0):ee.isSprite&&ht.setMode(4);if(ee.isInstancedMesh)ht.renderInstances(ft,qn,ee.count);else if(Z.isInstancedBufferGeometry){const Ge=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,za=Math.min(Z.instanceCount,Ge);ht.renderInstances(ft,qn,za)}else ht.render(ft,qn)},this.compile=function(E,k){function Z(U,ee,Ae){U.transparent===!0&&U.side===ii&&U.forceSinglePass===!1?(U.side=on,U.needsUpdate=!0,un(U,ee,Ae),U.side=ui,U.needsUpdate=!0,un(U,ee,Ae),U.side=ii):un(U,ee,Ae)}h=T.get(E),h.init(),g.push(h),E.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights(d.physicallyCorrectLights),E.traverse(function(U){const ee=U.material;if(ee)if(Array.isArray(ee))for(let Ae=0;Ae<ee.length;Ae++){const Pe=ee[Ae];Z(Pe,E,U)}else Z(ee,E,U)}),g.pop(),h=null};let $=null;function ue(E){$&&$(E)}function ye(){$e.stop()}function Te(){$e.start()}const $e=new Sp;$e.setAnimationLoop(ue),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(E){$=E,Me.setAnimationLoop(E),E===null?$e.stop():$e.start()},Me.addEventListener("sessionstart",ye),Me.addEventListener("sessionend",Te),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(k),k=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,k,x),h=T.get(E,g.length),h.init(),g.push(h),_e.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),X.setFromProjectionMatrix(_e),se=this.localClippingEnabled,z=b.init(this.clippingPlanes,se),f=re.get(E,p.length),f.init(),p.push(f),Mt(E,k,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(j,D),z===!0&&b.beginShadows();const Z=h.state.shadowsArray;if(O.render(Z,E,k),z===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),q.render(f,E),h.setupLights(d.physicallyCorrectLights),k.isArrayCamera){const U=k.cameras;for(let ee=0,Ae=U.length;ee<Ae;ee++){const Pe=U[ee];Lt(f,E,Pe,Pe.viewport)}}else Lt(f,E,k);x!==null&&(R.updateMultisampleRenderTarget(x),R.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(d,E,k),K.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function Mt(E,k,Z,U){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){U&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Pe=ce.update(E),Ne=E.material;Ne.visible&&f.push(E,Pe,Ne,Z,ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ke.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ke.render.frame),!E.frustumCulled||X.intersectsObject(E))){U&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Pe=ce.update(E),Ne=E.material;if(Array.isArray(Ne)){const Ue=Pe.groups;for(let qe=0,ke=Ue.length;qe<ke;qe++){const Ve=Ue[qe],ft=Ne[Ve.materialIndex];ft&&ft.visible&&f.push(E,Pe,ft,Z,ie.z,Ve)}}else Ne.visible&&f.push(E,Pe,Ne,Z,ie.z,null)}}const Ae=E.children;for(let Pe=0,Ne=Ae.length;Pe<Ne;Pe++)Mt(Ae[Pe],k,Z,U)}function Lt(E,k,Z,U){const ee=E.opaque,Ae=E.transmissive,Pe=E.transparent;h.setupLightsView(Z),z===!0&&b.setGlobalState(d.clippingPlanes,Z),Ae.length>0&&Bi(ee,k,Z),U&&xe.viewport(C.copy(U)),ee.length>0&&it(ee,k,Z),Ae.length>0&&it(Ae,k,Z),Pe.length>0&&it(Pe,k,Z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Bi(E,k,Z){const U=be.isWebGL2;oe===null&&(oe=new vr(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?ro:_r,minFilter:gr,samples:U&&s===!0?4:0})),d.getDrawingBufferSize(B),U?oe.setSize(B.x,B.y):oe.setSize(da(B.x),da(B.y));const ee=d.getRenderTarget();d.setRenderTarget(oe),d.clear();const Ae=d.toneMapping;d.toneMapping=ai,it(E,k,Z),d.toneMapping=Ae,R.updateMultisampleRenderTarget(oe),R.updateRenderTargetMipmap(oe),d.setRenderTarget(ee)}function it(E,k,Z){const U=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,Ae=E.length;ee<Ae;ee++){const Pe=E[ee],Ne=Pe.object,Ue=Pe.geometry,qe=U===null?Pe.material:U,ke=Pe.group;Ne.layers.test(Z.layers)&&Xn(Ne,k,Z,Ue,qe,ke)}}function Xn(E,k,Z,U,ee,Ae){E.onBeforeRender(d,k,Z,U,ee,Ae),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),ee.onBeforeRender(d,k,Z,U,E,Ae),ee.transparent===!0&&ee.side===ii&&ee.forceSinglePass===!1?(ee.side=on,ee.needsUpdate=!0,d.renderBufferDirect(Z,k,U,ee,E,Ae),ee.side=ui,ee.needsUpdate=!0,d.renderBufferDirect(Z,k,U,ee,E,Ae),ee.side=ii):d.renderBufferDirect(Z,k,U,ee,E,Ae),E.onAfterRender(d,k,Z,U,ee,Ae)}function un(E,k,Z){k.isScene!==!0&&(k=de);const U=A.get(E),ee=h.state.lights,Ae=h.state.shadowsArray,Pe=ee.state.version,Ne=te.getParameters(E,ee.state,Ae,k,Z),Ue=te.getProgramCacheKey(Ne);let qe=U.programs;U.environment=E.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(E.isMeshStandardMaterial?ne:W).get(E.envMap||U.environment),qe===void 0&&(E.addEventListener("dispose",Je),qe=new Map,U.programs=qe);let ke=qe.get(Ue);if(ke!==void 0){if(U.currentProgram===ke&&U.lightsStateVersion===Pe)return Ru(E,Ne),ke}else Ne.uniforms=te.getUniforms(E),E.onBuild(Z,Ne,d),E.onBeforeCompile(Ne,d),ke=te.acquireProgram(Ne,Ue),qe.set(Ue,ke),U.uniforms=Ne.uniforms;const Ve=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ve.clippingPlanes=b.uniform),Ru(E,Ne),U.needsLights=Bm(E),U.lightsStateVersion=Pe,U.needsLights&&(Ve.ambientLightColor.value=ee.state.ambient,Ve.lightProbe.value=ee.state.probe,Ve.directionalLights.value=ee.state.directional,Ve.directionalLightShadows.value=ee.state.directionalShadow,Ve.spotLights.value=ee.state.spot,Ve.spotLightShadows.value=ee.state.spotShadow,Ve.rectAreaLights.value=ee.state.rectArea,Ve.ltc_1.value=ee.state.rectAreaLTC1,Ve.ltc_2.value=ee.state.rectAreaLTC2,Ve.pointLights.value=ee.state.point,Ve.pointLightShadows.value=ee.state.pointShadow,Ve.hemisphereLights.value=ee.state.hemi,Ve.directionalShadowMap.value=ee.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ve.spotShadowMap.value=ee.state.spotShadowMap,Ve.spotLightMatrix.value=ee.state.spotLightMatrix,Ve.spotLightMap.value=ee.state.spotLightMap,Ve.pointShadowMap.value=ee.state.pointShadowMap,Ve.pointShadowMatrix.value=ee.state.pointShadowMatrix);const ft=ke.getUniforms(),Jt=ra.seqWithValue(ft.seq,Ve);return U.currentProgram=ke,U.uniformsList=Jt,ke}function Ru(E,k){const Z=A.get(E);Z.outputEncoding=k.outputEncoding,Z.instancing=k.instancing,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Um(E,k,Z,U,ee){k.isScene!==!0&&(k=de),R.resetTextureUnits();const Ae=k.fog,Pe=U.isMeshStandardMaterial?k.environment:null,Ne=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:xr,Ue=(U.isMeshStandardMaterial?ne:W).get(U.envMap||Pe),qe=U.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ke=!!U.normalMap&&!!Z.attributes.tangent,Ve=!!Z.morphAttributes.position,ft=!!Z.morphAttributes.normal,Jt=!!Z.morphAttributes.color,qn=U.toneMapped?d.toneMapping:ai,ki=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ht=ki!==void 0?ki.length:0,Ge=A.get(U),za=h.state.lights;if(z===!0&&(se===!0||E!==S)){const Qt=E===S&&U.id===y;b.setState(U,E,Qt)}let bt=!1;U.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==za.state.version||Ge.outputEncoding!==Ne||ee.isInstancedMesh&&Ge.instancing===!1||!ee.isInstancedMesh&&Ge.instancing===!0||ee.isSkinnedMesh&&Ge.skinning===!1||!ee.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Ue||U.fog===!0&&Ge.fog!==Ae||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==b.numPlanes||Ge.numIntersection!==b.numIntersection)||Ge.vertexAlphas!==qe||Ge.vertexTangents!==ke||Ge.morphTargets!==Ve||Ge.morphNormals!==ft||Ge.morphColors!==Jt||Ge.toneMapping!==qn||be.isWebGL2===!0&&Ge.morphTargetsCount!==ht)&&(bt=!0):(bt=!0,Ge.__version=U.version);let Vi=Ge.currentProgram;bt===!0&&(Vi=un(U,k,ee));let Pu=!1,As=!1,Ba=!1;const zt=Vi.getUniforms(),Gi=Ge.uniforms;if(xe.useProgram(Vi.program)&&(Pu=!0,As=!0,Ba=!0),U.id!==y&&(y=U.id,As=!0),Pu||S!==E){if(zt.setValue(H,"projectionMatrix",E.projectionMatrix),be.logarithmicDepthBuffer&&zt.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,As=!0,Ba=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Qt=zt.map.cameraPosition;Qt!==void 0&&Qt.setValue(H,ie.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&zt.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||ee.isSkinnedMesh)&&zt.setValue(H,"viewMatrix",E.matrixWorldInverse)}if(ee.isSkinnedMesh){zt.setOptional(H,ee,"bindMatrix"),zt.setOptional(H,ee,"bindMatrixInverse");const Qt=ee.skeleton;Qt&&(be.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),zt.setValue(H,"boneTexture",Qt.boneTexture,R),zt.setValue(H,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ka=Z.morphAttributes;if((ka.position!==void 0||ka.normal!==void 0||ka.color!==void 0&&be.isWebGL2===!0)&&Q.update(ee,Z,U,Vi),(As||Ge.receiveShadow!==ee.receiveShadow)&&(Ge.receiveShadow=ee.receiveShadow,zt.setValue(H,"receiveShadow",ee.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Gi.envMap.value=Ue,Gi.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),As&&(zt.setValue(H,"toneMappingExposure",d.toneMappingExposure),Ge.needsLights&&zm(Gi,Ba),Ae&&U.fog===!0&&he.refreshFogUniforms(Gi,Ae),he.refreshMaterialUniforms(Gi,U,V,P,oe),ra.upload(H,Ge.uniformsList,Gi,R)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ra.upload(H,Ge.uniformsList,Gi,R),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&zt.setValue(H,"center",ee.center),zt.setValue(H,"modelViewMatrix",ee.modelViewMatrix),zt.setValue(H,"normalMatrix",ee.normalMatrix),zt.setValue(H,"modelMatrix",ee.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Qt=U.uniformsGroups;for(let Va=0,km=Qt.length;Va<km;Va++)if(be.isWebGL2){const Du=Qt[Va];we.update(Du,Vi),we.bind(Du,Vi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vi}function zm(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Bm(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,k,Z){A.get(E.texture).__webglTexture=k,A.get(E.depthTexture).__webglTexture=Z;const U=A.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=Z===void 0,U.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,k){const Z=A.get(E);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,Z=0){x=E,_=k,M=Z;let U=!0,ee=null,Ae=!1,Pe=!1;if(E){const Ue=A.get(E);Ue.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),U=!1):Ue.__webglFramebuffer===void 0?R.setupRenderTarget(E):Ue.__hasExternalTextures&&R.rebindTextures(E,A.get(E.texture).__webglTexture,A.get(E.depthTexture).__webglTexture);const qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Pe=!0);const ke=A.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(ee=ke[k],Ae=!0):be.isWebGL2&&E.samples>0&&R.useMultisampledRTT(E)===!1?ee=A.get(E).__webglMultisampledFramebuffer:ee=ke,C.copy(E.viewport),L.copy(E.scissor),v=E.scissorTest}else C.copy(I).multiplyScalar(V).floor(),L.copy(G).multiplyScalar(V).floor(),v=Y;if(xe.bindFramebuffer(36160,ee)&&be.drawBuffers&&U&&xe.drawBuffers(E,ee),xe.viewport(C),xe.scissor(L),xe.setScissorTest(v),Ae){const Ue=A.get(E.texture);H.framebufferTexture2D(36160,36064,34069+k,Ue.__webglTexture,Z)}else if(Pe){const Ue=A.get(E.texture),qe=k||0;H.framebufferTextureLayer(36160,36064,Ue.__webglTexture,Z||0,qe)}y=-1},this.readRenderTargetPixels=function(E,k,Z,U,ee,Ae,Pe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){xe.bindFramebuffer(36160,Ne);try{const Ue=E.texture,qe=Ue.format,ke=Ue.type;if(qe!==_n&&fe.convert(qe)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===ro&&(Se.has("EXT_color_buffer_half_float")||be.isWebGL2&&Se.has("EXT_color_buffer_float"));if(ke!==_r&&fe.convert(ke)!==H.getParameter(35738)&&!(ke===wi&&(be.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-U&&Z>=0&&Z<=E.height-ee&&H.readPixels(k,Z,U,ee,fe.convert(qe),fe.convert(ke),Ae)}finally{const Ue=x!==null?A.get(x).__webglFramebuffer:null;xe.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(E,k,Z=0){const U=Math.pow(2,-Z),ee=Math.floor(k.image.width*U),Ae=Math.floor(k.image.height*U);R.setTexture2D(k,0),H.copyTexSubImage2D(3553,Z,0,0,E.x,E.y,ee,Ae),xe.unbindTexture()},this.copyTextureToTexture=function(E,k,Z,U=0){const ee=k.image.width,Ae=k.image.height,Pe=fe.convert(Z.format),Ne=fe.convert(Z.type);R.setTexture2D(Z,0),H.pixelStorei(37440,Z.flipY),H.pixelStorei(37441,Z.premultiplyAlpha),H.pixelStorei(3317,Z.unpackAlignment),k.isDataTexture?H.texSubImage2D(3553,U,E.x,E.y,ee,Ae,Pe,Ne,k.image.data):k.isCompressedTexture?H.compressedTexSubImage2D(3553,U,E.x,E.y,k.mipmaps[0].width,k.mipmaps[0].height,Pe,k.mipmaps[0].data):H.texSubImage2D(3553,U,E.x,E.y,Pe,Ne,k.image),U===0&&Z.generateMipmaps&&H.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(E,k,Z,U,ee=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=E.max.x-E.min.x+1,Pe=E.max.y-E.min.y+1,Ne=E.max.z-E.min.z+1,Ue=fe.convert(U.format),qe=fe.convert(U.type);let ke;if(U.isData3DTexture)R.setTexture3D(U,0),ke=32879;else if(U.isDataArrayTexture)R.setTexture2DArray(U,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,U.flipY),H.pixelStorei(37441,U.premultiplyAlpha),H.pixelStorei(3317,U.unpackAlignment);const Ve=H.getParameter(3314),ft=H.getParameter(32878),Jt=H.getParameter(3316),qn=H.getParameter(3315),ki=H.getParameter(32877),ht=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;H.pixelStorei(3314,ht.width),H.pixelStorei(32878,ht.height),H.pixelStorei(3316,E.min.x),H.pixelStorei(3315,E.min.y),H.pixelStorei(32877,E.min.z),Z.isDataTexture||Z.isData3DTexture?H.texSubImage3D(ke,ee,k.x,k.y,k.z,Ae,Pe,Ne,Ue,qe,ht.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ke,ee,k.x,k.y,k.z,Ae,Pe,Ne,Ue,ht.data)):H.texSubImage3D(ke,ee,k.x,k.y,k.z,Ae,Pe,Ne,Ue,qe,ht),H.pixelStorei(3314,Ve),H.pixelStorei(32878,ft),H.pixelStorei(3316,Jt),H.pixelStorei(3315,qn),H.pixelStorei(32877,ki),ee===0&&U.generateMipmaps&&H.generateMipmap(ke),xe.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),xe.unbindTexture()},this.resetState=function(){_=0,M=0,x=null,xe.reset(),K.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ES extends Cp{}ES.prototype.isWebGL1Renderer=!0;class AS extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class CS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ac,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kt=new F;class ou{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ou(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const vh=new F,yh=new nt,Mh=new nt,LS=new F,bh=new ze;class RS extends xn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ze,this.bindMatrixInverse=new ze}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;yh.fromBufferAttribute(i.attributes.skinIndex,e),Mh.fromBufferAttribute(i.attributes.skinWeight,e),vh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Mh.getComponent(s);if(o!==0){const a=yh.getComponent(s);bh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(LS.copy(vh).applyMatrix4(bh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Lp extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class PS extends Ct{constructor(e=null,t=1,n=1,i,s,o,a,l,c=wt,u=wt,f,h){super(null,o,a,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sh=new ze,DS=new ze;class au{constructor(e=[],t=[]){this.uuid=Pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:DS;Sh.multiplyMatrices(a,t[s]),Sh.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new au(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=fp(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new PS(t,e,e,_n,wi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Lp),this.bones.push(o),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class wh extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Th=new ze,Eh=new ze,qo=[],IS=new ze,Fs=new xn;class NS extends xn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new wh(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,IS)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Th),Eh.multiplyMatrices(n,Th),Fs.matrixWorld=Eh,Fs.raycast(e,qo);for(let o=0,a=qo.length;o<a;o++){const l=qo[o];l.instanceId=s,l.object=this,t.push(l)}qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new wh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Rp extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ah=new F,Ch=new F,Lh=new ze,Ll=new tu,jo=new Ss;class lu extends at{constructor(e=new Hn,t=new Rp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ah.fromBufferAttribute(t,i-1),Ch.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ah.distanceTo(Ch);e.setAttribute("lineDistance",new li(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(i),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;Lh.copy(i).invert(),Ll.copy(e.ray).applyMatrix4(Lh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,u=new F,f=new F,h=new F,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let x=_,y=M-1;x<y;x+=p){const S=g.getX(x),C=g.getX(x+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,C),Ll.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),M=Math.min(m.count,o.start+o.count);for(let x=_,y=M-1;x<y;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Ll.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Rh=new F,Ph=new F;class OS extends lu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Rh.fromBufferAttribute(t,i),Ph.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Rh.distanceTo(Ph);e.setAttribute("lineDistance",new li(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class FS extends lu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pp extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dh=new ze,fc=new tu,Yo=new Ss,Ko=new F;class US extends at{constructor(e=new Hn,t=new Pp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(i),Yo.radius+=s,e.ray.intersectsSphere(Yo)===!1)return;Dh.copy(i).invert(),fc.copy(e.ray).applyMatrix4(Dh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,d=p;g<d;g++){const m=c.getX(g);Ko.fromBufferAttribute(f,m),Ih(Ko,m,l,i,e,t,this)}}else{const h=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=h,d=p;g<d;g++)Ko.fromBufferAttribute(f,g),Ih(Ko,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ih(r,e,t,n,i,s,o){const a=fc.distanceSqToPoint(r);if(a<t){const l=new F;fc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class cu extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=up,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sr extends cu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function vi(r,e,t){return Dp(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function $o(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Dp(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function zS(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nh(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Ip(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class vo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class BS extends vo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ff,endingEnd:Ff}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Uf:s=e,a=2*t-n;break;case zf:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uf:o=e,l=2*n-t;break;case zf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),d=g*g,m=d*g,_=-h*m+2*h*d-h*g,M=(1+h)*m+(-1.5-2*h)*d+(-.5+h)*g+1,x=(-1-p)*m+(1.5+p)*d+.5*g,y=p*m-p*d;for(let S=0;S!==a;++S)s[S]=_*o[u+S]+M*o[c+S]+x*o[l+S]+y*o[f+S];return s}}class kS extends vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[c+h]*f+o[l+h]*u;return s}}class VS extends vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$o(t,this.TimeBufferType),this.values=$o(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$o(e.times,Array),values:$o(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new VS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new BS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case so:t=this.InterpolantFactoryMethodDiscrete;break;case ls:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return ls;case this.InterpolantFactoryMethodSmooth:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=vi(n,s,o),this.values=vi(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Dp(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=vi(this.times),t=vi(this.values),n=this.getValueSize(),i=this.getInterpolation()===il,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const f=a*n,h=f-n,p=f+n;for(let g=0;g!==n;++g){const d=t[f+g];if(d!==t[h+g]||d!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let p=0;p!==n;++p)t[h+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=vi(e,0,o),this.values=vi(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=vi(this.times,0),t=vi(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=ls;class Ts extends Wn{}Ts.prototype.ValueTypeName="bool";Ts.prototype.ValueBufferType=Array;Ts.prototype.DefaultInterpolation=so;Ts.prototype.InterpolantFactoryMethodLinear=void 0;Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Np extends Wn{}Np.prototype.ValueTypeName="color";class co extends Wn{}co.prototype.ValueTypeName="number";class GS extends vo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ui.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Mr extends Wn{InterpolantFactoryMethodLinear(e){return new GS(this.times,this.values,this.getValueSize(),e)}}Mr.prototype.ValueTypeName="quaternion";Mr.prototype.DefaultInterpolation=ls;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Wn{}Es.prototype.ValueTypeName="string";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=so;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class uo extends Wn{}uo.prototype.ValueTypeName="vector";class HS{constructor(e,t=-1,n,i=ox){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(XS(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Wn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=zS(l);l=Nh(l,1,u),c=Nh(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new co(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,p,g,d){if(p.length!==0){const m=[],_=[];Ip(p,m,_,g),m.length!==0&&d.push(new f(h,m,_))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const p={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let d=0;d<h[g].morphTargets.length;d++)p[h[g].morphTargets[d]]=-1;for(const d in p){const m=[],_=[];for(let M=0;M!==h[g].morphTargets.length;++M){const x=h[g];m.push(x.time),_.push(x.morphTarget===d?1:0)}i.push(new co(".morphTargetInfluence["+d+"]",m,_))}l=p.length*o}else{const p=".bones["+t[f].name+"]";n(uo,p+".position",h,"pos",i),n(Mr,p+".quaternion",h,"rot",i),n(uo,p+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function WS(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return co;case"vector":case"vector2":case"vector3":case"vector4":return uo;case"color":return Np;case"quaternion":return Mr;case"bool":case"boolean":return Ts;case"string":return Es}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function XS(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=WS(r.type);if(r.times===void 0){const t=[],n=[];Ip(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const us={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class qS{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const jS=new qS;class yo{constructor(e){this.manager=e!==void 0?e:jS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Jn={};class YS extends Error{constructor(e,t){super(e),this.response=t}}class Op extends yo{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=us.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Jn[e]!==void 0){Jn[e].push({onLoad:t,onProgress:n,onError:i});return}Jn[e]=[],Jn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Jn[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,g=p!==0;let d=0;const m=new ReadableStream({start(_){M();function M(){f.read().then(({done:x,value:y})=>{if(x)_.close();else{d+=y.byteLength;const S=new ProgressEvent("progress",{lengthComputable:g,loaded:d,total:p});for(let C=0,L=u.length;C<L;C++){const v=u[C];v.onProgress&&v.onProgress(S)}_.enqueue(y),M()}})}}});return new Response(m)}else throw new YS(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{us.add(e,c);const u=Jn[e];delete Jn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Jn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Jn[e];for(let f=0,h=u.length;f<h;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class KS extends yo{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=us.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=lo("img");function l(){u(),us.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class $S extends yo{constructor(e){super(e)}load(e,t,n,i){const s=new Ct,o=new KS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class uu extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rl=new ze,Oh=new F,Fh=new F;class fu{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),Rl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ZS extends fu{constructor(){super(new Wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ao*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fp extends uu{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new ZS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Uh=new ze,Us=new F,Pl=new F;class JS extends fu{constructor(){super(new Wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Us.setFromMatrixPosition(e.matrixWorld),n.position.copy(Us),Pl.copy(n.position),Pl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pl),n.updateMatrixWorld(),i.makeTranslation(-Us.x,-Us.y,-Us.z),Uh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh)}}class QS extends uu{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new JS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ew extends fu{constructor(){super(new ru(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tw extends uu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new ew}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nw extends yo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=us.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){us.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const hu="\\[\\]\\.:\\/",iw=new RegExp("["+hu+"]","g"),du="[^"+hu+"]",rw="[^"+hu.replace("\\.","")+"]",sw=/((?:WC+[\/:])*)/.source.replace("WC",du),ow=/(WCOD+)?/.source.replace("WCOD",rw),aw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),lw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),cw=new RegExp("^"+sw+ow+aw+lw+"$"),uw=["material","materials","bones","map"];class fw{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(iw,"")}static parseTrackName(e){const t=cw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);uw.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=fw;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qc);function zh(r,e){if(e===ax)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===oc||e===cp){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===oc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Bh extends yo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new gw(t)}),this.register(function(t){return new Sw(t)}),this.register(function(t){return new ww(t)}),this.register(function(t){return new xw(t)}),this.register(function(t){return new vw(t)}),this.register(function(t){return new yw(t)}),this.register(function(t){return new Mw(t)}),this.register(function(t){return new mw(t)}),this.register(function(t){return new bw(t)}),this.register(function(t){return new _w(t)}),this.register(function(t){return new dw(t)}),this.register(function(t){return new Tw(t)}),this.register(function(t){return new Ew(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=hc.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Op(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Up){try{o[We.KHR_BINARY_GLTF]=new Aw(e)}catch(f){i&&i(f);return}s=JSON.parse(o[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new kw(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case We.KHR_MATERIALS_UNLIT:o[f]=new pw;break;case We.KHR_DRACO_MESH_COMPRESSION:o[f]=new Cw(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:o[f]=new Lw;break;case We.KHR_MESH_QUANTIZATION:o[f]=new Rw;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function hw(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class dw{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Fe(16777215);l.color!==void 0&&u.fromArray(l.color);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new tw(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new QS(u),c.distance=f;break;case"spot":c=new Fp(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class pw{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return sr}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ye))}return Promise.all(i)}}class mw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class gw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(s)}}class _w{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class xw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ye)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class vw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class yw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe(a[0],a[1],a[2]),Promise.all(s)}}class Mw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class bw{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ye)),Promise.all(s)}}class Sw{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class ww{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Tw{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,h,i.mode,i.filter),p})})}else return null}}class Ew{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==pn.TRIANGLES&&c.mode!==pn.TRIANGLE_STRIP&&c.mode!==pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,p=[];for(const g of f){const d=new ze,m=new F,_=new Ui,M=new F(1,1,1),x=new NS(g.geometry,g.material,h);for(let y=0;y<h;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,y),l.SCALE&&M.fromBufferAttribute(l.SCALE,y),x.setMatrixAt(y,d.compose(m,_,M));for(const y in l)y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);at.prototype.copy.call(x,g),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Up="glTF",zs=12,kh={JSON:1313821514,BIN:5130562};class Aw{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-zs,s=new DataView(e,zs);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===kh.JSON){const c=new Uint8Array(e,zs+o,a);this.content=n.decode(c)}else if(l===kh.BIN){const c=zs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Cw{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=dc[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=dc[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],p=Zr[h.componentType];c[f]=p.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){i.decodeDracoFile(u,function(h){for(const p in h.attributes){const g=h.attributes[p],d=l[p];d!==void 0&&(g.normalized=d)}f(h)},a,c)})})}}class Lw{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Rw{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class zp extends vo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,f=(n-t)/u,h=f*f,p=h*f,g=e*c,d=g-c,m=-2*p+3*h,_=p-h,M=1-m,x=_-h+f;for(let y=0;y!==a;y++){const S=o[d+y+a],C=o[d+y+l]*u,L=o[g+y+a],v=o[g+y]*u;s[y]=M*S+x*C+m*L+_*v}return s}}const Pw=new Ui;class Dw extends zp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Pw.fromArray(s).normalize().toArray(s),s}}const pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vh={9728:wt,9729:jt,9984:sc,9985:ap,9986:na,9987:gr},Gh={33071:gn,33648:ha,10497:os},Dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iw={CUBICSPLINE:void 0,LINEAR:ls,STEP:so},Il={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Nw(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new cu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),r.DefaultMaterial}function Bs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Si(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ow(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;o.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function Fw(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uw(r){const e=r.extensions&&r.extensions[We.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Hh(e.attributes):t=r.indices+":"+Hh(r.attributes)+":"+r.mode,t}function Hh(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function pc(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zw(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Bw=new ze;class kw{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hw,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new $S(this.options.manager):this.textureLoader=new nw(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Op(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Bs(s,a,i),Si(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(hc.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Dl[i.type],a=Zr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Xt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Dl[i.type],c=Zr[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let d,m;if(p&&p!==f){const _=Math.floor(h/p),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let x=t.cache.get(M);x||(d=new c(a,_*p,i.count*p/u),x=new CS(d,p/u),t.cache.add(M,x)),m=new ou(x,l,h%p/u,g)}else a===null?d=new c(i.count*l):d=new c(a,h,i.count*l),m=new Xt(d,l,g);if(i.sparse!==void 0){const _=Dl.SCALAR,M=Zr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,S=new M(o[1],x,i.sparse.count*_),C=new c(o[2],y,i.sparse.count*l);a!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized));for(let L=0,v=S.length;L<v;L++){const w=S[L];if(m.setX(w,C[L*l]),l>=2&&m.setY(w,C[L*l+1]),l>=3&&m.setZ(w,C[L*l+2]),l>=4&&m.setW(w,C[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Vh[h.magFilter]||jt,u.minFilter=Vh[h.minFilter]||gr,u.wrapS=Gh[h.wrapS]||os,u.wrapT=Gh[h.wrapT]||os,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,p){let g=h;t.isImageBitmapLoader===!0&&(g=function(d){const m=new Ct(d);m.needsUpdate=!0,h(m)}),t.load(hc.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||zw(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Pp,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Rp,kn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return cu}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const f=i[We.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Ye)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ii);const u=s.alphaMode||Il.OPAQUE;if(u===Il.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Il.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==sr&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Xe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&o!==sr&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==sr&&(a.emissive=new Fe().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==sr&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Ye)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Si(f,s),t.associations.set(f,{materials:e}),s.extensions&&Bs(i,f,s),f})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Wh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Uw(c),f=i[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Wh(new Hn,c,t),i[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Nw(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,g=u.length;p<g;p++){const d=u[p],m=o[p];let _;const M=c[p];if(m.mode===pn.TRIANGLES||m.mode===pn.TRIANGLE_STRIP||m.mode===pn.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new RS(d,M):new xn(d,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),m.mode===pn.TRIANGLE_STRIP?_.geometry=zh(_.geometry,cp):m.mode===pn.TRIANGLE_FAN&&(_.geometry=zh(_.geometry,oc));else if(m.mode===pn.LINES)_=new OS(d,M);else if(m.mode===pn.LINE_STRIP)_=new lu(d,M);else if(m.mode===pn.LINE_LOOP)_=new FS(d,M);else if(m.mode===pn.POINTS)_=new US(d,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&Fw(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Si(_,s),m.extensions&&Bs(i,_,m),t.assignFinalMaterial(_),f.push(_)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return f[0];const h=new or;t.associations.set(h,{meshes:e});for(let p=0,g=f.length;p<g;p++)h.add(f[p]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Wt(Ex.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ru(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Si(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new ze;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new au(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,u=n.channels.length;c<u;c++){const f=n.channels[c],h=n.samplers[f.sampler],p=f.target,g=p.node,d=n.parameters!==void 0?n.parameters[h.input]:h.input,m=n.parameters!==void 0?n.parameters[h.output]:h.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",d)),o.push(this.getDependency("accessor",m)),a.push(h),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2],p=c[3],g=c[4],d=[];for(let _=0,M=u.length;_<M;_++){const x=u[_],y=f[_],S=h[_],C=p[_],L=g[_];if(x===void 0)continue;x.updateMatrix();let v;switch(yi[L.path]){case yi.weights:v=co;break;case yi.rotation:v=Mr;break;case yi.position:case yi.scale:default:v=uo;break}const w=x.name?x.name:x.uuid,P=C.interpolation!==void 0?Iw[C.interpolation]:ls,V=[];yi[L.path]===yi.weights?x.traverse(function(D){D.morphTargetInfluences&&V.push(D.name?D.name:D.uuid)}):V.push(w);let j=S.array;if(S.normalized){const D=pc(j.constructor),I=new Float32Array(j.length);for(let G=0,Y=j.length;G<Y;G++)I[G]=j[G]*D;j=I}for(let D=0,I=V.length;D<I;D++){const G=new v(V[D]+"."+yi[L.path],y.array,j,P);C.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(X){const z=this instanceof Mr?Dw:zp;return new z(this.times,this.values,this.getValueSize()/3,X)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),d.push(G)}}const m=n.name?n.name:"animation_"+e;return new HS(m,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)});const c=[],u=s.children||[];for(let h=0,p=u.length;h<p;h++)c.push(i.getDependency("node",u[h]));const f=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(a),Promise.all(c),f])}().then(function(a){const l=a[0],c=a[1],u=a[2];let f;if(s.isBone===!0?f=new Lp:l.length>1?f=new or:l.length===1?f=l[0]:f=new at,f!==l[0])for(let h=0,p=l.length;h<p;h++)f.add(l[h]);if(s.name&&(f.userData.name=s.name,f.name=o),Si(f,s),s.extensions&&Bs(n,f,s),s.matrix!==void 0){const h=new ze;h.fromArray(s.matrix),f.applyMatrix4(h)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);i.associations.has(f)||i.associations.set(f,{}),i.associations.get(f).nodes=e,u!==null&&f.traverse(function(h){h.isSkinnedMesh&&h.bind(u,Bw)});for(let h=0,p=c.length;h<p;h++)f.add(c[h]);return f})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new or;n.name&&(s.name=i.createUniqueName(n.name)),Si(s,n),n.extensions&&Bs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[h,p]of i.associations)(h instanceof kn||h instanceof Ct)&&f.set(h,p);return u.traverse(h=>{const p=i.associations.get(h);p!=null&&f.set(h,p)}),f};return i.associations=c(s),s})}}function Vw(r,e,t){const n=e.attributes,i=new bs;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=pc(Zr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new F,l=new F;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],p=h.min,g=h.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),h.normalized){const d=pc(Zr[h.componentType]);l.multiplyScalar(d)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ss;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Wh(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=dc[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return Si(r,e),Vw(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ow(r,e.targets,t):r})}function ei(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},fs={duration:.5,overwrite:!1,delay:0},pu,Ot,pt,vn=1e8,tt=1/vn,mc=Math.PI*2,Gw=mc/4,Hw=0,kp=Math.sqrt,Ww=Math.cos,Xw=Math.sin,Et=function(e){return typeof e=="string"},lt=function(e){return typeof e=="function"},fi=function(e){return typeof e=="number"},mu=function(e){return typeof e>"u"},Gn=function(e){return typeof e=="object"},Yt=function(e){return e!==!1},Vp=function(){return typeof window<"u"},Zo=function(e){return lt(e)||Et(e)},Gp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ft=Array.isArray,gc=/(?:-?\.?\d|\.)+/gi,Hp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Wp=/[+-]=-?[.\d]+/,Xp=/[^,'"\[\]\s]+/gi,qw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,st,mn,_c,gu,ln={},pa={},qp,jp=function(e){return(pa=br(e,ln))&&cn},_u=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ma=function(e,t){return!t&&console.warn(e)},Yp=function(e,t){return e&&(ln[e]=t)&&pa&&(pa[e]=t)||ln},fo=function(){return 0},jw={suppressEvents:!0,isStart:!0,kill:!1},sa={suppressEvents:!0,kill:!1},Yw={suppressEvents:!0},xu={},Pi=[],xc={},Kp,nn={},Ol={},Xh=30,oa=[],vu="",yu=function(e){var t=e[0],n,i;if(Gn(t)||lt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=oa.length;i--&&!oa[i].targetTest(t););n=oa[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new _m(e[i],n)))||e.splice(i,1);return e},dr=function(e){return e._gsap||yu(yn(e))[0]._gsap},$p=function(e,t,n){return(n=e[t])&&lt(n)?e[t]():mu(n)&&e.getAttribute&&e.getAttribute(t)||n},Kt=function(e,t){return(e=e.split(",")).forEach(t)||e},ut=function(e){return Math.round(e*1e5)/1e5||0},At=function(e){return Math.round(e*1e7)/1e7||0},Jr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Kw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ga=function(){var e=Pi.length,t=Pi.slice(0),n,i;for(xc={},Pi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Zp=function(e,t,n,i){Pi.length&&!Ot&&ga(),e.render(t,n,i||Ot&&t<0&&(e._initted||e._startAt)),Pi.length&&!Ot&&ga()},Jp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Xp).length<2?t:Et(e)?e.trim():e},Qp=function(e){return e},Sn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},$w=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},br=function(e,t){for(var n in t)e[n]=t[n];return e},qh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},_a=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},$s=function(e){var t=e.parent||st,n=e.keyframes?$w(Ft(e.keyframes)):Sn;if(Yt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Zw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},em=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Oa=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Oi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},pr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Jw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},vc=function(e,t,n,i){return e._startAt&&(Ot?e._startAt.revert(sa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Qw=function r(e){return!e||e._ts&&r(e.parent)},jh=function(e){return e._repeat?hs(e._tTime,e=e.duration()+e._rDelay)*e:0},hs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},xa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fa=function(e){return e._end=At(e._start+(e._tDur/Math.abs(e._ts||e._rts||tt)||0))},Ua=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=At(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fa(e),n._dirty||pr(n,e)),e},tm=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=xa(e.rawTime(),t),(!t._dur||Mo(0,t.totalDuration(),n)-t._tTime>tt)&&t.render(n,!0)),pr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-tt}},Bn=function(e,t,n,i){return t.parent&&Oi(t),t._start=At((fi(n)?n:n||e!==st?dn(e,n,t):e._time)+t._delay),t._end=At(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),em(e,t,"_first","_last",e._sort?"_start":0),yc(t)||(e._recent=t),i||tm(e,t),e._ts<0&&Ua(e,e._tTime),e},nm=function(e,t){return(ln.ScrollTrigger||_u("scrollTrigger",t))&&ln.ScrollTrigger.create(t,e)},im=function(e,t,n,i,s){if(bu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ot&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Kp!==rn.frame)return Pi.push(e),e._lazy=[s,i],1},eT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},yc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},tT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&eT(e)&&!(!e._initted&&yc(e))||(e._ts<0||e._dp._ts<0)&&!yc(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Mo(0,e._tDur,t),u=hs(l,a),e._yoyo&&u&1&&(o=1-o),u!==hs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ot||i||e._zTime===tt||!t&&e._zTime){if(!e._initted&&im(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?tt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&vc(e,t,n,!0),e._onUpdate&&!n&&Mn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Oi(e,1),!n&&!Ot&&(Mn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},nT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ds=function(e,t,n,i){var s=e._repeat,o=At(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:At(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Ua(e,e._tTime=e._tDur*a),e.parent&&Fa(e),n||pr(e.parent,e),e},Yh=function(e){return e instanceof It?pr(e):ds(e,e._dur)},iT={_start:0,endTime:fo,totalDuration:fo},dn=function r(e,t,n){var i=e.labels,s=e._recent||iT,o=e.duration()>=vn?s.endTime(!1):e._dur,a,l,c;return Et(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Ft(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Zs=function(e,t,n){var i=fi(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Yt(l.vars.inherit)&&l.parent;o.immediateRender=Yt(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new _t(t[0],o,t[s+1])},zi=function(e,t){return e||e===0?t(e):t},Mo=function(e,t,n){return n<e?e:n>t?t:n},Dt=function(e,t){return!Et(e)||!(t=qw.exec(e))?"":t[1]},rT=function(e,t,n){return zi(n,function(i){return Mo(e,t,i)})},Mc=[].slice,rm=function(e,t){return e&&Gn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gn(e[0]))&&!e.nodeType&&e!==mn},sT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Et(i)&&!t||rm(i,1)?(s=n).push.apply(s,yn(i)):n.push(i)})||n},yn=function(e,t,n){return pt&&!t&&pt.selector?pt.selector(e):Et(e)&&!n&&(_c||!ps())?Mc.call((t||gu).querySelectorAll(e),0):Ft(e)?sT(e,n):rm(e)?Mc.call(e,0):e?[e]:[]},bc=function(e){return e=yn(e)[0]||ma("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return yn(t,n.querySelectorAll?n:n===e?ma("Invalid scope")||gu.createElement("div"):e)}},sm=function(e){return e.sort(function(){return .5-Math.random()})},om=function(e){if(lt(e))return e;var t=Gn(e)?e:{each:e},n=mr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return Et(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,p,g){var d=(g||t).length,m=o[d],_,M,x,y,S,C,L,v,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,vn])[1],!w){for(L=-vn;L<(L=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=o[d]=[],_=l?Math.min(w,d)*u-.5:i%w,M=w===vn?0:l?d*f/w-.5:i/w|0,L=0,v=vn,C=0;C<d;C++)x=C%w-_,y=M-(C/w|0),m[C]=S=c?Math.abs(c==="y"?y:x):kp(x*x+y*y),S>L&&(L=S),S<v&&(v=S);i==="random"&&sm(m),m.max=L-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),m.b=d<0?s-d:s,m.u=Dt(t.amount||t.each)||0,n=n&&d<0?pm(n):n}return d=(m[h]-m.min)/m.max||0,At(m.b+(n?n(d):d)*m.v)+m.u}},Sc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=At(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(fi(n)?0:Dt(n))}},am=function(e,t){var n=Ft(e),i,s;return!n&&Gn(e)&&(i=n=e.radius||vn,e.values?(e=yn(e.values),(s=!fi(e[0]))&&(i*=i)):e=Sc(e.increment)),zi(t,n?lt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=vn,u=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||fi(o)?u:u+Dt(o)}:Sc(e))},lm=function(e,t,n,i){return zi(Ft(e)?!t:n===!0?!!(n=0):!i,function(){return Ft(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},oT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},aT=function(e,t){return function(n){return e(parseFloat(n))+(t||Dt(n))}},lT=function(e,t,n){return um(e,t,0,1,n)},cm=function(e,t,n){return zi(n,function(i){return e[~~t(i)]})},cT=function r(e,t,n){var i=t-e;return Ft(e)?cm(e,r(0,e.length),t):zi(n,function(s){return(i+(s-e)%i)%i+e})},uT=function r(e,t,n){var i=t-e,s=i*2;return Ft(e)?cm(e,r(0,e.length-1),t):zi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},ho=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Xp:gc),n+=e.substr(t,i-t)+lm(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},um=function(e,t,n,i,s){var o=t-e,a=i-n;return zi(s,function(l){return n+((l-e)/o*a||0)})},fT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Et(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Ft(e)&&!Ft(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var d=Math.min(h,~~g);return u[d](g-d)},n=t}else i||(e=br(Ft(e)?[]:{},e));if(!u){for(l in t)Mu.call(a,e,l,"get",t[l]);s=function(g){return Tu(g,a)||(o?e.p:e)}}}return zi(n,s)},Kh=function(e,t,n){var i=e.labels,s=vn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mn=function(e,t,n){var i=e.vars,s=i[t],o=pt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Pi.length&&ga(),a&&(pt=a),u=l?s.apply(c,l):s.call(c),pt=o,u},Ws=function(e){return Oi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ot),e.progress()<1&&Mn(e,"onInterrupt"),e},Xr,hT=function(e){e=!e.name&&e.default||e;var t=e.name,n=lt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:fo,render:Tu,add:Mu,kill:CT,modifier:AT,rawVars:0},o={targetTest:0,get:0,getSetter:wu,aliases:{},register:0};if(ps(),e!==i){if(nn[t])return;Sn(i,Sn(_a(e,s),o)),br(i.prototype,br(s,_a(e,o))),nn[i.prop=t]=i,e.targetTest&&(oa.push(i),xu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Yp(t,i),e.register&&e.register(cn,i,$t)},Qe=255,Xs={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Fl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qe+.5|0},fm=function(e,t,n){var i=e?fi(e)?[e>>16,e>>8&Qe,e&Qe]:0:Xs.black,s,o,a,l,c,u,f,h,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Xs[e])i=Xs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qe,i&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(gc),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=Fl(l+1/3,s,o),i[1]=Fl(l,s,o),i[2]=Fl(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Hp),n&&i.length<4&&(i[3]=1),i}else i=e.match(gc)||Xs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Qe,o=i[1]/Qe,a=i[2]/Qe,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},hm=function(e){var t=[],n=[],i=-1;return e.split(Di).forEach(function(s){var o=s.match(Wr)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},$h=function(e,t,n){var i="",s=(e+i).match(Di),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=fm(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=hm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Di,"1").split(Wr),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Di),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Di=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Xs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),dT=/hsl[a]?\(/,dm=function(e){var t=e.join(" "),n;if(Di.lastIndex=0,Di.test(t))return n=dT.test(t),e[1]=$h(e[1],n),e[0]=$h(e[0],n,hm(e[1])),!0},po,rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,p,g=function d(m){var _=r()-i,M=m===!0,x,y,S,C;if(_>e&&(n+=_-t),i+=_,S=i-n,x=S-o,(x>0||M)&&(C=++f.frame,h=S-f.time*1e3,f.time=S=S/1e3,o+=x+(x>=s?4:s-x),y=1),M||(l=c(d)),y)for(p=0;p<a.length;p++)a[p](S,h,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){qp&&(!_c&&Vp()&&(mn=_c=window,gu=mn.document||{},ln.gsap=cn,(mn.gsapVersions||(mn.gsapVersions=[])).push(cn.version),jp(pa||mn.GreenSockGlobals||!mn.gsap&&mn||{}),u=mn.requestAnimationFrame),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},po=1,g(2))},sleep:function(){(u?mn.cancelAnimationFrame:clearTimeout)(l),po=0,c=fo},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,_,M){var x=_?function(y,S,C,L){m(y,S,C,L),f.remove(x)}:m;return f.remove(m),a[M?"unshift":"push"](x),ps(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},f}(),ps=function(){return!po&&rn.wake()},Be={},pT=/^[\d.\-M][\d.\-,\s]/,mT=/["']/g,gT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(mT,"").trim():+c,i=l.substr(a+1).trim();return t},_T=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},xT=function(e){var t=(e+"").split("("),n=Be[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[gT(t[1])]:_T(e).split(",").map(Jp)):Be._CE&&pT.test(e)?Be._CE("",e):n},pm=function(e){return function(t){return 1-e(1-t)}},mm=function r(e,t){for(var n=e._first,i;n;)n instanceof It?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},mr=function(e,t){return e&&(lt(e)?e:Be[e]||xT(e))||t},wr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Kt(e,function(a){Be[a]=ln[a]=s,Be[o=a.toLowerCase()]=n;for(var l in s)Be[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Be[a+"."+l]=s[l]}),s},gm=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ul=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/mc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Xw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:gm(a);return s=mc/s,l.config=function(c,u){return r(e,c,u)},l},zl=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:gm(n);return i.config=function(s){return r(e,s)},i};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;wr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Be.Linear.easeNone=Be.none=Be.Linear.easeIn;wr("Elastic",Ul("in"),Ul("out"),Ul());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};wr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);wr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});wr("Circ",function(r){return-(kp(1-r*r)-1)});wr("Sine",function(r){return r===1?1:-Ww(r*Gw)+1});wr("Back",zl("in"),zl("out"),zl());Be.SteppedEase=Be.steps=ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-tt;return function(a){return((i*Mo(0,o,a)|0)+s)*n}}};fs.ease=Be["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return vu+=r+","+r+"Params,"});var _m=function(e,t){this.id=Hw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:$p,this.set=t?t.getSetter:wu},ms=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ds(this,+t.duration,1,1),this.data=t.data,pt&&(this._ctx=pt,pt.data.push(this)),po||rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ds(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ps(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ua(this,n),!s._dp||s.parent||tm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Bn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===tt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Zp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?hs(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-tt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?xa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-tt?0:this._rts,this.totalTime(Mo(-this._delay,this._tDur,i),!0),Fa(this),Jw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ps(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==tt&&(this._tTime-=tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Bn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xa(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Yw);var i=Ot;return Ot=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ot=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(dn(this,n),Yt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-tt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=lt(n)?n:Qp,a=function(){var c=i.then;i.then=null,lt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Ws(this)},r}();Sn(ms.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-tt,_prom:0,_ps:!1,_rts:1});var It=function(r){Bp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Yt(n.sortChildren),st&&Bn(n.parent||st,ei(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&nm(ei(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Zs(0,arguments,this),this},t.from=function(i,s,o){return Zs(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Zs(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,$s(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new _t(i,s,dn(this,o),1),this},t.call=function(i,s,o){return Bn(this,_t.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new _t(i,o,dn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,$s(o).immediateRender=Yt(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,$s(a).immediateRender=Yt(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:At(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,p,g,d,m,_,M,x,y,S,C,L;if(this!==st&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,y=this._start,x=this._ts,_=!x,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=At(u%m),u===l?(d=this._repeat,h=c):(d=~~(u/m),d&&d===u/m&&(h=c,d--),h>c&&(h=c)),S=hs(this._tTime,m),!a&&this._tTime&&S!==d&&(S=d),C&&d&1&&(h=c-h,L=1),d!==S&&!this._lock){var v=C&&S&1,w=v===(C&&d&1);if(d<S&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(L?0:At(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mn(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;mm(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=nT(this,At(a),At(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&(Mn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-tt);break}}p=g}else{p=this._last;for(var P=i<0?i:h;p;){if(g=p._prev,(p._act||P<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,o);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,s,o||Ot&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=P?-tt:tt);break}}p=g}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-tt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Fa(this),this.render(i,s,o);this._onUpdate&&!s&&Mn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Oi(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Mn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(fi(s)||(s=dn(this,s,i)),!(i instanceof ms)){if(Ft(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Et(i))return this.addLabel(i,s);if(lt(i))i=_t.delayedCall(0,i);else return this}return this!==i?Bn(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-vn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof _t?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Et(i)?this.removeLabel(i):lt(i)?this.killTweensOf(i):(Oa(this,i),i===this._recent&&(this._recent=this._last),pr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=At(rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=dn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=_t.delayedCall(0,s||fo,o);return a.data="isPause",this._hasPause=1,Bn(this,a,dn(this,i))},t.removePause=function(i){var s=this._first;for(i=dn(this,i);s;)s._start===i&&s.data==="isPause"&&Oi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ti!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=yn(i),l=this._first,c=fi(s),u;l;)l instanceof _t?Kw(l._targets,a)&&(c?(!Ti||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=dn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=_t.to(o,Sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||tt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ds(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Sn({startAt:{time:dn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Kh(this,dn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Kh(this,dn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+tt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return pr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),pr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=vn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Bn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ds(o,o===st&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(st._ts&&(Zp(st,xa(i,st)),Kp=rn.frame),rn.frame>=Xh){Xh+=an.autoSleep||120;var s=st._first;if((!s||!s._ts)&&an.autoSleep&&rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||rn.sleep()}}},e}(ms);Sn(It.prototype,{_lock:0,_hasPause:0,_forcing:0});var vT=function(e,t,n,i,s,o,a){var l=new $t(this._pt,e,t,0,1,Sm,null,s),c=0,u=0,f,h,p,g,d,m,_,M;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=ho(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),h=n.match(Nl)||[];f=Nl.exec(i);)g=f[0],d=i.substring(c,f.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Jr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Nl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Wp.test(i)||_)&&(l.e=0),this._pt=l,l},Mu=function(e,t,n,i,s,o,a,l,c,u){lt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:lt(f)?c?e[t.indexOf("set")||!lt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=lt(f)?c?wT:Mm:Su,g;if(Et(i)&&(~i.indexOf("random(")&&(i=ho(i)),i.charAt(1)==="="&&(g=Jr(h,i)+(Dt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||wc)return!isNaN(h*i)&&i!==""?(g=new $t(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?ET:bm,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&_u(t,i),vT.call(this,e,t,h,i,p,l||an.stringFilter,c))},yT=function(e,t,n,i,s){if(lt(e)&&(e=Js(e,s,t,n,i)),!Gn(e)||e.style&&e.nodeType||Ft(e)||Gp(e))return Et(e)?Js(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Js(e[a],s,t,n,i);return o},xm=function(e,t,n,i,s,o){var a,l,c,u;if(nn[e]&&(a=new nn[e]).init(s,a.rawVars?t[e]:yT(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new $t(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Xr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Ti,wc,bu=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,M=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:M,S=e._overwrite==="auto"&&!pu,C=e.timeline,L,v,w,P,V,j,D,I,G,Y,X,z,se;if(C&&(!g||!s)&&(s="none"),e._ease=mr(s,fs.ease),e._yEase=p?pm(mr(p===!0?s:p,fs.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!C&&!!i.runBackwards,!C||g&&!i.stagger){if(I=M[0]?dr(M[0]).harness:0,z=I&&i[I.prop],L=_a(i,xu),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&m?sa:jw),_._lazy=0),o){if(Oi(e._startAt=_t.set(M,Sn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&Yt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ot||!a&&!d)&&e._startAt.revert(sa),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(a=!1),w=Sn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Yt(l),immediateRender:a,stagger:0,parent:x},L),z&&(w[I.prop]=z),Oi(e._startAt=_t.set(M,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ot?e._startAt.revert(sa):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,tt,tt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Yt(l)||l&&!m,v=0;v<M.length;v++){if(V=M[v],D=V._gsap||yu(M)[v]._gsap,e._ptLookup[v]=Y={},xc[D.id]&&Pi.length&&ga(),X=y===M?v:y.indexOf(V),I&&(G=new I).init(V,z||L,e,X,y)!==!1&&(e._pt=P=new $t(e._pt,V,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(oe){Y[oe]=P}),G.priority&&(j=1)),!I||z)for(w in L)nn[w]&&(G=xm(w,L,e,X,V,y))?G.priority&&(j=1):Y[w]=P=Mu.call(e,V,w,"get",L[w],X,y,0,i.stringFilter);e._op&&e._op[v]&&e.kill(V,e._op[v]),S&&e._pt&&(Ti=e,st.killTweensOf(V,Y,e.globalTime(t)),se=!e.parent,Ti=0),e._pt&&l&&(xc[D.id]=1)}j&&wm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!se,g&&t<=0&&C.render(vn,!0,!0)},MT=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return wc=1,e.vars[t]="+=0",bu(e,a),wc=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ut(n)+Dt(u.e)),u.b&&(u.b=c.s+Dt(u.b))},bT=function(e,t){var n=e[0]?dr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=br({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},ST=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Ft(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Js=function(e,t,n,i,s){return lt(e)?e.call(t,n,i,s):Et(e)&&~e.indexOf("random(")?ho(e):e},vm=vu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ym={};Kt(vm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ym[r]=1});var _t=function(r){Bp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:$s(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,M=i.parent||st,x=(Ft(n)||Gp(n)?fi(n[0]):"length"in i)?[n]:yn(n),y,S,C,L,v,w,P,V;if(a._targets=x.length?yu(x):ma("GSAP target "+n+" not found. https://greensock.com",!an.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||Zo(c)||Zo(u)){if(i=a.vars,y=a.timeline=new It({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:x}),y.kill(),y.parent=y._dp=ei(a),y._start=0,h||Zo(c)||Zo(u)){if(L=x.length,P=h&&om(h),Gn(h))for(v in h)~vm.indexOf(v)&&(V||(V={}),V[v]=h[v]);for(S=0;S<L;S++)C=_a(i,ym),C.stagger=0,_&&(C.yoyoEase=_),V&&br(C,V),w=x[S],C.duration=+Js(c,ei(a),S,w,x),C.delay=(+Js(u,ei(a),S,w,x)||0)-a._delay,!h&&L===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),y.to(w,C,P?P(S,w,x):0),y._ease=Be.none;y.duration()?c=u=0:a.timeline=0}else if(g){$s(Sn(y.vars.defaults,{ease:"none"})),y._ease=mr(g.ease||i.ease||"none");var j=0,D,I,G;if(Ft(g))g.forEach(function(Y){return y.to(x,Y,">")}),y.duration();else{C={};for(v in g)v==="ease"||v==="easeEach"||ST(v,g[v],C,g.easeEach);for(v in C)for(D=C[v].sort(function(Y,X){return Y.t-X.t}),j=0,S=0;S<D.length;S++)I=D[S],G={ease:I.e,duration:(I.t-(S?D[S-1].t:0))/100*c},G[v]=I.v,y.to(x,G,j),j+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!pu&&(Ti=ei(a),st.killTweensOf(x),Ti=0),Bn(M,ei(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!g&&a._start===At(M._time)&&Yt(f)&&Qw(ei(a))&&M.data!=="nested")&&(a._tTime=-tt,a.render(Math.max(0,-u)||0)),m&&nm(ei(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-tt&&!u?l:i<tt?0:i,h,p,g,d,m,_,M,x,y;if(!c)tT(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,o);if(h=At(f%d),f===l?(g=this._repeat,h=c):(g=~~(f/d),g&&g===f/d&&(h=c,g--),h>c&&(h=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,h=c-h),m=hs(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(x&&this._yEase&&mm(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(At(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(im(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!a&&!s&&(Mn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;x&&x.render(i<0?i:!h&&_?-tt:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&vc(this,i,s,o),Mn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Mn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&vc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Oi(this,1),!s&&!(u&&!a)&&(f||a||_)&&(Mn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){po||rn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||bu(this,l),c=this._ease(l/this._dur),MT(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(Ua(this,0),this.parent||em(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ws(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ti&&Ti.vars.overwrite!==!0)._first||Ws(this),this.parent&&o!==this.timeline.totalDuration()&&ds(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?yn(i):a,c=this._ptLookup,u=this._pt,f,h,p,g,d,m,_;if((!s||s==="all")&&Zw(a,l))return s==="all"&&(this._pt=0),Ws(this);for(f=this._op=this._op||[],s!=="all"&&(Et(s)&&(d={},Kt(s,function(M){return d[M]=1}),s=d),s=bT(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){h=c[_],s==="all"?(f[_]=s,g=h,p={}):(p=f[_]=f[_]||{},g=s);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Oa(this,m,"_pt"),delete h[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Ws(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Zs(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Zs(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return st.killTweensOf(i,s,o)},e}(ms);Sn(_t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(r){_t[r]=function(){var e=new It,t=Mc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Su=function(e,t,n){return e[t]=n},Mm=function(e,t,n){return e[t](n)},wT=function(e,t,n,i){return e[t](i.fp,n)},TT=function(e,t,n){return e.setAttribute(t,n)},wu=function(e,t){return lt(e[t])?Mm:mu(e[t])&&e.setAttribute?TT:Su},bm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},ET=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Tu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},AT=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},CT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Oa(this,t,"_pt"):t.dep||(n=1),t=i;return!n},LT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},wm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},$t=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||bm,this.d=l||this,this.set=c||Su,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=LT,this.m=n,this.mt=s,this.tween=i},r}();Kt(vu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xu[r]=1});ln.TweenMax=ln.TweenLite=_t;ln.TimelineLite=ln.TimelineMax=It;st=new It({sortChildren:!1,defaults:fs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});an.stringFilter=dm;var gs=[],aa={},RT=[],Zh=0,Bl=function(e){return(aa[e]||RT).map(function(t){return t()})},Tc=function(){var e=Date.now(),t=[];e-Zh>2&&(Bl("matchMediaInit"),gs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=mn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Bl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Zh=e,Bl("matchMedia"))},Tm=function(){function r(t,n){this.selector=n&&bc(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){lt(n)&&(s=i,i=n,n=lt);var o=this,a=function(){var c=pt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=bc(s)),pt=o,f=i.apply(o,arguments),lt(f)&&o._r.push(f),pt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===lt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=pt;pt=null,n(this),pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof _t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ms)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=gs.indexOf(this);~a&&gs.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),PT=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Gn(n)||(n={matches:n});var o=new Tm(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=mn.matchMedia(n[c]),l&&(gs.indexOf(o)<0&&gs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Tc):l.addEventListener("change",Tc)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),va={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return hT(i)})},timeline:function(e){return new It(e)},getTweensOf:function(e,t){return st.getTweensOf(e,t)},getProperty:function(e,t,n,i){Et(e)&&(e=yn(e)[0]);var s=dr(e||{}).get,o=n?Qp:Jp;return n==="native"&&(n=""),e&&(t?o((nn[t]&&nn[t].get||s)(e,t,n,i)):function(a,l,c){return o((nn[a]&&nn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=yn(e),e.length>1){var i=e.map(function(u){return cn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=nn[t],a=dr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Xr._pt=0,f.init(e,n?u+n:u,Xr,0,[e]),f.render(1,f),Xr._pt&&Tu(1,Xr)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=cn.to(e,br((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return st.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=mr(e.ease,fs.ease)),qh(fs,e||{})},config:function(e){return qh(an,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!nn[a]&&!ln[a]&&ma(t+" effect requires "+a+" plugin.")}),Ol[t]=function(a,l,c){return n(yn(a),Sn(l||{},s),c)},o&&(It.prototype[t]=function(a,l,c){return this.add(Ol[t](a,Gn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Be[e]=mr(t)},parseEase:function(e,t){return arguments.length?mr(e,t):Be},getById:function(e){return st.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new It(e),i,s;for(n.smoothChildTiming=Yt(e.smoothChildTiming),st.remove(n),n._dp=0,n._time=n._tTime=st._time,i=st._first;i;)s=i._next,(t||!(!i._dur&&i instanceof _t&&i.vars.onComplete===i._targets[0]))&&Bn(n,i,i._start-i._delay),i=s;return Bn(st,n,0),n},context:function(e,t){return e?new Tm(e,t):pt},matchMedia:function(e){return new PT(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Tc()},addEventListener:function(e,t){var n=aa[e]||(aa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=aa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:cT,wrapYoyo:uT,distribute:om,random:lm,snap:am,normalize:lT,getUnit:Dt,clamp:rT,splitColor:fm,toArray:yn,selector:bc,mapRange:um,pipe:oT,unitize:aT,interpolate:fT,shuffle:sm},install:jp,effects:Ol,ticker:rn,updateRoot:It.updateRoot,plugins:nn,globalTimeline:st,core:{PropTween:$t,globals:Yp,Tween:_t,Timeline:It,Animation:ms,getCache:dr,_removeLinkedListItem:Oa,reverting:function(){return Ot},context:function(e){return e&&pt&&(pt.data.push(e),e._ctx=pt),pt},suppressOverwrites:function(e){return pu=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return va[r]=_t[r]});rn.add(It.updateRoot);Xr=va.to({},{duration:0});var DT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},IT=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=DT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},kl=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Et(s)&&(l={},Kt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}IT(a,s)}}}},cn=va.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ot?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},kl("roundProps",Sc),kl("modifiers"),kl("snap",am))||va;_t.version=It.version=cn.version="3.11.4";qp=1;Vp()&&ps();Be.Power0;Be.Power1;Be.Power2;Be.Power3;Be.Power4;Be.Linear;Be.Quad;Be.Cubic;Be.Quart;Be.Quint;Be.Strong;Be.Elastic;Be.Back;Be.SteppedEase;Be.Bounce;Be.Sine;Be.Expo;Be.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jh,Ei,Qr,Eu,ar,Qh,Au,NT=function(){return typeof window<"u"},hi={},Qi=180/Math.PI,es=Math.PI/180,Br=Math.atan2,ed=1e8,Cu=/([A-Z])/g,OT=/(left|right|width|margin|padding|x)/i,FT=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ec=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},BT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Em=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Am=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kT=function(e,t,n){return e.style[t]=n},VT=function(e,t,n){return e.style.setProperty(t,n)},GT=function(e,t,n){return e._gsap[t]=n},HT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},WT=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},XT=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},ot="transform",Dn=ot+"Origin",qT=function(e,t){var n=this,i=this.target,s=i.style;if(e in hi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ti(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:ti(i,e)),this.props.indexOf(ot)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Dn,t,"")),e=ot}(s||t)&&this.props.push(e,t,s[e])},Cm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].replace(Cu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Au(),s&&!s.isStart&&!n[ot]&&(Cm(n),i.uncache=1)}},Lm=function(e,t){var n={target:e,props:[],revert:jT,save:qT};return t&&t.split(",").forEach(function(i){return n.save(i)}),n},Rm,Ac=function(e,t){var n=Ei.createElementNS?Ei.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ei.createElement(e);return n.style?n:Ei.createElement(e)},Vn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Cu,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,_s(t)||t,1)||""},td="O,Moz,ms,Ms,Webkit".split(","),_s=function(e,t,n){var i=t||ar,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(td[o]+e in s););return o<0?null:(o===3?"ms":o>=0?td[o]:"")+e},Cc=function(){NT()&&window.document&&(Jh=window,Ei=Jh.document,Qr=Ei.documentElement,ar=Ac("div")||{style:{}},Ac("div"),ot=_s(ot),Dn=ot+"Origin",ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rm=!!_s("perspective"),Au=cn.core.reverting,Eu=1)},Vl=function r(e){var t=Ac("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(Qr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Qr.removeChild(t),this.style.cssText=s,o},nd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Pm=function(e){var t;try{t=e.getBBox()}catch{t=Vl.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Vl||(t=Vl.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+nd(e,["x","cx","x1"])||0,y:+nd(e,["y","cy","y1"])||0,width:0,height:0}:t},Dm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pm(e))},mo=function(e,t){if(t){var n=e.style;t in hi&&t!==Dn&&(t=ot),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Cu,"-$1").toLowerCase())):n.removeAttribute(t)}},Ai=function(e,t,n,i,s,o){var a=new $t(e._pt,t,n,0,1,o?Am:Em);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},id={deg:1,rad:1,turn:1},YT={grid:1,flex:1},Fi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ar.style,l=OT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",p=i==="%",g,d,m,_;return i===o||!s||id[i]||id[o]?s:(o!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&Dm(e),(p||o==="%")&&(hi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],ut(p?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Ei||!d.appendChild)&&(d=Ei.body),m=d._gsap,m&&p&&m.width&&l&&m.time===rn.time&&!m.uncache?ut(s/m.width*f):((p||o==="%")&&!YT[Vn(d,"display")]&&(a.position=Vn(e,"position")),d===e&&(a.position="static"),d.appendChild(ar),g=ar[u],d.removeChild(ar),a.position="absolute",l&&p&&(m=dr(d),m.time=rn.time,m.width=d[u]),ut(h?g*s/f:g&&s?f/g*s:0))))},ti=function(e,t,n,i){var s;return Eu||Cc(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),hi[t]&&t!=="transform"?(s=_o(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ma(Vn(e,Dn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ya[t]&&ya[t](e,t,n)||Vn(e,t)||$p(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Fi(e,t,s,n)+n:s},KT=function(e,t,n,i){if(!n||n==="none"){var s=_s(t,e,1),o=s&&Vn(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Vn(e,"borderTopColor"))}var a=new $t(this._pt,e.style,t,0,1,Sm),l=0,c=0,u,f,h,p,g,d,m,_,M,x,y,S;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Vn(e,t)||i,e.style[t]=n),u=[n,i],dm(u),n=u[0],i=u[1],h=n.match(Wr)||[],S=i.match(Wr)||[],S.length){for(;f=Wr.exec(i);)m=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(d=h[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=Jr(p,m)+y),_=parseFloat(m),x=m.substr((_+"").length),l=Wr.lastIndex-x.length,x||(x=x||an.units[t]||y,l===i.length&&(i+=x,a.e+=x)),y!==x&&(p=Fi(e,t,d,x)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Am:Em;return Wp.test(i)&&(a.e=0),this._pt=a,a},rd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$T=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=rd[n]||n,t[1]=rd[i]||i,t.join(" ")},ZT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],hi[a]&&(l=1,a=a==="transformOrigin"?Dn:ot),mo(n,a);l&&(mo(n,ot),o&&(o.svg&&n.removeAttribute("transform"),_o(n,1),o.uncache=1,Cm(i)))}},ya={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new $t(e._pt,t,n,0,0,ZT);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},go=[1,0,0,1,0,0],Im={},Nm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},sd=function(e){var t=Vn(e,ot);return Nm(t)?go:t.substr(7).match(Hp).map(ut)},Lu=function(e,t){var n=e._gsap||dr(e),i=e.style,s=sd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?go:s):(s===go&&!e.offsetParent&&e!==Qr&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Qr.appendChild(e)),s=sd(e),l?i.display=l:mo(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Qr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Lc=function(e,t,n,i,s,o){var a=e._gsap,l=s||Lu(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],M=l[5],x=t.split(" "),y=parseFloat(x[0])||0,S=parseFloat(x[1])||0,C,L,v,w;n?l!==go&&(L=p*m-g*d)&&(v=y*(m/L)+S*(-d/L)+(d*M-m*_)/L,w=y*(-g/L)+S*(p/L)-(p*M-g*_)/L,y=v,S=w):(C=Pm(e),y=C.x+(~x[0].indexOf("%")?y/100*C.width:y),S=C.y+(~(x[1]||x[0]).indexOf("%")?S/100*C.height:S)),i||i!==!1&&a.smooth?(_=y-c,M=S-u,a.xOffset=f+(_*p+M*d)-_,a.yOffset=h+(_*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Dn]="0px 0px",o&&(Ai(o,a,"xOrigin",c,y),Ai(o,a,"yOrigin",u,S),Ai(o,a,"xOffset",f,a.xOffset),Ai(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},_o=function(e,t){var n=e._gsap||new _m(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Vn(e,Dn)||"0",u,f,h,p,g,d,m,_,M,x,y,S,C,L,v,w,P,V,j,D,I,G,Y,X,z,se,oe,_e,B,ie,de,pe;return u=f=h=d=m=_=M=x=y=0,p=g=1,n.svg=!!(e.getCTM&&Dm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ot]!=="none"?l[ot]:"")),i.scale=i.rotate=i.translate="none"),L=Lu(e,n.svg),n.svg&&(n.uncache?(z=e.getBBox(),c=n.xOrigin-z.x+"px "+(n.yOrigin-z.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Lc(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,L)),S=n.xOrigin||0,C=n.yOrigin||0,L!==go&&(V=L[0],j=L[1],D=L[2],I=L[3],u=G=L[4],f=Y=L[5],L.length===6?(p=Math.sqrt(V*V+j*j),g=Math.sqrt(I*I+D*D),d=V||j?Br(j,V)*Qi:0,M=D||I?Br(D,I)*Qi+d:0,M&&(g*=Math.abs(Math.cos(M*es))),n.svg&&(u-=S-(S*V+C*D),f-=C-(S*j+C*I))):(pe=L[6],ie=L[7],oe=L[8],_e=L[9],B=L[10],de=L[11],u=L[12],f=L[13],h=L[14],v=Br(pe,B),m=v*Qi,v&&(w=Math.cos(-v),P=Math.sin(-v),X=G*w+oe*P,z=Y*w+_e*P,se=pe*w+B*P,oe=G*-P+oe*w,_e=Y*-P+_e*w,B=pe*-P+B*w,de=ie*-P+de*w,G=X,Y=z,pe=se),v=Br(-D,B),_=v*Qi,v&&(w=Math.cos(-v),P=Math.sin(-v),X=V*w-oe*P,z=j*w-_e*P,se=D*w-B*P,de=I*P+de*w,V=X,j=z,D=se),v=Br(j,V),d=v*Qi,v&&(w=Math.cos(v),P=Math.sin(v),X=V*w+j*P,z=G*w+Y*P,j=j*w-V*P,Y=Y*w-G*P,V=X,G=z),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=ut(Math.sqrt(V*V+j*j+D*D)),g=ut(Math.sqrt(Y*Y+pe*pe)),v=Br(G,Y),M=Math.abs(v)>2e-4?v*Qi:0,y=de?1/(de<0?-de:de):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Nm(Vn(e,ot)),X&&e.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=ut(p),n.scaleY=ut(g),n.rotation=ut(d)+a,n.rotationX=ut(m)+a,n.rotationY=ut(_)+a,n.skewX=M+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Dn]=Ma(c)),n.xOffset=n.yOffset=0,n.force3D=an.force3D,n.renderTransform=n.svg?QT:Rm?Om:JT,n.uncache=0,n},Ma=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gl=function(e,t,n){var i=Dt(t);return ut(parseFloat(t)+parseFloat(Fi(e,"x",n+"px",i)))+i},JT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Om(e,t)},Yi="0deg",ks="0px",Ki=") ",Om=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,M=n.target,x=n.zOrigin,y="",S=_==="auto"&&e&&e!==1||_===!0;if(x&&(f!==Yi||u!==Yi)){var C=parseFloat(u)*es,L=Math.sin(C),v=Math.cos(C),w;C=parseFloat(f)*es,w=Math.cos(C),o=Gl(M,o,L*w*-x),a=Gl(M,a,-Math.sin(C)*-x),l=Gl(M,l,v*w*-x+x)}m!==ks&&(y+="perspective("+m+Ki),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(S||o!==ks||a!==ks||l!==ks)&&(y+=l!==ks||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ki),c!==Yi&&(y+="rotate("+c+Ki),u!==Yi&&(y+="rotateY("+u+Ki),f!==Yi&&(y+="rotateX("+f+Ki),(h!==Yi||p!==Yi)&&(y+="skew("+h+", "+p+Ki),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Ki),M.style[ot]=y||"translate(0, 0)"},QT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,M=n.forceCSS,x=parseFloat(o),y=parseFloat(a),S,C,L,v,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=es,c*=es,S=Math.cos(l)*f,C=Math.sin(l)*f,L=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=es,w=Math.tan(c-u),w=Math.sqrt(1+w*w),L*=w,v*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),S*=w,C*=w)),S=ut(S),C=ut(C),L=ut(L),v=ut(v)):(S=f,v=h,C=L=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Fi(p,"x",o,"px"),y=Fi(p,"y",a,"px")),(g||d||m||_)&&(x=ut(x+g-(g*S+d*L)+m),y=ut(y+d-(g*C+d*v)+_)),(i||s)&&(w=p.getBBox(),x=ut(x+i/100*w.width),y=ut(y+s/100*w.height)),w="matrix("+S+","+C+","+L+","+v+","+x+","+y+")",p.setAttribute("transform",w),M&&(p.style[ot]=w)},e1=function(e,t,n,i,s){var o=360,a=Et(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qi:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*ed)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*ed)%o-~~(c/o)*o)),e._pt=h=new $t(e._pt,t,n,i,c,UT),h.e=u,h.u="deg",e._props.push(n),h},od=function(e,t){for(var n in t)e[n]=t[n];return e},t1=function(e,t,n){var i=od({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ot]=t,a=_o(n,1),mo(n,ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ot],o[ot]=t,a=_o(n,1),o[ot]=c);for(l in hi)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Dt(c),g=Dt(u),f=p!==g?Fi(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new $t(e._pt,a,l,f,h-f,Ec),e._pt.u=g||0,e._props.push(l));od(a,i)};Kt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ya[e>1?"border"+r:r]=function(a,l,c,u,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return ti(a,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,p,f)}});var Fm={name:"css",register:Cc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,p,g,d,m,_,M,x,y,S,C,L,v;Eu||Cc(),this.styles=this.styles||Lm(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(nn[d]&&xm(d,t,n,i,e,s)))){if(p=typeof u,g=ya[d],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=ho(u)),g)g(this,e,d,u,n)&&(L=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Di.lastIndex=0,Di.test(c)||(m=Dt(c),_=Dt(u)),_?m!==_&&(c=Fi(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,d),o.push(d),v.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],Et(c)&&~c.indexOf("random(")&&(c=ho(c)),Dt(c+"")||(c+=an.units[d]||Dt(ti(e,d))||""),(c+"").charAt(1)==="="&&(c=ti(e,d))):c=ti(e,d),h=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),d in si&&(d==="autoAlpha"&&(h===1&&ti(e,"visibility")==="hidden"&&f&&(h=0),v.push("visibility",0,a.visibility),Ai(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),d!=="scale"&&d!=="transform"&&(d=si[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in hi,x){if(this.styles.save(d),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||_o(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new $t(this._pt,a,ot,0,1,S.renderTransform,S,0,-1),y.dep=1),d==="scale")this._pt=new $t(this._pt,S,"scaleY",S.scaleY,(M?Jr(S.scaleY,M+f):f)-S.scaleY||0,Ec),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(Dn,0,a[Dn]),u=$T(u),S.svg?Lc(e,u,0,C,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==S.zOrigin&&Ai(this,S,"zOrigin",S.zOrigin,_),Ai(this,a,d,Ma(c),Ma(u)));continue}else if(d==="svgOrigin"){Lc(e,u,1,C,0,this);continue}else if(d in Im){e1(this,S,d,h,M?Jr(h,M+u):u);continue}else if(d==="smoothOrigin"){Ai(this,S,"smooth",S.smooth,u);continue}else if(d==="force3D"){S[d]=u;continue}else if(d==="transform"){t1(this,u,e);continue}}else d in a||(d=_s(d)||d);if(x||(f||f===0)&&(h||h===0)&&!FT.test(u)&&d in a)m=(c+"").substr((h+"").length),f||(f=0),_=Dt(u)||(d in an.units?an.units[d]:m),m!==_&&(h=Fi(e,d,c,_)),this._pt=new $t(this._pt,x?S:a,d,h,(M?Jr(h,M+f):f)-h,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?BT:Ec),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=zT);else if(d in a)KT.call(this,e,d,c,M?M+u:u);else if(d in e)this.add(e,d,c||e[d],M?M+u:u,i,s);else if(d!=="parseTransform"){_u(d,u);continue}x||(d in a?v.push(d,0,a[d]):v.push(d,1,c||e[d])),o.push(d)}}L&&wm(this)},render:function(e,t){if(t.tween._time||!Au())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ti,aliases:si,getSetter:function(e,t,n){var i=si[t];return i&&i.indexOf(",")<0&&(t=i),t in hi&&t!==Dn&&(e._gsap.x||ti(e,"x"))?n&&Qh===n?t==="scale"?HT:GT:(Qh=n||{})&&(t==="scale"?WT:XT):e.style&&!mu(e.style[t])?kT:~t.indexOf("-")?VT:wu(e,t)},core:{_removeProperty:mo,_getMatrix:Lu}};cn.utils.checkPrefix=_s;cn.core.getStyleSaver=Lm;(function(r,e,t,n){var i=Kt(r+","+e+","+t,function(s){hi[s]=1});Kt(e,function(s){an.units[s]="deg",Im[s]=1}),si[i[13]]=r+","+e,Kt(n,function(s){var o=s.split(":");si[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){an.units[r]="px"});cn.registerPlugin(Fm);var Mi=cn.registerPlugin(Fm)||cn;Mi.core.Tween;const n1={__name:"App",setup(r){const e={x:0,y:0};let t,n,i,s;window.addEventListener("mousemove",m=>{e.x=m.clientX/window.innerWidth-.5,e.y=m.clientY/window.innerHeight-.5});var o=new It({repeat:50,repeatDelay:0}),a=new It({repeat:50,repeatDelay:0});jc(()=>{console.log(Bh),l(),f(),Mi.to(s,{intensity:5,duration:4})});function l(){const m=document.createElement("div"),_=document.getElementById("app");m.classList.add("soon"),_.appendChild(m),t=new Wt(100,window.innerWidth/window.innerHeight,.1,100),n=new AS,new Bh().setPath("/").load("model.glb",function(M){n.add(M.scene);let x=15;M.scene.children.forEach(y=>{console.log(y.name),y.name=="Gear007"&&(Mi.fromTo(y.material,{opacity:0},{opacity:1,duration:5,ease:"none"}),Mi.fromTo(y.position,{z:y.position.z-1,x:y.position.x-1},{z:y.position.z,x:y.position.x,duration:1,ease:"inOut"}),o.fromTo(y.rotation,{x:0},{x:Math.PI*2,duration:10,ease:"none"})),y.name=="Gear009"&&(console.log(y),Mi.fromTo(y.position,{z:y.position.z-1,x:y.position.x-1},{z:y.position.z,x:y.position.x,duration:2,ease:"inOut"}),console.log(y.material.opacity),a.fromTo(y.rotation,{x:0},{x:-Math.PI*2,duration:15,ease:"none"})),y.name.startsWith("Text")&&(Mi.fromTo(y.position,{z:y.position.z-1,x:y.position.x-1},{z:y.position.z,x:y.position.x,duration:1,ease:"inOut"},x*.1),x--)}),M.castShadow=!0,console.log(M),u()}),s=new Fp(5592473,5),s.position.set(25,50,25),s.angle=Math.PI/6,s.penumbra=1,s.decay=2,s.distance=100,s.castShadow=!0,s.intensity=0,s.shadow.mapSize.width=1024,s.shadow.mapSize.height=1024,s.shadow.camera.near=10,s.shadow.camera.far=200,s.shadow.focus=1,s.spotLight=.5,n.add(s),i=new Cp({antialias:!0}),i.setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),i.toneMapping=sp,i.toneMappingExposure=1,i.outputEncoding=Ye,m.appendChild(i.domElement),t.position.set(6.5,2,.4),t.rotation.set(6.5,1.6,-.2),Mi.fromTo(t.position,{x:6.5},{x:3.6,duration:3,ease:"inOut"}),Mi.fromTo(t.rotation,{x:7.5},{x:6.5,duration:3,ease:"inOut"}),window.addEventListener("resize",c)}function c(){t.aspect=window.innerWidth/window.innerHeight,console.log(window.innerWidth),console.log(t.position.x),t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),f()}function u(){requestAnimationFrame(u),t.position.z=e.x*3,t.position.y=e.y,window.innerWidth<=600?t.position.set(7.5,t.position.y,t.position.z):t.position.set(3.6,t.position.y,t.position.z),f()}function f(){i.render(n,t)}const h=Cs(),p=Cs();Cs(),Cs();const g=Cs("ss");window.DeviceOrientationEvent&&(g.value="done!",window.addEventListener("devicemotion",m=>{g.value="in event",accIncGravity=m.accelerationIncludingGravity;try{const _=accIncGravity.x,M=accIncGravity.y,x=accIncGravity.z}catch(_){g.value=_}h.value=gx,p.value=gy,g.value=`inevent ${gx} -- ${gy}`,d(gx,gy,gz)},!1));const d=(m,_,M)=>{t.position.z=t.position.z+m*2,t.position.y=t.position.y+_*2};return(m,_)=>Ga(g.value)+" "+Ga(h.value)+" "+Ga(p.value)}};m0(n1).mount("#app");
