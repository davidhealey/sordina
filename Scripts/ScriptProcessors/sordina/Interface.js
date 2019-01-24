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

Content.makeFrontInterface(700, 300);

Synth.deferCallbacks(true);

Engine.loadFontAs("{PROJECT_FOLDER}Aller_Rg.ttf", "Aller");

reg i;
const var ConvolutionReverb = Synth.getAudioSampleProcessor("Convolution Reverb"); //Convo reverb effect

//Pool IRs
Engine.loadAudioFilesIntoPool();

//Performance meter
const var pnlStats = Content.getComponent("pnlStats");
const var lblStats = Content.getComponent("lblStats");
pnlStats.startTimer(250);

pnlStats.setTimerCallback(function()
{        
    lblStats.set("text", "CPU: " + Math.round(Engine.getCpuUsage()) + "%" + ", " + "RAM: " + Math.round(Engine.getMemoryUsage()) + "MB");
});

//Settings panel
const var btnSettings = Content.getComponent("btnSettings");
const var btnCloseSettings = Content.getComponent("btnCloseSettings");
const var pnlSettings = Content.getComponent("pnlSettings");
pnlSettings.showControl(false);
btnSettings.setControlCallback(onbtnSettingsControl);
btnCloseSettings.setControlCallback(onbtnCloseSettingsControl);

inline function onbtnSettingsControl(control, value) {pnlSettings.showControl(true);}
inline function onbtnCloseSettingsControl(control, value) 
{
    pnlSettings.showControl(false);
    btnSettings.setValue(0); //Reset settings button
}

//Preset browser
const var lblPreset = Content.getComponent("lblPreset"); //For displaying preset name
const var pnlPreset = Content.getComponent("pnlPreset"); //Preset browser
const var btnPreset = Content.getComponent("btnPreset"); //Button to show preset browser
const var btnClosePreset = Content.getComponent("btnClosePreset"); //Button to hide preset browser
pnlPreset.showControl(false);
btnPreset.setControlCallback(onbtnPresetControl);
btnClosePreset.setControlCallback(onbtnClosePresetControl);

inline function onbtnPresetControl(control, value){pnlPreset.showControl(true);}
inline function onbtnClosePresetControl(control, value){pnlPreset.showControl(false);}

//About panel
const var pnlAbout = Content.getComponent("pnlAbout"); //About panel
const var btnAbout = Content.getComponent("btnAbout"); //Button to show about panel
const var btnCloseAbout = Content.getComponent("btnCloseAbout"); //Button to hide about panel
const var btnURL = Content.getComponent("btnURL");
pnlAbout.showControl(false);
btnAbout.setControlCallback(onbtnAboutControl);
btnCloseAbout.setControlCallback(onbtnCloseAboutControl);
btnURL.setControlCallback(onbtnURLControl);

inline function onbtnAboutControl(control, value){pnlAbout.showControl(true);}
inline function onbtnCloseAboutControl(control, value){pnlAbout.showControl(false);}
inline function onbtnURLControl(control, value){Engine.openWebsite("http://librewave.com");}

//Wahwah control
const var wahwaheq = Synth.getEffect("wahwaheq");
const var knbWahWah = Content.getComponent("knbWahWah");

//User controllable filter
const var filter = Synth.getEffect("filter");
Content.getComponent("knbLPF").setControlCallback(onknbLPFControl);

inline function onknbLPFControl(component, value)
{    
	filter.setAttribute(1 * filter.BandOffset + filter.Freq, value);
}

//Patch selection controls - not visible to user
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

//IR list viewport
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
    
    //Display selected instrument and preset name
    lblPreset.set("text", instrument + "\n" + irName);
    
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
}

//Load up the last used preset
Engine.loadNextUserPreset(true);
Engine.loadPreviousUserPreset(true);function onNoteOn()
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
