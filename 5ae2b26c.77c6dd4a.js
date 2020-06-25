(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),a=n(6),o=(n(0),n(224)),i={title:"Defining your Data Model",id:"datamodel"},c={id:"version-0.10.x/datamodel",title:"Defining your Data Model",description:"Model",source:"@site/versioned_docs/version-0.10.x/datamodel.md",permalink:"/docs/0.10.x/datamodel",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/datamodel.md",version:"0.10.x",sidebar:"version-0.10.x/docs",previous:{title:"What is Graphback and how do I get started?",permalink:"/docs/0.10.x/gettingstarted"},next:{title:"Graphback CRUD Config",permalink:"/docs/0.10.x/config"}},l=[{value:"Model",id:"model",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"model"},"Model"),Object(o.b)("p",null,"The Data model file is written in GraphQL syntax where you define your data types."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Note {\n  id: ID!\n  title: String!\n  description: String!\n  ## Relationship\n  comment: [Comment!]!\n}\n\ntype Comment {\n  id: ID!\n  title: String!\n  description: String!\n  note: Note!\n}\n")),Object(o.b)("p",null,"Every data model needs to have ",Object(o.b)("inlineCode",{parentName:"p"},"id: ID!")," field that will be used to uniquely represent every object in the database. Objects can also reference each other using relationships."),Object(o.b)("p",null,"For more information please refer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/database-schema-migrations"}),Object(o.b)("inlineCode",{parentName:"a"},"migrations"))," documentation "))}d.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,b=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);