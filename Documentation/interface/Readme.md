---
keywords: Interface
summary:  Guide to the main interface
author:   David Healey
modified: 19.10.2019
license: CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)
index:    01
---

## Quick Tips

If you hold the shift key on your keyboard while clicking on a knob you’ll be able to type in a specific value.

You can move the knobs on the interface more precisely by holding down the control key on your keyboard at the same time.

Double clicking a knob will reset it to its default value.

Clicking the Libre Wave logo will display some information about the plugin and provide a clickable link to the librewave.com website.

## Mix and Gain

The Mix knob allows you to adjust the balance between the incoming dry signal and the processed wet signal. To recreate the true sound of the mute on a solo instrument this should be set to 100%. Values lower than this are useful for blending the sound with other instruments and for creative purposes.

The presets that come with Sordina have been volume calibrated against reference recordings but this calibration may not necessarily fit with the audio you will feed into the plugin. The gain knob allows you to adjust the output volume to suit your specific needs.

## Frequency anaylser and meters
![sordina-fft-filter](/images/custom/sordina-fft-filter.jpg) 
The window in the middle of the interface displays a real time frequency analysis of the incoming and outgoing audio. The yellow colour shows the unprocessed input signal, while the muted signal is displayed as blue.

On each side of this window is a traditional volume meter. The yellow one on the left shows the volume of the incoming audio while the blue meter on the right shows the volume of the processed output signa

## Filter
![sordina-fft-filter-controls](/images/custom/sordina-fft-filter-controls.jpg) 
The knobs marked HPF and LPF control the cut-off frequency of a high-pass and low-pass filter respectively.

Like a real mute the response of the virtual mutes varies depending on the specific instrument being played. The filter is useful to alter the characteristics of the muted sound to adjust for such variations or to sculpt the output audio for a desired result.

A graphical representation of the filter is overlaid on the FFT analyser.

## WahWah
When a compatible mute is selected the Wah knob will be enabled. This knob can be controlled in real time using host automation to create a live wah wah effect.

## Automation
All of the knobs will respond to automation messages from your DAW. Check your DAW’s user guide for details on how to access automatable parameters.

You can load mutes on the fly by automating the Presets parameter. You should avoid doing this while audio is playing on the track where the plugin is inserted because it will result in unwanted clicks or pops. If you want to change the mute in the middle of a line you should leave enough silence in the part to avoid this issue.