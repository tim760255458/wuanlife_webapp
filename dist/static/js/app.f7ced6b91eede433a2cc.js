webpackJsonp([30],{128:function(e,n){},145:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view",{attrs:{name:"header"}}),e._v(" "),t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("router-view")],1)],1)},staticRenderFns:[]}},17:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var o="SET_USER_INFO"},31:function(e,n,t){"use strict";var o=t(14),r=t(146),a=t(5),u=function(e){return t.e(21).then(function(){return e(t(161))}.bind(null,t)).catch(t.oe)},c=function(e){return t.e(18).then(function(){return e(t(168))}.bind(null,t)).catch(t.oe)},i=function(e){return t.e(2).then(function(){return e(t(157))}.bind(null,t)).catch(t.oe)},s=function(e){return t.e(28).then(function(){return e(t(151))}.bind(null,t)).catch(t.oe)},l=function(e){return t.e(25).then(function(){return e(t(154))}.bind(null,t)).catch(t.oe)},f=function(e){return t.e(26).then(function(){return e(t(153))}.bind(null,t)).catch(t.oe)},d=function(e){return t.e(27).then(function(){return e(t(152))}.bind(null,t)).catch(t.oe)},p=function(e){return t.e(14).then(function(){return e(t(150))}.bind(null,t)).catch(t.oe)},h=function(e){return t.e(13).then(function(){return e(t(163))}.bind(null,t)).catch(t.oe)},m=function(e){return t.e(24).then(function(){return e(t(156))}.bind(null,t)).catch(t.oe)},g=function(e){return t.e(20).then(function(){return e(t(162))}.bind(null,t)).catch(t.oe)},T=function(e){return t.e(19).then(function(){return e(t(166))}.bind(null,t)).catch(t.oe)},v=function(e){return t.e(3).then(function(){return e(t(155))}.bind(null,t)).catch(t.oe)},b=function(e){return t.e(6).then(function(){return e(t(170))}.bind(null,t)).catch(t.oe)},E=function(e){return t.e(4).then(function(){return e(t(177))}.bind(null,t)).catch(t.oe)},w=function(e){return t.e(5).then(function(){return e(t(176))}.bind(null,t)).catch(t.oe)},O=function(e){return t.e(9).then(function(){return e(t(175))}.bind(null,t)).catch(t.oe)},S=function(e){return t.e(17).then(function(){return e(t(171))}.bind(null,t)).catch(t.oe)},y=function(e){return t.e(1).then(function(){return e(t(174))}.bind(null,t)).catch(t.oe)},_=function(e){return t.e(23).then(function(){return e(t(158))}.bind(null,t)).catch(t.oe)},C=function(e){return t.e(10).then(function(){return e(t(167))}.bind(null,t)).catch(t.oe)},I=function(e){return t.e(0).then(function(){return e(t(164))}.bind(null,t)).catch(t.oe)},x=function(e){return t.e(11).then(function(){return e(t(159))}.bind(null,t)).catch(t.oe)},N=function(e){return t.e(7).then(function(){return e(t(165))}.bind(null,t)).catch(t.oe)},k=function(e){return t.e(22).then(function(){return e(t(160))}.bind(null,t)).catch(t.oe)},P=function(e){return t.e(8).then(function(){return e(t(172))}.bind(null,t)).catch(t.oe)},U=function(e){return t.e(16).then(function(){return e(t(173))}.bind(null,t)).catch(t.oe)},j=function(e){return t.e(15).then(function(){return e(t(178))}.bind(null,t)).catch(t.oe)},R=function(e){return t.e(12).then(function(){return e(t(169))}.bind(null,t)).catch(t.oe)};o.default.use(r.a);var A=new r.a({routes:[{path:"/",redirect:{name:"index",query:{title:"主页"}}},{name:"index",path:"/index",components:{default:i,header:s}},{name:"myplanet",path:"/myplanet",components:{default:h,header:s}},{name:"discovery",path:"/discovery",components:{default:m,header:s}},{name:"message",path:"/message",components:{default:g,header:s}},{name:"profile",path:"/profile",components:{default:T,header:s}},{path:"/login",name:"login",components:{default:u,header:l}},{path:"/signup",name:"signup",components:{default:c,header:l}},{path:"/universe",name:"allplanet",components:{default:v,header:l}},{path:"/cardpost",name:"cardpost",components:{default:b,header:l}},{path:"/planetpost",name:"planetpost",components:{default:E,header:l}},{path:"/planetapply",name:"planetapply",components:{default:w,header:l}},{path:"/myinfo",name:"myinfo",components:{default:O,header:l}},{path:"/changepwd",name:"changepwd",components:{default:S,header:l}},{path:"/mycollection",name:"mycollection",components:{default:y,header:l}},{path:"/invitation",name:"invitation",components:{default:_,header:l}},{path:"/search",name:"search",components:{default:C,header:f}},{path:"/topic",name:"postcontent",components:{default:I,header:l},children:[{path:":id",components:{default:I,header:l}}]},{path:"/planet",name:"planet",components:{default:x,header:d},children:[{path:":id",components:{default:x,header:d}}]},{path:"/postpost",name:"postpost",components:{default:N,header:p}},{path:"/joinprivateplanet",name:"joinprivateplanet",components:{default:k,header:d}},{path:"/creatplanet",name:"creatplanet",components:{default:P,header:l}},{path:"/getPassword",name:"getPassword",components:{default:U,header:l}},{path:"/setPassword",name:"setPassword",components:{default:j,header:l}},{path:"/applyPrivatePlanet",name:"applyPrivatePlanet",components:{default:R,header:l}}]});A.beforeEach(function(e,n,t){console.log("测试1"),"/message"===e.path||"/myinfo"===e.path||"/changepwd"===e.path||"/mycollection"===e.path||"/invitation"===e.path||"/creatplanet"===e.path||"/postpost"===e.path?(console.log("测试2"),null==JSON.parse(localStorage.getItem("user"))&&""==a.a.state.token?(console.log("测试3"),t({path:"/login",query:{title:"返回"}}),console.log("通过3")):(t(),console.log("通过2"))):(t(),console.log("通过1"))}),n.a=A},5:function(e,n,t){"use strict";var o=t(44),r=t.n(o),a=t(25),u=t.n(a),c=t(14),i=t(38),s=t(31),l=(t(6),t(17),t(94),t(67)),f=t(96);c.default.use(i.b);var d=new i.b.Store({state:{token:"",userInfo:{},searchContent:"",postContent:{},postEditContent:{}},mutations:{SET_USERINFO:function(e,n){e.userInfo=n},SET_TOKEN:function(e,n){e.token=n},LOGOUT_USER:function(e){e.userInfo={}},LOGOUT_TOKEN:function(e){e.token=""},SET_SEARCH:function(e,n){e.searchContent=n},SET_POSTCONTENT:function(e,n){e.postContent=n},SET_POSTEDITCONTENT:function(e,n){e.postEditContent=n}},modules:{user:f.a},actions:{Login:function(e,n){var o=e.commit;return console.log("运行到这里"),new u.a(function(e,a){console.log("运行到这里"),t.i(l.a)(n).then(function(n){console.log("运行到这里"),o("SET_TOKEN",n["Access-Token"]),o("SET_USERINFO",n),localStorage.setItem("user",r()(n)),console.log("登录成功：　"+n),s.a.push({path:"/",query:{title:"主页"}}),e()}).catch(function(e){a(e)})})},Logout:function(e,n){var t=e.commit;return new u.a(function(e,n){t("LOGOUT_USER"),t("LOGOUT_TOKEN"),localStorage.removeItem("user"),e()}).catch(function(e){reject(e)})},Search:function(e,n){var t=e.commit;return new u.a(function(e,o){t("SET_SEARCH",n.serText),e()}).catch(function(e){reject(e)})},SignUp:function(e,n){var t=e.commit;t("SET_TOKEN",n["Access-Token"]),t("SET_USERINFO",n)},setPostContent:function(e,n){(0,e.commit)("SET_POSTCONTENT",n)},setPostEditContent:function(e,n){(0,e.commit)("SET_POSTEDITCONTENT",n)}}});n.a=d},59:function(e,n){},6:function(e,n,t){"use strict";function o(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")>0?"msie":e.indexOf("firefox")>0?"firefox":e.indexOf("chrome")>0?"chrome":e.indexOf("safari")>0&&e.indexOf("chrome")<0?"safari":e.indexOf("opera")>0?"opera":"unknown-brower"}var r=t(134),a=t.n(r),u={set:function(e,n,t){a.a.set(e,{val:n,exp:t,time:(new Date).getTime()})},get:function(e){var n=a.a.get(e);return n?(new Date).getTime()-n.time>n.exp?null:n.val:{}}},c=function(e){var n=parseInt(e/60),t=parseInt(e%60);return(n<10?"0"+n:""+n)+":"+(t<10?"0"+t:""+t)},i=function e(n){return"BODY"!=n.tagName||n.id?n.id?n.id:e(n.parentNode):null},s=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&"__ob__"!=t&&(n[t]=e[t]);return n},l=function(e){var n=document.documentElement;window.rem=window.screen.width/10,n.style.fontSize="75px"};n.a={getBrowserInfo:o,storeWithExpiration:u,secondsToFormat:c,getNearestId:i,getPureObj:s,setREM:l}},61:function(e,n,t){t(128);var o=t(62)(t(93),t(145),null,null);e.exports=o.exports},64:function(e,n,t){"use strict";var o=t(25),r=t.n(o),a=t(21),u=t.n(a),c=(t(6),t(5));u.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",u.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var i=u.a.create({baseURL:"http://47.88.58.119:800/",timeout:5e3});i.interceptors.request.use(function(e){return void 0!=localStorage.getItem("user")&&(e.headers["Access-Token"]=JSON.parse(localStorage.getItem("user"))["Access-Token"]||""),""!==c.a.state.token&&(e.headers["Access-Token"]=c.a.state.token||""),"post"===e.method&&(e.headers["Content-Type"]=e.headers.post["Content-Type"]),"put"===e.method&&(e.headers["Content-Type"]=e.headers.post["Content-Type"]),e},function(e){return r.a.reject(e)}),i.interceptors.response.use(function(e){return 200==e.status?(console.log("请求成功： "+e.data),e.data):204==e.status?{}:void 0},function(e){return r.a.reject(e)}),n.a=i},67:function(e,n,t){"use strict";function o(e,n){return t.i(m.a)({url:"/users/"+e+"/messages?offset="+n.offset+"&limit="+n.limit+"&type="+n.type,method:"get"})}function r(e){return t.i(m.a)({url:"/users/"+e,method:"get"})}function a(e,n){return t.i(m.a)({url:"/users/"+e+"/password",method:"put",data:n})}function u(e){return t.i(m.a)({url:"/users/"+e,method:"get"})}function c(e){return t.i(m.a)({url:"/users/resetpsw",method:"post",data:{mail:e}})}function i(e,n){return t.i(m.a)({url:"/users/resetpsw",method:"put",params:{token:n,password:e}})}function s(e){return t.i(m.a)({url:"/users",method:"post",data:e})}function l(e){return t.i(m.a)({url:"/users/signin",method:"post",data:e})}function f(e,n){return t.i(m.a)({url:"/users/"+e,method:"put",data:n})}function d(e,n,o){return t.i(m.a)({url:"/users/"+e+"/messages/"+n,method:"post",data:{is_apply:o}})}function p(e){return t.i(m.a)({url:"/users/"+e+"/checkmail",method:"post"})}n.i=o,n.f=r,n.e=a,n.d=u,n.c=c,n.b=i,n.k=s,n.a=l,n.g=f,n.j=d,n.h=p;var h=t(21),m=(t.n(h),t(6),t(5),t(64))},93:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(75),r=t.n(o),a=t(38),u=t(6);n.default={name:"app",components:{},data:function(){return{}},methods:r()({},t.i(a.a)([]),{change:function(){this.dialogTableVisible=!0,console.log("fuck")}}),mounted:function(){u.a.setREM()}}},94:function(e,n,t){"use strict";var o=t(45),r=(t.n(o),t(44)),a=(t.n(r),t(25)),u=t.n(a),c=t(21),i=t.n(c),s=t(131),l=(t.n(s),t(6),t(5));i.a.defaults.baseURL="http://47.88.58.119:800/",i.a.defaults.timeout=2e4,i.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",i.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",i.a.interceptors.request.use(function(e){return"post"===e.method&&(e.headers["Content-Type"]=e.headers.post["Content-Type"]),""!==l.a.state.token&&(e.headers["Access-Token"]=l.a.state.token),e},function(e){return console.log("parameter is illegal"),u.a.reject(e)}),i.a.interceptors.response.use(function(e){return 204===e.status?e.data:200!==e.status&&201!==e.status?u.a.reject(e):e.data},function(e){return u.a.reject(e)})},95:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(14),r=t(61),a=t.n(r),u=t(5),c=t(31),i=t(60),s=t.n(i),l=t(59);t.n(l);o.default.use(s.a),o.default.config.productionTip=!1,new o.default({el:"#app",router:c.a,store:u.a,render:function(e){return e(a.a)}})},96:function(e,n,t){"use strict";var o=t(98),r=t.n(o),a=t(6),u=t(17),c={userInfo:a.a.storeWithExpiration.get("user")||{}},i={getUserInfo:function(e){return e.userInfo}},s=r()({},u.a,function(e,n){e.userInfo=n}),l={setUserInfo:function(e,n){(0,e.commit)(u.a,n)},loadUserInfo:function(e){var n=e.commit,t=a.a.storeWithExpiration.get("user");t?n(u.a,t):n(u.a,{})}};n.a={state:c,getters:i,actions:l,mutations:s}}},[95]);
//# sourceMappingURL=app.f7ced6b91eede433a2cc.js.map