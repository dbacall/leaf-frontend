(this["webpackJsonpfantasy-sunday-league"]=this["webpackJsonpfantasy-sunday-league"]||[]).push([[0],{106:function(e,t,a){e.exports={warning:"DatePicker_warning__3iy2M",inputWarning:"DatePicker_inputWarning__1hFRY",datePickerContainer:"DatePicker_datePickerContainer__2XVQn",datePicker:"DatePicker_datePicker__2uPnW"}},116:function(e,t,a){e.exports={warning:"Meetings_warning__2i0iB",inputWarning:"Meetings_inputWarning__3m2mJ",meetings:"Meetings_meetings__1pKMa",title:"Meetings_title__3v384"}},167:function(e,t,a){e.exports=a(240)},172:function(e,t,a){},200:function(e,t,a){},202:function(e,t,a){var n={"./Mums-walking.jpg":203,"./cheese-selection-p313-443_medium.jpg":204};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=202},203:function(e,t,a){e.exports=a.p+"static/media/Mums-walking.8945ca0c.jpg"},204:function(e,t,a){e.exports=a.p+"static/media/cheese-selection-p313-443_medium.8b8449c5.jpg"},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),s=(a(172),a(138)),o=a(139),l=a(151),u=a(147),m=(a(173),a(12)),p=a(40),g=a(54),d=a(141),h=a.n(d),f=a(30),v=a(74),b=a(180),_={isAuthenticated:!1,user:{},loading:!1},E={},y=a(20),w=a.n(y),O=a(34),j=a(70),N=a.n(j),C={request:function(){var e=Object(O.a)(w.a.mark((function e(t){var a,n,r,c,i,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.method,n=t.data,r=void 0===n?null:n,c=t.path,i=t.config,"/"===c[0]){e.next=3;break}throw new Error("Please start the path with a `/` character. You supplied: ",c);case 3:return s={method:a,url:"http://leaftherapyeb-env.eba-xyc63u32.eu-west-2.elasticbeanstalk.com/api"+c},r&&(s.data=r),i&&(s.config=i),e.prev=6,e.next=9,N()(s);case 9:return o=e.sent,e.abrupt("return",{success:!0,data:o.data,headers:o.headers});case 13:if(e.prev=13,e.t0=e.catch(6),console.error(e.t0),!e.t0.response){e.next=18;break}return e.abrupt("return",e.t0.response.data);case 18:throw e.t0;case 19:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(t){return e.apply(this,arguments)}}()},k=Object(p.b)("therapists/fetchTherapistsForCategory",function(){var e=Object(O.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.request({method:"get",path:"/therapist/category/".concat(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(p.b)("therapists/fetchTherapist",function(){var e=Object(O.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.request({method:"get",path:"/therapist/".concat(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(p.c)({name:"Therapists",initialState:{selectedTherapist:{},therapists:[],status:"loading"},reducers:{resetStatus:function(e,t){e.status="loading"}},extraReducers:function(e){e.addCase(k.pending,(function(e,t){e.status="loading"})).addCase(k.fulfilled,(function(e,t){e.therapists=t.payload.data,e.status="idle"})),e.addCase(x,(function(e,t){e.status="loading"})).addCase(x.fulfilled,(function(e,t){e.selectedTherapist=t.payload.data,e.status="idle"}))}}),T=S.actions.resetStatus,B=S.reducer,M=Object(p.b)("meetings/fetchMeetingsByCategory",function(){var e=Object(O.a)(w.a.mark((function e(t){var a,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.category,n=t.therapistId,e.next=3,C.request({method:"get",path:"/meeting/".concat(n,"/").concat(a)});case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R=Object(p.b)("meetings/fetchMeetingsByTherapist",function(){var e=Object(O.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.request({method:"get",path:"/meeting/".concat(t)});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(p.c)({name:"Meetings",initialState:{meetings:[],status:"loading"},reducers:{resetStatus:function(e,t){e.status="loading"}},extraReducers:function(e){e.addCase(M.pending,(function(e,t){e.status="loading"})).addCase(M.fulfilled,(function(e,t){e.meetings=t.payload.data,e.status="idle"})),e.addCase(R.pending,(function(e,t){e.status="loading"})).addCase(R.fulfilled,(function(e,t){e.meetings=t.payload.data,e.status="idle"}))}}),I=(P.actions.resetStatus,P.reducer),D=Object(f.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(v.a)(Object(v.a)({},e),{},{isAuthenticated:!b(t.payload),user:t.payload});case"USER_LOADING":return Object(v.a)(Object(v.a)({},e),{},{loading:!0});case"UPDATE_USER":return Object(v.a)(Object(v.a)({},e),{},{user:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;default:return e}},therapists:B,meetings:I}),W={key:"root",version:1,storage:h.a},F=Object(g.g)(W,D),A=Object(p.a)({reducer:F,middleware:Object(p.d)({serializableCheck:{ignoredActions:[g.a,g.f,g.b,g.c,g.d,g.e]}})}),L=Object(g.h)(A),U=A,z=a(90),q=a.n(z),V=function(e){e?N.a.defaults.headers.common.Authorization=e:delete N.a.defaults.headers.common.Authorization},G=function(e){return{type:"SET_CURRENT_USER",payload:e.user}},H=function(e){return function(t){t({type:"UPDATE_USER",payload:e})}},Y=function(){return function(e){localStorage.removeItem("jwtToken"),V(!1),e(G({}))}},K=(a(200),a(21)),Q=a(25),J=a(154),X=Object(m.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(J.a)(e,["component","auth"]);return r.a.createElement(Q.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(Q.a,{to:"/login"})}}))})),Z=a(24),$=a(14),ee=a(28),te=a.n(ee);function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var re=r.a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}),ce=function(e){var t=e.svgRef,a=e.title,n=ne(e,["svgRef","title"]);return r.a.createElement("svg",ae({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,re)},ie=r.a.forwardRef((function(e,t){return r.a.createElement(ce,ae({svgRef:t},e))}));a.p;function se(){return(se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function oe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var le=r.a.createElement("path",{d:"M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"}),ue=function(e){var t=e.svgRef,a=e.title,n=oe(e,["svgRef","title"]);return r.a.createElement("svg",se({width:24,height:24,viewBox:"0 0 24 24",ref:t},n),a?r.a.createElement("title",null,a):null,le)},me=r.a.forwardRef((function(e,t){return r.a.createElement(ue,se({svgRef:t},e))})),pe=(a.p,a(26)),ge=a.n(pe),de=function(e){var t=e.fill,a=e.className;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:t,className:a},r.a.createElement("path",{d:"M10 9.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7zm6-3c-1.787 0-3.46.474-4.911 1.295l.228.2 1.396 1.221c1.004-.456 2.114-.716 3.287-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.283-.26-3.288-.715l-1.396 1.221-.228.2c1.452.82 3.125 1.294 4.912 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z"}))},he=function(e){var t=e.fill,a=e.className;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:t,className:a},r.a.createElement("path",{d:"M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"}))},fe=function(e){var t=e.auth,a=e.logout,c=Object(n.useState)(!1),i=Object($.a)(c,2),s=i[0],o=i[1],l=function(){o(!1)},u=function(e){e.preventDefault(),a(),l()};return r.a.createElement("section",{className:te.a.navbar},r.a.createElement("nav",null,r.a.createElement(K.b,{to:"/",className:te.a.title,onClick:l},"Leaf"),function(){var e=t.user;return t.isAuthenticated?r.a.createElement("div",{className:ge()(te.a.navButtons,Object(Z.a)({},te.a.active,s))},e.therapistId?r.a.createElement(K.b,{to:"/therapist/".concat(e.therapistId),className:te.a.navButton,onClick:l},r.a.createElement(he,{className:te.a.navIcon,fill:"#44a1a0"}),"Therapist Page"):r.a.createElement(K.b,{to:"/therapist-form",className:te.a.navButton,onClick:l},r.a.createElement(he,{className:te.a.navIcon,fill:"#44a1a0"}),"Become A Therapist"),r.a.createElement(K.b,{className:te.a.navButton,onClick:u},r.a.createElement(de,{className:te.a.navIcon,fill:"#44a1a0"}),"Logout")):r.a.createElement("div",{className:ge()(te.a.navButtons,Object(Z.a)({},te.a.active,s))},r.a.createElement(K.b,{to:"/login",className:te.a.navButton,onClick:l},r.a.createElement(de,{className:te.a.navIcon,fill:"#44a1a0"}),"Login"))}(),r.a.createElement("div",{className:te.a.mobileMenuIcon,onClick:s?l:function(){o(!0)}},s?r.a.createElement(ie,{className:te.a.menuIcon}):r.a.createElement(me,{className:te.a.menuIcon}))))},ve=function(){var e=Object(m.d)((function(e){return e.auth})),t=Object(m.c)();return r.a.createElement(fe,{auth:e,logout:function(){t(Y())}})},be=a(37),_e=a.n(be),Ee=function(e){var t=e.errors,a=e.registerUser,c=Object(n.useState)(""),i=Object($.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(""),u=Object($.a)(l,2),m=u[0],p=u[1],g=Object(n.useState)(""),d=Object($.a)(g,2),h=d[0],f=d[1],v=Object(n.useState)(""),b=Object($.a)(v,2),_=b[0],E=b[1],y=Object(n.useState)(""),w=Object($.a)(y,2),O=w[0],j=w[1];return r.a.createElement("section",{className:_e.a.register},r.a.createElement("div",{className:_e.a.formContainer},r.a.createElement("div",null,r.a.createElement("h4",null,"Register"),r.a.createElement("p",null,"Already have an account? ",r.a.createElement(K.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),a({firstName:s,surname:m,email:h,password:_,password2:O})}},r.a.createElement("input",{onChange:function(e){return o(e.target.value)},value:s,error:t.firstName,id:"firstName",type:"text",placeholder:"First Name",className:ge()("",Object(Z.a)({},_e.a.inputWarning,t.name))}),r.a.createElement("p",{className:_e.a.warning},t.firstName),r.a.createElement("input",{onChange:function(e){return p(e.target.value)},value:m,error:t.surname,id:"surname",type:"text",placeholder:"Surname",className:ge()("",Object(Z.a)({},_e.a.inputWarning,t.surname))}),r.a.createElement("p",{className:_e.a.warning},t.surname),r.a.createElement("input",{onChange:function(e){return f(e.target.value)},value:h,error:t.email,id:"email",type:"email",placeholder:"Email",className:ge()("",Object(Z.a)({},_e.a.inputWarning,t.email))}),r.a.createElement("p",{className:_e.a.warning},t.email),r.a.createElement("input",{onChange:function(e){return E(e.target.value)},value:_,error:t.password,id:"password",type:"password",placeholder:"Password",className:ge()("",Object(Z.a)({},_e.a.inputWarning,t.password))}),r.a.createElement("p",{className:_e.a.warning},t.password),r.a.createElement("input",{onChange:function(e){return j(e.target.value)},value:O,error:t.password2,id:"password2",type:"password",placeholder:"Confirm Password",className:ge()("",Object(Z.a)({},_e.a.inputWarning,t.password2))}),r.a.createElement("p",{className:_e.a.warning},t.password2),r.a.createElement("button",{type:"submit",className:_e.a.submitBtn},"Sign up"))))},ye=function(e){var t=Object(m.d)((function(e){return e.errors})),a=Object(m.c)(),c=Object(n.useRef)(!0);Object(n.useEffect)((function(){c.current&&(a((function(e){e({type:"GET_ERRORS",payload:{}})})),c.current=!1)}));return r.a.createElement(Ee,{registerUser:function(t){a(function(e,t){return function(){var a=Object(O.a)(w.a.mark((function a(n){var r;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return"/users/register",a.next=3,C.request({method:"post",data:e,path:"/users/register"});case 3:(r=a.sent).error?n({type:"GET_ERRORS",payload:r.errors}):(t.push("/login"),n({type:"GET_ERRORS",payload:{}}));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(t,e.history))},errors:t})},we=a(64),Oe=a.n(we),je=function(e){var t=e.errors,a=e.loginUser,c=Object(n.useState)(""),i=Object($.a)(c,2),s=i[0],o=i[1],l=Object(n.useState)(""),u=Object($.a)(l,2),m=u[0],p=u[1];return r.a.createElement("section",{className:Oe.a.login},r.a.createElement("div",{className:Oe.a.formContainer},r.a.createElement("div",null,r.a.createElement("h3",null,"Login"),r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(K.b,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),a({email:s,password:m})}},r.a.createElement("input",{onChange:function(e){return o(e.target.value)},value:s,error:t.email,id:"email",type:"email",placeholder:"Email",className:ge()("",Object(Z.a)({},Oe.a.inputWarning,t.email||t.emailnotfound))}),r.a.createElement("p",{className:Oe.a.warning},t.email,t.emailnotfound),r.a.createElement("input",{onChange:function(e){return p(e.target.value)},value:m,error:t.password,id:"password",type:"password",placeholder:"Password",className:ge()("",Object(Z.a)({},Oe.a.inputWarning,t.password||t.passwordincorrect))}),r.a.createElement("p",{className:Oe.a.warning},t.password,t.passwordincorrect),r.a.createElement("button",{type:"submit",className:Oe.a.submitBtn},"Login"))))},Ne=function(e){var t=e.history,a=Object(m.d)((function(e){return e.auth})),c=Object(m.d)((function(e){return e.errors})),i=Object(m.c)();Object(n.useEffect)((function(){a.isAuthenticated&&(t.push("/"),i((function(e){e({type:"GET_ERRORS",payload:{}})})))}),[a,i,t]);return r.a.createElement(je,{loginUser:function(e){i(function(e){return function(){var t=Object(O.a)(w.a.mark((function t(a){var n,r,c;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/users/login",t.next=3,C.request({method:"post",data:e,path:"/users/login"});case 3:(n=t.sent).error?a({type:"GET_ERRORS",payload:n.errors}):(r=n.data.token,localStorage.setItem("jwtToken",r),V(r),c=q()(r),a(G(c)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},errors:c})},Ce=a(65),ke=a.n(Ce),xe=[{name:"Mums",image:"Mums-walking.jpg"},{name:"Cheese Addiction",image:"cheese-selection-p313-443_medium.jpg"}],Se=function(){return r.a.createElement("div",{className:ke.a.home},r.a.createElement("h2",{className:ke.a.title},"Categories"),r.a.createElement("div",{className:ke.a.categories},xe.map((function(e,t){return r.a.createElement(K.b,{to:"/category/".concat(e.name),className:ke.a.category,key:t},r.a.createElement("div",{className:ke.a.imageContainer},r.a.createElement("img",{className:ke.a.categoryImage,src:a(202)("./".concat(e.image)),alt:e.name})),r.a.createElement("h4",{className:ke.a.categoryName},e.name))}))))},Te=function(){var e=Object(m.d)((function(e){return e.auth.user}));return r.a.createElement(Se,{user:e})},Be=a(149),Me=a(33),Re=a.n(Me),Pe=a(279),Ie=a(277),De=a(106),We=a.n(De),Fe=function(e){var t=e.setDate,a=e.dateAndTime,n=e.value,c=new Date;return r.a.createElement("div",{className:We.a.datePickerContainer},a?r.a.createElement(Pe.a,{className:We.a.datePicker,minDate:c,minDateMessage:"Please select a future date",autoOk:!0,variant:"inline",label:"Date and Time",format:"MM/dd/yyyy HH:mm",value:n,onChange:function(e){return t(e)},ampm:!1}):r.a.createElement(Ie.a,{className:We.a.datePicker,autoOk:!0,variant:"inline",label:"Date Of Birth (mm/dd/yyyy)",format:"MM/dd/yyyy",value:n,onChange:function(e){return t(e)}}))},Ae=function(e){var t=e.setDate,a=e.value,n=e.dateAndTime;return r.a.createElement(Fe,{setDate:t,value:a,dateAndTime:n})},Le=function(e){var t=e.fill,a=e.className;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:t,className:a},r.a.createElement("path",{d:"M16 16h-3v5h-2v-5h-3l4-4 4 4zm3.479-5.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h3.5v-2h-3.5c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78 3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-3.5v2h3.5c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408z"}))},Ue=[{name:"Mums",image:"Mums-walking.jpg"},{name:"Cheese Addiction",image:"cheese-selection-p313-443_medium.jpg"}],ze=function(e){var t=e.createTherapist,a=e.redirect,c=e.errors,i=e.therapist,s=Object(n.useState)(""),o=Object($.a)(s,2),l=o[0],u=o[1],m=Object(n.useState)(null),p=Object($.a)(m,2),g=p[0],d=p[1],h=Object(n.useState)([]),f=Object($.a)(h,2),v=f[0],b=f[1],_=Object(n.useState)(null),E=Object($.a)(_,2),y=E[0],w=E[1],O=Object(n.useState)(null),j=Object($.a)(O,2),N=j[0],C=j[1],k=function(e){return v.includes(e)},x=Object(n.useRef)(null);return r.a.createElement("div",{className:Re.a.newTherapistForm},r.a.createElement("h2",{className:Re.a.title},"Become A Therapist"),r.a.createElement("div",{className:Re.a.formContainer},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({dateOfBirth:l,yearsExperience:g,categories:v,pricePerHour:y},N)}},r.a.createElement("div",null,r.a.createElement(Ae,{setDate:u,value:l}),r.a.createElement("p",{className:Re.a.warning},c.dateOfBirth&&c.dateOfBirth.message)),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return d(e.target.value)},value:g,placeholder:"Years of experience",className:ge()("",Object(Z.a)({},Re.a.inputWarning,c.yearsExperience))}),r.a.createElement("p",{className:Re.a.warning},c.yearsExperience&&c.yearsExperience.message,c.yearsExperience&&c.yearsExperience.reason&&"Years of experience must be a number")),r.a.createElement("label",null,"Select categories:"),r.a.createElement("div",{className:Re.a.categoryBtns},Ue.map((function(e,t){return r.a.createElement("button",{checked:"Mums"===e.name,onClick:function(t){return function(e,t){if(e.preventDefault(),k(t)){var a=v.filter((function(e){return e!==t}));b(a)}else b([].concat(Object(Be.a)(v),[t]))}(t,e.name)},className:ge()(Re.a.categoryBtn,Object(Z.a)({},Re.a.selectedCategory,k(e.name)))},e.name)})),r.a.createElement("p",{className:Re.a.warning},c.categories&&c.categories.message)),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return w(e.target.value)},value:y,placeholder:"Price per hour"})),r.a.createElement("div",{className:Re.a.photoUploadContainer},r.a.createElement("button",{onClick:function(e){e.preventDefault(),x.current.click()},className:Re.a.uploadBtn},r.a.createElement(Le,{fill:"#37371f",className:Re.a.uploadIcon}),"Upload Photo"),r.a.createElement("input",{onChange:function(e){return C(e.target.files[0])},type:"file",className:Re.a.photoUpload,ref:x}),N&&r.a.createElement("p",null,"Photo uploaded!")),r.a.createElement("button",{className:Re.a.submitBtn},"Submit"))),function(){if(a)return r.a.createElement(Q.a,{to:"/therapist/".concat(i.id)})}())},qe=function(){var e=Object(n.useState)(!1),t=Object($.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({}),s=Object($.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(""),p=Object($.a)(u,2),g=p[0],d=p[1],h=Object(m.c)(),f=Object(m.d)((function(e){return e.auth.user})),v=function(){var e=Object(O.a)(w.a.mark((function e(t,a){var n,r,i,s,o;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/therapist",e.next=3,C.request({method:"post",data:t,path:"/therapist"});case 3:if(!(n=e.sent).error){e.next=8;break}l(n.errors),e.next=22;break;case 8:if(d(n.data.data),r=n.data.data.id,!a){e.next=17;break}return(i=new FormData).append("therapist",r),i.append("photo",a),s={headers:{"Content-type":"multipart/form-data"}},e.next=17,N.a.post("".concat("http://leaftherapyeb-env.eba-xyc63u32.eu-west-2.elasticbeanstalk.com/api","/photo"),i,s);case 17:return e.next=19,C.request({method:"put",data:{therapistId:r},path:"/users/".concat(f.id)});case 19:o=e.sent,h(H(o.data.data)),c(!0);case 22:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement(ze,{user:f,createTherapist:v,redirect:a,errors:o,therapist:g})},Ve=a(66),Ge=a.n(Ve),He=a(142),Ye=function(){return r.a.createElement(He.SolarSystemLoading,null)},Ke=function(e){var t=e.therapists,a=void 0===t?[]:t,n=e.status,c=e.category;return r.a.createElement("div",{className:Ge.a.category},r.a.createElement("h2",{className:Ge.a.title},"Therapists"),r.a.createElement("div",{className:Ge.a.therapists},"loading"===n?r.a.createElement(Ye,null):a.map((function(e,t){return r.a.createElement(K.b,{to:"/therapist/".concat(e.id,"/").concat(c),className:Ge.a.therapist,key:t},e.photo.length>0?r.a.createElement("div",{className:Ge.a.imageContainer},r.a.createElement("img",{className:Ge.a.therapistImage,src:"".concat("https://leaf-therapy-photos.s3.eu-west-2.amazonaws.com","/").concat(e.photo[0].photo),alt:"".concat(e.user[0].firstName," ").concat(e.user[0].surname)})):null,r.a.createElement("h4",{className:Ge.a.therapistName},e.user[0].firstName," ",e.user[0].surname))}))))},Qe=function(){var e=Object(m.c)(),t=Object(m.d)((function(e){return e.auth.user})),a=Object(m.d)((function(e){return e.therapists})),c=a.status,i=a.therapists,s=Object(Q.g)().category,o=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return o.current&&(o.current=!1,e(k(s))),function(){e(T())}}),[s,e]),r.a.createElement(Ke,{user:t,therapists:i,status:c,category:s})},Je=a(49),Xe=a.n(Je),Ze=a(281),$e=a(116),et=a.n($e),tt=a(148),at=a(278),nt=a(284),rt=function(e){var t=e.meetings,a=e.status;return r.a.createElement("div",{className:et.a.meetings},r.a.createElement("h2",{className:et.a.title},"Meetings"),"loading"===a?r.a.createElement(Ye,null):r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date & Time"),r.a.createElement("th",null,"Category"),r.a.createElement("th",null,"Length"),r.a.createElement("th",null,"Meeting Link"))),r.a.createElement("tbody",null,function(){if(t)return t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,Object(tt.a)(Object(at.a)(e.time),"Pp",{locale:nt.a})),r.a.createElement("td",null,e.category),r.a.createElement("td",null,e.hours," hr ",(a=e.minutes)<10?"0"+a:a," mins"),r.a.createElement("td",null,r.a.createElement("a",{href:"https://".concat(e.videoLink),target:"_blank",rel:"noopener noreferrer"},"Link")));var a}))}())))},ct=function(e){var t=e.category,a=Object(m.c)(),c=Object(m.d)((function(e){return e.auth.user})),i=Object(m.d)((function(e){return e.meetings})),s=i.status,o=i.meetings,l=Object(m.d)((function(e){return e.therapists})).selectedTherapist.id;return Object(n.useEffect)((function(){a(t?M({category:t,therapistId:l}):R(l))}),[t,a,l]),r.a.createElement(rt,{user:c,meetings:o,status:s})},it=function(e){var t=e.user,a=e.therapist,n=void 0===a?{}:a,c=e.status,i=e.category,s=function(){if(t&&t.id===n.user[0].id)return r.a.createElement(K.b,{to:"/meeting-form",className:Xe.a.meetingBtn},"Add a Meeting")};return r.a.createElement("div",{className:Xe.a.therapist},"loading"===c?r.a.createElement(Ye,null):function(){if(Object.keys(n).length>0)return r.a.createElement("div",null,r.a.createElement("div",{className:Xe.a.therapistProfile},n.photo.length>0?r.a.createElement("div",null,r.a.createElement("div",{className:Xe.a.imageContainer},r.a.createElement("img",{className:Xe.a.therapistImage,src:"".concat("https://leaf-therapy-photos.s3.eu-west-2.amazonaws.com","/").concat(n.photo[0].photo),alt:"".concat(n.user[0].firstName," ").concat(n.user[0].surname)}))):null,r.a.createElement("div",null,r.a.createElement("div",{className:Xe.a.therapistDetails},r.a.createElement("h2",{className:Xe.a.title},n.user[0].firstName," ",n.user[0].surname),r.a.createElement("div",{className:Xe.a.detailsList},r.a.createElement("p",null,r.a.createElement("span",null,"Years Experience:"),r.a.createElement("span",null,n.yearsExperience)),r.a.createElement("p",null,r.a.createElement("span",null,"Age:"),r.a.createElement("span",null,function(){var e=Date.now();return Object(Ze.a)(e,new Date(n.dateOfBirth))}())),n.pricePerHour&&r.a.createElement("p",null,r.a.createElement("span",null,"Price per hour:"),r.a.createElement("span",null,"\xa3",n.pricePerHour)),r.a.createElement("p",null,r.a.createElement("span",null,"Email:"),r.a.createElement("span",null,n.user[0].email)))))),r.a.createElement("div",{className:Xe.a.meetingBtnContainer},s()),r.a.createElement(ct,{category:i}))}())},st=function(){var e=Object(m.c)(),t=Object(m.d)((function(e){return e.auth.user})),a=Object(m.d)((function(e){return e.therapists})),c=a.status,i=a.selectedTherapist,s=Object(Q.g)(),o=s.id,l=s.category,u=Object(n.useRef)(!0);return Object(n.useEffect)((function(){u.current&&(u.current=!1,e(x(o)))}),[e,o]),r.a.createElement(it,{user:t,therapist:i,status:c,category:l})},ot=a(38),lt=a.n(ot),ut=function(e){var t=e.createMeeting,a=e.redirect,c=e.therapist,i=e.errors,s=Object(n.useState)(new Date),o=Object($.a)(s,2),l=o[0],u=o[1],m=Object(n.useState)(""),p=Object($.a)(m,2),g=p[0],d=p[1],h=Object(n.useState)(null),f=Object($.a)(h,2),v=f[0],b=f[1],_=Object(n.useState)(null),E=Object($.a)(_,2),y=E[0],w=E[1],O=Object(n.useState)(null),j=Object($.a)(O,2),N=j[0],C=j[1];return r.a.createElement("div",{className:lt.a.newMeetingForm},r.a.createElement("h2",{className:lt.a.title},"Add A Meeting"),r.a.createElement("div",{className:lt.a.formContainer},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t({time:l,category:g,hours:v,minutes:y,videoLink:N,therapistId:c.id})}},r.a.createElement("div",null,r.a.createElement(Ae,{setDate:u,value:l,dateAndTime:!0}),r.a.createElement("p",{className:lt.a.warning},i.time&&i.time.message)),r.a.createElement("div",null,r.a.createElement("select",{value:g,onChange:function(e){d(e.target.value)},className:ge()("",Object(Z.a)({},lt.a.inputWarning,i.category))},r.a.createElement("option",{value:"",disabled:!0},"Select Category:"),c.categories.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)}))),r.a.createElement("p",{className:lt.a.warning},i.category&&i.category.message)),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return b(e.target.value)},value:v,placeholder:"Meeting Hours",className:ge()("",Object(Z.a)({},lt.a.inputWarning,i.hours))}),r.a.createElement("p",{className:lt.a.warning},i.hours&&i.hours.message,i.hours&&i.hours.reason&&"Hours must be a number")),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return w(e.target.value)},value:y,placeholder:"Meeting Minutes",className:ge()("",Object(Z.a)({},lt.a.inputWarning,i.minutes))}),r.a.createElement("p",{className:lt.a.warning},i.minutes&&i.minutes.message,i.minutes&&i.minutes.reason&&"Minutes must be a number")),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return C(e.target.value)},value:N,placeholder:"Video Link",className:ge()("",Object(Z.a)({},lt.a.inputWarning,i.videoLink))}),i.videoLink&&r.a.createElement("p",{className:lt.a.warning},i.videoLink.message)),r.a.createElement("button",{className:lt.a.submitBtn},"Submit"))),function(){if(a)return r.a.createElement(Q.a,{to:"/therapist/".concat(c.id)})}())},mt=function(){var e=Object(n.useState)(!1),t=Object($.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)({}),s=Object($.a)(i,2),o=s[0],l=s[1],u=Object(m.d)((function(e){return e.therapists})).selectedTherapist,p=function(){var e=Object(O.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/meeting",e.next=3,C.request({method:"post",data:t,path:"/meeting"});case 3:a=e.sent,console.log(a),a.errors?l(a.errors):c(!0);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ut,{createMeeting:p,redirect:a,therapist:u,errors:o})},pt=function(){return r.a.createElement(K.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ve,null),r.a.createElement(Q.b,{path:"/register",component:ye}),r.a.createElement(Q.b,{path:"/login",component:Ne}),r.a.createElement(Q.d,null,r.a.createElement(Q.b,{exact:!0,path:"/",component:Te}),r.a.createElement(X,{exact:!0,path:"/therapist-form",component:qe}),r.a.createElement(Q.b,{exact:!0,path:"/category/:category",component:Qe}),r.a.createElement(Q.b,{exact:!0,path:"/therapist/:id",component:st}),r.a.createElement(Q.b,{exact:!0,path:"/therapist/:id/:category",component:st}),r.a.createElement(X,{exact:!0,path:"/meeting-form",component:mt}))))},gt=a(145),dt=a(23),ht=a(146);if(localStorage.jwtToken){var ft=localStorage.jwtToken;V(ft);var vt=q()(ft);U.dispatch(G(vt));var bt=Date.now()/1e3;vt.exp<bt&&(U.dispatch(Y()),window.location.href="./login")}var _t=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(dt.a,{utils:ht.a},r.a.createElement(m.a,{store:U},r.a.createElement(gt.a,{loading:null,persistor:L},r.a.createElement(pt,null))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_t,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t,a){e.exports={warning:"navbar-styles_warning__3SdHo",inputWarning:"navbar-styles_inputWarning__1Fv61",navbar:"navbar-styles_navbar__1REGx",title:"navbar-styles_title__Y7cuM",navButtons:"navbar-styles_navButtons__W8tUC",navButton:"navbar-styles_navButton__1mbOI",navIcon:"navbar-styles_navIcon__3qB6Z",mobileMenuIcon:"navbar-styles_mobileMenuIcon__2viEs",active:"navbar-styles_active__1kMF7",menuIcon:"navbar-styles_menuIcon__yXcru"}},33:function(e,t,a){e.exports={warning:"NewTherapistForm_warning__2fff5",inputWarning:"NewTherapistForm_inputWarning__25IVB",newTherapistForm:"NewTherapistForm_newTherapistForm__1ndgb",title:"NewTherapistForm_title__3KMgN",formContainer:"NewTherapistForm_formContainer__2qQnO",categoryBtns:"NewTherapistForm_categoryBtns__KHtoc",categoryBtn:"NewTherapistForm_categoryBtn__3lyb6",selectedCategory:"NewTherapistForm_selectedCategory__1Oemm",photoUploadContainer:"NewTherapistForm_photoUploadContainer__3bPeJ",photoUpload:"NewTherapistForm_photoUpload__2C_b3",uploadBtn:"NewTherapistForm_uploadBtn__3zzf4",uploadIcon:"NewTherapistForm_uploadIcon__2cm7P",submitBtn:"NewTherapistForm_submitBtn__2wBem"}},37:function(e,t,a){e.exports={warning:"register_warning__fKood",inputWarning:"register_inputWarning__117oA",register:"register_register__3rlei",formContainer:"register_formContainer__13vVB",submitBtn:"register_submitBtn__1EFad"}},38:function(e,t,a){e.exports={warning:"NewMeetingForm_warning__3gtyM",inputWarning:"NewMeetingForm_inputWarning__mFlFZ",newMeetingForm:"NewMeetingForm_newMeetingForm__A7AVk",title:"NewMeetingForm_title__2Okhk",formContainer:"NewMeetingForm_formContainer__2Lyow",selectCategory:"NewMeetingForm_selectCategory__1NLYQ",submitBtn:"NewMeetingForm_submitBtn__1aVL_"}},49:function(e,t,a){e.exports={warning:"Therapist_warning__21JQY",inputWarning:"Therapist_inputWarning__18RpA",therapist:"Therapist_therapist__3UghB",therapistProfile:"Therapist_therapistProfile__1uXf-",imageContainer:"Therapist_imageContainer__1UwX9",therapistImage:"Therapist_therapistImage__2Q9Gr",therapistDetails:"Therapist_therapistDetails__1ebqp",title:"Therapist_title__3XVq8",detailsList:"Therapist_detailsList__1mjzK",meetingBtnContainer:"Therapist_meetingBtnContainer__2O8O-"}},64:function(e,t,a){e.exports={warning:"login_warning__1W3Po",inputWarning:"login_inputWarning__3VuRC",login:"login_login__29vzN",formContainer:"login_formContainer__j-C_7",submitBtn:"login_submitBtn__1Co6u"}},65:function(e,t,a){e.exports={warning:"home_warning__tnwv_",inputWarning:"home_inputWarning__1MmKR",home:"home_home__2bNrD",title:"home_title__2U93c",categories:"home_categories__1iL2L",category:"home_category__3j0SV",imageContainer:"home_imageContainer__27-dE",categoryImage:"home_categoryImage__2fnlW",categoryName:"home_categoryName__6WjCt"}},66:function(e,t,a){e.exports={warning:"Category_warning__25fcc",inputWarning:"Category_inputWarning__2vtIT",category:"Category_category__1AKxG",title:"Category_title__1ICQ6",therapists:"Category_therapists__Z5eLE",therapist:"Category_therapist__1uuQj",imageContainer:"Category_imageContainer__NDwr6",therapistImage:"Category_therapistImage__1vwD8",therapistName:"Category_therapistName__3lPPt"}}},[[167,1,2]]]);
//# sourceMappingURL=main.e0a50a6d.chunk.js.map