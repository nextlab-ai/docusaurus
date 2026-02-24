---
sidebar_position: 1
---

# IPTV Test

The IPTV Test feature offers quantitative measurements of paid IPTV broadcast streams following the MPEG TS protocol. 
These measurements allow you to quantify the streaming service quality for clients. 
Users can select the measurement target from the channel list stored in the pre-configured IPTV Profile in the settings menu 
(Settings > User Config > IPTV Profile).

import iptvTest from "../img/IPTVTest.png"

<img src={iptvTest} style={{width:700}} />

## Simple Multicast Join Test

Measuring the duration between an IGMP join request and the actual arrival of the multicast stream. 
The default timeout is set to 5 seconds for each join request. If the multicast stream does not arrive within 5 seconds 
after the IGMP join request, it will be considered a failure.

This test can quickly determine the validity of the multicast address and whether the actual stream arrives. 
In addition to regular broadcast streaming channels, it also supports EPG stream addresses and other multicast addresses 
defined as Out-of-Band(OOB).

## MPEG-2 TS Quality Measure

Measuring various indicators that impact the quality of MPEG-2 TS streaming from selected broadcast streaming channels 
listed on the IPTV profile channel list.

The measuring time window can be set by the user between 10 and 600 seconds. The default measuring time is 60 seconds.

The following items will be measured for each channel you selected for the time period you set.

### Join time
Duration between an IGMP join request and the actual arrival of the multicast stream.
### Bitrate
Average bitrate of multicast stream.
### RTP Packets Error Count
Number of missing or incorrectly ordered incoming packets over the Real-time Transport Protocol. If RTP Packets Errors exist, streaming quality may suffer, resulting in screen freezing or distortion caused by severe network latency or congestion.
### MPEG-2 TS Continuity Count Error (CCE)
Number of missing or incorrectly ordered video and audio data frames over the MPEG-2 TS layer. This tends to have correlation with RTP Packets Error counting.
### Delay Delta
Average interval between RTP Packet arrival times.
### Jitter
Represents the consistency of receiving broadcast information by assessing the variability in packet arrival times. Lower jitter values indicate more stable transmission, while higher values may lead to disruptions in audio or video delivery, thus affecting overall streaming quality.

## CRC(Cyclic Redundancy Check) Error Count

Displays the total count of CRC errors counted throughout the measurement.

Indicates that the integrity of the data frame at the data link layer. This error occurs when the calculated CRC value of a received frame does not match the CRC value included in the frame's header, suggesting that the data may have been altered during transmission or corrupted due to noise or interference.

If CRC Error occurs, it's essential to investigate potential issues within the network hardware, such as faulty cables, connectors, or network interface cards, as these could contribute to data corruption and affect overall network performance and reliability.

## Results History

When the measurement is complete, netMeter automatically uploads the measurement results to the server.
You can access measurement records and details at any time through the 'Results' tab at the bottom of the screen.