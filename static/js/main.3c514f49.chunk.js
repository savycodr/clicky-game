(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),s=a(2),n=a.n(s),r=(a(14),a(3)),l=a(4),o=a(6),d=a(5),u=a(7);a(15);var m=function(e){return c.a.createElement("div",{className:e.shake?"":"animated shake"},e.images.map(function(t){return c.a.createElement("img",{src:t.url,className:"bird img-thumbnail",alt:t.alt,"data-clicked":t.clicked,onClick:function(){return e.handleClick(t.id)}})}))},g=(a(16),function(e){function t(){var e,a;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={pictures:[{id:1,url:"/assets/img/adler-2386314_640.jpg",alt:"bird1",clicked:!1},{id:2,url:"/assets/img/animal-1850868_640.jpg",alt:"bird2",clicked:!1},{id:3,url:"/assets/img/bar-tailed-godwit-944883_640.jpg",alt:"bird3",clicked:!1},{id:4,url:"/assets/img/blue-jay-3734030_640.jpg",alt:"bird4",clicked:!1},{id:5,url:"/assets/img/duck-1884934_640.jpg",alt:"bird5",clicked:!1},{id:6,url:"/assets/img/guacamaya-4132823_640.jpg",alt:"bird6",clicked:!1},{id:7,url:"/assets/img/mallard-3524213_640.jpg",alt:"bird7",clicked:!1},{id:8,url:"/assets/img/robin-4225979_640.jpg",alt:"bird8",clicked:!1},{id:9,url:"/assets/img/spring-bird-2295434_640.jpg",alt:"bird9",clicked:!1},{id:10,url:"/assets/img/swan-4208564_640.jpg",alt:"bird10",clicked:!1},{id:11,url:"/assets/img/tit-4228129_640.jpg",alt:"bird11",clicked:!1},{id:12,url:"/assets/img/tit-4230128_640.jpg",alt:"bird12",clicked:!1}],score:0,highScore:0},a.handleClick=function(e){a.state.pictures.find(function(t){return t.id===e}).clicked?a.resetGame():a.goodPick(e);var t=a.state.pictures.slice(),i=a.shuffle(t);console.log(i),a.setState({pictures:i})},a.goodPick=function(e){a.setState({score:a.state.score+1});var t=a.state.pictures.slice();t.find(function(t){return t.id===e}).clicked=!0,a.setState({pictures:t})},a.shuffle=function(e){for(var t,a,i=e.length;0!==i;)a=Math.floor(Math.random()*i),t=e[i-=1],e[i]=e[a],e[a]=t;return e},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"resetGame",value:function(){console.log("You already clicked this image"),this.state.score>this.state.highScore&&this.setState({highScore:this.state.score}),this.setState({score:0});var e=this.state.pictures.slice();this.state.pictures.map(function(e){return e.clicked=!1}),this.setState({pictures:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"fluid-container intro "},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 align-self-end"},c.a.createElement("h3",null,"Click An Image To Begin")),c.a.createElement("div",{className:"col-md-4 align-self-center"},c.a.createElement("h1",null,"Clicky Bird")),c.a.createElement("div",{className:"col-md-4 align-self-end"},c.a.createElement("h3",null,"Score: ",this.state.score," | Top Score: ",this.state.highScore)))),c.a.createElement("div",{className:"fluid-container directions"},c.a.createElement("h3",null,"Click on an image to earn points, but don't click on any more than once!")),c.a.createElement("div",{className:"fluid-container game"},c.a.createElement(m,{images:this.state.pictures,handleClick:this.handleClick,shake:this.state.score})),c.a.createElement("div",{className:"fluid-container footer "}))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.3c514f49.chunk.js.map