"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[351],{8586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var s=n(4848),i=n(8453);const r=n.p+"assets/images/TWAMPSender-d7f4248c3311d944daa3650f9c997ded.png",o=n.p+"assets/images/TWAMPResponder-e4345013cf91323e7daaade766aa9609.png",a={sidebar_position:3},d="TWAMP",l={id:"Features/IPTest/TWAMP",title:"TWAMP",description:"The TWAMP (Two-way Active Measurement Protocol) measurement feature enables users to actively measure",source:"@site/docs/02_Features/02_IPTest/03_TWAMP.md",sourceDirName:"02_Features/02_IPTest",slug:"/Features/IPTest/TWAMP",permalink:"/docusaurus/docs/Features/IPTest/TWAMP",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"netmeterSidebar",previous:{title:"Trace Test",permalink:"/docusaurus/docs/Features/IPTest/TraceTest"},next:{title:"Streaming Test",permalink:"/docusaurus/docs/category/streaming-test"}},c={},h=[{value:"<strong>\u26a0\ufe0eCBT Notice:</strong> In the Closed Beta Test stage, only TWAMP Light mode (UDP) is supported.",id:"\ufe0ecbt-notice-in-the-closed-beta-test-stage-only-twamp-light-mode-udp-is-supported",level:4},{value:"TWAMP : Sender Mode",id:"twamp--sender-mode",level:2},{value:"Destination",id:"destination",level:3},{value:"Statistics",id:"statistics",level:3},{value:"Log",id:"log",level:3},{value:"TWAMP : Sender Mode",id:"twamp--sender-mode-1",level:2},{value:"Listening Port",id:"listening-port",level:3},{value:"Log",id:"log-1",level:3},{value:"History",id:"history",level:2}];function u(e){const t={h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"twamp",children:"TWAMP"}),"\n",(0,s.jsx)(t.p,{children:"The TWAMP (Two-way Active Measurement Protocol) measurement feature enables users to actively measure\nvarious network metrics such as latency, packet loss, and jitter."}),"\n",(0,s.jsx)(t.p,{children:"netMeter can function as both the sender and responder in TWAMP, allowing you to create a bidirectional\nmeasurement setup between the destination and netMeter within your network infrastructure for a\ncomprehensive network performance analysis at a low cost."}),"\n",(0,s.jsxs)(t.h4,{id:"\ufe0ecbt-notice-in-the-closed-beta-test-stage-only-twamp-light-mode-udp-is-supported",children:[(0,s.jsx)(t.strong,{children:"\u26a0\ufe0eCBT Notice:"})," In the Closed Beta Test stage, only TWAMP Light mode (UDP) is supported."]}),"\n",(0,s.jsx)(t.h2,{id:"twamp--sender-mode",children:"TWAMP : Sender Mode"}),"\n","\n",(0,s.jsx)("img",{src:r,style:{width:380}}),"\n",(0,s.jsx)(t.h3,{id:"destination",children:"Destination"}),"\n",(0,s.jsx)(t.p,{children:"Specify the destination IP address and port to send packets as the sender role"}),"\n",(0,s.jsx)(t.p,{children:"The default port for TWAMP is set to 862."}),"\n",(0,s.jsx)(t.p,{children:'Can be adjusted according to network conditions and the TWAMP configuration of the "Responder" device.'}),"\n",(0,s.jsx)(t.p,{children:"When the user presses the start button, netMeter will initiate a TWAMP sequence to the designated destination."}),"\n",(0,s.jsx)(t.p,{children:"The default TWAMP sending sequence configuration is set to the following conditions and can be configurable\nvia Organization Settings for B2B purposes."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Number of packets to send:"})," 20"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"MTU:"})," 1500 Bytes"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Interval:"})," 50ms"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"TTL:"})," 64 Hops"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"statistics",children:"Statistics"}),"\n",(0,s.jsx)(t.p,{children:"View detailed statistics generated from the TWAMP measurements, including:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Packet Loss:"})," Percentage of packets lost during transmission."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Average Latency:"})," Mean round-trip time for data packets."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Standard Deviation:"})," Measure of the dispersion of latency values around the mean."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Minimum Latency:"})," Shortest round-trip time observed during measurements."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Maximum Latency:"})," Longest round-trip time observed during measurements."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:'Pressing the "Reset" button will reset the statistics and begin recalculating them from the moment it is pressed.\nThis action does not affect the statistics that will be uploaded and displayed in the history menu.'}),"\n",(0,s.jsx)(t.h3,{id:"log",children:"Log"}),"\n",(0,s.jsx)(t.p,{children:"Log lines will be displayed in real-time, containing detailed information about ongoing TWAMP measurements."}),"\n",(0,s.jsx)(t.p,{children:'Pressing the "Clear" button will clear the loglines. This action does not affect the log records that will be\nuploaded and displayed in the history menu. You can still download the complete log in the History menu.'}),"\n",(0,s.jsx)(t.h2,{id:"twamp--sender-mode-1",children:"TWAMP : Sender Mode"}),"\n","\n","\n",(0,s.jsx)("img",{src:o,style:{width:380}}),"\n",(0,s.jsx)(t.h3,{id:"listening-port",children:"Listening Port"}),"\n",(0,s.jsx)(t.p,{children:"Specify the port number on which the TWAMP responder will listen for incoming TWAMP test packets."}),"\n",(0,s.jsx)(t.p,{children:"The default port for TWAMP is set to 862."}),"\n",(0,s.jsx)(t.p,{children:'Can be adjusted according to TWAMP configuration of the "Sender" device or network conditions.'}),"\n",(0,s.jsx)(t.p,{children:"When the user presses the start button, netMeter will start as a TWAMP responder server.\nThe IP address and port of the netMeter will be displayed on the button. This information can be used as the destination for senders."}),"\n",(0,s.jsx)(t.h3,{id:"log-1",children:"Log"}),"\n",(0,s.jsx)(t.p,{children:"Log lines will be displayed in real-time, containing detailed information about ongoing TWAMP measurements."}),"\n",(0,s.jsx)(t.p,{children:'Pressing the "Clear" button will clear the loglines. This action does not affect the log records that will be\nuploaded and displayed in the history menu. You can still download the complete log in the History menu.'}),"\n",(0,s.jsx)(t.h2,{id:"history",children:"History"}),"\n",(0,s.jsx)(t.p,{children:"When the measurement is complete, netMeter automatically uploads the measurement results to the server.\nYou can access measurement records and details at any time through the 'History' menu at the top of the screen."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);