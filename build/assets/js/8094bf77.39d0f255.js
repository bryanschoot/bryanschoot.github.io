(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},157:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/localeDropdown-0052c3f08ccaf802ac733b23e655f498.png"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(108)),i={sidebar_position:2},c={unversionedId:"getting-started/tutorial-extras/translate-your-site",id:"getting-started/tutorial-extras/translate-your-site",isDocsHomePage:!1,title:"Translate your site",description:"Let's translate docs/intro.md to French.",source:"@site/docs/getting-started/tutorial-extras/translate-your-site.md",sourceDirName:"getting-started/tutorial-extras",slug:"/getting-started/tutorial-extras/translate-your-site",permalink:"/docs/getting-started/tutorial-extras/translate-your-site",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started/tutorial-extras/translate-your-site.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Manage Docs Versions",permalink:"/docs/getting-started/tutorial-extras/manage-docs-versions"}},l=[{value:"Configure i18n",id:"configure-i18n",children:[]},{value:"Translate a doc",id:"translate-a-doc",children:[]},{value:"Start your localized site",id:"start-your-localized-site",children:[]},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",children:[]},{value:"Build your localized site",id:"build-your-localized-site",children:[]}],s={toc:l};function u(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Let's translate ",Object(o.b)("inlineCode",{parentName:"p"},"docs/intro.md")," to French."),Object(o.b)("h2",{id:"configure-i18n"},"Configure i18n"),Object(o.b)("p",null,"Modify ",Object(o.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," to add support for the ",Object(o.b)("inlineCode",{parentName:"p"},"fr")," locale:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  i18n: {\n    defaultLocale: "en",\n    locales: ["en", "fr"],\n  },\n};\n')),Object(o.b)("h2",{id:"translate-a-doc"},"Translate a doc"),Object(o.b)("p",null,"Copy the ",Object(o.b)("inlineCode",{parentName:"p"},"docs/intro.md")," file to the ",Object(o.b)("inlineCode",{parentName:"p"},"i18n/fr")," folder:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n")),Object(o.b)("p",null,"Translate ",Object(o.b)("inlineCode",{parentName:"p"},"i18n/fr/docusaurus-plugin-content-docs/current/intro.md")," in French."),Object(o.b)("h2",{id:"start-your-localized-site"},"Start your localized site"),Object(o.b)("p",null,"Start your site on the French locale:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm run start -- --locale fr\n")),Object(o.b)("p",null,"Your localized site is accessible at ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:3000/fr/")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"Getting Started")," page is translated."),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In development, you can only use one locale at a same time."))),Object(o.b)("h2",{id:"add-a-locale-dropdown"},"Add a Locale Dropdown"),Object(o.b)("p",null,"To navigate seamlessly across languages, add a locale dropdown."),Object(o.b)("p",null,"Modify the ",Object(o.b)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},'module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: "localeDropdown",\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n')),Object(o.b)("p",null,"The locale dropdown now appears in your navbar:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Locale Dropdown",src:n(157).default})),Object(o.b)("h2",{id:"build-your-localized-site"},"Build your localized site"),Object(o.b)("p",null,"Build your site for a specific locale:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm run build -- --locale fr\n")),Object(o.b)("p",null,"Or build your site to include all the locales at once:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")))}u.isMDXComponent=!0}}]);