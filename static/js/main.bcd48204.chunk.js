(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,a,t){e.exports=t(31)},29:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),s=t(8),o=t(2),m=(t(29),t(3)),i=t.n(m),u=t(5),p=t(4),d=t(0),v=d.createContext,E=d.useContext,b=d.useState,g=v(),h=function(e){var a=e.children,t=b(!1),n=Object(p.a)(t,2),l=n[0],c=n[1],s=Object(o.p)(),m=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:t=e.sent,c(!1),s("/signin"),window.alert("User Logged Out"),console.log(t),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),window.alert("Opps ! error occured");case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(i.a.mark((function e(a){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.email,n=a.password,e.next=3,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t,password:n})});case 3:return r=e.sent,e.next=6,r.json();case 6:e.sent,200===r.status?(c(!0),s("/learn")):window.alert("Invalid credentials");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(g.Provider,{value:{Login:l,handleLogout:m,handleLogin:d}},a)},f=function(){return E(g)};var N=function(){var e=f(),a=e.Login,t=e.handleLogout;return r.a.createElement("div",{className:"Navbar"},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{class:"container-fluid"},r.a.createElement(s.c,{className:"navbar-brand nav-item",to:"/"},"Navbar"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{class:"navbar-nav"},r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/signup"},"SignUp")),r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/learn"},"Learn")),a?r.a.createElement("li",{class:"nav-item",onClick:t},r.a.createElement("div",{className:"nav-link",to:"/signin"},"Logout")):r.a.createElement("li",{class:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/signin"},"Login")))))))};var w=function(){return r.a.createElement(h,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(o.a,null)))};var j=function(){var e=Object(n.useState)("Loading"),a=Object(p.a)(e,2),t=a[0],l=a[1],c=function(){var e=Object(u.a)(i.a.mark((function e(){var a,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/Learn",{method:"GET",headers:{"content-type":"application/json",Accept:"application/json"},credentials:"include"});case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,l(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){c()}),[]),r.a.createElement("div",{className:"home"},"Loading"===t?r.a.createElement("h1",null,"Loading"):r.a.createElement("h1",null,t.name))};var y=function(){return r.a.createElement("div",{className:"PageNotFound"},r.a.createElement("h1",null," PageNotFound"),r.a.createElement(s.b,{to:"/home"},"Go Back To Home"))},O=t(6),x=t(13);var k=function(){var e,a,t=Object(n.useState)({email:"",password:""}),l=Object(p.a)(t,2),c=l[0],s=l[1],o=f().handleLogin,m=function(t){console.log(t.target.name),e=t.target.name,a=t.target.value,s(Object(x.a)(Object(x.a)({},c),{},Object(O.a)({},e,a)))},d=function(){var e=Object(u.a)(i.a.mark((function e(a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,o(c);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"SignUp p-4"},r.a.createElement("div",{className:"p-3  container col-10 bg-white "},r.a.createElement("form",{className:"p-2"},r.a.createElement("h3",{className:"p-2 "},"Sign In"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",placeholder:"Enter email",value:c.email,onChange:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",placeholder:"Enter password",value:c.password,onChange:m})),r.a.createElement("div",{className:"form-group pt-4"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"customCheck1"},"Remember me"))),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:d},"Submit"),r.a.createElement("p",{className:"forgot-password text-right"},"Forgot ",r.a.createElement("a",{href:"./SignIn.js"},"password?")))))};var C=function(){var e,a,t=Object(n.useState)({name:"",email:"",phone:"",password:""}),l=Object(p.a)(t,2),c=l[0],s=l[1],o=function(t){e=t.target.name,a=t.target.value,s(Object(x.a)(Object(x.a)({},c),{},Object(O.a)({},e,a)))},m=function(){var e=Object(u.a)(i.a.mark((function e(a){var t,n,r,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=c.name,n=c.email,r=c.phone,l=c.password,e.next=4,fetch("/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,phone:r,password:l})});case 4:return s=e.sent,e.next=7,s.json();case 7:e.sent,console.log("res",s),200===s.status?window.alert("User created successfully"):window.alert("Opps error");case 10:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"p-4 SignUp"},r.a.createElement("form",{className:" container col-10"},r.a.createElement("h3",{className:"p-3"},"Sign Up"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"First name",name:"name",value:c.name,onChange:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email address"),r.a.createElement("input",{name:"email",type:"email",className:"form-control",placeholder:"Enter email",value:c.email,onChange:o})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone"),r.a.createElement("input",{name:"phone",type:" text",className:"form-control",placeholder:"Enter phone",value:c.phone,onChange:o})),r.a.createElement("div",{className:"form-group pb-4"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",className:"form-control",placeholder:"Enter password",value:c.password,onChange:o})),r.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:m},"Sign Up"),r.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",r.a.createElement("a",{href:"/signin"},"sign in?"))))};c.a.render(r.a.createElement(s.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",element:r.a.createElement(w,null)},r.a.createElement(o.b,{path:"signin",element:r.a.createElement(k,null)}),r.a.createElement(o.b,{path:"signup",element:r.a.createElement(C,null)}),r.a.createElement(o.b,{path:"learn",element:r.a.createElement(j,null)}),r.a.createElement(o.b,{path:"*",element:r.a.createElement(y,null)})))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.bcd48204.chunk.js.map