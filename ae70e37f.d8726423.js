(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var a=r(1),n=(r(0),r(270));const o={title:"Create client and server application from template",sidebar_label:"Create a new app",id:"quickstart"},c={id:"version-0.11.x/intro/quickstart",isDocsHomePage:!1,title:"Create client and server application from template",description:"You can use the Graphback CLI to generate a new GraphQL project in minutes.",source:"@site/versioned_docs/version-0.11.x/intro/quickstart.md",permalink:"/docs/0.11.x/intro/quickstart",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.11.x/intro/quickstart.md",version:"0.11.x",sidebar_label:"Create a new app",sidebar:"version-0.11.x/",previous:{title:"Introduction to Graphback",permalink:"/docs/0.11.x/gettingstarted"},next:{title:"Adding Graphback to your Node.js project",permalink:"/docs/0.11.x/intro/existingproject"},latestVersionMainDocPermalink:"/docs/introduction"},i=[{value:"Next steps",id:"next-steps",children:[]}],p={rightToc:i};function l({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"You can use the Graphback CLI to generate a new GraphQL project in minutes."),Object(n.b)("p",null,"Initializing with npx:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npx graphback-cli init <project-name>\n")),Object(n.b)("p",null,"Or by installing Graphback CLI globally:"),Object(n.b)("pre",null,Object(n.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install -g graphback-cli\ngraphback init <project-name>\n")),Object(n.b)("p",null,"The CLI will ask you to choose from one of two templates:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"apollo-fullstack-ts"),": Apollo GraphQL server and React client using TypeScript and PostgreSQL."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"apollo-runtime"),": Apollo GraphQL server with in-memory Graphback schema and CRUD resolvers.")),Object(n.b)("p",null,"In a few seconds you should have an empty GraphQL application."),Object(n.b)("h3",{id:"next-steps"},"Next steps"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"To change the default application configuration see ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.11.x/intro/config"}),"Graphback Config"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"See ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.11.x/intro/datamodel"}),"Defining your Data model")," for how to design your data model.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Once your data model is complete, run ",Object(n.b)("inlineCode",{parentName:"p"},"graphback generate")," from your project to generate a GraphQL schema and API.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Graphback provides a number of different data sources which can be configured at application runtime. See ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"../db/datasources"}),"Data Sources"),".")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If you are using a PostgreSQL datasource you can migrate your database to match your schema by running ",Object(n.b)("inlineCode",{parentName:"p"},"graphback db"),". See ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/0.11.x/db/dbmigrations"}),"Database Migrations")," for more.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Run your application!"))))}l.isMDXComponent=!0},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?n.a.createElement(d,i({ref:t},l,{components:r})):n.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);