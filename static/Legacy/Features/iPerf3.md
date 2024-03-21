---
sidebar_position: 2
---

# iPerf3
## How can I use netMeter iPerf3 as clien/server mode?
**Using netMeter as iPerf3 client:**

1. If ‘Use UDP’ is not activated, it automatically defaults to TCP.
2. Choose either IPv4 or IPv6 in the IP Protocol field. 
3. Enter Server IP and Port. The default port is 5201.
4. Default Settings are; 
    - Number of Streams: 1
    - Bandwidth: Unlimited
    - Protocol: UDP by default, selectable
    - Direction: Upload by default, selectable
    - Transmission Unit: Default 10 seconds for Duration, Default 10 gigabytes for Size
    - Omit -O: Default 2


**Using netMeter as iPerf3 client:** 

    To use netMeter as iPerf server, you need devices capable of running iPerf3 as client. If you have two netMeter device, you can use one as client and the other as server. 

**Currently, the netMeter Closed Beta Test Version supports UDP only and is limited to single-device usage. To use netMeter as iPerf server, you need devices capable of running iPerf3 as client.**