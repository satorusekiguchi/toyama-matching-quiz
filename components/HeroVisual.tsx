import Image from "next/image";
import { CategoryIcon } from "@/components/CategoryIcon";

export function HeroVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src="/toyama-hero-photo.png"
          alt="立山連峰と富山市街の実写風景"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
      </div>

      <div className="grid grid-cols-3 border-t border-zinc-100">
        <div className="flex flex-col items-center gap-1.5 px-3 py-3 text-center">
          <CategoryIcon icon="mountain" className="size-4 text-emerald-600" />
          <p className="text-xs font-semibold text-zinc-700">自然</p>
        </div>
        <div className="flex flex-col items-center gap-1.5 border-x border-zinc-100 px-3 py-3 text-center">
          <CategoryIcon icon="fish" className="size-4 text-cyan-600" />
          <p className="text-xs font-semibold text-zinc-700">海鮮</p>
        </div>
        <div className="flex flex-col items-center gap-1.5 px-3 py-3 text-center">
          <CategoryIcon icon="house" className="size-4 text-amber-600" />
          <p className="text-xs font-semibold text-zinc-700">住環境</p>
        </div>
      </div>
    </div>
  );
}
