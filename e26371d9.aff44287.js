(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{204:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),o=n(6),a=(n(0),n(224)),i={title:"Introduction",id:"concepts"},c={id:"version-0.9.x/concepts",title:"Introduction",description:"Introduction",source:"@site/versioned_docs/version-0.9.x/concepts.md",permalink:"/docs/0.9.x/concepts",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.9.x/concepts.md",version:"0.9.x",sidebar:"version-0.9.x/docs",previous:{title:"Custom Methods",permalink:"/docs/0.9.x/custom"},next:{title:"Templates",permalink:"/docs/0.9.x/templates"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Input Model - GraphQL Schema",id:"input-model---graphql-schema",children:[]},{value:"Generated source code",id:"generated-source-code",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"The target of Graphback is to provide tooling for generating fully functional backend and client side code based on different templates and proven server side technologies.\nGraphback making prototyping applications very easy.\nWith Graphback developers can focus more on delivering business value and their business model that will be represented as GraphQL schema. Developers can choose different starting stack database and extensions (called GraphQL-Modules) to build their production ready backend in a very short amount of time."),Object(a.b)("p",null,"Graphback generates Node.js application with an entire codebase that can be edited and customized.\nServer side code will follow the best patterns of the writing database schema and allow users to benefit from the rich environment of GraphQL modules that can be applied out of the box.\nModules can include Authentication, Logging, and Monitoring features."),Object(a.b)("h2",{id:"input-model---graphql-schema"},"Input Model - GraphQL Schema"),Object(a.b)("p",null,"Graphback is processing GraphQL Schema DSL language to generate server and client side artifacts to speed up development.\nDevelopers can focus on data and application requirements by modeling them using GraphQL DSL.\nFor example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"type Note {\n  id: ID!\n  title: String!\n}\n\ntype Query {\n  customOperation(): String\n}\n")),Object(a.b)("p",null,"Graphback provides a set of the GraphQL directives that allow providing hints for the generation process to customize output source code. Based on provided model Graphback will generate a set of queries, mutations, and subscriptions together with resolvers that will by default connect with a database of your choice. "),Object(a.b)("p",null,"Input model can contain custom queries and mutations that can be implemented manually by developers at a later stage."),Object(a.b)("h2",{id:"generated-source-code"},"Generated source code"),Object(a.b)("p",null,"Generated server side code will consist of the template together with additional elements:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"./model")," folder will contain input schema"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"./resolvers")," folder will contain generated and custom GraphQL resolvers for the project.")))}d.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);