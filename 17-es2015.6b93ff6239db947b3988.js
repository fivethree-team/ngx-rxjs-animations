(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"2F6O":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),b=u("d5V9"),e=u("1uah");class r{constructor(){this.items=Array.from(new Array(40),(l,n)=>({color:Object(b.z)(16777215*Math.random())})),this.focused=!1,this.in=l=>Object(e.a)(Object(b.f)(l,b.k,300),Object(b.C)(b.k,300).pipe(Object(b.A)(l,Object(b.B)(60,0)))),this.out=l=>Object(e.a)(Object(b.g)(l,b.k,300),Object(b.C)(b.k,300).pipe(Object(b.A)(l,Object(b.n)(1,.5),Object(b.B)(0,60))))}ngOnInit(){}cardClicked(l){this.focused=!this.focused;const n=this.cards.filter((n,u)=>u!==l);return this.focused?Object(b.x)(n,this.out,25).subscribe():Object(b.x)(n,this.in,25).subscribe()}}class c{}var a=u("c2Pj"),o=u("pMnS"),i=u("oBZk"),s=u("ZZ/e"),d=u("uNAg"),f=u("SVse"),g=t.qb({encapsulation:0,styles:[[".card[_ngcontent-%COMP%]{height:140px}"]],data:{}});function h(l){return t.Jb(0,[(l()(),t.sb(0,0,null,null,3,"ion-col",[["size","3"]],null,null,null,i.s,i.e)),t.rb(1,49152,null,0,s.r,[t.h,t.k,t.y],{size:[0,"size"]},null),(l()(),t.sb(2,0,[[1,0],["card",1]],0,1,"div",[["anim",""],["class","card"]],[[4,"backgroundColor",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.cardClicked(l.context.index)&&t),t},null,null)),t.rb(3,212992,null,0,d.a,[t.k],{animIn:[0,"animIn"],animOut:[1,"animOut"],staggerIndex:[2,"staggerIndex"],staggerDelay:[3,"staggerDelay"],delay:[4,"delay"]},null)],function(l,n){var u=n.component;l(n,1,0,"3"),l(n,3,0,u.in,u.out,n.context.index,25,400)},function(l,n){l(n,2,0,n.context.$implicit.color)})}function p(l){return t.Jb(0,[t.Gb(671088640,1,{cards:1}),(l()(),t.sb(1,0,null,null,6,"ion-header",[],null,null,null,i.v,i.h)),t.rb(2,49152,null,0,s.z,[t.h,t.k,t.y],null,null),(l()(),t.sb(3,0,null,0,4,"ion-toolbar",[],null,null,null,i.B,i.n)),t.rb(4,49152,null,0,s.zb,[t.h,t.k,t.y],null,null),(l()(),t.sb(5,0,null,0,2,"ion-title",[],null,null,null,i.A,i.m)),t.rb(6,49152,null,0,s.xb,[t.h,t.k,t.y],null,null),(l()(),t.Ib(-1,0,["Grid Layout Stagger"])),(l()(),t.sb(8,0,null,null,7,"ion-content",[],null,null,null,i.t,i.f)),t.rb(9,49152,null,0,s.s,[t.h,t.k,t.y],null,null),(l()(),t.sb(10,0,null,0,5,"ion-grid",[["fixed",""]],null,null,null,i.u,i.g)),t.rb(11,49152,null,0,s.y,[t.h,t.k,t.y],{fixed:[0,"fixed"]},null),(l()(),t.sb(12,0,null,0,3,"ion-row",[],null,null,null,i.x,i.j)),t.rb(13,49152,null,0,s.gb,[t.h,t.k,t.y],null,null),(l()(),t.hb(16777216,null,0,1,null,h)),t.rb(15,278528,null,0,f.h,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,11,0,""),l(n,15,0,u.items)},null)}function j(l){return t.Jb(0,[(l()(),t.sb(0,0,null,null,1,"app-masonry",[],null,null,null,p,g)),t.rb(1,114688,null,0,r,[],null,null)],function(l,n){l(n,1,0)},null)}var k=t.ob("app-masonry",r,j,{},{},[]),B=u("s7LF"),y=u("KvFc"),O=u("Ue9m"),m=u("cNUt"),x=u("iInd");u.d(n,"MasonryPageModuleNgFactory",function(){return v});var v=t.pb(c,[],function(l){return t.Ab([t.Bb(512,t.j,t.ab,[[8,[a.a,o.a,k]],[3,t.j],t.w]),t.Bb(4608,f.k,f.j,[t.t,[2,f.r]]),t.Bb(4608,B.g,B.g,[]),t.Bb(4608,s.a,s.a,[t.y,t.g]),t.Bb(4608,s.Db,s.Db,[s.a,t.j,t.q]),t.Bb(4608,s.Gb,s.Gb,[s.a,t.j,t.q]),t.Bb(4608,y.a,y.a,[t.j,t.D,t.g,t.q]),t.Bb(1073742336,f.b,f.b,[]),t.Bb(1073742336,B.f,B.f,[]),t.Bb(1073742336,B.a,B.a,[]),t.Bb(1073742336,s.Bb,s.Bb,[]),t.Bb(1073742336,O.a,O.a,[]),t.Bb(1073742336,m.a,m.a,[]),t.Bb(1073742336,x.o,x.o,[[2,x.t],[2,x.m]]),t.Bb(1073742336,c,c,[]),t.Bb(1024,x.k,function(){return[[{path:"",component:r}]]},[])])})}}]);