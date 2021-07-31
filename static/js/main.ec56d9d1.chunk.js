(this["webpackJsonppathfinding-visualisation"]=this["webpackJsonppathfinding-visualisation"]||[]).push([[0],{14:function(t,n,e){},15:function(t,n,e){},16:function(t,n,e){},18:function(t,n,e){},19:function(t,n,e){"use strict";e.r(n);var i=e(1),s=e.n(i),o=e(9),r=e.n(o),a=(e(14),e(15),e(8)),u=e(2),c=e(3),l=e(5),d=e(4),f=(e(16),e(0)),h=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){return Object(u.a)(this,e),n.apply(this,arguments)}return Object(c.a)(e,[{key:"render",value:function(){var t=this.props,n=t.col,e=t.isFinish,i=t.isStart,s=t.isWall,o=t.onMouseDown,r=t.onMouseEnter,a=t.onMouseUp,u=t.row,c=e?"node-finish":i?"node-start":s?"node-wall":"";return Object(f.jsx)("div",{id:"node-".concat(u,"-").concat(n),className:"node ".concat(c),onMouseDown:function(){return o(u,n)},onMouseEnter:function(){return r(u,n)},onMouseUp:function(){return a()}})}}]),e}(i.Component),v=e(6);function j(t,n,e){var i=[];n.distance=0;for(var s=function(t){var n,e=[],i=Object(v.a)(t);try{for(i.s();!(n=i.n()).done;){var s,o=n.value,r=Object(v.a)(o);try{for(r.s();!(s=r.n()).done;){var a=s.value;e.push(a)}}catch(u){r.e(u)}finally{r.f()}}}catch(u){i.e(u)}finally{i.f()}return e}(t);s.length;){p(s);var o=s.shift();if(!o.isWall){if(o.distance===1/0)return i;if(o.isVisited=!0,i.push(o),o===e)return i;m(o,t)}}}function p(t){t.sort((function(t,n){return t.distance-n.distance}))}function m(t,n){var e,i=function(t,n){var e=[],i=t.col,s=t.row;s>0&&e.push(n[s-1][i]);s<n.length-1&&e.push(n[s+1][i]);i>0&&e.push(n[s][i-1]);i<n[0].length-1&&e.push(n[s][i+1]);return e.filter((function(t){return!t.isVisited}))}(t,n),s=Object(v.a)(i);try{for(s.s();!(e=s.n()).done;){var o=e.value;o.distance=t.distance+1,o.previousNode=t}}catch(r){s.e(r)}finally{s.f()}}e(18);var b=function(t){Object(l.a)(e,t);var n=Object(d.a)(e);function e(){var t;return Object(u.a)(this,e),(t=n.call(this)).state={grid:[],mouseIsPressed:!1},t}return Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=g();this.setState({grid:t})}},{key:"handleMouseDown",value:function(t,n){var e=y(this.state.grid,t,n);this.setState({grid:e,mouseIsPressed:!0})}},{key:"handleMouseEnter",value:function(t,n){if(this.state.mouseIsPressed){var e=y(this.state.grid,t,n);this.setState({grid:e})}}},{key:"handleMouseUp",value:function(){this.setState({mouseIsPressed:!1})}},{key:"animateDijkstra",value:function(t,n){for(var e=this,i=function(i){if(i===t.length)return setTimeout((function(){e.animateShortestPath(n)}),10*i),{v:void 0};setTimeout((function(){var n=t[i];document.getElementById("node-".concat(n.row,"-").concat(n.col)).className="node node-visited"}),10*i)},s=0;s<=t.length;s++){var o=i(s);if("object"===typeof o)return o.v}}},{key:"animateShortestPath",value:function(t){for(var n=function(n){setTimeout((function(){var e=t[n];document.getElementById("node-".concat(e.row,"-").concat(e.col)).className="node node-shortest-path"}),50*n)},e=0;e<t.length;e++)n(e)}},{key:"visualizeDijkstra",value:function(){var t=this.state.grid,n=t[10][15],e=t[10][35],i=j(t,n,e),s=function(t){for(var n=[],e=t;null!==e;)n.unshift(e),e=e.previousNode;return n}(e);this.animateDijkstra(i,s)}},{key:"render",value:function(){var t=this,n=this.state,e=n.grid,i=n.mouseIsPressed;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("button",{onClick:function(){return t.visualizeDijkstra()},children:"Visualize Dijkstra's Algorithm"}),Object(f.jsx)("div",{className:"grid",children:e.map((function(n,e){return Object(f.jsx)("div",{children:n.map((function(n,e){var s=n.row,o=n.col,r=n.isFinish,a=n.isStart,u=n.isWall;return Object(f.jsx)(h,{col:o,isFinish:r,isStart:a,isWall:u,mouseIsPressed:i,onMouseDown:function(n,e){return t.handleMouseDown(n,e)},onMouseEnter:function(n,e){return t.handleMouseEnter(n,e)},onMouseUp:function(){return t.handleMouseUp()},row:s},e)}))},e)}))})]})}}]),e}(i.Component),g=function(){for(var t=[],n=0;n<20;n++){for(var e=[],i=0;i<50;i++)e.push(O(i,n));t.push(e)}return t},O=function(t,n){return{col:t,row:n,isStart:10===n&&15===t,isFinish:10===n&&35===t,distance:1/0,isVisited:!1,isWall:!1,previousNode:null}},y=function(t,n,e){var i=t.slice(),s=i[n][e],o=Object(a.a)(Object(a.a)({},s),{},{isWall:!s.isWall});return i[n][e]=o,i};var k=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(b,{})})},M=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,20)).then((function(n){var e=n.getCLS,i=n.getFID,s=n.getFCP,o=n.getLCP,r=n.getTTFB;e(t),i(t),s(t),o(t),r(t)}))};r.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),M()}},[[19,1,2]]]);
//# sourceMappingURL=main.ec56d9d1.chunk.js.map