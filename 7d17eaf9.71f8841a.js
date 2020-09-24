(window.webpackJsonp=window.webpackJsonp||[]).push([[600],{1306:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),l=p(a),u=n,m=l["".concat(i,".").concat(u)]||l[u]||d[u]||o;return a?r.a.createElement(m,c(c({ref:t},b),{},{components:a})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},655:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(1306)),i={id:"postgres",title:"Using PostgreSQL with Graphback",sidebar_label:"PostgreSQL"},c={unversionedId:"databases/postgres",id:"version-0.15.x/databases/postgres",isDocsHomePage:!1,title:"Using PostgreSQL with Graphback",description:"PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance. Graphback Knex Provider package provides instant integration to your PostgreSQL database, giving you a full implementation of the CRUD API.",source:"@site/versioned_docs/version-0.15.x/databases/postgres.md",slug:"/databases/postgres",permalink:"/docs/0.15.x/databases/postgres",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/databases/postgres.md",version:"0.15.x",sidebar_label:"PostgreSQL",sidebar:"version-0.15.x/docs",previous:{title:"Using MongoDB in Graphback",permalink:"/docs/0.15.x/databases/mongodb"},next:{title:"Using SQLite with Graphback",permalink:"/docs/0.15.x/databases/sqlite"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Creating Database Connection",id:"creating-database-connection",children:[]}],b={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.postgresql.org/"}),"PostgreSQL")," is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),"Graphback Knex Provider")," package provides instant integration to your PostgreSQL database, giving you a full implementation of the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/crud/overview"}),"CRUD API"),". "),Object(o.b)("p",null,"Additionally you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/graphql-migrations/intro"}),"GraphQL Migrations")," to perform database migrations using the models defined in the GraphQL schema created by Graphback."),Object(o.b)("p",null,"The provider is built on top of ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://knexjs.org/"}),"Knex.js"),", a flexible SQL query builder."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/runtime-knex knex\n")),Object(o.b)("p",null,"Install with yarn:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/runtime-knex knex\n")),Object(o.b)("p",null,"Running either of the two commands will install the ",Object(o.b)("inlineCode",{parentName:"p"},"Graphback Knex Provider")," (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),Object(o.b)("inlineCode",{parentName:"a"},"@graphback/runtime-knex")),") and the Knex.js library (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/knex"}),Object(o.b)("inlineCode",{parentName:"a"},"knex")),")."),Object(o.b)("h2",{id:"creating-database-connection"},"Creating Database Connection"),Object(o.b)("p",null,"You'll need a running PostgreSQL instance before initializing the connection. "),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"If you do not have a running instance, you can use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.docker.com/"}),"Docker")," to quickly spin up a PostgreSQL container by following the instructions given in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/_/postgres"}),"PostgreSQL Docker Image"),"."))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import Knex from \'knex\';\n\nconst dbConfig = {\n    client: "pg",\n    connection: {\n      user: "postgresql",\n      password: "password",\n      database: "users",\n      host: "localhost",\n      port: 5432\n    },\n    pool: { min: 5, max: 30 }\n};\n\nconst db = Knex(dbConfig);\n')),Object(o.b)("p",null,"The above code initiates a connection to a local running PostgreSQL database, using the ",Object(o.b)("inlineCode",{parentName:"p"},"postgresql:password")," credentials. We also create a database connection pool to a minimum of ",Object(o.b)("inlineCode",{parentName:"p"},"5")," and maximum of ",Object(o.b)("inlineCode",{parentName:"p"},"30"),". You can modify the configurations depending on your setup. "),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://knexjs.org/#Installation-client"}),"Knex Connection Options")," to learn more about configuring your database connection and the different connection options. "),Object(o.b)("h1",{id:"using-knex-provider"},"Using Knex Provider"),Object(o.b)("p",null,"The provider exposes a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-runtime-knex/modules/_createknexdbprovider_"}),Object(o.b)("inlineCode",{parentName:"a"},"createKnexDbProvider"))," method, which can be used to create data providers for each of your data models. "),Object(o.b)("p",null,"The code below shows how you can create such a data provider creator and how it can be passed to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback/modules/_buildgraphbackapi_"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import Knex from \'knex\';\nimport { migrateDB } from \'graphql-migrations\';\nimport { createKnexDbProvider } from \'@graphback/runtime-knex\';\n\n// highlight-start\n// database configuration\nconst dbConfig = {\n    client: "pg",\n    connection: {\n      user: "postgresql",\n      password: "password",\n      database: "users",\n      host: "localhost",\n      port: 5432\n    },\n    pool: { min: 5, max: 30 }\n};\n\n// create the connection to the database\nconst db = Knex(dbConfig);\n\n// the business model\nconst userModel = `\n """\n @model\n """\n type User {\n     id: ID!\n     username: String!\n }\n`;\n\n// create the user table in database \nmigrateDB(dbConfig, userModel, { }).then(() => {\n  console.log("Migrated database");\n});\n\n// create the postgres data provider\nconst dataProviderCreator = createKnexDbProvider(db);\n\n// highlight-end\n\n// Use the dataProvider in buildGraphbackAPI\nconst { resolvers, services, contextCreator } = buildGraphbackAPI(userModel, { dataProviderCreator });\n')),Object(o.b)("p",null,"The highlighted code does the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Define connection configuration to the database."),Object(o.b)("li",{parentName:"ul"},"Create a connection to PostgreSQL database using Knex."),Object(o.b)("li",{parentName:"ul"},"Define the user model."),Object(o.b)("li",{parentName:"ul"},"Perform the migrations using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/graphql-migrations/intro"}),"GraphQL Migrations")," to create the ",Object(o.b)("inlineCode",{parentName:"li"},"user")," table."),Object(o.b)("li",{parentName:"ul"},"And finally, create a data provider creator by using the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/modules/_createknexdbprovider_"}),Object(o.b)("inlineCode",{parentName:"a"},"createKnexDbProvider"))," API. ")),Object(o.b)("p",null,"The rest of the code uses ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback/modules/_buildgraphbackapi_"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," to create Graphback CRUD API based on the defined ",Object(o.b)("inlineCode",{parentName:"p"},"userModel")," model."),Object(o.b)("p",null,"Visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/model/datamodel"}),"Data Models")," pages to learn more about how to design your business models."))}p.isMDXComponent=!0}}]);