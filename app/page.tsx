"use client";

import { useState, useEffect } from "react";

import { synergies as allSynergies } from "@/lib/consts";

import { Separator } from "@/components/ui/separator";

import HeroesList from "@/app/components/HeroesList";
import CurrentTeam from "@/app/components/CurrentTeam";
import CurrentSynergies from "./components/CurrentSynergies";

export default function Home() {
  const [team, setTeam] = useState<Hero[]>([]);
  const [synergies, setSynergies] = useState<Synergy[]>([]);

  const addHero = (hero: Hero) => {
    if (team.length >= 6)
      return {
        success: false,
        message: "Team capacity reached",
      };

    if (team.some((h) => h.id === hero.id))
      return {
        success: false,
        message: "Hero alredy in team",
      };

    setTeam([...team, hero]);
  };

  const removeHero = (hero: Hero) => {
    if (team.length <= 0)
      return {
        success: false,
        message: "Team minimum reached",
      };

    setTeam(team.filter((h) => h.id !== hero.id));
  };

  useEffect(() => {
    checkForSynergies();
  }, [team]);

  const checkForSynergies = () => {
    const newSynergies: Synergy[] = [];

    allSynergies.forEach((s) => {
      const heroesInTeam = team.filter((t) => s.heroes.includes(t.id));
      if (heroesInTeam.length >= 2) newSynergies.push(s);
    });

    setSynergies(newSynergies);
  };

  return (
    <div className="h-screen bg-background p-4">
      <div className="flex justify-between gap-12">
        <div className="flex-grow">
          <HeroesList addHero={addHero} />
          <Separator className="my-10" />
          <CurrentTeam team={team} removeHero={removeHero} />
        </div>

        <CurrentSynergies synergies={synergies} />
      </div>
    </div>
  );
}
