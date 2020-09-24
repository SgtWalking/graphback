(window.webpackJsonp=window.webpackJsonp||[]).push([[1135],{1191:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(2),b=a(6),n=(a(0),a(1306)),c={id:"_runtime_graphbackcrudservice_.graphbackcrudservice",title:"GraphbackCRUDService",sidebar_label:"GraphbackCRUDService"},p={unversionedId:"api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",id:"version-0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",isDocsHomePage:!1,title:"GraphbackCRUDService",description:"Graphback layered architecture component that can be called",source:"@site/versioned_docs/version-0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice.md",slug:"/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",permalink:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice.md",version:"0.16.x",sidebar_label:"GraphbackCRUDService",sidebar:"version-0.16.x/docs",previous:{title:"runtime/createCRUDService",permalink:"/docs/0.16.x/api/graphback-core/modules/_runtime_createcrudservice_"},next:{title:"CRUDService",permalink:"/docs/0.16.x/api/graphback-core/classes/_runtime_crudservice_.crudservice"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implemented by",id:"implemented-by",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchLoadData",id:"batchloaddata",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"subscribeToCreate",id:"subscribetocreate",children:[]},{value:"subscribeToDelete",id:"subscribetodelete",children:[]},{value:"subscribeToUpdate",id:"subscribetoupdate",children:[]},{value:"update",id:"update",children:[]}]}],i={rightToc:l};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Graphback layered architecture component that can be called\nfrom the resolver layer in GraphQL and Middlerware layer in RESTfull approach."),Object(n.b)("p",null,"Graphback implements server side procesing using following flow:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"GraphQL Resolvers")," ->  ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," ","[1-*]"," -> ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")),Object(n.b)("p",null,"Services can be composable (each service can reference multiple layers of other services).\nFor data abstraction Graphback ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")," can be being used."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"see"))," GraphbackDataProvider"),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("strong",{parentName:"p"},"Type")),Object(n.b)("p",null,"\u25aa ",Object(n.b)("strong",{parentName:"p"},"GraphbackContext")),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"GraphbackCRUDService"))),Object(n.b)("h2",{id:"implemented-by"},"Implemented by"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/classes/_runtime_crudservice_.crudservice"}),"CRUDService")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/classes/_runtime_graphbackproxyservice_.graphbackproxyservice"}),"GraphbackProxyService"))),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"methods"},"Methods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#batchloaddata"}),"batchLoadData")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#create"}),"create")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#delete"}),"delete")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#findby"}),"findBy")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#findone"}),"findOne")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetocreate"}),"subscribeToCreate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetodelete"}),"subscribeToDelete")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#subscribetoupdate"}),"subscribeToUpdate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.graphbackcrudservice#update"}),"update"))),Object(n.b)("h2",{id:"methods-1"},"Methods"),Object(n.b)("h3",{id:"batchloaddata"},"batchLoadData"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"batchLoadData"),"(",Object(n.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"id"),": string | number, ",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(n.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext, ",Object(n.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L106"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:106"))),Object(n.b)("p",null,"Specialized function that can utilize batching the data basing on\nDataLoader library"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"relationField")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name of the field that will be used to match ids")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"id")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string ","|"," number"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"id of the object we want to load")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"resolver context object that will be used to apply new loader")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"info?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQL resolver info")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"any")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"create"},"create"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"create"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(n.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(n.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L33"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:33"))),Object(n.b)("p",null,"Implementation for object creation"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"info?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"delete"},"delete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"delete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(n.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L49"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:49"))),Object(n.b)("p",null,"Implementation for object deletes"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data used for consistency reasons")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"info?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findby"},"findBy"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"findBy"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs"),", ",Object(n.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(n.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo, ",Object(n.b)("inlineCode",{parentName:"p"},"path?"),": string): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"}),"ResultList"),"\u2039Type\u203a\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L70"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:70"))),Object(n.b)("p",null,"Implementation for reading objects with filtering capabilities"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"info?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"path?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.16.x/api/graphback-core/interfaces/_runtime_graphbackcrudservice_.resultlist"}),"ResultList"),"\u2039Type\u203a\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findone"},"findOne"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"findOne"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(n.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L57"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:57"))),Object(n.b)("p",null,"Fetch a single record by its unique attribute(s)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"the unique attributes to fetch the record with")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object from GraphQL/REST layer")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"info?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"subscribetocreate"},"subscribeToCreate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"subscribeToCreate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(n.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L78"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:78"))),Object(n.b)("p",null,"Subscription for all creation events"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"subscribetodelete"},"subscribeToDelete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"subscribeToDelete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(n.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L94"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:94"))),Object(n.b)("p",null,"Subscription for all deletion events"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"subscribetoupdate"},"subscribeToUpdate"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"subscribeToUpdate"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.16.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(n.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L86"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:86"))),Object(n.b)("p",null,"Subscription for all update events"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/0.16.x/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter used in subscription")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"additional context")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"AsyncIterator\u2039Type\u203a | undefined")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"update"},"update"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"update"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"context?"),": GraphbackContext, ",Object(n.b)("inlineCode",{parentName:"p"},"info?"),": GraphQLResolveInfo): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/bc616b51/packages/graphback-core/src/runtime/GraphbackCRUDService.ts#L41"}),"packages/graphback-core/src/runtime/GraphbackCRUDService.ts:41"))),Object(n.b)("p",null,"Implementation for object updates"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data including id")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"context object passed from graphql or rest layer")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"info?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLResolveInfo"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}o.isMDXComponent=!0},1306:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),o=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},O=function(e){var t=o(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},d=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),O=o(a),d=r,m=O["".concat(c,".").concat(d)]||O[d]||j[d]||n;return a?b.a.createElement(m,p(p({ref:t},i),{},{components:a})):b.a.createElement(m,p({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<n;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);