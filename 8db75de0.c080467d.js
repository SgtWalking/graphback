(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(224)),i={title:"Config",id:"config"},c={id:"version-0.11.x/intro/config",isDocsHomePage:!1,title:"Config",description:"Graphback can generate source code, migrate your database or start fully functional server basing just on your GraphQL Model.",source:"@site/versioned_docs/version-0.11.x/intro/config.md",permalink:"/docs/0.11.x/intro/config",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.11.x/intro/config.md",version:"0.11.x",sidebar:"version-0.11.x/",previous:{title:"Data Model",permalink:"/docs/0.11.x/intro/datamodel"},next:{title:"Graphback CRUD Specification",permalink:"/docs/0.11.x/crud/crudspec"},latestVersionMainDocPermalink:"/docs/gettingstarted"},l=[{value:"Configuration",id:"configuration",children:[{value:"Changing CRUD configuration per type",id:"changing-crud-configuration-per-type",children:[]}]},{value:"Database Migrations",id:"database-migrations",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback can generate source code, migrate your database or start fully functional server basing just on your GraphQL Model.\nGraphback Config allows you to control and configure all those use cases for your own needs. "),Object(o.b)("p",null,"The Core of Graphback will take your GraphQL Schema types annotated by ",Object(o.b)("inlineCode",{parentName:"p"},"model")," and perform various operations on them like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Code generation"),Object(o.b)("li",{parentName:"ul"},"Database migrations"),Object(o.b)("li",{parentName:"ul"},"InMemory GraphQL API. ")),Object(o.b)("p",null,"All those operations could be controlled by ",Object(o.b)("inlineCode",{parentName:"p"},"crud")," flags that enable or disable various data access methods in plugins and runtime.\nThese include ",Object(o.b)("inlineCode",{parentName:"p"},"create"),", ",Object(o.b)("inlineCode",{parentName:"p"},"update"),", ",Object(o.b)("inlineCode",{parentName:"p"},"delete"),", ",Object(o.b)("inlineCode",{parentName:"p"},"find")," and ",Object(o.b)("inlineCode",{parentName:"p"},"findAll"),"."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Graphback allows you to customize all processes by using the open configuration standard ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql-config.com"}),"GraphQL Config"),"."),Object(o.b)("p",null,"Each project needs to have a ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," file available in the root folder. In new projects this will be added for you. For existing projects you can run ",Object(o.b)("inlineCode",{parentName:"p"},"graphback config")," to generate one for you - see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/existingproject"}),"Adding to existing project"),"."),Object(o.b)("p",null,"Typical configuration looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"## Schema is not used by graphback but it is required by graphql-config and can be used by other extensions\n## Usually it should match the Graphback schema generator plugin\nschema: ./server/src/schema/*.graphql\n## Documents are not used by graphback but it is required by graphql-config and can be used by other extensions\n## Usually it should match the Graphback client generator plugin\ndocuments: ./client/src/graphql/**/*.graphql\nextensions:\n  # Graphback configuration\n  graphback:\n    ##  Location to file that is contains GraphQL schema that will be processed by Graphback\n    model: ./model\n    ## Global flags for CRUD methods that will be used in plugins\n    crud:\n      create: true\n      update: true\n      findAll: true\n      find: true\n      delete: true\n      subCreate: true\n      subUpdate: true\n      subDelete: true\n    ## List of the codegen plugins \n    plugins:\n        graphback-schema:\n          format: graphql\n          outputPath: ./server/src/schema\n        graphback-client:\n          format: 'graphql'\n          outputPath: ./client/src/graphql\n        graphback-resolvers:\n          format: ts\n          outputPath: ./server/src/resolvers\n")),Object(o.b)("p",null,"Changing ",Object(o.b)("inlineCode",{parentName:"p"},"crud")," flags and running ",Object(o.b)("inlineCode",{parentName:"p"},"graphback generate")," will update the ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," and ",Object(o.b)("inlineCode",{parentName:"p"},"resolvers")," using the latest config."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": For subscriptions, the user needs to change the value of the respective operations to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". For example, changing ",Object(o.b)("inlineCode",{parentName:"p"},"subDelete")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," won't work unless, ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".")),Object(o.b)("h3",{id:"changing-crud-configuration-per-type"},"Changing CRUD configuration per type"),Object(o.b)("p",null,"Generator config applies the config to all the types in your schema.\nGraphback allows you to change these for any single type using annotations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n@crud.create: false\n"""\ntype User {\n  ....\n}\n')),Object(o.b)("p",null,"or to enable it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@crud.create\n"""\ntype User {\n  ....\n}\n')),Object(o.b)("h4",{id:"available-options"},"Available Options"),Object(o.b)("p",null,"All config options can be replicated by specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"@crud.")," prefix"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"@crud.create: true\n@crud.update: true\n@crud.delete: true\n@crud.find: true\n@crud.findAll: true\n@crud.subCreate: true\n@crud.subUpdate: true\n@crud.subDelete: true\n")),Object(o.b)("p",null,"You can use these annotations to have more control over individual elements. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'"""\n@model\n@crud.delete\n"""\ntype Note {\n  ...\n}\n')),Object(o.b)("p",null,"will create the ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," mutation for ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," type."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Annotations override the configuration values in ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc.yml"),".")),Object(o.b)("h2",{id:"database-migrations"},"Database Migrations"),Object(o.b)("p",null,"Graphback can migrate your database structure using your GraphQL schema."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Full database migration support is currently only supported for PostgreSQL databases. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../db/dbintroduction#compatibility"}),"Database Compatibility"),".")),Object(o.b)("p",null,"To enable migrations to work, add the ",Object(o.b)("inlineCode",{parentName:"p"},"dbmigrations")," extension to your ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"...\nextensions:\n  # Graphback configuration\n  graphback:\n    ...\n  ## graphql-migration config that can be also used in application\n  ## Please do not connect it to shared database as Graphback will automatically \n  ## execute dlls statements that can affect other applications.\n  dbmigrations:\n    ## See knex.js for db specific config format\n    client: pg\n    connection:\n      user: postgresql\n      password: postgres\n      database: users\n      host: localhost\n      port: 55432\n")))}b.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,g=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(g,c({ref:t},p,{components:n})):r.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);