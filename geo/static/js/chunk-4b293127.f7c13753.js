(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b293127"],{"1da4":function(e,t,a){},3082:function(e,t,a){},"3d3a":function(e,t,a){"use strict";a("72d9")},"571a":function(e,t,a){"use strict";a("3082")},"5b13":function(e,t,a){"use strict"},"72d9":function(e,t,a){},7714:function(e,t,a){"use strict";a("1da4")},"868a":function(e,t,a){},"8c93":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"legendClass",staticClass:"legendClass"},[e.isFold?a("div",{staticClass:"foldState",on:{click:e.unShowData}},[a("span",[e._v(e._s(e.title))])]):a("div",{staticClass:"showState"},[a("div",{staticClass:"head",on:{click:e.unShowData}},[a("span",{staticClass:"title"},[a("span",[e._v(e._s(e.title))])])]),a("div",{staticClass:"body"},[e._l(e.items,(function(t){return[a("li",{key:t.key,staticClass:"legendItem",attrs:{index:t.index}},[a("div",{staticClass:"color",style:t.style}),a("div",{staticClass:"legendText",style:e.legentText},[e._v(e._s(t.text))])])]}))],2)])])},n=[],o={name:"legendClass",props:{title:{default:null},items:{default:Array},legentText:{default:null}},data(){return{isFold:!1}},methods:{unShowData(){this.isFold=!this.isFold}}},l=o,s=(a("7714"),a("2877")),r=Object(s["a"])(l,i,n,!1,null,"1f0ae8ec",null);t["a"]=r.exports},a33c:function(e,t,a){},abd7:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Legend",{staticStyle:{bottom:"20px",left:"10px",width:"200px",height:"auto"},attrs:{title:e.title,items:e.items}}),a("div",{staticClass:"timeLine"},[a("Timeline",{on:{changeData:e.changeLayer}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}],staticClass:"dataPan",class:{active:e.showData}},[a("div",{staticClass:"item changzhu"},[e._m(0),a("div",{staticClass:"content"},[a("keep-alive",[a(e.idGongyeyuan,{ref:"gongyeyuan_pan",tag:"component",attrs:{datas:e.liuchuDatas}})],1)],1),a("div",{staticClass:"foot"},[a("div",{staticClass:"foot-item",class:{active:"gyy_pop"==e.idGongyeyuan},on:{click:function(t){e.idGongyeyuan="gyy_pop"}}},[e._v(" 月度人口 ")]),a("div",{staticClass:"foot-item",class:{active:"gyy_hj"==e.idGongyeyuan},on:{click:function(t){e.idGongyeyuan="gyy_hj"}}},[e._v(" 工作人口户籍 ")])])])])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h2",[e._v("工业园工作与流动人口")])])}],o=a("8c93"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"timeline"}},[a("div",{ref:"timeline-table",staticClass:"timeline-table"})])},s=[],r=a("313e");let u={timeline:{axisType:"category",lineStyle:{show:!0},symbol:"circle",itemStyle:{normal:{color:"rgba(194,53,49, 0.5)"}},controlStyle:{showPrevBtn:!0,showNextBtn:!0,normal:{color:"rgba(194,53,49, 0.5)",borderColor:"rgba(194,53,49, 0.5)"}},orient:"horizontal",inverse:!1,x:0,x2:0,y:0,width:"100%",height:"80%",loop:!1,autoPlay:!1,playInterval:1e3,realtime:!0},baseOption:{tooltip:{trigger:"axis"}}};class c{constructor(){this.chart=void 0,this.lastIndex=0}static makeTimeline(e,t,a){let i=new c,n=t.timeline.data.length,o=r["util"].merge(u,t,!0);o=o||{},i.chart=r["init"](e,null,{}),i.chart.on("timelineChanged",e=>{let t=i.lastIndex,o=e.currentIndex;console.log("last index:"+t+",current index:"+o),0!==n&&(t!=o?(i.lastIndex=o,console.log("move "+t+" to "+o),a.callback(i,e)):t===o&&(0===t?a.last(i,e):a.next(i,e)))}),i.chart.setOption(o)}update(e){let t=r["util"].merge(u,e,!0),a=t.timeline.currentIndex;this.chart.setOption(t),this.lastIndex=void 0!=a?a:0}}var y={name:"Timeline",data(){return{}},mounted:function(){let e=this,t=this.$refs["timeline-table"],a=this,i={timeline:{data:[202201,202202,202203,202204,202205,202206,202207,202208,202209,202210],label:{formatter:function(e){return e}}}},n=[1,20],o={callback:(t,a)=>{let i=a.currentIndex;e.changeData(i)},last:(e,t)=>{let o=t.currentIndex;if(curPage>n[0]){curPage-=1,i.timeline.data=a.getDataJson(start,len,-1);let t=i.timeline.data.length-1;i.timeline.currentIndex=t,e.update(i),start-=len}console.log("-curPage:"+curPage+",curIndex:"+o)},next:(e,t)=>{let o=t.currentIndex;curPage<n[1]&&(curPage+=1,i.timeline.data=a.getDataJson(start,len,1),i.timeline.currentIndex=0,e.update(i),start+=len),console.log("+curPage:"+curPage+",curIndex:"+o)}};c.makeTimeline(t,i,o)},methods:{changeData(e){let t=[202201,202202,202203,202204,202205,202206,202207,202208,202209,202210];this.$parent.changeData(t[e])}}},d=y,g=(a("571a"),a("2877")),h=Object(g["a"])(d,l,s,!1,null,"470bcabf",null),f=h.exports,w=a("e624"),k=(a("5b13"),a("b21f")),v=a("b775");function m(e,t){return Object(v["a"])({url:e,method:"get",params:t})}var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"gyy_hujiData"}})},x=[];let b;var _={name:"gyy_hj",props:{datas:{type:Object,default:()=>({})}},mounted(){var e=document.getElementById("gyy_hujiData");b=echarts.init(e),this.setChart(this.datas)},methods:{setChart(e){this.$nextTick(()=>{b.resize()});let t=[{key:"北京",value:e.hujidata.beijing},{key:"天津",value:e.hujidata.tianjin},{key:"河北",value:e.hujidata.hebei},{key:"山西",value:e.hujidata.shanxi},{key:"内蒙古",value:e.hujidata.neimenggu},{key:"辽宁",value:e.hujidata.liaoning},{key:"吉林",value:e.hujidata.jilin},{key:"黑龙江",value:e.hujidata.heilongjiang},{key:"上海",value:e.hujidata.shanghai},{key:"江苏",value:e.hujidata.jiangsu},{key:"浙江",value:e.hujidata.zhejiang},{key:"安徽",value:e.hujidata.anhui},{key:"福建",value:e.hujidata.fujian},{key:"江西",value:e.hujidata.jiangxi},{key:"山东",value:e.hujidata.shandong},{key:"河南",value:e.hujidata.henan},{key:"湖北",value:e.hujidata.hubei},{key:"湖南",value:e.hujidata.hunan},{key:"广东",value:e.hujidata.guangdong},{key:"广西",value:e.hujidata.guangxi},{key:"海南",value:e.hujidata.hainan},{key:"重庆",value:e.hujidata.chongqing},{key:"四川",value:e.hujidata.sichuan},{key:"贵州",value:e.hujidata.guizhou},{key:"云南",value:e.hujidata.yunnan},{key:"西藏",value:e.hujidata.xizang},{key:"陕西",value:e.hujidata.shannxi},{key:"甘肃",value:e.hujidata.gansu},{key:"青海",value:e.hujidata.qinghai},{key:"宁夏",value:e.hujidata.ningxia},{key:"新疆",value:e.hujidata.xinjiang}];t.sort((e,t)=>e.value-t.value);let a=[],i=[];t.forEach(e=>{i.push(e.key),a.push(e.value)});let n={tooltip:{trigger:"item",formatter:"{b}:{c}"},grid:{x:50,y:10,y2:20},xAxis:{type:"value",boundaryGap:[0,.02],splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"category",data:i,splitLine:{show:!1},axisLabel:{textStyle:{color:"#00FFFF"},interval:0},axisLine:{show:!0,lineStyle:{color:"#00FFFF"}}},color:"#00FFFF",series:[{type:"bar",data:a,itemStyle:{normal:{label:{show:!0,position:"right",textStyle:{color:"#00FFFF",fontSize:10}}}}}]};b.setOption(n,!0)}}},j=_,F=(a("affc"),Object(g["a"])(j,p,x,!1,null,"62075c26",null)),D=F.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"gyy_pop"}},[a("div",{attrs:{id:"workPop"}}),a("div",{attrs:{id:"liudongPop"}})])}];let L,C;var S={name:"gyy_pop",props:{datas:{type:Object,default:()=>({})}},mounted(){var e=document.getElementById("workPop");L=echarts.init(e);var t=document.getElementById("liudongPop");C=echarts.init(t)},methods:{setChart(e){this.$nextTick(()=>{L.resize(),C.resize()});let t=[{key:"1月",value:e.workData[0]},{key:"2月",value:e.workData[1]},{key:"3月",value:e.workData[2]},{key:"4月",value:e.workData[3]},{key:"5月",value:e.workData[4]},{key:"6月",value:e.workData[5]},{key:"7月",value:e.workData[6]},{key:"8月",value:e.workData[7]},{key:"9月",value:e.workData[8]},{key:"10月",value:e.workData[9]}],a=[],i=[];t.forEach(e=>{a.push(e.key),i.push(e.value)});let n=[{key:"1月",value:e.liudongData[0]},{key:"2月",value:e.liudongData[1]},{key:"3月",value:e.liudongData[2]},{key:"4月",value:e.liudongData[3]},{key:"5月",value:e.liudongData[4]},{key:"6月",value:e.liudongData[5]},{key:"7月",value:e.liudongData[6]},{key:"8月",value:e.liudongData[7]},{key:"9月",value:e.liudongData[8]},{key:"10月",value:e.liudongData[9]}],o=[],l=[];n.forEach(e=>{o.push(e.key),l.push(e.value)});let s={title:{left:"center",text:"月度工作人口",textStyle:{color:"#BDBDBD"}},tooltip:{trigger:"item",formatter:"{b}:{c}"},grid:{x:70,y:50,y2:30},yAxis:{type:"value",boundaryGap:[0,.02],splitLine:{show:!1},axisLabel:{show:!0},axisLine:{show:!0,lineStyle:{color:"#00FFFF"}},axisTick:{show:!1}},xAxis:{type:"category",data:a,splitLine:{show:!1},axisLabel:{textStyle:{color:"#00FFFF"},interval:0},axisLine:{show:!0,lineStyle:{color:"#00FFFF"}}},color:"#00FFFF",series:[{type:"bar",data:i,itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"#00FFFF",fontSize:10}}}}}]};L.setOption(s,!0);let r={title:{left:"center",text:"月度流动人口",textStyle:{color:"#BDBDBD"}},tooltip:{trigger:"item",formatter:"{b}:{c}"},grid:{x:70,y:50,y2:30},yAxis:{type:"value",boundaryGap:[0,.02],splitLine:{show:!1},axisLabel:{show:!0},axisLine:{show:!0,lineStyle:{color:"#00FFFF"}},axisTick:{show:!1}},xAxis:{type:"category",data:o,splitLine:{show:!1},axisLabel:{textStyle:{color:"#00FFFF"},interval:0},axisLine:{show:!0,lineStyle:{color:"#00FFFF"}}},color:"#00FFFF",series:[{type:"bar",data:l,itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"#00FFFF",fontSize:10}}}}}]};C.setOption(r,!0)}}},B=S,G=(a("3d3a"),Object(g["a"])(B,A,P,!1,null,"33faf33a",null)),I=G.exports;let M,R;var z={data(){return{showData:!1,idGongyeyuan:"gyy_pop",liuchuDatas:{},title:"工作人口（万人）",items:[{index:1,text:"0 - 5",style:"backgroundColor:RGBA(225,225,225)"},{index:2,text:"5 - 10",style:"backgroundColor:RGBA(224,250,242)"},{index:3,text:"10 - 20",style:"backgroundColor:RGBA(220,240,229)"},{index:4,text:"20 - 30",style:"backgroundColor:RGBA(132,196,214)"},{index:5,text:"30 - 50",style:"backgroundColor:RGBA(50,107,171)"},{index:6,text:"50以上",style:"backgroundColor:RGBA(6,51,154)"}],timeIndex:202201,layerProp:{name:"广州-天河·公园智谷片区",id:142}}},components:{Legend:o["a"],Timeline:f,gyy_hj:D,gyy_pop:I},mounted(){this.init(),this.loadWMS(),this.mouseEvent()},methods:{init(){window.MAP.getCanvas().style.cursor="pointer",Object(w["a"])(window.MAP,[113.35,22.9],6.5)},loadWMS(){window.MAP.addSource("sfg_gongyeyuan",{type:"vector",scheme:"tms",tiles:["https://zwfw.credit.gdgov.cn/geoserver/gwc/service/tms/1.0.0/gpzi%3Asfg_gongyeyuan@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"]}),window.MAP.addLayer({id:"sfg_gongyeyuan",source:"sfg_gongyeyuan","source-layer":"sfg_gongyeyuan",type:"fill",paint:{"fill-outline-color":"#455a64","fill-color":["case",["<",["get","work1"],2e4],"RGBA(225,225,225,0.7)",["<",["get","work1"],5e4],"RGBA(224,250,242,0.7)",["<",["get","work1"],1e5],"RGBA(220,240,229,0.7)",["<",["get","work1"],2e5],"RGBA(132,196,214,0.7)",["<",["get","work1"],5e5],"RGBA(50,107,171,0.7)","RGBA(6,51,154,0.7)"]}}),window.MAP.addLayer({id:"sfg_gongyeyuan_sym",source:"sfg_gongyeyuan","source-layer":"sfg_gongyeyuan",type:"symbol",layout:{"icon-image":"","text-field":"{Name}\n{work1}","text-size":12,"text-anchor":"top"},paint:{"text-color":"#ffffff"}}),window.MAP.addLayer({id:"sfg_gongyeyuan-line",type:"line",source:"sfg_gongyeyuan","source-layer":"sfg_gongyeyuan",paint:{"line-color":"#ff4081","line-width":1}}),window.MAP.addLayer({id:"sfg_gongyeyuan-hl",type:"line",source:"sfg_gongyeyuan","source-layer":"sfg_gongyeyuan",paint:{"line-color":"#18ffff","line-width":3},filter:["in","Name",""]})},changeLayer(e){var t,a;switch(e){case 0:t="work1",a="{Name}\n{work1}";break;case 1:t="work2",a="{Name}\n{work2}";break;case 2:t="work3",a="{Name}\n{work3}";break;case 3:t="work4",a="{Name}\n{work4}";break;case 4:t="work5",a="{Name}\n{work5}";break;case 5:t="work6",a="{Name}\n{work6}";break;case 6:t="work7",a="{Name}\n{work7}";break;case 7:t="work8",a="{Name}\n{work8}";break;case 8:t="work9",a="{Name}\n{work9}";break;case 9:t="work10",a="{Name}\n{work10}";break}var i={"fill-outline-color":"#455a64","fill-color":["case",["<",["get",t],2e4],"RGBA(225,225,225,0.7)",["<",["get",t],5e4],"RGBA(224,250,242,0.7)",["<",["get",t],1e5],"RGBA(220,240,229,0.7)",["<",["get",t],2e5],"RGBA(132,196,214,0.7)",["<",["get",t],5e5],"RGBA(50,107,171,0.7)","RGBA(6,51,154,0.7)"]},n={"icon-image":"","text-field":a,"text-size":12,"text-anchor":"top"};window.MAP.removeLayer("sfg_gongyeyuan"),window.MAP.addLayer({id:"sfg_gongyeyuan",source:"sfg_gongyeyuan","source-layer":"sfg_gongyeyuan",type:"fill",paint:i}),window.MAP.removeLayer("sfg_gongyeyuan_sym"),window.MAP.addLayer({id:"sfg_gongyeyuan_sym",source:"sfg_gongyeyuan","source-layer":"sfg_gongyeyuan",type:"symbol",layout:n}),window.MAP.removeLayer("sfg_gongyeyuan-hl"),window.MAP.addLayer({id:"sfg_gongyeyuan-hl",source:"sfg_gongyeyuan","source-layer":"sfg_gongyeyuan",type:"line",paint:{"line-color":"#18ffff","line-width":3},filter:["in","id",""]})},mouseEvent(){let e=this;window.MAP.on("click",e.getInfo)},getInfo(e){let t=this;var a=window.MAP.queryRenderedFeatures(e.point);if("sfg_gongyeyuan"==a[0].layer.id){var i=a[0].properties;M=[i["work1"],i["work2"],i["work3"],i["work4"],i["work5"],i["work6"],i["work7"],i["work8"],i["work9"],i["work10"]],R=[i["flow1"],i["flow2"],i["flow3"],i["flow4"],i["flow5"],i["flow6"],i["flow7"],i["flow8"],i["flow9"],i["flow10"]],window.MAP.setFilter("sfg_gongyeyuan-hl",["in","id",a[0].properties.id])}t.layerProp={id:i.id,name:i.name},this.getData()},getData(){let e=this;m("/shengfagai/gongyeyuan-hj/getGyyHuji",{indId:e.layerProp.id,time:e.timeIndex}).then(t=>{e.liuchuDatas={workData:M,liudongData:R,hujidata:t.data.data[0]},e.showData=!0,e.$refs["gongyeyuan_pan"].setChart(e.liuchuDatas)})},changeData(e){this.timeIndex=e,this.getData()}},destroyed(){let e=this;Object(k["a"])(window.MAP,["sfg_gongyeyuan-hl","sfg_gongyeyuan_sym","sfg_gongyeyuan-line","sfg_gongyeyuan"]),window.MAP.off("click",e.getInfo)}},E=z,O=(a("b376"),Object(g["a"])(E,i,n,!1,null,"17c63b39",null));t["default"]=O.exports},affc:function(e,t,a){"use strict";a("868a")},b21f:function(e,t,a){"use strict";function i(e,t){t.forEach(t=>{e.getLayer(t)&&e.removeLayer(t),e.getSource(t)&&e.removeSource(t)})}a.d(t,"a",(function(){return i}))},b376:function(e,t,a){"use strict";a("a33c")},b775:function(e,t,a){"use strict";var i=a("bc3a"),n=a.n(i),o=a("5c96");const l=n.a.create({baseURL:"https://zwfw.credit.gdgov.cn/yxjc/geo-api/"});l.interceptors.request.use(e=>e,e=>(console.log(e),Promise.reject(e))),l.interceptors.response.use(e=>200===e.status?Promise.resolve(e):Promise.reject(e),e=>(console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:1e4}),Promise.reject(e))),t["a"]=l},e624:function(e,t,a){"use strict";function i(e,t,a,i=0){e.setCenter(t),e.setZoom(a),e.setPitch(i)}a.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=chunk-4b293127.f7c13753.js.map