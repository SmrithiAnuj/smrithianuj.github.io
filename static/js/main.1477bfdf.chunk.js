(this["webpackJsonpsmrithianuj.github.io"]=this["webpackJsonpsmrithianuj.github.io"]||[]).push([[0],{25:function(e,t,i){},29:function(e,t,i){},30:function(e,t,i){},32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){},38:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){},42:function(e,t,i){"use strict";i.r(t);var a=i(7),n=i(1),s=i(0);const c=Object(n.createContext)(),l=e=>{let{children:t}=e;const[i,a]=Object(n.useState)("light");Object(n.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");a(e.matches?"dark":"light"),e.addEventListener("change",(e=>{a(e.matches?"dark":"light")}))}),[]);return Object(s.jsx)(c.Provider,{value:[{themeName:i,toggleTheme:()=>{const e="dark"===i?"light":"dark";localStorage.setItem("themeName",e),a(e)}}],children:t})},r={homepage:"https://www.linkedin.com/in/smrithi-ekkadu-anuj-kumar/",title:"SAK."},o={name:"Smrithi Anuj Kumar",role:"Experienced Data Analyst",description:"Experienced Data Analyst with over 5 years of expertise in scalable software development, data engineering, and process optimization. Skilled in Python, SQL, and cloud technologies, delivering impactful, data-driven solutions.",resume:"",social:{linkedin:"https://www.linkedin.com/in/smrithi-ekkadu-anuj-kumar/",github:"https://github.com/SmrithiAnuj/"},profilePicture:"profile.jpeg"},d=[{name:"Risk Analysis Dashboard",description:"Developed Tableau dashboards to monitor compliance and mitigate risks, reducing issue resolution times by 25%.",stack:["Tableau","Data Visualization","Risk Management"],sourceCode:"",livePreview:""},{name:"AWS Cloud Migration",description:"Migrated data infrastructure to AWS, improving scalability and data reliability for risk management applications.",stack:["AWS","Data Engineering","SQL"],sourceCode:"",livePreview:""},{name:"End-to-End ETL Pipeline",description:"Built a Python-based ETL pipeline integrated with Snowflake and Tableau to process stock market data and visualize insights, enabling data-driven trading strategies.",stack:["Python","ETL","Snowflake","Tableau"],sourceCode:"",livePreview:""},{name:"Cost Transparency Dashboard",description:"Created Tableau dashboards to track and analyze infrastructure costs, leading to a 20% reduction in expenditures.",stack:["Tableau","Data Visualization","Cost Analysis"],sourceCode:"",livePreview:""},{name:"KPI Dashboards",description:"Designed Power BI dashboards for real-time analytics, enabling faster decision-making.",stack:["Power BI","SQL","Python"],sourceCode:"",livePreview:""},{name:"Trading Insights with Machine Learning",description:"Developed predictive models to analyze market patterns, enhancing decision efficiency.",stack:["Machine Learning","Python","AWS"],sourceCode:"",livePreview:""}],j=[{name:"AI Agents in LangChain",description:"https://learn.deeplearning.ai/accomplishments/4d68960e-8094-4ddc-9348-1bb370c06fe8?usp=sharing"},{name:"AWS Cloud Practitioner",description:"https://www.credly.com/badges/513bc7b0-d830-4d67-a925-75c783ab83db/linked_in_profile"},{name:"Databricks Gen AI Fundamentals",description:"https://credentials.databricks.com/fd5f6b2c-c724-4168-a6bd-944cc92e8a85#acc.45PQmLiC"},{name:"Promp Design in Vertex AI",description:"https://www.credly.com/badges/0cfff0b8-4dc1-46ed-b4d4-d725865374e5/linked_in_profile"}],b=["Python","Java","React","SQL","MongoDB","Elasticsearch","Power BI","Tableau","Excel","ETL Pipelines","Data Modelling","Database Optimization","AWS Cloud","Snowflake","Responsive Web Development","Redux","Angular","Git","JIRA","Figma","Visio"],h="smrithianuj3113@gmail.com";var m=i(12),u=i.n(m),p=i(10),x=i.n(p),O=i(14),g=i.n(O),k=i(13),v=i.n(k);i(25);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(n.useContext)(c),[i,a]=Object(n.useState)(!1),l=()=>a(!i);return Object(s.jsxs)("nav",{className:"center nav",children:[Object(s.jsxs)("ul",{style:{display:i?"flex":null},className:"nav__list",children:[d.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,b.length?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,h?Object(s.jsx)("li",{className:"nav__list-item",children:Object(s.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(s.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(s.jsx)(x.a,{}):Object(s.jsx)(u.a,{})}),Object(s.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:i?Object(s.jsx)(v.a,{}):Object(s.jsx)(g.a,{})})]})};i(29);var _=()=>{const{homepage:e,title:t}=r;return Object(s.jsxs)("header",{className:"header center",children:[Object(s.jsx)("h3",{children:e?Object(s.jsx)("a",{href:e,className:"link",children:t}):t}),Object(s.jsx)(f,{})]})},N=i(8),w=i.n(N),C=i(15),y=i.n(C),P=(i(30),i.p+"static/media/profile.8e2005f4.jpeg");var S=()=>{const{name:e,role:t,description:i,resume:a,social:n}=o;return Object(s.jsxs)("div",{className:"about center",children:[P&&Object(s.jsx)("div",{className:"about__profile-picture",children:Object(s.jsx)("img",{src:P,alt:"".concat(e,"'s profile")})}),e&&Object(s.jsxs)("h1",{children:["Hi, I am ",Object(s.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(s.jsxs)("h2",{className:"about__role",children:["An ",t,"."]}),Object(s.jsx)("p",{className:"about__desc",children:i&&i}),Object(s.jsxs)("div",{className:"about__contact center",children:[a&&Object(s.jsx)("a",{href:a,children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),n&&Object(s.jsxs)(s.Fragment,{children:[n.github&&Object(s.jsx)("a",{href:n.github,"aria-label":"github",className:"link link--icon",children:Object(s.jsx)(w.a,{})}),n.linkedin&&Object(s.jsx)("a",{href:n.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(s.jsx)(y.a,{})})]})]})]})},A=i(6),E=i.n(A),D=i(16),L=i.n(D);i(32);var T=e=>{let{project:t,isCert:i=!1}=e;return Object(s.jsxs)("div",{className:"project",children:[Object(s.jsx)("h3",{children:t.name}),i?Object(s.jsx)("button",{className:"btn-cert btn-cert--outline",children:Object(s.jsx)("a",{href:t.description,className:"btn__link",children:"Credentials"})}):Object(s.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(s.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(s.jsx)("li",{className:"project__stack-item",children:e},E()())))}),t.sourceCode&&Object(s.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(s.jsx)(w.a,{})}),t.livePreview&&Object(s.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(s.jsx)(L.a,{})})]})};i(33);var I=()=>d.length?Object(s.jsxs)("section",{id:"projects",className:"section projects",children:[Object(s.jsx)("h2",{className:"section__title",children:"Projects"}),Object(s.jsx)("div",{className:"projects__grid",children:d.map((e=>Object(s.jsx)(T,{project:e},E()())))})]}):null;i(34);var z=()=>b.length?Object(s.jsxs)("section",{className:"section skills",id:"skills",children:[Object(s.jsx)("h2",{className:"section__title",children:"Skills"}),Object(s.jsx)("ul",{className:"skills__list",children:b.map((e=>Object(s.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},E()())))})]}):null,M=i(17),B=i.n(M);i(35);var R=()=>{const[e,t]=Object(n.useState)(!1);return Object(n.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(s.jsx)("div",{className:"scroll-top",children:Object(s.jsx)("a",{href:"#top","aria-label":"top",children:Object(s.jsx)(B.a,{fontSize:"large"})})}):null};i(36);var W=()=>h?Object(s.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(s.jsx)("h2",{className:"section__title",children:"Contact"}),Object(s.jsx)("a",{href:"mailto:".concat(h),children:Object(s.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;i(37);var Q=()=>Object(s.jsx)("footer",{className:"footer",children:Object(s.jsx)("a",{href:"https://github.com/SmrithiAnuj/smrithianuj.github.io",className:"link footer__link",children:"Created with love By Smrithi Anuj"})});i(38),i(39);var J=()=>j.length?Object(s.jsxs)("section",{id:"certs",className:"section certs",children:[Object(s.jsx)("h2",{className:"section__title",children:"Certs"}),Object(s.jsx)("div",{className:"certs__grid",children:j.map((e=>Object(s.jsx)(T,{project:e,isCert:!0},E()())))})]}):null;var V=()=>{const[{themeName:e}]=Object(n.useContext)(c);return Object(s.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(s.jsx)(_,{}),Object(s.jsxs)("main",{children:[Object(s.jsx)(S,{}),Object(s.jsx)(I,{}),Object(s.jsx)(J,{}),Object(s.jsx)(z,{}),Object(s.jsx)(W,{})]}),Object(s.jsx)(R,{}),Object(s.jsx)(Q,{})]})};i(40);Object(a.render)(Object(s.jsx)(l,{children:Object(s.jsx)(V,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1477bfdf.chunk.js.map