import HeroIcon from "@/app/components/HeroIcon";

export default function CurrentTeam({
  team,
  removeHero,
}: {
  team: Hero[];
  removeHero: (hero: Hero) => any;
}) {
  const vanguards = team.filter((hero) => hero.role === "vanguard");
  const duelists = team.filter((hero) => hero.role === "duelist");
  const strategists = team.filter((hero) => hero.role === "strategist");

  return (
    <div>
      <div>
        <div className="mb-4">
          <h1 className="uppercase font-bold tracking-wide text-sm">
            Your Team
          </h1>
          <p className="text-xs text-muted-foreground">
            {vanguards.length} vanguards, {duelists.length} duelists, and{" "}
            {strategists.length} strategists
          </p>
        </div>

        {team.length ? (
          <div className="flex flex-wrap gap-3">
            {team.map((hero) => (
              <div key={hero.id} onClick={() => removeHero(hero)}>
                <HeroIcon hero={hero.name} />
              </div>
            ))}
          </div>
        ) : (
          <h1 className="text-lg italic">Select a hero to get started</h1>
        )}
      </div>
    </div>
  );
}
