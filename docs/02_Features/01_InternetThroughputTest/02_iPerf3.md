---
sidebar_position: 2
---

# iPerf3
The iPerf3 feature enables users to measure network bandwidth capacity between two points 
on the network according to their needs.

netMeter can function as both the client and server in iPerf3. 
Users can conduct iPerf3 network measurements using netMeter by setting the destination to a pre-configured 
iPerf3 server or by using netMeter to set up an iPerf3 server at a low cost within their network infrastructure.

## iPerf3 : Client Mode

import iperf3Client from "../img/iPerf3Client.png"

<img src={iperf3Client} style={{width:380}} />

### Destination

Specify the destination IP address and port of the iPerf3 server. The commonly known port for an iPerf3 server is 
5201 but can be adjusted according to network conditions and the iPerf3 server's configuration.

The protocol configuration for iPerf3 is set to default as UDP.

#### ⚠︎Using TCP protocol

Since the TCP protocol is designed to ensure data delivery without loss, loss and jitter statistics will 
only be available when using the UDP protocol.

When the UDP option is turned off (using TCP) in iPerf3, the initial 2 seconds of data will be automatically 
excluded from the measurement. This is done to mitigate any potential outliers caused by the 
TCP window scaling negotiation and slow-start mechanisms.

### Transmit Settings

iPerf3 support measurement of both Upload and Download.

Users can configure the transmit unit based on either test duration or test size.

- **Test Duration:** Specify the duration for which the test should run, allowing users to measure network performance 
over a specific time period.
- **Test Size:** Define the amount of data to be transferred during the test, enabling users to conduct measurements 
based on a predetermined amount of data.

### Statistics

View detailed statistics generated from the iPerf3 measurements, including:

- **Total Transferred Packet Size:** The total size of data packets transferred during the iPerf3 test.
- **Bandwidth (Average):** The average bandwidth achieved during the iPerf3 test.
- **Standard Deviation of Bandwidth:**  Measure of dispersion or variability in the achieved bandwidth values 
around the average bandwidth. A lower standard deviation indicates more consistent bandwidth values throughout the test, 
reflecting stable network performance.
- **Maximum Bandwidth:** The highest bandwidth achieved during the iPerf3 test.
- **Loss:** The percentage of data packets lost during transmission. This statistic is only available 
when using the UDP protocol.
- **Jitter:** The variation in the delay of packet arrival times, reflecting the consistency of network performance. 
This statistic is only available when using the UDP protocol.

Pressing the "Reset" button will reset the statistics and begin recalculating them from the moment it is pressed. 
This action does not affect the statistics that will be uploaded and displayed in the results history.

### Log

Log lines will be displayed in real-time, containing detailed information about ongoing iPerf3 measurements. 
Pressing the "Clear" button will clear the loglines.

[//]: # (This action does not affect the log records that will be uploaded and displayed in the history menu. You can still download the complete log in the History menu.)

## iPerf3 : Server Mode

import iperf3Server from "../img/iPerf3Server.png"

<img src={iperf3Server} style={{width:380}} />

### Listening Port

Specify the port number on which the iPerf3 server will listen for incoming iPerf3 test request.

The default port for iPerf3 Server is set to 5201.

Can be adjusted according to iPerf3 configuration of the "Client" device or network conditions.

When the user initiates the test, netMeter will start as an iPerf3 server. The IP address and port of the netMeter 
will be displayed on the button. This information can be used as the destination for iPerf3 clients.

**Handle one client connection then exit**

When this option is enabled, the server will terminate the test session after completing the transmission with the 
first connected client.

This feature is useful for scenarios where the server needs to serve multiple clients sequentially, ensuring that 
resources are efficiently managed and released after each connection.

Users will need to manually start the iPerf3 Server after the session ends.

### Statistics

Since iPerf3 supports both download and upload measurements, statistics are provided for both Received (Rx) and 
Transmitted (Tx) data.

- **Total:** The total size of data packets transferred during the iPerf3 test.
- **Bandwidth:** The average bandwidth achieved during the iPerf3 test.
- **Standard Deviation of Bandwidth:** A measure of dispersion or variability in the achieved bandwidth values around 
the average bandwidth. A lower standard deviation indicates more consistent bandwidth values throughout the test, 
reflecting stable network performance.
- **Maximum Bandwidth:** The highest bandwidth achieved during the iPerf3 test.

Pressing the "Reset" button will reset the statistics and begin recalculating them from the moment it is pressed.

### Log

Log lines will be displayed in real-time, containing detailed information about ongoing iPerf3 measurements. 
Pressing the "Clear" button will clear the log lines.

[//]: # (This action does not affect the log records that will be uploaded and displayed in the history menu. You can still download the complete log in the History menu.)

## Results History

#### **⚠︎Notice:** iPerf3 Server Mode does not register measurement history.

When the measurement is complete, netMeter automatically uploads the measurement results to the server.
You can access measurement records and details at any time through the 'Results' tab at the bottom of the screen.