import{l as b,c as _,r as M,_ as N,d as I}from"./langShiLogo1.a8380753.js";import{E as p,f as i,r as u,o as f,g as w,h as s,u as r,k as h,l as v,w as x,j as y,p as S,n as L,s as g,q as k,F as O,m as X,c as E}from"./vendor.dfed8cfe.js";import{_ as U}from"./index.c27d67f4.js";var Z="./assets/wxMa.946afe4f.jpg",H="./assets/step1.e0ea6566.png",V="./assets/step2.50a472fe.png",W="./assets/step3.303fd7a4.png",z="./assets/step4.735ee3b1.png";const A={data(){return{loginUserName:"",loginPassword:"",loginMobile:"",token:"",gunList:[{title:"\u7167\u7247A",src:"./gun1.png"},{title:"\u7167\u7247B",src:"./gun2.png"},{title:"\u7167\u7247C",src:"./gun3.png"}],test:"hello world",class1:"header",class2:"white",class3:"shu",class4:"current",class4:"corner",class5:"corner1"}},components:{},methods:{init(){console.log("init")},toMyOrderPage(){this.$router.push("/myOrder")},toMain2Page(){this.$router.push("/position2")},toZhaoPinPage(){this.$router.push("/position")},toNewsPage(){this.$router.push("/news")},toMessagePage(){this.$router.push("/message")},toMyOwnPage(){this.$router.push("/myOwn")},openLoginBox(){var a=this;p.prompt("\u8BF7\u8F93\u5165\u60A8\u7684\u8D26\u53F7","\u7528\u6237\u767B\u9646",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88"}).then(({value:e})=>{a.loginUserName=e,p.prompt("\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801","\u7528\u6237\u767B\u9646",{confirmButtonText:"\u767B\u9646",cancelButtonText:"\u53D6\u6D88"}).then(({value:d})=>{a.loginPassword=d,b({userName:a.loginUserName,password:a.loginPassword}).then(n=>{console.log(n),n.data.success?(_.set("token",n.data.result),a.setStore("token",n.data.result),a.token=n.data.result,i({type:"success",message:"\u767B\u9646\u6210\u529F"})):i({type:"error",message:n.data.message})})}).catch(d=>{console.log(d),i({type:"info",message:"\u767B\u9646\u5BC6\u7801\u8F93\u5165\u9519\u8BEF"})})}).catch(()=>{i({type:"info",message:"\u767B\u9646\u8D26\u53F7\u8F93\u5165\u9519\u8BEF"})})},openReBox(){var a=this;p.prompt("\u8BF7\u8F93\u5165\u60A8\u7684\u6CE8\u518C\u8D26\u53F7","\u7528\u6237\u6CE8\u518C",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88"}).then(({value:e})=>{a.loginUserName=e,p.prompt("\u8BF7\u8F93\u5165\u60A8\u7684\u5BC6\u7801","\u7528\u6237\u6CE8\u518C",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88"}).then(({value:d})=>{a.loginPassword=d,p.prompt("\u8BF7\u8F93\u5165\u60A8\u7684\u624B\u673A\u53F7","\u7528\u6237\u6CE8\u518C",{confirmButtonText:"\u786E\u8BA4\u6CE8\u518C",cancelButtonText:"\u53D6\u6D88"}).then(({value:n})=>{a.loginMobile=n,M({userName:a.loginUserName,password:a.loginPassword,mobile:a.loginMobile}).then(t=>{console.log(t),t.data.success?(_.set("token",t.data.result),a.setStore("token",t.data.result),a.token=t.data.result,i({type:"success",message:"\u6CE8\u518C\u6210\u529F"})):i({type:"error",message:t.data.message})})}).catch(n=>{console.log(n),i({type:"info",message:"\u6CE8\u518C\u624B\u673A\u53F7\u8F93\u5165\u9519\u8BEF"})})}).catch(d=>{console.log(d),i({type:"info",message:"\u6CE8\u518C\u5BC6\u7801\u8F93\u5165\u9519\u8BEF"})})}).catch(()=>{i({type:"info",message:"\u6CE8\u518C\u8D26\u53F7\u8F93\u5165\u9519\u8BEF"})})},classHeader:function(){var a=document.documentElement.scrollTop,e=window.screen.height;a>e-100?(this.class1="header1",this.class2="white1",this.class3="shu1",this.class4="current1",this.class5="corner1"):(this.class1="header",this.class2="white",this.class3="shu",this.class4="current",this.class5="corner")}},mounted(){this.token=_.get("token"),console.log(this.token),this.init(),this.classHeader(),window.addEventListener("scroll",this.classHeader)}},c=a=>(S("data-v-524c8886"),a=a(),L(),a),R={id:"home"},j={role:"region"},q=c(()=>s("video",{class:"video",index:"3000",autoplay:"",loop:"",muted:"",src:"https://asoa-1305425069.cos.ap-shanghai.myqcloud.com/1627586377602437120.mp4"},null,-1)),D=c(()=>s("div",{class:"headerBox"},[s("div",{style:{color:"#fff",fontSize:"20px",marginBottom:"30px"}}),s("div",{style:{color:"#fff",fontSize:"36px",fontWeight:"550"}})],-1)),F=c(()=>s("div",{class:"backTop"},"\u2191",-1)),G=c(()=>s("div",{class:"cornerCircular"},[s("div",{class:"code"},[s("img",{class:"codeImg",src:Z,alt:""}),s("span",{class:"codeText"},"\u5173\u6CE8\u65C5\u6E38\u666F\u70B9\u516C\u4F17\u53F7")]),g(" \u5173\u6CE8 ")],-1)),J={class:"body"},K=c(()=>s("div",{class:"logo"},[s("img",{class:"logoImg",src:N,alt:""})],-1)),Q={class:"rightBox"},Y=c(()=>s("div",{class:"shu"},null,-1)),$=c(()=>s("div",{class:"shu"},null,-1)),ss=c(()=>s("div",{class:"shu"},null,-1)),as=c(()=>s("div",{class:"shu"},null,-1)),ts=g("\u767B\u5F55"),es=g("\u6CE8\u518C"),os=g("\u4E2A\u4EBA\u4E2D\u5FC3"),cs={class:"main"},ns={class:"process"},ls=k('<div class="heng" data-v-524c8886></div><span class="title1" data-v-524c8886>\u53A6\u95E8\u65C5\u6E38\u7535\u5B50\u5546\u52A1\u9884\u8BA2\u7CFB\u7EDF</span><span class="notes" data-v-524c8886>Recruitment process</span><div class="processBox" data-v-524c8886><div class="step" data-v-524c8886><img class="stepImg" src="'+H+'" alt="" data-v-524c8886><span class="name1" data-v-524c8886>\u666F\u70B9\u6D4F\u89C8</span><span class="time" data-v-524c8886>\u67E5\u8BE2\u6709\u540D\u666F\u70B9</span></div><div class="arrow" data-v-524c8886>\u25B2</div><div class="step" data-v-524c8886><img class="stepImg" src="'+V+'" alt="" data-v-524c8886><span class="name1" data-v-524c8886>\u65C5\u6E38\u653B\u7565</span><span class="time" data-v-524c8886>\u7F51\u7AD9\u63D0\u4F9B\u65C5\u6E38\u653B\u7565\uFF0C\u7ED9\u60A8\u63D0\u4F9B\u65C5\u6E38\u53C2\u8003</span></div><div class="arrow" data-v-524c8886>\u25B2</div><div class="step" data-v-524c8886><img class="stepImg" src="'+W+'" alt="" data-v-524c8886><span class="name1" data-v-524c8886>\u666F\u70B9\u6392\u540D</span><span class="time" data-v-524c8886>\u6839\u636E\u6536\u85CF\u91CF\u3001\u8BC4\u5206\u5BF9\u666F\u70B9\u8FDB\u884C\u6392\u540D</span></div><div class="arrow" data-v-524c8886>\u25B2</div><div class="step" data-v-524c8886><img class="stepImg" src="'+z+'" alt="" data-v-524c8886><span class="name1" data-v-524c8886>\u4E2A\u4EBA\u4E2D\u5FC3</span><span class="time" data-v-524c8886>\u5BF9\u4E2A\u4EBA\u8D44\u6599\u8FDB\u884C\u7EF4\u62A4\uFF0C\u8BA9\u6211\u4EEC\u66F4\u61C2\u4F60\uFF01</span></div></div>',4),is={class:"buttonBox"},ds={class:"story"},rs=c(()=>s("div",{class:"heng"},null,-1)),vs=c(()=>s("span",{class:"title1"},"\u98CE\u666F\u56FE\u518C",-1)),ps=c(()=>s("span",{class:"notes"},"ByteDancer Story",-1)),hs=["src"],us=k('<div class="footer" data-v-524c8886><div class="footerBox" data-v-524c8886><div class="footerTeal" data-v-524c8886><div class="logoBox" data-v-524c8886><img class="footerLogo" src="'+I+'" alt="" data-v-524c8886><div class="logoTitle" data-v-524c8886>\u65C5\u6E38\u63A8\u8350</div></div><span class="smallTitle" data-v-524c8886>XXXX</span><span class="smallTitle" data-v-524c8886>Copyright \xA9 2020 - \u81F3\u4ECA ICP\u5907\u6848 \u6D59ICP\u59071xxxxxxx\u53F7-1</span></div><div class="lie" data-v-524c8886></div><div class="footerAway" data-v-524c8886><span class="text1" data-v-524c8886>\u8054\u7CFB\u6211\u4EEC</span><span class="text2" data-v-524c8886>\u5173\u4E8E\u6211\u4EEC</span><span class="text2" data-v-524c8886>\u610F\u89C1\u53CD\u9988</span></div><div class="lie" data-v-524c8886></div><div class="footerAway" data-v-524c8886><span class="text1" data-v-524c8886>\u76F8\u5173\u7F51\u7AD9</span><span class="text2" data-v-524c8886>XXX</span><span class="text2" data-v-524c8886>\u65C5\u6E38\u5C40\u5B98\u7F51</span></div><div class="lie" data-v-524c8886></div><div class="footerWait" data-v-524c8886><span class="text1" data-v-524c8886>\u5B9E\u65F6\u65C5\u6E38\u4FE1\u606F\uFF0C\u5173\u6CE8\u6211\u4EEC</span><div class="yuanyuan" data-v-524c8886><div class="yuan" data-v-524c8886></div><div class="yuan" data-v-524c8886></div><div class="yuan" data-v-524c8886></div><div class="yuan" data-v-524c8886></div><div class="yuan" data-v-524c8886></div></div></div></div></div>',1);function gs(a,e,d,n,t,o){const P=u("el-backtop"),m=u("el-button"),B=u("el-carousel-item"),C=u("el-carousel");return f(),w("div",R,[s("header",j,[q,D,s("div",{class:r(t.class5)},[s("div",null,[h(P,{bottom:200},{default:v(()=>[F]),_:1})]),G],2)]),s("div",J,[s("div",{id:"header",class:r(t.class1)},[K,s("div",Q,[s("div",{class:r([t.class2,t.class4])},"\u9996\u9875",2),Y,s("div",{class:r(t.class2),onClick:e[0]||(e[0]=(...l)=>o.toZhaoPinPage&&o.toZhaoPinPage(...l))},"\u666F\u70B9",2),$,s("div",{class:r(t.class2),onClick:e[1]||(e[1]=(...l)=>o.toMain2Page&&o.toMain2Page(...l))},"\u666F\u70B9\u63A8\u8350",2),ss,s("div",{class:r(t.class2),onClick:e[2]||(e[2]=(...l)=>o.toNewsPage&&o.toNewsPage(...l))},"\u65C5\u6E38\u653B\u7565",2),as,s("div",{class:r(t.class2),onClick:e[3]||(e[3]=(...l)=>o.toMessagePage&&o.toMessagePage(...l))},"\u666F\u70B9\u6392\u540D",2),s("div",{class:r(t.class3)},null,2),x(h(m,{type:"text",onClick:o.openLoginBox},{default:v(()=>[ts]),_:1},8,["onClick"]),[[y,t.token===void 0]]),x(h(m,{type:"text",onClick:o.openReBox},{default:v(()=>[es]),_:1},8,["onClick"]),[[y,t.token===void 0]]),x(h(m,{type:"text",onClick:o.toMyOwnPage},{default:v(()=>[os]),_:1},8,["onClick"]),[[y,t.token!==void 0]])])],2),s("div",cs,[s("div",ns,[ls,s("div",is,[s("button",{class:"tea",onClick:e[4]||(e[4]=(...l)=>o.toZhaoPinPage&&o.toZhaoPinPage(...l))},"\u67E5\u770B\u666F\u70B9")])]),s("div",ds,[rs,vs,ps,h(C,{interval:2e3,type:"card",height:"300px",class:"lunbo"},{default:v(()=>[(f(!0),w(O,null,X(t.gunList,(l,T)=>(f(),E(B,{key:T},{default:v(()=>[s("img",{src:l.src,style:{height:"300px"},alt:""},null,8,hs)]),_:2},1024))),128))]),_:1})])]),us])])}var xs=U(A,[["render",gs],["__scopeId","data-v-524c8886"]]);export{xs as default};
