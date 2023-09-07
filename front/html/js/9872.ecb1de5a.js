"use strict";(self["webpackChunks030"]=self["webpackChunks030"]||[]).push([[9872,6993,8188,4369],{6869:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"own-space"},[t("Card",[t("Divider",{attrs:{dashed:""}},[e._v(" 个人门户 "),t("Button",{directives:[{name:"show",rawName:"v-show",value:!e.editFlag,expression:"!editFlag"}],attrs:{type:"success"},on:{click:function(t){e.editFlag=!0}}},[e._v("开始编辑")]),t("Button",{directives:[{name:"show",rawName:"v-show",value:e.editFlag,expression:"editFlag"}],attrs:{type:"warning"},on:{click:e.saveEdit}},[e._v("保存提交")])],1),t("Form",{ref:"userForm",attrs:{model:e.userForm,"label-width":90,"label-position":"left"}},[t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:12}},[t("FormItem",{attrs:{label:"登录账号",prop:"username"}},[t("Input",{staticStyle:{width:"100%"},attrs:{readonly:""},model:{value:e.userForm.username,callback:function(t){e.$set(e.userForm,"username",t)},expression:"userForm.username"}})],1)],1),t("Col",{attrs:{span:12}},[t("FormItem",{attrs:{label:"姓名",prop:"nickname"}},[t("Input",{staticStyle:{width:"100%"},attrs:{readonly:""},model:{value:e.userForm.nickname,callback:function(t){e.$set(e.userForm,"nickname",t)},expression:"userForm.nickname"}})],1)],1)],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:12}},[t("FormItem",{attrs:{label:"账号类型",prop:"typeTxt"}},[t("Input",{staticStyle:{width:"100%"},attrs:{readonly:""},model:{value:e.userForm.typeTxt,callback:function(t){e.$set(e.userForm,"typeTxt",t)},expression:"userForm.typeTxt"}})],1)],1),t("Col",{attrs:{span:12}},[t("FormItem",{attrs:{label:"所属部门",prop:"departmentTitle"}},[t("Input",{staticStyle:{width:"100%"},attrs:{readonly:""},model:{value:e.userForm.departmentTitle,callback:function(t){e.$set(e.userForm,"departmentTitle",t)},expression:"userForm.departmentTitle"}})],1)],1)],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:12}},[t("FormItem",{attrs:{label:"性别",prop:"username"}},[t("dict",{staticStyle:{width:"100%"},attrs:{dict:"sex",transfer:"",readonly:!e.editFlag,placeholder:"请选择性别"},model:{value:e.userForm.sex,callback:function(t){e.$set(e.userForm,"sex",t)},expression:"userForm.sex"}})],1)],1),t("Col",{attrs:{span:12}},[t("FormItem",{attrs:{label:"头像",prop:"avatar"}},[t("upload-pic-thumb",{staticStyle:{width:"100%"},attrs:{multiple:!1},model:{value:e.userForm.avatar,callback:function(t){e.$set(e.userForm,"avatar",t)},expression:"userForm.avatar"}})],1)],1)],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:12}},[t("FormItem",{attrs:{label:"家庭地址",prop:"nickname"}},[t("Input",{staticStyle:{width:"100%"},attrs:{readonly:!e.editFlag},model:{value:e.userForm.street,callback:function(t){e.$set(e.userForm,"street",t)},expression:"userForm.street"}})],1)],1),t("Col",{attrs:{span:12}},[t("FormItem",{attrs:{label:"生日",prop:"username"}},[t("DatePicker",{staticStyle:{width:"100%"},attrs:{readonly:!e.editFlag,type:"date"},on:{"on-change":e.changeBirth},model:{value:e.userForm.birth,callback:function(t){e.$set(e.userForm,"birth",t)},expression:"userForm.birth"}})],1)],1)],1),t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:24}},[t("FormItem",{attrs:{label:"个性签名",prop:"nickname"}},[t("Input",{staticStyle:{width:"100%"},attrs:{type:"textarea",readonly:!e.editFlag,autosize:{minRows:3,maxRows:5},placeholder:"个性签名"},model:{value:e.userForm.description,callback:function(t){e.$set(e.userForm,"description",t)},expression:"userForm.description"}})],1)],1)],1)],1)],1),t("Divider",[e._v("个人门户")]),t("Card",[t("Row",{attrs:{gutter:16}},[t("Col",{attrs:{span:"12"}},[t("Divider",[e._v("当前常用模块")]),t("List",{attrs:{header:"---",footer:"---",border:""}},e._l(e.addMenuTempList,(function(a,s){return t("ListItem",{key:s},[e._v(" "+e._s(a.title)+" "),t("Button",{staticStyle:{marginLeft:"20px"},attrs:{type:"error",shape:"circle",icon:"md-trash",size:"small"},on:{click:function(t){return e.deleteOneMenu(a)}}})],1)})),1)],1),t("Col",{attrs:{span:"12"}},[t("Divider",[e._v("个人门户设置 "),t("Button",{attrs:{type:"primary"},on:{click:e.addMenuFx}},[e._v("保存更改")])],1),t("Row",{attrs:{gutter:16}},[t("div",{staticClass:"desc"},[e._v("在下面的完成选择菜单即可添加")]),t("search",{attrs:{theme:"light",type:"input"},on:{changeOk:e.addMenuTempFx}})],1)],1)],1)],1)],1)},r=[],i=a(2439),n=a(3685),l=a(1955),o=a(8188),u=a(6993);const c={components:{uploadPicThumb:n["default"],dict:o["default"],search:u["default"]},name:"my_home_index",data(){return{editFlag:!1,userForm:{id:"",avatar:"",username:"",sex:"",status:"",type:"",typeTxt:"",address:"",addressArray:[]},saveLoading:!1,addMenuTempList:[]}},methods:{init(){let e=JSON.parse(l.Z.get("userInfo"));for(let s in e)null==e[s]&&(e[s]="");let t=JSON.stringify(e),a=JSON.parse(t);a.addressArray=[],this.userForm=a,a.address&&(this.userForm.address=a.address,this.userForm.addressArray=JSON.parse(a.address)),0==this.userForm.type?this.userForm.typeTxt="普通用户":1==this.userForm.type&&(this.userForm.typeTxt="管理员")},addMenuTempFx(e){this.addMenuTempList.length>5?this.$Message.warning("最多添加六个常用模块"):this.addMenuTempList.push(e)},addMenuFx(){var e="",t=this.addMenuTempList.length;if(t>0){e+=this.addMenuTempList[0].name;for(var a=1;a<t;a++)e+="ZWZ666"+this.addMenuTempList[a].name}(0,i.uJ)({str:e}).then((e=>{e.success&&this.$Message.warning("操作成功")}))},saveEdit(){this.saveLoading=!0,this.editFlag=!1,"object"==typeof this.userForm.birth&&(this.userForm.birth=this.format(this.userForm.birth,"yyyy-MM-dd")),delete this.userForm.roles,(0,i.e3)(this.userForm).then((e=>{this.saveLoading=!1,e.success&&(this.$Message.success("保存成功"),l.Z.set("userInfo",JSON.stringify(this.userForm)),this.$store.commit("setAvatarPath",this.userForm.avatar))}))},getMyDoorListFx(){var e=this;(0,i.KF)().then((t=>{e.addMenuTempList=t.result}))},deleteOneMenu(e){for(var t=[],a=0;a<this.addMenuTempList.length;a++)this.addMenuTempList[a].name!=e.name&&t.push(this.addMenuTempList[a]);this.addMenuTempList=t},changeAddress(){this.userForm.address=JSON.stringify(this.userForm.addressArray)},changeBirth(e){this.userForm.birth=e}},mounted(){this.init()}},d=c;var h=a(1001),m=(0,h.Z)(d,s,r,!1,null,"30fc1666",null);const p=m.exports},6993:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{position:"fixed"}},["input"==e.type?t("div",{class:`search-menu search-menu-theme-${e.theme}`},[t("Select",{ref:"select",attrs:{prefix:"ios-search",transfer:"",clearable:"",filterable:"",placeholder:"请选择添加的模块"},on:{"on-change":e.changeMenu},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}},e._l(e.list,(function(a,s){return t("Option",{key:s,attrs:{value:a}},[e._v(e._s(a.title))])})),1),t("Icon",{directives:[{name:"show",rawName:"v-show",value:e.key,expression:"key"}],staticClass:"close-icon",staticStyle:{"margin-left":"15px"},attrs:{type:"ios-close-circle"},on:{click:e.clear}})],1):t("div",{staticClass:"search-dropdown"},[t("Dropdown",{attrs:{trigger:"click",placement:"bottom-start"}},[t("div",{staticStyle:{display:"inline-block"}},[t("div",{staticClass:"header-right-icon header-action"},[t("Icon",{staticStyle:{"margin-left":"15px"},attrs:{type:"ios-search",size:20}})],1)]),t("div",{staticClass:"search-select",attrs:{slot:"list"},slot:"list"},[t("Select",{ref:"select",attrs:{prefix:"ios-search",transfer:"",clearable:"",filterable:"",placeholder:"艾是OA菜单查询"},on:{"on-change":e.changeMenu},model:{value:e.key,callback:function(t){e.key=t},expression:"key"}},e._l(e.list,(function(a,s){return t("Option",{key:s,attrs:{value:a}},[e._v(e._s(a.title))])})),1)],1)])],1)])},r=[],i=a(9669),n=a.n(i),l=a(7877);const o={name:"search",props:{theme:{type:String,default:"darkblue"},type:{type:String,default:"input"}},data(){return{key:"",list:[]}},computed:{},methods:{init(){let e=this.getStore("menuData");if(e)e=JSON.parse(e),this.list=this.getList(e);else{let t=this.getStore("accessToken");n().get(l.Af,{headers:{accessToken:t}}).then((t=>{e=t.result,this.list=this.getList(e)}))}},getList(e){let t=[];return e.forEach((function(e){e.children&&e.children.length>0&&e.children.forEach((function(e){e.children&&e.children.length>0&&e.children.forEach((function(e){t.push({title:e.title,name:e.name})}))}))})),t},changeMenu(e){e&&this.$emit("changeOk",e)},clear(){this.$refs.select.clearSingleSelect()}},mounted(){this.init()}},u=o;var c=a(1001),d=(0,c.Z)(u,s,r,!1,null,null,null);const h=d.exports},8188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=function(){var e=this,t=e._self._c;return t("div",[t("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(a,s){return t("Option",{key:s,attrs:{value:a.value}},[e._v(e._s(a.title))])})),1)],1)},r=[],i=a(7877);const n={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,(0,i.i3)(e).then((e=>{this.loading=!1,e.success&&(this.dictData=e.result)}))},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},l=n;var o=a(1001),u=(0,o.Z)(l,s,r,!1,null,null,null);const c=u.exports},2439:(e,t,a)=>{a.d(t,{KF:()=>r,e3:()=>o,lR:()=>i,uJ:()=>n,v_:()=>l});var s=a(7184);const r=e=>(0,s.j0)("/myDoor/getMyDoorList",e),i=e=>(0,s.j0)("/myDoor/getMyDoorList6",e),n=e=>(0,s.j0)("/myDoor/setMyDoorList",e),l=e=>(0,s.A_)("/common/ip/info",e),o=e=>(0,s.j0)("/user/edit",e)}}]);