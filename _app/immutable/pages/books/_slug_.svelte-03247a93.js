import{S as K,i as L,s as N,l as b,a as $,u as j,K as T,m as h,p as B,h as d,c as E,v as H,L as x,M as z,q as u,b as O,J as _,w as G,n as V,N as A,x as F,y as P,z as Q,f as R,t as W,C as X,O as Y}from"../../chunks/index-e4fea147.js";import{B as Z}from"../../chunks/data-7d7485f1.js";import{b as J}from"../../chunks/paths-b9644fda.js";function ee(t){var q,C,M;let e,i,s,a,r,g,l,m=((q=t[1])==null?void 0:q.title)+"",k,I,f,w=((C=t[1])==null?void 0:C.description)+"",y,v=((M=t[1])==null?void 0:M.storeUrl)+"",D;return{c(){e=b("div"),i=b("div"),s=b("img"),g=$(),l=b("div"),k=j(m),I=$(),f=new T(!1),y=$(),D=j(v),this.h()},l(n){e=h(n,"DIV",{class:!0});var o=B(e);i=h(o,"DIV",{class:!0});var p=B(i);s=h(p,"IMG",{src:!0,alt:!0,class:!0}),p.forEach(d),g=E(o),l=h(o,"DIV",{class:!0});var c=B(l);k=H(c,m),I=E(c),f=x(c,!1),y=E(c),D=H(c,v),c.forEach(d),o.forEach(d),this.h()},h(){var n;z(s.src,a=J+"/images/"+t[0]+"/"+t[0]+"_front.jpg")||u(s,"src",a),u(s,"alt",r=(n=t[1])==null?void 0:n.title),u(s,"class","s-card-image svelte-vi41wx"),u(i,"class","s-details-left svelte-vi41wx"),f.a=y,u(l,"class","s-details-right svelte-vi41wx"),u(e,"class","s-book-details-container svelte-vi41wx")},m(n,o){O(n,e,o),_(e,i),_(i,s),_(e,g),_(e,l),_(l,k),_(l,I),f.m(w,l),_(l,y),_(l,D)},p(n,[o]){var p,c,S,U;o&1&&!z(s.src,a=J+"/images/"+n[0]+"/"+n[0]+"_front.jpg")&&u(s,"src",a),o&2&&r!==(r=(p=n[1])==null?void 0:p.title)&&u(s,"alt",r),o&2&&m!==(m=((c=n[1])==null?void 0:c.title)+"")&&G(k,m),o&2&&w!==(w=((S=n[1])==null?void 0:S.description)+"")&&f.p(w),o&2&&v!==(v=((U=n[1])==null?void 0:U.storeUrl)+"")&&G(D,v)},i:V,o:V,d(n){n&&d(e)}}}function te(t,e,i){let{key:s=""}=e,{book:a=void 0}=e;return t.$$set=r=>{"key"in r&&i(0,s=r.key),"book"in r&&i(1,a=r.book)},[s,a]}class se extends K{constructor(e){super(),L(this,e,te,ee,N,{key:0,book:1})}}const ae=()=>{const t=A("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},ie={subscribe(t){return ae().page.subscribe(t)}};function re(t){let e,i,s;return i=new se({props:{key:t[0],book:t[1]}}),{c(){e=b("div"),F(i.$$.fragment)},l(a){e=h(a,"DIV",{});var r=B(e);P(i.$$.fragment,r),r.forEach(d)},m(a,r){O(a,e,r),Q(i,e,null),s=!0},p:V,i(a){s||(R(i.$$.fragment,a),s=!0)},o(a){W(i.$$.fragment,a),s=!1},d(a){a&&d(e),X(i)}}}function ne(t,e,i){let s;Y(t,ie,g=>i(2,s=g));const a=s.params.slug,r=Z.get(a);return[a,r]}class ue extends K{constructor(e){super(),L(this,e,ne,re,N,{})}}export{ue as default};
