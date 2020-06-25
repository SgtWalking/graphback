/*! For license information please see aaaa409b.5aa46b5a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(225),n(224)),c={id:"datasources",title:"Data Sources"},i={id:"db/datasources",isDocsHomePage:!1,title:"Data Sources",description:"Your Graphback enabled API can work with a variety of databases. Our runtime libraries provide datasources for the following databases:",source:"@site/../docs/db/datasources.md",permalink:"/docs/next/db/datasources",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/db/datasources.md",version:"next",sidebar:"docs",previous:{title:"Database",permalink:"/docs/next/db/dbintroduction"},next:{title:"Database Migrations",permalink:"/docs/next/db/dbmigrations"},latestVersionMainDocPermalink:"/docs/gettingstarted"},l=[{value:"PostgreSQL",id:"postgresql",children:[{value:"Installation",id:"installation",children:[]},{value:"Adding to your project",id:"adding-to-your-project",children:[]}]},{value:"MongoDB",id:"mongodb",children:[{value:"Installation",id:"installation-1",children:[]},{value:"Adding to your project",id:"adding-to-your-project-1",children:[]}]},{value:"SQLite",id:"sqlite",children:[{value:"Installation",id:"installation-2",children:[]},{value:"Adding to your project",id:"adding-to-your-project-2",children:[]}]},{value:"Using data sources",id:"using-data-sources",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Your Graphback enabled API can work with a variety of databases. Our runtime libraries provide datasources for the following databases:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#postgresql"}),"PostgreSQL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#mongodb"}),"MongoDB")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"#sqlite"}),"SQLite"))),Object(a.b)("p",null,"Each of these datasources give you a database-specific implementation of our ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../crud/crudspec"}),"CRUD Specification"),". For more on how these data sources work see ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../crud/crudruntime"}),"CRUD Runtime Abstraction"),"."),Object(a.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,"Install with npm:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @graphback/runtime-knex\n")),Object(a.b)("p",null,"You will also need to have ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://knexjs.org/"}),"Knex.js")," installed:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install knex\n")),Object(a.b)("h3",{id:"adding-to-your-project"},"Adding to your project"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"createKnexPGCRUDRuntimeServices")," method creates a CRUD service and PostgreSQL data provider for each of your models.  "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createKnexPGCRUDRuntimeServices")," has the following arguments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"models: GraphbackPubSubModel[]"),": List of your Graphback models and their individual configurations. This is generated with your resolvers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"schema: GraphQLSchema"),": Your GraphQL schema."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"db: Knex"),": Knex database instance."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pubSub: PubSubEngine"),": PubSub instance.")),Object(a.b)("p",null,"You can then attach these runtime services to your server context:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createKnexPGCRUDRuntimeServices } from '@graphback/runtime-knex';\nimport { buildSchema } from 'graphql';\nimport Knex from 'knex';\nimport { PubSub } from 'graphql-subscriptions';\nimport { models } from './resolvers/models';\nimport resolvers from './resolvers/resolvers';\n\nconst schema = buildSchema(...);\n\nconst db = Knex(...);\n\nconst pubSub = new PubSub();\n\n// create runtime services for Postgres\nconst context = createKnexPGCRUDRuntimeServices(models, schema, db, pubSub);\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context\n});\n")),Object(a.b)("h2",{id:"mongodb"},"MongoDB"),Object(a.b)("h3",{id:"installation-1"},"Installation"),Object(a.b)("p",null,"Install with npm:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @graphback/runtime-mongo\n")),Object(a.b)("p",null,"You will also need to have a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mongodb/node-mongodb-native"}),"MongoDB Node.js Driver")," installed:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"npm install mongodb\n")),Object(a.b)("h3",{id:"adding-to-your-project-1"},"Adding to your project"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"createMongoCRUDRuntimeContext")," method creates a CRUD service and MongoDB data provider for each of your models.  "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createMongoCRUDRuntimeContext")," has the following arguments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"models: GraphbackPubSubModel[]"),": List of your Graphback models and their individual configurations. This is generated with your resolvers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"schema: GraphQLSchema"),": Your GraphQL schema."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"db: Db"),": Mongo Database instance."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pubSub: PubSubEngine"),": PubSub instance.")),Object(a.b)("p",null,"You can then attach these runtime services to your server context:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createMongoCRUDRuntimeContext } from '@graphback/runtime-mongo';\nimport { buildSchema } from 'graphql';\nimport { Db } from \"mongodb\";\nimport { PubSub } from 'graphql-subscriptions';\nimport { models } from './resolvers/models';\nimport resolvers from './resolvers/resolvers';\n\nconst schema = buildSchema(...);\n\n// Example Mongo Connection URL\nconst url = 'mongodb://mongodb:mongo@localhost:27017/admin';\n\nconst mongoClient = await MongoClient.connect(url);\n// get db instance\nconst db = mongoClient.db('users');\n\nconst pubSub = new PubSub();\n\n// create runtime services for MongoDB\nconst context = createMongoCRUDRuntimeContext(models, schema, db, pubSub);\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context\n});\n")),Object(a.b)("h2",{id:"sqlite"},"SQLite"),Object(a.b)("h3",{id:"installation-2"},"Installation"),Object(a.b)("p",null,"Install with npm:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @graphback/runtime-knex\n")),Object(a.b)("p",null,"You will also need to have ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://knexjs.org/"}),"Knex.js")," installed:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install knex\n")),Object(a.b)("h3",{id:"adding-to-your-project-2"},"Adding to your project"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"createKnexCRUDRuntimeServices")," method creates a CRUD service and PostgreSQL data provider for each of your models.  "),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"createKnexCRUDRuntimeServices")," has the following arguments:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"models: GraphbackPubSubModel[]"),": List of your Graphback models and their individual configurations. This is generated with your resolvers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"schema: GraphQLSchema"),": Your GraphQL schema."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"db: Knex"),": Knex database instance."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"pubSub: PubSubEngine"),": PubSub instance.")),Object(a.b)("p",null,"You can then attach these runtime services to your server context:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createKnexCRUDRuntimeServices } from '@graphback/runtime-knex';\nimport { buildSchema } from 'graphql';\nimport Knex from 'knex';\nimport { PubSub } from 'graphql-subscriptions';\nimport { models } from './resolvers/models';\nimport resolvers from './resolvers/resolvers';\n\nconst schema = buildSchema(...);\n\nconst db = Knex(...);\n\nconst pubSub = new PubSub();\n\n// create runtime services for SQLite\nconst context = createKnexCRUDRuntimeServices(models, schema, db, pubSub);\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context\n});\n")),Object(a.b)("h2",{id:"using-data-sources"},"Using data sources"),Object(a.b)("p",null,"Your data sources are attached to the application context and can be accessed in every resolver function:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"findComments: (parent, args, context) => {\n    return context.Comment.find();\n};\n")))}s.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||a;return n?o.a.createElement(f,i({ref:t},u,{components:n})):o.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";e.exports=n(226)},226:function(e,t,n){"use strict";var r=n(227),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,u=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,b=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,f=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}function v(){}function S(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var x=S.prototype=new v;x.constructor=S,r(x,g.prototype),x.isPureReactComponent=!0;var w={current:null},C=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)C.call(t,r)&&!N.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,D=[];function E(e,t,n,r){if(D.length){var o=D.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function _(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function U(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case c:l=!0}}if(l)return r(o,t,""===n?"."+M(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var s=n+M(i=t[u],u);l+=e(i,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,s=n+M(i,u++),r,o);else if("object"===i)throw r=""+t,Error(j(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+n)),r.push(e))}function A(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(R,"$&/")+"/"),U(e,$,t=E(t,a,r,o)),_(t)}var I={current:null};function T(){var e=I.current;if(null===e)throw Error(j(321));return e}var q={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return A(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;U(e,L,t=E(null,null,t,n)),_(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(j(143));return e}},t.Component=g,t.Fragment=i,t.Profiler=u,t.PureComponent=S,t.StrictMode=l,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,n){if(null==e)throw Error(j(267,e));var o=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=w.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)C.call(t,s)&&!N.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){u=Array(s);for(var b=0;b<s;b++)u[b]=arguments[b+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:b,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return T().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,n){return T().useReducer(e,t,n)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="16.13.1"},227:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var s in n=Object(arguments[u]))o.call(n,s)&&(l[s]=n[s]);if(r){i=r(n);for(var b=0;b<i.length;b++)a.call(n,i[b])&&(l[i[b]]=n[i[b]])}}return l}}}]);