(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1306:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),i=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(a),O=r,j=d["".concat(c,".").concat(O)]||d[O]||m[O]||n;return a?b.a.createElement(j,o(o({ref:t},l),{},{components:a})):b.a.createElement(j,o({ref:t},l))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=O;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<n;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},364:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return i}));var r=a(2),b=a(6),n=(a(0),a(1306)),c={id:"_mongodbdataprovider_.mongodbdataprovider",title:"MongoDBDataProvider",sidebar_label:"MongoDBDataProvider"},o={unversionedId:"api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider",id:"version-1.0/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider",isDocsHomePage:!1,title:"MongoDBDataProvider",description:"Graphback provider that connnects to the MongoDB database",source:"@site/versioned_docs/version-1.0/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider.md",slug:"/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider",permalink:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider.md",version:"1.0",sidebar_label:"MongoDBDataProvider",sidebar:"version-1.0/docs",previous:{title:"createMongoDbProvider",permalink:"/docs/api/graphback-runtime-mongodb/modules/_createmongodbprovider_"},next:{title:"SchemaCRUDPlugin",permalink:"/docs/api/graphback-codegen-schema/classes/_schemacrudplugin_.schemacrudplugin"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> collectionName",id:"protected-collectionname",children:[]},{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> fieldTransformMap",id:"protected-fieldtransformmap",children:[]},{value:"<code>Protected</code> tableMap",id:"protected-tablemap",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"<code>Protected</code> buildProjectionOption",id:"protected-buildprojectionoption",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"<code>Private</code> sortQuery",id:"private-sortquery",children:[]},{value:"update",id:"update",children:[]},{value:"<code>Private</code> usePage",id:"private-usepage",children:[]},{value:"<code>Private</code> verifyMongoDBPrimaryKey",id:"private-verifymongodbprimarykey",children:[]}]}],l={rightToc:p};function i(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Graphback provider that connnects to the MongoDB database"),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("strong",{parentName:"p"},"Type")),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"MongoDBDataProvider"))),Object(n.b)("h2",{id:"implements"},"Implements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GraphbackDataProvider\u2039Type\u203a")),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"constructors"},"Constructors"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#constructor"}),"constructor"))),Object(n.b)("h3",{id:"properties"},"Properties"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-collectionname"}),"collectionName")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-db"}),"db")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-fieldtransformmap"}),"fieldTransformMap")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-tablemap"}),"tableMap"))),Object(n.b)("h3",{id:"methods"},"Methods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#batchread"}),"batchRead")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#protected-buildprojectionoption"}),"buildProjectionOption")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#count"}),"count")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#create"}),"create")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#delete"}),"delete")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#findby"}),"findBy")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#findone"}),"findOne")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#private-sortquery"}),"sortQuery")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#update"}),"update")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#private-usepage"}),"usePage")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider#private-verifymongodbprimarykey"}),"verifyMongoDBPrimaryKey"))),Object(n.b)("h2",{id:"constructors-1"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new MongoDBDataProvider"),"(",Object(n.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(n.b)("inlineCode",{parentName:"p"},"db"),": any): ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider"}),"MongoDBDataProvider"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L17"}),"MongoDBDataProvider.ts:17"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"model")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"ModelDefinition")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"db")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/api/graphback-runtime-mongodb/classes/_mongodbdataprovider_.mongodbdataprovider"}),"MongoDBDataProvider"))),Object(n.b)("h2",{id:"properties-1"},"Properties"),Object(n.b)("h3",{id:"protected-collectionname"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," collectionName"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"collectionName"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L15"}),"MongoDBDataProvider.ts:15"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-db"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"db"),": ",Object(n.b)("em",{parentName:"p"},"Db")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L14"}),"MongoDBDataProvider.ts:14"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-fieldtransformmap"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," fieldTransformMap"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"fieldTransformMap"),": ",Object(n.b)("em",{parentName:"p"},"FieldTransformMap")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L17"}),"MongoDBDataProvider.ts:17"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-tablemap"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," tableMap"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"tableMap"),": ",Object(n.b)("em",{parentName:"p"},"ModelTableMap")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L16"}),"MongoDBDataProvider.ts:16"))),Object(n.b)("h2",{id:"methods-1"},"Methods"),Object(n.b)("h3",{id:"batchread"},"batchRead"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"batchRead"),"(",Object(n.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(n.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L127"}),"MongoDBDataProvider.ts:127"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"relationField")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"ids")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-buildprojectionoption"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," buildProjectionOption"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"buildProjectionOption"),"(",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields"),": string[]): ",Object(n.b)("em",{parentName:"p"},"object")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L153"}),"MongoDBDataProvider.ts:153"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"object")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"[field]"),": ",Object(n.b)("em",{parentName:"li"},"number")," = 1")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"count"},"count"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"count"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter?"),": QueryFilter): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L123"}),"MongoDBDataProvider.ts:123"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"create"},"create"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"create"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Type): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L30"}),"MongoDBDataProvider.ts:30"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"delete"},"delete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"delete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L78"}),"MongoDBDataProvider.ts:78"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findby"},"findBy"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"findBy"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args?"),": FindByArgs, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L110"}),"MongoDBDataProvider.ts:110"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FindByArgs")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findone"},"findOne"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"findOne"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L96"}),"MongoDBDataProvider.ts:96"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"private-sortquery"},Object(n.b)("inlineCode",{parentName:"h3"},"Private")," sortQuery"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"sortQuery"),"(",Object(n.b)("inlineCode",{parentName:"p"},"query"),": Cursor\u2039any\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"orderBy"),": GraphbackOrderBy): ",Object(n.b)("em",{parentName:"p"},"Cursor\u2039any\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L174"}),"MongoDBDataProvider.ts:174"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"query")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cursor\u2039any\u203a")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"orderBy")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackOrderBy")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Cursor\u2039any\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"update"},"update"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"update"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L50"}),"MongoDBDataProvider.ts:50"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"private-usepage"},Object(n.b)("inlineCode",{parentName:"h3"},"Private")," usePage"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"usePage"),"(",Object(n.b)("inlineCode",{parentName:"p"},"query"),": Cursor\u2039any\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"page?"),": GraphbackPage): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039any[]\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L191"}),"MongoDBDataProvider.ts:191"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"query")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Cursor\u2039any\u203a")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"page?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackPage")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039any[]\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"private-verifymongodbprimarykey"},Object(n.b)("inlineCode",{parentName:"h3"},"Private")," verifyMongoDBPrimaryKey"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"verifyMongoDBPrimaryKey"),"(",Object(n.b)("inlineCode",{parentName:"p"},"modelName"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"primaryKey"),": FieldDescriptor): ",Object(n.b)("em",{parentName:"p"},"void")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-runtime-mongodb/src/MongoDBDataProvider.ts#L167"}),"MongoDBDataProvider.ts:167"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"modelName")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"primaryKey")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"FieldDescriptor")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"void")))}i.isMDXComponent=!0}}]);