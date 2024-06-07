"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[332],{820332:function(G,b,e){e.r(b);var j=e(805574),A=e.n(j),T=e(168400),v=e.n(T),C=e(667294),f=e(709894),D=e(883458),l=e(700781),E=e(647759),y=e(385956),R=e(49313),U=e(302559),I=e(438199),_=e(373638),a=e(785893),M,O,B=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg",key:"mobile",url:"https://mobile.ant.design/",imgScale:1.5},{img:"https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png",key:"antv",url:"https://antv.vision/"},{img:"https://gw.alipayobjects.com/zos/bmw-prod/af1ea898-bf02-45d1-9f30-8ca851c70a5b.svg",key:"kitchen",url:"https://kitchen.alipay.com/"}],K={cn:{values:"\u8BBE\u8BA1\u4EF7\u503C\u89C2",valuesDesc:"\u786E\u5B9A\u6027\u3001\u610F\u4E49\u611F\u3001\u751F\u957F\u6027\u3001\u81EA\u7136",guide:"\u8BBE\u8BA1\u6307\u5F15",guideDesc:"\u5168\u5C40\u6837\u5F0F\u3001\u8BBE\u8BA1\u6A21\u5F0F",lib:"\u7EC4\u4EF6\u5E93",libDesc:"Ant Design of React / Angular / Vue",mobile:"Ant Design Mobile",mobileDesc:"Ant Design \u79FB\u52A8\u7AEF UI \u7EC4\u4EF6\u5E93",antv:"AntV",antvDesc:"\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848",kitchen:"Kitchen",kitchenDesc:"\u4E00\u6B3E\u4E3A\u8BBE\u8BA1\u8005\u63D0\u5347\u5DE5\u4F5C\u6548\u7387\u7684 Sketch \u5DE5\u5177\u96C6"},en:{values:"Design values",valuesDesc:"Certainty, Meaningfulness, Growth, Naturalness",guide:"Design guide",guideDesc:"Global style and design pattern",lib:"Components Libraries",libDesc:"Ant Design of React / Angular / Vue",mobile:"Ant Design Mobile",mobileDesc:"Mobile UI component library",antv:"AntV",antvDesc:"New generation of data visualization solutions",kitchen:"Kitchen",kitchenDesc:"Sketch Tool set for designers"}},S=function(){var i=(0,R.Z)();return(0,E.kc)(function(d){var s=d.token,n=d.css;return{card:n(M||(M=v()([`
      padding: `,`px;
      border-radius: `,`px;
      background: `,`;
      box-shadow:
        0 1px 2px rgba(0, 0, 0, 0.03),
        0 1px 6px -1px rgba(0, 0, 0, 0.02),
        0 2px 4px rgba(0, 0, 0, 0.02);

      img {
        width: 100%;
        vertical-align: top;
        border-radius: `,`px;
      }
    `])),s.paddingSM,s.borderRadius*2,i?"rgba(0, 0, 0, 0.45)":s.colorBgElevated,s.borderRadius),cardMini:n(O||(O=v()([`
      display: block;
      border-radius: `,`px;
      padding: `,"px ",`px;
      background: `,`;
      border: 1px solid `,`;

      img {
        height: 48px;
      }
    `])),s.borderRadius*2,s.paddingMD,s.paddingLG,i?"rgba(0, 0, 0, 0.25)":"rgba(0, 0, 0, 0.02)",i?"rgba(255, 255, 255, 0.45)":"rgba(0, 0, 0, 0.06)")}})()},z=function(){var i=(0,U.default)(K),d=A()(i,1),s=d[0],n=(0,E.Fg)(),Z=S(),P=Z.styles,x=(0,y.useLocation)(),w=x.pathname,c=x.search,g=_.KE(w),N=(0,C.useContext)(I.Z),F=N.isMobile,L=F?24:8,V=[{img:"https://gw.alipayobjects.com/zos/bmw-prod/36a89a46-4224-46e2-b838-00817f5eb364.svg",key:"values",path:_.J1("/docs/spec/values/",g,c)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/8379430b-e328-428e-8a67-666d1dd47f7d.svg",key:"guide",path:_.J1("/docs/spec/colors/",g,c)},{img:"https://gw.alipayobjects.com/zos/bmw-prod/1c363c0b-17c6-4b00-881a-bc774df1ebeb.svg",key:"lib",path:_.J1("/docs/react/introduce/",g,c)}];return(0,a.jsxs)(f.Z,{gutter:[n.marginXL,n.marginXL],children:[V.map(function(t,m){var u=t.img,r=t.key,h=t.path,o=s[r],p=s["".concat(r,"Desc")];return(0,a.jsx)(D.Z,{span:L,children:(0,a.jsx)(y.Link,{to:h,children:(0,a.jsxs)("div",{className:P.card,children:[(0,a.jsx)("img",{alt:o,src:u}),(0,a.jsx)(l.Z.Title,{level:4,style:{marginTop:n.margin,marginBottom:n.marginXS},children:o}),(0,a.jsx)(l.Z.Paragraph,{type:"secondary",style:{margin:0},children:p})]})})},m)}),B.map(function(t,m){var u=t.img,r=t.key,h=t.url,o=t.imgScale,p=o===void 0?1:o,k=s[r],X=s["".concat(r,"Desc")];return(0,a.jsx)(D.Z,{span:L,children:(0,a.jsxs)("a",{className:P.cardMini,target:"_blank",href:h,rel:"noreferrer",children:[(0,a.jsx)("img",{alt:k,src:u,style:{transform:"scale(".concat(p,")")}}),(0,a.jsx)(l.Z.Title,{level:4,style:{marginTop:n.margin,marginBottom:n.marginXS},children:k}),(0,a.jsx)(l.Z.Paragraph,{type:"secondary",style:{margin:0},children:X})]})},m)})]})};b.default=z}}]);
