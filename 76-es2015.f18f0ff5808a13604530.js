(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{k5eQ:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_route",function(){return s}),o.d(e,"ion_route_redirect",function(){return a}),o.d(e,"ion_router",function(){return I}),o.d(e,"ion_router_link",function(){return A});var n=o("mLBW"),r=(o("TJLY"),o("Jbqe")),i=o("EQwm");class s{constructor(t){Object(n.m)(this,t),this.url="",this.ionRouteDataChanged=Object(n.d)(this,"ionRouteDataChanged",7)}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const o=t?Object.keys(t):[],n=e?Object.keys(e):[];if(o.length===n.length){for(const r of o)if(t[r]!==e[r])return void this.onUpdate(t)}else this.onUpdate(t)}componentDidLoad(){this.ionRouteDataChanged.emit()}componentDidUnload(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}}class a{constructor(t){Object(n.m)(this,t),this.ionRouteRedirectChanged=Object(n.d)(this,"ionRouteRedirectChanged",7)}propDidChange(){this.ionRouteRedirectChanged.emit()}componentDidLoad(){this.ionRouteRedirectChanged.emit()}componentDidUnload(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}}const h="root",c="forward",l="back",u=t=>"/"+t.filter(t=>t.length>0).join("/"),d=t=>{const e=[];for(const o of t)for(const t of o.path)if(":"===t[0]){const n=o.params&&o.params[t.slice(1)];if(!n)return null;e.push(n)}else""!==t&&e.push(t);return e},g=(t,e,o,n,r,i)=>{let s=u([...f(e),...n]);o&&(s="#"+s),r===c?t.pushState(i,"",s):t.replaceState(i,"",s)},p=(t,e,o)=>{let n=t.pathname;if(o){const e=t.hash;n="#"===e[0]?e.slice(1):""}return((t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let o=0;o<t.length;o++)if(t[o].length>0&&t[o]!==e[o])return null;return e.length===t.length?[""]:e.slice(t.length)})(f(e),f(n))},f=t=>{if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e},m=t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const o=e.map(t=>t.id);console.debug(`%c ${u(t)}`,"font-weight: bold; padding-left: 20px","=>\t",`(${o.join(", ")})`)}console.groupEnd()},w=t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&console.debug("FROM: ",`$c ${u(e.from)}`,"font-weight: bold"," TO: ",`$c ${u(e.to)}`,"font-weight: bold");console.groupEnd()},b=async(t,e,o,n,r=!1)=>{try{const s=y(t);if(n>=e.length||!s)return r;await s.componentOnReady();const a=e[n],c=await s.setRouteId(a.id,a.params,o);return c.changed&&(o=h,r=!0),r=await b(c.element,e,o,n+1,r),c.markVisible&&await c.markVisible(),r}catch(i){return console.error(i),!1}},R=async t=>{const e=[];let o,n=t;for(;o=y(n);){const t=await o.getRouteId();if(!t)break;n=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:o}},v=()=>y(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",t,{once:!0})}),C=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",y=t=>{if(t)return t.matches(C)?t:t.querySelector(C)||void 0},O=(t,e)=>e.find(e=>((t,e)=>{const{from:o,to:n}=e;if(void 0===n)return!1;if(o.length>t.length)return!1;for(let r=0;r<o.length;r++){const e=o[r];if("*"===e)return!0;if(e!==t[r])return!1}return o.length===t.length})(t,e)),P=(t,e)=>{const o=Math.min(t.length,e.length);let n=0;for(;n<o&&t[n].toLowerCase()===e[n].id;n++);return n},j=(t,e)=>{const o=new L(t);let n,r=!1;for(let i=0;i<e.length;i++){const t=e[i].path;if(""===t[0])r=!0;else{for(const e of t){const t=o.next();if(":"===e[0]){if(""===t)return null;((n=n||[])[i]||(n[i]={}))[e.slice(1)]=t}else if(t!==e)return null}r=!1}}return r&&r!==(""===o.next())?null:n?e.map((t,e)=>({id:t.id,path:t.path,params:D(t.params,n[e])})):e},D=(t,e)=>!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0,k=(t,e)=>{let o=null,n=0;const r=t.map(t=>t.id);for(const i of e){const t=P(r,i);t>n&&(o=i,n=t)}return o?o.map((e,o)=>({id:e.id,path:e.path,params:D(e.params,t[o]&&t[o].params)})):null},S=(t,e)=>{let o=null,n=0;for(const r of e){const e=j(t,r);if(null!==e){const t=E(e);t>n&&(n=t,o=e)}}return o},E=t=>{let e=1,o=1;for(const n of t)for(const t of n.path)":"===t[0]?e+=Math.pow(1,o):""!==t&&(e+=Math.pow(2,o)),o++;return e};class L{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}const U=t=>Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=W(t,"to");return{from:f(W(t,"from")),to:null==e?void 0:f(e)}}),N=t=>x(T(t)),T=(t,e=t)=>Array.from(e.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(e=>{const o=W(e,"component");if(null==o)throw new Error("component missing in ion-route");return{path:f(W(e,"url")),id:o.toLowerCase(),params:e.componentProps,children:T(t,e)}}),W=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,x=t=>{const e=[];for(const o of t)$([],e,o);return e},$=(t,e,o)=>{const n=t.slice();if(n.push({id:o.id,path:o.path,params:o.params}),0!==o.children.length)for(const r of o.children)$(n,e,r);else e.push(n)};class I{constructor(t){Object(n.m)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(n.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(n.d)(this,"ionRouteDidChange",7)}async componentWillLoad(){console.debug("[ion-router] router will load"),await v(),console.debug("[ion-router] found nav"),await this.onRoutesChanged()}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",Object(i.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(i.e)(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,e="forward"){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);const o=f(t);return this.setPath(o,e),this.writeNavStateRoot(o,e)}back(){return window.history.back(),Promise.resolve(this.waitPromise)}async printDebug(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),m(N(this.el)),w(U(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:o}=await R(window.document.body),n=N(this.el),r=k(e,n);if(!r)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const i=d(r);return i?(console.debug("[ion-router] nav changed -> update URL",e,i),this.setPath(i,t),await this.safeWriteNavState(o,r,h,i,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&O(t,U(this.el))&&this.writeNavStateRoot(t,h)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),h)}historyDirection(){const t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,o=this.lastState;return this.lastState=e,e>o?c:e<o?l:h}async writeNavStateRoot(t,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const o=U(this.el),n=O(t,o);let r=null;n&&(this.setPath(n.to,e),r=n.from,t=n.to);const i=N(this.el),s=S(t,i);return s?this.safeWriteNavState(document.body,s,e,t,r):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,o,n,r,i=0){const s=await this.lock();let a=!1;try{a=await this.writeNavState(t,e,o,n,r,i)}catch(h){console.error(h)}return s(),a}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async writeNavState(t,e,o,n,r,i=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const s=this.routeChangeEvent(n,r);s&&this.ionRouteWillChange.emit(s);const a=await b(t,e,o,i);return this.busy=!1,a&&console.debug("[ion-router] route changed",n),s&&this.ionRouteDidChange.emit(s),a}setPath(t,e){this.state++,g(window.history,this.root,this.useHash,t,e,this.state)}getPath(){return p(window.location,this.root,this.useHash)}routeChangeEvent(t,e){const o=this.previousPath,n=u(t);return this.previousPath=n,n===o?null:{from:o,redirectedFrom:e?u(e):null,to:n}}get el(){return Object(n.f)(this)}}class A{constructor(t){Object(n.m)(this,t),this.routerDirection="forward",this.onClick=t=>{Object(r.d)(this.href,t,this.routerDirection)}}render(){const t=Object(n.e)(this),e={href:this.href,rel:this.rel,target:this.target};return Object(n.i)(n.a,{onClick:this.onClick,class:Object.assign({},Object(r.a)(this.color),{[t]:!0,"ion-activatable":!0})},Object(n.i)("a",Object.assign({},e),Object(n.i)("slot",null)))}static get style(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"}}}}]);