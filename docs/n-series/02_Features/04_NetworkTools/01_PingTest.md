---
sidebar_position: 1
---

# Ping Test
The Ping Test feature provides easy assessment of network connectivity and latency. 
By utilizing an address queue, you can sequentially ping multiple destinations.

import pingTest from "../img/PingTest.png"

<img src={pingTest} style={{width:380}} />

## Address Queue

Queue list of destination IP or Domain for ping.

Domain name must be exclude protocol (e.g., http:// or https://).

When you press the Start button, Ping Test will be performed sequentially for the checked destinations 
starting from the top of the queue.

## Number of Requests

Specify the number of ICMP Echo Request messages (pings) to be sent to each destination in the address queue.

The default value for Ping Test is set to 5.

## Number of Hops (Time To Live : TTL)

Determine the maximum number of hops allowed for the ICMP Echo Request messages. This parameter determines 
the limit for the number of routers or network nodes that the ping packets will traverse before 
either reaching the destination or being discarded.

The default value for Ping Test is set to 64.
Users can adjust it between 1 and 255.

## Results History

When the measurement is complete, netMeter automatically uploads the measurement results to the server.
You can access measurement records and details at any time through the 'Results' tab at the bottom of the screen.