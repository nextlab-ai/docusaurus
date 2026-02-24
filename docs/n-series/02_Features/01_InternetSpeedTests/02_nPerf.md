---
sidebar_position: 2
---

# nPerf

This measurement service is featured by nPerf. It measures download and upload speeds from netMeter to the internet,
detects Round-Trip Time (RTT) and packet loss, and reports CRC error counts at the Network Interface Card (NIC) level.

import speedTest from "../img/nPerf.png"

<img src={speedTest} style={{width:380}} />

## Test Time

The default upload and download time is set to 15 seconds each. Users can adjust it between 10 and 60 seconds.

## Measure Server Location

If it's set to "Autoselect the nearest server", nPerf automatically recommends the nearest measurement server 
optimized for speed tests based on the user's public IP geolocation.


You can also manually change the measurement server by selecting "Select Server Manually" and 
choosing from the provided server list according to your needs.

## Results History

When the measurement is complete, netMeter automatically uploads the measurement results to the server. 
You can access measurement records and details at any time through the 'Results' tab at the bottom of the screen.