---
sidebar_position: 1
---

# Packet Capture

The Packet Capture feature captures incoming and outgoing packets through the "LAN" port of the netMeter. 
You can locate the LAN port of the netMeter in the Device Layout section corresponding to the model in the start guide.

#### **⚠︎CBT Notice:** In the Closed Beta Test stage, the maximum packet capture file size is capped at 100 MB.

import packetCapture from "../img/PacketCapture.png"

<img src={packetCapture} style={{width:380}} />

## File Format

Support for saving packet capture files in .pcap and .pcapng formats is provided.

## Cloud Support

After the capture is completed, you can upload the packet capture file to the cloud.

When capturing packets with excessively high bandwidth, there may be cases where some packets are not captured 
intact due to I/O bottlenecks. Before uploading, users can check the packet drop rate of the captured file.

import packetCaptureUpload from "../img/PacketCaptureUpload.png"

<img src={packetCaptureUpload} style={{width:380}} />

## History

Once uploaded, users can download the capture file immediately or at any time from the History. 
Even if the netMeter is located remotely, users can still access it from any device through the WebUI 
to download the capture file at any time.