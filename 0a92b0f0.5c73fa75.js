/*! For license information please see 0a92b0f0.5c73fa75.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),o=(r(225),r(224)),c={id:"dbintroduction",title:"Database",sidebar_label:"Introduction"},i={id:"db/dbintroduction",isDocsHomePage:!1,title:"Database",description:"Graphback provides a rich set of tools and APIs that help you get your database working with your GraphQL application in minutes.",source:"@site/../docs/db/introduction.md",permalink:"/docs/next/db/dbintroduction",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/db/introduction.md",version:"next",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"Live Updates for Graphback",permalink:"/docs/next/subscriptions/subintro"},next:{title:"Data Sources",permalink:"/docs/next/db/datasources"},latestVersionMainDocPermalink:"/docs/gettingstarted"},u=[{value:"Compatibility",id:"compatibility",children:[]}],l={rightToc:u};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback provides a rich set of tools and APIs that help you get your database working with your GraphQL application in minutes."),Object(o.b)("p",null,"Graphback has a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../crud/crudruntime"}),"CRUD abstraction")," with a number of out-of-the-box implementations for different datasources (see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./datasources"}),"Data sources"),")."),Object(o.b)("p",null,"Graphback integrates with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-migrations"}),Object(o.b)("inlineCode",{parentName:"a"},"graphql-migrations"))," so that you can migrate your database using your GraphQL schema. ",Object(o.b)("inlineCode",{parentName:"p"},"graphql-migrations")," can be used programatically from your application code using the ",Object(o.b)("inlineCode",{parentName:"p"},"migrateDB")," API. For more see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./dbmigrations"}),"Database Migrations"),"."),Object(o.b)("h2",{id:"compatibility"},"Compatibility"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Operation"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"PostgreSQL"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"MongoDB"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"SQLite"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Read"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Update"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delete"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Find"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Batch queries"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Relationships - 1:M"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Relationships - 1:1"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrations - Create database"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Migrations - Update database"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u274c")))))}b.isMDXComponent=!0},224:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=b(r),s=n,d=p["".concat(c,".").concat(s)]||p[s]||f[s]||o;return r?a.a.createElement(d,i({ref:t},l,{components:r})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},225:function(e,t,r){"use strict";e.exports=r(226)},226:function(e,t,r){"use strict";var n=r(227),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,b=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,s=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}function v(){}function N(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var w=N.prototype=new v;w.constructor=N,n(w,h.prototype),w.isPureReactComponent=!0;var k={current:null},S=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)S.call(t,n)&&!P.hasOwnProperty(n)&&(a[n]=t[n]);var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){for(var l=Array(u),b=0;b<u;b++)l[b]=arguments[b+2];a.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g,E=[];function R(e,t,r,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function D(e,t,r){return null==e?0:function e(t,r,n,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case o:case c:u=!0}}if(u)return n(a,t,""===r?"."+M(t,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var b=r+M(i=t[l],l);u+=e(i,b,n,a)}else if(null===t||"object"!=typeof t?b=null:b="function"==typeof(b=O&&t[O]||t["@@iterator"])?b:null,"function"==typeof b)for(t=b.call(t),l=0;!(i=t.next()).done;)u+=e(i=i.value,b=r+M(i,l++),n,a);else if("object"===i)throw n=""+t,Error(j(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return u}(e,"",t,r)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function T(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(_,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(_,"$&/")+"/"),D(e,T,t=R(t,o,n,a)),$(t)}var L={current:null};function U(){var e=L.current;if(null===e)throw Error(j(321));return e}var q={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;D(e,I,t=R(null,null,t,r)),$(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(j(143));return e}},t.Component=h,t.Fragment=i,t.Profiler=l,t.PureComponent=N,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,t.cloneElement=function(e,t,r){if(null==e)throw Error(j(267,e));var a=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(b in t)S.call(t,b)&&!P.hasOwnProperty(b)&&(a[b]=void 0===t[b]&&void 0!==l?l[b]:t[b])}var b=arguments.length-2;if(1===b)a.children=r;else if(1<b){l=Array(b);for(var p=0;p<b;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},227:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,u=c(e),l=1;l<arguments.length;l++){for(var b in r=Object(arguments[l]))a.call(r,b)&&(u[b]=r[b]);if(n){i=n(r);for(var p=0;p<i.length;p++)o.call(r,i[p])&&(u[i[p]]=r[i[p]])}}return u}}}]);