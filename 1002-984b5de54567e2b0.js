"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1002],{41002:function(t,e,n){n.d(e,{A:function(){return Xn}});var r=n(50959);function o(t,e){if(m(t))for(let n=0;n<t.length&&!1!==e(t[n],n,t);n++);else t&&o(Object.keys(t),(n=>e(t[n],n,t)));return t}function i(t,e){const n=b(e);if(g(e)||n){let r=n?"":{};if(t){const o=window.getComputedStyle(t,null);r=n?kt(t,o,e):e.reduce(((e,n)=>(e[n]=kt(t,o,n),e)),r)}return r}t&&o(A(e),(n=>Lt(t,n,e[n])))}const s=(t,e)=>{const{o:n,u:r,_:o}=t;let i,s=n;const l=(t,e)=>{const n=s,l=t,c=e||(r?!r(n,l):n!==l);return(c||o)&&(s=l,i=n),[s,c,i]};return[e?t=>l(e(s,i),t):l,t=>[s,!!t,i]]},l=()=>"undefined"!==typeof window,c=l()&&Node.ELEMENT_NODE,{toString:a,hasOwnProperty:d}=Object.prototype,u=t=>void 0===t,f=t=>null===t,p=t=>u(t)||f(t)?`${t}`:a.call(t).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),h=t=>"number"===typeof t,b=t=>"string"===typeof t,w=t=>"boolean"===typeof t,v=t=>"function"===typeof t,g=t=>Array.isArray(t),y=t=>"object"===typeof t&&!g(t)&&!f(t),m=t=>{const e=!!t&&t.length,n=h(e)&&e>-1&&e%1==0;return!!(g(t)||!v(t)&&n)&&(!(e>0&&y(t))||e-1 in t)},x=t=>{if(!t||!y(t)||"object"!==p(t))return!1;let e;const n="constructor",r=t[n],o=r&&r.prototype,i=d.call(t,n),s=o&&d.call(o,"isPrototypeOf");if(r&&!i&&!s)return!1;for(e in t);return u(e)||d.call(t,e)},$=t=>{const e=HTMLElement;return!!t&&(e?t instanceof e:t.nodeType===c)},S=t=>{const e=Element;return!!t&&(e?t instanceof e:t.nodeType===c)},O=(t,e,n)=>t.indexOf(e,n),E=(t,e,n)=>(n||b(e)||!m(e)?t.push(e):Array.prototype.push.apply(t,e),t),C=t=>{const e=Array.from,n=[];return e&&t?e(t):(t instanceof Set?t.forEach((t=>{E(n,t)})):o(t,(t=>{E(n,t)})),n)},k=t=>!!t&&0===t.length,L=(t,e,n)=>{o(t,(t=>t&&t.apply(void 0,e||[]))),!n&&(t.length=0)},z=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),A=t=>t?Object.keys(t):[],M=(t,e,n,r,i,s,l)=>{const c=[e,n,r,i,s,l];return"object"===typeof t&&!f(t)||v(t)||(t={}),o(c,(e=>{o(A(e),(n=>{const r=e[n];if(t===r)return!0;const o=g(r);if(r&&(x(r)||o)){const e=t[n];let i=e;o&&!g(e)?i=[]:o||x(e)||(i={}),t[n]=M(i,r)}else t[n]=r}))})),t},I=t=>{for(const e in t)return!1;return!0},R=(t,e,n,r)=>{if(u(r))return n?n[t]:e;n&&(b(r)||h(r))&&(n[t]=r)},N=(t,e,n)=>{if(u(n))return t?t.getAttribute(e):null;t&&t.setAttribute(e,n)},P=(t,e,n,r)=>{if(n){const o=N(t,e)||"",i=new Set(o.split(" "));i[r?"add":"delete"](n),N(t,e,C(i).join(" ").trim())}},T=(t,e)=>{t&&t.removeAttribute(e)},B=(t,e)=>R("scrollLeft",0,t,e),H=(t,e)=>R("scrollTop",0,t,e),X=l()&&Element.prototype,F=(t,e)=>{const n=[],r=e?S(e)?e:null:document;return r?E(n,r.querySelectorAll(t)):n},V=(t,e)=>{if(S(t)){return(X.matches||X.msMatchesSelector).call(t,e)}return!1},_=t=>t?C(t.childNodes):[],D=t=>t?t.parentElement:null,j=(t,e)=>{if(S(t)){const n=X.closest;if(n)return n.call(t,e);do{if(V(t,e))return t;t=D(t)}while(t)}return null},q=(t,e,n)=>{const r=t&&j(t,e),o=t&&((t,e)=>{const n=e?S(e)?e:null:document;return n?n.querySelector(t):null})(n,r),i=j(o,e)===r;return!(!r||!o)&&(r===t||o===t||i&&j(j(t,n),e)!==r)},W=(t,e,n)=>{if(n&&t){let r,i=e;m(n)?(r=document.createDocumentFragment(),o(n,(t=>{t===i&&(i=t.previousSibling),r.appendChild(t)}))):r=n,e&&(i?i!==e&&(i=i.nextSibling):i=t.firstChild),t.insertBefore(r,i||null)}},J=(t,e)=>{W(t,null,e)},K=(t,e)=>{W(D(t),t&&t.nextSibling,e)},Y=t=>{if(m(t))o(C(t),(t=>Y(t)));else if(t){const e=D(t);e&&e.removeChild(t)}},Z=t=>{const e=document.createElement("div");return t&&N(e,"class",t),e},G=t=>{const e=Z();return e.innerHTML=t.trim(),o(_(e),(t=>Y(t)))},U=t=>t.charAt(0).toUpperCase()+t.slice(1),Q=["-webkit-","-moz-","-o-","-ms-"],tt=["WebKit","Moz","O","MS","webkit","moz","o","ms"],et={},nt={},rt=t=>{let e=nt[t];if(z(nt,t))return e;const n=U(t),r=Z().style;return o(Q,(o=>{const i=o.replace(/-/g,""),s=[t,o+t,i+n,U(i)+n];return!(e=s.find((t=>void 0!==r[t])))})),nt[t]=e||""},ot=t=>{if(l()){let e=et[t]||window[t];return z(et,t)||(o(tt,(n=>(e=e||window[n+U(t)],!e))),et[t]=e),e}},it=ot("MutationObserver"),st=ot("IntersectionObserver"),lt=ot("ResizeObserver"),ct=ot("cancelAnimationFrame"),at=ot("requestAnimationFrame"),dt=l()&&window.setTimeout,ut=l()&&window.clearTimeout,ft=(t,e,n,r)=>{if(t&&e){let i=!0;return o(n,(n=>{(r?r(t[n]):t[n])!==(r?r(e[n]):e[n])&&(i=!1)})),i}return!1},pt=(t,e)=>ft(t,e,["w","h"]),ht=(t,e)=>ft(t,e,["x","y"]),bt=(t,e)=>ft(t,e,["t","r","b","l"]),wt=(t,e,n)=>ft(t,e,["width","height"],n&&(t=>Math.round(t))),vt=()=>{},gt=t=>{let e;const n=t?dt:at,r=t?ut:ct;return[o=>{r(e),e=n(o,v(t)?t():t)},()=>r(e)]},yt=(t,e)=>{let n,r,o,i=vt;const{g:s,v:l,p:c}=e||{},a=function(e){i(),ut(n),n=r=void 0,i=vt,t.apply(this,e)},d=t=>c&&r?c(r,t):t,u=()=>{i!==vt&&a(d(o)||o)},f=function(){const t=C(arguments),e=v(s)?s():s,c=h(e)&&e>=0;if(c){const s=v(l)?l():l,c=h(s)&&s>=0,f=e>0?dt:at,p=e>0?ut:ct,b=d(t)||t,w=a.bind(0,b);i();const g=f(w,e);i=()=>p(g),c&&!n&&(n=dt(u,s)),r=o=b}else a(t)};return f.m=u,f},{max:mt}=Math,xt=/[^\x20\t\r\n\f]+/g,$t=(t,e,n)=>{const r=t&&t.classList;let o,i=0,s=!1;if(r&&e&&b(e)){const t=e.match(xt)||[];for(s=t.length>0;o=t[i++];)s=!!n(r,o)&&s}return s},St=(t,e)=>{$t(t,e,((t,e)=>t.remove(e)))},Ot=(t,e)=>($t(t,e,((t,e)=>t.add(e))),St.bind(0,t,e)),Et={opacity:1,zindex:1},Ct=(t,e)=>{const n=e?parseFloat(t):parseInt(t,10);return n===n?n:0},kt=(t,e,n)=>null!=e?e[n]||e.getPropertyValue(n):t.style[n],Lt=(t,e,n)=>{try{const{style:r}=t;u(r[e])?r.setProperty(e,n):r[e]=((t,e)=>!Et[t.toLowerCase()]&&h(e)?`${e}px`:e)(e,n)}catch(X){}},zt=t=>"rtl"===i(t,"direction"),At=(t,e,n)=>{const r=e?`${e}-`:"",o=n?`-${n}`:"",s=`${r}top${o}`,l=`${r}right${o}`,c=`${r}bottom${o}`,a=`${r}left${o}`,d=i(t,[s,l,c,a]);return{t:Ct(d[s],!0),r:Ct(d[l],!0),b:Ct(d[c],!0),l:Ct(d[a],!0)}},{round:Mt}=Math,It={w:0,h:0},Rt=t=>t?{w:t.offsetWidth,h:t.offsetHeight}:It,Nt=t=>t?{w:t.clientWidth,h:t.clientHeight}:It,Pt=t=>t?{w:t.scrollWidth,h:t.scrollHeight}:It,Tt=t=>{const e=parseFloat(i(t,"height"))||0,n=parseFloat(i(t,"width"))||0;return{w:n-Mt(n),h:e-Mt(e)}},Bt=t=>t.getBoundingClientRect();let Ht;const Xt=t=>t.split(" "),Ft=(t,e,n,r)=>{o(Xt(e),(e=>{t.removeEventListener(e,n,r)}))},Vt=(t,e,n,r)=>{var i;const s=(()=>{if(u(Ht)){Ht=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){Ht=!0}}))}catch(t){}}return Ht})(),l=null!=(i=s&&r&&r.S)?i:s,c=r&&r.$||!1,a=r&&r.C||!1,d=[],f=s?{passive:l,capture:c}:c;return o(Xt(e),(e=>{const r=a?o=>{t.removeEventListener(e,r,c),n&&n(o)}:n;E(d,Ft.bind(null,t,e,r,c)),t.addEventListener(e,r,f)})),L.bind(0,d)},_t=t=>t.stopPropagation(),Dt=t=>t.preventDefault(),jt={x:0,y:0},qt=t=>{const e=t?Bt(t):0;return e?{x:e.left+window.pageYOffset,y:e.top+window.pageXOffset}:jt},Wt=(t,e)=>{o(g(e)?e:[e],t)},Jt=t=>{const e=new Map,n=(t,n)=>{if(t){const r=e.get(t);Wt((t=>{r&&r[t?"delete":"clear"](t)}),n)}else e.forEach((t=>{t.clear()})),e.clear()},r=(t,i)=>{if(b(t)){const r=e.get(t)||new Set;return e.set(t,r),Wt((t=>{v(t)&&r.add(t)}),i),n.bind(0,t,i)}w(i)&&i&&n();const s=A(t),l=[];return o(s,(e=>{const n=t[e];n&&E(l,r(e,n))})),L.bind(0,l)};return r(t||{}),[r,n,(t,n)=>{const r=e.get(t);o(C(r),(t=>{n&&!k(n)?t.apply(0,n):t()}))}]},Kt=t=>JSON.stringify(t,((t,e)=>{if(v(e))throw new Error;return e})),Yt={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},Zt=(t,e)=>{const n={};return o(A(e).concat(A(t)),(r=>{const o=t[r],i=e[r];if(y(o)&&y(i))M(n[r]={},Zt(o,i)),I(n[r])&&delete n[r];else if(z(e,r)&&i!==o){let t=!0;if(g(o)||g(i))try{Kt(o)===Kt(i)&&(t=!1)}catch(et){}t&&(n[r]=i)}})),n},Gt="os-environment",Ut=`${Gt}-flexbox-glue`,Qt=`${Ut}-max`,te="data-overlayscrollbars",ee="data-overlayscrollbars-initialize",ne=`${te}-overflow-x`,re=`${te}-overflow-y`,oe="overflowVisible",ie="updating",se="os-viewport",le=`${se}-arrange`,ce=`${se}-scrollbar-hidden`,ae="os-overflow-visible",de="os-size-observer",ue=`${de}-appear`,fe=`${de}-listener`,pe="os-scrollbar",he=`${pe}-rtl`,be=`${pe}-horizontal`,we=`${pe}-vertical`,ve=`${pe}-track`,ge=`${pe}-handle`,ye=`${pe}-visible`,me=`${pe}-cornerless`,xe=`${pe}-transitionless`,$e=`${pe}-interaction`,Se=`${pe}-unusable`,Oe=`${pe}-auto-hidden`,Ee=`${pe}-wheel`,Ce=`${ve}-interactive`,ke=`${ge}-interactive`,Le={},ze=()=>Le,Ae="__osSizeObserverPlugin";const{round:Me,abs:Ie}=Math,Re="__osScrollbarsHidingPlugin",Ne="__osClickScrollPlugin";let Pe;const Te=(t,e,n,r)=>{J(t,e);const o=Nt(e),i=Rt(e),s=Tt(n);return r&&Y(e),{x:i.h-o.h+s.h,y:i.w-o.w+s.w}},Be=(t,e)=>{const n="hidden";i(t,{overflowX:n,overflowY:n,direction:"rtl"}),B(t,0);const r=qt(t),o=qt(e);B(t,-999);const s=qt(e);return{i:r.x===o.x,n:o.x!==s.x}},He=(t,e)=>{const n=Ot(t,Ut),r=Bt(t),o=Bt(e),i=wt(o,r,!0),s=Ot(t,Qt),l=Bt(t),c=Bt(e),a=wt(c,l,!0);return n(),s(),i&&a},Xe=()=>{const{body:t}=document,e=G(`<div class="${Gt}"><div></div></div>`)[0],n=e.firstChild,[r,,o]=Jt(),[l,c]=s({o:Te(t,e,n),u:ht},Te.bind(0,t,e,n,!0)),[a]=c(),d=(t=>{let e=!1;const r=Ot(t,ce);try{e="none"===i(t,rt("scrollbar-width"))||"none"===window.getComputedStyle(t,"::-webkit-scrollbar").getPropertyValue("display")}catch(n){}return r(),e})(e),u={x:0===a.x,y:0===a.y},f={elements:{host:null,padding:!d,viewport:t=>d&&t===t.ownerDocument.body&&t,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},p=M({},Yt),h=M.bind(0,{},p),b=M.bind(0,{},f),w={k:a,A:u,I:d,L:"-1"===i(e,"zIndex"),B:Be(e,n),V:He(e,n),Y:r.bind(0,"z"),j:r.bind(0,"r"),N:b,q:t=>M(f,t)&&b(),F:h,G:t=>M(p,t)&&h(),X:M({},f),U:M({},p)},v=window.addEventListener,g=yt((t=>o(t?"z":"r")),{g:33,v:99});if(T(e,"style"),Y(e),v("resize",g.bind(0,!1)),!d&&(!u.x||!u.y)){let t;v("resize",(()=>{const e=ze()[Re];t=t||e&&e.R(),t&&t(w,l,g.bind(0,!0))}))}return w},Fe=()=>(Pe||(Pe=Xe()),Pe),Ve=(t,e)=>v(e)?e.apply(0,t):e,_e=(t,e,n,r)=>{const o=u(r)?n:r;return Ve(t,o)||e.apply(0,t)},De=(t,e,n,r)=>{const o=u(r)?n:r,i=Ve(t,o);return!!i&&($(i)?i:e.apply(0,t))},je=new WeakMap,qe=t=>je.get(t),We=(t,e)=>t?e.split(".").reduce(((t,e)=>t&&z(t,e)?t[e]:void 0),t):void 0,Je=(t,e,n)=>r=>[We(t,r),n||void 0!==We(e,r)],Ke=t=>{let e=t;return[()=>e,t=>{e=M({},e,t)}]},Ye="tabindex",Ze=Z.bind(0,""),Ge=t=>{J(D(t),_(t)),Y(t)},Ue=t=>{const e=Fe(),{N:n,I:r}=e,o=ze()[Re],i=o&&o.T,{elements:s}=n(),{host:l,padding:c,viewport:a,content:d}=s,u=$(t),f=u?{}:t,{elements:p}=f,{host:h,padding:b,viewport:w,content:v}=p||{},g=u?t:f.target,y=V(g,"textarea"),m=g.ownerDocument,x=m.documentElement,S=g===m.body,C=m.defaultView,k=_e.bind(0,[g]),z=De.bind(0,[g]),M=Ve.bind(0,[g]),I=k.bind(0,Ze,a),R=z.bind(0,Ze,d),B=I(w),H=B===g,X=H&&S,F=!H&&R(v),j=!H&&$(B)&&B===F,q=j&&!!M(d),Z=q?I():B,G=q?F:R(),U=X?x:j?Z:B,Q=y?k(Ze,l,h):g,tt=X?U:Q,et=j?G:F,nt=m.activeElement,rt=!H&&C.top===C&&nt===g,ot={W:g,Z:tt,J:U,K:!H&&z(Ze,c,b),tt:et,nt:!H&&!r&&i&&i(e),ot:X?x:U,st:X?m:U,et:C,ct:m,rt:y,it:S,lt:u,ut:H,dt:j,ft:(t,e)=>H?((t,e,n)=>{const r=N(t,e)||"";return new Set(r.split(" ")).has(n)})(U,te,e):((t,e)=>$t(t,e,((t,e)=>t.contains(e))))(U,t),_t:(t,e,n)=>H?P(U,te,e,n):(n?Ot:St)(U,t)},it=A(ot).reduce(((t,e)=>{const n=ot[e];return E(t,!(!n||D(n))&&n)}),[]),st=t=>t?O(it,t)>-1:null,{W:lt,Z:ct,K:at,J:dt,tt:ut,nt:ft}=ot,pt=[()=>{T(ct,te),T(ct,ee),T(lt,ee),S&&(T(x,te),T(x,ee))}],ht=y&&st(ct);let bt=y?lt:_([ut,dt,at,ct,lt].find((t=>!1===st(t))));const wt=X?lt:ut||dt;return[ot,()=>{N(ct,te,H?"viewport":"host");const t=Ot(at,"os-padding"),e=Ot(dt,!H&&se),n=Ot(ut,"os-content"),o=S&&!H?Ot(D(g),ce):vt;if(ht&&(K(lt,ct),E(pt,(()=>{K(ct,lt),Y(ct)}))),J(wt,bt),J(ct,at),J(at||ct,!H&&dt),J(dt,ut),E(pt,(()=>{o(),T(dt,ne),T(dt,re),st(ut)&&Ge(ut),st(dt)&&Ge(dt),st(at)&&Ge(at),t(),e(),n()})),r&&!H&&E(pt,St.bind(0,dt,ce)),ft&&(((t,e)=>{W(D(t),t,e)})(dt,ft),E(pt,Y.bind(0,ft))),rt){const t=N(dt,Ye);N(dt,Ye,"-1"),dt.focus();const e=()=>t?N(dt,Ye,t):T(dt,Ye),n=Vt(m,"pointerdown keydown",(()=>{e(),n()}));E(pt,[e,n])}else nt&&nt.focus&&nt.focus();bt=0},L.bind(0,pt)]},Qe=(t,e)=>{const{tt:n}=t,[r]=e;return t=>{const{V:e}=Fe(),{ht:o}=r(),{gt:s}=t,l=(n||!e)&&s;return l&&i(n,{height:o?"":"100%"}),{vt:l,wt:l}}},tn=(t,e)=>{const[n,r]=e,{Z:o,K:l,J:c,ut:a}=t,[d,u]=s({u:bt,o:At()},At.bind(0,o,"padding",""));return(t,e,o)=>{let[s,f]=u(o);const{I:p,V:h}=Fe(),{bt:b}=n(),{vt:w,wt:v,yt:g}=t,[y,m]=e("paddingAbsolute");(w||f||!h&&v)&&([s,f]=d(o));const x=!a&&(m||g||f);if(x){const t=!y||!l&&!p,e=s.r+s.l,n=s.t+s.b,o={marginRight:t&&!b?-e:0,marginBottom:t?-n:0,marginLeft:t&&b?-e:0,top:t?-s.t:0,right:t?b?-s.r:"auto":0,left:t?b?"auto":-s.l:0,width:t?`calc(100% + ${e}px)`:""},a={paddingTop:t?s.t:0,paddingRight:t?s.r:0,paddingBottom:t?s.b:0,paddingLeft:t?s.l:0};i(l||c,o),i(c,a),r({K:s,St:!t,M:l?a:M({},o,a)})}return{xt:x}}},{max:en}=Math,nn=en.bind(0,0),rn="visible",on="hidden",sn={u:pt,o:{w:0,h:0}},ln={u:ht,o:{x:on,y:on}},cn=(t,e,n)=>n?Ot(t,e):St(t,e),an=t=>0===t.indexOf(rn),dn=(t,e)=>{const[n,r]=e,{Z:o,K:l,J:c,nt:a,ut:d,_t:u,it:f,et:p}=t,{k:h,V:b,I:w,A:v}=Fe(),g=ze()[Re],y=!d&&!w&&(v.x||v.y),m=f&&d,[x,$]=s(sn,Tt.bind(0,c)),[S,O]=s(sn,Pt.bind(0,c)),[E,C]=s(sn),[k,L]=s(sn),[z]=s(ln),A=(t,e)=>{if(i(c,{height:""}),e){const{St:e,K:r}=n(),{$t:s,P:l}=t,a=Tt(o),d=Nt(o),u="content-box"===i(c,"boxSizing"),f=e||u?r.b+r.t:0,p=!(v.x&&u);i(c,{height:d.h+a.h+(s.x&&p?l.x:0)-f})}},M=(t,e)=>{const n=w||t?0:42,r=(t,r,o)=>{const s=i(c,t),l="scroll"===(e?e[t]:s);return[s,l,l&&!w?r?n:o:0,r&&!!n]},[o,s,l,a]=r("overflowX",v.x,h.x),[d,u,f,p]=r("overflowY",v.y,h.y);return{Ct:{x:o,y:d},$t:{x:s,y:u},P:{x:l,y:f},D:{x:a,y:p}}},I=(t,e,r,o)=>{const{P:i,D:s}=t,{x:l,y:c}=s,{x:a,y:d}=i,{M:u}=n(),f=e?"marginLeft":"marginRight",p=e?"paddingLeft":"paddingRight",h=u[f],b=u.marginBottom,w=u[p],v=u.paddingBottom;o.width=`calc(100% + ${d+-1*h}px)`,o[f]=-d+h,o.marginBottom=-a+b,r&&(o[p]=w+(c?d:0),o.paddingBottom=v+(l?a:0))},[R,T]=g?g.H(y,b,c,a,n,M,I):[()=>y,()=>[vt]];return(t,e,s)=>{const{vt:a,Ot:f,wt:h,xt:g,gt:y,yt:B}=t,{ht:H,bt:X}=n(),[F,V]=e("showNativeOverlaidScrollbars"),[_,D]=e("overflow"),j=F&&v.x&&v.y,q=!d&&!b&&(a||h||f||V||y),W=an(_.x),J=an(_.y),K=W||J;let Y,Z=$(s),G=O(s),U=C(s),Q=L(s);if(V&&w&&u(ce,"scrollbarHidden",!j),q&&(Y=M(j),A(Y,H)),a||g||h||B||V){K&&u(ae,oe,!1);const[t,e]=T(j,X,Y),[n,r]=Z=x(s),[o,i]=G=S(s),l=Nt(c);let a=o,d=l;t(),(i||r||V)&&e&&!j&&R(e,o,n,X)&&(d=Nt(c),a=Pt(c));const f={w:nn(en(o.w,a.w)+n.w),h:nn(en(o.h,a.h)+n.h)},h={w:nn((m?p.innerWidth:d.w+nn(l.w-o.w))+n.w),h:nn((m?p.innerHeight+n.h:d.h+nn(l.h-o.h))+n.h)};Q=k(h),U=E(((t,e)=>{const n=window.devicePixelRatio%1!==0?1:0,r={w:nn(t.w-e.w),h:nn(t.h-e.h)};return{w:r.w>n?r.w:0,h:r.h>n?r.h:0}})(f,h),s)}const[tt,et]=Q,[nt,rt]=U,[ot,it]=G,[st,lt]=Z,ct={x:nt.w>0,y:nt.h>0},at=W&&J&&(ct.x||ct.y)||W&&ct.x&&!ct.y||J&&ct.y&&!ct.x;if(g||B||lt||it||et||rt||D||V||q){const t={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},e=((t,e,n,r)=>{const o=(t,e)=>{const n=an(t),r=e&&n&&t.replace(`${rn}-`,"")||"";return[e&&!n?t:"",an(r)?"hidden":r]},[i,s]=o(n.x,e.x),[l,c]=o(n.y,e.y);return r.overflowX=s&&l?s:i,r.overflowY=c&&i?c:l,M(t,r)})(j,ct,_,t),n=R(e,ot,st,X);d||I(e,X,n,t),q&&A(e,H),d?(N(o,ne,t.overflowX),N(o,re,t.overflowY)):i(c,t)}P(o,te,oe,at),cn(l,ae,at),!d&&cn(c,ae,K);const[dt,ut]=z(M(j).Ct);return r({Ct:dt,zt:{x:tt.w,y:tt.h},Tt:{x:nt.w,y:nt.h},Et:ct}),{It:ut,At:et,Lt:rt}}},un=(t,e,n)=>{const r={},i=e||{};return o(A(t).concat(A(i)),(e=>{const o=t[e],s=i[e];r[e]=!!(n||o||s)})),r},fn=(t,e,n,r)=>{let i=!1;const{Ht:s,Mt:l,Pt:c,Dt:a,Rt:d,kt:u}=r||{},f=yt((()=>{i&&n(!0)}),{g:33,v:99}),[p,h]=((t,e,n)=>{let r,i=!1;const s=s=>{if(n){const l=n.reduce(((e,n)=>{if(n){const[r,o]=n,i=o&&r&&(s?s(r):F(r,t));i&&i.length&&o&&b(o)&&E(e,[i,o.trim()],!0)}return e}),[]);o(l,(n=>o(n[0],(o=>{const s=n[1],l=r.get(o)||[];if(t.contains(o)){const t=Vt(o,s,(n=>{i?(t(),r.delete(o)):e(n)}));r.set(o,E(l,t))}else L(l),r.delete(o)}))))}};return n&&(r=new WeakMap,s()),[()=>{i=!0},s]})(t,f,c),w=l||[],v=(s||[]).concat(w),g=(i,s)=>{const l=d||vt,c=u||vt,f=new Set,p=new Set;let v=!1,g=!1;if(o(i,(n=>{const{attributeName:i,target:s,type:d,oldValue:u,addedNodes:h,removedNodes:y}=n,m="attributes"===d,x="childList"===d,$=t===s,S=m&&b(i)?N(s,i):0,E=0!==S&&u!==S,C=O(w,i)>-1&&E;if(e&&(x||!$)){const e=!m,d=m&&E,p=d&&a&&V(s,a),b=(p?!l(s,i,u,S):e||d)&&!c(n,!!p,t,r);o(h,(t=>f.add(t))),o(y,(t=>f.add(t))),g=g||b}!e&&$&&E&&!l(s,i,u,S)&&(p.add(i),v=v||C)})),f.size>0&&h((t=>C(f).reduce(((e,n)=>(E(e,F(t,n)),V(n,t)?E(e,n):e)),[]))),e)return!s&&g&&n(!1),[!1];if(p.size>0||v){const t=[C(p),v];return!s&&n.apply(0,t),t}},y=new it((t=>g(t)));return y.observe(t,{attributes:!0,attributeOldValue:!0,attributeFilter:v,subtree:e,childList:e,characterData:e}),i=!0,[()=>{i&&(p(),y.disconnect(),i=!1)},()=>{if(i){f.m();const t=y.takeRecords();return!k(t)&&g(t,!0)}}]},pn=3333333,hn=t=>t&&(t.height||t.width),bn=(t,e,n)=>{const{Bt:r=!1,Vt:o=!1}=n||{},i=ze()[Ae],{B:l}=Fe(),c=G(`<div class="${de}"><div class="${fe}"></div></div>`)[0],a=c.firstChild,d=zt.bind(0,t),[u]=s({o:void 0,_:!0,u:(t,e)=>!(!t||!hn(t)&&hn(e))}),f=t=>{const n=g(t)&&t.length>0&&y(t[0]),o=!n&&w(t[0]);let i=!1,s=!1,a=!0;if(n){const[e,,n]=u(t.pop().contentRect),r=hn(e),o=hn(n);i=!n||!r,s=!o&&r,a=!i}else o?[,a]=t:s=!0===t;if(r&&a){const e=o?t[0]:zt(c);B(c,e?l.n?-pn:l.i?0:pn:pn),H(c,pn)}i||e({vt:!o,Yt:o?t:void 0,Vt:!!s})},p=[];let h=!!o&&f;return[()=>{L(p),Y(c)},()=>{if(lt){const t=new lt(f);t.observe(a),E(p,(()=>{t.disconnect()}))}else if(i){const[t,e]=i.O(a,f,o);h=t,E(p,e)}if(r){const[t]=s({o:!d()},d);E(p,Vt(c,"scroll",(e=>{const n=t(),[r,o]=n;o&&(St(a,"ltr rtl"),Ot(a,r?"rtl":"ltr"),f(n)),_t(e)})))}h&&(Ot(c,ue),E(p,Vt(c,"animationstart",h,{C:!!lt}))),(lt||i)&&J(t,c)}]},wn=(t,e)=>{let n;const r=Z("os-trinsic-observer"),o=[],[i]=s({o:!1}),l=(t,n)=>{if(t){const r=i((t=>0===t.h||t.isIntersecting||t.intersectionRatio>0)(t)),[,o]=r;if(o)return!n&&e(r),[r]}},c=(t,e)=>{if(t&&t.length>0)return l(t.pop(),e)};return[()=>{L(o),Y(r)},()=>{if(st)n=new st((t=>c(t)),{root:t}),n.observe(r),E(o,(()=>{n.disconnect()}));else{const t=()=>{const t=Rt(r);l(t)},[e,n]=bn(r,t);E(o,e),n(),t()}J(t,r)},()=>{if(n)return c(n.takeRecords(),!0)}]},vn=`[${te}]`,gn=`.${se}`,yn=["tabindex"],mn=["wrap","cols","rows"],xn=["id","class","style","open"],$n=(t,e,n)=>{let r,i,l;const{Z:c,J:a,tt:d,rt:u,ut:f,ft:p,_t:w}=t,{V:y}=Fe(),[m]=s({u:pt,o:{w:0,h:0}},(()=>{const t=p(ae,oe),e=p(le,""),n=e&&B(a),r=e&&H(a);w(ae,oe),w(le,""),w("",ie,!0);const o=Pt(d),i=Pt(a),s=Tt(a);return w(ae,oe,t),w(le,"",e),w("",ie),B(a,n),H(a,r),{w:i.w+o.w+s.w,h:i.h+o.h+s.h}})),x=u?mn:xn.concat(mn),$=yt(n,{g:()=>r,v:()=>i,p(t,e){const[n]=t,[r]=e;return[A(n).concat(A(r)).reduce(((t,e)=>(t[e]=n[e]||r[e],t)),{})]}}),S=t=>{o(t||yn,(t=>{if(O(yn,t)>-1){const e=N(c,t);b(e)?N(a,t,e):T(a,t)}}))},C=(t,r)=>{const[o,i]=t,s={gt:i};return e({ht:o}),!r&&n(s),s},k=({vt:t,Yt:r,Vt:o})=>{const i=!t||o?n:$;let s=!1;if(r){const[t,n]=r;s=n,e({bt:t})}i({vt:t,yt:s})},L=(t,e)=>{const[,r]=m(),o={wt:r};return r&&!e&&(t?n:$)(o),o},z=(t,e,n)=>{const r={Ot:e};return e?!n&&$(r):f||S(t),r},[I,R,P]=d||!y?wn(c,C):[vt,vt,vt],[X,F]=f?[vt,vt]:bn(c,k,{Vt:!0,Bt:!0}),[V,_]=fn(c,!1,z,{Mt:xn,Ht:xn.concat(yn)}),D=f&&lt&&new lt(k.bind(0,{vt:!0}));return D&&D.observe(c),S(),[()=>{I(),X(),l&&l[0](),D&&D.disconnect(),V()},()=>{F(),R()},()=>{const t={},e=_(),n=P(),r=l&&l[1]();return e&&M(t,z.apply(0,E(e,!0))),n&&M(t,C.apply(0,E(n,!0))),r&&M(t,L.apply(0,E(r,!0))),t},t=>{const[e]=t("update.ignoreMutation"),[n,o]=t("update.attributes"),[s,c]=t("update.elementEvents"),[u,p]=t("update.debounce"),b=t=>v(e)&&e(t);if((c||o)&&(l&&(l[1](),l[0]()),l=fn(d||a,!0,L,{Ht:x.concat(n||[]),Pt:s,Dt:vn,kt:(t,e)=>{const{target:n,attributeName:r}=t;return!(e||!r||f)&&q(n,vn,gn)||!!j(n,`.${pe}`)||!!b(t)}})),p)if($.m(),g(u)){const t=u[0],e=u[1];r=h(t)&&t,i=h(e)&&e}else h(u)?(r=u,i=!1):(r=!1,i=!1)}]},Sn={x:0,y:0},On={K:{t:0,r:0,b:0,l:0},St:!1,M:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:Sn,Tt:Sn,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:!1},En=(t,e)=>{const n=Je(e,{}),r=Ke(On),[i,s,l]=Jt(),[c,a]=r,[d,u,f]=Ue(t),p=((t,e)=>{const{W:n,J:r,_t:i,ut:s}=t,{I:l,A:c,V:a}=Fe(),d=!l&&(c.x||c.y),u=[Qe(t,e),tn(t,e),dn(t,e)];return(t,e,l)=>{const c=un(M({vt:!1,xt:!1,yt:!1,gt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},e),{},l),f=d||!a,p=f&&B(r),h=f&&H(r);i("",ie,!0);let b=c;return o(u,(e=>{b=un(b,e(b,t,!!l)||{},l)})),B(r,p),H(r,h),i("",ie),s||(B(n,0),H(n,0)),b}})(d,r),h=(t,e,n)=>{const r=A(t).some((e=>t[e])),o=r||!I(e)||n;return o&&l("u",[t,e,n]),o},[b,w,v,g]=$n(d,a,(t=>h(p(n,t),{},!1))),y=c.bind(0);return y.jt=t=>i("u",t),y.Nt=()=>{const{W:t,J:e}=d,n=B(t),r=H(t);w(),u(),B(e,n),H(e,r)},y.qt=d,[(t,n)=>{const r=Je(e,t,n);return g(r),h(p(r,v(),n),t,!!n)},y,()=>{s(),b(),f()}]},{round:Cn}=Math,kn=(t,e)=>Vt(t,"mousedown",Vt.bind(0,e,"click",_t,{C:!0,$:!0}),{$:!0}),Ln=(t,e,n,r,o,i)=>{const{B:s}=Fe(),{Ft:l,Gt:c,Xt:a}=n,d="scroll"+(i?"Left":"Top"),u="client"+(i?"X":"Y"),f=i?"width":"height",p=i?"left":"top",h=i?"w":"h",b=i?"x":"y",w=(t,e)=>n=>{const{Tt:u}=o(),f=Rt(c)[h]-Rt(l)[h],p=e*n/f*u[b],w=zt(a)&&i?s.n||s.i?1:-1:1;r[d]=t+p*w};return Vt(c,"pointerdown",(n=>{const o=j(n.target,`.${ge}`)===l;if(((t,e,n)=>{const r=e.scrollbars,{button:o,isPrimary:i,pointerType:s}=t,{pointers:l}=r;return 0===o&&i&&r[n?"dragScroll":"clickScroll"]&&(l||[]).includes(s)})(n,t,o)){const t=!o&&n.shiftKey,i=()=>Bt(l),s=()=>Bt(c),a=(t,e)=>(t||i())[p]-(e||s())[p],h=w(r[d]||0,1/(t=>{const{width:e,height:n}=Bt(t),{w:r,h:o}=Rt(t);return{x:Cn(e)/r||1,y:Cn(n)/o||1}})(r)[b]),v=n[u],g=i(),y=s(),m=g[f],x=a(g,y)+m/2,$=v-y[p],S=o?0:$-x,O=[Vt(e,"selectstart",(t=>Dt(t)),{S:!1}),Vt(c,"pointermove",(e=>{const n=e[u]-v;(o||t)&&h(S+n)}))];if(t)h(S);else if(!o){const t=ze()[Ne];t&&E(O,t.O(h,a,S,m,$))}Vt(c,"pointerup",(t=>{L(O),c.releasePointerCapture(t.pointerId)}),{C:!0}),c.setPointerCapture(n.pointerId)}}))},{min:zn,max:An,abs:Mn,round:In}=Math,Rn=(t,e,n,r)=>{if(r){const t=n?"x":"y",{Tt:e,zt:o}=r,i=o[t],s=e[t];return An(0,zn(1,i/(i+s)))}const o=n?"w":"h",i=Rt(t)[o],s=Rt(e)[o];return An(0,zn(1,i/s))},Nn=(t,e,n)=>{const{N:r}=Fe(),{scrollbars:s}=r(),{slot:l}=s,{ct:c,W:a,Z:d,J:u,lt:f,ot:p,it:h,ut:b}=e,{scrollbars:v}=f?{}:t,{slot:g}=v||{},y=De([a,d,u],(()=>b&&h?a:d),l,g),m=(t,e,n)=>{const r=n?Ot:St;o(t,(t=>{r(t.Xt,e)}))},x=(t,e)=>{o(t,(t=>{const[n,r]=e(t);i(n,r)}))},$=(t,e,n)=>{x(t,(t=>{const{Ft:r,Gt:o}=t;return[r,{[n?"width":"height"]:`${(100*Rn(r,o,n,e)).toFixed(3)}%`}]}))},S=(t,e,n)=>{const r=n?"X":"Y";x(t,(t=>{const{Ft:o,Gt:i,Xt:s}=t,l=((t,e,n,r,o,i)=>{const{B:s}=Fe(),l=i?"x":"y",c=i?"Left":"Top",{Tt:a}=r,d=In(a[l]),u=Mn(n[`scroll${c}`]),f=i&&o,p=s.i?u:d-u,h=zn(1,(f?p:u)/d),b=Rn(t,e,i);return 1/b*(1-b)*h})(o,i,p,e,zt(s),n);return[o,{transform:l===l?`translate${r}(${(100*l).toFixed(3)}%)`:""}]}))},O=[],C=[],z=[],A=(t,e,n)=>{const r=w(n),o=!r||!n;(!r||n)&&m(C,t,e),o&&m(z,t,e)},M=t=>{const e=t?be:we,r=t?C:z,o=k(r)?xe:"",i=Z(`${pe} ${e} ${o}`),s=Z(ve),l=Z(ge),a={Xt:i,Gt:s,Ft:l};return J(i,s),J(s,l),E(r,a),E(O,[Y.bind(0,i),n(a,A,c,d,p,t)]),a},I=M.bind(0,!0),R=M.bind(0,!1);return I(),R(),[{Ut:t=>{$(C,t,!0),$(z,t)},Wt:t=>{S(C,t,!0),S(z,t)},Zt:A,Jt:{Kt:C,Qt:I,tn:x.bind(0,C)},nn:{Kt:z,Qt:R,tn:x.bind(0,z)}},()=>{J(y,C[0].Xt),J(y,z[0].Xt),dt((()=>{A(xe)}),300)},L.bind(0,O)]},Pn=(t,e,n,r)=>{let o,i,s,l,c,a=0;const d=Ke({}),[u]=d,[f,p]=gt(),[h,b]=gt(),[w,v]=gt(100),[g,y]=gt(100),[m,x]=gt((()=>a)),[$,S,O]=Nn(t,n.qt,((t,e)=>(n,r,o,i,s,l)=>{const{Xt:c}=n,[a,d]=gt(333),u=!!s.scrollBy;let f=!0;return L.bind(0,[Vt(c,"pointerenter",(()=>{r($e,!0)})),Vt(c,"pointerleave pointercancel",(()=>{r($e)})),Vt(c,"wheel",(t=>{const{deltaX:e,deltaY:n,deltaMode:o}=t;u&&f&&0===o&&D(c)===i&&s.scrollBy({left:e,top:n,behavior:"smooth"}),f=!1,r(Ee,!0),a((()=>{f=!0,r(Ee)})),Dt(t)}),{S:!1,$:!0}),kn(c,o),Ln(t,o,n,s,e,l),d])})(e,n)),{Z:E,J:C,ot:k,st:z,ut:A,it:M}=n.qt,{Jt:I,nn:R,Zt:N,Ut:P,Wt:T}=$,{tn:X}=I,{tn:F}=R,V=t=>{const{Xt:e}=t,n=A&&!M&&D(e)===C&&e;return[n,{transform:n?`translate(${B(k)}px, ${H(k)}px)`:""}]},_=(t,e)=>{if(x(),t)N(Oe);else{const t=()=>N(Oe,!0);a>0&&!e?m(t):t()}},j=()=>{l=i,l&&_(!0)},q=[v,x,y,b,p,O,Vt(E,"pointerover",j,{C:!0}),Vt(E,"pointerenter",j),Vt(E,"pointerleave",(()=>{l=!1,i&&_(!1)})),Vt(E,"pointermove",(()=>{o&&f((()=>{v(),_(!0),g((()=>{o&&_(!1)}))}))})),Vt(z,"scroll",(t=>{h((()=>{T(n()),s&&_(!0),w((()=>{s&&!l&&_(!1)}))})),r(t),A&&X(V),A&&F(V)}))],W=u.bind(0);return W.qt=$,W.Nt=S,[(t,r,l)=>{const{At:d,Lt:u,It:f,yt:p}=l,{A:h}=Fe(),b=Je(e,t,r),w=n(),{Tt:v,Ct:g,bt:y}=w,[m,x]=b("showNativeOverlaidScrollbars"),[$,S]=b("scrollbars.theme"),[O,E]=b("scrollbars.visibility"),[C,k]=b("scrollbars.autoHide"),[L]=b("scrollbars.autoHideDelay"),[z,A]=b("scrollbars.dragScroll"),[I,R]=b("scrollbars.clickScroll"),B=d||u||p,H=f||E,X=m&&h.x&&h.y,F=(t,e)=>{const n="visible"===O||"auto"===O&&"scroll"===t;return N(ye,n,e),n};if(a=L,x&&N("os-theme-none",X),S&&(N(c),N($,!0),c=$),k&&(o="move"===C,i="leave"===C,s="never"!==C,_(!s,!0)),A&&N(ke,z),R&&N(Ce,I),H){const t=F(g.x,!0),e=F(g.y,!1);N(me,!(t&&e))}B&&(P(w),T(w),N(Se,!v.x,!0),N(Se,!v.y,!1),N(he,y&&!M))},W,L.bind(0,q)]},Tn=(t,e,n)=>{v(t)&&t(e||void 0,n||void 0)},Bn=(t,e,n)=>{const{F:r,N:i,Y:s,j:l}=Fe(),c=ze(),a=$(t),d=a?t:t.target,p=qe(d);if(e&&!p){let p=!1;const h=t=>{const e=ze().__osOptionsValidationPlugin,n=e&&e.O;return n?n(t,!0):t},b=M({},r(),h(e)),[w,v,g]=Jt(n),[y,m,x]=En(t,b),[$,S,O]=Pn(t,b,m,(t=>g("scroll",[R,t]))),E=(t,e)=>y(t,!!e),C=E.bind(0,{},!0),k=s(C),L=l(C),z=t=>{(t=>{je.delete(t)})(d),k(),L(),O(),x(),p=!0,g("destroyed",[R,!!t]),v()},R={options(t,e){if(t){const n=e?r():{},o=Zt(b,M(n,h(t)));I(o)||(M(b,o),E(o))}return M({},b)},on:w,off:(t,e)=>{t&&e&&v(t,e)},state(){const{zt:t,Tt:e,Ct:n,Et:r,K:o,St:i,bt:s}=m();return M({},{overflowEdge:t,overflowAmount:e,overflowStyle:n,hasOverflow:r,padding:o,paddingAbsolute:i,directionRTL:s,destroyed:p})},elements(){const{W:t,Z:e,K:n,J:r,tt:o,ot:i,st:s}=m.qt,{Jt:l,nn:c}=S.qt,a=t=>{const{Ft:e,Gt:n,Xt:r}=t;return{scrollbar:r,track:n,handle:e}},d=t=>{const{Kt:e,Qt:n}=t,r=a(e[0]);return M({},r,{clone:()=>{const t=a(n());return $({},!0,{}),t}})};return M({},{target:t,host:e,padding:n||r,viewport:r,content:o||r,scrollOffsetElement:i,scrollEventElement:s,scrollbarHorizontal:d(l),scrollbarVertical:d(c)})},update:t=>E({},t),destroy:z.bind(0)};return m.jt(((t,e,n)=>{$(e,n,t)})),((t,e)=>{je.set(t,e)})(d,R),o(A(c),(t=>Tn(c[t],0,R))),((t,e,n)=>{const{nativeScrollbarsOverlaid:r,body:o}=n||{},{A:i,I:s}=Fe(),{nativeScrollbarsOverlaid:l,body:c}=e,a=null!=r?r:l,d=u(o)?c:o,p=(i.x||i.y)&&a,h=t&&(f(d)?!s:d);return!!p||!!h})(m.qt.it,i().cancel,!a&&t.cancel)?(z(!0),R):(m.Nt(),S.Nt(),g("initialized",[R]),m.jt(((t,e,n)=>{const{vt:r,yt:o,gt:i,At:s,Lt:l,It:c,wt:a,Ot:d}=t;g("updated",[R,{updateHints:{sizeChanged:r,directionChanged:o,heightIntrinsicChanged:i,overflowEdgeChanged:s,overflowAmountChanged:l,overflowStyleChanged:c,contentMutation:a,hostMutation:d},changedOptions:e,force:n}])})),R.update(!0),R)}return p};Bn.plugin=t=>{o((t=>{const e=[];return o(g(t)?t:[t],(t=>{o(A(t),(n=>{E(e,Le[n]=t[n])}))})),e})(t),(t=>Tn(t,Bn)))},Bn.valid=t=>{const e=t&&t.elements,n=v(e)&&e();return x(n)&&!!qe(n.target)},Bn.env=()=>{const{k:t,A:e,I:n,B:r,V:o,L:i,X:s,U:l,N:c,q:a,F:d,G:u}=Fe();return M({},{scrollbarsSize:t,scrollbarsOverlaid:e,scrollbarsHiding:n,rtlScrollBehavior:r,flexboxGlue:o,cssCustomProperties:i,staticDefaultInitialization:s,staticDefaultOptions:l,getDefaultInitialization:c,setDefaultInitialization:a,getDefaultOptions:d,setDefaultOptions:u})};const Hn=()=>{if(typeof window>"u"){const t=()=>{};return[t,t]}let t,e;const n=window,r="function"==typeof n.requestIdleCallback,o=n.requestAnimationFrame,i=n.cancelAnimationFrame,s=r?n.requestIdleCallback:o,l=r?n.cancelIdleCallback:i,c=()=>{l(t),i(e)};return[(n,i)=>{c(),t=s(r?()=>{c(),e=o(n)}:n,"object"==typeof i?i:{timeout:2233})},c]},Xn=t=>{const{options:e,events:n,defer:o}=t||{},[i,s]=(0,r.useMemo)(Hn,[]),l=(0,r.useRef)(null),c=(0,r.useRef)(o),a=(0,r.useRef)(e),d=(0,r.useRef)(n);return(0,r.useEffect)((()=>{c.current=o}),[o]),(0,r.useEffect)((()=>{const{current:t}=l;a.current=e,Bn.valid(t)&&t.options(e||{},!0)}),[e]),(0,r.useEffect)((()=>{const{current:t}=l;d.current=n,Bn.valid(t)&&t.on(n||{},!0)}),[n]),(0,r.useEffect)((()=>()=>{var t;s(),null==(t=l.current)||t.destroy()}),[]),(0,r.useMemo)((()=>[t=>{const e=l.current;if(Bn.valid(e))return;const n=c.current,r=a.current||{},o=d.current||{},s=()=>l.current=Bn(t,r,o);n?i(s,n):s()},()=>l.current]),[])};(0,r.forwardRef)(((t,e)=>{const{element:n="div",options:o,events:i,defer:s,children:l,...c}=t,a=n,d=(0,r.useRef)(null),u=(0,r.useRef)(null),[f,p]=Xn({options:o,events:i,defer:s});return(0,r.useEffect)((()=>{const{current:t}=d,{current:e}=u;return t&&e&&f({target:t,elements:{viewport:e,content:e}}),()=>{var t;return null==(t=p())?void 0:t.destroy()}}),[f,n]),(0,r.useImperativeHandle)(e,(()=>({osInstance:p,getElement:()=>d.current})),[]),r.createElement(a,{"data-overlayscrollbars-initialize":"",ref:d,...c},r.createElement("div",{ref:u},l))}))}}]);
//# sourceMappingURL=1002-984b5de54567e2b0.js.map