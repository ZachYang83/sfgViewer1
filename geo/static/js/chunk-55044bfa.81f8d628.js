(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55044bfa"],{"1da4":function(e,t,i){},2839:function(e,t,i){"use strict";i("98b5")},"329e":function(e,t,i){"use strict";i("ea7a")},4557:function(e,t,i){"use strict";i("e85d")},"5b13":function(e,t,i){"use strict"},"63db":function(e,t,i){"use strict";i("966e")},7714:function(e,t,i){"use strict";i("1da4")},"8c93":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"legendClass",staticClass:"legendClass"},[e.isFold?i("div",{staticClass:"foldState",on:{click:e.unShowData}},[i("span",[e._v(e._s(e.title))])]):i("div",{staticClass:"showState"},[i("div",{staticClass:"head",on:{click:e.unShowData}},[i("span",{staticClass:"title"},[i("span",[e._v(e._s(e.title))])])]),i("div",{staticClass:"body"},[e._l(e.items,(function(t){return[i("li",{key:t.key,staticClass:"legendItem",attrs:{index:t.index}},[i("div",{staticClass:"color",style:t.style}),i("div",{staticClass:"legendText",style:e.legentText},[e._v(e._s(t.text))])])]}))],2)])])},n=[],l={name:"legendClass",props:{title:{default:null},items:{default:Array},legentText:{default:null}},data(){return{isFold:!1}},methods:{unShowData(){this.isFold=!this.isFold}}},o=l,s=(i("7714"),i("2877")),r=Object(s["a"])(o,a,n,!1,null,"1f0ae8ec",null);t["a"]=r.exports},"966e":function(e,t,i){},"98b5":function(e,t,i){},b21f:function(e,t,i){"use strict";function a(e,t){t.forEach(t=>{e.getLayer(t)&&e.removeLayer(t),e.getSource(t)&&e.removeSource(t)})}i.d(t,"a",(function(){return a}))},b775:function(e,t,i){"use strict";var a=i("bc3a"),n=i.n(a),l=i("5c96");const o=n.a.create({baseURL:"https://zwfw.credit.gdgov.cn/yxjc/geo-api/"});o.interceptors.request.use(e=>e,e=>(console.log(e),Promise.reject(e))),o.interceptors.response.use(e=>200===e.status?Promise.resolve(e):Promise.reject(e),e=>(console.log("err"+e),Object(l["Message"])({message:e.message,type:"error",duration:1e4}),Promise.reject(e))),t["a"]=o},d55e:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Legend",{staticStyle:{bottom:"20px",left:"10px",width:"200px",height:"auto"},attrs:{title:e.title,items:e.items}}),i("div",{staticClass:"timeLine"},[i("Timeline",{on:{changeData:e.changeLayer}})],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showData,expression:"showData"}],staticClass:"dataPan",class:{active:e.showData}},[i("div",{staticClass:"item changzhu"},[i("div",{staticClass:"title"},[i("h2",[e._v(e._s(e.layerProp.county)+"流入人口")])]),i("div",{staticClass:"content"},[i("keep-alive",[i(e.isLiuchu,{ref:"liuru_pan",tag:"component",attrs:{datas:e.liuchuDatas}})],1)],1),i("div",{staticClass:"foot"},[i("div",{staticClass:"foot-item",class:{active:"liuchu_hj"==e.isLiuchu},on:{click:function(t){e.isLiuchu="liuchu_hj"}}},[e._v(" 户籍 ")]),i("div",{staticClass:"foot-item",class:{active:"liuchu_zb"==e.isLiuchu},on:{click:function(t){e.isLiuchu="liuchu_zb"}}},[e._v(" 占比 ")])])])])],1)},n=[],l=i("8c93"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"timeline"}},[i("div",{ref:"timeline-table",staticClass:"timeline-table"})])},s=[],r=i("313e");let u={timeline:{axisType:"category",lineStyle:{show:!0},symbol:"circle",itemStyle:{normal:{color:"rgba(194,53,49, 0.5)"}},controlStyle:{showPrevBtn:!0,showNextBtn:!0,normal:{color:"rgba(194,53,49, 0.5)",borderColor:"rgba(194,53,49, 0.5)"}},orient:"horizontal",inverse:!1,x:0,x2:0,y:0,width:"100%",height:"80%",loop:!1,autoPlay:!1,playInterval:1e3,realtime:!0},baseOption:{tooltip:{trigger:"axis"}}};class c{constructor(){this.chart=void 0,this.lastIndex=0}static makeTimeline(e,t,i){let a=new c,n=t.timeline.data.length,l=r["util"].merge(u,t,!0);l=l||{},a.chart=r["init"](e,null,{}),a.chart.on("timelineChanged",e=>{let t=a.lastIndex,l=e.currentIndex;console.log("last index:"+t+",current index:"+l),0!==n?t!=l?(a.lastIndex=l,console.log("move "+t+" to "+l),i.callback(a,e)):t===l&&(0===t?i.last(a,e):i.next(a,e)):console.log("no data.")}),a.chart.setOption(l)}update(e){let t=r["util"].merge(u,e,!0),i=t.timeline.currentIndex;this.chart.setOption(t),this.lastIndex=void 0!=i?i:0}}var d={name:"Timeline",data(){return{}},mounted:function(){let e=this,t=this.$refs["timeline-table"],i=this,a={timeline:{data:[202202,202203,202204,202205,202206,202207,202208,202209,202210],label:{formatter:function(e){return e}}}},n=[1,20],l={callback:(t,i)=>{let a=i.currentIndex;e.changeData(a)},last:(e,t)=>{let l=t.currentIndex;if(curPage>n[0]){curPage-=1,a.timeline.data=i.getDataJson(start,len,-1);let t=a.timeline.data.length-1;a.timeline.currentIndex=t,e.update(a),start-=len}console.log("-curPage:"+curPage+",curIndex:"+l)},next:(e,t)=>{let l=t.currentIndex;curPage<n[1]&&(curPage+=1,a.timeline.data=i.getDataJson(start,len,1),a.timeline.currentIndex=0,e.update(a),start+=len),console.log("+curPage:"+curPage+",curIndex:"+l)}};c.makeTimeline(t,a,l)},methods:{changeData(e){console.log("子组件");let t=[202202,202203,202204,202205,202206,202207,202208,202209,202210];this.$parent.changeLayer(e,t[e])}}},h=d,y=(i("329e"),i("2877")),m=Object(y["a"])(h,o,s,!1,null,"4f570616",null),g=m.exports,f=i("e624"),v=(i("5b13"),i("b21f")),p=i("b775");function x(e,t){return Object(p["a"])({url:e,method:"get",params:t})}function b(e,t){return Object(p["a"])({url:e,method:"get",params:t})}var w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"lc_hujiData"}})},k=[];let _;var j={name:"liuchu_hj",props:{datas:{type:Object,default:()=>({})}},mounted(){var e=document.getElementById("lc_hujiData");_=echarts.init(e)},methods:{setChart(e){this.$nextTick(()=>{_.resize()});let t=[{key:"北京",value:e.huji.beijing},{key:"天津",value:e.huji.tianjin},{key:"河北",value:e.huji.hebei},{key:"山西",value:e.huji.shanxi},{key:"内蒙古",value:e.huji.neimenggu},{key:"辽宁",value:e.huji.liaoling},{key:"吉林",value:e.huji.jilin},{key:"黑龙江",value:e.huji.heilongjiang},{key:"上海",value:e.huji.shanghai},{key:"江苏",value:e.huji.jiangsu},{key:"浙江",value:e.huji.zhejiang},{key:"安徽",value:e.huji.anhui},{key:"福建",value:e.huji.fujian},{key:"江西",value:e.huji.jiangxi},{key:"山东",value:e.huji.shandong},{key:"河南",value:e.huji.henan},{key:"湖北",value:e.huji.hubei},{key:"湖南",value:e.huji.hunan},{key:"广东",value:e.huji.guangdong},{key:"广西",value:e.huji.guangxi},{key:"海南",value:e.huji.hainan},{key:"重庆",value:e.huji.chongqing},{key:"四川",value:e.huji.sichuan},{key:"贵州",value:e.huji.guizhou},{key:"云南",value:e.huji.yunnan},{key:"西藏",value:e.huji.xizang},{key:"陕西",value:e.huji.shannxi},{key:"甘肃",value:e.huji.gansu},{key:"青海",value:e.huji.qinghai},{key:"宁夏",value:e.huji.ningxia},{key:"新疆",value:e.huji.xinjiang}];t.sort((e,t)=>e.value-t.value);let i=[],a=[];t.forEach(e=>{a.push(e.key),i.push(e.value)});let n={tooltip:{trigger:"item",formatter:"{b}:{c}"},grid:{x:50,y:10,y2:20},xAxis:{type:"value",boundaryGap:[0,.02],splitLine:{show:!1},axisLabel:{show:!1},axisLine:{show:!1},axisTick:{show:!1}},yAxis:{type:"category",data:a,splitLine:{show:!1},axisLabel:{textStyle:{color:"#00FFFF"},interval:0},axisLine:{show:!0,lineStyle:{color:"#00FFFF"}}},color:"#00FFFF",series:[{type:"bar",data:i,itemStyle:{normal:{label:{show:!0,position:"right",textStyle:{color:"#00FFFF",fontSize:10}}}}}]};_.setOption(n,!0)}}},F=j,P=(i("2839"),Object(y["a"])(F,w,k,!1,null,"113ddc0a",null)),L=P.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"lc_zhanbiData"}},[i("div",{attrs:{id:"lc_barpan"}}),i("div",{attrs:{id:"lc_piepan"}})])}];let D,B;var I={name:"liuchu_zb",props:{datas:{type:Object,default:()=>({})}},mounted(){var e=document.getElementById("lc_barpan");D=echarts.init(e);var t=document.getElementById("lc_piepan");B=echarts.init(t),this.setChart(this.datas)},methods:{setChart(e){this.$nextTick(()=>{D.resize(),B.resize()});let t=[{key:"1月",value:e.monthdata[0]},{key:"2月",value:e.monthdata[1]},{key:"3月",value:e.monthdata[2]},{key:"4月",value:e.monthdata[3]},{key:"5月",value:e.monthdata[4]},{key:"6月",value:e.monthdata[5]},{key:"7月",value:e.monthdata[6]},{key:"8月",value:e.monthdata[7]},{key:"9月",value:e.monthdata[8]}],i=[],a=[];t.forEach(e=>{i.push(e.key),a.push(e.value)});let n={title:{left:"center",text:"区县月度流入人口",textStyle:{color:"#BDBDBD"}},tooltip:{trigger:"item",formatter:"{b}:{c}"},grid:{x:50,y:50,y2:30},yAxis:{type:"value",boundaryGap:[0,.02],splitLine:{show:!1},axisLabel:{show:!0},axisLine:{show:!0,lineStyle:{color:"#00FFFF"}},axisTick:{show:!1}},xAxis:{type:"category",data:i,splitLine:{show:!1},axisLabel:{textStyle:{color:"#00FFFF"},interval:0},axisLine:{show:!0,lineStyle:{color:"#00FFFF"}}},color:"#00FFFF",series:[{type:"bar",data:a,itemStyle:{normal:{label:{show:!0,position:"top",textStyle:{color:"#00FFFF",fontSize:10}}}}}]};D.setOption(n,!0);let l=e.countydata;l.sort((e,t)=>e.temp-t.temp);let o=[];l.forEach(e=>{o.push({name:e.county,value:e.temp})});var s={title:{left:"center",text:"当月流入占全市流入比值",textStyle:{color:"#BDBDBD"}},tooltip:{trigger:"item",formatter:"{b}{d}%"},series:[{type:"pie",radius:["30%","80%"],avoidLabelOverlap:!0,selectedMode:!0,itemStyle:{normal:{label:{show:!0,position:"inner",textStyle:{color:"#fff",fontSize:13},formatter:"{b}\n{d}%"},labelLine:{show:!1}},emphasis:{label:{show:!0,formatter:"{b}\n{d}%"}}},data:o}]};B.setOption(s,!0)}}},A=I,z=(i("63db"),Object(y["a"])(A,C,S,!1,null,"4479e4f9",null)),G=z.exports;let M;var R={data(){return{showData:!1,isLiuchu:"liuchu_hj",liuchuDatas:{},title:"流入人口（万人）",items:[{index:1,text:"0 - 5",style:"backgroundColor:RGB(225,225,225)"},{index:2,text:"5 - 10",style:"backgroundColor:RGB(224,250,242)"},{index:3,text:"10 - 15",style:"backgroundColor:RGB(220,240,229)"},{index:4,text:"15 - 30",style:"backgroundColor:RGB(132,196,214)"},{index:5,text:"30 - 60",style:"backgroundColor:RGB(50,107,171)"},{index:6,text:"60 - 120",style:"backgroundColor:RGB(6,51,154)"}],timeIndex:202202,layerProp:{city:"番禺区",cityid:68,county:"广州番禺区"}}},components:{Legend:l["a"],Timeline:g,liuchu_hj:L,liuchu_zb:G},mounted(){this.init(),this.loadWMS(),this.mouseEvent()},methods:{init(){window.MAP.getCanvas().style.cursor="pointer",Object(f["a"])(window.MAP,[113.35,22.9],6.5)},loadWMS(){window.MAP.addSource("sfg_liuru",{type:"vector",scheme:"tms",tiles:["https://zwfw.credit.gdgov.cn/geoserver/gwc/service/tms/1.0.0/gpzi%3Asfg_liuru@EPSG%3A900913@pbf/{z}/{x}/{y}.pbf"]}),window.MAP.addLayer({id:"sfg_liuru",source:"sfg_liuru","source-layer":"sfg_liuru",type:"fill",paint:{"fill-outline-color":"#455a64","fill-color":["case",["<",["get","2mon"],5],"RGB(225,225,225)",["<",["get","2mon"],10],"RGB(224,250,242)",["<",["get","2mon"],15],"RGB(220,240,229)",["<",["get","2mon"],30],"RGB(132,196,214)",["<",["get","2mon"],60],"RGB(50,107,171)","RGB(6,51,154)"]}}),window.MAP.addLayer({id:"sfg_liuru_sym",source:"sfg_liuru","source-layer":"sfg_liuru",type:"symbol",layout:{"icon-image":"","text-field":"{county}\n{2mon}","text-size":12,"text-anchor":"top"}}),window.MAP.addLayer({id:"sfg_liuru-hl",type:"line",source:"sfg_liuru","source-layer":"sfg_liuru",paint:{"line-color":"#18ffff","line-width":3},filter:["in","cityid",""]})},changeLayer(e,t){var i,a;switch(e){case 0:i="2mon",a="{county}\n{2mon}";break;case 1:i="3mon",a="{county}\n{3mon}";break;case 2:i="4mon",a="{county}\n{4mon}";break;case 3:i="5mon",a="{county}\n{5mon}";break;case 4:i="6mon",a="{county}\n{6mon}";break;case 5:i="7mon",a="{county}\n{7mon}";break;case 6:i="7mon",a="{county}\n{7mon}";break;case 7:i="8mon",a="{county}\n{8mon}";break;case 8:i="9mon",a="{county}\n{9mon}";break;case 9:i="10mon",a="{county}\n{10mon}";break}var n={"fill-outline-color":"#455a64","fill-color":["case",["<",["get",i],5],"RGB(225,225,225)",["<",["get",i],10],"RGB(224,250,242)",["<",["get",i],15],"RGB(220,240,229)",["<",["get",i],30],"RGB(132,196,214)",["<",["get",i],60],"RGB(50,107,171)","RGB(6,51,154)"]},l={"icon-image":"","text-field":a,"text-size":12,"text-anchor":"top"};window.MAP.removeLayer("sfg_liuru"),window.MAP.addLayer({id:"sfg_liuru",source:"sfg_liuru","source-layer":"sfg_liuru",type:"fill",paint:n}),window.MAP.removeLayer("sfg_liuru_sym"),window.MAP.addLayer({id:"sfg_liuru_sym",source:"sfg_liuru","source-layer":"sfg_liuru",type:"symbol",layout:l}),window.MAP.removeLayer("sfg_liuru-hl"),window.MAP.addLayer({id:"sfg_liuru-hl",source:"sfg_liuru","source-layer":"sfg_liuru",type:"line",paint:{"line-color":"#18ffff","line-width":3},filter:["in","cityid",""]}),this.timeIndex=t,this.getData()},mouseEvent(){let e=this;window.MAP.on("click",e.getInfo)},getInfo(e){let t=this;var i=window.MAP.queryRenderedFeatures(e.point);if("sfg_liuru"==i[0].layer.id){var a=i[0].properties;M=[a["2mon"],a["3mon"],a["4mon"],a["5mon"],a["6mon"],a["7mon"],a["8mon"],a["9mon"],a["10mon"]],window.MAP.setFilter("sfg_liuru-hl",["in","cityid",i[0].properties.cityid])}t.layerProp={cityid:a.cityid,city:a.city,county:a.county},this.getData()},getData(){let e=this;b("/shengfagai/liuru-qx/getQuxian",{city:e.layerProp.city,time:e.timeIndex}).then(t=>{e.liuchuDatas={monthdata:M,countydata:t.data.data,county:e.layerProp.county}});let t={cityid:e.layerProp.cityid,time:e.timeIndex};x("/shengfagai/liuru-hj/getHuji",t).then(t=>{e.liuchuDatas.huji=t.data.data[0],e.showData=!0,e.$refs["liuru_pan"].setChart(e.liuchuDatas)})}},destroyed(){let e=this;Object(v["a"])(window.MAP,["sfg_liuru-hl","sfg_liuru_sym","sfg_liuru"]),window.MAP.off("click",e.getInfo)}},O=R,E=(i("4557"),Object(y["a"])(O,a,n,!1,null,"a623eea4",null));t["default"]=E.exports},e624:function(e,t,i){"use strict";function a(e,t,i,a=0){e.setCenter(t),e.setZoom(i),e.setPitch(a)}i.d(t,"a",(function(){return a}))},e85d:function(e,t,i){},ea7a:function(e,t,i){}}]);
//# sourceMappingURL=chunk-55044bfa.81f8d628.js.map