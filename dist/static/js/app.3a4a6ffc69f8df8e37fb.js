webpackJsonp([29],{129:function(e,t){},146:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{name:"header"}}),e._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)},staticRenderFns:[]}},17:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o="SET_USER_INFO"},31:function(e,t,n){"use strict";var o=n(14),r=n(147),a=n(5),u=function(e){return n.e(20).then(function(){return e(n(162))}.bind(null,n)).catch(n.oe)},c=function(e){return n.e(17).then(function(){return e(n(169))}.bind(null,n)).catch(n.oe)},i=function(e){return n.e(2).then(function(){return e(n(158))}.bind(null,n)).catch(n.oe)},s=function(e){return n.e(27).then(function(){return e(n(152))}.bind(null,n)).catch(n.oe)},l=function(e){return n.e(24).then(function(){return e(n(155))}.bind(null,n)).catch(n.oe)},f=function(e){return n.e(25).then(function(){return e(n(154))}.bind(null,n)).catch(n.oe)},d=function(e){return n.e(26).then(function(){return e(n(153))}.bind(null,n)).catch(n.oe)},p=function(e){return n.e(13).then(function(){return e(n(151))}.bind(null,n)).catch(n.oe)},h=function(e){return n.e(12).then(function(){return e(n(164))}.bind(null,n)).catch(n.oe)},m=function(e){return n.e(23).then(function(){return e(n(157))}.bind(null,n)).catch(n.oe)},T=function(e){return n.e(19).then(function(){return e(n(163))}.bind(null,n)).catch(n.oe)},g=function(e){return n.e(18).then(function(){return e(n(167))}.bind(null,n)).catch(n.oe)},v=function(e){return n.e(3).then(function(){return e(n(156))}.bind(null,n)).catch(n.oe)},b=function(e){return n.e(6).then(function(){return e(n(170))}.bind(null,n)).catch(n.oe)},E=function(e){return n.e(4).then(function(){return e(n(177))}.bind(null,n)).catch(n.oe)},w=function(e){return n.e(5).then(function(){return e(n(176))}.bind(null,n)).catch(n.oe)},O=function(e){return n.e(9).then(function(){return e(n(175))}.bind(null,n)).catch(n.oe)},S=function(e){return n.e(16).then(function(){return e(n(171))}.bind(null,n)).catch(n.oe)},y=function(e){return n.e(1).then(function(){return e(n(174))}.bind(null,n)).catch(n.oe)},_=function(e){return n.e(22).then(function(){return e(n(159))}.bind(null,n)).catch(n.oe)},C=function(e){return n.e(10).then(function(){return e(n(168))}.bind(null,n)).catch(n.oe)},I=function(e){return n.e(0).then(function(){return e(n(165))}.bind(null,n)).catch(n.oe)},x=function(e){return n.e(11).then(function(){return e(n(160))}.bind(null,n)).catch(n.oe)},N=function(e){return n.e(7).then(function(){return e(n(166))}.bind(null,n)).catch(n.oe)},k=function(e){return n.e(21).then(function(){return e(n(161))}.bind(null,n)).catch(n.oe)},U=function(e){return n.e(8).then(function(){return e(n(172))}.bind(null,n)).catch(n.oe)},j=function(e){return n.e(15).then(function(){return e(n(173))}.bind(null,n)).catch(n.oe)},P=function(e){return n.e(14).then(function(){return e(n(178))}.bind(null,n)).catch(n.oe)};o.default.use(r.a);var R=new r.a({routes:[{path:"/",redirect:{name:"index",query:{title:"主页"}}},{name:"index",path:"/index",components:{default:i,header:s}},{name:"myplanet",path:"/myplanet",components:{default:h,header:s}},{name:"discovery",path:"/discovery",components:{default:m,header:s}},{name:"message",path:"/message",components:{default:T,header:s}},{name:"profile",path:"/profile",components:{default:g,header:s}},{path:"/login",name:"login",components:{default:u,header:l}},{path:"/signup",name:"signup",components:{default:c,header:l}},{path:"/allplanet",name:"allplanet",components:{default:v,header:l}},{path:"/cardpost",name:"cardpost",components:{default:b,header:l}},{path:"/planetpost",name:"planetpost",components:{default:E,header:l}},{path:"/planetapply",name:"planetapply",components:{default:w,header:l}},{path:"/myinfo",name:"myinfo",components:{default:O,header:l}},{path:"/changepwd",name:"changepwd",components:{default:S,header:l}},{path:"/mycollection",name:"mycollection",components:{default:y,header:l}},{path:"/invitation",name:"invitation",components:{default:_,header:l}},{path:"/search",name:"search",components:{default:C,header:f}},{path:"/postcontent",name:"postcontent",components:{default:I,header:l},children:[{path:":id",components:{default:I,header:l}}]},{path:"/joinplanet",name:"joinplanet",components:{default:x,header:d},children:[{path:":id",components:{default:x,header:d}}]},{path:"/postpost",name:"postpost",components:{default:N,header:p}},{path:"/joinprivateplanet",name:"joinprivateplanet",components:{default:k,header:d}},{path:"/creatplanet",name:"creatplanet",components:{default:U,header:l}},{path:"/getPassword",name:"getPassword",components:{default:j,header:l}},{path:"/setPassword",name:"setPassword",components:{default:P,header:l}}]});R.beforeEach(function(e,t,n){console.log("测试1"),"/message"===e.path||"/myinfo"===e.path||"/changepwd"===e.path||"/mycollection"===e.path||"/invitation"===e.path||"/creatplanet"===e.path||"/postpost"===e.path?(console.log("测试2"),null==JSON.parse(localStorage.getItem("user"))&&""==a.a.state.token?(console.log("测试3"),n({path:"/login",query:{title:"返回"}})):n()):n()}),t.a=R},5:function(e,t,n){"use strict";var o=n(44),r=n.n(o),a=n(25),u=n.n(a),c=n(14),i=n(38),s=n(31),l=(n(6),n(17),n(95),n(68)),f=n(97);c.default.use(i.b);var d=new i.b.Store({state:{token:"",userInfo:{},searchContent:"",postContent:{},postEditContent:{}},mutations:{SET_USERINFO:function(e,t){e.userInfo=t},SET_TOKEN:function(e,t){e.token=t},LOGOUT_USER:function(e){e.userInfo={}},LOGOUT_TOKEN:function(e){e.token=""},SET_SEARCH:function(e,t){e.searchContent=t},SET_POSTCONTENT:function(e,t){e.postContent=t},SET_POSTEDITCONTENT:function(e,t){e.postEditContent=t}},modules:{user:f.a},actions:{Login:function(e,t){var o=e.commit;return console.log("运行到这里"),new u.a(function(e,a){console.log("运行到这里"),n.i(l.a)(t).then(function(t){console.log("运行到这里"),o("SET_TOKEN",t["Access-Token"]),o("SET_USERINFO",t),localStorage.setItem("user",r()(t)),console.log("登录成功：　"+t),s.a.push({path:"/",query:{title:"主页"}}),e()}).catch(function(e){a(e)})})},Logout:function(e,t){var n=e.commit;return new u.a(function(e,t){n("LOGOUT_USER"),n("LOGOUT_TOKEN"),localStorage.removeItem("user"),e()}).catch(function(e){reject(e)})},Search:function(e,t){var n=e.commit;return new u.a(function(e,o){n("SET_SEARCH",t.serText),e()}).catch(function(e){reject(e)})},SignUp:function(e,t){var n=e.commit;n("SET_TOKEN",t["Access-Token"]),n("SET_USERINFO",t)},setPostContent:function(e,t){(0,e.commit)("SET_POSTCONTENT",t)},setPostEditContent:function(e,t){(0,e.commit)("SET_POSTEDITCONTENT",t)}}});t.a=d},59:function(e,t){},6:function(e,t,n){"use strict";function o(){var e=navigator.userAgent.toLowerCase();return e.indexOf("msie")>0?"msie":e.indexOf("firefox")>0?"firefox":e.indexOf("chrome")>0?"chrome":e.indexOf("safari")>0&&e.indexOf("chrome")<0?"safari":e.indexOf("opera")>0?"opera":"unknown-brower"}var r=n(135),a=n.n(r),u={set:function(e,t,n){a.a.set(e,{val:t,exp:n,time:(new Date).getTime()})},get:function(e){var t=a.a.get(e);return t?(new Date).getTime()-t.time>t.exp?null:t.val:{}}},c=function(e){var t=parseInt(e/60),n=parseInt(e%60);return(t<10?"0"+t:""+t)+":"+(n<10?"0"+n:""+n)},i=function e(t){return"BODY"!=t.tagName||t.id?t.id?t.id:e(t.parentNode):null},s=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&"__ob__"!=n&&(t[n]=e[n]);return t},l=function(e){var t=document.documentElement;window.rem=window.screen.width/10,t.style.fontSize="75px"};t.a={getBrowserInfo:o,storeWithExpiration:u,secondsToFormat:c,getNearestId:i,getPureObj:s,setREM:l}},62:function(e,t,n){n(129);var o=n(63)(n(94),n(146),null,null);e.exports=o.exports},65:function(e,t,n){"use strict";var o=n(25),r=n.n(o),a=n(21),u=n.n(a),c=(n(6),n(5));u.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",u.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8";var i=u.a.create({baseURL:"http://47.88.58.119:800/",timeout:5e3});i.interceptors.request.use(function(e){return void 0!=localStorage.getItem("user")&&(e.headers["Access-Token"]=JSON.parse(localStorage.getItem("user"))["Access-Token"]||""),""!==c.a.state.token&&(e.headers["Access-Token"]=c.a.state.token||""),"post"===e.method&&(e.headers["Content-Type"]=e.headers.post["Content-Type"]),"put"===e.method&&(e.headers["Content-Type"]=e.headers.post["Content-Type"]),e},function(e){return r.a.reject(e)}),i.interceptors.response.use(function(e){return 200==e.status?(console.log("请求成功： "+e.data),e.data):204==e.status?{}:void 0},function(e){return r.a.reject(e)}),t.a=i},68:function(e,t,n){"use strict";function o(e,t){return n.i(p.a)({url:"/users/"+e+"/messages?offset="+t.offset+"&limit="+t.limit+"&type="+t.type,method:"get"})}function r(e){return n.i(p.a)({url:"/users/"+e,method:"get"})}function a(e,t){return n.i(p.a)({url:"/users/"+e+"/password",method:"put",data:t})}function u(e){return n.i(p.a)({url:"/users/"+e,method:"get"})}function c(e){return n.i(p.a)({url:"/users/resetpsw",method:"post",data:{mail:e}})}function i(e,t){return n.i(p.a)({url:"/users/resetpsw",method:"put",params:{token:t,password:e}})}function s(e){return n.i(p.a)({url:"/users",method:"post",data:e})}function l(e){return n.i(p.a)({url:"/users/signin",method:"post",data:e})}function f(e,t){return n.i(p.a)({url:"/users/"+e,method:"put",data:t})}t.h=o,t.f=r,t.e=a,t.d=u,t.c=c,t.b=i,t.i=s,t.a=l,t.g=f;var d=n(21),p=(n.n(d),n(6),n(5),n(65))},94:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(76),r=n.n(o),a=n(38),u=n(6);t.default={name:"app",components:{},data:function(){return{}},methods:r()({},n.i(a.a)([]),{change:function(){this.dialogTableVisible=!0,console.log("fuck")}}),mounted:function(){u.a.setREM()}}},95:function(e,t,n){"use strict";var o=n(45),r=(n.n(o),n(44)),a=(n.n(r),n(25)),u=n.n(a),c=n(21),i=n.n(c),s=n(132),l=(n.n(s),n(6),n(5));i.a.defaults.baseURL="http://47.88.58.119:800/",i.a.defaults.timeout=2e4,i.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",i.a.defaults.headers.post["Content-Type"]="application/json;charset=UTF-8",i.a.interceptors.request.use(function(e){return"post"===e.method&&(e.headers["Content-Type"]=e.headers.post["Content-Type"]),""!==l.a.state.token&&(e.headers["Access-Token"]=l.a.state.token),e},function(e){return console.log("parameter is illegal"),u.a.reject(e)}),i.a.interceptors.response.use(function(e){return 204===e.status?e.data:200!==e.status&&201!==e.status?u.a.reject(e):e.data},function(e){return u.a.reject(e)})},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),r=n(62),a=n.n(r),u=n(5),c=n(31),i=n(61),s=n.n(i),l=n(59),f=(n.n(l),n(60)),d=n.n(f);o.default.use(s.a),o.default.config.productionTip=!1,d.a.attach(document.body),new o.default({el:"#app",router:c.a,store:u.a,render:function(e){return e(a.a)}})},97:function(e,t,n){"use strict";var o=n(99),r=n.n(o),a=n(6),u=n(17),c={userInfo:a.a.storeWithExpiration.get("user")||{}},i={getUserInfo:function(e){return e.userInfo}},s=r()({},u.a,function(e,t){e.userInfo=t}),l={setUserInfo:function(e,t){(0,e.commit)(u.a,t)},loadUserInfo:function(e){var t=e.commit,n=a.a.storeWithExpiration.get("user");n?t(u.a,n):t(u.a,{})}};t.a={state:c,getters:i,actions:l,mutations:s}}},[96]);
//# sourceMappingURL=app.3a4a6ffc69f8df8e37fb.js.map