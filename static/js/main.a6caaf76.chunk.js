(this["webpackJsonpsmrithianuj.github.io"]=this["webpackJsonpsmrithianuj.github.io"]||[]).push([[0],{25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c(1),n=c(0);const a=Object(s.createContext)(),l=e=>{let{children:t}=e;const[c,i]=Object(s.useState)("light");Object(s.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");i(e.matches?"dark":"light"),e.addEventListener("change",(e=>{i(e.matches?"dark":"light")}))}),[]);return Object(n.jsx)(a.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),i(e)}}],children:t})},r={homepage:"https://linkedin.com/in/smrithi-ekkadu",title:"SAK."},o={name:"Smrithi Anuj Kumar",role:"Experienced Data Analyst",description:"Experienced Data Analyst with over 5 years of expertise in scalable software development, data engineering, and process optimization. Skilled in Python, SQL, and cloud technologies, delivering impactful, data-driven solutions.",resume:"",social:{linkedin:"https://linkedin.com/in/smrithi-ekkadu",github:""},profilePicture:"profile.jpeg"},j=[{name:"KPI Dashboards",description:"Designed Power BI dashboards for real-time analytics, enabling faster decision-making.",stack:["Power BI","SQL","Python"],sourceCode:"",livePreview:""},{name:"AWS Cloud Migration",description:"Migrated data infrastructure to AWS, improving scalability and reducing processing times by 20%.",stack:["AWS","Data Engineering","SQL"],sourceCode:"",livePreview:""},{name:"Trading Insights with Machine Learning",description:"Developed predictive models to analyse market patterns, enhancing decision efficiency.",stack:["Machine Learning","Python","AWS"],sourceCode:"",livePreview:""}],d=[{name:"AI Agents in LangChain",description:"https://learn.deeplearning.ai/accomplishments/4d68960e-8094-4ddc-9348-1bb370c06fe8?usp=sharing"},{name:"AWS Cloud Practitioner",description:"https://www.credly.com/badges/513bc7b0-d830-4d67-a925-75c783ab83db/linked_in_profile"},{name:"Databricks Gen AI Fundamentals",description:"https://credentials.databricks.com/fd5f6b2c-c724-4168-a6bd-944cc92e8a85#acc.45PQmLiC"},{name:"Promp Design in Vertex AI",description:"https://www.credly.com/badges/0cfff0b8-4dc1-46ed-b4d4-d725865374e5/linked_in_profile"}],b=["Python","Java","React","SQL","MongoDB","Elasticsearch","Power BI","Tableau","Excel","ETL Pipelines","Data Modelling","Database Optimization","AWS Cloud","Snowflake","Responsive Web Development","Redux","Angular","Git","JIRA","Figma","Visio"],h="smrithianuj3113@gmail.com";var m=c(12),u=c.n(m),p=c(10),O=c.n(p),x=c(14),g=c.n(x),k=c(13),v=c.n(k);c(25);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(s.useContext)(a),[c,i]=Object(s.useState)(!1),l=()=>i(!c);return Object(n.jsxs)("nav",{className:"center nav",children:[Object(n.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[j.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,b.length?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,h?Object(n.jsx)("li",{className:"nav__list-item",children:Object(n.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(n.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(n.jsx)(O.a,{}):Object(n.jsx)(u.a,{})}),Object(n.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(n.jsx)(v.a,{}):Object(n.jsx)(g.a,{})})]})};c(29);var _=()=>{const{homepage:e,title:t}=r;return Object(n.jsxs)("header",{className:"header center",children:[Object(n.jsx)("h3",{children:e?Object(n.jsx)("a",{href:e,className:"link",children:t}):t}),Object(n.jsx)(f,{})]})},N=c(8),w=c.n(N),C=c(15),S=c.n(C),y=(c(30),c.p+"static/media/profile.8e2005f4.jpeg");var P=()=>{const{name:e,role:t,description:c,resume:i,social:s}=o;return Object(n.jsxs)("div",{className:"about center",children:[y&&Object(n.jsx)("div",{className:"about__profile-picture",children:Object(n.jsx)("img",{src:y,alt:"".concat(e,"'s profile")})}),e&&Object(n.jsxs)("h1",{children:["Hi, I am ",Object(n.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(n.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(n.jsx)("p",{className:"about__desc",children:c&&c}),Object(n.jsxs)("div",{className:"about__contact center",children:[i&&Object(n.jsx)("a",{href:i,children:Object(n.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(n.jsxs)(n.Fragment,{children:[s.github&&Object(n.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(n.jsx)(w.a,{})}),s.linkedin&&Object(n.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(n.jsx)(S.a,{})})]})]})]})},A=c(6),E=c.n(A),D=c(16),I=c.n(D);c(32);var L=e=>{let{project:t,isCert:c=!1}=e;return Object(n.jsxs)("div",{className:"project",children:[Object(n.jsx)("h3",{children:t.name}),c?Object(n.jsx)("button",{className:"btn-cert btn-cert--outline",children:Object(n.jsx)("a",{href:t.description,className:"btn__link",children:"Credentials"})}):Object(n.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(n.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(n.jsx)("li",{className:"project__stack-item",children:e},E()())))}),t.sourceCode&&Object(n.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(n.jsx)(w.a,{})}),t.livePreview&&Object(n.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(n.jsx)(I.a,{})})]})};c(33);var M=()=>j.length?Object(n.jsxs)("section",{id:"projects",className:"section projects",children:[Object(n.jsx)("h2",{className:"section__title",children:"Projects"}),Object(n.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(n.jsx)(L,{project:e},E()())))})]}):null;c(34);var W=()=>b.length?Object(n.jsxs)("section",{className:"section skills",id:"skills",children:[Object(n.jsx)("h2",{className:"section__title",children:"Skills"}),Object(n.jsx)("ul",{className:"skills__list",children:b.map((e=>Object(n.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())))})]}):null,B=c(17),Q=c.n(B);c(35);var R=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(n.jsx)("div",{className:"scroll-top",children:Object(n.jsx)("a",{href:"#top","aria-label":"top",children:Object(n.jsx)(Q.a,{fontSize:"large"})})}):null};c(36);var T=()=>h?Object(n.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(n.jsx)("h2",{className:"section__title",children:"Contact"}),Object(n.jsx)("a",{href:"mailto:".concat(h),children:Object(n.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;c(37);var J=()=>Object(n.jsx)("footer",{className:"footer",children:Object(n.jsx)("a",{href:"https://github.com/SmrithiAnuj/smrithianuj.github.io",className:"link footer__link",children:"Created with love By Smrithi Anuj"})});c(38),c(39);var z=()=>d.length?Object(n.jsxs)("section",{id:"certs",className:"section certs",children:[Object(n.jsx)("h2",{className:"section__title",children:"Certs"}),Object(n.jsx)("div",{className:"certs__grid",children:d.map((e=>Object(n.jsx)(L,{project:e,isCert:!0},E()())))})]}):null;var F=()=>{const[{themeName:e}]=Object(s.useContext)(a);return Object(n.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(n.jsx)(_,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(P,{}),Object(n.jsx)(M,{}),Object(n.jsx)(z,{}),Object(n.jsx)(W,{}),Object(n.jsx)(T,{})]}),Object(n.jsx)(R,{}),Object(n.jsx)(J,{})]})};c(40);Object(i.render)(Object(n.jsx)(l,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.a6caaf76.chunk.js.map