(this.webpackJsonpclase45=this.webpackJsonpclase45||[]).push([[0],{16:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(5),r=a.n(n),i=a(2),d=a(0);function o(e){return Object(d.jsx)("nav",{className:"navbar navbar-dark bg-dark mb-2",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"https://giphy.com/",children:"GIPHY APP"}),Object(d.jsx)("button",{className:"btn btn-success",onClick:e.setLoading,children:"Cargar random"})]})})}function l(e){var t=e.image_url,a=e.title,c=e.imageLoaded;return Object(d.jsx)("div",{className:"col-md-3",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{className:"card-img-top",src:t,alt:"",onLoad:c}),Object(d.jsx)("div",{className:"card-body",children:Object(d.jsx)("h4",{className:"card-text",children:a})})]})})}var j=a(17);var m=function(e){var t=e.images,a=e.loadingImages,s=e.setLoadingImages,n=Object(c.useRef)(0),r=function(){n.current+=1,n.current>=Number("16")-1&&(s(!1),n.current=0)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"d-flex justify-content-center"+(a?"":" d-none"),children:Object(d.jsx)(j.a,{animation:"border",className:" mt-2",variant:"success"})}),Object(d.jsx)("div",{className:"row row-cols-1 row-cols-sm-2 m-4 "+(a?" d-none":""),children:t.map((function(e){return Object(d.jsx)(l,{image_url:e.images.downsized.url,title:e.title,imageLoaded:r},e.id)}))})]})};a(15);var b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(!0),r=Object(i.a)(n,2),l=r[0],b=r[1],u=Object(c.useState)(!0),h=Object(i.a)(u,2),O=h[0],g=h[1],x=Object(c.useState)(!1),f=Object(i.a)(x,2),v=f[0],p=f[1];return Object(c.useEffect)((function(){var e,t,a=Number("16"),c=(e=0,t=1e3/a,(Math.floor(Math.random()*(t-e))+e)*a);l&&fetch("https://api.giphy.com/v1/gifs/trending?limit=16&api_key=QPnQAwxHeqZPvWQfAqbG9j4jmZM5rdei&offset="+c).then((function(e){return e.json()})).then((function(e){s(e.data),p(!1),b(!1)})).catch((function(e){console.log(e),p(!0)}))}),[l]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(o,{setLoading:function(){b(!0),g(!0)}}),Object(d.jsx)("div",{className:"d-flex justify-content-center"+(l?"":" d-none"),children:Object(d.jsx)(j.a,{animation:"border",className:" mt-2",variant:"success"})}),v?Object(d.jsxs)("div",{className:"alert alert-danger m-5",children:["Ha ocurrido un error. Probablemente haya excedido el n\xfamero m\xe1ximo de peticiones diarias que ofrece la versi\xf3n gratuita de ",Object(d.jsx)("a",{href:"https://developers.giphy.com/docs/api#quick-start-guide",children:"GIPHY API"}),". Solo se permite un m\xe1ximo de 1000 peticiones al d\xeda."]}):null,Object(d.jsx)("div",{className:l?" d-none":"",children:Object(d.jsx)(m,{loadingImages:O,setLoadingImages:g,images:a})})]})};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0e7523fb.chunk.js.map