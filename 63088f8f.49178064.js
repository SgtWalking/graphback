/*! For license information please see 63088f8f.49178064.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(225),n(224)),i={id:"datasync-intro",title:"Data Synchronization",sidebar_label:"What is Data Synchronization?"},c={id:"datasync/datasync-intro",isDocsHomePage:!1,title:"Data Synchronization",description:"The @graphback/datasync package consisting of the Data Synchronization Schema plugin and compatible data sources, provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. Offix.",source:"@site/../docs/datasync/datasync-intro.md",permalink:"/docs/next/datasync/datasync-intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/datasync/datasync-intro.md",version:"next",sidebar_label:"What is Data Synchronization?",sidebar:"docs",previous:{title:"Graphback Supported Metadata",permalink:"/docs/next/metadata"},next:{title:"Soft Deletes with delta queries",permalink:"/docs/next/datasync/datasync-soft-delete"},latestVersionMainDocPermalink:"/docs/gettingstarted"},u=[{value:"Motivation",id:"motivation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package consisting of the Data Synchronization Schema plugin and compatible data sources, provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://offix.dev"}),"Offix"),". "),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"NOTE"),": Currently this plugin ",Object(a.b)("strong",{parentName:"p"},"only")," supports MongoDB data sources, with support for other kinds of data sources coming in a future release.")),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package is meant to be naturally extend ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://offix.dev"}),"Offix")," with a compliant GraphQL API:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Fetch data that was changed based on the client side timestamp"),Object(a.b)("li",{parentName:"ul"},"Ensure data consistency using timestamp provided.")),Object(a.b)("p",null,"It achieves this by:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Providing Delta Queries"),": Delta queries can be used by GraphQL clients to refresh changes in data between periods of connectivity outages. "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Providing server-side Conflict Resolution capabilities"),": For mutations that are applied offline, this provides the server with the ability to resolve conflicts between server and client.")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"The Graphback Data Synchronization package provides schema plugins as well as data sources for all supported data synchronization patterns."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/datasync\n")),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"There are two steps to implementing a data synchronization strategy:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add metadata to schema"),Object(a.b)("li",{parentName:"ul"},"Use the relevant plugin and data source")),Object(a.b)("p",null,"Currently the supported strategies are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/datasync/datasync-soft-delete"}),"Soft deletes with delta queries for MongoDB"))))}s.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},f=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(n),d=r,b=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(b,c({ref:t},l,{components:n})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";e.exports=n(226)},226:function(e,t,n){"use strict";var r=n(227),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||g}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var S=w.prototype=new j;S.constructor=w,r(S,O.prototype),S.isPureReactComponent=!0;var k={current:null},x=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,r)&&!P.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:k.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,N=[];function D(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function R(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var u=!1;if(null===t)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case i:u=!0}}if(u)return r(o,t,""===n?"."+T(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+T(c=t[l],l);u+=e(c,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=h&&t[h]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(c=t.next()).done;)u+=e(c=c.value,s=n+T(c,l++),r,o);else if("object"===c)throw r=""+t,Error(m(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function z(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(C,"$&/")+"/"),R(e,z,t=D(t,a,r,o)),$(t)}var q={current:null};function A(){var e=q.current;if(null===e)throw Error(m(321));return e}var U={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;R(e,M,t=D(null,null,t,n)),$(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(m(143));return e}},t.Component=O,t.Fragment=c,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var o=r({},e.props),i=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)x.call(t,s)&&!P.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1"},227:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,u=i(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(u[s]=n[s]);if(r){c=r(n);for(var f=0;f<c.length;f++)a.call(n,c[f])&&(u[c[f]]=n[c[f]])}}return u}}}]);