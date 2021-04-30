(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{108:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,s(s({ref:t},u),{},{components:r})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),a=r(7),i=(r(0),r(108)),o={sidebar_position:1},s={unversionedId:"getting-started/intro",id:"getting-started/intro",isDocsHomePage:!1,title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/getting-started/intro.md",sourceDirName:"getting-started",slug:"/getting-started/intro",permalink:"/docs/getting-started/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Kennismaking",permalink:"/docs/intro"},next:{title:"Create a Page",permalink:"/docs/getting-started/tutorial-basics/create-a-page"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Generate a new site",id:"generate-a-new-site",children:[]},{value:"Start your site",id:"start-your-site",children:[]}],u={toc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Let's discover ",Object(i.b)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Get started by ",Object(i.b)("strong",{parentName:"p"},"creating a new site"),"."),Object(i.b)("p",null,"Or ",Object(i.b)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",{parentName:"strong",href:"https://new.docusaurus.io"},"new.docusaurus.io")),"."),Object(i.b)("h2",{id:"generate-a-new-site"},"Generate a new site"),Object(i.b)("p",null,"Generate a new Docusaurus site using the ",Object(i.b)("strong",{parentName:"p"},"classic template"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),Object(i.b)("h2",{id:"start-your-site"},"Start your site"),Object(i.b)("p",null,"Run the development server:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),Object(i.b)("p",null,"Your site starts at ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),Object(i.b)("p",null,"Open ",Object(i.b)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",Object(i.b)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}l.isMDXComponent=!0}}]);