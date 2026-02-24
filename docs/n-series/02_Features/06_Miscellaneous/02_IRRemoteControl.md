---
sidebar_position: 2
---

# IR Remote Control

The IR Remote Control feature enables users to transmit IR signals using netMeter to control 
IPTV set-top boxes or other peripheral devices that can be controlled by IR signals. 
This facilitates various testing scenarios where IR Controls are required.

IR Control can be accessed in the Packet Capture and Network Emulation features 
by clicking the "IR Control" button located in the bottom right corner of the screen.

![IRRemote](../img/IRRemote.png)

Users can select the IR Profile, which is pre-configured in the IR Profile settings menu. 
(Settings > User Config > IR Profile)

The IR commands associated with the profile will be displayed in the Command List.

By clicking or tapping a command button, the user can transmit the corresponding IR command.

While an IR signal is being transmitted, the command name of the IR signal 
will be displayed in the top right corner of the IR Control Panel along with an icon.

You can locate the IR transmitter of the netMeter in the Device Layout section corresponding to the 
model in the startup guide. Ensure that the target device's IR receiver is lined up with netMeter's IR transmitter.

## Auto Repeat

When the "Use Auto Repeat" option is checked, netMeter will automatically transmit the IR command repeatedly 
after the user triggers the button, according to the configured repeat time and interval. 
Even when the control panel is closed, repetition will continue in the background.

If "Repeats" is set to 0, netMeter will repeat the triggered command infinitely until the user manually 
interrupts by pressing the stop button.

Auto Repeat can be interrupted at any time by pressing the stop button. During automatic repetition, 
interaction with other command buttons will be disabled.