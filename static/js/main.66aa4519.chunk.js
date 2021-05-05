(this["webpackJsonptata-cotizador-salud"]=this["webpackJsonptata-cotizador-salud"]||[]).push([[0],{20:function(e){e.exports=JSON.parse('[{"label":"DNI","value":"DNI"},{"label":"RUC","value":"RUC"}]')},42:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(17),s=n.n(r),l=(n(42),n(9)),i=n(11),o=n(3),d=n(10);var u=n(27),j=n(37),p=n(36),b=n(1);function m(e){var t=e.placeholder,n=e.name,c=e.isPrepend,r=e.invalid,s=Object(a.useRef)(null),l="field__input";return t||(l+=" field__input--no-placeholder"),r&&(l+=" field__input--invalid"),c&&(l+=" field__input--prepend"),Object(a.useEffect)((function(){if(null!==s.current&&!s.current._flatpickr){var e=s.current;Object(j.a)(e,{locale:p.Spanish,altFormat:"d/m/Y",altInput:!0,onChange:function(e,t,n){n.altInput.className+=" filled"}})}}),[]),Object(b.jsxs)("label",{className:l,children:[Object(b.jsx)("input",{type:"text",ref:s,name:n}),t&&Object(b.jsx)("div",{className:"field__placeholder",children:Object(b.jsx)("span",{children:t})})]})}function h(e){var t,n=e.placeholder,c=e.type,r=e.name,s=e.isPrepend,l=e.invalid,o=e.nativeInputProps,d=Object(a.useState)(!1),j=Object(i.a)(d,2),p=j[0],m=j[1],h="field__input";n||(h+=" field__input--no-placeholder"),l&&(h+=" field__input--invalid"),s&&(h+=" field__input--prepend"),p&&(t="filled");return Object(b.jsxs)("label",{className:h,children:[Object(b.jsx)("input",Object(u.a)(Object(u.a)({type:c},o),{},{name:r,className:t,onFocus:function(){return m(!0)},onBlur:function(e){e.target.value||m(!1)}})),n&&Object(b.jsx)("div",{className:"field__placeholder",children:Object(b.jsx)("span",{children:n})})]})}function f(e){var t=e.placeholder,n=e.options,a=e.name,c=e.invalid,r="field__input";return t||(r+=" field__input--no-placeholder"),e.isPrepend&&(r+=" field__input--prepend"),c&&(r+=" field__input--invalid"),Object(b.jsxs)("label",{className:r,children:[Object(b.jsx)("select",{name:a,children:n.map((function(e){return Object(b.jsx)("option",{value:e.value,children:e.label},e.value)}))}),t&&Object(b.jsx)("div",{className:"field__placeholder",children:Object(b.jsx)("span",{children:t})})]})}function O(e){var t,n=e.input,a=e.prepend,c="field";return(n.props.invalid||(null===a||void 0===a||null===(t=a.props)||void 0===t?void 0:t.invalid))&&(c+=" field--invalid"),Object(b.jsxs)("div",{className:c,children:[a,n]})}function x(e){var t=e.children,n=e.name,c=e.className,r=Object(a.useState)("off"),s=Object(i.a)(r,2),l=s[0],o=s[1];return Object(b.jsxs)("label",{className:"checkbox-field ".concat(c),children:[Object(b.jsx)("input",{type:"checkbox",name:n,onChange:function(e){return o(e.target.checked?"on":"off")}}),Object(b.jsx)("input",{type:"hidden",name:n,value:l}),Object(b.jsx)("div",{className:"checkbox-field__box"}),Object(b.jsx)("div",{className:"gap"}),Object(b.jsx)("div",{className:"checkbox-field__legend",children:t})]})}m.defaultProps={isPrepend:!1},h.defaultProps={type:"text",isPrepend:!1,nativeInputProps:{}},f.defaultProps={type:"text",isPrepend:!1};var v=n(13),g=n.n(v),y=n(21),N=n(12),_=n(22),k=n.n(_),P=Object(N.b)("personalInfo/fetchPerson",Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://randomuser.me/api?nat=es&inc=name,gender,id,dob,phone");case 2:return t=e.sent,e.abrupt("return",t.data.results[0]);case 4:case"end":return e.stop()}}),e)})))),C=(Object(N.b)("personalInfo/updatePerson",Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.put("https://randomuser.me/api?nat=es&inc=name,gender,id,dob,phone");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),Object(N.b)("personalInfo/deletePerson",Object(y.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.delete("https://randomuser.me/api?nat=es&inc=name,gender,id,dob,phone");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),Object(N.c)({name:"personalInfo",initialState:{meta:{loading:!1,done:!1,error:!1},documentNumber:null,documentType:null,birthday:null,cellphone:null,firstName:null,lastNamePat:null,lastNameMat:null,gender:null,acceptedTyc:null,acceptedMkt:null},reducers:{},extraReducers:function(e){e.addCase(P.pending,(function(e){e.meta.loading=!0,e.meta.done=!1,e.meta.error=!1})).addCase(P.fulfilled,(function(e,t){e.meta.loading=!1,e.meta.done=!0,e.meta.error=!1,e.documentNumber=t.payload.id.value,e.documentType=t.payload.id.name,e.birthday=t.payload.dob.date,e.cellphone=t.payload.phone.replace(/[^0-9]/g,""),e.firstName=t.payload.name.title,e.lastNamePat=t.payload.name.first,e.lastNameMat=t.payload.name.last,e.gender=t.payload.gender,e.acceptedTyc=!0,e.acceptedMkt=!0})).addCase(P.rejected,(function(e){e.meta.loading=!1,e.meta.done=!1,e.meta.error=!0}))}}).reducer),w=n(20);var I=function(){var e=Object(d.b)(),t=Object(o.f)(),n=Object(d.c)((function(e){return e.personalInfo.meta})),c=Object(a.useRef)(!0),r=Object(a.useCallback)((function(e){t.push(e)}),[t]);Object(a.useLayoutEffect)((function(){c.current?c.current=!1:n.done&&r("/datos-personales")}),[n,r]);var s=Object(a.useState)({}),l=Object(i.a)(s,2),u=l[0],j=l[1],p=Object(a.useCallback)((function(t){t.preventDefault();var n=new FormData(t.target),a={},c=n.get("documentType");n.forEach((function(e,t){var n=!0;switch(t){case"documentNumber":n=function(e,t){switch(t){case"DNI":return/^[0-9]{8}$/.test(e);case"RUC":return/(10|20)[0-9]{9}/.test(e);default:return!1}}(e,c);break;case"birthday":n=function(e){return!!e}(e);break;case"cellphone":n=function(e){return/^9[0-9]{8}$/.test(e)}(e);break;case"tyc":n=function(e){return"on"===e}(e)}n||(a[t]=!0)})),j(a),0===Object.keys(a).length&&e(P())}),[e]);return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{className:"text--h2 text--light text--h2",children:["Obt\xe9n tu ",Object(b.jsx)("span",{className:"text--regular text--blue",children:"seguro ahora"})]}),Object(b.jsx)("p",{className:"page__description text--light",children:"Ingresa los datos para comenzar."}),Object(b.jsxs)("form",{action:"#",className:"form",onSubmit:p,children:[Object(b.jsx)(O,{input:Object(b.jsx)(h,{invalid:u.documentNumber,placeholder:"Nro. de Documento",name:"documentNumber"}),prepend:Object(b.jsx)(f,{invalid:u.documentType,isPrepend:!0,options:w,name:"documentType"})}),Object(b.jsx)(O,{input:Object(b.jsx)(m,{invalid:u.birthday,placeholder:"Fecha de nacimiento",name:"birthday"})}),Object(b.jsx)(O,{input:Object(b.jsx)(h,{invalid:u.cellphone,type:"number",placeholder:"Celular",name:"cellphone",nativeInputProps:{min:9e8,max:999999999}})}),Object(b.jsxs)(x,{name:"tyc",className:u.tyc?"text--red":"text--grey-1",children:["Acepto la ",Object(b.jsx)("a",{className:u.tyc?"text--red":"text--grey-1",href:"https://www.termsandcondiitionssample.com/",rel:"noreferrer",target:"_blank",children:"Pol\xedtica de Protecci\xf3n de Datos Personales y los T\xe9rminos y Condiciones."})]}),Object(b.jsxs)(x,{name:"marketing",className:"text--grey-1",children:["Acepto la ",Object(b.jsx)("a",{className:"text--grey-1",href:"https://www.termsandcondiitionssample.com/",rel:"noreferrer",target:"_blank",children:"Pol\xedtica de Env\xedo de Comunicaciones Comerciales."})]}),Object(b.jsx)("button",{type:"submit",children:"Enviar"})]})]})};var S=function(e){var t=e.currentStep,n=Object(o.f)();return Object(b.jsxs)("p",{className:"page__step-indicator",children:[Object(b.jsx)("button",{className:"page__goback-button",onClick:n.goBack}),Object(b.jsxs)("span",{className:"text--blue",children:["Paso ",t]})," de 7"]})};var D=function(){var e=Object(d.c)((function(e){return e.personalInfo.meta})),t=Object(o.f)(),n=Object(a.useCallback)((function(e){t.push(e)}),[t]);return Object(a.useLayoutEffect)((function(){e.done||n("/")}),[e.done,n]),Object(b.jsxs)("div",{children:[Object(b.jsx)(S,{currentStep:1}),Object(b.jsxs)("form",{action:"#",className:"form",children:[Object(b.jsx)(O,{input:Object(b.jsx)(h,{placeholder:"Nro. de Documento",name:"documentNumber"}),prepend:Object(b.jsx)(f,{isPrepend:!0,options:w,name:"documentType"})}),Object(b.jsx)(O,{input:Object(b.jsx)(h,{placeholder:"Nombres",name:"firstName"})}),Object(b.jsx)(O,{input:Object(b.jsx)(h,{placeholder:"Apellido Paterno",name:"lastNamePat"})}),Object(b.jsx)(O,{input:Object(b.jsx)(h,{placeholder:"Apellido Materno",name:"lastNameMat"})}),Object(b.jsx)(O,{input:Object(b.jsx)(m,{placeholder:"Fecha de Nacimiento",name:"lastNameMat"})}),Object(b.jsx)("button",{type:"submit",children:"Enviar"})]})]})};function T(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"About"})})}function E(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Dashboard"})})}var F=function(){return Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",children:Object(b.jsx)(I,{})}),Object(b.jsx)(o.a,{path:"/datos-personales",children:Object(b.jsx)(D,{})}),Object(b.jsx)(o.a,{path:"/elige-seguro",children:Object(b.jsx)(T,{})}),Object(b.jsx)(o.a,{path:"/gracias",children:Object(b.jsx)(E,{})})]})};var M=function(){var e=Object(o.g)(),t=c.a.useState("layout"),n=Object(i.a)(t,2),a=n[0],r=n[1];return c.a.useEffect((function(){switch(e.pathname){case"/":r("layout layout--home-page");break;case"/gracias":r("layout layout--thankyou-page");break;default:r("layout layout--insurance-form-page")}}),[e]),Object(b.jsxs)("div",{className:a,children:[Object(b.jsx)("div",{className:"layout__sidebar",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{to:"/datos-personales",children:"Datos personales"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{to:"/elige-seguro",children:"Elige tu seguro"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{to:"/gracias",children:"Gracias"})})]})}),Object(b.jsx)("div",{className:"layout__content",children:Object(b.jsx)("div",{className:"container page",children:Object(b.jsx)(F,{})})})]})};var R=function(){return Object(b.jsx)(l.a,{children:Object(b.jsx)(M,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},B=Object(N.a)({reducer:{personalInfo:C}});s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d.a,{store:B,children:Object(b.jsx)(R,{})})}),document.getElementById("root")),A()}},[[69,1,2]]]);
//# sourceMappingURL=main.66aa4519.chunk.js.map