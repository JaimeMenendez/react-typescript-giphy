(this.webpackJsonpclase45=this.webpackJsonpclase45||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),r=c.n(s),i=c(2),o=c(0);function d(e){return Object(o.jsx)("nav",{className:"navbar navbar-dark bg-dark mb-2",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"https://giphy.com/",children:"GIPHY APP"}),Object(o.jsx)("button",{className:"btn btn-success",onClick:function(){return e.setLoading(!0)},children:"Cargar random"})]})})}function j(e){var t=e.image_url,c=e.title,n=e.imageLoaded;return Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("img",{className:"card-img-top",src:t,alt:"",onLoad:n}),Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("h4",{className:"card-text",children:c})})]})})}var l=c(17);function b(e){var t=e.imagenes,c=Object(n.useState)(!0),a=Object(i.a)(c,2),s=a[0],r=a[1],d=Object(n.useRef)(0),b=function(){d.current+=1,console.log(d.current),d.current>=Number("16")&&(r(!1),d.current=0)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"d-flex justify-content-center"+(s?"":" d-none"),children:Object(o.jsx)(l.a,{animation:"border",className:" mt-2",variant:"success"})}),Object(o.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 m-4 "+(s?" d-none":""),children:t.map((function(e){return Object(o.jsx)(j,{image_url:e.images.downsized.url,title:e.title,imageLoaded:b},e.id)}))})]})}c(15);var m=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(i.a)(s,2),j=r[0],m=r[1];return Object(n.useEffect)((function(){var e,t,c=Number("16"),n=(e=0,t=5e3/c,(Math.floor(Math.random()*(t-e))+e)*c);j&&fetch("https://api.giphy.com/v1/gifs/trending?limit=16&api_key=QPnQAwxHeqZPvWQfAqbG9j4jmZM5rdei&offset="+n).then((function(e){return e.json()})).then((function(e){m(!1),a(e.data)})).catch((function(e){console.log(e),m(!1)}))}),[j]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{setLoading:m}),j?Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)(l.a,{animation:"border",className:" mt-2",variant:"success"})}):Object(o.jsx)(b,{imagenes:c})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7b9f6e9a.chunk.js.map