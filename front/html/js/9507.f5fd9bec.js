"use strict";(self["webpackChunks030"]=self["webpackChunks030"]||[]).push([[9507],{9507:(t,e,s)=>{s.r(e),s.d(e,{default:()=>F});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"search"},[e("Card",[e("Row",{attrs:{type:"flex",justify:"space-between"}},[t.expand?e("Col",{attrs:{span:"4"}},[e("Row",{staticClass:"operation"},[e("Button",{attrs:{type:"success",ghost:"",size:"small"},on:{click:t.refreshDict}},[t._v("搜索")]),e("Button",{attrs:{type:"info",ghost:"",size:"small",disabled:!t.$route.meta.permTypes.includes("add")},on:{click:t.addDcit}},[t._v("添加")]),e("Button",{attrs:{type:"warning",ghost:"",size:"small",disabled:!this.selectNode.id||!t.$route.meta.permTypes.includes("edit")},on:{click:t.editDcit}},[t._v("编辑")]),e("Button",{attrs:{type:"error",ghost:"",size:"small",disabled:!t.$route.meta.permTypes.includes("delete")},on:{click:t.delDcit}},[t._v("删除")])],1),e("Row",{attrs:{gutter:16}},[e("Alert",{directives:[{name:"show",rawName:"v-show",value:t.editTitle,expression:"editTitle"}],attrs:{type:"success","show-icon":""}},[e("span",{staticClass:"select-title"},[t._v(t._s(t.editTitle))]),e("a",{staticClass:"select-clear",on:{click:t.cancelEdit}},[t._v("取消")])])],1),e("Row",{attrs:{gutter:16}},[e("Input",{staticStyle:{width:"100%"},attrs:{suffix:"ios-search",placeholder:"输入搜索字典",clearable:""},on:{"on-change":t.search},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}})],1),e("Row",{attrs:{gutter:16}},[e("div",{staticClass:"tree-bar",style:{maxHeight:t.maxHeight}},[e("Tree",{ref:"tree",attrs:{data:t.treeData,"empty-text":"没有数据字典"},on:{"on-select-change":t.selectTree}}),t.treeLoading?e("Spin",{attrs:{size:"large",fix:""}}):t._e()],1)])],1):t._e(),e("div",{staticClass:"expand"},[e("Icon",{staticClass:"icon",attrs:{type:t.expandIcon,size:"16"},on:{click:t.changeExpand}})],1),e("Col",{attrs:{span:t.span}},[e("Row",{attrs:{gutter:16}},[e("Form",{ref:"searchForm",attrs:{model:t.searchForm,inline:"","label-width":0}},[e("Form-item",{attrs:{label:""}},[e("Input",{staticStyle:{width:"120px"},attrs:{type:"text",placeholder:"数据名称",clearable:""},model:{value:t.searchForm.title,callback:function(e){t.$set(t.searchForm,"title",e)},expression:"searchForm.title"}})],1),e("Form-item",{attrs:{label:""}},[e("Input",{staticStyle:{width:"120px"},attrs:{type:"text",placeholder:"数据值",clearable:""},model:{value:t.searchForm.value,callback:function(e){t.$set(t.searchForm,"value",e)},expression:"searchForm.value"}})],1),e("Form-item",{attrs:{label:""}},[e("Input",{staticStyle:{width:"120px"},attrs:{type:"text",placeholder:"数据描述",clearable:""},model:{value:t.searchForm.description,callback:function(e){t.$set(t.searchForm,"description",e)},expression:"searchForm.description"}})],1),e("Form-item",{attrs:{label:""}},[e("Select",{staticStyle:{width:"120px"},attrs:{placeholder:"状态",clearable:""},model:{value:t.searchForm.status,callback:function(e){t.$set(t.searchForm,"status",e)},expression:"searchForm.status"}},[e("Option",{attrs:{value:"0"}},[t._v("正常")]),e("Option",{attrs:{value:"-1"}},[t._v("禁用")])],1)],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{ghost:"",type:"info",icon:"ios-search",size:"small"},on:{click:t.handleSearch}},[t._v("搜索数据")]),e("Button",{attrs:{ghost:"",type:"warning",icon:"md-refresh",size:"small"},on:{click:t.handleReset}},[t._v("重置数据")]),e("Button",{attrs:{ghost:"",type:"success",icon:"md-add",size:"small"},on:{click:t.add}},[t._v("添加数据")]),e("Button",{attrs:{ghost:"",type:"error",icon:"md-trash",size:"small"},on:{click:t.delAll}},[t._v("删除数据")])],1),e("Alert",{directives:[{name:"show",rawName:"v-show",value:t.selectCount>0,expression:"selectCount > 0"}],attrs:{type:"success","show-icon":""}},[t._v(" 已选择 "),e("span",{staticClass:"select-count"},[t._v(t._s(t.selectCount))]),t._v(" 项 "),e("a",{staticClass:"select-clear",on:{click:t.clearSelectAll}},[t._v("清空")])])],1)],1),e("Row",{staticClass:"operation"}),e("Row",[e("Table",{ref:"table",attrs:{loading:t.loading,stripe:"",border:"",columns:t.columns,data:t.data,sortable:"custom","row-class-name":t.rowClassName},on:{"on-sort-change":t.changeSort,"on-selection-change":t.showSelect,"on-row-click":t.rowClick}})],1),e("Row",{staticClass:"page",attrs:{type:"flex",justify:"end"}},[e("Page",{attrs:{current:t.searchForm.pageNumber,total:t.total,"page-size":t.searchForm.pageSize,"page-size-opts":[10,20,50],size:"small","show-total":"","show-elevator":"","show-sizer":""},on:{"on-change":t.changePage,"on-page-size-change":t.changePageSize}})],1)],1)],1)],1),e("Modal",{attrs:{title:t.dictModalTitle,"mask-closable":!1,width:500},model:{value:t.dictModalVisible,callback:function(e){t.dictModalVisible=e},expression:"dictModalVisible"}},[e("Form",{ref:"dictForm",attrs:{model:t.dictForm,"label-width":85,rules:t.dictFormValidate}},[e("FormItem",{attrs:{label:"字典名称",prop:"title"}},[e("Input",{model:{value:t.dictForm.title,callback:function(e){t.$set(t.dictForm,"title",e)},expression:"dictForm.title"}})],1),e("FormItem",{staticClass:"block-tool",attrs:{label:"字典类型",prop:"type"}},[e("Tooltip",{attrs:{placement:"right","max-width":220,transfer:"",content:"建议英文名且需唯一 非开发人员谨慎修改"}},[e("Input",{model:{value:t.dictForm.type,callback:function(e){t.$set(t.dictForm,"type",e)},expression:"dictForm.type"}})],1)],1),e("FormItem",{attrs:{label:"备注",prop:"description"}},[e("Input",{model:{value:t.dictForm.description,callback:function(e){t.$set(t.dictForm,"description",e)},expression:"dictForm.description"}})],1),e("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[e("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[e("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.dictForm.sortOrder,callback:function(e){t.$set(t.dictForm,"sortOrder",e)},expression:"dictForm.sortOrder"}})],1)],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:function(e){t.dictModalVisible=!1}}},[t._v("取消")]),e("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handelSubmitDict}},[t._v("提交")])],1)],1),e("Modal",{attrs:{title:t.modalTitle,"mask-closable":!1,width:500},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[e("Form",{ref:"form",attrs:{model:t.form,"label-width":80,rules:t.formValidate}},[e("FormItem",{attrs:{label:"名称",prop:"title"}},[e("Input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),e("FormItem",{attrs:{label:"数据值",prop:"value"}},[e("Input",{model:{value:t.form.value,callback:function(e){t.$set(t.form,"value",e)},expression:"form.value"}})],1),e("FormItem",{attrs:{label:"备注",prop:"description"}},[e("Input",{model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),e("FormItem",{attrs:{label:"排序值",prop:"sortOrder"}},[e("Tooltip",{attrs:{trigger:"hover",placement:"right",content:"值越小越靠前，支持小数"}},[e("InputNumber",{attrs:{max:1e3,min:0},model:{value:t.form.sortOrder,callback:function(e){t.$set(t.form,"sortOrder",e)},expression:"form.sortOrder"}})],1)],1),e("FormItem",{attrs:{label:"是否启用",prop:"status"}},[e("i-switch",{attrs:{size:"large","true-value":0,"false-value":-1},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[e("span",{attrs:{slot:"open"},slot:"open"},[t._v("启用")]),e("span",{attrs:{slot:"close"},slot:"close"},[t._v("禁用")])])],1)],1),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("Button",{attrs:{type:"text"},on:{click:function(e){t.modalVisible=!1}}},[t._v("取消")]),e("Button",{attrs:{type:"primary",loading:t.submitLoading},on:{click:t.handelSubmit}},[t._v("提交")])],1)],1)],1)},a=[],r=s(7184);const l=t=>(0,r.A_)("/dict/getAll",t),o=t=>(0,r.j0)("/dict/add",t),c=t=>(0,r.j0)("/dict/edit",t),d=t=>(0,r.j0)("/dict/delByIds",t),n=t=>(0,r.A_)("/dict/search",t),h=t=>(0,r.A_)("/dictData/getByCondition",t),m=t=>(0,r.j0)("/dictData/add",t),u=t=>(0,r.j0)("/dictData/edit",t),p=t=>(0,r.j0)("/dictData/delByIds",t),g={name:"dic-manage",data(){return{selected:["选择","编号","所属字典","键","值","描述","排序","是否禁用","操作"],treeLoading:!1,maxHeight:"500px",loading:!1,editTitle:"",searchKey:"",expand:!0,span:18,expandIcon:"md-arrow-round-back",selectNode:{},treeData:[],selectCount:0,selectList:[],searchForm:{name:"",status:"",pageNumber:1,pageSize:10,sort:"sortOrder",order:"asc"},modalType:0,modalVisible:!1,dictModalVisible:!1,dictModalTitle:"",modalTitle:"",dictForm:{title:"",type:"",description:"",sortOrder:0},form:{title:"",value:"",status:0,description:"",sortOrder:0},dictFormValidate:{title:[{required:!0,message:"不能为空",trigger:"blur"}],type:[{required:!0,message:"不能为空",trigger:"blur"}],sortOrder:[{required:!0,type:"number",message:"排序值不能为空",trigger:"blur"}]},formValidate:{title:[{required:!0,message:"不能为空",trigger:"blur"}],value:[{required:!0,message:"不能为空",trigger:"blur"}],sortOrder:[{required:!0,type:"number",message:"排序值不能为空",trigger:"blur"}]},columns:[{title:"选择",type:"selection",minWidth:60,align:"center"},{title:"编号",type:"index",minWidth:90,align:"center"},{title:"所属字典",key:"dictName",minWidth:120,sortable:!0},{title:"键",key:"title",minWidth:180,sortable:!0},{title:"值",key:"value",minWidth:180,sortable:!0},{title:"描述",key:"description",minWidth:120,sortable:!0},{title:"排序",key:"sortOrder",minWidth:90,sortable:!0,sortType:"asc"},{title:"是否禁用",key:"status",align:"center",minWidth:120,render:(t,e)=>t("div",[t("Tag",{props:{color:0==e.row.status?"green":"red",size:"medium"}},0==e.row.status?"启用":"禁用")])},{title:"创建时间",key:"createTime",minWidth:180,sortable:!0},{title:"操作",key:"action",width:180,align:"center",fixed:"right",render:(t,e)=>{var s=this;return t("div",[t("Button",{props:{type:"primary",size:"small",ghost:!0,icon:"ios-brush",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("delete"))},style:{marginRight:"5px"},on:{click:()=>{this.edit(e.row)}}},"编辑"),t("Button",{props:{type:"error",size:"small",ghost:!0,icon:"md-close",disabled:!(s.$route.meta.permTypes&&s.$route.meta.permTypes.includes("delete"))},on:{click:()=>{this.remove(e.row)}}},"删除")])}}],submitLoading:!1,data:[],total:0,selectRow:{}}},methods:{init(){this.getAllDict(),this.getDataList()},rowClick(t,e){this.selectRow=t},rowClassName(t,e){return t.id==this.selectRow.id?"rowClassNameColor":""},getAllDict(){this.treeLoading=!0,l().then((t=>{this.treeLoading=!1,t.success&&(this.treeData=t.result)}))},search(){this.searchKey?(this.treeLoading=!0,n({key:this.searchKey}).then((t=>{this.treeLoading=!1,t.success&&(this.treeData=t.result)}))):this.getAllDict()},selectTree(t){if(t.length>0){this.$refs.dictForm.resetFields();for(let i in t[0])null==t[0][i]&&(t[0][i]="");let e=JSON.stringify(t[0]),s=JSON.parse(e);this.selectNode=s,this.dictForm=s,this.editTitle=s.title+"("+s.type+")",this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()}else this.cancelEdit()},cancelEdit(){let t=this.$refs.tree.getSelectedNodes()[0];t&&(t.selected=!1),this.selectNode={},this.editTitle="",this.getDataList()},changeSelect(t){this.selectCount=t.length,this.selectList=t},changeExpand(){this.expand=!this.expand,this.expand?(this.expandIcon="md-arrow-round-back",this.span=19):(this.expandIcon="md-arrow-round-forward",this.span=23)},changePage(t){this.searchForm.pageNumber=t,this.getDataList(),this.clearSelectAll()},changePageSize(t){this.searchForm.pageSize=t,this.getDataList()},getDataList(){this.loading=!0,this.selectNode.id?this.searchForm.dictId=this.selectNode.id:delete this.searchForm.dictId,this.searchForm.status||(this.searchForm.status=""),h(this.searchForm).then((t=>{this.loading=!1,t.success&&(this.data=t.result.records,this.total=t.result.total)}))},handleSearch(){this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},handleReset(){this.$refs.searchForm.resetFields(),this.searchForm.pageNumber=1,this.searchForm.pageSize=10,this.getDataList()},changeSort(t){this.searchForm.sort=t.key,this.searchForm.order=t.order,"normal"==t.order&&(this.searchForm.order=""),this.getDataList()},showSelect(t){this.selectList=t,this.selectCount=t.length},clearSelectAll(){this.$refs.table.selectAll(!1)},refreshDict(){this.getAllDict(),this.selectNode={},this.editTitle="",this.getDataList()},addDcit(){this.modalType=0,this.dictModalTitle="添加字典",this.$refs.dictForm.resetFields(),this.dictModalVisible=!0},editDcit(){this.modalType=1,this.dictModalTitle="编辑字典",this.dictModalVisible=!0},delDcit(){this.selectNode.id?this.$Modal.confirm({title:"确认删除",loading:!0,content:"您确认要删除 "+this.selectNode.title+" ?",onOk:()=>{d({ids:this.selectNode.id}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.refreshDict())}))}}):this.$Message.warning("您还未选择要删除的字典")},add(){this.selectNode.id?(this.modalType=0,this.modalTitle="添加字典 "+this.editTitle+" 的数据",this.$refs.form.resetFields(),this.modalVisible=!0):this.$Message.warning("请先选择一个字典类别")},edit(t){this.modalType=1,this.modalTitle="编辑字典 "+this.editTitle+" 的数据",this.$refs.form.resetFields();for(let i in t)null==t[i]&&(t[i]="");let e=JSON.stringify(t),s=JSON.parse(e);this.form=s,this.modalVisible=!0},handelSubmitDict(){this.$refs.dictForm.validate((t=>{t&&(this.submitLoading=!0,0==this.modalType?(delete this.dictForm.id,o(this.dictForm).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.getAllDict(),this.dictModalVisible=!1)}))):1==this.modalType&&c(this.dictForm).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.getAllDict(),this.dictModalVisible=!1)})))}))},handelSubmit(){this.$refs.form.validate((t=>{t&&(this.submitLoading=!0,0==this.modalType?(delete this.form.id,this.form.dictId=this.selectNode.id,m(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.getDataList(),this.modalVisible=!1)}))):1==this.modalType&&u(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.getDataList(),this.modalVisible=!1)})))}))},remove(t){this.$Modal.confirm({title:"确认删除",content:"您确认要删除 "+t.title+" ?",loading:!0,onOk:()=>{p({ids:t.id}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.getDataList())}))}})},delAll(){this.selectCount<=0?this.$Message.warning("您还未选择要删除的数据"):this.$Modal.confirm({title:"确认删除",content:"您确认要删除所选的 "+this.selectCount+" 条数据?",loading:!0,onOk:()=>{let t="";this.selectList.forEach((function(e){t+=e.id+","})),t=t.substring(0,t.length-1),p({ids:t}).then((t=>{this.$Modal.remove(),t.success&&(this.$Message.success("操作成功"),this.clearSelectAll(),this.getDataList())}))}})}},mounted(){let t=document.documentElement.clientHeight;this.maxHeight=Number(t-287)+"px",this.init()}},b=g;var f=s(1001),y=(0,f.Z)(b,i,a,!1,null,null,null);const F=y.exports}}]);