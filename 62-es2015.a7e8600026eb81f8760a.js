(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{SUlj:function(e,t,s){"use strict";s.r(t),s.d(t,"ion_nav",function(){return g}),s.d(t,"ion_nav_pop",function(){return w}),s.d(t,"ion_nav_push",function(){return b}),s.d(t,"ion_nav_set_root",function(){return f});var i=s("mLBW"),n=s("TJLY"),r=s("9Z7W"),o=s("EQwm"),a=s("1hGh"),h=s("7rGv");const c=1,u=2,l=3;class d{constructor(e,t){this.component=e,this.params=t,this.state=c}async init(e){if(this.state=u,!this.element){const t=this.component;this.element=await Object(a.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)}}_destroy(){Object(o.b)(this.state!==l,"view state must be ATTACHED");const e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=l}}const v=(e,t,s)=>{if(!e)return!1;if(e.component!==t)return!1;const i=e.params;if(i===s)return!0;if(!i&&!s)return!0;if(!i||!s)return!1;const n=Object.keys(i),r=Object.keys(s);if(n.length!==r.length)return!1;for(const o of n)if(i[o]!==s[o])return!1;return!0},m=(e,t)=>e?e instanceof d?e:new d(e,t):null,p=e=>e.map(e=>e instanceof d?e:"page"in e?m(e.page,e.params):m(e,void 0)).filter(e=>null!==e);class g{constructor(e){Object(i.m)(this,e),this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(i.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(i.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(i.d)(this,"ionNavDidChange",3)}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){const e=Object(i.e)(this);this.swipeGesture=n.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await Promise.all([s.e(0),s.e(5)]).then(s.bind(null,"Hofg"))).createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const e of this.views)Object(h.b)(e.element,r.e),e._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(e,t,s,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:s},i)}insert(e,t,s,i,n){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:s}],opts:i},n)}insertPages(e,t,s,i){return this.queueTrns({insertStart:e,insertViews:t,opts:s},i)}pop(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}popTo(e,t,s){const i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,s)}popToRoot(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}removeIndex(e,t=1,s,i){return this.queueTrns({removeStart:e,removeCount:t,opts:s},i)}setRoot(e,t,s,i){return this.setPages([{page:e,params:t}],s,i)}setPages(e,t,s){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},s)}setRouteId(e,t,s){const i=this.getActiveSync();if(v(i,e,t))return Promise.resolve({changed:!1,element:i.element});let n;const r=new Promise(e=>n=e);let o;const a={updateURL:!1,viewIsReady:e=>{let t;const s=new Promise(e=>t=e);return n({changed:!0,element:e,markVisible:async()=>{t(),await o}}),s}};if("root"===s)o=this.setRoot(e,t,a);else{const i=this.views.find(s=>v(s,e,t));i?o=this.popTo(i,Object.assign({},a,{direction:"back"})):"forward"===s?o=this.push(e,t,a):"back"===s&&(o=this.setRoot(e,t,Object.assign({},a,{direction:"back",animated:!0})))}return r}async getRouteId(){const e=this.getActiveSync();return e?{id:e.element.tagName,params:e.params,element:e.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(e){return Promise.resolve(this.views[e])}canGoBack(e){return Promise.resolve(this.canGoBackSync(e))}getPrevious(e){return Promise.resolve(this.getPreviousSync(e))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(e=this.getActiveSync()){return!(!e||!this.getPreviousSync(e))}getPreviousSync(e=this.getActiveSync()){if(!e)return;const t=this.views,s=t.indexOf(e);return s>0?t[s-1]:void 0}queueTrns(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);const s=new Promise((t,s)=>{e.resolve=t,e.reject=s});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),s}success(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){const t=document.querySelector("ion-router");t&&t.navChanged("back"===e.direction?"back":"forward")}}failed(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}fireError(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}async runTransition(e){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e);const s=this.getActiveSync(),i=this.getEnteringView(e,s);if(!s&&!i)throw new Error("no views in the stack to be removed");i&&i.state===c&&await i.init(this.el),this.postViewInit(i,s,e);const n=(e.enteringRequiresTransition||e.leavingRequiresTransition)&&i!==s?await this.transition(i,s,e):{hasCompleted:!0,requiresTransition:!1};this.success(n,e),this.ionNavDidChange.emit()}catch(t){this.failed(t,e)}this.isTransitioning=!1,this.nextTrns()}prepareTI(e){const t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(o.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(o.b)(void 0!==e.removeCount,"removeView needs removeCount");const t=this.views.indexOf(e.removeView);if(t<0)throw new Error("removeView was not found");e.removeStart+=t}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);const s=e.insertViews;if(!s)return;Object(o.b)(s.length>0,"length can not be zero");const i=p(s);if(0===i.length)throw new Error("invalid views to insert");for(const n of i){n.delegate=e.opts.delegate;const t=n.nav;if(t&&t!==this)throw new Error("inserted view was already inserted");if(n.state===l)throw new Error("inserted view was already destroyed")}e.insertViews=i}getEnteringView(e,t){const s=e.insertViews;if(void 0!==s)return s[s.length-1];const i=e.removeStart;if(void 0!==i){const s=this.views,n=i+e.removeCount;for(let e=s.length-1;e>=0;e--){const r=s[e];if((e<i||e>=n)&&r!==t)return r}}}postViewInit(e,t,s){Object(o.b)(t||e,"Both leavingView and enteringView are null"),Object(o.b)(s.resolve,"resolve must be valid"),Object(o.b)(s.reject,"reject must be valid");const i=s.opts,n=s.insertViews,a=s.removeStart,c=s.removeCount;let u;if(void 0!==a&&void 0!==c){Object(o.b)(a>=0,"removeStart can not be negative"),Object(o.b)(c>=0,"removeCount can not be negative"),u=[];for(let s=0;s<c;s++){const i=this.views[s+a];i&&i!==e&&i!==t&&u.push(i)}i.direction=i.direction||"back"}const l=this.views.length+(void 0!==n?n.length:0)-(void 0!==c?c:0);if(Object(o.b)(l>=0,"final balance can not be negative"),0===l)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(n){let e=s.insertStart;for(const t of n)this.insertViewAt(t,e),e++;s.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(u&&u.length>0){for(const e of u)Object(h.b)(e.element,r.c),Object(h.b)(e.element,r.d),Object(h.b)(e.element,r.e);for(const e of u)this.destroyView(e)}}async transition(e,t,s){const r=s.opts,o=r.progressAnimation?e=>this.sbAni=e:void 0,a=Object(i.e)(this),c=e.element,u=t&&t.element,l=Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||r.animationBuilder||n.b.get("navAnimation"),progressCallback:o,animated:this.animated&&n.b.getBoolean("animated",!0),enteringEl:c,leavingEl:u},r),{hasCompleted:d}=await Object(h.d)(l);return this.transitionFinish(d,e,t,r)}transitionFinish(e,t,s,i){const n=e?t:s;return n&&this.cleanup(n),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:s,direction:i.direction}}insertViewAt(e,t){const s=this.views,i=s.indexOf(e);i>-1?(Object(o.b)(e.nav===this,"view is not part of the nav"),s.splice(t,0,s.splice(i,1)[0])):(Object(o.b)(!e.nav,"nav is used"),e.nav=this,s.splice(t,0,e))}removeView(e){Object(o.b)(e.state===u||e.state===l,"view state should be loaded or destroyed");const t=this.views,s=t.indexOf(e);Object(o.b)(s>-1,"view must be part of the stack"),s>=0&&t.splice(s,1)}destroyView(e){e._destroy(),this.removeView(e)}cleanup(e){if(this.destroyed)return;const t=this.views,s=t.indexOf(e);for(let i=t.length-1;i>=0;i--){const e=t[i],n=e.element;i>s?(Object(h.b)(n,r.e),this.destroyView(e)):i<s&&Object(h.c)(n,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(e){this.sbAni&&this.sbAni.progressStep(e)}onEnd(e,t,s){this.sbAni&&this.sbAni.progressEnd(e,t,s)}render(){return Object(i.i)("slot",null)}get el(){return Object(i.f)(this)}static get watchers(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}class w{constructor(e){Object(i.m)(this,e)}pop(){const e=this.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})}get el(){return Object(i.f)(this)}}class b{constructor(e){Object(i.m)(this,e)}push(){const e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.push(t,this.componentProps,{skipIfBusy:!0})}get el(){return Object(i.f)(this)}}class f{constructor(e){Object(i.m)(this,e)}push(){const e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.setRoot(t,this.componentProps,{skipIfBusy:!0})}get el(){return Object(i.f)(this)}}}}]);