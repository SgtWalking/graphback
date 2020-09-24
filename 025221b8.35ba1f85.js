/*! For license information please see 025221b8.35ba1f85.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1306:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(o,".").concat(d)]||p[d]||s[d]||c;return r?a.a.createElement(f,i(i({ref:t},l),{},{components:r})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1307:function(e,t,r){"use strict";e.exports=r(1308)},1308:function(e,t,r){"use strict";var n=r(1309),a="function"==typeof Symbol&&Symbol.for,c=a?Symbol.for("react.element"):60103,o=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,b=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,O=a?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}function v(){}function N(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var w=N.prototype=new v;w.constructor=N,n(w,h.prototype),w.isPureReactComponent=!0;var x={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,r){var n,a={},o=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var b=arguments.length-2;if(1===b)a.children=r;else if(1<b){for(var l=Array(b),u=0;u<b;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in b=e.defaultProps)void 0===a[n]&&(a[n]=b[n]);return{$$typeof:c,type:e,key:o,ref:i,props:a,_owner:x.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var _=/\/+/g,E=[];function R(e,t,r,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function M(e,t,r,n){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var i=!1;if(null===e)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case c:case o:i=!0}}if(i)return r(n,e,""===t?"."+q(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var b=0;b<e.length;b++){var l=t+q(a=e[b],b);i+=M(a,l,r,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=j&&e[j]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),b=0;!(a=e.next()).done;)i+=M(a=a.value,l=t+q(a,b++),r,n);else if("object"===a)throw r=""+e,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return i}function D(e,t,r){return null==e?0:M(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function A(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?U(e,n,r,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+r)),n.push(e))}function U(e,t,r,n,a){var c="";null!=r&&(c=(""+r).replace(_,"$&/")+"/"),D(e,L,t=R(t,c,n,a)),$(t)}var I={current:null};function T(){var e=I.current;if(null===e)throw Error(m(321));return e}var G={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return U(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,A,t=R(null,null,t,r)),$(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return U(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(m(143));return e}},t.Component=h,t.Fragment=i,t.Profiler=l,t.PureComponent=N,t.StrictMode=b,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,r){if(null==e)throw Error(m(267,e));var a=n({},e.props),o=e.key,i=e.ref,b=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,b=x.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)k.call(t,u)&&!S.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:c,type:e.type,key:o,ref:i,props:a,_owner:b}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return T().useCallback(e,t)},t.useContext=function(e,t){return T().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return T().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return T().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return T().useLayoutEffect(e,t)},t.useMemo=function(e,t){return T().useMemo(e,t)},t.useReducer=function(e,t,r){return T().useReducer(e,t,r)},t.useRef=function(e){return T().useRef(e)},t.useState=function(e){return T().useState(e)},t.version="16.13.1"},1309:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,b=o(e),l=1;l<arguments.length;l++){for(var u in r=Object(arguments[l]))a.call(r,u)&&(b[u]=r[u]);if(n){i=n(r);for(var p=0;p<i.length;p++)c.call(r,i[p])&&(b[i[p]]=r[i[p]])}}return b}},71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return b})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),c=(r(1307),r(1306)),o={id:"overview",title:"Overview",sidebar_label:"Overiew"},i={unversionedId:"databases/overview",id:"databases/overview",isDocsHomePage:!1,title:"Overview",description:"At the core of a CRUD API is the database that Graphback interacts with by providing a rich set of tools and APIs that help you get your database working with your GraphQL application in minutes.",source:"@site/../docs/databases/introduction.md",slug:"/databases/overview",permalink:"/docs/next/databases/overview",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/databases/introduction.md",version:"current",sidebar_label:"Overiew",sidebar:"docs",previous:{title:"Using Graphback in custom resolvers",permalink:"/docs/next/resolvers/custom-resolvers"},next:{title:"Using MongoDB in Graphback",permalink:"/docs/next/databases/mongodb"}},b=[{value:"Compatibility",id:"compatibility",children:[]}],l={rightToc:b};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"At the core of a CRUD API is the database that Graphback interacts with by providing a rich set of tools and APIs that help you get your database working with your GraphQL application in minutes."),Object(c.b)("p",null,"Graphback has a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"../crud/overview"}),"CRUD abstraction")," with a number of out-of-the-box implementations for ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/databases/postgres"}),"PostgreSQL"),", ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/databases/mongodb"}),"MongoDB")," databases. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/databases/sqlite"}),"SQLite")," database is also partially supported and we do not recommend using it in production environment, however it is a good choice for testing or development purposes."),Object(c.b)("p",null,"Additionally, Graphback integrates with ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/graphql-migrations/intro"}),"GraphQL Migrations")," so that you can migrate your databases using your business models defined in the GraphQL schema. "),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"GraphQL Migrations only operates on relational databases e.g PostgreSQL and does not work with MongoDB as shown in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#compatibility"}),"compatibility")," table below."))),Object(c.b)("h2",{id:"compatibility"},"Compatibility"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Operation"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/databases/postgres"}),"PostgreSQL")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/databases/mongodb"}),"MongoDB")),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(c.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/databases/sqlite"}),"SQLite")))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"../crud/mutations#create"}),"Create")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"../crud/mutations#update"}),"Update")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"../crud/mutations#delete"}),"Delete")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"../crud/queries#get"}),"Get")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"../crud/queries#find"}),"Find")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"../crud/queries#filtering"}),"Filtering")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"../crud/queries#pagination"}),"Pagination")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"../crud/queries#ordering"}),"Ordering")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Batch queries"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/crud/subscriptions"}),"Subscriptions")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Relationships - 1:M"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Relationships - 1:1"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/graphql-migrations/intro"}),"Migrations")," - Create database"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/graphql-migrations/intro"}),"Migrations")," - Update database"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u274c")))))}u.isMDXComponent=!0}}]);