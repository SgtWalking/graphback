/*! For license information please see 0651136d.4a4b0cef.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1306:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},f=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(t),b=n,d=f["".concat(c,".").concat(b)]||f[b]||s[b]||a;return t?o.a.createElement(d,u(u({ref:r},l),{},{components:t})):o.a.createElement(d,u({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,c[1]=u;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1307:function(e,r,t){"use strict";e.exports=t(1308)},1308:function(e,r,t){"use strict";var n=t(1309),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function g(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||v}function j(){}function _(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||v}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var k=_.prototype=new j;k.constructor=_,n(k,g.prototype),k.isPureReactComponent=!0;var w={current:null},P=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,o={},c=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)P.call(r,n)&&!S.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),p=0;p<i;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:a,type:e,key:c,ref:u,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g,N=[];function $(e,r,t,n){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function D(e,r,t,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var u=!1;if(null===e)u=!0;else switch(o){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case c:u=!0}}if(u)return t(n,e,""===r?"."+I(e,0):r),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=r+I(o=e[i],i);u+=D(o,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=m&&e[m]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(o=e.next()).done;)u+=D(o=o.value,l=r+I(o,i++),t,n);else if("object"===o)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return u}function T(e,r,t){return null==e?0:D(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function M(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?L(e,n,t,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function L(e,r,t,n,o){var a="";null!=t&&(a=(""+t).replace(C,"$&/")+"/"),T(e,A,r=$(r,a,n,o)),R(r)}var U={current:null};function q(){var e=U.current;if(null===e)throw Error(h(321));return e}var F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return L(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;T(e,M,r=$(null,null,r,t)),R(r)},count:function(e){return T(e,(function(){return null}),null)},toArray:function(e){var r=[];return L(e,r,null,(function(e){return e})),r},only:function(e){if(!E(e))throw Error(h(143));return e}},r.Component=g,r.Fragment=u,r.Profiler=l,r.PureComponent=_,r.StrictMode=i,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var o=n({},e.props),c=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=w.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in r)P.call(r,p)&&!S.hasOwnProperty(p)&&(o[p]=void 0===r[p]&&void 0!==l?l[p]:r[p])}var p=arguments.length-2;if(1===p)o.children=t;else if(1<p){l=Array(p);for(var f=0;f<p;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:u,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.13.1"},1309:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,u,i=c(e),l=1;l<arguments.length;l++){for(var p in t=Object(arguments[l]))o.call(t,p)&&(i[p]=t[p]);if(n){u=n(t);for(var f=0;f<u.length;f++)a.call(t,u[f])&&(i[u[f]]=t[u[f]])}}return i}},85:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(1307),t(1306)),c={id:"_db_datamapper_.tableid",title:"TableID",sidebar_label:"TableID"},u={unversionedId:"api/graphback-core/interfaces/_db_datamapper_.tableid",id:"api/graphback-core/interfaces/_db_datamapper_.tableid",isDocsHomePage:!1,title:"TableID",description:"Hierarchy",source:"@site/../docs/api/graphback-core/interfaces/_db_datamapper_.tableid.md",slug:"/api/graphback-core/interfaces/_db_datamapper_.tableid",permalink:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tableid",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_db_datamapper_.tableid.md",version:"current",sidebar_label:"TableID"},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"name",id:"name",children:[]},{value:"<code>Optional</code> value",id:"optional-value",children:[]}]}],l={rightToc:i};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TableID"))),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tableid#name"}),"name")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_db_datamapper_.tableid#optional-value"}),"value"))),Object(a.b)("h2",{id:"properties-1"},"Properties"),Object(a.b)("h3",{id:"name"},"name"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"name"),": ",Object(a.b)("em",{parentName:"p"},"string")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c306e17/packages/graphback-core/src/db/dataMapper.ts#L11"}),"packages/graphback-core/src/db/dataMapper.ts:11"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"optional-value"},Object(a.b)("inlineCode",{parentName:"h3"},"Optional")," value"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"value"),"? : ",Object(a.b)("em",{parentName:"p"},"any")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/c306e17/packages/graphback-core/src/db/dataMapper.ts#L12"}),"packages/graphback-core/src/db/dataMapper.ts:12"))))}p.isMDXComponent=!0}}]);