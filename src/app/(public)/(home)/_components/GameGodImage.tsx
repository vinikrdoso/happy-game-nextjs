import Image from "next/image";

export function GameGodImage() {
  return (
    <div className="relative w-full h-64 lg:h-96">
      <Image
        src="/img/game-god.png"
        alt="controle"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
