/*
    Copyright 2018, 2019 David Healey

    This file is part of Sordina.

    Sordina is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    Sordina is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with Sordina. If not, see <http://www.gnu.org/licenses/>.
*/

include("manifest.js");
include("VuMeter.js");

Content.makeFrontInterface(600, 500);

Synth.deferCallbacks(true);

reg i;
reg file = ""; //Currently loaded IR
const var ConvolutionReverb = Synth.getAudioSampleProcessor("Convolution Reverb"); //Convo reverb effect

Engine.loadAudioFilesIntoPool();

//Wahwah control
const var wahwaheq = Synth.getEffect("wahwaheq");
const var knbWahWah = Content.getComponent("knbWahWah");

//User controllable filter
const var filter = Synth.getEffect("filter");
Content.getComponent("knbLPF").setControlCallback(onknbLPFControl);

inline function onknbLPFControl(component, value)
{
    //local index = 1 * filter.BandOffset + ParametriqEQ.Gain;
    
	filter.setAttribute(1 * filter.BandOffset + filter.Freq, value);
}

//IR selection menus

const var instrumentNames = [];
const var irNames = {};
reg temp;
for (k in Manifest.patches)
{
    instrumentNames.push(k);

    temp = k;
    irNames[temp] = [];
    for (ir in Manifest.patches[k].impulses)
    {        
        irNames[temp].push(ir);
    }
}

//Instrument selection combo box
const var cmbInstrument = Content.getComponent("cmbInstrument");
cmbInstrument.set("items", instrumentNames.join("\n"));
cmbInstrument.setControlCallback(oncmbInstrumentControl);

//IR selection viewport
const var vpIRs = Content.getComponent("vpIRs");
vpIRs.setControlCallback(onvpIRsControl);

inline function oncmbInstrumentControl(control, value)
{
    vpIRs.set("items", irNames[cmbInstrument.getItemText()].join("\n"));
}

inline function onvpIRsControl(control, value)
{   
    local instrument = cmbInstrument.getItemText();
    local irName = irNames[instrument][value];
    local folder = Manifest.patches[instrument].folder;
    local file = Manifest.patches[instrument].impulses[irName].file;
    local wah = Manifest.patches[instrument].impulses[irName].wahwah || false;
    
    loadIR(folder, file);
    //enableWahWah(wah);
}

//VU Meters
const var inputMeter = VuMeter.createVuMeter("inputMeter");
VuMeter.setModule(inputMeter, Synth.getEffect("Input"));
const var outputMeter = VuMeter.createVuMeter("outputMeter");

//Functions
inline function loadIR(folder, file)
{            
    ConvolutionReverb.setFile("{PROJECT_FOLDER}"+folder+"/"+file);
}

inline function enableWahWah(state)
{    
    knbWahWah.set("enabled", state);
    wahwaheq.setBypassed(1-state);
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
