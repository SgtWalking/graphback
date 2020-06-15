/*! For license information please see b20b8c3c.7e56a80a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),a=(r(220),r(219)),i={id:"crudruntime",title:"CRUD Runtime Abstraction",sidebar_label:"CRUD Abstraction"},c={id:"crud/crudruntime",title:"CRUD Runtime Abstraction",description:"A Graphback CRUD abstraction is available as part of the `@graphback/runtime` package, providing a way to programatically define different datasources and configure them without code generation.",source:"@site/../docs/crud/crudruntime.md",permalink:"/docs/next/crud/crudruntime",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/crud/crudruntime.md",version:"next",sidebar_label:"CRUD Abstraction",sidebar:"docs",previous:{title:"Graphback CRUD Specification",permalink:"/docs/next/crud/crudspec"},next:{title:"Graphback Plugins introduction",permalink:"/docs/next/plugins/plugin-intro"}},u=[{value:"GraphbackCRUDService",id:"graphbackcrudservice",children:[]},{value:"GraphbackDataProvider",id:"graphbackdataprovider",children:[]},{value:"Adding custom resolvers to runtime",id:"adding-custom-resolvers-to-runtime",children:[]},{value:"How Runtime relates to the resolvers",id:"how-runtime-relates-to-the-resolvers",children:[]},{value:"Why we need CRUD Abstraction",id:"why-we-need-crud-abstraction",children:[]}],l={rightToc:u};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A Graphback CRUD abstraction is available as part of the ",Object(a.b)("inlineCode",{parentName:"p"},"@graphback/runtime")," package, providing a way to programatically define different datasources and configure them without code generation."),Object(a.b)("p",null,"Runtime is abstracted into two interfaces:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GraphbackCRUDService"),": layer that wraps data provider, can implement custom behaviour like subscriptions or live queries"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"GraphbackDataProvider"),": data access layer ")),Object(a.b)("h3",{id:"graphbackcrudservice"},"GraphbackCRUDService"),Object(a.b)("p",null,"Graphback provides the following implementations of ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"CRUDService"),": implements subscriptions and logging. Used by default in resolver generator")),Object(a.b)("h3",{id:"graphbackdataprovider"},"GraphbackDataProvider"),Object(a.b)("p",null,"Graphback provides the following implementations of ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider"),":"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),Object(a.b)("inlineCode",{parentName:"a"},"PgKnexDBDataProvider")),": PostgreSQL data provider using ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://knexjs.org/"}),"Knex.js")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-mongo"}),Object(a.b)("inlineCode",{parentName:"a"},"MongoDBDataProvider")),": Data provider for MongoDB"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/@graphback/runtime-knex"}),Object(a.b)("inlineCode",{parentName:"a"},"KnexDBDataProvider")),": Data provider using ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://knexjs.org/"}),"Knex.js"))),Object(a.b)("p",null,"Your resolvers can use any of these data providers by swapping the implementation and attaching it to your application context. See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../db/datasources"}),"Data Sources")," to learn how."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/runtime.png",alt:null}))),Object(a.b)("h2",{id:"adding-custom-resolvers-to-runtime"},"Adding custom resolvers to runtime"),Object(a.b)("p",null,"Runtime layer will come with autogenerated schema that will also include custom resolvers provided in model.\nDevelopers can append their custom resolvers to resolver array to extend runtime layer."),Object(a.b)("h2",{id:"how-runtime-relates-to-the-resolvers"},"How Runtime relates to the resolvers"),Object(a.b)("p",null,"Graphback resolver generator plugin generates resolvers that utilize one of the preconfigured ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," implementations.\n",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," implementation is using ",Object(a.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider"),"."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/runtime.png",alt:null}))),Object(a.b)("p",null,"Instances need to be added to ",Object(a.b)("inlineCode",{parentName:"p"},"context")," object in resolver for example:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"findComments: (parent, args, context) => {\n  // Comment is an implementation of `GraphbackCRUDService` \n  return context.Comment.find();\n};\n")),Object(a.b)("h2",{id:"why-we-need-crud-abstraction"},"Why we need CRUD Abstraction"),Object(a.b)("p",null,"Code generators produce a large amount of the code that needs to be maintained later.\nHaving generator code diverging from original form will prevent developers from utilizing generators.\nGraphback tries to address many challenging issues like data caching, batching, consistency etc. that will be hard to implement and test by utilizing only code generation.\nThat is why our default resolver generators rely on CRUD abstraction layer that can be used to connect Graphback to any datasource without writing generator plugin."))}p.isMDXComponent=!0},219:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},s=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(r),b=n,d=s["".concat(i,".").concat(b)]||s[b]||f[b]||a;return r?o.a.createElement(d,c({ref:t},l,{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},220:function(e,t,r){"use strict";e.exports=r(221)},221:function(e,t,r){"use strict";var n=r(222),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}function O(){}function w(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||v}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var k=w.prototype=new O;k.constructor=w,n(k,j.prototype),k.isPureReactComponent=!0;var C={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function D(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!x.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,N=[];function _(e,t,r,n){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function U(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case i:u=!0}}if(u)return n(o,t,""===r?"."+$(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var p=r+$(c=t[l],l);u+=e(c,p,n,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=h&&t[h]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),l=0;!(c=t.next()).done;)u+=e(c=c.value,p=r+$(c,l++),n,o);else if("object"===c)throw n=""+t,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return u}(e,"",t,r)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function G(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?T(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function T(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),U(e,A,t=_(t,a,n,o)),E(t)}var M={current:null};function I(){var e=M.current;if(null===e)throw Error(y(321));return e}var q={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return T(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;U(e,G,t=_(null,null,t,r)),E(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return T(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(y(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var o=n({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in t)S.call(t,p)&&!x.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==l?l[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){l=Array(p);for(var s=0;s<p;s++)l[s]=arguments[s+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=D,t.createFactory=function(e){var t=D.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return I().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,r){return I().useReducer(e,t,r)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="16.13.1"},222:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var r,c,u=i(e),l=1;l<arguments.length;l++){for(var p in r=Object(arguments[l]))o.call(r,p)&&(u[p]=r[p]);if(n){c=n(r);for(var s=0;s<c.length;s++)a.call(r,c[s])&&(u[c[s]]=r[c[s]])}}return u}}}]);