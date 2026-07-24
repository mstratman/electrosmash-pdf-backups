var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function n(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
n("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
n("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){if(!(a instanceof Array)){a=p(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ha(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ha(d,e)&&(a[e]=d[e])}return a};
n("Object.assign",function(a){return a||ia});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ka(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function r(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ba=b.prototype}
function ra(){this.D=!1;this.m=null;this.j=void 0;this.i=1;this.s=this.o=0;this.B=this.l=null}
function sa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
ra.prototype.v=function(a){this.j=a};
function ta(a,b){a.l={ub:b,zb:!0};a.i=a.o||a.s}
ra.prototype.return=function(a){this.l={return:a};this.i=this.s};
function t(a,b,c){a.i=c;return{value:b}}
ra.prototype.u=function(a){this.i=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.s=c)}
function xa(a,b){a.i=b;a.o=0}
function ya(a){a.o=0;var b=a.l.ub;a.l=null;return b}
function za(a){a.B=[a.l];a.o=0;a.s=0}
function Aa(a){var b=a.B.splice(0)[0];(b=a.l=a.l||b)?b.zb?a.i=a.o||a.s:void 0!=b.u&&a.s<b.u?(a.i=b.u,a.l=null):a.i=a.s:a.i=0}
function Da(a){this.i=new ra;this.j=a}
function Ea(a,b){sa(a.i);var c=a.i.m;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.i.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.D=!1,e;var f=e.value}catch(g){return a.i.m=null,ta(a.i,g),Ga(a)}a.i.m=null;d.call(a.i,f);return Ga(a)}
function Ga(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.D=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,ta(a.i,c)}a.i.D=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.zb)throw b.ub;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){sa(a.i);a.i.m?b=Fa(a,a.i.m.next,b,a.i.v):(a.i.v(b),b=Ga(a));return b};
this.throw=function(b){sa(a.i);a.i.m?b=Fa(a,a.i.m["throw"],b,a.i.v):(ta(a.i,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function w(a){return Ia(new Ha(new Da(a)))}
function Ja(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
n("Reflect",function(a){return a?a:{}});
n("Reflect.construct",function(){return la});
n("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
n("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.D=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.s()})}this.i.push(g)};
var e=da.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.s=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.m(m)}}}this.i=null};
c.prototype.m=function(g){this.l(function(){throw g;})};
b.prototype.m=function(){function g(m){return function(q){k||(k=!0,m.call(h,q))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.s)}};
b.prototype.U=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.N(g):this.o(g)}};
b.prototype.N=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.oa(h,g):this.o(g)};
b.prototype.s=function(g){this.v(2,g)};
b.prototype.o=function(g){this.v(1,g)};
b.prototype.v=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.Z();this.B()};
b.prototype.Z=function(){var g=this;e(function(){if(g.M()){var h=da.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.M=function(){if(this.D)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.B=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.ga=function(g){var h=this.m();g.Ja(h.resolve,h.reject)};
b.prototype.oa=function(g,h){var k=this.m();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(y,v){return"function"==typeof y?function(E){try{m(y(E))}catch(F){q(F)}}:v}
var m,q,u=new b(function(y,v){m=y;q=v});
this.Ja(k(g,m),k(h,q));return u};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Ja=function(g,h){function k(){switch(m.i){case 1:g(m.l);break;case 2:h(m.l);break;default:throw Error("Unexpected state: "+m.i);}}
var m=this;null==this.j?f.j(k):this.j.push(k);this.D=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=p(g),q=m.next();!q.done;q=m.next())d(q.value).Ja(h,k)})};
b.all=function(g){var h=p(g),k=h.next();return k.done?d([]):new b(function(m,q){function u(E){return function(F){y[E]=F;v--;0==v&&m(y)}}
var y=[],v=0;do y.push(void 0),v++,d(k.value).Ja(u(y.length-1),q),k=h.next();while(!k.done)})};
return b});
n("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=p(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ha(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(q){if(q instanceof c)return q;Object.isExtensible(q)&&e(q);return m(q)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),q=new a([[k,2],[m,3]]);if(2!=q.get(k)||3!=q.get(m))return!1;q.delete(k);q.set(m,4);return!q.has(k)&&4==q.get(m)}catch(u){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ha(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=m;return this};
b.prototype.get=function(k){return d(k)&&ha(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ha(k,g)&&ha(k[g],this.i)?delete k[g][this.i]:!1};
return b});
n("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.i;return ea(function(){if(m){for(;m.head!=h.i;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var q=h.data_[m];if(q&&ha(h.data_,m))for(h=0;h<q.length;h++){var u=q[h];if(k!==k&&u.key!==u.key||k===u.key)return{id:m,list:q,index:h,entry:u}}return{id:m,list:q,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=p(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(p([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),q=m.next();if(q.done||q.value[0]!=h||"s"!=q.value[1])return!1;q=m.next();return q.done||4!=q.value[0].x||"t"!=q.value[1]||!m.next().done?!1:!0}catch(u){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},m.list.push(m.entry),this.i.previous.next=m.entry,this.i.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),q;!(q=m.next()).done;)q=q.value,h.call(k,q[1],q[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ka(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
n("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
n("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
n("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
n("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
n("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
n("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function La(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
n("Array.prototype.entries",function(a){return a?a:function(){return La(this,function(b,c){return[b,c]})}});
n("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
n("Object.setPrototypeOf",function(a){return a||qa});
n("Set",function(a){function b(c){this.i=new Map;if(c){c=p(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(p([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
n("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push([d,b[d]]);return c}});
n("Array.prototype.keys",function(a){return a?a:function(){return La(this,function(b){return b})}});
n("Array.prototype.values",function(a){return a?a:function(){return La(this,function(b,c){return c})}});
n("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
n("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
n("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
n("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ka(this,b,"includes").indexOf(b,c||0)}});
n("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ha(b,d)&&c.push(b[d]);return c}});
var x=this||self;function z(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||x;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ma(a){a.cb=void 0;a.getInstance=function(){return a.cb?a.cb:a.cb=new a}}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Wa=Ua:Wa=Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(a,b){function c(){}
c.prototype=b.prototype;a.ba=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.bp=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Za(a){return a}
;function $a(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,$a);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Pb=b)}
Ya($a,Error);$a.prototype.name="CustomError";function ab(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function bb(){}
function cb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var db=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},eb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},fb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},gb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},hb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
eb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function ib(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function jb(a,b){b=db(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a){for(var b in a)return!1;return!0}
function pb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var wb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<wb.length;f++)c=wb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var yb;function zb(){if(void 0===yb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Za,createScript:Za,createScriptURL:Za})}catch(c){x.console&&x.console.error(c.message)}yb=a}else yb=a}return yb}
;function Ab(a,b){this.l=a===Bb&&b||""}
Ab.prototype.j=!0;Ab.prototype.i=function(){return this.l};
function Cb(a){return new Ab(Bb,a)}
var Bb={};Cb("");var Db={};function Eb(a){this.l=Db===Db?a:"";this.j=!0}
Eb.prototype.i=function(){return this.l.toString()};
Eb.prototype.toString=function(){return this.l.toString()};function Fb(a,b){this.l=b===Gb?a:""}
Fb.prototype.j=!0;Fb.prototype.i=function(){return this.l.toString()};
Fb.prototype.toString=function(){return this.l+""};
function Hb(a){if(a instanceof Fb&&a.constructor===Fb)return a.l;Oa(a);return"type_error:TrustedResourceUrl"}
var Gb={};function Ib(a){var b=zb();a=b?b.createScriptURL(a):a;return new Fb(a,Gb)}
;var Jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};function Mb(a,b){this.l=b===Nb?a:""}
Mb.prototype.j=!0;Mb.prototype.i=function(){return this.l.toString()};
Mb.prototype.toString=function(){return this.l.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.l;Oa(a);return"type_error:SafeUrl"}
var Pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Nb={};function Qb(){var a=x.navigator;return a&&(a=a.userAgent)?a:""}
function B(a){return-1!=Qb().indexOf(a)}
;function Rb(){return(B("Chrome")||B("CriOS"))&&!B("Edge")||B("Silk")}
;var Sb={};function Tb(a){this.l=Sb===Sb?a:"";this.j=!0}
Tb.prototype.i=function(){return this.l.toString()};
Tb.prototype.toString=function(){return this.l.toString()};function Ub(a,b){b instanceof Mb||b instanceof Mb||(b="object"==typeof b&&b.j?b.i():String(b),Pb.test(b)||(b="about:invalid#zClosurez"),b=new Mb(b,Nb));a.href=Ob(b)}
function Vb(a,b){a.rel="stylesheet";a.href=Hb(b).toString();(b=Wb('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function Xb(){return Wb("script[nonce]")}
var Yb=/^[\w+/_-]+[=]{0,2}$/;function Wb(a,b){b=(b||x).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&Yb.test(a)?a:"":""}
;function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ec(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function fc(a){var b=[],c;for(c in a)ec(c,a[c],b);return b.join("&")}
function gc(a,b){b=fc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function hc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var ic=/#|$/,mc=/[?&]($|#)/;function nc(a){for(var b=a.search(ic),c=0,d,e=[];0<=(d=hc(a,c,"key",b));)e.push(a.substring(c,d)),c=Math.min(a.indexOf("&",d)+1||b,b);e.push(a.slice(c));return e.join("").replace(mc,"$1")}
;function oc(){return B("iPhone")&&!B("iPod")&&!B("iPad")}
;function pc(a){pc[" "](a);return a}
pc[" "]=function(){};var qc=B("Opera"),rc=B("Trident")||B("MSIE"),sc=B("Edge"),tc=B("Gecko")&&!(-1!=Qb().toLowerCase().indexOf("webkit")&&!B("Edge"))&&!(B("Trident")||B("MSIE"))&&!B("Edge"),uc=-1!=Qb().toLowerCase().indexOf("webkit")&&!B("Edge"),vc=B("Android");function wc(){var a=x.document;return a?a.documentMode:void 0}
var xc;a:{var yc="",zc=function(){var a=Qb();if(tc)return/rv:([^\);]+)(\)|;)/.exec(a);if(sc)return/Edge\/([\d\.]+)/.exec(a);if(rc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(uc)return/WebKit\/(\S+)/.exec(a);if(qc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
zc&&(yc=zc?zc[1]:"");if(rc){var Ac=wc();if(null!=Ac&&Ac>parseFloat(yc)){xc=String(Ac);break a}}xc=yc}var Bc=xc,Cc;if(x.document&&rc){var Dc=wc();Cc=Dc?Dc:parseInt(Bc,10)||void 0}else Cc=void 0;var Ec=Cc;var Fc=oc()||B("iPod"),Gc=B("iPad");!B("Android")||Rb();Rb();var Hc=B("Safari")&&!(Rb()||B("Coast")||B("Opera")||B("Edge")||B("Edg/")||B("OPR")||B("Firefox")||B("FxiOS")||B("Silk")||B("Android"))&&!(oc()||B("iPad")||B("iPod"));var Ic={},Jc=null;
function Kc(a,b){Pa(a);void 0===b&&(b=0);if(!Jc){Jc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ic[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Jc[h]&&(Jc[h]=g)}}}b=Ic[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],m=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|m>>4];m=b[(m&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+m+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Lc="undefined"!==typeof Uint8Array;var Mc={};var Nc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Oc(a,b){Object.isFrozen(a)||(Nc?a[Nc]|=b:void 0!==a.Na?a.Na|=b:Object.defineProperties(a,{Na:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Pc(a){var b;Nc?b=a[Nc]:b=a.Na;return null==b?0:b}
function Qc(a){Oc(a,1);return a}
function Rc(a){return Array.isArray(a)?!!(Pc(a)&2):!1}
function Sc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Oc(a,2)}
;function Tc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Xc,Yc=Object.freeze(Qc([]));function Zc(a){if(Rc(a.H))throw Error("Cannot mutate an immutable Message");}
var $c="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function ad(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function bd(a){x.setTimeout(function(){throw a;},0)}
;function cd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Lc&&null!=a&&a instanceof Uint8Array)return Kc(a)}return a}
;function dd(a,b){b=void 0===b?ed:b;return fd(a,b)}
function gd(a,b){if(null!=a){if(Array.isArray(a))a=fd(a,b);else if(Tc(a)){var c={},d;for(d in a)c[d]=gd(a[d],b);a=c}else a=b(a);return a}}
function fd(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=gd(c[d],b);Array.isArray(a)&&Pc(a)&1&&Qc(c);return c}
function hd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=cd(a);return Array.isArray(a)?dd(a,hd):a}
function ed(a){return Lc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function id(a,b,c){return-1===b?null:b>=a.m?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.H[b+a.l]}
function C(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Zc(a);b<a.m&&!d?a.H[b+a.l]=c:(a.j||(a.j=a.H[a.m+a.l]={}))[b]=c;return a}
function jd(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=id(a,b,d);null==e&&(e=Yc);if(Rc(a.H))c&&(Sc(e),Object.freeze(e));else if(e===Yc||Rc(e))e=Qc(e.slice()),C(a,b,e,d);return e}
function kd(a,b,c,d){Zc(a);(c=ld(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),C(a,c));return C(a,b,d)}
function ld(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=id(a,e)&&(0!==c&&C(a,c,void 0,!1,!0),c=e)}return c}
function md(a,b,c,d,e){if(-1===c)return null;a.i||(a.i={});var f=a.i[c];if(f)return f;e=id(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);Rc(a.H)&&Sc(b.H);return a.i[c]=b}
function nd(a,b,c,d){d=void 0===d?!1:d;a.i||(a.i={});var e=Rc(a.H),f=a.i[c];if(!f){d=jd(a,c,!0,d);f=[];e=e||Rc(d);for(var g=0;g<d.length;g++)f[g]=new b(d[g]),e&&Sc(f[g].H);e&&(Sc(f),Object.freeze(f));a.i[c]=f}return f}
function D(a,b,c){var d=void 0===d?!1:d;Zc(a);a.i||(a.i={});var e=null!=c?c.H:c;a.i[b]=c;return C(a,b,e,d)}
function od(a,b,c,d){Zc(a);a.i||(a.i={});var e=null!=d?d.H:d;a.i[b]=d;kd(a,b,c,e)}
function pd(a,b,c,d){var e=void 0===e?!1:e;Zc(a);e=nd(a,c,b,e);c=null!=d?d:new c;a=jd(a,b);e.push(c);a.push(c.H)}
function qd(a,b){a=id(a,b);return null==a?"":a}
;function rd(a,b,c){a||(a=sd);sd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.l=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.H=a;a:{d=this.H.length;a=d-1;if(d&&(d=this.H[a],Tc(d))){this.m=a-this.l;this.j=d;break a}void 0!==b&&-1<b?(this.m=Math.max(b,a+1-this.l),this.j=void 0):this.m=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.m)a+=this.l,(d=this.H[a])?Array.isArray(d)&&Qc(d):this.H[a]=Yc;else{d=this.j||(this.j=this.H[this.m+this.l]={});var e=d[a];e?Array.isArray(e)&&
Qc(e):d[a]=Yc}}
rd.prototype.toJSON=function(){var a=this.H;return Xc?a:dd(a,hd)};
rd.prototype.clone=function(){var a=dd(this.H);sd=a;a=new this.constructor(a);sd=null;td(a,this);return a};
rd.prototype.isMutable=function(a){if(a!==Mc)throw Error("requires a valid immutable API token");return!Rc(this.H)};
rd.prototype.toString=function(){return this.H.toString()};
function ud(a,b){return cd(b)}
function td(a,b){b.s&&(a.s=b.s.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=nd(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)td(f[g],e[g])}else(f=md(a,e.constructor,g,void 0,f))&&td(f,e)}}}}
var sd;function vd(){rd.apply(this,arguments)}
r(vd,rd);if($c){var wd={};Object.defineProperties(vd,(wd[Symbol.hasInstance]=ad(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),wd))};function I(){vd.apply(this,arguments)}
r(I,vd);if($c){var xd={};Object.defineProperties(I,(xd[Symbol.hasInstance]=ad(Object[Symbol.hasInstance]),xd))};function yd(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function zd(a){this.j=!1;var b=a.program;a=a.globalName;var c=new yd;this.l=c.promise;this.m=p((0,x[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Ob:d,xc:e})})},!0)).next().value;
this.wc=c.promise.then(function(){})}
zd.prototype.snapshot=function(a){if(this.j)throw Error("Already disposed");return this.l.then(function(b){var c=b.Ob;return new Promise(function(d){c(function(e){d(e)},[a.pb,
a.yc])})})};
zd.prototype.dispose=function(){this.j=!0;this.l.then(function(a){(a=a.xc)&&a()})};
zd.prototype.i=function(){return this.j};var Ad=window;Cb("csi.gstatic.com");Cb("googleads.g.doubleclick.net");Cb("partner.googleadservices.com");Cb("pubads.g.doubleclick.net");Cb("securepubads.g.doubleclick.net");Cb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Bd={};function Cd(){}
function Dd(a){this.i=a}
r(Dd,Cd);Dd.prototype.toString=function(){return this.i};
var Ed=new Dd("about:invalid#zTSz",Bd);function Fd(a){if(a instanceof Cd)if(a instanceof Dd)a=a.i;else throw Error("");else a=Ob(a);return a}
;function Gd(a,b){a.src=Hb(b);var c,d;(c=(b=null==(d=(c=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?b.nonce||b.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function Hd(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=Hd.prototype;l.clone=function(){return new Hd(this.x,this.y)};
l.equals=function(a){return a instanceof Hd&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function Id(a,b){this.width=a;this.height=b}
l=Id.prototype;l.clone=function(){return new Id(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.isEmpty=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Jd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Kd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Ld(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Md(a){var b=Nd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Od(){var a=[];Md(function(b){a.push(b)});
return a}
var Nd={Pc:"allow-forms",Qc:"allow-modals",Rc:"allow-orientation-lock",Sc:"allow-pointer-lock",Tc:"allow-popups",Uc:"allow-popups-to-escape-sandbox",Vc:"allow-presentation",Wc:"allow-same-origin",Xc:"allow-scripts",Yc:"allow-top-navigation",Zc:"allow-top-navigation-by-user-activation"},Pd=cb(function(){return Od()});
function Qd(){var a=Rd(),b={};eb(Pd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Rd(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Sd(a){this.isValid=a}
function Wd(a){return new Sd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Xd=[Wd("data"),Wd("http"),Wd("https"),Wd("mailto"),Wd("ftp"),new Sd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Yd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Zd=(new Date).getTime();function $d(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var ae="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");fa(ae);function be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;q=m=0}
function b(u){for(var y=g,v=0;64>v;v+=4)y[v/4]=u[v]<<24|u[v+1]<<16|u[v+2]<<8|u[v+3];for(v=16;80>v;v++)u=y[v-3]^y[v-8]^y[v-14]^y[v-16],y[v]=(u<<1|u>>>31)&4294967295;u=e[0];var E=e[1],F=e[2],H=e[3],R=e[4];for(v=0;80>v;v++){if(40>v)if(20>v){var O=H^E&(F^H);var S=1518500249}else O=E^F^H,S=1859775393;else 60>v?(O=E&F|H&(E|F),S=2400959708):(O=E^F^H,S=3395469782);O=((u<<5|u>>>27)&4294967295)+O+R+S+y[v]&4294967295;R=H;H=F;F=(E<<30|E>>>2)&4294967295;E=u;u=O}e[0]=e[0]+u&4294967295;e[1]=e[1]+E&4294967295;e[2]=
e[2]+F&4294967295;e[3]=e[3]+H&4294967295;e[4]=e[4]+R&4294967295}
function c(u,y){if("string"===typeof u){u=unescape(encodeURIComponent(u));for(var v=[],E=0,F=u.length;E<F;++E)v.push(u.charCodeAt(E));u=v}y||(y=u.length);v=0;if(0==m)for(;v+64<y;)b(u.slice(v,v+64)),v+=64,q+=64;for(;v<y;)if(f[m++]=u[v++],q++,64==m)for(m=0,b(f);v+64<y;)b(u.slice(v,v+64)),v+=64,q+=64}
function d(){var u=[],y=8*q;56>m?c(h,56-m):c(h,64-(m-56));for(var v=63;56<=v;v--)f[v]=y&255,y>>>=8;b(f);for(v=y=0;5>v;v++)for(var E=24;0<=E;E-=8)u[y++]=e[v]>>E&255;return u}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,q;a();return{reset:a,update:c,digest:d,Sb:function(){for(var u=d(),y="",v=0;v<u.length;v++)y+="0123456789ABCDEF".charAt(Math.floor(u[v]/16))+"0123456789ABCDEF".charAt(u[v]%16);return y}}}
;function ce(a,b,c){var d=String(x.location.href);return d&&a&&b?[b,de($d(d),a,c||null)].join(" "):null}
function de(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],eb(d,function(h){e.push(h)}),ee(e.join(" "));
var f=[],g=[];eb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];eb(d,function(h){e.push(h)});
a=ee(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function ee(a){var b=be();b.update(a);return b.Sb().toLowerCase()}
;var fe={};function ge(a){this.i=a||{cookie:""}}
l=ge.prototype;l.isEnabled=function(){if(!x.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Pa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.np;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Pa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Jb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Pa:0,path:b,domain:c});return d};
l.Za=function(){return he(this).keys};
l.isEmpty=function(){return!this.i.cookie};
l.clear=function(){for(var a=he(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function he(a){a=(a.i.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Jb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var ie=new ge("undefined"==typeof document?null:document);function je(a){return!!fe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ke(a){a=void 0===a?!1:a;var b=x.__SAPISID||x.__APISID||x.__3PSAPISID||x.__OVERRIDE_SID;je(a)&&(b=b||x.__1PSAPISID);if(b)return!0;var c=new ge(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");je(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function le(a,b,c,d){(a=x[a])||(a=(new ge(document)).get(b));return a?ce(a,c,d):null}
function me(a){var b=void 0===b?!1:b;var c=$d(String(x.location.href)),d=[];if(ke(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?x.__SAPISID:x.__APISID;e||(e=new ge(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?ce(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&je(b)&&((b=le("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=le("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function ne(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function oe(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?oe.apply(null,d):ne(d)}}
;function J(){this.D=this.D;this.s=this.s}
J.prototype.D=!1;J.prototype.i=function(){return this.D};
J.prototype.dispose=function(){this.D||(this.D=!0,this.J())};
function pe(a,b){a.D?b():(a.s||(a.s=[]),a.s.push(b))}
J.prototype.J=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function qe(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
qe.prototype.stopPropagation=function(){this.l=!0};
qe.prototype.preventDefault=function(){this.defaultPrevented=!0};function re(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(g){e="Not available",c=!0}b=se(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,te[c])c=te[c];else{c=String(c);if(!te[c]){var f=/function\s+([^\(]+)/m.exec(c);te[c]=f?f[1]:"[Anonymous]"}c=te[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function se(a,b){b||(b={});b[ue(a)]=!0;var c=a.stack||"";(a=a.Pb)&&!b[ue(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=se(a,b));return c}
function ue(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var te={};var ve=function(){if(!x.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{x.addEventListener("test",function(){},b),x.removeEventListener("test",function(){},b)}catch(c){}return a}();function we(a,b){qe.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Ya(we,qe);var xe={2:"touch",3:"pen",4:"mouse"};
we.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(tc){a:{try{pc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:xe[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&we.ba.preventDefault.call(this)};
we.prototype.stopPropagation=function(){we.ba.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
we.prototype.preventDefault=function(){we.ba.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ye="closure_listenable_"+(1E6*Math.random()|0);var ze=0;function Ae(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ma=e;this.key=++ze;this.za=this.Ia=!1}
function Be(a){a.za=!0;a.listener=null;a.proxy=null;a.src=null;a.Ma=null}
;function Ce(a){this.src=a;this.listeners={};this.i=0}
Ce.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=De(a,b,d,e);-1<g?(b=a[g],c||(b.Ia=!1)):(b=new Ae(b,this.src,f,!!d,e),b.Ia=c,a.push(b));return b};
Ce.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=De(e,b,c,d);return-1<b?(Be(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function Ee(a,b){var c=b.type;c in a.listeners&&jb(a.listeners[c],b)&&(Be(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function De(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.za&&f.listener==b&&f.capture==!!c&&f.Ma==d)return e}return-1}
;var Fe="closure_lm_"+(1E6*Math.random()|0),Ge={},He=0;function Ie(a,b,c,d,e){if(d&&d.once)Je(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ie(a,b[f],c,d,e);else c=Ke(c),a&&a[ye]?a.X(b,c,Qa(d)?!!d.capture:!!d,e):Le(a,b,c,!1,d,e)}
function Le(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=Me(a);h||(a[Fe]=h=new Ce(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Ne();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ve||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Oe(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");He++}}
function Ne(){function a(c){return b.call(a.src,a.listener,c)}
var b=Pe;return a}
function Je(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Je(a,b[f],c,d,e);else c=Ke(c),a&&a[ye]?a.m.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):Le(a,b,c,!0,d,e)}
function Qe(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Qe(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=Ke(c),a&&a[ye])?a.m.remove(String(b),c,d,e):a&&(a=Me(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=De(b,c,d,e)),(c=-1<a?b[a]:null)&&Re(c))}
function Re(a){if("number"!==typeof a&&a&&!a.za){var b=a.src;if(b&&b[ye])Ee(b.m,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Oe(c),d):b.addListener&&b.removeListener&&b.removeListener(d);He--;(c=Me(b))?(Ee(c,a),0==c.i&&(c.src=null,b[Fe]=null)):Be(a)}}}
function Oe(a){return a in Ge?Ge[a]:Ge[a]="on"+a}
function Pe(a,b){if(a.za)a=!0;else{b=new we(b,this);var c=a.listener,d=a.Ma||a.src;a.Ia&&Re(a);a=c.call(d,b)}return a}
function Me(a){a=a[Fe];return a instanceof Ce?a:null}
var Se="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ke(a){if("function"===typeof a)return a;a[Se]||(a[Se]=function(b){return a.handleEvent(b)});
return a[Se]}
;function Te(){J.call(this);this.m=new Ce(this);this.Z=this;this.M=null}
Ya(Te,J);Te.prototype[ye]=!0;Te.prototype.addEventListener=function(a,b,c,d){Ie(this,a,b,c,d)};
Te.prototype.removeEventListener=function(a,b,c,d){Qe(this,a,b,c,d)};
function Ue(a,b){var c=a.M;if(c){var d=[];for(var e=1;c;c=c.M)d.push(c),++e}a=a.Z;c=b.type||b;"string"===typeof b?b=new qe(b,a):b instanceof qe?b.target=b.target||a:(e=b,b=new qe(c,a),xb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Ve(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Ve(g,c,!0,b)&&e,b.l||(e=Ve(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Ve(g,c,!1,b)&&e}
Te.prototype.J=function(){Te.ba.J.call(this);if(this.m){var a=this.m,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Be(d[e]);delete a.listeners[c];a.i--}}this.M=null};
Te.prototype.X=function(a,b,c,d){return this.m.add(String(a),b,!1,c,d)};
function Ve(a,b,c,d){b=a.m.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.za&&g.capture==c){var h=g.listener,k=g.Ma||g.src;g.Ia&&Ee(a.m,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function We(a){Te.call(this);var b=this;this.B=this.l=0;this.W=null!=a?a:{O:function(e,f){return setTimeout(e,f)},
V:clearTimeout};var c,d;this.j=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return w(function(e){return t(e,Xe(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.B||Ye(this)}
r(We,Te);function Ze(){var a=$e;We.i||(We.i=new We(a));return We.i}
We.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.W.V(this.B);delete We.i};
We.prototype.I=function(){return this.j};
function Ye(a){a.B=a.W.O(function(){var b;return w(function(c){if(1==c.i)return a.j?(null==(b=window.navigator)?0:b.onLine)?c.u(3):t(c,Xe(a),3):t(c,Xe(a),3);Ye(a);c.i=0})},3E4)}
function Xe(a,b){return a.v?a.v:a.v=new Promise(function(c){var d,e,f,g;return w(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.l=a.W.O(function(){d.abort()},b||2E4)),t(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:za(h);a.v=void 0;a.l&&(a.W.V(a.l),a.l=0);g!==a.j&&(a.j=g,a.j?Ue(a,"networkstatus-online"):Ue(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:ya(h),g=!1,h.u(3)}})})}
;var af={Qg:"EMBEDDED_PLAYER_MODE_UNKNOWN",Ng:"EMBEDDED_PLAYER_MODE_DEFAULT",Pg:"EMBEDDED_PLAYER_MODE_PFP",Og:"EMBEDDED_PLAYER_MODE_PFL"},bf={Lo:"WEB_DISPLAY_MODE_UNKNOWN",Ho:"WEB_DISPLAY_MODE_BROWSER",Jo:"WEB_DISPLAY_MODE_MINIMAL_UI",Ko:"WEB_DISPLAY_MODE_STANDALONE",Io:"WEB_DISPLAY_MODE_FULLSCREEN"};function cf(){this.data_=[];this.i=-1}
cf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
cf.prototype.get=function(a){return!!this.data_[a]};
function df(a){-1===a.i&&(a.i=hb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function ef(a,b){this.l=a;this.m=b;this.j=0;this.i=null}
ef.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ff(a,b){a.m(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var gf;function hf(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!B("Presto")&&(a=function(){var e=Kd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!B("Trident")&&!B("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.nb;c.nb=null;e()}};
return function(e){d.next={nb:e};d=d.next;b.port2.postMessage(0)}}return function(e){x.setTimeout(e,0)}}
;function jf(){this.j=this.i=null}
jf.prototype.add=function(a,b){var c=kf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
jf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var kf=new ef(function(){return new lf},function(a){return a.reset()});
function lf(){this.next=this.scope=this.i=null}
lf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
lf.prototype.reset=function(){this.next=this.scope=this.i=null};function mf(a,b){nf||of();pf||(nf(),pf=!0);qf.add(a,b)}
var nf;function of(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);nf=function(){a.then(rf)}}else nf=function(){var b=rf;
"function"!==typeof x.setImmediate||x.Window&&x.Window.prototype&&!B("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(gf||(gf=hf()),gf(b)):x.setImmediate(b)}}
var pf=!1,qf=new jf;function rf(){for(var a;a=qf.remove();){try{a.i.call(a.scope)}catch(b){bd(b)}ff(kf,a)}pf=!1}
;function sf(a,b){this.i=a[x.Symbol.iterator]();this.j=b}
sf.prototype[Symbol.iterator]=function(){return this};
sf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function tf(a,b){return new sf(a,b)}
;function uf(){this.blockSize=-1}
;function vf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.s=[];this.o=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.m=this.j=0;this.reset()}
Ya(vf,uf);vf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.m=this.j=0};
function wf(a,b,c){c||(c=0);var d=a.o;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
vf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.j;d<b;){if(0==f)for(;d<=c;)wf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){wf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){wf(this,e);f=0;break}}this.j=f;this.m+=b}};
vf.prototype.digest=function(){var a=[],b=8*this.m;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;wf(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function xf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function yf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function zf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:xf(a).match(/\S+/g)||[],b=0<=db(a,b));return b}
function Af(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):zf(a,"inverted-hdpi")&&yf(a,Array.prototype.filter.call(a.classList?a.classList:xf(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Bf(){}
Bf.prototype.next=function(){return Cf};
var Cf={done:!0,value:void 0};function Df(a){return{value:a,done:!1}}
Bf.prototype.aa=function(){return this};function Ef(a){if(a instanceof Ff||a instanceof Gf||a instanceof Hf)return a;if("function"==typeof a.next)return new Ff(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Ff(function(){return a[Symbol.iterator]()});
if("function"==typeof a.aa)return new Ff(function(){return a.aa()});
throw Error("Not an iterator or iterable.");}
function Ff(a){this.j=a}
Ff.prototype.aa=function(){return new Gf(this.j())};
Ff.prototype[Symbol.iterator]=function(){return new Hf(this.j())};
Ff.prototype.i=function(){return new Hf(this.j())};
function Gf(a){this.j=a}
r(Gf,Bf);Gf.prototype.next=function(){return this.j.next()};
Gf.prototype[Symbol.iterator]=function(){return new Hf(this.j)};
Gf.prototype.i=function(){return new Hf(this.j)};
function Hf(a){Ff.call(this,function(){return a});
this.l=a}
r(Hf,Ff);Hf.prototype.next=function(){return this.l.next()};function If(a,b){this.j={};this.i=[];this.ja=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof If)for(c=a.Za(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=If.prototype;l.Za=function(){Jf(this);return this.i.concat()};
l.has=function(a){return Kf(this.j,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Lf;Jf(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Lf(a,b){return a===b}
l.isEmpty=function(){return 0==this.size};
l.clear=function(){this.j={};this.ja=this.size=this.i.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Kf(this.j,a)?(delete this.j[a],--this.size,this.ja++,this.i.length>2*this.size&&Jf(this),!0):!1};
function Jf(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Kf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Kf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
l.get=function(a,b){return Kf(this.j,a)?this.j[a]:b};
l.set=function(a,b){Kf(this.j,a)||(this.size+=1,this.i.push(a),this.ja++);this.j[a]=b};
l.forEach=function(a,b){for(var c=this.Za(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new If(this)};
l.keys=function(){return Ef(this.aa(!0)).i()};
l.values=function(){return Ef(this.aa(!1)).i()};
l.entries=function(){var a=this;return tf(this.keys(),function(b){return[b,a.get(b)]})};
l.aa=function(a){Jf(this);var b=0,c=this.ja,d=this,e=new Bf;e.next=function(){if(c!=d.ja)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return Cf;var f=d.i[b++];return Df(a?f:d.j[f])};
return e};
function Kf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Of(a){var b=[];Pf(new Qf,a,b);return b.join("")}
function Qf(){}
function Pf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Pf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Rf(d,c),c.push(":"),Pf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Rf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Sf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Tf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Rf(a,b){b.push('"',a.replace(Tf,function(c){var d=Sf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Sf[c]=d);return d}),'"')}
;function Uf(a){this.i=0;this.D=void 0;this.m=this.j=this.l=null;this.s=this.o=!1;if(a!=bb)try{var b=this;a.call(void 0,function(c){Vf(b,2,c)},function(c){Vf(b,3,c)})}catch(c){Vf(this,3,c)}}
function Wf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Wf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Xf=new ef(function(){return new Wf},function(a){a.reset()});
function Yf(a,b,c){var d=Xf.get();d.j=a;d.onRejected=b;d.context=c;return d}
function Zf(a){return new Uf(function(b,c){c(a)})}
Uf.prototype.then=function(a,b,c){return $f(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Uf.prototype.$goog_Thenable=!0;function ag(a,b){return $f(a,null,b)}
Uf.prototype.cancel=function(a){if(0==this.i){var b=new bg(a);mf(function(){cg(this,b)},this)}};
function cg(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?cg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):dg(c),eg(c,e,3,b)))}a.l=null}else Vf(a,3,b)}
function fg(a,b){a.j||2!=a.i&&3!=a.i||gg(a);a.m?a.m.next=b:a.j=b;a.m=b}
function $f(a,b,c,d){var e=Yf(null,null,null);e.i=new Uf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof bg?g(h):f(k)}catch(m){g(m)}}:g});
e.i.l=a;fg(a,e);return e.i}
Uf.prototype.B=function(a){this.i=0;Vf(this,2,a)};
Uf.prototype.M=function(a){this.i=0;Vf(this,3,a)};
function Vf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.B,f=a.M;if(d instanceof Uf){fg(d,Yf(e||bb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){hg(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.D=c,a.i=b,a.l=null,gg(a),3!=b||c instanceof bg||ig(a,c))}}
function hg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function gg(a){a.o||(a.o=!0,mf(a.v,a))}
function dg(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.m=null);return b}
Uf.prototype.v=function(){for(var a;a=dg(this);)eg(this,a,this.i,this.D);this.o=!1};
function eg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.s;a=a.l)a.s=!1;if(b.i)b.i.l=null,jg(b,c,d);else try{b.l?b.j.call(b.context):jg(b,c,d)}catch(e){kg.call(null,e)}ff(Xf,b)}
function jg(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function ig(a,b){a.s=!0;mf(function(){a.s&&kg.call(null,b)})}
var kg=bd;function bg(a){$a.call(this,a)}
Ya(bg,$a);bg.prototype.name="cancel";function K(a){J.call(this);this.v=1;this.m=[];this.o=0;this.j=[];this.l={};this.B=!!a}
Ya(K,J);l=K.prototype;l.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.v;this.j[e]=a;this.j[e+1]=b;this.j[e+2]=c;this.v=e+3;d.push(e);return e};
function lg(a,b,c,d){if(b=a.l[b]){var e=a.j;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.va(b)}}
l.va=function(a){var b=this.j[a];if(b){var c=this.l[b];0!=this.o?(this.m.push(a),this.j[a+1]=function(){}):(c&&jb(c,a),delete this.j[a],delete this.j[a+1],delete this.j[a+2])}return!!b};
l.ka=function(a,b){var c=this.l[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];mg(this.j[g+1],this.j[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.i();e++)g=c[e],this.j[g+1].apply(this.j[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.va(c)}}return 0!=e}return!1};
function mg(a,b,c){mf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.va,this),delete this.l[a])}else this.j.length=0,this.l={}};
l.J=function(){K.ba.J.call(this);this.clear();this.m.length=0};function ng(a){this.i=a}
ng.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,Of(b))};
ng.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ng.prototype.remove=function(a){this.i.remove(a)};function og(a){this.i=a}
Ya(og,ng);function pg(a){this.data=a}
function qg(a){return void 0===a||a instanceof pg?a:new pg(a)}
og.prototype.set=function(a,b){og.ba.set.call(this,a,qg(b))};
og.prototype.j=function(a){a=og.ba.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
og.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rg(a){this.i=a}
Ya(rg,og);rg.prototype.set=function(a,b,c){if(b=qg(b)){if(c){if(c<Date.now()){rg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}rg.ba.set.call(this,a,b)};
rg.prototype.j=function(a){var b=rg.ba.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())rg.prototype.remove.call(this,a);else return b}};function sg(){}
;function tg(){}
Ya(tg,sg);tg.prototype[Symbol.iterator]=function(){return Ef(this.aa(!0)).i()};
tg.prototype.clear=function(){var a=Array.from(this);a=p(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ug(a){this.i=a}
Ya(ug,tg);l=ug.prototype;l.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeItem(a)};
l.aa=function(a){var b=0,c=this.i,d=new Bf;d.next=function(){if(b>=c.length)return Cf;var e=c.key(b++);if(a)return Df(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Df(e)};
return d};
l.clear=function(){this.i.clear()};
l.key=function(a){return this.i.key(a)};function vg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Ya(vg,ug);function wg(a,b){this.j=a;this.i=null;var c;if(c=rc)c=!(9<=Number(Ec));if(c){xg||(xg=new If);this.i=xg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),xg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Ya(wg,tg);var yg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},xg=null;function zg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return yg[b]})}
l=wg.prototype;l.isAvailable=function(){return!!this.i};
l.set=function(a,b){this.i.setAttribute(zg(a),b);Ag(this)};
l.get=function(a){a=this.i.getAttribute(zg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.i.removeAttribute(zg(a));Ag(this)};
l.aa=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new Bf;d.next=function(){if(b>=c.length)return Cf;var e=c[b++];if(a)return Df(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Df(e)};
return d};
l.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Ag(this)};
function Ag(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Bg(a,b){this.j=a;this.i=b+"::"}
Ya(Bg,tg);Bg.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Bg.prototype.get=function(a){return this.j.get(this.i+a)};
Bg.prototype.remove=function(a){this.j.remove(this.i+a)};
Bg.prototype.aa=function(a){var b=this.j[Symbol.iterator](),c=this,d=new Bf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return Df(a?e.slice(c.i.length):c.j.get(e))};
return d};function Cg(a){I.call(this,a)}
r(Cg,I);Cg.prototype.getKey=function(){return id(this,1)};
Cg.prototype.getValue=function(){return id(this,2===ld(this,Dg)?2:-1)};
Cg.prototype.setValue=function(a){return kd(this,2,Dg,a)};
var Dg=[2,3,4,5,6];function Eg(a){I.call(this,a)}
r(Eg,I);function Fg(a){I.call(this,a)}
r(Fg,I);function Gg(a){I.call(this,a,-1,Hg)}
r(Gg,I);Gg.prototype.getPlayerType=function(){return id(this,36)};
Gg.prototype.setHomeGroupInfo=function(a){return D(this,81,a)};
var Hg=[9,66,24,32,86,100,101];function Ig(a){I.call(this,a,-1,Jg)}
r(Ig,I);var Jg=[15,26,28];function Kg(a){I.call(this,a)}
r(Kg,I);Kg.prototype.setToken=function(a){return C(this,2,a)};function Lg(a){I.call(this,a,-1,Mg)}
r(Lg,I);Lg.prototype.setSafetyMode=function(a){return C(this,5,a)};
var Mg=[12];function Ng(a){I.call(this,a,-1,Og)}
r(Ng,I);var Og=[12];function Pg(a){I.call(this,a,-1,Qg)}
r(Pg,I);function Rg(a){I.call(this,a)}
r(Rg,I);Rg.prototype.getKey=function(){return qd(this,1)};
Rg.prototype.getValue=function(){return qd(this,2)};
Rg.prototype.setValue=function(a){return C(this,2,a)};
var Qg=[4,5];function Sg(a){I.call(this,a)}
r(Sg,I);function Tg(a){I.call(this,a)}
r(Tg,I);var Ug=[2,3,4];function Vg(a){I.call(this,a)}
r(Vg,I);Vg.prototype.getMessage=function(){return qd(this,1)};function Wg(a){I.call(this,a)}
r(Wg,I);function Xg(a){I.call(this,a)}
r(Xg,I);function Yg(a){I.call(this,a,-1,Zg)}
r(Yg,I);var Zg=[10,17];function $g(a){I.call(this,a)}
r($g,I);function ah(a){I.call(this,a)}
r(ah,I);ah.prototype.T=function(a){C(this,1,a)};function bh(a){I.call(this,a)}
r(bh,I);function ch(a){I.call(this,a)}
r(ch,I);function dh(a){I.call(this,a)}
r(dh,I);function eh(a,b){D(a,1,b)}
dh.prototype.T=function(a){C(this,2,a)};
function fh(a){I.call(this,a)}
r(fh,I);function gh(a,b){D(a,1,b)}
;function hh(a){I.call(this,a,-1,ih)}
r(hh,I);hh.prototype.T=function(a){C(this,1,a)};
function jh(a,b){D(a,2,b)}
var ih=[3];function kh(a){I.call(this,a)}
r(kh,I);kh.prototype.T=function(a){C(this,1,a)};function lh(a){I.call(this,a)}
r(lh,I);lh.prototype.T=function(a){C(this,1,a)};function mh(a){I.call(this,a)}
r(mh,I);mh.prototype.T=function(a){C(this,1,a)};function nh(a){I.call(this,a)}
r(nh,I);function oh(a){I.call(this,a)}
r(oh,I);function ph(a){I.call(this,a,-1,qh)}
r(ph,I);function rh(a,b){return C(a,1,b)}
ph.prototype.getPlayerType=function(){var a=id(this,7);return null==a?0:a};
ph.prototype.setVideoId=function(a){return C(this,19,a)};
function sh(a,b){return C(a,25,b)}
function th(a,b){pd(a,68,uh,b)}
function uh(a){I.call(this,a)}
r(uh,I);uh.prototype.getId=function(){return qd(this,2)};
var qh=[83,68];function vh(a){I.call(this,a)}
r(vh,I);function wh(a){I.call(this,a)}
r(wh,I);function xh(a){I.call(this,a)}
r(xh,I);function yh(a){I.call(this,a,432)}
r(yh,I);
var zh=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];var Ah={Lh:0,wh:1,Ch:2,Dh:4,Ih:8,Eh:16,Fh:32,Kh:64,Jh:128,yh:256,Ah:512,Hh:1024,zh:2048,Bh:4096,xh:8192,Gh:16384};function Bh(a){I.call(this,a)}
r(Bh,I);function Ch(a){I.call(this,a)}
r(Ch,I);Ch.prototype.setVideoId=function(a){return kd(this,1,Dh,a)};
Ch.prototype.getPlaylistId=function(){return id(this,2===ld(this,Dh)?2:-1)};
var Dh=[1,2];function Eh(a){I.call(this,a,-1,Fh)}
r(Eh,I);var Fh=[3];function Gh(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Hh=x.window,Ih,Jh,Kh=(null==Hh?void 0:null==(Ih=Hh.yt)?void 0:Ih.config_)||(null==Hh?void 0:null==(Jh=Hh.ytcfg)?void 0:Jh.data_)||{};z("yt.config_",Kh);function Lh(){Gh(Kh,arguments)}
function L(a,b){return a in Kh?Kh[a]:b}
function Mh(){var a=Kh.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;function M(a){a=Nh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Oh(a,b){a=Nh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ph(){return L("EXPERIMENTS_TOKEN","")}
function Nh(a){var b=L("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:L("EXPERIMENT_FLAGS",{})[a]}
function Qh(){var a=[],b=L("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=L("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Rh=[];function Sh(a){Rh.forEach(function(b){return b(a)})}
function Th(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Uh(b)}}:a}
function Uh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=L("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Lh("ERRORS",e));Sh(a)}
function Vh(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=L("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Lh("ERRORS",e))}
;function Wh(){var a=Xh;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Yh(a){z("yt.ads.biscotti.lastId_",a)}
;var Zh=/^[\w.]*$/,$h={q:!0,search_query:!0};function ai(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=bi(f[0]||""),h=bi(f[1]||"");g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(u){var k=u,m=f[0],q=String(ai);k.args=[{key:m,value:f[1],query:a,method:ci==q?"unchanged":q}];$h.hasOwnProperty(m)||Vh(k)}}return c}
var ci=String(ai);function di(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];eb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function ei(a){"?"==a.charAt(0)&&(a=a.substr(1));return ai(a,"&")}
function fi(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),ei(1<a.length?a[1]:a[0])):{}}
function gi(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ei(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return gc(a,e)+d}
function hi(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)==d&&(Number(bc(4,b))||null)==(Number(bc(4,a))||null):!0;return a}
function bi(a){return a&&a.match(Zh)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ii(a){var b=ji;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Zd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(ua){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Ad:g;try{var h=g.history.length}catch(ua){h=0}e.u_his=h;var k;e.u_h=null==(k=Ad.screen)?void 0:k.height;var m;e.u_w=null==(m=Ad.screen)?void 0:m.width;var q;e.u_ah=null==(q=Ad.screen)?void 0:q.availHeight;var u;e.u_aw=
null==(u=Ad.screen)?void 0:u.availWidth;var y;e.u_cd=null==(y=Ad.screen)?void 0:y.colorDepth}catch(ua){}h=b.i;try{var v=h.screenX;var E=h.screenY}catch(ua){}try{var F=h.outerWidth;var H=h.outerHeight}catch(ua){}try{var R=h.innerWidth;var O=h.innerHeight}catch(ua){}try{var S=h.screenLeft;var ja=h.screenTop}catch(ua){}try{R=h.innerWidth,O=h.innerHeight}catch(ua){}try{var N=h.screen.availWidth;var Ba=h.screen.availTop}catch(ua){}v=[S,ja,v,E,N,Ba,F,H,R,O];try{var Na=(b.i.top||window).document,va="CSS1Compat"==
Na.compatMode?Na.documentElement:Na.body;var G=(new Id(va.clientWidth,va.clientHeight)).round()}catch(ua){G=new Id(-12245933,-12245933)}Na=G;G={};var Ca=void 0===Ca?x:Ca;va=new cf;Ca.SVGElement&&Ca.document.createElementNS&&va.set(0);E=Qd();E["allow-top-navigation-by-user-activation"]&&va.set(1);E["allow-popups-to-escape-sandbox"]&&va.set(2);Ca.crypto&&Ca.crypto.subtle&&va.set(3);Ca.TextDecoder&&Ca.TextEncoder&&va.set(4);Ca=df(va);G.bc=Ca;G.bih=Na.height;G.biw=Na.width;G.brdim=v.join();b=b.j;b=(G.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,G.wgl=!!Ad.WebGLRenderingContext,G);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ji=new function(){var a=window.document;this.i=window;this.j=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return di(ii(a))});Date.now();var ki="XMLHttpRequest"in x?function(){return new XMLHttpRequest}:null;
function li(){if(!ki)return null;var a=ki();return"open"in a?a:null}
function mi(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ni(a,b){"function"===typeof a&&(a=Th(a));return window.setTimeout(a,b)}
function oi(a){window.clearTimeout(a)}
;var pi={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},qi="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(fa(ae)),ri=!1;
function si(a,b){b=void 0===b?{}:b;var c=hi(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in pi){var f=L(pi[e]);M("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=L("VISITOR_DATA"));!f||!c&&cc(a)||d&&void 0!==b[e]||!M("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!cc(a))b["X-YouTube-Ad-Signals"]=di(ii());return b}
function ti(a){var b=window.location.search,c=cc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!hi(a)||(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ei(b),f={};eb(qi,function(g){e[g]&&(f[g]=e[g])});
return gi(a,f||{},!1)}
function Pi(a,b){var c=b.format||"JSON";a=Qi(a,b);var d=Ri(a,b),e=!1,f=Si(a,function(k){if(!e){e=!0;h&&oi(h);var m=mi(k),q=null,u=400<=k.status&&500>k.status,y=500<=k.status&&600>k.status;if(m||u||y)q=Ti(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(q&&q.return_code,10);break a;case "RAW":m=!0;break a}m=!!q}q=q||{};u=b.context||x;m?b.onSuccess&&b.onSuccess.call(u,k,q):b.onError&&b.onError.call(u,k,q);b.onFinish&&b.onFinish.call(u,k,q)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=ni(function(){e||(e=!0,f.abort(),oi(h),g.call(b.context||x,f))},d)}return f}
function Qi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=L("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=gi(a,b||{},!0);return a}
function Ri(a,b){var c=L("XSRF_FIELD_NAME"),d=L("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=L("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=ei(e),xb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):fc(e));f=e||f&&!ob(f);!ri&&f&&"POST"!=b.method&&(ri=
!0,Uh(Error("AJAX request with postData should use POST")));return e}
function Ti(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Vh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Ui(a):null)e={},eb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Vi(g)})}d&&Wi(e);
return e}
function Wi(a){if(Qa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;Cb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b],e=zb();d=e?e.createHTML(d):d;a[c]=new Tb(d)}else Wi(a[b])}}
function Ui(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Vi(a){var b="";eb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Si(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Th(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=li();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=ti(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=si(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Xi(a){var b=this;this.i=void 0;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c})}
function Yi(){if(!x.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return x.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":x.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":x.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":x.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Zi(a,b,c,d,e){ie.set(""+a,b,{Pa:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function $i(a){return ie.get(""+a,void 0)}
function aj(){if(!ie.isEnabled())return!1;if(!ie.isEmpty())return!0;ie.set("TESTCOOKIESENABLED","1",{Pa:60});if("1"!==ie.get("TESTCOOKIESENABLED"))return!1;ie.remove("TESTCOOKIESENABLED");return!0}
;var bj=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",bj);function cj(){this.i=L("ALT_PREF_COOKIE_NAME","PREF");this.j=L("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=$i(this.i);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(bj[d]=c.toString())}}}
cj.prototype.get=function(a,b){dj(a);ej(a);a=void 0!==bj[a]?bj[a].toString():null;return null!=a?a:b?b:""};
cj.prototype.set=function(a,b){dj(a);ej(a);if(null==b)throw Error("ExpectedNotNull");bj[a]=b.toString()};
function fj(a){return!!((gj("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
cj.prototype.remove=function(a){dj(a);ej(a);delete bj[a]};
cj.prototype.clear=function(){for(var a in bj)delete bj[a]};
function ej(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function dj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function gj(a){a=void 0!==bj[a]?bj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
Ma(cj);var hj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},ij={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},jj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},kj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function lj(){var a=x.navigator;return a?a.connection:void 0}
function mj(){var a=lj();if(a){var b=hj[a.type||"unknown"]||"CONN_UNKNOWN";a=hj[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function nj(){var a=lj();if(null!=a&&a.effectiveType)return kj.hasOwnProperty(a.effectiveType)?kj[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function oj(){return"INNERTUBE_API_KEY"in Kh&&"INNERTUBE_API_VERSION"in Kh}
function pj(){return{innertubeApiKey:L("INNERTUBE_API_KEY"),innertubeApiVersion:L("INNERTUBE_API_VERSION"),bb:L("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wb:L("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wb:L("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:L("INNERTUBE_CONTEXT_CLIENT_VERSION"),yb:L("INNERTUBE_CONTEXT_HL"),xb:L("INNERTUBE_CONTEXT_GL"),Xb:L("INNERTUBE_HOST_OVERRIDE")||"",Zb:!!L("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Yb:!!L("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:L("SERIALIZED_CLIENT_CONFIG_DATA")}}
function qj(a){var b={client:{hl:a.yb,gl:a.xb,clientName:a.wb,clientVersion:a.innertubeContextClientVersion,configInfo:a.bb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=x.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=Ph();""!==c&&(b.client.experimentsToken=c);c=Qh();0<c.length&&(b.request={internalExperimentFlags:c});rj(a,void 0,b);sj(void 0,b);tj(a,void 0,b);uj(void 0,b);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(b.user={onBehalfOfUser:L("DELEGATED_SESSION_ID")});
a=Object;c=a.assign;for(var d=b.client,e={},f=p(Object.entries(ei(L("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=p(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function vj(a){var b=new Ng,c=new Gg;C(c,1,a.yb);C(c,2,a.xb);C(c,16,a.Wb);C(c,17,a.innertubeContextClientVersion);if(a.bb){var d=a.bb,e=new Eg;d.coldConfigData&&C(e,1,d.coldConfigData);d.appInstallData&&C(e,6,d.appInstallData);d.coldHashData&&C(e,3,d.coldHashData);d.hotHashData&&C(e,5,d.hotHashData);D(c,62,e)}(d=x.devicePixelRatio)&&1!=d&&C(c,65,d);d=Ph();""!==d&&C(c,54,d);d=Qh();if(0<d.length){e=new Ig;for(var f=0;f<d.length;f++){var g=new Cg;C(g,1,d[f].key);g.setValue(d[f].value);pd(e,15,Cg,g)}D(b,
5,e)}rj(a,c);sj(c);tj(a,c);uj(c);L("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Lg,C(a,3,L("DELEGATED_SESSION_ID")));a=p(Object.entries(ei(L("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=p(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?C(c,12,e):"cmodel"===d?C(c,13,e):"cbr"===d?C(c,87,e):"cbrver"===d?C(c,88,e):"cos"===d?C(c,18,e):"cosver"===d?C(c,19,e):"cplatform"===d&&C(c,42,e);D(b,1,c);return b}
function rj(a,b,c){a=a.wb;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=md(b,Fg,96)||new Fg;var d=Yi();d=Object.keys(bf).indexOf(d);d=-1===d?null:d;null!==d&&C(c,3,d);D(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Yi())}
function sj(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=x.navigator)?0:c.deviceMemory)){var d;c=null==(d=x.navigator)?void 0:d.deviceMemory;a?C(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function tj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=md(b,Eg,62))?d:new Eg;C(c,6,a.appInstallData);D(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function uj(a,b){var c=mj();c&&(a?C(a,61,ij[c]):b&&(b.client.connectionType=c));M("web_log_effective_connection_type")&&(c=nj())&&(a?C(a,94,jj[c]):b&&(b.client.effectiveConnectionType=c))}
function wj(a,b,c){c=void 0===c?{}:c;var d={};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":L("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||L("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.ap||L("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Zo:b=me([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=L("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return d}
;function xj(a){a=Object.assign({},a);delete a.Authorization;var b=me();if(b){var c=new vf;c.update(L("INNERTUBE_API_KEY"));c.update(b);a.hash=Kc(c.digest(),3)}return a}
;function yj(a){var b=new vg;(b=b.isAvailable()?a?new Bg(b,a):b:null)||(a=new wg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new rg(a):null;this.j=document.domain||window.location.hostname}
yj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Of(b))}catch(f){return}else e=escape(b);Zi(a,e,c,this.j)};
yj.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=$i(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yj.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;ie.remove(""+a,"/",void 0===b?"youtube.com":b)};var zj=window,P=zj.ytcsi&&zj.ytcsi.now?zj.ytcsi.now:zj.performance&&zj.performance.timing&&zj.performance.now&&zj.performance.timing.navigationStart?function(){return zj.performance.timing.navigationStart+zj.performance.now()}:function(){return(new Date).getTime()};var Aj;function Bj(){Aj||(Aj=new yj("yt.innertube"));return Aj}
function Cj(a,b,c,d){if(d)return null;d=Bj().get("nextId",!0)||1;var e=Bj().get("requests",!0)||{};e[d]={method:a,request:b,authState:xj(c),requestTime:Math.round(P())};Bj().set("nextId",d+1,86400,!0);Bj().set("requests",e,86400,!0);return d}
function Dj(a){var b=Bj().get("requests",!0)||{};delete b[a];Bj().set("requests",b,86400,!0)}
function Ej(a){var b=Bj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(P())-d.requestTime)){var e=d.authState,f=xj(wj(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(P())),Fj(a,d.method,e,{}));delete b[c]}}Bj().set("requests",b,86400,!0)}}
;function Gj(){}
function Hj(a,b){return Ij(a,0,b)}
Gj.prototype.O=function(a,b){return Ij(a,1,b)};
function Jj(a,b){Ij(a,2,b)}
function Kj(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function Lj(){Gj.apply(this,arguments)}
r(Lj,Gj);function Mj(){Lj.i||(Lj.i=new Lj);return Lj.i}
function Ij(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ni(a,c||0)}
Lj.prototype.V=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):oi(a)}};
Lj.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Lj.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};var $e=Mj();var Nj=Fc||Gc;function Oj(a){var b=Qb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var Pj=function(){var a;return function(){a||(a=new yj("ytidb"));return a}}();
function Qj(){var a;return null==(a=Pj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Rj=[],Sj,Tj=!1;function Uj(){var a={};for(Sj=new Vj(void 0===a.handleError?Wj:a.handleError,void 0===a.logEvent?Xj:a.logEvent);0<Rj.length;)switch(a=Rj.shift(),a.type){case "ERROR":Sj.handleError(a.payload);break;case "EVENT":Sj.logEvent(a.eventType,a.payload)}}
function Yj(a){Tj||(Sj?Sj.handleError(a):(Rj.push({type:"ERROR",payload:a}),10<Rj.length&&Rj.shift()))}
function Zj(a,b){Tj||(Sj?Sj.logEvent(a,b):(Rj.push({type:"EVENT",eventType:a,payload:b}),10<Rj.length&&Rj.shift()))}
;function Q(a){var b=Ja.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(fa(b))}
r(Q,Error);function ak(){try{return bk(),!0}catch(a){return!1}}
function bk(a){if(void 0!==L("DATASYNC_ID"))return L("DATASYNC_ID");throw new Q("Datasync ID not set",void 0===a?"unknown":a);}
;function ck(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function dk(a){return a.substr(0,a.indexOf(":"))||a}
;var ek={},fk=(ek.AUTH_INVALID="No user identifier specified.",ek.EXPLICIT_ABORT="Transaction was explicitly aborted.",ek.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ek.MISSING_INDEX="Index not created.",ek.MISSING_OBJECT_STORES="Object stores not created.",ek.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ek.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",ek.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
ek.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",ek.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ek.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ek.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ek),gk={},hk=(gk.AUTH_INVALID="ERROR",gk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",gk.EXPLICIT_ABORT="IGNORED",gk.IDB_NOT_SUPPORTED="ERROR",gk.MISSING_INDEX=
"WARNING",gk.MISSING_OBJECT_STORES="ERROR",gk.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",gk.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",gk.QUOTA_EXCEEDED="WARNING",gk.QUOTA_MAYBE_EXCEEDED="WARNING",gk.UNKNOWN_ABORT="WARNING",gk.INCOMPATIBLE_DB_VERSION="WARNING",gk),ik={},jk=(ik.AUTH_INVALID=!1,ik.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,ik.EXPLICIT_ABORT=!1,ik.IDB_NOT_SUPPORTED=!1,ik.MISSING_INDEX=!1,ik.MISSING_OBJECT_STORES=!1,ik.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,ik.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,ik.QUOTA_EXCEEDED=!1,ik.QUOTA_MAYBE_EXCEEDED=!0,ik.UNKNOWN_ABORT=!0,ik.INCOMPATIBLE_DB_VERSION=!1,ik);function kk(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?fk[a]:c;d=void 0===d?hk[a]:d;e=void 0===e?jk[a]:e;Q.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,kk.prototype)}
r(kk,Q);function lk(a,b){kk.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},fk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,lk.prototype)}
r(lk,kk);function mk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,mk.prototype)}
r(mk,Error);var nk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function ok(a,b,c,d){b=dk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof kk)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new kk("QUOTA_EXCEEDED",a);if(Hc&&"UnknownError"===e.name)return new kk("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof mk)return new kk("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&nk.some(function(f){return e.message.includes(f)}))return new kk("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new kk("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cb:e.name})];e.level="WARNING";return e}
function pk(a,b,c){var d=Qj();return new kk("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function qk(a){if(!a)throw Error();throw a;}
function rk(a){return a}
function sk(a){this.i=a}
function tk(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=p(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=p(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
tk.all=function(a){return new tk(new sk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={na:0};f.na<a.length;f={na:f.na},++f.na)uk(tk.resolve(a[f.na]).then(function(g){return function(h){d[g.na]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
tk.resolve=function(a){return new tk(new sk(function(b,c){a instanceof tk?a.then(b,c):b(a)}))};
tk.reject=function(a){return new tk(new sk(function(b,c){c(a)}))};
tk.prototype.then=function(a,b){var c=this,d=null!=a?a:rk,e=null!=b?b:qk;return new tk(new sk(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){vk(c,c,d,f,g)}),c.onRejected.push(function(){wk(c,c,e,f,g)})):"FULFILLED"===c.state.status?vk(c,c,d,f,g):"REJECTED"===c.state.status&&wk(c,c,e,f,g)}))};
function uk(a,b){a.then(void 0,b)}
function vk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof tk?xk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function wk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof tk?xk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function xk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof tk?xk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function yk(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function zk(a){return new Promise(function(b,c){yk(a,b,c)})}
function Ak(a){return new tk(new sk(function(b,c){yk(a,b,c)}))}
;function Bk(a,b){return new tk(new sk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Ck(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(P());this.j=!1}
l=Ck.prototype;l.add=function(a,b,c){return Dk(this,[a],{mode:"readwrite",S:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return Dk(this,[a],{mode:"readwrite",S:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return Dk(this,[a],{mode:"readonly",S:!0},function(c){return c.objectStore(a).count(b)})};
function Ek(a,b,c){a=a.i.createObjectStore(b,c);return new Fk(a)}
l.delete=function(a,b){return Dk(this,[a],{mode:"readwrite",S:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return Dk(this,[a],{mode:"readonly",S:!0},function(c){return c.objectStore(a).get(b)})};
function Gk(a,b){return Dk(a,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(c){c=c.objectStore("LogsRequestsStore");return Ak(c.i.put(b,void 0))})}
l.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Dk(a,b,c,d){var e,f,g,h,k,m,q,u,y,v,E,F;return w(function(H){switch(H.i){case 1:var R={mode:"readonly",S:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?R.mode=c:Object.assign(R,c);e=R;a.transactionCount++;f=e.S?3:1;g=0;case 2:if(h){H.u(3);break}g++;k=Math.round(P());wa(H,4);m=a.i.transaction(b,e.mode);R=new Hk(m);R=Ik(R,d);return t(H,R,6);case 6:return q=H.j,u=Math.round(P()),Jk(a,k,u,g,void 0,b.join(),e),H.return(q);case 4:y=ya(H);v=Math.round(P());E=ok(y,a.i.name,b.join(),a.i.version);
if((F=E instanceof kk&&!E.i)||g>=f)Jk(a,k,v,g,E,b.join(),e),h=E;H.u(2);break;case 3:return H.return(Promise.reject(h))}})}
function Jk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof kk&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Zj("QUOTA_EXCEEDED",{dbName:dk(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof kk&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),Zj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Kk(a,!1,d,f,b,g.tag),Yj(e)):Kk(a,!0,d,f,b,g.tag)}
function Kk(a,b,c,d,e,f){Zj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.i.name};
function Fk(a){this.i=a}
l=Fk.prototype;l.add=function(a,b){return Ak(this.i.add(a,b))};
l.autoIncrement=function(){return this.i.autoIncrement};
l.clear=function(){return Ak(this.i.clear()).then(function(){})};
l.count=function(a){return Ak(this.i.count(a))};
function Lk(a,b){return Mk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?Lk(this,a):Ak(this.i.delete(a))};
l.get=function(a){return Ak(this.i.get(a))};
l.index=function(a){try{return new Nk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new mk(a,this.i.name);throw b;}};
l.getName=function(){return this.i.name};
l.keyPath=function(){return this.i.keyPath};
function Mk(a,b,c){a=a.i.openCursor(b.query,b.direction);return Ok(a).then(function(d){return Bk(d,c)})}
function Hk(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=kk;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Ik(a,b){var c=new Promise(function(d,e){try{uk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return p(d).next().value})}
Hk.prototype.abort=function(){this.i.abort();this.j=!0;throw new kk("EXPLICIT_ABORT");};
Hk.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Fk(a),this.l.set(a,b));return b};
function Nk(a){this.i=a}
l=Nk.prototype;l.count=function(a){return Ak(this.i.count(a))};
l.delete=function(a){return Pk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return Ak(this.i.get(a))};
l.getKey=function(a){return Ak(this.i.getKey(a))};
l.keyPath=function(){return this.i.keyPath};
l.unique=function(){return this.i.unique};
function Pk(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ok(a).then(function(d){return Bk(d,c)})}
function Qk(a,b){this.request=a;this.cursor=b}
function Ok(a){return Ak(a).then(function(b){return b?new Qk(a,b):null})}
l=Qk.prototype;l.advance=function(a){this.cursor.advance(a);return Ok(this.request)};
l.continue=function(a){this.cursor.continue(a);return Ok(this.request)};
l.delete=function(){return Ak(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return Ak(this.cursor.update(a))};function Rk(a,b,c){return new Promise(function(d,e){function f(){y||(y=new Ck(g.result,{closed:u}));return y}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,m=c.Ac,q=c.upgrade,u=c.closed,y;g.addEventListener("upgradeneeded",function(v){try{if(null===v.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");v.dataLoss&&"none"!==v.dataLoss&&Zj("IDB_DATA_CORRUPTED",{reason:v.dataLossMessage||"unknown reason",dbName:dk(a)});var E=f(),F=new Hk(g.transaction);
q&&q(E,function(H){return v.oldVersion<H&&v.newVersion>=H},F);
F.done.catch(function(H){e(H)})}catch(H){e(H)}});
g.addEventListener("success",function(){var v=g.result;k&&v.addEventListener("versionchange",function(){k(f())});
v.addEventListener("close",function(){Zj("IDB_UNEXPECTEDLY_CLOSED",{dbName:dk(a),dbVersion:v.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Sk(a,b,c){c=void 0===c?{}:c;return Rk(a,b,c)}
function Tk(a,b){b=void 0===b?{}:b;var c,d,e,f;return w(function(g){if(1==g.i)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),t(g,zk(c),4);
if(2!=g.i)return xa(g,0);f=ya(g);throw ok(f,a,"",-1);})}
;function Uk(a){return new Promise(function(b){Jj(function(){b()},a)})}
function Vk(a,b){this.name=a;this.options=b;this.m=!0;this.o=this.s=0;this.j=500}
Vk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Sk(a,b,c)};
Vk.prototype.delete=function(a){a=void 0===a?{}:a;return Tk(this.name,a)};
function Wk(a,b){return new kk("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Xk(a,b){if(!b)throw pk("openWithToken",dk(a.name));return Yk(a)}
function Yk(a){function b(){var f,g,h,k,m,q,u,y,v,E;return w(function(F){switch(F.i){case 1:return g=null!=(f=Error().stack)?f:"",wa(F,2),t(F,a.l(a.name,a.options.version,d),4);case 4:h=F.j;for(var H=a.options,R=[],O=p(Object.keys(H.ya)),S=O.next();!S.done;S=O.next()){S=S.value;var ja=H.ya[S],N=void 0===ja.jc?Number.MAX_VALUE:ja.jc;!(h.i.version>=ja.Wa)||h.i.version>=N||h.i.objectStoreNames.contains(S)||R.push(S)}k=R;if(0===k.length){F.u(5);break}m=Object.keys(a.options.ya);q=h.objectStoreNames();
if(a.o<Oh("ytidb_reopen_db_retries",0))return a.o++,h.close(),Yj(new kk("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),F.return(b());if(!(a.s<Oh("ytidb_remake_db_retries",1))){F.u(6);break}a.s++;if(!M("ytidb_remake_db_enable_backoff_delay")){F.u(7);break}return t(F,Uk(a.j),8);case 8:a.j*=2;case 7:return t(F,a.delete(),9);case 9:return Yj(new kk("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:q})),F.return(b());
case 6:throw new lk(q,m);case 5:return F.return(h);case 2:u=ya(F);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){F.u(10);break}return t(F,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:y=F.j;v=y.i.version;if(void 0!==a.options.version&&v>a.options.version+1)throw y.close(),
a.m=!1,Wk(a,v);return F.return(y);case 10:throw c(),u instanceof Error&&!M("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+g.substring(g.indexOf("\n")+1)),ok(u,a.name,"",null!=(E=a.options.version)?E:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.m)throw Wk(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,Ac:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Zk=new Vk("YtIdbMeta",{ya:{databases:{Wa:1}},upgrade:function(a,b){b(1)&&Ek(a,"databases",{keyPath:"actualName"})}});
function $k(a,b){var c;return w(function(d){if(1==d.i)return t(d,Xk(Zk,b),2);c=d.j;return d.return(Dk(c,["databases"],{S:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Ak(f.i.put(a,void 0)).then(function(){})})}))})}
function al(a,b){var c;return w(function(d){if(1==d.i)return a?t(d,Xk(Zk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function bl(a,b){var c,d;return w(function(e){return 1==e.i?(c=[],t(e,Xk(Zk,b),2)):3!=e.i?(d=e.j,t(e,Dk(d,["databases"],{S:!0,mode:"readonly"},function(f){c.length=0;return Mk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function cl(a){return bl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function dl(a,b,c){return bl(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function el(a){var b,c;return w(function(d){if(1==d.i)return b=bk("YtIdbMeta hasAnyMeta other"),t(d,bl(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.j;return d.return(0<c.length)})}
;var fl,gl=new function(){}(new function(){});
function hl(){var a,b,c,d;return w(function(e){switch(e.i){case 1:a=Qj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Nj)f=/WebKit\/([0-9]+)/.exec(Qb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Qb()),f=!(f&&602<=parseInt(f[1],10)));if(f||sc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return t(e,$k(d,gl),4);case 4:return t(e,al("yt-idb-test-do-not-use",gl),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function il(){if(void 0!==fl)return fl;Tj=!0;return fl=hl().then(function(a){Tj=!1;var b;if(null!=(b=Pj())&&b.i){var c;b={hasSucceededOnce:(null==(c=Qj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Pj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function jl(){return A("ytglobal.idbToken_")||void 0}
function kl(){var a=jl();return a?Promise.resolve(a):il().then(function(b){(b=b?gl:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var ll=0;function ml(a,b){ll||(ll=$e.O(function(){var c,d,e,f,g;return w(function(h){switch(h.i){case 1:return t(h,kl(),2);case 2:c=h.j;if(!c)return h.return();d=!0;wa(h,3);return t(h,dl(a,c,b),5);case 5:e=h.j;if(!e.length){d=!1;h.u(6);break}f=e[0];return t(h,Tk(f.actualName),7);case 7:return t(h,al(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),Yj(g),d=!1;case 4:$e.V(ll),ll=0,d&&ml(a,b),h.i=0}})}))}
function nl(){var a;return w(function(b){return 1==b.i?t(b,kl(),2):(a=b.j)?b.return(el(a)):b.return(!1)})}
new yd;function ol(a){if(!ak())throw a=new kk("AUTH_INVALID",{dbName:a}),Yj(a),a;var b=bk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function pl(a,b,c,d){var e,f,g,h,k,m;return w(function(q){switch(q.i){case 1:return f=null!=(e=Error().stack)?e:"",t(q,kl(),2);case 2:g=q.j;if(!g)throw h=pk("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Yj(h),h;ck(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:ol(a);wa(q,3);return t(q,$k(k,g),5);case 5:return t(q,Sk(k.actualName,b,d),6);case 6:return q.return(q.j);case 3:return m=ya(q),wa(q,7),t(q,al(k.actualName,g),9);case 9:xa(q,
8);break;case 7:ya(q);case 8:throw m;}})}
function ql(a,b,c){c=void 0===c?{}:c;return pl(a,b,!1,c)}
function rl(a,b,c){c=void 0===c?{}:c;return pl(a,b,!0,c)}
function sl(a,b){b=void 0===b?{}:b;var c,d;return w(function(e){if(1==e.i)return t(e,kl(),2);if(3!=e.i){c=e.j;if(!c)return e.return();ck(a);d=ol(a);return t(e,Tk(d.actualName,b),3)}return t(e,al(d.actualName,c),0)})}
function tl(a,b,c){a=a.map(function(d){return w(function(e){return 1==e.i?t(e,Tk(d.actualName,b),2):t(e,al(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function ul(){var a=void 0===a?{}:a;var b,c;return w(function(d){if(1==d.i)return t(d,kl(),2);if(3!=d.i){b=d.j;if(!b)return d.return();ck("LogsDatabaseV2");return t(d,cl(b),3)}c=d.j;return t(d,tl(c,a,b),0)})}
function vl(a,b){b=void 0===b?{}:b;var c;return w(function(d){if(1==d.i)return t(d,kl(),2);if(3!=d.i){c=d.j;if(!c)return d.return();ck(a);return t(d,Tk(a,b),3)}return t(d,al(a,c),0)})}
;function wl(a){this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ra=function(){};
this.now=Date.now;this.xa=!1;var b;this.Jb=null!=(b=a.Jb)?b:100;var c;this.Hb=null!=(c=a.Hb)?c:1;var d;this.Fb=null!=(d=a.Fb)?d:2592E6;var e;this.Db=null!=(e=a.Db)?e:12E4;var f;this.Gb=null!=(f=a.Gb)?f:5E3;var g;this.A=null!=(g=a.A)?g:void 0;this.La=!!a.La;var h;this.Ka=null!=(h=a.Ka)?h:.1;var k;this.Ra=null!=(k=a.Ra)?k:10;a.handleError&&(this.handleError=a.handleError);a.ra&&(this.ra=a.ra);a.xa&&(this.xa=a.xa);this.G=a.G;this.W=a.W;this.L=a.L;this.K=a.K;this.ea=a.ea;this.hb=a.hb;this.gb=a.gb;this.A&&
(!this.G||this.G("networkless_logging"))&&xl(this)}
function xl(a){a.A&&!a.xa&&(a.i=!0,a.La&&Math.random()<=a.Ka&&a.L.Qb(a.A),yl(a),a.K.I()&&a.Ba(),a.K.X(a.hb,a.Ba.bind(a)),a.K.X(a.gb,a.mb.bind(a)))}
l=wl.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.A&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.L.set(d,this.A).then(function(e){d.id=e;c.K.I()&&zl(c,d)}).catch(function(e){zl(c,d);
Al(c,e)})}else this.ea(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.A&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.G&&this.G("nwl_skip_retry")&&(e.skipRetry=c);if(this.K.I()||this.G&&this.G("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return w(function(k){if(1==k.i)return t(k,d.L.set(e,d.A).catch(function(m){Al(d,m)}),2);
f(g,h);k.i=0})}}this.ea(a,b,e.skipRetry)}else this.L.set(e,this.A).catch(function(g){d.ea(a,b,e.skipRetry);
Al(d,g)})}else this.ea(a,b,this.G&&this.G("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.A&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.L.qa(d.id,c.A):e=!0;c.K.da&&c.G&&c.G("vss_network_hint")&&c.K.da(!0);f(g,h)};
this.ea(d.url,d.options);this.L.set(d,this.A).then(function(g){d.id=g;e&&c.L.qa(d.id,c.A)}).catch(function(g){Al(c,g)})}else this.ea(a,b)};
l.Ba=function(){var a=this;if(!this.A)throw pk("throttleSend");this.j||(this.j=this.W.O(function(){var b;return w(function(c){if(1==c.i)return t(c,a.L.vb("NEW",a.A),2);if(3!=c.i)return b=c.j,b?t(c,zl(a,b),3):(a.mb(),c.return());a.j&&(a.j=0,a.Ba());c.i=0})},this.Jb))};
l.mb=function(){this.W.V(this.j);this.j=0};
function zl(a,b){var c,d;return w(function(e){switch(e.i){case 1:if(!a.A)throw c=pk("immediateSend"),c;if(void 0===b.id){e.u(2);break}return t(e,a.L.ac(b.id,a.A),3);case 3:(d=e.j)?b=d:a.ra(Error("The request cannot be found in the database."));case 2:if(Bl(a,b,a.Fb)){e.u(4);break}a.ra(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.u(5);break}return t(e,a.L.qa(b.id,a.A),5);case 5:return e.return();case 4:b.skipRetry||(b=Cl(a,b));if(!b){e.u(0);break}if(!b.skipRetry||
void 0===b.id){e.u(8);break}return t(e,a.L.qa(b.id,a.A),8);case 8:a.ea(b.url,b.options,!!b.skipRetry),e.i=0}})}
function Cl(a,b){if(!a.A)throw pk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:g=Dl(f);if(!(a.G&&a.G("nwl_consider_error_code")&&g||a.G&&!a.G("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ra)){m.u(2);break}if(!a.K.fa){m.u(3);break}return t(m,a.K.fa(),3);case 3:if(a.K.I()){m.u(2);break}c(e,f);if(!a.G||!a.G("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){m.u(6);break}return t(m,a.L.ib(b.id,a.A,!1),6);case 6:return m.return();case 2:if(a.G&&a.G("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ra)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.u(8);break}return b.sendCount<a.Hb?t(m,a.L.ib(b.id,a.A),12):t(m,a.L.qa(b.id,a.A),8);case 12:a.W.O(function(){a.K.I()&&a.Ba()},a.Gb);
case 8:c(e,f),m.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.u(2):t(h,a.L.qa(b.id,a.A),2);a.K.da&&a.G&&a.G("vss_network_hint")&&a.K.da(!0);d(e,f);h.i=0})};
return b}
function Bl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function yl(a){if(!a.A)throw pk("retryQueuedRequests");a.L.vb("QUEUED",a.A).then(function(b){b&&!Bl(a,b,a.Db)?a.W.O(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):t(c,a.L.ib(b.id,a.A),2);yl(a);c.i=0})}):a.K.I()&&a.Ba()})}
function Al(a,b){a.Lb&&!a.K.I()?a.Lb(b):a.handleError(b)}
function Dl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function El(a,b){this.version=a;this.args=b}
;function Fl(a,b){this.topic=a;this.i=b}
Fl.prototype.toString=function(){return this.topic};var Gl=A("ytPubsub2Pubsub2Instance")||new K;K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.va;K.prototype.publish=K.prototype.ka;K.prototype.clear=K.prototype.clear;z("ytPubsub2Pubsub2Instance",Gl);var Hl=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",Hl);var Il=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",Il);var Jl=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Jl);
z("ytPubsub2Pubsub2SkipSubKey",null);function Kl(a,b){var c=Ll();c&&c.publish.call(c,a.toString(),a,b)}
function Ml(a){var b=Nl,c=Ll();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Hl[d])try{if(f&&b instanceof Fl&&b!=e)try{var h=b.i,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ja){var m=new h;h.ja=m.version}var q=h.ja}catch(H){}if(!q||k.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{q=Reflect;var u=q.construct;
var y=k.args,v=y.length;if(0<v){var E=Array(v);for(k=0;k<v;k++)E[k]=y[k];var F=E}else F=[];f=u.call(q,h,F)}catch(H){throw H.message="yt.pubsub2.Data.deserialize(): "+H.message,H;}}catch(H){throw H.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+H.message,H;}a.call(window,f)}catch(H){Uh(H)}},Jl[b.toString()]?A("yt.scheduler.instance")?$e.O(g):ni(g,0):g())});
Hl[d]=!0;Il[b.toString()]||(Il[b.toString()]=[]);Il[b.toString()].push(d);return d}
function Ol(){var a=Pl,b=Ml(function(c){a.apply(void 0,arguments);Ql(b)});
return b}
function Ql(a){var b=Ll();b&&("number"===typeof a&&(a=[a]),eb(a,function(c){b.unsubscribeByKey(c);delete Hl[c]}))}
function Ll(){return A("ytPubsub2Pubsub2Instance")}
;function Rl(a,b){Vk.call(this,a,b);this.options=b;ck(a)}
r(Rl,Vk);function Sl(a,b){var c;return function(){c||(c=new Rl(a,b));return c}}
Rl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.jb?rl:ql)(a,b,Object.assign({},c))};
Rl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.jb?vl:sl)(this.name,a)};
function Tl(a,b){return Sl(a,b)}
;var Ul;
function Vl(){if(Ul)return Ul();var a={};Ul=Tl("LogsDatabaseV2",{ya:(a.LogsRequestsStore={Wa:2},a),jb:!1,upgrade:function(b,c,d){c(2)&&Ek(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return Ul()}
;function Wl(a){return Xk(Vl(),a)}
function Xl(a,b){var c,d,e,f;return w(function(g){if(1==g.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},t(g,Wl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:L("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),t(g,Gk(d,e),3);f=g.j;c.Bc=P();Yl(c);return g.return(f)})}
function Zl(a,b){var c,d,e,f,g,h,k;return w(function(m){if(1==m.i)return c={startTime:P(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},t(m,Wl(b),2);if(3!=m.i)return d=m.j,e=L("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,P()],h=IDBKeyRange.bound(f,g),k=void 0,t(m,Dk(d,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(q){return Pk(q.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(u){u.getValue()&&(k=u.getValue(),"NEW"===a&&(k.status="QUEUED",
u.update(k)))})}),3);
c.Bc=P();Yl(c);return m.return(k)})}
function $l(a,b){var c;return w(function(d){if(1==d.i)return t(d,Wl(b),2);c=d.j;return d.return(Dk(c,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Ak(f.i.put(g,void 0)).then(function(){return g})})}))})}
function am(a,b,c){c=void 0===c?!0:c;var d;return w(function(e){if(1==e.i)return t(e,Wl(b),2);d=e.j;return e.return(Dk(d,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Ak(g.i.put(h,void 0)).then(function(){return h})):tk.resolve(void 0)})}))})}
function bm(a,b){var c;return w(function(d){if(1==d.i)return t(d,Wl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function cm(a){var b,c;return w(function(d){if(1==d.i)return t(d,Wl(a),2);b=d.j;c=P()-2592E6;return t(d,Dk(b,["LogsRequestsStore"],{mode:"readwrite",S:!0},function(e){return Mk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function dm(){return w(function(a){return t(a,ul(),0)})}
function Yl(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Kl("nwl_transaction_latency_payload",a)}
;var em={},fm=Tl("ServiceWorkerLogsDatabase",{ya:(em.SWHealthLog={Wa:1},em),jb:!0,upgrade:function(a,b){b(1)&&Ek(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function gm(a){return Xk(fm(),a)}
function hm(a){var b,c;return w(function(d){if(1==d.i)return t(d,gm(a),2);b=d.j;c=P()-2592E6;return t(d,Dk(b,["SWHealthLog"],{mode:"readwrite",S:!0},function(e){return Mk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function im(a){var b;return w(function(c){if(1==c.i)return t(c,gm(a),2);b=c.j;return t(c,b.clear("SWHealthLog"),0)})}
;var jm={},km=0;
function lm(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)Si(a,void 0,"POST",b);else if(L("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Si(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new ab({url:a});if(d.l&&d.j||d.m){var e=ac(bc(5,a)),f;if(!(f=!e||!e.endsWith("/aclk"))){var g=a.search(ic),h=hc(a,0,"ri",g);if(0>h)var k=null;else{var m=a.indexOf("&",h);if(0>m||m>g)m=g;k=decodeURIComponent(a.slice(h+3,-1!==m?m:0).replace(/\+/g," "))}f="1"!==k}var q=!f;break b}}catch(y){}q=!1}if(q){b:{try{if(window.navigator&&
window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var u=!0;break b}}catch(y){}u=!1}b=u?!0:!1}else b=!1;b||mm(a)}}
function mm(a){var b=new Image,c=""+km++;jm[c]=b;b.onload=b.onerror=function(){delete jm[c]};
b.src=a}
;function nm(){this.i=new Map;this.j=!1}
function om(){if(!nm.i){var a=A("yt.networkRequestMonitor.instance")||new nm;z("yt.networkRequestMonitor.instance",a);nm.i=a}return nm.i}
nm.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
nm.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
nm.prototype.removeParams=function(a){return a.split("?")[0]};
nm.prototype.removeParams=nm.prototype.removeParams;nm.prototype.isEndpointCFR=nm.prototype.isEndpointCFR;nm.prototype.requestComplete=nm.prototype.requestComplete;nm.getInstance=om;var pm;function qm(){pm||(pm=new yj("yt.offline"));return pm}
function rm(a){if(M("offline_error_handling")){var b=qm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);qm().set("errors",b,2592E3,!0)}}
function sm(){if(M("offline_error_handling")){var a=qm().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new Q(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Uh(c)}qm().set("errors",{},2592E3,!0)}}}
;var tm=Oh("network_polling_interval",3E4);function um(){Te.call(this);var a=this;this.U=0;this.B=this.o=!1;this.l=this.ab();M("use_shared_nsm")?(this.j=Ze(),M("use_shared_nsm_and_keep_yt_online_updated")&&(this.j.X("networkstatus-online",function(){a.l=!0;a.B&&sm()}),this.j.X("networkstatus-offline",function(){a.l=!1}))):(vm(this),wm(this))}
r(um,Te);function xm(){if(!um.i){var a=A("yt.networkStatusManager.instance")||new um;z("yt.networkStatusManager.instance",a);um.i=a}return um.i}
l=um.prototype;l.I=function(){if(M("use_shared_nsm")&&this.j){var a;return null==(a=this.j)?void 0:a.I()}return this.l};
l.da=function(a){if(M("use_shared_nsm")&&this.j){var b;null!=(b=this.j)&&(b.j=a)}else a!==this.l&&(this.l=a)};
l.cc=function(a){!M("use_shared_nsm")&&(this.o=!0,void 0===a?0:a)&&(this.U||ym(this))};
l.ab=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.Tb=function(){this.B=!0};
l.X=function(a,b){return M("use_shared_nsm")&&this.j?this.j.X(a,b):Te.prototype.X.call(this,a,b)};
function wm(a){window.addEventListener("online",function(){return w(function(b){if(1==b.i)return t(b,a.fa(),2);a.B&&sm();b.i=0})})}
function vm(a){window.addEventListener("offline",function(){return w(function(b){return t(b,a.fa(),0)})})}
function ym(a){a.U=Hj(function(){return w(function(b){if(1==b.i)return a.l?a.ab()||!a.o?b.u(3):t(b,a.fa(),3):t(b,a.fa(),3);ym(a);b.i=0})},tm)}
l.fa=function(a){var b=this;if(M("use_shared_nsm")&&this.j){var c=Xe(this.j,a);c.then(function(d){M("use_cfr_monitor")&&om().requestComplete("generate_204",d)});
return c}return this.v?this.v:this.v=new Promise(function(d){var e,f,g,h;return w(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,wa(k,2,3),e&&(b.N=$e.O(function(){e.abort()},a||2E4)),t(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:za(k);M("use_cfr_monitor")&&om().requestComplete("generate_204",h);b.v=void 0;b.N&&$e.V(b.N);h!==b.l&&(b.l=h,b.l&&b.o?Ue(b,"ytnetworkstatus-online"):b.o&&Ue(b,"ytnetworkstatus-offline"));d(h);Aa(k);break;case 2:ya(k),h=!1,k.u(3)}})})};
um.prototype.sendNetworkCheckRequest=um.prototype.fa;um.prototype.listen=um.prototype.X;um.prototype.enableErrorFlushing=um.prototype.Tb;um.prototype.getWindowStatus=um.prototype.ab;um.prototype.monitorNetworkStatusChange=um.prototype.cc;um.prototype.networkStatusHint=um.prototype.da;um.prototype.isNetworkAvailable=um.prototype.I;um.getInstance=xm;function zm(a){a=void 0===a?{}:a;Te.call(this);var b=this;this.l=this.N=0;this.o="ytnetworkstatus-offline";this.v="ytnetworkstatus-online";M("use_shared_nsm")&&(this.o="networkstatus-offline",this.v="networkstatus-online");this.j=xm();var c=A("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.sb);a.Ab&&(c=A("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=A("yt.networkStatusManager.instance.listen").bind(this.j))a.Ta?(this.Ta=a.Ta,c(this.v,
function(){Am(b,"publicytnetworkstatus-online")}),c(this.o,function(){Am(b,"publicytnetworkstatus-offline")})):(c(this.v,function(){Ue(b,"publicytnetworkstatus-online")}),c(this.o,function(){Ue(b,"publicytnetworkstatus-offline")}))}
r(zm,Te);zm.prototype.I=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
zm.prototype.da=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
zm.prototype.fa=function(a){var b=this,c;return w(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&om().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.da((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.I())})):c?d.return(c(a)):d.return(!0)})};
function Am(a,b){a.Ta?a.l?($e.V(a.N),a.N=$e.O(function(){a.B!==b&&(Ue(a,b),a.B=b,a.l=P())},a.Ta-(P()-a.l))):(Ue(a,b),a.B=b,a.l=P()):Ue(a,b)}
;var Bm;function Cm(){wl.call(this,{L:{Qb:cm,qa:bm,vb:Zl,ac:$l,ib:am,set:Xl},K:Dm(),handleError:Uh,ra:Vh,ea:Em,now:P,Lb:rm,W:Mj(),hb:"publicytnetworkstatus-online",gb:"publicytnetworkstatus-offline",La:!0,Ka:.1,Ra:Oh("potential_esf_error_limit",10),G:M,xa:!(ak()&&Fm())});this.l=new yd;M("networkless_immediately_drop_all_requests")&&dm();vl("LogsDatabaseV2")}
r(Cm,wl);function Gm(){var a=A("yt.networklessRequestController.instance");a||(a=new Cm,z("yt.networklessRequestController.instance",a),M("networkless_logging")&&kl().then(function(b){a.A=b;xl(a);a.l.resolve();a.La&&Math.random()<=a.Ka&&a.A&&hm(a.A);M("networkless_immediately_drop_sw_health_store")&&Hm(a)}));
return a}
Cm.prototype.writeThenSend=function(a,b){b||(b={});ak()||(this.i=!1);wl.prototype.writeThenSend.call(this,a,b)};
Cm.prototype.sendThenWrite=function(a,b,c){b||(b={});ak()||(this.i=!1);wl.prototype.sendThenWrite.call(this,a,b,c)};
Cm.prototype.sendAndWrite=function(a,b){b||(b={});ak()||(this.i=!1);wl.prototype.sendAndWrite.call(this,a,b)};
Cm.prototype.awaitInitialization=function(){return this.l.promise};
function Hm(a){var b;w(function(c){if(!a.A)throw b=pk("clearSWHealthLogsDb"),b;return c.return(im(a.A).catch(function(d){a.handleError(d)}))})}
function Em(a,b,c){M("use_cfr_monitor")&&Im(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(P());c&&0===Object.keys(b).length?lm(a):Pi(a,b)}
function Dm(){Bm||(Bm=new zm({Ab:!0,sb:!0}));return Bm}
function Im(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){om().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){om().requestComplete(a,!0);d(e,f)}}
function Fm(){return M("embeds_web_nwl_disable_nocookie")?"www.youtube-nocookie.com"!==cc(document.location.toString()):!0}
;var Jm=!1,Km=0,Lm=0,Mm,Nm=x.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Jm,potentialEsfErrorCounter:Lm};z("ytNetworklessLoggingInitializationOptions",Nm);
function Om(){var a;w(function(b){switch(b.i){case 1:return t(b,kl(),2);case 2:a=b.j;if(!a||!ak()&&!M("nwl_init_require_datasync_id_killswitch")||!Fm()){b.u(0);break}Jm=!0;Nm.isNwlInitialized=Jm;if(!M("use_new_nwl_initialization")){b.u(4);break}return t(b,Gm().awaitInitialization(),5);case 5:return b.return();case 4:return t(b,vl("LogsDatabaseV2"),6);case 6:if(!(.1>=Math.random())){b.u(7);break}return t(b,cm(a),8);case 8:return t(b,hm(a),7);case 7:Pm();Qm().I()&&Rm();Qm().X("publicytnetworkstatus-online",
Rm);Qm().X("publicytnetworkstatus-offline",Sm);if(!M("networkless_immediately_drop_sw_health_store")){b.u(10);break}return t(b,Tm(),10);case 10:if(M("networkless_immediately_drop_all_requests"))return t(b,dm(),0);b.u(0)}})}
function Um(a,b){function c(d){var e=Qm().I();if(!Vm()||!d||e&&M("vss_networkless_bypass_write"))Wm(a,b);else{var f={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0};Xl(f,d).then(function(g){f.id=g;Qm().I()&&Xm(f)}).catch(function(g){Xm(f);
Qm().I()?Uh(g):rm(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?kl().then(function(d){c(d)}):c(jl())}
function Ym(a,b){function c(d){if(Vm()&&d){var e={url:a,options:b,timestamp:P(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,m){M("use_cfr_monitor")&&om().requestComplete(e.url,!0);void 0!==e.id?bm(e.id,d):f=!0;M("vss_network_hint")&&Qm().da(!0);g(k,m)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,m){om().requestComplete(e.url,!1);h(k,m)}}Wm(e.url,e.options);
Xl(e,d).then(function(k){e.id=k;f&&bm(e.id,d)}).catch(function(k){Qm().I()?Uh(k):rm(k)})}else Wm(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?kl().then(function(d){c(d)}):c(jl())}
function Rm(){var a=jl();if(!a)throw pk("throttleSend");Km||(Km=$e.O(function(){var b;return w(function(c){if(1==c.i)return t(c,Zl("NEW",a),2);if(3!=c.i)return b=c.j,b?t(c,Xm(b),3):(Sm(),c.return());Km&&(Km=0,Rm());c.i=0})},100))}
function Sm(){$e.V(Km);Km=0}
function Xm(a){var b,c,d;return w(function(e){switch(e.i){case 1:b=jl();if(!b)throw c=pk("immediateSend"),c;if(void 0===a.id){e.u(2);break}return t(e,$l(a.id,b),3);case 3:(d=e.j)?a=d:Vh(Error("The request cannot be found in the database."));case 2:if(Zm(a,2592E6)){e.u(4);break}Vh(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.u(5);break}return t(e,bm(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=$m(a));var f=a,g,h;if(null==f?0:null==(g=f.options)?
0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(P());a=f;if(!a){e.u(0);break}if(!a.skipRetry||void 0===a.id){e.u(8);break}return t(e,bm(a.id,b),8);case 8:Wm(a.url,a.options,!!a.skipRetry),e.i=0}})}
function $m(a){var b=jl();if(!b)throw pk("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return w(function(m){switch(m.i){case 1:M("use_cfr_monitor")&&om().requestComplete(a.url,!1);g=Dl(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&an()<=Oh("potential_esf_error_limit",10))){m.u(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||om().isEndpointCFR(a.url))){m.u(3);break}return t(m,Qm().fa(),3);case 3:if(Qm().I()){m.u(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){m.u(6);break}return t(m,am(a.id,b,!1),6);case 6:return m.return();case 2:if(M("nwl_consider_error_code")&&!g&&an()>Oh("potential_esf_error_limit",10))return m.return();A("ytNetworklessLoggingInitializationOptions")&&Nm.potentialEsfErrorCounter++;Lm++;if(void 0===(null==(k=a)?void 0:k.id)){m.u(8);break}return 1>a.sendCount?t(m,am(a.id,b),12):t(m,bm(a.id,b),8);case 12:$e.O(function(){Qm().I()&&Rm()},5E3);
case 8:c(e,f),m.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return w(function(h){if(1==h.i)return M("use_cfr_monitor")&&om().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.u(2):t(h,bm(a.id,b),2);M("vss_network_hint")&&Qm().da(!0);d(e,f);h.i=0})};
return a}
function Zm(a,b){a=a.timestamp;return P()-a>=b?!1:!0}
function Pm(){var a=jl();if(!a)throw pk("retryQueuedRequests");Zl("QUEUED",a).then(function(b){b&&!Zm(b,12E4)?$e.O(function(){return w(function(c){if(1==c.i)return void 0===b.id?c.u(2):t(c,am(b.id,a),2);Pm();c.i=0})}):Qm().I()&&Rm()})}
function Tm(){var a,b;return w(function(c){a=jl();if(!a)throw b=pk("clearSWHealthLogsDb"),b;return c.return(im(a).catch(function(d){Uh(d)}))})}
function Qm(){if(M("use_new_nwl"))return Dm();Mm||(Mm=new zm({Ab:!0,sb:!0}));return Mm}
function Wm(a,b,c){c&&0===Object.keys(b).length?lm(a):Pi(a,b)}
function Vm(){return A("ytNetworklessLoggingInitializationOptions")?Nm.isNwlInitialized:Jm}
function an(){return A("ytNetworklessLoggingInitializationOptions")?Nm.potentialEsfErrorCounter:Lm}
;function bn(a){var b=this;this.config_=null;a?this.config_=a:oj()&&(this.config_=pj());Hj(function(){Ej(b)},5E3)}
bn.prototype.isReady=function(){!this.config_&&oj()&&(this.config_=pj());return!!this.config_};
function Fj(a,b,c,d){function e(E){E=void 0===E?!1:E;var F;if(d.retry&&"www.youtube-nocookie.com"!=h&&(E||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(F=Cj(b,c,m,k)),F)){var H=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(O,S){Dj(F);H(O,S)};
c.onFetchSuccess=function(O,S){Dj(F);R(O,S)}}try{E&&d.retry&&!d.Bb.bypassNetworkless?(g.method="POST",d.Bb.writeThenSend?M("use_new_nwl_wts")?Gm().writeThenSend(v,g):Um(v,g):M("use_new_nwl_saw")?Gm().sendAndWrite(v,g):Ym(v,g)):(g.method="POST",g.postParams||(g.postParams={}),Pi(v,g))}catch(O){if("InvalidAccessError"==O.name)F&&(Dj(F),F=0),Vh(Error("An extension is blocking network request."));
else throw O;}F&&Hj(function(){Ej(a)},5E3)}
!L("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Vh(new Q("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Q("innertube xhrclient not ready",b,c,d);Uh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(E,F){if(d.onSuccess)d.onSuccess(F)},
onFetchSuccess:function(E){if(d.onSuccess)d.onSuccess(E)},
onError:function(E,F){if(d.onError)d.onError(F)},
onFetchError:function(E){if(d.onError)d.onError(E)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Xb)&&(h=f);var k=a.config_.Zb||!1,m=wj(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var q="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,u={alt:"json"},y=a.config_.Yb&&f;y=y&&f.startsWith("Bearer");y||(u.key=a.config_.innertubeApiKey);var v=gi(""+h+q,u||{},!0);M("use_new_nwl")&&Gm().i||!M("use_new_nwl")&&
Vm()?il().then(function(E){e(E)}):e(!1)}
;var cn={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},dn={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var en=0,fn=uc?"webkit":tc?"moz":rc?"ms":qc?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++en});var gn={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function hn(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in gn||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.i=a.pageX;this.j=a.pageY}}catch(e){}}
function jn(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.i=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.j=a.clientY+b}}
hn.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
hn.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
hn.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=x.ytEventsEventsListeners||{};z("ytEventsEventsListeners",nb);var kn=x.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",kn);
function ln(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var mn=cb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function nn(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ln(a,b,c,d);if(e)return e;e=++kn.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new hn(h);if(!Ld(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new hn(h);
h.currentTarget=a;return c.call(a,h)};
g=Th(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),mn()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d];return e}
function on(a){a&&("string"==typeof a&&(a=[a]),eb(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?mn()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
;var pn=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function qn(a){this.M=a;this.j=null;this.o=0;this.B=null;this.v=0;this.l=[];for(a=0;4>a;a++)this.l.push(0);this.m=0;this.U=nn(window,"mousemove",Wa(this.Z,this));a=Wa(this.N,this);"function"===typeof a&&(a=Th(a));this.ga=window.setInterval(a,25)}
Ya(qn,J);qn.prototype.Z=function(a){void 0===a.i&&jn(a);var b=a.i;void 0===a.j&&jn(a);this.j=new Hd(b,a.j)};
qn.prototype.N=function(){if(this.j){var a=pn();if(0!=this.o){var b=this.B,c=this.j,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.l[this.m]=.5<Math.abs((d-this.v)/this.v)?1:0;for(c=b=0;4>c;c++)b+=this.l[c]||0;3<=b&&this.M();this.v=d}this.o=a;this.B=this.j;this.m=(this.m+1)%4}};
qn.prototype.J=function(){window.clearInterval(this.ga);on(this.U)};var rn={};
function sn(a){var b=void 0===a?{}:a;a=void 0===b.fc?!1:b.fc;b=void 0===b.Ub?!0:b.Ub;if(null==A("_lact",window)){var c=parseInt(L("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&tn();nn(document,"keydown",tn);nn(document,"keyup",tn);nn(document,"mousedown",tn);nn(document,"mouseup",tn);a?nn(window,"touchmove",function(){un("touchmove",200)},{passive:!0}):(nn(window,"resize",function(){un("resize",200)}),b&&nn(window,"scroll",function(){un("scroll",200)}));
new qn(function(){un("mouse",100)});
nn(document,"touchstart",tn,{passive:!0});nn(document,"touchend",tn,{passive:!0})}}
function un(a,b){rn[a]||(rn[a]=!0,$e.O(function(){tn();rn[a]=!1},b))}
function tn(){null==A("_lact",window)&&sn();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function vn(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var wn=x.ytPubsubPubsubInstance||new K,xn=x.ytPubsubPubsubSubscribedKeys||{},yn=x.ytPubsubPubsubTopicToKeys||{},zn=x.ytPubsubPubsubIsSynchronous||{};function An(a,b){var c=Bn();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){xn[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{zn[a]?f():ni(f,0)}catch(g){Uh(g)}},void 0);
xn[d]=!0;yn[a]||(yn[a]=[]);yn[a].push(d);return d}return 0}
function Cn(a){var b=Bn();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),eb(a,function(c){b.unsubscribeByKey(c);delete xn[c]}))}
function Dn(a,b){var c=Bn();c&&c.publish.apply(c,arguments)}
function En(a){var b=Bn();if(b)if(b.clear(a),a)Vn(a);else for(var c in yn)Vn(c)}
function Bn(){return x.ytPubsubPubsubInstance}
function Vn(a){yn[a]&&(a=yn[a],eb(a,function(b){xn[b]&&delete xn[b]}),a.length=0)}
K.prototype.subscribe=K.prototype.subscribe;K.prototype.unsubscribeByKey=K.prototype.va;K.prototype.publish=K.prototype.ka;K.prototype.clear=K.prototype.clear;z("ytPubsubPubsubInstance",wn);z("ytPubsubPubsubTopicToKeys",yn);z("ytPubsubPubsubIsSynchronous",zn);z("ytPubsubPubsubSubscribedKeys",xn);var uo=Oh("initial_gel_batch_timeout",2E3),vo=Math.pow(2,16)-1,wo=void 0;function xo(){this.l=this.i=this.j=0}
var yo=new xo,zo=new xo,Ao=!0,Bo=x.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",Bo);var Co=x.ytLoggingTransportGELProtoQueue_||new Map;z("ytLoggingTransportGELProtoQueue_",Co);var Do=x.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Do);var Eo=x.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Eo);
function Fo(a,b){if("log_event"===a.endpoint){var c=Go(a),d=Bo.get(c)||[];Bo.set(c,d);d.push(a.payload);Ho(b,d,c)}}
function Io(a,b){if("log_event"===a.endpoint){var c=Go(a,!0),d=Co.get(c)||[];Co.set(c,d);a=a.payload.toJSON();d.push(a);Ho(b,d,c,!0)}}
function Ho(a,b,c,d){d=void 0===d?!1:d;a&&(wo=new a);a=Oh("tvhtml5_logging_max_batch")||Oh("web_logging_max_batch")||100;var e=P(),f=d?zo.l:yo.l;b.length>=a?Jo({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Ko(d),d?zo.l=e:yo.l=e)}
function Lo(a,b){if("log_event"===a.endpoint){var c=Go(a),d=new Map;d.set(c,[a.payload]);b&&(wo=new b);return new Uf(function(e,f){wo&&wo.isReady()?Mo(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function No(a,b){if("log_event"===a.endpoint){var c=Go(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(wo=new b);return new Uf(function(e){wo&&wo.isReady()?Oo(d,e,{bypassNetworkless:!0},!0):e()})}}
function Go(a,b){var c="";if(a.wa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Ch;c.videoId?d.setVideoId(c.videoId):c.playlistId&&kd(d,2,Dh,c.playlistId);Eo[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Do[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Jo(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Uf(function(d,e){c?(oi(zo.j),oi(zo.i),zo.i=0):(oi(yo.j),oi(yo.i),yo.i=0);if(wo&&wo.isReady())if(void 0!==b)if(c){e=new Map;var f=Co.get(b)||[];e.set(b,f);Oo(e,d,a);Co.delete(b)}else{f=new Map;var g=Bo.get(b)||[];f.set(b,g);Mo(f,d,e,a);Bo.delete(b)}else c?(Oo(Co,d,a),Co.clear()):(Mo(Bo,d,e,a),Bo.clear());else Ko(c),d()})}
function Ko(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!yo.i||a&&!zo.i)){var b=ni(function(){Jo({writeThenSend:!0},void 0,a)},6E4);
a?zo.i=b:yo.i=b}oi(a?zo.j:yo.j);b=L("LOGGING_BATCH_TIMEOUT",Oh("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Ao&&(b=uo);b=ni(function(){Jo({writeThenSend:!0},void 0,a)},b);
a?zo.j=b:yo.j=b}
function Mo(a,b,c,d,e){var f=wo;d=void 0===d?{}:d;var g=Math.round(P()),h=a.size;a=p(a);for(var k=a.next();!k.done;k=a.next()){var m=p(k.value);k=m.next().value;var q=m.next().value;m=k;k=vb({context:qj(f.config_||pj())});k.events=q;(q=Do[m])&&Po(k,m,q);delete Do[m];m="visitorOnlyApprovedKey"===m;Qo(k,g,m);Ro(d);q=function(){h--;h||b()};
var u=function(){h--;h||b()};
try{Fj(f,"log_event",k,So(d,m,q,u,e)),Ao=!1}catch(y){Uh(y),c()}}}
function Oo(a,b,c,d){var e=wo;c=void 0===c?{}:c;var f=Math.round(P()),g=a.size;a=p(a);for(var h=a.next();!h.done;h=a.next()){var k=p(h.value);h=k.next().value;var m=k=k.next().value;k=new Eh;var q=vj(e.config_||pj());D(k,1,q);m=To(m);for(q=0;q<m.length;q++)pd(k,3,yh,m[q]);(m=Eo[h])&&Uo(k,h,m);delete Eo[h];h="visitorOnlyApprovedKey"===h;Vo(k,f,h);Ro(c);a:{Xc=!0;try{var u=JSON.stringify(k.toJSON(),ud);break a}finally{Xc=!1}u=void 0}k=u;h=So(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;Fj(e,"log_event","",h);Ao=!1}}
function Ro(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function So(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Bb:a,wa:b,cp:!!e,headers:{},postBodyFormat:"",postBody:""}}
function Qo(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=L("EVENT_ID"))&&(c=Wo(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Vo(a,b,c){C(a,2,b);if(!c&&(b=L("EVENT_ID"))){c=Wo();var d=new Bh;C(d,1,b);C(d,2,c);D(a,5,d)}}
function Wo(){var a=L("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*vo/2));a++;a>vo&&(a=1);Lh("BATCH_CLIENT_COUNTER",a);return a}
function Po(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Uo(a,b,c){if(id(c,1===ld(c,Dh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;D(a,4,c);a=md(a,Ng,1)||new Ng;c=md(a,Lg,3)||new Lg;var e=new Kg;e.setToken(b);C(e,1,d);pd(c,12,Kg,e);D(a,3,c)}
function To(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new yh(a[c]))}catch(d){Uh(new Q("Transport failed to deserialize "+String(a[c])))}return b}
;var Xo=x.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",Xo);
function Yo(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(dn[a]||cn[a])return}else if(M("lr_drop_other_payloads")&&dn[a])return;var e={},f=Math.round(d.timestamp||P());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=vn();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.Y&&(a=e.context,b=d.Y,b={index:Zo(b),groupKey:b},a.sequence=b,d.tb&&delete Xo[d.Y]);(d.oc?Lo:Fo)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
wa:d.wa},c)}
function $o(a){Jo(void 0,void 0,void 0===a?!1:a)}
function Zo(a){Xo[a]=a in Xo?Xo[a]+1:0;return Xo[a]}
;function Xj(a,b,c){c=void 0===c?{}:c;var d=bn;L("ytLoggingEventsDefaultDisabled",!1)&&bn==bn&&(d=null);Yo(a,b,d,c)}
;var ap=[{fb:function(a){return"Cannot read property '"+a.key+"'"},
Qa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{fb:function(a){return"Cannot call '"+a.key+"'"},
Qa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{fb:function(a){return a.key+" is not defined"},
Qa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var cp={ia:[],ha:[{la:bp,weight:500}]};function bp(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function dp(){this.ha=[];this.ia=[]}
var ep;function fp(){if(!ep){var a=ep=new dp;a.ia.length=0;a.ha.length=0;cp.ia&&a.ia.push.apply(a.ia,cp.ia);cp.ha&&a.ha.push.apply(a.ha,cp.ha)}return ep}
;var gp=new K;function hp(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=ip(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=ip(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=ip(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function ip(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function jp(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=kp(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=hp(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?kp(e+".ve",f,g,h):0;d+=g;d+=kp(e,a[e],b,c);if(500<d)break}}else c[b]=lp(a),d+=c[b].length;else c[b]=lp(a),d+=c[b].length;return d}
function kp(a,b,c,d){c+="."+a;a=lp(b);d[c]=a;return c.length+a.length}
function lp(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var mp=x.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",mp);function np(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||P());C(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=vn();d=new xh;C(d,1,c.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&c.Y){e=c.Y;var f=Zo(e),g=new wh;C(g,2,f);C(g,1,e);D(d,3,g);c.tb&&delete mp[c.Y]}D(a,33,d);(c.oc?No:Io)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,wa:c.wa},b)}
;function op(a,b){b=void 0===b?{}:b;var c=!1;L("ytLoggingEventsDefaultDisabled",!1)&&bn===bn&&(c=!0);np(a,c?null:bn,b)}
;function pp(a,b,c){var d=new yh;od(d,73,zh,a);c?np(d,c,b):op(d,b)}
function qp(a,b,c){var d=new yh;od(d,78,zh,a);c?np(d,c,b):op(d,b)}
function rp(a,b,c){var d=new yh;od(d,208,zh,a);c?np(d,c,b):op(d,b)}
function sp(a,b,c){var d=new yh;od(d,156,zh,a);c?np(d,c,b):op(d,b)}
function tp(a,b,c){var d=new yh;od(d,215,zh,a);c?np(d,c,b):op(d,b)}
function up(a,b,c){var d=new yh;od(d,111,zh,a);c?np(d,c,b):op(d,b)}
;var vp=new Set,wp=0,xp=0,yp=0,zp=[],Ap=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Wj(a){Bp(a)}
function Cp(a){Bp(a,"WARNING")}
function Bp(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||L("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||L("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(M("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=wp)){var m=zp,q=re(a),u=q.message||"Unknown Error",y=q.name||"UnknownError",v=q.stack||a.j||"Not available";if(v.startsWith(y+": "+u)){var E=v.split("\n");E.shift();v=E.join("\n")}var F=q.lineNumber||"Not available",H=q.fileName||"Not available",R=v,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var S=0;S<a.args.length&&!(O=jp(a.args[S],"params."+S,g,O),500<=O);S++);else if(a.hasOwnProperty("params")&&
a.params){var ja=a.params;if("object"===typeof a.params)for(var N in ja){if(ja[N]){var Ba="params."+N,Na=lp(ja[N]);g[Ba]=Na;O+=Ba.length+Na.length;if(500<O)break}}else g.params=lp(ja)}if(m.length)for(var va=0;va<m.length&&!(O=jp(m[va],"params.context."+va,g,O),500<=O);va++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var G={message:u,name:y,lineNumber:F,fileName:H,stack:R,params:g,sampleWeight:1},Ca=Number(a.columnNumber);isNaN(Ca)||(G.lineNumber=G.lineNumber+
":"+Ca);if("IGNORED"===a.level)var ua=0;else a:{for(var Fn=fp(),Gn=p(Fn.ia),ui=Gn.next();!ui.done;ui=Gn.next()){var Hn=ui.value;if(G.message&&G.message.match(Hn.hp)){ua=Hn.weight;break a}}for(var In=p(Fn.ha),vi=In.next();!vi.done;vi=In.next()){var Jn=vi.value;if(Jn.la(G)){ua=Jn.weight;break a}}ua=1}G.sampleWeight=ua;for(var Kn=p(ap),wi=Kn.next();!wi.done;wi=Kn.next()){var xi=wi.value;if(xi.Qa[G.name])for(var Ln=p(xi.Qa[G.name]),yi=Ln.next();!yi.done;yi=Ln.next()){var Mn=yi.value,Mf=G.message.match(Mn.regexp);
if(Mf){G.params["params.error.original"]=Mf[0];for(var zi=Mn.groups,Nn={},Uc=0;Uc<zi.length;Uc++)Nn[zi[Uc]]=Mf[Uc+1],G.params["params.error."+zi[Uc]]=Mf[Uc+1];G.message=xi.fb(Nn);break}}}G.params||(G.params={});var On=fp();G.params["params.errorServiceSignature"]="msg="+On.ia.length+"&cb="+On.ha.length;G.params["params.serviceWorker"]="false";x.document&&x.document.querySelectorAll&&(G.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Cb("sample").constructor!==
Ab&&(G.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(G);if(0!==G.sampleWeight&&!vp.has(G.message)){if("ERROR"===h){gp.ka("handleError",G);if(M("record_app_crashed_web")&&0===yp&&1===G.sampleWeight)if(yp++,M("errors_via_jspb")){var Ai=new $g;C(Ai,1,1);if(!M("report_client_error_with_app_crash_ks")){var Pn=new Vg;C(Pn,1,G.message);var Qn=new Wg;D(Qn,3,Pn);var Rn=new Xg;D(Rn,5,Qn);var Sn=new Yg;D(Sn,9,Rn);D(Ai,4,Sn)}var Tn=new yh;od(Tn,20,zh,Ai);op(Tn)}else{var Un=
{appCrashType:"APP_CRASH_TYPE_BREAKPAD"};M("report_client_error_with_app_crash_ks")||(Un.systemHealth={crashData:{clientError:{logMessage:{message:G.message}}}});Xj("appCrashed",Un)}xp++}else"WARNING"===h&&gp.ka("handleWarning",G);if(M("kevlar_gel_error_routing"))a:{var Td=h;if(M("errors_via_jspb")){if(Dp())var Wn=void 0;else{var Vc=new Sg;C(Vc,1,G.stack);G.fileName&&C(Vc,4,G.fileName);var qb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==qb.length&&(1!==qb.length||isNaN(Number(qb[0]))?
2!==qb.length||isNaN(Number(qb[0]))||isNaN(Number(qb[1]))||(C(Vc,2,Number(qb[0])),C(Vc,3,Number(qb[1]))):C(Vc,2,Number(qb[0])));var jc=new Vg;C(jc,1,G.message);C(jc,3,G.name);C(jc,6,G.sampleWeight);"ERROR"===Td?C(jc,2,2):"WARNING"===Td?C(jc,2,1):C(jc,2,0);var Bi=new Tg;C(Bi,1,!0);od(Bi,3,Ug,Vc);var Kb=new Pg;C(Kb,3,window.location.href);for(var Xn=L("FEXP_EXPERIMENTS",[]),Ci=0;Ci<Xn.length;Ci++){var lt=Xn[Ci];Zc(Kb);jd(Kb,5).push(lt)}var Di=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Mh()&&Di)for(var Yn=
p(Object.keys(Di)),kc=Yn.next();!kc.done;kc=Yn.next()){var Zn=kc.value,Ei=new Rg;C(Ei,1,Zn);Ei.setValue(String(Di[Zn]));pd(Kb,4,Rg,Ei)}var Fi=G.params;if(Fi){var $n=p(Object.keys(Fi));for(kc=$n.next();!kc.done;kc=$n.next()){var ao=kc.value,Gi=new Rg;C(Gi,1,"client."+ao);Gi.setValue(String(Fi[ao]));pd(Kb,4,Rg,Gi)}}var bo=L("SERVER_NAME"),co=L("SERVER_VERSION");if(bo&&co){var Hi=new Rg;C(Hi,1,"server.name");Hi.setValue(bo);pd(Kb,4,Rg,Hi);var Ii=new Rg;C(Ii,1,"server.version");Ii.setValue(co);pd(Kb,
4,Rg,Ii)}var Nf=new Wg;D(Nf,1,Kb);D(Nf,2,Bi);D(Nf,3,jc);Wn=Nf}var eo=Wn;if(!eo)break a;var fo=new yh;od(fo,163,zh,eo);op(fo)}else{if(Dp())var go=void 0;else{var Ud={stackTrace:G.stack};G.fileName&&(Ud.filename=G.fileName);var rb=G.lineNumber&&G.lineNumber.split?G.lineNumber.split(":"):[];0!==rb.length&&(1!==rb.length||isNaN(Number(rb[0]))?2!==rb.length||isNaN(Number(rb[0]))||isNaN(Number(rb[1]))||(Ud.lineNumber=Number(rb[0]),Ud.columnNumber=Number(rb[1])):Ud.lineNumber=Number(rb[0]));var Ji={level:"ERROR_LEVEL_UNKNOWN",
message:G.message,errorClassName:G.name,sampleWeight:G.sampleWeight};"ERROR"===Td?Ji.level="ERROR_LEVEL_ERROR":"WARNING"===Td&&(Ji.level="ERROR_LEVEL_WARNNING");var mt={isObfuscated:!0,browserStackInfo:Ud},Wc={pageUrl:window.location.href,kvPairs:[]};L("FEXP_EXPERIMENTS")&&(Wc.experimentIds=L("FEXP_EXPERIMENTS"));var Ki=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Mh()&&Ki)for(var ho=p(Object.keys(Ki)),lc=ho.next();!lc.done;lc=ho.next()){var io=lc.value;Wc.kvPairs.push({key:io,value:String(Ki[io])})}var Li=
G.params;if(Li){var jo=p(Object.keys(Li));for(lc=jo.next();!lc.done;lc=jo.next()){var ko=lc.value;Wc.kvPairs.push({key:"client."+ko,value:String(Li[ko])})}}var lo=L("SERVER_NAME"),mo=L("SERVER_VERSION");lo&&mo&&(Wc.kvPairs.push({key:"server.name",value:lo}),Wc.kvPairs.push({key:"server.version",value:mo}));go={errorMetadata:Wc,stackTrace:mt,logMessage:Ji}}var no=go;if(!no)break a;Xj("clientError",no)}if("ERROR"===Td||M("errors_flush_gel_always_killswitch"))M("web_fp_via_jspb")&&$o(!0),$o()}if(!M("suppress_error_204_logging")){var Vd=
G.params||{},Lb={urlParams:{a:"logerror",t:"jserror",type:G.name,msg:G.message.substr(0,250),line:G.lineNumber,level:h,"client.name":Vd.name},postParams:{url:L("PAGE_NAME",window.location.href),file:G.fileName},method:"POST"};Vd.version&&(Lb["client.version"]=Vd.version);if(Lb.postParams){G.stack&&(Lb.postParams.stack=G.stack);for(var oo=p(Object.keys(Vd)),Mi=oo.next();!Mi.done;Mi=oo.next()){var po=Mi.value;Lb.postParams["client."+po]=Vd[po]}var Ni=L("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(Ni)for(var qo=
p(Object.keys(Ni)),Oi=qo.next();!Oi.done;Oi=qo.next()){var ro=Oi.value;Lb.postParams[ro]=Ni[ro]}var so=L("SERVER_NAME"),to=L("SERVER_VERSION");so&&to&&(Lb.postParams["server.name"]=so,Lb.postParams["server.version"]=to)}Pi(L("ECATCHER_REPORT_HOST","")+"/error_204",Lb)}try{vp.add(G.message)}catch(Mu){}wp++}}}}
function Dp(){for(var a=p(Ap),b=a.next();!b.done;b=a.next())if(Oj(b.value.toLowerCase()))return!0;return!1}
function Ep(a){var b=Ja.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,fa(b))}
;function Fp(){this.register=new Map}
function Gp(a){a=p(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.kp("ABORTED")}
Fp.prototype.clear=function(){Gp(this);this.register.clear()};
var Hp=new Fp;var Ip=Date.now().toString();
function Jp(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ip)for(a=1,b=0;b<Ip.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ip.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Kp=x.ytLoggingDocDocumentNonce_;Kp||(Kp=Jp(),z("ytLoggingDocDocumentNonce_",Kp));var Lp=Kp;var Mp={Cg:0,rd:1,Bd:2,pk:3,Eg:4,zo:5,il:6,Jm:7,hm:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Np(a){this.i=a}
function Op(a){return new Np({trackingParams:a})}
Np.prototype.getAsJson=function(){var a={};void 0!==this.i.trackingParams?a.trackingParams=this.i.trackingParams:(a.veType=this.i.veType,void 0!==this.i.veCounter&&(a.veCounter=this.i.veCounter),void 0!==this.i.elementIndex&&(a.elementIndex=this.i.elementIndex));void 0!==this.i.dataElement&&(a.dataElement=this.i.dataElement.getAsJson());void 0!==this.i.youtubeData&&(a.youtubeData=this.i.youtubeData);return a};
Np.prototype.getAsJspb=function(){var a=new bh;void 0!==this.i.trackingParams?C(a,1,this.i.trackingParams):(void 0!==this.i.veType&&C(a,2,this.i.veType),void 0!==this.i.veCounter&&C(a,6,this.i.veCounter),void 0!==this.i.elementIndex&&C(a,3,this.i.elementIndex));if(void 0!==this.i.dataElement){var b=this.i.dataElement.getAsJspb();D(a,7,b)}void 0!==this.i.youtubeData&&D(a,8,this.i.jspbYoutubeData);return a};
Np.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Np.prototype.isClientVe=function(){return!this.i.trackingParams&&!!this.i.veType};function Pp(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Qp(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Rp(a){return L(Qp(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",Rp);function Sp(a){return(a=Rp(void 0===a?0:a))?new Np({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Tp(){var a=L("csn-to-ctt-auth-info");a||(a={},Lh("csn-to-ctt-auth-info",a));return a}
function Up(a){a=L(Pp(void 0===a?0:a));if(!a&&!L("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",Up);function Vp(a,b,c){var d=Tp();(c=Up(c))&&delete d[c];b&&(d[a]=b)}
function Wp(a){return Tp()[a]}
z("yt_logging_screen.getCttAuthInfo",Wp);
function Xp(a,b,c,d){c=void 0===c?0:c;if(a!==L(Pp(c))||b!==L(Qp(c)))Vp(a,d,c),Lh(Pp(c),a),Lh(Qp(c),b),b=function(){setTimeout(function(){if(a)if(M("web_time_via_jspb")){var e=new ch;C(e,1,Lp);C(e,2,a);M("use_default_heartbeat_client")?up(e):up(e,void 0,bn)}else e={clientDocumentNonce:Lp,clientScreenNonce:a},M("use_default_heartbeat_client")?Xj("foregroundHeartbeatScreenAssociated",e):Yo("foregroundHeartbeatScreenAssociated",e,bn)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):
b()}
z("yt_logging_screen.setCurrentScreen",Xp);var Yp=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Yp);function Zp(a){Gh(Yp,arguments)}
;var $p={qd:3611,Ec:27686,Fc:85013,Gc:23462,Ic:42016,Jc:62407,Kc:26926,Hc:43781,Lc:51236,Mc:79148,Nc:50160,Oc:77504,bd:87907,cd:18630,dd:54445,ed:80935,fd:105675,gd:37521,hd:147285,jd:47786,kd:98349,ld:123695,md:6827,nd:29434,od:7282,pd:124448,td:32276,sd:76278,ud:147868,vd:147869,wd:93911,xd:106531,yd:27259,zd:27262,Ad:27263,Cd:21759,Dd:27107,Ed:62936,Fd:49568,Gd:38408,Hd:80637,Id:68727,Jd:68728,Kd:80353,Ld:80356,Md:74610,Nd:45707,Od:83962,Pd:83970,Qd:46713,Rd:89711,Sd:74612,Td:93265,Ud:74611,Vd:131380,
Xd:128979,Yd:139311,Zd:128978,Wd:131391,ae:105350,ce:139312,de:134800,be:131392,ge:113533,he:93252,ie:99357,ke:94521,le:114252,me:113532,ne:94522,je:94583,oe:88E3,pe:139580,qe:93253,re:93254,se:94387,te:94388,ue:93255,we:97424,ee:72502,xe:110111,ye:76019,Ae:117092,Be:117093,ze:89431,Ce:110466,De:77240,Ee:60508,Fe:148123,Ge:148124,He:137401,Ie:137402,Je:137046,Ke:73393,Le:113534,Me:92098,Ne:131381,Oe:84517,Pe:83759,Qe:80357,Re:86113,Se:72598,Te:72733,Ue:107349,Ve:124275,We:118203,Xe:133275,Ye:133274,
Ze:133272,af:133273,bf:133276,cf:144507,df:143247,ef:143248,ff:143249,gf:143250,hf:143251,jf:144401,lf:117431,kf:133797,mf:128572,nf:133405,pf:117429,qf:117430,rf:117432,sf:120080,tf:117259,uf:121692,vf:145656,wf:145655,xf:145653,yf:145654,zf:145657,Af:132972,Bf:133051,Cf:133658,Df:132971,Ef:97615,Gf:143359,Ff:143356,If:143361,Hf:143358,Kf:143360,Jf:143357,Lf:142303,Mf:143353,Nf:143354,Of:144479,Pf:143355,Qf:31402,Sf:133624,Tf:146477,Uf:133623,Vf:133622,Rf:133621,Wf:84774,Xf:95117,Yf:98930,Zf:98931,
ag:98932,cg:43347,dg:129889,eg:149123,fg:45474,gg:100352,hg:84758,ig:98443,jg:117985,kg:74613,lg:74614,mg:64502,ng:136032,og:74615,pg:74616,qg:122224,rg:74617,sg:77820,tg:74618,ug:93278,vg:93274,wg:93275,xg:93276,yg:22110,zg:29433,Ag:133798,Bg:132295,Dg:120541,Fg:82047,Gg:113550,Hg:75836,Ig:75837,Jg:42352,Kg:84512,Lg:76065,Mg:75989,Rg:16623,Sg:32594,Tg:27240,Ug:32633,Vg:74858,Xg:3945,Wg:16989,Yg:45520,Zg:25488,ah:25492,bh:25494,dh:55760,eh:14057,fh:18451,gh:57204,hh:57203,ih:17897,jh:57205,kh:18198,
lh:17898,mh:17909,nh:43980,oh:46220,ph:11721,qh:147994,rh:49954,sh:96369,th:3854,uh:56251,vh:25624,Mh:16906,Nh:99999,Oh:68172,Ph:27068,Qh:47973,Rh:72773,Sh:26970,Th:26971,Uh:96805,Vh:17752,Wh:73233,Xh:109512,Yh:22256,Zh:14115,ai:22696,bi:89278,ci:89277,di:109513,fi:43278,gi:43459,hi:43464,ii:89279,ji:43717,ki:55764,li:22255,mi:147912,ni:89281,oi:40963,ri:43277,si:43442,ti:91824,vi:120137,wi:96367,xi:36850,yi:72694,zi:37414,Ai:36851,Ci:124863,Bi:121343,Di:73491,Ei:54473,Fi:43375,Gi:46674,Hi:143815,
Ii:139095,Ji:144402,Ki:149968,Li:149969,Mi:32473,Ni:72901,Oi:72906,Pi:50947,Qi:50612,Ri:50613,Si:50942,Ti:84938,Ui:84943,Vi:84939,Wi:84941,Xi:84944,Yi:84940,Zi:84942,aj:35585,bj:51926,cj:79983,dj:63238,ej:18921,fj:63241,gj:57893,hj:41182,ij:135732,jj:33424,kj:22207,lj:42993,mj:36229,nj:22206,oj:22205,pj:18993,qj:19001,rj:18990,sj:18991,tj:18997,uj:18725,vj:19003,wj:36874,xj:44763,yj:33427,zj:67793,Aj:22182,Bj:37091,Cj:34650,Dj:50617,Ej:47261,Fj:22287,Gj:25144,Hj:97917,Ij:62397,Jj:150871,Kj:150874,
Lj:125598,Mj:137935,Nj:36961,Oj:108035,Pj:27426,Qj:27857,Rj:27846,Sj:27854,Tj:69692,Uj:61411,Vj:39299,Wj:38696,Xj:62520,Yj:36382,Zj:108701,ak:50663,bk:36387,ck:14908,dk:37533,ek:105443,fk:61635,gk:62274,hk:133818,ik:65702,jk:65703,kk:65701,lk:76256,mk:37671,nk:49953,qk:36216,rk:28237,sk:39553,tk:29222,uk:26107,vk:38050,wk:26108,yk:120745,xk:26109,zk:26110,Ak:66881,Bk:28236,Ck:14586,Dk:57929,Ek:74723,Fk:44098,Gk:44099,Jk:23528,Kk:61699,Hk:134104,Ik:134103,Lk:59149,Mk:101951,Nk:97346,Ok:118051,Pk:95102,
Qk:64882,Rk:119505,Sk:63595,Tk:63349,Uk:95101,Vk:75240,Wk:27039,Xk:68823,Yk:21537,Zk:83464,al:75707,bl:83113,dl:101952,fl:101953,jl:79610,kl:125755,ll:24402,ml:24400,nl:32925,ol:57173,pl:122502,ql:145268,rl:138480,sl:64423,ul:64424,vl:33986,wl:100828,xl:129089,yl:21409,Cl:135155,Dl:135156,El:135157,Fl:135158,Gl:135159,Hl:135160,Il:135161,Jl:135162,Kl:135163,Ll:135164,Ml:135165,Nl:135166,zl:11070,Al:11074,Bl:17880,Ol:14001,Ql:30709,Rl:30707,Sl:30711,Tl:30710,Ul:30708,Pl:26984,Vl:146143,Wl:63648,Xl:63649,
Yl:51879,Zl:111059,am:5754,bm:20445,dm:130975,cm:130976,em:110386,fm:113746,gm:66557,im:17310,jm:28631,km:21589,lm:68012,mm:60480,nm:138664,om:141121,pm:31571,qm:141978,rm:150105,sm:150106,tm:150107,um:150108,vm:76980,wm:41577,xm:45469,ym:38669,zm:13768,Am:13777,Bm:141842,Cm:62985,Dm:4724,Em:59369,Fm:43927,Gm:43928,Hm:12924,Im:100355,Lm:56219,Mm:27669,Nm:10337,Km:47896,Om:122629,Qm:139723,Pm:139722,Rm:121258,Sm:107598,Tm:127991,Um:96639,Vm:107536,Wm:130169,Xm:96661,Ym:145188,Zm:96658,an:116646,bn:121122,
cn:96660,dn:127738,en:127083,fn:147842,gn:104443,hn:96659,jn:147595,kn:106442,ln:134840,mn:63667,nn:63668,pn:63669,qn:130686,rn:147036,sn:78314,tn:147799,un:148649,vn:55761,wn:127098,xn:134841,yn:96368,zn:67374,An:48992,Bn:146176,Cn:49956,Dn:31961,En:26388,Fn:23811,Gn:5E4,Hn:126250,In:96370,Jn:47355,Kn:47356,Ln:37935,Mn:45521,Nn:21760,On:83769,Pn:49977,Qn:49974,Rn:93497,Sn:93498,Tn:34325,Un:140759,Vn:115803,Wn:123707,Xn:100081,Yn:35309,Zn:68314,ao:25602,bo:100339,co:143516,eo:59018,fo:18248,ho:50625,
jo:9729,ko:37168,lo:37169,mo:21667,no:16749,oo:18635,po:39305,qo:18046,ro:53969,so:8213,to:93926,uo:102852,vo:110099,wo:22678,xo:69076,yo:137575,Ao:139224,Bo:100856,Co:17736,Do:3832,Eo:147111,Fo:55759,Go:64031,Mo:93044,No:93045,Oo:34388,Po:17657,Qo:17655,Ro:39579,So:39578,To:77448,Uo:8196,Vo:11357,Wo:69877,Xo:8197,Yo:82039};function aq(){var a=ub(bq),b;return ag(new Uf(function(c,d){a.onSuccess=function(e){mi(e)?c(new cq(e)):d(new dq("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new dq("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new dq("Request timed out","net.timeout",e))};
b=Pi("//web.archive.org/web/20220430003134/https://googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof bg&&b.abort();
return Zf(c)})}
function dq(a,b,c){$a.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
r(dq,$a);function cq(a){this.xhr=a}
;function eq(){this.j=0;this.i=null}
eq.prototype.then=function(a,b,c){return 1===this.j&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:fq(a):2===this.j&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:gq(a):this};
eq.prototype.getValue=function(){return this.i};
eq.prototype.$goog_Thenable=!0;function gq(a){var b=new eq;a=void 0===a?null:a;b.j=2;b.i=void 0===a?null:a;return b}
function fq(a){var b=new eq;a=void 0===a?null:a;b.j=1;b.i=void 0===a?null:a;return b}
;function hq(){if(ke()||Nj&&Oj("applewebkit")&&!Oj("version")&&(!Oj("safari")||Oj("gsa/"))||vc&&Oj("version/"))return!0;if(M("enable_web_eom_visitor_data"))return L("EOM_VISITOR_DATA")?!1:!0;var a=L("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a?!0:(a=$i("CONSENT"))?a.startsWith("YES+"):!0}
;function iq(a){var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){return"EMBEDDED_PLAYER_MODE_UNKNOWN"}if(b)a:{for(var c in af)if(af[c]==b.embeddedPlayerMode){b=af[c];break a}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN";return b}
;function jq(a){$a.call(this,a.message||a.description||a.name);this.isMissing=a instanceof kq;this.isTimeout=a instanceof dq&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof bg}
r(jq,$a);jq.prototype.name="BiscottiError";function kq(){$a.call(this,"Biscotti ID is missing from server")}
r(kq,$a);kq.prototype.name="BiscottiMissingError";var bq={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},lq=null;
function Xh(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Zf(Error("Biscotti id fetching has been disabled entirely."));if(!hq())return Zf(Error("User has not consented - not fetching biscotti id."));var a=L("PLAYER_VARS",{});if("1"==sb(a))return Zf(Error("Biscotti ID is not available in private embed mode"));if(M("embeds_web_disable_ads_for_pfl")&&"EMBEDDED_PLAYER_MODE_PFL"===iq(a))return Zf(Error("Biscotti id fetching has been disabled for pfl."));lq||(lq=ag(aq().then(mq),
function(b){return nq(2,b)}));
return lq}
function mq(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new kq;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new kq;a=a.id;Yh(a);lq=fq(a);oq(18E5,2);return a}
function nq(a,b){b=new jq(b);Yh("");lq=gq(b);0<a&&oq(12E4,a-1);throw b;}
function oq(a,b){ni(function(){ag(aq().then(mq,function(c){return nq(b,c)}),bb)},a)}
function pq(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Xh()}catch(b){return Zf(b)}}
;function qq(a){if("1"!=sb(L("PLAYER_VARS",{}))){a&&Wh();try{pq().then(function(){},function(){}),ni(qq,18E5)}catch(b){Uh(b)}}}
;function rq(){this.zc=!0}
function sq(a){var b={},c=me([]);c&&(b.Authorization=c,c=a=null==a?void 0:a.sessionIndex,void 0===c&&(c=Number(L("SESSION_INDEX",0)),c=isNaN(c)?0:c),M("voice_search_auth_header_removal")||(b["X-Goog-AuthUser"]=c),"INNERTUBE_HOST_OVERRIDE"in Kh||(b["X-Origin"]=window.location.origin),void 0===a&&"DELEGATED_SESSION_ID"in Kh&&(b["X-Goog-PageId"]=L("DELEGATED_SESSION_ID")));return b}
;var tq=Symbol("injectionDeps");function uq(a){this.name=a}
uq.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function vq(){this.key=wq}
function xq(){this.providers=new Map;this.i=new Map}
xq.prototype.resolve=function(a){return a instanceof vq?yq(this,a.key,[],!0):yq(this,a,[])};
function yq(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.providers.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.providers.get(b);c.push(b);if(d.Dc)var e=d.Dc;else if(d.Cc)e=d[tq]?zq(a,d[tq],c):[],e=d.Cc.apply(d,fa(e));else if(d.Kb){e=d.Kb;var f=e[tq]?zq(a,e[tq],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(fa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.qp||a.i.set(b,e);
return e}
function zq(a,b,c){return b?b.map(function(d){return d instanceof vq?yq(a,d.key,c,!0):yq(a,d,c)}):[]}
;var Aq;var Bq={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};var Cq=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Dq(){var a=void 0===a?window.location.href:a;if(M("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=fi(a).theme;return Cq.get(b)||null}catch(c){}return null}
;function Eq(){this.i={};if(this.j=aj()){var a=$i("CONSISTENCY");a&&Fq(this,{encryptedTokenJarContents:a})}}
Eq.prototype.handleResponse=function(a,b){var c,d;b=(null==(c=b.ca.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=p(b);for(c=e.next();!c.done;c=e.next())delete this.i[c.value.encryptedTokenJarContents];Fq(this,a)}};
function Fq(a,b){if(b.encryptedTokenJarContents&&(a.i[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.i[b.encryptedTokenJarContents]},1E3*c);
a.j&&Zi("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Gq=window.location.hostname.split(".").slice(-2).join(".");function Hq(){var a=L("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===L("INNERTUBE_CLIENT_NAME")&&(this.i=Iq(this))&&(a=this.i.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.j=void 0)}
var Jq;Hq.getInstance=function(){Jq=A("yt.clientLocationService.instance");Jq||(Jq=new Hq,z("yt.clientLocationService.instance",Jq));return Jq};
Hq.prototype.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.j?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.j.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.j.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.j.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
Hq.prototype.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.j=void 0,"TVHTML5"===L("INNERTUBE_CLIENT_NAME")?(this.i=Iq(this))&&this.i.set("yt-location-playability-token",a,15552E3):Zi("YT_CL",JSON.stringify({loctok:a}),15552E3,Gq,!0))};
function Iq(a){return void 0===a.i?new yj("yt-client-location"):a.i}
Hq.prototype.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition)||!M("web_enable_browser_geolocation_api")&&!M("enable_handoff_location_2fa_on_mweb"))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;M("enable_handoff_location_2fa_on_mweb")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.j=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
Hq.prototype.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Kq(a,b){var c;if((null==(c=a.signalServiceEndpoint)?0:c.signal)&&b.Aa&&(c=b.Aa[a.signalServiceEndpoint.signal]))return c();var d;if((null==(d=a.continuationCommand)?0:d.request)&&b.Rb&&(d=b.Rb[a.continuationCommand.request]))return d();for(var e in a)if(b.ob[e]&&(a=b.ob[e]))return a()}
;function Lq(a){return function(){return new a}}
;var Mq={},Nq=(Mq.WEB_UNPLUGGED="^unplugged/",Mq.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Mq.WEB_UNPLUGGED_OPS="^unplugged/",Mq.WEB_UNPLUGGED_PUBLIC="^unplugged/",Mq.WEB_CREATOR="^creator/",Mq.WEB_KIDS="^kids/",Mq.WEB_EXPERIMENTS="^experiments/",Mq.WEB_MUSIC="^music/",Mq.WEB_REMIX="^music/",Mq.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Mq.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Mq);
function Oq(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Nq[b];if(c){var d=new RegExp(c),e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Nq).forEach(function(g){var h=p(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=p(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Pq(a,b){return{method:void 0===b?"POST":b,mode:hi(a)?"same-origin":"cors",credentials:hi(a)?"same-origin":"include"}}
;function Qq(){}
Qq.prototype.s=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Bq:c;var d=a.clickTrackingParams,e=this.m,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=L("INNERTUBE_CONTEXT");if(g){g=vb(g);M("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=L("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;cj.getInstance();var m="USER_INTERFACE_THEME_LIGHT";fj(165)?m="USER_INTERFACE_THEME_DARK":fj(174)?m="USER_INTERFACE_THEME_LIGHT":!M("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:Dq()||m;h.userInterfaceTheme=k;if(!f){if(k=
mj())h.connectionType=k;M("web_log_effective_connection_type")&&(k=nj())&&(g.client.effectiveConnectionType=k)}var q;if(M("web_log_memory_total_kbytes")&&(null==(q=x.navigator)?0:q.deviceMemory)){var u;q=null==(u=x.navigator)?void 0:u.deviceMemory;g.client.memoryTotalKbytes=""+1E6*q}u=fi(x.location.href);!M("web_populate_internal_geo_killswitch")&&u.internalcountrycode&&(h.internalGeo=u.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:x.location.href},M("kevlar_woffle")&&
Xi.i&&(h.mainAppWebInfo.pwaInstallabilityStatus=Xi.i.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Yi(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!M("web_lr_app_quality_killswitch")&&(u=L("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:u})),u=L("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:u}));
if(!M("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var y=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(Na){}y=void 0}y&&(h.timeZone=y)}(y=Ph())?h.experimentsToken=y:delete h.experimentsToken;y=Qh();Eq.i||(Eq.i=new Eq);h=Eq.i.i;u=[];q=0;for(var v in h)u[q++]=h[v];g.request=Object.assign({},g.request,{internalExperimentFlags:y,consistencyTokenJars:u});!M("web_prequest_context_killswitch")&&(v=L("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
v);y=cj.getInstance();v=fj(58);y=y.get("gsml","");g.user=Object.assign({},g.user);v&&(g.user.enableSafetyMode=v);y&&(g.user.lockedSafetyMode=!0);M("warm_op_csn_cleanup")?e&&(f=Up())&&(g.clientScreenNonce=f):!f&&(f=Up())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=A("yt.mdx.remote.remoteClient_"))g.remoteClient=d;M("web_enable_client_location_service")&&Hq.getInstance().setLocationOnInnerTubeContext(g);try{var E=ii(),F=E.bid;delete E.bid;g.adSignalsInfo={params:[],bid:F};
var H=p(Object.entries(E));for(var R=H.next();!R.done;R=H.next()){var O=p(R.value),S=O.next().value,ja=O.next().value;E=S;F=ja;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:E,value:""+F})}}catch(Na){Bp(Na)}H=g}else Bp(Error("Error: No InnerTubeContext shell provided in ytconfig.")),H={};H={context:H};if(R=this.i(a)){this.j(H,R,b);var N;b="/youtubei/v1/"+Oq(this.l());var Ba;(a=null==(N=a.commandMetadata)?void 0:null==(Ba=N.webCommandMetadata)?void 0:Ba.apiUrl)&&(b=a);N=b;(Ba=L("INNERTUBE_HOST_OVERRIDE"))&&
(N=String(Ba)+String(dc(N)));Ba={};Ba.key=L("INNERTUBE_API_KEY");M("json_condensed_response")&&(Ba.prettyPrint="false");N=gi(N,Ba||{},!1);N={input:N,sa:Pq(N),ca:H,config:Object.assign({},void 0)};N.config.Ha?N.config.Ha.identity=c:N.config.Ha={identity:c};return N}Bp(new Q("Error: Failed to create Request from Command.",a))};
da.Object.defineProperties(Qq.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Rq(){}
r(Rq,Qq);Rq.prototype.s=function(){return{input:"/getDatasyncIdsEndpoint",sa:Pq("/getDatasyncIdsEndpoint","GET"),ca:{}}};
Rq.prototype.l=function(){return[]};
Rq.prototype.i=function(){};
Rq.prototype.j=function(){};var Sq={},Tq=(Sq.GET_DATASYNC_IDS=Lq(Rq),Sq);function Uq(a){var b=Ja.apply(1,arguments);if(!Vq(a)||b.some(function(d){return!Vq(d)}))throw Error("Only objects may be merged.");
b=p(b);for(var c=b.next();!c.done;c=b.next())Wq(a,c.value);return a}
function Wq(a,b){for(var c in b)if(Vq(b[c])){if(c in a&&!Vq(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Wq(a[c],b[c])}else if(Xq(b[c])){if(c in a&&!Xq(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Yq(a[c],b[c])}else a[c]=b[c];return a}
function Yq(a,b){b=p(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Vq(c)?a.push(Wq({},c)):Xq(c)?a.push(Yq([],c)):a.push(c);return a}
function Vq(a){return"object"===typeof a&&!Array.isArray(a)}
function Xq(a){return"object"===typeof a&&Array.isArray(a)}
;function Zq(a,b){El.call(this,1,arguments);this.timer=b}
r(Zq,El);var $q=new Fl("aft-recorded",Zq);var ar=window;function br(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var T=ar.performance||ar.mozPerformance||ar.msPerformance||ar.webkitPerformance||new br;var cr=!1,dr={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Wa(T.clearResourceTimings||T.webkitClearResourceTimings||T.mozClearResourceTimings||T.msClearResourceTimings||T.oClearResourceTimings||bb,T);function er(a){var b=fr(a);if(b.aft)return b.aft;a=L((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function gr(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null==T?void 0:null==(a=T.getEntriesByType)?void 0:null==(b=a.call(T,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=hr(e.requestStart),e.responseEnd=hr(e.responseEnd),e.redirectStart=hr(e.redirectStart),e.redirectEnd=hr(e.redirectEnd),e.domainLookupEnd=hr(e.domainLookupEnd),e.connectStart=hr(e.connectStart),e.connectEnd=hr(e.connectEnd),e.responseStart=hr(e.responseStart),
e.secureConnectionStart=hr(e.secureConnectionStart),e.domainLookupStart=hr(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=T.timing}else a=T.timing;return a}
function ir(){return M("csi_use_time_origin")&&T.timeOrigin?Math.floor(T.timeOrigin):T.timing.navigationStart}
function hr(a){return Math.round(ir()+a)}
function jr(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function kr(a){a=jr(a);a.info||(a.info={});return a.info}
function fr(a){a=jr(a);a.tick||(a.tick={});return a.tick}
function lr(a){a=jr(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function mr(a){a=lr(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function nr(a){var b=jr(a).nonce;b||(b=Jp(),jr(a).nonce=b);return b}
function or(a){var b=fr(a||""),c=er(a);c&&!cr&&(Kl($q,new Zq(Math.round(c-b._start),a)),cr=!0)}
function pr(a,b){for(var c=p(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!pr(a[d],b[d]))return!1;return!0}
;function qr(){if(T.getEntriesByType){var a=T.getEntriesByType("paint");if(a=ib(a,function(b){return"first-paint"===b.name}))return hr(a.startTime)}a=T.timing;
return a.dc?Math.max(0,a.dc):0}
;function rr(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function sr(a){a=a||"";var b=A("ytcsi.reference");b||(rr(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=rr(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},tr=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",
U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",
U.embed="LATENCY_ACTION_EMBED",U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",U.parent_tools_collection=
"LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",U.results="LATENCY_ACTION_RESULTS",
U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",
U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U),V={},ur=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",
V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",
V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",
V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm=
"shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",
V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),vr="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
wr={},xr=(wr.ccs="CANARY_STATE_",wr.mver="MEASUREMENT_VERSION_",wr.pis="PLAYER_INITIALIZED_STATE_",wr.yt_pt="LATENCY_PLAYER_",wr.pa="LATENCY_ACTION_",wr.ctop="TOP_ENTITY_TYPE_",wr.yt_vst="VIDEO_STREAM_TYPE_",wr),yr="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function zr(a){return tr[a]||"LATENCY_ACTION_UNKNOWN"}
function Ar(a,b,c){c=lr(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in ur){c=ur[a];0<=db(vr,c)&&(b=!!b);a in xr&&"string"===typeof b&&(b=xr[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Uq({},d)}0<=db(yr,a)||Cp(new Q("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,
LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,
LATENCY_ACTION_ENTITY_TRANSFORM:131,LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,
LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,
LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,
LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,
LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,
LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,
LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,LATENCY_ACTION_SEARCH_THUMBNAILS:59,
LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,LATENCY_ACTION_LIBRARY:21,
LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_WATCH:3,LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_HOME:1,LATENCY_ACTION_STARTUP:106,
LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";
W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";
W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";
W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";
W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";
W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";
W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";
W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";
W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";
W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";
W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";
W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";
W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";
W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";
W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";
W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";
W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var Br={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};Br[Br.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";Br[Br.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";Br[Br.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";
var X={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};X[X.CONN_INVALID]="CONN_INVALID";X[X.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";X[X.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";X[X.CONN_WIFI_METERED]="CONN_WIFI_METERED";X[X.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";X[X.CONN_DISCO]="CONN_DISCO";
X[X.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";X[X.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";X[X.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";X[X.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";X[X.CONN_WIFI]="CONN_WIFI";X[X.CONN_NONE]="CONN_NONE";X[X.CONN_UNKNOWN]="CONN_UNKNOWN";X[X.CONN_DEFAULT]="CONN_DEFAULT";
var Y={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Y[Y.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Y[Y.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Y[Y.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Y[Y.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Y[Y.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Y[Y.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Y[Y.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Y[Y.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Y[Y.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Y[Y.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Y[Y.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Y[Y.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Y[Y.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Y[Y.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Y[Y.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Y[Y.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Y[Y.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Y[Y.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Y[Y.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Y[Y.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Y[Y.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Y[Y.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Y[Y.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Y[Y.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Y[Y.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Y[Y.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Y[Y.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var Cr={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};Cr[Cr.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
Cr[Cr.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";Cr[Cr.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";Cr[Cr.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";Cr[Cr.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";Cr[Cr.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";Cr[Cr.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";Cr[Cr.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var Dr={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};Dr[Dr.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";Dr[Dr.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";Dr[Dr.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";Dr[Dr.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var Er={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
Er[Er.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";Er[Er.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var Fr={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};Fr[Fr.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";Fr[Fr.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";Fr[Fr.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
Fr[Fr.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";Fr[Fr.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";Fr[Fr.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var Gr={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};Gr[Gr.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";Gr[Gr.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";Gr[Gr.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";Gr[Gr.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var Hr={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};Hr[Hr.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";Hr[Hr.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";Hr[Hr.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var Ir={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};Ir[Ir.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
Ir[Ir.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";Ir[Ir.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var Jr="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo prefetchInfo accelerationSession webInfo tvInfo kabukiInfo mwebInfo musicInfo".split(" ");var Kr=x.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",Kr);function Lr(){this.i=0}
function Mr(){Lr.i||(Lr.i=new Lr);return Lr.i}
Lr.prototype.tick=function(a,b,c,d){Nr(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new vh,C(d,1,a),C(d,2,b),a=new yh,od(a,5,zh,d),op(a,c)):Xj("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Lr.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Nr(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Xj("latencyActionInfo",a,{cttAuthInfo:c}))};
Lr.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));Nr(this,"info_"+d+"_"+b)||(C(a,2,b),b={cttAuthInfo:c},c=new yh,od(c,7,zh,a),op(c,b))};
Lr.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Nr(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Xj("latencyActionSpan",a,{cttAuthInfo:c}))};
function Nr(a,b){Kr[b]=Kr[b]||{count:0};var c=Kr[b];c.count++;c.time=P();a.i||(a.i=Hj(function(){var d=P(),e;for(e in Kr)Kr[e]&&6E4<d-Kr[e].time&&delete Kr[e];a&&(a.i=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Q("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Cp(c)),!0):!1}
;function Or(){var a=["ol"];sr("").info.actionType="embed";a&&Lh("TIMING_AFT_KEYS",a);Lh("TIMING_ACTION","embed");Pr();a=kr();var b=mr();if("cold"===a.yt_lt||"cold"===b.loadType){var c=fr(),d=lr();d=d.gelTicks?d.gelTicks:d.gelTicks={};for(var e in c)e in d||Z(e,c[e]);e={};c=!1;d=p(Object.keys(a));for(var f=d.next();!f.done;f=d.next())f=f.value,(f=Ar(f,a[f]))&&!pr(mr(),f)&&(Uq(b,f),Uq(e,f),c=!0);c&&Qr(e)}z("ytglobal.timingready_",!0);a=L("TIMING_ACTION");A("ytglobal.timingready_")&&a&&"_start"in fr()&&
er()&&or()}
function Rr(a,b,c,d){null!==b&&(kr(c)[a]=b,(a=Ar(a,b,c))&&Qr(a,c,d))}
function Qr(a,b,c){if(!M("web_csi_via_jspb")||(void 0===c?0:c))c=sr(b||""),Uq(c.info,a),Uq(mr(b),a),c=nr(b),b=jr(b).cttAuthInfo,Mr().info(a,c,b);else{c=new ph;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":rh(c,W[a[e]]);break;case "clientActionNonce":C(c,2,a[e]);break;case "clientScreenNonce":C(c,4,a[e]);break;case "loadType":C(c,3,a[e]);break;case "isPrewarmedLaunch":C(c,92,a[e]);break;case "isFirstInstall":C(c,55,a[e]);break;case "networkType":C(c,
5,Br[a[e]]);break;case "connectionType":C(c,26,X[a[e]]);break;case "detailedConnectionType":C(c,27,Y[a[e]]);break;case "isVisible":C(c,6,a[e]);break;case "playerType":C(c,7,Cr[a[e]]);break;case "clientPlaybackNonce":C(c,8,a[e]);break;case "adClientPlaybackNonce":C(c,28,a[e]);break;case "previousCpn":C(c,77,a[e]);break;case "targetCpn":C(c,76,a[e]);break;case "isMonetized":C(c,9,a[e]);break;case "isPrerollAllowed":C(c,16,a[e]);break;case "isPrerollShown":C(c,17,a[e]);break;case "adType":C(c,12,a[e]);
break;case "adTypesAllowed":C(c,36,a[e]);break;case "adNetworks":C(c,37,a[e]);break;case "previousAction":C(c,13,W[a[e]]);break;case "isRedSubscriber":C(c,14,a[e]);break;case "serverTimeMs":C(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":C(c,20,a[e]);break;case "targetVideoId":C(c,78,a[e]);break;case "adBreakType":C(c,21,Dr[a[e]]);break;case "isNavigation":sh(c,a[e]);break;case "viewportHeight":C(c,29,a[e]);break;case "viewportWidth":C(c,30,a[e]);break;case "screenHeight":C(c,
84,a[e]);break;case "screenWidth":C(c,85,a[e]);break;case "browseId":C(c,31,a[e]);break;case "isCacheHit":C(c,32,a[e]);break;case "httpProtocol":C(c,33,a[e]);break;case "transportProtocol":C(c,34,a[e]);break;case "searchQuery":C(c,41,a[e]);break;case "isContinuation":C(c,42,a[e]);break;case "availableProcessors":C(c,43,a[e]);break;case "sdk":C(c,44,a[e]);break;case "isLocalStream":C(c,45,a[e]);break;case "navigationRequestedSameUrl":C(c,64,a[e]);break;case "shellStartupDurationMs":C(c,70,a[e]);break;
case "appInstallDataAgeMs":C(c,73,a[e]);break;case "latencyActionError":C(c,71,Er[a[e]]);break;case "actionStep":C(c,79,a[e]);break;case "jsHeapSizeLimit":C(c,80,a[e]);break;case "totalJsHeapSize":C(c,81,a[e]);break;case "usedJsHeapSize":C(c,82,a[e]);break;case "sourceVideoDurationMs":C(c,90,a[e]);break;case "videoOutputFrames":C(c,93,a[e]);break;case "adPrebufferedTimeSecs":C(c,39,a[e]);break;case "isLivestream":C(c,47,a[e]);break;case "liveStreamMode":C(c,91,Fr[a[e]]);break;case "adCpn2":C(c,48,
a[e]);break;case "adDaiDriftMillis":C(c,49,a[e]);break;case "videoStreamType":C(c,53,Gr[a[e]]);break;case "playbackRequiresTap":C(c,56,a[e]);break;case "performanceNavigationTiming":C(c,67,a[e]);break;case "transactionType":C(c,74,Hr[a[e]]);break;case "playerRotationType":C(c,101,Ir[a[e]]);break;case "allowedPreroll":C(c,10,a[e]);break;case "shownPreroll":C(c,11,a[e]);break;case "getHomeRequestId":C(c,57,a[e]);break;case "getSearchRequestId":C(c,60,a[e]);break;case "getPlayerRequestId":C(c,61,a[e]);
break;case "getWatchNextRequestId":C(c,62,a[e]);break;case "getBrowseRequestId":C(c,63,a[e]);break;case "getLibraryRequestId":C(c,66,a[e]);break;default:Jr.includes(f)&&Uh(new Q("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Uh(Error("Codegen laipb translator failed to set "+f))}}Sr(c,b)}}
function Sr(a,b){var c=lr(b);c.jspbInfos||(c.jspbInfos=[]);c.jspbInfos.push(a);sr(b||"").jspbInfo.push(a);c=nr(b);b=jr(b).cttAuthInfo;Mr().jspbInfo(a,c,b)}
function Z(a,b,c){if(!b&&"_"!==a[0]){var d=a;T.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),T.mark(d))}sr(c||"").tick[a]=b||P();d=lr(c);d.gelTicks&&(d.gelTicks[a]=!0);d=fr(c);var e=b||P();d[a]=e;e=nr(c);var f=jr(c).cttAuthInfo;if("_start"===a){var g=Mr();Nr(g,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},M("web_csi_via_jspb")?(f=new nh,C(f,1,e),e=new yh,od(e,6,zh,f),op(e,b)):Xj("latencyActionBaselined",{clientActionNonce:e},b))}else Mr().tick(a,e,b,f);or(c);return d[a]}
function Tr(){var a=nr();requestAnimationFrame(function(){setTimeout(function(){a===nr()&&Z("ol",void 0,void 0)},0)})}
function Ur(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=fn+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Pr(){function a(f){var g=gr(),h=ir();h&&(Z("srt",g.responseStart),1!==f.prerender&&Z("_start",h,void 0));f=qr();0<f&&Z("fpt",f);f=gr();f.isPerformanceNavigationTiming&&Qr({performanceNavigationTiming:!0});Z("nreqs",f.requestStart,void 0);Z("nress",f.responseStart,void 0);Z("nrese",f.responseEnd,void 0);0<f.redirectEnd-f.redirectStart&&(Z("nrs",f.redirectStart,void 0),Z("nre",f.redirectEnd,void 0));0<f.domainLookupEnd-f.domainLookupStart&&(Z("ndnss",f.domainLookupStart,void 0),Z("ndnse",f.domainLookupEnd,
void 0));0<f.connectEnd-f.connectStart&&(Z("ntcps",f.connectStart,void 0),Z("ntcpe",f.connectEnd,void 0));f.secureConnectionStart>=ir()&&0<f.connectEnd-f.secureConnectionStart&&(Z("nstcps",f.secureConnectionStart,void 0),Z("ntcpe",f.connectEnd,void 0));T&&"getEntriesByType"in T&&Vr()}
var b=L("TIMING_INFO",{});if(M("web_csi_via_jspb")){b=Wr(b);Sr(b);b=rh(sh(new ph,!0),W[zr(L("TIMING_ACTION"))]);var c=L("PREVIOUS_ACTION");c&&C(b,13,W[zr(c)]);(c=L("CLIENT_PROTOCOL"))&&C(b,33,c);(c=L("CLIENT_TRANSPORT"))&&C(b,34,c);(c=Up())&&"UNDEFINED_CSN"!==c&&C(b,4,c);c=Ur();1!==c&&-1!==c||C(b,6,!0);c=kr();C(b,3,"cold");a(c);c=Xr();if(0<c.length){c=p(c);for(var d=c.next();!d.done;d=c.next()){d=d.value;var e=new oh;C(e,1,d);pd(b,83,oh,e)}}Sr(b)}else{for(c in b)b.hasOwnProperty(c)&&Rr(c,b[c]);b=
{isNavigation:!0,actionType:zr(L("TIMING_ACTION"))};if(c=L("PREVIOUS_ACTION"))b.previousAction=zr(c);if(c=L("CLIENT_PROTOCOL"))b.httpProtocol=c;if(c=L("CLIENT_TRANSPORT"))b.transportProtocol=c;(c=Up())&&"UNDEFINED_CSN"!==c&&(b.clientScreenNonce=c);c=Ur();if(1===c||-1===c)b.isVisible=!0;c=kr();b.loadType="cold";a(c);c=Xr();if(0<c.length)for(b.resourceInfo=[],c=p(c),d=c.next();!d.done;d=c.next())b.resourceInfo.push({resourceCache:d.value});Qr(b)}}
function Wr(a){var b=new ph;a=p(Object.entries(a));for(var c=a.next();!c.done;c=a.next()){var d=p(c.value);c=d.next().value;d=d.next().value;switch(c){case "GetBrowse_rid":var e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetGuide_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetHome_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetPlayer_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetSearch_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;
case "GetSettings_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetTrending_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "GetWatchNext_rid":e=new uh;C(e,1,c);C(e,2,String(d));th(b,e);break;case "yt_red":C(b,14,!!d);break;case "yt_ad":C(b,9,!!d)}}return b}
function Yr(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);Xb()&&a.setAttribute("nonce",Xb());return c?(a=T.getEntriesByName(c))&&a[0]&&(a=a[0],c=ir(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Xr(){var a=[];if(document.querySelector&&T&&T.getEntriesByName)for(var b in dr)if(dr.hasOwnProperty(b)){var c=dr[b];Yr(b,c)&&a.push(c)}return a}
function Vr(){var a=window.location.protocol,b=T.getEntriesByType("resource");b=fb(b,function(c){return 0===c.name.indexOf(a+"//web.archive.org/web/20220430003134/https://fonts.gstatic.com/s/")});
(b=hb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",hr(b.startTime)),Z("wffe",hr(b.responseEnd)))}
var Zr=window;Zr.ytcsi&&(Zr.ytcsi.info=Rr,Zr.ytcsi.tick=Z);var $r="tokens consistency mss client_location entities store".split(" ");function as(a,b,c,d){this.s=a;this.K=b;this.m=c;this.l=d;this.j=void 0;this.i=new Map;a.Aa||(a.Aa={});a.Aa=Object.assign({},Tq,a.Aa)}
function bs(a,b,c,d){if(void 0!==as.i){if(d=as.i,a=[a!==d.s,b!==d.K,c!==d.m,!1,!1,void 0!==d.j],a.some(function(e){return e}))throw new Q("InnerTubeTransportService is already initialized",a);
}else as.i=new as(a,b,c,d)}
function cs(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Bq:c;var d=Kq(b,a.s);if(!d)return Zf(new Q("Error: No request builder found for command.",b));var e=d.s(b,void 0,c);return e?new Uf(function(f){var g,h,k;return w(function(m){if(1==m.i){h="cors"===(null==(g=e.sa)?void 0:g.mode)?"cors":void 0;if(a.m.zc){var q=e.config,u;q=null==q?void 0:null==(u=q.Ha)?void 0:u.sessionIndex;u=sq({sessionIndex:q});k=Object.assign({},ds(h),u);return m.u(2)}return t(m,es(e.config,
h),3)}2!=m.i&&(k=m.j);f(fs(a,e,k));m.i=0})}):Zf(new Q("Error: Failed to build request for command.",b))}
function fs(a,b,c){var d,e,f,g,h,k,m,q,u,y,v,E,F,H,R,O,S,ja;return w(function(N){switch(N.i){case 1:N.u(2);break;case 3:if((d=N.j)&&!d.isExpired())return N.return(Promise.resolve(d.i()));case 2:if((f=null==(e=b.config)?void 0:e.lp)&&a.i.has(f)&&M("web_memoize_inflight_requests"))return N.return(a.i.get(f));if(null==(g=b)?0:null==(h=g.ca)?0:h.context)for(k=p([]),m=k.next();!m.done;m=k.next())q=m.value,q.jp(b.ca.context);if(null==(u=a.j)?0:u.m(b.input,b.ca))return N.return(a.j.l(b.input,b.ca));y=JSON.stringify(b.ca);
b.sa=Object.assign({},b.sa,{headers:c});v=Object.assign({},b.sa);"POST"===b.sa.method&&(v=Object.assign({},v,{body:y}));(null==(E=b.config)?0:E.kc)&&Z(b.config.kc);F=a.K.fetch(b.input,v,b.config);f&&a.i.set(f,F);return t(N,F,4);case 4:H=N.j;f&&a.i.has(f)&&a.i.delete(f);(null==(R=b.config)?0:R.lc)&&Z(b.config.lc);if(H||null==(O=a.j)||!O.i(b.input,b.ca)){N.u(5);break}return t(N,a.j.j(b.input,b.ca),6);case 6:H=N.j;case 5:if(H&&a.l)for(S=p($r),m=S.next();!m.done;m=S.next())ja=m.value,a.l[ja]&&a.l[ja].handleResponse(H,
b);return N.return(H)}})}
function es(a,b){var c,d,e,f;return w(function(g){if(1==g.i){e=null==(c=a)?void 0:null==(d=c.Ha)?void 0:d.sessionIndex;var h=sq({sessionIndex:e});if(!(h instanceof Uf)){var k=new Uf(bb);Vf(k,2,h);h=k}return t(g,h,2)}f=g.j;return g.return(Promise.resolve(Object.assign({},ds(b),f)))})}
function ds(a){var b={"Content-Type":"application/json"};M("enable_web_eom_visitor_data")&&L("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=L("EOM_VISITOR_DATA"):L("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=L("VISITOR_DATA"));M("track_webfe_innertube_auth_mismatch")&&(b["X-Youtube-Bootstrap-Logged-In"]=L("LOGGED_IN",!1));"cors"!==a&&((a=L("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=L("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=L("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),M("forward_domain_admin_state_on_embeds")&&(a=L("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var gs=["share/get_web_player_share_panel"],hs=["feedback"],is=["notification/modify_channel_preference"],js=["browse/edit_playlist"],ks=["subscription/subscribe"],ls=["subscription/unsubscribe"];function ms(){}
r(ms,Qq);ms.prototype.l=function(){return ks};
ms.prototype.i=function(a){return a.subscribeEndpoint};
ms.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
da.Object.defineProperties(ms.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ns(){}
r(ns,Qq);ns.prototype.l=function(){return ls};
ns.prototype.i=function(a){return a.unsubscribeEndpoint};
ns.prototype.j=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
da.Object.defineProperties(ns.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function os(){}
r(os,Qq);os.prototype.l=function(){return hs};
os.prototype.i=function(a){return a.feedbackEndpoint};
os.prototype.j=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
da.Object.defineProperties(os.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ps(){}
r(ps,Qq);ps.prototype.l=function(){return is};
ps.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
ps.prototype.j=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function qs(){}
r(qs,Qq);qs.prototype.l=function(){return js};
qs.prototype.i=function(a){return a.playlistEditEndpoint};
qs.prototype.j=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function rs(){}
r(rs,Qq);rs.prototype.l=function(){return gs};
rs.prototype.i=function(a){return a.webPlayerShareEntityServiceEndpoint};
rs.prototype.j=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var wq=new uq("NETWORK_SLI_TOKEN");function ss(a){this.i=a}
ss.prototype.fetch=function(a,b){var c=this,d,e;return w(function(f){c.i&&(d=ac(bc(5,nc(a)))||"/UNKNOWN_PATH",c.i.start(d));e=new window.Request(a,b);return M("web_fetch_promise_cleanup_killswitch")?f.return(Promise.resolve(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Cp(g)}))):f.return(fetch(e).then(function(g){return c.handleResponse(g)}).catch(function(g){Cp(g)}))})};
ss.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.i&&this.i.success():(this.i&&this.i.failure(),b=b.then(function(c){Cp(new Q("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
ss[tq]=[new vq];var ts=new uq("NETWORK_MANAGER_TOKEN");var us;function vs(a){El.call(this,1,arguments);this.csn=a}
r(vs,El);var Nl=new Fl("screen-created",vs),ws=[],ys=xs,zs=0;function As(a,b,c,d,e,f,g){function h(){Cp(new Q("newScreen() parent element does not have a VE - rootVe",b))}
var k=ys();f=new Np({veType:b,youtubeData:f,jspbYoutubeData:void 0});e={cttAuthInfo:e,Y:k};if(M("il_via_jspb")){var m=new dh;m.T(k);eh(m,f.getAsJspb());c&&c.visualElement?(f=new fh,c.clientScreenNonce&&C(f,2,c.clientScreenNonce),gh(f,c.visualElement.getAsJspb()),g&&C(f,4,Ah[g]),D(m,5,f)):c&&h();d&&C(m,3,d);sp(m,e,a)}else f={csn:k,pageVe:f.getAsJson()},c&&c.visualElement?(f.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(f.implicitGesture.gestureType=g)):
c&&h(),d&&(f.cloneCsn=d),a?Yo("screenCreated",f,a,e):Xj("screenCreated",f,e);Kl(Nl,new vs(k));return k}
function Bs(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Wp(b),
Y:b};d=p(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(ob(g)||!g.trackingParams&&!g.veType)&&Cp(Error("Child VE logged with no data"));if(M("il_via_jspb")){var h=new hh;h.T(b);jh(h,c.getAsJspb());gb(e,function(k){k=k.getAsJspb();pd(h,3,bh,k)});
"UNDEFINED_CSN"==b?Cs("visualElementAttached",h,f):tp(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:gb(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"==b?Cs("visualElementAttached",c,f):a?Yo("visualElementAttached",c,a,f):Xj("visualElementAttached",c,f)}
function xs(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Kc(b,3)}
function Cs(a,b,c){ws.push({payloadName:a,payload:b,options:c});zs||(zs=Ol())}
function Pl(a){if(ws){for(var b=p(ws),c=b.next();!c.done;c=b.next()){var d=c.value;if(d.payload)if(M("il_via_jspb"))switch(d.payload.T(a.csn),d.payloadName){case "screenCreated":sp(d.payload,d.options);break;case "visualElementAttached":tp(d.payload,d.options);break;case "visualElementShown":c=d.payload;d=d.options;var e=new yh;od(e,72,zh,c);op(e,d);break;case "visualElementHidden":pp(d.payload,d.options);break;case "visualElementGestured":qp(d.payload,d.options);break;case "visualElementStateChanged":rp(d.payload,
d.options);break;default:Cp(new Q("flushQueue unable to map payloadName to JSPB setter"))}else d.payload.csn=a.csn,Yo(d.payloadName,d.payload,null,d.options)}ws.length=0}zs=0}
;function Ds(){this.j=new Set;this.i=new Set;this.l=new Map}
Ds.prototype.clear=function(){this.j.clear();this.i.clear();this.l.clear()};
Ma(Ds);function Es(){this.s=[];this.D=[];this.i=[];this.m=[];this.o=[];this.j=new Set;this.v=new Map}
function Fs(a,b,c){c=void 0===c?0:c;b.then(function(d){a.j.has(c)&&a.l&&a.l();var e=Up(c),f=Sp(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Bs(a.client,e,f,[Op(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Bs(a.client,e,f,[Op(d.playerResponse.trackingParams)])}})}
function Gs(a,b,c,d){d=void 0===d?0:d;if(a.j.has(d))a.s.push([b,c]);else{var e=Up(d);c=c||Sp(d);e&&c&&Bs(a.client,e,c,[b])}}
Es.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Up(void 0===c?0:c)){a=this.client;var e=Op(d);var f="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";d={cttAuthInfo:Wp(c),Y:c};if(M("il_via_jspb")){var g=new kh;g.T(c);e=e.getAsJspb();D(g,2,e);C(g,4,Ah[f]);b&&D(g,3);"UNDEFINED_CSN"==c?Cs("visualElementGestured",g,d):qp(g,d,a)}else f={csn:c,ve:e.getAsJson(),gestureType:f},b&&(f.clientData=b),"UNDEFINED_CSN"==c?Cs("visualElementGestured",f,d):a?Yo("visualElementGestured",
f,a,d):Xj("visualElementGestured",f,d);b=!0}else b=!1;else b=!1;return b};
function Hs(a,b,c){c=void 0===c?{}:c;a.j.add(c.layer||0);a.l=function(){Is(a,b,c);var f=Sp(c.layer);if(f){for(var g=p(a.s),h=g.next();!h.done;h=g.next())h=h.value,Gs(a,h[0],h[1]||f,c.layer);f=p(a.D);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Up(g);var m=k[0]||Sp(g);if(h&&m){g=a.client;var q=k[1];k={cttAuthInfo:Wp(h),Y:h};M("il_via_jspb")?(q=new mh,q.T(h),m=m.getAsJspb(),D(q,2,m),"UNDEFINED_CSN"==h?Cs("visualElementStateChanged",q,k):rp(q,k,g)):(m={csn:h,ve:m.getAsJson(),
clientData:q},"UNDEFINED_CSN"==h?Cs("visualElementStateChanged",m,k):g?Yo("visualElementStateChanged",m,g,k):Xj("visualElementStateChanged",m,k))}}}};
Up(c.layer)||a.l();if(c.rb)for(var d=p(c.rb),e=d.next();!e.done;e=d.next())Fs(a,e.value,c.layer);else Bp(Error("Delayed screen needs a data promise."))}
function Is(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.ec?c.ec:c.layer;var e=Up(d);d=Sp(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=L("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=As(a.client,b,f,c.qb,c.cttAuthInfo,g,c.gp)}catch(m){Ep(m,{mp:b,rootVe:d,parentVisualElement:void 0,ep:e,ip:f,qb:c.qb});Bp(m);return}Xp(k,b,
c.layer,c.cttAuthInfo);if(b=e&&"UNDEFINED_CSN"!==e&&d){a:{b=p(Object.values(Mp));for(f=b.next();!f.done;f=b.next())if(Up(f.value)===e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,g=!0,h=(g=void 0===g?!1:g)?16:8,f={cttAuthInfo:Wp(e),Y:e,tb:g},M("il_via_jspb")?(h=new lh,h.T(e),d=d.getAsJspb(),D(h,2,d),C(h,4,g?16:8),"UNDEFINED_CSN"==e?Cs("visualElementHidden",h,f):pp(h,f,b)):(d={csn:e,ve:d.getAsJson(),eventType:h},"UNDEFINED_CSN"==e?Cs("visualElementHidden",d,f):b?Yo("visualElementHidden",d,b,f):Xj("visualElementHidden",
d,f)));a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=k||"");Qr({clientScreenNonce:k});Ds.getInstance().clear();d=Sp(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||M("music_web_mark_root_visible"))&&(e={cttAuthInfo:Wp(k),Y:k},M("il_via_jspb")?(b=new lh,b.T(k),f=d.getAsJspb(),D(b,2,f),C(b,4,1),"UNDEFINED_CSN"==k?Cs("visualElementShown",b,e):(k=new yh,od(k,72,zh,b),op(k,e))):(b={csn:k,ve:d.getAsJson(),eventType:1},"UNDEFINED_CSN"==k?Cs("visualElementShown",b,e):
Xj("visualElementShown",b,e)));a.j.delete(c.layer||0);a.l=void 0;e=p(a.v);for(k=e.next();!k.done;k=e.next())b=p(k.value),k=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Gs(a,k,d,c.layer);for(c=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(m){Bp(m)}}for(c=a.m.length=0;c<a.o.length;c++){e=a.o[c];try{e()}catch(m){Bp(m)}}}
;function Js(){var a,b;return w(function(c){if(1==c.i)return a=as.i,a?t(c,cs(a),2):(Cp(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),c.return(void 0));if(b=c.j)return b.errorMetadata?(Cp(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),c.return(void 0)):c.return(b.fp);Cp(Error("Network request to get Datasync IDs failed."));return c.return(void 0)})}
;var Ks=x.caches,Ls;function Ms(a){var b=a.indexOf(":");return-1===b?{Cb:a}:{Cb:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Ns(){return w(function(a){if(void 0!==Ls)return a.return(Ls);Ls=new Promise(function(b){var c;return w(function(d){switch(d.i){case 1:return wa(d,2),t(d,Ks.open("test-only"),4);case 4:return t(d,Ks.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.i=0}})});
return a.return(Ls)})}
function Os(a){var b,c,d,e,f,g,h;w(function(k){if(1==k.i)return t(k,Ns(),2);if(3!=k.i){if(!k.j)return k.return(!1);b=[];return t(k,Ks.keys(),3)}c=k.j;d=p(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Ms(f),h=g.datasyncId,!h||a.includes(h)||b.push(Ks.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(q){return q})}))})}
function Ps(){var a,b,c,d,e,f,g;return w(function(h){if(1==h.i)return t(h,Ns(),2);if(3!=h.i){if(!h.j)return h.return(!1);a=bk("cache contains other");return t(h,Ks.keys(),3)}b=h.j;c=p(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Ms(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Qs(){try{return!!self.localStorage}catch(a){return!1}}
;function Rs(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function Ss(a){if(Qs()){var b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Rs(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function Ts(){if(!Qs())return!1;var a=bk(),b=Object.keys(window.localStorage);b=p(b);for(var c=b.next();!c.done;c=b.next())if(c=Rs(c.value),void 0!==c&&c!==a)return!0;return!1}
;function Us(){Js().then(function(a){a&&(ml(a),Os(a),Ss(a))})}
function Vs(){var a=new zm;$e.O(function(){var b,c,d,e;return w(function(f){switch(f.i){case 1:if(M("ytidb_clear_optimizations_killswitch")){f.u(2);break}b=bk("clear");if(b.startsWith("V")){var g=[b];ml(g);Os(g);Ss(g);return f.return()}c=Ts();return t(f,Ps(),3);case 3:return d=f.j,t(f,nl(),4);case 4:if(e=f.j,!c&&!d&&!e)return f.return();case 2:a.I()?Us():a.m.add("publicytnetworkstatus-online",Us,!0,void 0,void 0),f.i=0}})})}
;function Ws(a){a&&(a.dataset?a.dataset[Xs("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Ys(a,b){return a?a.dataset?a.dataset[Xs(b)]:a.getAttribute("data-"+b):null}
var Zs={};function Xs(a){return Zs[a]||(Zs[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var $s=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,at=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function bt(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace($s,""),c=c.replace(at,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ct(a,b,c)}
function ct(a,b,c){c=void 0===c?null:c;var d=dt(a),e=document.getElementById(d),f=e&&Ys(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=An(d,b),b=""+Ra(b),et[b]=f),g||(e=ft(a,d,function(){Ys(e,"loaded")||(Ws(e),Dn(d),ni(Xa(En,d),0))},c)))}
function ft(a,b,c,d){d=void 0===d?null:d;var e=Kd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gd(e,Ib(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function gt(a){a=dt(a);var b=document.getElementById(a);b&&(En(a),b.parentNode.removeChild(b))}
function ht(a,b){a&&b&&(a=""+Ra(b),(a=et[a])&&Cn(a))}
function dt(a){var b=document.createElement("a");Ub(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var et={};var jt=[],kt=!1;function nt(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&hq()&&"1"!=sb(L("PLAYER_VARS",{}))){var a=function(){kt=!0;"google_ad_status"in window?Lh("DCLKSTAT",1):Lh("DCLKSTAT",2)};
try{bt("//web.archive.org/web/20220430003134/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}jt.push($e.O(function(){if(!(kt||"google_ad_status"in window)){try{ht("//web.archive.org/web/20220430003134/https://static.doubleclick.net/instream/ad_status.js",a)}catch(b){}kt=!0;Lh("DCLKSTAT",3)}},5E3))}}
function ot(){var a=Number(L("DCLKSTAT",0));return isNaN(a)?0:a}
;function pt(){this.state=1;this.i=null}
l=pt.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterScript)?d:null,f;d=null!=(f=a.interpreterUrl)?f:null;a.interpreterSafeScript&&(e=a.interpreterSafeScript,Cb("From proto message. b/166824318"),e=e.privateDoNotAccessOrElseSafeScriptWrappedValue||"",e=(f=zb())?f.createScript(e):e,e=(new Eb(e)).toString());a.interpreterSafeUrl&&(d=a.interpreterSafeUrl,Cb("From proto message. b/166824318"),d=Ib(d.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());qt(this,e,
d,a.program,b,c)}else Cp(Error("Cannot initialize botguard without program"))};
function qt(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,bt(c,function(){window[g]?rt(a,d,g,e):(a.state=3,gt(c),Cp(new Q("Unable to load Botguard","from "+c)))},f)):b?(f=Kd("SCRIPT"),f.textContent=b,f.nonce=Xb(),document.head.appendChild(f),document.head.removeChild(f),window[g]?rt(a,d,g,e):(a.state=4,Cp(new Q("Unable to load Botguard from JS")))):Cp(new Q("Unable to load VM; no url or JS provided"))}
l.isInitialized=function(){return!!this.i};
l.getState=function(){return this.state};
function rt(a,b,c,d){a.state=5;try{var e=new zd({program:b,globalName:c});e.wc.then(function(){a.state=6;d&&d(b)});
st(a,e)}catch(f){a.state=7,f instanceof Error&&Cp(f)}}
l.invoke=function(a){a=void 0===a?{}:a;if(this.i){var b=this.i;a={pb:a};if(b.j)throw Error("Already disposed");b=b.m([a.pb,a.yc])}else b=null;return b};
l.dispose=function(){st(this,null);this.state=8};
function st(a,b){ne(a.i);a.i=b}
;var tt=new pt;function ut(){return tt.isInitialized()}
function vt(a){a=void 0===a?{}:a;return tt.invoke(a)}
;function wt(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Mj():d;this.m=c;this.l=d;this.j=new yd;this.i=a;a={};c=p(this.i.entries());for(d=c.next();!d.done;a={ta:a.ta,Ca:a.Ca},d=c.next()){var e=p(d.value);d=e.next().value;e=e.next().value;a.Ca=d;a.ta=e;d=function(f){return function(){f.ta.eb();b.i[f.Ca].Sa=!0;b.i.every(function(g){return!0===g.Sa})&&b.j.resolve()}}(a);
e=Ij(d,xt(this,a.ta));this.i[a.Ca]=Object.assign({},a.ta,{eb:d,Oa:e})}}
function zt(a){var b=Array.from(a.i.keys()).sort(function(d,e){return xt(a,a.i[e])-xt(a,a.i[d])});
b=p(b);for(var c=b.next();!c.done;c=b.next())c=a.i[c.value],void 0===c.Oa||c.Sa||(a.l.V(c.Oa),Ij(c.eb,10))}
wt.prototype.cancel=function(){for(var a=p(this.i),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.Oa||b.Sa||this.l.V(b.Oa),b.Sa=!0;this.j.resolve()};
function xt(a,b){var c;return null!=(c=b.priority)?c:a.m}
;function At(a){this.state=a;this.plugins=[];this.o=void 0}
At.prototype.install=function(){this.plugins.push.apply(this.plugins,fa(Ja.apply(0,arguments)))};
At.prototype.transition=function(a,b){var c=this,d=this.D.find(function(f){return f.from===c.state&&f.C===a});
if(d){this.l&&(zt(this.l),this.l=void 0);this.state=a;d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Bt(this,e,this.o),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Bt(a,b,c){return function(){var d=Ja.apply(0,arguments),e=b.filter(function(k){var m;return 10===(null!=(m=null!=c?c:k.priority)?m:0)}),f=b.filter(function(k){var m;
return 10!==(null!=(m=null!=c?c:k.priority)?m:0)});
Mj();var g={};e=p(e);for(var h=e.next();!h.done;g={Da:g.Da},h=e.next())g.Da=h.value,Kj(function(k){return function(){k.Da.la.apply(k.Da,fa(d))}}(g));
f=f.map(function(k){var m;return{eb:function(){k.la.apply(k,fa(d))},
priority:null!=(m=null!=c?c:k.priority)?m:0}});
f.length&&(a.l=new wt(f))}}
da.Object.defineProperties(At.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Ct(a){At.call(this,void 0===a?"document_active":a);var b=this;this.o=10;this.i=new Map;this.D=[{from:"document_active",C:"document_disposed_preventable",action:this.v},{from:"document_active",C:"document_disposed",action:this.m},{from:"document_disposed_preventable",C:"document_disposed",action:this.m},{from:"document_disposed_preventable",C:"flush_logs",action:this.s},{from:"document_disposed_preventable",C:"document_active",action:this.j},{from:"document_disposed",C:"flush_logs",action:this.s},
{from:"document_disposed",C:"document_active",action:this.j},{from:"document_disposed",C:"document_disposed",action:function(){}},
{from:"flush_logs",C:"document_active",action:this.j}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
r(Ct,At);Ct.prototype.v=function(a,b){if(!this.i.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.i=new Map;this.transition("document_active");return}}this.i.set("document_disposed_preventable",!0);this.i.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ct.prototype.m=function(a,b){this.i.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.i.set("document_disposed",!0),this.transition("flush_logs"))};
Ct.prototype.s=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Ct.prototype.j=function(){this.i=new Map};function Dt(a){At.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.D=[{from:"document_visibility_unknown",C:"document_visible",action:this.j},{from:"document_visibility_unknown",C:"document_hidden",action:this.i},{from:"document_visibility_unknown",C:"document_foregrounded",action:this.s},{from:"document_visibility_unknown",C:"document_backgrounded",action:this.m},{from:"document_visible",C:"document_hidden",action:this.i},{from:"document_visible",C:"document_foregrounded",action:this.s},
{from:"document_visible",C:"document_visible",action:this.j},{from:"document_foregrounded",C:"document_visible",action:this.j},{from:"document_foregrounded",C:"document_hidden",action:this.i},{from:"document_foregrounded",C:"document_foregrounded",action:this.s},{from:"document_hidden",C:"document_visible",action:this.j},{from:"document_hidden",C:"document_backgrounded",action:this.m},{from:"document_hidden",C:"document_hidden",action:this.i},{from:"document_backgrounded",C:"document_hidden",action:this.i},
{from:"document_backgrounded",C:"document_backgrounded",action:this.m},{from:"document_backgrounded",C:"document_visible",action:this.j}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
M("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
r(Dt,At);Dt.prototype.j=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Dt.prototype.i=function(a,b){a(null==b?void 0:b.event);M("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Dt.prototype.m=function(a,b){a(null==b?void 0:b.event)};
Dt.prototype.s=function(a,b){a(null==b?void 0:b.event)};function Et(){this.i=new Ct;this.j=new Dt}
Et.prototype.install=function(){var a=Ja.apply(0,arguments);this.i.install.apply(this.i,fa(a));this.j.install.apply(this.j,fa(a))};function Ft(){Et.call(this);var a={};this.install((a.document_disposed={la:this.l},a));a={};this.install((a.flush_logs={la:this.m},a))}
var Gt;r(Ft,Et);Ft.prototype.m=function(){if(M("web_fp_via_jspb")){var a=new ah,b=Up();b&&a.T(b);b=new yh;od(b,380,zh,a);op(b);M("web_fp_via_jspb_and_json")&&Xj("finalPayload",{csn:Up()})}else Xj("finalPayload",{csn:Up()})};
Ft.prototype.l=function(){Gp(Hp)};function Ht(){}
Ht.getInstance=function(){var a=A("ytglobal.storage_");a||(a=new Ht,z("ytglobal.storage_",a));return a};
Ht.prototype.estimate=function(){var a,b,c;return w(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(It()):d.return()})};
function It(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",Ht);function Vj(a,b){var c=this;this.handleError=a;this.i=b;this.j=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.j=!0});
this.l=Math.random()<=Oh("ytidb_transaction_ended_event_rate_limit",.02)}
Vj.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.i("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.i("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.i("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Jt(this,b);break;case "TRANSACTION_ENDED":this.l&&this.i("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,
{hasWindowUnloaded:this.j}),this.i("idbTransactionAborted",a)}};
function Jt(a,b){Ht.getInstance().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Kt(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Kt(null==c?void 0:c.quota)});a.i("idbQuotaExceeded",c)})}
function Kt(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Lt(a,b,c){J.call(this);var d=this;c=c||L("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.M="*";this.m=c;this.sessionId=null;this.channel="widget";this.N=!!a;this.B=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.N&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.M=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.o&&(!d.v||0<=db(d.v,f.func))&&d.o(f.func,f.args,e.origin)}}};
this.v=this.j=this.o=null;window.addEventListener("message",this.B)}
r(Lt,J);Lt.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.M)}catch(d){Vh(d)}}};
Lt.prototype.J=function(){window.removeEventListener("message",this.B);J.prototype.J.call(this)};function Mt(){this.j=[];this.isReady=!1;this.l={};var a=this.i=new Lt(!!L("WIDGET_ID_ENFORCE")),b=this.ic.bind(this);a.o=b;a.v=null;this.i.channel="widget";if(a=L("WIDGET_ID"))this.i.sessionId=a}
l=Mt.prototype;l.ic=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.l[a]||"onReady"===a||(this.addEventListener(a,Nt(this,a)),this.l[a]=!0)):this.kb(a,b,c)};
l.kb=function(){};
function Nt(a,b){return function(c){return a.sendMessage(b,c)}}
l.addEventListener=function(){};
l.Vb=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Ya());this.sendMessage("onReady");eb(this.j,this.Ib,this);this.j=[]};
l.Ya=function(){return null};
function Ot(a,b){a.sendMessage("infoDelivery",b)}
l.Ib=function(a){this.isReady?this.i.sendMessage(a):this.j.push(a)};
l.sendMessage=function(a,b){this.Ib({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.i=null};function Pt(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Qt(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Rt(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function St(a){Mt.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.tc.bind(this));this.addEventListener("onVolumeChange",this.uc.bind(this));this.addEventListener("onApiChange",this.mc.bind(this));this.addEventListener("onPlaybackQualityChange",this.pc.bind(this));this.addEventListener("onPlaybackRateChange",this.qc.bind(this));this.addEventListener("onStateChange",this.sc.bind(this));this.addEventListener("onWebglSettingsChanged",
this.vc.bind(this))}
r(St,Mt);l=St.prototype;
l.kb=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Pt(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Qt(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Qt(e);break;case "loadPlaylist":case "cuePlaylist":e=Rt(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Pt(a)&&Ot(this,this.Ya())}};
l.onReady=function(){var a=this.Vb.bind(this);this.i.j=a};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Ya=function(){if(!this.api)return null;var a=this.api.getApiInterface();jb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.sc=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ot(this,a)};
l.pc=function(a){Ot(this,{playbackQuality:a})};
l.qc=function(a){Ot(this,{playbackRate:a})};
l.mc=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.uc=function(){Ot(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.tc=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ot(this,a)};
l.vc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ot(this,a)};
l.dispose=function(){Mt.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Tt(a){J.call(this);this.j={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Eb,this)}
r(Tt,J);l=Tt.prototype;l.start=function(){this.started||this.i()||(this.started=!0,this.connection.ma("RECEIVING"))};
l.ma=function(a,b){this.started&&!this.i()&&this.connection.ma(a,b)};
l.Eb=function(a,b,c){if(this.started&&!this.i()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Ut(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Vt(a,c))&&this.ma(a,c))}}};
l.addListener=function(a){if(!(a in this.j)){var b=this.nc.bind(this,a);this.j[a]=b;this.addEventListener(a,b)}};
l.nc=function(a,b){this.started&&!this.i()&&this.connection.ma(a,this.Xa(a,b))};
l.Xa=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.j&&(this.removeEventListener(a,this.j[a]),delete this.j[a])};
l.J=function(){var a=this.connection;a.i()||lg(a.j,"command",this.Eb,this);this.connection=null;for(var b in this.j)this.j.hasOwnProperty(b)&&this.removeListener(b);J.prototype.J.call(this)};function Wt(a,b){Tt.call(this,b);this.api=a;this.start()}
r(Wt,Tt);Wt.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Wt.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Ut(a,b){switch(a){case "loadVideoById":return a=Qt(b),[a];case "cueVideoById":return a=Qt(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Rt(b),[a];case "cuePlaylist":return a=Rt(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Vt(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Wt.prototype.Xa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Tt.prototype.Xa.call(this,a,b)};
Wt.prototype.J=function(){Tt.prototype.J.call(this);delete this.api};function Xt(a){a=void 0===a?!1:a;J.call(this);this.j=new K(a);pe(this,Xa(ne,this.j))}
Ya(Xt,J);Xt.prototype.subscribe=function(a,b,c){return this.i()?0:this.j.subscribe(a,b,c)};
Xt.prototype.m=function(a,b){this.i()||this.j.ka.apply(this.j,arguments)};function Yt(a,b,c){Xt.call(this);this.l=a;this.destination=b;this.id=c}
r(Yt,Xt);Yt.prototype.ma=function(a,b){this.i()||this.l.ma(this.destination,this.id,a,b)};
Yt.prototype.J=function(){this.destination=this.l=null;Xt.prototype.J.call(this)};function Zt(a,b,c){J.call(this);this.destination=a;this.origin=c;this.j=nn(window,"message",this.l.bind(this));this.connection=new Yt(this,a,b);pe(this,Xa(ne,this.connection))}
r(Zt,J);Zt.prototype.ma=function(a,b,c,d){this.i()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Of(a),this.origin))};
Zt.prototype.l=function(a){var b;if(b=!this.i())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.i()||c.m("command",b.command,b.data,a.origin))}};
Zt.prototype.J=function(){on(this.j);this.destination=null;J.prototype.J.call(this)};function $t(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
$t.prototype.clone=function(){var a=new $t,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=ub(c):a[b]=c}return a};var au=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function bu(a){a=a||"";if(window.spf){var b=a.match(au);spf.style.load(a,b?b[1]:"",void 0)}else cu(a)}
function cu(a){var b=du(a),c=document.getElementById(b),d=c&&Ys(c,"loaded");d||c&&!d||(c=eu(a,b,function(){Ys(c,"loaded")||(Ws(c),Dn(b),ni(Xa(En,b),0))}))}
function eu(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ib(a);Vb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function du(a){var b=Kd("A");Cb("This URL is never added to the DOM");Ub(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function fu(){J.call(this);this.j=[]}
r(fu,J);fu.prototype.J=function(){for(;this.j.length;){var a=this.j.pop();a.target.removeEventListener(a.name,a.la,void 0)}J.prototype.J.call(this)};function gu(){fu.apply(this,arguments)}
r(gu,fu);function hu(a,b,c,d){J.call(this);var e=this;this.N=b;this.webPlayerContextConfig=d;this.Ua=!1;this.api={};this.Ea=this.v=null;this.U=new K;this.j={};this.ga=this.Fa=this.elementId=this.Va=this.config=null;this.Z=!1;this.m=this.B=null;this.Ga={};this.Mb=["onReady"];this.lastError=null;this.lb=NaN;this.M={};this.Nb=new gu(this);this.oa=0;this.l=this.o=a;pe(this,Xa(ne,this.U));iu(this);ju(this);pe(this,Xa(ne,this.Nb));c?this.oa=ni(function(){e.loadNewVideoConfig(c)},0):d&&(ku(this),lu(this))}
r(hu,J);l=hu.prototype;l.getId=function(){return this.N};
l.loadNewVideoConfig=function(a){if(!this.i()){this.oa&&(oi(this.oa),this.oa=0);var b=a||{};b instanceof $t||(b=new $t(b));this.config=b;this.setConfig(a);lu(this);this.isReady()&&mu(this)}};
function ku(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.N,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.N:a.config.attrs.id=a.N);var c;(null==(c=a.l)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.Va=a;this.config=nu(a);ku(this);if(!this.Fa){var b;this.Fa=ou(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.l&&(this.l.style.width=Yd(Number(b)||b)),(a=a.height)&&this.l&&(this.l.style.height=Yd(Number(a)||a))};
function mu(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function pu(a){var b=!0,c=qu(a);c&&a.config&&(a=ru(a),b=Ys(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function lu(a){if(!a.i()&&!a.Z){var b=pu(a);if(b&&"html5"===(qu(a)?"html5":null))a.ga="html5",a.isReady()||su(a);else if(tu(a),a.ga="html5",b&&a.m&&a.o)a.o.appendChild(a.m),su(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.B=function(){c=!0;var d=uu(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?nu(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig);su(a)};
a.Z=!0;b?a.B():(bt(ru(a),a.B),(b=vu(a))&&bu(b),wu(a)&&!c&&z("yt.player.Application.create",null))}}}
function qu(a){var b=Jd(a.elementId);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.elementId));return b}
function su(a){if(!a.i()){var b=qu(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!uu(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}xu(a)}else a.lb=ni(function(){su(a)},50)}}
function xu(a){iu(a);a.Ua=!0;var b=qu(a);if(b){a.v=yu(a,b,"addEventListener");a.Ea=yu(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=yu(a,b,f))}}for(var g in a.j)a.j.hasOwnProperty(g)&&a.v&&a.v(g,a.j[g]);mu(a);a.Fa&&a.Fa(a.api);a.U.ka("onReady",a.api)}
function yu(a,b,c){var d=b[c];return function(){var e=Ja.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,Cp(f))}}}
function iu(a){a.Ua=!1;if(a.Ea)for(var b in a.j)a.j.hasOwnProperty(b)&&a.Ea(b,a.j[b]);for(var c in a.M)a.M.hasOwnProperty(c)&&oi(Number(c));a.M={};a.v=null;a.Ea=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Va};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Ua};
function ju(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Dn("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Dn("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=ou(this,b);d&&(0<=db(this.Mb,a)||this.j[a]||(b=zu(this,a),this.v&&this.v(a,b)),this.U.subscribe(a,d),"onReady"===a&&this.isReady()&&ni(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.i()||(b=ou(this,b))&&lg(this.U,a,b)};
function ou(a,b){var c=b;if("string"===typeof b){if(a.Ga[b])return a.Ga[b];c=function(){var d=Ja.apply(0,arguments),e=A(b);if(e)try{e.apply(x,d)}catch(f){Bp(f)}};
a.Ga[b]=c}return c?c:null}
function zu(a,b){var c="ytPlayer"+b+a.N;a.j[b]=c;x[c]=function(d){var e=ni(function(){if(!a.i()){a.U.ka(b,null!=d?d:void 0);var f=a.M,g=String(e);g in f&&delete f[g]}},0);
pb(a.M,String(e))};
return c}
l.getPlayerType=function(){return this.ga||(qu(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function tu(a){a.cancel();iu(a);a.ga=null;a.config&&(a.config.loaded=!1);var b=qu(a);b&&(pu(a)||!wu(a)?a.m=b:(b&&b.destroy&&b.destroy(),a.m=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.B&&ht(ru(this),this.B);oi(this.lb);this.Z=!1};
l.J=function(){tu(this);if(this.m&&this.config&&this.m.destroy)try{this.m.destroy()}catch(b){Bp(b)}this.Ga=null;for(var a in this.j)this.j.hasOwnProperty(a)&&(x[this.j[a]]=null);this.Va=this.config=this.api=null;delete this.o;delete this.l;J.prototype.J.call(this)};
function wu(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function ru(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function vu(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function uu(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===ai(c||"","&")[b]}
function nu(a){for(var b={},c=p(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var Au={},Bu="player_uid_"+(1E9*Math.random()>>>0);function Cu(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?Jd(d):d;var e=Bu+"_"+Ra(d),f=Au[e];if(f&&c)return Du(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new hu(d,e,a,b);Au[e]=f;Dn("player-added",f.api);pe(f,function(){delete Au[f.getId()]});
return f.api}
function Du(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Eu=null,Fu=null,Gu=null;function Hu(){var a=Eu.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Iu(a,b,c){a="ST-"+Zb(a).toString(36);b=b?fc(b):"";c=c||5;hq()&&Zi(a,b,c)}
;function Ju(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=L("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=L("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=cc(window.location.href);g&&f.push(g);g=cc(d);if(0<=db(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Ub(f,d),d=f.href),d&&(d=dc(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Up()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
Iu(d,b,h)}else Iu(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var q=void 0===q?window:q;c=q.location;a=gc(a,k)+m;var u=void 0===u?Xd:u;a:{u=void 0===u?Xd:u;for(k=0;k<u.length;++k)if(m=u[k],m instanceof Sd&&m.isValid(a)){u=new Dd(a,Bd);break a}u=void 0}c.href=Fd(u||Ed)}return!0}
;z("yt.setConfig",Lh);z("yt.config.set",Lh);z("yt.setMsg",Zp);z("yt.msgs.set",Zp);z("yt.logging.errors.log",Bp);
z("writeEmbed",function(){var a=L("PLAYER_CONFIG");if(!a){var b=L("PLAYER_VARS");b&&(a={args:b})}qq(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=L("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=fi(window.location.href),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));Or();if((c=L("WEB_PLAYER_CONTEXT_CONFIGS"))&&
"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in c){c=c.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=fi(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}Eu=Cu(a,c,!1)}else Eu=Cu(a);Eu.addEventListener("onVideoDataChange",Hu);a=L("POST_MESSAGE_ID","player");L("ENABLE_JS_API")?Gu=new St(Eu):L("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Fu=new Zt(window.parent,a,b),Gu=new Wt(Eu,Fu.connection));
nt();M("ytidb_create_logger_embed_killswitch")||Uj();a={};Gt||(Gt=new Ft);Gt.install((a.flush_logs={la:function(){Jo()}},a));
M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?Gm():Om());M("ytidb_clear_embedded_player")&&$e.O(function(){var e;if(!us){Aq||(Aq=new xq);var f=Aq;var g={hc:ts,Kb:ss};f.providers.set(g.hc,g);g={ob:{feedbackEndpoint:Lq(os),modifyChannelNotificationPreferenceEndpoint:Lq(ps),playlistEditEndpoint:Lq(qs),subscribeEndpoint:Lq(ms),unsubscribeEndpoint:Lq(ns),webPlayerShareEntityServiceEndpoint:Lq(rs)}};var h=M("web_enable_client_location_service")?Hq.getInstance():void 0,k={};h&&(k.client_location=
h);if(void 0===m){rq.i||(rq.i=new rq);var m=rq.i}void 0===e&&(e=f.resolve(ts));bs(g,e,m,k);us=as.i}Vs()})});
var Ku=Th(function(){Tr();var a=cj.getInstance(),b=fj(119),c=1<window.devicePixelRatio;if(document.body&&zf(document.body,"exp-invert-logo"))if(c&&!zf(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!zf(d,"inverted-hdpi")){var e=xf(d);yf(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&zf(document.body,"inverted-hdpi")&&Af();if(b!=c){b="f"+(Math.floor(119/31)+1);d=gj(b)||0;d=c?d|67108864:d&-67108865;0==d?delete bj[b]:(c=d.toString(16),
bj[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.i;d=[];for(var f in bj)d.push(f+"="+encodeURIComponent(String(bj[f])));Zi(b,d.join("&"),63072E3,a.j,c)}Es.i||(Es.i=new Es);a=Es.i;f=16623;var g=void 0===g?{}:g;Object.values($p).includes(f)||(Cp(new Q("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.i.push({rootVe:f,key:g.key||""});a.s=[];a.D=[];g.rb?Hs(a,f,g):Is(a,f,g)}),Lu=Th(function(){Eu&&Eu.sendAbandonmentPing&&Eu.sendAbandonmentPing();
L("PL_ATT")&&tt.dispose();for(var a=$e,b=0,c=jt.length;b<c;b++)a.V(jt[b]);jt.length=0;gt("//web.archive.org/web/20220430003134/https://static.doubleclick.net/instream/ad_status.js");kt=!1;Lh("DCLKSTAT",0);oe(Gu,Fu);Eu&&(Eu.removeEventListener("onVideoDataChange",Hu),Eu.destroy())});
window.addEventListener?(window.addEventListener("load",Ku),window.addEventListener("pagehide",Lu)):window.attachEvent&&(window.attachEvent("onload",Ku),window.attachEvent("onunload",Lu));z("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||ut);z("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||vt);z("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||ot);z("yt.player.exports.navigate",A("yt.player.exports.navigate")||Ju);
z("yt.util.activity.init",A("yt.util.activity.init")||sn);z("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||vn);z("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||tn);}).call(this);


}
/*
     FILE ARCHIVED ON 00:31:34 Apr 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:25:14 Sep 05, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 517.313
  exclusion.robots: 0.309
  exclusion.robots.policy: 0.295
  cdx.remote: 0.116
  esindex: 0.015
  LoadShardBlock: 398.899 (3)
  PetaboxLoader3.datanode: 128.141 (4)
  CDXLines.iter: 16.705 (3)
  load_resource: 75.753
  PetaboxLoader3.resolve: 39.532
*/