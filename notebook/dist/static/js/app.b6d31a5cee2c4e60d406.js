webpackJsonp([1],{"2rIf":function(t,e){},"5z3d":function(t,e){},GPNd:function(t,e){},H1EO:function(t,e){},Jdfc:function(t,e){t.exports={baseURL:"https://note-server.hunger-valley.com"}},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("span",{attrs:{title:this.user.username}},[this._v(this._s(this.slug))])},staticRenderFns:[]};var i=s("VU/8")({data:function(){return{user:{username:"hunger"},slug:"H"}}},r,!1,function(t){s("H1EO")},"data-v-e1198508",null).exports,o=s("//Fk"),a=s.n(o),l=s("mtWM"),u=s.n(l),c=s("Jdfc"),d=s.n(c);function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new a.a(function(n,r){var i={url:t,method:e,ValidityState:function(t){return t>=200&&t<300||400===t}};"get"===e.toLowerCase()?i.params=s:i.data=s,u()(i).then(function(t){200===t.status?n(t.data):(console.error(t.data),r(t.data))}).catch(function(t){console.error({msg:"网络异常"}),r({msg:"网络异常"})})})}console.log(d.a),u.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",u.a.defaults.baseURL=d.a.baseURL,u.a.defaults.withCredentials=!0;var g="/auth/register",p="/auth/login",v="/auth/logout",m="/auth",f=function(t){var e=t.username,s=t.password;return h(g,"POST",{username:e,password:s})},w=function(t){var e=t.username,s=t.password;return h(p,"POST",{username:e,password:s})},_=function(){return h(v)},k=function(){return h(m)},E={comments:{avatar:i},methods:{logout:function(){console.log("logout"),_().then(function(t){console.log(t)})}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"sidebar"}},[e("avatar"),this._v(" "),e("div",{staticClass:"icons"},[e("router-link",{attrs:{to:"/note/1",title:"笔记"}},[e("i",{staticClass:"iconfont icon-note"})]),this._v(" "),e("router-link",{attrs:{to:"/notebooks",title:"笔记本"}},[e("i",{staticClass:"iconfont icon-notebook"})]),this._v(" "),e("router-link",{attrs:{to:"/trash/2",title:"回收站"}},[e("i",{staticClass:"iconfont icon-trash"})])],1),this._v(" "),e("div",{staticClass:"logout"},[e("i",{staticClass:"iconfont icon-logout",on:{click:this.logout}})])],1)},staticRenderFns:[]};var C={name:"app",components:{sidebar:s("VU/8")(E,y,!1,function(t){s("GPNd")},"data-v-d9f585b0",null).exports}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("router-view")],1)},staticRenderFns:[]};var b=s("VU/8")(C,R,!1,function(t){s("rZ8s")},null,null).exports,x=s("/ocq");k().then(function(t){console.log(t)});var $={data:function(){return{isShowLogin:!0,isShowRegister:!1,login:{username:"",password:"",notice:"输入用户名和密码",isError:!0},register:{username:"",password:"",notice:"创建账号后，请记住用户名和密码",isError:!1}}},methods:{showLogin:function(){this.isShowLogin=!0,this.isShowRegister=!1},showRegister:function(){this.isShowLogin=!1,this.isShowRegister=!0},onRegister:function(){return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)?/^.{6,16}$/.test(this.register.password)?(this.register.isError=!1,this.register.notice="",console.log("start register...,\n            username: "+this.register.username+" ,\n            password: "+this.register.password),void f({username:this.login.username,password:this.login.password}).then(function(t){console.log(t)})):(this.register.isError=!0,void(this.register.notice="密码长度为6~16个字符")):(this.register.isError=!0,void(this.register.notice="用户名3~15个字符，仅限于字母数字下划线中文"))},onLogin:function(){return/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)?/^.{6,16}$/.test(this.login.password)?(this.login.isError=!1,this.login.notice="",console.log("start login..., \n            username: "+this.login.username+" , \n            password: "+this.login.password),void w({username:this.login.username,password:this.login.password}).then(function(t){console.log(t)})):(this.login.isError=!0,void(this.login.notice="密码长度为6~16个字符")):(this.login.isError=!0,void(this.login.notice="用户名3~15个字符，仅限于字母数字下划线中文"))}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"main"}),t._v(" "),s("div",{staticClass:"form"},[s("h3",{on:{click:t.showRegister}},[t._v("创建账户")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"register",class:{show:t.isShowRegister}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.username,expression:"register.username"}],attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.register.username},on:{input:function(e){e.target.composing||t.$set(t.register,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.register.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onRegister.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.register,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.register.isError}},[t._v(t._s(t.register.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.onRegister}},[t._v("创建账号")])])]),t._v(" "),s("h3",{on:{click:t.showLogin}},[t._v("登录")]),t._v(" "),s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"login",class:{show:t.isShowLogin}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.username,expression:"login.username"}],attrs:{type:"text",placeholder:"输入用户名"},domProps:{value:t.login.username},on:{input:function(e){e.target.composing||t.$set(t.login,"username",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.login.password,expression:"login.password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:t.login.password},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onLogin.apply(null,arguments)},input:function(e){e.target.composing||t.$set(t.login,"password",e.target.value)}}}),t._v(" "),s("p",{class:{error:t.login.isError}},[t._v(t._s(t.login.notice))]),t._v(" "),s("div",{staticClass:"button",on:{click:t.onLogin}},[t._v("登录")])])])],1)])])])])},staticRenderFns:[]};var S=s("VU/8")($,L,!1,function(t){s("2rIf")},null,null).exports,U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"notebook-list"}},[e("h1",[this._v(this._s(this.msg))]),this._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"/note/1"}},[this._v("笔记本1")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/note/2"}},[this._v("笔记本2")])],1)])])},staticRenderFns:[]};var P=s("VU/8")({name:"Login",data:function(){return{msg:"笔记本列表"}}},U,!1,function(t){s("5z3d")},"data-v-48ba2e16",null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"note-detail"}},[e("h1",[this._v(this._s(this.msg)+": "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var N=s("VU/8")({name:"Login",data:function(){return{msg:"笔记本详情页"}}},F,!1,function(t){s("brQ0")},"data-v-485a31e0",null).exports,V={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"trash-detail"}},[e("h1",[this._v(this._s(this.msg)+" : "+this._s(this.$route.params.noteId))])])},staticRenderFns:[]};var O=s("VU/8")({name:"Login",data:function(){return{msg:"回收站笔记详情页"}}},V,!1,function(t){s("Q/as")},"data-v-6fc9cf42",null).exports;n.a.use(x.a);var I=new x.a({routes:[{path:"/login",component:S},{path:"/notebooks",component:P},{path:"/note/:noteId",component:N},{path:"/trash/:noteId",component:O}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:I,components:{App:b},template:"<App/>"})},"Q/as":function(t,e){},brQ0:function(t,e){},rZ8s:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b6d31a5cee2c4e60d406.js.map