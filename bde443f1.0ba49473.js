(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{184:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(6),o=(n(0),n(224)),i={title:"Introduction",id:"concepts"},c={id:"version-0.10.x/concepts",isDocsHomePage:!1,title:"Introduction",description:"Introduction",source:"@site/versioned_docs/version-0.10.x/concepts.md",permalink:"/docs/0.10.x/concepts",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/concepts.md",version:"0.10.x",sidebar:"version-0.10.x/docs",previous:{title:"Graphback CRUD Config",permalink:"/docs/0.10.x/config"},next:{title:"Graphback runtime",permalink:"/docs/0.10.x/runtime"},latestVersionMainDocPermalink:"/docs/gettingstarted"},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Input Model - GraphQL Schema",id:"input-model---graphql-schema",children:[]},{value:"Generated source code",id:"generated-source-code",children:[]},{value:"Runtime CRUD layer",id:"runtime-crud-layer",children:[]},{value:"Database migrations",id:"database-migrations",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"The target of Graphback is to provide tooling for generating fully functional backend and client side code on top of your existing application and widely available starter applications.\nGraphback making prototyping applications very easy by generating source code and reducing number of boilerplate components. With Graphback developers can focus more on delivering business value and their business model that will be represented as GraphQL schema. Developers can choose different starting stack database and extensions to build their production ready backend in a very short amount of time."),Object(o.b)("p",null,"Graphback generates codebase that can be edited and customized.\nServer side code will follow the best patterns of the writing database schema and allow users to benefit from the rich environment of GraphQL modules that can be applied out of the box."),Object(o.b)("h2",{id:"input-model---graphql-schema"},"Input Model - GraphQL Schema"),Object(o.b)("p",null,"Graphback is processing GraphQL Schema DSL language to generate server and client side artifacts to speed up development.\nDevelopers can focus on data and application requirements by modeling them using GraphQL DSL.\nFor example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"type Note {\n  id: ID!\n  title: String!\n}\n\ntype Query {\n  customOperation(): String\n}\n")),Object(o.b)("p",null,"Graphback provides a set of the GraphQL annotations that allow providing hints for the generation process to customize output source code. Based on provided model Graphback will generate a set of queries, mutations, and subscriptions together with resolvers that will by default connect with a database of your choice. "),Object(o.b)("p",null,"Input model can contain custom queries and mutations that can be implemented manually by developers at a later stage."),Object(o.b)("h2",{id:"generated-source-code"},"Generated source code"),Object(o.b)("p",null,"Generated server side code will consist of the template together with additional elements:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./model")," folder will contain input schema"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./resolvers")," folder will contain generated and custom GraphQL resolvers for the project."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"./client")," folder will contain client side queries")),Object(o.b)("p",null,"All locations can be changed in ",Object(o.b)("inlineCode",{parentName:"p"},"graphback.json")," configuration file in your project root"),Object(o.b)("h2",{id:"runtime-crud-layer"},"Runtime CRUD layer"),Object(o.b)("p",null,"Code generators produce a large amount of the code that needs to be maintained later.\nHaving generator code diverging from original form will prevent developers to utilize generators at later stage.\nAdditionally writing your custom handlers is hard as you will always need to start from scratch and benefit from the existing layers that provide support for subscriptions and data access.\nGraphback utilizes runtime layer that provide data access methods with support for extensibility."),Object(o.b)("p",null,"For more information please refer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/runtime"}),Object(o.b)("inlineCode",{parentName:"a"},"runtime"))," documentation"),Object(o.b)("h2",{id:"database-migrations"},"Database migrations"),Object(o.b)("p",null,"To offer fully comprehensive getting started experience Graphback provides database migration capabilities.\nFor more information please refer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/database-schema-migrations"}),Object(o.b)("inlineCode",{parentName:"a"},"migrations"))," documentation "))}d.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);