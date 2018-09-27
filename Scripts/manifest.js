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

namespace Manifest
{
    const var data = {
      "French Horn":{
        folder:"frenchHorn",
        mutes:["Straight", "Shhh", "Cup", "Stop"],
        files:{
            "Straight":"fh_straight",
            "Shhh":"fh_sh",
            "Cup":"fh_cup",
            "Stop":"fh_stop"
        }
      },
      "Piccolo Trumpet":{
        folder:"piccoloTrumpet",
        mutes:["Straight", "Cup", "Felt", "Harmon with Stem", "Harmon"],
        files:{
            "Straight":"ptr_straight",
            "Cup":"ptr_cup",
            "Felt":"ptr_felt",
            "Harmon with Stem":"ptr_harmon_stem",
            "Harmon":"ptr_harmon"
        }
      },
      "Cornet":{
        folder:"cornet",
        mutes:["Bucket", "Plunger", "Cup", "Straight", "Felt", "Harmon with Stem", "Harmon", "Pixie"],
        files:{
            "Bucket":"ct_bucket",
            "Plunger":"ct_plunger",
            "Cup":"ct_cup",
            "Straight":"ct_straight",
            "Felt":"ct_felt",
            "Harmon with Stem":"ct_harmon_stem",
            "Harmon":"ct_harmon",
            "Pixie":"ct_pixie"
        }
      },
      "Trumpet":{
        folder:"trumpet",
        mutes:["Harmon", "Harmon with Stem", "Felt", "Pixie", "Bucket", "Plunger", "Cup", "Straight"],
        files:{
            "Harmon":"tr_harmon",
            "Harmon with Stem":"tr_harmon_stem",
            "Felt":"tr_felt",
            "Pixie":"tr_pixie",
            "Bucket":"tr_bucket",
            "Plunger":"tr_plunger",
            "Cup":"tr_cup",
            "Straight":"tr_straight"
        }
      },
      "Trombone":{
        folder:"trombone",
        mutes:["Bucket", "Harmon", "Harmon with Stem", "Shhh", "Cup", "Mic a Mute", "Straight 2", "Plunger", "Straight"],
        files:{
            "Bucket":"tb_bucket",
            "Harmon":"tb_harmon",
            "Harmon with Stem":"tb_harmonStem",
            "Shhh":"tb_sh",
            "Cup":"tb_cup",
            "Mic a Mute":"tb_micAMute",
            "Straight 2":"tb_straight2",
            "Plunger":"tb_plunger",
            "Straight":"tb_straight"
        }
      },
      "Bass Trombone":{
        folder:"bassTrombone",
        mutes:["Bucket", "Harmon", "Harmon with Stem", "Shhh", "Cup", "Mic a Mute", "Straight 2", "Plunger", "Straight"],
        files:{
            "Bucket":"bstr_bucket",
            "Harmon":"bstr_harmon",
            "Harmon with Stem":"bstr_harmonStem",
            "Shhh":"bstr_sh",
            "Cup":"bstr_cup",
            "Mic a Mute":"bstr_micAMute",
            "Straight":"bstr_straight2",
            "Plunger":"bstr_plunger",
            "Straight":"bstr_straight"
        }
      },
      "Tuba":{
        folder:"tuba",
        mutes:["Straight"],
        files:{
            "Straight":"tu_straight"
        }
      },
      "Euphonium":{
        folder:"euphonium",
        mutes:["Straight"],
        files:{
            "Straight":"eu_straight"
        }
      }
    };
}