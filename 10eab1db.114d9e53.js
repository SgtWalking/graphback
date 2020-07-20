(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(270)),l={title:"Graphback CRUD Client Queries Plugin",sidebar_label:"CRUD Client Queries",id:"crud-client"},o={id:"version-0.11.x/plugins/crud-client",isDocsHomePage:!1,title:"Graphback CRUD Client Queries Plugin",description:"Graphback CRUD Client plugin",source:"@site/versioned_docs/version-0.11.x/plugins/graphback-client.md",permalink:"/docs/0.11.x/plugins/crud-client",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.11.x/plugins/graphback-client.md",version:"0.11.x",sidebar_label:"CRUD Client Queries",sidebar:"version-0.11.x/",previous:{title:"CRUD Resolvers Plugin",permalink:"/docs/0.11.x/plugins/crud-resolvers"},next:{title:"Creating your own plugin",permalink:"/docs/0.11.x/plugins/customplugin"},latestVersionMainDocPermalink:"/docs/introduction"},c=[{value:"Graphback CRUD Client plugin",id:"graphback-crud-client-plugin",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Plugin Config",id:"plugin-config",children:[]},{value:"How it works",id:"how-it-works",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"graphback-crud-client-plugin"},"Graphback CRUD Client plugin"),Object(i.b)("p",null,"Graphback client plugin allows users to generate client-side queries based on the model and CRUD settings.\nDevelopers can embed generated queries into their client-side applications.\nGenerated queries are compatible with all major GraphQL plugins like Apollo and URQL."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @graphback/codegen-client\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Client-side queries can be consumed inside any application.\nWhen using any GraphQL Clients queries can be compiled and passed to the client methods.\nFor example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"apolloClient.mutate(createUserQuery)\n")),Object(i.b)("p",null,"Plugin allows to create files in many formats to suit the needs of your application."),Object(i.b)("p",null,"Please refer to ts-apollo-fullstack app for fully functional example:\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-fullstack"}),"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-fullstack")),Object(i.b)("h2",{id:"plugin-config"},"Plugin Config"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  /**\n   * Output language that will be supported\n   * Our plugin supports multiple languages for simplicity\n   *\n   * - ts - typescript file output (backwards compatibility)\n   * - graphql - .graphql file\n   * - gqlwithfragment - complete graphql queries containing fragments for redundancy\n   */\n  format: 'ts' | 'graphql' | 'gqlwithfragment'\n\n  /**\n   * RelativePath for the output files created by generator\n   */\n  outputPath: string\n")),Object(i.b)("p",null,"Example plugin configuration in YAML: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"})," plugins:\n  graphback-client:\n    format: 'graphql'\n    outputPath: ./client/src/graphql\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Plugin require ",Object(i.b)("inlineCode",{parentName:"p"},"crud")," configuration specified as part of the ",Object(i.b)("inlineCode",{parentName:"p"},"graphback")," extension ")),Object(i.b)("h2",{id:"how-it-works"},"How it works"),Object(i.b)("p",null,"Graphback asks whether you want to generate client-side queries in the ",Object(i.b)("inlineCode",{parentName:"p"},"graphback config")," command. Answering 'yes' will setup client generator plugin in your config."),Object(i.b)("p",null,"For a data model having"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"type Note {\n  id: ID!\n  title: String!\n  description: String!\n}\n")),Object(i.b)("p",null,"running ",Object(i.b)("inlineCode",{parentName:"p"},"graphback generate")," will generate queries and mutations that are enabled in crud config section."))}u.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),g=r,d=s["".concat(l,".").concat(g)]||s[g]||b[g]||i;return n?a.a.createElement(d,o({ref:t},p,{components:n})):a.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);