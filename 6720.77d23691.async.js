"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6720],{366720:function(H,h,n){n.r(h);var A=n(805574),E=n.n(A),U=n(97857),i=n.n(U),N=n(168400),r=n.n(N),u=n(667294),l=n(639389),J=n.n(l),L=n(647759),T=n(693967),p=n.n(T),I=n(361446),z=n(438199),o=n(785893),M,O,x,P,R=(0,L.kc)(function(s){var e=s.token,t=s.css,_=e.colorSplit,a=e.iconCls,d=e.fontSizeIcon;return{prevNextNav:t(M||(M=r()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: `,`px;
      border-top: 1px solid `,`;
      display: flex;
    `])),e.fontSize,_),pageNav:t(O||(O=r()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all `,`;
      }

      .chinese {
        margin-inline-start: `,`px;
      }
    `])),a,d,e.motionDurationSlow,e.marginXXS),prevNav:t(x||(x=r()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end `,`;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `])),e.motionDurationSlow),nextNav:t(P||(P=r()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start `,`;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])),e.motionDurationSlow)}}),K=function s(e){return Array.isArray(e)?e.reduce(function(t,_){if(!_)return t;if("children"in _&&_.children){var a;return t.concat((a=s(_.children))!==null&&a!==void 0?a:[])}return t.concat(_)},[]):null},B=function(e){var t=e.rtl,_=R(),a=_.styles,d={className:"footer-nav-icon-before"},D={className:"footer-nav-icon-after"},W=t?(0,o.jsx)(l.RightOutlined,i()({},d)):(0,o.jsx)(l.LeftOutlined,i()({},d)),S=t?(0,o.jsx)(l.LeftOutlined,i()({},D)):(0,o.jsx)(l.RightOutlined,i()({},D)),k=(0,I.Z)({before:W,after:S}),b=E()(k,2),g=b[0],j=b[1],X=(0,u.useContext)(z.Z),Z=X.isMobile,F=(0,u.useMemo)(function(){var m=K(g);if(!m)return[null,null];var f=-1;return m.forEach(function(C,G){C&&C.key===j&&(f=G)}),[m[f-1],m[f+1]]},[g,j]),y=E()(F,2),v=y[0],c=y[1];return Z?null:(0,o.jsxs)("section",{className:a.prevNextNav,children:[v&&u.cloneElement(v.label,{className:p()(a.pageNav,a.prevNav,v.className)}),c&&u.cloneElement(c.label,{className:p()(a.pageNav,a.nextNav,c.className)})]})};h.default=B}}]);
