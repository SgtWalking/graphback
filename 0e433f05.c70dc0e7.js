(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),i=(r(0),r(224)),o={title:"Adding Graphback to your Node.js project",sidebar_label:"Add to existing project",id:"existingproject"},c={id:"version-0.11.x/intro/existingproject",isDocsHomePage:!1,title:"Adding Graphback to your Node.js project",description:"Adding Graphback to existing project using Graphback CLI",source:"@site/versioned_docs/version-0.11.x/intro/existingproject.md",permalink:"/docs/0.11.x/intro/existingproject",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.11.x/intro/existingproject.md",version:"0.11.x",sidebar_label:"Add to existing project",sidebar:"version-0.11.x/",previous:{title:"Create client and server application from template",permalink:"/docs/0.11.x/intro/quickstart"},next:{title:"Runtime API",permalink:"/docs/0.11.x/intro/serverless"},latestVersionMainDocPermalink:"/docs/gettingstarted"},p=[{value:"Adding Graphback to existing project using Graphback CLI",id:"adding-graphback-to-existing-project-using-graphback-cli",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],l={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"adding-graphback-to-existing-project-using-graphback-cli"},"Adding Graphback to existing project using Graphback CLI"),Object(i.b)("p",null,"Graphback CLI can be used to add code generation capabilities to your existing Node.js Server that implements GraphQL API."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npx graphback-cli config\n")),Object(i.b)("p",null,"Follow the on-screen instructions."),Object(i.b)("p",null,"Graphback will do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create ",Object(i.b)("inlineCode",{parentName:"li"},".graphqlrc.yml")," file with default Graphback plugins"),Object(i.b)("li",{parentName:"ul"},"Initialize an example model file "),Object(i.b)("li",{parentName:"ul"},"Add required packages to your ",Object(i.b)("inlineCode",{parentName:"li"},"package.json")," file"),Object(i.b)("li",{parentName:"ul"},"Add a ",Object(i.b)("inlineCode",{parentName:"li"},"dbmigrations")," config to your ",Object(i.b)("inlineCode",{parentName:"li"},".graphqlrc.yml")," file for PostgreSQL databases")),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To change the default application configuration see ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.11.x/intro/config"}),"Graphback Config"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.11.x/intro/datamodel"}),"Defining your Data model")," for how to design your data model.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Graphback provides a number of different data sources which can be configured at application runtime. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../db/datasources"}),"Data Sources"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you are using a PostgreSQL datasource you can migrate your database to match your schema by running ",Object(i.b)("inlineCode",{parentName:"p"},"graphback db"),". See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.11.x/db/dbmigrations"}),"Database Migrations")," for more.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Run your application! \ud83d\ude80"))))}b.isMDXComponent=!0},224:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||i;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);