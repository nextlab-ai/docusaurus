---
sidebar_position: 2
---

# Network Emulation

The Network Emulation feature enables users to simulate various network conditions for traffic passing through 
the LAN port of the netMeter. You can locate the LAN port of the netMeter in the Device Layout section 
corresponding to the model in the startup guide.

import networkEmulation from "../img/NetworkEmulation.png"

<img src={networkEmulation} style={{width:380}} />

## Monitoring

Connection status will be displayed under LAN. The external IP for the LAN port will be displayed under WAN.

- **Traffic Control is applied**

![TC Applied](../img/Indicator_TrafficControl.png)

- **IP Filtering is applied**

![IF Applied](../img/Indicator_IPFiltering.png)

- **Traffic Control and IP Filtering is applied**

![TCIF Applied](../img/Indicator_TCIF.png)

- **Real-time Traffic:** Real-time monitoring statistics of inbound and outbound traffic passing through the 
LAN port will be displayed.

## Traffic Control

Users can manually adjust network traffic for both inbound and outbound directions.

- **Bandwidth:** The LAN interface's bandwidth will be capped to the configured value.
- **Delay:** netMeter will emulate network delay for the traffic passing through LAN.
- **Loss:** netMeter will emulate packet loss for the traffic passing through LAN.

Toggling each function will take effect immediately.

## IP Filtering

Users can filter network traffic by defining rules based on source and destination IP addresses 
for both inbound and outbound directions.

IP and port are optional. If only the protocol has been set, all packets will be filtered accordingly.

Toggling each function will take effect immediately.