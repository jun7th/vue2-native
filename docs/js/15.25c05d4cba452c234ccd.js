webpackJsonp([15],{"7LOH":function(t,e,n){"use strict";function i(t){n("oYed")}Object.defineProperty(e,"__esModule",{value:!0});var o=n("etP+"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fadeIn"}},[n("div",{attrs:{id:"comment"}},[n("my-header",{attrs:{fixed:"",title:"评论"}},[n("a",{staticClass:"close-black",attrs:{slot:"left"},on:{click:function(e){e.stopPropagation(),t.$router.go(-1)}},slot:"left"})]),t._v(" "),n("div",{staticClass:"content",class:{isIOS:"ios"==t.$store.state.device}},[n("div",{directives:[{name:"swiper",rawName:"v-swiper:swiperRight",value:"close",expression:"'close'",arg:"swiperRight"},{name:"swiper",rawName:"v-swiper:all",value:"blur",expression:"'blur'",arg:"all"}],staticClass:"container"},[n("div",{staticClass:"abstract"},[n("h1",{staticClass:"title"},[t._v(t._s(t.currentArticle.title))]),t._v(" "),n("span",{staticClass:"befrom"},[t._v(t._s(t.currentArticle.befrom))]),t._v(" "),n("span",{staticClass:"newstime"},[t._v(t._s(t.currentArticle.newstime))])]),t._v(" "),t.myComment.length>0?n("div",{staticClass:"comment-self"},[n("h2",{staticClass:"comment_title"},[t._v("我的评论("+t._s(t.myComment.length)+")")]),t._v(" "),t._l(t.myComment,function(e,i){return n("comment-item",{key:i,attrs:{comment:"remark",type:"userself",itemJson:e},on:{reply:t.replyCallBack,delete:t.deleteCallBack}})})],2):t._e(),t._v(" "),t.allComment.length>0?n("div",{staticClass:"comment-all"},[n("h2",{staticClass:"comment_title"},[t._v("全部评论("+t._s(t.allComment.length)+")")]),t._v(" "),t._l(t.allComment,function(e,i){return n("comment-item",{key:i,attrs:{comment:"remark",type:"all",itemJson:e},on:{reply:t.replyCallBack}})})],2):t._e(),t._v(" "),0===t.allComment.length&&0===t.myComment.length?n("div",{staticClass:"comment-nothing"},[n("h2",{staticClass:"comment_title"},[t._v("抢先评论！")])]):t._e()])]),t._v(" "),n("my-tool",{attrs:{comment:"remark"},on:{publish:t.publishCallBack}}),t._v(" "),n("router-view")],1)])},a=[],s={render:l,staticRenderFns:a},m=s,r=n("VU/8"),c=i,d=r(o.a,m,!1,c,null,null);e.default=d.exports},"etP+":function(t,e,n){"use strict";(function(t){var i=n("Dd8w"),o=n.n(i),l=n("NYxO");e.a={name:"comment",data:function(){return{myComment:[],allComment:[]}},computed:o()({},Object(l.c)("detail",["currentArticle","listArticle"])),methods:o()({},Object(l.d)("detail",["set_listArticle"]),Object(l.b)("detail",["get_Comment_data"]),{get_myComment:function(){var t=this;this.get_Comment_data({type:"userself",page:1}).then(function(e){e&&(t.myComment=e)})},get_allComment:function(){var t=this;this.get_Comment_data({type:"all",page:1}).then(function(e){e&&(t.allComment=e)})},publishCallBack:function(e){this.myComment.unshift(e),t("#comment .container").scrollTop(0),this.currentArticle.plnum=this.myComment.length+this.allComment.length,this.listArticle&&(this.listArticle.plnum++,this.set_listArticle(this.listArticle))},replyCallBack:function(t){this.$router.push({name:"reply",params:{json:t}})},deleteCallBack:function(t){var e=this.myComment.findIndex(function(e){return e.remarkid===t.remarkid});this.myComment.splice(e,1),this.currentArticle.plnum=this.myComment.length+this.allComment.length}}),created:function(){this.get_myComment(),this.get_allComment()}}}).call(e,n("7t+N"))},jtc0:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"\n#comment {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  overflow: hidden;\n  z-index: 888;\n  background: #fff;\n}\n#comment header {\n  background: #fdfdfd;\n  color: #333;\n  font-size: 16px;\n  border-bottom: 1px solid #ddd;\n}\n#comment header i {\n  font-size: 20px;\n  vertical-align: middle;\n}\n#comment .tool {\n  z-index: 888;\n}\n#comment .content {\n  padding-bottom: 48px;\n}\n#comment .content .container .abstract {\n  font-size: 12px;\n  padding: 15px 16px 22px;\n  border-bottom: 1px solid #eee;\n}\n#comment .content .container .abstract .title {\n  color: #000;\n  font-size: 18px;\n  font-weight: bold;\n  padding-bottom: 15px;\n}\n#comment .content .container .abstract .befrom {\n  margin-right: 5px;\n}\n#comment .content .container .comment_title {\n  font-weight: bold;\n  padding: 10px 16px;\n  font-size: 14px;\n  color: #333;\n}\n#comment .content .comment_item:last-of-type {\n  border: none;\n}\n/*.flicker-enter-active {\n    animation: flickerEnter 1.5s linear;\n}\n@keyframes flickerEnter {\n  0% {\n    background: #fff;\n  }\n  50% {\n    background: #ffff8f;\n  }\n  100% {\n    background: #fff;\n  }\n}*/\n",""])},oYed:function(t,e,n){var i=n("jtc0");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("16f26cbf",i,!0,{})}});