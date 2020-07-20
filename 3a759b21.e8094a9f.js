(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),i=n(6),o=(n(0),n(270)),a={title:"Client-side Queries",id:"clientqueries"},c={id:"version-0.10.x/clientqueries",isDocsHomePage:!1,title:"Client-side Queries",description:"Graphback allows users to generate client-side queries based on the data model. All the queries/mutations/subscriptions",source:"@site/versioned_docs/version-0.10.x/clientsidequeries.md",permalink:"/docs/0.10.x/clientqueries",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/clientsidequeries.md",version:"0.10.x",sidebar:"version-0.10.x/docs",previous:{title:"Relationships",permalink:"/docs/0.10.x/relationships"},next:{title:"OpenAPI migrations",permalink:"/docs/0.10.x/openapi"},latestVersionMainDocPermalink:"/docs/introduction"},s=[{value:"How it works",id:"how-it-works",children:[]},{value:"Examples",id:"examples",children:[{value:"Fragment",id:"fragment",children:[]},{value:"Query",id:"query",children:[]},{value:"Mutation",id:"mutation",children:[]},{value:"Subscription",id:"subscription",children:[]}]},{value:"Autogenerating forms based on server-side schema",id:"autogenerating-forms-based-on-server-side-schema",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback allows users to generate client-side queries based on the data model. All the queries/mutations/subscriptions\nwhich are generated through ",Object(o.b)("inlineCode",{parentName:"p"},"graphback generate")," for the user can also be generated as client-side queries. Users may follow up with using ",Object(o.b)("inlineCode",{parentName:"p"},"create-react-app")," or ",Object(o.b)("inlineCode",{parentName:"p"},"apollo-client")," to create client."),Object(o.b)("h2",{id:"how-it-works"},"How it works"),Object(o.b)("p",null,"Graphback asks whether you want to generate client-side queries in the ",Object(o.b)("inlineCode",{parentName:"p"},"graphback config")," command. Answering it yes will set ",Object(o.b)("inlineCode",{parentName:"p"},"client")," in ",Object(o.b)("inlineCode",{parentName:"p"},"graphback.json")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("p",null,"For a data model having"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"type Note {\n  id: ID!\n  title: String!\n  description: String!\n}\n")),Object(o.b)("p",null,"running ",Object(o.b)("inlineCode",{parentName:"p"},"graphback generate")," will generate all operations which are enabled in ",Object(o.b)("inlineCode",{parentName:"p"},"graphback.json")," or using ",Object(o.b)("inlineCode",{parentName:"p"},"annotations"),"."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("h3",{id:"fragment"},"Fragment"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'import gql from "graphql-tag"\n\nexport const NoteFragment = gql`\n  fragment NoteFields on Note {\n    id\n    title\n    description\n    published\n  }\n`\n')),Object(o.b)("h3",{id:"query"},"Query"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'import gql from "graphql-tag"\nimport { NoteFragment } from "../fragments/Note"\n\nexport const findAllNotes = gql`\n  query findAllNotes {\n    findAllNotes {\n      ...NoteFields\n    }\n  }\n\n  ${NoteFragment}\n`\n')),Object(o.b)("h3",{id:"mutation"},"Mutation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'import gql from "graphql-tag"\nimport { NoteFragment } from "../fragments/Note"\n\nexport const updateNote = gql`\n  mutation updateNote($id: ID!, title: String!, description: String!, published: Boolean!) {\n    updateNote(id: $id, input: {title: $title, description: $description, published: $published}) {\n      ...NoteFields\n    }\n  }\n\n  ${NoteFragment}\n`\n')),Object(o.b)("h3",{id:"subscription"},"Subscription"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'import gql from "graphql-tag"\nimport { CommentFragment } from "../fragments/Comment"\n\nexport const newComment = gql`\n  subscription newComment {\n    newComment {\n      ...CommentFields\n    }\n  }\n\n  ${CommentFragment}\n`\n\n')),Object(o.b)("h2",{id:"autogenerating-forms-based-on-server-side-schema"},"Autogenerating forms based on server-side schema"),Object(o.b)("p",null,"For react based applications developers can use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://uniforms.tools"}),"uniform.tools"),".\nUniforms can be used along with generated client queries to automatically build dynamic forms with labels and validation."))}p.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);