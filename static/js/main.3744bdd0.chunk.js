(this["webpackJsonplandingpage-react-template"]=this["webpackJsonplandingpage-react-template"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(6),i=t.n(l),c=(t(13),t(1)),o=t(2),s=t(3),m=t(4),d=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{id:"menu",className:"navbar navbar-default navbar-fixed-top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#bs-example-navbar-collapse-1"}," ",r.a.createElement("span",{className:"sr-only"},"Toggle navigation")," ",r.a.createElement("span",{className:"icon-bar"})," ",r.a.createElement("span",{className:"icon-bar"})," ",r.a.createElement("span",{className:"icon-bar"})," "),r.a.createElement("a",{className:"navbar-brand page-scroll",href:"#page-top"},"LATECHCOM")," "),r.a.createElement("div",{className:"collapse navbar-collapse",id:"bs-example-navbar-collapse-1"},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",null,r.a.createElement("a",{href:"#features",className:"page-scroll"},"Programs")),r.a.createElement("li",null,r.a.createElement("a",{href:"#about",className:"page-scroll"},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#testimonials",className:"page-scroll"},"Testimonials")),r.a.createElement("li",null,r.a.createElement("a",{href:"#contact",className:"page-scroll"},"Register"))))))}}]),t}(n.Component),p=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"intro"},r.a.createElement("div",{className:"overlay"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 col-md-offset-2 intro-text"},r.a.createElement("h1",null,this.props.data?this.props.data.title:"Loading",r.a.createElement("span",null)),r.a.createElement("p",null,this.props.data?this.props.data.paragraph:"Loading"),r.a.createElement("a",{href:"#features",className:"btn btn-custom btn-lg page-scroll"},"Learn More")," "))))))}}]),t}(n.Component),u=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"features",className:"text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-md-10 col-md-offset-1 section-title"},r.a.createElement("h2",null,"Programs")),r.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return r.a.createElement("div",{key:"".concat(e.title,"-").concat(a),className:"col-xs-6 col-md-3"}," ",r.a.createElement("i",{className:e.icon}),r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.text))})):"Loading...")))}}]),t}(n.Component),g=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"about"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-6"}," ",r.a.createElement("img",{src:"img/about.jpg",className:"img-responsive",alt:""})," "),r.a.createElement("div",{className:"col-xs-12 col-md-6"},r.a.createElement("div",{className:"about-text"},r.a.createElement("h2",null,"About Us"),r.a.createElement("p",null,this.props.data?this.props.data.paragraph:"loading..."))))))}}]),t}(n.Component),h=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"testimonials"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"section-title text-center"},r.a.createElement("h2",null,"What our members say")),r.a.createElement("div",{className:"row"},this.props.data?this.props.data.map((function(e,a){return r.a.createElement("div",{key:"".concat(e.name,"-").concat(a),className:"col-md-4"},r.a.createElement("div",{className:"testimonial"},r.a.createElement("div",{className:"testimonial-image"}," ",r.a.createElement("img",{src:e.img,alt:""})," "),r.a.createElement("div",{className:"testimonial-content"},r.a.createElement("p",null,'"',e.text,'"'),r.a.createElement("div",{className:"testimonial-meta"}," - ",e.name," "))))})):"loading")))}}]),t}(n.Component),E=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"contact"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"Register"),r.a.createElement("p",null,"Please fill out the form below to register with us.")),r.a.createElement("form",{name:"sentMessage",id:"contactForm",noValidate:!0},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",id:"email",className:"form-control",placeholder:"Email",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"}))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",id:"name",className:"form-control",placeholder:"Name",required:"required"}),r.a.createElement("p",{className:"help-block text-danger"})))),r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{name:"message",id:"message",className:"form-control",rows:"4",placeholder:"Message",required:!0}),r.a.createElement("p",{className:"help-block text-danger"})),r.a.createElement("div",{id:"success"}),r.a.createElement("button",{type:"submit",className:"btn btn-custom btn-lg"},"Send Message")))),r.a.createElement("div",{className:"col-md-3 col-md-offset-1 contact-info"},r.a.createElement("div",{className:"contact-item"},r.a.createElement("h3",null,"Contact Info"),r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-map-marker"})," Address"),this.props.data?this.props.data.address:"loading")),r.a.createElement("div",{className:"contact-item"},r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-phone"})," Phone")," ",this.props.data?this.props.data.phone:"loading")),r.a.createElement("div",{className:"contact-item"},r.a.createElement("p",null,r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-envelope-o"})," Email")," ",this.props.data?this.props.data.email:"loading"))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"social"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:this.props.data?this.props.data.instagram:"/"},r.a.createElement("i",{className:"fa fa-instagram"}))),r.a.createElement("li",null,r.a.createElement("a",{href:this.props.data?this.props.data.twitter:"/"},r.a.createElement("i",{className:"fa fa-twitter"}))),r.a.createElement("li",null,r.a.createElement("a",{href:this.props.data?this.props.data.linkedin:"/"},r.a.createElement("i",{className:"fa fa-linkedin"}))))))))),r.a.createElement("div",{id:"footer"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("p",null,"\xa9 2020 Latechcom"))))}}]),t}(n.Component),f=t(7),b=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={landingPageData:{}},e}return Object(o.a)(t,[{key:"getlandingPageData",value:function(){this.setState({landingPageData:f})}},{key:"componentDidMount",value:function(){this.getlandingPageData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(p,{data:this.state.landingPageData.Header}),r.a.createElement(u,{data:this.state.landingPageData.Features}),r.a.createElement(g,{data:this.state.landingPageData.About}),r.a.createElement(h,{data:this.state.landingPageData.Testimonials}),r.a.createElement(E,{data:this.state.landingPageData.Contact}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e){e.exports=JSON.parse('{"Header":{"title":"We are Latechcom","paragraph":"It doesn\'t matter what your experience level is. We aim to learn everyday and we are a good community to aid you in your journey"},"About":{"paragraph":"We are a community of developers who have come together to provide free mentorship, guidance and learning resources for new developers. We know how hard it is changing careers and the difficulties involved trying to navigate the tech ecosystem. There are a variety of things to learn all at once and we know how overwhelming it can get for a complete beginner. \\n\\n Latechcom simply means \'The tech community\'. Developers in the community are volunteers. \\nAre you just starting your tech journey, feeling lost or you\'re still trying to figure out what the buzz about tech is? You are not alone. Register now to get the necessary help you need and connect with others in the tech space"},"Services":[{"icon":"fa fa-wordpress","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cart-arrow-down","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-cloud-download","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-language","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-plane","name":"Lorem ipsum dolor","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."},{"icon":"fa fa-pie-chart","name":"Consectetur adipiscing","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."}],"Testimonials":[{"img":"img/testimonials/01.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"},{"img":"img/testimonials/02.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"Johnathan Doe"},{"img":"img/testimonials/03.jpg","text":"\\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.\\"","name":"John Doe"}],"Team":[{"img":"img/team/01.jpg","name":"John Doe","job":"Director"},{"img":"img/team/02.jpg","name":"Mike Doe","job":"Senior Designer"},{"img":"img/team/03.jpg","name":"Jane Doe","job":"Senior Designer"},{"img":"img/team/04.jpg","name":"Karen Doe","job":"Project Manager"}],"Contact":{"address":"Port harcourt, Rivers State ","phone":"+1 123 456 1234","email":"latechcom.help@gmail.com","instagram":"fb.com","twitter":"twitter.com","linkedin":"youtube.com"},"Features":[{"icon":"fa fa-laptop","title":"Web Development","text":"Learn the basics of web development. Learn how to create beautiful and responsive websites right from your home."},{"icon":"fa fa-adn","title":"App Development","text":"Learn how to develop mobile applications online with free mentorship from expert developers."},{"icon":"fa fa-paint-brush","title":"Product Design","text":"Learn how to create aesthetically pleasing products free with mentors at Latechcom."},{"icon":"fa fa-bullhorn","title":"Social Media Marketing","text":"This is a fast growing field and we aim to provide the necessary guidance and mentorship for those who are interested in this field."}]}')},8:function(e,a,t){e.exports=t(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.3744bdd0.chunk.js.map