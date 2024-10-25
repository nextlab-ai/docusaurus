---
sidebar_position: 1
---

# Connection Info

The Connection Info menu provides detailed information about the netMeter's network connection.

import connectionInfo from "../img/ConnectionInfo.png"

<img src={connectionInfo} style={{width:380}} />

## Link Status

- **Link Speed:** Displays the current maximum speed of the network connection as reported by netMeter's Network Interface Controller (NIC).
- **Duplex:** Duplex: Displays the currently negotiated link duplex status, which indicates whether the network connection is operating in full-duplex or half-duplex mode, as reported by netMeter's Network Interface Controller (NIC).

## DHCP Status

- **IP Mode:** Indicates the current IP protocol in use, specifying whether the network connection is operating under IPv4 or IPv6.
- **Device Mac:** Displays the MAC address of netMeter's Network Interface Controller (NIC).
- **Assigned IP:** Displays the IP address assigned to the netMeter device.
- **Subnet Mask:** Shows the network's subnet mask, indicating the range of IP addresses within the same network segment as the netMeter device.
- **Gateway IP:** Shows the default gateway, which directs network traffic from the netMeter device to other networks or the internet.
- **DNS 1:** Indicates the DNS server used for domain name resolution.

## External IP

- **External IP (Public):** Displays the external IP address assigned to the netMeter device, used for communication outside the local network.
- **ASN:** Displays the unique identifier assigned to an Autonomous System (AS), which is unique to each ISP, and is used for routing and identifying network segments on the internet.
- **ISP:** Displays the name of the company providing internet access for the network connection.