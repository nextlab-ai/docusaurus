---
sidebar_position: 2
---

# Trace Test
The Trace Test feature provides trace route tests to diagnose network connectivity and identify routing issues 
by displaying the path that data packets take between netMeter and a specified destination. 
This helps pinpoint network congestion or latency.

import traceTest from "../img/TraceTest.png"

<img src={traceTest} style={{width:380}} />

## Destination address

Specify the destination IP address or domain name for the trace route test. 
The domain name must exclude protocols (e.g., http:// or https://).

## Maximum Hops (Time To Live : TTL)

Determine the maximum number of hops for the trace route test. 
This parameter sets the limit for the number of routers or network nodes that the test will 
traverse before reaching the destination.

The default value for Trace Test is set to 30. Users can adjust it between 1 and 255.

## Number of Pings

Define the number of pings sent to each router along the trace route path. 
This parameter influences the accuracy of the test results by providing multiple data points 
for analyzing network latency and packet loss at each hop.

The default value for Trace Test is set to 3. Users can adjust it between 1 and 10.

## Protocol

In certain network environments, there might be instances where ICMP filtering is applied as part of security protocols. 
This could potentially impact the outcomes of Trace Routing. 
In this case, users can alternatively use the UDP protocol instead.

The default protocol is set to ICMP.

## Results History

When the measurement is complete, netMeter automatically uploads the measurement results to the server.
You can access measurement records and details at any time through the 'Results' tab at the bottom of the screen.