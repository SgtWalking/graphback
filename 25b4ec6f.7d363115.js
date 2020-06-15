(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{120:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),i=(r(0),r(219)),o={id:"crudruntime",title:"CRUD Runtime Abstraction",sidebar_label:"CRUD Abstraction"},c={id:"version-0.12.x/crud/crudruntime",title:"CRUD Runtime Abstraction",description:"A Graphback CRUD abstraction is available as part of the `@graphback/runtime` package, providing a way to programatically define different datasources and configure them without code generation.",source:"@site/versioned_docs/version-0.12.x/crud/crudruntime.md",permalink:"/docs/crud/crudruntime",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/crud/crudruntime.md",version:"0.12.x",sidebar_label:"CRUD Abstraction",sidebar:"version-0.12.x/docs",previous:{title:"Graphback CRUD Specification",permalink:"/docs/crud/crudspec"},next:{title:"Graphback Plugins introduction",permalink:"/docs/plugins/plugin-intro"}},l=[{value:"GraphbackCRUDService",id:"graphbackcrudservice",children:[]},{value:"GraphbackDataProvider",id:"graphbackdataprovider",children:[]},{value:"Adding custom resolvers to runtime",id:"adding-custom-resolvers-to-runtime",children:[]},{value:"How Runtime relates to the resolvers",id:"how-runtime-relates-to-the-resolvers",children:[]},{value:"Why we need CRUD Abstraction",id:"why-we-need-crud-abstraction",children:[]}],p={rightToc:l};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A Graphback CRUD abstraction is available as part of the ",Object(i.b)("inlineCode",{parentName:"p"},"@graphback/runtime")," package, providing a way to programatically define different datasources and configure them without code generation."),Object(i.b)("p",null,"Runtime is abstracted into two interfaces:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GraphbackCRUDService"),": layer that wraps data provider, can implement custom behaviour like subscriptions or live queries"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GraphbackDataProvider"),": data access layer ")),Object(i.b)("h3",{id:"graphbackcrudservice"},"GraphbackCRUDService"),Object(i.b)("p",null,"Graphback provides the following implementations of ",Object(i.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CRUDService"),": implements subscriptions and logging. Used by default in resolver generator")),Object(i.b)("h3",{id:"graphbackdataprovider"},"GraphbackDataProvider"),Object(i.b)("p",null,"Graphback provides the following implementations of ",Object(i.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),Object(i.b)("inlineCode",{parentName:"a"},"PgKnexDBDataProvider")),": PostgreSQL data provider using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://knexjs.org/"}),"Knex.js")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),Object(i.b)("inlineCode",{parentName:"a"},"MongoDBDataProvider")),": Data provider for MongoDB"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),Object(i.b)("inlineCode",{parentName:"a"},"KnexDBDataProvider")),": Data provider using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://knexjs.org/"}),"Knex.js"))),Object(i.b)("p",null,"Your resolvers can use any of these data providers by swapping the implementation and attaching it to your application context. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../db/datasources"}),"Data Sources")," to learn how."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/runtime.png",alt:null}))),Object(i.b)("h2",{id:"adding-custom-resolvers-to-runtime"},"Adding custom resolvers to runtime"),Object(i.b)("p",null,"Runtime layer will come with autogenerated schema that will also include custom resolvers provided in model.\nDevelopers can append their custom resolvers to resolver array to extend runtime layer."),Object(i.b)("h2",{id:"how-runtime-relates-to-the-resolvers"},"How Runtime relates to the resolvers"),Object(i.b)("p",null,"Graphback resolver generator plugin generates resolvers that utilize one of the preconfigured ",Object(i.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," implementations.\n",Object(i.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," implementation is using ",Object(i.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider"),"."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/runtime.png",alt:null}))),Object(i.b)("p",null,"Instances need to be added to ",Object(i.b)("inlineCode",{parentName:"p"},"context")," object in resolver for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"findAllComments: (parent, args, context) => {\n  // Comment is an implementation of `GraphbackCRUDService` \n  return context.Comment.findAll();\n};\n")),Object(i.b)("h2",{id:"why-we-need-crud-abstraction"},"Why we need CRUD Abstraction"),Object(i.b)("p",null,"Code generators produce a large amount of the code that needs to be maintained later.\nHaving generator code diverging from original form will prevent developers from utilizing generators.\nGraphback tries to address many challenging issues like data caching, batching, consistency etc. that will be hard to implement and test by utilizing only code generation.\nThat is why our default resolver generators rely on CRUD abstraction layer that can be used to connect Graphback to any datasource without writing generator plugin."))}b.isMDXComponent=!0},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(r),d=n,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||i;return r?a.a.createElement(m,c({ref:t},p,{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);