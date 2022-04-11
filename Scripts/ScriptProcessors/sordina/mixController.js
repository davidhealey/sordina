Content.setWidth(600);
Content.setHeight(50);

Synth.deferCallbacks(true);

const var ConvolutionReverb = Synth.getEffect("Convolution Reverb");

const var knbMix = Content.addKnob("knbMix", 0, 0);
knbMix.setControlCallback(knbMixCB);

inline function knbMixCB(control, value)
{
    ConvolutionReverb.setAttribute(ConvolutionReverb.WetGain, Engine.getDecibelsForGainFactor(value));
    ConvolutionReverb.setAttribute(ConvolutionReverb.DryGain, Engine.getDecibelsForGainFactor(1-value));
}function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 