(this["webpackJsonpinteractive-calculator"]=this["webpackJsonpinteractive-calculator"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),i=(a(9),a(3));a(10);var o=function(e){var t=e.screenText;return l.a.createElement("div",{className:"screen"},l.a.createElement("p",{className:"screen-text"},t))};a(11);var s=function(e){var t=e.text,a=e.id,n=e.handleClick;return l.a.createElement("button",{className:"button",id:a,onClick:function(e){return n(t)}},t)};a(12);var m=function(){var e=Object(n.useState)("0"),t=Object(i.a)(e,2),a=t[0],r=t[1];function c(e){if("="===e){var t=a.split(" ");t.length<=2||t.length>3?r("error"):"\xf7"===t[1]?r((t[0]/t[2]).toString()):"\xd7"===t[1]?r((t[0]*t[2]).toString()):"-"===t[1]?r((parseFloat(t[0])-parseFloat(t[2])).toString()):"+"===t[1]?r((parseFloat(t[0])+parseFloat(t[2])).toString()):r("error")}else if("0"===a&&"\u21d0"!==e)r(e);else if("\u21d0"===e||"clr"===e)1===a.length||"error"===a||"clr"===e?r("0"):r(a.substring(0,a.length-1));else if("\xf7"===e||"\xd7"===e||"-"===e||"+"===e||"y\xb2"===e||"1/x"===e||"\u221a"===e)switch(e){case"\xf7":r(a+" \xf7 ");break;case"\xd7":r(a+" \xd7 ");break;case"-":r(a+" - ");break;case"+":r(a+" + ");break;case"y\xb2":a.split(" ").length>1?r("error"):r(Math.pow(parseFloat(a),2).toString());break;case"\u221a":a.split(" ").length>1?r("error"):r(Math.sqrt(parseFloat(a)).toString());break;default:r("error")}else r(a+e)}return l.a.createElement("main",{className:"container"},l.a.createElement(o,{screenText:a}),l.a.createElement("div",{className:"button-box"},l.a.createElement(s,{text:"7",handleClick:c}),l.a.createElement(s,{text:"8",handleClick:c}),l.a.createElement(s,{text:"9",handleClick:c}),l.a.createElement(s,{text:"\xf7",handleClick:c}),l.a.createElement(s,{text:"\u21d0",handleClick:c})),l.a.createElement("div",{className:"button-box"},l.a.createElement(s,{text:"4",handleClick:c}),l.a.createElement(s,{text:"5",handleClick:c}),l.a.createElement(s,{text:"6",handleClick:c}),l.a.createElement(s,{text:"\xd7",handleClick:c}),l.a.createElement(s,{text:"y\xb2",handleClick:c})),l.a.createElement("div",{className:"button-box"},l.a.createElement(s,{text:"1",handleClick:c}),l.a.createElement(s,{text:"2",handleClick:c}),l.a.createElement(s,{text:"3",handleClick:c}),l.a.createElement(s,{text:"-",handleClick:c}),l.a.createElement(s,{text:"\u221a",handleClick:c})),l.a.createElement("div",{className:"button-box"},l.a.createElement(s,{text:"0",handleClick:c}),l.a.createElement(s,{text:".",handleClick:c}),l.a.createElement(s,{text:"=",id:"equals",handleClick:c}),l.a.createElement(s,{text:"+",handleClick:c}),l.a.createElement(s,{text:"clr",id:"clear",handleClick:c})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.d04d64cb.chunk.js.map