function S(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function O(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(O)}function Q(t){return typeof t=="function"}function _t(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let y;function dt(t,n){return y||(y=document.createElement("a")),y.href=n,t===y.href}function R(t){return Object.keys(t).length===0}function W(t,...n){if(t==null)return S;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t,n,e){t.$$.on_destroy.push(W(n,e))}function mt(t,n,e,i){if(t){const r=P(t,n,e,i);return t[0](r)}}function P(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function pt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(n.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=n.dirty[l]|r[l];return u}return n.dirty|r}return n.dirty}function gt(t,n,e,i,r,u){if(r){const s=P(n,e,i,u);t.p(s,r)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let E=!1;function U(){E=!0}function V(){E=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<n.length;o++){const a=n[o];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const o=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=o?r+1:X(1,r,g=>n[e[g]].claim_order,o))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],s=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);l>=c;l--)s.push(n[l]);l--}for(;l>=0;l--)s.push(n[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(s[c],a)}}function Z(t,n){if(E){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){E&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function bt(){return j(" ")}function $t(){return j("")}function wt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,n,e,i,r=!1){G(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(n(l)){const c=e(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,n,e,i){return z(t,r=>r.nodeName===n,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];e[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(n))}function Nt(t,n,e){return rt(t,n,e,D)}function ct(t,n){return z(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function vt(t){return ct(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Tt(t,n){const e=H(t,"HTML_TAG_START",0),i=H(t,"HTML_TAG_END",e);if(e===i)return new L(void 0,n);G(t);const r=t.splice(e,i-e+1);w(r[0]),w(r[r.length-1]);const u=r.slice(1,r.length-1);for(const s of u)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(u,n)}function At(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}class st{constructor(n=!1){this.is_svg=!1,this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=et(e.nodeName):this.e=D(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class L extends st{constructor(n,e=!1){super(e),this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let m;function h(t){m=t}function N(){if(!m)throw new Error("Function called outside component initialization");return m}function jt(t){N().$$.on_mount.push(t)}function kt(t){N().$$.after_update.push(t)}function Ct(t,n){return N().$$.context.set(t,n),n}function Mt(t){return N().$$.context.get(t)}const d=[],B=[],b=[],q=[],F=Promise.resolve();let T=!1;function I(){T||(T=!0,F.then(J))}function Ht(){return I(),F}function A(t){b.push(t)}const v=new Set;let x=0;function J(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),lt(n.$$)}for(h(null),d.length=0,x=0;B.length;)B.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];v.has(e)||(v.add(e),e())}b.length=0}while(d.length);for(;q.length;)q.pop()();T=!1,v.clear(),h(t)}function lt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function Lt(){_={r:0,c:[],p:_}}function Bt(){_.r||p(_.c),_=_.p}function ot(t,n){t&&t.i&&($.delete(t),t.i(n))}function qt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Ot(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=n[u];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[u]=l}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Pt(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t){t&&t.c()}function Gt(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:l}=t.$$;r&&r.m(n,e),i||A(()=>{const c=u.map(O).filter(Q);s?s.push(...c):p(c),t.$$.on_mount=[]}),l.forEach(A)}function ft(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(d.push(t),I(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,u,s,l=[-1]){const c=m;h(t);const o=t.$$={fragment:null,ctx:null,props:u,update:S,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:M(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};s&&s(o.root);let a=!1;if(o.ctx=e?e(t,n.props||{},(f,g,...k)=>{const C=k.length?k[0]:g;return o.ctx&&r(o.ctx[f],o.ctx[f]=C)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](C),a&&at(t,f)),g}):[],o.update(),a=!0,p(o.before_update),o.fragment=i?i(o.ctx):!1,n.target){if(n.hydrate){U();const f=it(n.target);o.fragment&&o.fragment.l(f),f.forEach(w)}else o.fragment&&o.fragment.c();n.intro&&ot(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),V(),J()}h(c)}class Ft{$destroy(){ft(this,1),this.$destroy=S}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!R(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ot as A,Pt as B,ft as C,K as D,Ht as E,mt as F,gt as G,yt as H,pt as I,Z as J,L as K,Tt as L,dt as M,Mt as N,ht as O,wt as P,xt as Q,Ft as S,bt as a,nt as b,vt as c,Bt as d,$t as e,ot as f,Lt as g,w as h,zt as i,Ct as j,kt as k,D as l,Nt as m,S as n,jt as o,it as p,Et as q,St as r,_t as s,qt as t,j as u,ct as v,At as w,Dt as x,Gt as y,ut as z};
