webpackJsonp([19],{163:function(e,a,n){n(292);var t=n(63)(n(221),n(320),"data-v-efbc5d9a",null);e.exports=t.exports},221:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=n(68),i=n(5);a.default={name:"message",data:function(){return{reddot1:!1,reddot2:!1,reddot3:!1,applyMessage:{},postMessage:{},groupMessage:{},postNull:!0,groupNull:!0,applyNull:!1}},mounted:function(){var e=this,a=JSON.parse(localStorage.getItem("user")).id||i.a.state.userInfo.id;n.i(t.h)(a,{offset:0,limit:20,type:"home"}).then(function(a){e.applyMessage=null===a.data.apply?{}:a.data.apply,e.postMessage=null===a.data.post?{}:a.data.post,e.groupMessage=null===a.data.group?{}:a.data.group}).catch(function(a){console.log(a),e.$Message.error(a)})}}},264:function(e,a,n){a=e.exports=n(149)(!0),a.push([e.i,".wuan-cards .wuan-briefcard[data-v-efbc5d9a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;padding:.2rem;margin:0 .1rem;position:relative;background:#fff;box-shadow:0 0 .013333rem 0 rgba(0,0,0,.12),0 .013333rem .013333rem 0 rgba(0,0,0,.24);border-radius:.026667rem;height:.84rem}.wuan-cards .wuan-briefcard>i.iconfont[data-v-efbc5d9a]{color:#5677fc;font-size:.46rem;margin-right:.16rem}.wuan-cards .wuan-briefcard div.content[data-v-efbc5d9a]{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:0}.wuan-cards .wuan-briefcard div.content h1[data-v-efbc5d9a]{overflow:hidden;text-overflow:ellipsis;font-size:.213333rem;color:rgba(0,0,0,.87);text-align:left}.wuan-cards .wuan-briefcard div.content p[data-v-efbc5d9a]{text-align:left;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:.16rem;color:rgba(0,0,0,.54)}.wuan-cards .wuan-briefcard div.content>i[data-v-efbc5d9a]{color:red;font-size:.106667rem;position:absolute;top:.266667rem;right:.266667rem}.wuan-cards div.wuan-briefcard[data-v-efbc5d9a]:not(:first-child){margin-top:.08rem}","",{version:3,sources:["D:/wuan_webapp1/wuanlife_webapp/src/views/Message.vue"],names:[],mappings:"AAAA,6CACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,sBAAuB,AACvB,cAAgB,AAChB,eAAiB,AACjB,kBAAmB,AACnB,gBAAoB,AACpB,sFAAmG,AACnG,yBAA2B,AAC3B,aAAgB,CACjB,AAED,wDACE,cAAe,AACf,iBAAmB,AACnB,mBAAsB,CACvB,AAED,yDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,WAAa,CACd,AAED,4DACE,gBAAiB,AACjB,uBAAwB,AACxB,qBAAuB,AACvB,sBAA2B,AAC3B,eAAiB,CAClB,AAED,2DACE,gBAAiB,AACjB,gBAAiB,AACjB,mBAAoB,AACpB,uBAAwB,AACxB,iBAAmB,AACnB,qBAA2B,CAC5B,AAED,2DACE,UAAW,AACX,qBAAuB,AACvB,kBAAmB,AACnB,eAAiB,AACjB,gBAAmB,CACpB,AAED,kEACE,iBAAoB,CACrB",file:"Message.vue",sourcesContent:[".wuan-cards .wuan-briefcard[data-v-efbc5d9a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  box-sizing: border-box;\n  padding: 0.2rem;\n  margin: 0 0.1rem;\n  position: relative;\n  background: #ffffff;\n  box-shadow: 0 0 0.013333rem 0 rgba(0, 0, 0, 0.12), 0 0.013333rem 0.013333rem 0 rgba(0, 0, 0, 0.24);\n  border-radius: 0.026667rem;\n  height: 0.84rem;\n}\n\n.wuan-cards .wuan-briefcard > i.iconfont[data-v-efbc5d9a] {\n  color: #5677fc;\n  font-size: 0.46rem;\n  margin-right: 0.16rem;\n}\n\n.wuan-cards .wuan-briefcard div.content[data-v-efbc5d9a] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  min-width: 0;\n}\n\n.wuan-cards .wuan-briefcard div.content h1[data-v-efbc5d9a] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 0.213333rem;\n  color: rgba(0, 0, 0, 0.87);\n  text-align: left;\n}\n\n.wuan-cards .wuan-briefcard div.content p[data-v-efbc5d9a] {\n  text-align: left;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: 0.16rem;\n  color: rgba(0, 0, 0, 0.54);\n}\n\n.wuan-cards .wuan-briefcard div.content > i[data-v-efbc5d9a] {\n  color: red;\n  font-size: 0.106667rem;\n  position: absolute;\n  top: 0.266667rem;\n  right: 0.266667rem;\n}\n\n.wuan-cards div.wuan-briefcard[data-v-efbc5d9a]:not(:first-child) {\n  margin-top: 0.08rem;\n}"],sourceRoot:""}])},292:function(e,a,n){var t=n(264);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);n(150)("2ac2d388",t,!0)},320:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"wuan-cards"},[n("div",{staticClass:"wuan-briefcard"},[n("i",{staticClass:"iconfont icon-privatenotice"}),e._v(" "),n("div",{staticClass:"content",on:{click:function(a){e.$router.push({path:"/planetapply",query:{title:"私密星球申请"}})}}},[n("h1",[e._v("私密星球申请")]),e._v(" "),e.applyNull?n("p",[n("span",[e._v(e._s(e.applyNull.user.name))]),e._v(" 申请加入 "),n("span",[e._v(e._s(e.applyNull.group.name))])]):n("p",[e._v("暂无消息")]),e._v(" "),e.reddot1?n("i",{staticClass:"iconfont icon-dot"}):e._e()])]),e._v(" "),n("div",{staticClass:"wuan-briefcard",on:{click:function(a){e.$router.push({path:"/cardpost",query:{title:"帖子通知"}})}}},[n("i",{staticClass:"iconfont icon-postnotice"}),e._v(" "),n("div",{staticClass:"content"},[n("h1",[e._v("帖子通知")]),e._v(" "),e.postNull?n("p",[n("span",[e._v(e._s(e.postMessage.user.name))]),e._v(" 回复了你")]):n("p",[e._v("暂无消息")]),e._v(" "),e.reddot2?n("i",{staticClass:"iconfont icon-dot"}):e._e()])]),e._v(" "),n("div",{staticClass:"wuan-briefcard",on:{click:function(a){e.$router.push({path:"/planetpost",query:{title:"星球通知"}})}}},[n("i",{staticClass:"iconfont icon-planetnotice"}),e._v(" "),n("div",{staticClass:"content"},[n("h1",[e._v("星球通知")]),e._v(" "),e.groupNull?n("p",[n("span",[e._v(e._s(e.groupMessage.user.name))]),e._v(" "+e._s(e.groupMessage.content))]):n("p",[e._v("暂无消息")]),e._v(" "),e.reddot3?n("i",{staticClass:"iconfont icon-dot"}):e._e()])])])},staticRenderFns:[]}}});
//# sourceMappingURL=19.51e3488b1d1729bd0f2a.js.map