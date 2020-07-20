(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{251:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(270)),i={id:"graphqlserve",title:"Running an API without code",sidebar_label:"API without code"},l={id:"version-0.12.x/intro/graphqlserve",isDocsHomePage:!1,title:"Running an API without code",description:"With GraphQL Serve you can have a GraphQL API running in just a few seconds without writing a single line of code - all you need is a data model .graphql file.",source:"@site/versioned_docs/version-0.12.x/intro/graphqlserve.md",permalink:"/docs/0.12.x/intro/graphqlserve",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/intro/graphqlserve.md",version:"0.12.x",sidebar_label:"API without code",sidebar:"version-0.12.x/docs",previous:{title:"Runtime API",permalink:"/docs/0.12.x/intro/serverless"},next:{title:"Data Model",permalink:"/docs/0.12.x/intro/datamodel"},latestVersionMainDocPermalink:"/docs/introduction"},c=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Running your codeless GraphQL server",id:"running-your-codeless-graphql-server",children:[]},{value:"Printing your GraphQL schema",id:"printing-your-graphql-schema",children:[]},{value:"Customising your server configuration",id:"customising-your-server-configuration",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With GraphQL Serve you can have a GraphQL API running in just a few seconds without writing a single line of code - all you need is a data model ",Object(o.b)("inlineCode",{parentName:"p"},".graphql")," file."),Object(o.b)("p",null,"GraphQL Serve is a CLI tool that leverages the power of Graphback to generate a codeless Node.js GraphQL API complete with schema and CRUD resolvers and a MongoDB database in-memory."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"You can install ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-serve")," globally with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm i -g graphql-serve\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"The bare minimum you need is a GraphQL file with your data models. Create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"Note.graphql")," and add the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@model")," annotation indicates that ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," is a data model and Graphback will generate resolvers, a CRUD service and data source for it. You can learn how to build more complex data models in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./datamodel"}),"Data Model"),"."),Object(o.b)("h3",{id:"running-your-codeless-graphql-server"},"Running your codeless GraphQL server"),Object(o.b)("p",null,"To start your server, run the following command from the same directory as ",Object(o.b)("inlineCode",{parentName:"p"},"Note.graphql"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gqls serve .\n")),Object(o.b)("p",null,"This will start a GraphQL server on a random port using the data models we just added."),Object(o.b)("p",null,"You can customise the directory of the data models:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"gqls serve ./path/to/models\n")),Object(o.b)("p",null,"You can specify which port to start the server on:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ gqls serve ./path/to/models --port 8080\n\nStarting server...\n\nListening at: http://localhost:8080/graphql\n")),Object(o.b)("h3",{id:"printing-your-graphql-schema"},"Printing your GraphQL schema"),Object(o.b)("p",null,"Graphback receives your data models as an input and processes them to generate a GraphQL schema complete with additional types, queries, mutations and subscriptions."),Object(o.b)("p",null,"GraphQL Serve allows you to print the resulting schema in your terminal with the ",Object(o.b)("inlineCode",{parentName:"p"},"print-schema")," subcommand:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gql"}),'$ gqlserve print-schema ./path/to/models\n\nGenerated schema:\n\ntype Mutation {\n  createNote(input: NoteInput): Note!\n  updateNote(input: NoteInput): Note!\n  deleteNote(input: NoteInput): Note!\n}\n\n""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  likes: Int\n}\n\ninput NoteInput {\n  id: ID\n  title: String\n  description: String\n  likes: Int\n}\n\ntype Query {\n  findAllNotes(limit: Int, offset: Int): [Note]!\n  findNotes(fields: NoteInput, limit: Int, offset: Int): [Note]!\n}\n\ntype Subscription {\n  newNote(input: NoteInput): Note!\n  updatedNote(input: NoteInput): Note!\n  deletedNote(input: NoteInput): Note!\n}\n')),Object(o.b)("h3",{id:"customising-your-server-configuration"},"Customising your server configuration"),Object(o.b)("p",null,"Graphback enabled applications use ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql-config.com"}),"GraphQL Config")," to let you control your GraphQL application. Graphback specific customisations are specified in the ",Object(o.b)("inlineCode",{parentName:"p"},"graphback")," extension. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./config"}),"Config")," to learn how you can customise your Graphback project configuration."),Object(o.b)("p",null,"GraphQL Serve is fully compatible with GraphQL Config. Running ",Object(o.b)("inlineCode",{parentName:"p"},"gqlserve [subcommand]")," in the same directory as your ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc")," file will use the Graphback configuration section to find your model directory, configure global CRUD methods and execute the plugin sequence."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ gqls serve                    \n\nNo port number specified.\nStarting server on random available port...\n\nListening at: http://localhost:34059/graphql\n")))}p.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(h,l({ref:t},s,{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);