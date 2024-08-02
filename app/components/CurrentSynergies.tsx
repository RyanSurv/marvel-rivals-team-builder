import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CurrentSynergies({
  synergies,
}: {
  synergies: Synergy[];
}) {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="uppercase font-bold tracking-wide text-sm">Synergies</h1>

      {synergies.length === 0 && (
        <h1 className="text-lg italic">Select heroes to view synergies</h1>
      )}

      {synergies.map((synergy) => {
        return (
          <Card key={synergy.id} className="flex gap-8 max-w-3xl p-2">
            <Image
              className="cursor-pointer hover:shadow-lg hover:scale-110 transition"
              src={`/synergy-icons/${synergy.title
                .toLowerCase()
                .replace(/ /g, "_")}.png`}
              alt={synergy.title}
              height={164}
              width={90}
            />
            <div>
              <CardHeader>
                <CardTitle>{synergy.title}</CardTitle>
                <CardDescription>{synergy.description}</CardDescription>
              </CardHeader>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
