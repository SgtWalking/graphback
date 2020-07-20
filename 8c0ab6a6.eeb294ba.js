(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{188:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(1),o=(t(0),t(270));const i={title:"OpenAPI migrations",id:"openapi"},a={id:"version-0.10.x/openapi",isDocsHomePage:!1,title:"OpenAPI migrations",description:"OpenAPI spec migration",source:"@site/versioned_docs/version-0.10.x/openapi.md",permalink:"/docs/0.10.x/openapi",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/openapi.md",version:"0.10.x",sidebar:"version-0.10.x/docs",previous:{title:"Client-side Queries",permalink:"/docs/0.10.x/clientqueries"},next:{title:"CLI commands",permalink:"/docs/0.10.x/commands"},latestVersionMainDocPermalink:"/docs/introduction"},p=[{value:"OpenAPI spec migration",id:"openapi-spec-migration",children:[]},{value:"Migration workflow",id:"migration-workflow",children:[]}],c={rightToc:p};function l({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"openapi-spec-migration"},"OpenAPI spec migration"),Object(o.b)("p",null,"OpenAPI (Swagger) is a specification for describing RESTful APIs.\nA specification can be generated based on an existing API with many open source solutions. "),Object(o.b)("p",null,"Developers can also utilize various OpenAPI generators thanks to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://openapi-generator.tech"}),"OpenAPI Generator")," project.\nGenerating a GraphQL schema from OpenAPI will almost always come with some information loss.\nDue to the strongly typed nature of GraphQL additional elements like Interfaces, Enums and Scalars\ndo not have direct mapping in OpenAPI definitions. "),Object(o.b)("p",null,"When working with Graphback developers can generate or manually build their existing\nOpenAPI definition and then transform it into a GraphQL schema."),Object(o.b)("h2",{id:"migration-workflow"},"Migration workflow"),Object(o.b)("p",null,"To migrate simply put your OpenAPI definition into the model folder (both YAML and JSON are supported)\nand execute:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"graphback openapi")," "),Object(o.b)("p",null,"By default the command will strip out all methods and leave only the OpenAPI types.\nDevelopers can manually apply Graphback annotations and tweak the schema for their own needs."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: Migration is going to apply ",Object(o.b)("inlineCode",{parentName:"p"},"ID!")," type only when OpenAPI definition is\nusing UUID type. In other scenarios ",Object(o.b)("inlineCode",{parentName:"p"},"ID!")," type needs to be applied manually to\nobject.")))}l.isMDXComponent=!0},270:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return t?o.a.createElement(b,p({ref:n},l,{components:t})):o.a.createElement(b,p({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);