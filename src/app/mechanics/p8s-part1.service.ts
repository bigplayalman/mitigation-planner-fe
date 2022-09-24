import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class P8sPart1Service {
  mechanics = [
    {
      "start": "0:00",
      "end": "0:00",
      "name": "Pull",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "0:07",
      "end": "0:12",
      "name": "Genesis of Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "0:15",
      "end": "0:18",
      "name": "Conceptual Tetraflare/Octaflare",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "0:21",
      "end": "0:24",
      "name": "Volcanic Torches",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "0:38",
      "name": "Torch Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "0:32",
      "end": "0:40",
      "name": "Sunforge [Scorching Fang/Sun's Pinion]",
      "damageType": "Non-Damaging [Magic/Magic]",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "0:41",
      "name": "Emergent Tetrafrlare/Octaflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "0:42",
      "end": "0:48",
      "name": "Flameviper (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "0:51",
      "name": "Flameviper (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "1:00",
      "end": "1:03",
      "name": "Reforged Reflection",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "",
      "name": "Ultima Weapon (Dog) Timeline below [Collapsable]",
      "damageType": "",
      "damageActor": ""
    },
    {
      "start": "",
      "end": "1:10",
      "name": "Footprint",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "1:11",
      "end": "1:17",
      "name": "Rearing Rampage/Uplift (1)",
      "damageType": "Physical/Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "1:19",
      "name": "Rearing Rampage/Uplift (2)",
      "damageType": "Physical/Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "1:21",
      "name": "Rearing Rampage/Uplift (3)",
      "damageType": "Physical/Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "1:23",
      "name": "Rearing Rampage/Uplift (4)",
      "damageType": "Physical/Magic",
      "damageActor": "Boss"
    },
    {
      "start": "1:24",
      "end": "1:29",
      "name": "Stomp Dead (1)",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "1:32",
      "name": "Stomp Dead (2)",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "1:34",
      "name": "Stomp Dead (3)",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:36",
      "name": "Stomp Dead (4)",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "1:51",
      "end": "1:54",
      "name": "Illusory Creation",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "1:57",
      "end": "2:00",
      "name": "Creation on Command",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "2:03",
      "end": "2:08",
      "name": "Manifold Flames",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "2:01",
      "end": "2:09",
      "name": "Sunforge [Scorching Fang/Sun's Pinion]",
      "damageType": "Non-Damaging [Magic/Magic]",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:09",
      "name": "Hemitheos's Flare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:13",
      "name": "Nest of Flamevipers",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "2:15",
      "end": "2:20",
      "name": "Tetraflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "2:13",
      "end": "2:21",
      "name": "Sunforge [Scorching Fang/Sun's Pinion]",
      "damageType": "Non-Damaging [Magic/Magic]",
      "damageActor": "Boss"
    },
    {
      "start": "2:15",
      "end": "2:21",
      "name": "Nest of Flamevipers",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:21",
      "name": "Emerging Tetrafalre",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:33",
      "name": "Torch Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "2:33",
      "end": "2:37",
      "name": "Genesis of Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "2:47",
      "end": "2:50",
      "name": "Reforged Reflection",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:57",
      "name": "Snaking Kick",
      "damageType": "Phyiscal",
      "damageActor": "Boss"
    },
    {
      "start": "3:00",
      "end": "3:03",
      "name": "Gorgomanteia",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "3:06",
      "end": "3:09",
      "name": "Into the Shadows",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "3:15",
      "end": "3:23",
      "name": "Petrification (1)",
      "damageType": "Non-Damaging",
      "damageActor": "External Actor"
    },
    {
      "start": "3:26",
      "end": "???",
      "name": "Gorgoneion (1)",
      "damageType": "???",
      "damageActor": "External Actor"
    },
    {
      "start": "",
      "end": "3:27",
      "name": "Eye of the Gorgon (1)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:30",
      "name": "Blood of the Gorgon (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "3:23",
      "end": "3:31",
      "name": "Petrification (2)",
      "damageType": "Non-Damaging",
      "damageActor": "External Actor"
    },
    {
      "start": "3:34",
      "end": "???",
      "name": "Gorgoneion (2)",
      "damageType": "???",
      "damageActor": "External Actor"
    },
    {
      "start": "",
      "end": "3:35",
      "name": "Eye of the Gorgon (2)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:38",
      "name": "Blood of the Gorgon (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "3:42",
      "end": "3:47",
      "name": "Ektothermos",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "4:03",
      "end": "4:06",
      "name": "Conceptual Tetraflare/Octaflare [Stored]",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "4:09",
      "end": "4:12",
      "name": "Fourfold Fires",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "4:13",
      "end": "4:18",
      "name": "Abyssal Fires",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "4:18",
      "end": "4:21",
      "name": "Cthonic Vent",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "???",
      "name": "Vent 1 Resolves",
      "damageType": "???",
      "damageActor": "???"
    },
    {
      "start": "",
      "end": "???",
      "name": "Vent 2 Resolves",
      "damageType": "???",
      "damageActor": "???"
    },
    {
      "start": "4:32",
      "end": "4:37",
      "name": "Tetraflare/Octaflare",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "4:37",
      "name": "Emergent Tetraflare/Octaflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "???",
      "name": "Vent 3 Resolves",
      "damageType": "???",
      "damageActor": "???"
    },
    {
      "start": "4:43",
      "end": "4:51",
      "name": "Sunforge [Scorching Fang/Sun's Pinion]",
      "damageType": "Non-Damaging [Magic/Magic]",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "4:51",
      "name": "Emergent Tetraflare/Octaflare [Stored]",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "4:53",
      "end": "4:58",
      "name": "Flameviper (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:01",
      "name": "Flameviper (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "5:11",
      "end": "5:14",
      "name": "Reforged Reflection",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:20",
      "name": "Footprint",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "5:21",
      "end": "5:26",
      "name": "Quadrupedal Crush/Impact",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "5:30",
      "end": "5:33",
      "name": "Conceptual Tetraflare/Diflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "5:36",
      "end": "5:48",
      "name": "Blazing Footfalls (Indicator)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:49",
      "name": "Trailblaze  (1)",
      "damageType": "???",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:50",
      "name": "Emergent Tetraflare/Diflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:54",
      "name": "Quadrupedal Crush/Impact",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:57",
      "name": "Trailblaze (2)",
      "damageType": "???",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:59",
      "name": "Quadrupedal Crush/Impact",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "6:03",
      "name": "Torch Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "6:12",
      "end": "6:17",
      "name": "Flameviper (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "6:20",
      "name": "Flameviper (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "6:30",
      "end": "6:33",
      "name": "Reforged Reflection",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "6:40",
      "name": "Snaking Kick",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "6:43",
      "end": "6:46",
      "name": "Gorgomanteia",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "6:49",
      "end": "6:52",
      "name": "Into the Shadows",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "6:58",
      "end": "7:07",
      "name": "Petrification (1)",
      "damageType": "Non-Damaging",
      "damageActor": "External Actor"
    },
    {
      "start": "",
      "end": "7:07",
      "name": "Gorgospit (1)",
      "damageType": "???",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:07",
      "name": "Eye of the Gorgon (1)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "7:09",
      "end": "7:12",
      "name": "Gorgoneion",
      "damageType": "???",
      "damageActor": "External Actor"
    },
    {
      "start": "",
      "end": "7:10",
      "name": "Blood of the Gorgon (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "7:11",
      "end": "7:14",
      "name": "Illusory Creation",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:16",
      "name": "Eye of the Gorgon (2)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:16",
      "name": "Blood of the Gorgon (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:25",
      "name": "Gorgospit (2)",
      "damageType": "???",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:25",
      "name": "Crown of the Gorgon",
      "damageType": "???",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:26",
      "name": "Breath of the Gorgon",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "",
      "name": "Byakko (Snake) Timeline below [Collapsable]",
      "damageType": "",
      "damageActor": ""
    },
    {
      "start": "",
      "end": "1:10",
      "name": "Snaking Kick",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "1:14",
      "end": "1:17",
      "name": "Gorgomanteia",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "1:20",
      "end": "1:23",
      "name": "Into the Shadows",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "1:29",
      "end": "1:37",
      "name": "Petrification (1)",
      "damageType": "Non-Damaging",
      "damageActor": "External Actor"
    },
    {
      "start": "1:40",
      "end": "???",
      "name": "Gorgoneion (1)",
      "damageType": "???",
      "damageActor": "External Actor"
    },
    {
      "start": "",
      "end": "1:40",
      "name": "Eye of the Gorgon (1)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "1:43",
      "name": "Blood of the Gorgon (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "1:45",
      "name": "Petrification (2)",
      "damageType": "Non-Damaging",
      "damageActor": "External Actor"
    },
    {
      "start": "1:48",
      "end": "",
      "name": "Gorgoneion (2)",
      "damageType": "???",
      "damageActor": "External Actor"
    },
    {
      "start": "",
      "end": "1:48",
      "name": "Eye of the Gorgon (2)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "1:51",
      "name": "Blood of the Gorgon (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "1:56",
      "end": "2:01",
      "name": "Ektothermos",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "2:16",
      "end": "2:19",
      "name": "Illusiory Creation",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "2:23",
      "end": "2:26",
      "name": "Creation on Command",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "2:26",
      "end": "2:34",
      "name": "Sunforge [Scorching Fang/Sun's Pinion]",
      "damageType": "Non-Damaging [Magic/Magic]",
      "damageActor": "Boss"
    },
    {
      "start": "2:29",
      "end": "2:34",
      "name": "Manifold Flames",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:35",
      "name": "Hemitheos's Flare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:30",
      "name": "Nest of Flamevipers",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "2:41",
      "end": "2:46",
      "name": "Tetraflare",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "2:38",
      "end": "2:46",
      "name": "Sunforge [Scorching Fang/Sun's Pinion]",
      "damageType": "Non-Damaging [Magic/Magic]",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:47",
      "name": "Emergent Tetraflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "2:59",
      "name": "Torch Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "2:58",
      "end": "3:03",
      "name": "Genesis of Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "3:13",
      "end": "3:16",
      "name": "Reforged Reflection",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:22",
      "name": "Footprint",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "3:23",
      "end": "3:28",
      "name": "Rearing Rampage/Uplift (1)",
      "damageType": "Physical/Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:30",
      "name": "Rearing Rampage/Uplift (2)",
      "damageType": "Physical/Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:32",
      "name": "Rearing Rampage/Uplift (3)",
      "damageType": "Physical/Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:34",
      "name": "Rearing Rampage/Uplift (4)",
      "damageType": "Physical/Magic",
      "damageActor": "Boss"
    },
    {
      "start": "3:37",
      "end": "3:42",
      "name": "Stomp Dead (1)",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:44",
      "name": "Stomp Dead (2)",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:46",
      "name": "Stomp Dead (3)",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "3:49",
      "name": "Stomp Dead (4)",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "4:03",
      "end": "4:06",
      "name": "Conceptual Tetraflare/Octaflare [Stored]",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "4:09",
      "end": "4:12",
      "name": "Fourfold Fires",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "4:13",
      "end": "4:18",
      "name": "Abyssal Fires",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "4:18",
      "end": "4:21",
      "name": "Cthonic Vent",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "???",
      "name": "Vent 1 Resolves",
      "damageType": "???",
      "damageActor": "???"
    },
    {
      "start": "",
      "end": "???",
      "name": "Vent 2 Resolves",
      "damageType": "???",
      "damageActor": "???"
    },
    {
      "start": "4:32",
      "end": "4:37",
      "name": "Tetraflare/Octaflare",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "4:37",
      "name": "Emergent Tetraflare/Octaflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "???",
      "name": "Vent 3 Resolves",
      "damageType": "???",
      "damageActor": "???"
    },
    {
      "start": "4:43",
      "end": "4:51",
      "name": "Sunforge [Scorching Fang/Sun's Pinion]",
      "damageType": "Non-Damaging [Magic/Magic]",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "4:51",
      "name": "Emergent Tetraflare/Octaflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "4:53",
      "end": "5:58",
      "name": "Flameviper (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:01",
      "name": "Flameviper (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "5:11",
      "end": "5:14",
      "name": "Reforged Reflection",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:21",
      "name": "Snaking Kick",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "5:24",
      "end": "5:27",
      "name": "Gorgomanteia",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "5:30",
      "end": "5:33",
      "name": "Into the Shadows",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "5:39",
      "end": "5:47",
      "name": "Petrification (1)",
      "damageType": "Non-Damaging",
      "damageActor": "External Actor"
    },
    {
      "start": "",
      "end": "5:47",
      "name": "Gorgospit (1)",
      "damageType": "???",
      "damageActor": "Boss"
    },
    {
      "start": "5:51",
      "end": "5:54",
      "name": "Gorgoneion (1)",
      "damageType": "???",
      "damageActor": "External Actor"
    },
    {
      "start": "",
      "end": "5:51",
      "name": "Blood of the Gorgon (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:51",
      "name": "Eye of the Gorgon (1)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "5:53",
      "end": "5:56",
      "name": "Illusory Creation",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:57",
      "name": "Blood of the Gorgon (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "5:57",
      "name": "Eye of the Gorgon (2)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "6:06",
      "name": "Gorgospit (2)",
      "damageType": "???",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "6:06",
      "name": "Crown of the Gorgon",
      "damageType": "???",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "6:07",
      "name": "Breath of the Gorgon",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "6:15",
      "end": "6:20",
      "name": "Flameviper (1)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "6:24",
      "name": "Flameviper (2)",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "6:33",
      "end": "6:36",
      "name": "Reforged Reflection",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "6:43",
      "name": "Footprint",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "6:44",
      "end": "6:50",
      "name": "Quadrupedal Crush/Impact",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "6:52",
      "end": "6:55",
      "name": "Conceptual Tetraflare/Diflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "6:58",
      "end": "7:10",
      "name": "Blazing Footfalls (Indicator)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:11",
      "name": "Trailblaze (1)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:12",
      "name": "Emergent Tetraflare/Diflare",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:15",
      "name": "Quadrupedal Crush/Impact",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:20",
      "name": "Trailblaze (2)",
      "damageType": "Non-Damaging",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:22",
      "name": "Quadrupedal Crush/Impact",
      "damageType": "Physical",
      "damageActor": "Boss"
    },
    {
      "start": "",
      "end": "7:26",
      "name": "Torch Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "7:34",
      "end": "7:39",
      "name": "Genesis of Flame",
      "damageType": "Magic",
      "damageActor": "Boss"
    },
    {
      "start": "7:47",
      "end": "7:52",
      "name": "Genesis of Flame",
      "damageType": "Death",
      "damageActor": "Boss"
    }
  ];

  constructor() { }

}
