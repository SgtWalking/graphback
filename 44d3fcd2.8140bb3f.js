/*! For license information please see 44d3fcd2.8140bb3f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[353],{1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||d[f]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1307:function(e,t,n){"use strict";e.exports=n(1308)},1308:function(e,t,n){"use strict";var r=n(1309),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,s=o?Symbol.for("react.profiler"):60114,u=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,d=o?Symbol.for("react.forward_ref"):60112,f=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||O}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=g.prototype;var N=w.prototype=new v;N.constructor=w,r(N,g.prototype),N.isPureReactComponent=!0;var C={current:null},_=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)_.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:C.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var P=/\/+/g,A=[];function E(e,t,n,r){if(A.length){var o=A.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function I(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>A.length&&A.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return n(r,e,""===t?"."+R(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var s=t+R(o=e[l],l);c+=T(o,s,n,r)}else if(null===e||"object"!=typeof e?s=null:s="function"==typeof(s=h&&e[h]||e["@@iterator"])?s:null,"function"==typeof s)for(e=s.call(e),l=0;!(o=e.next()).done;)c+=T(o=o.value,s=t+R(o,l++),n,r);else if("object"===o)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function D(e,t,n){return null==e?0:T(e,"",t,n)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,n,(function(e){return e})):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+n)),r.push(e))}function M(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(P,"$&/")+"/"),D(e,q,t=E(t,a,r,o)),I(t)}var U={current:null};function z(){var e=U.current;if(null===e)throw Error(y(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return M(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,$,t=E(null,null,t,n)),I(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!k(e))throw Error(y(143));return e}},t.Component=g,t.Fragment=c,t.Profiler=s,t.PureComponent=w,t.StrictMode=l,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)_.call(t,u)&&!x.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){s=Array(u);for(var p=0;p<u;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:a,type:e.type,key:i,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return z().useCallback(e,t)},t.useContext=function(e,t){return z().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return z().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return z().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return z().useLayoutEffect(e,t)},t.useMemo=function(e,t){return z().useMemo(e,t)},t.useReducer=function(e,t,n){return z().useReducer(e,t,n)},t.useRef=function(e){return z().useRef(e)},t.useState=function(e){return z().useState(e)},t.version="16.13.1"},1309:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=i(e),s=1;s<arguments.length;s++){for(var u in n=Object(arguments[s]))o.call(n,u)&&(l[u]=n[u]);if(r){c=r(n);for(var p=0;p<c.length;p++)a.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}},408:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(1307),n(1306)),i={id:"conflict-resolution-intro",title:"Setting up Conflict Resolution",sidebar_label:"Setting up server-side Conflict Resolution"},c={unversionedId:"datasync/conflict-resolution-intro",id:"datasync/conflict-resolution-intro",isDocsHomePage:!1,title:"Setting up Conflict Resolution",description:"Server-side conflict resolution is an additional feature which is meant to be used alongisde Delta Queries.",source:"@site/../docs/datasync/conflict-resolution-intro.md",slug:"/datasync/conflict-resolution-intro",permalink:"/docs/next/datasync/conflict-resolution-intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/datasync/conflict-resolution-intro.md",version:"current",sidebar_label:"Setting up server-side Conflict Resolution",sidebar:"docs",previous:{title:"Setting up Delta Queries",permalink:"/docs/next/datasync/delta-queries"},next:{title:"Conflict Resolution strategies",permalink:"/docs/next/datasync/conflict-resolution-strategies"}},l=[{value:"Setup",id:"setup",children:[{value:"Annotate the required models",id:"annotate-the-required-models",children:[]},{value:"Modify the template to use <code>createDataSyncAPI</code>",id:"modify-the-template-to-use-createdatasyncapi",children:[]}]},{value:"Example of Issuing a Delta Query",id:"example-of-issuing-a-delta-query",children:[]},{value:"Example Mutations",id:"example-mutations",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Server-side conflict resolution is an additional feature which is meant to be used alongisde Delta Queries. "),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"Create a new Graphback Project with:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npx create-graphback datasync-project\n")),Object(a.b)("p",null,"When the CLI asks you to pick a template, you may either:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Pick the ",Object(a.b)("inlineCode",{parentName:"li"},"apollo-mongo-datasync-server-ts")," template which has out-of-the-box delta queries and server-side conflict resolution"),Object(a.b)("li",{parentName:"ol"},"Pick the ",Object(a.b)("inlineCode",{parentName:"li"},"apollo-mongo-server-ts")," template and follow along with the rest of the tutorial")),Object(a.b)("p",null,"When the CLI has finished bootstrapping your project, you may follow along with the rest of the tutorial (if you picked ",Object(a.b)("inlineCode",{parentName:"p"},"apollo-mongo-server-ts"),") or you may skip to the end of the tutorial."),Object(a.b)("h3",{id:"annotate-the-required-models"},"Annotate the required models"),Object(a.b)("p",null,"Add the ",Object(a.b)("inlineCode",{parentName:"p"},"@datasync")," annotation to your model(s) in your GraphQL SDL found in the ",Object(a.b)("inlineCode",{parentName:"p"},"model")," folder:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql",metastring:"{3}","{3}":!0}),'""" \n@model\n@datasync(\n  ttl: 5184000\n)\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n}\n')),Object(a.b)("p",null,"This configuration transforms your model for Delta Queries (adding ",Object(a.b)("inlineCode",{parentName:"p"},"_lastUpdatedAt"),") as well as the following for Conflict resolution:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"A ",Object(a.b)("inlineCode",{parentName:"li"},"_version")," field in the model type used for fetching base document in conflict resolution."),Object(a.b)("li",{parentName:"ol"},"A ",Object(a.b)("inlineCode",{parentName:"li"},"_version")," field in the corresponding Mutation Input Type.")),Object(a.b)("p",null,"The model type then becomes:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql",metastring:"{9,10}","{9,10}":!0}),'""" \n@model\n@datasync(\n  ttl: 5184000\n)\n"""\ntype Comment {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _lastUpdatedAt: GraphbackTimestamp\n  _version: Int\n}\n')),Object(a.b)("p",null,"And the Mutation Input type for it would be:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql",metastring:"{5}","{5}":!0}),"input MutateCommentInput {\n  _id: GraphbackObjectID!\n  text: String\n  description: String\n  _version: Int!\n}\n")),Object(a.b)("p",null,"An example mutation can be found at the end of this page."),Object(a.b)("h3",{id:"modify-the-template-to-use-createdatasyncapi"},"Modify the template to use ",Object(a.b)("inlineCode",{parentName:"h3"},"createDataSyncAPI")),Object(a.b)("p",null,"In the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/templates-release/templates/ts-apollo-mongodb-backend/src/index.ts"}),Object(a.b)("inlineCode",{parentName:"a"},"src/index.ts"))," file of the template, use  ",Object(a.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," instead of ",Object(a.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { createDataSyncAPI } from '@graphback/datasync'\n\n\nconst {\n  typeDefs,\n  resolvers,\n  contextCreator\n} = createDataSyncAPI(\n  modelDefs,\n  {\n    db,\n    conflictConfig: {\n      enabled: true\n    }\n  }\n);\n")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"conflictConfig")," argument is used to either configure conflicts for all ",Object(a.b)("inlineCode",{parentName:"p"},"@datasync")," enabled models by directly setting global conflict parameters like ",Object(a.b)("inlineCode",{parentName:"p"},"enabled")," or configuring specific models via a ",Object(a.b)("inlineCode",{parentName:"p"},"models")," property. When conflicts are enabled for a specific model, a delta table is maintained for that model."),Object(a.b)("p",null,"An example entry in the delta table would look as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "_id": {\n        "$oid": "5f3b87ffcb1377481c391046"\n    },\n    "docId": {\n        "$oid": "5f3b87ffcb1377481c391045"\n    },\n    "_version": 1,\n    "document": {\n        "text": "Bizarre",\n        "description": "Who merged this stuff?",\n        "_version": 1,\n        "_deleted": false,\n        "_lastUpdatedAt": 1597736959165,\n        "_id": {\n            "$oid": "5f3b87ffcb1377481c391045"\n        }\n    },\n    "_ttl": {\n        "$date": "2020-08-25T07:49:19.181Z"\n    }\n}\n')),Object(a.b)("p",null,"To improve efficiency of queries on the ",Object(a.b)("inlineCode",{parentName:"p"},"delta")," table, a ",Object(a.b)("inlineCode",{parentName:"p"},"deltaTTL")," argument (in seconds) is used along with a MongoDB TTL Index to prune older entries from the delta table. In the current configuration, a default strategy of ",Object(a.b)("inlineCode",{parentName:"p"},"ClientSideWins")," is used. Please check the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/datasync/conflict-resolution-strategies"}),"Conflict Resolution Strategies")," documentation for more information on using different strategies as well as implementing custom Conflict Resolution strategies."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"You may only have delta queries for one model while having both delta queries and server-side conflict resolution for another model without them interfering with each other."))),Object(a.b)("h2",{id:"example-of-issuing-a-delta-query"},"Example of Issuing a Delta Query"),Object(a.b)("p",null,"Delta Queries remain the same but with the addition of a ",Object(a.b)("inlineCode",{parentName:"p"},"_version")," field as outlined in the above sections:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  syncComments(lastSync: 1590679886048) {\n      items {\n        _id\n        text\n        description\n        _lastUpdatedAt\n        _deleted\n        _version\n      },\n      lastSync,\n      limit\n  }\n}\n")),Object(a.b)("p",null,"An example response may be:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "syncComments": {\n      "items": [\n        {\n          "_id": "5f350f33c6656579a104057e",\n          "text": "Bizarre",\n          "description": "Who merged this stuff?",\n          "_lastUpdatedAt": 1597312819010,\n          "_deleted": false,\n          "_version": 1\n        }\n      ],\n      "lastSync": 1597312854109,\n      "limit": null\n    }\n  }\n}\n')),Object(a.b)("h2",{id:"example-mutations"},"Example Mutations"),Object(a.b)("p",null,"Both updates and deletes are implemented with a default server-side Conflict Resolution strategy when it is enabled i.e. The ",Object(a.b)("inlineCode",{parentName:"p"},"ClientWins")," strategy, this means that in the event of an update or delete conflict, the client side always wins. Taking an example, suppose the ",Object(a.b)("inlineCode",{parentName:"p"},"comment")," collection consists of the following document:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "_id": { "$oid": "5f350f33c6656579a104057e" },\n  "text": "Note 0",\n  "description": "Updated Placeholder",\n  "_version": 2,\n  "_deleted": false,\n  "_lastUpdatedAt": 1597313915015\n}\n')),Object(a.b)("p",null,"In order to update this document one has to issue a mutation as follows:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql",metastring:"{6}","{6}":!0}),'mutation {\n  updateComment(input: { \n    _id: "5f350f33c6656579a104057e", \n    description: "Another Update", \n    _version: 2\n  }) {\n    text\n    description,\n    _lastUpdatedAt\n    _version\n  }\n}\n')),Object(a.b)("p",null,"And receive a response like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateComment": {\n      "text": "Note 0",\n      "description": "Another Update",\n      "_lastUpdatedAt": 1597320268347,\n      "_version": 3\n    }\n  }\n}\n')),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"To issue mutations for a model with server-side Conflict resolution, the current value of the ",Object(a.b)("inlineCode",{parentName:"p"},"_version")," field must be passed in the input argument as is required by the corresponding Mutation Input Type."))),Object(a.b)("p",null,"Conflicts usually happen when a client does not have the most recent version of the data and tries to issue mutations. The server detects this using the aforementioned ",Object(a.b)("inlineCode",{parentName:"p"},"_version")," field and checks to see if fields that the client is trying to update have changed since the client last fetched the data."),Object(a.b)("p",null,"In case they have, the server calls upon the conflict resolution strategy to resolve the conflict. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/datasync/conflict-resolution-strategies"}),"Conflict Resolution Strategies")," for more info on these strategies."),Object(a.b)("p",null,"Following the previous example, if another client did not receive the above update, and tries to issue another update like so:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql",metastring:"{6}","{6}":!0}),'mutation {\n  updateComment(input: { \n    _id: "5f350f33c6656579a104057e", \n    title: "Newer Title", \n    _version: 2\n  }) {\n    text\n    description,\n    _lastUpdatedAt\n    _version\n  }\n}\n')),Object(a.b)("p",null,"No conflict will occur, even if the version field is out-of-date because the ",Object(a.b)("inlineCode",{parentName:"p"},"title")," field has not changed since this client fetched the document. Therefore, it may receive a response as such:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "updateComment": {\n      "text": "Newer Title",\n      "description": "Another Update",\n      "_lastUpdatedAt": 1597321969016,\n      "_version": 4\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);