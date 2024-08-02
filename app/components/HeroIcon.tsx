import Image from "next/image";

export default function HeroIcon({ hero }: { hero: string }) {
  return (
    <Image
      className="cursor-pointer hover:shadow-lg hover:scale-110 transition"
      src={`/hero-icons/${hero.toLowerCase().replace(/ /g, "_")}.png`}
      alt={hero}
      height={164}
      width={90}
    />
  );
}
