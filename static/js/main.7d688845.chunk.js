(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(32),i=a.n(s),r=(a(92),a.p,a(93),a(15)),o=a(9),j=a(154),l=a(150),d=a(155),b=a(148),u=a(146),O=a(74),h=a.n(O),f=a(2);var v=function(e){var t=e.dataParam,a=e.handleRemove;console.log("New task created! ID: ",t.id);var n=Object(c.useState)(t.task),s=Object(o.a)(n,2),i=s[0],r=(s[1],Object(c.useState)("done")),O=Object(o.a)(r,2),v=O[0],x=(O[1],Object(c.useState)(!1)),m=Object(o.a)(x,2),p=m[0],k=m[1],g=Object(b.a)({Paper:{width:"100%",textAlign:"left",display:"grid",gridTemplateColumns:"1fr 1fr"}})();return Object(f.jsx)(u.a.div,{style:{width:"100%"},initial:{opacity:0},animate:{opacity:1},children:Object(f.jsxs)(j.a,{className:g.Paper,children:[Object(f.jsxs)("div",{children:[Object(f.jsx)(l.a,{onChange:function(e){k(e.target.checked),console.log(e.target.checked)}}),Object(f.jsx)("div",{className:"task "+(p&&v),children:i})]}),Object(f.jsx)(d.a,{size:"small",color:"error",variant:"contained",style:{justifySelf:"end",borderRadius:"0"},startIcon:Object(f.jsx)(h.a,{}),disableElevation:!0,onClick:a,children:" REMOVE"})]})})};var x=function(e){var t=e.activeTasks,a=e.removeTask,n=Object(c.useState)(t),s=Object(o.a)(n,2);return s[0],s[1],Object(f.jsx)("div",{className:"task-display",children:t.map((function(e){return Object(f.jsx)(v,{dataParam:e,handleRemove:a})}))})},m=a(153),p=a(147);var k=function(e){var t=e.addTask,a=e.setOpenModal,n=Object(c.useState)(""),s=Object(o.a)(n,2),i=s[0],r=s[1];return Object(f.jsx)("div",{className:"task-input",children:Object(f.jsxs)(m.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(f.jsx)(p.a,{autoComplete:"false",margin:"normal",required:!0,fullWidth:!0,id:"task",label:"New Task",name:"task",autoFocus:!0,onChange:function(e){r(e.target.value)}}),Object(f.jsx)(d.a,{onClick:function(){t(i),a(!1)},children:"SUBMIT"})]})})},g=a(75),T=a.n(g),C=a(151),S=a(76),y=a.n(S);var N=function(){var e=0,t=Object(c.useState)([]),a=Object(o.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)(!1),l=Object(o.a)(i,2),b=l[0],u=l[1];return Object(c.useEffect)((function(){console.log(n)}),[n]),Object(f.jsxs)("div",{children:[Object(f.jsxs)(d.a,{variant:"contained",disableElevation:!0,onClick:function(){u(!0)},children:["   ",Object(f.jsx)(T.a,{})]}),Object(f.jsx)(x,{activeTasks:n,removeTask:function(e){console.log(e)}}),Object(f.jsx)(C.a,{open:b,children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(d.a,{onClick:function(){u(!1)},children:Object(f.jsx)(y.a,{})}),Object(f.jsx)(k,{addTask:function(t){var a=Object(r.a)(n);a.push({task:t,id:e}),s(a),e+=1},setOpenModal:u})]})})]})};var w=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)("header",{className:"App-header",children:[Object(f.jsx)("h1",{children:"What To-Do?"}),Object(f.jsx)(N,{})]})})},E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,158)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root")),E()},92:function(e,t,a){},93:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.7d688845.chunk.js.map