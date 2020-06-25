(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{197:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(1),a=t(6),i=(t(0),t(224)),o={id:"customplugin",title:"Creating your own plugin",sidebar_label:"Custom plugin"},l={id:"version-0.12.x/plugins/customplugin",title:"Creating your own plugin",description:"Graphback allows to create your own plugins that can affect generated schema",source:"@site/versioned_docs/version-0.12.x/plugins/creating-plugin.md",permalink:"/docs/plugins/customplugin",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/plugins/creating-plugin.md",version:"0.12.x",sidebar_label:"Custom plugin",sidebar:"version-0.12.x/docs",previous:{title:"Graphback CRUD Client Queries Plugin",permalink:"/docs/plugins/crud-client"},next:{title:"Database",permalink:"/docs/db/dbintroduction"}},c=[{value:"Building your plugin",id:"building-your-plugin",children:[]},{value:"Plugin configuration",id:"plugin-configuration",children:[]},{value:"Plugins helper",id:"plugins-helper",children:[]}],u={rightToc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Graphback allows to create your own plugins that can affect generated schema\nand create files in filesystem."),Object(i.b)("p",null,"Each plugin needs to be a new npm package that will implement GraphbackPlugin."),Object(i.b)("h2",{id:"building-your-plugin"},"Building your plugin"),Object(i.b)("p",null,"Graphback plugins are executed in the order they are defined in the configuration.\n",Object(i.b)("inlineCode",{parentName:"p"},"transformSchema")," is called first for each plugin to determine final shape of the schema.\nThen ",Object(i.b)("inlineCode",{parentName:"p"},"createResources")," method is called that can create files etc."),Object(i.b)("p",null,"Example plugin implementation should look as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { GraphbackPlugin, GraphbackCoreMetadata } from '@graphback/core';\n\nexport class YourPlugin extends GraphbackPlugin {\n    private pluginConfig: any;\n\n    // Constructor needs to accept single argument - plugin config\n    constructor(pluginConfig?: any) {\n        super();\n        this.pluginConfig = pluginConfig;\n    }\n\n    public transformSchema(metadata: GraphbackCoreMetadata) {\n        // This method can be used to add or remove elements from current schema.\n        return metadata.getSchema();\n    }\n\n    public createResources(metadata: GraphbackCoreMetadata): void {\n        // This method is used to create files in filesystem based on the models\n        metadata.getModelDefinitions().forEach(model => {\n            writeFileSync(`${process.cwd()}/${model.graphqlType.name}.js`, `const def = '${model.graphqlType.getFields()}'`)\n        })\n    }\n\n    public getPluginName(): string {\n        return 'MyPlugin';\n    }\n}\n\n// Package needs to export created plugin as `Plugin`\nexport { ClientCRUDPlugin as Plugin } from './ClientCRUDPlugin'\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: Plugin name cannot start with ",Object(i.b)("inlineCode",{parentName:"p"},"graphback-")," as this name is reserved for graphback internal plugins")),Object(i.b)("h2",{id:"plugin-configuration"},"Plugin configuration"),Object(i.b)("p",null,"Plugins are loaded using CommonJS 'require' method based on the Graphback plugin section.\nOrder of the plugins matter especially when transforming schema.\nIf your plugin relies on other plugins, it should be placed on the bottom of the list.\nEach plugin should have its own configuration embedded as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"  graphback:\n    ## Codegen plugins\n    plugins:\n        my-plugin:\n          format: 'graphql'\n          outputPath: ./server/src/schema\n        graphback-client:\n          format: 'graphql'\n          outputPath: ./client/src/graphql\n        graphback-resolvers:\n          format: ts\n          outputPath: ./server/src/resolvers\n\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: Graphback CLI includes Graphback core plugin. When adding your own plugins, you need to run Graphback CLI from your npm scripts\nfor the Graphback engine to be able to pick up the plugin package.")),Object(i.b)("h2",{id:"plugins-helper"},"Plugins helper"),Object(i.b)("p",null,"'@graphback/core' offers helpers for building plugins.\nPlease refer to the package documentation for more details."))}p.isMDXComponent=!0},224:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=r,b=s["".concat(o,".").concat(d)]||s[d]||g[d]||i;return t?a.a.createElement(b,l(l({ref:n},u),{},{components:t})):a.a.createElement(b,l({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);