/*
    Copyright 2018 David Healey

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

reg i;
reg file = ""; //Currently loaded IR
const var ConvolutionReverb = Synth.getAudioSampleProcessor("Convolution Reverb"); //Convo reverb effect

const var instruments = [];

//Get instrument names from manifest
for (k in Manifest.data) //Each instrument name
{
    instruments.push(k); //Array of instrument names
}

Engine.loadAudioFilesIntoPool();

const var cmbInstrument = Content.getComponent("cmbInstrument");
cmbInstrument.set("items", instruments.join("\n"));
cmbInstrument.setControlCallback(cmbInstrumentCB);

const var cmbMutes = [];
//Get all mute combo boxes
for (i = 0; i < 8; i++)
{
    cmbMutes[i] = Content.getComponent("cmbMutes"+i);
    cmbMutes[i].setControlCallback(cmbMutesCB);
    cmbMutes[i].set("items", Manifest.data[instruments[i]].mutes.join("\n"));
}


//VU Meters
const var inputMeter = VuMeter.createVuMeter("inputMeter", 0, 0);
VuMeter.setModule(inputMeter, Synth.getEffect("Input"));

const var outputMeter = VuMeter.createVuMeter("outputMeter", 300, 0);

//UI Callback Functions

inline function cmbInstrumentCB(control, value)
{    
    for (i = 0; i < instruments.length; i++)
    {
        cmbMutes[i].showControl(i == value-1);
    }
    
    //Select first mute for instrument if none selected
    if (cmbMutes[value-1].getItemText() == "") cmbMutes[value-1].setValue(1);    
    
    loadIR();
}

inline function cmbMutesCB(control, value)
{    
    loadIR();
}

inline function loadIR()
{
    local idx = cmbInstrument.getValue()-1;    
    local folder = Manifest.data[cmbInstrument.getItemText()].folder;
    local file = Manifest.data[cmbInstrument.getItemText()].files[cmbMutes[idx].getItemText()];
    ConvolutionReverb.setFile("{PROJECT_FOLDER}"+folder+"/"+file+".wav");
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
