---
sidebar_position: 2
---

# LAN Scan

The LAN Scan feature scans other network interfaces on the same network as netMeter 
and identifies the open ports of the scanned network clients.

import lanScan from "../img/LANScan.png"

<img src={lanScan} style={{width:380}} />


## Scan Interval

netMeter will perform LANScan at specified intervals.

## Port Retrieval

Defines the ports to scan for each network client. The open ports of each client will appear in the results section 
along with their corresponding protocols.

- **Popular:** Scan port range from 0 to 1023
- **User Defined:** Users can define a specific port or range to scan for each client. The range can be specified with a "-" between the start and end values.

## Results History

When the measurement is complete, netMeter automatically uploads the measurement results to the server.
You can access measurement records and details at any time through the 'Results' tab at the bottom of the screen.