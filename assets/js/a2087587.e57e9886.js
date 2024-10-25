"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7949],{2374:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(4848),o=s(8453);const r=s.p+"assets/images/TraceTest-d6277abc7840d1de3f6150f5bba9f4aa.png",i={sidebar_position:2},a="Trace Test",c={id:"Features/NetworkTools/TraceTest",title:"Trace Test",description:"The Trace Test feature provides trace route tests to diagnose network connectivity and identify routing issues",source:"@site/docs/02_Features/04_NetworkTools/02_TraceTest.md",sourceDirName:"02_Features/04_NetworkTools",slug:"/Features/NetworkTools/TraceTest",permalink:"/docs/Features/NetworkTools/TraceTest",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"netmeterSidebar",previous:{title:"Ping Test",permalink:"/docs/Features/NetworkTools/PingTest"},next:{title:"Packet Capture",permalink:"/docs/Features/NetworkTools/PacketCapture"}},l={},d=[{value:"Destination address",id:"destination-address",level:2},{value:"Maximum Hops (Time To Live : TTL)",id:"maximum-hops-time-to-live--ttl",level:2},{value:"Number of Pings",id:"number-of-pings",level:2},{value:"Protocol",id:"protocol",level:2},{value:"Results History",id:"results-history",level:2}];function u(e){const t={h1:"h1",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"trace-test",children:"Trace Test"}),"\n",(0,n.jsx)(t.p,{children:"The Trace Test feature provides trace route tests to diagnose network connectivity and identify routing issues\nby displaying the path that data packets take between netMeter and a specified destination.\nThis helps pinpoint network congestion or latency."}),"\n","\n","\n",(0,n.jsx)("img",{src:r,style:{width:380}}),"\n",(0,n.jsx)(t.h2,{id:"destination-address",children:"Destination address"}),"\n",(0,n.jsx)(t.p,{children:"Specify the destination IP address or domain name for the trace route test.\nThe domain name must exclude protocols (e.g., http:// or https://)."}),"\n",(0,n.jsx)(t.h2,{id:"maximum-hops-time-to-live--ttl",children:"Maximum Hops (Time To Live : TTL)"}),"\n",(0,n.jsx)(t.p,{children:"Determine the maximum number of hops for the trace route test.\nThis parameter sets the limit for the number of routers or network nodes that the test will\ntraverse before reaching the destination."}),"\n",(0,n.jsx)(t.p,{children:"The default value for Trace Test is set to 30. Users can adjust it between 1 and 255."}),"\n",(0,n.jsx)(t.h2,{id:"number-of-pings",children:"Number of Pings"}),"\n",(0,n.jsx)(t.p,{children:"Define the number of pings sent to each router along the trace route path.\nThis parameter influences the accuracy of the test results by providing multiple data points\nfor analyzing network latency and packet loss at each hop."}),"\n",(0,n.jsx)(t.p,{children:"The default value for Trace Test is set to 3. Users can adjust it between 1 and 10."}),"\n",(0,n.jsx)(t.h2,{id:"protocol",children:"Protocol"}),"\n",(0,n.jsx)(t.p,{children:"In certain network environments, there might be instances where ICMP filtering is applied as part of security protocols.\nThis could potentially impact the outcomes of Trace Routing.\nIn this case, users can alternatively use the UDP protocol instead."}),"\n",(0,n.jsx)(t.p,{children:"The default protocol is set to ICMP."}),"\n",(0,n.jsx)(t.h2,{id:"results-history",children:"Results History"}),"\n",(0,n.jsx)(t.p,{children:"When the measurement is complete, netMeter automatically uploads the measurement results to the server.\nYou can access measurement records and details at any time through the 'Results' tab at the bottom of the screen."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>a});var n=s(6540);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);