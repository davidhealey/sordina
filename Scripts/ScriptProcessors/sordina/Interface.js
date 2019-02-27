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

Content.setValuePopupData(
{
    "fontName": "Aller",
    "fontSize": 17,
    "itemColour": 0,
    "itemColour2": 0xFF222222,
    "borderSize": 0
});

reg i;
const var ConvolutionReverb = Synth.getAudioSampleProcessor("Convolution Reverb"); //Convo reverb effect

//Pool IRs
Engine.loadAudioFilesIntoPool();

//Performance meter
const var pnlStats = Content.getComponent("pnlStats");
const var lblStats = Content.getComponent("lblStats");
pnlStats.startTimer(1000);

pnlStats.setTimerCallback(function()
{        
    lblStats.set("text", "CPU: " + Engine.doubleToString(Engine.getCpuUsage(), 2) + "%");
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
const var wahwah = Synth.getEffect("wahwah");
const var wahGainCC = Synth.getModulator("wahGainCC");
const var knbWahWah = Content.getComponent("knbWahWah");

knbWahWah.setControlCallback(onknbWahWahControl);

inline function onknbWahWahControl(control, value)
{
    Synth.sendController(95, 127*value); //WahWah filter uses CC95
}

inline function enableWahWah(state)
{    
    knbWahWah.setValue(0); //Reset wahwah knob
    knbWahWah.set("enabled", state);
    wahwah.setBypassed(1-state);
    wahGainCC.setBypassed(1-state);
}

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

inline function oncmbInstrumentControl(control, value)
{
    local instrument = cmbInstrument.getItemText(); //Name of selected instrument
    
    //Populate list of IRs
    vpIRs.set("items", irNames[instrument].join("\n"));
}

//IR selection viewport
const var vpIRs = Content.getComponent("vpIRs");
vpIRs.setControlCallback(onvpIRsControl);

inline function onvpIRsControl(control, value)
{
    local instrument = cmbInstrument.getItemText();
    local irName = irNames[instrument][value];
    local folder = Manifest.patches[instrument].folder;
    local file = Manifest.patches[instrument].impulses[irName].file;
    local wah = Manifest.patches[instrument].impulses[irName].wahwah || false;
     
    //Display selected instrument and preset name
    if (Engine.getCurrentUserPresetName() == "")
    {
        lblPreset.set("text", "Trumpet & Cornet\nTom Crown Harmon Stem Out");
    }
    else
    {
        lblPreset.set("text", instrument + "\n" + irName);
    }
    
    loadIR(folder, file);
    enableWahWah(wah);
}

//Automatable preset selection menu;
const var userPresets = Engine.getUserPresetList(); //Array of user preset names
const var cmbPreset = Content.getComponent("cmbPreset"); //Combo box - list of presets
cmbPreset.set("items", userPresets.join("\n"));
cmbPreset.setControlCallback(oncmbPresetControl);

inline function oncmbPresetControl(control, value)
{
    Engine.loadUserPreset(control.getItemText()); //Load selected preset
}

//VU Meters
const var inputMeter = VuMeter.createVuMeter("inputMeter");
VuMeter.setModule(inputMeter, Synth.getEffect("Input"));
const var outputMeter = VuMeter.createVuMeter("outputMeter");
VuMeter.setModule(outputMeter, Synth.getEffect("Output"));

inline function loadIR(folder, file)
{            
    ConvolutionReverb.setFile("{PROJECT_FOLDER}"+folder+"/"+file);
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
