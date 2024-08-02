import HeroIcon from "@/app/components/HeroIcon";

import { heroes } from "@/lib/consts";

const vanguards: Hero[] = [];
const duelists: Hero[] = [];
const strategists: Hero[] = [];

heroes.forEach((hero) => {
  if (hero.role === "vanguard") vanguards.push(hero);
  else if (hero.role === "duelist") duelists.push(hero);
  else strategists.push(hero);
});

export default function HeroesList({
  addHero,
}: {
  addHero: (hero: Hero) => any;
}) {
  return (
    <div className="space-y-12">
      <RoleList title="Vanguards" heroes={vanguards} addHero={addHero} />
      <RoleList title="Duelists" heroes={duelists} addHero={addHero} />
      <RoleList title="Strategists" heroes={strategists} addHero={addHero} />
    </div>
  );
}

function RoleList({
  title,
  heroes,
  addHero,
}: {
  title: string;
  heroes: Hero[];
  addHero: (hero: Hero) => any;
}) {
  return (
    <div>
      <h1 className="uppercase font-bold tracking-wide text-sm mb-2">
        {title}
      </h1>
      <div className="flex flex-wrap gap-3">
        {heroes.map((hero) => (
          <div key={hero.id} onClick={() => addHero(hero)}>
            <HeroIcon hero={hero.name} />
          </div>
        ))}
      </div>
    </div>
  );
}
