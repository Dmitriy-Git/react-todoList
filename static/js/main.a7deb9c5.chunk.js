(this["webpackJsonpreact-youtube"]=this["webpackJsonpreact-youtube"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(9),n(1)),l=o.a.createContext(),u={li:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".5rem 1rem",border:"1px solid #ccc",borderRadius:"4px",marginBottom:".5rem"},input:{marginRight:"1rem"}};var m=function(e){var t=e.todo,n=e.index,r=e.onChange,c=Object(a.useContext)(l).removeTodo,i=[];return t.completed&&i.push("done"),o.a.createElement("li",{style:u.li},o.a.createElement("span",{className:i.join(" ")},o.a.createElement("input",{type:"checkbox",checked:t.completed,style:u.input,onChange:function(){return r(t.id)}}),o.a.createElement("strong",null,n+1),"\xa0",t.title),o.a.createElement("button",{className:"rm",onClick:function(){return c(t.id)}},"\xd7"))},d={ul:{listStyle:"none",margin:0,padding:0}};var s=function(e){return o.a.createElement("ul",{style:d.ul},e.todos.map((function(t,n){return o.a.createElement(m,{todo:t,key:t.id,index:n,onChange:e.onToggle})})))};var p=function(e){var t=e.onCreate,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],l=r[1];return o.a.createElement("form",{style:{margin:"2rem"},onSubmit:function(e){e.preventDefault(),c.trim()&&(t(c),l(""))}},o.a.createElement("input",{value:c,onChange:function(e){return l(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Add Todo"))};var f=function(){var e=o.a.useState([{id:1,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u0445\u043b\u0435\u0431"},{id:2,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u0430\u0441\u043b\u043e"},{id:3,completed:!1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u043c\u043e\u043b\u043e\u043a\u043e"}]),t=Object(i.a)(e,2),n=t[0],a=t[1];return o.a.createElement(l.Provider,{value:{removeTodo:function(e){a(n.filter((function(t){return t.id!==e})))}}},o.a.createElement("div",{className:"wrapper"},o.a.createElement("h1",{className:"header"},"React tutorial"),o.a.createElement(p,{onCreate:function(e){a(n.concat([{title:e,id:Date.now(),completed:!1}]))}}),n.length?o.a.createElement(s,{todos:n,onToggle:function(e){a(n.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))}}):o.a.createElement("p",null,"No todos")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.a7deb9c5.chunk.js.map