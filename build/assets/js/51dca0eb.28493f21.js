(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{108:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),c=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return r?a.a.createElement(d,l(l({ref:t},u),{},{components:r})):a.a.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return c}));var n=r(3),a=r(7),o=(r(0),r(108)),i={slug:"deployen-osrm-in-azure",title:"Deployen OSRM in Azure",author:"Bryan Schoot",author_title:"Software Engineer",author_url:"https://github.com/bryanschoot",author_image_url:"https://avatars.githubusercontent.com/u/18568202?v=4",tags:["azure","osrm","openstreetmap"]},l={permalink:"/blog/deployen-osrm-in-azure",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-03-26-Deployen-OSRM-in-Azure.md",source:"@site/blog/2021-03-26-Deployen-OSRM-in-Azure.md",title:"Deployen OSRM in Azure",description:"In dit artikel ga je leren hoe je een OSRM server host binnen de Azure Portal.",date:"2021-03-26T00:00:00.000Z",formattedDate:"26 maart 2021",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"osrm",permalink:"/blog/tags/osrm"},{label:"openstreetmap",permalink:"/blog/tags/openstreetmap"}],readingTime:.76,truncated:!0,prevItem:{title:"Hosten Angular in Azure",permalink:"/blog/hosten-angular-in-azure"}},s=[{value:"Wat is OSRM",id:"wat-is-osrm",children:[]},{value:"Voordat we beginnen",id:"voordat-we-beginnen",children:[]}],u={toc:s};function c(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In dit artikel ga je leren hoe je een OSRM server host binnen de Azure Portal."),Object(o.b)("h2",{id:"wat-is-osrm"},"Wat is OSRM"),Object(o.b)("p",null,"OSRM is een open source routing machine. OSRM gebruik data van OpenStreetMap om de snelste route te berekenen."),Object(o.b)("p",null,"In tegenstelling tot de meeste routingservers gebruikt OSRM geen A","*","-variant om het kortste pad te berekenen, maar een combinatie van Dijkstra's op meerdere niveaus. Dit resulteert in zeer snelle query-tijden, gewoonlijk minder dan 1 milliseconde voor datasets zoals Europa, waardoor OSRM een goede kandidaat is voor responsieve, webgebaseerde routeringstoepassingen en websites."),Object(o.b)("p",null,"Dit maakt OSRM:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Zeer snelle routing"),Object(o.b)("li",{parentName:"ul"},"Zeer draagbaar"),Object(o.b)("li",{parentName:"ul"},"Eenvoudig dataformaat maakt het gemakkelijk om aangepaste datasets te importeren in plaats van OpenStreetMap-gegevens of verkeersgegevens te importeren"),Object(o.b)("li",{parentName:"ul"},"Flexibele routingprofielen (bv. voor verschillende vervoerswijzen)"),Object(o.b)("li",{parentName:"ul"},"Respecteert afslagbeperkingen, inclusief op tijd gebaseerde voorwaardelijke beperkingen"),Object(o.b)("li",{parentName:"ul"},"Respecteert afslaande rijstroken"),Object(o.b)("li",{parentName:"ul"},"Gelokaliseerde afslag-voor-afslag instructies op basis van OSRM Tekstinstructies")),Object(o.b)("h2",{id:"voordat-we-beginnen"},"Voordat we beginnen"))}c.isMDXComponent=!0}}]);