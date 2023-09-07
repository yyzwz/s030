"use strict";(self["webpackChunks030"]=self["webpackChunks030"]||[]).push([[5833,8188],{5833:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var l=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("添加酒店")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"所属景点",prop:"spotId"}},[e("Select",{staticStyle:{width:"570px"},attrs:{placeholder:"请选择所属景点..."},model:{value:t.form.spotId,callback:function(e){t.$set(t.form,"spotId",e)},expression:"form.spotId"}},t._l(t.spotList,(function(a,l){return e("Option",{key:l,attrs:{value:a.id}},[t._v(t._s(a.title))])})),1)],1),e("FormItem",{attrs:{label:"酒店名称",prop:"title"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入酒店名称..."},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"最低价格",prop:"start"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入最低价格..."},model:{value:t.form.start,callback:function(e){t.$set(t.form,"start",e)},expression:"form.start"}})],1),e("FormItem",{attrs:{label:"最高价格",prop:"end"}},[e("Input",{staticStyle:{width:"570px"},attrs:{"show-word-limit":"",maxlength:"240",clearable:"",placeholder:"请输入最高价格..."},model:{value:t.form.end,callback:function(e){t.$set(t.form,"end",e)},expression:"form.end"}})],1),e("FormItem",{attrs:{label:"早餐情况",prop:"way"}},[e("dict",{staticStyle:{width:"570px"},attrs:{dict:"out_way",transfer:"",clearable:"",placeholder:"请选择早餐情况..."},model:{value:t.form.way,callback:function(e){t.$set(t.form,"way",e)},expression:"form.way"}})],1),e("FormItem",{attrs:{label:"酒店介绍",prop:"content"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:"",type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"请输入酒店路线..."},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.handleSubmit}},[t._v("提交并保存")]),e("Button",{on:{click:t.handleReset}},[t._v("重置")]),e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},s=[],r=a(755),i=a(8188);const n={name:"add",components:{dict:i["default"]},data(){return{submitLoading:!1,form:{title:"",start:"",end:"",way:"",content:""},formValidate:{},spotList:[]}},methods:{init(){this.getScenicSpotListFx()},getScenicSpotListFx(){var t=this;t.spotList=[],(0,r.YO)().then((e=>{e.success&&(t.spotList=e.result)}))},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,r.a5)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=n;var c=a(1001),d=(0,c.Z)(o,l,s,!1,null,null,null);const u=d.exports},8188:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var l=function(){var t=this,e=t._self._c;return e("div",[e("Select",{attrs:{size:t.size,loading:t.loading,placeholder:t.placeholder,multiple:t.multiple,disabled:t.disabled,filterable:t.filterable,transfer:t.transfer,clearable:t.clearable,placement:t.placement,"transfer-class-name":t.transferClassName,prefix:t.prefix,"max-tag-count":t.maxTagCount,"max-tag-placeholder":t.maxTagPlaceholder},on:{"on-change":t.handleChange,"on-query-change":t.handleQueryChange,"on-clear":t.handleClear,"on-open-change":t.handleOpenChange,"on-select":t.handleSelect},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},t._l(t.dictData,(function(a,l){return e("Option",{key:l,attrs:{value:a.value}},[t._v(t._s(a.title))])})),1)],1)},s=[],r=a(7877);const i={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(t){this.loading=!0,(0,r.i3)(t).then((t=>{this.loading=!1,t.success&&(this.dictData=t.result)}))},handleChange(t){this.$emit("input",t),this.$emit("on-change",t)},handleQueryChange(t){this.$emit("on-query-change",t)},handleClear(){this.$emit("on-clear","")},handleOpenChange(t){this.$emit("on-open-change",t)},handleSelect(t){this.$emit("on-select",t)},setCurrentValue(t){t!==this.currentValue&&(this.currentValue=t,this.$emit("on-change",this.currentValue))}},watch:{value(t){this.setCurrentValue(t)},dict(t){this.getData(t)}},mounted(){this.getData(this.dict)}},n=i;var o=a(1001),c=(0,o.Z)(n,l,s,!1,null,null,null);const d=c.exports},755:(t,e,a)=>{a.d(e,{IR:()=>n,XS:()=>i,YO:()=>o,a5:()=>r,xq:()=>s});var l=a(7184);const s=t=>(0,l.A_)("/trip/getByPage",t),r=t=>(0,l.j0)("/trip/insert",t),i=t=>(0,l.j0)("/trip/update",t),n=t=>(0,l.j0)("/trip/delByIds",t),o=t=>(0,l.A_)("/scenicSpot/getAll",t)}}]);