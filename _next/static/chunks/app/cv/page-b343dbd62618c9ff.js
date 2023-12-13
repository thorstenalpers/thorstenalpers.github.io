(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[349],{6654:function(e,t,n){Promise.resolve().then(n.bind(n,1753))},1753:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var a=n(7437),r=n(2265),o=n(5269),i=n(6507),l=n(1404),s=n(3428),d=n(791),c=n(7042),p=n(5600),u=n(5702),m=n(8051),v=n(9190),f=n(6223),g=n(5270),h=n(3381),b=n(4775);let w=(e,t)=>e.filter(e=>t.includes(e)),x=(e,t,n)=>{let a=e.keys[0];Array.isArray(t)?t.forEach((t,a)=>{n((t,n)=>{a<=e.keys.length-1&&(0===a?Object.assign(t,n):t[e.up(e.keys[a])]=n)},t)}):t&&"object"==typeof t?(Object.keys(t).length>e.keys.length?e.keys:w(e.keys,Object.keys(t))).forEach(r=>{if(-1!==e.keys.indexOf(r)){let o=t[r];void 0!==o&&n((t,n)=>{a===r?Object.assign(t,n):t[e.up(r)]=n},o)}}):("number"==typeof t||"string"==typeof t)&&n((e,t)=>{Object.assign(e,t)},t)};function y(e){return e?`Level${e}`:""}function S(e){return e.unstable_level>0&&e.container}function C(e){return function(t){return`var(--Grid-${t}Spacing${y(e.unstable_level)})`}}function k(e){return function(t){return 0===e.unstable_level?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${y(e.unstable_level-1)})`}}function j(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${y(e.unstable_level-1)})`}let $=({theme:e,ownerState:t})=>{let n=C(t),a={};return x(e.breakpoints,t.gridSize,(e,r)=>{let o={};!0===r&&(o={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===r&&(o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof r&&(o={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${r} / ${j(t)}${S(t)?` + ${n("column")}`:""})`}),e(a,o)}),a},N=({theme:e,ownerState:t})=>{let n={};return x(e.breakpoints,t.gridOffset,(e,a)=>{let r={};"auto"===a&&(r={marginLeft:"auto"}),"number"==typeof a&&(r={marginLeft:0===a?"0px":`calc(100% * ${a} / ${j(t)})`}),e(n,r)}),n},E=({theme:e,ownerState:t})=>{if(!t.container)return{};let n=S(t)?{[`--Grid-columns${y(t.unstable_level)}`]:j(t)}:{"--Grid-columns":12};return x(e.breakpoints,t.columns,(e,a)=>{e(n,{[`--Grid-columns${y(t.unstable_level)}`]:a})}),n},O=({theme:e,ownerState:t})=>{if(!t.container)return{};let n=k(t),a=S(t)?{[`--Grid-rowSpacing${y(t.unstable_level)}`]:n("row")}:{};return x(e.breakpoints,t.rowSpacing,(n,r)=>{var o;n(a,{[`--Grid-rowSpacing${y(t.unstable_level)}`]:"string"==typeof r?r:null==(o=e.spacing)?void 0:o.call(e,r)})}),a},G=({theme:e,ownerState:t})=>{if(!t.container)return{};let n=k(t),a=S(t)?{[`--Grid-columnSpacing${y(t.unstable_level)}`]:n("column")}:{};return x(e.breakpoints,t.columnSpacing,(n,r)=>{var o;n(a,{[`--Grid-columnSpacing${y(t.unstable_level)}`]:"string"==typeof r?r:null==(o=e.spacing)?void 0:o.call(e,r)})}),a},A=({theme:e,ownerState:t})=>{if(!t.container)return{};let n={};return x(e.breakpoints,t.direction,(e,t)=>{e(n,{flexDirection:t})}),n},M=({ownerState:e})=>{let t=C(e),n=k(e);return(0,s.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,s.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${t("row")} / -2) calc(${t("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${t("row")} * -1) 0px 0px calc(${t("column")} * -1)`}),(!e.container||S(e))&&(0,s.Z)({padding:`calc(${n("row")} / 2) calc(${n("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${n("row")} 0px 0px ${n("column")}`}))},D=e=>{let t=[];return Object.entries(e).forEach(([e,n])=>{!1!==n&&void 0!==n&&t.push(`grid-${e}-${String(n)}`)}),t},Z=(e,t="xs")=>{function n(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(n(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){let t=[];return Object.entries(e).forEach(([e,a])=>{n(a)&&t.push(`spacing-${e}-${String(a)}`)}),t}return[]},_=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map(([e,t])=>`direction-${e}-${t}`):[`direction-xs-${String(e)}`],H=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],R=(0,b.Z)(),T=(0,v.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function L(e){return(0,f.Z)({props:e,name:"MuiGrid",defaultTheme:R})}var P=n(5843),q=n(7927);let F=function(e={}){let{createStyledComponent:t=T,useThemeProps:n=L,componentName:o="MuiGrid"}=e,i=r.createContext(void 0),l=(e,t)=>{let{container:n,direction:a,spacing:r,wrap:i,gridSize:l}=e,s={root:["root",n&&"container","wrap"!==i&&`wrap-xs-${String(i)}`,..._(a),...D(l),...n?Z(r,t.breakpoints.keys[0]):[]]};return(0,p.Z)(s,e=>(0,u.Z)(o,e),{})},v=t(E,G,O,$,A,M,N),f=r.forwardRef(function(e,t){var o,p,u,f,b,w,x,y;let S=(0,g.Z)(),C=n(e),k=(0,h.Z)(C),j=r.useContext(i),{className:$,children:N,columns:E=12,container:O=!1,component:G="div",direction:A="row",wrap:M="wrap",spacing:D=0,rowSpacing:Z=D,columnSpacing:_=D,disableEqualOverflow:R,unstable_level:T=0}=k,L=(0,d.Z)(k,H),P=R;T&&void 0!==R&&(P=e.disableEqualOverflow);let q={},F={},I={};Object.entries(L).forEach(([e,t])=>{void 0!==S.breakpoints.values[e]?q[e]=t:void 0!==S.breakpoints.values[e.replace("Offset","")]?F[e.replace("Offset","")]=t:I[e]=t});let B=null!=(o=e.columns)?o:T?void 0:E,K=null!=(p=e.spacing)?p:T?void 0:D,W=null!=(u=null!=(f=e.rowSpacing)?f:e.spacing)?u:T?void 0:Z,z=null!=(b=null!=(w=e.columnSpacing)?w:e.spacing)?b:T?void 0:_,V=(0,s.Z)({},k,{level:T,columns:B,container:O,direction:A,wrap:M,spacing:K,rowSpacing:W,columnSpacing:z,gridSize:q,gridOffset:F,disableEqualOverflow:null!=(x=null!=(y=P)?y:j)&&x,parentDisableEqualOverflow:j}),J=l(V,S),Q=(0,a.jsx)(v,(0,s.Z)({ref:t,as:G,ownerState:V,className:(0,c.Z)(J.root,$)},I,{children:r.Children.map(N,e=>{if(r.isValidElement(e)&&(0,m.Z)(e,["Grid"])){var t;return r.cloneElement(e,{unstable_level:null!=(t=e.props.unstable_level)?t:T+1})}return e})}));return void 0!==P&&P!==(null!=j&&j)&&(Q=(0,a.jsx)(i.Provider,{value:P,children:Q})),Q});return f.muiName="Grid",f}({createStyledComponent:(0,P.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,q.Z)({props:e,name:"MuiGrid2"})});var I=[{id:1,date:["2006/09 -","2010/08"],education:["Bachelor of Computer Sciences"],institution:"University of Applied Sciences Hamburg",location:"Hamburg",details:["Favorite modules: Algorithms, Distributed Systems and Software Engineering","Elective modules: Hardware Software Codesign and Robot Vision","Thesis: Modeling of a parking assistant for an autonomous vehicle implemented on an SoC platform","Overall grade 1.4"]},{id:2,date:["2005/08 -","2006/07"],education:["University entrance qualification","electrical engineering"],institution:"Vocational school Winsen",location:"Winsen (Luhe)",details:["Elective course in computer science","Overall grade 2.3"]},{id:3,date:["2003/08 -","2005/07"],education:["Apprenticeship as a","technical drawer","* electrical engineering","* mechanical engineering","* civil engineering"],institution:"Vocational school for metal technology G17",location:"Hamburg",details:["Overall grade 2.8"]}],B=[{id:1,date:["2023/05 -","now"],position:"Software Architect and Developer",company:[""],location:"Hamburg",details:["Development of a trading bot","Frontend: Apache Superset, Swagger and Kubernetes CronJobs","Backend: .Net 8, RabbitMQ, Kubernetes, Selenium, ML.NET and ML.NET"]},{id:2,date:["2021/05 -","2023/04"],position:"Senior Softwareentwickler",company:["Vattenfall Energy Trading GmbH"],location:"Hamburg",details:["Fullstack: backend, frontend, E2E testing, 24/7 support and DevOps","New development: Scrum, Full Stack, C#, Asp.net 5 + 6, Azure and Kubernetes","Further developments: Scrum, Full Stack, C#, Asp.net 4.7, Azure VM and Appservice"]},{id:3,date:["2021/01 -","2021/04"],position:"Senior Backendentwickler",company:["Hellmann Worldwide Logistics SE & Co. KG"],location:"Osnabr\xfcck",details:["Development with Scrum","New development with Asp .Net Core, REST, Kubernetes and RabbitMQ"]},{id:4,date:["2019/09 -","2020/09"],position:"Senior Associate",company:["PricewaterhouseCoopers GmbH","Wirtschaftspr\xfcfungsgesellschaft"],location:"Hamburg and Hannover",details:["Development with Kanban","Fullstack: backend, frontend, E2E testing, support and DevOps","1 year further development: Javascript, Asp .Net 4.6 MVC, .Net Core 2+3, Docker, Selenium and Azure"]},{id:5,date:["2019/03 -","2019/08"],position:"Senior Softwareentwickler",company:["KPMG IT Service GmbH"],location:"Hamburg and Berlin",details:["Development with Scrum","New development: .Net Core, Angular, Typescript, RabbitMQ, Microservices and Azure Service Fabric"]},{id:6,date:["2017/12 -","2019/01"],position:"Softwarearchitekt",company:["Dataport A\xf6R"],location:"Hamburg",details:["Development with Scrum","Participation in architecture jour fixes","approx. 1 month as Scrum Master","approx. 1 year development of online services for Hamburg: Asp .Net 4.6.2 MVC, HTML5, JS and Bootstrap"]},{id:7,date:["2011/01 -","2017/08"],position:"Software Engineer",company:["Crane Payment Innovations GmbH"],location:"Buxtehude",details:["Development with Kanban and Scrum","approx. 4 years web development with C#, Asp.net, Java, Angular, HTML and Javascript","approx. 4 years algo development with Matlab, Python, C#, C++ and Qt","approx. 3 years desktop application development with C++, Qt and C#","approx. 0.5 years embedded software development on microcontrollers with CC","Supervision of interns"]},{id:8,date:["2010/04 -","2010/08"],position:"Internship R&D",company:["Dr\xe4ger Medical AG & Co. KG"],location:"L\xfcbeck",details:["Development with Extreme Programming","XML Transformations with XSLT","Development of automated test sequences in C++ and NI Teststand","Creation of DLLs to control actuators and sensors in C++"]},{id:9,date:["2008/03 -","2010/03"],position:"Student employee",company:["University of Applied Sciences Hamburg"],location:"Hamburg",details:["Supervision and monitoring of laboratory experiments"]}];function K(){let[e]=(0,r.useState)({id:!1,order:!1}),t=e=>{let t=100;if(e&&e.model&&e.model.details&&(t=100+20*e.model.details.length),e&&e.model&&e.model.education){let n=100+20*e.model.education.length;n>t&&(t=n)}if(e&&e.model&&e.model.company){let n=100+8*e.model.company.length;n>t&&(t=n)}return t};return(0,a.jsxs)("div",{style:{height:"100%",width:"100%"},children:[(0,a.jsxs)(F,{container:!0,spacing:3,sx:{flexGrow:1,mb:"0",pb:"0"},children:[(0,a.jsxs)(F,{xs:8,md:8,lg:8,xl:8,children:[(0,a.jsx)("h2",{children:"About me"}),(0,a.jsx)(o.Z,{whiteSpace:"pre-line",children:"As a software developer who is passionate about new technologies, I am always looking for ways to learn and grow. I am constantly reading about the latest trends and developments, and I am always eager to try new things. I am also often very creative and innovative, and I am always looking for ways to improve the way software is developed."})]}),(0,a.jsx)(F,{xs:!0,md:!0,lg:!0,sm:!0,xl:!0}),(0,a.jsxs)(F,{children:[(0,a.jsx)("img",{src:"/TAlpers.png",alt:"photo",width:"180",style:{marginBottom:"0",paddingBottom:"0"}}),"  "]})]}),(0,a.jsxs)(i.Z,{sx:{mt:"0",pt:"0"},children:[(0,a.jsx)("h2",{style:{marginTop:"0",paddingTop:"0"},children:"Professional Experience"}),(0,a.jsx)(l.Z,{rows:B,columns:[{field:"id",headerName:"Id",width:20},{field:"date",headerName:"Date",width:100,sortComparator:(e,t)=>{let n=e[0].split("-")[0],a=t[0].split("-")[0];return n.localeCompare(a)},renderCell:e=>(0,a.jsx)("div",{children:null==e?void 0:e.value.map((e,t)=>(0,a.jsx)("p",{color:"textSecondary",children:e},t))})},{field:"position",headerName:"Position",width:250},{field:"company",headerName:"Company",flex:2,sortComparator:(e,t)=>e[0].localeCompare(t[0]),renderCell:e=>(0,a.jsx)("div",{children:null==e?void 0:e.value.map((e,t)=>(0,a.jsx)("p",{color:"textSecondary",children:e},t))})},{field:"location",headerName:"Location",width:200},{field:"details",headerName:"Details",flex:5,sortComparator:(e,t)=>e[0].localeCompare(t[0]),renderCell:e=>(0,a.jsx)("div",{children:null==e?void 0:e.value.map((e,t)=>(0,a.jsxs)("p",{color:"textSecondary",children:["* ",e]},t))})}],initialState:{columns:{columnVisibilityModel:e}},pageSizeOptions:[5,10],hideFooter:!0,getRowClassName:e=>e.indexRelativeToCurrentPage%2==0?"even":"odd",getRowHeight:t})]}),(0,a.jsxs)(i.Z,{pt:2,children:[(0,a.jsx)("h2",{children:"Education"}),(0,a.jsx)(l.Z,{rows:I,columns:[{field:"id",headerName:"Id",width:20},{field:"date",headerName:"Date",width:100,sortComparator:(e,t)=>{let n=e[0].split("-")[0],a=t[0].split("-")[0];return n.localeCompare(a)},renderCell:e=>(0,a.jsx)("div",{children:null==e?void 0:e.value.map((e,t)=>(0,a.jsx)("p",{color:"textSecondary",children:e},t))})},{field:"education",headerName:"Education",width:250,sortComparator:(e,t)=>e[0].localeCompare(t[0]),renderCell:e=>(0,a.jsx)("div",{children:null==e?void 0:e.value.map((e,t)=>(0,a.jsx)("p",{color:"textSecondary",children:e},t))})},{field:"institution",headerName:"Institution",flex:2},{field:"location",headerName:"Location",width:200},{field:"details",headerName:"Details",flex:5,sortComparator:(e,t)=>e[0].localeCompare(t[0]),renderCell:e=>(0,a.jsx)("div",{children:null==e?void 0:e.value.map((e,t)=>(0,a.jsxs)("p",{color:"textSecondary",children:["* ",e]},t))})}],initialState:{columns:{columnVisibilityModel:e}},pageSizeOptions:[5,10],hideFooter:!0,getRowClassName:e=>e.indexRelativeToCurrentPage%2==0?"even":"odd",getRowHeight:t})]})]})}},1404:function(e,t,n){"use strict";var a=n(1964),r=n(6575),o=n(5843),i=n(9975);let l=(0,o.ZP)(a._$)(e=>{let{theme:t}=e;return{["& .".concat(r._.row,".even")]:{backgroundColor:t.palette.grey[50],"&:hover, &.Mui-hovered":{backgroundColor:(0,i.Fq)(t.palette.primary.main,.1),"@media (hover: none)":{backgroundColor:"transparent"}},"&.Mui-selected":{backgroundColor:(0,i.Fq)(t.palette.primary.main,.1+t.palette.action.selectedOpacity),"&:hover, &.Mui-hovered":{backgroundColor:(0,i.Fq)(t.palette.primary.main,.1+t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,i.Fq)(t.palette.primary.main,.1+t.palette.action.selectedOpacity)}}}}}});t.Z=l}},function(e){e.O(0,[507,411,964,971,938,744],function(){return e(e.s=6654)}),_N_E=e.O()}]);