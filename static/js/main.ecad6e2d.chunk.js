(this.webpackJsonpipm=this.webpackJsonpipm||[]).push([[0],{69:function(e,t,i){},75:function(e,t,i){},79:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i.n(s),a=i(16),c=i.n(a),l=(i(68),i(69),i(89)),r=i(86),m=i(88),d=i(84),j=i(1),o=function(e){return Object(j.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(j.jsx)(d.a,{id:"image",src:e.image,roundedCircle:!0,className:"mb-3"}),Object(j.jsx)("h3",{id:"name",children:e.name}),Object(j.jsx)("h5",{id:"number",children:e.number})]})},u=i(9),b=i(85),h=i(87),x=i(60),g=function(e){var t=Object(s.useState)(!1),i=Object(u.a)(t,2),n=i[0],a=i[1],c=Object(s.useState)(""),l=Object(u.a)(c,2),r=l[0],m=l[1],o=function(){return a(!0)};return Object(s.useEffect)((function(){fetch(e.assignment.content).then((function(e){return e.text()})).then((function(e){m(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"pt-3 pb-3 d-none d-lg-flex flex-row align-items-center justify-content-between",children:[e.id%2?Object(j.jsx)(d.a,{id:"image",src:e.assignment.image,style:{height:"350px",width:"650px"}}):"",Object(j.jsxs)("div",{id:"info",className:"d-inline-flex flex-column justify-content-center ".concat(e.id%2?"align-items-end ms-3 text-end":"align-items-start me-3 text-start"),children:[Object(j.jsx)("h3",{children:e.assignment.title}),Object(j.jsx)("div",{id:"resume",className:"".concat(e.id%2?"text-right":"text-left"),children:e.assignment.resume}),Object(j.jsx)(b.a,{variant:"outline-primary",className:"mt-3 align-self-center",onClick:o,children:"See More"})]}),e.id%2?"":Object(j.jsx)(d.a,{id:"image",src:e.assignment.image,style:{height:"350px",width:"650px"}})]}),Object(j.jsxs)("div",{className:"mb-5 mt-3 d-lg-none flex-column align-items-center",children:[Object(j.jsx)(d.a,{id:"image",src:e.assignment.image,style:{width:"90vw"}}),Object(j.jsxs)("div",{id:"info",className:"d-inline-flex flex-column justify-content-center align-items-start text-start",children:[Object(j.jsx)("h3",{children:e.assignment.title}),Object(j.jsx)("div",{id:"resume",className:"text-left",children:e.assignment.resume}),Object(j.jsx)(b.a,{variant:"outline-primary",className:"mt-3 align-self-center",onClick:o,children:"See More"})]})]}),Object(j.jsxs)(h.a,{show:n,onHide:function(){return a(!1)},size:"xl","aria-labelledby":"contained-modal-title-vcenter",centered:!0,scrollable:!0,children:[Object(j.jsx)(h.a.Header,{closeButton:!0,children:Object(j.jsx)(h.a.Title,{children:e.assignment.title})}),Object(j.jsx)(h.a.Body,{children:Object(j.jsx)(x.a,{children:r})})]})]})},f=(i(75),i.p+"static/media/arvana.2b7a00db.jpeg"),O=i.p+"static/media/ines.90410569.jpeg",p=i.p+"static/media/felix.2e4b3906.jpeg",v=i.p+"static/media/content.1f9b0610.md",N={title:"Test",resume:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae metus nec tortor ultricies pulvinar nec id enim. Ut urna nunc, semper nec dui rutrum, blandit ornare massa. Nam egestas libero ut tellus eleifend, id scelerisque ipsum porta. Donec vitae velit risus. Pellentesque pretium, augue a porttitor finibus, felis ex ornare odio, eu molestie tellus risus in nulla. Nulla fermentum lacus vitae nunc condimentum ornare. Nullam interdum sodales mi, et gravida nisi. Nunc vitae nisi ac nisi dapibus convallis. Phasellus a rhoncus neque. Nulla facilisi. Phasellus malesuada, justo ut tristique mollis, elit magna faucibus quam, ut congue justo erat ut diam. Nunc molestie quis tortor a egestas. Pellentesque ac est mauris. Sed id ullamcorper eros.",image:i.p+"static/media/image.158229f3.jpg",content:v},y=[N,N,N];var w=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{id:"home",children:[Object(j.jsx)(l.a,{expand:"lg",variant:"dark",children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(l.a.Brand,{href:"#home",children:"Group 18"}),Object(j.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(l.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(j.jsxs)(m.a,{className:"ml-auto",children:[Object(j.jsx)(m.a.Link,{href:"#home",children:"Home"}),Object(j.jsx)(m.a.Link,{href:"#assignments",children:"Assignments"}),Object(j.jsx)(m.a.Link,{href:"#team",children:"The Team"})]})})]})}),Object(j.jsxs)("div",{id:"hero",className:"d-flex flex-column justify-content-center align-items-center",children:[Object(j.jsx)("h1",{children:"Welcome to Group 18's Page"}),Object(j.jsx)("h2",{children:"IPM 21/22"})]})]}),Object(j.jsxs)("div",{id:"assignments",className:"p-4",children:[Object(j.jsx)("h1",{children:"Assignments"}),Object(j.jsx)("div",{className:"d-flex flex-wrap flex-column align-items-center",children:y.map((function(e,t){return Object(j.jsx)(g,{id:t,assignment:e},t)}))})]}),Object(j.jsxs)("div",{id:"team",className:"p-4",children:[Object(j.jsx)("h1",{children:"The Team"}),Object(j.jsxs)("div",{className:"d-flex flex-wrap flex-row justify-content-around pt-4 pb-4",children:[Object(j.jsx)(o,{image:O,name:"In\xeas Sim\xf5es",number:"55584"}),Object(j.jsx)(o,{image:f,name:"Jo\xe3o Arvana",number:"54982"}),Object(j.jsx)(o,{image:p,name:"Rodrigo F\xe9lix",number:"55268"})]})]}),Object(j.jsxs)("div",{id:"footer",className:"p-4",children:[Object(j.jsx)("h1",{children:"Group 18's Page"}),Object(j.jsx)("h2",{children:"IPM 21/22"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("a",{href:"#home",children:"Home"})," | ",Object(j.jsx)("a",{href:"#assignments",children:"Assignments"})," | ",Object(j.jsx)("a",{href:"#team",children:"The Team"})]})]})]})};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.ecad6e2d.chunk.js.map