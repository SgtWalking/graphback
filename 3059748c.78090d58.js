/*! For license information please see 3059748c.78090d58.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),o=n(6),a=(n(225),n(224)),c={id:"crud-schema",title:"Graphback CRUD Schema Plugin",sidebar_label:"CRUD Schema"},i={id:"plugins/crud-schema",isDocsHomePage:!1,title:"Graphback CRUD Schema Plugin",description:"Graphback CRUD Schema plugin",source:"@site/../docs/plugins/graphback-schema.md",permalink:"/docs/next/plugins/crud-schema",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/plugins/graphback-schema.md",version:"next",sidebar_label:"CRUD Schema",sidebar:"docs",previous:{title:"Graphback Plugins introduction",permalink:"/docs/next/plugins/plugin-intro"},next:{title:"Graphback CRUD Client Queries Plugin",permalink:"/docs/next/plugins/crud-client"},latestVersionMainDocPermalink:"/docs/gettingstarted"},u=[{value:"Graphback CRUD Schema plugin",id:"graphback-crud-schema-plugin",children:[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"Extending schema using other plugins",id:"extending-schema-using-other-plugins",children:[]}],l={rightToc:u};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"graphback-crud-schema-plugin"},"Graphback CRUD Schema plugin"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," creates your GraphQL schema with all input types, Query, Mutation and Subscription fields following recommended patters in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphqlcrud.org/"}),"GraphQL CRUD"),".\nThe plugin also creates your CRUD resolvers that can be used with your GraphQL schema."),Object(a.b)("h3",{id:"installation"},"Installation"),Object(a.b)("p",null,"This is the default plugin used by Graphback, so you do not need to install it to your GraphQL API. ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," allows you to write your generated schema to a ",Object(a.b)("inlineCode",{parentName:"p"},".ts"),", ",Object(a.b)("inlineCode",{parentName:"p"},".js")," or ",Object(a.b)("inlineCode",{parentName:"p"},".graphql")," file, so if you want to avail of this feature you will need to install the plugin."),Object(a.b)("p",null,"Installing with npm:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/codegen-schema\n")),Object(a.b)("h3",{id:"configuration"},"Configuration"),Object(a.b)("p",null,"By default ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," will not generate any schema file, instead creating an in-memory schema. You might sometimes need the schema file for compatibility with other libraries or frameworks, so Graphback allows you to automate the persistence of the schema to a file in your project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  /**\n   * RelativePath for the output files created by generator\n   */\n  outputPath: string\n")),Object(a.b)("h3",{id:"usage"},"Usage"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  const schemaPlugin = new SchemaCRUDPlugin({\n    format: 'graphql',\n    outputPath: './src/schema/schema.graphql'\n  });\n\n  const { schema } = buildGraphbackAPI(modelDefs, {\n    dataProviderCreator: createKnexDbProvider(db),\n    plugins: [\n      schemaPlugin\n    ]\n  });\n")),Object(a.b)("p",null,"You can also specify the directory of the schema:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"outputPath: './path/to/schema'")),Object(a.b)("p",null,"Graphback will create a file called ",Object(a.b)("inlineCode",{parentName:"p"},"schema.graphql")," in ",Object(a.b)("inlineCode",{parentName:"p"},"./path/to/schema/schema.graphql"),"."),Object(a.b)("h2",{id:"extending-schema-using-other-plugins"},"Extending schema using other plugins"),Object(a.b)("p",null,"You can extend ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," if you want to alter the customise the schema or resolver generation."))}s.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,b=p["".concat(c,".").concat(h)]||p[h]||f[h]||a;return n?o.a.createElement(b,i({ref:t},l,{components:n})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},225:function(e,t,n){"use strict";e.exports=n(226)},226:function(e,t,n){"use strict";var r=n(227),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,s=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,f=o?Symbol.for("react.forward_ref"):60112,h=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}function j(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var C=w.prototype=new j;C.constructor=w,r(C,v.prototype),C.isPureReactComponent=!0;var P={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];o.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:P.current}}function R(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,_=[];function D(e,t,n,r){if(_.length){var o=_.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>_.length&&_.push(e)}function U(e,t,n){return null==e?0:function e(t,n,r,o){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var u=!1;if(null===t)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case a:case c:u=!0}}if(u)return r(o,t,""===n?"."+$(t,0):n),1;if(u=0,n=""===n?".":n+":",Array.isArray(t))for(var l=0;l<t.length;l++){var s=n+$(i=t[l],l);u+=e(i,s,r,o)}else if(null===t||"object"!=typeof t?s=null:s="function"==typeof(s=m&&t[m]||t["@@iterator"])?s:null,"function"==typeof s)for(t=s.call(t),l=0;!(i=t.next()).done;)u+=e(i=i.value,s=n+$(i,l++),r,o);else if("object"===i)throw r=""+t,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return u}(e,"",t,n)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function G(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,n,(function(e){return e})):null!=e&&(R(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function I(e,t,n,r,o){var a="";null!=n&&(a=(""+n).replace(E,"$&/")+"/"),U(e,G,t=D(t,a,r,o)),N(t)}var q={current:null};function A(){var e=q.current;if(null===e)throw Error(y(321));return e}var M={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return I(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;U(e,T,t=D(null,null,t,n)),N(t)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!R(e))throw Error(y(143));return e}},t.Component=v,t.Fragment=i,t.Profiler=l,t.PureComponent=w,t.StrictMode=u,t.Suspense=h,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var o=r({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=P.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)k.call(t,s)&&!S.hasOwnProperty(s)&&(o[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=R,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return A().useCallback(e,t)},t.useContext=function(e,t){return A().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return A().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return A().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return A().useLayoutEffect(e,t)},t.useMemo=function(e,t){return A().useMemo(e,t)},t.useReducer=function(e,t,n){return A().useReducer(e,t,n)},t.useRef=function(e){return A().useRef(e)},t.useState=function(e){return A().useState(e)},t.version="16.13.1"},227:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,i,u=c(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))o.call(n,s)&&(u[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)a.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}}}]);