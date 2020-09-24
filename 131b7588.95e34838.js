(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1306:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return f}));var a=t(0),n=t.n(a);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=n.a.createContext({}),p=function(e){var r=n.a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.a.createElement(d.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},u=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=p(t),u=a,f=l["".concat(o,".").concat(u)]||l[u]||b[u]||c;return t?n.a.createElement(f,i(i({ref:r},d),{},{components:t})):n.a.createElement(f,i({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<c;d++)o[d]=t[d];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},144:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return p}));var a=t(2),n=t(6),c=(t(0),t(1306)),o={id:"_providers_datasyncconflictprovider_",title:"providers/DataSyncConflictProvider",sidebar_label:"providers/DataSyncConflictProvider"},i={unversionedId:"api/graphback-datasync/modules/_providers_datasyncconflictprovider_",id:"version-0.16.x/api/graphback-datasync/modules/_providers_datasyncconflictprovider_",isDocsHomePage:!1,title:"providers/DataSyncConflictProvider",description:"Index",source:"@site/versioned_docs/version-0.16.x/api/graphback-datasync/modules/_providers_datasyncconflictprovider_.md",slug:"/api/graphback-datasync/modules/_providers_datasyncconflictprovider_",permalink:"/docs/0.16.x/api/graphback-datasync/modules/_providers_datasyncconflictprovider_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-datasync/modules/_providers_datasyncconflictprovider_.md",version:"0.16.x",sidebar_label:"providers/DataSyncConflictProvider"},s=[{value:"Index",id:"index",children:[{value:"Classes",id:"classes",children:[]},{value:"Variables",id:"variables",children:[]}]},{value:"Variables",id:"variables-1",children:[{value:"<code>Const</code> MAX_RETRIES",id:"const-max_retries",children:[]}]}],d={rightToc:s};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"classes"},"Classes"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/classes/_providers_datasyncconflictprovider_.datasyncconflictmongodbdataprovider"}),"DataSyncConflictMongoDBDataProvider"))),Object(c.b)("h3",{id:"variables"},"Variables"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-datasync/modules/_providers_datasyncconflictprovider_#const-max_retries"}),"MAX_RETRIES"))),Object(c.b)("h2",{id:"variables-1"},"Variables"),Object(c.b)("h3",{id:"const-max_retries"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," MAX_RETRIES"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"MAX_RETRIES"),": ",Object(c.b)("em",{parentName:"p"},"3")," = 3"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-datasync/src/providers/DataSyncConflictProvider.ts#L7"}),"packages/graphback-datasync/src/providers/DataSyncConflictProvider.ts:7"))))}p.isMDXComponent=!0}}]);