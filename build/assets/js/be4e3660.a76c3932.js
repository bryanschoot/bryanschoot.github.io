(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=p(t),d=r,g=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return t?a.a.createElement(g,l(l({ref:n},c),{},{components:t})):a.a.createElement(g,l({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(108)),i={slug:"hosten-angular-in-azure",title:"Hosten Angular in Azure",author:"Bryan Schoot",author_title:"Software Engineer",author_url:"https://github.com/bryanschoot",author_image_url:"https://avatars.githubusercontent.com/u/18568202?v=4",tags:["azure","angular"]},l={permalink:"/blog/hosten-angular-in-azure",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-03-29-Hosten-Angular-in-Azure.md",source:"@site/blog/2021-03-29-Hosten-Angular-in-Azure.md",title:"Hosten Angular in Azure",description:"In dit artikel ga je leren over verschillende hosting manieren van een Angular applicatie binnen de Azure Portal.",date:"2021-03-29T00:00:00.000Z",formattedDate:"29 maart 2021",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"angular",permalink:"/blog/tags/angular"}],readingTime:.39,truncated:!0,nextItem:{title:"Deployen OSRM in Azure",permalink:"/blog/deployen-osrm-in-azure"}},u=[{value:"Voordat we beginnen",id:"voordat-we-beginnen",children:[]}],c={toc:u};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In dit artikel ga je leren over verschillende hosting manieren van een Angular applicatie binnen de Azure Portal."),Object(o.b)("h2",{id:"voordat-we-beginnen"},"Voordat we beginnen"),Object(o.b)("p",null,"Binnen de Azure Portal zijn er meerdere manieren om een Angular applicatie te hosten,"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"App Service"),Object(o.b)("li",{parentName:"ul"},"CDN"),Object(o.b)("li",{parentName:"ul"},"Static Web App (preview)")),Object(o.b)("p",null,"Echter gaan we het in dit artikel alleen hebben over de App Service en CDN omdat, de Static Web App tijdens het schrijven van dit artikel nog in preview is."),Object(o.b)("h2",{id:""}))}p.isMDXComponent=!0}}]);