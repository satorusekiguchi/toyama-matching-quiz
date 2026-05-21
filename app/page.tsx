import Link from "next/link";
import { CategoryIcon } from "@/components/CategoryIcon";
import { HeroVisual } from "@/components/HeroVisual";
import { PageShell } from "@/components/PageShell";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <PageShell>
      <main className="space-y-8 px-5 py-12 md:space-y-10 md:py-16">
        <section className="grid items-center gap-6 md:grid-cols-[1.2fr_1fr]">
          <header className="space-y-5">
            <p className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-xs font-bold tracking-[0.16em] text-sky-700 uppercase ring-1 ring-sky-100">
              Toyama Migration Quiz
            </p>
            <h1 className="text-3xl leading-tight font-bold tracking-tight text-zinc-900 md:text-5xl">
              あなたと富山の相性は？
              <span className="mt-1 block text-sky-600">10問でわかる移住診断</span>
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-600 md:text-base">
              海鮮、自然、子育て、住環境。楽しく答えるだけで、富山で暮らすリアルな魅力が見えてきます。
            </p>
            <Link
              href="/quiz"
              className={buttonVariants({
                className:
                  "mt-1 h-12 rounded-full bg-sky-600 px-8 text-base font-bold text-white hover:bg-sky-700",
              })}
            >
              診断をはじめる
            </Link>
          </header>
          <HeroVisual />
        </section>

        <section className="grid gap-3 md:grid-cols-3">
          <Card className="border-zinc-200 bg-white shadow-sm">
            <CardContent className="space-y-2 p-5">
              <CategoryIcon icon="compass" className="size-5 text-sky-600" />
              <h2 className="text-sm font-bold text-zinc-900">まずは相性チェック</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                難しい入力なし。直感で10問に答えるだけ。
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-sm">
            <CardContent className="space-y-2 p-5">
              <CategoryIcon icon="sparkles" className="size-5 text-violet-600" />
              <h2 className="text-sm font-bold text-zinc-900">富山の魅力を自然に発見</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                子育て・住環境・食の強みを楽しく理解できます。
              </p>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white shadow-sm">
            <CardContent className="space-y-2 p-5">
              <CategoryIcon icon="share2" className="size-5 text-emerald-600" />
              <h2 className="text-sm font-bold text-zinc-900">結果をSNSでシェア</h2>
              <p className="text-sm leading-relaxed text-zinc-600">
                X・Threads・LINEにワンタップで共有可能です。
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </PageShell>
  );
}
