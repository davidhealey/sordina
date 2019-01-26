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

namespace Manifest
{
    const var patches = {
        "French Horn":{
            "folder":"frenchHorn",
            "impulses":{
                "Humes & Berg Cup": {file:"Humes and Berg Cup.wav"},
                "Humes & Berg Philharmonic Straight": {file:"Humes and Berg Philharmonic Straight.wav"},
                "Humes & Berg Sh Sh": {file:"Humes and Berg Sh Sh.wav"},
                "Humes & Berg Stop": {file:"Humes and Berg Stop.wav"},
                "Humes & Berg Straight": {file:"Humes and Berg Straight.wav"},
                "The Warburton Tunable": {file:"The Warburton Tunable.wav"}
            }
        },
        "Piccolo Trumpet":{
            "folder":"piccoloTrumpet",
            "impulses":{
                "Denis Wick Straight": {file:"Denis Wick Straight.wav"},
                "Felt": {file:"Felt.wav"},
                "Jo Ral Brass Bottom Straight": {file:"Jo Ral Brass Bottom Straight.wav"},
                "Jo Ral Practice": {file:"Jo Ral Practice.wav"},
                "Tom Crown Cup": {file:"Tom Crown Cup.wav"},
                "Tom Crown Harmon Stem In": {file:"Tom Crown Harmon Stem In.wav", wahwah:true},
                "Tom Crown Harmon Stem Out": {file:"Tom Crown Harmon Stem Out.wav", wahwah:true},
                "Tom Crown Practice": {file:"Tom Crown Practice.wav"},
                "Wallace Straight": {file:"Wallace Straight.wav"}
            }
        },
        "Trumpet":{
            "folder":"trumpet",
            "impulses":{
              "Jo Ral Brass Bottom Bucket": {file:"Jo Ral Brass Bottom Bucket.wav"},
              "Jo Ral Brass Bottom Straight": {file:"Jo Ral Brass Bottom Straight.wav"},
              "Jo Ral Bubble Stem In": {file:"Jo Ral Bubble Stem In.wav", wahwah:true},
              "Jo Ral Bubble Stem Out": {file:"Jo Ral Bubble Stem Out.wav", wahwah:true},
              "Jo Ral Plastic Straight": {file:"Jo Ral Plastic Straight.wav"},
              "Jo Ral TriTone Cup": {file:"Jo Ral TriTone Cup.wav"},
              "Denis Wick Adjustable Cup": {file:"Denis Wick Adjustable Cup.wav"},
              "Denis Wick Adjustable Cup Close": {file:"Denis Wick Adjustable Cup Close.wav"},
              "Denis Wick Harmon Stem In": {file:"Denis Wick Harmon Stem In.wav", wahwah:true},
              "Denis Wick Harmon Stem Out": {file:"Denis Wick Harmon Stem Out.wav", wahwah:true},
              "Denis Wick Pianissimo Straight": {file:"Denis Wick Pianissimo Straight.wav"},
              "Denis Wick Practice": {file:"Denis Wick Practice.wav"},
              "Denis Wick Straight": {file:"Denis Wick Straight.wav"},
              "Humes & Berg Cup": {file:"Humes and Berg Cup.wav"},
              "Humes & Berg Harmon Stem In": {file:"Humes and Berg Harmon Stem In.wav", wahwah:true},
              "Humes & Berg Harmon Stem Out": {file:"Humes and Berg Harmon Stem Out.wav", wahwah:true},
              "Humes & Berg Melowah": {file:"Humes and Berg Melowah.wav"},
              "Humes & Berg Pixie": {file:"Humes and Berg Pixie.wav", wahwah:true},
              "Humes & Berg Bucket": {file:"Humes and Berg Bucket.wav"},
              "Tom Crown Aluminium Straight": {file:"Tom Crown Aluminium Straight.wav"},
              "Tom Crown Harmon Stem In": {file:"Tom Crown Harmon Stem In.wav", wahwah:true},
              "Tom Crown Harmon Stem Out": {file:"Tom Crown Harmon Stem Out.wav", wahwah:true},
              "Pro Tec Fiber Straight": {file:"Pro Tec Fiber Straight.wav"},
              "Plunger 1": {file:"Plunger.wav", wahwah:true}, //Not used
              "Plunger": {file:"Plunger 2.wav", wahwah:true},
              "Mute Tube": {file:"Mute Tube.wav"},
              "Felt": {file:"Felt.wav"},
              "Leblanc Straight": {file:"Leblanc Straight.wav"},
              "Bremner Sshh": {file:"Bremner Sshh.wav"}
            }
        },
        "Trombone":{
            "folder":"trombone",
            "impulses":{
              "Buzz" : {file:"Buzz.wav"},
              "Humes & Berg Cleartone" : {file:"Humes and Berg Cleartone.wav"},
              "Humes & Berg Cup" : {file:"Humes and Berg Cup.wav"},
              "Humes & Berg Derby" : {file:"Humes and Berg Derby.wav", wahwah:true},
              "Humes & Berg Mic A Mute" : {file:"Humes and Berg Mic A Mute.wav"},
              "Humes & Berg Pixie" : {file:"Humes and Berg Pixie.wav", wahwah:true},
              "Humes & Berg Sh Sh" : {file:"Humes and Berg Sh Sh.wav"},
              "Humes & Berg Straight" : {file:"Humes and Berg Straight.wav"},
              "Humes & Berg Velvet Tone" : {file:"Humes and Berg Velvet Tone.wav"},
              "Humes & Berg Wa-Wah Stem In" : {file:"Humes and Berg WahWah Stem In.wav", wahwah:true},
              "Humes & Berg Wa-Wah Stem Out" : {file:"Humes and Berg WahWah Stem Out.wav", wahwah:true},
              "Jo Ral Brass Bottom Straight" : {file:"Jo Ral Brass Bottom Straight.wav"},
              "Jo Ral Bubble Mute Stem In" : {file:"Jo Ral Bubble Mute Stem In.wav", wahwah:true},
              "Jo Ral Bubble Mute Stem Out" : {file:"Jo Ral Bubble Mute Stem Out.wav", wahwah:true},
              "Jo Ral Bucket" : {file:"Jo Ral Bucket.wav"},
              "Jo Ral Cup" : {file:"Jo Ral Cup.wav"},
              "Liberty Practice" : {file:"Liberty Practice.wav"},
              "Plunger" : {file:"Plunger.wav", wahwah:true},
              "Soulo Straight" : {file:"Soulo Straight.wav"}
            }
        },
        "Bass Trombone":{
            "folder":"bassTrombone",
            "impulses":{
              "Humes & Berg Brass Straight": {file:"Humes and Berg Brass Straight.wav"},
              "Humes & Berg Sh Sh": {file:"Humes and Berg Sh Sh.wav"},
              "Humes & Berg Wa-ah": {file:"Humes and Berg WaWah.wav", wahwah:true},
              "Humes & Berg Mic A Mute": {file:"Humes and Berg Mic A Mute.wav"},
              "Humes & Berg Velvet Tone": {file:"Humes and Berg Velvet Tone.wav"},
              "Jo Ral Brass Bottom Straight": {file:"Jo Ral Brass Bottom Straight.wav"},
              "Jo Ral Bubble Mute Stem Out": {file:"Jo Ral Bubble Mute Stem Out.wav", wahwah:true},
              "Jo Ral Bubble Mute Stem In": {file:"Jo Ral Bubble Mute Stem In.wav", wahwah:true},
              "Jo Ral Cup": {file:"Jo Ral Cup.wav"},
              "Jo Ral Bucket": {file:"Jo Ral Bucket.wav"},
              "Denis Wick Straight": {file:"Denis Wick Straight.wav"},
              "Denis Wick Cup": {file:"Denis Wick Cup.wav"},
              "Plunger": {file:"Plunger.wav", wahwah:true}
            }
        },
        "Tuba":{
            "folder":"tuba",
            "impulses":{
              "Humes & Berg Straight" : {file:"Humes and Berg Straight.wav"},
              "Jo Ral Straight" : {file:"Jo Ral Straight.wav"},
              "Schlipf Practice" : {file:"Schlipf Practice.wav"},
              "Voigt Practice" : {file:"Voigt Practice.wav"}
            }
        },
        "Euphonium":{
            "folder":"euphonium",
            "impulses":{
              "Denis Wick Practice" : {file:"Denis Wick Practice.wav"},
              "Humes & Berg Straight" : {file:"Humes and Berg Straight.wav"},
              "Jo Ral Straight" : {file:"Jo Ral Straight.wav"}
            }
        },
        "Flugelhorn":{
            "folder":"flugelhorn",
            "impulses":{
              "Humes & Berg Aluminium Practice": {file:"Humes and Berg Aluminium Practice.wav"},
              "Humes & Berg Sh Sh": {file:"Humes and Berg Sh Sh.wav"},
              "Humes & Berg Aluminium Straight": {file:"Humes and Berg Aluminium Straight.wav"},
              "Humes & Berg Straight": {file:"Humes and Berg Straight.wav"},
              "Humes & Berg Cup": {file:"Humes and Berg Cup.wav"},
              "Humes & Berg Velvet Tone": {file:"Humes and Berg Velvet Tone.wav"},
              "Humes & Berg Practice": {file:"Humes and Berg Practice.wav"}
            }
        },
        "Saxophone":{
            "folder":"saxophone",
            "impulses":{
              "E-Sax Whisper" : {file:"E-Sax Whisper.wav"},
              "MMD Sax" : {file:"MMD Sax.wav"},
              "Sax Mute One" : {file:"Sax Mute One.wav"}
            }
        }
    }
}
