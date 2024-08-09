---
sidebar_position: 1
---

# FAQ

## General Questions

<details>
<summary>Is my phone/tablet compatible with NEXTLab netMeter N1?</summary>
<div markdown="1">
Yes, our measurement platform is web-based. In other words, since it is not an app-based UI, it can be used in any environment with an internet connection, such as iPad, iPhone, Android phones, and PCs.
</div>
</details>

<details>
<summary>Am I able to use the netMeter measurement UI without the hardware device?</summary>
<div markdown="1">
No, without the device you can't use any of the features. Once you login, you need to register your Serial Number.
</div>
</details>

<details>
<summary>Will you release an App?</summary>
<div markdown="1">
Maybe. However this will not happen in the close future. You can add an shortcut for your phone or iPad so that you don't have to enter the measurement website every time.
</div>
</details>

<details>
<summary>What does a meausrement report look like?</summary>
<div markdown="1">
Please have a look [here](https://qrco.de/bfHbZ7), however this is for the Internet Speed Test as an example.
</div>
</details>

<details>
<summary>What is the warranty policy?</summary>
<div markdown="1">
A standard limited 1 year warranty is included, and 2 year paid-warranty. Please see [warranty policy](https://netmeter.io/policies/refund-policy) for further details.
</div>
</details>

<details>
<summary>Can I conduct a test while my device is plugged in the USB port?</summary>
<div markdown="1">
Yes, while plugged in(charging), you can still conduct the test. This way you can even do remote tests.
</div>
</details>

<details>
<summary>Why does the device switch off if I don’t use it for a few minutes?</summary>
<div markdown="1">
You can set power off time at settings. If you set to ‘None’ it will be ON even if you don’t use it.
</div>
</details>

## Technical Questions

<details>
<summary>How long can I use netMeter N1 when fully charged?</summary>
<div markdown="1">
It depends on what features you mostly use. Generally, when fully charged, it can be used for 2-3 hours.
</div>
</details>

<details>
<summary>How do I update the firmware?</summary>
<div markdown="1">
Firmware updates are automatically performed when the device is rebooted. The update time varies depending on the version but usually takes about 1 minute. Make sure to be Online when powering on the device.
</div>
</details>

<details>
<summary>What is the maximum network speed that the netMeter N1 can measure?</summary>
<div markdown="1">
It supports up to 1000 Mbps.
</div>
</details>

<details>
<summary>Can netMeter N1 measure both Wi-Fi and wired networks?</summary>
<div markdown="1">
It can only measure wired networks. For future planned features, please see our product road map.
</div>
</details>

<details>
<summary>Can the measurement results be saved to external storage or the cloud?</summary>
<div markdown="1">
The measurement results are saved in the cloud, and you can check the history on the Results and export the results as a PDF.
</div>
</details>

<details>
<summary>I am currently on Basic Plan, would my test result go away after 1 week?</summary>
<div markdown="1">
No, it is just hidden. If you upgrade to Pro Plan, your past test results will show up again.
</div>
</details>

<details>
<summary>Can accurate measurements be taken in a VPN environment?</summary>
<div markdown="1">
Yes, as long as the internet is accessible, measurements can be taken in a VPN environment.
</div>
</details>

<details>
<summary>How do I use the network emulation function?</summary>
<div markdown="1">
You can set limitations such as bandwidth restrictions, loss, and packet filtering on the N1 LAN port.
</div>
</details>

<details>
<summary>Can multiple netMeter N1 devices be used simultaneously for network testing?</summary>
<div markdown="1">
The serial number will be removed from the original account, and the new account will take ownership of the serial number.
</div>
</details>

<details>
<summary>What is the maximum capacity that can be saved using the packet capture function?</summary>
<div markdown="1">
If you choose to save the pcap file to the cloud, the limit is 100MB. If you save it to a USB, the limit is 5GB.
</div>
</details>

<details>
<summary>What should I do if I encounter a problem while using the device?</summary>
<div markdown="1">
If a problem occurs, please perform a reboot using the command on the settings page. The device will automatically go online after rebooting.
</div>
</details>

<details>
<summary>How do I reset the device?</summary>
<div markdown="1">
Press and hold the power button for 2-3 seconds to turn the device on or off. If the device is online, you can use the reboot button to restart it.
</div>
</details>

<details>
<summary>In what situations is the netMeter used?</summary>
<div markdown="1">
It can be used for network testing on-site and remotely, enabling end-to-end network testing.
For more detailed information, please visit: [netMeter Features Documentation](https://docs.netmeter.io/docs/Features/Features)
</div>
</details>

<details>
<summary>How can I conduct TWAMP or iPerf3?</summary>
<div markdown="1">
**Regarding iPref3**

If you have two netMeters in your hands you can conduct an end-to-end test with each device. One set to Client Mode and another to Server.

Right now, because you only have one device, you cannot do this.

If you want to measure the speed end-to-end within our internal network, you can install the iPerf tool and set it up as a server.

iPerf3 servers are platform-independent, meaning you can install iPerf3 and use it as a server or client on Ubuntu, Windows, Mac, etc. 
The command to start the server is `iperf3 -s -p 5201 -V` (netMeter installed iperf3 version iperf 3.7 (cJSON 1.5.2)). Also, you can use netMeter as an iPerf Server as well.

Please see [https://iperf.fr/iperf-download.php](https://iperf.fr/iperf-download.php) for further information about iPerf3

**Regarding TWAMP**

Similarly, if you have two netMeters, one can be used as a responder.

However as this is not your environment, we are hosting a server located in Singapore right now.

Please refer to the following address: `46.137.201.34/8622/UDP`

This might cause slow results due to your physical distance to Singapore, so I recommend installing TWAMP on your PC.

To install TWAMP and use the twamp sender or responder, please refer to the following link: [https://demirten.github.io/twamp-gui/](https://demirten.github.io/twamp-gui/)

We have confirmed mutual measurements between it and our netMeter by running it as a responder.
</div>
</details>



