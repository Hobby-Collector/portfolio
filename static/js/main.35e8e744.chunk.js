(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(7),r=n.n(i),c=(n(14),n(15),n(8)),l=n(1),s=n(2),h=n(4),p=n(3),m=n(5),u=(n(16),n(17),n(18),n(19),function(e){return a.a.createElement("div",{className:"Photo"},a.a.createElement("img",{src:e.Project.photo,alt:e.Project.name,"data-idx":e.idx,onClick:e.handleClick,className:"zoom"}))}),d=function(e){return a.a.createElement("div",{className:"PhotoGrid"},e.Projects.map((function(t,n){return a.a.createElement(u,{key:n,Project:t,idx:n,handleClick:e.handleClick})})))},g=function(e){return a.a.createElement("div",{className:"Photos"},e.renderPhotos,a.a.createElement(d,{handleClick:e.handleClick,Projects:e.Projects}))},f=(n(20),function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"TextContentArea"},a.a.createElement("h1",null,this.props.Active.title),"\xa0 \xa0 \xa0 \xa0",a.a.createElement("h2",null,this.props.Active.description))}}]),t}(o.Component)),y=[{title:"Software Engineer",photo:"https://i.imgur.com/93zbVYs.jpg?1",description:"Hello My name is Blaine Shelton",deployment:"https://www.linkedin.com/in/rblaineshelton/"},{title:"React Pantry",photo:"https://i.imgur.com/h84e0ck.png",description:"A fun pantry tracker to allow you to keep of when the things that you buy at the grocery store expires",deployment:"https://reactpantry.herokuapp.com/"},{title:"Sudoku",photo:"https://i.imgur.com/nB8T4SS.png",description:"A simple website to play the most relaxing an imfuriating game created! All created in Javscript!",deployment:"https://hobby-collector.github.io/Sudoku-web-implementation"},{title:"Yoyo Contest Judging",photo:"https://i.imgur.com/AIDiSwL.png",description:" A simple web app to fix a major problem in the yoyoing community to bring yoyo contests from paper to a multipage web app using Javascript mongoose",deployment:"http://yoyo-contests.herokuapp.com/"},{title:"Mastermind",photo:"https://i.imgur.com/3YQdsER.png",description:"A react version of the classic game Mastermind! guess the right colors in the right place and you win! built using the full MERN stack. ",deployment:"#"},{title:"Finch Collector",photo:"https://i.imgur.com/6EOqpc7.png",description:"A fun app for tracking your collection of Finches! Built using Python and Django!",deployment:"https://github.com/Hobby-Collector/FinchCollector/tree/master/finchcollector"}],v=(n(21),function(e){return a.a.createElement("div",{className:"ActivePhoto"},a.a.createElement("a",{href:e.Active.deployment,rel:"noopener noreferrer",target:"_blank"},a.a.createElement("img",{src:e.Active.photo,alt:e.Active.title})))}),b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).state={Projects:Object(c.a)(y),ActiveIndex:0},n.renderPhotos=function(){var e=n.state,t=e.Projects,o=e.ActiveIndex;if(t.length)return a.a.createElement(v,{Active:t[o]})},n.renderTextContent=function(){var e=n.state,t=e.Projects,o=e.ActiveIndex;if(t.length)return a.a.createElement(f,{className:"col",Active:t[o]})},n.handleClick=function(e){var t=e.target.getAttribute("data-idx");n.setState({ActiveIndex:t})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"PhotoGallery"},a.a.createElement(g,{className:"col",Projects:this.state.Projects,renderPhotos:this.renderPhotos(),handleClick:this.handleClick}),this.renderTextContent())}}]),t}(o.Component);var k=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",null,a.a.createElement("h1",null," Blaine Shelton")),a.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.35e8e744.chunk.js.map