(window.webpackJsonp=window.webpackJsonp||[]).push([[1082],{1138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(1306)),i={id:"create",title:"Create your own Graphback plugin",sidebar_label:"Create your own plugin"},c={unversionedId:"plugins/create",id:"version-0.15.x/plugins/create",isDocsHomePage:!1,title:"Create your own Graphback plugin",description:"You can build your own custom Graphback plugin to:",source:"@site/versioned_docs/version-0.15.x/plugins/creating-your-own-plugin.md",slug:"/plugins/create",permalink:"/docs/0.15.x/plugins/create",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/plugins/creating-your-own-plugin.md",version:"0.15.x",sidebar_label:"Create your own plugin",sidebar:"version-0.15.x/docs",previous:{title:"ClientCRUD Plugin",permalink:"/docs/0.15.x/plugins/crud-client"},next:{title:"Create Graphback",permalink:"/docs/0.15.x/cli/create-graphback"}},l=[{value:"transformSchema",id:"transformschema",children:[]},{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"getPluginName",id:"getpluginname",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can build your own custom Graphback plugin to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"automate additional customisations to the final generated schema"),Object(o.b)("li",{parentName:"ul"},"build dynamic resolvers"),Object(o.b)("li",{parentName:"ul"},"create file resources such as client-side queries.")),Object(o.b)("p",null,"To create your own plugin, start by creating a class that extends ",Object(o.b)("inlineCode",{parentName:"p"},"GraphbackPlugin"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin } from 'graphback';\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"GraphbackPlugin")," has a number of methods for performing different extensions to your Graphback API."),Object(o.b)("p",null,"For the rest of this documentation, we will be using the following business model:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  archived: Boolean!\n  description: String\n  """\n  @oneToMany(field: \'note\')\n  """\n  comments: [Comment]!\n}\n\n""" @model """\ntype Comment {\n  id: ID!\n  text: String\n  archived: Boolean! \n  description: String\n}\n')),Object(o.b)("h2",{id:"transformschema"},"transformSchema"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"transformSchema")," lets you make modifications to the current iteration of the GraphQL schema object. In here you can create or modify any type or field in the schema. "),Object(o.b)("p",null,"As the ",Object(o.b)("inlineCode",{parentName:"p"},"GraphQLSchema")," and its types are immutable we highly recommend you to install and use the amazing ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql-compose.github.io/"}),"GraphQL Compose")," to modify the schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"// highlight-start\nimport { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\nimport { GraphQLSchema, GraphQLSchema, GraphQLList, GraphQLNonNull } from 'graphql';\nimport { SchemaComposer } from 'graphql-compose';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  // highlight-start\n  transformSchema(metadata: GraphbackCoreMetadata): GraphQLSchema {\n    const schema = metadata.getSchema()\n    const schemaComposer = new SchemaComposer(schema)\n    const graphbackModels = metadata.getModelDefinitions()\n\n    for (const model of graphbackModels) {\n      schemaComposer.Query.addFields({\n        [`getArchived${model.graphqlType.name}s`]: {\n          type: GraphQLNonNull(GraphQLList(model.graphqlType))\n        }\n      })\n    }\n\n    return schemaComposer.buildSchema()\n  }\n  // highlight-end\n  ...\n}\n")),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"MyGraphbackPlugin"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"transformSchema")," hook adds a new query field to the schema for each of the data models to retrieve all archived models."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  getNote(id: ID!): Note\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n  getComment(id: ID!): Comment\n  findComments(filter: CommentFilter, page: PageRequest, orderBy: OrderByInput): CommentResultList!\n  // highlight-start\n  getArchivedNotes: [Note]!\n  getArchivedComments: [Comment]!\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"createresolvers"},"createResolvers"),Object(o.b)("p",null,"With the ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," hook you can create and return resolvers using the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.graphql-tools.com/docs/resolvers/"}),Object(o.b)("inlineCode",{parentName:"a"},"graphql-tools"))," format."),Object(o.b)("p",null,"To use ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," you will first need to install ",Object(o.b)("inlineCode",{parentName:"p"},"@graphql-tools/utils"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphql-tools/utils\n")),Object(o.b)("p",null,"Here ",Object(o.b)("inlineCode",{parentName:"p"},"createResolvers")," is creating a new query resolver for each query field added to the schema in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#transformschema"}),Object(o.b)("inlineCode",{parentName:"a"},"transformSchema")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\nimport { GraphbackContext, getSelectedFieldsFromResolverInfo, QueryFilter  } from '@graphback/core';\nimport { GraphQLResolveInfo } from 'graphql';\n\n// highlight-start\nimport { IResolvers, IObjectTypeResolver } from '@graphql-tools/utils';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  createResolvers(metadata: GraphbackCoreMetadata): IResolvers {\n    const resolvers: IResolvers = {};\n    const queryObj: IObjectTypeResolver = {};\n\n    // loop through every Graphback model\n    for (const model of metadata.getModelDefinitions()) {\n      const modelName = model.graphqlType.name;\n\n      // create a resolver function for every query field created in `transformSchema`\n      queryObj[`getArchived${modelName}s`] = async (_: any, args: any, context: GraphbackContext, info: GraphQLResolveInfo) => {\n        const crudService = context.graphback.services[modelName];\n\n        // create a filter in the GraphQLCRUD format to retrieve only archived Notes\n        const filter: QueryFilter = {\n          archived: {\n            eq: true\n          }\n        };\n\n        // retrieve user selected fields from GraphQLResolveInfo which will be used to query the database for specific fields\n        // avoiding overfetching. This is optional, as passing just the context to the database query will retrieve all fields.\n        const selectedFields = getSelectedFieldsFromResolverInfo(info, model);\n        const graphback = {\n          services: context.graphback.services,\n          options: { selectedFields }\n        };\n\n        // use the model service created by Graphback to query the database\n        const { items } = await crudService.findBy(filter, { ...context, graphback });\n\n        return items;\n      }\n    }\n\n    resolvers.Query = queryObj;\n\n    return resolvers;\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"createresources"},"createResources"),Object(o.b)("p",null,"Since Graphback is primarily a runtime framework, you probably won't use ",Object(o.b)("inlineCode",{parentName:"p"},"createResources")," too often. However it is a very useful method if you ever need to output something to a file, such as your schema."),Object(o.b)("p",null,"Here ",Object(o.b)("inlineCode",{parentName:"p"},"createResources")," is creating a GraphQL schema file from the schema generated by Graphback."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\n// highlight-start\nimport { writeFileSync } from 'fs';\nimport { printSchema } from 'graphql';\n// highlight-end\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  createResources(metadata: GraphbackCoreMetadata): void {\n    const schema = metadata.getSchema()\n    const schemaSDL = printSchema(schema)\n\n    writeFileSync('./schema.graphql', schemaSDL);\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"getpluginname"},"getPluginName"),Object(o.b)("p",null,"Returns a unique name of the plugin. The will be used by plugin registry to uniquely identify the plugin.  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from 'graphback';\n// highlight-next-line\nimport { writeFileSync } from 'fs';\n\nexport class MyGraphbackPlugin extends GraphbackPlugin {\n  ...\n  // highlight-start\n  getPluginName() {\n    return 'MyGraphbackPlugin';\n  }\n  // highlight-end\n}\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"To use the plugin, add it to the ",Object(o.b)("inlineCode",{parentName:"p"},"plugins")," array in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../api/build-graphback-api#plugins"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI")),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"const { resolvers, typeDefs, contextCreator } = buildGraphbackAPI(modelDefs, {\n  dataProviderCreator: createKnexDbProvider(db),\n  plugins: [\n    // highlight-start\n    new MyGraphbackPlugin()\n    // highlight-end\n  ]\n});\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context: contextCreator\n})\n\n...\n")),Object(o.b)("p",null,"Archived ",Object(o.b)("inlineCode",{parentName:"p"},"Notes")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Comments")," can be retrieved by the following query:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),"query archivedNotesAndComments {\n  getArchivedNotes {\n    id\n    title\n    comments {\n      id\n      archived\n      text\n    }\n  }\n\n  getArchivedComments {\n    id\n    text\n    note {\n      id\n      archived\n      title\n    }\n  }\n}\n")))}p.isMDXComponent=!0},1306:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},h=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,m=h["".concat(i,".").concat(u)]||h[u]||b[u]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);