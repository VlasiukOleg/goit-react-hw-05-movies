"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[926],{4926:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,s,c,u=t(5861),p=t(9439),d=t(4687),l=t.n(d),h=t(7689),f=t(2791),v=t(8565),x=t(9128),m=t(168),g=t(1087),j=t(1109),b=(0,j.Z)(g.rU)(r||(r=(0,m.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 6px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),w=t(184),Z=function(n){var e=n.to,t=n.children;return(0,w.jsxs)(b,{to:e,children:[(0,w.jsx)(x.jTe,{size:"20"}),t]})},k=j.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 20px;\n"]))),y=j.Z.div(i||(i=(0,m.Z)(["\n  img {\n    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);\n  }\n"]))),_=j.Z.div(o||(o=(0,m.Z)(["\n  max-width: 480px;\n  h2 {\n    margin-top: 20 px;\n  }\n"]))),O=j.Z.div(s||(s=(0,m.Z)(["\n  h2 {\n    font-size: 16px;\n  }\n\n  ul {\n    display: flex;\n    margin-top: 0;\n    margin-bottom: 0;\n    padding: 0;\n    list-style: none;\n  }\n"]))),T=(0,j.Z)(g.OL)(c||(c=(0,m.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  margin-right: 10px;\n  text-decoration: none;\n  color: black;\n\n  &:hover {\n    color: orangered;\n  }\n\n  &.active {\n    color: orangered;\n  }\n"]))),C=t(2868),S=function(){var n,e,t=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies",r=(0,h.UO)().id,a=(0,f.useState)(null),i=(0,p.Z)(a,2),o=i[0],s=i[1],c=(0,f.useState)([]),d=(0,p.Z)(c,2),x=d[0],m=d[1],g=x.map((function(n){return n.name})).join(", ");return(0,f.useEffect)((function(){var n=function(){var n=(0,u.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,v.YJ)(r);case 3:e=n.sent,s(e.data),m(e.data.genres),console.log(e.data),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,w.jsxs)("div",{children:[(0,w.jsx)(Z,{to:t,children:"BACK TO TREND MOVIES"}),o&&(0,w.jsxs)("div",{children:[(0,w.jsxs)(k,{children:[(0,w.jsx)(y,{children:(0,w.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w500").concat(o.poster_path),alt:o.original_title,width:180})}),(0,w.jsxs)(_,{children:[(0,w.jsx)("h2",{children:o.original_title}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Overview:"})," ",o.overview]}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"Genres:"})," ",g]})]})]}),(0,w.jsxs)(O,{children:[(0,w.jsx)("h2",{children:"Additional Information"}),(0,w.jsxs)("ul",{children:[(0,w.jsx)("li",{children:(0,w.jsx)(T,{to:"cast",state:{from:t},children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(T,{to:"reviews",state:{from:t},children:"Rewiew"})})]})]}),(0,w.jsx)(f.Suspense,{fallback:(0,w.jsx)(C.T,{}),children:(0,w.jsx)(h.j3,{})})]})]})}},8565:function(n,e,t){t.d(e,{IQ:function(){return p},Jh:function(){return d},V0:function(){return l},YJ:function(){return u},gr:function(){return c}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),s="f1b5155c1184f9f972000fc60d38fc3a",c=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/trending/movie/day",e={api_key:s},n.next=4,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:e});case 4:return t=n.sent,n.abrupt("return",t);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e),r={api_key:s},n.next=4,o.Z.get(t,{params:r});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),r={api_key:s},n.next=4,o.Z.get(t,{params:r});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),r={api_key:s},n.next=4,o.Z.get(t,{params:r});case 4:return a=n.sent,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://api.themoviedb.org/3/search/movie",t={api_key:s,query:"".concat(e)},n.next=4,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:t});case 4:return r=n.sent,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=926.450f9c32.chunk.js.map