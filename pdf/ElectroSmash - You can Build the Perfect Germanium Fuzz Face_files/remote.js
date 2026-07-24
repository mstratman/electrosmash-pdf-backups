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

(function(g){var window=this;'use strict';var MZa=function(a,b){this.u=a>>>0;this.j=b>>>0},OZa=function(a){if(!a)return NZa||(NZa=new MZa(0,0));
if(!/^\d+$/.test(a))return null;g.Xc(a);return new MZa(g.Vc,g.Wc)},PZa=function(a,b,c){null!=c&&("string"===typeof c&&OZa(c),g.Bd(a,b,1),"number"===typeof c?(a=a.j,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Vc=b,g.Wc=c,g.zd(a,g.Vc),g.zd(a,g.Wc)):(c=OZa(c),a=a.j,b=c.j,g.zd(a,c.u),g.zd(a,b)))},QZa=function(a,b,c){b=g.Zd(b,c);
null!=b&&(g.Bd(a,c,0),a.j.j.push(b?1:0))},RZa=function(a,b){b=b instanceof g.Ng?b:g.Tg(b,/^data:image\//i.test(b));
a.src=g.Og(b)},TZa=function(a){g.F.call(this,a,-1,SZa)},UZa=function(a){g.F.call(this,a)},VZa=function(a){g.F.call(this,a)},WZa=function(a){g.F.call(this,a)},XZa=function(a){g.F.call(this,a)},m6=function(a){g.Rk(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^g.Ta()).toString(36));
return a},n6=function(a,b,c){Array.isArray(c)||(c=[String(c)]);
g.Cda(a.B,b,c)},YZa=function(a){if(a instanceof g.Wn)return a;
if("function"==typeof a.Ni)return a.Ni(!1);if(g.La(a)){var b=0,c=new g.Wn;c.next=function(){for(;;){if(b>=a.length)return g.G_;if(b in a)return g.Xn(a[b++]);b++}};
return c}throw Error("Not implemented");},ZZa=function(a,b,c){if(g.La(a))g.lc(a,b,c);
else for(a=YZa(a);;){var d=a.next();if(d.done)break;b.call(c,d.value,void 0,a)}},$Za=function(a,b){var c=[];
ZZa(b,function(d){try{var e=g.eq.prototype.u.call(this,d,!0)}catch(f){if("Storage: Invalid value was encountered"==f)return;throw f;}void 0===e?c.push(d):g.oia(e)&&c.push(d)},a);
return c},a_a=function(a,b){$Za(a,b).forEach(function(c){g.eq.prototype.remove.call(this,c)},a)},b_a=function(a){if(a.ma){if(a.ma.locationOverrideToken)return{locationOverrideToken:a.ma.locationOverrideToken};
if(null!=a.ma.latitudeE7&&null!=a.ma.longitudeE7)return{latitudeE7:a.ma.latitudeE7,longitudeE7:a.ma.longitudeE7}}return null},c_a=function(a,b){g.Sb(a,b)||a.push(b)},o6=function(a){var b=0,c;
for(c in a)b++;return b},d_a=function(a,b){return g.Mf(a,b)},e_a=function(a){try{return g.C.JSON.parse(a)}catch(b){}a=String(a);
if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);},p6=function(a){if(g.C.JSON)try{return g.C.JSON.parse(a)}catch(b){}return e_a(a)},f_a=function(a,b,c,d){var e=new g.Hk(null);
a&&g.Ik(e,a);b&&g.Jk(e,b);c&&g.Kk(e,c);d&&(e.K=d);return e},q6=function(a,b){g.Ju[a]=!0;
var c=g.Hu();c&&c.publish.apply(c,arguments);g.Ju[a]=!1},r6=function(a){this.name=this.id="";
this.clientName="UNKNOWN_INTERFACE";this.app="";this.type="REMOTE_CONTROL";this.obfuscatedGaiaId=this.avatar=this.username="";this.capabilities=new Set;this.experiments=new Set;this.theme="u";new g.Op;this.model=this.brand="";this.year=0;this.chipset=this.osVersion=this.os="";this.mdxDialServerType="MDX_DIAL_SERVER_TYPE_UNKNOWN";a&&(this.id=a.id||a.name,this.name=a.name,this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.app=a.app,this.type=a.type||"REMOTE_CONTROL",this.username=
a.user||"",this.avatar=a.userAvatarUri||"",this.obfuscatedGaiaId=a.obfuscatedGaiaId||"",this.theme=a.theme||"u",g_a(this,a.capabilities||""),h_a(this,a.experiments||""),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN",a=a.deviceInfo)&&(a=JSON.parse(a),this.brand=a.brand||"",this.model=a.model||"",this.year=a.year||0,this.os=a.os||"",
this.osVersion=a.osVersion||"",this.chipset=a.chipset||"",this.clientName=a.clientName?a.clientName.toUpperCase():"UNKNOWN_INTERFACE",this.mdxDialServerType=a.mdxDialServerType||"MDX_DIAL_SERVER_TYPE_UNKNOWN")},g_a=function(a,b){a.capabilities.clear();
g.ao(b.split(","),g.Ra(d_a,i_a)).forEach(function(c){a.capabilities.add(c)})},h_a=function(a,b){a.experiments.clear();
b.split(",").forEach(function(c){a.experiments.add(c)})},s6=function(a){a=a||{};
this.name=a.name||"";this.id=a.id||a.screenId||"";this.token=a.token||a.loungeToken||"";this.uuid=a.uuid||a.dialId||"";this.idType=a.screenIdType||"normal"},t6=function(a,b){return!!b&&(a.id==b||a.uuid==b)},j_a=function(a){return{name:a.name,
screenId:a.id,loungeToken:a.token,dialId:a.uuid,screenIdType:a.idType}},k_a=function(a){return new s6(a)},l_a=function(a){return Array.isArray(a)?g.Yl(a,k_a):[]},u6=function(a){return a?'{name:"'+a.name+'",id:'+a.id.substr(0,6)+"..,token:"+((a.token?".."+a.token.slice(-6):"-")+",uuid:"+(a.uuid?".."+a.uuid.slice(-6):"-")+",idType:"+a.idType+"}"):"null"},v6=function(a){return Array.isArray(a)?"["+g.Yl(a,u6).join(",")+"]":"null"},w6=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;
return("x"==a?b:b&3|8).toString(16)})},m_a=function(a){return g.Yl(a,function(b){return{key:b.id,
name:b.name}})},x6=function(a,b){return g.Pb(a,function(c){return c||b?!c!=!b?!1:c.id==b.id:!0})},y6=function(a,b){return g.Pb(a,function(c){return t6(c,b)})},n_a=function(){var a=(0,g.hw)();
a&&a_a(a,a.j.Ni(!0))},z6=function(){var a=g.kw("yt-remote-connected-devices")||[];
g.ic(a);return a},o_a=function(a){if(g.Tb(a))return[];
var b=a[0].indexOf("#"),c=-1==b?a[0]:a[0].substring(0,b);return g.Yl(a,function(d,e){return 0==e?d:d.substring(c.length)})},p_a=function(a){g.jw("yt-remote-connected-devices",a,86400)},B6=function(){if(A6)return A6;
var a=g.kw("yt-remote-device-id");a||(a=w6(),g.jw("yt-remote-device-id",a,31536E3));for(var b=z6(),c=1,d=a;g.Sb(b,d);)c++,d=a+"#"+c;return A6=d},C6=function(){var a=z6(),b=B6();
g.mw()&&g.kc(a,b);a=o_a(a);if(g.Tb(a))try{g.Ula("remote_sid")}catch(c){}else try{g.Mr("remote_sid",a.join(","),-1)}catch(c){}},q_a=function(){return g.kw("yt-remote-session-browser-channel")},r_a=function(){return g.kw("yt-remote-local-screens")||[]},s_a=function(){g.jw("yt-remote-lounge-token-expiration",!0,86400)},t_a=function(a){5<a.length&&(a=a.slice(a.length-5));
var b=g.Yl(r_a(),function(d){return d.loungeToken}),c=g.Yl(a,function(d){return d.loungeToken});
g.Zl(c,function(d){return!g.Sb(b,d)})&&s_a();
g.jw("yt-remote-local-screens",a,31536E3)},D6=function(a){a||(g.lw("yt-remote-session-screen-id"),g.lw("yt-remote-session-video-id"));
C6();a=z6();g.Xb(a,B6());p_a(a)},u_a=function(){if(!E6){var a=g.nq();
a&&(E6=new g.bq(a))}},v_a=function(){u_a();
return E6?!!E6.get("yt-remote-use-staging-server"):!1},F6=function(){var a=window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
return a?parseInt(a[1],10):0},w_a=function(a){return!!document.currentScript&&(-1!=document.currentScript.src.indexOf("?"+a)||-1!=document.currentScript.src.indexOf("&"+a))},x_a=function(){return"function"==typeof window.__onGCastApiAvailable?window.__onGCastApiAvailable:null},G6=function(a){a.length?y_a(a.shift(),function(){G6(a)}):H6()},z_a=function(a){return"chrome-extension://"+a+"/cast_sender.js"},y_a=function(a,b,c){var d=document.createElement("script");
d.onerror=b;c&&(d.onload=c);g.Xj(d,g.Lg(a));(document.head||document.documentElement).appendChild(d)},A_a=function(){var a=F6(),b=[];
if(1<a){var c=a-1;b.push("//web.archive.org/web/20220430003241/https://www.gstatic.com/eureka/clank/"+a+"/cast_sender.js");b.push("//web.archive.org/web/20220430003241/https://www.gstatic.com/eureka/clank/"+c+"/cast_sender.js")}return b},H6=function(){var a=x_a();
a&&a(!1,"No cast extension found")},I6=function(){if(B_a){var a=2,b=x_a(),c=function(){a--;
0==a&&b&&b(!0)};
window.__onGCastApiAvailable=c;y_a("//web.archive.org/web/20220430003241/https://www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js",H6,c)}},C_a=function(){I6();
var a=A_a();a.push("//web.archive.org/web/20220430003241/https://www.gstatic.com/eureka/clank/cast_sender.js");G6(a)},E_a=function(){I6();
var a=A_a();a.push.apply(a,g.v(D_a.map(z_a)));a.push("//web.archive.org/web/20220430003241/https://www.gstatic.com/eureka/clank/cast_sender.js");G6(a)},F_a=function(){this.j=J6();
this.j.BA("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels")},G_a=function(){this.j=J6();
this.j.BA("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")},H_a=function(){this.j=J6();
this.j.BA("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")},K6=function(a,b,c){g.G.call(this);
this.J=null!=c?(0,g.Qa)(a,c):a;this.Yg=b;this.D=(0,g.Qa)(this.kU,this);this.j=!1;this.u=0;this.B=this.vc=null;this.C=[]},L6=function(a,b,c){g.G.call(this);
this.C=null!=c?a.bind(c):a;this.Yg=b;this.B=null;this.j=!1;this.u=0;this.vc=null},M6=function(a){a.vc=g.Ii(function(){a.vc=null;
a.j&&!a.u&&(a.j=!1,M6(a))},a.Yg);
var b=a.B;a.B=null;a.C.apply(null,b)},N6=function(){},O6=function(){g.qf.call(this,"p")},P6=function(){g.qf.call(this,"o")},I_a=function(){var a=new g.C.TextEncoder;
return new g.C.ReadableStream({start:function(b){for(var c=g.r(["test\r\n","test\r\n"]),d=c.next();!d.done;d=c.next())b.enqueue(a.encode(d.value));b.close()}})},J_a=function(a){return(a=/\/\/([^\/]+)\//.exec(a))?a[1].endsWith("google.com"):!1},L_a=function(a,b){if(!K_a){K_a=!0;
var c;a:{if(c=g.C.navigator)if(c=c.userAgent)break a;c=""}(-1==c.indexOf("Chrome")||-1!=c.indexOf("Edg")?0:90<=parseInt(/Chrome\/(\d+)/.exec(c)[1],10))&&J_a(a)&&window&&window.document&&J_a(window.document.URL)&&(c=document.createElement("meta"),c.httpEquiv="origin-trial",c.content="A0eNbltY1nd4MP7XTHXnTxWogDL6mWTdgIIKfKOTJoUHNbFFMZQBoiHHjJ9UK9lgYndWFaxOWR7ld8uUjcWmcwIAAAB/eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IkZldGNoVXBsb2FkU3RyZWFtaW5nIiwiZXhwaXJ5IjoxNjM2NTAyMzk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
document.head.appendChild(c),(new Request("",{body:new ReadableStream,method:"POST"})).headers.has("Content-Type")||(g.C.fetch(a+"?ot=1",{method:"POST",body:"test\r\n"}).catch(b),g.C.fetch(a+"?ot=2",{method:"POST",body:I_a(),RU:!1}).catch(b),g.C.fetch(a+"?ot=3",{method:"POST",body:I_a(),RU:!0}).catch(b)))}},Q6=function(){return M_a=M_a||new g.ng},N_a=function(a){g.qf.call(this,"serverreachability",a)},R6=function(a){var b=Q6();
b.dispatchEvent(new N_a(b,a))},O_a=function(a,b){g.qf.call(this,"statevent",a);
this.stat=b},S6=function(a){var b=Q6();
b.dispatchEvent(new O_a(b,a))},P_a=function(a,b,c,d){g.qf.call(this,"timingevent",a);
this.size=b;this.Fv=d},T6=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},U6=function(){},V6=function(a,b,c,d){this.D=a;
this.C=b;this.Ec=c;this.zc=d||1;this.gb=new g.Wk(this);this.ob=45E3;a=g.WC?125:void 0;this.ib=new g.Hi(a);this.Ia=null;this.B=!1;this.S=this.Wa=this.K=this.La=this.va=this.Ib=this.Y=null;this.ma=[];this.j=null;this.Z=0;this.J=this.ra=null;this.Kb=-1;this.Ga=!1;this.kb=0;this.Ua=null;this.kc=this.Ta=this.Vb=this.Aa=!1;this.u=new Q_a},Q_a=function(){this.B=null;
this.j="";this.u=!1},W6=function(a,b,c){a.La=1;
a.K=m6(b.clone());a.S=c;a.Aa=!0;R_a(a,null)},R_a=function(a,b){a.va=Date.now();
X6(a);a.Wa=a.K.clone();n6(a.Wa,"t",a.zc);a.Z=0;var c=a.D.La;a.u=new Q_a;a.j=S_a(a.D,c?b:null,!a.S);0<a.kb&&(a.Ua=new L6((0,g.Qa)(a.cL,a,a.j),a.kb));a.gb.Ma(a.j,"readystatechange",a.nU);b=a.Ia?g.Uf(a.Ia):{};a.S?(a.ra||(a.ra="POST"),b["Content-Type"]="application/x-www-form-urlencoded",a.j.send(a.Wa,a.ra,a.S,b)):(a.ra="GET",a.j.send(a.Wa,a.ra,null,b));R6(1)},T_a=function(a){return a.j?"GET"==a.ra&&2!=a.La&&a.D.Rg:!1},V_a=function(a,b,c){for(var d=!0,e;!a.Ga&&a.Z<c.length;)if(e=U_a(a,c),e==Y6){4==b&&
(a.J=4,S6(14),d=!1);
break}else if(e==Z6){a.J=4;S6(15);d=!1;break}else $6(a,e);T_a(a)&&e!=Y6&&e!=Z6&&(a.u.j="",a.Z=0);4!=b||0!=c.length||a.u.u||(a.J=1,S6(16),d=!1);a.B=a.B&&d;d?0<c.length&&!a.kc&&(a.kc=!0,a.D.SH(a)):(a7(a),b7(a))},U_a=function(a,b){var c=a.Z,d=b.indexOf("\n",c);
if(-1==d)return Y6;c=Number(b.substring(c,d));if(isNaN(c))return Z6;d+=1;if(d+c>b.length)return Y6;b=b.slice(d,d+c);a.Z=d+c;return b},X6=function(a){a.Ib=Date.now()+a.ob;
W_a(a,a.ob)},W_a=function(a,b){if(null!=a.Y)throw Error("WatchDog timer not null");
a.Y=T6((0,g.Qa)(a.lU,a),b)},c7=function(a){a.Y&&(g.C.clearTimeout(a.Y),a.Y=null)},b7=function(a){a.D.Jf()||a.Ga||X_a(a.D,a)},a7=function(a){c7(a);
g.nf(a.Ua);a.Ua=null;a.ib.stop();g.Xk(a.gb);if(a.j){var b=a.j;a.j=null;b.abort();b.dispose()}},$6=function(a,b){try{var c=a.D;
if(0!=c.ag&&(c.j==a||d7(c.u,a)))if(!a.Ta&&d7(c.u,a)&&3==c.ag){try{var d=c.Ee.j.parse(b)}catch(y){d=null}if(Array.isArray(d)&&3==d.length){var e=d;if(0==e[0])a:{if(!c.S){if(c.j)if(c.j.va+3E3<a.va)e7(c),f7(c);else break a;g7(c);S6(18)}}else c.Id=e[1],0<c.Id-c.Ta&&37500>e[2]&&c.ib&&0==c.ma&&!c.Z&&(c.Z=T6((0,g.Qa)(c.oU,c),6E3));if(1>=h7(c.u)&&c.fd){try{c.fd()}catch(y){}c.fd=void 0}}else i7(c,11)}else if((a.Ta||c.j==a)&&e7(c),!g.ib(b))for(e=c.Ee.j.parse(b),b=0;b<e.length;b++){var f=e[b];c.Ta=f[0];f=f[1];
if(2==c.ag)if("c"==f[0]){c.C=f[1];c.kc=f[2];var k=f[3];null!=k&&(c.dL=k);var l=f[5];null!=l&&"number"===typeof l&&0<l&&(c.Wa=1.5*l);d=c;var m=a.j;if(m){var n=g.Gj(m,"X-Client-Wire-Protocol");if(n){var p=d.u;!p.j&&(g.kb(n,"spdy")||g.kb(n,"quic")||g.kb(n,"h2"))&&(p.C=p.D,p.j=new Set,p.u&&(j7(p,p.u),p.u=null))}if(d.Aa){var q=g.Gj(m,"X-HTTP-Session-Id");q&&(d.qe=q,g.Rk(d.Ia,d.Aa,q))}}c.ag=3;c.D&&c.D.jL();c.Oc&&(c.hd=Date.now()-a.va);d=c;var t=a;d.rd=Y_a(d,d.La?d.kc:null,d.zc);if(t.Ta){Z_a(d.u,t);var u=
t,x=d.Wa;x&&u.setTimeout(x);u.Y&&(c7(u),X6(u));d.j=t}else $_a(d);0<c.B.length&&k7(c)}else"stop"!=f[0]&&"close"!=f[0]||i7(c,7);else 3==c.ag&&("stop"==f[0]||"close"==f[0]?"stop"==f[0]?i7(c,7):c.disconnect():"noop"!=f[0]&&c.D&&c.D.iL(f),c.ma=0)}R6(4)}catch(y){}},a0a=function(a,b){this.j=a;
this.map=b;this.context=null},b0a=function(a){this.D=a||10;
g.C.PerformanceNavigationTiming?(a=g.C.performance.getEntriesByType("navigation"),a=0<a.length&&("hq"==a[0].nextHopProtocol||"h2"==a[0].nextHopProtocol)):a=!!(g.C.chrome&&g.C.chrome.loadTimes&&g.C.chrome.loadTimes()&&g.C.chrome.loadTimes().wasFetchedViaSpdy);this.C=a?this.D:1;this.j=null;1<this.C&&(this.j=new Set);this.u=null;this.B=[]},c0a=function(a){return a.u?!0:a.j?a.j.size>=a.C:!1},h7=function(a){return a.u?1:a.j?a.j.size:0},d7=function(a,b){return a.u?a.u==b:a.j?a.j.has(b):!1},j7=function(a,
b){a.j?a.j.add(b):a.u=b},Z_a=function(a,b){a.u&&a.u==b?a.u=null:a.j&&a.j.has(b)&&a.j.delete(b)},l7=function(a){if(null!=a.u)return a.B.concat(a.u.ma);
if(null!=a.j&&0!==a.j.size){var b=a.B;a=g.r(a.j.values());for(var c=a.next();!c.done;c=a.next())b=b.concat(c.value.ma);return b}return g.$b(a.B)},d0a=function(a,b){var c=new U6;
if(g.C.Image){var d=new Image;d.onload=g.Ra(m7,c,d,"TestLoadImage: loaded",!0,b);d.onerror=g.Ra(m7,c,d,"TestLoadImage: error",!1,b);d.onabort=g.Ra(m7,c,d,"TestLoadImage: abort",!1,b);d.ontimeout=g.Ra(m7,c,d,"TestLoadImage: timeout",!1,b);g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},1E4);
d.src=a}else b(!1)},m7=function(a,b,c,d,e){try{b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null,e(d)}catch(f){}},e0a=function(){this.j=new N6},f0a=function(a,b,c){var d=c||"";
try{g.vk(a,function(e,f){var k=e;g.Ma(e)&&(k=g.Zi(e));b.push(d+f+"="+encodeURIComponent(k))})}catch(e){throw b.push(d+"type="+encodeURIComponent("_badmap")),e;
}},n7=function(a,b,c){return c&&c.BW?c.BW[a]||b:b},g0a=function(a){this.B=[];
this.kc=this.rd=this.Ia=this.zc=this.j=this.qe=this.Aa=this.Ga=this.K=this.Ib=this.Y=null;this.Pe=this.Ua=0;this.Ne=n7("failFast",!1,a);this.ib=this.Z=this.S=this.J=this.D=null;this.Ec=!0;this.Pd=this.Id=this.Ta=-1;this.Vb=this.ma=this.va=0;this.Me=n7("baseRetryDelayMs",5E3,a);this.Qe=n7("retryDelaySeedMs",1E4,a);this.Oe=n7("forwardChannelMaxRetries",2,a);this.ud=n7("forwardChannelRequestTimeoutMs",2E4,a);this.pe=a&&a.uja||void 0;this.Rg=a&&a.sja||!1;this.Wa=void 0;this.La=a&&a.l0||!1;this.C="";this.u=
new b0a(a&&a.oia);this.Ee=new e0a;this.ob=a&&a.Dia||!1;this.kb=a&&a.via||!1;this.ob&&this.kb&&(this.kb=!1);this.cf=a&&a.jia||!1;a&&a.Fia&&(this.Ec=!1);this.Oc=!this.ob&&this.Ec&&a&&a.sia||!1;this.fd=void 0;this.hd=0;this.gb=!1;this.ra=null;this.qf=!a||!1!==a.uia;this.Kb=null},f7=function(a){a.j&&(o7(a),a.j.cancel(),a.j=null)},h0a=function(a){f7(a);
a.S&&(g.C.clearTimeout(a.S),a.S=null);e7(a);a.u.cancel();a.J&&("number"===typeof a.J&&g.C.clearTimeout(a.J),a.J=null)},k7=function(a){c0a(a.u)||a.J||(a.J=!0,g.vi(a.fL,a),a.va=0)},j0a=function(a,b){if(h7(a.u)>=a.u.C-(a.J?1:0))return!1;
if(a.J)return a.B=b.ma.concat(a.B),!0;if(1==a.ag||2==a.ag||a.va>=(a.Ne?0:a.Oe))return!1;a.J=T6((0,g.Qa)(a.fL,a,b),i0a(a,a.va));a.va++;return!0},l0a=function(a,b){var c;
b?c=b.Ec:c=a.Ua++;var d=a.Ia.clone();g.Rk(d,"SID",a.C);g.Rk(d,"RID",c);g.Rk(d,"AID",a.Ta);p7(a,d);a.K&&a.Y&&g.Vk(d,a.K,a.Y);c=new V6(a,a.C,c,a.va+1);null===a.K&&(c.Ia=a.Y);b&&(a.B=b.ma.concat(a.B));b=k0a(a,c,1E3);c.setTimeout(Math.round(.5*a.ud)+Math.round(.5*a.ud*Math.random()));j7(a.u,c);W6(c,d,b)},p7=function(a,b){a.Ga&&g.Af(a.Ga,function(c,d){g.Rk(b,d,c)});
a.D&&g.vk({},function(c,d){g.Rk(b,d,c)})},k0a=function(a,b,c){c=Math.min(a.B.length,c);
var d=a.D?(0,g.Qa)(a.D.pU,a.D,a):null;a:for(var e=a.B,f=-1;;){var k=["count="+c];-1==f?0<c?(f=e[0].j,k.push("ofs="+f)):f=0:k.push("ofs="+f);for(var l=!0,m=0;m<c;m++){var n=e[m].j,p=e[m].map;n-=f;if(0>n)f=Math.max(0,e[m].j-100),l=!1;else try{f0a(p,k,"req"+n+"_")}catch(q){d&&d(p)}}if(l){d=k.join("&");break a}}a=a.B.splice(0,c);b.ma=a;return d},$_a=function(a){a.j||a.S||(a.Vb=1,g.vi(a.eL,a),a.ma=0)},g7=function(a){if(a.j||a.S||3<=a.ma)return!1;
a.Vb++;a.S=T6((0,g.Qa)(a.eL,a),i0a(a,a.ma));a.ma++;return!0},o7=function(a){null!=a.ra&&(g.C.clearTimeout(a.ra),a.ra=null)},m0a=function(a){a.j=new V6(a,a.C,"rpc",a.Vb);
null===a.K&&(a.j.Ia=a.Y);a.j.kb=0;var b=a.rd.clone();g.Rk(b,"RID","rpc");g.Rk(b,"SID",a.C);g.Rk(b,"CI",a.ib?"0":"1");g.Rk(b,"AID",a.Ta);g.Rk(b,"TYPE","xmlhttp");p7(a,b);a.K&&a.Y&&g.Vk(b,a.K,a.Y);a.Wa&&a.j.setTimeout(a.Wa);var c=a.j;a=a.kc;c.La=1;c.K=m6(b.clone());c.S=null;c.Aa=!0;R_a(c,a)},e7=function(a){null!=a.Z&&(g.C.clearTimeout(a.Z),a.Z=null)},X_a=function(a,b){var c=null;
if(a.j==b){e7(a);o7(a);a.j=null;var d=2}else if(d7(a.u,b))c=b.ma,Z_a(a.u,b),d=1;else return;if(0!=a.ag)if(a.Pd=b.Kb,b.B)if(1==d){c=b.S?b.S.length:0;b=Date.now()-b.va;var e=a.va;d=Q6();d.dispatchEvent(new P_a(d,c,b,e));k7(a)}else $_a(a);else if(e=b.getLastError(),3==e||0==e&&0<a.Pd||!(1==d&&j0a(a,b)||2==d&&g7(a)))switch(c&&0<c.length&&(b=a.u,b.B=b.B.concat(c)),e){case 1:i7(a,5);break;case 4:i7(a,10);break;case 3:i7(a,6);break;default:i7(a,2)}},i0a=function(a,b){var c=a.Me+Math.floor(Math.random()*
a.Qe);
a.isActive()||(c*=2);return c*b},i7=function(a,b){if(2==b){var c=null;
a.D&&(c=null);var d=(0,g.Qa)(a.s0,a);c||(c=new g.Hk("//web.archive.org/web/20220430003241/https://www.google.com/images/cleardot.gif"),g.C.location&&"http"==g.C.location.protocol||g.Ik(c,"https"),m6(c));d0a(c.toString(),d)}else S6(2);a.ag=0;a.D&&a.D.hL(b);n0a(a);h0a(a)},n0a=function(a){a.ag=0;
a.Kb=[];if(a.D){var b=l7(a.u);if(0!=b.length||0!=a.B.length)g.bc(a.Kb,b),g.bc(a.Kb,a.B),a.u.B.length=0,g.$b(a.B),a.B.length=0;a.D.gL()}},o0a=function(a){if(0==a.ag)return a.Kb;
var b=[];g.bc(b,l7(a.u));g.bc(b,a.B);return b},Y_a=function(a,b,c){var d=g.Sk(c);
""!=d.j?(b&&g.Jk(d,b+"."+d.j),g.Kk(d,d.u)):(d=g.C.location,d=f_a(d.protocol,b?b+"."+d.hostname:d.hostname,+d.port,c));b=a.Aa;c=a.qe;b&&c&&g.Rk(d,b,c);g.Rk(d,"VER",a.dL);p7(a,d);return d},S_a=function(a,b,c){if(b&&!a.La)throw Error("Can't create secondary domain capable XhrIo object.");
b=c&&a.Rg&&!a.pe?new g.zj(new g.rk({eR:!0})):new g.zj(a.pe);b.K=a.La;return b},p0a=function(){},q0a=function(){if(g.Ec&&!g.tc(10))throw Error("Environmental error: no available transport.");
},r7=function(a,b){g.ng.call(this);
this.j=new g0a(b);this.J=a;this.u=b&&b.eX||null;a=b&&b.dX||null;b&&b.mia&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"});this.j.Y=a;a=b&&b.Jia||null;b&&b.NO&&(a?a["X-WebChannel-Content-Type"]=b.NO:a={"X-WebChannel-Content-Type":b.NO});b&&b.FM&&(a?a["X-WebChannel-Client-Profile"]=b.FM:a={"X-WebChannel-Client-Profile":b.FM});this.j.Ib=a;(a=b&&b.Hia)&&!g.ib(a)&&(this.j.K=a);this.K=b&&b.l0||!1;this.D=b&&b.ija||!1;(b=b&&b.wW)&&!g.ib(b)&&(this.j.Aa=b,g.Jf(this.u,b)&&g.Rf(this.u,
b));this.C=new q7(this)},r0a=function(a){O6.call(this);
a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var b=a.__sm__;b?this.data=(this.metadataKey=g.Ff(b))?g.Sf(b,this.metadataKey):b:this.data=a},s0a=function(a){P6.call(this);
this.status=1;this.errorCode=a},q7=function(a){this.j=a},t0a=function(a,b){this.u=a;
this.j=b},u0a=function(a){return o0a(a.j).map(function(b){b=b.map;
"__data__"in b&&(b=b.__data__,b=a.u.D?e_a(b):b);return b})},s7=function(a,b){if("function"!==typeof a)throw Error("Fn must not be null and must be a function");
return g.C.setTimeout(function(){a()},b)},u7=function(a){t7.dispatchEvent(new v0a(t7,a))},v0a=function(a,b){g.qf.call(this,"statevent",a);
this.stat=b},v7=function(a,b,c,d){this.j=a;
this.C=b;this.K=c;this.J=d||1;this.u=45E3;this.B=new g.Wk(this);this.D=new g.Hi;this.D.setInterval(250)},x0a=function(a,b,c){a.Jt=1;
a.Io=m6(b.clone());a.Hq=c;a.Aa=!0;w0a(a,null)},w7=function(a,b,c,d,e){a.Jt=1;
a.Io=m6(b.clone());a.Hq=null;a.Aa=c;e&&(a.NQ=!1);w0a(a,d)},w0a=function(a,b){a.It=Date.now();
x7(a);a.Ko=a.Io.clone();n6(a.Ko,"t",a.J);a.uA=0;a.kh=a.j.xE(a.j.Jw()?b:null);0<a.vE&&(a.sA=new L6((0,g.Qa)(a.kL,a,a.kh),a.vE));a.B.Ma(a.kh,"readystatechange",a.rU);b=a.Gq?g.Uf(a.Gq):{};a.Hq?(a.tA="POST",b["Content-Type"]="application/x-www-form-urlencoded",a.kh.send(a.Ko,a.tA,a.Hq,b)):(a.tA="GET",a.NQ&&!g.uf&&(b.Connection="close"),a.kh.send(a.Ko,a.tA,null,b));a.j.Rk(1)},z0a=function(a,b){var c=a.uA,d=b.indexOf("\n",c);
if(-1==d)return y7;c=Number(b.substring(c,d));if(isNaN(c))return y0a;d+=1;if(d+c>b.length)return y7;b=b.slice(d,d+c);a.uA=d+c;return b},B0a=function(a,b){a.It=Date.now();
x7(a);var c=b?window.location.hostname:"";a.Ko=a.Io.clone();g.Rk(a.Ko,"DOMAIN",c);g.Rk(a.Ko,"t",a.J);try{a.ll=new ActiveXObject("htmlfile")}catch(m){z7(a);a.Jo=7;u7(22);A7(a);return}var d="<html><body>";if(b){var e="";for(b=0;b<c.length;b++){var f=c.charAt(b);if("<"==f)f=e+"\\x3c";else if(">"==f)f=e+"\\x3e";else{if(f in B7)f=B7[f];else if(f in A0a)f=B7[f]=A0a[f];else{var k=f.charCodeAt(0);if(31<k&&127>k)var l=f;else{if(256>k){if(l="\\x",16>k||256<k)l+="0"}else l="\\u",4096>k&&(l+="0");l+=k.toString(16).toUpperCase()}f=
B7[f]=l}f=e+f}e=f}d+='<script>document.domain="'+e+'"\x3c/script>'}d+="</body></html>";c=g.nh(g.Fg("b/12014412"),d);a.ll.open();a.ll.write(g.dh(c));a.ll.close();a.ll.parentWindow.m=(0,g.Qa)(a.e_,a);a.ll.parentWindow.d=(0,g.Qa)(a.RP,a,!0);a.ll.parentWindow.rpcClose=(0,g.Qa)(a.RP,a,!1);c=a.ll.createElement("DIV");a.ll.parentWindow.document.body.appendChild(c);d=g.Sg(a.Ko.toString());d=g.Dh(g.Og(d));d=g.nh(g.Fg("b/12014412"),'<iframe src="'+d+'"></iframe>');g.oh(c,d);a.j.Rk(1)},x7=function(a){a.wE=Date.now()+
a.u;
C0a(a,a.u)},C0a=function(a,b){if(null!=a.Kt)throw Error("WatchDog timer not null");
a.Kt=s7((0,g.Qa)(a.qU,a),b)},C7=function(a){a.Kt&&(g.C.clearTimeout(a.Kt),a.Kt=null)},A7=function(a){a.j.Jf()||a.Fq||a.j.vA(a)},z7=function(a){C7(a);
g.nf(a.sA);a.sA=null;a.D.stop();g.Xk(a.B);if(a.kh){var b=a.kh;a.kh=null;b.abort();b.dispose()}a.ll&&(a.ll=null)},D7=function(a,b){try{a.j.lL(a,b),a.j.Rk(4)}catch(c){}},E0a=function(a,b,c,d,e){if(0==d)c(!1);
else{var f=e||0;d--;D0a(a,b,function(k){k?c(!0):g.C.setTimeout(function(){E0a(a,b,c,d,f)},f)})}},D0a=function(a,b,c){var d=new Image;
d.onload=function(){try{E7(d),c(!0)}catch(e){}};
d.onerror=function(){try{E7(d),c(!1)}catch(e){}};
d.onabort=function(){try{E7(d),c(!1)}catch(e){}};
d.ontimeout=function(){try{E7(d),c(!1)}catch(e){}};
g.C.setTimeout(function(){if(d.ontimeout)d.ontimeout()},b);
RZa(d,a)},E7=function(a){a.onload=null;
a.onerror=null;a.onabort=null;a.ontimeout=null},F0a=function(a){this.j=a;
this.u=new N6},G0a=function(a){var b=F7(a.j,a.hx,"/mail/images/cleardot.gif");
m6(b);E0a(b.toString(),5E3,(0,g.Qa)(a.YU,a),3,2E3);a.Rk(1)},H7=function(a){var b=a.j.Y;
if(null!=b)u7(5),b?(u7(11),G7(a.j,a,!1)):(u7(12),G7(a.j,a,!0));else if(a.Oh=new v7(a),a.Oh.Gq=a.yE,b=a.j,b=F7(b,b.Jw()?a.Iw:null,a.zE),u7(5),!g.Ec||g.tc(10))n6(b,"TYPE","xmlhttp"),w7(a.Oh,b,!1,a.Iw,!1);else{n6(b,"TYPE","html");var c=a.Oh;a=!!a.Iw;c.Jt=3;c.Io=m6(b.clone());B0a(c,a)}},I7=function(a,b,c){this.j=1;
this.u=[];this.B=[];this.D=new N6;this.S=a||null;this.Y=null!=b?b:null;this.K=c||!1},H0a=function(a,b){this.j=a;
this.map=b;this.context=null},I0a=function(a,b,c,d){g.qf.call(this,"timingevent",a);
this.size=b;this.Fv=d},J0a=function(a){g.qf.call(this,"serverreachability",a)},K0a=function(a){a.sU(1,0);
a.wA=F7(a,null,a.AE);J7(a)},L0a=function(a){a.Uo&&(a.Uo.abort(),a.Uo=null);
a.xf&&(a.xf.cancel(),a.xf=null);a.Rm&&(g.C.clearTimeout(a.Rm),a.Rm=null);K7(a);a.Xh&&(a.Xh.cancel(),a.Xh=null);a.Lo&&(g.C.clearTimeout(a.Lo),a.Lo=null)},M0a=function(a,b){if(0==a.j)throw Error("Invalid operation: sending map when state is closed");
a.u.push(new H0a(a.tU++,b));2!=a.j&&3!=a.j||J7(a)},N0a=function(a){var b=0;
a.xf&&b++;a.Xh&&b++;return b},J7=function(a){a.Xh||a.Lo||(a.Lo=s7((0,g.Qa)(a.pL,a),0),a.Mt=0)},P0a=function(a,b){if(1==a.j){if(!b){a.Lw=Math.floor(1E5*Math.random());
b=a.Lw++;var c=new v7(a,"",b);c.Gq=a.Bl;var d=L7(a),e=a.wA.clone();g.Rk(e,"RID",b);g.Rk(e,"CVER","1");M7(a,e);x0a(c,e,d);a.Xh=c;a.j=2}}else 3==a.j&&(b?O0a(a,b):0==a.u.length||a.Xh||O0a(a))},O0a=function(a,b){if(b)if(6<a.Iq){a.u=a.B.concat(a.u);
a.B.length=0;var c=a.Lw-1;b=L7(a)}else c=b.K,b=b.Hq;else c=a.Lw++,b=L7(a);var d=a.wA.clone();g.Rk(d,"SID",a.C);g.Rk(d,"RID",c);g.Rk(d,"AID",a.Nt);M7(a,d);c=new v7(a,a.C,c,a.Mt+1);c.Gq=a.Bl;c.setTimeout(1E4+Math.round(1E4*Math.random()));a.Xh=c;x0a(c,d,b)},M7=function(a,b){a.Qg&&(a=a.Qg.tL())&&g.Af(a,function(c,d){g.Rk(b,d,c)})},L7=function(a){var b=Math.min(a.u.length,1E3),c=["count="+b];
if(6<a.Iq&&0<b){var d=a.u[0].j;c.push("ofs="+d)}else d=0;for(var e={},f=0;f<b;e={ot:e.ot},f++){e.ot=a.u[f].j;var k=a.u[f].map;e.ot=6>=a.Iq?f:e.ot-d;try{g.Af(k,function(l){return function(m,n){c.push("req"+l.ot+"_"+n+"="+encodeURIComponent(m))}}(e))}catch(l){c.push("req"+e.ot+"_type="+encodeURIComponent("_badmap"))}}a.B=a.B.concat(a.u.splice(0,b));
return c.join("&")},Q0a=function(a){a.xf||a.Rm||(a.J=1,a.Rm=s7((0,g.Qa)(a.oL,a),0),a.Lt=0)},N7=function(a){if(a.xf||a.Rm||3<=a.Lt)return!1;
a.J++;a.Rm=s7((0,g.Qa)(a.oL,a),R0a(a,a.Lt));a.Lt++;return!0},G7=function(a,b,c){a.zD=c;
a.Cl=b.Qm;a.K||K0a(a)},K7=function(a){null!=a.Jq&&(g.C.clearTimeout(a.Jq),a.Jq=null)},R0a=function(a,b){var c=5E3+Math.floor(1E4*Math.random());
a.isActive()||(c*=2);return c*b},O7=function(a,b){if(2==b||9==b){var c=null;
a.Qg&&(c=null);var d=(0,g.Qa)(a.r0,a);c||(c=new g.Hk("//web.archive.org/web/20220430003241/https://www.google.com/images/cleardot.gif"),m6(c));D0a(c.toString(),1E4,d)}else u7(2);S0a(a,b)},S0a=function(a,b){a.j=0;
a.Qg&&a.Qg.qL(b);T0a(a);L0a(a)},T0a=function(a){a.j=0;
a.Cl=-1;if(a.Qg)if(0==a.B.length&&0==a.u.length)a.Qg.BE();else{var b=g.$b(a.B),c=g.$b(a.u);a.B.length=0;a.u.length=0;a.Qg.BE(b,c)}},F7=function(a,b,c){var d=g.Sk(c);
if(""!=d.j)b&&g.Jk(d,b+"."+d.j),g.Kk(d,d.u);else{var e=window.location;d=f_a(e.protocol,b?b+"."+e.hostname:e.hostname,+e.port,c)}a.Kw&&g.Af(a.Kw,function(f,k){g.Rk(d,k,f)});
g.Rk(d,"VER",a.Iq);M7(a,d);return d},U0a=function(){},V0a=function(){this.j=[];
this.u=[]},W0a=function(){},J6=function(){if(!P7){P7=new g.Ki(new W0a);
var a=g.ar("client_streamz_web_flush_count",-1);-1!==a&&(P7.C=a)}return P7},Q7=function(a){g.qf.call(this,"channelMessage");
this.message=a},R7=function(a){g.qf.call(this,"channelError");
this.error=a},X0a=function(a,b){this.action=a;
this.params=b||{}},S7=function(a,b){g.G.call(this);
this.j=new g.L(this.WZ,0,this);g.H(this,this.j);this.Yg=5E3;this.u=0;if("function"===typeof a)b&&(a=(0,g.Qa)(a,b));else if(a&&"function"===typeof a.handleEvent)a=(0,g.Qa)(a.handleEvent,a);else throw Error("Invalid listener argument");this.B=a},T7=function(a,b,c,d,e){c=void 0===c?!1:c;
d=void 0===d?function(){return""}:d;
e=void 0===e?!1:e;this.va=a;this.K=b;this.B=new g.aq;this.u=new S7(this.R_,this);this.j=null;this.Z=!1;this.J=null;this.Y="";this.S=this.D=0;this.C=[];this.Aa=c;this.ma=d;this.Ga=e;this.ra=new F_a;this.Ia=new G_a;this.La=new H_a},U7=function(a){if(a.j){var b=a.ma(),c=a.j.Bl||{};
b?c["x-youtube-lounge-xsrf-token"]=b:delete c["x-youtube-lounge-xsrf-token"];a.j.Bl=c}},V7=function(a){this.port=this.domain="";
this.j="/api/lounge";this.u=!0;a=a||document.location.href;var b=Number(g.nj(4,a))||"";b&&(this.port=":"+b);this.domain=g.oj(a)||"";a=g.qb();0<=a.search("MSIE")&&(a=a.match(/MSIE ([\d.]+)/)[1],0>g.pb(a,"10.0")&&(this.u=!1))},W7=function(a,b){var c=a.j;
a.u&&(c="https://"+a.domain+a.port+a.j);return g.uj(c+b,{})},X7=function(a,b,c,d,e){a={format:"JSON",
method:"POST",context:a,timeout:5E3,withCredentials:!1,onSuccess:g.Ra(a.C,d,!0),onError:g.Ra(a.B,e),onTimeout:g.Ra(a.D,e)};c&&(a.postParams=c,a.headers={"Content-Type":"application/x-www-form-urlencoded"});return g.Dr(b,a)},Y7=function(a,b){g.ng.call(this);
var c=this;this.Qc=a();this.Qc.subscribe("handlerOpened",this.yS,this);this.Qc.subscribe("handlerClosed",this.wS,this);this.Qc.subscribe("handlerError",function(d,e){c.onError(e)});
this.Qc.subscribe("handlerMessage",this.xS,this);this.j=b},Y0a=function(a,b,c){var d=this;
c=void 0===c?function(){return""}:c;
var e=void 0===e?new q0a:e;var f=void 0===f?new g.aq:f;this.pathPrefix=a;this.j=b;this.ra=c;this.D=f;this.S=null;this.Y=this.K=0;this.channel=null;this.J=0;this.B=new S7(function(){d.B.isActive();var k;0===(null==(k=d.channel)?void 0:h7((new t0a(k,k.j)).j.u))&&d.connect(d.S,d.K)});
this.C={};this.u={};this.Z=!1;this.logger=null;this.va=[];this.ma=void 0},Z0a=function(a){g.cg(a.channel,"m",function(){a.J=3;
a.B.reset();a.S=null;a.K=0;for(var b=g.r(a.va),c=b.next();!c.done;c=b.next())c=c.value,a.channel&&a.channel.send(c);a.va=[];a.ea("webChannelOpened")});
g.cg(a.channel,"n",function(){a.J=0;a.B.isActive()||a.ea("webChannelClosed");var b,c=null==(b=a.channel)?void 0:u0a(new t0a(b,b.j));c&&(a.va=[].concat(g.v(c)))});
g.cg(a.channel,"p",function(b){var c=b.data;"gracefulReconnect"===c[0]?(a.B.start(),a.channel&&a.channel.close()):a.ea("webChannelMessage",new X0a(c[0],c[1]));a.ma=b.statusCode});
g.cg(a.channel,"o",function(){401===a.ma||a.B.start();a.ea("webChannelError")})},Z7=function(a){var b=a.ra();
b?a.C["x-youtube-lounge-xsrf-token"]=b:delete a.C["x-youtube-lounge-xsrf-token"]},$7=function(a){g.ng.call(this);
this.j=a();this.j.subscribe("webChannelOpened",this.BS,this);this.j.subscribe("webChannelClosed",this.zS,this);this.j.subscribe("webChannelError",this.onError,this);this.j.subscribe("webChannelMessage",this.AS,this)},$0a=function(a,b,c,d,e){function f(){return new T7(W7(a,"/bc"),b,!1,c,d)}
c=void 0===c?function(){return""}:c;
return g.Q("enable_mdx_web_channel_desktop")?new $7(function(){return new Y0a(W7(a,"/wc"),b,c)}):new Y7(f,e)},d1a=function(){var a=a1a;
b1a();a8.push(a);c1a()},b8=function(a,b){b1a();
var c=e1a(a,String(b));g.Tb(a8)?f1a(c):(c1a(),g.lc(a8,function(d){d(c)}))},c8=function(a){b8("CP",a)},b1a=function(){a8||(a8=g.Ia("yt.mdx.remote.debug.handlers_")||[],g.Ha("yt.mdx.remote.debug.handlers_",a8))},f1a=function(a){var b=(d8+1)%50;
d8=b;e8[b]=a;f8||(f8=49==b)},c1a=function(){var a=a8;
if(e8[0]){var b=f8?d8:-1;do{b=(b+1)%50;var c=e8[b];g.lc(a,function(d){d(c)})}while(b!=d8);
e8=Array(50);d8=-1;f8=!1}},e1a=function(a,b){var c=(Date.now()-g1a)/1E3;
c.toFixed&&(c=c.toFixed(3));var d=[];d.push("[",c+"s","] ");d.push("[","yt.mdx.remote","] ");d.push(a+": "+b,"\n");return d.join("")},g8=function(a){g.lv.call(this);
this.J=a;this.screens=[]},h1a=function(a,b){var c=a.get(b.uuid)||a.get(b.id);
if(c)return a=c.name,c.id=b.id||c.id,c.name=b.name,c.token=b.token,c.uuid=b.uuid||c.uuid,c.name!=a;a.screens.push(b);return!0},i1a=function(a,b){var c=a.screens.length!=b.length;
a.screens=g.ao(a.screens,function(f){return!!x6(b,f)});
for(var d=0,e=b.length;d<e;d++)c=h1a(a,b[d])||c;return c},j1a=function(a,b){var c=a.screens.length;
a.screens=g.ao(a.screens,function(d){return!(d||b?!d!=!b?0:d.id==b.id:1)});
return a.screens.length<c},h8=function(a,b,c,d,e){g.lv.call(this);
this.B=a;this.K=b;this.C=c;this.J=d;this.D=e;this.u=0;this.j=null;this.vc=NaN},j8=function(a){g8.call(this,"LocalScreenService");
this.u=a;this.j=NaN;i8(this);this.info("Initializing with "+v6(this.screens))},k1a=function(a){if(a.screens.length){var b=g.Yl(a.screens,function(d){return d.id}),c=W7(a.u,"/pairing/get_lounge_token_batch");
X7(a.u,c,{screen_ids:b.join(",")},(0,g.Qa)(a.XV,a),(0,g.Qa)(a.WV,a))}},i8=function(a){if(g.Q("deprecate_pair_servlet_enabled"))return i1a(a,[]);
var b=l_a(r_a());b=g.ao(b,function(c){return!c.uuid});
return i1a(a,b)},k8=function(a,b){t_a(g.Yl(a.screens,j_a));
b&&s_a()},m8=function(a,b){g.lv.call(this);
this.J=b;b=(b=g.kw("yt-remote-online-screen-ids")||"")?b.split(","):[];for(var c={},d=this.J(),e=0,f=d.length;e<f;++e){var k=d[e].id;c[k]=g.Sb(b,k)}this.j=c;this.D=a;this.B=this.C=NaN;this.u=null;l8("Initialized with "+g.Zi(this.j))},n8=function(a,b,c){var d=W7(a.D,"/pairing/get_screen_availability");
X7(a.D,d,{lounge_token:b.token},(0,g.Qa)(function(e){e=e.screens||[];for(var f=0,k=e.length;f<k;++f)if(e[f].loungeToken==b.token){c("online"==e[f].status);return}c(!1)},a),(0,g.Qa)(function(){c(!1)},a))},o8=function(a,b){a:if(o6(b)!=o6(a.j))var c=!1;
else{c=g.If(b);for(var d=0,e=c.length;d<e;++d)if(!a.j[c[d]]){c=!1;break a}c=!0}c||(l8("Updated online screens: "+g.Zi(a.j)),a.j=b,a.ea("screenChange"));l1a(a)},p8=function(a){isNaN(a.B)||g.Ar(a.B);
a.B=g.ur((0,g.Qa)(a.GI,a),0<a.C&&a.C<g.Ta()?2E4:1E4)},l8=function(a){b8("OnlineScreenService",a)},m1a=function(a){var b={};
g.lc(a.J(),function(c){c.token?b[c.token]=c.id:this.bf("Requesting availability of screen w/o lounge token.")});
return b},l1a=function(a){a=g.If(g.Bf(a.j,function(b){return b}));
g.ic(a);a.length?g.jw("yt-remote-online-screen-ids",a.join(","),60):g.lw("yt-remote-online-screen-ids")},q8=function(a,b){b=void 0===b?!1:b;
g8.call(this,"ScreenService");this.C=a;this.K=b;this.j=this.u=null;this.B=[];this.D={};n1a(this)},p1a=function(a,b,c,d,e,f){a.info("getAutomaticScreenByIds "+c+" / "+b);
c||(c=a.D[b]);var k=a.Ri(),l=c?y6(k,c):null;c&&(a.K||l)||(l=y6(k,b));if(l){l.uuid=b;var m=r8(a,l);n8(a.j,m,function(n){e(n?m:null)})}else c?o1a(a,c,(0,g.Qa)(function(n){var p=r8(this,new s6({name:d,
screenId:c,loungeToken:n,dialId:b||""}));n8(this.j,p,function(q){e(q?p:null)})},a),f):e(null)},q1a=function(a,b){for(var c=0,d=a.screens.length;c<d;++c)if(a.screens[c].name==b)return a.screens[c];
return null},r1a=function(a,b,c){n8(a.j,b,c)},o1a=function(a,b,c,d){a.info("requestLoungeToken_ for "+b);
var e={postParams:{screen_ids:b},method:"POST",context:a,onSuccess:function(f,k){f=k&&k.screens||[];f[0]&&f[0].screenId==b?c(f[0].loungeToken):d(Error("Missing lounge token in token response"))},
onError:function(){d(Error("Request screen lounge token failed"))}};
g.Dr(W7(a.C,"/pairing/get_lounge_token_batch"),e)},s1a=function(a){a.screens=a.u.Ri();
var b=a.D,c={},d;for(d in b)c[b[d]]=d;b=0;for(d=a.screens.length;b<d;++b){var e=a.screens[b];e.uuid=c[e.id]||""}a.info("Updated manual screens: "+v6(a.screens))},n1a=function(a){s8(a);
a.u=new j8(a.C);a.u.subscribe("screenChange",(0,g.Qa)(a.gW,a));s1a(a);a.K||(a.B=l_a(g.kw("yt-remote-automatic-screen-cache")||[]));s8(a);a.info("Initializing automatic screens: "+v6(a.B));a.j=new m8(a.C,(0,g.Qa)(a.Ri,a,!0));a.j.subscribe("screenChange",(0,g.Qa)(function(){this.ea("onlineScreenChange")},a))},r8=function(a,b){var c=a.get(b.id);
c?(c.uuid=b.uuid,b=c):((c=y6(a.B,b.uuid))?(c.id=b.id,c.token=b.token,b=c):a.B.push(b),a.K||t1a(a));s8(a);a.D[b.uuid]=b.id;g.jw("yt-remote-device-id-map",a.D,31536E3);return b},t1a=function(a){a=g.ao(a.B,function(b){return"shortLived"!=b.idType});
g.jw("yt-remote-automatic-screen-cache",g.Yl(a,j_a))},s8=function(a){a.D=g.kw("yt-remote-device-id-map")||{}},t8=function(a,b,c){g.lv.call(this);
this.Aa=c;this.B=a;this.j=b;this.C=null},u8=function(a,b){a.C=b;
a.ea("sessionScreen",a.C)},u1a=function(a,b){a.C&&(a.C.token=b,r8(a.B,a.C));
a.ea("sessionScreen",a.C)},v8=function(a,b){b8(a.Aa,b)},w8=function(a,b,c){t8.call(this,a,b,"CastSession");
var d=this;this.config_=c;this.u=null;this.ma=(0,g.Qa)(this.HS,this);this.ra=(0,g.Qa)(this.o_,this);this.Z=g.ur(function(){v1a(d,null)},12E4);
this.K=this.D=this.J=this.S=0;this.va=!1;this.Y="unknown"},x8=function(a,b){g.Ar(a.K);
a.K=0;0==b?w1a(a):a.K=g.ur(function(){w1a(a)},b)},w1a=function(a){x1a(a,"getLoungeToken");
g.Ar(a.D);a.D=g.ur(function(){y1a(a,null)},3E4)},x1a=function(a,b){a.info("sendYoutubeMessage_: "+b+" "+g.Zi());
var c={};c.type=b;a.u?a.u.sendMessage("urn:x-cast:com.google.youtube.mdx",c,function(){},(0,g.Qa)(function(){v8(this,"Failed to send message: "+b+".")},a)):v8(a,"Sending yt message without session: "+g.Zi(c))},y8=function(a,b){b?(a.info("onConnectedScreenId_: Received screenId: "+b),a.getScreen()&&a.getScreen().id==b||a.AN(b,function(c){u8(a,c)},function(){return a.Ch()},5)):a.Ch(Error("Waiting for session status timed out."))},A1a=function(a,b,c){a.info("onConnectedScreenData_: Received screenData: "+
JSON.stringify(b));
var d=new s6(b);z1a(a,d,function(e){e?(a.va=!0,r8(a.B,d),u8(a,d),a.Y="unknown",x8(a,c)):(g.er(Error("CastSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online.")),a.Ch())},5)},v1a=function(a,b){g.Ar(a.Z);
a.Z=0;b?a.config_.enableCastLoungeToken&&b.loungeToken?b.deviceId?a.getScreen()&&a.getScreen().uuid==b.deviceId||(b.loungeTokenRefreshIntervalMs?A1a(a,{name:a.j.friendlyName,screenId:b.screenId,loungeToken:b.loungeToken,dialId:b.deviceId,screenIdType:"shortLived"},b.loungeTokenRefreshIntervalMs):(g.er(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: "+JSON.stringify(b)+".")),y8(a,b.screenId))):(g.er(Error("No device id presents in mdxSessionStatusData: "+JSON.stringify(b)+
".")),y8(a,b.screenId)):y8(a,b.screenId):a.Ch(Error("Waiting for session status timed out."))},y1a=function(a,b){g.Ar(a.D);
a.D=0;var c=null;if(b)if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";else c="noLoungeTokenResponse";c?(a.info("Did not receive a new lounge token in onLoungeToken_ with data: "+(JSON.stringify(b)+", error: "+c)),a.Y=c,x8(a,3E4)):(u1a(a,b.loungeToken),a.va=!1,a.Y="unknown",x8(a,b.loungeTokenRefreshIntervalMs))},z1a=function(a,b,c,d){g.Ar(a.J);
a.J=0;r1a(a.B,b,function(e){e||0>d?c(e):a.J=g.ur(function(){z1a(a,b,c,d-1)},300)})},B1a=function(a){g.Ar(a.S);
a.S=0;g.Ar(a.J);a.J=0;g.Ar(a.Z);a.Z=0;g.Ar(a.D);a.D=0;g.Ar(a.K);a.K=0},z8=function(a,b,c,d){t8.call(this,a,b,"DialSession");
this.config_=d;this.u=this.S=null;this.ra="";this.La=c;this.Ia=null;this.Z=function(){};
this.Y=NaN;this.Ga=(0,g.Qa)(this.IS,this);this.D=function(){};
this.K=this.J=0;this.ma=!1;this.va="unknown"},A8=function(a){var b;
return!!(a.config_.enableDialLoungeToken&&(null==(b=a.u)?0:b.getDialAppInfo))},C1a=function(a){a.D=a.B.mK(a.ra,a.j.label,a.j.friendlyName,A8(a),function(b,c){a.D=function(){};
a.ma=!0;u8(a,b);"shortLived"==b.idType&&0<c&&B8(a,c)},function(b){a.D=function(){};
a.Ch(b)})},D1a=function(a){var b={};
b.pairingCode=a.ra;b.theme=a.La;v_a()&&(b.env_useStageMdx=1);return g.sj(b)},C8=function(a){return new Promise(function(b){a.ra=w6();
if(a.Ia){var c=new chrome.cast.DialLaunchResponse(!0,D1a(a));b(c);C1a(a)}else a.Z=function(){g.Ar(a.Y);a.Z=function(){};
a.Y=NaN;var d=new chrome.cast.DialLaunchResponse(!0,D1a(a));b(d);C1a(a)},a.Y=g.ur(function(){a.Z()},100)})},F1a=function(a,b,c){a.info("initOnConnectedScreenDataPromise_: Received screenData: "+JSON.stringify(b));
var d=new s6(b);return(new Promise(function(e){E1a(a,d,function(f){f?(a.ma=!0,r8(a.B,d),u8(a,d),B8(a,c)):g.er(Error("DialSession, RemoteScreen from screenData: "+JSON.stringify(b)+" is not online."));e(f)},5)})).then(function(e){return e?new chrome.cast.DialLaunchResponse(!1):C8(a)})},G1a=function(a,b){var c=a.S.receiver.label,d=a.j.friendlyName;
return(new Promise(function(e){p1a(a.B,c,b,d,function(f){f&&f.token&&u8(a,f);e(f)},function(f){v8(a,"Failed to get DIAL screen: "+f);
e(null)})})).then(function(e){return e&&e.token?new chrome.cast.DialLaunchResponse(!1):C8(a)})},E1a=function(a,b,c,d){g.Ar(a.J);
a.J=0;r1a(a.B,b,function(e){e||0>d?c(e):a.J=g.ur(function(){E1a(a,b,c,d-1)},300)})},B8=function(a,b){a.info("getDialAppInfoWithTimeout_ "+b);
A8(a)&&(g.Ar(a.K),a.K=0,0==b?H1a(a):a.K=g.ur(function(){H1a(a)},b))},H1a=function(a){A8(a)&&a.u.getDialAppInfo(function(b){a.info("getDialAppInfo dialLaunchData: "+JSON.stringify(b));
b=b.extraData||{};var c=null;if(b.loungeToken){var d;(null==(d=a.getScreen())?void 0:d.token)==b.loungeToken&&(c="staleLoungeToken")}else c="missingLoungeToken";c?(a.va=c,B8(a,3E4)):(a.ma=!1,a.va="unknown",u1a(a,b.loungeToken),B8(a,b.loungeTokenRefreshIntervalMs))},function(b){a.info("getDialAppInfo error: "+b);
a.va="noLoungeTokenResponse";B8(a,3E4)})},I1a=function(a){g.Ar(a.J);
a.J=0;g.Ar(a.K);a.K=0;a.D();a.D=function(){};
g.Ar(a.Y)},D8=function(a,b){t8.call(this,a,b,"ManualSession");
this.u=g.ur((0,g.Qa)(this.Vu,this,null),150)},E8=function(a,b){g.lv.call(this);
this.config_=b;this.u=a;this.S=b.appId||"233637DE";this.C=b.theme||"cl";this.Y=b.disableCastApi||!1;this.J=b.forceMirroring||!1;this.j=null;this.K=!1;this.B=[];this.D=(0,g.Qa)(this.kZ,this)},J1a=function(a,b){return b?g.Pb(a.B,function(c){return t6(b,c.label)},a):null},F8=function(a){b8("Controller",a)},a1a=function(a){window.chrome&&chrome.cast&&chrome.cast.logMessage&&chrome.cast.logMessage(a)},G8=function(a){return a.K||!!a.B.length||!!a.j},H8=function(a,b,c){b!=a.j&&(g.nf(a.j),(a.j=b)?(c?a.ea("yt-remote-cast2-receiver-resumed",
b.j):a.ea("yt-remote-cast2-receiver-selected",b.j),b.subscribe("sessionScreen",(0,g.Qa)(a.PP,a,b)),b.subscribe("sessionFailed",function(){return K1a(a,b)}),b.getScreen()?a.ea("yt-remote-cast2-session-change",b.getScreen()):c&&a.j.Vu(null)):a.ea("yt-remote-cast2-session-change",null))},K1a=function(a,b){a.j==b&&a.ea("yt-remote-cast2-session-failed")},L1a=function(a){var b=a.u.lK(),c=a.j&&a.j.j;
a=g.Yl(b,function(d){c&&t6(d,c.label)&&(c=null);var e=d.uuid?d.uuid:d.id,f=J1a(this,d);f?(f.label=e,f.friendlyName=d.name):(f=new chrome.cast.Receiver(e,d.name),f.receiverType=chrome.cast.ReceiverType.CUSTOM);return f},a);
c&&(c.receiverType!=chrome.cast.ReceiverType.CUSTOM&&(c=new chrome.cast.Receiver(c.label,c.friendlyName),c.receiverType=chrome.cast.ReceiverType.CUSTOM),a.push(c));return a},Q1a=function(a,b,c,d){d.disableCastApi?I8("Cannot initialize because disabled by Mdx config."):M1a()?N1a(b,d)&&(J8(!0),window.chrome&&chrome.cast&&chrome.cast.isAvailable?O1a(a,c):(window.__onGCastApiAvailable=function(e,f){e?O1a(a,c):(K8("Failed to load cast API: "+f),L8(!1),J8(!1),g.lw("yt-remote-cast-available"),g.lw("yt-remote-cast-receiver"),
P1a(),c(!1))},d.loadCastApiSetupScript?g.nw("https://web.archive.org/web/20220430003241/https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"):0<=window.navigator.userAgent.indexOf("Android")&&0<=window.navigator.userAgent.indexOf("Chrome/")&&window.navigator.presentation?60<=F6()&&C_a():!window.chrome||!window.navigator.presentation||0<=window.navigator.userAgent.indexOf("Edge")?H6():89<=F6()?E_a():(I6(),G6(D_a.map(z_a))))):I8("Cannot initialize because not running Chrome")},P1a=function(){I8("dispose");
var a=M8();a&&a.dispose();g.Ha("yt.mdx.remote.cloudview.instance_",null);R1a(!1);g.Mu(N8);N8.length=0},O8=function(){return!!g.kw("yt-remote-cast-installed")},S1a=function(){var a=g.kw("yt-remote-cast-receiver");
return a?a.friendlyName:null},T1a=function(){I8("clearCurrentReceiver");
g.lw("yt-remote-cast-receiver")},U1a=function(){return O8()?M8()?M8().getCastSession():(K8("getCastSelector: Cast is not initialized."),null):(K8("getCastSelector: Cast API is not installed!"),null)},Q8=function(){O8()?M8()?P8()?(I8("Requesting cast selector."),M8().requestSession()):(I8("Wait for cast API to be ready to request the session."),N8.push(g.Lu("yt-remote-cast2-api-ready",Q8))):K8("requestCastSelector: Cast is not initialized."):K8("requestCastSelector: Cast API is not installed!")},R8=
function(a,b){P8()?M8().setConnectedScreenStatus(a,b):K8("setConnectedScreenStatus called before ready.")},M1a=function(){var a=0<=g.qb().search(/ (CrMo|Chrome|CriOS)\//);
return g.pA||a},V1a=function(a,b){M8().init(a,b)},N1a=function(a,b){var c=!1;
M8()||(a=new E8(a,b),a.subscribe("yt-remote-cast2-availability-change",function(d){g.jw("yt-remote-cast-available",d);q6("yt-remote-cast2-availability-change",d)}),a.subscribe("yt-remote-cast2-receiver-selected",function(d){I8("onReceiverSelected: "+d.friendlyName);
g.jw("yt-remote-cast-receiver",d);q6("yt-remote-cast2-receiver-selected",d)}),a.subscribe("yt-remote-cast2-receiver-resumed",function(d){I8("onReceiverResumed: "+d.friendlyName);
g.jw("yt-remote-cast-receiver",d);q6("yt-remote-cast2-receiver-resumed",d)}),a.subscribe("yt-remote-cast2-session-change",function(d){I8("onSessionChange: "+u6(d));
d||g.lw("yt-remote-cast-receiver");q6("yt-remote-cast2-session-change",d)}),g.Ha("yt.mdx.remote.cloudview.instance_",a),c=!0);
I8("cloudview.createSingleton_: "+c);return c},M8=function(){return g.Ia("yt.mdx.remote.cloudview.instance_")},O1a=function(a,b){L8(!0);
J8(!1);V1a(a,function(c){c?(R1a(!0),g.Nu("yt-remote-cast2-api-ready")):(K8("Failed to initialize cast API."),L8(!1),g.lw("yt-remote-cast-available"),g.lw("yt-remote-cast-receiver"),P1a());b(c)})},I8=function(a){b8("cloudview",a)},K8=function(a){b8("cloudview",a)},L8=function(a){I8("setCastInstalled_ "+a);
g.jw("yt-remote-cast-installed",a)},P8=function(){return!!g.Ia("yt.mdx.remote.cloudview.apiReady_")},R1a=function(a){I8("setApiReady_ "+a);
g.Ha("yt.mdx.remote.cloudview.apiReady_",a)},J8=function(a){g.Ha("yt.mdx.remote.cloudview.initializing_",a)},S8=function(a){this.index=-1;
this.videoId=this.listId="";this.volume=this.playerState=-1;this.muted=!1;this.audioTrackId=null;this.J=this.K=0;this.trackData=null;this.hasNext=this.jm=!1;this.S=this.D=this.j=this.C=0;this.B=NaN;this.u=!1;this.reset(a)},T8=function(a){a.audioTrackId=null;
a.trackData=null;a.playerState=-1;a.jm=!1;a.hasNext=!1;a.K=0;a.J=g.Ta();a.C=0;a.j=0;a.D=0;a.S=0;a.B=NaN;a.u=!1},U8=function(a){return a.Nc()?(g.Ta()-a.J)/1E3:0},V8=function(a,b){a.K=b;
a.J=g.Ta()},W8=function(a){switch(a.playerState){case 1:case 1081:return(g.Ta()-a.J)/1E3+a.K;
case -1E3:return 0}return a.K},X8=function(a,b,c){var d=a.videoId;
a.videoId=b;a.index=c;b!=d&&T8(a)},Y8=function(a){var b={};
b.index=a.index;b.listId=a.listId;b.videoId=a.videoId;b.playerState=a.playerState;b.volume=a.volume;b.muted=a.muted;b.audioTrackId=a.audioTrackId;b.trackData=g.Vf(a.trackData);b.hasPrevious=a.jm;b.hasNext=a.hasNext;b.playerTime=a.K;b.playerTimeAt=a.J;b.seekableStart=a.C;b.seekableEnd=a.j;b.duration=a.D;b.loadedTime=a.S;b.liveIngestionTime=a.B;return b},$8=function(a,b){g.lv.call(this);
this.B=0;this.C=a;this.J=[];this.D=new V0a;this.u=this.j=null;this.Y=(0,g.Qa)(this.XX,this);this.K=(0,g.Qa)(this.Qy,this);this.S=(0,g.Qa)(this.WX,this);this.Z=(0,g.Qa)(this.aY,this);var c=0;a?(c=a.getProxyState(),3!=c&&(a.subscribe("proxyStateChange",this.aJ,this),W1a(this))):c=3;0!=c&&(b?this.aJ(c):g.ur((0,g.Qa)(function(){this.aJ(c)},this),0));
(a=U1a())&&Z8(this,a);this.subscribe("yt-remote-cast2-session-change",this.Z)},a9=function(a){return new S8(a.C.getPlayerContextData())},W1a=function(a){g.lc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "),function(b){this.J.push(this.C.subscribe(b,g.Ra(this.iZ,b),this))},a)},X1a=function(a){g.lc(a.J,function(b){this.C.unsubscribeByKey(b)},a);
a.J.length=0},b9=function(a){return 1==a.getState()},c9=function(a,b){var c=a.D;
50>c.j.length+c.u.length&&a.D.enqueue(b)},e9=function(a,b,c){var d=a9(a);
V8(d,c);-1E3!=d.playerState&&(d.playerState=b);d9(a,d)},f9=function(a,b,c){a.C.sendMessage(b,c)},d9=function(a,b){X1a(a);
a.C.setPlayerContextData(Y8(b));W1a(a)},Z8=function(a,b){a.u&&(a.u.removeUpdateListener(a.Y),a.u.removeMediaListener(a.K),a.Qy(null));
a.u=b;a.u&&(c8("Setting cast session: "+a.u.sessionId),a.u.addUpdateListener(a.Y),a.u.addMediaListener(a.K),a.u.media.length&&a.Qy(a.u.media[0]))},Y1a=function(a){var b=a.j.media,c=a.j.customData;
if(b&&c){var d=a9(a);b.contentId!=d.videoId&&c8("Cast changing video to: "+b.contentId);d.videoId=b.contentId;d.playerState=c.playerState;V8(d,a.j.getEstimatedTime());d9(a,d)}else c8("No cast media video. Ignoring state update.")},g9=function(a,b,c){return(0,g.Qa)(function(d){this.bf("Failed to "+b+" with cast v2 channel. Error code: "+d.code);
d.code!=chrome.cast.ErrorCode.TIMEOUT&&(this.bf("Retrying "+b+" using MDx browser channel."),f9(this,b,c))},a)},j9=function(a,b,c,d){d=void 0===d?!1:d;
g.lv.call(this);var e=this;this.J=NaN;this.ra=!1;this.Y=this.S=this.ma=this.va=NaN;this.Z=[];this.D=this.K=this.C=this.j=this.u=null;this.Ia=a;this.Ga=d;this.Z.push(g.ru(window,"beforeunload",function(){e.uu(2)}));
this.B=[];this.j=new S8;this.La=b.id;this.Aa=b.idType;this.u=$0a(this.Ia,c,this.qK,"shortLived"==this.Aa,this.La);this.u.Ma("channelOpened",function(){Z1a(e)});
this.u.Ma("channelClosed",function(){h9("Channel closed");isNaN(e.J)?D6(!0):D6();e.dispose()});
this.u.Ma("channelError",function(f){D6();isNaN(e.Ux())?(1==f&&"shortLived"==e.Aa&&e.ea("browserChannelAuthError",f),h9("Channel error: "+f+" without reconnection"),e.dispose()):(e.ra=!0,h9("Channel error: "+f+" with reconnection in "+e.Ux()+" ms"),i9(e,2))});
this.u.Ma("channelMessage",function(f){$1a(e,f)});
this.u.qo(b.token);this.subscribe("remoteQueueChange",function(){var f=e.j.videoId;g.mw()&&g.jw("yt-remote-session-video-id",f)})},a2a=function(a){return g.Pb(a.B,function(b){return"LOUNGE_SCREEN"==b.type})},h9=function(a){b8("conn",a)},i9=function(a,b){a.ea("proxyStateChange",b)},b2a=function(a){a.J=g.ur(function(){h9("Connecting timeout");
a.uu(1)},2E4)},k9=function(a){g.Ar(a.J);
a.J=NaN},l9=function(a){g.Ar(a.va);
a.va=NaN},c2a=function(a){m9(a);
a.ma=g.ur(function(){n9(a,"getNowPlaying")},2E4)},m9=function(a){g.Ar(a.ma);
a.ma=NaN},Z1a=function(a){h9("Channel opened");
a.ra&&(a.ra=!1,l9(a),a.va=g.ur(function(){h9("Timing out waiting for a screen.");a.uu(1)},15E3))},e2a=function(a,b){var c=null;
if(b){var d=a2a(a);d&&(c={clientName:d.clientName,deviceMake:d.brand,deviceModel:d.model,osVersion:d.osVersion})}g.Ha("yt.mdx.remote.remoteClient_",c);b&&(k9(a),l9(a));c=a.u.Nu()&&isNaN(a.J);b==c?b&&(i9(a,1),n9(a,"getSubtitlesTrack")):b?(a.zN()&&a.j.reset(),i9(a,1),n9(a,"getNowPlaying"),d2a(a)):a.uu(1)},f2a=function(a,b){var c=b.params.videoId;
delete b.params.videoId;c==a.j.videoId&&(g.Pf(b.params)?a.j.trackData=null:a.j.trackData=b.params,a.ea("remotePlayerChange"))},g2a=function(a,b,c){var d=b.params.videoId||b.params.video_id,e=parseInt(b.params.currentIndex,10);
a.j.listId=b.params.listId||a.j.listId;X8(a.j,d,e);a.ea("remoteQueueChange",c)},i2a=function(a,b){b.params=b.params||{};
g2a(a,b,"NOW_PLAYING_MAY_CHANGE");h2a(a,b);a.ea("autoplayDismissed")},h2a=function(a,b){var c=parseInt(b.params.currentTime||b.params.current_time,10);
V8(a.j,isNaN(c)?0:c);c=parseInt(b.params.state,10);c=isNaN(c)?-1:c;-1==c&&-1E3==a.j.playerState&&(c=-1E3);a.j.playerState=c;c=Number(b.params.loadedTime);a.j.S=isNaN(c)?0:c;a.j.bl(Number(b.params.duration));c=a.j;var d=Number(b.params.liveIngestionTime);c.B=d;c.u=isNaN(d)?!1:!0;c=a.j;d=Number(b.params.seekableStartTime);b=Number(b.params.seekableEndTime);c.C=isNaN(d)?0:d;c.j=isNaN(b)?0:b;1==a.j.playerState?c2a(a):m9(a);a.ea("remotePlayerChange")},j2a=function(a,b){if(-1E3!=a.j.playerState){var c=
1085;
switch(parseInt(b.params.adState,10)){case 1:c=1081;break;case 2:c=1084;break;case 0:c=1083}a.j.playerState=c;b=parseInt(b.params.currentTime,10);V8(a.j,isNaN(b)?0:b);a.ea("remotePlayerChange")}},k2a=function(a,b){var c="true"==b.params.muted;
a.j.volume=parseInt(b.params.volume,10);a.j.muted=c;a.ea("remotePlayerChange")},l2a=function(a,b){a.K=b.params.videoId;
a.ea("nowAutoplaying",parseInt(b.params.timeout,10))},m2a=function(a,b){a.K=b.params.videoId||null;
a.ea("autoplayUpNext",a.K)},n2a=function(a,b){a.D=b.params.autoplayMode;
a.ea("autoplayModeChange",a.D);"DISABLED"==a.D&&a.ea("autoplayDismissed")},o2a=function(a,b){var c="true"==b.params.hasNext;
a.j.jm="true"==b.params.hasPrevious;a.j.hasNext=c;a.ea("previousNextChange")},$1a=function(a,b){b=b.message;
b.params?h9("Received: action="+b.action+", params="+g.Zi(b.params)):h9("Received: action="+b.action+" {}");switch(b.action){case "loungeStatus":b=p6(b.params.devices);a.B=g.Yl(b,function(d){return new r6(d)});
b=!!g.Pb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
e2a(a,b);b=a.hO("mlm");a.ea("multiStateLoopEnabled",b);break;case "loungeScreenDisconnected":g.Yb(a.B,function(d){return"LOUNGE_SCREEN"==d.type});
e2a(a,!1);break;case "remoteConnected":var c=new r6(p6(b.params.device));g.Pb(a.B,function(d){return d.equals(c)})||c_a(a.B,c);
break;case "remoteDisconnected":c=new r6(p6(b.params.device));g.Yb(a.B,function(d){return d.equals(c)});
break;case "gracefulDisconnect":break;case "playlistModified":g2a(a,b,"QUEUE_MODIFIED");break;case "nowPlaying":i2a(a,b);break;case "onStateChange":h2a(a,b);break;case "onAdStateChange":j2a(a,b);break;case "onVolumeChanged":k2a(a,b);break;case "onSubtitlesTrackChanged":f2a(a,b);break;case "nowAutoplaying":l2a(a,b);break;case "autoplayDismissed":a.ea("autoplayDismissed");break;case "autoplayUpNext":m2a(a,b);break;case "onAutoplayModeChanged":n2a(a,b);break;case "onHasPreviousNextChanged":o2a(a,b);
break;case "requestAssistedSignIn":a.ea("assistedSignInRequested",b.params.authCode);break;case "onLoopModeChanged":a.ea("loopModeChange",b.params.loopMode);break;default:h9("Unrecognized action: "+b.action)}},d2a=function(a){g.Ar(a.Y);
a.Y=g.ur(function(){a.uu(1)},864E5)},n9=function(a,b,c){c?h9("Sending: action="+b+", params="+g.Zi(c)):h9("Sending: action="+b);
a.u.sendMessage(b,c)},o9=function(a){g8.call(this,"ScreenServiceProxy");
this.Hf=a;this.j=[];this.j.push(this.Hf.$_s("screenChange",(0,g.Qa)(this.MS,this)));this.j.push(this.Hf.$_s("onlineScreenChange",(0,g.Qa)(this.QY,this)))},s2a=function(a,b){u_a();
if(!E6||!E6.get("yt-remote-disable-remote-module-for-dev")){b=g.P("MDX_CONFIG")||b;n_a();C6();p9||(p9=new V7(b?b.loungeApiHost:void 0),v_a()&&(p9.j="/api/loungedev"));q9||(q9=g.Ia("yt.mdx.remote.deferredProxies_")||[],g.Ha("yt.mdx.remote.deferredProxies_",q9));p2a();var c=r9();if(!c){var d=new q8(p9,b?b.disableAutomaticScreenCache||!1:!1);g.Ha("yt.mdx.remote.screenService_",d);c=r9();var e={};b&&(e={appId:b.appId,disableDial:b.disableDial,theme:b.theme,loadCastApiSetupScript:b.loadCastApiSetupScript,
disableCastApi:b.disableCastApi,enableDialLoungeToken:b.enableDialLoungeToken,enableCastLoungeToken:b.enableCastLoungeToken,forceMirroring:b.forceMirroring});g.Ha("yt.mdx.remote.enableConnectWithInitialState_",b?b.enableConnectWithInitialState||!1:!1);Q1a(a,d,function(f){f?s9()&&R8(s9(),"YouTube TV"):d.subscribe("onlineScreenChange",function(){q6("yt-remote-receiver-availability-change")})},e)}b&&!g.Ia("yt.mdx.remote.initialized_")&&(g.Ha("yt.mdx.remote.initialized_",!0),t9("Initializing: "+g.Zi(b)),
u9.push(g.Lu("yt-remote-cast2-api-ready",function(){q6("yt-remote-api-ready")})),u9.push(g.Lu("yt-remote-cast2-availability-change",function(){q6("yt-remote-receiver-availability-change")})),u9.push(g.Lu("yt-remote-cast2-receiver-selected",function(){v9(null);
q6("yt-remote-auto-connect","cast-selector-receiver")})),u9.push(g.Lu("yt-remote-cast2-receiver-resumed",function(){q6("yt-remote-receiver-resumed","cast-selector-receiver")})),u9.push(g.Lu("yt-remote-cast2-session-change",q2a)),u9.push(g.Lu("yt-remote-connection-change",function(f){f?R8(s9(),"YouTube TV"):w9()||(R8(null,null),T1a())})),u9.push(g.Lu("yt-remote-cast2-session-failed",function(){q6("yt-remote-connection-failed")})),a=x9(),b.isAuto&&(a.id+="#dial"),e=b.capabilities||[],g.Q("desktop_enable_autoplay")&&
e.push("atp"),0<e.length&&(a.capabilities=e),a.name=b.device,a.app=b.app,(b=b.theme)&&(a.theme=b),t9(" -- with channel params: "+g.Zi(a)),a?(g.jw("yt-remote-session-app",a.app),g.jw("yt-remote-session-name",a.name)):(g.lw("yt-remote-session-app"),g.lw("yt-remote-session-name")),g.Ha("yt.mdx.remote.channelParams_",a),c.start(),s9()||r2a())}},t2a=function(){var a=r9().Hf.$_gos();
var b=y9();b&&z9()&&(x6(a,b)||a.push(b));return m_a(a)},A9=function(){var a=u2a();
!a&&O8()&&S1a()&&(a={key:"cast-selector-receiver",name:S1a()});return a},u2a=function(){var a=t2a(),b=y9();
b||(b=w9());return g.Pb(a,function(c){return b&&t6(b,c.key)?!0:!1})},y9=function(){var a=s9();
if(!a)return null;var b=r9().Ri();return y6(b,a)},q2a=function(a){t9("remote.onCastSessionChange_: "+u6(a));
if(a){var b=y9();if(b&&b.id==a.id){if(R8(b.id,"YouTube TV"),"shortLived"==a.idType&&(a=a.token))B9&&(B9.token=a),(b=z9())&&b.qo(a)}else b&&C9(),D9(a,1)}else z9()&&C9()},C9=function(){P8()?M8().stopSession():K8("stopSession called before API ready.");
var a=z9();a&&(a.disconnect(1),E9(null))},F9=function(){var a=z9();
return!!a&&3!=a.getProxyState()},t9=function(a){b8("remote",a)},r9=function(){if(!G9){var a=g.Ia("yt.mdx.remote.screenService_");
G9=a?new o9(a):null}return G9},s9=function(){return g.Ia("yt.mdx.remote.currentScreenId_")},v2a=function(a){g.Ha("yt.mdx.remote.currentScreenId_",a)},w2a=function(){return g.Ia("yt.mdx.remote.connectData_")},v9=function(a){g.Ha("yt.mdx.remote.connectData_",a)},z9=function(){return g.Ia("yt.mdx.remote.connection_")},E9=function(a){var b=z9();
v9(null);a||v2a("");g.Ha("yt.mdx.remote.connection_",a);q9&&(g.lc(q9,function(c){c(a)}),q9.length=0);
b&&!a?q6("yt-remote-connection-change",!1):!b&&a&&q6("yt-remote-connection-change",!0)},w9=function(){var a=g.mw();
if(!a)return null;var b=r9();if(!b)return null;b=b.Ri();return y6(b,a)},D9=function(a,b){s9();
y9()&&y9();if(H9)B9=a;else{v2a(a.id);var c=g.Ia("yt.mdx.remote.enableConnectWithInitialState_")||!1;a=new j9(p9,a,x9(),c);a.connect(b,w2a());a.subscribe("beforeDisconnect",function(d){q6("yt-remote-before-disconnect",d)});
a.subscribe("beforeDispose",function(){z9()&&(z9(),E9(null))});
a.subscribe("browserChannelAuthError",function(){var d=y9();d&&"shortLived"==d.idType&&(P8()?M8().handleBrowserChannelAuthError():K8("refreshLoungeToken called before API ready."))});
E9(a)}},r2a=function(){var a=w9();
a?(t9("Resume connection to: "+u6(a)),D9(a,0)):(D6(),T1a(),t9("Skipping connecting because no session screen found."))},p2a=function(){var a=x9();
if(g.Pf(a)){a=B6();var b=g.kw("yt-remote-session-name")||"",c=g.kw("yt-remote-session-app")||"";a={device:"REMOTE_CONTROL",id:a,name:b,app:c,mdxVersion:3};g.Ha("yt.mdx.remote.channelParams_",a)}},x9=function(){return g.Ia("yt.mdx.remote.channelParams_")||{}},I9=function(a,b,c){g.G.call(this);
var d=this;this.u=a;this.I=b;this.hc=c;this.events=new g.lA(this);this.Z=this.events.T(this.I,"onVolumeChange",function(e){x2a(d,e)});
this.D=!1;this.J=new g.aG(64);this.j=new g.L(this.bR,500,this);this.B=new g.L(this.cR,1E3,this);this.S=new K6(this.J0,0,this);this.C={};this.Y=new g.L(this.MR,1E3,this);this.K=new L6(this.seekTo,1E3,this);g.H(this,this.events);this.events.T(b,"onCaptionsTrackListChanged",this.AY);this.events.T(b,"captionschanged",this.UX);this.events.T(b,"captionssettingschanged",this.jR);this.events.T(b,"videoplayerreset",this.zC);this.events.T(b,"mdxautoplaycancel",function(){d.hc.UM()});
a=this.hc;a.isDisposed();a.subscribe("proxyStateChange",this.MP,this);a.subscribe("remotePlayerChange",this.Vy,this);a.subscribe("remoteQueueChange",this.zC,this);a.subscribe("previousNextChange",this.JP,this);a.subscribe("nowAutoplaying",this.DP,this);a.subscribe("autoplayDismissed",this.hP,this);g.H(this,this.j);g.H(this,this.B);g.H(this,this.S);g.H(this,this.Y);g.H(this,this.K);this.jR();this.zC();this.Vy()},x2a=function(a,b){if(J9(a)){a.hc.unsubscribe("remotePlayerChange",a.Vy,a);
var c=Math.round(b.volume);b=!!b.muted;var d=a9(a.hc);if(c!==d.volume||b!==d.muted)a.hc.setVolume(c,b),a.Y.start();a.hc.subscribe("remotePlayerChange",a.Vy,a)}},y2a=function(a){a.Tb(0);
a.j.stop();a.Wb(new g.aG(64))},K9=function(a,b){if(J9(a)&&!a.D){var c=null;
b&&(c={style:a.I.getSubtitlesUserSettings()},g.Xf(c,b));a.hc.pK(a.I.getVideoData(1).videoId,c);a.C=a9(a.hc).trackData}},L9=function(a,b){var c=a.I.getPlaylist();
if(null==c?0:c.listId){var d=c.index;var e=c.listId.toString()}c=a.I.getVideoData(1);a.hc.playVideo(c.videoId,b,d,e,c.playerParams,c.ra,b_a(c));a.Wb(new g.aG(1))},z2a=function(a,b){if(b){var c=a.I.getOption("captions","tracklist",{ZN:1});
c&&c.length?(a.I.setOption("captions","track",b),a.D=!1):(a.I.loadModule("captions"),a.D=!0)}else a.I.setOption("captions","track",{})},J9=function(a){return a9(a.hc).videoId===a.I.getVideoData(1).videoId},M9=function(){g.V.call(this,{G:"div",
L:"ytp-mdx-popup-dialog",W:{role:"dialog"},U:[{G:"div",L:"ytp-mdx-popup-dialog-inner-content",U:[{G:"div",L:"ytp-mdx-popup-title",oa:"You're signed out"},{G:"div",L:"ytp-mdx-popup-description",oa:"Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."},{G:"div",L:"ytp-mdx-privacy-popup-buttons",U:[{G:"button",Ea:["ytp-button","ytp-mdx-privacy-popup-cancel"],oa:"Cancel"},{G:"button",Ea:["ytp-button",
"ytp-mdx-privacy-popup-confirm"],oa:"Confirm"}]}]}]});this.j=new g.JH(this,250);this.cancelButton=this.Ca("ytp-mdx-privacy-popup-cancel");this.confirmButton=this.Ca("ytp-mdx-privacy-popup-confirm");g.H(this,this.j);this.T(this.cancelButton,"click",this.u);this.T(this.confirmButton,"click",this.B)},N9=function(a){g.V.call(this,{G:"div",
L:"ytp-remote",U:[{G:"div",L:"ytp-remote-display-status",U:[{G:"div",L:"ytp-remote-display-status-icon",U:[g.eza()]},{G:"div",L:"ytp-remote-display-status-text",oa:"{{statustext}}"}]}]});this.api=a;this.j=new g.JH(this,250);g.H(this,this.j);this.T(a,"presentingplayerstatechange",this.onStateChange);A2a(this,a.yb())},A2a=function(a,b){if(3===a.api.getPresentingPlayerType()){var c={RECEIVER_NAME:a.api.getOption("remote","currentReceiver").name};
b=g.U(b,128)?g.JF("Error on $RECEIVER_NAME",c):b.Nc()||g.U(b,4)?g.JF("Playing on $RECEIVER_NAME",c):g.JF("Connected to $RECEIVER_NAME",c);a.Ka("statustext",b);a.j.show()}else a.j.hide()},O9=function(a,b){g.mN.call(this,"Play on",0,a,b);
this.I=a;this.gq={};this.T(a,"onMdxReceiversChange",this.D);this.T(a,"presentingplayerstatechange",this.D);this.D()},P9=function(a){g.dK.call(this,a);
this.xm={key:w6(),name:"This computer"};this.rj=null;this.subscriptions=[];this.rI=this.hc=null;this.gq=[this.xm];this.Xo=this.xm;this.Yd=new g.aG(64);this.uO=0;this.pg=-1;this.fz=!1;this.cz=this.zv=null;if(!g.xC(this.player.V())&&!g.yC(this.player.V())){a=this.player;var b=g.vJ(a);b&&(b=b.Ap())&&(b=new O9(a,b),g.H(this,b));b=new N9(a);g.H(this,b);g.QJ(a,b.element,4);this.zv=new M9;g.H(this,this.zv);g.QJ(a,this.zv.element,4);this.fz=!!w9()}},Q9=function(a){a.cz&&(a.player.removeEventListener("presentingplayerstatechange",
a.cz),a.cz=null)},B2a=function(a,b,c){a.Yd=c;
a.player.ea("presentingplayerstatechange",new g.vF(c,b))},R9=function(a,b){if(b.key!==a.Xo.key)if(b.key===a.xm.key)C9();
else{var c;(c=!a.player.V().N("mdx_enable_privacy_disclosure_ui"))||(c=((c=g.P("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!g.P("SESSION_INDEX")&&!g.P("LOGGED_IN")))||a.fz||!a.zv);(c?0:g.PC(a.player.V())||g.SC(a.player.V()))&&C2a(a);a.Xo=b;if(!a.player.V().N("disable_mdx_connection_in_mdx_module_for_music_web")||!g.yC(a.player.V())){var d=a.player.getPlaylistId();c=a.player.getVideoData(1);var e=c.videoId;if(!d&&!e||(2===a.player.getAppState()||1===a.player.getAppState())&&a.player.V().N("should_clear_video_data_on_player_cued_unstarted"))a=
null;else{var f=a.player.getPlaylist();if(f){var k=[];for(var l=0;l<f.length;l++)k[l]=g.ZJ(f,l).videoId}else k=[e];f=a.player.getCurrentTime(1);a={videoIds:k,listId:d,videoId:e,playerParams:c.playerParams,clickTrackingParams:c.ra,index:Math.max(a.player.getPlaylistIndex(),0),currentTime:0===f?void 0:f};(c=b_a(c))&&(a.locationInfo=c)}t9("Connecting to: "+g.Zi(b));"cast-selector-receiver"==b.key?(v9(a||null),b=a||null,P8()?M8().setLaunchParams(b):K8("setLaunchParams called before ready.")):!a&&F9()&&
s9()==b.key?q6("yt-remote-connection-change",!0):(C9(),v9(a||null),a=r9().Ri(),(b=y6(a,b.key))&&D9(b,1))}}},C2a=function(a){a.player.yb().Nc()?a.player.pauseVideo():(a.cz=function(b){!a.fz&&g.xF(b,8)&&(a.player.pauseVideo(),Q9(a))},a.player.addEventListener("presentingplayerstatechange",a.cz));
a.zv&&a.zv.yd();z9()||(H9=!0)};
g.Aq.prototype.rp=g.ca(1,function(){return g.Zd(this,6)});
g.Yc.prototype.fA=g.ca(0,function(){var a=g.bd(this);return 4294967296*g.bd(this)+(a>>>0)});
var NZa,D2a=g.We(function(a,b,c){if(1!==a.u)return!1;g.D(b,c,g.cd(a.j));return!0},g.Xe),E2a=g.We(function(a,b,c,d){if(1!==a.u)return!1;
g.ne(b,c,d,g.cd(a.j));return!0},g.Xe),F2a=g.We(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.$c(a.j));return!0},g.Ye),G2a=g.We(function(a,b,c,d){if(0!==a.u)return!1;
g.ne(b,c,d,g.$c(a.j));return!0},g.Ye),H2a=g.We(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.ad(a.j));return!0},g.Ze),I2a=g.We(function(a,b,c,d){if(0!==a.u)return!1;
g.ne(b,c,d,g.ad(a.j));return!0},g.Ze),J2a=g.We(function(a,b,c){if(1!==a.u)return!1;
g.D(b,c,a.j.fA());return!0},function(a,b,c){PZa(a,c,g.Zd(b,c))}),K2a=g.We(function(a,b,c){if(1!==a.u&&2!==a.u)return!1;
b=g.ae(b,c);if(2==a.u){c=g.Yc.prototype.fA;var d=g.ad(a.j)>>>0;for(d=a.j.j+d;a.j.j<d;)b.push(c.call(a.j))}else b.push(a.j.fA());return!0},function(a,b,c){b=g.ae(b,c);
if(null!=b)for(var d=0;d<b.length;d++)PZa(a,c,b[d])}),L2a=g.We(function(a,b,c){if(0!==a.u)return!1;
g.D(b,c,g.dd(a.j));return!0},QZa),M2a=g.We(function(a,b,c,d){if(0!==a.u)return!1;
g.ne(b,c,d,g.dd(a.j));return!0},QZa),N2a=g.We(function(a,b,c){if(2!==a.u)return!1;
a=g.qd(a);g.he(b,c,a);return!0},function(a,b,c){b=g.ae(b,c);
if(null!=b)for(var d=0;d<b.length;d++){var e=b[d];null!=e&&g.Ed(a,c,g.db(e))}}),O2a=g.We(function(a,b,c,d){if(2!==a.u)return!1;
g.ne(b,c,d,g.qd(a));return!0},g.$e),P2a=g.We(function(a,b,c,d,e){if(2!==a.u)return!1;
g.nd(a,g.oe(b,d,c),e);return!0},g.af),SZa=[1];
g.w(TZa,g.F);g.w(UZa,g.F);var Q2a=[TZa,1,g.v_,[UZa,1,D2a,2,F2a]];g.w(VZa,g.F);g.w(WZa,g.F);g.w(XZa,g.F);
var R2a=[1,2],S2a=[g.Li,1,g.u_,5,J2a,2,P2a,[VZa,1,g.w_,[WZa,1,g.u_,2,g.u_,3,L2a],R2a,2,g.w_,[XZa,1,g.u_,2,g.u_,3,H2a,4,L2a],R2a],3,N2a,6,K2a,4,g.v_,[g.Mi,1,g.v_,[g.Ni,1,O2a,g.Qi,2,I2a,g.Qi,3,M2a,g.Qi],2,P2a,[g.Oi,1,G2a,g.Pi,2,E2a,g.Pi,3,g.w_,Q2a,g.Pi]]],A0a={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},B7={"'":"\\'"},i_a={v2:"atp",gfa:"ska",Fda:"que",tba:"mus",ffa:"sus",R7:"dsp",hea:"seq",Taa:"mic",J6:"dpa",M2:"cds",qba:"mlm",
G6:"dsdtr",Zba:"ntb"};r6.prototype.equals=function(a){return a?this.id==a.id:!1};
var E6,A6="",B_a=w_a("loadCastFramework")||w_a("loadCastApplicationFramework"),D_a=["pkedcjkdefgpdelpbcmbmeomcjbeemfm","enhhojjnijigcajfphajepfemndkmdlo"];/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
g.Ua(K6,g.G);g.h=K6.prototype;g.h.jU=function(a){this.C=arguments;this.j=!1;this.vc?this.B=g.Ta()+this.Yg:this.vc=g.Ii(this.D,this.Yg)};
g.h.stop=function(){this.vc&&(g.C.clearTimeout(this.vc),this.vc=null);this.B=null;this.j=!1;this.C=[]};
g.h.pause=function(){++this.u};
g.h.resume=function(){this.u&&(--this.u,!this.u&&this.j&&(this.j=!1,this.J.apply(null,this.C)))};
g.h.qa=function(){this.stop();K6.Ke.qa.call(this)};
g.h.kU=function(){this.vc&&(g.C.clearTimeout(this.vc),this.vc=null);this.B?(this.vc=g.Ii(this.D,this.B-g.Ta()),this.B=null):this.u?this.j=!0:(this.j=!1,this.J.apply(null,this.C))};g.w(L6,g.G);g.h=L6.prototype;g.h.uE=function(a){this.B=arguments;this.vc||this.u?this.j=!0:M6(this)};
g.h.stop=function(){this.vc&&(g.C.clearTimeout(this.vc),this.vc=null,this.j=!1,this.B=null)};
g.h.pause=function(){this.u++};
g.h.resume=function(){this.u--;this.u||!this.j||this.vc||(this.j=!1,M6(this))};
g.h.qa=function(){g.G.prototype.qa.call(this);this.stop()};N6.prototype.stringify=function(a){return g.C.JSON.stringify(a,void 0)};
N6.prototype.parse=function(a){return g.C.JSON.parse(a,void 0)};g.Ua(O6,g.qf);g.Ua(P6,g.qf);var K_a=!1;var M_a=null;g.Ua(N_a,g.qf);g.Ua(O_a,g.qf);g.Ua(P_a,g.qf);U6.prototype.info=function(){};
U6.prototype.warning=function(){};var Z6={},Y6={};g.h=V6.prototype;g.h.setTimeout=function(a){this.ob=a};
g.h.nU=function(a){a=a.target;var b=this.Ua;b&&3==g.Cj(a)?b.uE():this.cL(a)};
g.h.cL=function(a){try{if(a==this.j)a:{var b=g.Cj(this.j),c=this.j.u,d=this.j.getStatus();if(!(3>b)&&(3!=b||g.WC||this.j&&(this.u.u||g.Ej(this.j)||g.Fj(this.j)))){this.Ga||4!=b||7==c||(8==c||0>=d?R6(3):R6(2));c7(this);var e=this.j.getStatus();this.Kb=e;b:if(T_a(this)){var f=g.Fj(this.j);a="";var k=f.length,l=4==g.Cj(this.j);if(!this.u.B){if("undefined"===typeof TextDecoder){a7(this);b7(this);var m="";break b}this.u.B=new g.C.TextDecoder}for(c=0;c<k;c++)this.u.u=!0,a+=this.u.B.decode(f[c],{stream:l&&
c==k-1});f.splice(0,k);this.u.j+=a;this.Z=0;m=this.u.j}else m=g.Ej(this.j);if(this.B=200==e){if(this.Vb&&!this.Ta){b:{if(this.j){var n=g.Gj(this.j,"X-HTTP-Initial-Response");if(n&&!g.ib(n)){var p=n;break b}}p=null}if(e=p)this.Ta=!0,$6(this,e);else{this.B=!1;this.J=3;S6(12);a7(this);b7(this);break a}}this.Aa?(V_a(this,b,m),g.WC&&this.B&&3==b&&(this.gb.Ma(this.ib,"tick",this.mU),this.ib.start())):$6(this,m);4==b&&a7(this);this.B&&!this.Ga&&(4==b?X_a(this.D,this):(this.B=!1,X6(this)))}else 400==e&&0<
m.indexOf("Unknown SID")?(this.J=3,S6(12)):(this.J=0,S6(13)),a7(this),b7(this)}}}catch(q){}finally{}};
g.h.mU=function(){if(this.j){var a=g.Cj(this.j),b=g.Ej(this.j);this.Z<b.length&&(c7(this),V_a(this,a,b),this.B&&4!=a&&X6(this))}};
g.h.cancel=function(){this.Ga=!0;a7(this)};
g.h.lU=function(){this.Y=null;var a=Date.now();0<=a-this.Ib?(2!=this.La&&(R6(3),S6(17)),a7(this),this.J=2,b7(this)):W_a(this,this.Ib-a)};
g.h.getLastError=function(){return this.J};b0a.prototype.cancel=function(){this.B=l7(this);if(this.u)this.u.cancel(),this.u=null;else if(this.j&&0!==this.j.size){for(var a=g.r(this.j.values()),b=a.next();!b.done;b=a.next())b.value.cancel();this.j.clear()}};g.h=g0a.prototype;g.h.dL=8;g.h.ag=1;g.h.connect=function(a,b,c,d){this.qf&&g.vi((0,g.Qa)(this.P_,this,a));S6(0);this.zc=a;this.Ga=b||{};c&&void 0!==d&&(this.Ga.OSID=c,this.Ga.OAID=d);this.ib=this.Ec;this.Ia=Y_a(this,null,this.zc);k7(this)};
g.h.disconnect=function(){h0a(this);if(3==this.ag){var a=this.Ua++,b=this.Ia.clone();g.Rk(b,"SID",this.C);g.Rk(b,"RID",a);g.Rk(b,"TYPE","terminate");p7(this,b);a=new V6(this,this.C,a);a.La=2;a.K=m6(b.clone());b=!1;g.C.navigator&&g.C.navigator.sendBeacon&&(b=g.C.navigator.sendBeacon(a.K.toString(),""));!b&&g.C.Image&&((new Image).src=a.K,b=!0);b||(a.j=S_a(a.D,null),a.j.send(a.K));a.va=Date.now();X6(a)}n0a(this)};
g.h.P_=function(a){try{L_a(a,function(){})}catch(b){}};
g.h.Jf=function(){return 0==this.ag};
g.h.getState=function(){return this.ag};
g.h.fL=function(a){if(this.J)if(this.J=null,1==this.ag){if(!a){this.Ua=Math.floor(1E5*Math.random());a=this.Ua++;var b=new V6(this,"",a),c=this.Y;this.Ib&&(c?(c=g.Uf(c),g.Xf(c,this.Ib)):c=this.Ib);null!==this.K||this.kb||(b.Ia=c,c=null);var d;if(this.ob)a:{for(var e=d=0;e<this.B.length;e++){b:{var f=this.B[e];if("__data__"in f.map&&(f=f.map.__data__,"string"===typeof f)){f=f.length;break b}f=void 0}if(void 0===f)break;d+=f;if(4096<d){d=e;break a}if(4096===d||e===this.B.length-1){d=e+1;break a}}d=
1E3}else d=1E3;d=k0a(this,b,d);e=this.Ia.clone();g.Rk(e,"RID",a);g.Rk(e,"CVER",22);this.Aa&&g.Rk(e,"X-HTTP-Session-Id",this.Aa);p7(this,e);c&&(this.kb?d="headers="+g.Bh(g.Dda(c))+"&"+d:this.K&&g.Vk(e,this.K,c));j7(this.u,b);this.cf&&g.Rk(e,"TYPE","init");this.ob?(g.Rk(e,"$req",d),g.Rk(e,"SID","null"),b.Vb=!0,W6(b,e,null)):W6(b,e,d);this.ag=2}}else 3==this.ag&&(a?l0a(this,a):0==this.B.length||c0a(this.u)||l0a(this))};
g.h.eL=function(){this.S=null;m0a(this);if(this.Oc&&!(this.gb||null==this.j||0>=this.hd)){var a=2*this.hd;this.ra=T6((0,g.Qa)(this.TX,this),a)}};
g.h.TX=function(){this.ra&&(this.ra=null,this.ib=!1,this.gb=!0,S6(10),f7(this),m0a(this))};
g.h.SH=function(a){this.j==a&&this.Oc&&!this.gb&&(o7(this),this.gb=!0,S6(11))};
g.h.oU=function(){null!=this.Z&&(this.Z=null,f7(this),g7(this),S6(19))};
g.h.s0=function(a){a?S6(2):S6(1)};
g.h.isActive=function(){return!!this.D&&this.D.isActive(this)};
g.h=p0a.prototype;g.h.jL=function(){};
g.h.iL=function(){};
g.h.hL=function(){};
g.h.gL=function(){};
g.h.isActive=function(){return!0};
g.h.pU=function(){};g.Ua(r7,g.ng);r7.prototype.open=function(){this.j.D=this.C;this.K&&(this.j.La=!0);this.j.connect(this.J,this.u||void 0)};
r7.prototype.close=function(){this.j.disconnect()};
r7.prototype.send=function(a){var b=this.j;if("string"===typeof a){var c={};c.__data__=a;a=c}else this.D&&(c={},c.__data__=g.Zi(a),a=c);b.B.push(new a0a(b.Pe++,a));3==b.ag&&k7(b)};
r7.prototype.qa=function(){this.j.D=null;delete this.C;this.j.disconnect();delete this.j;r7.Ke.qa.call(this)};
g.Ua(r0a,O6);g.Ua(s0a,P6);g.Ua(q7,p0a);q7.prototype.jL=function(){this.j.dispatchEvent("m")};
q7.prototype.iL=function(a){this.j.dispatchEvent(new r0a(a))};
q7.prototype.hL=function(a){this.j.dispatchEvent(new s0a(a))};
q7.prototype.gL=function(){this.j.dispatchEvent("n")};var t7=new g.ng;g.w(v0a,g.qf);g.h=v7.prototype;g.h.Gq=null;g.h.Pm=!1;g.h.Kt=null;g.h.wE=null;g.h.It=null;g.h.Jt=null;g.h.Io=null;g.h.Ko=null;g.h.Hq=null;g.h.kh=null;g.h.uA=0;g.h.ll=null;g.h.tA=null;g.h.Jo=null;g.h.Hw=-1;g.h.NQ=!0;g.h.Fq=!1;g.h.vE=0;g.h.sA=null;var y0a={},y7={};g.h=v7.prototype;g.h.setTimeout=function(a){this.u=a};
g.h.rU=function(a){a=a.target;var b=this.sA;b&&3==g.Cj(a)?b.uE():this.kL(a)};
g.h.kL=function(a){try{if(a==this.kh)a:{var b=g.Cj(this.kh),c=this.kh.u,d=this.kh.getStatus();if(g.Ec&&!g.tc(10)||g.uf&&!g.sc("420+")){if(4>b)break a}else if(3>b||3==b&&!g.Ej(this.kh))break a;this.Fq||4!=b||7==c||(8==c||0>=d?this.j.Rk(3):this.j.Rk(2));C7(this);var e=this.kh.getStatus();this.Hw=e;var f=g.Ej(this.kh);if(this.Pm=200==e){4==b&&z7(this);if(this.Aa){for(a=!0;!this.Fq&&this.uA<f.length;){var k=z0a(this,f);if(k==y7){4==b&&(this.Jo=4,u7(15),a=!1);break}else if(k==y0a){this.Jo=4;u7(16);a=!1;
break}else D7(this,k)}4==b&&0==f.length&&(this.Jo=1,u7(17),a=!1);this.Pm=this.Pm&&a;a||(z7(this),A7(this))}else D7(this,f);this.Pm&&!this.Fq&&(4==b?this.j.vA(this):(this.Pm=!1,x7(this)))}else 400==e&&0<f.indexOf("Unknown SID")?(this.Jo=3,u7(13)):(this.Jo=0,u7(14)),z7(this),A7(this)}}catch(l){}finally{}};
g.h.e_=function(a){s7((0,g.Qa)(this.d_,this,a),0)};
g.h.d_=function(a){this.Fq||(C7(this),D7(this,a),x7(this))};
g.h.RP=function(a){s7((0,g.Qa)(this.c_,this,a),0)};
g.h.c_=function(a){this.Fq||(z7(this),this.Pm=a,this.j.vA(this),this.j.Rk(4))};
g.h.cancel=function(){this.Fq=!0;z7(this)};
g.h.qU=function(){this.Kt=null;var a=Date.now();0<=a-this.wE?(2!=this.Jt&&this.j.Rk(3),z7(this),this.Jo=2,u7(18),A7(this)):C0a(this,this.wE-a)};
g.h.getLastError=function(){return this.Jo};g.h=F0a.prototype;g.h.yE=null;g.h.Oh=null;g.h.TC=!1;g.h.dR=null;g.h.hB=null;g.h.lH=null;g.h.zE=null;g.h.pj=null;g.h.Qm=-1;g.h.Iw=null;g.h.hx=null;g.h.connect=function(a){this.zE=a;a=F7(this.j,null,this.zE);u7(3);this.dR=Date.now();var b=this.j.S;null!=b?(this.Iw=b[0],(this.hx=b[1])?(this.pj=1,G0a(this)):(this.pj=2,H7(this))):(n6(a,"MODE","init"),this.Oh=new v7(this),this.Oh.Gq=this.yE,w7(this.Oh,a,!1,null,!0),this.pj=0)};
g.h.YU=function(a){if(a)this.pj=2,H7(this);else{u7(4);var b=this.j;b.Cl=b.Uo.Qm;O7(b,9)}a&&this.Rk(2)};
g.h.xE=function(a){return this.j.xE(a)};
g.h.abort=function(){this.Oh&&(this.Oh.cancel(),this.Oh=null);this.Qm=-1};
g.h.Jf=function(){return!1};
g.h.lL=function(a,b){this.Qm=a.Hw;if(0==this.pj)if(b){try{var c=this.u.parse(b)}catch(d){a=this.j;a.Cl=this.Qm;O7(a,2);return}this.Iw=c[0];this.hx=c[1]}else a=this.j,a.Cl=this.Qm,O7(a,2);else if(2==this.pj)if(this.TC)u7(7),this.lH=Date.now();else if("11111"==b){if(u7(6),this.TC=!0,this.hB=Date.now(),a=this.hB-this.dR,!g.Ec||g.tc(10)||500>a)this.Qm=200,this.Oh.cancel(),u7(12),G7(this.j,this,!0)}else u7(8),this.hB=this.lH=Date.now(),this.TC=!1};
g.h.vA=function(){this.Qm=this.Oh.Hw;if(this.Oh.Pm)0==this.pj?this.hx?(this.pj=1,G0a(this)):(this.pj=2,H7(this)):2==this.pj&&((!g.Ec||g.tc(10)?!this.TC:200>this.lH-this.hB)?(u7(11),G7(this.j,this,!1)):(u7(12),G7(this.j,this,!0)));else{0==this.pj?u7(9):2==this.pj&&u7(10);var a=this.j;this.Oh.getLastError();a.Cl=this.Qm;O7(a,2)}};
g.h.Jw=function(){return this.j.Jw()};
g.h.isActive=function(){return this.j.isActive()};
g.h.Rk=function(a){this.j.Rk(a)};g.h=I7.prototype;g.h.Bl=null;g.h.Kw=null;g.h.Xh=null;g.h.xf=null;g.h.AE=null;g.h.wA=null;g.h.mL=null;g.h.xA=null;g.h.Lw=0;g.h.tU=0;g.h.Qg=null;g.h.Lo=null;g.h.Rm=null;g.h.Jq=null;g.h.Uo=null;g.h.zD=null;g.h.Nt=-1;g.h.nL=-1;g.h.Cl=-1;g.h.Mt=0;g.h.Lt=0;g.h.Iq=8;g.Ua(I0a,g.qf);g.Ua(J0a,g.qf);g.h=I7.prototype;g.h.connect=function(a,b,c,d,e){u7(0);this.AE=b;this.Kw=c||{};d&&void 0!==e&&(this.Kw.OSID=d,this.Kw.OAID=e);this.K?(s7((0,g.Qa)(this.GM,this,a),100),K0a(this)):this.GM(a)};
g.h.disconnect=function(){L0a(this);if(3==this.j){var a=this.Lw++,b=this.wA.clone();g.Rk(b,"SID",this.C);g.Rk(b,"RID",a);g.Rk(b,"TYPE","terminate");M7(this,b);a=new v7(this,this.C,a);a.Jt=2;a.Io=m6(b.clone());RZa(new Image,a.Io.toString());a.It=Date.now();x7(a)}T0a(this)};
g.h.GM=function(a){this.Uo=new F0a(this);this.Uo.yE=this.Bl;this.Uo.u=this.D;this.Uo.connect(a)};
g.h.Jf=function(){return 0==this.j};
g.h.getState=function(){return this.j};
g.h.pL=function(a){this.Lo=null;P0a(this,a)};
g.h.oL=function(){this.Rm=null;this.xf=new v7(this,this.C,"rpc",this.J);this.xf.Gq=this.Bl;this.xf.vE=0;var a=this.mL.clone();g.Rk(a,"RID","rpc");g.Rk(a,"SID",this.C);g.Rk(a,"CI",this.zD?"0":"1");g.Rk(a,"AID",this.Nt);M7(this,a);if(!g.Ec||g.tc(10))g.Rk(a,"TYPE","xmlhttp"),w7(this.xf,a,!0,this.xA,!1);else{g.Rk(a,"TYPE","html");var b=this.xf,c=!!this.xA;b.Jt=3;b.Io=m6(a.clone());B0a(b,c)}};
g.h.lL=function(a,b){if(0!=this.j&&(this.xf==a||this.Xh==a))if(this.Cl=a.Hw,this.Xh==a&&3==this.j)if(7<this.Iq){try{var c=this.D.parse(b)}catch(d){c=null}if(Array.isArray(c)&&3==c.length)if(a=c,0==a[0])a:{if(!this.Rm){if(this.xf)if(this.xf.It+3E3<this.Xh.It)K7(this),this.xf.cancel(),this.xf=null;else break a;N7(this);u7(19)}}else this.nL=a[1],0<this.nL-this.Nt&&37500>a[2]&&this.zD&&0==this.Lt&&!this.Jq&&(this.Jq=s7((0,g.Qa)(this.uU,this),6E3));else O7(this,11)}else null!=b&&O7(this,11);else if(this.xf==
a&&K7(this),!g.ib(b))for(a=this.D.parse(b),b=0;b<a.length;b++)c=a[b],this.Nt=c[0],c=c[1],2==this.j?"c"==c[0]?(this.C=c[1],this.xA=c[2],c=c[3],null!=c?this.Iq=c:this.Iq=6,this.j=3,this.Qg&&this.Qg.sL(),this.mL=F7(this,this.Jw()?this.xA:null,this.AE),Q0a(this)):"stop"==c[0]&&O7(this,7):3==this.j&&("stop"==c[0]?O7(this,7):"noop"!=c[0]&&this.Qg&&this.Qg.rL(c),this.Lt=0)};
g.h.uU=function(){null!=this.Jq&&(this.Jq=null,this.xf.cancel(),this.xf=null,N7(this),u7(20))};
g.h.vA=function(a){if(this.xf==a){K7(this);this.xf=null;var b=2}else if(this.Xh==a)this.Xh=null,b=1;else return;this.Cl=a.Hw;if(0!=this.j)if(a.Pm)if(1==b){b=Date.now()-a.It;var c=t7;c.dispatchEvent(new I0a(c,a.Hq?a.Hq.length:0,b,this.Mt));J7(this);this.B.length=0}else Q0a(this);else{c=a.getLastError();var d;if(!(d=3==c||7==c||0==c&&0<this.Cl)){if(d=1==b)this.Xh||this.Lo||1==this.j||2<=this.Mt?d=!1:(this.Lo=s7((0,g.Qa)(this.pL,this,a),R0a(this,this.Mt)),this.Mt++,d=!0);d=!(d||2==b&&N7(this))}if(d)switch(c){case 1:O7(this,
5);break;case 4:O7(this,10);break;case 3:O7(this,6);break;case 7:O7(this,12);break;default:O7(this,2)}}};
g.h.sU=function(a){if(!g.Sb(arguments,this.j))throw Error("Unexpected channel state: "+this.j);};
g.h.r0=function(a){a?u7(2):(u7(1),S0a(this,8))};
g.h.xE=function(a){if(a)throw Error("Can't create secondary domain capable XhrIo object.");a=new g.zj;a.K=!1;return a};
g.h.isActive=function(){return!!this.Qg&&this.Qg.isActive(this)};
g.h.Rk=function(a){var b=t7;b.dispatchEvent(new J0a(b,a))};
g.h.Jw=function(){return!(!g.Ec||g.tc(10))};
g.h=U0a.prototype;g.h.sL=function(){};
g.h.rL=function(){};
g.h.qL=function(){};
g.h.BE=function(){};
g.h.tL=function(){return{}};
g.h.isActive=function(){return!0};g.h=V0a.prototype;g.h.enqueue=function(a){this.u.push(a)};
g.h.isEmpty=function(){return 0===this.j.length&&0===this.u.length};
g.h.clear=function(){this.j=[];this.u=[]};
g.h.contains=function(a){return g.Sb(this.j,a)||g.Sb(this.u,a)};
g.h.remove=function(a){var b=this.j;var c=(0,g.gRa)(b,a);0<=c?(g.Vb(b,c),b=!0):b=!1;return b||g.Xb(this.u,a)};
g.h.zj=function(){for(var a=[],b=this.j.length-1;0<=b;--b)a.push(this.j[b]);var c=this.u.length;for(b=0;b<c;++b)a.push(this.u[b]);return a};W0a.prototype.flush=function(a,b){a=void 0===a?[]:a;b=void 0===b?!1:b;if(g.Q("enable_client_streamz_web")){a=g.r(a);for(var c=a.next();!c.done;c=a.next())c=g.Uba(c.value),c={serializedIncrementBatch:g.wc(g.Ve(c,S2a))},g.Gs("streamzIncremented",c,{UI:b})}};var P7;g.w(Q7,g.qf);g.w(R7,g.qf);g.Ua(S7,g.G);g.h=S7.prototype;g.h.WZ=function(){this.Yg=Math.min(3E5,2*this.Yg);this.B();this.u&&this.start()};
g.h.start=function(){var a=this.Yg+15E3*Math.random();g.Ap(this.j,a);this.u=Date.now()+a};
g.h.stop=function(){this.j.stop();this.u=0};
g.h.isActive=function(){return this.j.isActive()};
g.h.reset=function(){this.j.stop();this.Yg=5E3};g.Ua(T7,U0a);g.h=T7.prototype;g.h.subscribe=function(a,b,c){return this.B.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.B.unsubscribe(a,b,c)};
g.h.Ag=function(a){return this.B.Ag(a)};
g.h.ea=function(a,b){return this.B.ea.apply(this.B,arguments)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.nf(this.B),this.disconnect(),g.nf(this.u),this.u=null,this.ma=function(){return""})};
g.h.isDisposed=function(){return this.Z};
g.h.connect=function(a,b,c){if(!this.j||2!=this.j.getState()){this.Y="";this.u.stop();this.J=a||null;this.D=b||0;a=this.va+"/test";b=this.va+"/bind";var d=new I7(c?c.firstTestResults:null,c?c.secondTestResults:null,this.Aa),e=this.j;e&&(e.Qg=null);d.Qg=this;this.j=d;U7(this);if(this.j){d=g.P("ID_TOKEN");var f=this.j.Bl||{};d?f["x-youtube-identity-token"]=d:delete f["x-youtube-identity-token"];this.j.Bl=f}e?(3!=e.getState()&&0==N0a(e)||e.getState(),this.j.connect(a,b,this.K,e.C,e.Nt)):c?this.j.connect(a,
b,this.K,c.sessionId,c.arrayId):this.j.connect(a,b,this.K)}};
g.h.disconnect=function(a){this.S=a||0;this.u.stop();U7(this);this.j&&(3==this.j.getState()&&P0a(this.j),this.j.disconnect());this.S=0};
g.h.sendMessage=function(a,b){a={_sc:a};b&&g.Xf(a,b);this.u.isActive()||2==(this.j?this.j.getState():0)?this.C.push(a):this.Nu()&&(U7(this),M0a(this.j,a))};
g.h.sL=function(){this.u.reset();this.J=null;this.D=0;if(this.C.length){var a=this.C;this.C=[];for(var b=0,c=a.length;b<c;++b)M0a(this.j,a[b])}this.ea("handlerOpened")};
g.h.qL=function(a){var b=2==a&&401==this.j.Cl;4==a||b||this.u.start();this.ea("handlerError",a,b)};
g.h.BE=function(a,b){if(!this.u.isActive())this.ea("handlerClosed");else if(b)for(var c=0,d=b.length;c<d;++c){var e=b[c].map;e&&this.C.push(e)}this.ra.j.vK("/client_streamz/youtube/living_room/mdx/browser_channel/closed_channels");a&&this.Ia.j.bE("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps",a.length);b&&this.La.j.bE("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps",b.length)};
g.h.tL=function(){var a={v:2};this.Y&&(a.gsessionid=this.Y);0!=this.D&&(a.ui=""+this.D);0!=this.S&&(a.ui=""+this.S);this.J&&g.Xf(a,this.J);return a};
g.h.rL=function(a){"S"==a[0]?this.Y=a[1]:"gracefulReconnect"==a[0]?(this.u.start(),this.j.disconnect()):this.ea("handlerMessage",new X0a(a[0],a[1]))};
g.h.Nu=function(){return!!this.j&&3==this.j.getState()};
g.h.qo=function(a){(this.K.loungeIdToken=a)||this.u.stop();if(this.Ga&&this.j){var b=this.j.Bl||{};a?b["X-YouTube-LoungeId-Token"]=a:delete b["X-YouTube-LoungeId-Token"];this.j.Bl=b}};
g.h.rp=function(){return this.K.id};
g.h.zp=function(){return this.u.isActive()?this.u.u-Date.now():NaN};
g.h.Cs=function(){var a=this.u;g.Bp(a.j);a.start()};
g.h.R_=function(){this.u.isActive();0==N0a(this.j)&&this.connect(this.J,this.D)};V7.prototype.C=function(a,b,c,d){b?a(d):a({text:c.responseText})};
V7.prototype.B=function(a,b){a(Error("Request error: "+b.status))};
V7.prototype.D=function(a){a(Error("request timed out"))};g.w(Y7,g.ng);g.h=Y7.prototype;g.h.connect=function(a,b,c){this.Qc.connect(a,b,c)};
g.h.disconnect=function(a){this.Qc.disconnect(a)};
g.h.Cs=function(){this.Qc.Cs()};
g.h.rp=function(){return this.Qc.rp()};
g.h.zp=function(){return this.Qc.zp()};
g.h.Nu=function(){return this.Qc.Nu()};
g.h.yS=function(){this.dispatchEvent("channelOpened");var a=this.Qc,b=this.j;g.jw("yt-remote-session-browser-channel",{firstTestResults:[""],secondTestResults:!a.j.zD,sessionId:a.j.C,arrayId:a.j.Nt});g.jw("yt-remote-session-screen-id",b);a=z6();b=B6();g.Sb(a,b)||a.push(b);p_a(a);C6()};
g.h.wS=function(){this.dispatchEvent("channelClosed")};
g.h.xS=function(a){this.dispatchEvent(new Q7(a))};
g.h.onError=function(a){this.dispatchEvent(new R7(a?1:0))};
g.h.sendMessage=function(a,b){this.Qc.sendMessage(a,b)};
g.h.qo=function(a){this.Qc.qo(a)};
g.h.dispose=function(){this.Qc.dispose()};g.h=Y0a.prototype;
g.h.connect=function(a,b){a=void 0===a?{}:a;b=void 0===b?0:b;2!==this.J&&(this.B.stop(),this.S=a,this.K=b,Z7(this),(a=g.P("ID_TOKEN"))?this.C["x-youtube-identity-token"]=a:delete this.C["x-youtube-identity-token"],this.j&&(this.u.device=this.j.device,this.u.name=this.j.name,this.u.app=this.j.app,this.u.id=this.j.id,this.j.aX&&(this.u.mdxVersion=""+this.j.aX),this.j.theme&&(this.u.theme=this.j.theme),this.j.capabilities&&(this.u.capabilities=this.j.capabilities)),0!==this.K?this.u.ui=""+this.K:delete this.u.ui,
Object.assign(this.u,this.S),this.channel=new r7(this.pathPrefix,{wW:"gsessionid",dX:this.C,eX:this.u}),this.channel.open(),this.J=2,Z0a(this))};
g.h.disconnect=function(a){this.Y=void 0===a?0:a;this.B.stop();Z7(this);this.channel&&(0!==this.Y?this.u.ui=""+this.Y:delete this.u.ui,this.channel.close());this.Y=0};
g.h.zp=function(){return this.B.isActive()?this.B.u-Date.now():NaN};
g.h.Cs=function(){var a=this.B;g.Bp(a.j);a.start()};
g.h.sendMessage=function(a,b){this.channel&&(Z7(this),a=Object.assign({},{_sc:a},b),this.channel.send(a))};
g.h.qo=function(a){a||this.B.stop();a?this.C["X-YouTube-LoungeId-Token"]=a:delete this.C["X-YouTube-LoungeId-Token"]};
g.h.rp=function(){return this.j?this.j.id:""};
g.h.ea=function(a){return this.D.ea.apply(this.D,[a].concat(g.v(g.Ba.apply(1,arguments))))};
g.h.subscribe=function(a,b,c){return this.D.subscribe(a,b,c)};
g.h.unsubscribe=function(a,b,c){return this.D.unsubscribe(a,b,c)};
g.h.Ag=function(a){return this.D.Ag(a)};
g.h.dispose=function(){this.Z||(this.Z=!0,g.nf(this.D),this.disconnect(),g.nf(this.B),this.ra=function(){return""})};
g.h.isDisposed=function(){return this.Z};g.w($7,g.ng);g.h=$7.prototype;g.h.connect=function(a,b){this.j.connect(a,b)};
g.h.disconnect=function(a){this.j.disconnect(a)};
g.h.Cs=function(){this.j.Cs()};
g.h.rp=function(){return this.j.rp()};
g.h.zp=function(){return this.j.zp()};
g.h.Nu=function(){return 3===this.j.J};
g.h.BS=function(){this.dispatchEvent("channelOpened")};
g.h.zS=function(){this.dispatchEvent("channelClosed")};
g.h.AS=function(a){this.dispatchEvent(new Q7(a))};
g.h.onError=function(){this.dispatchEvent(new R7(401===this.j.ma?1:0))};
g.h.sendMessage=function(a,b){this.j.sendMessage(a,b)};
g.h.qo=function(a){this.j.qo(a)};
g.h.dispose=function(){this.j.dispose()};var g1a=Date.now(),a8=null,e8=Array(50),d8=-1,f8=!1;g.Ua(g8,g.lv);g8.prototype.Ri=function(){return this.screens};
g8.prototype.contains=function(a){return!!x6(this.screens,a)};
g8.prototype.get=function(a){return a?y6(this.screens,a):null};
g8.prototype.info=function(a){b8(this.J,a)};g.w(h8,g.lv);g.h=h8.prototype;g.h.start=function(){!this.j&&isNaN(this.vc)&&this.eQ()};
g.h.stop=function(){this.j&&(this.j.abort(),this.j=null);isNaN(this.vc)||(g.Ar(this.vc),this.vc=NaN)};
g.h.qa=function(){this.stop();g.lv.prototype.qa.call(this)};
g.h.eQ=function(){this.vc=NaN;this.j=g.Dr(W7(this.B,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:this.K},timeout:5E3,onSuccess:(0,g.Qa)(this.DS,this),onError:(0,g.Qa)(this.CS,this),onTimeout:(0,g.Qa)(this.ES,this)})};
g.h.DS=function(a,b){this.j=null;a=b.screen||{};a.dialId=this.C;a.name=this.J;b=-1;this.D&&a.shortLivedLoungeToken&&a.shortLivedLoungeToken.value&&a.shortLivedLoungeToken.refreshIntervalMs&&(a.screenIdType="shortLived",a.loungeToken=a.shortLivedLoungeToken.value,b=a.shortLivedLoungeToken.refreshIntervalMs);this.ea("pairingComplete",new s6(a),b)};
g.h.CS=function(a){this.j=null;a.status&&404==a.status?this.u>=T2a.length?this.ea("pairingFailed",Error("DIAL polling timed out")):(a=T2a[this.u],this.vc=g.ur((0,g.Qa)(this.eQ,this),a),this.u++):this.ea("pairingFailed",Error("Server error "+a.status))};
g.h.ES=function(){this.j=null;this.ea("pairingFailed",Error("Server not responding"))};
var T2a=[2E3,2E3,1E3,1E3,1E3,2E3,2E3,5E3,5E3,1E4];g.Ua(j8,g8);g.h=j8.prototype;g.h.start=function(){i8(this)&&this.ea("screenChange");!g.kw("yt-remote-lounge-token-expiration")&&k1a(this);g.Ar(this.j);this.j=g.ur((0,g.Qa)(this.start,this),1E4)};
g.h.add=function(a,b){i8(this);h1a(this,a);k8(this,!1);this.ea("screenChange");b(a);a.token||k1a(this)};
g.h.remove=function(a,b){var c=i8(this);j1a(this,a)&&(k8(this,!1),c=!0);b(a);c&&this.ea("screenChange")};
g.h.xD=function(a,b,c,d){var e=i8(this),f=this.get(a.id);f?(f.name!=b&&(f.name=b,k8(this,!1),e=!0),c(a)):d(Error("no such local screen."));e&&this.ea("screenChange")};
g.h.qa=function(){g.Ar(this.j);j8.Ke.qa.call(this)};
g.h.XV=function(a){i8(this);var b=this.screens.length;a=a&&a.screens||[];for(var c=0,d=a.length;c<d;++c){var e=a[c],f=this.get(e.screenId);f&&(f.token=e.loungeToken,--b)}k8(this,!b);b&&b8(this.J,"Missed "+b+" lounge tokens.")};
g.h.WV=function(a){b8(this.J,"Requesting lounge tokens failed: "+a)};g.w(m8,g.lv);g.h=m8.prototype;g.h.start=function(){var a=parseInt(g.kw("yt-remote-fast-check-period")||"0",10);(this.C=g.Ta()-144E5<a?0:a)?p8(this):(this.C=g.Ta()+3E5,g.jw("yt-remote-fast-check-period",this.C),this.GI())};
g.h.isEmpty=function(){return g.Pf(this.j)};
g.h.update=function(){l8("Updating availability on schedule.");var a=this.J(),b=g.Bf(this.j,function(c,d){return c&&!!y6(a,d)},this);
o8(this,b)};
g.h.qa=function(){g.Ar(this.B);this.B=NaN;this.u&&(this.u.abort(),this.u=null);g.lv.prototype.qa.call(this)};
g.h.GI=function(){g.Ar(this.B);this.B=NaN;this.u&&this.u.abort();var a=m1a(this);if(o6(a)){var b=W7(this.D,"/pairing/get_screen_availability");this.u=X7(this.D,b,{lounge_token:g.If(a).join(",")},(0,g.Qa)(this.CZ,this,a),(0,g.Qa)(this.BZ,this))}else o8(this,{}),p8(this)};
g.h.CZ=function(a,b){this.u=null;var c=g.If(m1a(this));if(g.jc(c,g.If(a))){b=b.screens||[];c={};for(var d=0,e=b.length;d<e;++d)c[a[b[d].loungeToken]]="online"==b[d].status;o8(this,c);p8(this)}else this.bf("Changing Screen set during request."),this.GI()};
g.h.BZ=function(a){this.bf("Screen availability failed: "+a);this.u=null;p8(this)};
g.h.bf=function(a){b8("OnlineScreenService",a)};g.Ua(q8,g8);g.h=q8.prototype;g.h.start=function(){this.u.start();this.j.start();this.screens.length&&(this.ea("screenChange"),this.j.isEmpty()||this.ea("onlineScreenChange"))};
g.h.add=function(a,b,c){this.u.add(a,b,c)};
g.h.remove=function(a,b,c){this.u.remove(a,b,c);this.j.update()};
g.h.xD=function(a,b,c,d){this.u.contains(a)?this.u.xD(a,b,c,d):(a="Updating name of unknown screen: "+a.name,b8(this.J,a),d(Error(a)))};
g.h.Ri=function(a){return a?this.screens:g.Zb(this.screens,g.ao(this.B,function(b){return!this.contains(b)},this))};
g.h.lK=function(){return g.ao(this.Ri(!0),function(a){return!!this.j.j[a.id]},this)};
g.h.mK=function(a,b,c,d,e,f){var k=this;this.info("getDialScreenByPairingCode "+a+" / "+b);var l=new h8(this.C,a,b,c,d);l.subscribe("pairingComplete",function(m,n){g.nf(l);e(r8(k,m),n)});
l.subscribe("pairingFailed",function(m){g.nf(l);f(m)});
l.start();return(0,g.Qa)(l.stop,l)};
g.h.GS=function(a,b,c,d){g.Dr(W7(this.C,"/pairing/get_screen"),{method:"POST",postParams:{pairing_code:a},timeout:5E3,onSuccess:(0,g.Qa)(function(e,f){e=new s6(f.screen||{});if(!e.name||q1a(this,e.name)){a:{f=e.name;for(var k=2,l=b(f,k);q1a(this,l);){k++;if(20<k)break a;l=b(f,k)}f=l}e.name=f}c(r8(this,e))},this),
onError:(0,g.Qa)(function(e){d(Error("pairing request failed: "+e.status))},this),
onTimeout:(0,g.Qa)(function(){d(Error("pairing request timed out."))},this)})};
g.h.qa=function(){g.nf(this.u);g.nf(this.j);q8.Ke.qa.call(this)};
g.h.gW=function(){s1a(this);this.ea("screenChange");this.j.update()};
q8.prototype.dispose=q8.prototype.dispose;g.Ua(t8,g.lv);g.h=t8.prototype;g.h.getScreen=function(){return this.C};
g.h.Ch=function(a){this.isDisposed()||(a&&(v8(this,""+a),this.ea("sessionFailed")),this.C=null,this.ea("sessionScreen",null))};
g.h.info=function(a){b8(this.Aa,a)};
g.h.nK=function(){return null};
g.h.ZI=function(a){var b=this.j;a?(b.displayStatus=new chrome.cast.ReceiverDisplayStatus(a,[]),b.displayStatus.showStop=!0):b.displayStatus=null;chrome.cast.setReceiverDisplayStatus(b,(0,g.Qa)(function(){this.info("Updated receiver status for "+b.friendlyName+": "+a)},this),(0,g.Qa)(function(){v8(this,"Failed to update receiver status for: "+b.friendlyName)},this))};
g.h.qa=function(){this.ZI("");t8.Ke.qa.call(this)};g.w(w8,t8);g.h=w8.prototype;g.h.YI=function(a){if(this.u){if(this.u==a)return;v8(this,"Overriding cast session with new session object");B1a(this);this.va=!1;this.Y="unknown";this.u.removeUpdateListener(this.ma);this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra)}this.u=a;this.u.addUpdateListener(this.ma);this.u.addMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra);x1a(this,"getMdxSessionStatus")};
g.h.Vu=function(a){this.info("launchWithParams no-op for Cast: "+g.Zi(a))};
g.h.stop=function(){this.u?this.u.stop((0,g.Qa)(function(){this.Ch()},this),(0,g.Qa)(function(){this.Ch(Error("Failed to stop receiver app."))},this)):this.Ch(Error("Stopping cast device without session."))};
g.h.ZI=function(){};
g.h.qa=function(){this.info("disposeInternal");B1a(this);this.u&&(this.u.removeUpdateListener(this.ma),this.u.removeMessageListener("urn:x-cast:com.google.youtube.mdx",this.ra));this.u=null;t8.prototype.qa.call(this)};
g.h.o_=function(a,b){if(!this.isDisposed())if(b)if(b=p6(b),g.Ma(b))switch(a=""+b.type,b=b.data||{},this.info("onYoutubeMessage_: "+a+" "+g.Zi(b)),a){case "mdxSessionStatus":v1a(this,b);break;case "loungeToken":y1a(this,b);break;default:v8(this,"Unknown youtube message: "+a)}else v8(this,"Unable to parse message.");else v8(this,"No data in message.")};
g.h.AN=function(a,b,c,d){g.Ar(this.S);this.S=0;p1a(this.B,this.j.label,a,this.j.friendlyName,(0,g.Qa)(function(e){e?b(e):0<=d?(v8(this,"Screen "+a+" appears to be offline. "+d+" retries left."),this.S=g.ur((0,g.Qa)(this.AN,this,a,b,c,d-1),300)):c(Error("Unable to fetch screen."))},this),c)};
g.h.nK=function(){return this.u};
g.h.HS=function(a){this.isDisposed()||a||(v8(this,"Cast session died."),this.Ch())};g.w(z8,t8);g.h=z8.prototype;g.h.YI=function(a){this.u=a;this.u.addUpdateListener(this.Ga)};
g.h.Vu=function(a){this.Ia=a;this.Z()};
g.h.stop=function(){I1a(this);this.u?this.u.stop((0,g.Qa)(this.Ch,this,null),(0,g.Qa)(this.Ch,this,"Failed to stop DIAL device.")):this.Ch()};
g.h.qa=function(){I1a(this);this.u&&this.u.removeUpdateListener(this.Ga);this.u=null;t8.prototype.qa.call(this)};
g.h.IS=function(a){this.isDisposed()||a||(v8(this,"DIAL session died."),this.D(),this.D=function(){},this.Ch())};g.w(D8,t8);D8.prototype.stop=function(){this.Ch()};
D8.prototype.YI=function(){};
D8.prototype.Vu=function(){g.Ar(this.u);this.u=NaN;var a=y6(this.B.Ri(),this.j.label);a?u8(this,a):this.Ch(Error("No such screen"))};
D8.prototype.qa=function(){g.Ar(this.u);this.u=NaN;t8.prototype.qa.call(this)};g.w(E8,g.lv);g.h=E8.prototype;
g.h.init=function(a,b){chrome.cast.timeout.requestSession=3E4;var c=new chrome.cast.SessionRequest(this.S,[chrome.cast.Capability.AUDIO_OUT]);this.Y||(c.dialRequest=new chrome.cast.DialRequest("YouTube"));var d=chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;a=a||this.J?chrome.cast.DefaultActionPolicy.CAST_THIS_TAB:chrome.cast.DefaultActionPolicy.CREATE_SESSION;var e=(0,g.Qa)(this.nZ,this);c=new chrome.cast.ApiConfig(c,(0,g.Qa)(this.NP,this),e,d,a);c.customDialLaunchCallback=(0,g.Qa)(this.iY,this);
chrome.cast.initialize(c,(0,g.Qa)(function(){this.isDisposed()||(chrome.cast.addReceiverActionListener(this.D),d1a(),this.u.subscribe("onlineScreenChange",(0,g.Qa)(this.oK,this)),this.B=L1a(this),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(f){this.bf("Failed to set initial custom receivers: "+g.Zi(f))},this)),this.ea("yt-remote-cast2-availability-change",G8(this)),b(!0))},this),(0,g.Qa)(function(f){this.bf("Failed to initialize API: "+g.Zi(f));
b(!1)},this))};
g.h.V_=function(a,b){F8("Setting connected screen ID: "+a+" -> "+b);if(this.j){var c=this.j.getScreen();if(!a||c&&c.id!=a)F8("Unsetting old screen status: "+this.j.j.friendlyName),H8(this,null)}if(a&&b){if(!this.j){c=y6(this.u.Ri(),a);if(!c){F8("setConnectedScreenStatus: Unknown screen.");return}if("shortLived"==c.idType){F8("setConnectedScreenStatus: Screen with id type to be short lived.");return}a=J1a(this,c);a||(F8("setConnectedScreenStatus: Connected receiver not custom..."),a=new chrome.cast.Receiver(c.uuid?
c.uuid:c.id,c.name),a.receiverType=chrome.cast.ReceiverType.CUSTOM,this.B.push(a),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(d){this.bf("Failed to set initial custom receivers: "+g.Zi(d))},this)));
F8("setConnectedScreenStatus: new active receiver: "+a.friendlyName);H8(this,new D8(this.u,a),!0)}this.j.ZI(b)}else F8("setConnectedScreenStatus: no screen.")};
g.h.W_=function(a){this.isDisposed()?this.bf("Setting connection data on disposed cast v2"):this.j?this.j.Vu(a):this.bf("Setting connection data without a session")};
g.h.KS=function(){this.isDisposed()?this.bf("Stopping session on disposed cast v2"):this.j?(this.j.stop(),H8(this,null)):F8("Stopping non-existing session")};
g.h.requestSession=function(){chrome.cast.requestSession((0,g.Qa)(this.NP,this),(0,g.Qa)(this.FZ,this))};
g.h.qa=function(){this.u.unsubscribe("onlineScreenChange",(0,g.Qa)(this.oK,this));window.chrome&&chrome.cast&&chrome.cast.removeReceiverActionListener(this.D);var a=a1a,b=g.Ia("yt.mdx.remote.debug.handlers_");g.Xb(b||[],a);g.nf(this.j);g.lv.prototype.qa.call(this)};
g.h.bf=function(a){b8("Controller",a)};
g.h.PP=function(a,b){this.j==a&&(b||H8(this,null),this.ea("yt-remote-cast2-session-change",b))};
g.h.kZ=function(a,b){if(!this.isDisposed())if(a)switch(a.friendlyName=chrome.cast.unescape(a.friendlyName),F8("onReceiverAction_ "+a.label+" / "+a.friendlyName+"-- "+b),b){case chrome.cast.ReceiverAction.CAST:if(this.j)if(this.j.j.label!=a.label)F8("onReceiverAction_: Stopping active receiver: "+this.j.j.friendlyName),this.j.stop();else{F8("onReceiverAction_: Casting to active receiver.");this.j.getScreen()&&this.ea("yt-remote-cast2-session-change",this.j.getScreen());break}switch(a.receiverType){case chrome.cast.ReceiverType.CUSTOM:H8(this,
new D8(this.u,a));break;case chrome.cast.ReceiverType.DIAL:H8(this,new z8(this.u,a,this.C,this.config_));break;case chrome.cast.ReceiverType.CAST:H8(this,new w8(this.u,a,this.config_));break;default:this.bf("Unknown receiver type: "+a.receiverType)}break;case chrome.cast.ReceiverAction.STOP:this.j&&this.j.j.label==a.label?this.j.stop():this.bf("Stopping receiver w/o session: "+a.friendlyName)}else this.bf("onReceiverAction_ called without receiver.")};
g.h.iY=function(a){if(this.isDisposed())return Promise.reject(Error("disposed"));var b=a.receiver;b.receiverType!=chrome.cast.ReceiverType.DIAL&&(this.bf("Not DIAL receiver: "+b.friendlyName),b.receiverType=chrome.cast.ReceiverType.DIAL);var c=this.j?this.j.j:null;if(!c||c.label!=b.label)return this.bf("Receiving DIAL launch request for non-clicked DIAL receiver: "+b.friendlyName),Promise.reject(Error("illegal DIAL launch"));if(c&&c.label==b.label&&c.receiverType!=chrome.cast.ReceiverType.DIAL){if(this.j.getScreen())return F8("Reselecting dial screen."),
this.ea("yt-remote-cast2-session-change",this.j.getScreen()),Promise.resolve(new chrome.cast.DialLaunchResponse(!1));this.bf('Changing CAST intent from "'+c.receiverType+'" to "dial" for '+b.friendlyName);H8(this,new z8(this.u,b,this.C,this.config_))}b=this.j;b.S=a;b.S.appState==chrome.cast.DialAppState.RUNNING?(a=b.S.extraData||{},c=a.screenId||null,A8(b)&&a.loungeToken?a.loungeTokenRefreshIntervalMs?a=F1a(b,{name:b.j.friendlyName,screenId:a.screenId,loungeToken:a.loungeToken,dialId:b.S.receiver.label,
screenIdType:"shortLived"},a.loungeTokenRefreshIntervalMs):(g.er(Error("No loungeTokenRefreshIntervalMs presents in additionalData: "+JSON.stringify(a)+".")),a=G1a(b,c)):a=G1a(b,c)):a=C8(b);return a};
g.h.NP=function(a){var b=this;if(!this.isDisposed()&&!this.J){F8("New cast session ID: "+a.sessionId);var c=a.receiver;if(c.receiverType!=chrome.cast.ReceiverType.CUSTOM){if(!this.j)if(c.receiverType==chrome.cast.ReceiverType.CAST)F8("Got resumed cast session before resumed mdx connection."),c.friendlyName=chrome.cast.unescape(c.friendlyName),H8(this,new w8(this.u,c,this.config_),!0);else{this.bf("Got non-cast session without previous mdx receiver event, or mdx resume.");return}var d=this.j.j,e=y6(this.u.Ri(),
d.label);e&&t6(e,c.label)&&d.receiverType!=chrome.cast.ReceiverType.CAST&&c.receiverType==chrome.cast.ReceiverType.CAST&&(F8("onSessionEstablished_: manual to cast session change "+c.friendlyName),g.nf(this.j),this.j=new w8(this.u,c,this.config_),this.j.subscribe("sessionScreen",(0,g.Qa)(this.PP,this,this.j)),this.j.subscribe("sessionFailed",function(){return K1a(b,b.j)}),this.j.Vu(null));
this.j.YI(a)}}};
g.h.JS=function(){return this.j?this.j.nK():null};
g.h.FZ=function(a){this.isDisposed()||(this.bf("Failed to estabilish a session: "+g.Zi(a)),a.code!=chrome.cast.ErrorCode.CANCEL&&H8(this,null),this.ea("yt-remote-cast2-session-failed"))};
g.h.nZ=function(a){F8("Receiver availability updated: "+a);if(!this.isDisposed()){var b=G8(this);this.K=a==chrome.cast.ReceiverAvailability.AVAILABLE;G8(this)!=b&&this.ea("yt-remote-cast2-availability-change",G8(this))}};
g.h.oK=function(){this.isDisposed()||(this.B=L1a(this),F8("Updating custom receivers: "+g.Zi(this.B)),chrome.cast.setCustomReceivers(this.B,function(){},(0,g.Qa)(function(){this.bf("Failed to set custom receivers.")},this)),this.ea("yt-remote-cast2-availability-change",G8(this)))};
E8.prototype.setLaunchParams=E8.prototype.W_;E8.prototype.setConnectedScreenStatus=E8.prototype.V_;E8.prototype.stopSession=E8.prototype.KS;E8.prototype.getCastSession=E8.prototype.JS;E8.prototype.requestSession=E8.prototype.requestSession;E8.prototype.init=E8.prototype.init;E8.prototype.dispose=E8.prototype.dispose;var N8=[];g.h=S8.prototype;
g.h.reset=function(a){this.listId="";this.index=-1;this.videoId="";T8(this);this.volume=-1;this.muted=!1;a&&(this.index=a.index,this.listId=a.listId,this.videoId=a.videoId,this.playerState=a.playerState,this.volume=a.volume,this.muted=a.muted,this.audioTrackId=a.audioTrackId,this.trackData=a.trackData,this.jm=a.hasPrevious,this.hasNext=a.hasNext,this.K=a.playerTime,this.J=a.playerTimeAt,this.C=a.seekableStart,this.j=a.seekableEnd,this.D=a.duration,this.S=a.loadedTime,this.B=a.liveIngestionTime,this.u=
!isNaN(this.B))};
g.h.Nc=function(){return 1==this.playerState};
g.h.isAdPlaying=function(){return 1081==this.playerState};
g.h.bl=function(a){this.D=isNaN(a)?0:a};
g.h.getDuration=function(){return this.u?this.D+U8(this):this.D};
g.h.clone=function(){return new S8(Y8(this))};g.w($8,g.lv);g.h=$8.prototype;g.h.getState=function(){return this.B};
g.h.zp=function(){return this.C.getReconnectTimeout()};
g.h.Cs=function(){this.C.reconnect()};
g.h.play=function(){b9(this)?(this.j?this.j.play(null,g.wg,g9(this,"play")):f9(this,"play"),e9(this,1,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.play)};
g.h.pause=function(){b9(this)?(this.j?this.j.pause(null,g.wg,g9(this,"pause")):f9(this,"pause"),e9(this,2,W8(a9(this))),this.ea("remotePlayerChange")):c9(this,this.pause)};
g.h.seekTo=function(a){if(b9(this)){if(this.j){var b=a9(this),c=new chrome.cast.media.SeekRequest;c.currentTime=a;b.Nc()||3==b.playerState?c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_START:c.resumeState=chrome.cast.media.ResumeState.PLAYBACK_PAUSE;this.j.seek(c,g.wg,g9(this,"seekTo",{newTime:a}))}else f9(this,"seekTo",{newTime:a});e9(this,3,a);this.ea("remotePlayerChange")}else c9(this,g.Ra(this.seekTo,a))};
g.h.stop=function(){if(b9(this)){this.j?this.j.stop(null,g.wg,g9(this,"stopVideo")):f9(this,"stopVideo");var a=a9(this);a.index=-1;a.videoId="";T8(a);d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.stop)};
g.h.setVolume=function(a,b){if(b9(this)){var c=a9(this);if(this.u){if(c.volume!=a){var d=Math.round(a)/100;this.u.setReceiverVolumeLevel(d,(0,g.Qa)(function(){c8("set receiver volume: "+d)},this),(0,g.Qa)(function(){this.bf("failed to set receiver volume.")},this))}c.muted!=b&&this.u.setReceiverMuted(b,(0,g.Qa)(function(){c8("set receiver muted: "+b)},this),(0,g.Qa)(function(){this.bf("failed to set receiver muted.")},this))}else{var e={volume:a,
muted:b};-1!=c.volume&&(e.delta=a-c.volume);f9(this,"setVolume",e)}c.muted=b;c.volume=a;d9(this,c)}else c9(this,g.Ra(this.setVolume,a,b))};
g.h.pK=function(a,b){if(b9(this)){var c=a9(this);a={videoId:a};b&&(c.trackData={trackName:b.name,languageCode:b.languageCode,sourceLanguageCode:b.translationLanguage?b.translationLanguage.languageCode:"",languageName:b.languageName,kind:b.kind},a.style=g.Zi(b.style),g.Xf(a,c.trackData));f9(this,"setSubtitlesTrack",a);d9(this,c)}else c9(this,g.Ra(this.pK,a,b))};
g.h.setAudioTrack=function(a,b){b9(this)?(b=b.getLanguageInfo().getId(),f9(this,"setAudioTrack",{videoId:a,audioTrackId:b}),a=a9(this),a.audioTrackId=b,d9(this,a)):c9(this,g.Ra(this.setAudioTrack,a,b))};
g.h.playVideo=function(a,b,c,d,e,f,k){d=void 0===d?null:d;e=void 0===e?null:e;f=void 0===f?null:f;k=void 0===k?null:k;var l=a9(this),m={videoId:a};void 0!==c&&(m.currentIndex=c);X8(l,a,c||0);void 0!==b&&(V8(l,b),m.currentTime=b);d&&(m.listId=d);e&&(m.playerParams=e);f&&(m.clickTrackingParams=f);k&&(m.locationInfo=g.Zi(k));f9(this,"setPlaylist",m);d||d9(this,l)};
g.h.MC=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"previous")}else c9(this,g.Ra(this.MC,a,b))};
g.h.nextVideo=function(a,b){if(b9(this)){if(a&&b){var c=a9(this);X8(c,a,b);d9(this,c)}f9(this,"next")}else c9(this,g.Ra(this.nextVideo,a,b))};
g.h.au=function(){if(b9(this)){f9(this,"clearPlaylist");var a=a9(this);a.reset();d9(this,a);this.ea("remotePlayerChange")}else c9(this,this.au)};
g.h.UM=function(){b9(this)?f9(this,"dismissAutoplay"):c9(this,this.UM)};
g.h.dispose=function(){if(3!=this.B){var a=this.B;this.B=3;this.ea("proxyStateChange",a,this.B)}g.lv.prototype.dispose.call(this)};
g.h.qa=function(){X1a(this);this.C=null;this.D.clear();Z8(this,null);g.lv.prototype.qa.call(this)};
g.h.aJ=function(a){if((a!=this.B||2==a)&&3!=this.B&&0!=a){var b=this.B;this.B=a;this.ea("proxyStateChange",b,a);if(1==a)for(;!this.D.isEmpty();)b=a=this.D,0===b.j.length&&(b.j=b.u,b.j.reverse(),b.u=[]),a.j.pop().apply(this);else 3==a&&this.dispose()}};
g.h.iZ=function(a,b){this.ea(a,b)};
g.h.XX=function(a){if(!a)this.Qy(null),Z8(this,null);else if(this.u.receiver.volume){a=this.u.receiver.volume;var b=a9(this),c=Math.round(100*a.level||0);if(b.volume!=c||b.muted!=a.muted)c8("Cast volume update: "+a.level+(a.muted?" muted":"")),b.volume=c,b.muted=!!a.muted,d9(this,b)}};
g.h.Qy=function(a){c8("Cast media: "+!!a);this.j&&this.j.removeUpdateListener(this.S);if(this.j=a)this.j.addUpdateListener(this.S),Y1a(this),this.ea("remotePlayerChange")};
g.h.WX=function(a){a?(Y1a(this),this.ea("remotePlayerChange")):this.Qy(null)};
g.h.vJ=function(){f9(this,"sendDebugCommand",{debugCommand:"stats4nerds "})};
g.h.aY=function(){var a=U1a();a&&Z8(this,a)};
g.h.bf=function(a){b8("CP",a)};g.w(j9,g.lv);g.h=j9.prototype;
g.h.connect=function(a,b){if(b){var c=b.listId,d=b.videoId,e=b.videoIds,f=b.playerParams,k=b.clickTrackingParams,l=b.index,m={videoId:d},n=b.currentTime,p=b.locationInfo;b=b.loopMode;void 0!==n&&(m.currentTime=5>=n?0:n);f&&(m.playerParams=f);p&&(m.locationInfo=p);k&&(m.clickTrackingParams=k);c&&(m.listId=c);e&&0<e.length&&(m.videoIds=e.join(","));void 0!==l&&(m.currentIndex=l);this.Ga&&(m.loopMode=b||"LOOP_MODE_OFF");c&&(this.j.listId=c);this.j.videoId=d;this.j.index=l||0;this.j.state=3;V8(this.j,
n);this.D="UNSUPPORTED";c=this.Ga?"setInitialState":"setPlaylist";h9("Connecting with "+c+" and params: "+g.Zi(m));this.u.connect({method:c,params:g.Zi(m)},a,q_a())}else h9("Connecting without params"),this.u.connect({},a,q_a());b2a(this)};
g.h.qo=function(a){this.u.qo(a)};
g.h.dispose=function(){this.isDisposed()||(g.Ha("yt.mdx.remote.remoteClient_",null),this.ea("beforeDispose"),i9(this,3));g.lv.prototype.dispose.call(this)};
g.h.qa=function(){k9(this);m9(this);l9(this);g.Ar(this.S);this.S=NaN;g.Ar(this.Y);this.Y=NaN;this.C=null;g.tu(this.Z);this.Z.length=0;this.u.dispose();g.lv.prototype.qa.call(this);this.D=this.K=this.B=this.j=this.u=null};
g.h.hO=function(a){if(!this.B||0===this.B.length)return!1;for(var b=g.r(this.B),c=b.next();!c.done;c=b.next())if(!c.value.capabilities.has(a))return!1;return!0};
g.h.QV=function(){var a=3;this.isDisposed()||(a=0,isNaN(this.Ux())?this.u.Nu()&&isNaN(this.J)&&(a=1):a=2);return a};
g.h.uu=function(a){h9("Disconnecting with "+a);g.Ha("yt.mdx.remote.remoteClient_",null);k9(this);this.ea("beforeDisconnect",a);1==a&&D6();this.u.disconnect(a);this.dispose()};
g.h.OV=function(){var a=this.j;this.C&&(a=this.j.clone(),X8(a,this.C,a.index));return Y8(a)};
g.h.X_=function(a){var b=this,c=new S8(a);c.videoId&&c.videoId!=this.j.videoId&&(this.C=c.videoId,g.Ar(this.S),this.S=g.ur(function(){if(b.C){var e=b.C;b.C=null;b.j.videoId!=e&&n9(b,"getNowPlaying")}},5E3));
var d=[];this.j.listId==c.listId&&this.j.videoId==c.videoId&&this.j.index==c.index||d.push("remoteQueueChange");this.j.playerState==c.playerState&&this.j.volume==c.volume&&this.j.muted==c.muted&&W8(this.j)==W8(c)&&g.Zi(this.j.trackData)==g.Zi(c.trackData)||d.push("remotePlayerChange");this.j.reset(a);g.lc(d,function(e){this.ea(e)},this)};
g.h.zN=function(){var a=this.u.rp(),b=g.Pb(this.B,function(c){return"REMOTE_CONTROL"==c.type&&c.id!=a});
return b?b.id:""};
g.h.Ux=function(){return this.u.zp()};
g.h.LV=function(){return this.D||"UNSUPPORTED"};
g.h.MV=function(){return this.K||""};
g.h.LS=function(){!isNaN(this.Ux())&&this.u.Cs()};
g.h.U_=function(a,b){n9(this,a,b);d2a(this)};
g.h.qK=function(){var a=g.Nr("SID","")||"",b=g.Nr("SAPISID","")||"",c=g.Nr("__Secure-3PAPISID","")||"";if(!a&&!b&&!c)return"";a=g.wc(g.eb(a),2);b=g.wc(g.eb(b),2);c=g.wc(g.eb(c),2);return g.wc(g.eb(a+","+b+","+c),2)};
j9.prototype.subscribe=j9.prototype.subscribe;j9.prototype.unsubscribeByKey=j9.prototype.Ag;j9.prototype.getProxyState=j9.prototype.QV;j9.prototype.disconnect=j9.prototype.uu;j9.prototype.getPlayerContextData=j9.prototype.OV;j9.prototype.setPlayerContextData=j9.prototype.X_;j9.prototype.getOtherConnectedRemoteId=j9.prototype.zN;j9.prototype.getReconnectTimeout=j9.prototype.Ux;j9.prototype.getAutoplayMode=j9.prototype.LV;j9.prototype.getAutoplayVideoId=j9.prototype.MV;j9.prototype.reconnect=j9.prototype.LS;
j9.prototype.sendMessage=j9.prototype.U_;j9.prototype.getXsrfToken=j9.prototype.qK;j9.prototype.isCapabilitySupportedOnConnectedDevices=j9.prototype.hO;g.w(o9,g8);g.h=o9.prototype;g.h.Ri=function(a){return this.Hf.$_gs(a)};
g.h.contains=function(a){return!!this.Hf.$_c(a)};
g.h.get=function(a){return this.Hf.$_g(a)};
g.h.start=function(){this.Hf.$_st()};
g.h.add=function(a,b,c){this.Hf.$_a(a,b,c)};
g.h.remove=function(a,b,c){this.Hf.$_r(a,b,c)};
g.h.xD=function(a,b,c,d){this.Hf.$_un(a,b,c,d)};
g.h.qa=function(){for(var a=0,b=this.j.length;a<b;++a)this.Hf.$_ubk(this.j[a]);this.j.length=0;this.Hf=null;g8.prototype.qa.call(this)};
g.h.MS=function(){this.ea("screenChange")};
g.h.QY=function(){this.ea("onlineScreenChange")};
q8.prototype.$_st=q8.prototype.start;q8.prototype.$_gspc=q8.prototype.GS;q8.prototype.$_gsppc=q8.prototype.mK;q8.prototype.$_c=q8.prototype.contains;q8.prototype.$_g=q8.prototype.get;q8.prototype.$_a=q8.prototype.add;q8.prototype.$_un=q8.prototype.xD;q8.prototype.$_r=q8.prototype.remove;q8.prototype.$_gs=q8.prototype.Ri;q8.prototype.$_gos=q8.prototype.lK;q8.prototype.$_s=q8.prototype.subscribe;q8.prototype.$_ubk=q8.prototype.Ag;var B9=null,H9=!1,p9=null,q9=null,G9=null,u9=[];g.w(I9,g.G);g.h=I9.prototype;g.h.qa=function(){g.G.prototype.qa.call(this);this.j.stop();this.B.stop();this.S.stop();var a=this.hc;a.unsubscribe("proxyStateChange",this.MP,this);a.unsubscribe("remotePlayerChange",this.Vy,this);a.unsubscribe("remoteQueueChange",this.zC,this);a.unsubscribe("previousNextChange",this.JP,this);a.unsubscribe("nowAutoplaying",this.DP,this);a.unsubscribe("autoplayDismissed",this.hP,this);this.hc=this.u=null};
g.h.Kk=function(a){var b=g.Ba.apply(1,arguments);if(2!=this.hc.B)if(J9(this)){if(!a9(this.hc).isAdPlaying()||"control_seek"!==a)switch(a){case "control_toggle_play_pause":a9(this.hc).Nc()?this.hc.pause():this.hc.play();break;case "control_play":this.hc.play();break;case "control_pause":this.hc.pause();break;case "control_seek":this.K.uE(b[0],b[1]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}}else switch(a){case "control_toggle_play_pause":case "control_play":case "control_pause":b=
this.I.getCurrentTime();L9(this,0===b?void 0:b);break;case "control_seek":L9(this,b[0]);break;case "control_subtitles_set_track":K9(this,b[0]);break;case "control_set_audio_track":this.setAudioTrack(b[0])}};
g.h.UX=function(a){this.S.jU(a)};
g.h.J0=function(a){this.Kk("control_subtitles_set_track",g.Pf(a)?null:a)};
g.h.jR=function(){var a=this.I.getOption("captions","track");g.Pf(a)||K9(this,a)};
g.h.Tb=function(a){this.u.Tb(a,this.I.getVideoData().lengthSeconds)};
g.h.AY=function(){g.Pf(this.C)||z2a(this,this.C);this.D=!1};
g.h.MP=function(a,b){this.B.stop();2===b&&this.cR()};
g.h.Vy=function(){if(J9(this)){this.j.stop();var a=a9(this.hc);switch(a.playerState){case 1080:case 1081:case 1084:case 1085:this.u.pg=1;break;case 1082:case 1083:this.u.pg=0;break;default:this.u.pg=-1}switch(a.playerState){case 1081:case 1:this.Wb(new g.aG(8));this.bR();break;case 1085:case 3:this.Wb(new g.aG(9));break;case 1083:case 0:this.Wb(new g.aG(2));this.K.stop();this.Tb(this.I.getVideoData().lengthSeconds);break;case 1084:this.Wb(new g.aG(4));break;case 2:this.Wb(new g.aG(4));this.Tb(W8(a));
break;case -1:this.Wb(new g.aG(64));break;case -1E3:this.Wb(new g.aG(128,{errorCode:"mdx.remoteerror",errorMessage:"This video is not available for remote playback.",cB:2}))}a=a9(this.hc).trackData;var b=this.C;(a||b?a&&b&&a.trackName==b.trackName&&a.languageCode==b.languageCode&&a.languageName==b.languageName&&a.kind==b.kind:1)||(this.C=a,z2a(this,a));a=a9(this.hc);-1===a.volume||Math.round(this.I.getVolume())===a.volume&&this.I.isMuted()===a.muted||this.Y.isActive()||this.MR()}else y2a(this)};
g.h.JP=function(){this.I.ea("mdxpreviousnextchange")};
g.h.zC=function(){J9(this)||y2a(this)};
g.h.DP=function(a){isNaN(a)||this.I.ea("mdxnowautoplaying",a)};
g.h.hP=function(){this.I.ea("mdxautoplaycanceled")};
g.h.setAudioTrack=function(a){J9(this)&&this.hc.setAudioTrack(this.I.getVideoData(1).videoId,a)};
g.h.seekTo=function(a,b){-1===a9(this.hc).playerState?L9(this,a):b&&this.hc.seekTo(a)};
g.h.MR=function(){var a=this;if(J9(this)){var b=a9(this.hc);this.events.yc(this.Z);b.muted?this.I.mute():this.I.unMute();this.I.setVolume(b.volume);this.Z=this.events.T(this.I,"onVolumeChange",function(c){x2a(a,c)})}};
g.h.bR=function(){this.j.stop();if(!this.hc.isDisposed()){var a=a9(this.hc);a.Nc()&&this.Wb(new g.aG(8));this.Tb(W8(a));this.j.start()}};
g.h.cR=function(){this.B.stop();this.j.stop();var a=this.hc.zp();2==this.hc.B&&!isNaN(a)&&this.B.start()};
g.h.Wb=function(a){this.B.stop();var b=this.J;if(!g.fG(b,a)){var c=g.U(a,2);c!==g.U(this.J,2)&&this.I.Kv(c);this.J=a;B2a(this.u,b,a)}};g.w(M9,g.V);M9.prototype.yd=function(){this.j.show()};
M9.prototype.Hb=function(){this.j.hide()};
M9.prototype.u=function(){q6("mdx-privacy-popup-cancel");this.Hb()};
M9.prototype.B=function(){q6("mdx-privacy-popup-confirm");this.Hb()};g.w(N9,g.V);N9.prototype.onStateChange=function(a){A2a(this,a.state)};g.w(O9,g.mN);O9.prototype.D=function(){var a=this.I.getOption("remote","receivers");a&&1<a.length&&!this.I.getOption("remote","quickCast")?(this.gq=g.mc(a,this.j,this),g.nN(this,g.Yl(a,this.j)),a=this.I.getOption("remote","currentReceiver"),a=this.j(a),this.options[a]&&this.nj(a),this.enable(!0)):this.enable(!1)};
O9.prototype.j=function(a){return a.key};
O9.prototype.yk=function(a){return"cast-selector-receiver"===a?"Cast...":this.gq[a].name};
O9.prototype.Bg=function(a){g.mN.prototype.Bg.call(this,a);this.I.setOption("remote","currentReceiver",this.gq[a]);this.rb.Hb()};g.w(P9,g.dK);g.h=P9.prototype;
g.h.create=function(){var a=this.player.V(),b=g.vC(a);a={device:"Desktop",app:"youtube-desktop",loadCastApiSetupScript:a.N("mdx_load_cast_api_bootstrap_script"),enableDialLoungeToken:a.N("enable_dial_short_lived_lounge_token"),enableCastLoungeToken:a.N("enable_cast_short_lived_lounge_token")};s2a(b,a);this.subscriptions.push(g.Lu("yt-remote-before-disconnect",this.SX,this));this.subscriptions.push(g.Lu("yt-remote-connection-change",this.oZ,this));this.subscriptions.push(g.Lu("yt-remote-receiver-availability-change",this.LP,
this));this.subscriptions.push(g.Lu("yt-remote-auto-connect",this.mZ,this));this.subscriptions.push(g.Lu("yt-remote-receiver-resumed",this.lZ,this));this.subscriptions.push(g.Lu("mdx-privacy-popup-confirm",this.A_,this));this.subscriptions.push(g.Lu("mdx-privacy-popup-cancel",this.z_,this));this.LP()};
g.h.load=function(){this.player.cancelPlayback();g.dK.prototype.load.call(this);this.rj=new I9(this,this.player,this.hc);var a=(a=w2a())?a.currentTime:0;var b=F9()?new $8(z9(),void 0):null;0==a&&b&&(a=W8(a9(b)));0!==a&&this.Tb(a);B2a(this,this.Yd,this.Yd);this.player.Fm(6)};
g.h.unload=function(){this.player.ea("mdxautoplaycanceled");this.Xo=this.xm;g.of(this.rj,this.hc);this.hc=this.rj=null;g.dK.prototype.unload.call(this);this.player.Fm(5);Q9(this)};
g.h.qa=function(){g.Mu(this.subscriptions);g.dK.prototype.qa.call(this)};
g.h.ym=function(a){var b=g.Ba.apply(1,arguments);this.loaded&&this.rj.Kk.apply(this.rj,[a].concat(g.v(b)))};
g.h.getAdState=function(){return this.pg};
g.h.jm=function(){return this.hc?a9(this.hc).jm:!1};
g.h.hasNext=function(){return this.hc?a9(this.hc).hasNext:!1};
g.h.Tb=function(a,b){this.uO=a||0;this.player.ea("progresssync",a,b);this.player.Na("onVideoProgress",a||0)};
g.h.getCurrentTime=function(){return this.uO};
g.h.getProgressState=function(){var a=a9(this.hc),b=this.player.getVideoData();return{airingStart:0,airingEnd:0,allowSeeking:this.player.V().N("web_player_mdx_allow_seeking_change_killswitch")?this.player.Sf():!a.isAdPlaying()&&this.player.Sf(),clipEnd:b.clipEnd,clipStart:b.clipStart,current:this.getCurrentTime(),displayedStart:-1,duration:a.getDuration(),ingestionTime:a.u?a.B+U8(a):a.B,isAtLiveHead:1>=(a.u?a.j+U8(a):a.j)-this.getCurrentTime(),loaded:a.S,seekableEnd:a.u?a.j+U8(a):a.j,seekableStart:0<
a.C?a.C+U8(a):a.C}};
g.h.nextVideo=function(){this.hc&&this.hc.nextVideo()};
g.h.MC=function(){this.hc&&this.hc.MC()};
g.h.SX=function(a){1===a&&(this.rI=this.hc?a9(this.hc):null)};
g.h.oZ=function(){var a=F9()?new $8(z9(),void 0):null;if(a){var b=this.Xo;this.loaded&&this.unload();this.hc=a;this.rI=null;b.key!==this.xm.key&&(this.Xo=b,this.load())}else g.nf(this.hc),this.hc=null,this.loaded&&(this.unload(),(a=this.rI)&&a.videoId===this.player.getVideoData().videoId&&this.player.cueVideoById(a.videoId,W8(a)));this.player.ea("videodatachange","newdata",this.player.getVideoData(),3)};
g.h.LP=function(){var a=[this.xm],b=a.concat,c=t2a();O8()&&g.kw("yt-remote-cast-available")&&c.push({key:"cast-selector-receiver",name:"Cast..."});this.gq=b.call(a,c);a=A9()||this.xm;R9(this,a);this.player.Na("onMdxReceiversChange")};
g.h.mZ=function(){var a=A9();R9(this,a)};
g.h.lZ=function(){this.Xo=A9()};
g.h.A_=function(){this.fz=!0;Q9(this);H9=!1;B9&&D9(B9,1);B9=null};
g.h.z_=function(){this.fz=!1;Q9(this);R9(this,this.xm);this.Xo=this.xm;H9=!1;B9=null;this.player.playVideo()};
g.h.dg=function(a,b){switch(a){case "casting":return this.loaded;case "receivers":return this.gq;case "currentReceiver":return b&&("cast-selector-receiver"===b.key?Q8():R9(this,b)),this.loaded?this.Xo:this.xm;case "quickCast":return 2===this.gq.length&&"cast-selector-receiver"===this.gq[1].key?(b&&Q8(),!0):!1}};
g.h.vJ=function(){this.hc.vJ()};
g.h.cj=function(){return!1};
g.h.getOptions=function(){return["casting","receivers","currentReceiver","quickCast"]};g.cK("remote",P9);})(_yt_player);


}
/*
     FILE ARCHIVED ON 00:32:41 Apr 30, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:25:35 Sep 05, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 205.762
  exclusion.robots: 0.138
  exclusion.robots.policy: 0.125
  RedisCDXSource: 0.854
  esindex: 0.014
  LoadShardBlock: 76.328 (3)
  PetaboxLoader3.datanode: 44.942 (4)
  CDXLines.iter: 38.664 (3)
  load_resource: 50.446
  PetaboxLoader3.resolve: 36.134
*/