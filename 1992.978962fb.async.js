(self.webpackChunkantd=self.webpackChunkantd||[]).push([[1992],{438746:function(ye,V,t){"use strict";t.d(V,{Z:function(){return R}});var _=t(97857),g=t.n(_),a=t(952677),f=t.n(a),z=t(805574),M=t.n(z),w=t(385956),h=t(667294),W=t(302559);function C(j){return j.replace("-cn","").replace(/\/$/,"")}function R(){var j=(0,w.useLocation)(),Z=j.search,b=(0,W.default)(),L=M()(b,2),c=L[1],v=h.useCallback(function(m,r){var u=C(m);if(c==="cn"&&(u="".concat(u,"-cn")),Z&&(u="".concat(u).concat(Z)),r){var l;f()(r)==="object"?l=r[c]:l=r,u="".concat(u,"#").concat(l)}return u},[c,Z]);return g()(g()({},j),{},{pathname:C(j.pathname),getLink:v})}},858992:function(ye,V,t){"use strict";t.r(V),t.d(V,{default:function(){return rt}});var _=t(97857),g=t.n(_),a=t(667294),f=t(385956),z=t(9783),M=t.n(z),w=t(168400),h=t.n(w),W=t(805574),C=t.n(W),R=t(639389),j=t.n(R),Z=t(944226),b=t(11739),L=t(879587),c=t(106750),v=t(707898),m=t(647759),r=t(693967),u=t.n(r),l=t(826961),F=t.n(l),G=t(438746),e=t(785893),x=function(n){var o=n.children;return(0,e.jsx)("div",{className:"browser-mockup with-url",children:o})},P=x,U=function(n){var o=n.children,s=(0,a.useState)(!1),d=C()(s,2),y=d[0],I=d[1];return(0,a.useLayoutEffect)(function(){I(!0)},[]),y?o:null},S=U,oe=function(){return(0,e.jsx)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:(0,e.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})},Ce=function(n){return(0,e.jsx)(j(),g()({component:oe},n))},Te=Ce,je=t(941346),de=t(700781),Ne=t(468990),Ae=t(224292),Le=t.n(Ae),ue=t(626826),me=t(915660),q=t.n(me),Be=t(728207),ze=t(302559),Ze=t(965516),re=function(n){var o=n.error,s=Ze.Z.useToken(),d=s.token;return o?(0,e.jsx)(b.Z,{banner:!0,type:"error",message:o.toString(),style:{color:d.colorError}}):null},ve=re,Se,pe,be=(0,m.kc)(function(i){var n=i.token,o=i.css,s=n.colorBgContainer,d=n.colorIcon;return{editor:o(Se||(Se=h()([`
      // override dumi editor styles
      .dumi-default-source-code-editor {
        .dumi-default-source-code {
          background: `,`;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre,
        .dumi-default-source-code-editor-textarea {
          padding: `,"px ",`px;
        }

        .dumi-default-source-code > pre,
        .dumi-default-source-code-scroll-content > pre {
          font-size: 13px;
          line-height: 2;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        // disable dumi default copy button
        .dumi-default-source-code-copy {
          display: none;
        }

        &::after {
          border-radius: 0 !important;
        }

        &:hover:not(:focus-within) {
          &::after {
            box-shadow: 0 0 0 1px `,` inset;
          }
        }
      }
    `])),s,n.paddingSM,n.padding,n.colorPrimaryBorderHover),editableIcon:o(pe||(pe=h()([`
      position: absolute;
      z-index: 2;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 16px;
      inset-inline-end: 56px;
      color: `,`;
    `])),d)}}),Fe={cn:{demoEditable:"\u7F16\u8F91 Demo \u53EF\u5B9E\u65F6\u9884\u89C8"},en:{demoEditable:"Edit demo with real-time preview"}},Ee="hide-live-demo-tip",De=function(n){var o=(0,a.useState)(!1),s=C()(o,2),d=s[0],y=s[1],I=be(),A=I.styles,O=(0,ze.default)(Fe),$=C()(O,1),E=$[0];(0,a.useEffect)(function(){var k=!localStorage.getItem(Ee);k&&y(!0)},[]);var B=function(J){y(J),J||localStorage.setItem(Ee,"true")};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:A.editor,children:[(0,e.jsx)(Be.Z,{lang:n.lang,initialValue:n.initialValue,onChange:n.onChange}),(0,e.jsx)(ve,{error:n.error})]}),(0,e.jsx)(L.Z,{title:E.demoEditable,open:d,onOpenChange:B,children:(0,e.jsx)(R.EditFilled,{className:A.editableIcon})})]})},fe=De,Me,Pe,he,Oe=(0,m.kc)(function(i){var n=i.token,o=i.css,s=n.colorIcon,d=n.antCls;return{code:o(Me||(Me=h()([`
      position: relative;
      margin-top: -`,`px;
    `])),n.margin),copyButton:o(Pe||(Pe=h()([`
      color: `,`;
      position: absolute;
      z-index: 2;
      top: 16px;
      inset-inline-end: `,`px;
      width: 32px;
      text-align: center;
      padding: 0;
    `])),s,n.padding),copyIcon:o(he||(he=h()([`
      `,`-typography-copy {
        position: relative;
        margin-inline-start: 0;

        // expand clickable area
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          left: -9px;
          bottom: -5px;
          right: -9px;
        }
      }
      `,"-typography-copy:not(",`-typography-copy-success) {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }
    `])),d,d,d,s,s)}}),Ue={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};function ke(i){return Le()(i,[[function(n){return ue.isElement(n)&&ue.getTagName(n)==="pre"},function(n,o){var s=ue.getAttributes(n);return(0,e.jsx)("pre",{className:"language-".concat(s.lang),children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:s.highlighted}})},o)}]])}var Ke=function(n){var o=n.sourceCode,s=o===void 0?"":o,d=n.jsxCode,y=d===void 0?"":d,I=n.styleCode,A=I===void 0?"":I,O=n.entryName,$=n.onCodeTypeChange,E=n.onSourceChange,B=n.error,k={};s&&(k.tsx=""),y&&(k.jsx=""),A&&(k.style="");var J=a.useState(k),ae=C()(J,2),X=ae[0],ie=ae[1],ne={tsx:s==null?void 0:s.trim(),jsx:y==null?void 0:y.trim(),style:A==null?void 0:A.trim()};(0,a.useEffect)(function(){var D={tsx:q().highlight(s,q().languages.javascript,"jsx"),jsx:q().highlight(y,q().languages.javascript,"jsx"),style:q().highlight(A,q().languages.css,"css")};Object.keys(D).forEach(function(Q){D[Q]||delete D[Q]}),ie(D)},[y,s,A]);var H=Object.keys(X),se=Oe(),Y=se.styles,T=(0,a.useMemo)(function(){return H.map(function(D){return{label:Ue[D],key:D,children:(0,e.jsxs)("div",{className:Y.code,children:[D==="tsx"?(0,e.jsx)(fe,{error:B,lang:D,initialValue:ne[D],onChange:function(We){E==null||E(M()({},O,We))}}):ke(["pre",{lang:D,highlighted:X[D]}]),(0,e.jsx)(je.ZP,{type:"text",className:Y.copyButton,children:(0,e.jsx)(de.Z.Text,{className:Y.copyIcon,copyable:{text:ne[D]}})})]})}})},[JSON.stringify(X),Y.code,Y.copyButton,Y.copyIcon]);return H.length?H.length===1?(0,e.jsx)(fe,{error:B,lang:H[0],initialValue:ne[H[0]],onChange:function(Q){E==null||E(M()({},O,Q))}}):(0,e.jsx)(Ne.Z,{centered:!0,className:"highlight",onChange:$,items:T}):null},Ve=Ke,Pn=function(){return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})})},On=function(n){return(0,e.jsx)(j(),g()({component:Pn},n))},Rn=On,In=t(148050),Tn=function(n){var o=n.color,s=o===void 0?"currentColor":o;return(0,e.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:s,children:[(0,e.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,e.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]})},Nn=function(n){return(0,e.jsx)(j(),g()({component:Tn},n))},An=Nn,Bn=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:(0,e.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})})},zn=function(n){return(0,e.jsx)(j(),g()({component:Bn},n))},Zn=zn,Fn=t(524229),Un=t(438199),kn=t(373638),_e,Kn=b.Z.ErrorBoundary;function Vn(i){return F().compressToBase64(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}var xe=function(n){var o=n.type,s=n.demo;window.gtag&&window.gtag("event","demo",{event_category:o,event_label:s})},He;function Hn(){var i=(0,a.useState)(!1),n=C()(i,2),o=n[0],s=n[1];return(0,a.useEffect)(function(){var d;(d=He)!==null&&d!==void 0||(He=new Promise(function(y){(0,kn.qE)(function(I){return y(I!=="timeout"&&I!=="error")})})),He.then(s)},[]),o}var Wn=(0,m.kc)(function(i){var n=i.token,o=n.borderRadius;return{codeHideBtn:(0,m.iv)(_e||(_e=h()([`
      position: sticky;
      bottom: 0;
      z-index: 1;
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 `,"px ",`px;
      border-top: 1px solid `,`;
      color: `,`;
      transition: all `,` ease-in-out;
      background-color: `,`;
      cursor: pointer;
      &:hover {
        color: `,`;
      }
      span {
        margin-inline-end: `,`px;
      }
    `])),o,o,n.colorSplit,n.colorTextSecondary,n.motionDurationMid,n.colorBgElevated,n.colorPrimary,n.marginXXS)}}),Gn=function(n){var o=n.asset,s=n.expand,d=n.iframe,y=n.demoUrl,I=n.children,A=n.title,O=n.description,$=n.originDebug,E=n.jsx,B=n.style,k=n.compact,J=n.background,ae=n.filename,X=n.version,ie=n.simplify,ne=n.clientOnly,H=n.pkgDependencyList,se=(0,a.useContext)(Fn.Z),Y=se.showDebug,T=(0,f.useSiteData)(),D=T.pkg,Q=(0,G.Z)(),We=Wn(),at=We.styles,ln="index.tsx",dn=o.dependencies[ln].value,it=Hn(),Ge=(0,a.useRef)(null),un=(0,a.useRef)(null),$e=(0,f.useLiveDemo)(o.id,{iframe:!!d,containerRef:un}),st=$e.node,ct=$e.error,lt=$e.setSource,mn=(0,a.useRef)(null),vn=(0,a.useRef)(null),pn=(0,a.useRef)(null),fn=(0,a.useRef)(null),dt=(0,a.useState)(!1),hn=C()(dt,2),ce=hn[0],we=hn[1],ut=(0,a.useState)("tsx"),xn=C()(ut,2),mt=xn[0],vt=xn[1],pt=(0,a.useContext)(Un.Z),te=pt.theme,ft=Q.hash,ht=Q.pathname,xt=Q.search,gt="https://ant.design".concat(ht).concat(xt,"#").concat(o.id),yt=(0,a.useState)(!1),gn=C()(yt,2),Ct=gn[0],jt=gn[1];(0,a.useEffect)(function(){var p=/preview-(\d+)-ant-design/;jt(p.test(window.location.hostname))},[]);var yn=function(N){we(function(le){return!le}),xe({type:"expand",demo:N})};(0,a.useEffect)(function(){if(o.id===ft.slice(1)){var p;(p=mn.current)===null||p===void 0||p.click()}},[]),(0,a.useEffect)(function(){we(s)},[s]);var Lt=!d&&ne?(0,e.jsx)(S,{children:I}):I;Ge.current||(Ge.current=d?(0,e.jsx)(P,{children:(0,e.jsx)("iframe",{src:y,height:d===!0?void 0:d,title:"demo",className:"iframe-demo"})}):Lt);var St=u()("code-box",{expand:ce,"code-box-debug":$,"code-box-simplify":ie}),ge=A,bt=u()("highlight-wrapper",{"highlight-wrapper-expand":ce}),Je=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');<\/script>
        </body>
      </html>
    `,Et={compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},ee=mt==="tsx"?"tsx":"js",K=E.split(`
`).reduce(function(p,N){var le=N.match(/import .+? from '(.+)';$/);if(le!=null&&le[1]){var Xe,Ye,Ie=le[1].split("/"),Qe=Ie[0].startsWith("@")?"".concat(Ie[0],"/").concat(Ie[1]):Ie[0];(Xe=p[Qe])!==null&&Xe!==void 0||(p[Qe]=(Ye=H[Qe])!==null&&Ye!==void 0?Ye:"latest")}return p},{antd:D.version});K["@ant-design/icons"]="latest",ee==="tsx"&&(K["@types/react"]="^18.0.0",K["@types/react-dom"]="^18.0.0"),K.react="^18.0.0",K["react-dom"]="^18.0.0";var Dt={title:"".concat(ge," - antd@").concat(K.antd),html:Je,js:`const { createRoot } = ReactDOM;
`.concat(E.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js","antd@".concat(D.version,"/dist/antd-with-locales.min.js"),"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(function(p){return"https://unpkg.com/".concat(p)}).join(";"),js_pre_processor:"typescript"},Mt={title:"".concat(ge," - antd@").concat(K.antd),js:"".concat(/import React(\D*)from 'react';/.test(E)?"":`import React from 'react';
`,`import { createRoot } from 'react-dom/client';
`).concat(E.replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),css:"",json:JSON.stringify({name:"antd-demo",dependencies:K},null,2)},Re=ee==="tsx"?dn:E,Cn="import React from 'react';",jn=/import React(\D*)from 'react';/,Ln=Re.match(jn);if(Ln){var Pt=C()(Ln,1);Cn=Pt[0],Re=Re.replace(jn,"").trim()}var Sn=`
`.concat(Cn,`
import './index.css';
`).concat(Re,`
    `).trim(),bn=(B||"").trim().replace(new RegExp("#".concat(o.id,"\\s*"),"g"),"").replace("</style>","").replace("<style>",""),En=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,Ot={title:"".concat(ge," - antd@").concat(K.antd),main:"index.js",dependencies:g()(g()({},K),{},{"rc-util":H["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"}),devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},Rt={files:M()(M()(M()({"package.json":{content:Ot},"index.css":{content:bn}},"index.".concat(ee),{content:En}),"demo.".concat(ee),{content:Sn}),"index.html",{content:Je})},Dn={title:"".concat(ge," - antd@").concat(K.antd),template:"create-react-app",dependencies:K,description:"",files:M()(M()(M()({"index.css":bn},"index.".concat(ee),En),"demo.".concat(ee),Sn),"index.html",Je)};ee==="tsx"&&(Dn.files["tsconfig.json"]=JSON.stringify(Et,null,2));var It=te.includes("dark")?"#303030":"#f0f2f5",Tt={padding:d||k?0:void 0,overflow:d||k?"hidden":void 0,backgroundColor:J==="grey"?It:void 0},Mn=(0,e.jsxs)("section",{className:St,id:o.id,children:[(0,e.jsx)("section",{className:"code-box-demo",style:Tt,ref:un,children:st||(0,e.jsx)(Kn,{children:(0,e.jsx)(a.StrictMode,{children:Ge.current})})}),!ie&&(0,e.jsxs)("section",{className:"code-box-meta markdown",children:[(0,e.jsxs)("div",{className:"code-box-title",children:[(0,e.jsx)(L.Z,{title:$?(0,e.jsx)(f.FormattedMessage,{id:"app.demo.debug"}):"",children:(0,e.jsx)("a",{href:"#".concat(o.id),ref:mn,children:ge})}),(0,e.jsx)(In.default,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.content.edit-demo"}),filename:ae})]}),O&&(0,e.jsx)("div",{className:"code-box-description",dangerouslySetInnerHTML:{__html:O}}),(0,e.jsxs)(c.Z,{wrap:"wrap",gap:"middle",className:"code-box-actions",children:[Ct&&(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.online"}),children:(0,e.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:gt,children:(0,e.jsx)(R.LinkOutlined,{"aria-label":"open in new tab",className:"code-box-online"})})}),it?(0,e.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:pn,onClick:function(){var N;xe({type:"riddle",demo:o.id}),(N=pn.current)===null||N===void 0||N.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(Mt)}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.riddle"}),children:(0,e.jsx)(Zn,{className:"code-box-riddle"})})]}):null,(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.stackblitz"}),children:(0,e.jsx)("span",{className:"code-box-code-action",onClick:function(){xe({type:"stackblitz",demo:o.id}),Z.Z.openProject(Dn,{openFile:["demo.".concat(ee)]})},children:(0,e.jsx)(R.ThunderboltOutlined,{className:"code-box-stackblitz",style:{transform:"scale(1.2)"}})})}),(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:fn,onClick:function(){var N;xe({type:"codepen",demo:o.id}),(N=fn.current)===null||N===void 0||N.submit()},children:[(0,e.jsx)(S,{children:(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(Dt)})}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.codepen"}),children:(0,e.jsx)(Te,{className:"code-box-codepen"})})]}),Y&&(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:vn,onClick:function(){var N;xe({type:"codesandbox",demo:o.id}),(N=vn.current)===null||N===void 0||N.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"parameters",value:Vn(JSON.stringify(Rt))}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.codesandbox"}),children:(0,e.jsx)(Rn,{className:"code-box-codesandbox"})})]}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.separate"}),children:(0,e.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:y,children:(0,e.jsx)(An,{className:"code-box-separate"})})}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(f.FormattedMessage,{id:"app.demo.code.".concat(ce?"hide":"show")}),children:(0,e.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,e.jsx)("img",{alt:"expand code",src:te!=null&&te.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:ce?"code-expand-icon-hide":"code-expand-icon-show",onClick:function(){return yn(o.id)}}),(0,e.jsx)("img",{alt:"expand code",src:te!=null&&te.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:ce?"code-expand-icon-show":"code-expand-icon-hide",onClick:function(){return yn(o.id)}})]})})]})]}),ce&&(0,e.jsxs)("section",{className:bt,children:[(0,e.jsx)(Ve,{sourceCode:dn,jsxCode:E,styleCode:B,error:ct,entryName:ln,onCodeTypeChange:vt,onSourceChange:lt}),(0,e.jsxs)("div",{tabIndex:0,role:"button",className:at.codeHideBtn,onClick:function(){return we(!1)},children:[(0,e.jsx)(R.UpOutlined,{}),(0,e.jsx)(f.FormattedMessage,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return(0,a.useEffect)(function(){if(B){var p=document.createElement("style");return p.type="text/css",p.innerHTML=B,p["data-demo-url"]=y,document.head.appendChild(p),function(){document.head.removeChild(p)}}},[B,y]),X?(0,e.jsx)(v.Z.Ribbon,{text:X,color:X.includes("<")?"red":void 0,children:Mn}):Mn},$n=Gn,wn=t(15009),qe=t.n(wn),Jn=t(899289),Xn=t.n(Jn),Yn=t(471232),Qn=t(820640),_n=t.n(Qn),qn=t(124220),en,nn,tn,on,rn,an,sn,cn,et=(0,m.kc)(function(i){var n=i.token,o=i.css;return{wrapper:o(en||(en=h()([`
    position: relative;
    border: 1px solid `,`;
    border-radius: `,`px;
    padding: `,"px ","px ",`px;
    margin-bottom: `,`px;
  `])),n.colorBorderSecondary,n.borderRadius,n.paddingMD,n.paddingLG,n.paddingMD*2,n.marginLG),title:o(nn||(nn=h()([`
    font-size: `,`px;
    font-weight: `,`;
    color: `,`;

    &:hover {
      color: `,`;
    }
  `])),n.fontSizeLG,n.fontWeightStrong,n.colorTextHeading,n.colorTextHeading),description:o(tn||(tn=h()([`
    margin-top: `,`px;
  `])),n.margin),demo:o(on||(on=h()([`
    margin-top: `,`px;
    display: flex;
    justify-content: center;
  `])),n.marginLG),copy:o(rn||(rn=h()([`
    position: absolute;
    inset-inline-end: `,`px;
    inset-block-start: `,`px;
    cursor: pointer;
  `])),n.paddingMD,n.paddingMD),copyTip:o(an||(an=h()([`
    color: `,`;
  `])),n.colorTextTertiary),copiedTip:o(sn||(sn=h()([`
    .anticon {
      color: `,`;
    }
  `])),n.colorSuccess),tip:o(cn||(cn=h()([`
    color: `,`;
    margin-top: `,`px;
  `])),n.colorTextTertiary,n.marginMD*2)}}),nt=function(n){var o=n.children,s=n.title,d=n.description,y=n.tip,I=n.asset,A=et(),O=A.styles,$=(0,a.useRef)(null),E=a.useState(!1),B=C()(E,2),k=B[0],J=B[1],ae=Yn.Z.useApp(),X=ae.message,ie=function(){var ne=Xn()(qe()().mark(function H(){var se;return qe()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(T.prev=0,!$.current){T.next=8;break}return T.next=4,(0,qn.Sg)($.current);case 4:se=T.sent,_n()(JSON.stringify(se.toSketchJSON())),J(!0),setTimeout(function(){J(!1)},5e3);case 8:T.next=13;break;case 10:T.prev=10,T.t0=T.catch(0),X.error("\u590D\u5236\u5931\u8D25");case 13:case"end":return T.stop()}},H,null,[[0,10]])}));return function(){return ne.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:O.wrapper,id:I.id,children:[(0,e.jsx)("a",{className:O.title,href:"#".concat(I.id),children:s}),d&&(0,e.jsx)("div",{className:O.description,dangerouslySetInnerHTML:{__html:d}}),(0,e.jsx)("div",{className:O.copy,children:k?(0,e.jsxs)("div",{className:O.copiedTip,children:[(0,e.jsx)(R.CheckOutlined,{}),(0,e.jsx)("span",{style:{marginInlineStart:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,e.jsxs)("div",{onClick:ie,className:O.copyTip,children:[(0,e.jsx)(R.SketchOutlined,{}),(0,e.jsx)("span",{style:{marginInlineStart:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,e.jsx)("div",{className:O.demo,ref:$,children:o}),(0,e.jsx)("div",{className:O.tip,children:y})]})},tt=nt,ot=function(n){var o=(0,f.useTabMeta)();return(o==null?void 0:o.frontmatter.title)==="Design"?(0,e.jsx)(tt,g()({},n)):(0,e.jsx)($n,g()({},n))},rt=ot},148050:function(ye,V,t){"use strict";t.r(V);var _=t(168400),g=t.n(_),a=t(667294),f=t(639389),z=t.n(f),M=t(879587),w=t(647759),h=t(785893),W,C="https://github.com/ant-design/ant-design/edit/master/",R=(0,w.kc)(function(Z){var b=Z.token,L=Z.css,c=b.colorIcon,v=b.colorText,m=b.iconCls;return{editButton:L(W||(W=g()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: `,`px;
        `,` {
          display: block;
          color: `,`;
          font-size: `,`px;
          transition: all `,`;
          &:hover {
            color: `,`;
          }
        }
      }
    `])),b.marginXS,m,c,b.fontSizeLG,b.motionDurationSlow,v)}}),j=function(b){var L=b.title,c=b.filename,v=R(),m=v.styles;return(0,h.jsx)(M.Z,{title:L,children:(0,h.jsx)("a",{className:m.editButton,href:"".concat(C).concat(c),target:"_blank",rel:"noopener noreferrer",children:(0,h.jsx)(f.EditOutlined,{})})})};V.default=j},373638:function(ye,V,t){"use strict";t.d(V,{J1:function(){return C},Is:function(){return L},Fy:function(){return j},KE:function(){return W},qE:function(){return R}});var _=t(661227),g=t(805574),a=t(97857),f=t(385564),z=t(842348),M=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),w={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":M?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function h(c,v,m,r){var u=c.map(function(e){return e.meta}).filter(function(e){return!e.skip}),l=[],F=function(x,P){return(x.order||0)-(P.order||0)};u.sort(F).forEach(function(e){if(e.category&&(e.category=e.category[v]||e.category),e.type&&(e.type=e.type[v]||e.type),e!=null&&e.title&&(e.title=e.title[v]||e.title),!e.category){l.push(e);return}if(e.category==="Components"&&e.type){var x=l.find(function(S){return(S==null?void 0:S.title)===e.type});x||(x={type:"type",title:e.type,children:[],order:r[e.type]},l.push(x)),x.children=x.children||[],x.children.push(e);return}var P=l.find(function(S){return(S==null?void 0:S.title)===e.category});if(P||(P={type:"category",title:e.category,children:[],order:m[e.category]},l.push(P)),P.children=P.children||[],e.type){var U=P.children.filter(function(S){return(S==null?void 0:S.title)===e.type})[0];U||(U={type:"type",title:e.type,children:[],order:r[e.type]},P.children.push(U)),U.children=U.children||[],U.children.push(e)}else P.children.push(e)});function G(e){return e.sort(F).map(function(x){return x.children?_objectSpread(_objectSpread({},x),{},{children:G(x.children)}):x})}return G(l)}function W(c){return/-cn\/?$/.test(c)}function C(c,v,m,r){var u=c.startsWith("/")?c:"/".concat(c),l;if(v?u==="/"?l="/index-cn":u.endsWith("/")?l=u.replace(/\/$/,"-cn/"):(l="".concat(u,"-cn"),l=l.replace(/(-cn)+/,"-cn")):l=/\/?index-cn/.test(u)?"/":u.replace("-cn",""),r){var F=r[v?"zhCN":"enUS"];l+="#".concat(F)}return{pathname:l,search:m}}function R(c){var v="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",m=new Image,r,u=function(F){r||(r=!0,m.src="",c(F))};return m.onload=function(){return u("responded")},m.onerror=function(){return u("error")},m.src=v,setTimeout(function(){return u("timeout")},1500)}function j(){var c="test",v=window.localStorage;try{return v.setItem(c,"1"),v.removeItem(c),!0}catch(m){return!1}}function Z(c){return new Promise(function(v,m){var r=document.createElement("script");r.type="text/javascript",r.src=c,r.onload=v,r.onerror=m,document.head.appendChild(r)})}function b(c){var v=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(c))return"";var m=flattenDeep(c.filter(function(r){if(Array.isArray(r)){var u=_slicedToArray(r,1),l=u[0];return l==="p"}return!1}).map(function(r){var u=flatten(r),l=_toArray(u),F=l[0],G=l.slice(1),e=G.filter(function(x){return typeof x=="string"&&!v.includes(x)}).join("");return[F,e]})).find(function(r){return r&&typeof r=="string"&&!v.includes(r)});return m}var L=function(){return w}},471232:function(ye,V,t){"use strict";t.d(V,{Z:function(){return F}});var _=t(97857),g=t.n(_),a=t(805574),f=t.n(a),z=t(667294),M=t(693967),w=t.n(M),h=t(73287),W=t(215570),C=t(269924),R=t(890887),j=t(414466),Z=t(9783),b=t.n(Z),L=t(286665),c=function(e){var x=e.componentCls,P=e.colorText,U=e.fontSize,S=e.lineHeight,oe=e.fontFamily;return b()({},x,{color:P,fontSize:U,lineHeight:S,fontFamily:oe})},v=function(){return{}},m=(0,L.I$)("App",c,v),r=t(785893),u=function(){return z.useContext(j.Z)},l=function(e){var x=e.prefixCls,P=e.children,U=e.className,S=e.rootClassName,oe=e.message,Ce=e.notification,Te=e.style,je=e.component,de=je===void 0?"div":je,Ne=(0,z.useContext)(h.E_),Ae=Ne.getPrefixCls,Le=Ae("app",x),ue=m(Le),me=f()(ue,3),q=me[0],Be=me[1],ze=me[2],Ze=w()(Be,Le,U,S,ze),re=(0,z.useContext)(j.J),ve=z.useMemo(function(){return{message:g()(g()({},re.message),oe),notification:g()(g()({},re.notification),Ce)}},[oe,Ce,re.message,re.notification]),Se=(0,W.Z)(ve.message),pe=f()(Se,2),be=pe[0],Fe=pe[1],Ee=(0,R.Z)(ve.notification),De=f()(Ee,2),fe=De[0],Me=De[1],Pe=(0,C.Z)(),he=f()(Pe,2),Oe=he[0],Ue=he[1],ke=z.useMemo(function(){return{message:be,notification:fe,modal:Oe}},[be,fe,Oe]),Ke=de===!1?z.Fragment:de,Ve={className:Ze,style:Te};return q((0,r.jsx)(j.Z.Provider,{value:ke,children:(0,r.jsx)(j.J.Provider,{value:ve,children:(0,r.jsxs)(Ke,g()(g()({},de===!1?void 0:Ve),{},{children:[Ue,Fe,Me,P]}))})}))};l.useApp=u;var F=l},991343:function(){},824654:function(){}}]);
