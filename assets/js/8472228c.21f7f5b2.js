"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1935],{9416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Settings/IPAddressingMethods","title":"DHCP / Static IP","description":"The netMeter supports both static IP and DHCP methods for obtaining an IP address from a router.","source":"@site/docs/03_Settings/03_IPAddressingMethods.md","sourceDirName":"03_Settings","slug":"/Settings/IPAddressingMethods","permalink":"/docs/Settings/IPAddressingMethods","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"netmeterSidebar","previous":{"title":"Devices","permalink":"/docs/Settings/Devices"},"next":{"title":"PDF Report Presets","permalink":"/docs/Settings/PDFReportPresets"}}');var s=n(4848),r=n(8453);const o={sidebar_position:3},a="DHCP / Static IP",c={},d=[{value:"Bluetooth Pairing",id:"bluetooth-pairing",level:2},{value:"Configuring Static IP",id:"configuring-static-ip",level:2},{value:"Revert to DHCP",id:"revert-to-dhcp",level:2}];function l(e){const t={a:"a",br:"br",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"dhcp--static-ip",children:"DHCP / Static IP"})}),"\n",(0,s.jsxs)(t.p,{children:["The netMeter supports both static IP and DHCP methods for obtaining an IP address from a router.",(0,s.jsx)(t.br,{}),"\n","This functionality is enabled by connecting a Bluetooth USB dongle to the netMeter device that supports USB port expansion."]}),"\n",(0,s.jsxs)(t.p,{children:["\u26a0\ufe0e This feature relies on the Web Bluetooth API, and is ",(0,s.jsx)(t.strong,{children:"only supported on Chrome and Edge browsers for Windows, Mac, Linux, and Android."})," Apple iOS is not supported. For details, refer to ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API",children:"MDN Web Bluetooth API Browser Compatibility."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"netMeterN1 USB Port",src:n(2203).A+"",width:"3244",height:"1684"})}),"\n",(0,s.jsx)(t.p,{children:"Compatibility has been tested only with Bluetooth USB dongles that meet the following specifications."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Realtek RTL8821CU chipset"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["No additional user actions are required to use these Bluetooth USB dongles, as they are natively supported in the latest firmware of the netMeter.\nFor detailed technical support regarding compatible USB Bluetooth dongles, please contact ",(0,s.jsx)(t.a,{href:"mailto:support-netmeter@nextlab.co.kr",children:"support-netmeter@nextlab.co.kr"})]}),"\n",(0,s.jsx)(t.h2,{id:"bluetooth-pairing",children:"Bluetooth Pairing"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"How to Pairing via Bluetooth",src:n(1698).A+"",width:"4714",height:"2880"})}),"\n",(0,s.jsx)(t.p,{children:"With a compatible Bluetooth dongle attached to the netMeter, navigate to Settings > Devices > IP Configuration > Pairing Button."}),"\n",(0,s.jsx)(t.p,{children:"When the Bluetooth pairing popup appears in the browser displaying netHUB, select the device that matches the serial number of your netMeter and proceed with pairing."}),"\n",(0,s.jsx)(t.p,{children:"\u26a0\ufe0e On some devices, the browser may request location access or permission to scan for nearby devices. Please allow these permissions in the browser app's security settings."}),"\n",(0,s.jsx)(t.p,{children:'\u26a0\ufe0e During the initial pairing or in some browsers, the serial number advertised by the netMeter may appear as "Unknown or Unsupported Device".'}),"\n",(0,s.jsx)(t.p,{children:'Once pairing is successfully completed, a message saying "Bluetooth connection completed" will appear, and the current netMeter Link Info will automatically display in the input field.'}),"\n",(0,s.jsx)(t.h2,{id:"configuring-static-ip",children:"Configuring Static IP"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Configuring Static IP",src:n(2254).A+"",width:"2020",height:"1304"})}),"\n",(0,s.jsx)(t.p,{children:"You can configure the information required for the netMeter to obtain an IP address from the router, including the IP, Subnet Mask, Gateway IP, and DNS Server, as needed.\nAfter making the necessary changes, press the Apply button to apply the modifications."}),"\n",(0,s.jsx)(t.p,{children:"Once the Apply button is pressed and the configuration is sent to the netMeter, it may appear in an Offline state until it receives the IP allocation based on the configured settings. If the netMeter successfully obtains the correct IP from the router and connects to the internet, the updated netMeter Link Info reflecting the new settings will be displayed, and the netMeter will appear Online."}),"\n",(0,s.jsx)(t.p,{children:"If incorrect or conflicting IP information is entered, and the netMeter is unable to obtain an IP, it may remain in an Offline state. In such cases, please double-check the entered information and try again."}),"\n",(0,s.jsx)(t.h2,{id:"revert-to-dhcp",children:"Revert to DHCP"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Revert to DHCP",src:n(159).A+"",width:"2020",height:"1320"})}),"\n",(0,s.jsx)(t.p,{children:"If there is an issue with the static IP configuration or you need to revert to the DHCP allocation method, you can reset the static IP settings by pressing the Reset button, which will restore the device to DHCP allocation mode."}),"\n",(0,s.jsx)(t.p,{children:"During the process of changing the allocation method, the netMeter may appear Offline until it successfully obtains a valid IP address from the router and comes online."}),"\n",(0,s.jsx)(t.p,{children:"Since a netMeter with a static IP configuration may not be able to access the internet, this process is performed via Bluetooth, allowing direct communication between the user's device and the netMeter."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1698:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/BTPairing-09cc95f4ead77ac8004c516153f62840.png"},159:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/BTReset-a82a3e082d269c59898e28413cf72818.png"},2254:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/BTStatic-80d2016c1a47d87f7288f160e415b115.png"},2203:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/USBPort-ae7edc0762c057089cfe53365ca66438.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);