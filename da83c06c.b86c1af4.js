(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{199:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(6),o=(t(0),t(224)),i={title:"Relationships",id:"relationships"},c={id:"version-0.10.x/relationships",isDocsHomePage:!1,title:"Relationships",description:"Database Relationships",source:"@site/versioned_docs/version-0.10.x/relationships.md",permalink:"/docs/0.10.x/relationships",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/relationships.md",version:"0.10.x",sidebar:"version-0.10.x/docs",previous:{title:"Data Sources",permalink:"/docs/0.10.x/datasources"},next:{title:"Client-side Queries",permalink:"/docs/0.10.x/clientqueries"},latestVersionMainDocPermalink:"/docs/gettingstarted"},l=[{value:"Database Relationships",id:"database-relationships",children:[{value:"OneToOne",id:"onetoone",children:[]},{value:"OneToMany",id:"onetomany",children:[]},{value:"ManyToOne",id:"manytoone",children:[]}]}],p={rightToc:l};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"database-relationships"},"Database Relationships"),Object(o.b)("p",null,"Graphback supports ",Object(o.b)("inlineCode",{parentName:"p"},"one-to-one"),", ",Object(o.b)("inlineCode",{parentName:"p"},"one-to-many")," and ",Object(o.b)("inlineCode",{parentName:"p"},"many-to-one")," relationships and provides out of the box support for the schema and resolvers accordingly."),Object(o.b)("h3",{id:"onetoone"},"OneToOne"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Profile {\n  user: User!\n}\n\ntype User {\n  profile: Profile!\n}\n")),Object(o.b)("p",null,"This creates a relationship via a ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," column in the ",Object(o.b)("inlineCode",{parentName:"p"},"profile")," table and a ",Object(o.b)("inlineCode",{parentName:"p"},"profileId")," column in the ",Object(o.b)("inlineCode",{parentName:"p"},"user")," table. You can customize the field which tracks the relationship using annotations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'type Profile {\n  profileUser: User!\n}\n\ntype User {\n  """\n  @db.oneToOne: \'profileUser\'\n  """\n  profile: Profile!\n}\n')),Object(o.b)("p",null,"This creates a ",Object(o.b)("inlineCode",{parentName:"p"},"1:1")," relationship between ",Object(o.b)("inlineCode",{parentName:"p"},"profile.profileUserId")," and ",Object(o.b)("inlineCode",{parentName:"p"},"user.profileId"),"."),Object(o.b)("h3",{id:"onetomany"},"OneToMany"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),"type Note {\n  comments: [Comment]\n}\n")),Object(o.b)("p",null,"This creates a ",Object(o.b)("inlineCode",{parentName:"p"},"noteId")," column in the ",Object(o.b)("inlineCode",{parentName:"p"},"comment")," table. You can also customise the field name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type Note {\n  """\n  @db.oneToMany: \'commentNote\'\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("p",null,"This will create a ",Object(o.b)("inlineCode",{parentName:"p"},"commentNoteId")," foreign key column in the ",Object(o.b)("inlineCode",{parentName:"p"},"comment")," table."),Object(o.b)("h3",{id:"manytoone"},"ManyToOne"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Comment {\n  note: Note!\n}\n")),Object(o.b)("p",null,"This creates a ",Object(o.b)("inlineCode",{parentName:"p"},"noteId")," foreign key column in the ",Object(o.b)("inlineCode",{parentName:"p"},"comment")," table which tracks to ",Object(o.b)("inlineCode",{parentName:"p"},"note.commentId"),"."),Object(o.b)("p",null,"You can also customise the field name:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Comment {\n  commentNote: Note\n}\n")),Object(o.b)("p",null,"This will create a ",Object(o.b)("inlineCode",{parentName:"p"},"commentNoteId")," foreign key column in the ",Object(o.b)("inlineCode",{parentName:"p"},"comment")," table."),Object(o.b)("p",null,"You can track to custom field names in the relation table using the ",Object(o.b)("inlineCode",{parentName:"p"},"@db.manyToOne")," annotation."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type Comment {\n  """\n  @db.manyToOne: \'noteComments\'\n  """\n  note: Note\n}\n')),Object(o.b)("p",null,"This tracks to the GraphQL ",Object(o.b)("inlineCode",{parentName:"p"},"Note.noteComments")," field."))}s.isMDXComponent=!0},224:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=s(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=a,d=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return t?r.a.createElement(d,c({ref:n},p,{components:t})):r.a.createElement(d,c({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);