(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[21],{287:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(7);const r=a.default.div.withConfig({displayName:"fullWidthWrapperstyled__FullWidthWrapperStyled",componentId:"sc-1f1bxrr-0"})(["margin-left:0;margin-right:0;min-width:100%;padding-top:var(--spacing-2);padding-bottom:var(--spacing-2);"," ",""],e=>e.backgroundColor&&Object(a.css)(["background-color:",";padding-top:var(--spacing-4);padding-bottom:var(--spacing-4);"],e.backgroundColor),e=>e.color&&Object(a.css)(["color:",";"],e.color))},288:function(e,t,n){"use strict";t.a=e=>{const t={backgroundColor:void 0,color:void 0};return"Blue"===e&&(t.backgroundColor="var(--color-black)",t.color="var(--color-off-white)"),"Grey"===e&&(t.backgroundColor="var(--color-silver)",t.color="var(--color-black)"),t}},301:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(48),i=n(262),c=n(287),l=n(288);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const s=({image:e,altText:t,introTitle:n,text:a,reverseOrientation:s=!1,button:u,background:m="None"})=>{if(!e||!t)return null;const g=Object(l.a)(m),p={minHeight:"100%",display:"flex",flexDirection:"column",justifyContent:"center"};return s?r.a.createElement(c.a,g,r.a.createElement(o.Container,{content:r.a.createElement(o.IntroMediaGroup,{withMargins:!0,isInContainer:!0,columns:[r.a.createElement("div",{style:p,"data-testid":"vertical-alignment-wrapper"},r.a.createElement(o.Intro,{key:"button",introTitle:n,text:a,button:u&&r.a.createElement(o.Container,{paddingTop:!0,content:r.a.createElement(i.c,d({lightColouredFocus:"Blue"===m},u))})})),r.a.createElement(o.Image,{key:e,altText:t,image:e})]}),secondaryMaxWidth:!0})):r.a.createElement(c.a,g,r.a.createElement(o.Container,{content:r.a.createElement(o.IntroMediaGroup,{withMargins:!0,columns:[r.a.createElement(o.Image,{key:e,altText:t,image:e}),r.a.createElement("div",{style:p,"data-testid":"vertical-alignment-wrapper"},r.a.createElement(o.Intro,{key:n,introTitle:n,text:a,button:u&&r.a.createElement(o.Container,{paddingTop:!0,content:r.a.createElement(i.c,d({isInContainer:!0,lightColouredFocus:"Blue"===m},u))})}))]}),secondaryMaxWidth:!0}))};s.displayName="ImageWithTextComponent",t.default=s}}]);