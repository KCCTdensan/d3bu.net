function S(){}function J(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function H(){return Object.create(null)}function p(t){t.forEach(O)}function K(t){return typeof t=="function"}function dt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ht(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function Q(t){return Object.keys(t).length===0}function U(t,...n){if(t==null)return S;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function mt(t,n,e){t.$$.on_destroy.push(U(n,e))}function pt(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?J(e.ctx.slice(),t[1](i(n))):e.ctx}function yt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(n.dirty.length,r.length);for(let s=0;s<l;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,u){if(r){const l=P(n,e,i,u);t.p(l,r)}}function xt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let A=!1;function V(){A=!0}function X(){A=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const f=n[o];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=o?r+1:Y(1,r,y=>n[e[y]].claim_order,o))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const u=[],l=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);s>=c;s--)l.push(n[s]);s--}for(;s>=0;s--)l.push(n[s]);u.reverse(),l.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<l.length;c++){for(;o<u.length&&l[c].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(l[c],f)}}function tt(t,n){if(A){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){A&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function $t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function it(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function wt(){return j(" ")}function At(){return j("")}function rt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Et(t,n){for(const e in n)rt(t,e,n[e])}function ct(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(n(s)){const c=e(s);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(n(s)){const c=e(s);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function F(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];e[s.name]||u.push(s.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(n))}function Tt(t,n,e){return F(t,n,e,D)}function Nt(t,n,e){return F(t,n,e,it)}function lt(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function kt(t){return lt(t," ")}function q(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function vt(t){const n=q(t,"HTML_TAG_START",0),e=q(t,"HTML_TAG_END",n);if(n===e)return new L;G(t);const i=t.splice(n,e-n+1);w(i[0]),w(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(r)}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function jt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Ct(t,n,e){t.classList[e?"add":"remove"](n)}function Mt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class st{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=D(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class L extends st{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}let m;function h(t){m=t}function E(){if(!m)throw new Error("Function called outside component initialization");return m}function Ht(t){E().$$.on_mount.push(t)}function qt(t){E().$$.after_update.push(t)}function Lt(t,n){E().$$.context.set(t,n)}function Bt(t){return E().$$.context.get(t)}const d=[],B=[],b=[],N=[],I=Promise.resolve();let k=!1;function R(){k||(k=!0,I.then(W))}function Ot(){return R(),I}function v(t){b.push(t)}function Pt(t){N.push(t)}const T=new Set;let x=0;function W(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),ot(n.$$)}for(h(null),d.length=0,x=0;B.length;)B.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];T.has(e)||(T.add(e),e())}b.length=0}while(d.length);for(;N.length;)N.pop()();k=!1,T.clear(),h(t)}function ot(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const $=new Set;let _;function Dt(){_={r:0,c:[],p:_}}function Gt(){_.r||p(_.c),_=_.p}function ut(t,n){t&&t.i&&($.delete(t),t.i(n))}function zt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Ft(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const l=t[u],s=n[u];if(s){for(const c in l)c in s||(i[c]=1);for(const c in s)r[c]||(e[c]=s[c],r[c]=1);t[u]=s}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function It(t){return typeof t=="object"&&t!==null?t:{}}function Rt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Wt(t){t&&t.c()}function Jt(t,n){t&&t.l(n)}function at(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:l,after_update:s}=t.$$;r&&r.m(n,e),i||v(()=>{const c=u.map(O).filter(K);l?l.push(...c):p(c),t.$$.on_mount=[]}),s.forEach(v)}function ft(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(d.push(t),R(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Kt(t,n,e,i,r,u,l,s=[-1]){const c=m;h(t);const o=t.$$={fragment:null,ctx:null,props:u,update:S,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:H(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};l&&l(o.root);let f=!1;if(o.ctx=e?e(t,n.props||{},(a,y,...C)=>{const M=C.length?C[0]:y;return o.ctx&&r(o.ctx[a],o.ctx[a]=M)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](M),f&&_t(t,a)),y}):[],o.update(),f=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){V();const a=ct(n.target);o.fragment&&o.fragment.l(a),a.forEach(w)}else o.fragment&&o.fragment.c();n.intro&&ut(t.$$.fragment),at(t,n.target,n.anchor,n.customElement),X(),W()}h(c)}class Qt{$destroy(){ft(this,1),this.$destroy=S}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!Q(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ft as A,It as B,ft as C,J as D,Ot as E,it as F,Nt as G,Et as H,pt as I,Ct as J,gt as K,xt as L,yt as M,$t as N,Pt as O,B as P,Rt as Q,tt as R,Qt as S,ht as T,mt as U,Bt as V,Mt as W,bt as X,L as Y,vt as Z,ct as a,rt as b,Tt as c,w as d,D as e,jt as f,et as g,lt as h,Kt as i,St as j,wt as k,At as l,kt as m,S as n,Dt as o,zt as p,Gt as q,ut as r,dt as s,j as t,Lt as u,qt as v,Ht as w,Wt as x,Jt as y,at as z};
