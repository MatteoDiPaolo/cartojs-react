(this["webpackJsonpcartojs-react"]=this["webpackJsonpcartojs-react"]||[]).push([[0],{16:function(e,t,a){e.exports=a(26)},21:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(21),a(6)),i=a(7),s=a(9),m=a(8),u=a(29),d=a(28),p=a(11),f=a.n(p),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("svg",{style:{},width:"40",height:"60",viewBox:"0 -10 50 60",className:""},r.a.createElement("title",null,"gs_icon"),r.a.createElement("desc",null,"Created with Sketch."),r.a.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Home",transform:"translate(-23.000000, -13.000000)"},r.a.createElement("g",{id:"navbar",transform:"translate(14.000000, 9.000000)"},r.a.createElement("g",{id:"gs_icon",transform:"translate(34.000000, 32.500000) rotate(-330.000000) translate(-34.000000, -32.500000) translate(8.000000, 10.000000)"},r.a.createElement("polygon",{id:"Polygon",stroke:"#17AD8D",strokeWidth:"3",points:"39 0 52 22.5 39 45 13 45 0 22.5 13 0"}),r.a.createElement("circle",{id:"Oval",fill:"#17AD8D",cx:"26",cy:"23",r:"4"}),r.a.createElement("g",{id:"arrow",transform:"translate(25.909903, 22.909903) rotate(-45.000000) translate(-25.909903, -22.909903) translate(6.409903, 11.909903)"},r.a.createElement("g",{transform:"translate(19.500000, 11.000000) rotate(-23.000000) translate(-19.500000, -11.000000) translate(1.000000, 7.000000)"},r.a.createElement("path",{d:"M0.701010127,4.00609665 L30.3218513,3.75",id:"Line",stroke:"#17AD8D",strokeLinecap:"square"}),r.a.createElement("polygon",{id:"Triangle",fill:"#17AD8D",transform:"translate(33.303990, 3.734325) rotate(-270.000000) translate(-33.303990, -3.734325) ",points:"33.3039897 0.976748951 36.6592529 6.49190047 29.9487266 6.49190047"}))))))))}}]),a}(n.Component),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.client,a=e.map,n=e.source,r=e.style,o=new f.a.source.SQL(n),l=new f.a.style.CartoCSS(r),c=new f.a.layer.Layer(o,l);t.addLayer(c),t.getLeafletLayer().addTo(a)}},{key:"render",value:function(){return null}}]),a}(n.Component),b=(a(22),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Description"},r.a.createElement("p",{className:"Description-text"},"React app using Carto.js"))}}]),a}(n.Component)),g='\n      #layer {\n        marker-width: 5;\n        marker-fill: ramp([id], (#ffe119, #4363d8, #3cb44b, #e6beff, #e6194b), ("mr-blonde", "mr-blue", "mr-green", "mr-pink", "mr-red"), "=");\n        marker-fill-opacity: 1;\n        marker-line-width: 0.5;\n        marker-line-color: #FFFFFF;\n        marker-line-opacity: 1;\n      }\n    ',E="\n      SELECT * FROM merged\n    ",v=(a(23),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={map:void 0,center:[47.47,19.13],zoom:11},e.cartoClient=new f.a.Client({apiKey:"B3eyoJT7dzUB5t7rcIPCNg",username:"matteodipaolo"}),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({map:this.map})}},{key:"render",value:function(){var e=this,t=this.state,a=t.map,n=t.center,o=t.zoom;return r.a.createElement("main",null,r.a.createElement(h,null),r.a.createElement(u.a,{center:n,zoom:o,ref:function(t){e.map=t&&t.leafletElement}},r.a.createElement(d.a,{attribution:"",url:"https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png"}),r.a.createElement(y,{map:a,source:E,style:g,client:this.cartoClient,hidden:!1})),r.a.createElement(b,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.4f438134.chunk.js.map