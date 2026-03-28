/** Race archive entries — add `id` + paragraphs as roster grows. */
export type RaceArchiveEntry = {
  id: string;
  name: string;
  instinctLine: string;
  paragraphs: string[];
};

export const RACES_ARCHIVE: RaceArchiveEntry[] = [
  {
    id: "ashborn",
    name: "Ashborn",
    instinctLine: "Ember-Touched • Shadowbound",
    paragraphs: [
      "Humans reshaped by Verasanth's ancient fires. Ember-veins pulse faintly beneath their skin, brightening with emotion. They aren't infernal — they are the city's first adaptation.",
      "The Pale Fires didn't kill the earliest arrivals. They rewrote them. Their bodies learned to vent emotional overload through ember-veins. Their senses sharpened to feel the city's shifts. Their presence affects rooms in ways they don't fully control.",
      "The Ledger has no record of their origin. It began recording after they arrived.",
      "Some believe the city still recognizes them. They are probably right.",
    ],
  },
  {
    id: "dakaridari",
    name: "Dak'Aridari",
    instinctLine: "Shadowbound • Streetcraft",
    paragraphs: [
      "The Dak'Aridari were not born beneath Verasanth. They were left there.",
      "In the lightless strata where stone remembers more than people do, they learned to see without light, to move without sound, and to listen to the city in ways others cannot.",
      "They do not fear the dark. They understand it.",
      "The Ledger records them clearly. The demon cannot navigate without them.",
      "And somewhere beneath the city, there are places that will only open to them.",
    ],
  },
  {
    id: "panaridari",
    name: "Pan'Aridari",
    instinctLine: "Streetcraft • Ember-Touched",
    paragraphs: [
      "The Pan'Aridari were not broken by Verasanth. They were aligned.",
      "Where others resist the city or endure it, the Pan'Aridari move with it — reading its shifting streets, its crowded rhythms, its subtle intentions.",
      "They do not predict the future.",
      "They feel where it is about to go.",
      "The demon cannot read the city's intent. The Pan'Aridari can follow it.",
      "And somewhere within that flow, the city is hiding something it does not want found.",
    ],
  },
  {
    id: "cambral",
    name: "Cambral",
    instinctLine: "Ironblood • Warden",
    paragraphs: [
      "The Cambral were the first to answer the call beneath Verasanth.",
      "They came not for conquest, nor survival — but because something in the deep stone resonated with purpose.",
      "They built what they did not understand.",
      "And now, as the city begins to wake, they are the only ones who can feel where it is beginning to fail.",
      "They did not shape the city.",
      "They gave it form.",
      "And something beneath it is still trying to finish what they started.",
    ],
  },
  {
    id: "silth",
    name: "Silth",
    instinctLine: "Ironblood • Warden",
    paragraphs: [
      "The Silth were not born.",
      "They were made.",
      "Forged through alchemy by those who feared something was wrong in the world — but did not understand what it was.",
      "They were created to stand against a threat no one could name.",
      "And now they stand inside it.",
      "The Coalition that built them has fractured. The people they were made to protect no longer stand together.",
      "And somewhere in Verasanth, the thing they were designed to face is still waiting to be understood.",
    ],
  },
  {
    id: "human",
    name: "Human",
    instinctLine: "All Instincts",
    paragraphs: [
      "Adaptable and unpredictable, shaped by choice rather than lineage.",
      "In a city that reshapes everyone who enters it, humans are the ones who walked in without being pushed.",
      "They are not here because something brought them. They are here because they found a door that shouldn't exist — and opened it.",
      "Every other race in Verasanth was defined by something that happened to them.",
      "Humans are still deciding what defines them.",
      "That makes them the most dangerous thing in the city.",
    ],
  },
  {
    id: "malaridari",
    name: "Mal'Aridari",
    instinctLine: "Hearthborn • Warden",
    paragraphs: [
      "The Mal'Aridari were not taken by Verasanth. They came because something in the world was hurting.",
      "Where others endure the city or learn to navigate it, the Mal'Aridari listen for wounds — and answer them.",
      "They do not see Verasanth as a prison.",
      "They see it as something that needs care.",
      "Something older than the city sent them here. It does not understand what they walked into.",
      "Neither do they.",
      "But they came anyway.",
    ],
  },
  {
    id: "darmerians",
    name: "Darmerians",
    instinctLine: "Hearthborn • Ironblood",
    paragraphs: [
      "The Darmerians come from a coast that no longer exists.",
      "They did not flee the sea.",
      "They followed the wound that made it betray them.",
      "Broad-shouldered, loud-hearted, marked with faint salt-crystal patterns on their skin — they carry the storm in their blood. Not as a threat. As a reminder.",
      "The same force that drowned their coast created Verasanth.",
      "They don't know that yet.",
      "But they followed the pressure here. And they are not leaving until they understand what broke their world.",
    ],
  },
];
