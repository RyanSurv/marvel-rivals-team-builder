const vanguard: Hero[] = [];

const duelists: Hero[] = [
  {
    id: 1,
    name: "Black Panther",
    role: "duelist",
  },
  {
    id: 2,
    name: "Doctor Strange",
    role: "vanguard",
  },
  {
    id: 3,
    name: "Groot",
    role: "vanguard",
  },
  {
    id: 4,
    name: "The Punisher",
    role: "duelist",
  },
  {
    id: 5,
    name: "Hela",
    role: "duelist",
  },
  {
    id: 6,
    name: "Iron Man",
    role: "duelist",
  },
  {
    id: 7,
    name: "Loki",
    role: "strategist",
  },
  {
    id: 8,
    name: "Rocket Racoon",
    role: "strategist",
  },
  {
    id: 9,
    name: "Mantis",
    role: "strategist",
  },
  {
    id: 10,
    name: "Peni Parker",
    role: "vanguard",
  },
  {
    id: 11,
    name: "Magneto",
    role: "vanguard",
  },
  {
    id: 12,
    name: "Magik",
    role: "duelist",
  },
  {
    id: 13,
    name: "Spider-Man",
    role: "duelist",
  },
  {
    id: 14,
    name: "Venom",
    role: "vanguard",
  },
  {
    id: 15,
    name: "Scarlet Witch",
    role: "duelist",
  },
  {
    id: 16,
    name: "Star-Lord",
    role: "duelist",
  },
  {
    id: 17,
    name: "Storm",
    role: "duelist",
  },
  {
    id: 18,
    name: "Luna Snow",
    role: "strategist",
  },
  {
    id: 19,
    name: "Hulk",
    role: "vanguard",
  },
  {
    id: 20,
    name: "Namor",
    role: "duelist",
  },
  {
    id: 21,
    name: "Adam Warlock",
    role: "strategist",
  },
];

const strategist: Hero[] = [];

export const heroes: Hero[] = [...vanguard, ...duelists, ...strategist];

export const synergies: Synergy[] = [
  {
    id: 1,
    title: "Ragnorak Rebirth",
    description:
      "When Hela lands a final hit in defeating an enemy, she can instantly resurrect Loki and Thor in the respawn phase, or grant bonus health if still alive.",
    heroes: [7, 5],
  },
  {
    id: 2,
    title: "Metallic Chaos",
    description:
      "Scarlet Witch can infuse Chaos Energy into Magneto to enchant his greatsword. Upon receiving the Chaos Energy, Magneto can unleash its full force, striking down enemies with his enchanted greatsword.",
    heroes: [11, 15],
  },
  {
    id: 3,
    title: "Planet X Pals",
    description:
      "Jeff the Land Shark and Rocket Racoon can ride on Groot's shoulders, receiving Damage Reduction.",
    heroes: [8, 3],
  },
  {
    id: 4,
    title: "Symbiote Bond",
    description:
      "Venom shares a part of his symbiotes with Spider-Man and Peni Parker, activating their symbiote abilities. Spider-Man and Peni Parker can convert the symbiotes into explosive spikes that inflict harm on nearby enemies and relentlessly drive them back.",
    heroes: [14, 13, 10],
  },
  {
    id: 5,
    title: "Gamma Charge",
    description:
      "Hulk charges Doctor Strange and Iron Man with gamma radiation. When doctor Strange uses Maelstrom of Madness, he unleashes excess gamma energy. When Iron Man uses Armor Overdrive, he will initiate a gamma upgrade.",
    heroes: [19, 2, 6],
  },
  {
    id: 6,
    title: "Ammo Overload",
    description:
      "Rocket Racoon throws an Ammo Overload Device in the target direction. Upon entering the device's range, The Punisher receives the buffs of Infinite Ammo and Faster Firing.",
    heroes: [4, 9],
  },
  {
    id: 7,
    title: "Dimensional Shortcut",
    description:
      "Magik and Black Panther can activate a Limbo Disc and use the portal.",
    heroes: [1, 12],
  },
  {
    id: 8,
    title: "Guardian Revival",
    description:
      "Adam Warlock enhances the rebirth power of Star-Lord and Mantis, granting them the power of cocooned revival.",
    heroes: [21, 16, 9],
  },
  {
    id: 9,
    title: "Chilling Charisma",
    description:
      "Luna Snow infuses ice energy into Namor and Jeff the Land Shark, who then can tap into the ice energy to power up abilities at will.",
    heroes: [20, 18],
  },
  {
    id: 10,
    title: "Voltaic Union",
    description:
      "Thor infuses Thorforce into Storm, granting her an electrifying enhancement. With an electrifying enhancement, Storm can unleash a lightning barrage.",
    heroes: [17],
  },
];
