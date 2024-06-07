"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5683],{33156:function(P,s,t){t.r(s);var c=t(805574),_=t.n(c),r=t(667294),a=t(75529),e=t(811834),n=t(879587),d=t(941346),l=t(785893),o=(0,l.jsx)("span",{children:"prompt text"}),E=80,i=function(){var j=(0,r.useState)("Show"),m=_()(j,2),x=m[0],D=m[1],h=(0,r.useMemo)(function(){return x==="Hide"?!1:x==="Show"?!0:{pointAtCenter:!0}},[x]);return(0,l.jsxs)(a.ZP,{button:{style:{width:E,margin:4}},children:[(0,l.jsx)(e.Z,{value:x,options:["Show","Hide","Center"],onChange:function(O){return D(O)},style:{marginBottom:24}}),(0,l.jsxs)("div",{className:"demo",children:[(0,l.jsxs)("div",{style:{marginInlineStart:E,whiteSpace:"nowrap"},children:[(0,l.jsx)(n.Z,{placement:"topLeft",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"TL"})}),(0,l.jsx)(n.Z,{placement:"top",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"Top"})}),(0,l.jsx)(n.Z,{placement:"topRight",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"TR"})})]}),(0,l.jsxs)("div",{style:{width:E,float:"inline-start"},children:[(0,l.jsx)(n.Z,{placement:"leftTop",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"LT"})}),(0,l.jsx)(n.Z,{placement:"left",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"Left"})}),(0,l.jsx)(n.Z,{placement:"leftBottom",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"LB"})})]}),(0,l.jsxs)("div",{style:{width:E,marginInlineStart:E*4+24},children:[(0,l.jsx)(n.Z,{placement:"rightTop",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"RT"})}),(0,l.jsx)(n.Z,{placement:"right",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"Right"})}),(0,l.jsx)(n.Z,{placement:"rightBottom",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"RB"})})]}),(0,l.jsxs)("div",{style:{marginInlineStart:E,clear:"both",whiteSpace:"nowrap"},children:[(0,l.jsx)(n.Z,{placement:"bottomLeft",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"BL"})}),(0,l.jsx)(n.Z,{placement:"bottom",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"Bottom"})}),(0,l.jsx)(n.Z,{placement:"bottomRight",title:o,arrow:h,children:(0,l.jsx)(d.ZP,{children:"BR"})})]})]})]})};s.default=i},463492:function(P,s,t){t.r(s);var c=t(97857),_=t.n(c),r=t(667294),a=t(879587),e=t(941346),n=t(700781),d=t(785893),l=r.forwardRef(function(E,i){return(0,d.jsx)("div",{style:{overflow:"auto",position:"relative",padding:"24px",border:"1px solid #e9e9e9"},ref:i,children:(0,d.jsxs)("div",{style:{width:"200%",display:"flex",flexDirection:"column",alignItems:"center",rowGap:16},children:[(0,d.jsx)(a.Z,_()(_()({},E),{},{placement:"left",title:"Prompt Text",children:(0,d.jsx)(e.ZP,{children:"Adjust automatically / \u81EA\u52A8\u8C03\u6574"})})),(0,d.jsx)(a.Z,_()(_()({},E),{},{placement:"left",title:"Prompt Text",autoAdjustOverflow:!1,children:(0,d.jsx)(e.ZP,{children:"Ignore / \u4E0D\u5904\u7406"})}))]})})}),o=function(){var i=r.useRef(null),u=r.useRef(null);return r.useEffect(function(){i.current.scrollLeft=i.current.clientWidth*.5,u.current.scrollLeft=u.current.clientWidth*.5},[]),(0,d.jsxs)("div",{style:{display:"flex",flexDirection:"column",rowGap:16},children:[(0,d.jsx)(n.Z.Title,{level:5,children:"With `getPopupContainer`"}),(0,d.jsx)(l,{ref:i,getPopupContainer:function(m){return m.parentElement}}),(0,d.jsx)(n.Z.Title,{level:5,children:"Without `getPopupContainer`"}),(0,d.jsx)(l,{ref:u})]})};s.default=o},291621:function(P,s,t){t.r(s);var c=t(667294),_=t(879587),r=t(785893),a=function(){return(0,r.jsx)(_.Z,{title:"prompt text",children:(0,r.jsx)("span",{children:"Tooltip will show on mouse enter."})})};s.default=a},990405:function(P,s,t){t.r(s);var c=t(667294),_=t(315816),r=t(945016),a=t(879587),e=t(941346),n=t(785893),d=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],l=["#f50","#2db7f5","#87d068","#108ee9"],o=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(_.Z,{orientation:"left",children:"Presets"}),(0,n.jsx)(r.Z,{wrap:!0,children:d.map(function(i){return(0,n.jsx)(a.Z,{title:"prompt text",color:i,children:(0,n.jsx)(e.ZP,{children:i})},i)})}),(0,n.jsx)(_.Z,{orientation:"left",children:"Custom"}),(0,n.jsx)(r.Z,{wrap:!0,children:l.map(function(i){return(0,n.jsx)(a.Z,{title:"prompt text",color:i,children:(0,n.jsx)(e.ZP,{children:i})},i)})})]})};s.default=o},333810:function(P,s,t){t.r(s);var c=t(667294),_=t(879587),r=t(941346),a=t(785893),e=function(){return(0,a.jsx)(_.Z,{open:!0,title:"Thanks for using antd. Have a nice day!",arrow:{pointAtCenter:!0},placement:"topLeft",children:(0,a.jsx)(r.ZP,{children:"Point at center"})})};s.default=e},809995:function(P,s,t){t.r(s);var c=t(667294),_=t(879587),r=t(785893),a=function(){return(0,r.jsx)(_.Z,{destroyTooltipOnHide:!0,title:"prompt text",children:(0,r.jsx)("span",{children:"Tooltip will destroy when hidden."})})};s.default=a},193451:function(P,s,t){t.r(s);var c=t(97857),_=t.n(c),r=t(667294),a=t(879587),e=t(945016),n=t(941346),d=t(534826),l=t(473894),o=t(7575),E=t(469181),i=t(785893),u=function(x){return(0,i.jsx)(a.Z,_()({title:"Thanks for using antd. Have a nice day!"},x))},j=function(){return(0,i.jsxs)(e.Z,{children:[(0,i.jsx)(u,{children:(0,i.jsx)(n.ZP,{disabled:!0,children:"Disabled"})}),(0,i.jsx)(u,{children:(0,i.jsx)(d.Z,{disabled:!0,placeholder:"disabled"})}),(0,i.jsx)(u,{children:(0,i.jsx)(l.Z,{disabled:!0})}),(0,i.jsx)(u,{children:(0,i.jsx)(o.Z,{disabled:!0})}),(0,i.jsx)(u,{children:(0,i.jsx)(E.Z,{disabled:!0})})]})};s.default=j},415505:function(P,s,t){t.r(s);var c=t(805574),_=t.n(c),r=t(667294),a=t(945016),e=t(941346),n=t(879587),d=t(785893),l=function(){var E=(0,r.useState)(!0),i=_()(E,2),u=i[0],j=i[1];return(0,d.jsxs)(a.Z,{children:[(0,d.jsx)(e.ZP,{onClick:function(){return j(!u)},children:u?"Enable":"Disable"}),(0,d.jsx)(n.Z,{title:u?"":"prompt text",children:(0,d.jsx)("span",{children:"Tooltip will show on mouse enter."})})]})};s.default=l},581222:function(P,s,t){t.r(s);var c=t(667294),_=t(75529),r=t(879587),a=t(941346),e=t(785893),n=(0,e.jsx)("span",{children:"prompt text"}),d=80,l=function(){return(0,e.jsx)(_.ZP,{button:{style:{width:d,margin:4}},children:(0,e.jsxs)("div",{className:"demo",children:[(0,e.jsxs)("div",{style:{marginInlineStart:d,whiteSpace:"nowrap"},children:[(0,e.jsx)(r.Z,{placement:"topLeft",title:n,children:(0,e.jsx)(a.ZP,{children:"TL"})}),(0,e.jsx)(r.Z,{placement:"top",title:n,children:(0,e.jsx)(a.ZP,{children:"Top"})}),(0,e.jsx)(r.Z,{placement:"topRight",title:n,children:(0,e.jsx)(a.ZP,{children:"TR"})})]}),(0,e.jsxs)("div",{style:{width:d,float:"inline-start"},children:[(0,e.jsx)(r.Z,{placement:"leftTop",title:n,children:(0,e.jsx)(a.ZP,{children:"LT"})}),(0,e.jsx)(r.Z,{placement:"left",title:n,children:(0,e.jsx)(a.ZP,{children:"Left"})}),(0,e.jsx)(r.Z,{placement:"leftBottom",title:n,children:(0,e.jsx)(a.ZP,{children:"LB"})})]}),(0,e.jsxs)("div",{style:{width:d,marginInlineStart:d*4+24},children:[(0,e.jsx)(r.Z,{placement:"rightTop",title:n,children:(0,e.jsx)(a.ZP,{children:"RT"})}),(0,e.jsx)(r.Z,{placement:"right",title:n,children:(0,e.jsx)(a.ZP,{children:"Right"})}),(0,e.jsx)(r.Z,{placement:"rightBottom",title:n,children:(0,e.jsx)(a.ZP,{children:"RB"})})]}),(0,e.jsxs)("div",{style:{marginInlineStart:d,clear:"both",whiteSpace:"nowrap"},children:[(0,e.jsx)(r.Z,{placement:"bottomLeft",title:n,children:(0,e.jsx)(a.ZP,{children:"BL"})}),(0,e.jsx)(r.Z,{placement:"bottom",title:n,children:(0,e.jsx)(a.ZP,{children:"Bottom"})}),(0,e.jsx)(r.Z,{placement:"bottomRight",title:n,children:(0,e.jsx)(a.ZP,{children:"BR"})})]})]})})};s.default=l},590229:function(P,s,t){t.r(s);var c=t(667294),_=t(879587),r=t(785893),a=_.Z._InternalPanelDoNotUseOrYouWillBeFired,e=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{title:"Hello, Pink Pure Panel!",color:"pink"}),(0,r.jsx)(a,{title:"Hello, Customize Color Pure Panel!",color:"#f50"}),(0,r.jsx)(a,{title:"Hello, Pure Panel!",placement:"bottomLeft",style:{width:200}})]})};s.default=e},511308:function(P,s,t){t.r(s);var c=t(667294),_=t(879587),r=t(941346),a=t(785893),e=function(){return c.useEffect(function(){document.documentElement.scrollTop=document.documentElement.clientHeight,document.documentElement.scrollLeft=document.documentElement.clientWidth},[]),(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{width:"300vw",height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,a.jsx)(_.Z,{title:"Thanks for using antd. Have a nice day!",trigger:"click",defaultOpen:!0,children:(0,a.jsx)(r.ZP,{children:"Scroll The Window"})})})})};s.default=e}}]);
