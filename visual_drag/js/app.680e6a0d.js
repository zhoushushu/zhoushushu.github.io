(function(t){function e(e){for(var o,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);m&&m(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0110c8b9":"239d911c","chunk-cec5c2ba":"5a772117"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0110c8b9":1,"chunk-cec5c2ba":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-0110c8b9":"f77ffb82","chunk-cec5c2ba":"0e433876"}[t]+".css",r=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===o||l===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var o=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete a[t],m.parentNode.removeChild(m),n(i)},m.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){a[t]=0})));var o=r[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(m);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",p.name="ChunkLoadError",p.type=o,p.request=a,n[1](p)}r[t]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/visual_drag/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0d02":function(t,e,n){},1707:function(t,e,n){"use strict";n("d722")},"1aec":function(t,e,n){"use strict";n("4003")},"216c":function(t,e,n){"use strict";n("565e")},2395:function(t,e,n){},"25d2":function(t,e,n){"use strict";n("61d6")},"2c56":function(t,e,n){"use strict";n("e1b2")},"3c42":function(t,e,n){"use strict";n.r(e),n.d(e,"commonStyle",(function(){return a})),n.d(e,"commonAttr",(function(){return r}));for(var o=n("5530"),a={rotate:0,opacity:1},r={animations:[],events:{},groupStyle:{},isLock:!1},i=[{component:"v-text",label:"文字",propValue:"双击编辑文字",icon:"wenben",style:{width:200,height:22,fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:""}},{component:"v-button",label:"按钮",propValue:"按钮",icon:"button",style:{width:100,height:34,borderWidth:"",borderColor:"",borderRadius:"",fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:"",backgroundColor:""}}],s=0,c=i.length;s<c;s++){var u=i[s];u.style=Object(o["a"])(Object(o["a"])({},a),u.style),i[s]=Object(o["a"])(Object(o["a"])({},r),u)}e["default"]=i},4003:function(t,e,n){},"439e":function(t,e,n){"use strict";n("0d02")},"565e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("7c55"),n("2877")),s={},c=Object(i["a"])(s,a,r,!1,null,null,null),u=c.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"top"},[n("Toolbar")],1),n("div",{staticClass:"main"},[n("div",{staticClass:"left"},[n("ComponentList")],1),n("div",{staticClass:"center"},[n("div",{staticClass:"content",on:{dragover:t.handleDragOver,drop:t.handleDrop,mousedown:t.handleMouseDown,mouseup:t.deselectCurComponent}},[n("Editor")],1)]),n("div",{staticClass:"right"},[n("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"属性",name:"attr"}},[t.curComponent?n("AttrList"):n("p",{staticClass:"placeholder"},[t._v("请选择组件")])],1),n("el-tab-pane",{attrs:{label:"动画",name:"animation"}},[t.curComponent?n("AnimationList"):n("p",{staticClass:"placeholder"},[t._v("请选择组件")])],1),n("el-tab-pane",{attrs:{label:"事件",name:"events"}},[t.curComponent?n("EventList"):n("p",{staticClass:"placeholder"},[t._v("请选择组件")])],1)],1)],1)])])},m=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"toolbar"},[n("Preview",{attrs:{show:t.isShowPreview},on:{change:t.closePreview}}),n("label",{staticClass:"insert",attrs:{for:"input"}},[t._v("插入图片")]),n("input",{attrs:{type:"file",id:"input",hidden:""}}),n("span",{staticClass:"gap"},[t._v("|")]),n("el-button",{attrs:{disabled:!t.componentData.length},on:{click:t.undo}},[t._v("撤消")]),n("el-button",{attrs:{disabled:!t.componentData.length},on:{click:t.redo}},[t._v("重做")]),n("el-button",{attrs:{disabled:!t.componentData.length},on:{click:t.preview}},[t._v("预览")]),n("el-button",{attrs:{disabled:!t.componentData.length},on:{click:t.save}},[t._v("保存")]),n("el-button",{attrs:{disabled:!t.componentData.length},on:{click:t.clearCanvas}},[t._v("清空画布")]),n("span",{staticClass:"gap"},[t._v("|")]),n("el-button",{attrs:{disabled:!t.componentData.length}},[t._v("组合")]),n("el-button",{attrs:{disabled:!t.componentData.length}},[t._v("拆分")]),n("el-button",{attrs:{disabled:!t.curComponent||t.curComponent.isLock},on:{click:t.lock}},[t._v("锁定")]),n("el-button",{attrs:{disabled:!t.curComponent||!t.curComponent.isLock},on:{click:t.unlock}},[t._v("解锁")]),n("div",{staticClass:"canvas-config"},[n("span",[t._v("画布大小")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.canvasStyleData.width,expression:"canvasStyleData.width"}],domProps:{value:t.canvasStyleData.width},on:{input:function(e){e.target.composing||t.$set(t.canvasStyleData,"width",e.target.value)}}}),n("span",[t._v("*")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.canvasStyleData.height,expression:"canvasStyleData.height"}],domProps:{value:t.canvasStyleData.height},on:{input:function(e){e.target.composing||t.$set(t.canvasStyleData,"height",e.target.value)}}})]),n("div",{staticClass:"canvas-config"},[n("span",[t._v("画布比例")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.canvasStyleData.scale,expression:"canvasStyleData.scale"}],domProps:{value:t.canvasStyleData.scale},on:{input:function(e){e.target.composing||t.$set(t.canvasStyleData,"scale",e.target.value)}}}),t._v(" % ")])],1)},d=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"preview"},[n("el-button",{staticClass:"close",on:{click:t.close}},[t._v("关闭")]),n("div",{staticClass:"canvas-container"},[n("div",{staticClass:"canvas",style:{width:t.canvasStyleData.width+"px",height:t.canvasStyleData.height+"px",transform:"scale("+parseInt(t.canvasStyleData.scale)/100+")"}},[t._v(" 123 ")])])],1):t._e()},v=[],y=(n("caad"),n("a15b"),n("b64b"),n("2532"),n("159b"),n("53ca"));function b(t){if("object"==Object(y["a"])(t)){var e=Array.isArray(t)?[]:{};for(var n in t)"object"==Object(y["a"])(t[n])?e[n]=b(t[n]):e[n]=t[n];return e}return t}function x(){for(var t=[],e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",n=0;n<36;n++)t[n]=e.substr(Math.floor(16*Math.random()),1);t[14]="4",t[19]=e.substr(3&t[19]|8,1),t[8]=t[13]=t[18]=t[23]="-";var o=t.join("");return o}function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=["fontSize","width","height","top","left","borderWidth","letterSpacing","borderRadius"],o={};return Object.keys(t).forEach((function(a){e.includes(a)||("rotate"!=a?(o[a]=t[a],n.includes(a)&&(o[a]+="px")):o.transform=a+"("+t[a]+"deg)")})),o}var g=n("2f62"),w={model:{prop:"show",event:"change"},props:{show:{type:Boolean,default:!1}},computed:Object(g["b"])(["componentData","canvasStyleData"]),methods:{getStyle:C,close:function(){this.$emit("change")}}},S=w,k=(n("96bb"),Object(i["a"])(S,f,v,!1,null,"33e3d1fd",null)),D=k.exports,M={components:{Preview:D},methods:{undo:function(){this.$store.commit("undo")},redo:function(){this.$store.commit("redo")},preview:function(){this.$store.commit("setIsShowPreview",!0)},closePreview:function(){this.$store.commit("setIsShowPreview",!1)},lock:function(){this.$store.commit("lock")},unlock:function(){this.$store.commit("unlock")},save:function(){console.log(this.componentData)},clearCanvas:function(){this.$store.commit("setComponentData",[]),this.$store.commit("recordSnapshot")}},computed:{canvasStyleData:function(){return this.$store.state.canvasStyleData},componentData:function(){return this.$store.state.componentData},curComponent:function(){return this.$store.state.curComponent},isShowPreview:function(){return this.$store.state.isShowPreview}}},_=M,$=(n("a0f9"),Object(i["a"])(_,h,d,!1,null,"1071dd58",null)),O=$.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"componentList",on:{dragstart:t.handleDragStart}},t._l(t.componentData,(function(e,o){return n("div",{key:o,staticClass:"list",attrs:{draggable:"","data-index":o}},[n("span",{staticClass:"iconfont",class:"icon-"+e.icon}),n("span",[t._v(t._s(e.label))])])})),0)},j=[],L=n("3c42"),E={data:function(){return{componentData:L["default"]}},methods:{handleDragStart:function(t){t.dataTransfer.setData("index",t.target.dataset.index)}}},N=E,T=(n("439e"),Object(i["a"])(N,P,j,!1,null,"2986263b",null)),I=T.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor",style:{width:t.canvasStyleData.width+"px",height:t.canvasStyleData.height+"px",transform:"scale("+parseInt(t.canvasStyleData.scale)/100+")"},attrs:{id:"editor"},on:{mousedown:t.handleMouseDown,contextmenu:t.handleContextMenu}},[t._l(t.componentData,(function(e,o){return n("Shape",{key:e.id,class:{lock:e.isLock},style:t.getShapeStyle(e.style),attrs:{defaultStyle:e.style,element:e,index:o,active:e===t.curComponent}},[n(e.component,{tag:"component",staticClass:"component",style:t.getComponentStyle(e.style),attrs:{propValue:e.propValue,element:e,id:"component"+e.id}})],1)})),n("ContextMenu")],2)},V=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"grid",attrs:{width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"}},[n("defs",[n("pattern",{attrs:{id:"smallGrid",width:"7.236328125",height:"7.236328125",patternUnits:"userSpaceOnUse"}},[n("path",{attrs:{d:"M 7.236328125 0 L 0 0 0 7.236328125",fill:"none",stroke:"rgba(207, 207, 207, 0.3)","stroke-width":"1"}})]),n("pattern",{attrs:{id:"grid",width:"36.181640625",height:"36.181640625",patternUnits:"userSpaceOnUse"}},[n("rect",{attrs:{width:"36.181640625",height:"36.181640625",fill:"url(#smallGrid)"}}),n("path",{attrs:{d:"M 36.181640625 0 L 0 0 0 36.181640625",fill:"none",stroke:"rgba(186, 186, 186, 0.5)","stroke-width":"1"}})])]),n("rect",{attrs:{width:"100%",height:"100%",fill:"url(#grid)"}})])},B=[],U=(n("f968"),{}),z=Object(i["a"])(U,q,B,!1,null,"2a512b2e",null),G=z.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shape",class:{active:t.active},on:{mousedown:t.handleMouseDownOnShape,click:t.selectCurComponent}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.isActive(),expression:"isActive()"}],staticClass:"iconfont icon-xiangyouxuanzhuan"}),n("span",{directives:[{name:"show",rawName:"v-show",value:t.element.isLock,expression:"element.isLock"}],staticClass:"iconfont icon-suo"}),t._l(t.isActive()?t.pointList:[],(function(e){return n("div",{key:e,staticClass:"shape-point",style:t.getPointStyle(e),on:{mousedown:function(n){return t.handleMouseDownOnPoint(e,n)}}})})),t._t("default")],2)},W=[],X=(n("a9e3"),n("25eb"),n("b85c")),Y=n("5530");function R(t){return t*Math.PI/180}function K(t,e,n){return{x:(t.x-e.x)*Math.cos(R(n))-(t.y-e.y)*Math.sin(R(n))+e.x,y:(t.x-e.x)*Math.sin(R(n))+(t.y-e.y)*Math.cos(R(n))+e.y}}function F(t,e){return{x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}}function J(t){return(t+360)%360}var Q={lt:Z,t:ot,rt:tt,r:at,rb:et,b:rt,lb:nt,l:it};function Z(t,e,n,o,a){var r=a.symmetricPoint,i=F(e,r),s=K(e,i,-t.rotate),c=K(r,i,-t.rotate),u=c.x-s.x,l=c.y-s.y;if(o){u/l>n?(s.x+=Math.abs(u-l*n),u=l*n):(s.y+=Math.abs(l-u/n),l=u/n);var p=K(s,i,t.rotate);i=F(p,r),s=K(p,i,-t.rotate),c=K(r,i,-t.rotate),u=c.x-s.x,l=c.y-s.y}u>0&&l>0&&(t.width=Math.round(u),t.height=Math.round(l),t.left=Math.round(s.x),t.top=Math.round(s.y))}function tt(t,e,n,o,a){var r=a.symmetricPoint,i=F(e,r),s=K(e,i,-t.rotate),c=K(r,i,-t.rotate),u=s.x-c.x,l=c.y-s.y;if(o){u/l>n?(s.x-=Math.abs(u-l*n),u=l*n):(s.y+=Math.abs(l-u/n),l=u/n);var p=K(s,i,t.rotate);i=F(p,r),s=K(p,i,-t.rotate),c=K(r,i,-t.rotate),u=s.x-c.x,l=c.y-s.y}u>0&&l>0&&(t.width=Math.round(u),t.height=Math.round(l),t.left=Math.round(c.x),t.top=Math.round(s.y))}function et(t,e,n,o,a){var r=a.symmetricPoint,i=F(e,r),s=K(r,i,-t.rotate),c=K(e,i,-t.rotate),u=c.x-s.x,l=c.y-s.y;if(o){u/l>n?(c.x-=Math.abs(u-l*n),u=l*n):(c.y-=Math.abs(l-u/n),l=u/n);var p=K(c,i,t.rotate);i=F(p,r),s=K(r,i,-t.rotate),c=K(p,i,-t.rotate),u=c.x-s.x,l=c.y-s.y}u>0&&l>0&&(t.width=Math.round(u),t.height=Math.round(l),t.left=Math.round(s.x),t.top=Math.round(s.y))}function nt(t,e,n,o,a){var r=a.symmetricPoint,i=F(e,r),s=K(r,i,-t.rotate),c=K(e,i,-t.rotate),u=s.x-c.x,l=c.y-s.y;if(o){u/l>n?(c.x+=Math.abs(u-l*n),u=l*n):(c.y-=Math.abs(l-u/n),l=u/n);var p=K(c,i,t.rotate);i=F(p,r),s=K(r,i,-t.rotate),c=K(p,i,-t.rotate),u=s.x-c.x,l=c.y-s.y}u>0&&l>0&&(t.width=Math.round(u),t.height=Math.round(l),t.left=Math.round(c.x),t.top=Math.round(s.y))}function ot(t,e,n,o,a){var r=a.symmetricPoint,i=a.curPoint,s=K(e,i,-t.rotate),c=K({x:i.x,y:s.y},i,t.rotate),u=Math.sqrt(Math.pow(c.x-r.x,2)+Math.pow(c.y-r.y,2));if(u>0){var l={x:c.x-(c.x-r.x)/2,y:c.y+(r.y-c.y)/2},p=t.width;o&&(p=u*n),t.width=p,t.height=Math.round(u),t.top=Math.round(l.y-u/2),t.left=Math.round(l.x-t.width/2)}}function at(t,e,n,o,a){var r=a.symmetricPoint,i=a.curPoint,s=K(e,i,-t.rotate),c=K({x:s.x,y:i.y},i,t.rotate),u=Math.sqrt(Math.pow(c.x-r.x,2)+Math.pow(c.y-r.y,2));if(u>0){var l={x:c.x-(c.x-r.x)/2,y:c.y+(r.y-c.y)/2},p=t.height;o&&(p=u/n),t.height=p,t.width=Math.round(u),t.top=Math.round(l.y-t.height/2),t.left=Math.round(l.x-u/2)}}function rt(t,e,n,o,a){var r=a.symmetricPoint,i=a.curPoint,s=K(e,i,-t.rotate),c=K({x:i.x,y:s.y},i,t.rotate),u=Math.sqrt(Math.pow(c.x-r.x,2)+Math.pow(c.y-r.y,2));if(u>0){var l={x:c.x-(c.x-r.x)/2,y:c.y+(r.y-c.y)/2},p=t.width;o&&(p=u*n),t.width=p,t.height=Math.round(u),t.top=Math.round(l.y-u/2),t.left=Math.round(l.x-t.width/2)}}function it(t,e,n,o,a){var r=a.symmetricPoint,i=a.curPoint,s=K(e,i,-t.rotate),c=K({x:s.x,y:i.y},i,t.rotate),u=Math.sqrt(Math.pow(c.x-r.x,2)+Math.pow(c.y-r.y,2));if(u>0){var l={x:c.x-(c.x-r.x)/2,y:c.y+(r.y-c.y)/2},p=t.height;o&&(p=u/n),t.height=p,t.width=Math.round(u),t.top=Math.round(l.y-t.height/2),t.left=Math.round(l.x-u/2)}}function st(t,e,n,o,a,r){Q[t](e,n,o,a,r)}var ct={props:{active:{type:Boolean,default:!1},element:{require:!0,type:Object},defaultStyle:{require:!0,type:Object},index:{require:!0,type:[Number,String]}},data:function(){return{pointList:["lt","t","rt","r","rb","b","lb","l"],cursors:{}}},computed:{editor:function(){return this.$store.state.editor}},methods:{isActive:function(){return this.active&&!this.element.isLock},getPointStyle:function(t){var e=this.defaultStyle,n=e.width,o=e.height,a=/t/.test(t),r=/b/.test(t),i=/l/.test(t),s=/r/.test(t),c=0,u=0;2===t.length?(c=i?0:n,u=a?0:o):((a||r)&&(c=n/2,u=a?0:o),(i||s)&&(c=i?0:n,u=Math.floor(o/2)));var l={marginLeft:"-4px",marginTop:"-4px",left:"".concat(c,"px"),top:"".concat(u,"px"),cursor:this.cursors[t]};return l},handleMouseDownOnPoint:function(t,e){var n=this;this.$store.commit("setClickComponentStatus",!0),e.stopPropagation(),e.preventDefault();var o=Object(Y["a"])({},this.defaultStyle),a=o.width/o.height,r={x:o.left+o.width/2,y:o.top+o.height/2},i=this.editor.getBoundingClientRect(),s={x:e.clientX-i.left,y:e.clientY-i.top},c={x:r.x-(s.x-r.x),y:r.y-(s.y-r.y)},u=!1,l=!0,p=this.isNeedLockProportion(),m=function(e){if(l)l=!1;else{u=!0;var m={x:e.clientX-i.left,y:e.clientY-i.top};st(t,o,m,a,p,{center:r,curPoint:s,symmetricPoint:c}),n.$store.commit("setShapeStyle",o)}},h=function t(){document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",t),u&&n.$store.commit("recordSnapshot")};document.addEventListener("mousemove",m),document.addEventListener("mouseup",h)},handleMouseDownOnShape:function(t){var e=this;if(this.$store.commit("setClickComponentStatus",!0),"v-text"!==this.element.component&&"rect-shape"!==this.element.component&&t.preventDefault(),t.stopPropagation(),this.$store.commit("setCurComponent",{component:this.element,index:this.index}),!this.element.isLock){var n=Object(Y["a"])({},this.defaultStyle),o=t.clientY,a=t.clientX,r=Number.parseInt(n.top),i=Number.parseInt(n.left),s=!1,c=function(t){s=!0;var c=t.clientX,u=t.clientY;n.top=u-o+r,n.left=c-a+i,e.$store.commit("setShapeStyle",n),e.$nextTick((function(){}))},u=function t(){s&&e.$store.commit("recordSnapshot"),document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",t)};document.addEventListener("mousemove",c),document.addEventListener("mouseup",u)}},selectCurComponent:function(t){t.stopPropagation(),t.preventDefault(),this.$store.commit("hideContextMenu")},isNeedLockProportion:function(){if("Group"!=this.element.component)return!1;var t,e=[0,90,180,360],n=Object(X["a"])(this.element.propValue);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(!e.includes(J(parseInt(o.style.rotate))))return!0}}catch(a){n.e(a)}finally{n.f()}return!1}}},ut=ct,lt=(n("2c56"),Object(i["a"])(ut,H,W,!1,null,"56d51d31",null)),pt=lt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuShow,expression:"menuShow"}],staticClass:"contextmenu",style:{top:t.menuTop+"px",left:t.menuLeft+"px"}},[n("ul",{on:{mouseup:t.handleMouseUp}},[t.curComponent?[t.curComponent.isLock?n("li",{on:{click:t.unlock}},[t._v("解锁")]):[n("li",[t._v("复制")]),n("li",[t._v("粘贴")]),n("li",[t._v("剪切")]),n("li",{on:{click:t.deleteComponent}},[t._v("删除")]),n("li",{on:{click:t.lock}},[t._v("锁定")]),n("li",{on:{click:t.topComponent}},[t._v("置顶")]),n("li",{on:{click:t.bottomComponent}},[t._v("置底")]),n("li",{on:{click:t.upComponent}},[t._v("上移")]),n("li",{on:{click:t.downComponent}},[t._v("下移")])]]:t._e()],2)])},ht=[],dt={computed:Object(g["b"])(["menuTop","menuLeft","menuShow","curComponent"]),methods:{lock:function(){this.$store.commit("lock")},unlock:function(){this.$store.commit("unlock")},handleMouseUp:function(){this.$store.commit("setClickComponentStatus",!0)},cut:function(){this.$store.commit("cut")},copy:function(){this.$store.commit("copy")},paste:function(){this.$store.commit("paste",!0),this.$store.commit("recordSnapshot")},deleteComponent:function(){this.$store.commit("deleteComponent"),this.$store.commit("recordSnapshot")},upComponent:function(){this.$store.commit("upComponent"),this.$store.commit("recordSnapshot")},downComponent:function(){this.$store.commit("downComponent"),this.$store.commit("recordSnapshot")},topComponent:function(){this.$store.commit("topComponent"),this.$store.commit("recordSnapshot")},bottomComponent:function(){this.$store.commit("bottomComponent"),this.$store.commit("recordSnapshot")}}},ft=dt,vt=(n("1707"),Object(i["a"])(ft,mt,ht,!1,null,"42ac86f6",null)),yt=vt.exports,bt={components:{Grid:G,Shape:pt,ContextMenu:yt},mounted:function(){this.$store.commit("getEditor")},computed:{canvasStyleData:function(){return this.$store.state.canvasStyleData},componentData:function(){return this.$store.state.componentData},curComponent:function(){return this.$store.state.curComponent}},methods:{handleContextMenu:function(t){t.stopPropagation(),t.preventDefault();var e=t.target,n=t.offsetY,o=t.offsetX;while(e instanceof SVGElement)e=e.parentNode;while(!e.className.includes("editor"))o+=e.offsetLeft,n+=e.offsetTop,e=e.parentNode;this.$store.commit("showContextMenu",{top:n,left:o})},handleMouseDown:function(t){this.$store.commit("setClickComponentStatus",!1),this.$store.commit("hideContextMenu"),this.$store.commit("setCurComponent",{component:null,index:null}),console.log("editor--mousedown")},getShapeStyle:function(t){var e={};return["width","height","top","left","rotate"].forEach((function(n){"rotate"!=n?e[n]=t[n]+"px":e.transform="rotate("+t[n]+"deg)"})),e},getComponentStyle:function(t){return C(t,["top","left","width","height","rotate"])}}},xt=bt,Ct=(n("1aec"),Object(i["a"])(xt,A,V,!1,null,"1b1022af",null)),gt=Ct.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"attrlist"},[n("el-form",{attrs:{size:"mini"}},[t._l(t.styleKeys.filter((function(t){return"rotate"!=t})),(function(e,o){return n("el-form-item",{key:o,attrs:{label:t.map[e]}},["borderColor"==e||"color"==e||"backgroundColor"==e?n("el-color-picker",{model:{value:t.curComponent.style[e],callback:function(n){t.$set(t.curComponent.style,e,n)},expression:"curComponent.style[key]"}}):"textAlign"==e?n("el-select",{model:{value:t.curComponent.style[e],callback:function(n){t.$set(t.curComponent.style,e,n)},expression:"curComponent.style[key]"}},t._l(t.options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1):n("el-input",{attrs:{type:"number"},model:{value:t.curComponent.style[e],callback:function(n){t.$set(t.curComponent.style,e,n)},expression:"curComponent.style[key]"}})],1)})),t.curComponent&&!t.excludes.includes(t.curComponent.component)?n("el-form-item",{attrs:{label:"内容"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.curComponent.propValue,callback:function(e){t.$set(t.curComponent,"propValue",e)},expression:"curComponent.propValue"}})],1):t._e()],2)],1)},St=[],kt={data:function(){return{excludes:["Picture","Group"],options:[{label:"左对齐",value:"left"},{label:"居中",value:"center"},{label:"右对齐",value:"right"}],map:{left:"x 坐标",top:"y 坐标",height:"高",width:"宽",color:"颜色",backgroundColor:"背景色",borderWidth:"边框宽度",borderColor:"边框颜色",borderRadius:"边框半径",fontSize:"字体大小",fontWeight:"字体粗细",lineHeight:"行高",letterSpacing:"字间距",textAlign:"对齐方式",opacity:"透明度"}}},computed:{styleKeys:function(){return this.$store.state.curComponent?Object.keys(this.$store.state.curComponent.style):[]},curComponent:function(){return this.$store.state.curComponent}}},Dt=kt,Mt=(n("25d2"),Object(i["a"])(Dt,wt,St,!1,null,"a03a60aa",null)),_t=Mt.exports,$t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animationlist"},[t._v(" animationlist ")])},Ot=[],Pt={},jt=Pt,Lt=(n("ca82"),Object(i["a"])(jt,$t,Ot,!1,null,"789b7c3a",null)),Et=Lt.exports,Nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"eventlist"},[t._v(" eventlist ")])},Tt=[],It={},At=It,Vt=(n("735f"),Object(i["a"])(At,Nt,Tt,!1,null,"6eeff663",null)),qt=Vt.exports,Bt={name:"Home",components:{Toolbar:O,ComponentList:I,Editor:gt,AttrList:_t,AnimationList:Et,EventList:qt},data:function(){return{activeName:"attr"}},methods:{handleDragOver:function(t){t.preventDefault(),t.dataTransfer.dropEffect="copy"},handleDrop:function(t){t.preventDefault(),t.stopPropagation();var e=b(L["default"][t.dataTransfer.getData("index")]);e.style.top=t.offsetY,e.style.left=t.offsetX,e.id=x(),this.$store.commit("addComponent",{component:e}),this.$store.commit("recordSnapshot")},handleMouseDown:function(){this.$store.commit("setClickComponentStatus",!1)},deselectCurComponent:function(){this.isClickComponent||(this.$store.commit("hideContextMenu"),this.$store.commit("setCurComponent",{component:null,index:null}))}},computed:{isClickComponent:function(){return this.$store.state.isClickComponent},curComponent:function(){return this.$store.state.curComponent}}},Ut=Bt,zt=(n("216c"),Object(i["a"])(Ut,p,m,!1,null,"6e7afa1a",null)),Gt=zt.exports;o["default"].use(l["a"]);var Ht=[{path:"/",name:"Home",component:Gt}],Wt=new l["a"]({mode:"history",base:"/visual_drag/",routes:Ht}),Xt=Wt,Yt=(n("a434"),{state:{menuTop:0,menuLeft:0,menuShow:!1},mutations:{showContextMenu:function(t,e){var n=e.top,o=e.left;t.menuShow=!0,t.menuTop=n,t.menuLeft=o},hideContextMenu:function(t){t.menuShow=!1}}}),Rt={state:{},mutations:{}},Kt=(n("fb6a"),{state:{snapshotData:[],snapshotIndex:-1},mutations:{undo:function(t){t.snapshotIndex>=0&&(t.snapshotIndex--,Ft.commit("setComponentData",b(t.snapshotData[t.snapshotIndex])))},redo:function(t){t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotIndex++,Ft.commit("setComponentData",b(t.snapshotData[t.snapshotIndex])))},recordSnapshot:function(t){t.snapshotData[++t.snapshotIndex]=b(t.componentData),t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotData=t.snapshotData.slice(0,t.snapshotIndex+1))}}});o["default"].use(g["a"]);var Ft=new g["a"].Store({state:Object(Y["a"])(Object(Y["a"])(Object(Y["a"])(Object(Y["a"])({},Yt.state),Rt.state),Kt.state),{},{canvasStyleData:{width:1200,height:740,scale:100},componentData:[],curComponent:null,curComponentIndex:null,isClickComponent:!1,editor:null,isShowPreview:!1}),mutations:Object(Y["a"])(Object(Y["a"])(Object(Y["a"])(Object(Y["a"])({},Yt.mutations),Rt.mutations),Kt.mutations),{},{getEditor:function(t){t.editor=document.querySelector("#editor")},addComponent:function(t,e){var n=e.component,o=e.index;void 0!==o?t.componentData.splice(o,0,n):t.componentData.push(n)},setClickComponentStatus:function(t,e){t.isClickComponent=e},setIsShowPreview:function(t,e){t.isShowPreview=e},setCurComponent:function(t,e){var n=e.component,o=e.index;t.curComponent=n,t.curComponentIndex=o},setComponentData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];o["default"].set(t,"componentData",e)},setShapeStyle:function(t,e){var n=t.curComponent,o=e.top,a=e.left,r=e.width,i=e.height,s=e.rotate;o&&(n.style.top=o),a&&(n.style.left=a),r&&(n.style.width=r),i&&(n.style.height=i),s&&(n.style.rotate=s)},lock:function(t){var e=t.curComponent;e.isLock=!0},unlock:function(t){var e=t.curComponent;e.isLock=!1}}),actions:{},modules:{}}),Jt=n("5c96"),Qt=n.n(Jt);n("b9b1"),n("b9e5"),n("0fae"),n("7371"),n("914d");o["default"].use(Qt.a,{size:"small"}),o["default"].config.productionTip=!1,new o["default"]({router:Xt,store:Ft,render:function(t){return t(u)}}).$mount("#app")},"61d6":function(t,e,n){},"735f":function(t,e,n){"use strict";n("e844")},7371:function(t,e,n){},"7c55":function(t,e,n){"use strict";n("2395")},"8de9":function(t,e,n){var o={"./":["914d"],"./VButton":["8be3","chunk-0110c8b9"],"./VButton.vue":["8be3","chunk-0110c8b9"],"./VText":["c95b","chunk-cec5c2ba"],"./VText.vue":["c95b","chunk-cec5c2ba"],"./index":["914d"],"./index.js":["914d"],"./listdata":["3c42"],"./listdata.js":["3c42"]};function a(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],a=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="8de9",t.exports=a},"914d":function(t,e,n){"use strict";n.r(e);n("d3b7");var o=n("2b0e"),a=["VButton","VText"];a.forEach((function(t){o["default"].component(t,(function(){return n("8de9")("./".concat(t))}))}))},"96bb":function(t,e,n){"use strict";n("a692")},a0f9:function(t,e,n){"use strict";n("e4e1")},a692:function(t,e,n){},b9b1:function(t,e,n){},b9e5:function(t,e,n){},ca82:function(t,e,n){"use strict";n("fd30")},d722:function(t,e,n){},e1b2:function(t,e,n){},e4e1:function(t,e,n){},e844:function(t,e,n){},f94e:function(t,e,n){},f968:function(t,e,n){"use strict";n("f94e")},fd30:function(t,e,n){}});
//# sourceMappingURL=app.680e6a0d.js.map