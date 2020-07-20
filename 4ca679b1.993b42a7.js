(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return u}));var i=a(1),r=a(6),n=(a(0),a(270)),l={title:"Releases",id:"releases"},c={id:"version-0.9.x/releases",isDocsHomePage:!1,title:"Releases",description:"What's new in Graphback",source:"@site/versioned_docs/version-0.9.x/releases.md",permalink:"/docs/0.9.x/releases",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.9.x/releases.md",version:"0.9.x",sidebar:"version-0.9.x/docs",previous:{title:"CLI commands",permalink:"/docs/0.9.x/commands"},latestVersionMainDocPermalink:"/docs/introduction"},b=[{value:"What&#39;s new in Graphback",id:"whats-new-in-graphback",children:[{value:"Templates",id:"templates",children:[]},{value:"Graphback-cli",id:"graphback-cli",children:[]},{value:"Graphback-CLI",id:"graphback-cli-1",children:[]},{value:"Graphback",id:"graphback",children:[]}]},{value:"0.8.3 (29th August, 2019)",id:"083-29th-august-2019",children:[{value:"Templates",id:"templates-1",children:[]},{value:"Graphback-cli",id:"graphback-cli-2",children:[]}]},{value:"0.8.2 (28th August, 2019)",id:"082-28th-august-2019",children:[{value:"Graphback-cli",id:"graphback-cli-3",children:[]}]},{value:"0.8.1 (28th August, 2019)",id:"081-28th-august-2019",children:[{value:"Graphback",id:"graphback-1",children:[]}]},{value:"0.8.0 (28th August, 2019)",id:"080-28th-august-2019",children:[{value:"Graphback",id:"graphback-2",children:[]},{value:"Graphback-cli",id:"graphback-cli-4",children:[]},{value:"Templates",id:"templates-2",children:[]}]},{value:"0.7.2 (20th August, 2019)",id:"072-20th-august-2019",children:[{value:"Graphback-cli",id:"graphback-cli-5",children:[]}]},{value:"0.7.1 (20th August, 2019)",id:"071-20th-august-2019",children:[{value:"Graphback",id:"graphback-3",children:[]}]},{value:"0.7.0 (12th August, 2019)",id:"070-12th-august-2019",children:[{value:"Graphback",id:"graphback-4",children:[]},{value:"Templates",id:"templates-3",children:[]}]},{value:"0.6.0 (7th August, 2019)",id:"060-7th-august-2019",children:[{value:"Graphback-cli",id:"graphback-cli-6",children:[]}]},{value:"0.5.0 (1st August, 2019)",id:"050-1st-august-2019",children:[{value:"Graphback",id:"graphback-5",children:[]},{value:"Graphback-cli",id:"graphback-cli-7",children:[]},{value:"Templates",id:"templates-4",children:[]}]},{value:"0.4.0 (25 July, 2019)",id:"040-25-july-2019",children:[{value:"Templates",id:"templates-5",children:[]}]},{value:"0.3.2 (24 July, 2019)",id:"032-24-july-2019",children:[{value:"Graphback",id:"graphback-6",children:[]}]},{value:"0.3.1 (17 July, 2019)",id:"031-17-july-2019",children:[{value:"Graphback",id:"graphback-7",children:[]},{value:"Templates",id:"templates-6",children:[]}]},{value:"0.3.0 (16 July, 2019)",id:"030-16-july-2019",children:[{value:"Graphback",id:"graphback-8",children:[]},{value:"Graphback-cli",id:"graphback-cli-8",children:[]}]},{value:"0.2.0 (12 June, 2019)",id:"020-12-june-2019",children:[{value:"Graphback",id:"graphback-9",children:[]},{value:"Graphback-cli",id:"graphback-cli-9",children:[]}]}],s={rightToc:b};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"whats-new-in-graphback"},"What's new in Graphback"),Object(n.b)("p",null,"This file contains changes and migration steps for Graphback project.\nPlease follow indidividual releases for more information."),Object(n.b)("h1",{id:"091"},"0.9.1"),Object(n.b)("h3",{id:"templates"},"Templates"),Object(n.b)("p",null,"Removed REST template from official list of templates"),Object(n.b)("h1",{id:"090"},"0.9.0"),Object(n.b)("h3",{id:"graphback-cli"},"Graphback-cli"),Object(n.b)("h4",{id:"breaking-changes"},"Breaking changes"),Object(n.b)("p",null,"Templates rely on ",Object(n.b)("inlineCode",{parentName:"p"},"graphback.json")," file. Please rename your ",Object(n.b)("inlineCode",{parentName:"p"},"config.json")," to ",Object(n.b)("inlineCode",{parentName:"p"},"graphback.json")," and add additional configuration entries"),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'  "folders": {\n    "model": "./model",\n      "resolvers": "./src/resolvers/",\n      "schema":  "./src/schema",\n      "client": "./client/src/graphql"\n\n  }\n')),Object(n.b)("h3",{id:"graphback-cli-1"},"Graphback-CLI"),Object(n.b)("h4",{id:"features"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"graphback openapi")," command provides a way to migrate OpenAPI definition to GraphQL schema")),Object(n.b)("h3",{id:"graphback"},"Graphback"),Object(n.b)("h4",{id:"features-1"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Support for Interfaces in GraphQL schema\nGraphQL Schema now supports interfaces that can be used to ensure consistency of the data.\nExample:")),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{className:"language-graphql"}),"interface Searchable {\n  searchPreviewText: String!\n}\n\ninterface Item {\n  price: Int!\n}\n\ntype Movie implements Searchable & Item {\n  directory: String!\n  searchPreviewText: String!\n  price: Int!\n}\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"NOTE: Interfaces will not be taken into consideration when generating resolvers and database")),Object(n.b)("h2",{id:"083-29th-august-2019"},"0.8.3 (29th August, 2019)"),Object(n.b)("h3",{id:"templates-1"},"Templates"),Object(n.b)("h4",{id:"fixes"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removed redis-subscriptions and use im-memory graphql-subscriptions instead.")),Object(n.b)("h3",{id:"graphback-cli-2"},"Graphback-cli"),Object(n.b)("h4",{id:"fixes-1"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removed redis dependency from docker-compose.")),Object(n.b)("h2",{id:"082-28th-august-2019"},"0.8.2 (28th August, 2019)"),Object(n.b)("h3",{id:"graphback-cli-3"},"Graphback-cli"),Object(n.b)("h4",{id:"fixes-2"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed instructions for missing watch command and replaced it with develop"),Object(n.b)("li",{parentName:"ul"},"Fixed issue with not cleaning template and dist folders "),Object(n.b)("li",{parentName:"ul"},"Disabled the GraphQL-JS template due to invalid resolver format. ")),Object(n.b)("h2",{id:"081-28th-august-2019"},"0.8.1 (28th August, 2019)"),Object(n.b)("h3",{id:"graphback-1"},"Graphback"),Object(n.b)("h4",{id:"fixes-3"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed npm release missing template files")),Object(n.b)("h2",{id:"080-28th-august-2019"},"0.8.0 (28th August, 2019)"),Object(n.b)("h3",{id:"graphback-2"},"Graphback"),Object(n.b)("h4",{id:"features-2"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added ability to generate client side queries according to data model.")),Object(n.b)("h3",{id:"graphback-cli-4"},"Graphback-cli"),Object(n.b)("h4",{id:"fixes-4"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removed dependency from docker when using sqlite3, changed redis subscriptions\nto inmemory subscriptions.")),Object(n.b)("h3",{id:"templates-2"},"Templates"),Object(n.b)("h4",{id:"fixes-5"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Changed scripts of templates.")),Object(n.b)("h2",{id:"072-20th-august-2019"},"0.7.2 (20th August, 2019)"),Object(n.b)("h3",{id:"graphback-cli-5"},"Graphback-cli"),Object(n.b)("h4",{id:"fixes-6"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Removed watch command from cli which caused a lot of bugs.")),Object(n.b)("h2",{id:"071-20th-august-2019"},"0.7.1 (20th August, 2019)"),Object(n.b)("h3",{id:"graphback-3"},"Graphback"),Object(n.b)("h4",{id:"fixes-7"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed problem with creating tables for Int type")),Object(n.b)("h2",{id:"070-12th-august-2019"},"0.7.0 (12th August, 2019)"),Object(n.b)("h3",{id:"graphback-4"},"Graphback"),Object(n.b)("h4",{id:"features-3"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added new ",Object(n.b)("inlineCode",{parentName:"li"},"@disableGen")," directive that allows user to disable CRUD operation for\nsingle type")),Object(n.b)("h3",{id:"templates-3"},"Templates"),Object(n.b)("h4",{id:"features-4"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added new GraphQL-js starter template, that uses GraphQL.js library."),Object(n.b)("li",{parentName:"ul"},"Added ability to use custom templates")),Object(n.b)("pre",null,Object(n.b)("code",Object(i.a)({parentName:"pre"},{}),"graphback init name --templateUrl=https://github.com/aerogear/modern-appdev-workshop\n")),Object(n.b)("h2",{id:"060-7th-august-2019"},"0.6.0 (7th August, 2019)"),Object(n.b)("h3",{id:"graphback-cli-6"},"Graphback-cli"),Object(n.b)("h4",{id:"features-5"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added support for SQLite database inside CLI"),Object(n.b)("li",{parentName:"ul"},"Added new Tasks model template")),Object(n.b)("h4",{id:"fixes-8"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Configuration in template works now with different databases that are supported by knex library")),Object(n.b)("h2",{id:"050-1st-august-2019"},"0.5.0 (1st August, 2019)"),Object(n.b)("h3",{id:"graphback-5"},"Graphback"),Object(n.b)("h4",{id:"features-6"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added ability to perform CRUD generation based on configuration flags\nThe generation will now be based on config.json file that will contain properties\nfor all resolver types that need to generate. Please refer to the documentation for more information"),Object(n.b)("li",{parentName:"ul"},"Added ability for custom Queries/Mutations/Subscriptions. Users can generate empty resolver stubs for their implementation.")),Object(n.b)("h4",{id:"fixes-9"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Modularized resolver output into separate files(based on types) instead of a single one. Also added custom resolvers.")),Object(n.b)("h3",{id:"graphback-cli-7"},"Graphback-cli"),Object(n.b)("h4",{id:"fixes-10"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Changed resolvers output format from a single resolver file to multiple files. Also added custom resolvers in generate")),Object(n.b)("h3",{id:"templates-4"},"Templates"),Object(n.b)("h4",{id:"fixes-11"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Dropped generated folder and change structure for template accordingly. Generated content will be now inside ",Object(n.b)("inlineCode",{parentName:"li"},"src")," folder instead.")),Object(n.b)("h2",{id:"040-25-july-2019"},"0.4.0 (25 July, 2019)"),Object(n.b)("h3",{id:"templates-5"},"Templates"),Object(n.b)("h4",{id:"features-7"},"Features"),Object(n.b)("p",null,"Added Sofa (",Object(n.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/Urigo/SOFA/"}),"https://github.com/Urigo/SOFA/"),") template that allows generating restful API along with GraphQL one. "),Object(n.b)("h2",{id:"032-24-july-2019"},"0.3.2 (24 July, 2019)"),Object(n.b)("h3",{id:"graphback-6"},"Graphback"),Object(n.b)("h4",{id:"features-8"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added relationship support to schema and resolvers.")),Object(n.b)("h2",{id:"031-17-july-2019"},"0.3.1 (17 July, 2019)"),Object(n.b)("h3",{id:"graphback-7"},"Graphback"),Object(n.b)("h4",{id:"fixes-12"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Strict typing in resolvers.")),Object(n.b)("h3",{id:"templates-6"},"Templates"),Object(n.b)("h4",{id:"fixes-13"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Added ts config and check compilation.")),Object(n.b)("h2",{id:"030-16-july-2019"},"0.3.0 (16 July, 2019)"),Object(n.b)("h3",{id:"graphback-8"},"Graphback"),Object(n.b)("h4",{id:"fixes-14"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Revamp core to use visitor pattern"),Object(n.b)("li",{parentName:"ul"},"Generate schema with opinionated schema patterns"),Object(n.b)("li",{parentName:"ul"},"Edited resolvers implementations(working)")),Object(n.b)("h4",{id:"deprecations"},"Deprecations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"removed dependency of ",Object(n.b)("inlineCode",{parentName:"li"},"graphql-codegen")," version ",Object(n.b)("inlineCode",{parentName:"li"},"0.18.2"))),Object(n.b)("h3",{id:"graphback-cli-8"},"Graphback-cli"),Object(n.b)("h4",{id:"features-9"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"added ",Object(n.b)("inlineCode",{parentName:"li"},"db")," and ",Object(n.b)("inlineCode",{parentName:"li"},"watch")," command")),Object(n.b)("h4",{id:"fixes-15"},"Fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"added more options in ",Object(n.b)("inlineCode",{parentName:"li"},"init")," command, to inject config ")),Object(n.b)("h2",{id:"020-12-june-2019"},"0.2.0 (12 June, 2019)"),Object(n.b)("h3",{id:"graphback-9"},"Graphback"),Object(n.b)("h4",{id:"features-10"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Initial ",Object(n.b)("inlineCode",{parentName:"li"},"schema")," and ",Object(n.b)("inlineCode",{parentName:"li"},"resolvers")," generation")),Object(n.b)("h3",{id:"graphback-cli-9"},"Graphback-cli"),Object(n.b)("h4",{id:"features-11"},"Features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"added ",Object(n.b)("inlineCode",{parentName:"li"},"init")," and ",Object(n.b)("inlineCode",{parentName:"li"},"generate")," command")))}u.isMDXComponent=!0},270:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return h}));var i=a(0),r=a.n(i);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=Object(i.forwardRef)((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),d=u(a),o=i,h=d["".concat(l,".").concat(o)]||d[o]||p[o]||n;return a?r.a.createElement(h,c({ref:t},s,{components:a})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=o;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<n;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);