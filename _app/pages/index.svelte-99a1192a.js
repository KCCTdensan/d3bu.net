import{S as Et,i as dt,s as wt,e as f,t as v,k as $,c as o,a as _,h as b,m as C,d as e,b as j,g as m,R as a,j as it,x as $t,l as pt,y as Ct,z as At,r as Dt,p as kt,C as yt,N as Rt}from"../chunks/index-81caae5d.js";import{M as jt}from"../chunks/meta-8b52806f.js";import{d as mt}from"../chunks/fmt-158ed921.js";import"../chunks/stores-2134a6ca.js";function vt(u,l,c){const r=u.slice();return r[1]=l[c],r}function bt(u){let l,c=u[1].date?`${mt(new Date(u[1].date))} - `:"",r,w,A,R=u[1].title+"",D,N,S,E,H,k=(u[1].author||"KCCTdensan")+"",d,L;return{c(){l=f("article"),r=v(c),w=$(),A=f("a"),D=v(R),S=$(),E=f("span"),H=v("by "),d=v(k),L=$(),this.h()},l(p){l=o(p,"ARTICLE",{});var i=_(l);r=b(i,c),w=C(i),A=o(i,"A",{href:!0});var y=_(A);D=b(y,R),y.forEach(e),S=C(i),E=o(i,"SPAN",{class:!0});var P=_(E);H=b(P,"by "),d=b(P,k),P.forEach(e),L=C(i),i.forEach(e),this.h()},h(){j(A,"href",N=`/news/${u[1].slug}`),j(E,"class","inline-block")},m(p,i){m(p,l,i),a(l,r),a(l,w),a(l,A),a(A,D),a(l,S),a(l,E),a(E,H),a(E,d),a(l,L)},p(p,i){i&1&&c!==(c=p[1].date?`${mt(new Date(p[1].date))} - `:"")&&it(r,c),i&1&&R!==(R=p[1].title+"")&&it(D,R),i&1&&N!==(N=`/news/${p[1].slug}`)&&j(A,"href",N),i&1&&k!==(k=(p[1].author||"KCCTdensan")+"")&&it(d,k)},d(p){p&&e(l)}}}function Nt(u){let l,c,r,w,A,R,D,N,S,E,H,k,d,L,p,i,y,P,O,I,Z,Q,T,K,F,x,g,tt,G,M,et,at,V,q,lt,W,z,X;l=new jt({props:{title:"\u795E\u6238\u9AD8\u5C02 \u96FB\u7B97\u90E8",description:"\u795E\u6238\u9AD8\u5C02\u96FB\u7B97\u90E8\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u3059\uFF0E",noTitleFormat:!0}});let B=u[0].data,h=[];for(let t=0;t<B.length;t+=1)h[t]=bt(vt(u,B,t));return{c(){$t(l.$$.fragment),c=$(),r=f("h1"),w=f("span"),A=v("\u795E\u6238\u9AD8\u5C02"),R=$(),D=f("span"),N=v("\u96FB\u7B97\u90E8"),S=$(),E=f("h2"),H=v("\u3053\u306E\u30B5\u30A4\u30C8\u306B\u3064\u3044\u3066"),k=$(),d=f("p"),L=v("2022\u5E74\u306B(\u518D\u5EA6)\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u3057\u305F\uFF0C\u96FB\u7B97\u90E8\u306E\u65B0\u3057\u3044\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u3059!"),p=f("br"),i=$(),y=f("a"),P=v("\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9(github)"),O=$(),I=f("h3"),Z=v("\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3"),Q=$(),T=f("ul"),K=f("li"),F=f("a"),x=v("2018\u5E74\u9803"),g=v(" - Riot.js\u88FD"),tt=$(),G=f("li"),M=f("a"),et=v("2021\u5E74\u9803"),at=v(" - Gatsby\u88FD"),V=$(),q=f("h2"),lt=v("\u65B0\u7740\u60C5\u5831"),W=$();for(let t=0;t<h.length;t+=1)h[t].c();z=pt(),this.h()},l(t){Ct(l.$$.fragment,t),c=C(t),r=o(t,"H1",{});var s=_(r);w=o(s,"SPAN",{class:!0});var n=_(w);A=b(n,"\u795E\u6238\u9AD8\u5C02"),n.forEach(e),R=C(s),D=o(s,"SPAN",{class:!0});var U=_(D);N=b(U,"\u96FB\u7B97\u90E8"),U.forEach(e),s.forEach(e),S=C(t),E=o(t,"H2",{});var ft=_(E);H=b(ft,"\u3053\u306E\u30B5\u30A4\u30C8\u306B\u3064\u3044\u3066"),ft.forEach(e),k=C(t),d=o(t,"P",{});var J=_(d);L=b(J,"2022\u5E74\u306B(\u518D\u5EA6)\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u3057\u305F\uFF0C\u96FB\u7B97\u90E8\u306E\u65B0\u3057\u3044\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3067\u3059!"),p=o(J,"BR",{}),i=C(J),y=o(J,"A",{href:!0,target:!0});var ot=_(y);P=b(ot,"\u30BD\u30FC\u30B9\u30B3\u30FC\u30C9(github)"),ot.forEach(e),J.forEach(e),O=C(t),I=o(t,"H3",{});var ht=_(I);Z=b(ht,"\u65E7\u30D0\u30FC\u30B8\u30E7\u30F3"),ht.forEach(e),Q=C(t),T=o(t,"UL",{});var Y=_(T);K=o(Y,"LI",{});var st=_(K);F=o(st,"A",{href:!0});var _t=_(F);x=b(_t,"2018\u5E74\u9803"),_t.forEach(e),g=b(st," - Riot.js\u88FD"),st.forEach(e),tt=C(Y),G=o(Y,"LI",{});var rt=_(G);M=o(rt,"A",{href:!0});var ut=_(M);et=b(ut,"2021\u5E74\u9803"),ut.forEach(e),at=b(rt," - Gatsby\u88FD"),rt.forEach(e),Y.forEach(e),V=C(t),q=o(t,"H2",{});var ct=_(q);lt=b(ct,"\u65B0\u7740\u60C5\u5831"),ct.forEach(e),W=C(t);for(let nt=0;nt<h.length;nt+=1)h[nt].l(t);z=pt(),this.h()},h(){j(w,"class","inline-block"),j(D,"class","inline-block"),j(y,"href","https://github.com/KCCTdensan/d3bu.net"),j(y,"target","_blank"),j(F,"href","/old/v0/"),j(M,"href","/old/v1/")},m(t,s){At(l,t,s),m(t,c,s),m(t,r,s),a(r,w),a(w,A),a(r,R),a(r,D),a(D,N),m(t,S,s),m(t,E,s),a(E,H),m(t,k,s),m(t,d,s),a(d,L),a(d,p),a(d,i),a(d,y),a(y,P),m(t,O,s),m(t,I,s),a(I,Z),m(t,Q,s),m(t,T,s),a(T,K),a(K,F),a(F,x),a(K,g),a(T,tt),a(T,G),a(G,M),a(M,et),a(G,at),m(t,V,s),m(t,q,s),a(q,lt),m(t,W,s);for(let n=0;n<h.length;n+=1)h[n].m(t,s);m(t,z,s),X=!0},p(t,[s]){if(s&1){B=t[0].data;let n;for(n=0;n<B.length;n+=1){const U=vt(t,B,n);h[n]?h[n].p(U,s):(h[n]=bt(U),h[n].c(),h[n].m(z.parentNode,z))}for(;n<h.length;n+=1)h[n].d(1);h.length=B.length}},i(t){X||(Dt(l.$$.fragment,t),X=!0)},o(t){kt(l.$$.fragment,t),X=!1},d(t){yt(l,t),t&&e(c),t&&e(r),t&&e(S),t&&e(E),t&&e(k),t&&e(d),t&&e(O),t&&e(I),t&&e(Q),t&&e(T),t&&e(V),t&&e(q),t&&e(W),Rt(h,t),t&&e(z)}}}async function It({fetch:u,params:l}){return{props:{newsData:await u("/api/articles/news.json").then(r=>r.json())}}}function St(u,l,c){let{newsData:r}=l;return u.$$set=w=>{"newsData"in w&&c(0,r=w.newsData)},[r]}class Kt extends Et{constructor(l){super();dt(this,l,St,Nt,wt,{newsData:0})}}export{Kt as default,It as load};
