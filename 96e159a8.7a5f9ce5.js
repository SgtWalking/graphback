/*! For license information please see 96e159a8.7a5f9ce5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[721],{1306:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=f(t),d=n,b=p["".concat(i,".").concat(d)]||p[d]||s[d]||u;return t?o.a.createElement(b,a(a({ref:r},l),{},{components:t})):o.a.createElement(b,a({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,i=new Array(u);i[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var l=2;l<u;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1307:function(e,r,t){"use strict";e.exports=t(1308)},1308:function(e,r,t){"use strict";var n=t(1309),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,a=o?Symbol.for("react.fragment"):60107,c=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x={};function O(e,r,t){this.props=e,this.context=r,this.refs=x,this.updater=t||h}function g(){}function j(e,r,t){this.props=e,this.context=r,this.refs=x,this.updater=t||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=O.prototype;var k=j.prototype=new g;k.constructor=j,n(k,O.prototype),k.isPureReactComponent=!0;var _={current:null},w=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var n,o={},i=null,a=null;if(null!=r)for(n in void 0!==r.ref&&(a=r.ref),void 0!==r.key&&(i=""+r.key),r)w.call(r,n)&&!P.hasOwnProperty(n)&&(o[n]=r[n]);var c=arguments.length-2;if(1===c)o.children=t;else if(1<c){for(var l=Array(c),f=0;f<c;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===o[n]&&(o[n]=c[n]);return{$$typeof:u,type:e,key:i,ref:a,props:o,_owner:_.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var E=/\/+/g,C=[];function R(e,r,t,n){if(C.length){var o=C.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function N(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var a=!1;if(null===e)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case u:case i:a=!0}}if(a)return t(n,e,""===r?"."+I(e,0):r),1;if(a=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var l=r+I(o=e[c],c);a+=N(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),c=0;!(o=e.next()).done;)a+=N(o=o.value,l=r+I(o,c++),t,n);else if("object"===o)throw t=""+e,Error(v(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return a}function T(e,r,t){return null==e?0:N(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function K(e,r){e.func.call(e.context,r,e.count++)}function B(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?q(e,n,t,(function(e){return e})):null!=e&&(D(e)&&(e=function(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),n.push(e))}function q(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(E,"$&/")+"/"),T(e,B,r=R(r,u,n,o)),$(r)}var A={current:null};function L(){var e=A.current;if(null===e)throw Error(v(321));return e}var M={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return q(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;T(e,K,r=R(null,null,r,t)),$(r)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var r=[];return q(e,r,null,(function(e){return e})),r},only:function(e){if(!D(e))throw Error(v(143));return e}},r.Component=O,r.Fragment=a,r.Profiler=l,r.PureComponent=j,r.StrictMode=c,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,r.cloneElement=function(e,r,t){if(null==e)throw Error(v(267,e));var o=n({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(a=r.ref,c=_.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)w.call(r,f)&&!P.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:u,type:e.type,key:i,ref:a,props:o,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=D,r.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:b,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return L().useCallback(e,r)},r.useContext=function(e,r){return L().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return L().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return L().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return L().useLayoutEffect(e,r)},r.useMemo=function(e,r){return L().useMemo(e,r)},r.useReducer=function(e,r,t){return L().useReducer(e,r,t)},r.useRef=function(e){return L().useRef(e)},r.useState=function(e){return L().useState(e)},r.version="16.13.1"},1309:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,a,c=i(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(c[f]=t[f]);if(n){a=n(t);for(var p=0;p<a.length;p++)u.call(t,a[p])&&(c[a[p]]=t[a[p]])}}return c}},776:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),u=(t(1307),t(1306)),i={id:"_index_",title:"index",sidebar_label:"index"},a={unversionedId:"api/graphback-runtime-knex/modules/_index_",id:"api/graphback-runtime-knex/modules/_index_",isDocsHomePage:!1,title:"index",description:"Index",source:"@site/../docs/api/graphback-runtime-knex/modules/_index_.md",slug:"/api/graphback-runtime-knex/modules/_index_",permalink:"/docs/next/api/graphback-runtime-knex/modules/_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-runtime-knex/modules/_index_.md",version:"current",sidebar_label:"index"},c=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"KnexDBDataProvider",id:"knexdbdataprovider",children:[]},{value:"SQLiteKnexDBDataProvider",id:"sqliteknexdbdataprovider",children:[]},{value:"createKnexDbProvider",id:"createknexdbprovider",children:[]}]}],l={rightToc:c};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"index"},"Index"),Object(u.b)("h3",{id:"references"},"References"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_index_#knexdbdataprovider"}),"KnexDBDataProvider")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_index_#sqliteknexdbdataprovider"}),"SQLiteKnexDBDataProvider")),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_index_#createknexdbprovider"}),"createKnexDbProvider"))),Object(u.b)("h2",{id:"references-1"},"References"),Object(u.b)("h3",{id:"knexdbdataprovider"},"KnexDBDataProvider"),Object(u.b)("p",null,"\u2022 ",Object(u.b)("strong",{parentName:"p"},"KnexDBDataProvider"),":"),Object(u.b)("hr",null),Object(u.b)("h3",{id:"sqliteknexdbdataprovider"},"SQLiteKnexDBDataProvider"),Object(u.b)("p",null,"\u2022 ",Object(u.b)("strong",{parentName:"p"},"SQLiteKnexDBDataProvider"),":"),Object(u.b)("hr",null),Object(u.b)("h3",{id:"createknexdbprovider"},"createKnexDbProvider"),Object(u.b)("p",null,"\u2022 ",Object(u.b)("strong",{parentName:"p"},"createKnexDbProvider"),":"))}f.isMDXComponent=!0}}]);