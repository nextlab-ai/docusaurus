"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[682],{1265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(4848),r=t(8453);const o=t.p+"assets/images/IRDropdown-9c061c616bae0f7e634241931641ad31.png",s={sidebar_position:2},a="IR Profile",l={id:"Settings/UserConfig/IRProfile",title:"IR Profile",description:"To use the IR Remote Control feature from the Control Panel, IR Profiles must be pre-configured.",source:"@site/docs/03_Settings/02_UserConfig/02_IRProfile.md",sourceDirName:"03_Settings/02_UserConfig",slug:"/Settings/UserConfig/IRProfile",permalink:"/docs/Settings/UserConfig/IRProfile",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"netmeterSidebar",previous:{title:"IPTV Profile",permalink:"/docs/Settings/UserConfig/IPTVProfile"},next:{title:"Miscellaneous",permalink:"/docs/category/miscellaneous"}},d={},c=[{value:"Creating IR Profile",id:"creating-ir-profile",level:2},{value:"Manage IR Profile",id:"manage-ir-profile",level:2},{value:"Manual Register",id:"manual-register",level:3},{value:"Input Format",id:"input-format",level:4},{value:"<strong>Command list</strong>",id:"command-list",level:3},{value:"<strong>\u26a0\ufe0eCBT Notice:</strong> In the Closed Beta Test stage, Import / Export feature is not supported.",id:"\ufe0ecbt-notice-in-the-closed-beta-test-stage-import--export-feature-is-not-supported",level:4}];function h(e){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"ir-profile",children:"IR Profile"}),"\n",(0,i.jsx)(n.p,{children:"To use the IR Remote Control feature from the Control Panel, IR Profiles must be pre-configured.\nThe IR Profiles configured here will be shown in the dropdown menu in the IR Remote Control UI."}),"\n","\n","\n",(0,i.jsx)("img",{src:o,style:{width:380}}),"\n",(0,i.jsx)(n.h2,{id:"creating-ir-profile",children:"Creating IR Profile"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IR Profile Manage",src:t(483).A+"",width:"4448",height:"2132"})}),"\n",(0,i.jsx)(n.p,{children:"To configure an IR Profile, first create a new one by clicking the \u201cCreate new IR Profile\u201d button."}),"\n",(0,i.jsx)(n.p,{children:"Profiles created by the user will be displayed in the list."}),"\n",(0,i.jsx)(n.p,{children:"To manage or edit the IR Command list of an IR profile, clicking the corresponding profile will navigate to the\nIR Profile management page. On this page, users can manually register IR Command lists by adding IR signal code\nand metadata for signal code."}),"\n",(0,i.jsx)(n.h2,{id:"manage-ir-profile",children:"Manage IR Profile"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IR Profile Manage",src:t(6376).A+"",width:"2120",height:"2526"})}),"\n",(0,i.jsx)(n.h3,{id:"manual-register",children:"Manual Register"}),"\n",(0,i.jsx)(n.h4,{id:"input-format",children:"Input Format"}),"\n",(0,i.jsx)(n.p,{children:"Set the protocol defining the IR signal information.\nSupports NEC Protocol format and Pronto HEX format. This property cannot be modified after registration."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NEC:"})," Register an IR signal using the NEC protocol."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Command Name"}),": The label of the IR signal command that will be shown in the command list."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Carrier Frequency (Hz)"}),": The carrier frequency of the IR signal, as defined by the manufacturer."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Data Code (HEX)"}),": An 8-digit hexadecimal representing NEC data code (32-bit)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Pronto HEX Format:"})," Register a RAW IR signal data using the Pronto HEX format.\nThis allows you to input signal information for IR signals compliant with protocols other than NEC."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Command Name"}),": Label of the IR signal command that will be shown in the command list."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"RAW Signal HEX Code"}),": Hexadecimal representation of the raw IR signal data used for remote control commands.\nIt consists of a sequence of hexadecimal digits that encode the timing and modulation information required to reproduce\nan IR signal accurately. Each digit or pair of digits corresponds to a specific aspect of the IR signal.",(0,i.jsx)(n.br,{}),"\n","(For more information Pronto Hex Format, ",(0,i.jsx)(n.a,{href:"https://www.remotecentral.com/features/irdisp2.htm",children:"https://www.remotecentral.com/features/irdisp2.htm"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Clear"})," button will erase all content entered in the form."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Decode"})," button will interpret the Pronto Infrared Preamble only.\nThis allows users to briefly check if the correct Pronto code has been provided.\nIt does not imply integrity and verification for the entire Pronto HEX code."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Test Signal:"})," The IR signal data provided by the user is transmitted using the IR transmitter of the netMeter.\nUsers can verify whether the target device operates based on the entered IR signal code before it is added to the command list"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Add signal code:"}),' Pressing the "Add signal code" button will add IR Signal data to profile\u2019s Command list.']}),"\n",(0,i.jsx)(n.h3,{id:"command-list",children:(0,i.jsx)(n.strong,{children:"Command list"})}),"\n",(0,i.jsxs)(n.h4,{id:"\ufe0ecbt-notice-in-the-closed-beta-test-stage-import--export-feature-is-not-supported",children:[(0,i.jsx)(n.strong,{children:"\u26a0\ufe0eCBT Notice:"})," In the Closed Beta Test stage, Import / Export feature is not supported."]}),"\n",(0,i.jsx)(n.p,{children:"The list of IR Commands associated with the IR profile is displayed."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Kebab Menu Icon",src:t(4388).A+"",width:"72",height:"42"})}),"\n",(0,i.jsx)(n.p,{children:"Users can delete or edit each IR Commands by clicking this icon."})]})}function g(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},483:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/IRProfile-856574fdabbbcaed6fd5db33d8ba7265.png"},4388:(e,n,t)=>{t.d(n,{A:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAqCAYAAAAQ0R0WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE7SURBVHgB7djRjUBAEAbgcbkCqEBUoARK0AEd0AEqoAQdUAId0IEO6GDPerhkL3fm0X/J/yUk8/rH7szwzEXoTx9CjxiQggEpGJCCASkYkAIqoPM8ZZom2fddYBgQ4zjaeez7GYbBIPDsSwBEUeR8Ob7vy3Ec8jaYI2aP11P9FpiAiqJw6rIsBQHMEbOue0eWZZEwDKVpGkEAFRAizkEKBqRgQAoGpPgUIPM8310sjmPJskwgGBBXW3dWjb7vDQKYNh8EgTM9c9X4J2ACquvaqblq/ML+C9q2TZIkkTRNBQFXDQXvIAUDUjAgBQNSQK0abdve/6VtB8vzXCAYEFVVOauGrRHAtHnP85yaq8YPNpCn+i0wAXVd91i/BWqSthf0uq73JY3yBXHVUHAOUjAgBQNSMCAFA1IwIMUX+Aqk6bBqmDQAAAAASUVORK5CYII="},6376:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ManageIRProfile-58ed92712f6b885e988e715d328d7d2d.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const r={},o=i.createContext(r);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);