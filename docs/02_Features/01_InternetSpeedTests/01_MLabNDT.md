---
sidebar_position: 1
---

# M-Lab NDT

This measurement service is featured by Measurement Lab (M-Lab). NDT is a single stream performance measurement of a 
connection’s capacity for “bulk transport” (as defined in IETF’s RFC 3148). 
NDT reports upload and download speeds and latency metrics from netMeter to the internet,
and CRC error counts at the Network Interface Card (NIC) level.

import speedTest from "../img/MLabNDT.png"

<img src={speedTest} style={{width:380}} />

## Measure Server Location

The NDT speed test automatically connects to the nearest measurement server hosted by Measurement Lab (M-Lab). 
This server is optimized for speed tests and selected based on the user's public IP geolocation.
For more details, please refer to this link for the [M-Lab Platform status](https://www.measurementlab.net/status/).

The measurement server routed by M-Lab will be specified on the test screen and in the report after the measurement is completed.

## Results History

When the measurement is complete, netMeter automatically uploads the measurement results to the server. 
You can access measurement records and details at any time through the 'Results' tab at the bottom of the screen.