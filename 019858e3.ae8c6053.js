(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{219:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,g=u["".concat(i,".").concat(h)]||u[h]||b[h]||c;return n?a.a.createElement(g,l({ref:t},s,{components:n})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),c=(n(0),n(219)),i={title:"Graphback CRUD Schema Plugin",sidebar_label:"CRUD Schema",id:"crud-schema"},l={id:"version-0.11.x/plugins/crud-schema",title:"Graphback CRUD Schema Plugin",description:"## Graphback CRUD Schema plugin",source:"@site/versioned_docs/version-0.11.x/plugins/graphback-schema.md",permalink:"/docs/0.11.x/plugins/crud-schema",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.11.x/plugins/graphback-schema.md",version:"0.11.x",sidebar_label:"CRUD Schema",sidebar:"version-0.11.x/",previous:{title:"Graphback Plugins introduction",permalink:"/docs/0.11.x/plugins/plugin-intro"},next:{title:"CRUD Resolvers Plugin",permalink:"/docs/0.11.x/plugins/crud-resolvers"}},o=[{value:"Graphback CRUD Schema plugin",id:"graphback-crud-schema-plugin",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Plugin Config",id:"plugin-config",children:[]},{value:"Extending schema using other plugins",id:"extending-schema-using-other-plugins",children:[]}],s={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"graphback-crud-schema-plugin"},"Graphback CRUD Schema plugin"),Object(c.b)("p",null,"Schema plugin generates GraphQL Schema which contain additional Queries, Mutations and Subscriptions\nthat follow Graphback CRUD specification. Input GraphQL schema is perserved.\nPlugin will only process GraphQL Types annotated with ",Object(c.b)("inlineCode",{parentName:"p"},"@model"),"."),Object(c.b)("h2",{id:"installation"},"Installation"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/codegen-schema\n")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Generated graphql schema file can be used to create GraphQL Server."),Object(c.b)("p",null,"Please reffer to ts-apollo-fullstack app for fully functional example:\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-fullstack"}),"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-fullstack")),Object(c.b)("h2",{id:"plugin-config"},"Plugin Config"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  /**\n   * Output format for schema\n   */\n  format: 'ts' | 'js' | 'graphql',\n\n  /**\n   * RelativePath for the output files created by generator\n   */\n  outputPath: string\n\n  /**\n   * Name of the output file (by default `schema`)\n   */\n  outputFileName?: string\n")),Object(c.b)("p",null,"Example YML: "),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"})," plugins:\n  graphback-schema:\n    format: 'graphql'\n    outputPath: ./server/src/schema\n")),Object(c.b)("h2",{id:"extending-schema-using-other-plugins"},"Extending schema using other plugins"),Object(c.b)("p",null,"Schema Plugin is responsibile for saving schema however any other plugin can modify\nschema that will be later saved to the output file.\nYou can also choose to create multiple schema files that will be later merged together."))}p.isMDXComponent=!0}}]);