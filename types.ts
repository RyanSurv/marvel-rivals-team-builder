type Hero = {
  id: number;
  name: string;
  role: "vanguard" | "duelist" | "strategist";
};

type Synergy = {
  id: number;
  title: string;
  description: string;
  heroes: Number[]; // Hero ID
};
