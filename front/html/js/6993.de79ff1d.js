"use strict";(self["webpackChunks030"]=self["webpackChunks030"]||[]).push([[6993],{6993:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var i=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"fixed"}},["input"==e.type?t("div",{class:`search-menu search-menu-theme-${e.theme}`},[t("Select",{ref:"select",attrs:{prefix:"ios-search",transfer:"",clearable:"",filterable:"",placeholder:"请选择添加的模块"},on:{"on-change":e.changeMenu},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}},e._l(e.list,(function(s,i){return t("Option",{key:i,attrs:{value:s}},[e._v(e._s(s.title))])})),1),t("Icon",{directives:[{name:"show",rawName:"v-show",value:e.key,expression:"key"}],staticClass:"close-icon",staticStyle:{"margin-left":"15px"},attrs:{type:"ios-close-circle"},on:{click:e.clear}})],1):t("div",{staticClass:"search-dropdown"},[t("Dropdown",{attrs:{trigger:"click",placement:"bottom-start"}},[t("div",{staticStyle:{display:"inline-block"}},[t("div",{staticClass:"header-right-icon header-action"},[t("Icon",{staticStyle:{"margin-left":"15px"},attrs:{type:"ios-search",size:20}})],1)]),t("div",{staticClass:"search-select",attrs:{slot:"list"},slot:"list"},[t("Select",{ref:"select",attrs:{prefix:"ios-search",transfer:"",clearable:"",filterable:"",placeholder:"艾是OA菜单查询"},on:{"on-change":e.changeMenu},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}},e._l(e.list,(function(s,i){return t("Option",{key:i,attrs:{value:s}},[e._v(e._s(s.title))])})),1)],1)])],1)])},l=[],a=s(9669),n=s.n(a),c=s(7877);const r={name:"search",props:{theme:{type:String,default:"darkblue"},type:{type:String,default:"input"}},data(){return{key:"",list:[]}},computed:{},methods:{init(){let e=this.getStore("menuData");if(e)e=JSON.parse(e),this.list=this.getList(e);else{let t=this.getStore("accessToken");n().get(c.Af,{headers:{accessToken:t}}).then((t=>{e=t.result,this.list=this.getList(e)}))}},getList(e){let t=[];return e.forEach((function(e){e.children&&e.children.length>0&&e.children.forEach((function(e){e.children&&e.children.length>0&&e.children.forEach((function(e){t.push({title:e.title,name:e.name})}))}))})),t},changeMenu(e){e&&this.$emit("changeOk",e)},clear(){this.$refs.select.clearSingleSelect()}},mounted(){this.init()}},o=r;var h=s(1001),u=(0,h.Z)(o,i,l,!1,null,null,null);const d=u.exports}}]);