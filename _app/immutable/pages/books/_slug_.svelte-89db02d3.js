import{S as G,i as J,s as K,l as _,a as w,u as j,m as f,p as b,h as v,c as A,v as H,K as T,q as l,b as F,J as c,w as N,n as C,L as O,x as P,y as Q,z as R,f as W,t as X,C as Y,M as Z}from"../../chunks/index-5c2ebb37.js";import{B as x}from"../../chunks/data-7d7485f1.js";import{b as z}from"../../chunks/paths-b9644fda.js";function ee(t){var L,S;let e,r,s,a,i,h,u,p,k=((L=t[1])==null?void 0:L.title)+"",E,M,m,I=((S=t[1])==null?void 0:S.description)+"",$,d,q,V;return{c(){e=_("div"),r=_("div"),s=_("img"),h=w(),u=_("div"),p=_("div"),E=j(k),M=w(),m=_("div"),$=w(),d=_("a"),q=j("Apskat\u012Bt internetveikal\u0101"),this.h()},l(n){e=f(n,"DIV",{class:!0});var o=b(e);r=f(o,"DIV",{class:!0});var D=b(r);s=f(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(v),h=A(o),u=f(o,"DIV",{class:!0});var g=b(u);p=f(g,"DIV",{class:!0});var y=b(p);E=H(y,k),y.forEach(v),M=A(g),m=f(g,"DIV",{class:!0});var B=b(m);B.forEach(v),$=A(g),d=f(g,"A",{id:!0,class:!0,href:!0,target:!0});var U=b(d);q=H(U,"Apskat\u012Bt internetveikal\u0101"),U.forEach(v),g.forEach(v),o.forEach(v),this.h()},h(){var n,o;T(s.src,a=z+"/images/"+t[0]+"/"+t[0]+"_front.jpg")||l(s,"src",a),l(s,"alt",i=(n=t[1])==null?void 0:n.title),l(s,"class","s-main-img svelte-6sm7g4"),l(r,"class","s-details-left svelte-6sm7g4"),l(p,"class","s-book-title title svelte-6sm7g4"),l(m,"class","svelte-6sm7g4"),l(d,"id","buy-button"),l(d,"class","button is-info svelte-6sm7g4"),l(d,"href",V=(o=t[1])==null?void 0:o.storeUrl),l(d,"target","_blank"),l(u,"class","s-details-right svelte-6sm7g4"),l(e,"class","s-book-details-container svelte-6sm7g4")},m(n,o){F(n,e,o),c(e,r),c(r,s),c(e,h),c(e,u),c(u,p),c(p,E),c(u,M),c(u,m),m.innerHTML=I,c(u,$),c(u,d),c(d,q)},p(n,[o]){var D,g,y,B;o&1&&!T(s.src,a=z+"/images/"+n[0]+"/"+n[0]+"_front.jpg")&&l(s,"src",a),o&2&&i!==(i=(D=n[1])==null?void 0:D.title)&&l(s,"alt",i),o&2&&k!==(k=((g=n[1])==null?void 0:g.title)+"")&&N(E,k),o&2&&I!==(I=((y=n[1])==null?void 0:y.description)+"")&&(m.innerHTML=I),o&2&&V!==(V=(B=n[1])==null?void 0:B.storeUrl)&&l(d,"href",V)},i:C,o:C,d(n){n&&v(e)}}}function te(t,e,r){let{key:s=""}=e,{book:a=void 0}=e;return t.$$set=i=>{"key"in i&&r(0,s=i.key),"book"in i&&r(1,a=i.book)},[s,a]}class se extends G{constructor(e){super(),J(this,e,te,ee,K,{key:0,book:1})}}const ae=()=>{const t=O("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},re={subscribe(t){return ae().page.subscribe(t)}};function ie(t){let e,r,s;return r=new se({props:{key:t[0],book:t[1]}}),{c(){e=_("div"),P(r.$$.fragment)},l(a){e=f(a,"DIV",{});var i=b(e);Q(r.$$.fragment,i),i.forEach(v)},m(a,i){F(a,e,i),R(r,e,null),s=!0},p:C,i(a){s||(W(r.$$.fragment,a),s=!0)},o(a){X(r.$$.fragment,a),s=!1},d(a){a&&v(e),Y(r)}}}function ne(t,e,r){let s;Z(t,re,h=>r(2,s=h));const a=s.params.slug,i=x.get(a);return[a,i]}class ue extends G{constructor(e){super(),J(this,e,ne,ie,K,{})}}export{ue as default};